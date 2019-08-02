import React from 'react'
import SideBar from './sideBar.js'
import Description_bar from './descriptionBar.js'

function Layout (props)  {

    
return(
    <React.Fragment>
 
<SideBar />
<Description_bar section="nombre empresa"/>
{props.children}

        </React.Fragment>
        )
    }

export default Layout