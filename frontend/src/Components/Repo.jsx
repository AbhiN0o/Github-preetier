import {GitBranch,GitFork,Files,Star, LoaderCircle} from "lucide-react"
import { formatDate } from "../utils/function"
import toast from "react-hot-toast";

export default function Repo({repo}){

	const handleCloneClick =async (clone_link)=>{
		try {
			await navigator.clipboard.writeText(clone_link);
			toast.success("Clone link Copied")
		} catch (error) {
			toast.error("Clipboard write failed.")
		}
	}

    return (
        <li className='mb-10 ms-7'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
			rounded-full -start-3 ring-8 ring-white'
			>
				<GitBranch className='w-5 h-5 text-blue-800' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a
					href={repo.svn_url}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{repo.name}
				</a>
				<span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
					py-0.5 rounded-full flex items-center gap-1'
				>
					<Star /> {repo.stargazers_count}
				</span>
				<span
					className='bg-purple-100 text-purple-800 text-xs font-medium
					 px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<GitFork /> {repo.forks}
				</span>
				<span
					onClick={()=>{handleCloneClick(repo.clone_url)}}
					className='cursor-pointer bg-green-100 text-green-800 text-xs
					font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<Files /> Clone
				</span>
			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
			 text-gray-400'
			>
				Released on {formatDate(repo.pushed_at)}
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>{repo.description? repo.description :"No Description Provided."}</p>
			<img src={`/${repo.language?.toLowerCase() || "html"}.svg`} alt='Programming language icon' className='h-8' />
		</li>
    )
}