import React, { useState } from "react";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";
import profile1 from "../../assets/person1.svg"; 
import profile2 from "../../assets/person2.svg";

interface FAQ {
  name: string;
  upvotes: number;
  content: string;
  adminRole: string;
  image: string;
}

const faqData: FAQ[] = [
  {
    name: "Laurey Maupay",
    upvotes: 267,
    content:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    adminRole: "Okrypt Admin",
    image: profile1,
  },
  {
    name: "Grace S. Newton",
    upvotes: 92,
    content:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    adminRole: "Okrypt Admin",
    image: profile2,
  },
  // Add more FAQ items if needed
];

const FAQSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= faqData.length ? 0 : prevIndex + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? faqData.length - 2 : prevIndex - 2
    );
  };

  const visibleFAQs =
    window.innerWidth >= 1024
      ? faqData.slice(currentIndex, currentIndex + 2)
      : [faqData[currentIndex]];

  return (
    <div className="px-4 lg:px-14 py-8  text-[#E1DFF3]">
      <h2 className="text-[28px] text-[#34EBE1] font-bold mb-6">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col ">
        {/* FAQ Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visibleFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#042A45] rounded-lg p-6 text-center"
            >
              <img
                src={faq.image}
                alt={faq.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-bold">{faq.name}</h4>
              <p className="text-sm text-gray-400 mb-2">
                +{faq.upvotes} Others
              </p>
              <p className="text-base font-light italic mb-4">
                "{faq.content}"
              </p>
              <p className="text-sm font-medium">{faq.adminRole}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="flex gap-4 self-end">
        <button onClick={handlePrev} className="p-2">
          <img src={leftArrow} alt="Previous" />
        </button>
        <button onClick={handleNext} className="p-2">
          <img src={rightArrow} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
