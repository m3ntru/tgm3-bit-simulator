{
	key: "onDisplay",
	value: function(t, e, n) {
		var r = this;
		(e.isTest || this.config.settings.interrupt_mode) && (this.audioPlayer.stop(), this.audioPlayer.clearQueue());
		var o = n.layout || this.getLayoutByType(t),
			i = this.getMasterVolume("alerts"),
			a = this.treatSoundVolume(n.soundVolume, i, 50),
			s = this.getMasterVolume("tts"),
			c = this.treatSoundVolume(n.ttsVolume, s, 75);
		console.log("Alert volume: ".concat(a)), console.log("TTS volume: ".concat(c));
		var u = null,
			l = null;
		if (e.message && (l = $("<div />").html(e.message).text(), u = e.userMessage || e.message, n.userMessageEnabled || n.ttsEnabled)) {
			if (u = n.emotes && n.userMessageAllowEmotes ? Ii(u, n.emotes, (function(t) {
					return ['<img src="', t.replace("1.0", "3.0"), '" />'].join("")
				})) : ji(u), n.cheerBit) {
				u.length > 300 && (u = "".concat(u.substring(0, 296), "...")), l.length > 550 && (l = "".concat(l.substring(0, 446), "..."));
				var f = [];
				this.bitsActions.actions && (f = this.bitsActions.actions.map((function(t) {
					return t.prefix.toLowerCase()
				})));
				var p, h, d = new RegExp("\\b(".concat(f.join("|"), ")([0-9]+)\\b"), "gi"),
					m = /(^|\s)([a-zA-Z0-9][a-zA-Z]+|[a-zA-Z0-9]+cheer)([0-9]+)(\s|$)/i,
					y = u.match(d),
					g = [];
				y && (g = y.map((function(t) {
					return m.exec(t)
				})));
				var b = l,
					v = u;
				try {
					g.forEach((function(t) {
						parseInt(t[3]) > e.amount ? v = v.replace(t[0], "") : (parseInt(t[3]) >= 1e4 ? (p = "red", h = 4) : parseInt(t[3]) >= 5e3 && parseInt(t[3]) <= 9999 ? (p = "blue", h = 3) : parseInt(t[3]) >= 1e3 && parseInt(t[3]) <= 4999 ? (p = "#2dfdbe", h = 2) : parseInt(t[3]) >= 100 && parseInt(t[3]) <= 999 ? (p = "#be61ff", h = 1) : parseInt(t[3]) >= 1 && parseInt(t[3]) <= 99 && (p = "grey", h = 0), v = v.replace(t[0], '<img src="'.concat(r.bitsActions.actions[f.findIndex((function(e) {
							return t[2].toLowerCase() === e.toLowerCase()
						}))].tiers[h].images.dark.animated[2], '" /><font color="').concat(p, '">').concat(t[3], "</font>")), b = b.replace(t[0], ""))
					}))
				} catch (t) {}
				u = v, l = b
			}
			e.message = u
		}
		if (n = this.setMobileCustomSettings(n), this.sendMessageToFrame("display", {
				message: e,
				settings: n,
				layout: o,
				userMessage: u,
				ttsMessage: l
			}), this.config.eventsPanelMuted || (n.soundHref && a > 0 && this.sounds.push({
				url: n.soundHref,
				volume: a
			}), a > 0 && this.playSounds()), n.ttsEnabled) {
			if (n.ttsIncludeMessageTemplate) {
				var _ = n.messageTemplate;
				for (var w in e) {
					var k = new RegExp("{".concat(w, "}"), "g");
					_ = _.replace(k, "".concat(e[w]))
				}
				l = "".concat(_, ".").concat(l ? " " + l : "")
			}
			l && c > 0 && this.playTTS(l, n, c)
		}
		this.hideAlert = function() {
			return e._id
		}, this.timeout = setTimeout(this.hideAlert, n.duration)
	}
}