import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MainPage extends React.Component {

  
  render(){
    return (
        
            <ul>
                 {this.props.notes.map(note => {
                     return(
                        <li>
                            <h3>{note.name}</h3>
                            <p>Modified: {note.modified}</p>
                            <button type="button">Delete Note</button>
                        </li>
                     )
                 })}
            </ul>
        
      
    );
  }
}

export default MainPage;