import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MainSideBar extends React.Component {

  
  render(){
    return (
        
            <ul>
                {this.props.folders.map(folder => <li>{folder.name}</li>)}
            </ul>
        
         
      
    );
  }
}

export default MainSideBar;