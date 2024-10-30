import React, { useState } from "react";
import { assests, people } from "../assets";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Aside = () => {
  const { logo, eyeIcon, googleIcon } = assests;
  const [info, setInfo] = useState("");
  const [password, setPassword] = useState("");

  console.log(info, password);

  const showPassword = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <aside className="p-12  h-full  flex flex-col justify-between max-md:py-6 max-md:px-[21px] ">
      <header className="flex flex-col gap-12">
        {/* logo */}
        <figure className="max-w-[150px] max-md:hidden">
          <img src={logo} alt="logo" />
        </figure>

        {/* login form */}
        <div>
          <p className="font-semibold text-xl">Nice to see you again</p>
          <form className="mt-6">
            <div>
              <label htmlFor="info" className="text-xs ml-4">
                Login
              </label>
              <input
                type="text"
                id="info"
                className="w-full   px-4 py-[14px] mt-2 bg-[#F2F2F2] outline-none rounded-md"
                placeholder="Email or phone number"
                onChange={(e) => setInfo(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="text-xs ml-4">
                Password
              </label>
              <div className="flex relative items-center">
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-[14px] mt-2 bg-[#F2F2F2] outline-none rounded-md"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* toggle button  */}
                <img
                  src={eyeIcon}
                  alt="icon"
                  className="w-4 h-4 absolute right-4 mt-2 cursor-pointer"
                  onClick={showPassword}
                />
              </div>
            </div>
            <div className="flex justify-between mt-5 items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-xs">Remember me</span>
              </label>
              <p className="text-xs text-[#007AFF] cursor-pointer">
                Forget password?
              </p>
            </div>
            {/* button section  */}
            <button className="mt-8 bg-[#007AFF] py-[10px] w-full text-white rounded-md font-bold text-[15px]">
              Sign in
            </button>

            <hr className="my-8" />
            <button className=" bg-[#333333] gap-2 py-[10px] w-full text-white rounded-md justify-center text-[15px] flex items-center">
              <img src={googleIcon} alt="googleIcon" className="w-5 h-5" /> Or
              sign in with Google
            </button>
            <p className="text-center mt-6 text-sm">
              Dont have an account?{" "}
              <span className="text-[#007AFF] cursor-pointer">Sign up now</span>
            </p>
          </form>
        </div>
      </header>
      {/* below the md device only show the logo */}
      <div className="my-[65px] mx-auto hidden max-md:block">
        <figure className="max-w-[150px]">
          <img src={logo} alt="logo" />
        </figure>
      </div>
      <footer className="flex justify-between">
        <div className="flex flex-row items-center ">

          <AnimatedTooltip items={people} />
          <p className="ml-4 opacity-60 font-semibold text-xs">1000+Users</p>
        </div>
        <p className="opacity-60 text-xs">© Perfect Login 2021</p>
      </footer>
    </aside>
  );
};

export default Aside;

