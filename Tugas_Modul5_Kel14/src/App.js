import React from 'react';
import './App.css';
import Detail from './Komponen/detail';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Daftar Pemain Sepakbola</h2>
          <Detail />
        </header>
      </div>
    );
  }
}

export default App;
