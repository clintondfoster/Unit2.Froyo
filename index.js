//  //prompt window
//  let order = prompt("Please enter which froyo flavors you would like to order.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// //view console, list flavors
// console.log("You ordered:", order);

// //parse into an array, then build an object to track and count flavors
// let flavors = {};

// let processedOrder = order.split(',');
// for (let i = 0; i < processedOrder.length; i++) {
//     let flavor = processedOrder[i];
//     if (flavors[flavor]) {
//         flavors[flavor]++; 
//     } else {
//         flavors[flavor] = 1;
//     }
// }

// //as you (use a loop) iterate through the array of flavors, update object
// console.log(flavors)

//********************************************************************************* */

//get elements from html
const order = document.getElementById('flavors');
const submitBtn = document.getElementById('submitBtn');
const flavorTable = document.querySelector('#flavorTable tbody');

//submit button event listener
submitBtn.addEventListener('click', function() {
    const orderText = order.value;
    const flavorsArray = orderText.split(",");

//create an object to track flavors
let flavorCounts = {};

for (let i = 0; i < flavorsArray.length; i++) {
    let flavor = flavorsArray[i].trim();
    if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] = 1;
    }
   

//flavor table
flavorTable.innerHTML = '';

for (const flavor in flavorCounts) {
    const row = document.createElement('tr');
    const flavorCell = document.createElement('td');
    const countCell = document.createElement('td');

    flavorCell.textContent = flavor;
    countCell.textContent = flavorCounts[flavor];

    row.appendChild(flavorCell);
    row.appendChild(countCell);
    flavorTable.appendChild(row);
        }
    }
})