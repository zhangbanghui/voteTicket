(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/videoEx/videoEx" ], {
    1676: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var o = function() {
            this.$createElement, this._self._c;
        }, i = [];
    },
    "4bb6": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, getApp({
            allowDefault: !0
        });
        var o = {
            data: function() {
                return {
                    pageshow: !1,
                    ended: !1,
                    src: "",
                    width: "100%",
                    height: "100%",
                    Increases: getApp().globalData.system.statusBarHeight
                };
            },
            methods: {
                show_video: function(e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e && (this.setData({
                        pageshow: !0,
                        src: e,
                        ended: n
                    }), setTimeout(function() {
                        t.videoContext = wx.createVideoContext("myVideo"), t.videoContext.play();
                    }, 500));
                },
                hide_video: function() {
                    this.setData({
                        pageshow: !1,
                        src: ""
                    }), this.ended && this.$emit("hide_video");
                },
                bindfullscreenchange: function(e) {
                    e.detail.fullScreen || this.hide_video();
                },
                _ended: function(e) {
                    var t = this;
                    this.videoContext.exitFullScreen(), setTimeout(function() {
                        t.ended && t.hide_video();
                    }, 200);
                }
            }
        };
        t.default = o;
    },
    "623b": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("1676"), i = n("d487");
        for (var c in i) "default" !== c && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        n("6253");
        var a = n("f0c5"), d = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = d.exports;
    },
    6253: function(e, t, n) {
        "use strict";
        var o = n("c55e");
        n.n(o).a;
    },
    c55e: function(e, t, n) {},
    d487: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("4bb6"), i = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = i.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/videoEx/videoEx-create-component", {
    "components/videoEx/videoEx-create-component": function(e, t, n) {
        n("543d").createComponent(n("623b"));
    }
}, [ [ "components/videoEx/videoEx-create-component" ] ] ]);