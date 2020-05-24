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
function checkOffDay(date){
  let y = date.getFullYear();
  let d = date.getDate();
  let m = date.getMonth();
  let onlyDate = new Date(y, m, d);
  return !workWeek.includes(date.getDay()) || holidays.includes(onlyDate.getTime());
  
}
let holidays = [
  new Date(2020,4,22).getTime(),
]
shitfTimings = {startHour: '09:00', endHour: '17:00'};
let selectedDate = new Date(2020,4,25,9,20);
let currentMinutes = timeInMinutes(selectedDate);
let addMinutes = 21;
let startHourInMinutes = getTimeStringInMinutes(shitfTimings.startHour);
let endHourInMinutes = getTimeStringInMinutes(shitfTimings.endHour);
let shiftHours = endHourInMinutes - startHourInMinutes;
let balanceMinutes = currentMinutes - startHourInMinutes;
addMinutes -= balanceMinutes;
selectedDate.setMinutes(selectedDate.getMinutes() - balanceMinutes);
let workWeek = [1,2,3,4,5];
let dayShort = Math.floor(addMinutes/shiftHours);
let totalExtraMinutes = Math.floor(addMinutes/shiftHours%1*shiftHours);
if(totalExtraMinutes>0){
  totalExtraMinutes += 1440-shiftHours;
}
selectedDate.setMinutes(selectedDate.getMinutes() - totalExtraMinutes);
for(let i = 0; i<dayShort; i++){
  while(checkOffDay(selectedDate)){
    selectedDate.setMinutes(selectedDate.getMinutes() - 1440);
  }
  selectedDate.setMinutes(selectedDate.getMinutes() - 1440);
}
while(checkOffDay(selectedDate)){
  selectedDate.setMinutes(selectedDate.getMinutes() - 1440);
}
console.log(selectedDate.toString());





