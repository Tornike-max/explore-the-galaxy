import { useForm } from "react-hook-form"
import { useUpdatePassword } from "./useUpdatePassword"

function UpdatePassword() {
    const { register, handleSubmit } = useForm()
    const { update, isLoading } = useUpdatePassword()

    function onSubmit(data) {
        console.log(data)
        if (!data) return;
        update(data)
    }
    return (
        <div className="bg-slate-200 rounded-md max-w-[350px] sm:max-w-[450px] md:max-w-[650px] transition-all duration-200 w-screen  px-10 py-6 mb-4">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <h1 className='text-center text-2xl pb-4 text-purple-500 font-semibold'>
                    Update user Password
                </h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        New Password
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type='password'
                        id="password"
                        {...register('password', {
                            required: 'This field is required',
                        })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Repeat Password
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type="password"
                        id="repeatPassword"
                        {...register('repeatPassword', {
                            required: 'This field is required',
                        })}
                    />
                </div>


                <div className="mt-6 flex justify-end items-center">
                    <button
                        disabled={isLoading}
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePassword
