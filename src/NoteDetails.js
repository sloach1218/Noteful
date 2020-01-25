import React from 'react';
import NotesContext from './NotesContext'
import { getNote } from './noteHelpers'



class NoteDetails extends React.Component {

  static contextType = NotesContext;
  render(){
    const { notes=[] } = this.context;
    const note = getNote(notes, this.props.match.params.noteId)
    return (
        
            <div className="noteDetails">
                 
                        
                            <h3>{note.name}</h3>
                            <p>Modified: {note.modified.slice(0,10)}</p>
                            <button type="button" className="deletebtn">Delete Note</button>
                        
                        <p>{note.content}</p>
                     
                 
                 
            </div>
        
      
    );
  }
}

export default NoteDetails;