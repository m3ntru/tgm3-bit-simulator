{
    key: "playTTS",
    value: function(t, e, n) {
        var r = this;
        this.messageTimeout = setTimeout((function() {
            var o = e.ttsLanguage || "en",
                a = {
                    volume: n
                };
            switch (e.ttsSecurity) {
                case 1:
                    a.maxDuration = 16500;
                    break;
                case 2:
                    a.maxDuration = 12750;
                    break;
                case 3:
                    a.maxDuration = 9375
            }
            t = t.replace(/((?:https?|ftp):\/\/[\n\S]+)|(<([^>]+)>)+/gi, "").trim(), Mo && Mo.hasVoiceId(o) ? Mo.getSpeakUrl(t, o).then((function(t) {
                a.url = t, r.sounds.push(a), r.playSounds()
            })) : Bo.getSpeakUrl(t, o).then((function(t) {
                var e, n = _i(t);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var o = e.value,
                            s = Object(i.cloneDeep)(a);
                        s.url = o, r.sounds.push(s)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                r.playSounds()
            }))
        }), e.textDelay)
    }
}