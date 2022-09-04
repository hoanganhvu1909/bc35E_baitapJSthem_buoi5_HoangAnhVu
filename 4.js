// bài 4

var btnkq4 = document.getElementById("btnkq4");
function myFunction() {
  var loaikh = document.getElementById("loaikh").value;
  switch (loaikh * 1) {
    case 1: document.getElementById("nd").style.display = 'none';
      break;
    case 2: document.getElementById("nd").style.display = 'none';

      break;
    case 3: document.getElementById("nd").style.display = 'block';

      break;
  }

}
btnkq4.onclick = function () {
  var sokenh = document.getElementById("sokenh").value;
  var sokn = document.getElementById("sokn").value;
  var loaikh = document.getElementById("loaikh").value;
  var mkh = document.getElementById("mkh").value;
  if (loaikh == 2) {
    kq = 4.5 + 20.5 + 7.5 * sokenh;

  }
  else if (loaikh == 3) {
    if (sokn <= 10) {
      kq = 15 + 50 * sokenh + 75;
    }
    else {
      kq = 15 + 50 * sokenh + 75 + 5 * (sokn - 10);
    }

  }

  document.getElementById("showInfokq4").innerHTML = "số tiền phải trả" + kq;

}
