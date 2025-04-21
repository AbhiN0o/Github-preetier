import toast from "react-hot-toast"
import Repos from "../Components/Repos"
import useUserStore from "../Store/userStore"
import { useEffect, useState } from "react"
import Spinner from "../Components/Spinner"

export default function ExplorePage(){

    const {userRepo,setUserRepo}=useUserStore()
    const [show,setShow]=useState(false)
    const [selectedLanguage,setSelectedLanguage]=useState(null)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{setUserRepo([]),setShow(prevShow=>!prevShow)},[])

    const handleClick=async(lang)=>{
        setLoading(true)
        try {
            const repo=await fetch(`/api/explore/repos/${lang}`)
            const finalRepo=await repo.json()
            setUserRepo(finalRepo)
            setSelectedLanguage(lang)
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return(
        <div className="py-3 px-4">
           {show && <div className="bg-glass max-w-2xl mx-auto rounded-md p-4 flex flex-col">
                <h1 className="text-center font-bold text-xl">Explore Popular Repositories</h1>
                <div className="grid grid-cols-2">
                    <div className="cursor-pointer flex px-5 py-7 items-center justify-center" onClick={()=>{handleClick("javascript")}}><img src="/javascript.svg" alt="Javascript" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Javascript</p></div>
                    <div className="cursor-pointer flex px-5 py-2 items-center justify-center" onClick={()=>{handleClick("typescript")}}><img src="/typescript.svg" alt="Typescript Logo" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Typescript</p></div>
                    <div className="cursor-pointer flex px-5 py-7 items-center justify-center" onClick={()=>{handleClick("c++")}}><img src="/c++.svg" alt="Cpp logo" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">C++</p></div>
                    <div className="cursor-pointer flex px-5 py-7 items-center justify-center" onClick={()=>{handleClick("python")}}><img src="/python.svg" alt="Python Logo" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Python</p></div>
                </div>
                <div className="cursor-pointer flex px-5 py-7 items-center justify-center" onClick={()=>{handleClick("java")}}><img src="/java.svg" alt="Java Logo" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Java</p></div>
               {loading ? <Spinner className="w-full flex justify-center"/>: (userRepo.length>0 && <div className="w-full flex flex-col ">
                <div className="flex items-center justify-center border-none"><img src={`/${selectedLanguage}.svg`}></img><p className="text-gray-400 text-2xl">{selectedLanguage.toUpperCase()}</p></div>
                <Repos explorePage={true}/>
            </div>)}
            </div>
            }
            
        </div>
    )
}