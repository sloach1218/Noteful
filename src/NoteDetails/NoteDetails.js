import React from 'react';
import NotesContext from '../NotesContext';
import { getNote } from '../noteHelpers';



class NoteDetails extends React.Component {

  static contextType = NotesContext;
  static defaultProps ={
    onDeleteNote: () => {},
  }

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.match.params.noteId;
    


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
    const note = getNote(notes, this.props.match.params.noteId)
    return (
        
            <div className="noteDetails">
                <h3>{note.name}</h3>
                <p>Modified: {note.modified.slice(0,10)}</p>
                <button type="button" className="deletebtn" onClick={this.handleClickDelete}>Delete Note</button>
                <p>{note.content}</p>
            </div>
        
      
    );
  }
}

export default NoteDetails;