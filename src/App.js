import React from 'react';
import dummyStore from './dummy-store';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MainPage from './MainPage';
import MainSideBar from './MainSideBar';
import NoteSideBar from './NoteSideBar';
import NoteDetails from './NoteDetails';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      folders: []
    };
    this.updateNotesBasedOnFolder = this.updateNotesBasedOnFolder.bind(this);
    this.getNote = this.getNote.bind(this);
  }

  componentDidMount() {
    this.setState({
      notes: dummyStore.notes,
      folders: dummyStore.folders
    });
    
  }

  updateNotesBasedOnFolder(notes, folderId){
      const newnotes = notes.filter(note => note.folderId === folderId)
      return newnotes;
  }

  getNote(notes, noteId){
    const theNote = notes.find(note => note.id === noteId)
    return theNote;
  }
  getFolder(notes, folders, noteId){
    const theNote = notes.find(notes => notes.id === noteId)
    const theFolder = folders.find(folder => folder.id === theNote.folderId)
    return theFolder;
  }

  
  render(){
    const {notes, folders } = this.state;
    
    return (
      <Router>
        <main className='App'>
          <header>
            <h1><Link to="/">Noteful</Link></h1>
          </header>
          <aside>
              <Route exact path="/" render={(routeProps) =>
                <MainSideBar
                  folders={folders}
                  {...routeProps}
                />} 
              />
              <Route path="/folder/:folderName" render={(routeProps) =>
                <MainSideBar
                  folders={folders}
                  {...routeProps}
                />} 
              />
              <Route path="/note/:noteId" render={(routeProps) =>{
                const getFolder = this.getFolder(notes, folders, routeProps.match.params.noteId)
                return(
                  <NoteSideBar
                  folder={getFolder}
                  {...routeProps}
                />
                )
              }
                } 
              />
          </aside>
          <section>
            <Route exact path="/" render={(routeProps) =>
              <MainPage
                notes={notes}
                {...routeProps}
              />}/>
              <Route 
                path="/folder/:folderName" 
                render={(routeProps) => {
                  const notesforFolder = this.updateNotesBasedOnFolder(notes, routeProps.match.params.folderName)
                  
                  return(
                    <MainPage
                    notes={notesforFolder}
                    {...routeProps}
                  />
                  )} }
              />
              <Route 
                path="/note/:noteId"
                render={(routeProps) => {
                  
                  const note = this.getNote(this.state.notes, routeProps.match.params.noteId);
                  return(
                    <NoteDetails
                    note={note}
                    {...routeProps}
                  /> 
                  )}
                }
                  
              />
          </section>

        </main>
      </Router>
      
    );
  }
}

export default App;
