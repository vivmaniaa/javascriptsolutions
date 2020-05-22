function timeInMinutes(date){
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return hours*60+minutes;
}

function getTimeStringInMinutes(timeString){
  let hours = Number(timeString.split(':')[0]);
  let minutes = Number(timeString.split(':')[1]);
  return hours*60+minutes;
}
function getShiftHoursInMinuts(startHour,endHour){
  return getTimeStringInMinutes(endHour)-getTimeStringInMinutes(startHour);
}


let shiftTimings = {startHour: '09:00', endHour: '17:00'};
let selectedDate = new Date(2020, 4, 22, 16,30);
let workWeekDays = [ 1, 2, 3, 4, 5 ];


function getOffDaysExtention(processingDate, daysExtention){
	let offDaysExtention = 0;
  let loopDate = new Date(processingDate);
  for(let i = 0; i < daysExtention; i++){
    loopDate.setMinutes(loopDate.getMinutes() + 1440);
    if(!workWeekDays.includes(loopDate.getDay())){
      offDaysExtention += 1;
    }
  }
  if(offDaysExtention){
    offDaysExtention += getOffDaysExtention(loopDate, offDaysExtention)
  }
  return offDaysExtention;
}

function getEndDate(selectedDate){
	let addMinutes = 989;
  let currentDateMinutes = timeInMinutes(selectedDate);// currentDateMinutes must not be greater than the  endHourMinutes;
  let endHourMinutes = getTimeStringInMinutes(shiftTimings.endHour);
  let remainingMinutes = endHourMinutes - currentDateMinutes;
  addMinutes = addMinutes - remainingMinutes;
  let processingDate = new Date(selectedDate);
  processingDate.setMinutes(processingDate.getMinutes() + remainingMinutes);
	let shiftHoursInMinutes = getShiftHoursInMinuts(shiftTimings.startHour, shiftTimings.endHour);
  let daysExtention = Math.max(0, Math.floor(addMinutes/shiftHoursInMinutes));
  let remainder = addMinutes/shiftHoursInMinutes%1;
  daysExtention += remainder > 0 && daysExtention == 0 ? 1 : 0;   
  let minutesExtention = remainder*shiftHoursInMinutes;
  let totalDaysExtention = daysExtention + getOffDaysExtention(processingDate, daysExtention);    
  let leftMarginTime = getTimeStringInMinutes(shiftTimings.startHour);
  let rightMarginTime = 1440 - getTimeStringInMinutes(shiftTimings.endHour);
  let extentionMinutes = remainder > 0 ? leftMarginTime + rightMarginTime + minutesExtention : minutesExtention;
  let endDate = new Date(processingDate);
  let newEndDate =  new Date(endDate.setMinutes(endDate.getMinutes() + (1440 * totalDaysExtention) + extentionMinutes));
  return newEndDate;
}

console.log(getEndDate(selectedDate).toString());

