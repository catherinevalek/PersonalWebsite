import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let urls = [
  './src/project-gallery/space.jpg',

];

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
