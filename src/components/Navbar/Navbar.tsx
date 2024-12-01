import Logo from "@/assets/okrypt sketch 2.svg";
import Links from "./Links";
import useMediaQuery from "@/hooks/useMediaQuery";
import mobileButton from "@/assets/Frame 3473045.svg";
import { useState } from "react";
import closedIcon from "@/assets/closeIcon.svg";

interface PropsLink {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  isTopOfPage: boolean;
}

export default function Navbar({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: PropsLink) {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarStyle = isTopOfPage
    ? ""
    : "bg-[#000D1F] shadow-md transition duration-500";
  const flexBetween = "flex justify-between items-center";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const pages = ["Home", "Buy Crypto", "Sell Crypto", "About Us", "Support"];

  return (
    <nav>
      <div
        className={`${flexBetween} ${navbarStyle} py-4 md:px-10 px-5 h-[68px] md:max-h-[100px] fixed top-0 z-30 bg-[#000D1F] w-full`}
      >
        <div className="flex gap-2 w-2/6 h-[28px] items-center md:h-[48px]">
          <img src={Logo} alt="Okrypt Logo" className=" w-[47.4px]" />
          <p className="font-[Figtree] font-bold text-xl md:text-[28px] text-white">
            Okrypt
          </p>
        </div>

        {/* Right side */}
        {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} text-white gap-[56px]`}>
              {pages.map((page) => (
                <Links
                  key={page}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
            <div>
              <p className="rounded-lg font-semibold text-xl bg-[#34EBE1] px-3 py-[10px]">
                Contact Us
              </p>
            </div>
          </div>
        ) : (
          <img
            src={mobileButton}
            alt="open menu"
            className="h-[36px] cursor-pointer"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          />
        )}
      </div>

      {/* Mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 top-0 z-40 h-[500px] text-white rounded-xl w-[226px] drop-shadow-xl bg-[#000D1F]">
          <div className="flex flex-col p-5 gap-[56px] items-end">
            {" "}
            <img
              src={closedIcon}
              className="h-[37.38px] cursor-pointer"
              alt="close"
              onClick={() => setIsMenuToggled(false)}
            />
            <div className="flex flex-col gap-[56px] self-end">
              {pages.map((page) => (
                <Links
                  key={page}
                  page={page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
