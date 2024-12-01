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

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className="bg-[#000D1F] font-[Figtree]">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="md:pt-[120px] pt-[100px]">
        <Home />
      </div>

      <Currency />
      <Coins/>
      <Trade/>
      <UserExp/>
      <Footer/>
    </div>
  );
}

export default App;
