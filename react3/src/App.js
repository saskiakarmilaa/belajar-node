import "./App.css";
import { User } from "./User";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false},
    { name: "Earth", isGasPlanet: false},
    { name: "Jupiter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false},
    { name: "Nuptune", isGasPlanet: true},
    { name: "Uranus", isGasPlanet: true},
  ];

  return (
  <div className="App">
    {planets.map((planet,key) => {
      if (planet.isGasPlanet) return <h1> {planet.name} </h1>
    })}
  </div>
  );
}

export default App;



















// // TEST KEDUA

// import "./App.css";
// import { User } from "./User";

// function App () {
//   const users = [
//     { name: "Saskia", age: 17},
//     { name: "Stella", age: 15},
//     { name: "Syahirah", age: 10},
//   ];

//   return (
//     <div className="App">
//       {users.map((user, key) => {
//         return <User name={user.name} age={user.age} />
//       })}
//     </div>
//   );
// }

// export default App;





















// //TEST PERTAMA
// import styles from './App.module.css';

// function App() {
//   const age = 17;
//   const isGreen = false;

//   return (
//   <div className="App"> 
//     {age >= 18 ? <h1>OVER AGE</h1> : <h1> UNDER AGE </h1>} 
//     <h1 style={{color: isGreen ? "green" : "#456199"}}> THIS HAS COLOR </h1>

//     {isGreen && <button> THIS IS A BUTTON </button>}
//   </div>
//   );
// }

// export default App;
