import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/artreact/beans">Beans</Link>
      <Link to="/artreact/facts">Facts</Link>
      <Link to="/artreact/recipes">Recipes</Link>
      <Link to="/artreact/combinations">Combinations</Link>
      <Link to="/artreact/history">History</Link>
      <Link to="/artreact/review">Review</Link>
      <Link to="/artreact/about">About</Link>
    </nav>
  );
};
