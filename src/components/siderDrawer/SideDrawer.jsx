import React from 'react';
import "./sideDrawer.css";


const SideDrawer = props =>{
 let drawerClasses= ["side-drawer"];

 if(props.show){
   drawerClasses=["side-drawer open"]
 }
 return(
 <nav className={drawerClasses}>
   <div className="close__btn" 
       onClick={props.toggleNavHandler} >X</div>
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
 </nav>
 )
   
}

export default  SideDrawer;