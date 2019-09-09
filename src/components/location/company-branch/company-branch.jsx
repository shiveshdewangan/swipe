import React, { useContext } from "react";
import jobContext from "../../../context/job-context";
import "./company-branch.css";

const CompanyBranch = () => {
  const { branch, branchPhoneNumber } = useContext(jobContext);
  return (
    <>
      <p className="company-branch">
        Branch: <br /> {branch} <br />{" "}
        <span className="contact-number">({branchPhoneNumber}) 922-4240</span>
      </p>
      <div className="horizontal-line">
        <hr />
      </div>
    </>
  );
};

export default CompanyBranch;
