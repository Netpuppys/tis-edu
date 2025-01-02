import React from "react";

import { IoClose } from "react-icons/io5";
import FormEnquire from "./formPopup";
import { useMobile } from "../IsMobileContext";

function FormPopup({ formPopup, setFormPopup }) {
  const { isMobile } = useMobile();
  return (
    <>
      <div className="w-full h-screen flex bg-black bg-opacity-75  items-center backdrop-blur-md fixed z-[99999] top-0 left-0 justify-center">
        <div
          onClick={() => setFormPopup(false)}
          className="w-full h-screen absolute "
        ></div>

        <div className="w-full md:w-[80%] flex items-center justify-center gap-[10%]">
          {!isMobile && (
            <div className="w-fit">
              <h3
                style={{
                  fontFamily: "PFDinTextPro",
                }}
                className="text-[4vw] font-black tracking-wider text-white"
              >
                <span className="border-b border-[#FFF]">YOUR DREAMS</span>
                <br />
                <span className="text-[#b90124]">
                  <span className="font-[Mirador800]">BEGIN</span> HERE
                </span>
              </h3>
            </div>
          )}
          <div className="shadow-2xl relative w-[95%] md:w-full max-w-[480px] bg-white rounded-2xl pointer-events-auto">
            <button
              onClick={() => setFormPopup(false)}
              className="p-2 bg-[#b90124] text-xl text-white aspect-square rounded-full absolute -translate-y-1/2 right-2"
            >
              <IoClose />
            </button>
            <FormEnquire formPopup={formPopup} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FormPopup;
