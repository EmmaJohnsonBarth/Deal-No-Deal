let valuesArr = [0.01, 1, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 750, 1000, 5000, 10000, 25000, 50000, 75000, 100000, 200000, 300000, 400000, 500000, 750000, 1000000];

let casesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

let keysObj = {};

function randomizeCases() {
    for (let i = 0; i < casesArr.length; i++) {
        let valueIndex = Math.floor(Math.random() * valuesArr.length)
        keysObj[casesArr[i]] = valuesArr[valueIndex];
        valuesArr.splice(valueIndex, 1);
    };
};

randomizeCases();


let answer = parseInt(prompt('Which case do you choose to start? Range: 1 - 26'));
let hiddenValue = keysObj[answer];
console.log(`hiddenValue: ${hiddenValue}`)

const updatedKeysObj = keysObj;

delete updatedKeysObj[answer];
console.log(`Initial Cases: ${JSON.stringify(updatedKeysObj)}`);

const h1 = document.getElementById("h1")
const start = document.getElementById("start");
const caseContainer = document.getElementById('caseContainer')
let selectedCase = null;


start.addEventListener('click', secretCase)

function secretCase(event) {
    h1.innerHTML = "Choose your secret case";
    let clickedCase = event.target;
    if (clickedCase.classList.contains('case')){
        selectedCase = clickedCase.textContent;
        console.log("Selected Case: ", selectedCase);
    }
};

caseContainer.addEventListener('click', secretCase)

function roundOne() {
    let firstChoice = parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))
    while(!firstChoice){parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))};
    let firstChoiceResult = alert(`Case Number ${firstChoice}: ${updatedKeysObj[firstChoice]}`)
    delete updatedKeysObj[firstChoice]
    // console.log(`Cases remaining: ${JSON.stringify(updatedKeysObj)}`)

    let secondChoice = parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))
    while(!secondChoice){parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))};
    let secondChoiceResult = alert(`Case Number ${secondChoice}: ${updatedKeysObj[secondChoice]}`)
    delete updatedKeysObj[secondChoice]
    // console.log(`Cases remaining: ${JSON.stringify(updatedKeysObj)}`)

    let thirdChoice = parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))
    while(!thirdChoice){parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))};
    let thirdChoiceResult = alert(`Case Number ${thirdChoice}: ${updatedKeysObj[thirdChoice]}`)
    delete updatedKeysObj[thirdChoice]
    // console.log(`Cases remaining: ${JSON.stringify(updatedKeysObj)}`)

    let fourthChoice = parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))
    while(!fourthChoice){parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))};
    let fourtChoiceResult = alert(`Case Number ${fourthChoice}: ${updatedKeysObj[fourthChoice]}`)
    delete updatedKeysObj[fourthChoice]
    // console.log(`Cases remaining: ${JSON.stringify(updatedKeysObj)}`)

    let fifthChoice = parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))
    while(!fifthChoice){parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))};
    let fifthChoiceResult = alert(`Case Number ${fifthChoice}: ${updatedKeysObj[fifthChoice]}`)
    delete updatedKeysObj[fifthChoice]
    // console.log(`Cases remaining: ${JSON.stringify(updatedKeysObj)}`)

    let sixthChoice = parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`));
    while(!sixthChoice){parseInt(prompt(`Select a case to open. Options remaining: ${Object.keys(updatedKeysObj)}`))};
    let sixthChoiceResult = alert(`Case Number ${sixthChoice}: ${updatedKeysObj[sixthChoice]}`);
    delete updatedKeysObj[sixthChoice]
    // console.log(`Cases remaining: ${JSON.stringify(updatedKeysObj)}`)
};





// 12,275.30 + (0.748 * E) - (2714.74 * C) - (0.40 * M) + (.0000006986 * E^2) + (32.623 * C^2)
//E = Mean of all remaining values (including player-chosen case)
//C = number of cases remaining
//M = Largest value on the board

let values = Object.values(updatedKeysObj);

function meanValuesRemaining(array) {
    let length = array.length + 1;
    let sum = array.reduce((acc, curr) => acc + curr) + hiddenValue;
    let mean = sum / length;
    return mean;
};

function casesRemaining(array) {
    return (array.length + 1);
};

function largestOnBoard(array) {
    // console.log(`Array before adding hidden value: ${array}`)
    array.push(hiddenValue);
    // console.log(`Array after adding hidden value: ${array}`)
    let maxValue = Math.max(...array);
    // console.log(`Math.max: ${maxValue}`)
    return maxValue;
}

function bankerOffer(array) {
    console.log(`Possible Values: ${array}`)
    let E = meanValuesRemaining(array);
    console.log(`Mean of Values Remaining: ${E}`)
    let C = casesRemaining(array);
    console.log(`Cases Remaining: ${C}`);
    let M = largestOnBoard(array);
    console.log(`Largest Value remaining: ${M}`)
    let offerUnrounded = 12275.30 + (0.748 * E) + (-2714.74 * C) + (-0.04 * M) + (.0000006986 * E * E) + (32.623 * C * C);
    let offer = Math.floor(offerUnrounded/1000)*1000
    //Math.round(value/1000)*1000
    console.log(`Offer: ${offer}`)
    
    return offer;
}

bankerOffer(values);


