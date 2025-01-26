import { Link } from "react-router-dom"
import Button from "../../Components/Button/Button"
import Input from "../../Components/Input/Input"
import Spinner from "../../assets/Images/spinner.png"
import { useState } from "react"
import { useContext } from "react"
import { Context } from "../../Context/context"
import toast, { Toaster } from "react-hot-toast"

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {users, setToken} = useContext(Context)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const data = {
      login: e.target.login.value,
      password:e.target.password.value
    }

    if(users.length > 0){
       const findUser = users.some(item =>( item.email === data.email || item.login === data.login) && item.password === data.password)
       const userData = users.find(item =>( item.email === data.email || item.login === data.login) && item.password === data.password)
       if(findUser){
        setTimeout(()=> {
          toast.success(`Welcome To Your Account`)
        },500)
        setTimeout(()=> {
          setIsLoading(false)
          setToken(data)
          localStorage.setItem("user_info", JSON.stringify(userData))
        },1000)
       }
    }else{
        setTimeout(() => {
          toast.error("User is not defined")
          setIsLoading(false)
        }, 1000)
    }
    
  }

  return (
    <div className='flex justify-center items-center h-[100vh] bg-[#FCFAFA]'>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
      <div className="flex flex-col gap-10">
        <h2 className="text-[36px] font-bold text-[#4F4F4F] mb-[25px]">Welcome, Log into you account</h2>
        <div className="bg-[#FFFFFF] w-[512px] h-[400px] flex flex-col">
          <p className="w-[238px] text-[16px] text-[#667085] text-center leading-[25px] font-medium mx-auto pt-[72px] mb-[24px]">It is our great pleasure to have you on board!</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mx-auto ">
            <Input required name={"login"} type={"text"} placeholder={"Enter your Login"} extraClass={"w-[248px] h-[42px] text-[14px]"}/>
            <Input required name={"password"} type={"password"} placeholder={"Password"} extraClass={"w-[248px] h-[42px] text-[14px]"}/>
            <Button isLoading={isLoading} loadingImage={Spinner} type={"submit"} text={"Login"} extraClass={"w-[248px] h-[42px] text-[14px]"}/>
          </form>
          <div className="flex justify-between items-center">
            <Link to={"/register"} className="text-[12px] leading-[24px] text-[#2D88D4] mx-auto font-bold mt-[14px]">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
