import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
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
/*
function App(){

  return <MyComponent name = "React"/>
}

export default App;
*/

/*
function App(){

  return <MyComponent name ="ParentValue">ChildrenValue</MyComponent>
}*/

const App = () =>{
  return <MyComponent name="ㄹㄹㄹㄹ">리액트</MyComponent>;
}

export default App;
