import React from "react";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: `#ff4040`,
  },
}));

const Nav = ({ cart }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 600;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const total = () => {
    let sum = 0;
    cart?.forEach((alc) => {
      sum += alc.quantity;
    });
    return sum;
  };

  const shoppingCart = () => {
    return (
      <Link to="/cart">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={total()} style={{ textDecoration: "none", color: "black" }} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Link>
    );
  };

  return (
    <nav>
      <div className="nav__container">
        <Link to="/" className="nav__link">
          <img
            src="https://storage.gotoliquorstore.com/account/store/329/logo/e2fbd90c-778b-480b-b387-e711fec54e3b_org.png"
            alt=""
            className="logo"
          />
        </Link>
        {width > breakpoint ? (
          <>
            <div className="search__bar">
              <input
                type="text"
                placeholder="Find Beer, Wine & Spirits"
                className="search"
              />
              <ManageSearchIcon fontSize="small" className="cursor" />
            </div>
            <div className="cart">
                {shoppingCart()}
            </div>
          </>
        ) : (
          <>
            <div className="cart">
              <ManageSearchIcon fontSize="small" className="cursor" />
              {shoppingCart()}
            </div>
          </>
        )}
      </div>
      <div className="bottom__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/beer" className="nav__link">
              BEER
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/wine" className="nav__link">
              WINE
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/spirits" className="nav__link">
              SPIRITS
            </Link>
          </li>
        </ul>
        <div className="store__location">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="address"
            href="https://www.google.com/search?q=asap+liquor&rlz=1C5GCEM_enUS1015US1029&oq=asap+liquor&aqs=chrome.0.0i355i512j46i175i199i512j0i22i30l3j69i64j69i60l2.1746j0j4&sourceid=chrome&ie=UTF-8#"
          >
            <StoreIcon fontSize="small" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="address"
            href="https://www.google.com/search?q=asap+liquor&rlz=1C5GCEM_enUS1015US1029&oq=asap+liquor&aqs=chrome.0.0i355i512j46i175i199i512j0i22i30l3j69i64j69i60l2.1746j0j4&sourceid=chrome&ie=UTF-8#"
          >
            3595 Canton Rd Suite 304, Marietta, GA 30066
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
