import React from "react";

const Contact_field = () => {
  return (
    <div className="w-[640px] h-[92px] min-w-[640px] min-h-[92px]">
      <p className="absolute w-[135px] h-[30px] min-w-[135px] min-h-[30px] mt-0 font-space-mono font-normal tracking-tighter text-[20px] leading-[29.62px]">Field Title</p>
      <p className="font-space-mono font-normal tracking-[-0.02em] absolute mt-0 ml-[135px] text-[#e55010]">*</p>
      <input className="w-[640px] h-[46px] min-w-[640px] min-h-[46px] mt-[46px] border border-solid border-[#959595] rounded-[5px] font-space-mono text-[20px] font-normal leading-[29.62px] tracking-[-0.02em]" placeholder="Placeholder Text" />
    </div>
  );
};

export default Contact_field;
