import React from 'react'
import SideBar from './sideBar.js'


function Layout (props)  {

    
return(
    <React.Fragment>
 
<SideBar />

{props.children}

        </React.Fragment>
        )
    }

export default Layout