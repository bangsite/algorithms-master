# Bubble Sort

Thuật toán sắp xếp nổi bọt (Bubble Sort) là thuật toán so sánh các phân tử liền kê nhau và hoán đổi thứ tự nếu chúng
không theo thứ tự mong muốn. Thuật toán lặp đi lặp lại cho tới khi mảng được sắp xếp hoàn toàn.

## Approach

1. Thưc hiện 2 vòng lặp, bắt đầu từ phần tử đầu tiên.
2. So sánh từng cặp phần tử liền kề, nếu phần tử bên trái lớn hơn bên phải, hoán đổi vị trí.
3. Mỗi lần kết thúc một vòng lặp, phần tử lớn nhất sẽ được đưa về cuối dãy.
4. Tiếp tục các vòng lặp cho đến khi mảng được sắp xếp.

## Complexity

- Time Complexity: 
  - Trường hợp xấu nhất và trung bình: O(n^2).
  - Trường hợp xấu nhất: O(n^2).

- Auxiliary Space: O(1) (in-place sorting).

## Applications

- Dễ triển khai với các mảng nhỏ.
- Không cần cấu trúc bổ sung nên phù hợp trong các hệ thống tài nguyên hạn chế.
- Học thuật, thường dùng để dạy ý tưởng cơ bản về thuật toán sắp xếp.

## Code Example
```javascript
const bubbleSort = (arr) => {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
```

## Problem List

#### []()

<details><summary><b>Detail</b></summary>
<p>

</p>
</details>

---
