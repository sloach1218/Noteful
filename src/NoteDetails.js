import React from 'react';




class NoteDetails extends React.Component {

  
  render(){
    
    return (
        
            <div className="noteDetails">
                 
                        
                            <h3>{this.props.note.name}</h3>
                            <p>Modified: {this.props.note.modified.slice(0,10)}</p>
                            <button type="button" className="deletebtn">Delete Note</button>
                        
                        <p>{this.props.note.content}</p>
                     
                 
                 
            </div>
        
      
    );
  }
}

export default NoteDetails;