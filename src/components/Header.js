import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/women">Women</Link>
            <Link to="/men">Men</Link>
            <Link to="/denim">Denim</Link>
            <Link to="/shop">Gift Shop</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="logo">
          <h1>Eshopland</h1>
        </div>

        <div className="right">
          <div className="search">
            <SearchOutlinedIcon className="search-icon" />
            <button>Search</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
