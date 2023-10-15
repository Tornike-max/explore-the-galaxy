import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSignup } from "./useSignup";

function SignUp() {
    const { register, handleSubmit, reset } = useForm()
    const { signup, isLoading } = useSignup()
    const navigate = useNavigate()
    function onSubmit(data) {
        console.log(data)
        if (!data) return;
        signup(data)
        reset()
    }
    return (
        <div className="bg-slate-200 h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 rounded-md py-10 max-w-xl w-full px-10">
                <div className="mb-4">
                    <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-purple-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type="text"
                        id="firstName"
                        {...register('first_name', {
                            required: 'This field is required',
                        })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-purple-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type="text"
                        id="lastName"
                        {...register('last_name', {
                            required: 'This field is required',
                        })}
                    />
                </div>

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
                        onClick={() => navigate(-1)}
                        className="text-purple-500 underline-offset-4 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Go back
                    </button>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
