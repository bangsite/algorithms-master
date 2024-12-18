# Insertion Sort

Thuật toán sắp xếp chèn (Insertion Sort) là thuật toán chia mảng thành 2 phần đã sắp xếp và chưa sắp xếp, sau đó chèn từng phần tử từ phần chưa sắp xếp vào vị trí đúng trong phần đã sắp xếp.

## Approach

1. Lấy từng phần tử từ mảng chưa sắp xếp.
2. So sánh và chèn vào đúng vị trí trong mảng đã sắp xếp.

## Complexity

- Time Complexity:
    - Tốt nhất: O(n).
    - Trung bình và xấu nhất: O(n^2).
- Auxiliary Space: O(1)

## Applications

- Phù hợp với dữ liệu nhỏ hoặc gần như sắp xếp.
- Được sử dụng trong các bài toán đơn giản hoặc các hệ thống yêu cầu độ chính xác cao.

## Code Example

```javascript
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  
  return arr;
};

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));

```

## Problem List

#### []()

<details><summary><b>Detail</b></summary>
<p>

</p>
</details>

---
