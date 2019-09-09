import React, { useContext } from "react";
import jobContext from "../../../context/job-context";
import "./job-title.css";

const JobTitle = () => {
  const { title } = useContext(jobContext);
  return <div className="job-title">{title}</div>;
};

export default JobTitle;
