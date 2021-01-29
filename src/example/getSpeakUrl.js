{
    key: "getSpeakUrl",
    value: function(t, e) {
        var n = this;
        return new Promise((function(r, o) {
            var i = [];
            if (n.hasVoiceId(e)) $.post("/google/speak", {
                text: t,
                language: e,
                forced_gender: n.voiceInfo[e]
            }).done((function(t) {
                i.push(t.speak_url), r(i)
            })).fail((function() {
                return o("Unable to get speak URL.")
            }));
            else {
                var a, s = No(n.splitTextV1(t, [".", "!", "?", ":", ";", ",", " "], 90));
                try {
                    for (s.s(); !(a = s.n()).done;) {
                        var c = a.value;
                        i.push("http://translate.google.com/translate_tts?ie=UTF-8&total=1&idx=0&textlen=".concat(c.length, "&client=tw-ob&q=").concat(encodeURIComponent(c), "&tl=").concat(e))
                    }
                } catch (t) {
                    s.e(t)
                } finally {
                    s.f()
                }
                r(i)
            }
        }))
    }
}