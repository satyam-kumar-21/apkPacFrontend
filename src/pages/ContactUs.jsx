import React from "react";
import AdsSection from "../components/AdsSection";

const ContactUs = () => (
  <div className="w-full max-w-4xl mx-auto py-8 px-4">
    <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 text-center">Contact Us</h1>
    <p className="text-gray-700 mb-4 text-sm text-center">We value your feedback and are here to assist with any questions, suggestions, or concerns you may have about our website, content, or app listings. SmartAppInfo.com is committed to maintaining transparency, user trust, and a safe browsing experience for all visitors.</p>
    <div className="my-8"><AdsSection /></div>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">📩 Contact Form</h2>
      <p>If you prefer a quick and convenient way to reach us, please submit your details through our professional contact form:</p>
      <form className="bg-gray-50 rounded-lg p-4 shadow-md mt-4">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Full Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Enter your full name" required />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Email Address</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="Your email address" required />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Subject</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Subject" required />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Message</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="Describe your question or concern" required></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Attachment (Optional)</label>
          <input type="file" className="w-full" />
        </div>
        <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded font-semibold">Send Message</button>
        <p className="text-xs text-gray-500 mt-2">Your request will be reviewed within 1–2 business days.</p>
      </form>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">📧 Email Support</h2>
      <p>For general inquiries, feedback, corrections, or content-related questions, contact us at:</p>
      <p className="font-semibold text-indigo-700">support@smartappinfo.com</p>
      <p>We typically respond within 1–2 business days.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">🛠 Report an Issue</h2>
      <p>If you notice outdated information, incorrect screenshots, broken links, or app details that require updates, please email us with:</p>
      <ul className="list-disc ml-6 mb-2">
        <li>App name</li>
        <li>Page URL</li>
        <li>Description of the issue</li>
      </ul>
      <p>Our editorial team will review and update the content promptly.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">🔐 Privacy & Data Requests</h2>
      <p>If you would like to:</p>
      <ul className="list-disc ml-6 mb-2">
        <li>Request information about data we may collect</li>
        <li>Exercise your GDPR or CCPA/CPRA rights</li>
        <li>Ask about cookie preferences or analytics data</li>
        <li>Report a privacy-related concern</li>
      </ul>
      <p>Please email us at:</p>
      <p className="font-semibold text-indigo-700">support@smartappinfo.com</p>
      <p>Your request will be handled securely and confidentially.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">📝 Media & Partnership Inquiries</h2>
      <p>SmartAppInfo.com is an independent platform and does not offer paid reviews or sponsored placements. However, for general business inquiries or communication with our editorial team, you may reach us at the same email above.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">⚠️ Important Notice</h2>
      <p>We do not provide technical support for apps, APK installations, developer issues, or device troubleshooting. For app-specific help, please contact the official developer through the Google Play Store or their official website.</p>
    </section>
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">🌐 Our Commitment</h2>
      <ul className="list-disc ml-6 mb-2">
        <li>Providing accurate and original app information</li>
        <li>Maintaining global compliance with privacy laws</li>
        <li>Ensuring a safe browsing experience</li>
        <li>Responding to user inquiries promptly and transparently</li>
      </ul>
      <p>Your feedback is important in helping us maintain the quality and reliability of our platform.</p>
    </section>
    <AdsSection />
  </div>
);

export default ContactUs;
