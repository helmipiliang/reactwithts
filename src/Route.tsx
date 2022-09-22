import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import { LoginForm } from "./Login/Login";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "Login",
        element: <LoginForm />,
      },
    ],
  },
]);
