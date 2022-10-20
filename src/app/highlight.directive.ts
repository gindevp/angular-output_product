import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // B1. Tạo ra đối tượng directive sử dụng CLI command bằng câu lệnh: ng generate directive directive_name.
  // B2. Trong contructor làm như dưới đây.
  // ElementRef là Class trong thư viện của angular.
  // Chúng ta dùng ElementRef trong hàm construct để inject nó tham chiếu đến các phần tử DOM trong component hiện tại.
  // Sau đó chi cần gọi thuộc tính ElementRef để lấy về đối tượng DOM để thay đổi style background sang mày bất kỳ mà chúng ta muốn.
  // B3. Ta thêm appHighlight vào thẻ của đối tượng ta muốn thay đổi
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#e5bdbd';
    el.nativeElement.style.color = 'white';
  }

}
