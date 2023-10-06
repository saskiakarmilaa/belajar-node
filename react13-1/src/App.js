import './App.css';
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Saskia"
        email="saskia@gmail.com"
        age={21}
        isMarried={false}
        friends={["salma", "oliv", "revka", "dita", "dina"]}
      />
    </div>
  );
}

export default App;
