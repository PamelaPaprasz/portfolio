import React from 'react';
import '../App.css';
import AnimatedImage from './AnimatedShip';

function HeroSection() {
  return (
    <div className="inset-0 flex justify-center items-center">
      <div className="md:flex md:items-center">
        <div className="md:w-2/3">
          <p className="text-[12px] lg:text-sm leading-loose  mb-2 md:mb-3 lg:mb-4 uppercase whitespace-normal">
            <span className="border-r border-darkBeige pr-2 py-0.5 whitespace-no-wrap">Pamela Paprasz</span>
            <span className="border-r border-darkBeige px-2 py-0.5 whitespace-no-wrap">Vienna</span>
            <span className="border-r border-darkBeige px-2 py-0.5 whitespace-no-wrap">UX Design</span>
            <span className="pl-2 py-0.5 whitespace-no-wrap">Frontend Development</span>
          </p>

          <h1 className="text-gray-700 text-4xl md:text-6xl lg:text-8xl font-bold mb-7 md:mb-12 lg:mb-16 leading-10">Crafting awesome apps and tools for folks like you.</h1>
          <hr className="md:w-80 h-0.5 bg-darkBeige mb-4 md:mb-7 lg:mb-9" /> {/* Separator Line */}
          <p className="text-gray-700 text-lg md:text-2xl lg:text-3xl mb-4">Pamela is a junior UX designer based in Vienna with a passion for service design and more than 5 years of experience in frontend development.</p>
        </div>
        <div className="absolute right-8 bottom-20 md:bottom-60 lg:bottom-0 block float-right w-1/4 ml-0 md:ml-12 md:w-1/3 mt-4 md:mt-10">
          <AnimatedImage />
        </div>


      </div>
    </div>

  );
}

export default HeroSection;


// ${isMobileScreen ? 'bg-none' : ''}

