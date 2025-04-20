import {create} from "zustand"

const useUserStore=create((set,get)=>({
    authUser:null,
    setAuthUser:(user)=>{
        set({authUser:user})
    },
    loading:true,
    setLoadingPage:(state)=>{

        set({loading:state})
        
    },

    userProfile:{},
    setUserProfile:(newProfile)=>{
        set({userProfile:newProfile})
    },

    userRepo:[],
    setUserRepo:(repos)=>{
        set({userRepo:repos})
    },

    loadingUsers:false,
    setLoading:()=>{
        const currState=get().loadingUsers
        set({loadingUsers:!currState})
    }
}))

export default useUserStore