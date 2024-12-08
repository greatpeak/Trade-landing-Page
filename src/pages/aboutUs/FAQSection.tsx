import React, { useState, useEffect } from "react";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";
import profile1 from "../../assets/person1.svg";
import profile2 from "../../assets/person2.svg";
import tag from "../../assets/tag.svg";

interface FAQ {
  name: string;
  upVotes: number;
  content: string;
  mainContent: string;
  adminRole: string;
  image: string;
}

const faqData: FAQ[] = [
  {
    name: "Laurey Maupay",
    upVotes: 267,
    content:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum.Lorem ipsum dolor sit amet consectetur.",
    mainContent:
      "“Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum.Lorem ipsum dolor sit amet consectetur.”",
    adminRole: "Okrypt Admin",
    image: profile1,
  },
  {
    name: "Grace S. Newton",
    upVotes: 92,
    content:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum.Lorem ipsum dolor sit amet consectetur.",
    mainContent:
      "“Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum.Lorem ipsum dolor sit amet consectetur.”",
    adminRole: "Okrypt Admin",
    image: profile2,
  },
];

const FAQSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Track window resize to update layout dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex + 1) % faqData.length
        : (prevIndex + 2) % faqData.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      isMobile
        ? (prevIndex - 1 + faqData.length) % faqData.length
        : (prevIndex - 2 + faqData.length) % faqData.length
    );
  };

  const visibleFAQs = isMobile
    ? [faqData[currentIndex]]
    : faqData.slice(currentIndex, currentIndex + 2);

  return (
    <div className="px-4 lg:px-14 py-8 text-[#E1DFF3]">
      <h2 className="md:text-[28px] text-[20px] text-[#34EBE1] font-bold mb-6">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col">
        {/* FAQ Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[150px]">
          {visibleFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#031728] flex flex-col gap-[20px] md:w-[663px] md:h-[587px] w-[329px] h-[499px] rounded-lg p-6 mx-auto"
            >
              <div className="flex gap-[28px] items-center">
                <img
                  src={faq.image}
                  alt={faq.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="md:text-[28px] text-[20px] font-bold md:w-[529px] w-[265px]">
                    {faq.name}
                  </h4>
                  <p className="text-base mb-2">+{faq.upVotes} Others</p>
                </div>
              </div>
              <p className="text-base font-light italic mb-4">{faq.content}</p>
              <p className="md:w-[529px] w-[265px] md:my-5 my-2 md:text-[32px] text-[18px] font-medium">
                {faq.mainContent}
              </p>
              <div className="flex gap-[10px]">
                <img
                  src={tag}
                  alt=""
                  className="w-[15px] h-[15px] md:w-[40px] md:h-[40px]"
                />
                <p className="text-xl md:text-[28px] font-bold">
                  {faq.adminRole}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="flex justify-center md:justify-end gap-4 mt-8">
        <button onClick={handlePrev} className="p-2">
          <img
            src={leftArrow}
            alt="Previous"
            className="w-[40px] md:w-[56px]"
          />
        </button>
        <button onClick={handleNext} className="p-2">
          <img src={rightArrow} alt="Next" className="w-[40px] md:w-[56px]" />
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
