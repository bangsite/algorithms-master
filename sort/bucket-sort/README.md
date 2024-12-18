# Radix Sort

Thuật toán sắp xếp theo cơ số  (Radix Sort)  là một thuật toán sắp xếp các số bằng cách xử lý từng chữ số từ hàng đơn vị
đến hàng cao nhất, sử dụng thuật toán đếm (Counting Sort) ở mỗi chữ số.

## Approach

1. Tìm chữ số lớn nhất (max).
2. Lặp qua từng chữ số, từ hàng đơn vị đến cao nhất.
3. Sắp xếp từng chữ số bằng Counting Sort.

## Complexity

- Time Complexity: O(d * (n + k)), với d là số chữ số tối đa.

- Auxiliary Space: O(n + k)

## Applications

- HPhù hợp với sắp xếp số nguyên lớn hoặc chuỗi ký tự. 
- Không phù hợp với dữ liệu phức tạp như số thực hoặc dữ liệu âm.

## Code Example

```javascript
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

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));

```

## Problem List

#### []()

<details><summary><b>Detail</b></summary>
<p>

</p>
</details>

---
