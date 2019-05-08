import React from 'react'
import "./toolbar.css";
import DrawerToggleBUtton from "../siderDrawer/DrawerToggleButton";

 const Toolbar= (props)=> {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
      <DrawerToggleBUtton click={props.toggleNavHandler} />
          <div className="toolbar__logo">
              <a href="/">logo</a>
              </div>

              <div className="spacer"></div>
          <div className="toolbar_navigation-items">
              <ul>
                  <li>
                     <a href="/">Users</a>
                  </li>
                  <li>
                     <a href="/">Dashboard</a>
                  </li>
                  <li>
                     <a href="/">Notifications</a>
                  </li>
              </ul>
              </div>
        </nav>
    </header>
  )
}
export default  Toolbar