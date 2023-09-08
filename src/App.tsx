import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/Login";
import InsideSystemPage from "./pages/InsideSystem";
import NotFoundPage from "./pages/NotFound";

import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <InsideSystemPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

