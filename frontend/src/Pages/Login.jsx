import {Github} from "lucide-react"
import { Link } from "react-router-dom"

export default function Login(){
    const handleLoginWithGithub=async()=>{
        window.open("http://localhost:2222/api/auth/github","_self")
    }
    return(
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-8">
            <div className="w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md sl:p-8">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                    <h1 className="text-xl font-bold md:text-2xl text-center">
                        Login to your account
                    </h1>
                    <button type="button" className="text-white cursor-pointer bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center"
                    onClick={()=>{handleLoginWithGithub()}}>
                        <Github className="h-5 w-5" />
                        Login With Github
                    </button>
                    <p className="text-sm text-center font-light text-gray-500">
                        Don't have an account?
                        <Link className="text-blue-600 font-medium pl-1 hover:underline">
                        Signup
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    )
}