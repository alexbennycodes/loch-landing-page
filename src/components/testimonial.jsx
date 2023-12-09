import React from "react";

const Testimonial = ({
  author = "",
  position = "",
  comment = "",
  width = "353px",
}) => {
  return (
    <div
      className="flex flex-col items-start gap-[20px] p-[20px] relative bg-white rounded-xl"
      style={{ width }}
    >
      <div className="gap-[8px] inline-flex items-center">
        <div className="relative w-fit mt-[-1.00px] font-semibold text-[#19191A] text-[16px] tracking-[0] leading-[19.2px] whitespace-nowrap">
          {author}
        </div>
        <div className="relative w-fit text-[13px] text-[#96979A] font-medium  text-grey-400  whitespace-nowrap">
          {position}
        </div>
      </div>
      <div className="h-[57px]">
        <p className="font-medium text-[#1D2129] text-[16px] tracking-[0] leading-[19.2px]">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
