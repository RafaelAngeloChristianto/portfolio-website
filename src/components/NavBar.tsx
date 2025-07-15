import React from "react";

export const NavBar: React.FC = () => {
  return (
    <div className="shadow-lg h-16 bg-white flex items-center justify-between px-6">
      <h2 className="font-Inter font-bold text-lg">
        Rafael Angelo Christianto
      </h2>

      <div className="flex items-center gap-8 mr-5">
        <a
          className="font-Roboto relative hover:text-[#152238] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#152238] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          href="#home"
        >
          Home
        </a>
        <a
          className="font-Roboto font-Roboto relative hover:text-[#152238] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#152238] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          href="#about"
        >
          About
        </a>
        <a
          className="font-Roboto font-Roboto relative hover:text-[#152238] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#152238] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="font-Roboto font-Roboto relative hover:text-[#152238] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#152238] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          href="#contact"
        >
          Contact
        </a>
        {/* Future additions like social media / CV / email / phone can go here */}
      </div>
    </div>
  );
};
