import logo from './logo.svg';
import './App.css';
import { OpenModalButton} from "./button/openModalButton";




const App=()=> {
          const list =[{text:'shir',title:'yehuda'},{text:'odelya',title:'giti'}];



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <OpenModalButton/>
      </header>
    </div>
  );
}

export default App;
