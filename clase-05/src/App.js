import Caja from "./components/Box";
import Contador from "./components/Contador";

function App() {
  return (
    <div className="App">
      <Caja saludo="hola mundo">
        <Contador></Contador>
      </Caja>
    </div>
  );
}

export default App;