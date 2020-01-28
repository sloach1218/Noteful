import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MainPage from './MainPage';
import MainSideBar from './MainSideBar';
import NoteSideBar from './NoteSideBar';
import NoteDetails from './NoteDetails'; 
import NotesContext from './NotesContext';


class App extends React.Component {

    state = {
      notes: [],
      folders: []
    };
  

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(response => response.json())
      .then(data => {
        this.setState({folders:data});
      });
      fetch('http://localhost:9090/notes')
      .then(notesresponse => notesresponse.json())
      .then(notesdata => {
        this.setState({notes:notesdata});
      });
  }
  handleDeleteNote = noteId => {
    this.setState({
        notes: this.state.notes.filter(note => note.id !== noteId)
    });
    
};
    
  render(){
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.handleDeleteNote,
      
    }
    
    return (
      <Router>
        <main className='App'>
          <header>
            <h1><Link to="/">Noteful</Link></h1>
          </header>
          <NotesContext.Provider value={contextValue}>
            <aside>
              <Route exact path="/" component={MainSideBar}/> 
              <Route path="/folder/:folderName" component={MainSideBar} />
              <Route path="/note/:noteId" component={NoteSideBar} />
            </aside>
            <section>
              <Route exact path="/" component={MainPage}/>
              <Route path="/folder/:folderName" component={MainPage} />
              <Route path="/note/:noteId" component={NoteDetails}/>
            </section>
          </NotesContext.Provider>

        </main>
      </Router>
      
    );
  }
}

export default App;
