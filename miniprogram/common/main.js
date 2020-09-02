(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    3068: function(t, e, n) {},
    3122: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("4f9c");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("ae16");
        var i = n("f0c5"), r = Object(i.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        e.default = r.exports;
    },
    "4f9c": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("57ad"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    "57ad": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(n("a34a")), a = n("2f62");
            function i(t, e, n, o, a, i, r) {
                try {
                    var s = t[i](r), c = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(c) : Promise.resolve(c).then(o, a);
            }
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach(function(e) {
                        c(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function c(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var u = {}, l = n("4aa8"), d = {
                onLaunch: function(t) {
                    console.log("App Launch"), this.loaddata(t), this.setState({
                        options: t
                    });
                },
                onShow: function(e) {
                    console.log("App onShow", e);
                    var n = this;
                    n.pageshow ? n.globalData.options = e : n.pageshow = !0, n.hide_time && new Date().getTime() / 1e3 - n.hide_time > 60 && (n.interstitialAd = !1), 
                    t.getClipboardData({
                        success: function(t) {
                            if (n.shibboleth != t.data) {
                                n.shibboleth = t.data;
                                var e = t.data.match(/@\!(.*?)!\@/);
                                e && e[1] && wx.request({
                                    url: "https://api.173zb.com/jiulku/api/index.php/order/short_shibboleth?shibboleth=" + e[1],
                                    success: function(t) {
                                        wx.showModal({
                                            title: "捕捉到口令",
                                            content: t.data.title,
                                            confirmText: "立即跳转",
                                            success: function(e) {
                                                e.confirm && (wx.showTabBar(), wx.reLaunch({
                                                    url: t.data.path
                                                }));
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                },
                onHide: function() {
                    console.log("App Hide"), this.hide_time = new Date().getTime() / 1e3;
                },
                globalData: s({
                    hasLogin: !1,
                    login_data: !1,
                    first_login: !1,
                    sys: "",
                    isfingerPrint: !1,
                    system: {},
                    options: {}
                }, {
                    setIncreases: function(t) {
                        t.setData({
                            navigationdata: {
                                Increases: this.system.statusBarHeight,
                                Increases1: this.system.statusBarHeight1,
                                navindexs: getCurrentPages().length
                            }
                        });
                    },
                    setNavigationBarTitle: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#000", i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "255,255,255";
                        e.length > 12 && (e = e.substr(0, 12) + "...");
                        var r, s = (r = !!wx.getMenuButtonBoundingClientRect) ? wx.getMenuButtonBoundingClientRect() : null, c = !!(this.system.system.toLowerCase().search("ios") + 1);
                        t.setData({
                            navigationdata: {
                                ios: c,
                                statusBarHeight: this.system.statusBarHeight,
                                innerWidth: r ? "width:" + s.left + "px" : "",
                                innerPaddingRight: r ? "padding-right:" + (this.system.windowWidth - s.left) + "px" : "",
                                leftWidth: r ? "width:" + (this.system.windowWidth - s.left) + "px" : "",
                                title: e,
                                navindexs: getCurrentPages().length,
                                loading: !1,
                                show: n,
                                background: o,
                                color: a,
                                rgb: i,
                                Increases: this.system.statusBarHeight,
                                Increases1: this.system.statusBarHeight1
                            }
                        });
                    },
                    showNavigationBarLoading: function(t) {
                        var e = t.$data;
                        e.navigationdata && (e.navigationdata.loading = !0), t.setData(e);
                    },
                    hideNavigationBarLoading: function(t) {
                        var e = t.$data;
                        e.navigationdata && (e.navigationdata.loading = !1), t.setData(e);
                    },
                    setNavigationBarColor: function(t, e) {
                        var n = t.$data;
                        n.navigationdata.navcolor = e, t.setData(n);
                    },
                    setNavigationBartap: function(t, e) {
                        var n = t.$data;
                        n.navigationdata.navigatortap = e, t.setData(n);
                    },
                    setreLaunchtap: function(t, e) {
                        var n = t.$data;
                        n.navigationdata.reLaunchtap = e, t.setData(n);
                    },
                    setNavigationToIndex: function(t) {
                        var e = t.$data;
                        e.navigationdata.navtoindexs = !0, t.setData(e);
                    },
                    loadAd: function(t, e) {
                        var n = this;
                        n.ad ? (l.get() && 1 == l.get().vip_user && (n.ad = {}), t.setData({
                            ad: n.ad
                        }), "function" == typeof e && e()) : wx.request({
                            url: "https://api.173zb.com/jiulku/api/static/json/ad/tppx.json",
                            success: function(o) {
                                n.ad = {
                                    iver: o.data.iver
                                }, n.ad = o.data, l.get() && 1 == l.get().vip_user && (n.ad = {}), t.setData({
                                    ad: n.ad
                                }), "function" == typeof e && e();
                            }
                        });
                    },
                    getSystem: function() {
                        return "";
                    },
                    system: function() {
                        return u;
                    },
                    getUserInfo: function(t) {
                        var e = this;
                        this.globalData.userInfo ? "function" == typeof t && t(this.globalData.userInfo) : wx.login({
                            success: function() {
                                wx.getUserInfo({
                                    lang: "zh_CN",
                                    success: function(n) {
                                        e.loginUser && (e.loginUser.nickname && (n.userInfo.nickName = e.loginUser.nickname), 
                                        e.loginUser.intro && (n.userInfo.intro = e.loginUser.intro), e.loginUser.head_url && (n.userInfo.avatarUrl = e.loginUser.head_url), 
                                        e.loginUser.bind_phone && (n.userInfo.bind_phone = e.loginUser.bind_phone)), e.globalData.userInfo = n.userInfo, 
                                        e.globalData.userInfo.sex = 1 == n.userInfo.gender ? "男" : 2 == n.userInfo.gender ? "女" : "保密", 
                                        "function" == typeof t && t(e.globalData.userInfo);
                                    }
                                });
                            }
                        });
                    },
                    getUserOpenId: function(t) {
                        var e = this;
                        e.globalData.openid ? t(null, e.globalData.openid) : wx.login({
                            success: function(n) {
                                wx.request({
                                    url: openIdUrl,
                                    data: {
                                        code: n.code
                                    },
                                    success: function(n) {
                                        console.log("拉取openid成功", n), e.globalData.openid = n.data.openid, t(null, e.globalData.openid);
                                    },
                                    fail: function(e) {
                                        console.log("拉取用户openid失败，将无法正常使用开放接口等服务", e), t(e);
                                    }
                                });
                            },
                            fail: function(e) {
                                console.log("wx.login 接口调用失败，将无法正常使用开放接口等服务", e), t(e);
                            }
                        });
                    },
                    fingerprint: function(t) {
                        if (!this.isfingerPrint) return console.log("不支持指纹"), void t(!0);
                        wx.checkIsSoterEnrolledInDevice({
                            checkAuthMode: "fingerPrint",
                            success: function(e) {
                                if (1 == e.isEnrolled) wx.startSoterAuthentication({
                                    requestAuthModes: [ "fingerPrint" ],
                                    challenge: "www.51buydd.com",
                                    authContent: "请用指纹",
                                    success: function(e) {
                                        console.log("识别成功", e), t(!0);
                                    },
                                    fail: function(e) {
                                        if (console.log("识别失败", e), 90011 === e.errCode) return console.log("用户越狱无法获取录入指纹信息"), 
                                        void t(!0);
                                        t(!1);
                                    }
                                }); else if (0 == e.isEnrolled) return console.log("用户没有录入指纹"), void t(!0);
                            },
                            fail: function(t) {
                                function e(e) {
                                    return t.apply(this, arguments);
                                }
                                return e.toString = function() {
                                    return t.toString();
                                }, e;
                            }(function(e) {
                                console.log(fail), t(!1);
                            })
                        });
                    },
                    promise: {
                        getDeviceInfo: function() {
                            return new Promise(function(t, e) {
                                wx.getSystemInfo({
                                    success: function(e) {
                                        t(e);
                                    },
                                    fail: function() {
                                        e();
                                    }
                                });
                            });
                        }
                    },
                    interval_click: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 800, n = this;
                        n.interval_click_time = new Date().getTime();
                        var o = setTimeout(function() {
                            new Date().getTime() - n.interval_click_time > .99 * e && (t(), clearTimeout(o));
                        }, e);
                    },
                    getGid: function() {
                        var t = 0;
                        return function() {
                            return ++t;
                        };
                    }()
                }),
                methods: s(s({}, (0, a.mapMutations)([ "setState" ])), {}, {
                    loaddata: function(t) {
                        var e = this;
                        return function(t) {
                            return function() {
                                var e = this, n = arguments;
                                return new Promise(function(o, a) {
                                    var r = t.apply(e, n);
                                    function s(t) {
                                        i(r, o, a, s, c, "next", t);
                                    }
                                    function c(t) {
                                        i(r, o, a, s, c, "throw", t);
                                    }
                                    s(void 0);
                                });
                            };
                        }(o.default.mark(function t() {
                            var n, a, i;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return n = e, t.next = 3, e.$api.getDeviceInfo();

                                  case 3:
                                    e.deviceInfo = t.sent, e.deviceInfo && (-1 != (a = e.deviceInfo).system.indexOf("iOS") ? -1 != a.model.indexOf("iPhone X") || a.screenWidth <= 360 ? a.statusBarHeight = a.statusBarHeight + 10 : a.screenWidth <= 375 ? a.statusBarHeight = a.statusBarHeight - 12 : a.screenWidth <= 414 ? a.statusBarHeight = a.statusBarHeight - 20 : a.statusBarHeight = a.statusBarHeight - 25 : -1 != a.system.indexOf("Android") && (a.screenWidth <= 320 ? a.statusBarHeight = a.statusBarHeight + 20 : a.screenWidth <= 411 ? a.statusBarHeight = a.statusBarHeight - 15 : a.screenWidth <= 412 ? a.statusBarHeight = a.statusBarHeight - 16 : a.statusBarHeight = a.statusBarHeight - 20)), 
                                    wx.checkIsSupportSoterAuthentication({
                                        success: function(t) {
                                            for (var e in console.log(t), t.supportMode) "fingerPrint" == t.supportMode[e] ? (console.log("支持指纹识别", t.supportMode[e]), 
                                            n.isfingerPrint = !0) : "facial" == t.supportMode[e] && console.log("支持人脸识别", t.supportMode[e]);
                                        },
                                        fail: function(t) {
                                            console.log(t);
                                        }
                                    }), (i = wx.getUpdateManager()).onCheckForUpdate(function(t) {
                                        console.log(t.hasUpdate);
                                    }), i.onUpdateReady(function() {
                                        wx.showModal({
                                            title: "更新提示",
                                            content: "新版本已经准备好，是否重启应用？",
                                            success: function(t) {
                                                t.confirm && i.applyUpdate();
                                            }
                                        });
                                    }), i.onUpdateFailed(function() {}), wx.request({
                                        url: "https://api.173zb.com/jiulku/api/static/json/ad/tppx.json",
                                        success: function(t) {
                                            n.ad = t.data, l.get() && 1 == l.get().vip_user && (n.ad = {}), t.data.gh_id && (getApp().globalData.gh_id = t.data.gh_id), 
                                            t.data.kefu_id && (getApp().globalData.kefu_id = t.data.kefu_id);
                                        }
                                    });

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                })
            };
            e.default = d;
        }).call(this, n("543d").default);
    },
    a38d: function(t, e, n) {
        "use strict";
        (function(t, e) {
            n("e7dc");
            var o = c(n("66fd")), a = c(n("397d")), i = c(n("3122")), r = c(n("d74b")), s = c(n("81c6"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function(e) {
                        d(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function d(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            o.default.component("min_ball", function() {
                Promise.all([ n.e("common/vendor"), n.e("components/min_ball") ]).then(function() {
                    return resolve(n("0385"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("auth", function() {
                Promise.all([ n.e("common/vendor"), n.e("components/auth") ]).then(function() {
                    return resolve(n("67b4"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("navigation-top", function() {
                n.e("components/navigation-top/navigation-top").then(function() {
                    return resolve(n("532f"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("navBox", function() {
                n.e("components/nav-box").then(function() {
                    return resolve(n("1c94"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("scroll_x", function() {
                n.e("components/scroll_x").then(function() {
                    return resolve(n("5f1d"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("commodity-box", function() {
                n.e("components/Commodity-box").then(function() {
                    return resolve(n("4ff9"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("modelList", function() {
                n.e("components/model-list").then(function() {
                    return resolve(n("6691"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("msgbox", function() {
                n.e("components/msgBox").then(function() {
                    return resolve(n("0d0a"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("comment_list", function() {
                n.e("components/comment_list").then(function() {
                    return resolve(n("eb53"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("add_exp", function() {
                n.e("components/add_exp").then(function() {
                    return resolve(n("d309"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("hintBox", function() {
                n.e("components/hint-box").then(function() {
                    return resolve(n("4abd"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("audioEx", function() {
                n.e("components/audioEx/audioEx").then(function() {
                    return resolve(n("c1f1"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.component("videoEx", function() {
                n.e("components/videoEx/videoEx").then(function() {
                    return resolve(n("623b"));
                }.bind(null, n)).catch(n.oe);
            }), o.default.prototype.tools = r.default, o.default.prototype.$fire = new o.default(), 
            o.default.prototype.$api = l({
                getDeviceInfo: function() {
                    return new Promise(function(t, e) {
                        wx.getSystemInfo({
                            success: function(e) {
                                t(e);
                            },
                            fail: function() {
                                e();
                            }
                        });
                    });
                },
                msg: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none";
                    !1 !== Boolean(e) && t.showToast({
                        title: e,
                        duration: n,
                        mask: o,
                        icon: a
                    });
                },
                prePage: function() {
                    var t = getCurrentPages();
                    return t[t.length - 2].$vm;
                }
            }, s.default), o.default.prototype.$store = a.default, o.default.config.productionTip = !1, 
            o.default.mixin({
                methods: {
                    show_hint: function(t) {
                        this.$refs.boxmsg.show_box_msg(t.currentTarget.dataset.hint);
                    },
                    setData: function(t, e) {
                        var n, o, a = this, i = [];
                        Object.keys(t).forEach(function(e) {
                            i = e.split("."), n = t[e], o = a.$data, i.forEach(function(t, e) {
                                e + 1 == i.length ? (o[t] === n && a.$set(o, t, {}), a.$set(o, t, n)) : o[t] || a.$set(o, t, {}), 
                                o = o[t];
                            });
                        }), e && e();
                    }
                }
            }), i.default.mpType = "app", e(new o.default(l({}, i.default))).$mount(), wx.getSystemInfo({
                success: function(t) {
                    console.log(t), t.statusBarHeight1 = .7 * t.statusBarHeight, getApp().globalData.system = t, 
                    getApp().globalData.commonParameters = {
                        app_os: t.platform.toLowerCase().search("ios") + 1 ? "ios" : "android",
                        app_id: "com.jiulku.yizhimao.tppx",
                        app_ver: "1.0.0.0"
                    };
                }
            }), setTimeout(function() {
                getApp().globalData.options = a.default.state.options;
            }, 200), getApp().globalData.gh_id = "gh_66702d6de7f8", getApp().globalData.kefu_id = "hzh2013bb";
        }).call(this, n("543d").default, n("543d").createApp);
    },
    ae16: function(t, e, n) {
        "use strict";
        var o = n("3068");
        n.n(o).a;
    }
}, [ [ "a38d", "common/runtime", "common/vendor" ] ] ]);