import React, { Component } from 'react';
import AddJargonFormComponent from './components/AddJargonFormComponent'
import jargonList from './jargon.js'
import './App.css';

class App extends Component {
  render() {
    const handleOnClick = (title, description) => console.log(title, description)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Manage Jargon </h1>
          
        </header>
        <AddJargonFormComponent handleJargonSubmittion={handleOnClick} 
                                  jargonList={jargonList}/>
      </div>
    );
  }
}

export default App;
