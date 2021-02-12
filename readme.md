# Redux - React native

[vi du](/vidu.png)

#### List view

khi mình có 100 cái components nhưng hiển thị danh sách trên màn chỉ có 5 cái. Nếu tạo hết 100 components vứt vào ram thì ko
tối ưu vì ram điện thoại thường ít hơn lap. do đó dùng `<ListView> ` để hiển thị danh sách đó. <br/>

Ví dụ screen chỉ vừa vặn 4 cái components.List view nó sẽ chỉ tạo ra 5 cái components. ví dụkhi có onSCroll down thì nó sẽ mang thằng componet bị kéo lên trên xuống dưới, đổ data vào và hiển thị.
