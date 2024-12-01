import coin1 from "../assets/Coin Logo.svg";
import coin2 from "../assets/Coin Logo (1).svg";
import coin3 from "../assets/Coin Logo (2).svg";
import coin4 from "../assets/Coin Logo (3).svg";
import coin5 from "../assets/Coin Logo (4).svg";
import coin6 from "../assets/Coin Logo (5).svg";
import coin7 from "../assets/Coin Logo (6).svg";
const Coins = () => {
  return (
    <div className="px-4 lg:px-10 py-2 w-full bg-[#000D1F] flex flex-col items-center justify-center">
      <div className="max-w-[1202px] text-center">
        <div className="text-white mb-4 md:mb-7">
          <h4 className="font-bold md:text-[42px] text-[28px] max-w-[632px] mx-auto">
            Variety of Coins at your Disposal
          </h4>
          <p className="max-w-[700px] font-light text-sm md:text-base mt-5 mx-auto">
            In Okrypt, we focus on the most traded coins to ensure fast,
            reliable, and high-value <br className="hidden md:block" />{" "}
            exchanges for our users.
          </p>
        </div>
      </div>
      <div className="max-w-[804px] text-[#E1DFF3] flex flex-col  gap-5 md:gap-8 justify-center items-center">
        <div className="flex gap-6 md:gap-8 w-full mx-auto">
          <div className="flex justify-center items-center gap-1 md:px-6 px-3 rounded-[64px] md:py-3 py-2 bg-[#031728]">
            <img
              src={coin1}
              alt=""
              className="md:w-[32px] w-[18px] md:h-[32px] h-[18px]"
            />{" "}
            <p className="md:text-lg text-[10.63px] font-medium">Bitcoin</p>
          </div>
          <div className="flex justify-center items-center gap-1 md:px-6 px-3 rounded-[64px] md:py-3 py-2 bg-[#031728]">
            <img
              src={coin2}
              alt=""
              className="md:w-[32px] w-[18px] md:h-[32px] h-[18px]"
            />{" "}
            <p className="md:text-lg text-[10.63px] font-medium">BNB</p>
          </div>
          <div className="flex justify-center items-center gap-1 md:px-6 px-3 rounded-[64px] md:py-3 py-2 bg-[#031728]">
            <img
              src={coin3}
              alt=""
              className="md:w-[32px] w-[18px] md:h-[32px] h-[18px]"
            />{" "}
            <p className="md:text-lg text-[10.63px] font-medium">Ethereum</p>
          </div>
          <div className="justify-center hidden md:flex items-center gap-1 md:px-6 px-3 rounded-[64px] md:py-3 py-2 bg-[#031728]">
            <img
              src={coin4}
              alt=""
              className="md:w-[32px] w-[18px] md:h-[32px] h-[18px]"
            />{" "}
            <p className="md:text-lg text-[10.63px] font-medium">Dogecoin</p>
          </div>
        </div>
        <div className="flex justify-center gap-6 md:gap-8 w-full mx-auto">
          {" "}
          <div className="flex justify-center items-center gap-1 md:px-6 px-3 rounded-[64px] md:py-3 py-2 bg-[#031728]">
            <img
              src={coin5}
              alt=""
              className="md:w-[32px] w-[18px] md:h-[32px] h-[18px]"
            />{" "}
            <p className="md:text-lg text-[10.63px] font-medium">USDT</p>
          </div>
          <div className="flex justify-center items-center gap-1 md:px-6 px-3 rounded-[64px] md:py-3 py-2 bg-[#031728]">
            <img
              src={coin6}
              alt=""
              className="md:w-[32px] w-[18px] md:h-[32px] h-[18px]"
            />{" "}
            <p className="md:text-lg text-[10.63px] font-medium">Solana</p>
          </div>
          <div className="md:flex hidden justify-center items-center gap-1 md:px-6 px-3 rounded-[64px] md:py-3 py-2 bg-[#031728]">
            <img
              src={coin7}
              alt=""
              className="md:w-[32px] w-[18px] md:h-[32px] h-[18px]"
            />{" "}
            <p className="md:text-lg text-[10.63px] font-medium">Litecoin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
