import { React, useState, useEffect } from "react";

const PopupBody = ({ isOpen, onClose, children }) => {
  const [open, setOpen] = useState(isOpen);
  const [textColorCross, setTextColorCross] = useState("text-black");
  console.log(isOpen);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-70 ">
      <div className="bg-white pl-8 pr-6 pt-3 pb-4 rounded-lg w-4/5 min-h-24 flex flex-col">
        <div className="flex justify-end">
          <div
            onClick={() => {
              setOpen(false);
              onClose();
            }}
            className={`text-4xl cursor-pointer text-red-700 hover:text-red-500`}
          >
            &times;
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default PopupBody;
