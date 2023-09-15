// Images
import Hero from "../Images/Hero.png";
import SignInForm from "../Components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex w-full bg-cream p-2 rounded-lg">
      <div className="flex flex-grow items-center justify-center">
        <img src={Hero} alt="" className="h-3/4" />
      </div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
