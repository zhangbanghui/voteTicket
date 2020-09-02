(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/vip/vip" ], {
    1973: function(t, n, a) {
        "use strict";
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("e7dc"), n(a("66fd")), t(n(a("9609")).default);
        }).call(this, a("543d").createPage);
    },
    "4b87": function(t, n, a) {
        "use strict";
        var e = a("bb0f");
        a.n(e).a;
    },
    "55ce": function(t, n, a) {
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
            var t = this, n = (t.$createElement, t._self._c, t.tools.toFixed(100 * ((t.bs || 1) - 1), 2));
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: n
                }
            });
        }, i = [];
    },
    "6ab6": function(t, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var e = a("aca8"), o = (a("81c6"), a("e634")), i = {
            data: function() {
                return {
                    navigationdata: {},
                    vip_grade: null,
                    vip_surplus_time: null,
                    crad_image: null,
                    title: null,
                    vip_surplus_day: null,
                    bs: null,
                    items: null,
                    card_type: null,
                    card_state: null
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                getApp().globalData.setNavigationBarTitle(this, "会员中心"), this.loadlist();
            },
            methods: {
                loadlist: function() {
                    var t = this;
                    o.request({
                        url: e.vip_list,
                        data: o.addSid({}),
                        success: function(n) {
                            n.data.status && t.setData(n.data);
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, "", !0);
                },
                buy_cardvip_tap: function(t) {
                    var n = this, a = this.items[t.currentTarget.dataset.index];
                    wx.showModal({
                        title: a.title,
                        content: "将使用余额支付" + a.price + "元,请确认是否购买。",
                        confirmText: "确认购买",
                        cancelText: "再看看",
                        success: function(t) {
                            t.confirm && o.request({
                                url: e.renew_vip,
                                data: o.signdata({
                                    vip_type: a.type
                                }),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    console.log(t), 1 == t.data.status ? wx.showToast({
                                        title: "成功购买",
                                        success: function() {
                                            n.setData(t.data);
                                        }
                                    }) : -1 == t.data.status ? wx.showModal({
                                        content: t.data.msg,
                                        confirmText: "去充值",
                                        cancelText: "取消",
                                        success: function(t) {
                                            t.confirm && wx.navigateTo({
                                                url: "../money/money"
                                            });
                                        }
                                    }) : wx.showModal({
                                        content: t.data.msg,
                                        showCancel: !1
                                    });
                                },
                                fail: function(t) {
                                    console.log(t);
                                }
                            }, n, 2);
                        }
                    });
                },
                employ_free_balance_pay: function(t) {
                    var n = this;
                    o.request({
                        url: e.dredgevip + "?type=" + t.type + "&use=" + (t.is_dredge ? 0 : t.is_upgrade ? 2 : 1),
                        success: function(a) {
                            console.log(a), 1 == a.data.status && (wx.showToast({
                                title: (t.is_dredge ? "开通" : t.is_upgrade ? "升级" : "续时") + "成功",
                                icon: "success",
                                duration: 2e3
                            }), n.loadlist());
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, "", !0);
                },
                requestPayment: function(t) {
                    var n = this;
                    wx.showNavigationBarLoading(), o.wx_pay(function(t) {
                        var a = t.data;
                        wx.requestPayment({
                            timeStamp: a.timeStamp.toString(),
                            nonceStr: a.nonceStr,
                            package: a.package,
                            signType: "MD5",
                            paySign: a.paySign,
                            success: function(t) {
                                console.log(t), wx.showToast({
                                    title: "支付成功",
                                    icon: "success",
                                    duration: 2e3
                                }), n.loadlist();
                            },
                            fail: function(t) {
                                "requestPayment:fail cancel" != t.errMsg && wx.showModal({
                                    content: "支付失败",
                                    showCancel: !1
                                });
                            }
                        }), wx.hideNavigationBarLoading();
                    }, t.orderno, t.title, t.pay_amount, 53, 0, "", "gzh2_wxpay", t.cardtype, t.use);
                },
                payroll: function() {
                    wx.navigateTo({
                        url: "payroll/payroll"
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
    9609: function(t, n, a) {
        "use strict";
        a.r(n);
        var e = a("55ce"), o = a("e815");
        for (var i in o) "default" !== i && function(t) {
            a.d(n, t, function() {
                return o[t];
            });
        }(i);
        a("4b87");
        var s = a("f0c5"), c = Object(s.a)(o.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = c.exports;
    },
    bb0f: function(t, n, a) {},
    e815: function(t, n, a) {
        "use strict";
        a.r(n);
        var e = a("6ab6"), o = a.n(e);
        for (var i in e) "default" !== i && function(t) {
            a.d(n, t, function() {
                return e[t];
            });
        }(i);
        n.default = o.a;
    }
}, [ [ "1973", "common/runtime", "common/vendor" ] ] ]);