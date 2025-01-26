import React from 'react'
import Navbar from '../Modules/Navbar'
import Header from '../Modules/Header'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex'>
      <Navbar/>
          <div className='w-[100%] h-[100vh] overflow-y-auto'>
           <Header/>
           {children}
          </div>
    </div>
  )
}

export default DashboardLayout
