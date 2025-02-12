import { RouterProvider } from "react-router-dom";
import { router } from "./const/router/router";
import SmoothScroll from "./components/LenisScroll/LenisScroll.jsx";

// TODO: IPHONE DA FALAN VIDEOLAR RESKI ACILMASIN DEYE PLAY INLINE ELAVE ET VIDEOLARA TAG KIMI

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
