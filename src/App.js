import React, { Component } from "react";
import "./App.css";
// import User from "./User";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";
class App extends Component {
  render() {
    //console.warn("check data", this.props.todos);
    return (
      <div>
        <HeaderContainer />

        <HomeContainer />

        {/* <User data={{ name: " hardiii_8999" }} /> */}
        {/* <button onClick={() => this.props.addTodo()}> click</button> */}
      </div>
    );
  }
}
export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
