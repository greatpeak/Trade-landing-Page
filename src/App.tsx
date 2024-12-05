import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/main_page/Home";
import Currency from "./pages/main_page/Currency";
import Coins from "./pages/main_page/Coin";
import Trade from "./pages/main_page/Trade";
import UserExp from "./pages/main_page/UserExp";
import Footer from "./components/Footer";
import AboutHome from "./pages/aboutUs/AboutHome";
import FeaturesSection from "./pages/aboutUs/FeaturesSection";
import FAQSection from "./pages/aboutUs/FAQSection";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  const [selectedPage, setSelectedPage] = useState<string>("aboutus");

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#000D1F] font-[Figtree]">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      {/* Conditionally render content based on selectedPage */}
      {selectedPage === "home" ? (
        <>
          <div className="md:pt-[120px] pt-[100px]">
            <Home />
          </div>
          <Currency />
          <Coins />
          <Trade />
          <UserExp />
        </>
      ) : selectedPage === "aboutus" ? (
        <div className="md:pt-[120px] pt-[100px] text-white">
          {/* About Us content */}
          <AboutHome />
          <FeaturesSection />
          <FAQSection />
        </div>
      ) : selectedPage === "support" ? (
        <div id="support" className="md:pt-[120px] pt-[100px] text-white">
          {/* Support content */}
          <h1>Support</h1>
          <p>
            Need help? Our support team is here to assist you. Contact us at...
          </p>
        </div>
      ) : null}

      <Footer />
    </div>
  );
}

export default App;
