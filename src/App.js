import { useRoutes } from "react-router-dom";
import getRoutes from "./routes";

function App() {
  const routes = useRoutes(getRoutes());
  return <div>{routes}</div>;
}

export default App;
