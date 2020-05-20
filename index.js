var fs  = require('fs');

var output = fs.readFileSync('data.txt', 'utf-8')
.split('\n')
.map(line=>line.split('\t'))
.reduce((newAr, b)=>{
newAr[b[0]] = newAr[b[0]] || [];
newAr[b[0]].push({
    name: b[1],
    price: b[2],
    quantity: b[3]
  })
return newAr;
}, {});


console.log(output);
console.log('working fine!');

