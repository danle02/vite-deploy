import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profilImage from './assets/danny.png';

const typingContainer = {
  hidden: { width: 0 },
  visible: {
    width: "auto",
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
};

function Body() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isProficienciesOpen, setIsProficienciesOpen] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case "about":
        setIsAboutOpen(!isAboutOpen);
        break;
      case "education":
        setIsEducationOpen(!isEducationOpen);
        break;
      case "proficiencies":
        setIsProficienciesOpen(!isProficienciesOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="text-center mt-10">
        <motion.div
          className={`overflow-hidden inline-block ${!isAboutOpen ? 'border-r-2 border-black' : ''} whitespace-nowrap`}
          variants={typingContainer}
          initial="hidden"
          animate="visible"
          onAnimationComplete={() => setIsAboutOpen(true)}
          style={{ height: isAboutOpen ? 'auto' : '4rem' }}
        >
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 break-words custom-break">
              Hello, I'm Danny, a <span className="text-blue-500">Digital designer</span> from Växjö!
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [0, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="mt-10"
        >
          <img src={profilImage} className="mx-auto" alt="Danny's profile" />
        </motion.div>

        {/* Grid Layout for About, Education, Proficiencies */}
        <div className="text-left mt-10 mb-1 max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-4">
          {/* About Me (spans 3 columns) */}
          <div className="md:col-span-3 row-span-3 border-b md:border-none mt">
            <h1
              className="text-xl font-bold text-center sm:text-left cursor-pointer md:cursor-default"
              onClick={() => toggleSection('about')}
            >
              About me
            </h1>
            <p className={`mt-2 ${isAboutOpen ? 'block' : 'hidden'} md:block`}>
              I'm currently pursuing a Bachelor's degree in Interactive Media and Web Technologies at Linnaeus University, with a strong passion for digital design, particularly in 3D and Graphic design. I thrive on creativity and am always eager to explore new technologies and expand my skills.
            </p>
          </div>

          {/* Education (first row, 1 column) */}
          <div className="md:col-span-1 border-b md:border-none">
            <h1
              className="text-xl font-bold text-center sm:text-left cursor-pointer md:cursor-default"
              onClick={() => toggleSection('education')}
            >
              Education
            </h1>
            <p className={`mt-2 ${isEducationOpen ? 'block' : 'hidden'} md:block`}>
              Interactive Media and Web Technology
              2022 - On going
              graduating summer 2025
            </p>
          </div>

          {/* Empty Space (second row, 1 column) */}
          <div className="md:col-span-1"></div>

          {/* Proficiencies (third row, 1 column) */}
          <div className="md:col-span-1 border-b md:border-none">
            <h1
              className="text-xl font-bold text-center sm:text-left cursor-pointer md:cursor-default"
              onClick={() => toggleSection('proficiencies')}
            >
              Proficiencies
            </h1>
            <ul className={`mt-2 ${isProficienciesOpen ? 'block' : 'hidden'} md:block`}>
              <li>• 3D Design</li>
              <li>• Graphic Design</li>
              <li>• Frontend-development</li>
              <li>• UX/UI Design</li>
            </ul>
          </div>

          {/* My Projects Section */}
          <div className="md:col-span-3 md:col-start-1">
            <h1 className="text-xl font-bold text-center sm:text-left">My projects</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
