
shitfTimings = {startHour: '09:00', endHour: '17:00'};
let addMinutes = 530;
let startHourInMinutes = 9*60;
let endHourInMinutes = 17*60;
let shiftHours = endHourInMinutes - startHourInMinutes;
let selectedDate = new Date(2020,4,21,16,30);

let currentMinutes = 16*60+30;
let balanceMinutes = endHourInMinutes - currentMinutes;
addMinutes -= balanceMinutes;
selectedDate.setMinutes(selectedDate.getMinutes() + balanceMinutes);
let workWeek = [1,2,3,4,5];
let dayExtention = Math.floor(addMinutes/shiftHours);
let totalExtraMinutes = Math.floor(addMinutes/shiftHours%1*shiftHours);
if(totalExtraMinutes>0){
  totalExtraMinutes += 1440-shiftHours;
}
selectedDate.setMinutes(selectedDate.getMinutes() + totalExtraMinutes);
for(let i = 0; i<dayExtention; i++){
  console.log(selectedDate.getDay());
  while(!workWeek.includes(selectedDate.getDay())){
    selectedDate.setMinutes(selectedDate.getMinutes() + 1440);
  }
  selectedDate.setMinutes(selectedDate.getMinutes() + 1440);
}
while(!workWeek.includes(selectedDate.getDay())){
  selectedDate.setMinutes(selectedDate.getMinutes() + 1440);
}
console.log(selectedDate.toString());





