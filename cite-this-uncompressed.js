(function(){
    var e = document.createElement("div");
        e.setAttribute("id", "citationbox");
        e.setAttribute("style", "font-size:12px; background: #FAFAFA; padding: 0 12px; z-index: 5500003 !important; position: fixed;");
    var t = document.getElementsByTagName("title")[0];
    var n = "<p><strong>Title:</strong> " + t.innerHTML + "</p><ul style=\"list-style-type: none;\">",
        r = document.getElementsByTagName("meta");
    for (var i = 0; i < r.length; i++) {
        if (null !== r[i].getAttribute("name")) {
            var s = r[i].getAttribute("content");
            n += "<li><strong>" + r[i].getAttribute("name") + ":</strong> " + s + "</li>";
        }
    }

    var o = document.lastModified,
        u = location.href,
        a = new Date(),
        f = a.getDate(),
        l = a.getMonth() + 1,
        c = a.getFullYear(),
        ct = '<textarea id="citationclip" style="background: #FFF;border: none;font-size: 10px;border-left: 3px solid #5677fc;}">"' + t.innerHTML + '." Last modified ' + o + ". " + u + " (accessed " + l + "/" + f + "/" + c + ").</textarea>";

    n += '</ul>';
    n += ct;
    document.body.insertBefore(e, document.body.firstChild);
    e.innerHTML = '<div id="citewrapper" style="border:0;border-radius:0px;box-shadow:0 5px 10px rgba(0,0,0,0.4);background:#FAFAFA; text-align:left; margin: 0 12px; padding: 0 5px; border-bottom: 1px solid gray; color: #000; position:fixed; left:0;right:0;"><a style="background:#EFEFEF!important;display: block;text-align: center;position: relative; line-height: 29px; height: 29px;" href="#" onclick="document.body.removeChild(document.body.firstChild);return false">remove</a>' + n + "</div>";
})();