(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/enshrine/enshrine" ], {
    "24b5": function(t, n, a) {
        "use strict";
        a.d(n, "b", function() {
            return o;
        }), a.d(n, "c", function() {
            return i;
        }), a.d(n, "a", function() {
            return e;
        });
        var e = {
            navigationTop: function() {
                return a.e("components/navigation-top/navigation-top").then(a.bind(null, "532f"));
            }
        }, o = function() {
            this.$createElement, this._self._c;
        }, i = [];
    },
    2782: function(t, n, a) {
        "use strict";
        var e = a("bf73");
        a.n(e).a;
    },
    4409: function(t, n, a) {
        "use strict";
        a.r(n);
        var e = a("24b5"), o = a("8826");
        for (var i in o) "default" !== i && function(t) {
            a.d(n, t, function() {
                return o[t];
            });
        }(i);
        a("2782");
        var s = a("f0c5"), c = Object(s.a)(o.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = c.exports;
    },
    "4b38": function(t, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var e = a("aca8"), o = (a("81c6"), a("e634")), i = {
            data: function() {
                return {
                    navigationdata: {},
                    category_list: "",
                    last_start: "",
                    empty: !1,
                    finish: !1
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                getApp().globalData.setNavigationBarTitle(this, "我的关注"), this.setData(t), this.load_list();
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {
                this.load_list(this.last_start);
            },
            methods: {
                load_list: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = this;
                    o.request({
                        url: e.get_attention_list,
                        data: o.addSid({}),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(a) {
                            console.log(a), 1 == a.data.status ? ("Array" != typeof n.category_list && (n.category_list = []), 
                            n.setData({
                                category_list: n.category_list.concat(a.data.items),
                                last_start: a.data.last_start,
                                empty: !1,
                                finish: !1
                            })) : 0 == t ? n.setData({
                                empty: !0
                            }) : n.setData({
                                finish: !0
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    });
                },
                setData: function(t) {
                    var n, a, e = this, o = [];
                    Object.keys(t).forEach(function(i) {
                        o = i.split("."), n = t[i], a = e.$data, o.forEach(function(t, i) {
                            i + 1 == o.length ? (a[t] === n && e.$set(a, t, {}), e.$set(a, t, n)) : a[t] || e.$set(a, t, {}), 
                            a = a[t];
                        });
                    });
                }
            }
        };
        n.default = i;
    },
    8826: function(t, n, a) {
        "use strict";
        a.r(n);
        var e = a("4b38"), o = a.n(e);
        for (var i in e) "default" !== i && function(t) {
            a.d(n, t, function() {
                return e[t];
            });
        }(i);
        n.default = o.a;
    },
    bf73: function(t, n, a) {},
    d12d: function(t, n, a) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("e7dc"), n(a("66fd")), t(n(a("4409")).default);
        }).call(this, a("543d").createPage);
    }
}, [ [ "d12d", "common/runtime", "common/vendor" ] ] ]);