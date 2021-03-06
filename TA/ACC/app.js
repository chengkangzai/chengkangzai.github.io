var url_string = window.location.href; // window.location.href
var url = new URL(url_string);

var unitNumber = url.searchParams.get('unitNumber');
var serviceNumber = url.searchParams.get('serviceNumber');
var companyName = url.searchParams.get('companyName');
var SSID = url.searchParams.get('SSID');
var password = url.searchParams.get('password');

console.log(unitNumber);
console.log(serviceNumber);
console.log(companyName);
console.log(SSID);
console.log(password);

GETValidation();

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function GETValidation() {
    if (isEmpty(unitNumber) || isEmpty(serviceNumber) || isEmpty(companyName) || isEmpty(SSID) || isEmpty(password)) {
        alert("This page is still underdevelopment ! \n You do not pass enough parameter to this page.");
    }
    changeDomInformation();
}

function changeDomInformation() {
    $(".unitNumber").append(unitNumber);
    $(".serviceNumber").append(serviceNumber);
    $(".companyName").append(companyName);
    $(".SSID").append(SSID);
    $(".password").append(password);
    makeQRCode();
}

function makeQRCode() {
    $('#QRCODE').qrcode({
        width: 170,
        height: 170,
        text: `WIFI:S:${SSID};T:WPA;P:${password};;`
    });
    $("#notice").show();
    window.print();
}