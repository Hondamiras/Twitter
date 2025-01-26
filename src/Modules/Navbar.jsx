import { NavLink } from "react-router-dom";
import Logo from "../assets/Logos/udemy.svg";
import { navbarList } from "../hooks/useRoute";
import { useContext, useState } from "react";
import { Context } from "../Context/context";
import { FiChevronRight } from "react-icons/fi";

const Navbar = () => {
  const userInfo = JSON.parse(localStorage.getItem("user_info") || "{}");
  const [activeIcon, setActiveIcon] = useState("Home");
  const { setToken } = useContext(Context);

  return (
    <div className="w-[300px] h-[100vh] overflow-y-auto pt-[35px] bg-[#152259] text-white mx-auto flex items-center flex-col">
      <img src={Logo} alt="Logo" width={65} height={65} />
      <p className="font-semibold mt-[22px] leading-[17px]">Udemy Inter. school</p>
      <span className="h-[1px] bg-[#BDBDBD] w-[100%] mt-[30px]"></span>
      <nav className="mt-[15px] flex flex-col w-full gap-[8px] text-[14px]">
        {navbarList.map((item, index) => (
          <NavLink
            onClick={() => setActiveIcon(item.title)}
            to={item.path}
            key={item.id}
            className={`flex items-center justify-between gap-2 p-4 rounded-[4px] w-[85%] transition-all duration-300 cursor-pointer ${
              activeIcon === item.title
                ? "bg-[#509CDB] w-[85%] mx-auto h-[40px] text-[14px]"
                : "hover:bg-[#3B5998] w-[85%] mx-auto h-[40px]"
            } ${index === navbarList.length - 1 ? "mt-20" : ""}`} // Add mt-20 to the last item
          >
            <div className="flex items-center gap-2">
              {activeIcon === item.title ? item.activeIcon : item.icon}
              <span>{item.title}</span>
            </div>
            {item.title === "Features" && (
              <div className="bg-[#E0E7FF] text-[#000000] font-bold text-[10px] px-2 py-1 rounded-full leading-[12px] w-[40px]">
                NEW
              </div>
            )}
            {activeIcon === item.title && item.title !== "Features" && (
              <FiChevronRight size={20} className="text-white" />
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
