import moment from "moment-timezone";

export const formattedWorkingDays = shifts => {
  const shiftEndDates = shifts.map(shift => shift.endDate);
  const workingDays = shiftEndDates
    .map(shift =>
      moment(shift)
        .tz("America/Los_Angeles")
        .format("ddd, MMM D, h:mm A")
    )
    .filter(day => !day.includes("Sun") && !day.includes("Sat"))
    .map(day => day + " PST");
  return workingDays;
};

export const contractDuration = shifts => {
  const contractStartDate = moment(shifts[0].startDate)
    .tz("America/Los_Angeles")
    .format("ddd, MMM D");
  const contractEndDate = moment(shifts[shifts.length - 1].startDate)
    .tz("America/Los_Angeles")
    .format("ddd, MMM D");
  return { contractStartDate, contractEndDate };
};
