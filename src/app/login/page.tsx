"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg p-6 sm:p-10 rounded-2xl shadow-2xl text-center w-full max-w-md relative overflow-hidden"
      >
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 relative z-10">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/Spotify_logo.png"
              alt="Spotify Logo"
              width={60}
              height={60}
              className="mb-4 sm:mb-6"
              onClick={() => window.location.href = `${process.env.SPOTIFY_URL}`}
            />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Welcome to Hayai
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
            Log in to continue to your account
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-green-600 hover:bg-green-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-semibold text-base sm:text-lg transition-all duration-300`}
            onClick={() => window.location.href = `${process.env.NEXT_PUBLIC_BACK_URL}${process.env.NEXT_PUBLIC_LOGIN}`}
          >
            Login with Spotify
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
