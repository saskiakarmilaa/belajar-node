// //percobaan ketiga

import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) => {
      setGeneratedExcuse(res.data[0].excuse);
    }
  );
};


  return (
    <div className="App">
      <h1> Generate An Excuse </h1>
      <button onClick={() => fetchExcuse("party")}> Party </button>
      <button onClick={() => fetchExcuse("family")}> Family </button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <p></p>
    </div>
  );
}





// // percobaan kedua

// import './App.css';
// import Axios from 'axios';
// import { useState } from 'react';

// function App() {
//   const [name, setName] = useState("");
//   const [PredictedAge, setPredictedAge] = useState(null);
//   const fetchData = () => {
//     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//       console.log(res.data.age);
//     });
//   };

//   return (
//     <div className="App">
//       <input 
//       placeholder="Ex. Saskia..." onChange={(event) => {
//         setName(event.target.value);
//         }}
//       />
//       <button onClick={fetchData}> Predict Age </button>

//       <h1> Name: {PredictedAge?.name}</h1>
//       <h1> Predicted Age: {PredictedAge?.age}</h1>
//       <h1> Count: {PredictedAge?.count}</h1>
//     </div>
//   )
// }

// export default App;










// Percobaan pertama

// import './App.css';
// import Axios from 'axios';
// import { useState } from 'react';

// function App() {
//   const [catfact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//     setCatFact(res.data.fact);
//     });    
//   }
//   useEffect(() => {
//     fetchCatFact();
//   }, []);
  
//   return (
//     <div className="App">
//       <button onClick={fetchCatFact}>Generate Cat Fact</button>
//       <p>{catfact}</p>
//     </div>
//   );
// }

// export default App;
