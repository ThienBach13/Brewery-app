import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './page/Home';
import BreweryInformationPage from './page/BreweryInformationPage';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/breweries/:id", element: <BreweryInformationPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App