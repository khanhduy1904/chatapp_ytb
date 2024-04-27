import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-20 rounded-lg shadow-md bg-white">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <img src="/SignUp.png" alt="user avatar" />

        <div className="mt-5"></div>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-black label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered bg-gray-200 text-black h-10"
              // value={inputs.fullName}
              // onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered  bg-gray-200 text-black h-10"
              // value={inputs.username}
              // onChange={(e) =>
              //   setInputs({ ...inputs, username: e.target.value })
              // }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-black label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered   bg-gray-200 text-black h-10"
              //   value={inputs.password}
              //   onChange={(e) =>
              //     setInputs({ ...inputs, password: e.target.value })
              //   }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-black label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered  bg-gray-200 text-black h-10"
              // value={inputs.confirmPassword}
              // onChange={(e) =>
              //   setInputs({ ...inputs, confirmPassword: e.target.value })
              // }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-black label-text">Email</span>
            </label>
            <input
              type="email" // Change type to "email"
              placeholder="johndoe@example.com"
              className="w-full input input-bordered h-10  bg-gray-200 text-black h-10"
              // Add placeholder styles
              style={{
                "&::placeholder": {
                  color: "#000", // Set placeholder text color to black
                  opacity: 1, // Ensure placeholder text is visible
                },
              }}
              // value={inputs.confirmPassword}
              // onChange={(e) =>
              //   setInputs({ ...inputs, confirmPassword: e.target.value })
              // }
            />
          </div>

          <div className="mt-3"></div>

          <GenderCheckbox
          // onCheckboxChange={handleCheckboxChange}
          // selectedGender={inputs.gender}
          />
          <a
            className=" mt-4 text-black hover:underline hover:text-blue-600 mt-2 inline-block"
            href="#"
          >
            Already have an account?
          </a>

          {""}

          <div className="mt-4">
            <button className="btn btn-block btn-outline btn-success">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
