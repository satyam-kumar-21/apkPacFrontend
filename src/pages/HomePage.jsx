import React from "react";
import HeroSection from "../components/HeroSection";
import AdsSection from "../components/AdsSection";
import { useGetAppsQuery } from '../services/api';
import AppsSection from "../components/AppsSection";


const HomePage = () => {
    const { data, isLoading } = useGetAppsQuery();
    const apps = data?.apps || [];

    // Example: show first 6 apps
    const homeApps = apps.slice(0, 6);

    return (
        <>
            <HeroSection />
            <div className="my-8">
                <AdsSection />
            </div>


            <AppsSection category="Top Apps" />
            <div className="my-8">
                <AdsSection />
            </div>

            <AppsSection category="Popular Apps" />
            <div className="my-8">
                <AdsSection />
            </div>

            <AppsSection category="Desktop" />
            <div className="my-8">
                <AdsSection />
            </div>

            <AppsSection category="Finance" />

            <div className="my-8">
                <AdsSection />
            </div>

            <AppsSection category="Entertainment" />
            <div className="my-8">
                <AdsSection />
            </div>

            <AppsSection category="Communication" />
            <div className="my-8">
                <AdsSection />
            </div>

            <AppsSection category="Tools" />
            <div className="my-8">
                <AdsSection />
            </div>

            <AppsSection category="Shopping" />
            <div className="my-8">
                <AdsSection />
            </div>
            <AppsSection category="Food" />
            <div className="my-8">
                <AdsSection />
            </div>
        </>
    );
};

export default HomePage;
