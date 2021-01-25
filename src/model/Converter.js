class Converter {
    splitTextV1 = (t, e, n) => {
        var r = [];
    
        function text(o, i) {
            if (e[i] && o.trim().length)
                if (o.indexOf(e[i]) > -1) {
                    var a = 1
                        , s = o.split(e[i]);
                    s.forEach((function (o) {
                        if (o.length) {
                            var c = "";
                            a !== s.length && (c = e[i]);
                            o = (o + c).trim()
                        }
                        o.length && o.length <= n ? r.push(o) : text(o, i + 1);
                        a++
                    }
                    ))
                } else
                    text(o, i + 1);
            else if (o.length)
                for (var c = new RegExp(".{1,".concat(n, "}"), "g"), u = o.match(c); u.length > 0;)
                    r.push(u.shift().trim())
        };
        var space = /\s+/g;
        t = t.replace(space, ' ');
        t = t.replace(",","");
        text(t, 0);
            
        var out = [];
        r.forEach(function (t) {
            out.length && out[out.length - 1].length + t.length + 1 <= n ? out[out.length - 1] += " ".concat(t) : out.push(t)
        })

        return out;
    }
}

export default new Converter()



