(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/wechat_group/wechat_group" ], {
    "1f9d": function(t, e, n) {
        "use strict";
        var a = n("3d9a");
        n.n(a).a;
    },
    3210: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = n("aca8"), o = n("81c6"), i = n("e634"), s = (getApp().globalData, {
            data: function() {
                return {
                    navigationdata: {},
                    manage: 0,
                    groups: "",
                    uuid: "",
                    options: {}
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                if (this.setData(t), getApp().globalData.setNavigationBarTitle(this, "我的微信群"), this.options = t, 
                console.log(t, getApp().globalData.options), t.uuid) {
                    if (t.uuid != i.returnuuid()) return void wx.reLaunch({
                        url: "/pages/issue/issue"
                    });
                    if (1044 == getApp().globalData.options.scene && getApp().globalData.options.shareTicket) {
                        console.log(getApp().globalData.options);
                        var e = this;
                        wx.getShareInfo({
                            shareTicket: getApp().globalData.options.shareTicket,
                            success: function(t) {
                                i.request({
                                    url: a.add_wechat_group_id,
                                    data: i.addSid({
                                        encryptedData: t.encryptedData,
                                        iv: t.iv
                                    }),
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        1 == t.data.status && e.get_wechat_group_list();
                                    },
                                    fail: function(t) {
                                        console.log(t);
                                    }
                                }, e, 1);
                            }
                        });
                    } else wx.showModal({
                        content: "请在微信群聊天框的分享卡打开小程序,单人聊天框打开无效。",
                        showCancel: !1
                    });
                } else this.get_wechat_group_list();
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {},
            onShareAppMessage: function(t) {
                return wx.updateShareMenu({
                    withShareTicket: !0
                }), i.ShareAppMessage(t, "", "pages/mind/wechat_group/wechat_group", this.options, function() {}, "https://api.173zb.com/vote/api/static/images/logo.png");
            },
            methods: {
                del_wechat_group_id: function(t) {
                    var e = this;
                    wx.showModal({
                        content: "确认删除",
                        success: function(n) {
                            n.confirm && i.request({
                                url: a.del_wechat_group_id,
                                data: i.addSid({
                                    id: t.currentTarget.dataset.id
                                }),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    1 == t.data.status && e.get_wechat_group_list();
                                },
                                fail: function(t) {
                                    console.log(t);
                                }
                            }, e, 1);
                        }
                    });
                },
                get_wechat_group_list: function() {
                    var t = this;
                    i.request({
                        url: a.get_wechat_group_list,
                        data: i.addSid({}),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            1 == e.data.status && t.setData({
                                groups: e.data.items
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, t, 1);
                },
                select_group: function(t) {
                    this.manage || (this.options.opengid = t.currentTarget.dataset.opengid, 1 == this.navigationdata.navindexs ? o.navigate.redirectTo(function() {
                        var t = o.session.get("last_page_options");
                        if (t) e = t.last_page_path + "?1=1", delete t.last_page_path; else {
                            t = {
                                issue: 1,
                                create: 1
                            };
                            var e = "/pages/issue/vote/vote?1=1";
                        }
                        return Object.keys(t).forEach(function(n) {
                            "uuid" != n && (e += "&" + n + "=" + t[n] || !1);
                        }), e;
                    }(), this.options) : o.navigate.back(1, this.options));
                },
                setData: function(t) {
                    var e, n, a = this, o = [];
                    Object.keys(t).forEach(function(i) {
                        o = i.split("."), e = t[i], n = a.$data, o.forEach(function(t, i) {
                            i + 1 == o.length ? (n[t] === e && a.$set(n, t, {}), a.$set(n, t, e)) : n[t] || a.$set(n, t, {}), 
                            n = n[t];
                        });
                    });
                }
            }
        });
        e.default = s;
    },
    "3d9a": function(t, e, n) {},
    "66e6": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("831a"), o = n("d459");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("1f9d");
        var s = n("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    8175: function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("e7dc"), e(n("66fd")), t(e(n("66e6")).default);
        }).call(this, n("543d").createPage);
    },
    "831a": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            navigationTop: function() {
                return n.e("components/navigation-top/navigation-top").then(n.bind(null, "532f"));
            }
        }, o = function() {
            var t = this;
            t.$createElement, t._self._c, t._isMounted || (t.e0 = function(e) {
                t.pages[0].type;
            });
        }, i = [];
    },
    d459: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("3210"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    }
}, [ [ "8175", "common/runtime", "common/vendor" ] ] ]);