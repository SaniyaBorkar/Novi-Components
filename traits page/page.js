
"use client";
import React from "react";
import { useTraits } from "@/support/TraitsContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, MessageCircle, Sparkles } from "lucide-react";

const TraitsPage = () => {
  const { selectedTraits, setSelectedTraits, selectedLanguage, setSelectedLanguage } = useTraits();

  const traits = [
    "Bold/Adventurous",
    "Bubbly/Positive",
    "Curious",
    "Funny",
    "Intellectual Conversations",
    "Gentle/Quiet",
    "Introverted",
    "Open Minded",
    "Opinionated",
    "Outgoing",
    "Sarcastic",
  ];

  const romantic_traits = ["Playful/Teasing", "Romantic", "Flirty"];
  const languages = ["English", "Hinglish"];

  const toggleTrait = (trait) => {
    setSelectedTraits((prevTraits) => {
      if (prevTraits.includes(trait)) {
        return prevTraits.filter((t) => t !== trait);
      }
      return [...prevTraits, trait];
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Pastel Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-200 via-orange-200 to-purple-200 animate-gradient-xy">
        {/* Glowing orb effect */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[800px] h-[800px] bg-white/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-4xl w-full border border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.3)] before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/20 before:to-white/5 before:backdrop-blur-xl after:absolute after:inset-0 after:-z-10 after:rounded-3xl after:bg-white/10 after:blur-xl after:transition-all hover:after:blur-2xl"
      >
        {/* Content */}
        <div className="relative z-10">
          {/* Personality Selection */}
          <div className="mb-12">
            <h2 className="text-3xl text-black mb-2 font-semibold">
              Personality
            </h2>
            <p className="text-m text-black/90 mb-8 font-light">
              Select multiple traits that match your style
            </p>
            <div className="flex flex-wrap gap-3">
              {traits.map((trait) => (
                <button
                  key={trait}
                  onClick={() => toggleTrait(trait)}
                  className={`px-6 py-3 bg-white/5 hover:bg-white/10 text-black rounded-full flex items-center gap-2 transition-all backdrop-blur-md border border-white/20 shadow-[0_4px_12px_0_rgba(255,255,255,0.1)] ${
                    selectedTraits.includes(trait)
                      ? "bg-white/20"
                      : ""
                  }`}
                >
                  {trait}
                </button>
              ))}
              {selectedTraits.includes("Romantic") &&
                romantic_traits.map((trait) => (
                  <button
                    key={trait}
                    onClick={() => toggleTrait(trait)}
                    className={`px-6 py-3 bg-white/5 hover:bg-white/10 text-black rounded-full flex items-center gap-2 transition-all backdrop-blur-md border border-white/20 shadow-[0_4px_12px_0_rgba(255,255,255,0.1)] ${
                      selectedTraits.includes(trait)
                        ? "bg-white/20"
                        : ""
                    }`}
                  >
                    {trait}
                  </button>
                ))}
            </div>
          </div>

          {/* Language Selection */}
          <div className="mb-12">
            <h2 className="text-3xl text-black mb-2 font-semibold">
              Language
            </h2>
            <p className="text-m text-black/90 mb-8 font-light">
              Choose your preferred language
            </p>
            <div className="flex gap-3">
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className={`px-6 py-3 bg-white/5 hover:bg-white/10 text-black rounded-full flex items-center gap-2 transition-all backdrop-blur-md border border-white/20 shadow-[0_4px_12px_0_rgba(255,255,255,0.1)] ${
                    selectedLanguage === language
                      ? "bg-white/20"
                      : ""
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link 
              href="/chat"
              className="px-8 py-4 bg-gradient-to-r from-purple-400/80 via-pink-400/80 to-orange-400/80 hover:from-purple-400/90 hover:via-pink-400/90 hover:to-orange-400/90 text-white rounded-full flex justify-center items-center gap-2 transition-all backdrop-blur-sm border border-white/20 shadow-[0_4px_12px_0_rgba(255,255,255,0.2)]"
            >
              <MessageCircle size={20} />
              Start Chatting
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TraitsPage;

