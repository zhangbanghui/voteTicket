(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/comment/comment" ], {
    "083a": function(t, e, n) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("e7dc"), e(n("66fd")), t(e(n("e463")).default);
        }).call(this, n("543d").createPage);
    },
    "0fcb": function(t, e, n) {
        "use strict";
        var o = n("77c1");
        n.n(o).a;
    },
    "510b": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
            navigationTop: function() {
                return n.e("components/navigation-top/navigation-top").then(n.bind(null, "532f"));
            }
        }, a = function() {
            this.$createElement, this._self._c;
        }, i = [];
    },
    "6d1f": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("ada6"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    "77c1": function(t, e, n) {},
    ada6: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("aca8"), a = n("81c6"), i = n("e634"), c = {
            data: function() {
                return {
                    navigationdata: {},
                    comments: {
                        items: [],
                        last_start: 0
                    },
                    LoadingShow: !1,
                    loadingEmpty: !1,
                    ReachBottomLoading: !1,
                    send_comment_value: "",
                    comment_reply: {}
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                getApp().globalData.setNavigationBarTitle(this, "全部评论");
                var e = a.navigate.get();
                this.setData(e), this.get_comment_list();
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {
                this.get_comment_list(0, this.comments.last_start, 1);
            },
            onReachBottom: function() {
                this.get_comment_list(this.comments.last_start);
            },
            onShareAppMessage: function() {},
            methods: {
                get_comment_list: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n = arguments.length > 2 ? arguments[2] : void 0, a = this, c = a.comments;
                    i.request({
                        url: o.get_comment,
                        data: i.addSid({
                            comment_id: this.comment_id,
                            comment_key: this.comment_key,
                            comment_tb: this.comment_tb,
                            start: t,
                            limit: e
                        }),
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            "object" != typeof c && (c = {
                                items: []
                            }), 1 == t.data.status ? (c.last_start = t.data.last_start, n && (c.items = []), 
                            t.data.items.forEach(function(t) {
                                t.reply_limit = 5, c.items.push(t);
                            }), a.setData({
                                comments: c
                            }), c.items.length >= e ? a.setData({
                                LoadingShow: !0,
                                loadingEmpty: !1
                            }) : 0 == c.items.length ? a.setData({
                                LoadingShow: !1,
                                loadingEmpty: !0
                            }) : a.setData({
                                LoadingShow: !1,
                                loadingEmpty: !1
                            })) : 0 == c.items.length ? a.setData({
                                loadingEmpty: !0
                            }) : a.setData({
                                ReachBottomLoading: !0,
                                loadingEmpty: !1
                            });
                        },
                        fail: function(t) {},
                        complete: function() {
                            wx.stopPullDownRefresh();
                        }
                    }, this, 1);
                },
                issue_comment: function(t) {
                    var e = t.detail.value, n = this;
                    i.request({
                        url: o.write_comment,
                        data: i.addSid({
                            content: e,
                            comment_id: this.comment_id,
                            comment_key: this.comment_key,
                            comment_tb: this.comment_tb
                        }),
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            1 == t.data.status ? (wx.showToast({
                                title: "评论成功",
                                icon: "success",
                                duration: 2e3
                            }), n.setData({
                                send_comment_value: ""
                            }), n.get_comment_list(0, n.comments.last_start || 20, !0)) : wx.showModal({
                                content: t.data.msg,
                                showCancel: 0
                            });
                        },
                        fail: function(t) {}
                    }, this, 1);
                },
                cancel_like_comment: function(t) {
                    var e = t.currentTarget.dataset.pjno, n = this;
                    i.request({
                        url: o.cancel_like_comment,
                        data: i.addSid({
                            pjno: e,
                            comment_id: this.comment_id,
                            comment_key: this.comment_key,
                            comment_tb: this.comment_tb
                        }),
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            if (1 == t.data.status) {
                                var o = n.comments;
                                o.items.forEach(function(t, n) {
                                    t.pjno == e && (o.items[n].is_like = 0, o.items[n].likeno -= 1);
                                }), n.setData({
                                    comments: o
                                });
                            }
                        },
                        fail: function(t) {}
                    }, this, 1);
                },
                like_comment: function(t) {
                    var e = t.currentTarget.dataset.pjno, n = this;
                    i.request({
                        url: o.like_comment,
                        data: i.addSid({
                            pjno: e,
                            comment_id: this.comment_id,
                            comment_key: this.comment_key,
                            comment_tb: this.comment_tb
                        }),
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            if (1 == t.data.status) {
                                var o = n.comments;
                                o.items.forEach(function(t, n) {
                                    t.pjno == e && (o.items[n].is_like = 1, o.items[n].likeno += 1);
                                }), n.setData({
                                    comments: o
                                });
                            }
                        },
                        fail: function(t) {}
                    }, this, 1);
                },
                popup_reply_comment: function(t) {
                    var e = t.currentTarget.dataset.pjno, n = t.currentTarget.dataset.receive_name, o = t.currentTarget.dataset.type, a = t.currentTarget.dataset.id;
                    this.setData({
                        comment_reply: {
                            pjno: e,
                            receive_name: n,
                            type: o,
                            reply: !0,
                            id: a,
                            placeholder: "回复：" + n,
                            focus: !0
                        }
                    });
                },
                comment_blur: function() {
                    console.log("失去焦点"), this.setData({
                        comment_reply: null,
                        send_comment_value: ""
                    });
                },
                reply_comment: function(t) {
                    if (t.currentTarget.dataset.replay) {
                        var e = t.detail.value, n = this, a = this.comment_reply.type;
                        i.request({
                            url: o.reply_comment,
                            data: i.addSid({
                                pjno: this.comment_reply.pjno,
                                type: a,
                                receive_name: this.comment_reply.receive_name,
                                content: e,
                                id: this.comment_reply.id,
                                comment_id: this.comment_id,
                                comment_key: this.comment_key,
                                comment_tb: this.comment_tb
                            }),
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                1 == t.data.status ? (wx.showToast({
                                    title: a ? "回复成功" : "评论成功",
                                    icon: "success",
                                    duration: 2e3
                                }), n.setData({
                                    comment_reply: null,
                                    send_comment_value: ""
                                }), n.get_comment_list(0, n.comments.last_start, !0)) : wx.showModal({
                                    content: t.data.msg,
                                    showCancel: 0
                                });
                            },
                            fail: function(t) {}
                        }, this, 1);
                    } else this.issue_comment(t);
                },
                add_reply_limit: function(t) {
                    var e = t.currentTarget.dataset.pjno, n = t.currentTarget.dataset.is_my, o = this.comments, a = this;
                    o.items.forEach(function(t, i) {
                        if (t.pjno == e && t.is_my == n) return o.items[i].reply_limit *= 2, void a.setData({
                            comments: o
                        });
                    });
                },
                setData: function(t) {
                    var e, n, o = this, a = [];
                    Object.keys(t).forEach(function(i) {
                        a = i.split("."), e = t[i], n = o.$data, a.forEach(function(t, i) {
                            i + 1 == a.length ? o.$set(n, t, e) : n[t] || o.$set(n, t, {}), n = n[t];
                        });
                    });
                }
            }
        };
        e.default = c;
    },
    e463: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("510b"), a = n("6d1f");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("0fcb");
        var c = n("f0c5"), s = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    }
}, [ [ "083a", "common/runtime", "common/vendor" ] ] ]);