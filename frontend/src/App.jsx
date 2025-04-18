import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from "./Components/Sidebar"
import ExplorePage from "./Pages/ExplorePage"
import Homepage from "./Pages/Homepage"
import LikesPage from "./Pages/LikesPage"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import {Toaster} from "react-hot-toast"

function App() {

  return (
   <div className='flex text-white'>
    <Sidebar />
    <div className='max-w-5xl  text-neutral-300 mx-auto transition-all duration-3000 flex-1'>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/explore" element={<ExplorePage />}></Route>
        <Route path="/likes" element={<LikesPage />}></Route>
      </Routes>
      <Toaster />
    </div>

   </div>
  )
}

export default App
