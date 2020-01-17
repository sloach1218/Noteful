import React from 'react';
import dummyStore from './dummy-store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import MainSideBar from './MainSideBar';


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
  }



  
  render(){
    const {notes, folders } = this.state;
    return (
      <Router>
        <main className='App'>
          <header>
            <h1>Noteful</h1>
          </header>
          <aside>
            <Route path="/" render={(routeProps) =>
              <MainSideBar
                folders={folders}
                {...routeProps}
              />} 
            />
  
          </aside>
          <section>
            <Route path="/" render={(routeProps) =>
              <MainPage
                notes={notes}
                {...routeProps}
              />}/>
          </section>



          {/*Main route - renders all folders and notes*/}
          
         

          {/*renders specific note details and folder w/back button*/}
          {/*<ul>{this.state.notes.map((note) => <li key={note}>{note}</li>)}</ul>*/}

        </main>
      </Router>
      
    );
  }
}

export default App;
