(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/issue/issue" ], {
    "31af": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("d476"), o = e("4524");
        for (var i in o) "default" !== i && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(i);
        e("8309");
        var s = e("f0c5"), r = Object(s.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = r.exports;
    },
    4398: function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = e("aca8"), o = e("81c6"), i = e("e634"), s = getApp({
                allowDefault: !0
            }), r = {
                data: function() {
                    return {
                        ad: {},
                        navigationdata: {},
                        guides: [],
                        guides1: [],
                        NavigationBarTitleShow: !1,
                        jieshao_image: "",
                        orderno: "",
                        rule: "",
                        show_add_exp: "",
                        pageShow: !1,
                        mp_links: "",
                        indicatorDots: !1,
                        autoplay: !0,
                        interval: 5e3,
                        duration: 1e3,
                        top_three_list: "",
                        later_list: "",
                        last_start: ""
                    };
                },
                components: {},
                props: {},
                onLoad: function(t) {
                    o.session.get("base_path") && (t.go_home ? o.session.clear("base_path") : wx.redirectTo({
                        url: o.session.get("base_path")
                    })), s.globalData.setNavigationBarTitle(this, "投票活动评选"), s.globalData.pageShow || (s.globalData.pageShow = !0);
                    var a = this;
                    wx.request({
                        url: n.host + "/order/mp_links?appid=" + s.globalData.commonParameters.appid,
                        success: function(t) {
                            1 == t.data.status && a.setData({
                                mp_links: t.data.items
                            });
                        }
                    }), i.request({
                        url: "https://api.jiulku.com/api/index.php/order/category_nav",
                        data: {
                            app_id: getApp().globalData.commonParameters.app_id
                        },
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            if (1 == t.data.status) {
                                for (var e = 0; e < t.data.items.length; e++) (t.data.items[e].url || t.data.items[e].appId) && (a.$data.guides.length < 3 ? a.$data.guides.push(t.data.items[e]) : a.$data.guides1.push(t.data.items[e]));
                                a.setData(a.$data);
                            }
                        }
                    });
                },
                onReady: function() {},
                onShow: function() {
                    var a = this;
                    t.showTabBar(), s.globalData.loadAd(this, function() {
                        if (a.pageShow) {
                            if (s.globalData.ad.adUnitId && !s.globalData.interstitialAd) {
                                s.globalData.interstitialAd = !0;
                                var t = null;
                                wx.createInterstitialAd && (t = wx.createInterstitialAd({
                                    adUnitId: s.globalData.ad.adUnitId
                                })), t && t.show().catch(function(t) {
                                    console.error(t), s.globalData.interstitialAd = !1;
                                });
                            }
                        } else a.setData({
                            pageShow: !0
                        });
                    }), a.load_all_list();
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.load_all_list(this.last_start);
                },
                onShareAppMessage: function() {},
                methods: {
                    miniProgramsuccess: function(t) {
                        i.request({
                            url: n.host + "/ad/log_miniProgram",
                            data: i.signdata({
                                appid: t.currentTarget.dataset.appid,
                                path: t.currentTarget.dataset.path,
                                state: 1
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            }
                        });
                    },
                    miniProgramfail: function(t) {
                        i.request({
                            url: n.host + "/ad/log_miniProgram",
                            data: i.signdata({
                                appid: t.currentTarget.dataset.appid,
                                path: t.currentTarget.dataset.path,
                                state: 0
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            }
                        });
                    },
                    _openStream: function(t) {
                        if ("android" == getApp().globalData.commonParameters.app_os) {
                            if (!t.currentTarget.dataset.android_url) return;
                        } else if ("ios" == getApp().globalData.commonParameters.app_os) {
                            var a = t.currentTarget.dataset.ios_id;
                            if (console.log(a), !a) return;
                        }
                    },
                    report_order: function(t) {
                        var a = [ "内容令人反感", "广告或者垃圾信息", "辱骂人生攻击", "有害信息（色情、不实、违法）", "内容未经授权", "其他" ], e = this;
                        wx.showActionSheet({
                            itemList: a,
                            success: function(s) {
                                i.request({
                                    url: n.host + "/order/report_order",
                                    data: {
                                        orderno: t,
                                        report_mag: a[s.tapIndex]
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        1 == t.data.status && wx.showModal({
                                            content: "举报成功，将在24小时内处理。",
                                            showCancel: !1,
                                            success: function() {
                                                var t = o.session.get("defriend_id_list") || [];
                                                t.push(this.$data.pages[0].admin_id), o.session.set("defriend_id_list", t), e.load_all_list();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    load_all_list: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, a = this;
                        i.request({
                            url: n.all_list,
                            data: i.addSid({
                                start: t
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                if (console.log(e), 1 == e.data.status) {
                                    var n = o.session.get("defriend_id_list") || [], i = a.top_three_list || [], s = a.later_list || [];
                                    0 == t && (i = [], s = []), e.data.items.forEach(function(a, e) {
                                        o.in_array(a.admin_id, n) || (0 == t && e < 3 ? i.push(a) : s.push(a));
                                    }), a.setData({
                                        top_three_list: i,
                                        later_list: s,
                                        last_start: e.data.last_start
                                    });
                                }
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    setData: function(t) {
                        var a, e, n = this, o = [];
                        Object.keys(t).forEach(function(i) {
                            o = i.split("."), a = t[i], e = n.$data, o.forEach(function(t, i) {
                                i + 1 == o.length ? (e[t] === a && n.$set(e, t, {}), n.$set(e, t, a)) : e[t] || n.$set(e, t, {}), 
                                e = e[t];
                            });
                        });
                    }
                }
            };
            a.default = r;
        }).call(this, e("543d").default);
    },
    4524: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("4398"), o = e.n(n);
        for (var i in n) "default" !== i && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(i);
        a.default = o.a;
    },
    8309: function(t, a, e) {
        "use strict";
        var n = e("c40e");
        e.n(n).a;
    },
    "8ab7": function(t, a, e) {
        "use strict";
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e7dc"), a(e("66fd")), t(a(e("31af")).default);
        }).call(this, e("543d").createPage);
    },
    c40e: function(t, a, e) {},
    d476: function(t, a, e) {
        "use strict";
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return i;
        }), e.d(a, "a", function() {
            return n;
        });
        var n = {
            navigationTop: function() {
                return e.e("components/navigation-top/navigation-top").then(e.bind(null, "532f"));
            }
        }, o = function() {
            this.$createElement, this._self._c;
        }, i = [];
    }
}, [ [ "8ab7", "common/runtime", "common/vendor" ] ] ]);