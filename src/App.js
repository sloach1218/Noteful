import React from 'react';
import dummyStore from './dummy-store';
import Header from './Header/Header';
import Folders from './Folders/Folders'
import List from './List/List'

const test = dummyStore.notes.map((notes) => notes)
const nextTest = test.map((name) => {
  
  return name.name
})
//console.log(dummyStore)
//console.log(dummyStore.notes[0].name)
//console.log(test)
//console.log(nextTest)
class App extends React.Component {
  
  state = {
    notes: nextTest,
    folders: []
  };
  
  render(){
    return (
      <main className='App'>
        <Header />
        <Folders />
        <List />
        
        {/*<ul>{this.state.notes.map((note) => <li key={note}>{note}</li>)}</ul>*/}

      </main>
      
    );
  }
}

export default App;
