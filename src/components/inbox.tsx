import  { useState } from "react";
import { MailWarning, ShieldAlert, CreditCard, Info, CheckCircle } from "lucide-react";
import BottomNav from "../pages/stickyNav";
import BottomNav2 from "../pages/bottomnav2";
import SupportBot from "./support";

type Message = {
  id: number;
  icon: JSX.Element;
  subject: string;
  preview: string;
  full: string;
  date: string;
  unread: boolean;
};

const messages: Message[] = [
  {
    id: 1,
    icon: <ShieldAlert className="text-red-700" size={24} />,
    subject: "Transfer Restricted: Legal Fee Clearance Required",
    preview:
      "Your account requires settlement of the pending legal fee before transfers can be enabled.",
    full: `🚫 Transfer Access Temporarily Restricted – Legal Compliance Required.

Estimado cliente, your Citi Bank USA & México account is currently on hold pending legal clearance.  
A legal fee of **MXN 4,713,800** (approx. **USD 259,000**) is required to activate transfer functionality.  
This charge is part of the standard legal and compliance process under Mexican banking regulations for fund authorization.`,
    date: "July 5, 2025",
    unread: true,
  },
  {
    id: 2,
    icon: <MailWarning className="text-yellow-600" size={24} />,
    subject: "Important: Account Verification Pending",
    preview:
      "We noticed your account verification is not yet complete. Please update your details soon.",
    full: `Hola, we noticed your Citi Bank USA & México profile verification is still incomplete.  
Kindly log in and upload the required documents to keep your services active and secure.  
Gracias for your quick attention to this matter.`,
    date: "July 3, 2025",
    unread: true,
  },
  {
    id: 3,
    icon: <CreditCard className="text-green-700" size={24} />,
    subject: "Card Issuance Notice",
    preview:
      "Your virtual debit card has been approved and will be issued shortly.",
    full: `¡Buenas noticias! Your Citi Bank USA & México virtual debit card has been approved.  
It will be issued to your account within 2–3 business days.  
We appreciate your confianza (trust) in our banking service.`,
    date: "July 1, 2025",
    unread: true,
  },
  {
    id: 4,
    icon: <Info className="text-blue-600" size={24} />,
    subject: "New Feature: Cross-Border Spending Analytics",
    preview:
      "Track your spending between the U.S. and México with our new analytics tool.",
    full: `Discover a new way to understand your spending with our Cross-Border Analytics feature.  
Your Citi Bank USA & México dashboard now lets you explore detailed insights into your transactions across both countries.  
Simple, clear, and muy útil for your finances.`,
    date: "June 29, 2025",
    unread: false,
  },
  {
    id: 5,
    icon: <CheckCircle className="text-green-600" size={24} />,
    subject: "Your Profile Has Been Verified",
    preview:
      "Thank you for completing verification. Your account now has full access.",
    full: `We’re pleased to inform you that your Citi Bank USA & México profile verification has been successfully completed.  
You now have full access to all features — felicidades! and thank you for choosing us.`,
    date: "June 25, 2025",
    unread: false,
  },
  {
    id: 5,
    icon: <CheckCircle className="text-green-600" size={24} />,
    subject: "Notification As per Mexican Real Estate Law,",
    preview:
      "Notification As per Mexican Real Estate Law,",
    full: `Notification:
As per Mexican Real Estate Law, a 5% estate transfer fee has been applied.
$415,000 deducted from your savings account — $85,000 MXN outstanding for completion.`,
    date: "June 25, 2025",
    unread: false,
  },
];



const InboxPage = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);


  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-red-800 text-center"> Inbox </h1>

        <ul className="space-y-4">
          {messages.map((msg) => (
            <li
              key={msg.id}
              onClick={() => setSelectedMessage(msg)}
              className={`cursor-pointer border rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-start gap-4 bg-white ${
                msg.unread ? "border-l-4 border-red-600 bg-red-50/30" : "border-gray-200"
              }`}
            >
              <div className="mt-1">{msg.icon}</div>
              <div className="flex-1">
                <h3 className={`text-base font-semibold ${msg.unread ? "text-red-700" : "text-gray-800"}`}>
                  {msg.subject}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{msg.preview}</p>
              </div>
              <div className="text-sm text-gray-500 text-right">
                <p>{msg.date}</p>
                {msg.unread && (
                  <span className="text-xs text-white bg-red-600 px-2 py-0.5 rounded-full ml-1">
                    Unread
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Message Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              &times;
            </button>
            <div className="mb-3">{selectedMessage.icon}</div>
            <h2 className="text-xl font-bold text-red-700 mb-2">{selectedMessage.subject}</h2>
            <p className="text-gray-700 text-sm whitespace-pre-line">{selectedMessage.full}</p>
            <p className="text-xs text-gray-400 mt-4">{selectedMessage.date}</p>
          </div>
        </div>
      )}

      <BottomNav />
      <BottomNav2 />
      <SupportBot />
    </>
  );
};

export default InboxPage;
