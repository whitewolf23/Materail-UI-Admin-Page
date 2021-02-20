import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    color: "#fff",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#243053",
  },
});

const SideMenu = () => {
  const classes = useStyle();
  return <div className={classes.sideMenu}></div>;
};

export default SideMenu;
