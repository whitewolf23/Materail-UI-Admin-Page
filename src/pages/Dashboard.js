import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import PageHeader from "../components/PageHeader";
import { PeopleOutlineTwoTone } from "@material-ui/icons";

import { makeStyles, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles({
  dashboard: {
    paddingLeft: "320px",
    width: "100%",
  },
});

const DashBoard = () => {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.dashboard}>
        <Header />
        <PageHeader
          title="환자 테이블"
          subTitle="과제"
          icon={<PeopleOutlineTwoTone fontSize="large" />}
        />
      </div>

      <CssBaseline />
    </>
  );
};

export default DashBoard;
