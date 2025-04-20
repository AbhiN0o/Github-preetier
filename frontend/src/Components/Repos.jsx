    import useUserStore from "../Store/userStore";
    import Repo from "./Repo";

    export default function Repos({explorePage}){
        const {userRepo}=useUserStore()
        console.log("uts my turn")
        return (
            <div className={`bg-glass ${explorePage ? "lg:w-full" : "lg:w-2/3"} rounded-lg px-6 py-6`}>
                <ol className="relative border-s border-gray-200">
                    {userRepo.map((val)=>{
                        return <Repo key={val.id} repo={val} />
                    })}
                    {userRepo.length===0 ? "No Repos Found":""}
                </ol>
            </div>
        )
    }