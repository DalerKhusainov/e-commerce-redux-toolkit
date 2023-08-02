// REACT ROUTER HOOKS
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// COMPONENTS PAGES
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Account from "./pages/Account";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

// LAYOUT
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

// CREATING ROUTES
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/account", element: <Account /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
