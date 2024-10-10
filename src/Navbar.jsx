import React from 'react';
import { motion } from 'framer-motion';

function Navbar({ cardRef, footerRef }) {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex justify-center items-center p-4 w-full">
      <div className="flex justify-center items-center">
        <nav className="flex gap-1 border-white/10 bg-gray-900 rounded-full text-white p-4 max-w-full">
          <ul className="relative flex space-x-4 list-none">
            {['Projects', 'Contact', 'LinkedIn', 'Resume'].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => {
                  if (item === 'Projects') handleScroll(cardRef);
                  else if (item === 'Contact') handleScroll(footerRef);
                }}
              >
                {item === 'LinkedIn' ? (
                  <a href="https://www.linkedin.com/in/danny-le-249044218/">
                    {item}
                    <span>&#8599;</span>
                  </a>
                ) : item === 'Resume' ? (
                  <a href="/CV_DannyLe_2024.pdf" target="_blank" rel="noopener noreferrer">
                    {item}
                    <span>&#8599;</span>
                  </a>
                ) : (
                  <a href="#">{item}</a>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;