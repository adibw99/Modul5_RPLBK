import React from 'react';
import './App.css';
import Parent from './Komponen/parent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Daftar Pemain Sepakbola</h2>
          <Parent />
        </header>
      </div>
    );
  }
}

export default App;
