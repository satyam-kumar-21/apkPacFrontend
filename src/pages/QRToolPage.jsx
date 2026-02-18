import React from "react";
import TopFreeAppsList from "../components/TopFreeAppsList";
import AdsSection from "../components/AdsSection";

const faqs = [
  {
    q: "What Is a QR Code and How Does It Work?",
    a: "A QR (Quick Response) Code is a type of barcode that can be scanned using a smart device or a QR Code reader. It encodes information such as a web URL, text, contact information, or other sorts of data. When you scan a QR Code using your device's camera or a QR Code reader, the encoded information is instantly displayed, or the corresponding website or application is opened."
  },
  {
    q: "How Do I Use Your Online QR Code Scanner?",
    a: "Our online QR Code scanner is easy to use. First, select the function by clicking the corresponding button on the top of the web page. If you're using a smart device, you may either use the device camera and point to the code or click 'Upload an Image' to upload the code image. Once the QR Code is scanned, the encoded information will be displayed."
  },
  {
    q: "How Can I Create a QR Code Using Your Website?",
    a: "To create a QR Code, select the function by clicking the 'Create a code' button on the top of this web page. Enter the URL, text, or other data you'd like to encode into the provided input area. Click 'Generate' and your QR Code will be created instantly. You can then download and use the QR Code as needed."
  },
  {
    q: "Is There a Limit to the Number of QR Codes I Can Create or Scan?",
    a: "Currently, there is no limit to the number of QR Codes you can create or scan using our website. We aim to provide a seamless, unrestricted user experience. However, we reserve the right to implement usage limits in the future if necessary."
  },
  {
    q: "Are the QR Codes Generated on Your Website Compatible with All QR Code Readers?",
    a: "Yes, the QR Codes generated on our website should be compatible with any standard QR Code reader. However, the ability to read a QR Code can sometimes depend on the quality of the reader and the condition of the QR Code itself. If you're having trouble scanning a QR Code generated on our site, please try to regenerate or rescan it."
  }
];

const QRToolPage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">QR Code Scanner & Generator Online Free</h1>
      <p className="text-lg text-gray-700 mb-4">No cost but only efficiency<br />Fast and secure<br />No downloads, no hassle</p>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <button className="bg-gradient-to-r from-green-600 to-green-400 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:from-green-700 hover:to-green-500 transition text-lg flex-1">Scan a Code</button>
        <button className="bg-gradient-to-r from-green-100 to-green-300 text-green-800 font-bold px-8 py-4 rounded-2xl shadow-lg hover:from-green-200 hover:to-green-400 transition text-lg flex-1">Create a Code</button>
      </div>
      <AdsSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-8">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-green-700 mb-2">1</span>
          <h3 className="font-semibold text-lg mb-1">Scan or Create</h3>
          <p className="text-gray-600 text-sm text-center">Select the function you need: read or generate.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-green-700 mb-2">2</span>
          <h3 className="font-semibold text-lg mb-1">Follow the Guide</h3>
          <p className="text-gray-600 text-sm text-center">Directly scan or upload an image for decoding; or enter the content for your own code.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
          <span className="text-3xl font-bold text-green-700 mb-2">3</span>
          <h3 className="font-semibold text-lg mb-1">Get the Result</h3>
          <p className="text-gray-600 text-sm text-center">Receive URLs, texts or other content after decoding; or get freshly made QR codes.</p>
        </div>
      </div>
      <AdsSection />
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
      <div className="mb-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold text-lg text-green-700 mb-1">{faq.q}</h3>
            <p className="text-gray-700 text-base">{faq.a}</p>
          </div>
        ))}
      </div>
      <AdsSection />
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Apps</h2>
      <TopFreeAppsList />
    </div>
  );
};

export default QRToolPage;
