chrome.browserAction.onClicked.addListener(function(activeTab){
 	var newURL = "http://daotao.hutech.edu.vn/default.aspx?page=dangnhap";
 	chrome.tabs.create({ url: newURL });
});
