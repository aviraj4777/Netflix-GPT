import { useState } from "react";
const Header = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute px-10 py-5 bg-gradient-to-b from-black z-30">
        <img
          className="w-44"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="bg-red-500 p-2 my-2 block w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm && (
          <p className="text-xs m-2 pt-4">
            New to Netflix?{" "}
            <span
              className="text-red-500 cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign up now.
            </span>
          </p>
        )}
        {!isSignInForm && (
          <p className="text-xs m-2 pt-4">
            Already have an account?{" "}
            <span
              className="text-red-500 cursor-pointer"
              onClick={toggleSignInForm}
            >
              Sign in now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Header;
