import { RouterProvider } from "react-router-dom";
import { router } from "./const/router/router";
import SmoothScroll from "./components/LenisScroll/LenisScroll.tsx";
import ReduxProvider from "./store/ReduxProvider.tsx";

function App() {
  return (
    // TODO: REMOVE DEBUG SCREENS WHEN DEPLOYING
    // <div className="debug-screens">
    <ReduxProvider>
      <SmoothScroll>
        <RouterProvider router={router} />
      </SmoothScroll>
    </ReduxProvider>
    // </div>
  );
}

export default App;
