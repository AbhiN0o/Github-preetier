import { use, useEffect, useState } from "react";
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
    const [sortType,setSortType]=useState(null)
    const onSort=(sortType)=>{
        if(sortType==="recent"){
            userRepo.sort((a,b)=>new Date (b.created_at)-new Date(a.created_at));//descending order 
        }
        else if(sortType==="stars"){
            userRepo.sort((a,b)=>b.stargazers_count-a.stargazers_count);//descending order 
        }else{
            userRepo.sort((a,b)=>b.forks_count-a.forks_count);//descending order 
        }
        setSortType(sortType)
        setUserRepo([...userRepo])
    }

    return(
        <div className="m-4">
            <Search onSearch={onSearch}/>
            {userRepo.length>0 && <SortRepos onSort={onSort} sortType={sortType} />}
            <div className="flex flex-col gap-4 lg:flex-row justify-center items-start mx-auto">
               {loadingUsers ? <Spinner /> : (<><ProfileInfo />
                <Repos /> </>)}
            </div>
        </div>
    )
}