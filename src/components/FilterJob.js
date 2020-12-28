import React from "react";
import CustomizedButton from "./CustomizedButton";
import CustomizedNativeSelect from "./CustomizedNativeSelect";
import "../styles/filterjob.style.css";

function FilterJob(props) {
  return (
    <div className='filter-job-container'>
      <CustomizedNativeSelect
        companyNames={props.companyNames}
        onChange={props.onChange}
      />
      <CustomizedButton handleButtonChange={props.handleButtonChange} />
    </div>
  );
}

export default FilterJob;
