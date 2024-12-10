import currencyImage from "../../assets/currency.svg";
import shieldCheck from "../../assets/Shield-Check.svg";

const Currency = () => {
  return (
    <div className=" px-4 lg:px-10 py-20 w-full flex justify-center md:gap-24">
      <div className="max-w-[1178px] md:h-[428px] flex justify-between gap-6  flex-col md:flex-row">
        <div>
          <img
            src={currencyImage}
            alt=""
            className="w-[365px] h-[223px] md:w-[585px] md:h-[358px]"
          />
        </div>
        <div className="text-white flex flex-col md:gap-2">
          <h4 className="font-semibold text-[28px] md:text-4xl">
            Fast Payments{" "}
            <span className="text-[#34EBE1]">Directly to Your Bank.</span>
          </h4>

          <p className="text-[16px] md:text-[20px] font-light mt-1 max-w-[473px]">
            Exchange your crypto for cash and receive fast payments directly to
            your bank. Our platform offers a seamless process, allowing you to
            convert your digital assets into fiat money quickly and securely.{" "}
          </p>
          <div className="mt-3 flex gap-1">
            <img
              src={shieldCheck}
              alt=""
              className="max-w-[28px] max-h-[28px]"
            />
            <h5 className="max-w-[308px] font-medium text-[16px] md:text-xl">
              Fast, Easy and Secure transaction.
            </h5>
          </div>
          <div className="mt-3 flex gap-3">
            <img
              src={shieldCheck}
              alt=""
              className="max-w-[28px] max-h-[28px]"
            />
            <h5 className="max-w-[308px] font-medium text-[16px] md:text-xl">
              Affordable Buying Rate.{" "}
            </h5>
          </div>
          <div className="mt-3 flex gap-3">
            <img
              src={shieldCheck}
              alt=""
              className="max-w-[28px] max-h-[28px]"
            />
            <h5 className="max-w-[308px] font-medium text-[16px] md:text-xl">
              High Exchange Rate.{" "}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
