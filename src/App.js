import React from 'react';
import dummyStore from './dummy-store';
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
    this.setState({
      notes: dummyStore.notes,
      folders: dummyStore.folders
    });
    
  }

    
  render(){
    //const {notes, folders } = this.state;
    const contextValue = {
      folders:this.state.folders,
      notes: this.state.notes,
      
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
              <Route 
                path="/folder/:folderName"  component={MainPage} />
              <Route 
                path="/note/:noteId"  component={NoteDetails}/>
          </section>
          </NotesContext.Provider>

        </main>
      </Router>
      
    );
  }
}

export default App;
