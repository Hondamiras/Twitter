import { useLocation } from "react-router-dom";
import Cube from "../../assets/Images/Cube.png";
import { navbarList } from "../../hooks/useRoute";
import { FiHeadphones, FiChevronUp } from "react-icons/fi"; // Import icons

const WarningPage = () => {
  const path = useLocation();

  return (
    <>
      <div className="bg-[#FFF] w-full flex justify-center items-center overflow-y-auto text-white relative">
        <div className="flex flex-col justify-center items-center mx-auto bg-[#FCFAFA] w-[1000px] h-[400px] mt-[100px]">
          <img src={Cube} alt="Cube" className="mx-auto mb-[10px]" />
          <h2 className="text-[28px] leading-[25px] mb-[10px] font-bold mx-auto text-[#4F4F4F]">
            No {navbarList.map(item => item.path === path.pathname && item.title)} at this time
          </h2>
          <p className="text-[14px] font-bold mx-auto text-[#4F4F4F]">
            {navbarList.map(item => item.path === path.pathname && item.title)} will appear here after enroll in your school.
          </p>
          <button className="fixed bottom-[150px] right-[150px] bg-[#152259] text-white flex items-center justify-between gap-2 px-[30px] py-5 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <FiHeadphones size={20} />
            <span className="font-medium text-sm">Support</span>
            <FiChevronUp size={20} />
          </button>
        </div> 
      </div>
    </>
  );
};

export default WarningPage;
