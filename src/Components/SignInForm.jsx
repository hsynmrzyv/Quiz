// Icons
import VisibleIcon from "../Icons/VisibleIcon";
import HiddenIcon from "../Icons/HiddenIcon";

// Hooks
import { useState, useRef, useContext } from "react";

// React Router
import { Link, useHistory } from "react-router-dom";

// Supabase
import supabase from "../supabase";

// Context
import Context from "../context";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { getUser } = useContext(Context);

  const { replace } = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const signInHandler = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value || !passwordRef.current.value) {
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);

      const newUser = {
        email: data.user.email,
        id: data.user.id,
        fullname: data.user.user_metadata.fullname,
        username: data.user.user_metadata.username,
      };

      getUser(newUser);
      replace("/");
    }
  };

  return (
    <div className="bg-white text-black  rounded-lg p-20 relative">
      <h1 className="text-2xl font-medium mb-2 text-center">Welocome Back</h1>
      <p className="text-xs font-light mb-10 text-center">
        Please enter your details
      </p>
      <form onSubmit={signInHandler}>
        <div className="w-full mb-5 border-b border-black">
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>
        <div className="w-full flex items-center border-b border-black">
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="inline-block w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
          <button onClick={toggleShowPassword} className="mr-2">
            {showPassword ? <VisibleIcon /> : <HiddenIcon />}
          </button>
        </div>
      </form>
      <div className="mt-4 flex justify-between items-center text-[10px] mb-4">
        <div className="flex gap-1">
          <input type="checkbox" id="remember" />
          <label htmlFor="remeber" className="text-gray-600">
            Remember me
          </label>
        </div>
        <p className="text-gray-400 capitalize">forgot password?</p>
      </div>
      <button
        onClick={signInHandler}
        className="bg-dark w-full py-2 rounded-full border-black border-2 hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center"
      >
        Sign In
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px]">
        Don't have an account <Link to="/sign-up">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignupForm;
