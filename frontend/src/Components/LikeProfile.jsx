import {LucideHeart} from "lucide-react"
import {toast} from "react-hot-toast"
import useUserStore from "../Store/userStore.js"
export default function LikeProfile(){
    const {userProfile,authUser}=useUserStore()

    const handleLikeProfile=async(userProfile)=>{
        try {
            const res=await fetch(`/api/users/like/${userProfile.login}`,{
                method:"POST",
                credentials:'include'
            })
            const data=await res.json();
            if(data.message==="User is not a member"){
               return toast.error(data.message)
            }
            if(data.error)throw new Error(data.error)

            toast.success(data.message)
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
    <>
        {userProfile.login != authUser.username && <button  className="bg-glass p-2 flex items-center gap-2 border-1 border-blue-400 rounded-md text-xs font-medium w-full" onClick={()=>{handleLikeProfile(userProfile)}}>
            <LucideHeart className="size-5 text-red-600" /> Like Profile
        </button>}
    </>
    )
}