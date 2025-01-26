import { GrClose } from "react-icons/gr";

const Modal = ({
  children,
  openModal,
  setOpenModal,
  width = "500px", // Default width
  height = "550px", // Default height
  closeIconSize = 25, // Default close icon size
  className = "", // Additional custom styles
}) => {
  return (
    <div
      id="wrapper"
      onClick={(e) => e.target.id === "wrapper" && setOpenModal(false)}
      className={`fixed inset-0 bg-[#00000079] duration-300 ${
        openModal ? "scale-1" : "scale-0"
      } flex items-center justify-center backdrop-blur-sm z-50 ${className}`}
    >
      <div
        style={{ width, height }} // Dynamic width and height
        className="absolute mx-auto bg-white p-5 rounded-md"
      >
        <button
          onClick={() => setOpenModal(false)}
          className="absolute top-3 right-3"
        >
          <GrClose size={closeIconSize} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
