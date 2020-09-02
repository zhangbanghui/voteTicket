(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/auth/auth" ], {
    "2c6e": function(t, n, e) {
        "use strict";
        var a = e("66c6");
        e.n(a).a;
    },
    4611: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("5ccf"), o = e("7f8f");
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        e("2c6e");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    "5ccf": function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return c;
        }), e.d(n, "a", function() {
            return a;
        });
        var a = {
            navigationTop: function() {
                return e.e("components/navigation-top/navigation-top").then(e.bind(null, "532f"));
            }
        }, o = function() {
            this.$createElement, this._self._c;
        }, c = [];
    },
    "66c6": function(t, n, e) {},
    "7f8f": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("d735"), o = e.n(a);
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        n.default = o.a;
    },
    d735: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, e("81c6"), e("aca8"), e("e634");
        var a = {
            data: function() {
                return {
                    navigationdata: {},
                    delta: 2
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                getApp().globalData.setNavigationBarTitle(this, "授权");
                var n = getCurrentPages();
                n[n.length - 2].data.back_delta && this.setData({
                    delta: n[n.length - 2].data.back_delta
                });
            },
            methods: {
                onGotUserInfo: function(t) {
                    -1 != t.detail.errMsg.indexOf("ok") && wx.navigateBack({
                        delta: this.delta
                    });
                },
                setData: function(t) {
                    var n, e, a = this, o = [];
                    Object.keys(t).forEach(function(c) {
                        o = c.split("."), n = t[c], e = a.$data, o.forEach(function(t, c) {
                            c + 1 == o.length ? a.$set(e, t, n) : e[t] || a.$set(e, t, {}), e = e[t];
                        });
                    });
                }
            }
        };
        n.default = a;
    },
    e082: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e7dc"), n(e("66fd")), t(n(e("4611")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "e082", "common/runtime", "common/vendor" ] ] ]);