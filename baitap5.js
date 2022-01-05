/**
 * Bài tập 5: Tính tổng 2 ký số
 *
 * Input: Nhập số có 2 chữ số bất kỳ
 *
 * Xử lý:
 * Lấy dữ liệu user nhập vào
 * Ép kiểu dữ liệu sang number
 * Để lấy số hàng đơn vị : lấy số nhập vào % 10
 * Để tách số hàng chục : (lấy số nhập vào - số hàng đơn vị) / 10
 * Kết quả: Nhập vào 99 -> in ra kết quả tổng = 18
 */
function tinhTong() {
  var soCanTim = document.getElementById("soNgauNhien");
  var soNgauNhien = Number(soCanTim.value);
  console.log("Số có 2 chữ số là: ", soNgauNhien);
  var soHangDonVi = soNgauNhien % 10;
  var soHangChuc = (soNgauNhien - soHangDonVi) / 10;
  console.log("Số hàng chục là: ", soHangChuc);
  console.log("Số hàng đơn vị là: ", soHangDonVi);
  var tong2KySo = soHangChuc + soHangDonVi;
  console.log("Tổng 2 ký số là: ", tong2KySo);
  document.getElementById("xuatKetQuabai5").innerText =
    "Tổng 2 ký số là: " + tong2KySo;
}
