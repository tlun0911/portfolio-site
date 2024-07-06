import React, { useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/Main";
import Main2 from "./components/Main2";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Main2 />} />)
  );

  return <RouterProvider router={router} />;
}
export default App;
