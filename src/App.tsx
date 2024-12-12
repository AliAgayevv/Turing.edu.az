import { RouterProvider } from "react-router-dom";
import { router } from "./const/router/router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
