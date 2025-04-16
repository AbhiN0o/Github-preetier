export default function ExplorePage(){
    return(
        <div className="py-3 px-4">
            <div className="bg-glass max-w-2xl mx-auto rounded-md p-4 flex flex-col">
                <h1 className="text-center font-bold text-xl">Explore Popular Repositories</h1>
                <div className="grid grid-cols-2">
                    <div className="cursor-pointer flex px-5 py-7 items-center justify-center"><img src="/javascript.svg" alt="Javascript" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Javascript</p></div>
                    <div className="cursor-pointer flex px-5 py-2 items-center justify-center"><img src="/typescript.svg" alt="Typescript Logo" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Javascript</p></div>
                    <div className="cursor-pointer flex px-5 py-7 items-center justify-center"><img src="/c++.svg" alt="Cpp logo" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Javascript</p></div>
                    <div className="cursor-pointer flex px-5 py-7 items-center justify-center"><img src="/python.svg" alt="Python Logo" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Javascript</p></div>
                </div>
                <div className="cursor-pointer flex px-5 py-7 items-center justify-center"><img src="/java.svg" alt="Java Logo" className="size-14 sm:size-18 cursor-pointer"></img><p className="text-[0px] sm:text-xl pl-2">Javascript</p></div>
            </div>
        </div>
    )
}