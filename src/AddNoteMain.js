import React from 'react';
import NotesContext from './NotesContext'
import { updateNotesBasedOnFolder } from './noteHelpers'



class AddNoteMain extends React.Component {

  static contextType = NotesContext;
  
 

  render(){
    
    
    return (
      <form>
        <legend>Create a note</legend>
        <label htmlFor="name">Note Name:</label>
        <input type="text" name="name" id="name"></input>
        <label htmlFor="content">Content:</label>
        <textarea type="text" name="content" id="content"></textarea>
        <select name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddNoteMain;