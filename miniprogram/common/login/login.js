(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/login/login" ], {
    "113a": function(n, t, e) {},
    2752: function(n, t, e) {
        "use strict";
        var o = e("113a");
        e.n(o).a;
    },
    "2cec": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("9d03"), a = e("ccad");
        for (var i in a) "default" !== i && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(i);
        e("2752");
        var l = e("f0c5"), c = Object(l.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    "9d03": function(n, t, e) {
        "use strict";
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return i;
        }), e.d(t, "a", function() {
            return o;
        });
        var o = {
            navigationTop: function() {
                return e.e("components/navigation-top/navigation-top").then(e.bind(null, "532f"));
            }
        }, a = function() {
            this.$createElement, this._self._c;
        }, i = [];
    },
    ccad: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("d151"), a = e.n(o);
        for (var i in o) "default" !== i && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(i);
        t.default = a.a;
    },
    d05b: function(n, t, e) {
        "use strict";
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("e7dc"), t(e("66fd")), n(t(e("2cec")).default);
        }).call(this, e("543d").createPage);
    },
    d151: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = e("aca8"), a = e("042c"), i = e("e634"), l = {
                components: {
                    uLink: function() {
                        e.e("common/web_view/uLink").then(function() {
                            return resolve(e("245c"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        navigationdata: {},
                        num: null,
                        loading: null,
                        phone: "",
                        phoneLen: !1,
                        merge_str: "获取验证码",
                        ad: {}
                    };
                },
                onReady: function() {},
                onLoad: function(t) {
                    var e = this;
                    getApp().globalData.loadAd(this), n.removeStorage({
                        key: "last_login_data"
                    }), getApp().globalData.setNavigationBarTitle(this, "欢迎使用投票活动评选", 0, "#fafafa"), 
                    getApp().globalData.wait_login = !0, 0 == getApp().globalData.first_login && n.showModal({
                        title: "用户须知",
                        content: "登陆代表同意条款最终用户协议（EULA）、隐私政策,并收授权使用您的账户信息（如昵称、头像、性别、地址）以便您统一管理。",
                        cancelText: "协议政策",
                        confirmText: "我知道了",
                        success: function(t) {
                            t.confirm ? (console.log(getApp().globalData), getApp().globalData.first_login = !0) : n.showActionSheet({
                                itemList: [ "查阅条款（EULA）", "查阅隐私政策" ],
                                success: function(n) {
                                    0 == n.tapIndex && e.$refs.link.openLink("http://h5.173zb.com/vote/agreement.html"), 
                                    1 == n.tapIndex && e.$refs.link.openLink("http://h5.173zb.com/privacy.html");
                                }
                            });
                        }
                    });
                },
                onUnload: function() {
                    getApp().globalData.beginlogin = !1;
                },
                methods: {
                    QQLogin: function() {
                        var t = this;
                        n.login({
                            provider: "qq",
                            success: function(e) {
                                n.getUserInfo({
                                    provider: "weixin",
                                    success: function(n) {
                                        getApp().globalData.login_data = n.userInfo, t.login();
                                    }
                                });
                            }
                        });
                    },
                    wechatLogin: function() {
                        var t = this;
                        n.login({
                            provider: "weixin",
                            success: function(e) {
                                n.getUserInfo({
                                    provider: "weixin",
                                    success: function(n) {
                                        getApp().globalData.login_data = n.userInfo, t.login();
                                    }
                                });
                            }
                        });
                    },
                    merge_submit: function(n) {
                        var t = n.detail.value.phone, e = n.detail.value.vcode;
                        if (t && e) {
                            var o = a(t);
                            getApp().globalData.login_data = {
                                userid: t,
                                vcode: e,
                                accid: o,
                                password: !1
                            }, this.login();
                        }
                    },
                    login: function() {
                        var n = this;
                        n.setData({
                            loading: !0
                        }), i.login_auto(function(t) {
                            if (console.log(t), n.setData({
                                loading: !1
                            }), t && 0 === t.status) return getApp().globalData.login_data = !1, void wx.showModal({
                                showCancel: !1,
                                content: t.msg
                            });
                            1 != getCurrentPages().length ? wx.navigateBack() : wx.reLaunch({
                                url: "/pages/issue/issue"
                            });
                        });
                    },
                    getVcode: function() {
                        var n = this, t = this.phone, e = this.num;
                        t && (Number(e) < 1 || !e) && (n.setData({
                            merge_str: "loading"
                        }), i.request({
                            url: o.send_vcode,
                            data: {
                                phone: t,
                                type: 4,
                                sign: a(t + "4asldfls**&#(#)dl10")
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                if (console.log(t), 1 === t.data.status) {
                                    n.setData({
                                        num: 60
                                    });
                                    var e = 59, o = setInterval(function() {
                                        e >= 0 ? (n.setData({
                                            num: e
                                        }), e--) : n.setData({
                                            merge_str: "重新获取"
                                        });
                                    }, 1e3);
                                    setTimeout(function() {
                                        clearInterval(o);
                                    }, 65e3);
                                } else wx.showModal({
                                    showCancel: !1,
                                    content: "每天最多获取8次！"
                                });
                            },
                            fail: function(n) {
                                console.log(n);
                            }
                        }));
                    },
                    bindinput: function(n) {
                        11 == n.detail.value.length ? !1 === this.phoneLen && this.setData({
                            phoneLen: !0,
                            phone: n.detail.value
                        }) : this.phoneLen && this.setData({
                            phoneLen: !1,
                            phone: 0
                        });
                    }
                }
            };
            t.default = l;
        }).call(this, e("543d").default);
    }
}, [ [ "d05b", "common/runtime", "common/vendor" ] ] ]);