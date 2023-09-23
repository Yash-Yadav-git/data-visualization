import {
  getEvaluatedValues,
  classWise,
  groupDataByClassAndProperty,
  addGama,
  getRequestedValue,
} from "./utils/helperFunctions";
import { wineData } from "./constants/wine-Data";
import Table from "./components/Table";

function App() {
  const TableData1 = getRequestedValue(wineData, "Alcohol", "Flavanoids");
  const TableData2 = getRequestedValue(wineData, "Alcohol", "Gamma");
  return (
    <div className="App">
      <Table data={TableData1} />
      <Table data={TableData2} />
    </div>
  );
}

export default App;
