import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const Input = ({ type, placeholder, extraClass, name, required, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {type === "password" ? (
        <label className="relative">
          <input
            onChange={onChange}
            required={required}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            name={name}
            className={`${extraClass} w-[238px] h-[42px] p-2 pr-10 outline-none border-[0.5px] rounded-md focus:border-2 focus:border-[#1DA1F2] border-[#A7A7A7]`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#8A8A8A]"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <IoIosEye size={20} />}
          </button>
        </label>
      ) : (
        <input
          onChange={onChange}
          required={required}
          type={type}
          placeholder={placeholder}
          name={name}
          className={`${extraClass} w-[238px] h-[42px] mx-auto p-2 outline-none border-[0.5px] rounded-md focus:border-2 focus:border-[#1DA1F2] border-[#A7A7A7]`}
        />
      )}
    </>
  );
};

export default Input;
