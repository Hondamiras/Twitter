import Logo from "../../assets/Logos/udemy.svg"
const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] bg-slate-900 gap-[20px]'>
      <h1 className='text-white text-[2.5rem] font-bold'>404 Not Found</h1>
       <img src={Logo} alt="" width={"50"}/>
    </div>
  )
}

export default NotFound
