import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Spinner from "../../assets/Images/spinner.png";
import { useContext, useState } from "react";
import { Context } from "../../Context/context";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { users, setUsers } = useContext(Context);
  const navigate = useNavigate();
  const [openEmail, setOpenEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      email: e.target.email.value,
      login: e.target.login.value,
      password: e.target.password.value,
      email: openEmail ? e.target.email.value : null,
    };

    setUsers([...users, data]);
    toast.success("Account Created Successfully");

    setTimeout(() => {
      e.target.reset();
      setIsLoading(false);
      navigate(-1);
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-[36px] leading-[36px] mb-[53px] font-bold text-center">Welcome, Sign up</h2>
      <div className="flex flex-col items-center bg-white p-6 w-[512px]">
        <p className="text-center text-[16px] w-[238px] text-[#667085] mt-[42px] mb-[32px] font-semibold">
          It is our great pleasure to have you on board!
        </p>
        <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-[14px] items-center">
          <Input
            required
            name="email"
            type="email"
            placeholder="Enter your Email"
            extraClass="w-[248px] h-[42px] text-[14px]"
          />
          <Input
            required
            name="login"
            type="text"
            placeholder="Create your Login"
            extraClass="w-[248px] h-[42px] text-[14px]"
          />
          <Input
            required
            name="password"
            type="password"
            placeholder="Create your Password"
            extraClass="w-[248px] h-[42px] text-[14px]"
          />
          {openEmail && (
            <Input
              required
              name="email"
              type="email"
              placeholder="Enter your Email"
              extraClass="w-[248px] h-[42px]" 
            />
          )}
          
          <Button
            isLoading={isLoading}
            loadingImage={Spinner}
            text="Sign up"
            type="submit"
            extraClass="w-[248px] h-[42px] mt-[14px] text-[14px] mb-[60px]"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
