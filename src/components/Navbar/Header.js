import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import { AiOutlineClose } from "react-icons/ai";
// import { BiMenuAltRight } from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/ri";

import { useAuth } from "../../context/AuthContext";
import Info from "./Info";
import Categories from "./Categories";
import classes from "./Header.module.scss";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [size, setSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // });

  const { currentUser, logout } = useAuth();

  let isUserLogged;
  if (currentUser) {
    isUserLogged = true;
  } else {
    isUserLogged = false;
  }

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("Failed to logout = ", error);
    }
  };

  useEffect(() => {
    let countQty = 0;
    cartItems.map((item) => (countQty += item?.qty));
    setCartCount(countQty);
  }, [cartItems, cartCount]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   if (size.width > 768 && isMenuOpen) {
  //     setIsMenuOpen(false);
  //   }
  // }, [size.width, isMenuOpen]);

  // const menuToggleHandler = () => {
  //   setIsMenuOpen((prevState) => !prevState);
  // };

  // const navbar = document.getElementById("navbarX");
  // console.log("navbar = ", navbar);
  // const sticky = navbar.offsetTop;
  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.pageYOffset >= sticky) {
  //       navbar.classList.add("sticky");
  //     } else {
  //       navbar.classList.remove("sticky");
  //     }
  //   };
  // }, [window.onscroll]);

  return (
    <Fragment>
      {/* <Info /> */}
      <header className={classes.header}>
        <div className={classes.header__content} id="navbarX">
          <Categories />
          <h2 className={classes.header__content__logo}>
            <img
              itemprop="logo"
              src="//cdn.shopify.com/s/files/1/0016/0074/9623/files/new_one_250x.jpg?v=1610621177"
              alt="hushpuppiespk"
            ></img>
          </h2>
          <nav className={classes.header__content__nav}>
            <ul>
              <li>
                <Link to="/help">Help</Link>
              </li>
              <li>
                {isUserLogged ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <button onClick={() => navigate("/login")}>Login</button>
                )}
              </li>
              <li>
                <Link to="/">Search</Link>
              </li>
              <li>
                <Link to="/products">Wishlist(0)</Link>
              </li>
              <li>
                <Link to="/cart">
                  <span className={classes.header__content__nav__bag_icon}>
                    {" "}
                    <RiShoppingBagLine /> {cartCount}{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
