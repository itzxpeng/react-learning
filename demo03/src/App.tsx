import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import './components/Greeting.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>
          Welcome to my React TypeScript application
        </p>
        <Greeting name="React Developer" />
      </header>
    </div>
  );
}

export default App;
