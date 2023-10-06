import React from 'react';
import './App.css';
import { Country, Person,  } from "./components/Person";

function App() {

  const getAge = (name: string) => {
    return "99"
  }

  return (
  <div className="App">
      <Person
        name="Saskia"
        email="saskia@gmail.com"
        age={21}
        isMarried={false}
        friends={["salma", "oliv", "revka", "dita", "dina"]}
        country={Country.France}
      />
    </div>
  );
}

export default App;
