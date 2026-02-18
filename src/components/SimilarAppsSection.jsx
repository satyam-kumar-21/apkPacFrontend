import React from "react";
import { Link } from "react-router-dom";

// Copy of Peacock TV details for all similar apps (user will update later)
const peacockDetails = {
  votes: "582K+ Votes",
  downloads: "50M+",
  age: "Teen",
  latestVersion: "VARY",
  publishDate: "07/13/2020",
  developer: "Peacock TV LLC",
  security: "100% Safe",
  price: "Free",
  features: [
    {
      title: "Hot TV Series & Popular Movies",
      desc: "You can find entire seasons of popular series, classic series, and current season hits on Peacock. If you love movies, Peacock TV offers you hundreds of Hollywood movies, including Universal, DreamWorks Animation, and more."
    },
    {
      title: "Multiple Programs",
      desc: "In addition to movies and TV shows, you can also watch sports events, news, and information. Even top songs are available for you. Peacock Channels will play your favorite entertainment 24/7!"
    },
    {
      title: "Personalized Service",
      desc: "You can add a profile of up to six people, and Peacock TV will suggest different programs for each person based on the profile's preferences. If you have children at home, Peacock TV also has several animations for kids to choose from."
    },
    {
      title: "Premium Services",
      desc: "If you have already subscribed to the Premium services, you will be able to enjoy exclusive live video streaming, more sports events, and unlimited access to all programs. And watch without being disturbed by ads for a more immersive experience."
    }
  ],
  tips: [
    "⏰ Rewind the clock and never miss a single live event. Peacock allows users to rewind the clock while watching live events. So, you don't have to worry about starting late and missing something wonderful. With this feature, users can rewind two hours on most platforms and four hours on IOS and tvOS.",
    "📺 Customize subtitle preferences for a better experience. When streaming, a clear and preferable subtitle enhances the experience indeed. At this point, Peacock allows users to alter the subtitle's size, shadow depth, color, and font. You may scroll down to the bottom of the 'Settings' menu to customize the subtitle."
  ],
  faq: [
    "Can I use Peacock everywhere around the globe?",
    "Does Peacock TV charge users for subscriptions?"
  ],
  playUrl: "https://play.google.com/store/apps/details?id=com.peacocktv.peacockandroid&hl=en&gl=US",
  appStoreUrl: "https://apps.apple.com/us/app/peacock-tv/id1508186374"
};

const similarApps = Array.from({ length: 12 }).map((_, idx) => ({
  id: 200 + idx,
  name: "Peacock TV: Stream TV & Movies",
  category: "Entertainment",
  rating: 4.5,
  image: "https://png.pngtree.com/png-vector/20190505/ourmid/pngtree-vector-apps-icon-png-image_1023269.jpg",
  details: peacockDetails
}));

const SimilarAppsSection = () => (
  <div className="my-10">
    <h3 className="text-lg font-bold mb-4 text-gray-900">Similar Apps</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {similarApps.map((app) => (
        <Link
          to={`/apps/${app.id}`}
          key={app.id}
          className="flex items-center gap-3 bg-white rounded-xl shadow p-3 border border-gray-100 cursor-pointer no-underline"
        >
          <img
            src={app.image}
            alt={app.name}
            className="w-12 h-12 rounded-lg object-cover border bg-gray-100"
            loading="lazy"
          />
          <div className="flex-1 min-w-0">
            <span className="font-semibold text-base text-gray-800 truncate block">
              {app.name}
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs rounded bg-blue-100 text-blue-700 px-2 py-0.5 font-medium">
                {app.category}
              </span>
              <span className="text-yellow-500 font-bold text-base">★</span>
              <span className="text-gray-700 text-sm font-medium">{app.rating}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default SimilarAppsSection;
