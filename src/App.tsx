import { RouterProvider } from "react-router-dom";
import { router } from "./const/router/router";
import CursorEffect from "./utils/CursorEffect";

function App() {
  return (
    // TODO: REMOVE DEBUG SCREENS WHEN DEPLOYING
    <div className="debug-screens">
      <CursorEffect />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
