// JavaScript - Day -4: Functions (22/03/2024)

// Print odd numbers in an array using anonymous function

function printOddNumbers(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printOddNumbers(numbers);

// Print odd numbers in an array using IIFE function

(function(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            console.log(array[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Convert all the strings to title caps in a string array using anonymous function

const stringArray = ["apple", "banana", "orange", "grape"];

const titleCaseArray = stringArray.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log(titleCaseArray);

// Convert all the strings to title caps in a string array using IIFE function

const stringArray1 = ["cake", "banana", "orange", "grape"];

const titleCaseArray1 = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(stringArray1);

console.log(titleCaseArray1);


//Sum of all numbers in an array using anonymous function


const numbers1 = [1, 2, 3, 4, 5];

const sum = function(arr) {
    let total = 0;
    arr.forEach(function(num) {
        total += num;
    });
    return total;
};

console.log(sum(numbers1));


//Sum of all numbers in an array using IIFE function

const numbers2 = [1, 2, 3, 4, 5];

const sum2 = (function(arr) {
    let total = 0;
    arr.forEach(function(num2) {
        total += num2;
    });
    return total;
})(numbers2);

console.log(sum2);

// Return all the prime numbers in an array using anonymous function


const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = function(arr) {
    return arr.filter(function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

console.log(primeNumbers(numbers3));


// Return all the prime numbers in an array using IIFE function

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers4 = (function(arr1) {
    return arr1.filter(function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(numbers);

console.log(primeNumbers4);


// Return all the palindromes in an array using anonymous function


const words = ["level", "hello", "radar", "wow", "deified"];

const palindromes = function(arr) {
    return arr.filter(function(word) {
        return word === word.split('').reverse().join('');
    });
};

console.log(palindromes(words));


// Return all the palindromes in an array using IIFE function

const phrases = ["level", "hello", "radar", "world", "deified"];

const findPalindromes = (function(arr) {
    return arr.filter(function(phrase) {
        return phrase === phrase.split('').reverse().join('');
    });
})(phrases);

console.log(findPalindromes);

// Return median of two sorted arrays of the same size using anonymous function


const findMedian = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const mid = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(findMedian(arr1, arr2));


// Return median of two sorted arrays of the same size using IIFE function

const firstArray = [1, 3, 5];
const secondArray = [2, 4, 6];

const findMedian1 = (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const middleIndex = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
        return mergedArray[middleIndex];
    }
})(firstArray, secondArray);

console.log(findMedian1);

// Remove duplicates from an array using anonymous function

const removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};

const array99 = [1, 2, 3, 3, 4, 5, 5, 6];

console.log(removeDuplicates(array99));

// Remove duplicates from an array using IIFE function

const originalArray = [1, 2, 3, 3, 4, 5, 5, 6];

const uniqueValues = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})(originalArray);

console.log(uniqueValues);

// Rotate an array by k times 


const rotateArray = function(arr, k) {
    const rotateTimes = k % arr.length;
    return arr.slice(rotateTimes).concat(arr.slice(0, rotateTimes));
};

const array = [1, 2, 3, 4, 5];
const k = 2;

console.log(rotateArray(array, k));


// Rotate an array by k times using IIFE Function

const originalArray2 = [1, 2, 3, 4, 5];
const rotationCount = 2;

const rotatedArray2 = (function(arr, k) {
    const rotateTimes = k % arr.length;
    return arr.slice(rotateTimes).concat(arr.slice(0, rotateTimes));
})(originalArray, rotationCount);

console.log(rotatedArray2);

// Print odd numbers in an array using Arrow Function

const numbers7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers88 = numbers => {
    numbers.forEach(number => {
        if (number % 2 !== 0) {
            console.log(number);
        }
    });
};

printOddNumbers88(numbers7);

// Convert all the strings to title caps in a string array using Arrow Function

const stringArray7 = ["apple", "banana", "orange", "grape"];

const titleCaseArray7 = stringArray.map(string => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});

console.log(titleCaseArray7);

// Sum of all numbers in an array using Arrow Function

const numbers77 = [1, 2, 3, 4, 5];

const sum77 = numbers77.reduce((total, number) => total + number, 0);

console.log(sum77);


const numbers88 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Return all the prime numbers in an array using Arrow Function


const isPrime = number => {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
};

const primeNumbers88 = numbers.filter(number => isPrime(number));

console.log(primeNumbers88);


// Return all the palindromes in an array using Arrow Function


const words88 = ["level", "hello", "radar", "world", "deified"];

const isPalindrome = word => {
    return word === word.split('').reverse().join('');
};

const palindromes88 = words.filter(word => isPalindrome(word));

console.log(palindromes88);
