import Home from "./components/Home";
import DataProvider from "./contexts/DataProvider";

function App() {
  return (
    <DataProvider>
      <Home/>
    </DataProvider>
  );
}

export default App;
