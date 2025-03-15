import UserDetails from '@/components/user-details'
import React from 'react'

const userDetails = () => {
  return (
    
      <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute w-[500px] h-[500px] bg-pink-400 rounded-full blur-[150px] top-10 left-20 opacity-50"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-300 rounded-full blur-[150px] bottom-10 left-20 opacity-50"></div>

        <div className="absolute w-[500px] h-[500px] bg-pink-400 rounded-full blur-[150px] top-10 right-20 opacity-50"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-300 rounded-full blur-[150px] bottom-10 right-20 opacity-50"></div>
      
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <UserDetails />
      </div>
    </div>
  )
}

export default userDetails