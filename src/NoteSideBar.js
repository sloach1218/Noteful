import React from 'react';
import { NavLink } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class NoteSideBar extends React.Component {

  
  render(){
    
    return (
      <ul className="detailsSideBar">
        <li>{this.props.folder.name}</li>
        <li><NavLink to={`/`}> Go Back</NavLink></li>
      </ul>
        
         
      
    );
  }
}

export default NoteSideBar;