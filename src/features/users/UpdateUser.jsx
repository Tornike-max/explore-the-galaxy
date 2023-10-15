import { useForm } from "react-hook-form"
import { useUser } from "./useUser"
import { useUpdateUser } from "./useUpdateUser"

function UpdateUser() {
    const { mutate, isLoading } = useUpdateUser()
    const { userName, lastName, email } = useUser()
    // const updatedEmail = user?.user?.new_email ? user?.user?.new_email : user?.user?.email
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: email,
            first_name: userName,
            last_name: lastName
        }
    })
    function onSubmit(data) {
        console.log(data)
        if (!data) return;
        mutate(data)
    }
    return (
        <div className="bg-slate-200 rounded-md max-w-[350px] sm:max-w-[450px] md:max-w-[650px] transition-all duration-200 w-screen px-10 py-6">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <h1 className='text-center text-2xl pb-4 text-purple-500 font-semibold'>
                    Update user data
                </h1>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        Email
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type="text"
                        id="email"
                        {...register('email', {
                            required: 'This field is required',
                        })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type="text"
                        id="firstName"
                        {...register('first_name', {
                            required: 'This field is required',
                        })}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:shadow-outline"
                        type="text"
                        id="lastName"
                        {...register('last_name', {
                            required: 'This field is required',
                        })}
                    />
                </div>

                <div className="mt-6 flex justify-end items-center">
                    <button
                        disabled={isLoading}
                        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateUser
