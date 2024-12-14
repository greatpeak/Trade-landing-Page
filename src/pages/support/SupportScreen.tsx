import supportBg from "../../assets/bgContact.svg";
import useMediaQuery from "@/hooks/useMediaQuery";

const SupportScreen = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const backgroundImage = isSmallScreen ? "" : `url(${supportBg})`;

  return (
    <div
      className="md:px-[100px] md:pt-0 pt-24 md:pb-10 py-6 px-5"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "665px", 
      }}
    >
      <div className="flex flex-col md:pt-[100px] md:flex-row gap-5 justify-between items-center">
        <div className="w-[356px] md:w-full">
          <h1 className="text-[20px] md:text-[42px] font-bold">
            WANT TO SUPPORT <br className="hidden md:block" /> OKRYPT, LOREM
            IPSUM <br className="hidden md:block" />
            IPSUM ADDUN BELLAN.
          </h1>
          <p className="text-[16px] mt-2 md:[20px]">
            Contact us to support Okrypt
          </p>
        </div>
        <div className="text-white bg-[#011528] md:bg-[#01152869] md:backdrop-blur-sm rounded-2xl w-[355px] md:w-[575px] px-5 py-5 flex flex-col justify-center gap-6">
          <form className="flex flex-col gap-4">
            <label
              htmlFor="Email Address"
              className="text-[12px] md:text-[16px]"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Input your Email"
              className="md:w-[519px] w-[303px] py-3 px-4 bg-[#000D1F] text-white rounded-lg outline-none focus:ring-2 focus:ring-[#34EBE1]"
            />
            <label
              htmlFor="Email Address"
              className="text-[12px] md:text-[16px]"
            >
              Description{" "}
            </label>
            <textarea
              placeholder="Add message of support"
              className="md:w-[519px] w-[303px] py-1 px-2 bg-[#000D1F] text-white rounded-lg outline-none focus:ring-2 focus:ring-[#34EBE1] h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#34EBE1] text-[#031728] py-3 px-1 rounded-lg font-semibold hover:bg-[#27b5af] transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportScreen;
