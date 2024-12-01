import appleIcon from "@/assets/appleIcon.svg";
import playStoreIcon from "@/assets/playStoreIcon.svg";
import phoneImage from "@/assets/phoneImage.svg";
import fastIcon from "@/assets/fast.svg";
import customerIcon from "@/assets/mdi_customer-service.svg";
import rateIcon from "@/assets/rate.svg";

function Home() {
  return (
    <div className="bg-[#000D1F] text-white font-[Figtree] mx-auto">
      {/* Hero Section */}
      <section id="home">
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
          <div className="flex gap-4 mt-6 ">
            <button className="flex items-center px-2 py-2 gap-2 bg-[#34EBE1] text-black rounded-md w-full h-full justify-center">
              <img src={playStoreIcon} alt="Google Play" className="h-6 w-6" />
              <div>
                {" "}
                <p className="text-base font-medium">Get it on </p>
                <p className="text-[22px] font-semibold">Google Play</p>
              </div>
            </button>
            <button className="flex items-center px-2 py-2 gap-2 bg-[#34EBE10D] text-white rounded-md w-full h-full justify-center">
              <img src={appleIcon} alt="App Store" className="h-6 w-6" />
              <div>
                <p className="text-base font-medium">Download on</p>
                <p className="text-[22px] font-semibold">App Store</p>
              </div>
            </button>
          </div>

          {/* Phones */}
          <div className="mt-12">
            <img
              src={phoneImage}
              alt="Phones Display"
              className="md:w-[746px] md:h-[640px] h-[214px] w-[211px] max-w-md mx-auto"
            />
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
