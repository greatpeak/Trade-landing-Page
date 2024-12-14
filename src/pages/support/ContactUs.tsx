import React, { useState, useEffect } from "react";
import leftArrow from "../../assets/left.svg";
import rightArrow from "../../assets/right.svg";
import contactBg from "../../assets/contactBG.svg"

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
  const [itemsPerPage, setItemsPerPage] = useState<number>(2);

  // Handle responsive itemsPerPage
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div
      className="md:px-[100px] bg-[#011528] h-auto md:py-20 pt-6 pb-20 mb-32 md:mb-0 px-4"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row md:gap-20  justify-between items-center">
        {/* Left Section */}
        <div className="w-[356px] md:min-w-[502px] mb-5">
          <h1 className="text-[28px] md:text-[42px] font-bold">
            Contact us for
          </h1>
          <p className="text-[16px] font-light mt-2 md:text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Senectus eu ac eu mauris.
            Tincidunt cum lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        {/* Right Section (Cards with Pagination) */}
        <div className="flex relative flex-col md:flex-row gap-6 justify-between items-start">
          {visibleCards.map((card: Card) => (
            <div
              key={card.id}
              className="bg-[#000D1F] h-[482px] md:h-[587px] rounded-2xl p-6 w-[350px] flex flex-col shadow-lg"
            >
              <div className="flex flex-col md:gap-[90px] w-[280px]">
                <div className="md:text-[200px] text-[150px] font-bold mt-0 text-[#34EBE1] opacity-10">
                  {card.id}
                </div>
                <div className="self-end">
                  <h3 className="text-xl md:text-[28px] font-medium mt-4">
                    {card.title}
                  </h3>
                  <p className="text-base font-light mt-4">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Pagination Controls */}
          <div className="absolute flex md:right-[35%] md:bottom-[40%] right-0 bottom-[-10%] justify-center mt-8 gap-4">
            <img
              src={leftArrow}
              alt="Previous"
              className="w-[36px] h-[36px] md:w-[56px] md:h-[56px]"
              onClick={handlePrev}
            />
            <img
              src={rightArrow}
              alt="Next"
              className="w-[36px] h-[36px] md:w-[56px] md:h-[56px]"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
