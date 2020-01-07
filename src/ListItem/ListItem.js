import React from 'react'
//import './ListItem.css'

class ListItem extends React.Component{
  
    render(){
        return (
            <ul>
                <li>List Item 1</li>
                <li>List Item 1</li>
                <li>List Item 1</li>
            </ul>
            
            /*
                <ul>
                    {props.notes.map(note =>
                    <li key={note.id}>
                        <ListItem
                        id={note.id}
                        name={note.name}
                        modified={note.modified}
                        />
                    </li>
                    )}
                </ul>
                <a>Add Note</a>*/
        )
  }
}
export default ListItem;