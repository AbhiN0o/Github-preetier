import Repo from "./Repo";

export default function Repos(){
    return (
        <div className="bg-glass lg:w-2/3 w-full rounded-lg px-6 py-6 ">
            <ol className="relative border-s border-gray-200">
                <Repo />
                <Repo />
                <Repo />
            </ol>
        </div>
    )
}