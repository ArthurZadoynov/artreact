import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { FactsPage } from "./pages/Facts/Facts";
import { BeansPage } from "./pages/Beans";
import { RecipesPage } from "./pages/Recipes";
import { CombinationsPage } from "./pages/Combinations";
import { Home } from "./pages/Home";
import { HistoryPage } from "./pages/History";
import { NotFound } from "./pages/NotFound";
import { Loader } from "./components/Loader";
import { Review } from "./pages/Review";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/module18react",
    element: <Layout />,
    loader: Loader,
    children: [
      { index: true, element: <Home /> },
      {
        path: "beans",
        element: <BeansPage />,
      },
      {
        path: "facts",
        element: <FactsPage />,
      },
      { path: "review", element: <Review /> },
      { path: "about", element: <About /> },

      { path: "recipes", element: <RecipesPage /> },
      { path: "history", element: <HistoryPage /> },
      {
        path: "combinations",
        element: <CombinationsPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
