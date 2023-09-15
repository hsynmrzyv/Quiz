// Hooks
import { useState, useRef, useContext } from "react";

// Icons
import VisibleIcon from "../Icons/VisibleIcon";
import HiddenIcon from "../Icons/HiddenIcon";

// React Router
import { Link, useHistory } from "react-router-dom";

// Supabse
import supabase from "../supabase";

// Context
import Context from "../context";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const history = useHistory();

  const { getUser, updateScore } = useContext(Context);

  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value ||
      !usernameRef.current.value ||
      !passwordRef.current.value ||
      !emailRef.current.value ||
      !confirmPasswordRef.current.value
    ) {
      return;
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      options: {
        data: {
          username: usernameRef.current.value,
          fullname: nameRef.current.value,
        },
      },
    });

    const { scoreData, scoreError } = await supabase.from("scores").insert({
      score: 0,
      userId: data.user.id,
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      const newUser = {
        email: data.user.email,
        id: data.user.id,
        fullname: data.user.user_metadata.fullname,
        username: data.user.user_metadata.username,
      };

      getUser(newUser);
      updateScore(0);
      history.replace("/");
    }
  };

  return (
    <div className="text-black rounded-lg p-10 pt-15 relative bg-white">
      <h1 className="text-2xl font-medium mb-2 text-center">
        Welocome to Quizlet
      </h1>

      <p className=" text-sm font-light mb-5 text-center ">
        Please enter your details
      </p>

      <form onSubmit={signUpHandler}>
        <div className="w-full mb-5 border-b border-black">
          <input
            ref={nameRef}
            type="text"
            placeholder="Fullname"
            className="inline-block bg-transparent w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 border-b border-black">
          <input
            ref={usernameRef}
            type="text"
            placeholder="Username"
            className="inline-block bg-transparent w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 border-b border-black">
          <input
            ref={emailRef}
            type="text"
            placeholder="Email"
            className="inline-block bg-transparent w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
        </div>

        <div className="w-full mb-5 flex items-center border-b border-black">
          <input
            ref={passwordRef}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="inline-block bg-transparent w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
          <button onClick={toggleShowPassword} className="mr-2">
            {showPassword ? <HiddenIcon /> : <VisibleIcon />}
          </button>
        </div>

        <div className="w-full flex items-center border-b border-black">
          <input
            ref={confirmPasswordRef}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="inline-block bg-transparent w-full placeholder:text-black p-3 pl-0 text-sm focus:outline-none"
          />
          <button onClick={toggleShowConfirmPassword} className="mr-2">
            {showConfirmPassword ? <HiddenIcon /> : <VisibleIcon />}
          </button>
        </div>
      </form>

      <button
        onClick={signUpHandler}
        className="bg-dark text-black w-full py-2 rounded-full mt-4 border-black border-2 hover:bg-black hover:text-white transition-all duration-200"
      >
        Sign Up
      </button>

      <div className="absolute bottom-2 text-center left-0 text-[10px] w-full ">
        Already have an account? <Link to="/sign-in">Sign In</Link>
      </div>
    </div>
  );
};

export default SignupForm;
