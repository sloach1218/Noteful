import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from '../NotesContext'
import { updateNotesBasedOnFolder } from '../noteHelpers'

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class MainPage extends React.Component {

  static contextType = NotesContext;
  
  handleClickDelete = e => {
    e.preventDefault()
    const noteId = e.target.getAttribute('note')
    

    fetch(`https://guarded-wildwood-03458.herokuapp.com/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok){
          return res.json().then(e => Promise.reject(e))
        }
        return
      })
      .then(() => {
        window.location.href = '/';
        this.context.deleteNote(noteId)
        
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render(){
    const { notes=[] } = this.context;
    
    const newNotes = updateNotesBasedOnFolder(notes, this.props.match.params.folderName)
    
    return (
        
            <ul>
                 {newNotes.map(note => {
                     return(
                        <li key={note.id}>
                          <NavLink to={`/note/${note.id}`}>
                            <h3>{note.name}</h3>
                            <p>Modified: {note.modified.slice(0,10)}</p>
                            <button type="button" className="deletebtn" onClick={this.handleClickDelete} note={note.id}>Delete Note</button>
                          </NavLink>
                            
                        </li>
                     )
                 })}
                 <li><NavLink to='/add-note' className="addbtn">+ Add Note</NavLink></li>
            </ul>
        
      
    );
  }
}

export default MainPage;