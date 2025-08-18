import { FaEnvelope, FaPhone } from "react-icons/fa";

const SupportBot = () => {
  return (
    <>
      {/* Left Side - Email */}
      <div className="fixed bottom-[100px] left-5 z-50 flex flex-col items-center space-y-1">
        <a href="mailto:support@cktreservetrust.online">
          <button className="p-3 rounded-full shadow-lg bg-blue-800 hover:bg-blue-700 text-white">
            <FaEnvelope />
          </button>
        </a>
        <span className="text-sm text-black font-bold">Email Us</span>
      </div>

      {/* Right Side - Phone */}
      <div className="fixed bottom-[100px] right-5 z-50 flex flex-col items-center space-y-1">
        {/* For calling */}
        {/* <a href="tel:+971501234567"> */}
        
        {/* For SMS / Messaging app */}
        <a href="sms:+15034323149">
          <button className="p-3 rounded-full shadow-lg bg-blue-600 hover:bg-blue-500 text-white">
            <FaPhone />
          </button>
        </a>
        {/* <span className="text-sm text-black font-bold">Message Us</span> */}
      </div>
    </>
  );
};

export default SupportBot;
