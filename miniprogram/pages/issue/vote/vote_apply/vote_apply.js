(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/issue/vote/vote_apply/vote_apply" ], {
    "0abf": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("ce42"), i = e.n(n);
        for (var o in n) "default" !== o && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(o);
        a.default = i.a;
    },
    1059: function(t, a, e) {},
    "6c23": function(t, a, e) {
        "use strict";
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e7dc"), a(e("66fd")), t(a(e("f1e7")).default);
        }).call(this, e("543d").createPage);
    },
    8504: function(t, a, e) {
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
    },
    a795: function(t, a, e) {
        "use strict";
        var n = e("1059");
        e.n(n).a;
    },
    ce42: function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = e("aca8"), i = (e("042c"), e("81c6")), o = e("e634"), s = {
                data: function() {
                    return {
                        navigationdata: {},
                        state: "",
                        pageShow: !1,
                        id: "",
                        fail_reason: "",
                        orderno: "",
                        delta: "",
                        image: "",
                        genre: "",
                        value: "",
                        c_uuid: "",
                        hide_submit: 0,
                        apply_hint: "",
                        apply_phone: !1,
                        apply_hint_value: ""
                    };
                },
                components: {},
                props: {},
                onLoad: function(t) {
                    if (this.setData(t), i.navigate.get() && t.hide_submit) return getApp().globalData.setNavigationBarTitle(this, "参与信息"), 
                    this.setData(i.navigate.get()), void this.setData({
                        state: -2,
                        pageShow: !0
                    });
                    getApp().globalData.setNavigationBarTitle(this, "申请参与");
                    var a = this;
                    o.request({
                        url: n.detail_apply,
                        data: o.addSid({
                            type: this.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            console.log(t), 1 == t.data.status ? (a.setData(JSON.parse(t.data.json)), a.setData({
                                id: t.data.id,
                                fail_reason: t.data.fail_reason,
                                state: t.data.state,
                                pageShow: !0
                            }), 0 == t.data.state && getApp().globalData.setNavigationBarTitle(a, "审核中"), 1 == t.data.state && getApp().globalData.setNavigationBarTitle(a, "审核通过"), 
                            2 == t.data.state && getApp().globalData.setNavigationBarTitle(a, "审核失败"), -1 == t.data.state && getApp().globalData.setNavigationBarTitle(a, "审核失败了")) : a.setData({
                                pageShow: !0
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, a, 2);
                },
                onReady: function() {},
                onShow: function() {
                    var t = i.navigate.get(), a = this;
                    t && t.navigate_back && (i.navigate.clear(), "editor" == t.func && (a[t.key] = t.editorctx.delta, 
                    a.setData(a.$data), a[t.id].setContents({
                        delta: t.editorctx.delta
                    })), "chooseImage_config" == t.func && (a[t.key] = t.picture_choose_url, a.genre = t.picture_choose_genre, 
                    a.setData(a.$data)));
                },
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function() {},
                methods: {
                    abandon: function(t) {
                        var a = this;
                        t.currentTarget.dataset.index, wx.showModal({
                            content: "点击确认后将删除当前的投票记录,可重新报名。",
                            success: function(t) {
                                t.confirm && o.request({
                                    url: n.del_vote_item,
                                    data: o.signdata({
                                        orderno: a.orderno
                                    }),
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        console.log(t), 1 == t.data.status ? wx.reLaunch({
                                            url: "/pages/discovery/discovery?orderno=" + a.orderno
                                        }) : wx.showModal({
                                            content: t.data.msg,
                                            showCancel: !1
                                        });
                                    },
                                    fail: function(t) {
                                        console.log(t);
                                    }
                                }, a, 2);
                            }
                        });
                    },
                    save: function(t) {
                        var a = this;
                        if (this.$data.value && this.$data.image) {
                            if (this.$data.id) {
                                var e = n.update_apply, i = {
                                    json: JSON.stringify({
                                        value: this.$data.value,
                                        image: this.$data.image,
                                        delta: this.$data.delta,
                                        genre: this.$data.genre,
                                        apply_hint_value: this.$data.apply_hint_value || "",
                                        phone: this.$data.phone || ""
                                    }),
                                    id: this.$data.id
                                };
                                o.request({
                                    url: e,
                                    data: o.addSid(i),
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        if (console.log(t), 1 == t.data.status) {
                                            wx.showToast({
                                                title: "保存成功"
                                            }), a.$api.prePage().refreshList();
                                            var e = setTimeout(function() {
                                                clearTimeout(e), wx.navigateBack();
                                            }, 1e3);
                                        } else wx.showModal({
                                            content: t.data.msg,
                                            showCancel: !1
                                        });
                                    },
                                    fail: function(t) {
                                        console.log(t);
                                    }
                                }, this, 2);
                            }
                        } else wx.showModal({
                            content: "请填写完整数据在提交",
                            showCancel: !1
                        });
                    },
                    bindgetphonenumber: function(t) {
                        if ("" != t.detail.iv && "" != t.detail.encryptedData) {
                            var a = this;
                            o.request({
                                url: n.host + "/user_wx/wx_bind_phone",
                                data: o.addSid({
                                    wxPhoneIv: t.detail.iv,
                                    wxPhoneData: t.detail.encryptedData
                                }),
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    console.log(t), 1 == t.data.status && (a.setData({
                                        phone: t.data.phone
                                    }), a.apply());
                                },
                                fail: function(t) {
                                    console.log(t);
                                }
                            }, this, 1);
                        } else wx.showToast({
                            title: "失败了",
                            icon: "none"
                        });
                    },
                    apply: function(t) {
                        if (1 != this.state) if (o.subscribe_msg(), this.$data.value && this.$data.image) {
                            if (this.id) var a = n.update_apply, e = {
                                json: JSON.stringify({
                                    value: this.$data.value,
                                    image: this.$data.image,
                                    delta: this.$data.delta,
                                    genre: this.$data.genre,
                                    apply_hint_value: this.$data.apply_hint_value || "",
                                    phone: this.$data.phone || ""
                                }),
                                id: this.id
                            }; else a = n.add_apply, e = {
                                json: JSON.stringify({
                                    value: this.$data.value,
                                    image: this.$data.image,
                                    delta: this.$data.delta,
                                    genre: this.$data.genre,
                                    apply_hint_value: this.$data.apply_hint_value || "",
                                    phone: this.$data.phone || ""
                                }),
                                type: this.orderno,
                                c_uuid: this.c_uuid
                            };
                            o.request({
                                url: a,
                                data: o.addSid(e),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    if (console.log(t), 1 == t.data.status) {
                                        wx.showToast({
                                            title: "申请成功"
                                        });
                                        var a = setTimeout(function() {
                                            clearTimeout(a), wx.navigateBack();
                                        }, 1e3);
                                    } else wx.showModal({
                                        content: t.data.msg,
                                        showCancel: !1
                                    });
                                },
                                fail: function(t) {
                                    console.log(t);
                                }
                            }, this, 2);
                        } else wx.showModal({
                            content: "请填写完整数据在提交",
                            showCancel: !1
                        }); else this.abandon(t);
                    },
                    audioplay: function(t) {
                        o.audioplayid(t.target.id);
                    },
                    chooseImage_config: function(t) {
                        if (!this.hide_submit) {
                            var a = t.currentTarget.dataset.key;
                            wx.navigateTo({
                                url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&showAudio=1&showDocument=1&showVideo=1&func=chooseImage_config&key=" + a
                            });
                        }
                    },
                    config_input: function(t) {
                        this[t.currentTarget.dataset.key] = t.detail.value, this.setData(this.$data);
                    },
                    goto_editor: function(t) {
                        i.navigate.to("/common/editor/editor?navigate_back=1&id=" + t.currentTarget.id + "&func=" + t.currentTarget.dataset.func + "&key=" + t.currentTarget.dataset.key + "&index=" + t.currentTarget.dataset.index + "&list=" + t.currentTarget.dataset.items, {
                            delta: t.currentTarget.dataset.delta || ""
                        });
                    },
                    onEditorReady: function(a) {
                        var e = this, n = a.currentTarget.id;
                        a.currentTarget.dataset.index, t.createSelectorQuery().in(this).select("#" + n).context(function(t) {
                            e[n] = t.context, a.currentTarget.dataset.delta && e[n].setContents({
                                delta: a.currentTarget.dataset.delta
                            });
                        }).exec();
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
    f1e7: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("8504"), i = e("0abf");
        for (var o in i) "default" !== o && function(t) {
            e.d(a, t, function() {
                return i[t];
            });
        }(o);
        e("a795");
        var s = e("f0c5"), d = Object(s.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = d.exports;
    }
}, [ [ "6c23", "common/runtime", "common/vendor" ] ] ]);