import {LogOutIcon} from "lucide-react"
import useUserStore from "../Store/userStore"
import toast from "react-hot-toast"
export default function Logout(){
    const {authUser,setAuthUser}=useUserStore()
    const handleLogout=async()=>{
        try {
            const res=await fetch("http://localhost:2222/api/auth/logout",{credentials:'include'})
            const response=await res.json();
            toast.success(response.message)
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <>
            <img src={authUser?authUser.avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s"} className="w-10 h-10 rounded-full border border-gray-800" ></img>
            <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800">
                <LogOutIcon onClick={()=>{handleLogout()}} />
            </div>
        </>
    )
}