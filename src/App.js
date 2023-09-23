import { getEvaluatedValues, classWise, groupDataByClassAndProperty } from "./utils/classWise";
import { wineData } from "./constants/wine-Data";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Table />
    </div>
  );
}

export default App;
