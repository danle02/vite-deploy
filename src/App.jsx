import React, { useRef } from 'react';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';
import Card from './Card.jsx';

function App() {
  const cardRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div id="root" className="flex flex-col min-h-screen"> {/* Main container */}
      <Navbar cardRef={cardRef} footerRef={footerRef} />
      <div className="main-content"> {/* Content container */}
        <Body />
      </div>
      <div ref={cardRef}>
        <Card />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;