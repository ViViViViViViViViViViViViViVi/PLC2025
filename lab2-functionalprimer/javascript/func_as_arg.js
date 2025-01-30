function arrFunc(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}

function applicatorFunc(inpFunc, a, b, s) {
    const arr = inpFunc(a, b); 
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if (s === 's') {
        return sum; 
    } else if (s === 'a') {
        return sum / arr.length; 
    } else {
        return "Invalid option! Use 's' for sum or 'a' for average.";
    }
}

const a = parseInt(prompt("Enter the starting number (a):"));
const b = parseInt(prompt("Enter the ending number (b):"));
const s = prompt("Enter 's' for sum or 'a' for average:");

let result = applicatorFunc(arrFunc, a, b, s);
console.log("Result =", result);
