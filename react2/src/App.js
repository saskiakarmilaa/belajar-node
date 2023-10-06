import './App.css';
// test kedua
function App () {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1> {props.salary} </h1>
      <h1> {props.position} </h1>
      <h1> {props.company} </h1>
    </div>
  );
};

export default App;



// // test pertama

// function App() {
//   return (
//     <div className="App">
//       <User name="Saskia" age={17} email="saskia@gmail.com"/>
//       <User name="Stella" age={15} email="stella@gmail.com"/>
//       <User name="Syahira" age={10} email="syahira@gmail.com"/>
//     </div>
//   );
// }

// const User = (props) => {
//   return (
//     <div>
//       <h1> {props.name} </h1>
//       <h1> {props.age} </h1>
//       <h1> {props.email}</h1>
//     </div>
//   )
// }

// export default App;