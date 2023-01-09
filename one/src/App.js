import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import Say from './Say'
import EventPracitce from './EventPractice'
import ValidationSample from './ValidationSample';
import RefSample from './RefSample';
import './ValidationSample.css';
import { Component } from 'react';
import ScrollBox from './ScrollBox';
import IterationSample from './iterationSample';
import Info from './hooks/info'
import Counter from './hooks/info2'
import Average from './hooks/Average'
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

/*
const App = () =>{
  return <MyComponent name="ㄹㄹㄹㄹ">리액트</MyComponent>;
}
*/
/*
const App = () => {
  
  return <Say />;

};*/

//5.1 ref
/*
const App=() => {
  return <ValidationSample />
}*/

// 5.3 컴포넌트 파일 생성
/*
class App extends Component{
  render() {
    return (
      <div>
        <ScrollBox />
      </div>
    )
  }
}*/

// 6.2 
/*
class App extends Component{
  render() {
    return (
      <div>
        <IterationSample />
      </div>
    )
  }
}*/

const App = () => {
  return< Average />;
};


export default App;
