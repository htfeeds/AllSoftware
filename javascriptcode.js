function go() {
	var numb=7 - document.getElementById('so').value;
	var url="home"+numb+".html";
	if(event.keyCode=='13') {
		if (numb>0 && numb<=6) window.location=url;
		else alert("Số trang không đúng");
	}
}

function gogo() {
	var numb=7- document.getElementById('so').value;
	var url="home"+numb+".html";
	if(numb>0 && numb<=6)
		window.location=url;
		else alert("Số trang không đúng");
}

function kiemtradn() {
	var tentk= document.dangnhap.id.value;
	if (document.dangnhap.id.value=="admin" &&
		document.dangnhap.pw.value=="admin" ||
		document.dangnhap.id.value=="aptech" &&
		document.dangnhap.pw.value=="123456") {
			document.write("Cảm ơn, <b>"+tentk+"</b> đã đăng nhập thành công.");
			return false;
	}
	alert("Tài khoản hoặc mật khẩu không đúng!");
	return false;
}

function qmk() {
	prompt("Nhập email của bạn: ","");
	return false;
}

function kiemtradk() {
	var tk= document.dangky.taikhoan.value.length;
	if (tk<6 || tk>12) {
		alert("Tên tài Khoản phải từ 6-12 ký tự");
		return false;
	}
	var email= document.dangky.email2.value;
	if (email != document.dangky.email1.value){
		alert("Nhập lại email không đúng");
		return false;
	}
	var mk= document.dangky.matkhau.value.length;
	if (mk<6 || mk>18) {
		alert("Mật khẩu phải từ 6-18 ký tự");
		return false;
	}
	alert("Đăng ký thành công");
	return true;
}