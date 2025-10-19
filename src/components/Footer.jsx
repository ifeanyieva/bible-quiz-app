import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-6 sm:py-8 text-center mt-10 shadow-inner w-full transition-all duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bible Verse */}
        <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
          📖 “Your word is a lamp to my feet and a light to my path.”
          <br className="hidden sm:block" /> — Psalm 119:105
        </p>

        {/* Divider line for large screens */}
        <div className="hidden sm:block my-4 w-2/3 mx-auto border-t border-blue-400 opacity-40" />

        {/* Credits */}
        <p className="text-xs sm:text-sm md:text-base mt-3 opacity-80">
          © {new Date().getFullYear()} <span className="font-semibold">Bible Quiz App</span> | Built with{" "}
          <span className="text-red-400">❤️</span> using{" "}
          <span className="font-semibold text-yellow-300">React</span> +{" "}
          <span className="font-semibold text-blue-300">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;