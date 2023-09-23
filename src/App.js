import { wineData } from "./constants/wine-Data";
import Table from "./components/Table";
import { useTableData } from "./custom-hooks/useTableData";
import "./app.css";

/**
 * App Component
 *
 * The main application component responsible for rendering tables.
 */
function App() {
  /**
   * Fetch table data for Flavanoids and Gamma properties using the useTableData hook.
   * - FlavanoidsTableData: Data for the Flavanoids table.
   * - GammaTableData: Data for the Gamma table.
   */
  const FlvanoidsTableData = useTableData(wineData, "Alcohol", "Flavanoids");
  const GammaTableData = useTableData(wineData, "Alcohol", "Gamma");

  return (
    <main className="container">
      <section>
        <h1>Flavanoids Data</h1>
      {FlvanoidsTableData ? (
        <Table
        data={FlvanoidsTableData}
        groupedClass="Alcohol"
        groupedProperty={"Flavanoids"}
        />
        ) : null}
      </section>
      <section>
      <h1>Gamma  Data</h1>
      {GammaTableData ? (
        <Table
        data={GammaTableData}
        groupedClass="Alcohol"
        groupedProperty={"Gamma"}
        />
        ) : null}
        </section>
    </main>
  );
}

export default App;
