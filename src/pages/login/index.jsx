import React, { useRef, useState } from "react";
import loginBg from "../../assets/login-bg.png";
import pcBoy from "../../assets/pcBoy.png";
import line from "../../assets/line.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate, isLoading } = useLogin();

  const formObj = {
    email,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      email,
      password,
    };
    try {
      await mutate(userDetails);
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
          <form className="rounded-lg shadow-md w-full gap-3 flex flex-col">
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

            {/* Password Input */}
            <div className="mb-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="w-full px-4 py-4 shadow-[0px_12px_6px_7px_rgba(0,0,0,0.3)] shadow-black bg-inherit placeholder-black font-bold border-2 border-black rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Enter your password"
              />
              <p className="pt-6">Don't have account sign up, here</p>
            </div>

            {/* Submit Button */}
            <button
              onClick={() => hundle}
              type="submit"
              className="w-full shadow-[0px_12px_6px_7px_rgba(0,0,0,0.3)] shadow-black bg-inherit font-bold border-2 border-black py-3 px-4 rounded-lg hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
