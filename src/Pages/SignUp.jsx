// Images
import Hero from "../Images/Hero.png";
import SignUpForm from "../Components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex bg-cream p-2 rounded-lg">
      <div className="flex flex-grow items-center justify-center">
        <img src={Hero} alt="" className="h-3/4" />
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
