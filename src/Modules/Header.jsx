import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import Button from "../Components/Button/Button";
import Modal from "../Components/Modal/Modal";
import { Context } from "../Context/Context";
import { navbarList } from "../hooks/useRoute";
import { PATH } from "../hooks/usePath";

const Header = ({ setModalOpen, searchQuery, handleSearchChange }) => {
  const navigate = useNavigate();
  const path = useLocation();
  const { setToken } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToken(null);
      navigate("/");
    }, 1000);
  };

  const currentTitle = navbarList.find((item) => item.path === path.pathname)?.title || "Dashboard";

  return (
    <>
      <header className="w-full bg-[#FCFAFA] p-5 flex flex-col">
        <div className="flex justify-between items-center ">
          {path.pathname === PATH.home ? (
            <>
              <p className="text-[16px] leading-[20px] pl-[100px] mt-[10px]">
                Learn how to launch faster. <br />
                Watch our webinar for tips from our experts and get a limited-time offer.
              </p>
              <div className="flex items-center gap-3">
              <IoMdNotificationsOutline size={25} className="text-gray-700" />
                <Button
                  extraClass="!w-[120px] mr-[100px] text-white bg-blue-500 hover:bg-blue-600 rounded-[8px]"
                  type="button"
                  onClick={() => setOpenModal(true)}
                  text="Log Out"
                />
              </div>
            </>
          ) : (
            <>
              <h2 className="font-bold text-2xl text-gray-800">{currentTitle}</h2>
              <div className="flex items-center gap-2">
                <IoMdNotificationsOutline size={25} className="text-gray-700" />
                {path.pathname === "/teachers" && (
                  <Button
                    text="Add Teachers"
                    extraClass="!w-[120px] py-2 text-white bg-[#509CDB] hover:bg-blue-600 rounded-md"
                    onClick={() => setModalOpen(true)}
                  />
                )}
                <Button
                  extraClass="!w-[120px] text-[#000] bg-transparent hover:underline hover:bg-transparent rounded-[8px] mr-[100px]"
                  type="button"
                  onClick={() => setOpenModal(true)}
                  text="Log Out"
                />
              </div>
            </>
          )}
        </div>

        {path.pathname === "/teachers" && (
          <div className="mt-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for a teacher by name or email"
              className="w-full border bg-[#E0E0E0] rounded-lg p-3 h-[45px] text-[#8A8A8A] outline-none"
            />
          </div>
        )}
      </header>

      <Modal openModal={openModal} extraClass="!h-[200px]" setOpenModal={setOpenModal} height="200px">
        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-[25px]">Do you want to Log out?</h2>
          <div className="flex items-center gap-3 mt-5">
            <Button
              onClick={() => setOpenModal(false)}
              text="Cancel"
              extraClass="!w-[150px] !bg-gray-600 !text-white hover:bg-gray-700"
            />
            <Button
              onClick={handleLogout}
              isLoading={isLoading}
              text="Log Out"
              extraClass="!w-[150px] !bg-red-600 !text-white hover:bg-red-700"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
