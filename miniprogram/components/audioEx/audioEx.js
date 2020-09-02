(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/audioEx/audioEx" ], {
    "015f": function(t, n, o) {
        "use strict";
        var i = o("6fd1");
        o.n(i).a;
    },
    "4b1c": function(t, n, o) {
        "use strict";
        o.d(n, "b", function() {
            return i;
        }), o.d(n, "c", function() {
            return e;
        }), o.d(n, "a", function() {});
        var i = function() {
            this.$createElement, this._self._c;
        }, e = [];
    },
    "6fd1": function(t, n, o) {},
    "9b24": function(t, n, o) {
        "use strict";
        o.r(n);
        var i = o("e33b"), e = o.n(i);
        for (var a in i) "default" !== a && function(t) {
            o.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = e.a;
    },
    c1f1: function(t, n, o) {
        "use strict";
        o.r(n);
        var i = o("4b1c"), e = o("9b24");
        for (var a in e) "default" !== a && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(a);
        o("015f");
        var u = o("f0c5"), r = Object(u.a)(e.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = r.exports;
    },
    e33b: function(t, n, o) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = getApp({
            allowDefault: !0
        }), e = {
            data: function() {
                return {
                    current_process: 0,
                    slider_value: 0,
                    total_process: 0,
                    slider_max: 0,
                    is_loop: !1,
                    is_loading: !1,
                    is_moving_slider: !1,
                    audiowait: !1
                };
            },
            props: {
                url: {
                    type: String,
                    value: ""
                },
                articleId: {
                    type: String,
                    value: ""
                },
                bgimage: {
                    type: String,
                    value: ""
                }
            },
            created: function() {
                var t = this;
                this.url && (this.initialize(this.url, 0, 0, 0), setTimeout(function() {
                    t.audio_stop();
                }, 300)), console.log(this.url);
            },
            methods: {
                initialize: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], e = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], u = this;
                    return i.innerAudioContext ? n || i.audiosrc != t ? (i.innerAudioContext.offTimeUpdate(), 
                    i.innerAudioContext.seek(0), i.innerAudioContext.destroy(), i.innerAudioContext = !1, 
                    0) : i.audiopause ? (i.audiopause = 0, i.innerAudioContext.play(), 1) : (i.audiopause = !0, 
                    i.innerAudioContext.pause(), 0) : n ? 0 : (console.log("createInnerAudioContext"), 
                    i.innerAudioContext = wx.createInnerAudioContext(), i.innerAudioContext.src = t, 
                    i.innerAudioContext.loop = o, i.audiopause = !0, i.audiosrc = t, e && (i.innerAudioContext.play(), 
                    i.audiopause = !1), i.innerAudioContext.onStop(function() {
                        return console.log("stop"), i.innerAudioContext.seek(0), i.innerAudioContext.destroy(), 
                        i.innerAudioContext = !1, 0;
                    }), i.innerAudioContext.onError(function(t) {
                        return console.log(t), i.innerAudioContext.destroy(), i.innerAudioContext = !1, 
                        0;
                    }), i.innerAudioContext.onTimeUpdate(function() {
                        u.is_moving_slider || u.setData({
                            audiowait: !1,
                            current_process: a(i.innerAudioContext.currentTime),
                            slider_value: Math.floor(i.innerAudioContext.currentTime),
                            total_process: a(i.innerAudioContext.duration),
                            slider_max: Math.floor(i.innerAudioContext.duration)
                        });
                    }), i.innerAudioContext.onEnded(function() {
                        console.log("Ended"), i.innerAudioContext.seek(0), u.is_loop || setTimeout(function() {
                            u.setData({
                                is_loading: !1,
                                slider_value: 0,
                                current_process: "00:00"
                            });
                        }, 300);
                    }), i.innerAudioContext.onCanplay(function() {
                        console.log("Canplay"), i.audiowait && (i.innerAudioContext.play(), i.audiowait = !1);
                    }), i.innerAudioContext.onCanplay(function() {
                        console.log("Canplay"), u.audiowait && (i.innerAudioContext.play(), u.setData({
                            audiowait: !1
                        }));
                    }), i.innerAudioContext.onWaiting(function() {
                        console.log("Waiting"), u.setData({
                            audiowait: !0
                        });
                    }), 1);
                },
                hanle_slider_change: function(t) {
                    var n = t.detail.value;
                    this.seekCurrentAudio(n);
                },
                seekCurrentAudio: function(t) {
                    i.innerAudioContext.seek(t), this.setData({
                        current_process: a(t),
                        slider_value: Math.floor(t)
                    });
                },
                handle_slider_move_start: function() {
                    this.setData({
                        is_moving_slider: !0
                    });
                },
                handle_slider_move_end: function() {
                    this.setData({
                        is_moving_slider: !1
                    });
                },
                audio_play: function() {
                    "" != this.articleId && i.articleId != this.articleId && (i.articleId && this.audio_stop(), 
                    i.articleId = this.articleId), this.setData({
                        is_loading: this.initialize(this.url, !1, this.is_loop)
                    });
                },
                audio_stop: function() {
                    this.initialize("", !0), this.setData({
                        is_loading: !1,
                        slider_value: 0,
                        current_process: "00:00"
                    });
                },
                play_loop: function() {
                    this.is_loop = !this.is_loop, i.innerAudioContext.loop = this.is_loop, this.setData(this);
                }
            }
        };
        function a(t) {
            return t = (Math.floor(t / 60) >= 10 ? Math.floor(t / 60) : "0" + Math.floor(t / 60)) + ":" + (t % 60 / 100).toFixed(2).slice(-2);
        }
        n.default = e;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/audioEx/audioEx-create-component", {
    "components/audioEx/audioEx-create-component": function(t, n, o) {
        o("543d").createComponent(o("c1f1"));
    }
}, [ [ "components/audioEx/audioEx-create-component" ] ] ]);