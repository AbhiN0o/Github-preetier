import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from "./Components/Sidebar"
import ExplorePage from "./Pages/ExplorePage"
import Homepage from "./Pages/Homepage"
import LikesPage from "./Pages/LikesPage"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import toast, {Toaster} from "react-hot-toast"
import useUserStore from './Store/userStore'
import { useEffect } from 'react'

function App() {
  const {setAuthUser,authUser,loading,setLoadingPage}=useUserStore()
  const checkAuth=async()=>{
    console.log("hi")
    setLoadingPage(true)
    try {

      const user=await fetch("http://localhost:2222/api/auth/check", {
        credentials: 'include'
      })
      const finalUser=await user.json()
      setAuthUser(finalUser.user)
    } catch (error) {
      toast.error(error.message)
    }finally{
      setLoadingPage(false)
    }
  }
  useEffect(()=>{
    checkAuth()
  },[])

  if(loading) return null;

  return (
   <div className='flex text-white'>
    <Sidebar />
    <div className='max-w-5xl  text-neutral-300 mx-auto transition-all duration-3000 flex-1'>
      <Routes>
        <Route path="/" element={authUser?<Homepage />:<Navigate to={"/login"}/>}></Route>
        <Route path="/login" element={!authUser?<Login />:<Navigate to={"/"} />}></Route>
        <Route path="/signup" element={!authUser?<Signup />:<Navigate to={"/"}/>}/>
        <Route path="/explore" element={authUser?<ExplorePage />:<Navigate to={"/login"}/>}></Route>
        <Route path="/likes" element={authUser?<LikesPage />:<Navigate to={"/login"}/>}></Route>
      </Routes>
      <Toaster />
    </div>

   </div>
  )
}

export default App
