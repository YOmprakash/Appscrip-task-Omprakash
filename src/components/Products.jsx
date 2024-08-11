import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChevronDown, FaChevronUp, FaLessThan } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';

const dropDownOptions = [
  { label: "Recommended", value: "Recommended" },
  { label: "Newest First", value: "Newest First" },
  { label: "Popular", value: "Popular" },
  { label: "High to Low", value: "High to Low" },
  { label: "Low to High", value: "Low to High" },
];

const filterGroups = {
  "Ideal For": [
    { label: "Men", value: "men" },
    { label: "Women", value: "women" },
  ],
  "Occasion": [
    { label: "Casual", value: "casual" },
    { label: "Formal", value: "formal" },
  ],
  "Fabric": [
    { label: "Cotton", value: "cotton" },
    { label: "Polyester", value: "polyester" },
  ],
  "Pattern": [
    { label: "Solid", value: "solid" },
    { label: "Striped", value: "striped" },
  ],
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dropdownValue, setDropdownValue] = useState(dropDownOptions[0].value);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [error, setError] = useState(null);
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (index) => {
    setOpenFilter(openFilter === index ? null : index);
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        const productData = response.data;
        setProducts(productData);
        setFilteredProducts(productData);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedFilters]);

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
    // Implement sorting logic here if needed
  };

  const handleFilterChange = (group, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [group]: value,
    }));
  };

  const filterProducts = () => {
    let filtered = products;

    Object.keys(selectedFilters).forEach((group) => {
      const filterValue = selectedFilters[group];
      if (filterValue) {
        filtered = filtered.filter(
          (product) => product[group.toLowerCase()] === filterValue
        );
      }
    });

    setFilteredProducts(filtered);
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col justify-center mx-4 md:mx-11">
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-b border-solid border-gray-300 py-2 md:py-8 md:my-4">
        <div className="flex items-center gap-8 mb-4 md:mb-0">
          <p className="text-[#252020] font-bold font-[Inter] hidden md:block">
            {filteredProducts.length} Items
          </p>
          <div
            onClick={toggleFilters}
            className="md:flex items-center hidden cursor-pointer"
          >
            <FaLessThan
              className={`text-[#888792] text-[10px] transition-transform ${
                filtersVisible ? '' : 'rotate-90'
              }`}
            />
            <p
              className={`border-b border-solid text-sm text-[#888792] uppercase ml-1 ${
                filtersVisible ? '' : 'hidden'
              }`}
            >
              Hide Filters
            </p>
            <p
              className={`border-b border-solid text-sm text-[#888792] uppercase ml-1 ${
                filtersVisible ? 'hidden' : ''
              }`}
            >
              Show Filters
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={toggleFilters}
            className="outline-none rounded-lg py-2 px-4 font-bold flex md:hidden"
          >
            {filtersVisible ? 'Hide Filters' : 'Show Filters'}
          </button>
          <select
            className="outline-none rounded-lg py-2 px-4 font-bold"
            value={dropdownValue}
            onChange={handleDropdownChange}
          >
            {dropDownOptions.map((option) => (
              <option
                className="text-[#252020]"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        {filtersVisible && (
          <div className="flex flex-col gap-4 mb-8 md:mr-8 w-full md:w-[300px] p-4 md:block">
            {Object.entries(filterGroups).map(([group, options], index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer py-2 px-4 border rounded-lg shadow"
                  onClick={() => toggleFilter(index)}
                >
                  <span className="font-bold">{group}</span>
                  {openFilter === index ? (
                    <FaChevronUp className="text-[#252020]" />
                  ) : (
                    <FaChevronDown className="text-[#252020]" />
                  )}
                </div>
                {openFilter === index && (
                  <div className="mt-2 px-4">
                    {options.map((option, i) => (
                      <div
                        key={i}
                        className="py-2 text-sm border-b last:border-none"
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div
          className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-grow gap-6 my-4 ${
            filtersVisible ? '' : 'justify-center'
          }`}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg relative h-auto flex flex-col items-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[200px] sm:max-w-[150px] h-[250px] object-contain mb-4"
              />
              <h2 className="text-lg font-bold uppercase text-[#252020] text-center px-2">
                {product.title}
              </h2>
              <div className="flex justify-between items-center w-full px-2">
                <button className="text-sm text-[#888792] text-center">
                  Sign In or create an account to see pricing
                </button>
                <CiHeart />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
