javascript: var search = prompt("Search " + location.host + " in Google for?", '');
void (window.open("http://www.google.com/search?q=site:" + location.host + '+' + escape(search)));