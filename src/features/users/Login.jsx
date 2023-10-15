import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";

function Login() {
    const { register, handleSubmit } = useForm()
    const { mutate } = useLogin()
    const navigate = useNavigate()

    function onSubmit(data) {
        console.log(data)
        if (!data.email || !data.password) return;

        mutate(data)
    }

    function handleSignUp() {
        navigate('/signUp')
    }

    return (
        <div className="bg-slate-200 h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 rounded-md py-10 max-w-xl w-full px-10">
                <h2 className="mt-6 text-center text-lg font-extrabold text-purple-700 py-4">
                    Log in to your account
                </h2>
                <div className="mb-4">
                    <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-purple-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type="text"
                        id="email"
                        {...register('email', {
                            required: 'This field is required',
                        })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="nationality">
                        Password
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-purple-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        {...register('password', {
                            required: 'This field is required',
                        })}
                    />
                </div>


                <div className="mt-6 flex justify-end items-center">
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Sign in
                    </button>
                    <button onClick={() => handleSignUp()}
                        className=" text-purple-500 underline-offset-4 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Create new account
                    </button>
                </div>
            </form>
        </div >
    )
}

export default Login
