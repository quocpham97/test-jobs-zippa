import React, { useState } from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(2),
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(1)
    }
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

export default function CustomizedButton(props) {
  const classes = useStyles();
  const [state, setstate] = useState(false);

  const handleClick = () => {
    // Update Job's isSevenLastDays flag when the button is clicked
    props.handleButtonChange(!state);
    setstate(!state);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color={state ? "secondary" : "primary"}
          className={classes.margin}
          onClick={handleClick}
        >
          Last 7 days
        </Button>
      </ThemeProvider>
    </div>
  );
}
