import Link from "next/link";
import Footer from "../components/Home/Footer/Footer";
import Header from "../components/Home/Header/Header";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Signup = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const createAccount = async () => {
    const user = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      college: college,
      city: city,
      age: age,
    };

    try {
      const data = (
        await axios.post(
          process.env.NEXT_PUBLIC_SERVERLINK + "api/v1/user/signup",
          user
        )
      ).data;

      console.log(process.env.NEXT_PUBLIC_SERVERLINK + "api/v1/user/signup");
      console.log(data);

      await Swal.fire({
        position: "center",
        icon: "success",
        title: `User account created Successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      await Swal.fire({
        position: "center",
        icon: "error",
        title: `Please enter all details`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="antialiased bg-gradient-to-br from-blue-200 to-white min-h-screen flex flex-col md:mt-4 pt-20">
        <div className="container  md:w-[80vw] lg:w-[50vw] my-4 mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <div className="flex md:flex-row flex-col justify-center">
              <div className="mx-2">
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullname"
                  placeholder="Full Name"
                />

                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />

                <input
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  type="number"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="phone"
                  placeholder="Phone"
                />

                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="mx-2">
                <input
                  onChange={(e) => {
                    setCollege(e.target.value);
                  }}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="college"
                  placeholder="College"
                />

                <input
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="city"
                  placeholder="City"
                />

                <input
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  type="number"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="age"
                  placeholder="Age"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => {
                  createAccount();
                }}
                className="w-[200px] bg-blue-500 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </div>

            <div className="text-grey-dark mt-6 text-center">
              Already have an account?
              <Link
                className="no-underline border-b border-blue text-blue"
                href="../login/"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
