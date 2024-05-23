import React from "react";

const Contact_field = () => {
  return (
    <div className="max-w-[640px] max-h-[92px]">
      <div className="flex">
        <p className="w-[135px] mt-0 font-space-mono font-normal tracking-tighter text-[20px] leading-[29.62px]">
          Field Title
        </p>
        <p className="font-space-mono font-normal tracking-[-0.02em] mt-[3px] text-[#e55010]">
          *
        </p>
      </div>
      <input
        className="max-w-[640px] max-h-[46px] border border-solid border-[#959595] rounded-[5px] font-space-mono text-[20px] font-normal leading-[29.62px] tracking-[-0.02em]"
        placeholder="Placeholder Text"
      />
    </div>
  );
};

export default Contact_field;
