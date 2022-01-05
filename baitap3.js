/**
 * Bài tập 3 : Đổi usd -> vnd
 * Input : user nhập x usd
 * Xử lý:
 * Lấy dữ liệu user nhập
 * ép kiểu dữ liệu sang kiểu number
 * tính ra vnd theo công thức usd = x * 23500
 * Kết quả: nhập vào 10usd -> xuất ra 235000 vnd
 */
function quyDoi() {
  var usdEl = document.getElementById("usd");
  var soUsd = Number(usdEl.value);
  console.log("Số usd cần đổi là: ", soUsd);
  const x = 23500;
  var tienVND = x * soUsd;
  console.log("Thành tiền: ", tienVND, "vnd");
  document.getElementById("xuatKetQuabai3").innerText =
    "Số tiền quy đổi của bạn là: " + tienVND + " VND";
}
