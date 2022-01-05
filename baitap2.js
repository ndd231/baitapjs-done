/**
 * Bài tập 2: Tính trung bình cộng của dãy 5 số thực ngẫu nhiên
 *
 * Input: Nhập vào 5 số bất kỳ
 *
 * Xử lý:
 * Lấy dữ liệu user nhập vào
 * ép kiểu dữ liệu sang kiểu number
 * tính trung bình cộng của 5 số :
 * ( số 1 + số 2 +số 3 +số 4 + số 5 ) /5
 *
 * Kết quả:
 * nhập vào 5 số : 11 22 33 44 55
 * trung bình cộng của 5 số này là 33
 */
function tinhTBC() {
  var soThuc1 = document.getElementById("SoThu1");
  var soThuc2 = document.getElementById("SoThu2");
  var soThuc3 = document.getElementById("SoThu3");
  var soThuc4 = document.getElementById("SoThu4");
  var soThuc5 = document.getElementById("SoThu5");
  var soThuc1El = Number(soThuc1.value);
  var soThuc2El = Number(soThuc2.value);
  var soThuc3El = Number(soThuc3.value);
  var soThuc4El = Number(soThuc4.value);
  var soThuc5El = Number(soThuc5.value);
  console.log(
    "Dãy số là: ",
    soThuc1El,
    soThuc2El,
    soThuc3El,
    soThuc4El,
    soThuc5El
  );
  var TBC = (soThuc1El + soThuc2El + soThuc3El + soThuc4El + soThuc5El) / 5;
  console.log("TBC của 5 số thực là: ", TBC);
  document.getElementById("xuatKetQuabai2").innerText =
    "Trung bình cộng của 5 số thực là: " + TBC;
}
