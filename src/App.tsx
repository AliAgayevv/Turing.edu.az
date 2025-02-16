import { RouterProvider } from "react-router-dom";
import { router } from "./const/router/router";
import SmoothScroll from "./components/LenisScroll/LenisScroll.tsx";

function App() {
  return (
    // TODO: REMOVE DEBUG SCREENS WHEN DEPLOYING
    <div className="debug-screens">
      <SmoothScroll>
        <RouterProvider router={router} />
      </SmoothScroll>
    </div>
  );
}

export default App;
