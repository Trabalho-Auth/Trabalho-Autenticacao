import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Deploy funcionando!</h1>

        <p>
          Agora qualquer mudança aqui deve aparecer automaticamente no GitHub Pages.
        </p>

        <a
          className="App-link"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Docs
        </a>
      </header>
    </div>
  );
}

export default App;
