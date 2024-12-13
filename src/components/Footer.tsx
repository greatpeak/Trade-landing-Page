import logo from "../assets/okrypt sketch 2.svg";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/🦆 icon _instagram alt icon_.svg";
import x from "../assets/simple-icons_x.svg";
import sendIcon from "../assets/mingcute_send-fill.svg";
import phoneImage from "../assets/iMockup - iPhone 15 Pro Max.svg";
import arrow from "../assets/Arrow 2.svg"

const Footer = () => {
  return (
    <>
      <div className="bg-[#031728] md:mt-40">
        {/* Main Footer Section */}
        <div className="md:flex items-center hidden justify-center text-[#E1DFF3]  relative">
          <div className="px-4 md:block lg:px-14 py-15 w-full max-w-[1202px] bg-primaryLight relative">
            <div className="flex gap-20 max-w-[1202px] md:flex-row">
              <div className="max-w-[629px] mt-10">
                <div className="text-accentColor1">
                  <h4 className="font-bold text-[42px] max-w-[632px]">
                    Get ready to explore crypto world.
                  </h4>
                  <h3 className="font-semibold text-[28px] text-[#34EBE1] mt-2 max-w-[509px]">
                    Join Our Widely Used Trading Platform.
                  </h3>
                  <p className="max-w-[551px] font-light text-base mt-6">
                    Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi
                    purus. Tincidunt cum. Lorem ipsum dolor sit amet
                    consectetur. Senectus eu ac mi purus. Tincidunt cum.
                  </p>
                  <button className="text-[#120D2D] flex justify-center items-center gap-5 bg-[#34EBE1] mt-4 px-12 py-3 rounded-full font-semibold">
                    Let get Started <img src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
            {/* Phone Image Overlapping - hidden on small screens */}
            <img
              src={phoneImage}
              alt="Phone Display"
              className="hidden md:block absolute bottom-[30px] right-[100px] h-[450px] w-[420px] object-contain z-10"
            />
          </div>
        </div>

        {/* Footer Content Section */}
        <div className="flex items-center justify-center py-5 bg-primaryLight">
          <div className="px-4 lg:px-14 w-full max-w-[1259.56px] text-[#E1DFF3] md:border-t-[0.1px]">
            <div className="md:pt-10 md:flex md:flex-wrap gap-6 md:gap-3 items-center md:justify-evenly text-center md:text-left">
              {/* Logo Section */}
              <div className="flex justify-center md:justify-start items-center gap-8 md:mb-0 w-full md:w-auto">
                <a
                  href="#"
                  className="text-2xl p-4 font-semibold flex items-center justify-center space-x-3"
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="self-start h-[50px] w-[50px]"
                  />
                  <span className="text-white text-[28px]">Okrypt</span>
                </a>
              </div>

              {/* Company Section */}
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <h4 className="font-bold text-[#34EBE1] text-xl mb-2">
                  Company
                </h4>
                <ul className="space-y-2 font-light text-base">
                  <li>About</li>
                  <li>Contact</li>
                  <li>FAQ</li>
                </ul>
              </div>

              {/* Legal Section */}
              <div className="w-full md:w-auto mb-4 md:mb-0">
                <h4 className="font-bold text-[#34EBE1] text-xl mb-2">Legal</h4>
                <ul className="space-y-2 font-light text-base">
                  <li>Terms of service</li>
                  <li>Privacy policy</li>
                  <li>Cookie policy</li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="w-full md:w-auto mb-7 md:mb-0">
                <h4 className="font-bold text-[#34EBE1] text-xl mb-2">
                  Contact
                </h4>
                <ul className="space-y-2 font-light text-base">
                  <li>+234 (0) 801 234 5678</li>
                  <li>okryptcrypto@gmail.com</li>
                  <li className="flex justify-center md:justify-start gap-3 mt-4">
                    <a href="#">
                      <img src={facebookIcon} alt="Facebook" className="w-6" />
                    </a>
                    <a href="#">
                      <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="w-6"
                      />
                    </a>
                    <a href="#">
                      <img src={x} alt="X" className="w-6" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter Section */}
              <div className="w-full md:w-auto max-w-sm mx-auto text-left">
                <h4 className="font-bold text-[24px] md:text-[28px] mb-2">
                  Subscribe to our newsletter
                </h4>
                <p className="font-light text-base mb-2">
                  The latest news, articles, and resources, sent to your inbox
                  weekly.
                </p>
                <div className="flex flex-row items-center px-1 py-2 gap-2">
                  <input
                    className="bg-[#666262] w-full text-accentColor1 font-light text-sm py-4 px-3 leading-tight border-none outline-none rounded-xl"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email"
                  />
                  <button className="bg-[#34EBE1] py-4 px-5 rounded-2xl flex items-center justify-center">
                    <img src={sendIcon} alt="Send" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="px-4 lg:px-14 pb-8 w-full text-[#E1DFF3]">
          <div className="max-w-[1259.56px] md:border-t-[0.1px] mx-auto ">
            <h6 className="font-semibold text-xl md:text-xl text-center lg:text-left mb-5 mt-4">
              &copy; Okryptcrypto. All rights reserved.
            </h6>
            <p className="font-light text-lg md:text-base text-center lg:text-left mx-auto lg:mx-0 leading-relaxed">
              Okrypt is a peer-to-peer platform that enables the purchase and
              sale of Cryptocurrency. These services are facilitated by the
              okrypt crypto technology. Okrypt does not provide remittance
              services in the form of fiat. Okrypt is not a foreign remittance
              or money exchange platform. Bitnob is in partnership with
              third-party licensed companies that facilitate and provide other
              services on its behalf.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
