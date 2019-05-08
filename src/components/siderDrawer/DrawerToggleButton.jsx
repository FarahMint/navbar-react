import React from 'react'
import "./drawerToggleButton.css"


const DrawerToggleButton= props => {
  return (
    <div className="toolbar_toogle-button">
        <button className="toggle-button"
        onClick={ props.click }>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
        </button>
      
    </div>
  )
}

export default  DrawerToggleButton;