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

let targetDate = new Date(2020, 4, 24, 16, 30);
/* console.log(targetDate.toString()); */
let shiftTimings = {startHour: '09:00', endHour: '17:00'};

let addMinutes = 990;
let selectedDate = new Date(2020, 4, 22, 16,30);

let workWeekDays = [ 2, 3, 4, 5 ];
let shiftHoursInMinutes = getShiftHoursInMinuts(shiftTimings.startHour, shiftTimings.endHour);
let offDays = 0;
let endHourMinutes = getTimeStringInMinutes(shiftTimings.endHour);
let currentDateMinutes = timeInMinutes(selectedDate);// currentDateMinutes must not be greater than the  endHourMinutes;
let remainingMinuts = endHourMinutes - currentDateMinutes;
let daysExtention = addMinutes/shiftHoursInMinutes;

function getOffDaysExtention(selectedDate, daysExtention, offDaysExtention = 0){
  let loopDate = new Date(selectedDate);
  for(let i = 0; i < Math.floor(daysExtention); i++){
    loopDate.setMinutes(loopDate.getMinutes() + 1440);
    if(!workWeekDays.includes(loopDate.getDay())){
      offDaysExtention = offDaysExtention+1;
    }
  }
  if(offDaysExtention){
    offDaysExtention += getOffDaysExtention(loopDate, offDaysExtention)
  }
  return offDaysExtention;
}

let totalExtraDays = getOffDaysExtention(selectedDate, daysExtention);

console.log(totalExtraDays);
