import React from "react";

import AdsSection from "../components/AdsSection";
import EditorsChoiceSection from "../components/EditorsChoiceSection";
import AppsSection from "../components/AppsSection";


const BlogsPage = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4 w-full max-w-6xl px-4 mx-auto">Blogs</h1>
      <div className="my-8">
        <AdsSection />
      </div>
      <EditorsChoiceSection />
      <div className="my-8">
        <AdsSection />
      </div>
     <AppsSection category="Top Apps" />
      <div className="my-8">
        <AdsSection />
      </div>
      <AppsSection category="Desktop" />
      <div className="my-8">
        <AdsSection />
      </div>
        
      <div className="my-8">
        <AdsSection />
      </div>
     
    </>
  );
};

export default BlogsPage;
