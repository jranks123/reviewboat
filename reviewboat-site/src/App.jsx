import './index.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Section id="how-it-works" title="How it works" backgroundColor="#FFFFF4" />
      <Section id="publishers" title="Publishers" backgroundColor="#008000" />
      <Section id="retailers" title="Retailers" backgroundColor="#FDE74C" />
      <Footer />
    </>
  );
}

export default App;
