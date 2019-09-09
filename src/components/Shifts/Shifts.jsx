import React, { useContext } from "react";
import jobContext from "../../context/job-context";
import { formattedWorkingDays } from "../../utilities/formateDate";
import "./shifts.css";

const Shifts = () => {
  const { shifts } = useContext(jobContext);
  const formattedWorkingDaysInPST = formattedWorkingDays(shifts);
  return (
    <>
      <ul className="shifts">
        {formattedWorkingDaysInPST.map((shift, index) => {
          if (index < 5) return <li key={index}>{shift}</li>;
        })}
      </ul>
      <div className="horizontal-line">
        <hr />
      </div>
    </>
  );
};

export default Shifts;
