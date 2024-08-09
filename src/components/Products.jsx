import React, { useState, useEffect } from 'react';
import axios from 'axios';

const dropDownOptions = [
  { label: "Recommended", value: "Recommended" },
  { label: "Newest First", value: "Newest First" },
  { label: "Popular", value: "Popular" },
  { label: "High to Low", value: "High to Low" },
  { label: "Low to High", value: "Low to High" },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState({});
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      });
  }, []);

  const toggleDropdown = (productId) => {
    setDropdownVisible(prevState => ({
      ...prevState,
      [productId]: !prevState[productId]
    }));
  };

  if (error) {
    return <div className="text-red-500">{error}</div>; // Display error message if there's an issue
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg relative">
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
          <h2 className="text-lg font-semibold">{product.title}</h2>
         
          
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
            Sign in to add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
