(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/manage/manage" ], {
    "0568": function(t, e, o) {
        "use strict";
        o.r(e);
        var a = o("3368"), n = o("44ec");
        for (var s in n) "default" !== s && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(s);
        o("217c");
        var r = o("f0c5"), i = Object(r.a)(n.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    1391: function(t, e, o) {},
    "217c": function(t, e, o) {
        "use strict";
        var a = o("1391");
        o.n(a).a;
    },
    3368: function(t, e, o) {
        "use strict";
        o.d(e, "b", function() {
            return a;
        }), o.d(e, "c", function() {
            return n;
        }), o.d(e, "a", function() {});
        var a = function() {
            this.$createElement, this._self._c;
        }, n = [];
    },
    "44ec": function(t, e, o) {
        "use strict";
        o.r(e);
        var a = o("9c25"), n = o.n(a);
        for (var s in a) "default" !== s && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(s);
        e.default = n.a;
    },
    "9c25": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = o("aca8"), n = o("81c6"), s = o("e634"), r = {
            data: function() {
                return {
                    rotate: "",
                    show_auth: 0,
                    navigationdata: {},
                    type_names: [ "问卷", "辩论", "投票" ],
                    type_runs: [ "采集", "辩论", "投票" ],
                    animationRotate: {},
                    rotateIndex: 0,
                    nav: {
                        color: "#268cdd",
                        check: 0,
                        items: [ "进行中", "已结束" ]
                    },
                    show_exp_bd: null,
                    order_list: null,
                    last_start: null,
                    empty: !1,
                    finish: !1,
                    pageShow: !1,
                    bindErweima: !1
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                getApp().globalData.setNavigationBarTitle(this, "发布管理", 0, "#f4f4f8"), "vote" == t.page && getApp().globalData.setNavigationToIndex(this), 
                this.nav.check = t.check || 0, this.bindErweima = t.bindErweima || 0, this.setData(this.$data), 
                this.options = t;
            },
            onReady: function() {
                var t = this;
                this.animation = wx.createAnimation({
                    duration: 1e3,
                    timingFunction: "linear"
                }), wx.getSetting({
                    success: function(e) {
                        e.authSetting["scope.userInfo"] ? t.get_order_list() : t.setData({
                            show_auth: 1
                        });
                    }
                });
            },
            onShow: function() {
                this.refreshList(), this.pageShow ? this.get_order_list(0, this.last_start) : this.setData({
                    pageShow: !0
                });
            },
            onHide: function() {
                this.stopRefresh();
            },
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {
                this.get_order_list(this.last_start);
            },
            methods: {
                vote_group: function(t) {
                    var e = this.$data.order_list[t.currentTarget.dataset.index];
                    n.navigate.to("/pages/issue/vote/vote_group/vote_group?title=" + e.title + "&orderno=" + e.orderno + "&image=" + e.top_image_url, {});
                },
                onGotUserInfo: function(t) {
                    this.setData({
                        show_auth: 0
                    }), this.get_order_list();
                },
                _bindErweima: function(t) {
                    var e = t.currentTarget.dataset.orderno;
                    s.request({
                        url: a.update_order_time,
                        data: s.addSid({
                            orderno: e
                        }),
                        success: function(t) {
                            1 == t.data.status ? wx.showModal({
                                content: "成功绑定",
                                showCancel: !1,
                                success: function() {
                                    wx.navigateBack();
                                }
                            }) : wx.showModal({
                                content: t.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 2);
                },
                next_exp_energize: function(t) {
                    var e = this;
                    t.detail.target.dataset.index, s.request({
                        url: a.next_exp_energize,
                        data: s.addSid({
                            orderno: t.detail.target.dataset.orderno,
                            hour: t.detail.value.exp_use_hour,
                            exp: t.detail.value.next_exp_energize
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(o) {
                            console.log(o), 1 == o.data.status ? (t.detail.value.exp_use_hour > 0 ? (wx.showModal({
                                title: "成功预约星星赋能",
                                content: "星星赋能将在下一个整点触发，触发后将在未来的" + t.detail.value.exp_use_hour + "个小时内，每个小时消耗" + t.detail.value.next_exp_energize + "星星，被赋能后将获得星能力将排名提升，并会将当前排名显示出来。",
                                showCancel: !1
                            }), e.get_order_list(0, e.last_start)) : wx.showModal({
                                content: "失去了星星赋能",
                                showCancel: !1
                            }), e.setData({
                                show_exp_bd: -1
                            })) : wx.showModal({
                                content: o.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 1);
                },
                relevance: function(t) {
                    t.currentTarget.dataset.orderno, s.request({
                        url: a.make_gzh_id_str,
                        data: s.addSid({
                            orderno: t.currentTarget.dataset.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status ? wx.showModal({
                                title: "公众号关联信息",
                                content: t.data.str,
                                confirmText: "复制",
                                cancelText: "查看指引",
                                success: function(e) {
                                    e.confirm ? wx.setClipboardData({
                                        data: t.data.str
                                    }) : wx.navigateTo({
                                        url: "/common/web_view/web_view?src=https://mp.weixin.qq.com/s/vkCPTjxQMqdmpawoP_iKTQ&title=数据星助手"
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
                    }, this, 2);
                },
                xingxing: function(t) {
                    var e = this, o = t.currentTarget.dataset.index;
                    o != e.show_exp_bd ? e.setData({
                        show_exp_bd: o
                    }) : e.setData({
                        show_exp_bd: -1
                    });
                },
                stop_open_collect: function(t) {
                    var e = this;
                    s.request({
                        url: a.stop_open_collect,
                        data: s.addSid({
                            orderno: t.currentTarget.dataset.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status ? e.get_order_list(0, e.last_start) : wx.showModal({
                                content: t.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 2);
                },
                open_collect: function(t) {
                    var e = this;
                    s.request({
                        url: a.open_collect,
                        data: s.addSid({
                            orderno: t.currentTarget.dataset.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status ? e.get_order_list(0, e.last_start) : wx.showModal({
                                content: t.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 2);
                },
                order_delete: function(t) {
                    var e = this;
                    wx.showModal({
                        content: "确认删除！",
                        success: function(o) {
                            o.confirm && s.request({
                                url: a.order_delete,
                                data: s.addSid({
                                    orderno: t.currentTarget.dataset.orderno
                                }),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    console.log(t), 1 == t.data.status ? e.get_order_list(0, e.last_start) : wx.showModal({
                                        content: t.data.msg,
                                        showCancel: !1
                                    });
                                },
                                fail: function(t) {
                                    console.log(t);
                                }
                            }, e, 2);
                        }
                    });
                },
                order_close: function(t) {
                    var e = this;
                    s.request({
                        url: a.order_close,
                        data: s.addSid({
                            orderno: t.currentTarget.dataset.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status ? e.get_order_list(0, e.last_start) : wx.showModal({
                                content: t.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 2);
                },
                order_recover: function(t) {
                    var e = this;
                    s.request({
                        url: a.order_recover,
                        data: s.addSid({
                            orderno: t.currentTarget.dataset.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status ? e.get_order_list(0, e.last_start) : wx.showModal({
                                content: t.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 2);
                },
                order_pause: function(t) {
                    var e = this;
                    s.request({
                        url: a.order_pause,
                        data: s.addSid({
                            orderno: t.currentTarget.dataset.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status ? e.get_order_list(0, e.last_start) : wx.showModal({
                                content: t.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 2);
                },
                get_order_list: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, o = this, n = this.order_list;
                    0 == t && (n = []), s.request({
                        url: a.order_list,
                        data: s.addSid({
                            type: o.nav.check,
                            start: t,
                            limit: e
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            1 == e.data.status ? (o.setData({
                                order_list: (n || []).concat(e.data.items),
                                last_start: e.data.last_start
                            }), o.setData({
                                empty: !1,
                                finish: !1
                            }), o.options && ("vote" == o.options.page && wx.navigateTo({
                                url: "/pages/issue/vote/vote?toBottom=1&orderno=" + o.options.orderno
                            }), o.options = null)) : 0 == t ? o.setData({
                                empty: !0,
                                order_list: []
                            }) : o.setData({
                                finish: !0
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 2);
                },
                navBoxTap: function(t) {
                    var e = this.nav;
                    t.currentTarget.dataset.index != e.check && (e.check = t.currentTarget.dataset.index, 
                    this.setData({
                        nav: e
                    }), this.get_order_list());
                },
                refreshList: function() {
                    this.timeInterval = setInterval(function() {
                        this.rotateIndex++, this.animation.rotate(120 * this.rotateIndex).step(), this.setData({
                            animationRotate: this.animation.export()
                        });
                    }.bind(this), 1e3);
                },
                stopRefresh: function() {
                    this.timeInterval > 0 && (clearInterval(this.timeInterval), this.timeInterval = 0);
                },
                setData: function(t, e) {
                    var o, a, n = this, s = [];
                    Object.keys(t).forEach(function(r) {
                        s = r.split("."), o = t[r], a = n.$data, s.forEach(function(t, r) {
                            r + 1 == s.length ? (a[t] === o && n.$set(a, t, {}), n.$set(a, t, o), "function" == typeof e && e()) : a[t] || n.$set(a, t, {}), 
                            a = a[t];
                        });
                    });
                }
            }
        };
        e.default = r;
    },
    c4dc: function(t, e, o) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("e7dc"), e(o("66fd")), t(e(o("0568")).default);
        }).call(this, o("543d").createPage);
    }
}, [ [ "c4dc", "common/runtime", "common/vendor" ] ] ]);