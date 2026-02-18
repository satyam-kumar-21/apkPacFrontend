import React from "react";
import { useParams } from "react-router-dom";
import { topFreeApps } from "../data/topFreeApps";

import AdsSection from "../components/AdsSection";
import OtherAppsSection from "../components/OtherAppsSection";
import RatingsBar from "../components/RatingsBar";
import AppImageScroller from "../components/AppImageScroller";
import DownloadButtons from "../components/DownloadButtons";
import SimilarAppsSection from "../components/SimilarAppsSection";

const appDetails = {
  1: {
    votes: "582K+ Votes",
    downloads: "50M+",
    age: "Teen",
    latestVersion: "VARY",
    publishDate: "07/13/2020",
    developer: "Peacock TV LLC",
    security: "100% Safe",
    price: "Free",
    features: [
      "Hot TV Series & Popular Movies",
      "Multiple Programs",
      "Personalized Service",
      "Premium Services"
    ],
    featureDetails: [
      "You can find entire seasons of popular series, classic series, and current season hits on Peacock. If you love movies, Peacock TV offers you hundreds of Hollywood movies, including Universal, DreamWorks Animation, and more.",
      "In addition to movies and TV shows, you can also watch sports events, news, and information. Even top songs are available for you. Peacock Channels will play your favorite entertainment 24/7!",
      "You can add a profile of up to six people, and Peacock TV will suggest different programs for each person based on the profile's preferences. If you have children at home, Peacock TV also has several animations for kids to choose from.",
      "If you have already subscribed to the Premium services, you will be able to enjoy exclusive live video streaming, more sports events, and unlimited access to all programs. And watch without being disturbed by ads for a more immersive experience."
    ],
    tips: [
      "⏰ Rewind the clock and never miss a single live event. Peacock allows users to rewind the clock while watching live events. So, you don't have to worry about starting late and missing something wonderful. With this feature, users can rewind two hours on most platforms and four hours on IOS and tvOS.",
      "📺 Customize subtitle preferences for a better experience. When streaming, a clear and preferable subtitle enhances the experience indeed. At this point, Peacock allows users to alter the subtitle's size, shadow depth, color, and font. You may scroll down to the bottom of the 'Settings' menu to customize the subtitle."
    ],
    faq: [
      "Can I use Peacock everywhere around the globe?",
      "Does Peacock TV charge users for subscriptions?"
    ]
  }
  // Add more app details here as needed
};

const AppDetailsPage = () => {
  const { id } = useParams();
  // Try to find app in topFreeApps or similarApps
  const similarApps = Array.from({ length: 12 }).map((_, idx) => ({
    id: 200 + idx,
    name: `Dummy App ${idx + 1}`,
    category: "Entertainment",
    categories: ["Entertainment", "Streaming", "TV"],
    rating: 4.0 + (idx % 5) * 0.1,
    image: "https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-apps-icon-png-image_1023269.jpg",
    details: {
      votes: `${100 + idx * 10}K+ Votes`,
      downloads: `${10 + idx}M+`,
      age: idx % 2 === 0 ? "Teen" : "Everyone",
      latestVersion: `1.${idx}.0`,
      publishDate: `202${idx % 3}/0${(idx % 9) + 1}/202${idx % 10}`,
      developer: `Dummy Dev ${idx + 1}`,
      security: "100% Safe",
      price: idx % 2 === 0 ? "Free" : "$0.99",
      features: [
        {
          title: "Feature A",
          desc: "This is a dummy feature description for demonstration purposes."
        },
        {
          title: "Feature B",
          desc: "Another dummy feature for this app."
        }
      ],
      tips: [
        "Tip: Try all features for best experience.",
        "Tip: Dummy apps are for demo only."
      ],
      faq: [
        "Is this a real app?",
        "How do I use dummy features?"
      ],
      playUrl: "https://play.google.com/store/apps/details?id=dummy.app",
      appStoreUrl: "https://apps.apple.com/app/id0000000000"
    }
  }));

  let app = topFreeApps.find((a) => a.id === Number(id));
  if (!app) app = similarApps.find((a) => a.id === Number(id));
  let details = app?.details || appDetails[id];

  if (!app) return <div className="p-8 text-center text-lg">App not found.</div>;

  return (
    <div className="max-w-5xl mx-auto px-2 md:px-0 mt-8 mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-5 mb-4">
            <img src={app.image} alt={app.name} className="w-20 h-20 rounded-xl object-cover border bg-gray-100" />
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900 mb-1">{app.name}</h1>
              <div className="flex items-center gap-2 text-gray-700 text-base">
                <span className="font-semibold text-xl text-yellow-500">★</span>
                <span className="font-medium text-lg">{app.rating}</span>
                <span className="ml-3 px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-700 font-medium">{app.category}</span>
              </div>
            </div>
          </div>
          {/* Ads Section (taller) */}
          <div className="my-8">
            <AdsSection />
          </div>
          {/* App Info Table */}
          {details && (
            <div className="overflow-x-auto mb-8">
              <table className="min-w-[320px] w-full border border-gray-200 rounded-xl bg-white text-sm text-gray-800">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold w-40">Category</td>
                    <td className="py-2 px-4">{app.category}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Latest Version</td>
                    <td className="py-2 px-4">{details.latestVersion}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Publish Date</td>
                    <td className="py-2 px-4">{details.publishDate}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Developer</td>
                    <td className="py-2 px-4">{details.developer}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-semibold">Security</td>
                    <td className="py-2 px-4">{details.security}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Price</td>
                    <td className="py-2 px-4">{details.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          <AdsSection />
          {details && (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-3">Features of {app.name}</h2>
              <ul className="list-disc pl-6 mb-4">
                {(Array.isArray(details.features) ? details.features : []).map((f, i) => (
                  <li key={i} className="font-semibold mb-1">
                    {f.title || f}
                    <div className="font-normal text-gray-600 text-sm">{f.desc || (details.featureDetails && details.featureDetails[i])}</div>
                  </li>
                ))}
              </ul>
              {/* Ads after features */}
              <div className="my-8">
                <AdsSection />
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-1">FAQ</h3>
              <ul className="list-disc pl-6 mb-4">
                {(Array.isArray(details.faq) ? details.faq : []).map((q, i) => (
                  <li key={i} className="text-gray-700 mb-1">{q}</li>
                ))}
              </ul>
              {/* App image scroller and download buttons */}
              <AppImageScroller />
              {app.id === 1 && (
                <DownloadButtons
                  playUrl="https://play.google.com/store/apps/details?id=com.peacocktv.peacockandroid&hl=en&gl=US"
                  appStoreUrl="https://apps.apple.com/us/app/peacock-tv/id1508186374"
                />
              )}
              {/* Ratings bar */}
              <RatingsBar rating={app.rating} votes={details.votes} />
              {/* Similar Apps section */}
              <SimilarAppsSection />
            </>
          )}
        </div>
        {/* Sidebar */}
        <div className="w-full md:w-72 flex-shrink-0 flex flex-col">
          <AdsSection />
          <OtherAppsSection excludeId={id} />
        </div>
      </div>
    </div>
  );
};

export default AppDetailsPage;
