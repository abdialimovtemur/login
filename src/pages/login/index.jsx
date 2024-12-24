import React, { useState } from "react";
import loginBg from "../../assets/login-bg.png";
import pcBoy from "../../assets/pcBoy.png";
import line from "../../assets/line.png";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import PrivateRoute from "../../PrivateRoute/PrivateRoutes";

const Login = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const navigate = useNavigate();
  const { mutate, isLoading } = useLogin();

  const userDetails = {
    email,
    password,
  };

  const handleSubmit = async () => {
    console.log(userDetails);
    try {
      await mutate(userDetails); // Yaxshilangan: mutate funksiyasini kutamiz
      // Login muvaffaqiyatli bo'lsa, masalan navigatsiya qilish mumkin:
      navigate("/");
      PrivateRoute()
      // O'zgartiring agar kerak bo'lsa
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto h-screen mt-12">
      <div className="bg-[#E54C9163] rounded-3xl flex p-4">
        <div className="relative w-[600px]">
          <img src={loginBg} className="max-h-[800px]" />
          <img src={pcBoy} className="absolute bottom-2 left-[40px] z-10 " />
          <img src={line} className="absolute bottom-0 left-12 z-0 w-3/5" />
        </div>

        <div className="p-10 m-auto w-6/12">
          <p className="font-bold pb-20 text-4xl">Welcome back to school,</p>
          <div className="rounded-lg shadow-md w-full gap-3 flex flex-col">
            {/* Email Input */}
            <div className="mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="w-full px-4 py-4 shadow-[0px_12px_6px_7px_rgba(0,0,0,0.3)] shadow-black bg-inherit placeholder-black font-bold border-2 border-black rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="w-full px-4 py-4 shadow-[0px_12px_6px_7px_rgba(0,0,0,0.3)] shadow-black bg-inherit placeholder-black font-bold border-2 border-black rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password"
              />
              <p className="pt-6">Don't have account? Sign up here</p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full shadow-[0px_12px_6px_7px_rgba(0,0,0,0.3)] shadow-black bg-inherit font-bold border-2 border-black py-3 px-4 rounded-lg  focus:bg-gray-500 focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
