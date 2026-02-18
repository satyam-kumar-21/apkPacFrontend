import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] w-full bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="relative z-10 flex flex-col items-center w-full px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4 drop-shadow-lg tracking-tight">
          Discover & Download <span className="text-blue-400">Top Android Apps</span>
        </h1>
        <p className="text-lg md:text-2xl text-center mb-8 drop-shadow font-medium">
          Fast, safe, and free APKs for everyone on APKPac
        </p>
        <form className="w-full max-w-xl flex items-center shadow-lg rounded-xl overflow-hidden bg-white/90 backdrop-blur">
          <input
            type="text"
            placeholder="Search for your favorite app..."
            className="flex-1 px-5 py-3 text-gray-800 text-lg outline-none bg-transparent"
            style={{ minWidth: 0 }}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-7 py-3 font-semibold text-white text-lg transition-colors"
          >
            Search
          </button>
        </form>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
