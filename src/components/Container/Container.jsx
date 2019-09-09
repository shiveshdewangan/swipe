import React from "react";
import JobDescription from "../job-description/job-description";
import Agreement from "../agreement/agreement";
import Shifts from "../shifts/shifts";
import Location from "../location/location";
import JobAcceptance from "../job-acceptance/job-acceptance";

const Container = () => {
  return (
    <>
      <div className="container">
        <JobDescription />
        <Agreement />
        <Shifts />
        <Location />
        <JobAcceptance />
      </div>
    </>
  );
};

export default Container;
