import React from 'react';
import { NavLink } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MainSideBar extends React.Component {

  
  render(){

    return (
        
            <div>
              <ul>
                {this.props.folders.map(folder => <li key={folder.id}><NavLink to={`/folder/${folder.id}`} className='folderLink'>{folder.name}</NavLink></li>)}
                <li className='folderLink'><button className="addbtn">+ Add Folder</button></li>
              </ul>
              
            </div>
        
         
      
    );
  }
}

export default MainSideBar;