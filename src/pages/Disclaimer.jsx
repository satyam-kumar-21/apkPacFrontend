
import React from 'react';
import AdsSection from '../components/AdsSection';

const overviewItems = [
  'Original Content & Copyright',
  'Compliance with Google Policies',
  'Device Safety',
  'Free Services & APK Integrity',
  'Advertising & Third-Party Content',
  'Contact Us',
];

const Disclaimer = () => (
  <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row-reverse max-w-6xl">
    {/* Overview Sidebar on the right */}
    <aside className="md:w-1/4 w-full mb-8 md:mb-0 md:ml-8">
      <div className="bg-gray-50 border rounded-lg p-4 text-sm sticky top-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Overview</h2>
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          {overviewItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
    {/* Main Content on the left */}
    <main className="md:w-3/4 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center">Disclaimer</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Original Content & Copyright</h2>
        <p>
          All content on APKPac.com is original. The copyright for all app reviews and images belongs to our editorial team. Reproduction or redistribution without proper attribution is prohibited.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Compliance with Google Policies</h2>
        <p>
          All information on our website complies with the terms and conditions of Google Ads policies and the Google Unwanted Software policy. We follow these policies in the presentation and distribution of content and ads.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Device Safety</h2>
        <p>
          We do not perform any operations that alter your device or system settings. Using our website will not change any system settings on your phone.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Free Services & APK Integrity</h2>
        <p>
          All services provided on APKPac.com are completely free. We only share original, virus‑free APK files of free apps and their corresponding app reviews. The APK files we provide are identical to the versions available on the Google Play Store and have not been modified. We will never request payment‑related information such as card numbers or passwords on our website.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Advertising & Third-Party Content</h2>
        <p>
          We do not collaborate with advertisers. Advertisements shown on our site are served automatically by Google Ads based on user browsing behavior. APKPac.com is not responsible for the content, accuracy, or display format of any third‑party advertisements.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have trouble going through our online content, please do not hesitate to contact us via <a href="mailto:support@apkpac.com" className="text-blue-600 underline">support@apkpac.com</a>.
        </p>
      </section>

      <AdsSection />
    </main>

    
  </div>
);

export default Disclaimer;
