import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import eventCenterImage from "./assets/Eventcenter_poster.png";
import JMCimage from "./assets/JMC.png";
import Polyfjordvideo from "./assets/Polyfjord.mp4";
import xcelTechnologiesImage1 from "./assets/xcel.jpg";
import xcelTechnologiesImage2 from "./assets/xcel2.jpg";
import xcelTechnologiesImage3 from "./assets/xcel3.jpg";
import xcelTechnologiesImage4 from "./assets/xcel4.png";
import xcelTechnologiesImage5 from "./assets/xcel5.jpg";
import xcelTechnologiesImage6 from "./assets/xcel6.png";
import xcelTechnologiesImage7 from "./assets/xcel7.jpg";
import xcelTechnologiesImage8 from "./assets/xcel8.jpg";
import xcelTechnologiesImage9 from "./assets/xcel9.jpg";


function Card() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const [isXcel, setIsXcel] = useState(false);

  // Xcel Technologies Images
  const xcelImages = [
    xcelTechnologiesImage1,
    xcelTechnologiesImage2,
    xcelTechnologiesImage3,
    xcelTechnologiesImage4,
    xcelTechnologiesImage5,
    xcelTechnologiesImage6,
    xcelTechnologiesImage7,
    xcelTechnologiesImage8,
    xcelTechnologiesImage9,
  ];

  const openContentInModal = (url, isVideoContent, isXcelContent = false) => {
    setSelectedImage(url);
    setIsModalOpen(true);
    setIsVideo(isVideoContent);
    setIsXcel(isXcelContent);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setIsVideo(false);
    setIsXcel(false);
  };

  return (
    <div className="flex items-center justify-center mb-10">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Card 1 */}
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden w-64"
          whileHover={{ scale: 1.05 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Optional: Scale down on click/tap
        >
          <img
            src={eventCenterImage}
            alt="Event Center"
            className="w-full h-40 object-cover cursor-pointer"
            onClick={() => openContentInModal(eventCenterImage, false)}
          />
          <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Event Center 1</h1>
            <p className="text-gray-600">Poster</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={JMCimage}
            alt="Event Center"
            className="w-full h-40 object-cover cursor-pointer"
            onClick={() => openContentInModal(JMCimage, false)}
          />
          <div className="p-4">
            <h1 className="text-xl font-bold mb-2">JMC</h1>
            <p className="text-gray-600">Poster</p>
          </div>
        </motion.div>

        {/* Card 3 for Xcel Technologies */}
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={xcelTechnologiesImage1}
            alt="Xcel Technologies"
            className="w-full h-40 object-cover cursor-pointer"
            onClick={() => openContentInModal(xcelImages, false, true)}
          />
          <div className="p-4">
            <h1 className="text-xl font-bold mb-2">Xcel Technologies</h1>
            <p className="text-gray-600">Branding</p>
          </div>
        </motion.div>

        {/* Video Card */}
        <motion.div
          className="bg-white shadow-md rounded-lg overflow-hidden w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <video
            src={Polyfjordvideo}
            className="w-full h-40 object-cover cursor-pointer"
            onClick={() => openContentInModal(Polyfjordvideo, true)}
            muted
            loop
          />
          <div className="p-4">
            <h1 className="text-xl font-bold mb-2">3D-Animation</h1>
            <p className="text-gray-600">Motion-animation</p>
            <p className="text-xs text-gray-600">*Tutorial followed by @Polyfjord</p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto"
          onClick={closeModal} // Close modal when clicking on the background
        >
          <motion.div
            className="relative p-4 max-w-full max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }} // Slight zoom-in effect when modal opens
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the content
          >
            {isXcel ? (
              // Display stacked Xcel images
              <div className="overflow-y-auto">
                {xcelImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Xcel Technologies ${index + 1}`}
                    className="w-full max-w-[60vw] object-contain" // Ensures same width for all images
                  />
                ))}
              </div>
            ) : isVideo ? (
              <video
                src={selectedImage}
                className="w-full max-h-[85vh] max-w-[85vw] object-contain"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full max-h-[85vh] max-w-[85vw] object-contain" // Ensure the image is fully visible
              />
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Card;
