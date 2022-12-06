import React, { } from "react";
import "./App.css"
import Boat from "./components/Boat"
import NavBar from "./components/Navbar"
import Rent from "./components/Rent"
import About from "./components/About"
import { Route, Routes } from "react-router-dom"
import rawData from "./mock-data.json"





const mapBoat = rawData.map(item =>{
  return(
      <Boat
      key={item.id}
      item={item}
      />
  )

})

const App = () => {


  return (
    <div>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/boat" element={mapBoat}/>
          <Route path="/rent" element={<Rent/>}/>
        </Routes>
      </div>
    </div>


  )
}

export default App
