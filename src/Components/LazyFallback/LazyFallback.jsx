import Logo from "../../assets/Logos/udemy.svg";

const LazyFallback = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 z-50">
      <div className="text-center animate-fadeIn">
        <img
          className="animate-pulse"
          src={Logo}
          alt="Loading Logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default LazyFallback;
