import "./App.scss";
import About from "./Components/About/About";
import Achievements from "./Components/Achievements/Achievements";
import EmailForm from "./Components/EmailForm/EmailForm";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar";
import PriceSection from "./Components/PriceSection/PriceSection";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <div className="headerBg">
        <NavBar />
        <HeroSection />
      </div>
      <About />
      <Services />
      <div className="secondaryBg">
        <Achievements />
        <PriceSection />
        <EmailForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
