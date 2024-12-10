import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/main_page/HomePage";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import SupportPage from "./pages/support/SupportPage";

function App() {
  return (
    <Router>
      <div className="bg-[#000D1F] font-[Figtree]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
