import { React, useEffect, useState } from "react";

const PopupBody = ({ isOpen, onClose, children }) => {
  const [open, setOpen] = useState(isOpen);

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
            className="text-4xl cursor-pointer hover:text-red-500"
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
