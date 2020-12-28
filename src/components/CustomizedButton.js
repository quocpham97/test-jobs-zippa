import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[100]
    },
    secondary: {
      main: green[900]
    }
  }
});

export default function CustomizedButton() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Theme Provider
        </Button>
      </ThemeProvider>
    </div>
  );
}
