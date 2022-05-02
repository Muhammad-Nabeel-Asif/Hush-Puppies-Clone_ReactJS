import React, { Fragment } from "react";
import Header from "./Header";

import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className={classes.container}>{children}</div>
    </Fragment>
  );
};

export default Layout;
