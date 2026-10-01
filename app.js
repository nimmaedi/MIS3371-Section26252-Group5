const weeklyHourLimit = 40;

function checkOvertime(totalHours) {
  if (totalHours > weeklyHourLimit) {
    return "Overtime flagged — manager review is required.";
  } else {
    return "No overtime flag is needed.";
  }
}

// Test below, at, and above the 40-hour limit
console.log("39 hours:", checkOvertime(39));
console.log("40 hours:", checkOvertime(40));
console.log("41 hours:", checkOvertime(41));