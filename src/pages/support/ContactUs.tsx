import React, { useState } from "react";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";

interface Card {
  id: number;
  title: string;
  description: string;
}


const cards: Card[] = [
  {
    id: 1,
    title: "Technical Problem",
    description:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac eu mauris. Tincidunt cum lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    title: "Bug Issue",
    description:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac eu mauris. Tincidunt cum lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    title: "Feature Request",
    description:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac eu mauris. Tincidunt cum lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    title: "General Inquiry",
    description:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac eu mauris. Tincidunt cum lorem ipsum dolor sit amet.",
  },
];


const ContactUs: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage: number = 2; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= cards.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? cards.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const visibleCards: Card[] = cards.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="md:px-[100px] bg-[#011528]  h-auto md:pt-20 px-3">
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        {/* Left Section */}
        <div className="w-[356px] md:w-full">
          <h1 className="text-[20px] md:text-[42px] font-bold">
            Contact us for
          </h1>
          <p className="text-[16px] font-light mt-2 md:text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac eu mauris.
            Tincidunt cum lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        {/* Right Section (Cards with Pagination) */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
          {visibleCards.map((card: Card) => (
            <div
              key={card.id}
              className="relative bg-[#000D1F] h-[587px] w-[460px] rounded-2xl p-6 md:w-[350px]  flex flex-col shadow-lg"
            >
              <div className="absolute top-4 left-4 text-[80px] font-bold text-[#34EBE1] opacity-10">
                {card.id}
              </div>
              <h3 className="text-lg font-semibold mt-4">
                {card.title}
              </h3>
              <p className="text-sm mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-4">
        <img src={leftArrow} alt="" onClick={handlePrev} />
        <img src={rightArrow} alt="" onClick={handleNext} />
      </div>
    </div>
  );
};

export default ContactUs;
