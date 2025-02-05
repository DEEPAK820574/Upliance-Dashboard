import React,{useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface IFormInput {
  email: string;
  password: string;
}

const Login: React.FC = () => {

    const navigate=useNavigate();
    const [error, setError] = useState<Boolean | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    let user = localStorage.getItem("user");
    if (user) {
      try {
        const userObject = JSON.parse(user);

        if(data.email==userObject.email && data.password==userObject.password){
          localStorage.setItem("authtoken","true");
          navigate("/dashboard")
        }
        else{
          setError(true);
        }
      } 
      catch (error) {
        console.error('Failed to parse user data:', error);
      }
    } 
    else{
      navigate("/")
  }
  };

  const formErrors = Object.entries(errors).map(([key, error]) => {
    return <li key={key} className="text-red-500 text-sm">{(error as any).message}</li>;
  });

  return (
    <div className="w-[370px] h-100vh mx-auto p-8 bg-white rounded-lg shadow-2xl  mt-10 ">  
      <h2 className="text-4xl font-medium text-zinc-900 text-left  mb-6 ">
        Login<span className="text-6xl">.</span>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        {formErrors.length > 0 && (
        <div className="mt-4">
          <ul className="list-disc pl-5">
            {formErrors}
          </ul>
        </div>
      )}
      {error && <div className="text-red-500 text-sm">Invalid Email or Password</div>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-zinc-900 text-white py-2 px-4 rounded-lg hover:bg-zinc-600 focus:outline-none "
          >
            Login
          </button>
        </div>
        <div className="font-light text-[15px]">Don't have account ?<Link to="/" className="text-blue-500">SignUp</Link></div>
      </form>
    </div>
  );
};

export default Login;
