import ProfileInfo from "../Components/ProfileInfo";
import Repos from "../Components/Repos";
import Search from "../Components/Search";
import SortRepos from "../Components/SortRepos";

export default function Homepage(){
    return(
        <div className="m-4">
            <Search />
            <SortRepos />
            <div className="flex flex-col gap-4 lg:flex-row justify-center items-start mx-auto">
                <ProfileInfo />
                <Repos />
            </div>
        </div>
    )
}