'use strict'

const bubbleSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the numbers, use ES6 destructuring assigment
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

// Test case
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log('Sorted array:', bubbleSort(arr));
