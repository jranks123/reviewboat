import './index.css';
import Navbar from './components/Navbar';
import LeaderComponent from './components/LeaderComponent';
import QuoteComponent from './components/QuoteComponent';
import HowItWorks from './components/HowItWorks';
import Publishers from './components/Publishers';
import Retailers from './components/Retailers';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <LeaderComponent id="leader-component" title="Keep customers on your website" backgroundColor="#FFFFF4" />
      <QuoteComponent id="quote-component" title="" backgroundColor="#FDE74C" />
      <HowItWorks id="how-it-works" title="How it works" backgroundColor="#FFFFF4" />
      <Publishers id="publishers" title="Publishers" backgroundColor="#008000" />
      <Retailers id="retailers" title="Retailers" backgroundColor="#FDE74C" />
      <Footer />
    </>
  );
}

export default App;
