import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import { NotificationsNone } from "@material-ui/icons";

// import {
//   NotificationsNone,
//   ChatBubbleOutline,
//   PowerSettingsNew,
// } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
