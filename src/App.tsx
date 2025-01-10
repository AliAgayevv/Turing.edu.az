import { RouterProvider } from "react-router-dom";
import { router } from "./const/router/router";

function App() {
  return (
    // TODO: REMOVE DEBUG SCREENS WHEN DEPLOYING
    <div className="debug-screens">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
