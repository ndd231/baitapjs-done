/* Bài tập 1 : Tính công
 * Input:  User nhập số ngày công

Xử lý: 
Lấy dữ liệu user nhập vào 
ép kiểu dữ liệu sang kiểu number
áp dụng công thức tính tiền công

Kết quả:
nhập vào 10 ngày công 
xuất ra kết quả = 1.000.000 
 */
function xacNhan() {
  var ngayCongEl = document.getElementById("ngayCong");
  var soNgayCong = Number(ngayCongEl.value);
  console.log("Số ngày công là: ", soNgayCong, "ngày");
  const x = Number(100000);
  var tienCong = x * soNgayCong;
  console.log("Tổng tiền công là: ", tienCong, "vnd");
  document.getElementById("xuatKetQuabai1").innerText =
    "Số tiền công của bạn là: " + tienCong + "vnd";
}
