import "./App.css";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";

function App() {
  return (<div className="App">
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={false} />
  </div>);
}

export default App;
