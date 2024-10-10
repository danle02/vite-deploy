import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

function Footer() {
  const controls = useAnimation();
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="p-4 h-50 bg-gray-400 text-white text-center"
    >
      <p>&copy; 2024 Danny Le. All rights reserved.</p>
      <p>danle02@outlook.com</p>
      <p>
        <a href="https://www.behance.net/dannyle20" target="_blank" rel="noopener noreferrer">
          Behance Profile
        </a>
      </p>
    </motion.footer>
  );
}

export default Footer;