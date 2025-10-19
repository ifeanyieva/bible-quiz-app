import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-6 text-center mt-10 shadow-inner">

      <p className="text-sm md:text-base">
        📖 “Your word is a lamp to my feet and a light to my path.” — Psalm 119:105
      </p>
      <p className="text-xs mt-2 opacity-80">
        © {new Date().getFullYear()} Bible Quiz App | Built with ❤️ using React + Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
