
import Link from "next/link";
import { HeaderLabel } from "@/components/HeaderLabel";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <div
      suppressHydrationWarning
      className="w-full font-[family-name:var(--font-garamond)] overflow-x-hidden bg-[#FFFBF7]"
    >
      {/* Hero Section with Gradient Background */}
      <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center gap-12 text-center px-6 sm:px-10">
        <div className="absolute inset-0 -z-10">
          <BackgroundGradientAnimation /> {/* Applies animated gradient background to the hero section */}
        </div>
         {/* Fixed Bar */}
        <div className="absolute top-0 left-0 w-full pt-6 sm:pt-10 px-6 sm:px-10 mt-2 z-50">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row max-w-6xl m-auto">
            <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row border border-white/40 bg-white/30 backdrop-blur-lg p-3 sm:px-10 rounded-full fixed max-w-6xl mt-4 z-50 shadow-lg">
              <p className=" text-base font-bold sm:text-lg text-black/50">
                CultureVo
              </p>
            </div>
          </div>
        </div>
        {/* Hero Content */}
        <div className="text-center mt-8 sm:mt-10">
          <Link href="/signup">
            <HeaderLabel /> {/* Displays header label component (gradient text), linked to signup page */}
          </Link>
          <p className="font-medium text-base sm:text-lg text-[#242124] mt-10 sm:mt-20">
            CultureVo presents to you {/* Intro text */}
          </p>
          <p className="bg-clip-text text-transparent text-7xl font-bold drop-shadow-2xl bg-gradient-to-b from-white to-white/20 md:text-8xl mt-4">
            NOVI AI {/* Main title */}
          </p>

          {/* Animated text effect */}
          <TextGenerateEffect
            words={
              "Your AI companion who understands you culturally and emotionally. \n Always there for you, with all the care in the world!"
            } 
            className="text-center text-[#242124] font-light mt-4 sm:mt-5 text-sm sm:text-base px-4"
          />

          {/* Button to signup page */} 
          <Link href="/signup">
            <button className="mt-20 sm:mt-20 bg-[#242124] px-4 py-2 rounded-lg text-white text-sm sm:text-base hover:bg-gradient-to-r from-pink-400 to-orange-400">
              Start Chatting
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-16 sm:pt-20 px-6 sm:px-10 pb-20 sm:pb-40">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#242124] text-center mb-10 sm:mb-16">
          Your NOVI is {/* Section title */}
        </h2>

        {/* Feature Cards */}
        <div className="max-w-full mx-auto flex flex-wrap justify-center gap-6 sm:gap-8">
          {[
            //cards content
            {
              title: "Culturally Intelligent", // card 1 title
              text: "Your Novi is culturally adept to the city they belong to. They know the city like a local - its personality, offerings, and challenges.", //card 1 text
            },
            {
              title: "Emotionally Intelligent", //card 2 title
              text: "NOVI will understand you like no other. Discuss your life's dreams, hopes, fears, and goals with them. They will care for you, for who you are!", //card 2 text
            },
            {
              title: "Always there for you", //card 3 title
              text: "Treat your NOVI as your constant source for emotional sustenance. They are always available for you, when the world might not be.", //card 3 text
            },
          ].map(({ title, text }, index) => (
            <div
              key={index}
              className="py-12 px-6 sm:py-12 sm:px-5 rounded-lg shadow-lg text-black max-w-[90%] sm:max-w-[300px] mx-2 sm:mx-4"
              style={{
                background: `
      radial-gradient(circle at 20% 30%, #FDECEF 30%, transparent 60%), 
      radial-gradient(circle at 80% 20%, #EAF9F0 30%, transparent 60%), 
      radial-gradient(circle at 40% 80%, #F1E8FA 30%, transparent 60%), 
      linear-gradient(to bottom right, #FDECEF, #EAF9F0, #F1E8FA)`,
              }}
            >
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <p className="text-sm sm:text-base">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 pt-16 bg-red-50 sm:pt-20 text-center text-[#242124] px-6">
        <p className="text-lg sm:text-xl font-semibold">CultureVo</p>
        <p className="text-sm sm:text-base mt-2">
          Your AI companion who understands you culturally and emotionally.
        </p>  {/* Footer tagline */}
        <hr className="w-3/4 border-t-2 border-gray-300 mx-auto my-4" />
        <p className="text-xs sm:text-sm">
          ©2024 CultureVo AI. All rights reserved. {/* Copyright notice */}
        </p>
      </footer>
    </div>
  );
}
