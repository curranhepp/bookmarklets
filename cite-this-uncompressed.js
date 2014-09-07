javascript: (function() {
    var e = document.createElement("div");
        e.setAttribute("id", "citationbox");
        e.setAttribute("style", "font-size:12px; background: #FAFAFA; padding: 0 12px; z-index: 5500003 !important; position: fixed;");
    var t = document.getElementsByTagName("title")[0];
    var n = "<p><strong>Title(" + t.innerHTML.length + "):</strong> " + t.innerHTML + "</p><ul style=\"list-style-type: none;\">";
    var r = document.getElementsByTagName("meta");
    for (var i = 0; i < r.length; i++) {
        if (null !== r[i].getAttribute("name")) {
            var s = r[i].getAttribute("content");
            n += "<li><strong>" + r[i].getAttribute("name") + ":</strong> " + s + "</li>";
        }
    }

    function copyTextToClipboard(citeText) {
        var $citeText = citeText.replace(/(<([^>]+)>)/ig,"");

//       var copyFrom = document.createElement("textarea");
//       copyFrom.textContent = $citeText;
      var copyFrom = document.getElementById("citewrapper").textContent;
//       body.appendChild(copyFrom);
//       copyFrom.select();
      document.execCommand(copyTextToClipboard);
//       body.removeChild(copyFrom);
//       return false;
console.log("Citation: " + $citeText + " copied to clipboard");
sessionStorage.setItem("Citation",$citeText);
    };

    var o = document.lastModified;
    var u = location.href;
    var a = new Date();
    var f = a.getDate();
    var l = a.getMonth() + 1;
    var c = a.getFullYear();
    var ct = '<p id="citationclip"><strong>Citation: </strong>"' + t.innerHTML + '." Last modified ' + o + ". " + u + " (accessed " + l + "/" + f + "/" + c + ").</p>";

    n += '</ul>';
    n += ct;
    document.body.insertBefore(e, document.body.firstChild);
    e.innerHTML = '<div id="citewrapper" style="border:0;border-radius:0px;-moz-box-shadow:0 0 5px #888;-webkit-box-shadow:0 0 5px#888;box-shadow:0 0 5px #888;background:#FAFAFA; text-align:left; margin: 0 12px; padding: 0 5px; border-bottom: 1px solid gray; color: #000; position:fixed; left:0;right:0;"><a style="background:#EFEFEF!important; color: #333333; border-left: 3px solid #5677fc; display: block;text-align: center;position: relative; letter-spacing: -1px; line-height: 29px; height: 29px;" href="#" onclick="document.body.removeChild(document.body.firstChild);return false">remove</a>' + n + "</div>";
    var p = document.getElementById("citationclip");
    p.onclick = copyTextToClipboard(ct);
})();
