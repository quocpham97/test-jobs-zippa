import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function CustomizedNativeSelect(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    companyName: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Company Name</InputLabel>
        <Select
          native
          value={state.companyName}
          onChange={handleChange}
          label="Company Name"
          inputProps={{
            name: "companyName",
            id: "outlined-age-native-simple"
          }}
        >
          <option aria-label="None" value="" />
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
