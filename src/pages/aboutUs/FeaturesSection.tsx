import React from "react";
import fastIcon from "../../assets/fast.svg";
import customerIcon from "../../assets/mdi_customer-service.svg";
import rateIcon from "../../assets/rate.svg";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import arrow from "../../assets/Arrow 2.svg";
import shield from "../../assets/Shield-Check.svg";

interface Feature {
  icon: string;
  title: string;
  description: string;
  number: string;
}

interface SolvingPoint {
  text: string;
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      icon: fastIcon,
      title: "Fast and Easy Transaction",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ips",
      number: one,
    },
    {
      icon: rateIcon,
      title: "Secure Exchange Process",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ips",
      number: two,
    },
    {
      icon: customerIcon,
      title: "Professional Support",
      description:
        "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ips",
      number: three,
    },
  ];

  const solvingPoints: SolvingPoint[] = [
    { text: "Affordable Buying Rate." },
    { text: "Fast, Easy, and Secure transaction." },
    { text: "High Exchange Rate." },
  ];

  return (
    <div className="text-[#E1DFF3] px-4 flex flex-col justify-center items-center">
      {/* Features Section */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative justify-center bg-[#021628] p-4 rounded-lg mb-7 w-[365px] md:w-[368px] h-[262px] shadow-md flex flex-col items-center mx-auto"
          >
            <div className="absolute top-[-41px] left-1/2 transform -translate-x-1/2">
              <img
                src={feature.icon}
                alt=""
                className="md:w-[82px] md:h-[82px] w-[68.33px] h-[68.33px]"
              />
            </div>
            <h3 className="font-medium text-[20px] mt-10">{feature.title}</h3>
            <p className="text-sm mt-2">{feature.description}</p>
            {/* <img
              src={feature.number}
              alt=""
              className="absolute bottom-[-20px] right-0 md:right-[10px] h-full opacity-4 md:h-auto overflow-hidden"
            /> */}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-[96px]">
        {/* Info Section */}
        <div className="mt-8 md:mt-16 flex flex-col items-start text-left">
          <h2 className="text-[24px] md:text-[42px] font-bold leading-snug">
            What is Okrypt, <br /> What can I use it for?
          </h2>
          <p className="mt-4 md:mt-10 w-full max-w-[356px] md:max-w-[558px] font-light text-[16px] md:text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac
            mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac
            mi purus.
          </p>
          <button className="flex justify-center items-center gap-5 mt-6 px-4 md:px-6 py-2 bg-[#34EBE1] text-[#120D2D] text-[16px] md:text-[20px] font-bold rounded-3xl shadow-md">
            <p>Let’s get Started</p>
            <img src={arrow} alt="Arrow" />
          </button>
        </div>

        {/* Solving Section */}
        <div className="mt-8 md:mt-16 w-full md:w-auto">
          <h3 className="text-[20px] md:text-[28px] text-[#34EBE1] font-bold mb-6 md:mb-8">
            What is it trying to solve
          </h3>
          <div className="flex flex-col gap-6 md:gap-8">
            {solvingPoints.map((point, index) => (
              <div
                key={index}
                className="bg-[#021628] p-4 rounded-lg shadow-md max-w-full md:max-w-sm mx-auto md:mx-0"
              >
                <div className="flex items-center gap-2">
                  <img src={shield} alt="Shield" />
                  <h4 className="font-medium text-[16px] md:text-[20px]">
                    {point.text}
                  </h4>
                </div>
                <p className="mt-2 text-[14px] md:text-[16px] font-light">
                  Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi
                  purus. Tincidunt cum.Lorem ipsum
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
