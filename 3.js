// bài 3: Tính thuế
/**
 * Mô hình ba khối:
 * Đầu vào:
 * - User nhập tên
 * - User nhập thu nhập cả năm
 * - User nhập số người phụ thuộc
 * Xử lý:
 * - thu nhập chịu thuế: tn-4000000-1600000*songuoi
 * - Nếu thu_nhap_chiu_thue <= 60000000: thu_nhap_chiu_thue * 0.05
 * - Nếu 60000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 120000000: thu_nhap_chiu_thue * 0.1
 * - Nếu 120000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 210000000 : thu_nhap_chiu_thue * 0.15
 * - Nếu 210000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 384000000: thu_nhap_chiu_thue * 0.2
 * - Nếu 384000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 624000000: thu_nhap_chiu_thue * 0.25
 * - Nếu 624000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 960000000: thu_nhap_chiu_thue * 0.3
 * - còn lại: thu_nhap_chiu_thue * 0.35
 * Đầu ra:
 * Kết quả: tiền thuế thu nhập cá nhân
 */
var btnkq = document.getElementById("btnkq");
btnkq.onclick = function () {

  //đầu vào

  var ten = document.getElementById("ten").value;
  var tn = document.getElementById("tn").value;
  var songuoi = document.getElementById("songuoi").value * 1;

  //xử lý: 

  var thu_nhap_chiu_thue = tn - 4000000 - 1600000 * songuoi;
  var kq = 0;
  var currentFormat = new Intl.NumberFormat("VN-vn")
  if (thu_nhap_chiu_thue <= 60000000) {
    kq = thu_nhap_chiu_thue * 0.05;
  }
  else if (60000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 120000000) {
    kq = thu_nhap_chiu_thue * 0.1;
  }
  else if (120000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 210000000) {
    kq = thu_nhap_chiu_thue * 0.15;
  }
  else if (210000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 384000000) {
    kq = thu_nhap_chiu_thue * 0.2;
  }
  else if (384000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 624000000) {
    kq = thu_nhap_chiu_thue * 0.25;
  }
  else if (624000000 < thu_nhap_chiu_thue && thu_nhap_chiu_thue <= 960000000) {
    kq = thu_nhap_chiu_thue * 0.3;
  }
  else {
    kq = thu_nhap_chiu_thue * 0.35;
  }
  var result = currentFormat.format(kq);

  //đầu ra:
  document.getElementById("showInfokq").innerHTML = "tên: " +ten + " tiền thuế thu nhập cá nhân: "+ result + " VND";

}
