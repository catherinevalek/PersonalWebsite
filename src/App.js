import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from './components/projectList';
let urls = [
  './src/project-gallery/space.jpg',

];
class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectList imageUrls={urls} />,
        document.getElementById('mount')
      </div>
    );
  }
}

export default App;
