import {HeartIcon} from "lucide-react"
import { useEffect, useState } from "react"
import {toast} from "react-hot-toast"
import {formatDate} from "../utils/function.js"
export default function LikesPage(){
	const [likes,setLikes]=useState([])

	useEffect(()=>{
		const getLikes=async()=>{
			try {
				const res=await fetch("/api/users/likes",{
					credentials:'include'
				})
				const data=await res.json()
				if(data.error)throw new Error(data.error)
				setLikes(data.likedBy)
	
			} catch (error) {
				toast.error(error.message)
			}
		}
		getLikes();
	},[])
	console.log(likes)

    return(
			<div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
			<table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
				<thead className='text-xs uppercase bg-glass'>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>No</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Username
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
                <tbody>
                    {likes.map((val,ind)=>{return (
						<tr className="bg-glass border-b">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <span>{ind+1}</span>
                            </div>
                        </td>
						<th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
								<img className='w-10 h-10 rounded-full' src={val.avatarUrl} alt='User Avatar' />
								<div className='ps-3'>
									<div className='text-base font-semibold'>{val.userName}</div>
								</div>
							</th>
							<td className='px-6 py-4'>{formatDate(val.likedDate)}</td>
							<td className='px-6 py-4'>
								<div className='flex items-center'>
									<HeartIcon size={22} className='text-red-500 mx-2' />
									Liked your profile
								</div>
							</td>
                    </tr>
					)})}
                </tbody>
			</table>
		</div>
    )
}