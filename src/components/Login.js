import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div>
        <Header />
        <div className="absolute">
          <img
            alt="background-img"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
          />
        </div>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        <button className="p-4 my-6 bg-red-600 w-full rounded font-bold text-white hover:bg-red-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <div className="flex justify-between items-center my-4 text-sm">
          <a href="#" className="text-gray-400 hover:underline">
            Forgot password?
          </a>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 rounded bg-gray-700 text-red-600 focus:ring-2 focus:ring-red-600"
            />
            Remember me
          </label>
        </div>

        <div className="text-center my-6">
          <p className="text-white py-4 font-semibold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now "
              : "Already Registered? Sign In Now"}
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="#" className="text-blue-500 hover:underline">
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
