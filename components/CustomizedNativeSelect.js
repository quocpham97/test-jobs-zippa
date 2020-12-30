import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    // Responsive
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(1),
      with: 200
    },
    [theme.breakpoints.only("sm")]: {
      margin: theme.spacing(2),
      with: 300
    },
    [theme.breakpoints.only("md")]: {
      margin: theme.spacing(3),
      width: 350
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function CustomizedNativeSelect(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    // Update Job's companyName when selection changes
    props.handleCompanyChange(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Company Name</InputLabel>
        <Select
          native
          onChange={handleChange}
          label="Company Name"
          inputProps={{
            name: "companyName",
            id: "outlined-age-native-simple"
          }}
        >
          <option aria-label="None" value="first10jobs">
            First 10 jobs
          </option>
          {props.companyNames.map((companyName) => (
            <option value={companyName} key={companyName}>
              {companyName}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
