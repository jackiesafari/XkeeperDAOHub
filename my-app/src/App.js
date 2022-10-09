import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Descentralize Science, <code>publish your research paper</code> and provide accessiblity to knowledge.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit research paper
        </a>
        <p>Apply to be a Verifier</p>
      <p> Approved submissions </p>
      </header>
      
    </div>
  );
}

export default App;
