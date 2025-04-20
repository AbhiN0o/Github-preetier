import { Link } from "react-router-dom";
import {Home,Heart,Compass,LogIn,SquareArrowUpRight} from "lucide-react" 
import Logout from "./Logout";
import useUserStore from "../Store/userStore";
import toast from "react-hot-toast";
export default function Sidebar(){
    const {authUser,setAuthUser}=useUserStore()
   
    return(
        <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-glass">
            <nav className="h-full flex flex-col gap-3">
                <Link to="/" className="flex justify-center">
                    <img className="h-8" src="/github.svg" alt="github icon"></img>
                </Link>
                <Link to="/" className=" p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800">
                    <Home/>
                </Link>
                {authUser && <Link to="/likes" className=" p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800">
                    <Heart/>
                </Link>}
                {authUser && (
                    <Link to="/explore" className=" p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800">
                    <Compass/>
                </Link>
                )}

                {!authUser && (
                    <Link to="/login" className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-gray-800">
                        <LogIn />
                    </Link>
                )}

                {!authUser && (
                    <Link to="/signup" className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg hover:bg-gray-800">
                        <SquareArrowUpRight />
                    </Link>
                )}
                {authUser && (
                    <div className="flex flex-col gap-2 mt-auto">
                        <Logout />
                    </div>
                )}


            </nav>
        </aside>
    )
}