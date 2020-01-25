import React from 'react';
import NotesContext from './NotesContext'
import { getFolder } from './noteHelpers'


class NoteSideBar extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this); 
 }
 
 goBack(){
     this.props.history.goBack();
 }
static contextType = NotesContext;
  render(){
    const { notes=[]} = this.context;
    const { folders=[]} = this.context;
    const folder = getFolder(notes, folders, this.props.match.params.noteId)
    return (
      <ul className="detailsSideBar">
        <li>{folder.name}</li>
        <li><button onClick={this.goBack}> Go Back</button></li>
      </ul>
        
         
      
    );
  }
}

export default NoteSideBar;