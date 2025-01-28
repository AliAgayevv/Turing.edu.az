import { RouterProvider } from "react-router-dom";
import { router } from "./const/router/router";

// TODO: IPHONE DA FALAN VIDEOLAR RESKI ACILMASIN DEYE PLAY INLINE ELAVE ET VIDEOLARA TAG KIMI

function App() {
  return (
    // TODO: REMOVE DEBUG SCREENS WHEN DEPLOYING
    <div className="debug-screens">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
