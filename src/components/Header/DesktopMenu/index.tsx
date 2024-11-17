import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/18moduleReact/beans">Beans</Link>
      <Link to="/18moduleReact/facts">Facts</Link>
      <Link to="/18moduleReact/recipes">Recipes</Link>
      <Link to="/18moduleReact/combinations">Combinations</Link>
      <Link to="/18moduleReact/history">History</Link>
      <Link to="/18moduleReact/review">Review</Link>
      <Link to="/18moduleReact/about">About</Link>
    </nav>
  );
};
