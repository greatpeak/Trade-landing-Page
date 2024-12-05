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
    <div className="text-[#E1DFF3] px-10 flex flex-col justify-center items-center">
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" relative justify-center bg-[#021628] p-6 rounded-lg md:w-[368px] h-[262px] w-[365px] shadow-md flex flex-col items-center"
          >
            <div className="absolute top-[-41px]">
              <img
                src={feature.icon}
                alt=""
                className="md:w-[82px] md:h-[82px] w-[68.33px] h-[68.33px] "
              />
            </div>
            <h3 className="font-medium text-[20px]">{feature.title}</h3>
            <p className="text-sm mt-2">{feature.description}</p>
            <img
              src={feature.number}
              alt=""
              className=" absolute md:left-[272px] left-[210px] overflow-hidden h-[265px] md:h-auto"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-[96px] h-[1,121px]">
        {/* Info Section */}
        <div className="mt-16 ">
          <h2 className="md:text-[42px] text-[20px] font-bold">
            What is Okrypt, <br /> What can I use it for?
          </h2>
          <p className="md:mt-10 w-[356px] md:w-[558px] mx-auto font-light text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac
            mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
            Tincidunt cum.Lorem ipsum dolor sit amet consectetur. Senectus eu ac
            mi purus.{" "}
          </p>
          <button className="flex justify-center items-center gap-5 mt-6 px-6 py-2 bg-[#34EBE1] text-[#120D2D] text-[20px] font-bold rounded-3xl shadow-md">
            <p>Let’s get Started</p> <img src={arrow} alt="" />
          </button>
        </div>

        {/* Solving Section */}
        <div className="mt-16 w-[469px]">
          <h3 className="md:text-[28px] text-[20px] text-[#34EBE1] font-bold mb-8">
            What is it trying to solve
          </h3>
          <div className="flex flex-col justify-center gap-8">
            {solvingPoints.map((point, index) => (
              <div
                key={index}
                className="bg-[#021628] p-4 rounded-lg text-sm shadow-md max-w-sm"
              >
                <div className="flex items-center  gap-1">
                  <img src={shield} alt="" />{" "}
                  <h4 className="font-medium text-[20px]">{point.text}</h4>
                </div>
                <p className="mt-2 text-[16px] font-light">
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
