import React from "react";
import CustomizedButton from "./CustomizedButton";
import CustomizedNativeSelect from "./CustomizedNativeSelect";
import styles from "./FilterJob.module.css";

function FilterJob(props) {
  return (
    <div className={styles.filterJobContainer}>
      <CustomizedNativeSelect
        companyNames={props.companyNames}
        handleCompanyChange={props.handleCompanyChange}
      />
      <CustomizedButton handleButtonChange={props.handleButtonChange} />
    </div>
  );
}

export default FilterJob;
