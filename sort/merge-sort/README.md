# Selection Sort

Thuật toán sắp xếp chon (Selection Sort) là thuật toán lặp qua mảng để tìm phần tử
nhỏ nhất và đặt nó vào đúng vị trí. Thuật toán này tiếp tục cho đến khi mảng được sắp xếp hoàn toàn.

## Approach

1. Lặp qua mảng.
2. Tìm phần tử nhỏ nhất trong mảng chưa sắp xếp. Hoán đổi phần tử nhỏ nhất với phần tử đầu tiên của mảng chưa sắp xếp.
3. Lặp lại cho đến khi toàn bộ mảng được sắp xếp.

## Complexity

- Time Complexity: O(n^2) cho tất cả trường hợp.
- Auxiliary Space: O(1) (in-place).

## Applications

- Được dùng trong các hệ thống tài nguyên hạn chế, do dễ triển khai và sử dụng ít bộ nhớ.
> Hiệu suất thấp khi kích thước mảng lớn.
## Code Example

```javascript
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
console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));

```

## Problem List

#### []()

<details><summary><b>Detail</b></summary>
<p>

</p>
</details>

---
