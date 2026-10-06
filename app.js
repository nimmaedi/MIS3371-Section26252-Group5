const weeklyHourLimit = 40;
const weeklyHoursInput = document.querySelector("#target_weekly_hours");
const overtimeMessage = document.querySelector("#overtime_message");
const shiftSwapForm = document.querySelector("form");

function checkOvertime(totalHours) {
  if (totalHours > weeklyHourLimit) {
    return "Overtime flagged — manager review is required.";
  } else {
    return "No overtime flag is needed.";
  }
}
// Show the overtime result when the hours change
function updateOvertimeMessage() {
  if (weeklyHoursInput.value === "") {
    overtimeMessage.textContent = "";
    return;
  }

  const totalHours = Number(weeklyHoursInput.value);
  overtimeMessage.textContent = checkOvertime(totalHours);
}
// Keep the form on the page when submitted
function handleFormSubmit(event) {
  event.preventDefault();
  updateOvertimeMessage();
}

weeklyHoursInput.addEventListener("input", updateOvertimeMessage);
shiftSwapForm.addEventListener("submit", handleFormSubmit);

// Test below, at, and above the 40-hour limit
console.log("39 hours:", checkOvertime(39));
console.log("40 hours:", checkOvertime(40));
console.log("41 hours:", checkOvertime(41));