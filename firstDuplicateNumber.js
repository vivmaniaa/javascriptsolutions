// the value should be between [1-n]

let one = [1,2,1,2,3,3];
let two = [2,1,3,5,3,2];
let three = [1,2,3,4,5,6];


function firstDuplicate(a){
  for(let i=0; i<a.length; i++){
    if(a.indexOf(a[i]) != a.lastIndexOf(a[i]) && i != a.indexOf(a[i])){
      return a[i];
    }
  }
  return -1;
}

function firstDuplicate2(a){
  let set = [];
  for(let i=0; i<a.length; i++){
    if(!set.includes(a[i])){
      set.push(a[i]);
    }else{
      return a[i];
    }
  }
  return -1;
}
function averageTime(){
  let startTime;
  let endTime;
  let timeTakenList = [];
  for(let i=0; i<10000; i++){
    startTime = new Date().getTime();
    firstDuplicate2(three);
    endTime = new Date().getTime();
    timeTakenList.push(endTime-startTime);
  }
  return timeTakenList.reduce((value, sum)=>{
    return sum +=value;
  },0)/1000;
}

console.log(averageTime());


