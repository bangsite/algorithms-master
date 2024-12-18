'use strict'

const countingSortByDigit = (arr, exp) => {
    const count = Array(10).fill(0);
    const output = Array(arr.length).fill(0);

    // Đếm số lần xuất hiện dựa trên chữ số
    for (let num of arr) {
        const digit = Math.floor(num / exp) % 10;
        count[digit]++;
    }

    // Cộng dồn mảng đếm
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Sắp xếp
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[--count[digit]] = arr[i];
    }

    return output;
};

const radixSort = (arr) => {
    const max = Math.max(...arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        arr = countingSortByDigit(arr, exp);
        exp *= 10;
    }

    return arr;
};


// Test case
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log('Sorted array:', radixSort(arr));
