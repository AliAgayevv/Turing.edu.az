import { RouterProvider } from "react-router-dom";
import { router } from "./const/router/router";
import CursorEffect from "./utils/CursorEffect";

function App() {
  return (
    <div className="">
      <CursorEffect />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
