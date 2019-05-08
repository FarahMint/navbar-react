import React, {Component} from 'react';
 import Toolbar from "./components/toolbar/Toolbar";
import SideDrawer from "./components/siderDrawer/SideDrawer";

import  BackDrop from "./components/backDrop/BackDrop"



class App extends Component {

  state ={
    sideDrawerOpen: false,
  }


  toggleNavHandler = ()=>{
    this.setState((prevState)=>({
      sideDrawerOpen: !prevState.sideDrawerOpen,
    }))
  };

  backdropHandler = () =>{
    this.setState({
      sideDrawerOpen: false
    })
  };



  render (){
    // let sideDrawer;
    let backdrop;

    // if(this.state.sideDrawerOpen){
    //    sideDrawer = <SideDrawer/> ;
    //    backdrop =  <BackDrop click={this.backdropHandler}/>;
    // }


    if(this.state.sideDrawerOpen){
       backdrop =  <BackDrop click={this.backdropHandler}/>;
    }
    return (
      <div style={{height:"100%"}}>
    <Toolbar  
    toggleNavHandler ={this.toggleNavHandler}
    show = {this.state.sideDrawerOpen}/>


    <SideDrawer 
    show = {this.state.sideDrawerOpen}
    /**TEST 2) button on the RIGHT remove btn sidebar*/
    // toggleNavHandler={this.toggleNavHandler} 
    /> 
        {/* {sideDrawer} */}
        {backdrop}
     
  <main style={{marginTop: "63px"}}>
  <p>this is content</p>
  </main>
        
      </div>
    );
  }
}

export default App;
