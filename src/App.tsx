import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Currency from "./components/Currency";
import Coins from "./components/Coin";
import Trade from "./components/Trade";
import UserExp from "./components/UserExp";
import Footer from "./components/Footer";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // State to track the selected page, defaulting to "home"
  const [selectedPage, setSelectedPage] = useState<string>("home");

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
      ) : selectedPage === "aboutUs" ? (
        <div id="aboutUs" className="md:pt-[120px] pt-[100px] text-white">
          {/* About Us content */}
          <h1>About Us</h1>
          <p>Welcome to our platform! We are dedicated to providing...</p>
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
