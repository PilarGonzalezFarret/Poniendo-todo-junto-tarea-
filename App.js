import react from 'react';
import './App.css';

import PoniendoTodoJunto from './components/PoniendoTodoJunto',

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Jane' lastName='Doe' age={54} hairColor='Black' />
      <PersonCard firstName='John' lastName='Smith' age={88} hairColor='Brown' />
      <PersonCard firstName='Millard' lastName='Fillmore' age={50} hairColor='Brown' />
      <PersonCard firstName='Maria' lastName='Smith' age={54} hairColor='Black' />
    </div>
  );
}

export default App;