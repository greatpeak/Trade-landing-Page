import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "@/assets/okrypt sketch 2.svg";
import mobileButton from "@/assets/Frame 3473045.svg";
import closedIcon from "@/assets/closeIcon.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 786px)");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const pages = [
    { name: "Home", path: "/" },
    { name: "Buy Crypto", path: "" },
    { name: "Sell Crypto", path: "" },
    { name: "About Us", path: "/about-us" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav>
      <div className="flex justify-between items-center py-4 md:px-10 px-5 h-[68px] md:max-h-[100px] fixed top-0 z-30 bg-[#000D1F] w-full">
        <div>
          {" "}
          <div className="flex gap-2 w-2/6 h-[28px] items-center md:h-[48px]">
            <img src={Logo} alt="Okrypt Logo" className="w-[47.4px]" />
            <p className="font-[Figtree] font-bold text-xl md:text-[28px] text-white">
              Okrypt
            </p>
          </div>
        </div>

        {isAboveMediumScreens ? (
          <div className="flex gap-[56px]">
            {pages.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`text-xl font-medium transition duration-500 ${
                  location.pathname === path
                    ? "text-[#34EBE1]"
                    : "text-white hover:text-[#34EBE1]"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        ) : (
          <img
            src={mobileButton}
            alt="open menu"
            className="h-[36px] cursor-pointer"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          />
        )}
        <div className="hidden lg:block">
          <button className="rounded-lg font-semibold text-xl bg-[#34EBE1] px-3 py-[10px]">
            Contact Us
          </button>
        </div>

        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 z-40 h-[500px] text-white rounded-xl w-[226px] drop-shadow-xl bg-[#000D1F]">
            <div className="flex flex-col p-5 gap-[56px] items-end">
              <img
                src={closedIcon}
                className="h-[37.38px] cursor-pointer"
                alt="close"
                onClick={() => setIsMenuToggled(false)}
              />
              {pages.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-white transition duration-500 hover:text-[#34EBE1] text-xl font-medium"
                  onClick={() => setIsMenuToggled(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
