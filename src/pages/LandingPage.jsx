import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex justify-center items-center flex-col text-center mt-10">
            <p
             
             
              className="text-3xl md:text-[50px] uppercase tracking-[1.00px] !text-[#252020] font-normal"
            >
              DISCOVER OUR PRODUCTS
            </p>
            <p
              
              className="max-w-[600px] text-center text-lg text-[20px] leading-8 !text-[#252020] font-normal mt-4 "
            >
              Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
              scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
              dolor.
            </p>
          </div>
          <Products/>
          <Footer/>
    </div>
  )
}

export default LandingPage