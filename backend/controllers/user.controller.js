import User from "../models/user.model.js"

export const getUserProfileAndRepos= async(req,res)=>{
    try {
        const username=req.params?.username
        const userRes=await fetch(`https://api.github.com/users/${username}`,{
            headers:{
                authorization:`token ${process.env.GITHUB_API}`
            }
        })
        const userProfile=await userRes.json();

        const repos=await fetch(`https://api.github.com/users/${username}/repos`,{
            headers:{
                authorization:`token ${process.env.GITHUB_API}`
            }
        })
        const userRepos=await repos.json()
        res.status(200).json({userProfile,userRepos})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const likeProfile =async (req,res)=>{
    try {
        const username=req.params.username
        const user=await User.findById(req.user._id.toString());
        const userToLike=await User.findOne({username})
        
        if(!userToLike){
            return res.status(401).json({message:"User is not a member"});
        }
        if(user.likedProfiles.length>=1 && user.likedProfiles.includes(userToLike.username)){
            return res.status(401).json({message:"User is already liked"})
        }

        userToLike.likedBy.push({userName:user.username,avatarUrl:user.avatarUrl,likedDate:Date.now()});
        user.likedProfiles.push(userToLike.username)

        await Promise.all([userToLike.save(),user.save()])

        res.status(200).json({message:"User Liked"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Error in liking profile"})
    }
}

export const getLikes=async(req,res)=>{
    try {
        const user = await User.findById(req.user._id.toString())
        console.log(user)
        res.status(200).json({likedBy:user.likedBy})
    } catch (error) {
        res.status(500).json({message:"Error in getting likes"})
    }
}