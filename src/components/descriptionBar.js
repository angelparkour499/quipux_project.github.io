import React from "react"
import { Link } from 'react-router-dom'
import "../components_style/descriptionBar.css"
import User from "../assets/user-img.png"
import Home_icon from "../assets/house.svg"

class Description extends React.Component {

render() {
    return( <div className="topBar">
       <div className="indicator"><Link to={'/'}><img src={Home_icon}/></Link> <h2 className="target"> EMPRESAS /</h2>
       <div className="spot">
        <h2 >{this.props.section}</h2></div></div> 
   <div className="user"><img src={User} id="user"/> <h3>Nombre Apellido</h3><i className="fa fa-angle-down"></i> </div> </div>)
}
}   

export default Description