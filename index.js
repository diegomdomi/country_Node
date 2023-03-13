const fs = require('fs');
  
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./country.txt',
            {encoding:'utf8', flag:'r'});
 
// Display the file data
const allCountry = data.split(/[\r\n]+/);

for(i = 0 ; i <= allCountry.length; i++) {
    let eachCountry = allCountry[i].split(" ");
    const area = parseFloat(eachCountry[eachCountry.length - 1].replace(/,/g, ''));
    const population = parseFloat(eachCountry[eachCountry.length - 2].replace(/,/g, ''));
    const density = Math.round(population/area) 
    console.log(eachCountry[0], density);
  
}
