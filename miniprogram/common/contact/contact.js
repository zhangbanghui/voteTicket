(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/contact/contact" ], {
    "3b1e": function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {
            return o;
        });
        var o = {
            navigationTop: function() {
                return e.e("components/navigation-top/navigation-top").then(e.bind(null, "532f"));
            }
        }, a = function() {
            this.$createElement, this._self._c;
        }, u = [];
    },
    8162: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("3b1e"), a = e("bf6f");
        for (var u in a) "default" !== u && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(u);
        var i = e("f0c5"), c = Object(i.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = c.exports;
    },
    "901d": function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e7dc"), n(e("66fd")), t(n(e("8162")).default);
        }).call(this, e("543d").createPage);
    },
    bf6f: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("da99"), a = e.n(o);
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        n.default = a.a;
    },
    da99: function(t, n, e) {
        "use strict";
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, o(e("81c6")), o(e("aca8")), o(e("e634"));
        var a = getApp().globalData, u = {
            components: {},
            data: function() {
                return {
                    navigationdata: {},
                    path: "pages/issue/vote/vote",
                    orderno: "",
                    image: ""
                };
            },
            onLoad: function(t) {
                a.setNavigationBarTitle(this, "客服中心"), this.setData(t);
            },
            onShow: function() {},
            onHide: function() {},
            methods: {}
        };
        n.default = u;
    }
}, [ [ "901d", "common/runtime", "common/vendor" ] ] ]);