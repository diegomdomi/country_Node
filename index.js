const fs = require('fs');
  
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./country.txt',
            {encoding:'utf8', flag:'r'});
 
// Display the file data
const allCountry = data.split(/[\r\n]+/);
const regex = /[0-9]/
let countryList = []

for(i = 0 ; i < allCountry.length; i++) {
    let eachCountry = allCountry[i]?.split(" ");
    let area = 0
    let population = 0

    if(eachCountry[eachCountry.length - 2]?.match(regex) && eachCountry[eachCountry.length - 2] !== undefined ){
        population = parseFloat(eachCountry[eachCountry.length - 2].replace(/,/g, ''))
    }
    if(eachCountry[eachCountry.length - 1]?.match(regex) && eachCountry[eachCountry.length - 1] !== undefined ){
        area = parseFloat(eachCountry[eachCountry.length - 1].replace(/,/g, ''))
    }
    const density = Math.round(population/area)

    const obj = {country:eachCountry[0],area,population, density}
    countryList.push(obj);
}

countryList.sort((a, b) => b.density - a.density);
// console.log(countryList);

const csvString = [
    [
        "country",
        "area",
        "population",
        "density"
    ],
    ...countryList.map(item => [
        item.country,
        item.area,
        item.population,+
        item.density
    ])
]
.map(e => e.join(",")) 
.join("\n");
console.log(csvString);
