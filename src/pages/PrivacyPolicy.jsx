
import React from 'react';
import AdsSection from '../components/AdsSection';


const overviewItems = [
  'What Are Cookies?',
  'How Do We Use Cookies?',
  'What Types of Cookies Do We Use?',
  'Necessary Cookies',
  'Analytics Cookies',
  'Interest-Based Advertising',
  'Third-Party Cookies',
  'How to Opt out of Cookies?',
  'Google Analytics Cookies Opt-out',
  'Other Cookies Controls',
  'Privacy Policy',
  'What Data Do We Collect?',
  'How Do We Use the Data?',
  'What Will We Do If Track Abuse Occurs?',
  'Property Claims',
  'Safety Concern',
  'Policy Change',
  'Contact Us',
];


const PrivacyPolicy = () => (
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
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      {/* ...existing content except the old Overview section... */}
      <section className="mb-6">
        <p>
          The apkpac.com (APKPac) is committed to protecting the privacy and security of all users who use our site. According to GDPR and EU user content policy, we update our cookies policy and privacy policy to explain how APKPac uses the data we collect from you when you use our website, how we will use it, and how to manage your cookies settings.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What Are Cookies?</h2>
        <p>
          Cookies are text files placed on your device to collect non-personal information like your device, operating system, browser type, and how you have interacted with our website. When you visit our website, we may collect information from you automatically through cookies or similar technology.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How Do We Use Cookies?</h2>
        <p>
          We use cookies to improve your experience on our website, including keeping you signed in, understanding how you use our website, and providing personalized advertising tailored to your interests. By default, your browser is set to allow cookies, but you can always choose to block cookies in your browser's settings.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What Types of Cookies Do We Use?</h2>
        <ul className="list-disc ml-6">
          <li className="mb-2">
            <strong>Necessary Cookies:</strong> Required to deliver the services you request on our website. These cookies play an essential role in operating this site and displaying it correctly. Necessary cookies cannot be disabled and gather no information about your browsing habits.
          </li>
          <li className="mb-2">
            <strong>Analytics Cookies:</strong> We use Google Analytics Cookies to analyze and measure our audience, traffic, and engagement with the site. Upon your visit, cookies are automatically enabled on our site. You can opt out of these Analytics Cookies anytime by following the instructions below. For more information on how Google uses cookies, please check their privacy policy.
          </li>
          <li className="mb-2">
            <strong>Interest-Based Advertising:</strong> These cookies analyze your interests and preferences, showing you personalized ads and measuring the effectiveness of advertising. You can withdraw your consent to Interest-Based Advertising Cookies by following the instructions below. If you withdraw consent, certain features may not function correctly and you will see non-personalized ads.
          </li>
          <li className="mb-2">
            <strong>Third-Party Cookies:</strong> Some cookies are operated by third parties. When you click on a third party's advertisement or promotion, information may be transmitted to the third party. We have no control over these third parties or their use of cookies. Please check their websites for details.
          </li>
        </ul>
        <p className="mt-2">
          Besides cookies, technologies like pixel tags, web beacons, and eTags may also improve our understanding of site traffic, visitor behavior, and promotional campaigns.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Cookie Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Cookie</th>
                <th className="border px-2 py-1">Type</th>
                <th className="border px-2 py-1">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Google Analytics, Google AdSense, DoubleClick</td>
                <td className="border px-2 py-1">Site analytics (Google Analytics)</td>
                <td className="border px-2 py-1">Google operates the Google Display Network and DoubleClick platform for digital advertising and analytics. For more information, visit Google Privacy & Terms.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How to Opt out of Cookies?</h2>
        <p>
          We provide several opt-out solutions if you want to withdraw your consent. Certain website features may not function correctly if you set your browser not to accept cookies. You will still see advertising, but it may not be tailored to your interests.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>If you don't want us to use cookies, click here for information on changing your browser settings to reject cookies.</li>
          <li>Disabling cookies won't turn off advertising, but you will see non-personalized ads.</li>
          <li>To turn off Google Analytics cookies, use the <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
          <li>Google Safety Centre also provides a tool to control the data used to serve ads.</li>
          <li>To block other cookies, use your browser's cookie controls (see your browser's Settings, Options, or Preferences menu):
            <ul className="list-disc ml-6">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/en-us/HT201265" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Safari iOS</a></li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
        <p>
          Besides cookies technology, APKPac collects and manages user data according to the following policy. By using the website, you agree to the terms of this privacy policy.
        </p>
        <h3 className="font-semibold mt-4">What Data Do We Collect?</h3>
        <p>
          We collect information about you and your device when you access our website. For instance, we log your device operating system name and version, manufacturer and model, browser type, browser language, screen resolution, the website you visited before browsing our website, pages you viewed, how long you spent on a page, access times, and information about your use of and actions on our website.
        </p>
        <h3 className="font-semibold mt-4">How Do We Use the Data?</h3>
        <ul className="list-disc ml-6">
          <li>To operate, maintain, and improve our website, products, and services</li>
          <li>To manage and administer our rewards program and other promotions you participate in</li>
          <li>To send information, including technical notices, updates, security alerts, and support and administrative messages</li>
        </ul>
        <h3 className="font-semibold mt-4">What Will We Do If Track Abuse Occurs?</h3>
        <p>
          We will disclose information we have when required by law, for example, in response to a court order or law enforcement agency's request.
        </p>
        <h3 className="font-semibold mt-4">Property Claims</h3>
        <p>
          The trademarks and logos of all the merchants displayed on the website are the property of their respective owners. The website is not affiliated or associated with any of them.
        </p>
        <h3 className="font-semibold mt-4">Safety Concern</h3>
        <p>
          This site only provides free app reviews and original apk files download without cheating, modifications, or viruses. Your personal information will NOT be shared with any other third party without your permission.
        </p>
        <h3 className="font-semibold mt-4">Policy Change</h3>
        <p>
          We may amend this privacy policy from time to time. Use of information we collect now is subject to the privacy policy in effect at the time such information is used. Users are bound by any changes to the privacy policy when they use the services after such changes have been first posted.
        </p>
        <h3 className="font-semibold mt-4">Contact Us</h3>
        <p>
          If you have any questions about this privacy policy or the data we hold on you, please contact us at <a href="mailto:support@apkpac.com" className="text-blue-600 underline">support@apkpac.com</a>.
        </p>
      </section>
      <AdsSection />
    </main>
  </div>
);

export default PrivacyPolicy;
