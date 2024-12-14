import transactionIcon from "../../assets/tabler_transaction-bitcoin.svg";
import userIcon from "../../assets/User.svg";
import CoinsIcon from "../../assets/coins.svg";
import launchIcon from "../../assets/heroicons_rocket-launch-20-solid.svg";
import handIcon from "../../assets/hand.svg";
// import linearGradient from "../../assets/Ellipse 1348.svg";
export default function AboutHome() {
  return (
    <>
      {" "}
      <div className="block md:flex px-4  md:mb-0 mb-20">
        {" "}
        <div className="w-[365px] h-auto lg:px-14 md:w-auto ">
          {" "}
          <h1 className="text-transparent text-[32px] bg-clip-text bg-gradient-to-r from-[#2DCCC4] to-[#4D36BC] font-light md:text-[64px] ">
            Explore the future <br /> of Crypto Trading
          </h1>
          <p className="text-base md:text-[20px] min-w-[365px] md:min-w-[567px] font-light mt-4 mb-8">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac
            mi purus. Tincidunt cum. nectus eu ac mi purus.
          </p>
          <div className="flex flex-col mt-4 gap-[28px]">
            <div className="flex gap-2 md:gap-[72px]">
              <div className="bg-[#031728] px-3 py-[10px] md:p-[16px] rounded-lg flex flex-col gap-[10px] md:flex-row">
                <img
                  src={CoinsIcon}
                  alt=""
                  className="w-[69px] h-[18px] md:w-[108px] md:h-[28px]"
                />
                <p className="text-sm font-medium md:text-[20px]">
                  Over 500+ Digital coins
                </p>
              </div>
              <div className="bg-[#031728] px-3 py-[10px] md:p-[16px] rounded-lg flex flex-col gap-[10px] md:flex-row">
                <img
                  src={userIcon}
                  alt=""
                  className="w-[69px] h-[18px] md:w-[108px] md:h-[28px]"
                />
                <p className="text-sm font-medium md:text-[20px]">
                  300+ Users{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-2 md:gap-[72px]">
              <div className="bg-[#031728] px-3 py-[10px] md:p-[16px] rounded-lg flex flex-col gap-[10px] md:flex-row">
                <img
                  src={launchIcon}
                  alt=""
                  className="w-[69px] h-[18px] md:w-[108px] md:h-[28px]"
                />
                <p className="text-sm font-medium md:text-[20px]">
                  Launched 200 days{" "}
                </p>
              </div>
              <div className="bg-[#031728] px-3 py-[10px] md:p-[16px] rounded-lg flex flex-col gap-[10px] md:flex-row">
                <img
                  src={transactionIcon}
                  alt=""
                  className="w-[69px] h-[18px] md:w-[108px] md:h-[28px]"
                />
                <p className="text-sm font-medium md:text-[20px]">
                  32.4k Transactions{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={handIcon}
          alt=""
          className="hidden md:block w-[1053px] h-[743px] mt-[-48px] overflow-hiddenb"
        />
      </div>
    </>
  );
}
