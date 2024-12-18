'use strict'

const selectionSort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};

// Test case
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log('Sorted array:', selectionSort(arr));