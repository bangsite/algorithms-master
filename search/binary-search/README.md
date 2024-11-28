# Binary Search

Thuật toán tìm kiếm nhị phân là thuật toán tìm kiếm được sử dụng trong một mảng đã được sắp xếp bằng cách chia đôi mảng
cần tìm kiếm nhiều lần . Xác định giá trị cần tìm trên mảng đã chia và giảm độ phức tạp thời gian xuống còn O(log N).

## Approach

- Chia đôi `array` và gọi 2 phần chia đôi đó là `left` và `right`.
- Tạo biến `mid`,và `mid` giá trị đứng giữa `left` và `right`.
- 'mid' giúp ta xác định xem `value` target ta cần tìm nẳm ở `array left` hay `array right`.
- Nếu `value` target nằm ở `left` thì ta loại bỏ `right`, ta chỉ tìm kiếm trên `left` và ngược lại.

## Complexity

- Time: O(log N)
- Auxiliary Space: O(1)

## Problem List

##### Search in Rotated Sorted Array
<details><summary><b>Detail</b></summary>
<p>
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
-  Search in Rotated Sorted Array
-  Search in Rotated Sorted Array
</p>
</details>

---
