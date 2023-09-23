import { getTableData } from "./utils/helperFunctions";
import { wineData } from "./constants/wine-Data";
import Table from "./components/Table";
import { useTbaleData } from "./custom-hooks/useTableData";

function App() {
  const TableData1 = useTbaleData(wineData, "Alcohol", "Flavanoids");
  const TableData2 = useTbaleData(wineData, "Alcohol", "Gamma");

  const res1 = useTbaleData(wineData, "Alcohol", "Flavanoids");
  console.log(TableData1, TableData2, res1)
  return (
    <div className="App">
      {
         TableData1 ?
          (
          
            <Table data={TableData1} />
          ): null
      }
      {
        TableData2 ?
          (
          
            <Table data={TableData2} />
          ): null
      }
    </div>
  );
}

export default App;
