import React, { } from "react";
import "./CSS/App.css"
import Boat from "./Components/Boat_Page"
import BoatId from "./Components/BoatId"
import NavBar from "./Components/Navbar"
import Rent from "./Components/Rent"
import About from "./Components/About"
import { Route, Routes } from "react-router-dom"
import rawData from "./mock-data.json"




const App = () => {


  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/boat" element={<Boat/>}/>
          <Route path="/boat/:id" element={<BoatId/>}/>
          <Route path="/rent" element={<Rent/>}/>
        </Routes>
    </div>


  )
}

export default App
