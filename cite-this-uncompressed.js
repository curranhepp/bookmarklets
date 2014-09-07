javascript: (function () {
  var h = document.createElement('div');
  var t = document.getElementsByTagName('title')[0];
  var info = '<p><strong>Title(' + t.innerHTML.length + '):</strong> ' + t.innerHTML + '</p>';
  var m = document.getElementsByTagName('meta');
  for (var i = 0; i < m.length; i++) {
    if (null !== m[i].getAttribute('name')) {
      var c = m[i].getAttribute('content');
      info += '<p><strong>' + m[i].getAttribute('name') + '(' + c.length + '):</strong> ' + c + '</p>';
    }
  }
  var lm = document.lastModified;
  var url = location.href;
  var d = new Date();
  var dd = d.getDate();
  var mm = d.getMonth()+1;
  var yyyy = d.getFullYear();      
  info += '<p><strong>Citation: </strong>"' + t.innerHTML + '." Last modified ' + lm + '. ' + url + ' (accessed ' + mm + '/' + dd + '/' + yyyy + ').</p>';
  document.body.insertBefore(h, document.body.firstChild);
  h.innerHTML = '<div style="border:1px solid #888;border-radius:5px;-moz-box-shadow:0 0 5px #888;-webkit-box-shadow:0 0 5px#888;box-shadow:0 0 5px #888;background:#eee;text-align:left;padding:1em;"><a href="#" onclick="document.body.removeChild(document.body.firstChild);return false">remove</a>' + info + '</div>';
})();