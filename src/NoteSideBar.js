import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class NoteSideBar extends React.Component {

  
  render(){
    return (
      <div>
        <p>{this.props.match.params.id}</p>
      </div>
        
         
      
    );
  }
}

export default NoteSideBar;