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
        <a
          className="App-link"
          href="https://gateway-proxy-bee-2-0.gateway.ethswarm.org/bzz/e9c20ce41ebe48a7cbb4fac63f5aea87def4390adcbd847341c04fdb8e828da8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Approved submission #1 (Pygmy rabbit)
        </a>

        <a
          className="App-link"
          href="https://gateway-proxy-bee-1-0.gateway.ethswarm.org/bzz/5e9319411a4cd4e4e1ac88ccb640c1410360a9c319234151161eac20b9fd0cff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Approved submission #2 (Desert Tortoise)
        </a>

        <a
          className="App-link"
          href="https://gateway-proxy-bee-3-0.gateway.ethswarm.org/bzz/135a29857fb602d215be9d40c69794eaa81f38b07160a8eb1cc02bfa06b9d2f6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Approved submission #3 (The Pika)
        </a>
        <p>Enter the Metaverse and dive into science</p>
      </header>
      
    </div>
  );
}

export default App;
