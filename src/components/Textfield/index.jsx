import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";

export default function Textfield({
  labal,
  type,
  className,
  value,
  onChange,
  msg,
  placeholder,
  error = false,
  disabled = false,
  labelStyle,
  touches,
  maxLenght,
}) {
  const [openP, setOpenP] = useState(false);

  return (
    <div className=" w-full flex flex-col gap-1">
      <label
        className={`text-[#5C5959] font-[400] tracking-wider ${labelStyle}`}
      >
        {labal}
      </label>
      <div
        className={`border-[1px] border-[#F0F0F0] rounded-[20px] items-center gap-2 w-full outline-none hover:shadow-[#F0F0F0] h-[50px] px-2 flex shadow-sm ${className}`}
      >
        <input
          type={openP ? "text" : type}
          value={value}
          onChange={onChange}
          className={`border-none outline-none bg-transparent h-full w-full px-3 ${touches} `}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLenght}
        />

        {type === "password" && (
          <div onClick={() => setOpenP(!openP)} className="pr-3">
            {openP ? (
              <LuEye />
            ) : (
              <div className="cursor-pointer">
                <LuEyeOff />
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2">
          <div>
            {" "}
            <MdErrorOutline color="red" />
          </div>
          <small className="text-red-600">{msg}</small>
        </div>
      )}
    </div>
  );
}
