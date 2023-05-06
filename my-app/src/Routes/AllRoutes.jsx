


import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import Form from "../Pages/Form"
import UserData from "../Pages/UserData"
function AllRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="form" element={ <Form/> } />
        <Route path="userdata" element={ <UserData/> } />
      </Routes>
    </div>
  )
}

export default AllRoutes