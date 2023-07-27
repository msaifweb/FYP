import { useRoutes } from "react-router-dom";
import getRoutes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  const routes = useRoutes(getRoutes());
  return (
    <div>
      <Toaster />
      {routes}
    </div>
  );
}

export default App;
