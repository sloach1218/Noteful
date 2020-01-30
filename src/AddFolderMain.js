import React from 'react';
//import { NavLink } from 'react-router-dom';
import NotesContext from './NotesContext'
//import { updateNotesBasedOnFolder } from './noteHelpers'

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class AddFolderMain extends React.Component {

  static contextType = NotesContext;
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      },
      
    };
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const data = {"name": name.value}

    fetch('http://localhost:9090/folders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(() => {
      window.location.href = '/';
    })
    

    
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }
 

  render(){
    
    
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <legend>Create a folder</legend>
        <label htmlFor="name">Folder Name:</label>
        <input type="text" name="name" id="name" onChange={e => this.updateName(e.target.value)}></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddFolderMain;