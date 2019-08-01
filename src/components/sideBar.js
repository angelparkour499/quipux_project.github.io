import React from 'react'
import "../components_style/sideBar.css"
import Icon from "../assets/briefcase.svg"
import Icon_2 from "../assets/newspaper.svg"
class Sidebar extends React.Component {
    state = {
        active: false
    }
    handleClick = () => {
     let active = this.state.active  
        this.setState({active: !active})
    }
    render() {
        return( <div className="sidebar" id="sideBar">
            <div onClick={this.handleClick} style={width: 600} className="nav_icon">
                <div className="bar"></div>
                <div className="bar bar2"></div>
                <div className="bar"></div>
                
            </div>
            <div className="block"><img src={Icon}/> <h3>Empresas  </h3><p className="fa fa-angle-down"></p></div>
            <div className="block"><img src={Icon_2}/> <h3>Empresas  </h3><p className="fa fa-angle-down"></p></div>        
        </div>)
    }
}
export default Sidebar