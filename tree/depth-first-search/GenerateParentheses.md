## Generate Parentheses

- Input: Số nguyên n, là số cặp dấu ngoặc mở ( và đóng ).
- Output: Tất cả các cách kết hợp hợp lệ của dấu ngoặc, đảm bảo dấu ngoặc mở và đóng được sử dụng đúng quy tắc.

### Quy Tắc

- Luôn đảm bảo số lượng dấu ngoặc mở ( không vượt quá n.
- Không bao giờ được phép có số lượng dấu ngoặc đóng ) nhiều hơn dấu ngoặc mở tại bất kỳ thời điểm nào.

### Solution DFS & Backtracking
Sử dụng DFS để sinh tất cả các chuỗi hợp lệ.
- DFS sẽ xây dựng các chuỗi ngoặc bằng cách thêm từng dấu ngoặc ( hoặc ) vào chuỗi hiện tại.
- Tại mỗi bước:
  - Nếu số lượng dấu ngoặc mở < n, ta có thể thêm dấu (.
  - Nếu số lượng dấu ngoặc đóng < số dấu ngoặc mở, ta có thể thêm dấu )`.
  - 
### Độ Phức Tạp
- Time complexity: O(2^n). Mỗi dấu ngoặc có 2 lựa chọn: mở ( hoặc đóng ) ⇒ Cây nhị phân có 2^n nhánh.
- Auxiliary space : O(n) cho stack của DFS.
