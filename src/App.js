import React from 'react';
import dummyStore from './dummy-store';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MainPage from './MainPage';
import MainSideBar from './MainSideBar';
import NoteSideBar from './NoteSideBar';


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      notes: [],
      folders: []
    };

  }

  componentDidMount() {
    this.setState({
      notes: dummyStore.notes,
      folders: dummyStore.folders
    });
    this.updateNotesBasedOnFolder = this.updateNotesBasedOnFolder.bind(this);
  }

  updateNotesBasedOnFolder(notes, folderId){
      const newnotes = notes.filter(note => note.folderId === folderId)
      return newnotes;
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
              <Route path="/note/:noteId" render={(routeProps) =>
                <NoteSideBar
                  folders={folders}
                  {...routeProps}
                />} 
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
          </section>

        </main>
      </Router>
      
    );
  }
}

export default App;
