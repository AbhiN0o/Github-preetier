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