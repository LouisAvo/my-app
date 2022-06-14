import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hi I am Louis I am copying
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This website
        </a>
      </header>
    </div>
  );
}

export default App;
