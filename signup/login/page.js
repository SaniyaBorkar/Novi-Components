"use client";
import { useEffect } from "react";
import SignupFormDemo from "@/components/signup-form-demo";
import React from "react";
import { useUser } from '@/support/UserContext';
import { useRouter } from 'next/navigation';

const MainComponent = () => {
  const { userDetails } = useUser();
  const router = useRouter();

  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      const { name, gender } = JSON.parse(storedUserDetails);
      if (name && gender) {
        // Redirect to chat if user details are already stored
        router.push('/chat');
      }
   
    }
  }, [router]);

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute w-[700px] h-[700px] bg-pink-300 rounded-full blur-[150px] top-10 left-1/4 opacity-50"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-300 rounded-full blur-[150px] bottom-10 left-1/4 opacity-50"></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-300 rounded-full blur-[150px] top-10 right-1/4 opacity-50"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-300 rounded-full blur-[150px] bottom-10 right-1/4 opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default MainComponent;