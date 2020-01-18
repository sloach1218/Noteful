import React from 'react';
import { NavLink } from 'react-router-dom';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MainPage extends React.Component {

  
  render(){
    
    return (
        
            <ul>
                 {this.props.notes.map(note => {
                     return(
                        <li>
                          <NavLink to={`/note/${note.id}`}>
                            <h3>{note.name}</h3>
                            <p>Modified: {note.modified.slice(0,10)}</p>
                            <button type="button" className="deletebtn">Delete Note</button>
                          </NavLink>
                            
                        </li>
                     )
                 })}
                 <li><button className="addbtn">+ Add Note</button></li>
            </ul>
        
      
    );
  }
}

export default MainPage;