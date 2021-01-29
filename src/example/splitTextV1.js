{
    key: "splitTextV1",
    value: function(t, e, n) {
        var r = [];
        ! function t(o, i) {
            if (e[i] && o.trim().length)
                if (o.indexOf(e[i]) > -1) {
                    var a = 1,
                        s = o.split(e[i]);
                    s.forEach((function(o) {
                        if (o.length) {
                            var c = "";
                            a !== s.length && (c = e[i]), o = (o + c).trim()
                        }
                        o.length && o.length <= n ? r.push(o) : t(o, i + 1), a++
                    }))
                } else t(o, i + 1);
            else if (o.length)
                for (var c = new RegExp(".{1,".concat(n, "}"), "g"), u = o.match(c); u.length > 0;) r.push(u.shift().trim())
        }(t, 0);
        var o = [];
        return r.forEach((function(t) {
            o.length && o[o.length - 1].length + t.length + 1 <= n ? o[o.length - 1] += " ".concat(t) : o.push(t)
        })), o
    }
}