import React from "react";
import CustomizedButton from "./CustomizedButton";
import CustomizedNativeSelect from "./CustomizedNativeSelect";

function FilterJob(props) {
  console.log(props.companyNames);
  return (
    <div>
      <CustomizedNativeSelect companyNames={props.companyNames} />
      <CustomizedButton />
    </div>
  );
}

export default FilterJob;
