chrome.storage.sync.get(['mssv', 'password', 'options'], function(info){
	var click = $('#ctl00_ContentPlaceHolder1_ctl00_lblError').length;
	var flag = info.options;
	if(!click) {
		$('#ctl00_ContentPlaceHolder1_ctl00_txtTaiKhoa').val(info.mssv);
		$('#ctl00_ContentPlaceHolder1_ctl00_txtMatKhau').val(info.password);
		$('#ctl00_ContentPlaceHolder1_ctl00_btnDangNhap').click();
		setTimeout(function(){
			window.open("http://daotao.hutech.edu.vn/default.aspx?page=nhapmasv&flag=" + flag, "_self");
		}, 1000);
	}
});