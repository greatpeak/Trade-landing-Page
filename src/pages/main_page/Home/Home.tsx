import appleIcon from "../../../assets/appleIcon.svg";
import playStoreIcon from "../../../assets/playStoreIcon.svg";
import phoneImage from "../../../assets/homepageImg.svg";
import phoneImageMobile from "../../../assets/phoneImgMobile.svg";
import fastIcon from "../../../assets/fast.svg";
import customerIcon from "../../../assets/mdi_customer-service.svg";
import rateIcon from "../../../assets/rate.svg";
import image from "../../../assets/OKRYPT.svg";
import image1 from "../../../assets/linearGradient.svg";
function Home() {
  return (
    <div id="home" className="text-white font-[Figtree] mx-auto">
      {/* Hero Section */}
      <section>
        {/* Content */}
        <div className="text-center flex flex-col items-center justify-center min-h-screen gap-6 px-5">
          <h1 className="text-[28px] md:text-[64px] font-bold">
            You should spend your <span className="text-[#34EBE1]">Crypto</span>{" "}
            <span className="inline">like</span>{" "}
            <span className="text-[#34EBE1]">Cash</span>
          </h1>

          <p className="md:text-xl text-lg font-light">
            Instantly spend your crypto like cash whenever you want
          </p>
          {/* App Store Buttons */}
          <div className="flex flex-row gap-4 mt-6">
            <button className="flex items-center px-4 py-3 gap-2 bg-[#34EBE1] text-black rounded-md w-full sm:w-[200px] h-[60px] justify-center">
              <img src={playStoreIcon} alt="Google Play" className="h-6 w-6" />
              <div className="text-left">
                <p className="md:text-sm text-[10px] font-medium leading-none">
                  Get it on
                </p>
                <p className="md:text-lg text-base font-semibold leading-none">
                  Google Play
                </p>
              </div>
            </button>
            <button className="flex items-center px-4 py-3 gap-2 bg-[#34EBE10D] text-white rounded-md w-full sm:w-[200px] h-[60px] justify-center">
              <img src={appleIcon} alt="App Store" className="h-6 w-6" />
              <div className="text-left">
                <p className="md:text-sm text-[10px] font-medium leading-none">
                  Download on
                </p>
                <p className="md:text-lg text-base font-semibold leading-none">
                  App Store
                </p>
              </div>
            </button>
          </div>

          <div
            id="backgroundText linearGradient"
            style={{ backgroundImage: `url(${image1})` }}
          >
            {/* Phones  Desktop*/}
            <div
              className="mt-1 hidden md:block"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={phoneImage}
                alt="Phones Display"
                className="md:mt-[-400px]"
              />
            </div>

            {/* Phones  Mobile*/}
            <div
              className="mt-1 md:hidden block"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={phoneImageMobile}
                alt="Phones Display"
                className="mt-[-50px] w-auto"
              />
            </div>
          </div>

          {/* Features Section */}
          <section className="bg-[#031728] flex justify-center items-center py-4 md:py-8 md:px-8 px-3 rounded-xl max-w-[1208px] md:max-h-[167px]">
            <div className="max-w-[1125px] text-left mx-auto flex flex-wrap justify-center gap-8">
              {/* Feature 1 */}
              <div className=" p-5 bg-[#000D1F] h-[106px] w-[326px] rounded-lg max-w-[300px]">
                <div className="flex gap-2">
                  <img src={fastIcon} alt="" />
                  <h3 className="text-xl font-medium">
                    Fast and Easy{" "}
                    <span className="text-[#34EBE1]">Exchange</span>
                  </h3>
                </div>
                <p className="mt-2 text-sm">
                  Exchange Crypto for Cash and Cash for Crypto Quickly
                </p>
              </div>
              {/* Feature 2 */}
              <div className="p-5 bg-[#000D1F] h-[106px] w-[326px] rounded-lg max-w-[300px]">
                <div className="flex gap-2">
                  <img src={rateIcon} alt="" />
                  <h3 className="text-xl font-medium">
                    High Exchange <span className="text-[#34EBE1]">Rate</span>
                  </h3>
                </div>{" "}
                <p className="mt-2 text-sm">
                  Get the most competitive exchange rate for your crypto
                </p>
              </div>
              {/* Feature 3 */}
              <div className="p-5 bg-[#000D1F] h-[106px] w-[326px] rounded-lg max-w-[300px]">
                <div className="flex gap-2">
                  <img src={customerIcon} alt="" />
                  <h3 className="text-xl font-medium">
                    24/7 <span className="text-[#34EBE1]">Customer Care</span>
                  </h3>
                </div>{" "}
                <p className="mt-2 text-sm">
                  Live support with real humans to resolve your issues fast
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
