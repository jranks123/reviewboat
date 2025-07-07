import './index.scss';
import Navbar from './components/Navbar';
import LeaderComponent from './components/LeaderComponent';
import QuoteComponent from './components/QuoteComponent';
import HowItWorks from './components/HowItWorks';
import Publishers from './components/Publishers';
import Retailers from './components/Retailers';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'
import { useState } from 'react';


function App() {
  const [showContactUs, setShowContactUs] = useState(false);
  console.log(showContactUs)
  return (
    <>
      <Navbar />
      <LeaderComponent 
        id="leader-component" 
        title="Keep customers on your website" 
        backgroundColor="#FFFFF4"         
        onRequestDemo={() => setShowContactUs(true)} // ✅ pass down trigger
      />
      {showContactUs && (
        <ContactUs
          id="contact-us-component"
          backgroundColor="#FFFFF4"
          onClose={() => setShowContactUs(false)} // ✅ close handler
        />
      )}
      <QuoteComponent id="quote-component" title="" backgroundColor="#FDE74C" />
      <HowItWorks id="how-it-works" title="How it works" backgroundColor="#FFFFF4" />
      <Retailers id="retailers" title="Retailers" backgroundColor="#FDE74C" />
      <Publishers id="publishers" title="Publishers" backgroundColor="#008000" />
      <Footer />
    </>
  );
}

export default App;
