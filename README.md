

I. @Input() @Output() trong Angular
Trong angular, chúng ta sử dụng khai báo @Input() và @Output() để chia sẻ dữ liệu giữa một thành phần cha và một hoặc nhiều thành phần con với nhau.
Khai báo @Input() cho phép thành phần cha cập nhật hoặc truyền dữ liệu sang thành phần con. Ngược lại, @Output() cho phép thành phần con gửi dữ liệu đến một thành phần cha.

II. Directive
1. Directive là gì?
   Chúng ta sử dụng Directive để thao tác, cập nhật, thêm, xóa các thành phần giao diện trên web. Hay nói cách khác chúng ta thao tác với các element của DOM.
   Các nút, ảnh, text box, table mà ta thấy trên website được một đối tượng DOM quản lý.
   DOM có nhiệm vụ vẽ ra các đối tượng này trên website để ta có thể thấy được.

Angular Directive được chia là 3 loại gồm:
- Component Directive
- Structural Directive
- Attribute Directive

2.  Component Directive là gì?
    Components là một khối code trong app Angular. Nó là sự kết hợp của bộ template html (bộ khung html) và nhúng kèm code TypeScript (hoặc Javascript).
    Các components là độc lập với nhau và độc lập với hệ thống.

3. Structural Directive là gì?
   Chúng ta sử dụng Structure Directive để thay đổi layout của trang website bằng cách thêm hoặc xóa các thành phần trên web (DOM Elements).

Một số thẻ về Structural Directive như:
- ngFor : dùng để lặp lại các phần HTML cho mỗi item. Nó giống như vòng lặp for. Mỗi lần lặp nó sẽ chạy lại các đoạn code trong vòng lặp
- ngIf : chúng ta sử dụng ngIf để thêm và xóa các thành phần HTML dựa vào điều kiện có thoả mãn không. Điều kiện phải đúng mới thực hiện các câu lệnh bên trong.
- ngSwitch : chúng ta dùng để quyết định thêm hoặc xóa các thành phần của web phụ thuộc vào điều kiện có thoả mãn hay không. Chúng ta thường dùng chung với ngSwitchCase và ngSwitchDefault

4. Attribute Directive là gì?
   Attribute Directive được dùng để thay đổi sự hiển thị hoặc hành vi của một thành phần trên web.
- ngModel : được sử dụng cho việc binding 2 chiều như ta đã học trong bài databinding.
- ngStyle : dùng để thêm nhiều thuộc tính css cho một thành phần của web.
- ngClass : được sử dụng để thêm hoặc xoá một class của một thành phần web.

5. Customs Directive là gì?
   Ngoài các Directive có sẵn trong Angular chúng ta có thể tự tạo ra một directive riêng cho chính mình. Chúng ta sẽ xem bài sau về cách tạo một Directive riêng cho dự án.

III. Cài đặt Bootstrap trong Angular
1. Để cài đặt Bootstrap trong Angular thì trong cửa sổ terminal gõ lệnh npm i -s bootstrap.
2. Để dùng được thư viện bootstrap thì trong file src/styles.css thêm đoạn code sau:
   @import "~bootstrap/dist/css/bootstrap.css";
