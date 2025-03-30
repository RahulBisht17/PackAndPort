import React, { useState, useEffect } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import truckImg from "../assets/heroImg.png";
const HeroSection = () => {
  const [query, setQuery] = useState("");
  const texts = [
    "Fast Delivery",
    "Affordable Prices",
    "Best Quality",
    "24/7 Support",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Speed of typing and deleting
    const nextChar = () => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    };

    if (!isDeleting && charIndex === texts[index].length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length); // Move to the next text
    }

    const timer = setTimeout(nextChar, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  useEffect(() => {
    setText(texts[index].substring(0, charIndex));
  }, [charIndex, index]);
  return (
    <div className="relative rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl bg-cyan-900 p-4 pb-10 sm:px-8 sm:pb-16 md:pt-14 xl:pt-20 lg:pb-20 xl:pb-24 flex flex-col gap-14 sm:gap-18">
      <div className="text-white mx-auto ">
        <div className="text-xl sm:text-3xl md:text-4xl font-semibold">
          What Do You Want To Shift ?
        </div>

        <div className="text-xl sm:text-2xl text-center text-gray-50 h-2">
          {text}
        </div>
      </div>
      <div className="w-full max-w-md sm:max-w-xl mx-auto relative">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search your category..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl px-4 py-2 pr-10 bg-white text-gray-700 placeholder-gray-400 appearance-none outline-none border border-gray-300 "
        />

        {/* Search Icon */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
      {/* <div className="overflow-hidden rounded-lg">
        <img
          src={truckImg}
          alt="Sample AVIF"
          className="w-full h-40 object-cover border-2"
        />
      </div> */}
    </div>
  );
};
export default HeroSection;
