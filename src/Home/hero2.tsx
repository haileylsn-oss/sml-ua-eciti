
// import { Link } from "react-router-dom";
import { FaCreditCard, FaUniversity, FaHome, FaMoneyBill, FaChartLine, FaTags } from "react-icons/fa";
import card1 from "../assets/card1.png";


const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-10 px-6 md:px-16 mt-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side - Promo */}
       <div>
  <h4 className="text-xs font-semibold text-gray-600 uppercase">
    Citi® UAE Banking
  </h4>
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
    Discover the right Citi® banking solutions in Dubai
  </h1>
  <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md">
    From world-class Credit Cards to Personal Loans, Wealth Management, and
    International Banking, Citi UAE is here to support your financial goals in
    Dubai and beyond.
  </p>
  <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-700">
    Explore Our Products
  </button>

  {/* Cards / Products */}
  <div className="flex flex-wrap gap-4 mt-6">
    <img src={card1} alt="Citi UAE Card" className="rounded-md shadow-md" />
  </div>
</div>


      
      </div>

      {/* Bottom Quick Links */}
      <div className="mt-12 bg-white rounded-lg shadow-sm p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        <div className="flex flex-col items-center">
          <FaCreditCard size={28} className="text-blue-600 mb-2" />
          <span className="text-sm font-semibold text-blue-700">Credit Cards</span>
        </div>
        <div className="flex flex-col items-center">
          <FaUniversity size={28} className="text-blue-600 mb-2" />
          <span className="text-sm font-semibold text-blue-700">Checking Solutions</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHome size={28} className="text-blue-600 mb-2" />
          <span className="text-sm font-semibold text-blue-700">Mortgage</span>
        </div>
        <div className="flex flex-col items-center">
          <FaMoneyBill size={28} className="text-blue-600 mb-2" />
          <span className="text-sm font-semibold text-blue-700">Personal Loans</span>
        </div>
        <div className="flex flex-col items-center">
          <FaChartLine size={28} className="text-blue-600 mb-2" />
          <span className="text-sm font-semibold text-blue-700">Investing Options</span>
        </div>
        <div className="flex flex-col items-center">
          <FaTags size={28} className="text-blue-600 mb-2" />
          <span className="text-sm font-semibold text-blue-700">Small Business</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
