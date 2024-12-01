import React, { useState } from "react";
import leftArrow from "../assets/left.svg";
import rightArrow from "../assets/right.svg";
import personImage1 from "../assets/person1.svg";
import personImage2 from "../assets/person2.svg";

interface User {
  name: string;
  role: string;
  feedback: string;
  rating: number;
  image: string;
}

const users: User[] = [
  {
    name: "Laurey Maupay",
    role: "Entrepreneur",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 5,
    image: personImage1,
  },
  {
    name: "Violet S. Amelia",
    role: "Crypto Enthusiast",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 5,
    image: personImage2,
  },
  {
    name: "Abatan Divine",
    role: "Investor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 1,
    image: personImage1,
  },
  {
    name: "Samuel Divine",
    role: "Gym Instructor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 3,
    image: personImage1,
  },
  {
    name: "Kelvin Cable",
    role: "Investor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 4,
    image: personImage2,
  },
  {
    name: "Kelvin Cable",
    role: "Investor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 4,
    image: personImage2,
  },
  {
    name: "Kelvin Cable",
    role: "Investor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 4,
    image: personImage2,
  },
  {
    name: "Kelvin Cable",
    role: "Investor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 4,
    image: personImage2,
  },
  {
    name: "Kelvin Cable",
    role: "Investor",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus. Tincidunt cum. Lorem ipsum dolor sit amet consectetur.",
    rating: 4,
    image: personImage2,
  },
];

const UserExp: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= users.length ? 0 : prevIndex + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? users.length - 2 : prevIndex - 2
    );
  };

  const visibleUsers =
    window.innerWidth >= 1024 
      ? users.slice(currentIndex, currentIndex + 2)
      : [users[currentIndex]];

  const progressWidth = ((currentIndex + 1) / users.length) * 100;

  return (
    <>
      <div className="px-4 lg:px-14 py-5 w-full flex pb-34 items-center justify-center">
        <div className="max-w-[1202px] text-center">
          <div className="text-[#E1DFF3]">
            <h4 className="font-bold text-[28px] md:text-[42px] max-w-[632px] mx-auto">
              What our users say about us
            </h4>
            <p className="max-w-[700px] font-light text-sm md:text-base mt-6 mx-auto">
              Lorem ipsum dolor sit amet consectetur. Senectus eu ac mi purus.
              Tincidunt cum. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mt-20 items-center">
            {/* Testimonial Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {visibleUsers.map((user, index) => (
                <div
                  key={index}
                  className="bg-[#031728] text-[#E1DFF3] p-6 rounded-lg shadow-lg"
                >
                  <div className="flex flex-col max-w-[411px] relative items-center">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="rounded-full w-16 h-16 absolute top-[-61px]"
                    />
                    <h4 className="md:text-[28px] text-[20px] font-bold mt-5">
                      {user.name}
                    </h4>
                    <p className="md:text-[20px] text-[16px] font-medium">
                      {user.role}
                    </p>
                    <p className="font-light md:text-[20px] text-[14px] mt-4 text-center max-w-[219px]">
                      {user.feedback}
                    </p>
                    <div className="flex justify-center mt-4">
                      {Array.from({ length: user.rating }).map((_, idx) => (
                        <span key={idx} className="text-yellow-500">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            

            <div className="md:w-1/5 md:self-end block">
              {" "}
              {/* Progress Indicator */}
              <div className="">
                <p className="text-sm hidden md:block text-[#E1DFF3]">
                  {currentIndex + 1} of {users.length} People
                </p>
                <div className="w-full bg-gray-700 h-1 rounded-full mt-2">
                  <div
                    style={{ width: `${progressWidth}%` }}
                    className="bg-[#E1DFF3] h-1 rounded-full"
                  ></div>
                </div>
              </div>
              {/* Pagination and Controls */}
              <div className="flex gap-2 items-center mt-4">
                <button onClick={handlePrev} className="p-2 rounded-full">
                  <img src={leftArrow} alt="Previous" className="max-h-[56px] max-w-[56px]"/>
                </button>
                <button onClick={handleNext} className="p-2 rounded-full">
                  <img src={rightArrow} alt="Next" className="max-h-[56px] max-w-[56px]"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserExp;
