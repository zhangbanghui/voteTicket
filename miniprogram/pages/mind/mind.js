(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/mind" ], {
    "3b83": function(t, a, e) {},
    4252: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("f6d7"), i = e.n(n);
        for (var o in n) "default" !== o && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(o);
        a.default = i.a;
    },
    6169: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("fa13"), i = e("4252");
        for (var o in i) "default" !== o && function(t) {
            e.d(a, t, function() {
                return i[t];
            });
        }(o);
        e("657a");
        var s = e("f0c5"), c = Object(s.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = c.exports;
    },
    "657a": function(t, a, e) {
        "use strict";
        var n = e("3b83");
        e.n(n).a;
    },
    de97: function(t, a, e) {
        "use strict";
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e7dc"), a(e("66fd")), t(a(e("6169")).default);
        }).call(this, e("543d").createPage);
    },
    f6d7: function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = e("aca8"), i = (e("042c"), e("81c6")), o = e("e634"), s = {
                data: function() {
                    return {
                        ad: {},
                        navigationdata: {},
                        q_s_q_items: [ {
                            url: "enshrine/enshrine",
                            title: "关注",
                            msg_content: "收藏、参与、足迹",
                            image: "/static/image/icon/mind_enshrine.png"
                        }, {
                            url: "pictureBase/pictureBase",
                            title: "图库",
                            msg_content: "图片、媒体、文档",
                            image: "/static/image/icon/mind_imgs.png"
                        }, {
                            url: "",
                            type: "contact",
                            title: "客服",
                            msg_content: "客服微信：" + getApp().globalData.kefu_id,
                            image: "https://api.173zb.com/jiulku/api/static/images/icon/kefu.png"
                        } ],
                        merge: !0,
                        userInfo: {},
                        hasUserInfo: !1,
                        canIUse: wx.canIUse("button.open-type.getUserInfo"),
                        NavigationBarTitleShow: !1,
                        attendance_info: "",
                        pageShow: !1,
                        NavigationBarTitle: "",
                        appAuto: !1,
                        show_auth: null,
                        avatarUrl: null,
                        head_url: null,
                        vip_info: "",
                        vip_grade: null,
                        no_vip_image: null,
                        title: null,
                        grade: null,
                        today_exp: null,
                        runing_qty: null,
                        finish_qty: null
                    };
                },
                components: {
                    vasPrompt: function() {
                        e.e("components/prompt/prompt").then(function() {
                            return resolve(e("4da1"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                props: {},
                onShow: function() {
                    getApp().globalData.lastpage = "mind", this.setData({
                        pageShow: !0
                    }), this.load_login_state();
                },
                onHide: function() {},
                onLoad: function(t) {
                    getApp().globalData.setNavigationBarTitle(this, ""), getApp().globalData.loadAd(this);
                },
                methods: {
                    load_login_state: function() {
                        var t = this;
                        getApp().globalData.hasLogin ? o.request({
                            url: n.get_user_info,
                            data: o.addSid({}),
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                1 == a.data.status && (t.setData(a.data), t.setData({
                                    NavigationBarTitle: a.data.nickname
                                }), t.get_tips());
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }, this, 1) : (console.log("校验是否绑定"), o.autologin(function(a) {
                            o.request({
                                url: n.get_user_info,
                                data: o.addSid({}),
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    1 == e.data.status && (t.setData(Object.assign(e.data, a)), t.setData({
                                        NavigationBarTitle: e.data.nickname
                                    }), t.get_tips());
                                },
                                fail: function(t) {
                                    console.log(t);
                                }
                            }, this, 1);
                        }, this));
                    },
                    goto_exp: function(t) {
                        wx.navigateTo({
                            url: "exp/exp"
                        });
                    },
                    goto_vip: function(t) {
                        wx.navigateTo({
                            url: "vip/vip"
                        });
                    },
                    goto_grade: function(t) {
                        wx.navigateTo({
                            url: "grade/grade"
                        });
                    },
                    erweima: function() {
                        this.get_erweima();
                    },
                    get_erweima: function() {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], a = this;
                        i.session.get("erweima_first_time") ? o.request({
                            url: n.mylist_share_image,
                            data: o.addSid({
                                page: "pages/discovery/discovery",
                                width: 1024,
                                check: t
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                if (1 == e.data.status) {
                                    if (t) return void wx.showModal({
                                        title: "唯一二维码",
                                        content: "(" + e.data.use_no + ")" + e.data.title,
                                        confirmText: "操作",
                                        success: function(t) {
                                            t.confirm && wx.showActionSheet({
                                                itemList: [ "查看二维码", "绑定任务" ],
                                                success: function(t) {
                                                    switch (a.coreItems, t.tapIndex) {
                                                      case 0:
                                                        a.get_erweima(0);
                                                        break;

                                                      case 1:
                                                        wx.navigateTo({
                                                            url: "manage/manage?check=0&bindErweima=1"
                                                        });
                                                    }
                                                }
                                            });
                                        }
                                    });
                                    if (t) return void wx.showModal({
                                        content: "还没有绑定任何任务！",
                                        confirmText: "绑定任务",
                                        success: function(t) {
                                            t.confirm && wx.navigateTo({
                                                url: "manage/manage?check=0&bindErweima=1"
                                            });
                                        }
                                    });
                                    wx.previewImage({
                                        urls: [ e.data.image ]
                                    });
                                }
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }, a, 2) : wx.showModal({
                            content: "用户唯一二维码,适用于需要固定二维码的用户用于特殊固定场景，需要使用的用户可长按图片保存到本地。",
                            showCancel: !1,
                            confirmText: "我知道了",
                            success: function() {
                                i.session.set("erweima_first_time", 1), a.get_erweima();
                            }
                        });
                    },
                    onPageScroll: function(t) {
                        t.scrollTop > 50 ? (this.NavigationBarTitleShow || getApp().globalData.setNavigationBarTitle(this, this.NavigationBarTitle), 
                        this.setData({
                            NavigationBarTitleShow: !0
                        })) : (this.NavigationBarTitleShow && getApp().globalData.setNavigationBarTitle(this, " "), 
                        this.setData({
                            NavigationBarTitleShow: !1
                        }));
                    },
                    get_tips: function(t) {
                        var a = this;
                        o.request({
                            url: n.order_tips,
                            data: o.addSid({}),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                console.log(t), 1 == t.data.status && a.setData(t.data);
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }), this.attendance_info || o.request({
                            url: n.attendance_detail,
                            data: o.addSid({}),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                console.log(t), 1 == t.data.status && t.data.allow_attendance && a.setData({
                                    attendance_info: t.data
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }, this, 2);
                    },
                    merge_tap: function() {
                        wx.navigateTo({
                            url: "regist/regist"
                        });
                    },
                    updateinfo: function() {
                        getApp().globalData.loginUser && i.navigate.to("details/details", this.userInfo);
                    },
                    saveFormId: function(t) {
                        o.savaFormId(t.detail.formId);
                    },
                    save_form_id: function(t) {
                        getApp().globalData.form_id = t.detail.formId;
                    },
                    onGotUserInfo: function(t) {
                        -1 != t.detail.errMsg.indexOf("ok") && (getApp().globalData.hasLogin = !1, o.clearlogin(), 
                        this.load_login_state(), this.setData({
                            appAuto: !0
                        }));
                    },
                    logout: function(t) {
                        this.merge && this.updateinfo();
                    },
                    confirm: function(t) {
                        var a = t.detail.value, e = t.detail.key;
                        this.$refs.prompt.hidePrompt(), "" != a && e ? (e.detail.value = a, this[e.func_](e)) : console.log("取消了");
                    },
                    cancel: function() {
                        this.$refs.prompt.hidePrompt();
                    },
                    update_user_name: function(t) {
                        var a = this;
                        o.request({
                            url: n.host + "/user/update_user_avatar",
                            data: o.addSid({
                                name: t.detail.value
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                console.log(t), 1 == t.data.status && a.setData({
                                    NavigationBarTitle: t.data.name
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }, this, 2);
                    },
                    session_clear: function() {
                        wx.showModal({
                            content: "确认清理本地缓存",
                            success: function() {
                                try {
                                    t.clearStorageSync(), this.$api.msg("ok"), wx.reLaunch({
                                        url: "/pages/issue/issue"
                                    });
                                } catch (t) {}
                            }
                        });
                    },
                    setData: function(t) {
                        var a, e, n = this, i = [];
                        Object.keys(t).forEach(function(o) {
                            i = o.split("."), a = t[o], e = n.$data, i.forEach(function(t, o) {
                                o + 1 == i.length ? (e[t] === a && n.$set(e, t, {}), n.$set(e, t, a)) : e[t] || n.$set(e, t, {}), 
                                e = e[t];
                            });
                        });
                    }
                }
            };
            a.default = s;
        }).call(this, e("543d").default);
    },
    fa13: function(t, a, e) {
        "use strict";
        e.d(a, "b", function() {
            return i;
        }), e.d(a, "c", function() {
            return o;
        }), e.d(a, "a", function() {
            return n;
        });
        var n = {
            navigationTop: function() {
                return e.e("components/navigation-top/navigation-top").then(e.bind(null, "532f"));
            }
        }, i = function() {
            this.$createElement, this._self._c;
        }, o = [];
    }
}, [ [ "de97", "common/runtime", "common/vendor" ] ] ]);