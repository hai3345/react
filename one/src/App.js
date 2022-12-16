import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App(){
 const name = "리액트"
  return (
    <>
    {name === "리액트"?(
      <h1>리액트 안녕!</h1>
      ):(
      <h2>2잘 작동하니?</h2>
      )}
   
    </>
    );
}

export default App;
