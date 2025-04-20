export const getExploreRepos =async(req,res)=>{
    try {
        const lang=req.params.language
        const repo=await fetch(`https://api.github.com/search/repositories?q=language:${lang}&sort=stars&order=desc&per_page=10`,{
            headers:{
                authorization:`token ${process.env.GITHUB_API}`
            }
        })
        const finalRepo=await repo.json()
        res.status(200).json(finalRepo.items)
    } catch (error) {
        res.status(500).json({message:"Error in explore controller"})
    }
}