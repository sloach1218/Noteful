import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from '../NotesContext'


class MainSideBar extends React.Component {

  static contextType = NotesContext;  
  render(){
    const { folders=[] } = this.context;
    return (
        
            <div>
              <ul>
                {folders.map(folder => <li key={folder.id}><NavLink to={`/folder/${folder.id}`} className='folderLink'>{folder.name}</NavLink></li>)}
                <li className='folderLink'><NavLink className="addbtn" to='/add-folder'>+ Add Folder</NavLink></li>
              </ul>
              
            </div>
        
         
      
    );
  }
}

export default MainSideBar;