import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from './NotesContext'
import { updateNotesBasedOnFolder } from './noteHelpers'

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MainPage extends React.Component {

  static contextType = NotesContext;
  
  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.match.params.noteId


    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        window.location.href = '/';
        this.context.deleteNote(noteId)
        // allow parent to perform extra behaviour
        //this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render(){
    
        
      return(
        <ul>
            {this.props.newNotes.map(note => {
              <li key={note.id}>
              <NavLink to={`/note/${note.id}`}>
                <h3>{note.name}</h3>
                <p>Modified: {note.modified.slice(0,10)}</p>
                <button type="button" className="deletebtn" onClick={this.handleClickDelete}>Delete Note</button>
              </NavLink>
                
              </li>
            })}
        </ul>
        
        
     )
        
      
    
  }
}

export default MainPage;