(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/exp/exp" ], {
    "0b2b": function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("41e8"), n = a("a4af");
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        a("82af");
        var s = a("f0c5"), d = Object(s.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = d.exports;
    },
    "41e8": function(t, e, a) {
        "use strict";
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {
            return o;
        });
        var o = {
            navigationTop: function() {
                return a.e("components/navigation-top/navigation-top").then(a.bind(null, "532f"));
            }
        }, n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.tools.toFixed(100 * (1 - (t.next_grade_exp - t.exp) / (t.next_grade_exp - t.now_grade_exp)))), a = t.tools.randomNum(0, 75), o = t.tools.randomNum(-10, 30), n = t.tools.randomNum(0, 50), i = t.tools.randomNum(-30, 30), s = t.tools.randomNum(0, 75), d = t.tools.randomNum(-30, 30), l = t.tools.toFixed(100 * (t.vip_info.bs - 1), 2), u = t.tools.randomNum(-55, 20), r = t.tools.randomNum(-10, 30), c = t.tools.randomNum(-20, 20), _ = t.tools.randomNum(-30, 30), p = t.tools.randomNum(-55, 20), f = t.tools.randomNum(-30, 30);
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: e,
                    g1: a,
                    g2: o,
                    g3: n,
                    g4: i,
                    g5: s,
                    g6: d,
                    g7: l,
                    g8: u,
                    g9: r,
                    g10: c,
                    g11: _,
                    g12: p,
                    g13: f
                }
            });
        }, i = [];
    },
    "82af": function(t, e, a) {
        "use strict";
        var o = a("ac85");
        a.n(o).a;
    },
    "8ce6": function(t, e, a) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("e7dc"), e(a("66fd")), t(e(a("0b2b")).default);
        }).call(this, a("543d").createPage);
    },
    a4af: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("d265"), n = a.n(o);
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = n.a;
    },
    ac85: function(t, e, a) {},
    d265: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = a("aca8"), n = (a("81c6"), a("e634")), i = null, s = !1, d = {
            data: function() {
                return {
                    navigationdata: {},
                    check_index: 1,
                    exp_draw_list: null,
                    today_total_exp_add: "",
                    total_surplus_exp: "",
                    exp_list: "",
                    goods_list: "",
                    last_start: "",
                    no_more: 0,
                    no_data: 0,
                    surplus_exp: null,
                    next_grade_exp: null,
                    now_grade_exp: null,
                    exp: null,
                    title: null,
                    grade: null,
                    today_exp: null,
                    vip_info: null,
                    orderno: null,
                    ad: {},
                    bs: ""
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                getApp().globalData.setNavigationBarTitle(this, "星星俱乐部"), getApp().globalData.setNavigationToIndex(this);
                var e = this;
                this.ddk_top_goods_list_query(0), wx.getSetting({
                    success: function(t) {
                        e.scope_werun = t.authSetting["scope.werun"] ? 1 : 0, e.get_user_info(function() {
                            e.exp_draw_listFun();
                        });
                    }
                }), 1044 == getApp().globalData.options.scene && getApp().globalData.options.shareTicket && (console.log(getApp().globalData.options), 
                getApp().globalData.options.query.func && wx.getShareInfo({
                    shareTicket: getApp().globalData.options.shareTicket,
                    success: function(t) {
                        console.log(t), e[getApp().globalData.options.query.func](t, getApp().globalData.options.query.uuid);
                    }
                }));
            },
            onReady: function() {},
            onShow: function() {
                var t = this;
                t.pageShow || (t.pageShow = !0, getApp().globalData.loadAd(this, function() {
                    console.log(getApp().globalData.ad.adUnitId_3, getApp().globalData.interstitialAd), 
                    t.ad.adVideo_3 && wx.createRewardedVideoAd && ((i = wx.createRewardedVideoAd({
                        adUnitId: t.ad.adVideo_3
                    })).onError(function(t) {
                        console.log(t);
                    }), i.onClose(function(e) {
                        e && e.isEnded || void 0 === e ? (console.log("正常播放结束，下发奖励"), n.request({
                            url: o.watch_video_daily,
                            data: n.addSid({}),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log(e), 1 == e.data.status && (t.get_user_info(), t.exp_draw_list[t.watch_video_daily_index].exp = 0, 
                                t.setData({
                                    exp_draw_list: t.exp_draw_list
                                }));
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }, t, 1)) : (console.log("播放中途退出，进行提示"), wx.showToast({
                            title: "要观看完视频才有奖励哦~",
                            icon: "none"
                        }));
                    }));
                }));
            },
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {
                this.get_user_info();
            },
            onReachBottom: function() {
                1 == this.check_index && this.ddk_top_goods_list_query(this.last_start, 2);
            },
            onShareAppMessage: function(t) {
                return "button" === t.from && wx.updateShareMenu({
                    withShareTicket: !0
                }), n.ShareAppMessage(t, "星星俱乐部", "pages/mind/exp/exp", {
                    func: t.target.dataset.func
                }, function() {}, "");
            },
            methods: {
                tapShareAppMessage: function(t) {},
                ShareAppMessage: function(t) {
                    return "button" === t.from && wx.updateShareMenu({
                        withShareTicket: !0
                    }), n.ShareAppMessage(t, "星星俱乐部", "pages/mind/exp/exp", {
                        func: t.target.dataset.func
                    }, function() {}, "");
                },
                min_exp_item_tap: function(t) {
                    this[t.currentTarget.dataset.tap](t);
                },
                save_user_info: function(t) {
                    var e = this;
                    e.get_user_info(function() {
                        e.exp_draw_listFun();
                    });
                },
                excellent_grade_exp: function(t) {
                    var e = this;
                    t.currentTarget.dataset.index, n.request({
                        url: o.excellent_grade_exp,
                        data: n.addSid({}),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status && e.get_user_info(function() {
                                e.exp_draw_listFun();
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, e, 1);
                },
                attendance_detail: function() {
                    wx.showToast({
                        title: "连续签7日可获得666星星",
                        icon: "none"
                    });
                },
                next_excellent_grade_exp: function() {
                    wx.showToast({
                        title: "未达到目标等级，加油哦~",
                        icon: "none"
                    });
                },
                daily_attendance: function(t) {
                    var e = this;
                    t.currentTarget.dataset.index, n.request({
                        url: o.daily_attendance,
                        data: n.addSid({}),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status && (e.get_user_info(function() {
                                e.exp_draw_listFun();
                            }), e.show_adUnitId());
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, e, 1);
                },
                share_group_user_daily: function(t, e) {
                    n.request({
                        url: o.share_group_user_daily,
                        data: n.addSid({
                            encryptedData: t.encryptedData,
                            iv: t.iv,
                            friend_uuid: e
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            t.data.status;
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 1);
                },
                watch_video_daily: function(t) {
                    var e = this, a = t.currentTarget.dataset.index;
                    e.watch_video_daily_index = a, this.ad.adVideo_3 && 1 != e.hide_ad || (s = !0), 
                    0 != s ? (s = !1, n.request({
                        url: o.watch_video_daily,
                        data: n.addSid({}),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status && (e.get_user_info(), e.exp_draw_list[e.watch_video_daily_index].exp = 0, 
                            e.setData({
                                exp_draw_list: e.exp_draw_list
                            }));
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, e, 1)) : i && (console.log("激励视频 广告显示"), i.show().catch(function() {
                        i.load().then(function() {
                            return i.show();
                        }).catch(function(t) {
                            console.log("激励视频 广告显示失败"), s = !0, wx.showToast({
                                title: "幸运星降临~",
                                icon: "none"
                            });
                        });
                    }));
                },
                step_daily: function(t) {
                    var e = this, a = t.currentTarget.dataset.index;
                    n.request({
                        url: o.step_daily,
                        data: n.addSid({
                            encryptedData: e.encryptedData,
                            iv: e.iv
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status && (e.get_user_info(), e.exp_draw_list[a].exp = 0, 
                            e.setData({
                                exp_draw_list: e.exp_draw_list
                            }));
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, e, 1);
                },
                step_werun_auto: function(t) {
                    var e = this;
                    t.currentTarget.dataset.index, n.getUserWerun(function(t) {
                        t && wx.getWeRunData({
                            success: function(t) {
                                e.scope_werun = 1, e.encryptedData = t.encryptedData, e.iv = t.iv, n.request({
                                    url: o.step_werun_auto,
                                    data: n.addSid({}),
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        console.log(t), 1 == t.data.status && e.get_user_info(function() {
                                            e.exp_draw_listFun();
                                        });
                                    },
                                    fail: function(t) {
                                        console.log(t);
                                    }
                                }, e, 1);
                            }
                        });
                    });
                },
                goto_vip: function(t) {
                    wx.navigateTo({
                        url: "../vip/vip"
                    });
                },
                get_user_info: function(t) {
                    var e = this;
                    n.request({
                        url: o.get_user_info,
                        data: n.addSid({}),
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(a) {
                            if (1 == a.data.status) {
                                if (e.setData(a.data), e.scope_werun) return void wx.getWeRunData({
                                    success: function(a) {
                                        console.log(a), e.encryptedData = a.encryptedData, e.iv = a.iv, "function" == typeof t && t();
                                    }
                                });
                                "function" == typeof t && t();
                            }
                        },
                        fail: function(t) {
                            console.log(t);
                        },
                        complete: function() {
                            wx.stopPullDownRefresh();
                        }
                    }, e, 1);
                },
                exp_listFun: function(t) {
                    var e = this;
                    n.request({
                        url: t,
                        data: {},
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status && (t.data.today_total_exp_add > 0 && e.setData({
                                today_total_exp_add: t.data.today_total_exp_add
                            }), t.data.total_surplus_exp > 0 && e.setData({
                                total_surplus_exp: t.data.total_surplus_exp
                            }), e.setData({
                                exp_list: t.data.items
                            }));
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 1);
                },
                nav_checked: function(t) {
                    var e = t.currentTarget.dataset.index;
                    this.setData({
                        check_index: e
                    }), 0 == e && (this.exp_listFun(o.today_exp_list), this.show_adUnitId()), 1 == e && this.ddk_top_goods_list_query(0, this.sort), 
                    2 == e && (this.exp_listFun(o.donate_exp_list), this.show_adUnitId());
                },
                show_adUnitId: function() {
                    if (getApp().globalData.ad.adUnitId_3 && !getApp().globalData.interstitialAd) {
                        getApp().globalData.interstitialAd = !0;
                        var t = null;
                        wx.createInterstitialAd && (t = wx.createInterstitialAd({
                            adUnitId: getApp().globalData.ad.adUnitId_3
                        })), t && t.show().catch(function(t) {
                            console.error(t), getApp().globalData.interstitialAd = !1;
                        });
                    }
                },
                ddk_top_goods_list_query: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, a = this;
                    a.sort = e, n.request({
                        url: o.ddk_top_goods_list_query,
                        data: n.addSid({
                            start: t,
                            sort_type: e
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            if (console.log(e), 1 == e.data.status) {
                                var o = a.goods_list;
                                0 == t && (o = []), a.setData({
                                    goods_list: (o || []).concat(e.data.items),
                                    last_start: e.data.last_start
                                });
                            } else a.goods_list && a.goods_list.lenght > 0 ? a.setData({
                                no_more: 1,
                                no_data: 0
                            }) : a.setData({
                                no_data: 1,
                                no_more: 0
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, a, 2);
                },
                goto_grade: function(t) {
                    wx.navigateTo({
                        url: "../grade/grade"
                    });
                },
                exp_draw_listFun: function() {
                    var t = this;
                    n.request({
                        url: o.exp_draw_list,
                        data: n.addSid({
                            scope_werun: t.scope_werun,
                            encryptedData: t.encryptedData,
                            iv: t.iv
                        }),
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            1 == e.data.status && t.setData({
                                exp_draw_list: e.data.items
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 1);
                },
                setData: function(t) {
                    var e, a, o = this, n = [];
                    Object.keys(t).forEach(function(i) {
                        n = i.split("."), e = t[i], a = o.$data, n.forEach(function(t, i) {
                            i + 1 == n.length ? (a[t] === e && o.$set(a, t, {}), o.$set(a, t, e)) : a[t] || o.$set(a, t, {}), 
                            a = a[t];
                        });
                    });
                }
            }
        };
        e.default = d;
    }
}, [ [ "8ce6", "common/runtime", "common/vendor" ] ] ]);