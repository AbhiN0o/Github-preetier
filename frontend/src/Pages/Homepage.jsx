import { use, useEffect } from "react";
import ProfileInfo from "../Components/ProfileInfo";
import Repos from "../Components/Repos";
import Search from "../Components/Search";
import SortRepos from "../Components/SortRepos";
import toast from "react-hot-toast"
import useUserStore from "../Store/userStore";
import Spinner from "../Components/Spinner"


export default function Homepage(){
    const {userProfile,setUserProfile,userRepo,setUserRepo,loadingUsers,setLoading}=useUserStore();
    const getUserAndRepo =async()=>{
        setLoading();
        try {
            const userResponse = await fetch("https://api.github.com/users/AbhiN0o");
            const userprofile=await userResponse.json();
            setUserProfile(userprofile)


            const repositories=await fetch('https://api.github.com/users/AbhiN0o/repos')
            const finalRepo=await repositories.json();
            setUserRepo(finalRepo)


        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading()
        }
        
    }

    useEffect(()=>{
        getUserAndRepo();
    },[])


    const onSearch=async(userId)=>{
        setLoading();
        try {
            const userResponse = await fetch(`https://api.github.com/users/${userId}`);
            const userprofile=await userResponse.json();
            setUserProfile(userprofile)


            const repositories=await fetch(`https://api.github.com/users/${userId}/repos`)
            const finalRepo=await repositories.json();
            setUserRepo(finalRepo)


        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading()
        }
    }

    return(
        <div className="m-4">
            <Search onSearch={onSearch}/>
            {userRepo.length>0 && <SortRepos />}
            <div className="flex flex-col gap-4 lg:flex-row justify-center items-start mx-auto">
               {loadingUsers ? <Spinner /> : (<><ProfileInfo />
                <Repos /> </>)}
            </div>
        </div>
    )
}