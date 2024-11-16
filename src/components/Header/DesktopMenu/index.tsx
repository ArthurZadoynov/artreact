import { Link } from "react-router-dom";

export const DesktopMenu = () => {
  return (
    <nav>
      <Link to="/module18react/beans">Beans</Link>
      <Link to="/module18react/facts">Facts</Link>
      <Link to="/module18react/recipes">Recipes</Link>
      <Link to="/module18react/combinations">Combinations</Link>
      <Link to="/module18react/history">History</Link>
      <Link to="/module18react/review">Review</Link>
      <Link to="/module18react/about">About</Link>
    </nav>
  );
};
