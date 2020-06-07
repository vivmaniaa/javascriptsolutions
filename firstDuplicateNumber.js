// find the first duplicate number in the array
// the value in the array should be between [1-n]
// where n = length of the array

let one = [1,2,1,2,3,3];
let two = [2,1,3,5,3,2];
let three = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199];


function firstDuplicate(a){
  for(let i=0; i<a.length; i++){
    if(a.indexOf(a[i]) != a.lastIndexOf(a[i]) && i != a.indexOf(a[i])){
      return a[i];
    }
  }
  return -1;
}

function firstDuplicate2(a){ // this is fast! specially for big data
  let set = {};
  for(let i=0; i<a.length; i++){
    if(set[a[i]] === true){
      return a[i];
    }else{
      set[a[i]] = true;
    }
  }
  return -1;
}

function firstDuplicate3(a){ // superduper fast
  for(let i=0; i<a.length; i++){
    if(a[Math.abs(a[i])-1] < 0){
      return Math.abs(a[i]);
    }else{
      a[a[i]-1] = -a[a[i]-1];
    }
  }
    return -1;
}
function repeatOneK(){
  for(let i=0; i<1000; i++){
    firstDuplicate3(three);
  } 
}

function finalTime(){
  let startTime;
  let endTime;
  let timeTakenList = [];
  for(let i=0; i<1000; i++){
    startTime = new Date().getTime();
    repeatOneK();
    endTime = new Date().getTime();
    timeTakenList.push(endTime-startTime);
  }
  return timeTakenList.reduce((value, sum)=>{
    return sum +=value;
  },0)/1000;
}



console.log(finalTime());


