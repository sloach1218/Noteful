import React from 'react'
import './List.css'

class List extends React.Component{
  
    render(){
        return (
            <section>
                <ul>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                </ul>
            </section>
            
            /*<section className='List'>
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
                <a>Add Note</a>
            
            </section>*/
        )
  }
}
export default List;