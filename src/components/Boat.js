import React, {} from "react";
import "./Content.css"

const Content = (props) => {

  
  return (
    <content> 
      <div className="content--class"><h1>{props.item.name}</h1></div>
      <img src={props.item.image} className="content--img" alt="boat_image" height="220" width="200"/>
      <hr></hr>
      <p className="content--description">{props.item.description}</p>
    </content>
  )
}

export default Content
