import "./App.css";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat/>
      </QueryClientProvider>
    </div>
  );
}





















// import './App.css';
// import { useToggle } from './useToggle';

// function App() {
//   const {state: isVisible, toggle} = useToggle();

//   return (
//     <div className="App">
//       <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
//       {isVisible && <h1> Hidden text </h1>}
//     </div>
//   );
// }

// export default App;