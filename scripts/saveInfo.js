var notiOption = function(message) {
	var noti = {
		type: "basic",
		iconUrl: "img/64.png",
		title: "An extension to lookup any student information",
		message: message
	};
	chrome.notifications.create('Notification', noti);
}

$(document).ready(function() {
	chrome.storage.sync.get(['mssv', 'password', 'options'], function(info) {
		$('#mssv').val(info.mssv);
		$('#password').val(info.password);
		$('#options').val(info.options);
	});
	
	$('#login-form').on('submit', function() {
		var mssv = $('#mssv').val();
		var password = $('#password').val();
		var e = document.getElementById("options");
		var options = e.options[e.selectedIndex].value;

		if(typeof mssv == 'undefined' || mssv == null || mssv == "") {
			notiOption("Student code cannot be blank !");
		}
		else if(typeof password == 'undefined' || password == null || password == "") {
			notiOption("Password can not be blank !");
		}
		else if(options == "0")
		{
			notiOption("Chosse option to accesss!");
		}
		else {

			notiOption("Configuration information has been saved!\n" + "Option: " + options);
			chrome.storage.sync.set({"mssv": mssv, "password": password, "options": options});
		}
	});
});