import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Contador from './components/Contador';

const dados = {
  App: {
    titulo: "My Very First SetStage App",
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header App={dados.App} />
        <Contador />
      </div>
    );
  }
}
export default App;