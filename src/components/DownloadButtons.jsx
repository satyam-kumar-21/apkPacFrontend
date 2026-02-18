import React from "react";

const DownloadButtons = ({ playUrl, appStoreUrl }) => (
  <div className="flex gap-4 my-6 justify-center">
    <a
      href={playUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="Get it on Google Play"
        className="h-14 md:h-16 w-auto"
      />
    </a>
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      <img
        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
        alt="Download on the App Store"
        className="h-14 md:h-16 w-auto"
      />
    </a>
  </div>
);

export default DownloadButtons;
