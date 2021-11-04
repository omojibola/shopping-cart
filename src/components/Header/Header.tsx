import { Link } from "react-router-dom";
import { useSelector } from "../../Hooks/useTypedSelector";

const Header = () => {
  const items = useSelector((state) => state.cart.cart);

  return (
    <nav className="header-wrapper">
      <div className="logo">
        <Link to="/">
          <h3>Logo</h3>
        </Link>
      </div>

      <div className="search">
        <input type="search" placeholder="search" />
        <input type="text" placeholder="Filter by category" />
      </div>

      <div className="end">
        <Link to="/cart">Cart({items.length})</Link>
      </div>
    </nav>
  );
};

export default Header;
