import {LogOutIcon} from "lucide-react"
export default function Logout(){
    
    return (
        <>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uLl8zBoK0_iM5pNwJAC8hQ2f68YKtlgc7Q&s" className="w-10 h-10 rounded-full border border-gray-800" ></img>
            <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800">
                <LogOutIcon />
            </div>
        </>
    )
}