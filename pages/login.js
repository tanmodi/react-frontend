import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import right_image from "../assets/Login/right_image.png";
import logo_black from "../assets/Login/logo_black.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const user = {
      email: email,
      password: password,
    };

    if (user.email && user.password) {
      try {
        const data = (
          await axios.post(
            process.env.NEXT_PUBLIC_SERVERLINK + "api/v1/user/signin",
            user
          )
        ).data;

        localStorage.setItem("token_dc", data.token);
        await Swal.fire({
          position: "center",
          icon: "success",
          title: `Logged in Successfully <br/>Happy Learning!`,
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = "/";
      } catch (error) {
        await Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid Email Or Password !",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("Internal server error");
      }
    }
  };

  return (
    <div className="bg-white flex h-screen flex-col">
      <div className="text-black h-24 w-24 ml-6 pt-2">
        <Link href="/">
          <Image
            alt="temp"
            className="cursor-pointer"
            src={logo_black}
            layout="responsive"
          />
        </Link>
      </div>
      <div className="flex md:flex-row md:space-x-8 bg-white justify-around px-8 flex-col-reverse">
        <div className="lg:w-1/3 md:w-2/3 w-full bg-white">
          <div className="bg-white">
            <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
              Signin
            </h2>

            <div className="w-full bg-white">
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="email" className="text-gray-500 mb-2">
                  Email
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  id="email"
                  placeholder="Please insert your email"
                  className="text-black appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:shadow-lg"
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="password" className="text-gray-500 mb-2">
                  Password
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  id="password"
                  placeholder="Please insert your password"
                  className="text-black appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:shadow-lg"
                />
              </div>
              <div>
                <Link href="/">
                  <button
                    type="button"
                    className="w-full py-4 bg-blue-400 rounded-lg text-blue-100"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h18v-10h3zm-5 8h-14v-10.26l7-6.912 7 6.99v10.182zm-5-1h-4v-6h4v6z" />
                        </svg>
                      </div>
                      <div className="font-bold">Home</div>
                    </div>
                  </button>
                </Link>
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  onClick={() => {
                    login();
                  }}
                  type="button"
                  className="w-full py-4 bg-slate-800 rounded-lg text-blue-100"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-bold">Signin</div>
                  </div>
                </button>
                <div className="my-6">
                  <button className="flex space-x-2 flex-wrap text-black justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <Image
                      alt="temp"
                      className="w-5 mr-2"
                      height={30}
                      width={30}
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    />
                    <span>Sign in with Google</span>
                  </button>
                </div>
                <div className="flex justify-evenly mt-5 text-gray-600">
                  <Link
                    href="/forgotpassword"
                    className="w-full text-center font-medium text-gray-500"
                  >
                    Recover password!
                  </Link>
                  <Link
                    href="/signup"
                    className="w-full text-center font-medium text-gray-500"
                  >
                    Signup!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="sm:mx-8 mx-0">
          <Image alt="temp" height={600} width={550} src={right_image} />
        </div>
      </div>
    </div>
  );
};

export default Login;
