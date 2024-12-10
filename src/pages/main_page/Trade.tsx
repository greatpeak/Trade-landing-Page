import earthImage from "../../assets/Earth.svg";

const Trade = () => {
  return (
    <div className="relative flex justify-center items-center max-w-[1389.5px] px-4 lg:px-14 mx-auto py-[100px] w-full bg-[#000D1F]">
      <div className="max-w-[1202px] flex justify-between">
        <div className=" max-w-[629px] z-10">
          <div className="text-[#E1DFF3]">
            <h4 className="font-bold md:text-4xl text-[28px] max-w-[629px]">
              <span className="text-[#34EBE1]">Large volumes?</span> We got you
              covered.{" "}
            </h4>

            <p className="max-w-[551px] font-light text-base md:text-xl mt-6">
              Trust us to handle large volumes with ease—our platform is built
              for reliability, ensuring fast, secure, and efficient transactions
              no matter the size.{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-8">
            <div className="text-[#E1DFF3] max-w-[160px]">
              <h4 className="font-bold text-[20px] md:text-[29px]">9.5k+</h4>
              <p className="font-light text-base md:text-[16px]">
                Number of active trades on Okrypt.{" "}
              </p>
            </div>
            <div className="text-[#E1DFF3] max-w-[160px]">
              <h4 className="font-bold text-[20px] md:text-[29px]">29</h4>
              <p className="font-light text-base md:text-[16px]">
                No of active users on Okrypt.{" "}
              </p>
            </div>
            <div className="text-[#E1DFF3] max-w-[160px]">
              <h4 className="font-bold text-[20px] md:text-[29px]">204</h4>
              <p className="font-light text-base md:text-[16px]">
                No of successful daily transaction on Okrypt.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Earth Image for Desktop */}
        <img
          src={earthImage}
          alt="Earth"
          className="w-[796px] h-auto hidden md:block"
        />
      </div>

      {/* Earth Image for Mobile */}
      <img
        src={earthImage}
        alt="Earth"
        className="absolute mt-5 w-full object-cover h-[440px] md:w-[796px] opacity-[30%] md:hidden"
      />
    </div>
  );
};

export default Trade;
