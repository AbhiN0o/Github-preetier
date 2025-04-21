import {Eye,BookKeyIcon,MapPin,Twitter,UserRoundCheck,Users,GitGraph, User,Heart} from "lucide-react"
import useUserStore from "../Store/userStore"
import { formatMemberSince } from "../utils/function"
import LikeProfile from "./LikeProfile"
export default function ProfileInfo(){
    const {userProfile}=useUserStore()
    return(
        <div className="lg:w-1/3 w-full flex flex-col gap-2  lg:sticky md:top-10 ">
            <div className="bg-glass rounded-lg p-4">
                <div className="flex gap-3 items-center">
                    <a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
                            <img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
                    </a>
                    <div className='flex gap-2 items-center flex-col'>
						<LikeProfile />
						<a
							href={userProfile?.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
						>
							<Eye size={16} />
							View on Github
						</a>
					</div>
                </div>
                {/* User Bio */}
				{userProfile?.bio ? (
					<div className='flex items-center gap-2 text-sm'>
						<BookKeyIcon className=" size-3"/>
						<p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
					</div>
				) : null}

                {/* Location */}
				{userProfile?.location ? (
					<div className='flex items-center gap-2 text-sm'>
						<MapPin className="size-3" />
						{userProfile?.location}
					</div>
				) : null}

                {/* Twitter Username */}
				{userProfile?.twitter_username ? (
					<a
						href={`https://twitter.com/${userProfile.twitter_username}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 hover:text-sky-500 text-sm'
					>
						<Twitter className="size-3.5 "/>
						{userProfile?.twitter_username}
					</a>
				) : null}

				{/* Member Since Date */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Member since</p>
					<p className='text-sm'>{formatMemberSince(userProfile.created_at)}</p>
				</div>

				{/* Email Address */}
				{userProfile?.email && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Email address</p>
						<p className='text-sm'>{userProfile.email}</p>
					</div>
				)}

				{/* Full Name */}
				{userProfile?.name && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Full name</p>
						<p className='text-sm'>{userProfile?.name}</p>
					</div>
				)}

				{/* Username */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Username</p>
					<p className='text-sm'>{userProfile?.login}</p>
				</div>
            </div>
            <div className="flex flex-wrap gap-2 mx-4">

                <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
                    <UserRoundCheck className="size-4 text-blue-800" />
                    <p className="text-xs">Followers:{userProfile.followers}</p>
                </div>

                <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
                    <Users className="size-4 text-blue-800" />
                    <p className="text-xs">Following:{userProfile.following}</p>
                </div>

                <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
                    <GitGraph className="size-4 text-blue-800" />
                    <p className="text-xs">Public Repos:{userProfile.public_repos}</p>
                </div>

                <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
                    <GitGraph className="size-4 text-blue-800" />
                    <p className="text-xs">Public Gists:{userProfile.public_gists}</p>
                </div>

                
            </div>
        </div>
    )
}