const Button = ({
  text,
  onClick,
  extraClass,
  type,
  isLoading,
  loadingImage,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${extraClass} w-[238px] h-[42px] bg-[#2D88D4] hover:bg-[#1DA1F2] text-white rounded-[4px] font-semibold text-[14px]`}
    >
      {isLoading ? (
        <img
          src={loadingImage}
          alt="Loading"
          width={15}
          height={15}
          className="mx-auto scale-[1.5]"
        />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
