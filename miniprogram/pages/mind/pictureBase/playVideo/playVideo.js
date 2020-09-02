(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/pictureBase/playVideo/playVideo" ], {
    "2fb3": function(t, e, n) {
        "use strict";
        var a = n("df78");
        n.n(a).a;
    },
    "46c4": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("81c6"));
        getApp().globalData;
        var o = {
            data: function() {
                return {
                    src: "",
                    muted: "",
                    navigationdata: {},
                    width: "100%",
                    height: "100%",
                    Increases: getApp().globalData.system.statusBarHeight
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                this.setData(t);
                var e = a.default.navigate.get();
                e && this.setData(e), this.videoContext = wx.createVideoContext("myVideo"), this.videoContext.play();
            },
            onReady: function() {},
            methods: {
                bindfullscreenchange: function(t) {
                    t.detail.fullScreen || wx.navigateBack();
                },
                setData: function(t, e) {
                    var n, a, o = this, i = [];
                    Object.keys(t).forEach(function(e) {
                        i = e.split("."), n = t[e], a = o.$data, i.forEach(function(t, e) {
                            e + 1 == i.length ? (a[t] === n && o.$set(a, t, {}), o.$set(a, t, n)) : a[t] || o.$set(a, t, {}), 
                            a = a[t];
                        });
                    }), e && e();
                }
            }
        };
        e.default = o;
    },
    "5a60": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("46c4"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    },
    "80b0": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            this.$createElement, this._self._c;
        }, o = [];
    },
    db88: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("80b0"), o = n("5a60");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("2fb3");
        var u = n("f0c5"), c = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = c.exports;
    },
    df78: function(t, e, n) {},
    e26c: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("e7dc"), e(n("66fd")), t(e(n("db88")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "e26c", "common/runtime", "common/vendor" ] ] ]);