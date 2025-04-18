export default function SortRepos({onSort,sortType}){
    return (
        <div className="mb-2 flex justify-center lg:justify-end">
            <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType==="recent"?"ring-2 ring-blue-400":""}`} onClick={()=>{onSort("recent")}}>
                Most Recent
            </button>
            <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType==="stars"?"ring-2 ring-blue-400":""}`} onClick={()=>{onSort("stars")}}>
                Most Stars
            </button>
            <button type="button" className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${sortType==="fork"?"ring-2 ring-blue-400":""}`} onClick={()=>{onSort("fork")}}>
                Most Forks
            </button>
        </div>
    )
}