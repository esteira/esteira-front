import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212121]">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-lg shadow-lg text-center max-w-md w-full h-[400px] flex flex-col justify-between items-center">
        <img
          src="/src/public/spotifyLogo.svg" 
          alt="Spotify Logo"
        />
        <h1 className="text-2xl font-bold text-gray-100 mb-6">Login</h1>
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-300"
          // onClick={() => {
          // }}
        >
          Login com Spotify
        </button>
      </div>
    </div>
  );
};

export default Login;
