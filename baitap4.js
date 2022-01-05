/**
 * Bài tập 4: Tính chu vi và diện tích hcn
 *
 * Input : user nhập chiều dài + chiều rộng
 *
 * Xử lý:
 * Lấy dữ liệu từ user
 * ép kiểu dữ liệu sang kiểu number
 * áp dụng công thức tính chu vi và diện tích hcn
 * xuất ra kết quả
 *
 * Kết quả:
 * nhập vào: chiều dài 25 chiều rộng 10
 * trả kết quả: chu vi 70, diện tích 250.
 */
function ketQua() {
  var chieuDaiEl = document.getElementById("chieuDai");
  var chieuDai = Number(chieuDaiEl.value);
  var chieuRongEl = document.getElementById("chieuRong");
  var chieuRong = Number(chieuRongEl.value);
  console.log("Chiều dài hcn là: ", chieuDai);
  console.log("Chiều rộng hcn là: ", chieuRong);
  var dienTich = chieuDai * chieuRong;
  var chuVi = 2 * (chieuDai + chieuRong);
  console.log("Diện tích hcn là: ", dienTich);
  console.log("Chu vi hcn là: ", chuVi);
  document.getElementById("xuatKetQuabai4_cv").innerText =
    "Chu vi hình chữ nhật là: " + chuVi;
  document.getElementById("xuatKetQuabai4_dt").innerText =
    "Diện tích hình chữ nhật là: " + dienTich;
}
