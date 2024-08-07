'use client';
// next components
import Link from "next/link";
// animation
import { motion } from "framer-motion";
// custom components
import MyButton from "@/components/MyButton/myButton";
// functions
import useLogin from "./useLogin";
// react icons
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
    const { register, handleSubmit, errors, onSubmitForm, resetField } = useLogin();
    return (
        <main className="w-full h-screen justify-center flex items-center">
            <form
                className="relative mb-8 w-60"
                onSubmit={handleSubmit(onSubmitForm)}>
                <h1 className="text-3xl font-bold mb-5">Login</h1>

                <div className="flex flex-col relative">
                    <label htmlFor="email">Email</label>
                    <input
                        className={`outline-none relative border pl-1 pr-6 ${errors.email ? 'border-red-500' : "shadow"} placeholder:text-xs`}
                        placeholder="Ex: example@gmail.com"
                        type="text"
                        {...register("email")}
                    />
                    <FaRegUser className="absolute top-7 right-2 text-gray-500" />
                </div>

                <div className="flex mt-2 flex-col relative">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className={`outline-none relative border pl-1 pr-6 ${errors.password ? 'border-red-500' : "shadow"} placeholder:text-xs`}
                        {...register("password")}
                    />
                    <RiLockPasswordLine className="absolute top-7 right-2 text-gray-500" />
                </div>

                <p className="text-xs text-blue-500 mt-1 flex justify-end cursor-pointer">
                    <Link href="/forgot-password">
                        Forgot Password?
                    </Link>
                </p>

                <div className="w-full flex flex-col items-center mt-4">
                    <MyButton
                        type="submit"
                        style="w-full hover:bg-opacity-70 py-[2px]"
                        text="CONFIRM"
                        onClick={() => errors.password && resetField("password")
                        } />
                    {errors.password || errors.email ?
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs text-red-500 mt-1">
                            incorect email or password
                        </motion.p> : ""}
                </div>

                <p className="text-xs text-center mt-2">
                    Don't have an account?
                    <Link href="/register">
                        <span className="text-blue-500 cursor-pointer"> Register</span>
                    </Link>
                </p>
            </form>
        </main>
    )
}