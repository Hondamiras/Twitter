import { FiHeadphones, FiChevronUp } from "react-icons/fi";

const Bookmarks = () => {
  return (
    <div className="bg-[#FFF] w-full flex flex-col items-center p-10 text-center">
      <h1 className="text-[32px] font-bold text-[#4F4F4F]">
        Welcome to your dashboard, Udemy school
      </h1>
      <p className="text-[#4F4F4F] text-[16px] mt-4">
        Uyo/school/@teachable.com
      </p>

      <div className="flex flex-col gap-6 mt-10 w-full max-w-[800px]">
        <div className="flex items-start gap-4 p-4">
          <div className="p-3 bg-[#EFF3FA] rounded-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
                fill="#13296A"
              />
              <path
                d="M17.08 14.15C14.29 12.29 9.73996 12.29 6.92996 14.15C5.65996 15 4.95996 16.15 4.95996 17.38C4.95996 18.61 5.65996 19.75 6.91996 20.59C8.31996 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15ZM14 18.13H12.75V19.38C12.75 19.79 12.41 20.13 12 20.13C11.59 20.13 11.25 19.79 11.25 19.38V18.13H9.99996C9.58996 18.13 9.24996 17.79 9.24996 17.38C9.24996 16.97 9.58996 16.63 9.99996 16.63H11.25V15.38C11.25 14.97 11.59 14.63 12 14.63C12.41 14.63 12.75 14.97 12.75 15.38V16.63H14C14.41 16.63 14.75 16.97 14.75 17.38C14.75 17.79 14.41 18.13 14 18.13Z"
                fill="#13296A"
              />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-[18px] font-semibold text-[#4F4F4F]">
              Add other admins
            </h3>
            <p className="text-[14px] text-[#A7A7A7]">
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg">
          <div className="p-3 bg-[#EFF3FA] rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.37 2.15003L21.37 5.75C21.72 5.89 22 6.31 22 6.68V10C22 10.55 21.55 11 21 11H3C2.45 11 2 10.55 2 10V6.68C2 6.31 2.28 5.89 2.63 5.75L11.63 2.15003C11.83 2.07003 12.17 2.07003 12.37 2.15003Z" stroke="#13296A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z" stroke="#13296A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 18V11" stroke="#13296A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 18V11" stroke="#13296A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 18V11" stroke="#13296A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 18V11" stroke="#13296A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 18V11" stroke="#13296A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1 22H23" stroke="#13296A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div className="text-left">
            <h3 className="text-[18px] font-semibold text-[#4F4F4F]">
              Add classes
            </h3>
            <p className="text-[14px] text-[#A7A7A7]">
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg">
          <div className="p-3 bg-[#EFF3FA] rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.05 2.52997L4.03002 6.45997C2.10002 7.71997 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.72997 19.98 6.46997L13.99 2.53997C12.91 1.81997 11.13 1.81997 10.05 2.52997Z" stroke="#13296A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.63012 13.08L5.62012 17.77C5.62012 19.04 6.60012 20.4 7.80012 20.8L10.9901 21.86C11.5401 22.04 12.4501 22.04 13.0101 21.86L16.2001 20.8C17.4001 20.4 18.3801 19.04 18.3801 17.77V13.13" stroke="#13296A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.3999 15V9" stroke="#13296A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </div>
          <div className="text-left">
            <h3 className="text-[18px] font-semibold text-[#4F4F4F]">
              Add students
            </h3>
            <p className="text-[14px] text-[#A7A7A7]">
              Create rich course content and coaching products for your
              students. When you give them a pricing plan, they’ll appear on
              your site!
            </p>
          </div>
        </div>
      </div>

      <button className="fixed bottom-[150px] right-[50px] flex items-center justify-between gap-2 px-6 py-5 rounded-full bg-[#152259] text-white shadow-lg hover:shadow-xl transition-shadow">
        <FiHeadphones size={20} />
        <span className="font-medium text-sm">Support</span>
        <FiChevronUp size={20} />
      </button>
    </div>
  );
};

export default Bookmarks;
