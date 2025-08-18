// promotions.tsx
import img1 from '../assets/pos.jpg'
import img2 from '../assets/pos2.jpg'
import img3 from '../assets/pos3.jpg'




const Promotions = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
  {/* Checking Accounts */}
  <div className="border rounded-lg p-4 shadow-sm">
    <h4 className="text-xs font-semibold text-gray-600 uppercase">
      Citi® Checking Accounts – UAE
    </h4>
    <img
      src={img1}
      alt="Simplified Banking"
      className="rounded-md mt-3"
    />
    <h3 className="mt-4 text-lg font-bold text-gray-900">
      Simplified Banking
    </h3>
    <p className="mt-2 text-gray-600 text-sm">
      Citi mobile banking in Dubai allows you to manage your money,
      transfer in AED, and pay friends instantly – anytime, anywhere.
    </p>
    <button className="mt-4 px-5 py-2 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-700">
      Learn More
    </button>
  </div>

  {/* Savings Accounts */}
  <div className="border rounded-lg p-4 shadow-sm">
    <h4 className="text-xs font-semibold text-gray-600 uppercase">
      Citi® Savings Accounts – UAE
    </h4>
    <img
        src={img2}
      alt="Save More"
      className="rounded-md mt-3"
    />
    <h3 className="mt-4 text-lg font-bold text-gray-900">
      Save More, Earn More
    </h3>
    <p className="mt-2 text-gray-600 text-sm">
      Start saving with confidence in AED and enjoy competitive interest
      rates tailored for residents of Dubai and across the UAE.
    </p>
    <button className="mt-4 px-5 py-2 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-700">
      Learn More
    </button>
  </div>

  {/* Credit Cards */}
  <div className="border rounded-lg p-4 shadow-sm">
    <h4 className="text-xs font-semibold text-gray-600 uppercase">
      Citi® Credit Cards – UAE
    </h4>
    <img
        src={img3}
      alt="Credit Cards"
      className="rounded-md mt-3"
    />
    <h3 className="mt-4 text-lg font-bold text-gray-900">
      Explore Citi® Credit Cards
    </h3>
    <p className="mt-2 text-gray-600 text-sm">
      Whether you’re looking for cashback in Dirhams, travel rewards, or
      premium lifestyle benefits, Citi has the right card for your needs
      in Dubai.
    </p>
    <button className="mt-4 px-5 py-2 bg-blue-800 text-white rounded-md font-medium hover:bg-blue-700">
      Learn More
    </button>
  </div>
</div>

    </section>
  );
};

export default Promotions;
