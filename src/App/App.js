import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import MainSideBar from '../MainSideBar/MainSideBar';
import NoteSideBar from '../NoteSideBar/NoteSideBar';
import NoteDetails from '../NoteDetails/NoteDetails'; 
import NotesContext from '../NotesContext';
import AddSideBar from '../AddSideBar/AddSideBar';
import AddFolderMain from '../AddFolderMain/AddFolderMain';
import AddNoteMain from '../AddNoteMain/AddNoteMain';
import ErrorBoundary from '../ErrorBoundary';


class App extends React.Component {

    state = {
      notes: [],
      folders: []
    };

  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/folders').then(response => response.json()),
      fetch('http://localhost:9090/notes').then(response => response.json())
    ]).then(([folders, notes]) => {
      this.setState({folders:folders, notes:notes});
    }).catch((err) => {
        console.error(err);
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
      deleteNote: this.handleDeleteNote
    }
    
    return (
      <Router>
        <main className='App'>
          <header>
            <h1><Link to="/">Noteful</Link></h1>
          </header>
          <NotesContext.Provider value={contextValue}>
            <aside>
              <ErrorBoundary>
                <Route exact path="/" component={MainSideBar}/> 
                <Route path="/folder/:folderName" component={MainSideBar} />
                <Route path="/note/:noteId" component={NoteSideBar} />
                <Route path="/add-folder" component={AddSideBar} />
                <Route path="/add-note" component={AddSideBar} />
              </ErrorBoundary>
            </aside>
            <section>
              <ErrorBoundary>
                <Route exact path="/" component={MainPage}/>
                <Route path="/folder/:folderName" component={MainPage} />
                <Route path="/note/:noteId" component={NoteDetails}/>
                <Route path="/add-folder" component={AddFolderMain} />
                <Route path="/add-note" component={AddNoteMain} />
              </ErrorBoundary>
            </section>
          </NotesContext.Provider>

        </main>
      </Router>
      
    );
  }
}

export default App;
