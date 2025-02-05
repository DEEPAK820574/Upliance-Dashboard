import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface IFormInput {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {

    const  navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/login")
    console.log("Form Data:", data);
  };

  const formErrors = Object.entries(errors).map(([key, error]) => {
    return <li key={key} className="text-red-500 text-sm">{(error as any).message}</li>;
  });

  return (

    <div className="w-[370px] h-100vh mx-auto p-8 bg-white rounded-lg shadow-md  mt-10 ">  
      <h2 className="text-4xl font-medium text-zinc-900 text-left  mb-6 ">
        SignUp<span className="text-6xl">.</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            id="fullName"
            type="text"
            placeholder="Full Name"
            {...register("fullName", { required: "Full Name is required" })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
          />
        </div>

        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
          />
        </div>

        <div>
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
          />
        </div>

        <div>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
          />
        </div>
        <div>
        {formErrors.length > 0 && (
        <div className="mt-4">
          <ul className="list-disc pl-5">
            {formErrors}
          </ul>
        </div>
      )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-zinc-900 text-white py-2 px-4 rounded-lg hover:bg-zinc-600 focus:outline-none "
          >
            SignUp
          </button>
        </div>
        <div className="font-light text-[15px]">Already have account ?<Link to="/login" className="text-blue-500">Login</Link></div>
      </form>
    </div>
  );
};

export default Register;
