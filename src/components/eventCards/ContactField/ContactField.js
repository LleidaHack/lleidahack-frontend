import React from "react";

const ContactField = () => {
  return (
    <div className="max-w-[40rem] max-h-[5.75rem]">
      <div className="flex">
        <p className="w-[8.438rem] mt-0 font-space-mono font-normal tracking-tighter text-[1.25rem] leading-[1.851rem]">
          Field Title
        </p>
        <p className="font-space-mono font-normal tracking-[-0.02em] mt-[0.188rem] text-[#e55010]">
          *
        </p>
      </div>
      <input
        className="max-w-[40rem] max-h-[2.875rem] border border-solid border-[#959595] rounded-[0.313rem] font-space-mono text-[1.25rem] font-normal leading-[1.851rem] tracking-[-0.02em]"
        placeholder="Placeholder Text"
      />
    </div>
  );
};

export default ContactField;
