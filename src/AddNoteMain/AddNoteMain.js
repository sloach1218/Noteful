import React from 'react';
import NotesContext from '../NotesContext'
import ValidationError from '../ValidationError';



class AddNoteMain extends React.Component {

  static contextType = NotesContext;
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      },
      content: {
        value: "",
        touched: false
      },
      noteFolder: {
        value: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      },
    };
  }
  updateName(name) {
    this.setState({ name: { value: name, touched: true } });
  }
  updateContent(content) {
    this.setState({ content: { value: content, touched: true } });
  }
  updateFolder(folder) {
    this.setState({ noteFolder: { value: folder, touched: true } });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name, content, noteFolder } = this.state;
    //const date = new Date(); //Thu Jan 30 2020 18:45:11 GMT-0600 (Central Standard Time)
    const data = {
      "name": name.value,
      "content": content.value,
      "modified": "2019-01-03T00:00:00.000Z",
      "folderId": noteFolder.value,
    }

    fetch('http://localhost:9090/notes', {
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
    } else if (name.length < 2) {
      return "Name must be at least 2 characters long";
    }
  }

  validateContent() {
    const name = this.state.content.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 5) {
      return "Name must be at least 5 characters long";
    }
  }
  
 

  render(){
    const folders = this.context.folders;
    
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <legend>Create a note</legend>
        <label htmlFor="name">Note Name:</label>
        <input type="text" name="name" id="name" onChange={e => this.updateName(e.target.value)}></input>
        {this.state.name.touched && (<ValidationError message={this.validateName()} />)}
        <label htmlFor="content">Content:</label>
        <textarea type="text" name="content" id="content" onChange={e => this.updateContent(e.target.value)}></textarea>
        {this.state.content.touched && (<ValidationError message={this.validateContent()} />)}
        <label htmlFor="folders">Select a Folder:</label>
        <select name="folders" value={this.state.noteFolder.value} onChange={e => this.updateFolder(e.target.value)}>
          {folders.map((folder) => (
          <option value={folder.id} key={folder.id}>{folder.name}</option>
          ))}
          
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddNoteMain;