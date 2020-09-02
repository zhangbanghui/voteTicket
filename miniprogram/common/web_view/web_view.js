(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/web_view/web_view" ], {
    "0d35": function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("e7dc"), t(e("66fd")), n(t(e("8fc1")).default);
        }).call(this, e("543d").createPage);
    },
    "70bf": function(n, t, e) {},
    "714b": function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            data: function() {
                return {
                    navigationdata: {},
                    src: ""
                };
            },
            components: {},
            props: {},
            onLoad: function(n) {
                wx.setNavigationBarTitle({
                    title: n.title
                }), this.setData(n);
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {},
            onShareAppMessage: function() {
                return qcloud.ShareAppMessage(res, "投票活动制作工具", "pages/index/index", {});
            },
            methods: {
                setData: function(n) {
                    var t, e, o = this, a = [];
                    Object.keys(n).forEach(function(c) {
                        a = c.split("."), t = n[c], e = o.$data, a.forEach(function(n, c) {
                            c + 1 == a.length ? o.$set(e, n, t) : e[n] || o.$set(e, n, {}), e = e[n];
                        });
                    });
                }
            }
        };
        t.default = o;
    },
    "8c29": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("714b"), a = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = a.a;
    },
    "8fc1": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("d15f"), a = e("8c29");
        for (var c in a) "default" !== c && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(c);
        e("a34a8");
        var u = e("f0c5"), i = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = i.exports;
    },
    a34a8: function(n, t, e) {
        "use strict";
        var o = e("70bf");
        e.n(o).a;
    },
    d15f: function(n, t, e) {
        "use strict";
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
    }
}, [ [ "0d35", "common/runtime", "common/vendor" ] ] ]);