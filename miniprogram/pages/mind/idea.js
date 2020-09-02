(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/idea" ], {
    "6c6a": function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, c(e("81c6"));
        var a = c(e("aca8")), o = c(e("e634"));
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var i = getApp().globalData, u = {
            components: {},
            data: function() {
                return {
                    navigationdata: {},
                    maxLen: 200,
                    usedLen: 0,
                    content: "",
                    phone: ""
                };
            },
            onLoad: function(t) {
                i.setNavigationBarTitle(this, "用户反馈");
            },
            onShow: function() {},
            onHide: function() {},
            methods: {
                sava_user_opinion: function() {
                    var t = this;
                    o.default.request({
                        url: a.default.sava_user_opinion,
                        data: o.default.addSid({
                            content: this.content,
                            phone: this.phone
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(n) {
                            0 == n.data.status ? wx.showModal({
                                content: n.data.msg
                            }) : (wx.showToast({
                                title: "提交成功",
                                icon: "success",
                                duration: 2e3
                            }), t.setData({
                                content: "",
                                usedLen: 0
                            }));
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 1);
                },
                bindinput: function(t) {
                    this.setData({
                        usedLen: t.detail.cursor
                    });
                },
                setData: function(t) {
                    var n, e, a = this, o = [];
                    Object.keys(t).forEach(function(c) {
                        o = c.split("."), n = t[c], e = a.$data, o.forEach(function(t, c) {
                            c + 1 == o.length ? (e[t] === n && a.$set(e, t, {}), a.$set(e, t, n)) : e[t] || a.$set(e, t, {}), 
                            e = e[t];
                        });
                    });
                }
            }
        };
        n.default = u;
    },
    b4d9: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("ec6f"), o = e("e93b");
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        e("cae6");
        var i = e("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        n.default = u.exports;
    },
    c155: function(t, n, e) {},
    cae6: function(t, n, e) {
        "use strict";
        var a = e("c155");
        e.n(a).a;
    },
    e93b: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("6c6a"), o = e.n(a);
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        n.default = o.a;
    },
    ec6f: function(t, n, e) {
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
    ffc7: function(t, n, e) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e7dc"), n(e("66fd")), t(n(e("b4d9")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "ffc7", "common/runtime", "common/vendor" ] ] ]);