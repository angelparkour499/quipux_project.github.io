import React from 'react'
import "../components_style/sideBar.css"
import Icon from "../assets/briefcase.svg"
import Icon_2 from "../assets/newspaper.svg"
import { Link } from 'react-router-dom'
class Sidebar extends React.Component {
    state = {
        active: false,
        bar_1: false,
        bar_2: false
    }
    handleClick = () => {
     let active = this.state.active  
     console.log(active)
        this.setState({active: !active}
        )
        if(this.state.bar_1 === true || this.state.bar_2 === true){
            this.setState({bar_1: false,bar_2: false,})
        }
    }

    
    handle_barClick_1 = () => {
    let bar1 = this.state.bar_1
        this.setState({bar_1: !bar1}
            )
            if(this.state.active === false) {
                this.setState({active: true,})
            }
    }
    handle_barClick_2 = () => {
        let bar2 = this.state.bar_2
            this.setState({bar_2: !bar2}
                )
                if(this.state.active === false) {
                    this.setState({active: true,})
                }
        }
 
    render() {
        
        return( <div className={this.state.active ? "sidebar active" : "sidebar"} id="sideBar">
            <div className="bar-title"><div onClick={this.handleClick} id="navIcon"  className={this.state.active ? "nav_icon margin" : "nav_icon"}>
                <div className="bar"></div>
                <div className={this.state.active ? "bar" : "bar bar2"}></div>
                <div className="bar"></div>       
            </div><h2 className={this.state.active ? "display-title" : null}>Quipux</h2></div>
            <div className={this.state.active ? "side-title" : "default"}><h3>Entities</h3></div>

            <div onClick={this.handle_barClick_1}  className={this.state.bar_1 ? "block_wrapper space" : this.state.active ? "block_wrapper" : "block"}>

                <div className="block">
                    <img src={Icon} className={this.state.active ? "iconBar" : null}/>
                     
                     <h3 className={this.state.active ? "appear" : null}>Empresas  </h3>
                     
                     <i className={this.state.bar_1 ? "fa fa-angle-down appear turn" : this.state.active ? "fa fa-angle-down appear" : "fa fa-angle-down"}></i>
                     
                     </div>

            <div className={this.state.bar_1 ? "link show" : "link"}>
                
                <Link to={"/"} onClick={this.handleClick} style={{textDecoration: 'none'}} className={this.state.bar_1 ? "link show" : "link"}>&#8213; Empresas
                
                </Link>
                </div></div>
            
            
                <div onClick={this.handle_barClick_2}  className={this.state.bar_2 ? "block_wrapper space" : this.state.active ? "block_wrapper" : "block"}>

                <div className={this.state.active ? "block" : null}><img src={Icon_2} className={this.state.active ? "iconBar" : null}/> 
                <h3 className={this.state.active ? "appear" : null}>Artículos  </h3> 
                                    <i className={this.state.bar_2 ? "fa fa-angle-down appear turn" : this.state.active ? "fa fa-angle-down appear" : "fa fa-angle-down"}></i>
                </div>
            <div className={this.state.bar_2 ? "link show" : "link"}>
                <Link to={"/article"} onClick={this.handleClick} style={{textDecoration: 'none'}} className={this.state.bar_2 ? "link show" : "link"}>&#8213; Artículos</Link></div></div>       
        </div>)
    }
}
export default Sidebar