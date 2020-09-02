(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/discovery/discovery" ], {
    "13ec": function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return o;
        }), a.d(t, "c", function() {
            return r;
        }), a.d(t, "a", function() {
            return s;
        });
        var s = {
            videoEx: function() {
                return a.e("components/videoEx/videoEx").then(a.bind(null, "623b"));
            }
        }, o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.tools.floor(e.distance_vote_time / 86400)), a = e.tools.floor(e.distance_vote_time % 86400 / 3600), s = e.tools.floor(e.distance_vote_time % 86400 % 3600 / 60), o = e.tools.floor(e.distance_vote_time % 86400 % 3600 % 60);
            e._isMounted || (e.e0 = function(t) {
                e.pages.length;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g1: a,
                    g2: s,
                    g3: o
                }
            });
        }, r = [];
    },
    "813f": function(e, t, a) {
        "use strict";
        var s = a("f023");
        a.n(s).a;
    },
    b692: function(e, t, a) {
        "use strict";
        (function(e) {
            function s(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), a.push.apply(a, s);
                }
                return a;
            }
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(a), !0).forEach(function(t) {
                        r(e, t, a[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return e;
            }
            function r(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a("aca8"), n = a("81c6"), d = a("e634"), c = null, l = !1, u = new Object(), g = {
                bg_music_play: function() {
                    this.pages[0].model[0].bg_music && this.setData({
                        stop_music: !d.audioplay(this.pages[0].model[0].bg_music.picture_choose_url, !1, !0)
                    });
                },
                ad_video_tap: function(e) {
                    this.stop_music || this.bg_music_play(), this.$refs.video.show_video(e.currentTarget.dataset.url, !0);
                },
                bg_music_tap: function(e) {
                    this.setData({
                        stop_music: !d.audioplay(e.currentTarget.dataset.url, !1, !0)
                    });
                },
                shareTap: function(e) {
                    this[[ "", "generate_qrcode", "generate_vote_qrcode" ][this.pages[0].type]](e);
                },
                emptytap: function(e) {},
                onGotUserInfo: function(e) {
                    if (-1 != e.detail.errMsg.indexOf("ok")) {
                        var t = this;
                        d.clearlogin(), d.login_auto(function(e) {
                            t.load_page_info(), d.savaFormId(getApp().globalData.form_id), wx.showToast({
                                title: "成功授权"
                            });
                        });
                    }
                    this.setData({
                        show_auth: 0
                    });
                },
                _share: function(e) {
                    this.$data.home || d.request({
                        url: i.order_share,
                        data: d.addSid({
                            orderno: e
                        })
                    });
                },
                read: function(e) {
                    this.$data.home || d.request({
                        url: i.order_read,
                        data: d.addSid({
                            orderno: e
                        })
                    });
                },
                cancel_enshrine: function(e) {
                    var t = this;
                    d.request({
                        url: i.order_cancel_enshrine,
                        data: d.addSid({
                            orderno: e.currentTarget.dataset.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(a) {
                            1 == a.data.status && (t.pages[e.currentTarget.dataset.index].my_enshrine_no = 0, 
                            t.setData({
                                pages: t.pages
                            }));
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    }, t, 2);
                },
                enshrine: function(e) {
                    if (!this.$data.home) if (e.currentTarget.dataset.cancel) this.cancel_enshrine(e); else {
                        var t = this;
                        d.request({
                            url: i.order_enshrine,
                            data: d.addSid({
                                orderno: e.currentTarget.dataset.orderno
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                1 == a.data.status && (console.log(e), t.pages[e.currentTarget.dataset.index].my_enshrine_no = 1, 
                                t.setData({
                                    pages: t.pages
                                }));
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        }, t, 2);
                    }
                },
                comment_tap: function(e) {
                    n.navigate.to("/common/comment/comment", {
                        comment_id: e.currentTarget.dataset.intact_id,
                        comment_key: "intact_id",
                        comment_tb: "order_intact_results"
                    });
                },
                searchtap: function(e) {
                    var t = e.currentTarget.dataset.orderno, a = e.currentTarget.dataset.index;
                    this.get_order_detail(t, a);
                },
                closehistory: function() {
                    this.setData({
                        historylist: !1
                    }), n.session.clear("historylist-argue");
                },
                historytap: function(e) {
                    var t = e.currentTarget.dataset.history;
                    this.loadsearchitems(t), this.setData({
                        searchvalue: t
                    });
                },
                closesearch: function() {
                    this.setData({
                        showsearch: !1,
                        searchvalue: "",
                        searchlist: !1
                    }), u.setTime = !1;
                },
                _showsearch: function() {
                    this.setData({
                        showsearch: !0
                    });
                },
                bindsearchinput: function(e) {
                    var t = e.detail.value, a = this;
                    if (new Date().getTime() - u.time < 500 && u.setTime || "" == t || t.length < 2) return u.time = new Date().getTime(), 
                    clearTimeout(u.setTime), u.setTime = !1, "" == t || t.length < 2 ? a.setData({
                        searchlist: []
                    }) : a.loadsearchitems(t), t;
                    u.time = new Date().getTime(), a.loadsearchitems(t);
                },
                bindsearchconfirm: function(e) {
                    var t = e.detail.value;
                    this.setData({
                        match_key: t
                    });
                },
                loadsearchitems: function(e) {
                    var t = this;
                    u.setTime = setTimeout(function() {
                        wx.showNavigationBarLoading(), d.request({
                            url: i.search_argue + "?key=" + e,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                console.log(a), 1 === a.data.status ? (t.setData({
                                    searchlist: a.data.items
                                }), u.setTime = !1, function() {
                                    Array.prototype.method1 = function() {
                                        for (var e = [], t = 0; t < this.length; t++) -1 == e.indexOf(this[t]) && e.push(this[t]);
                                        return e;
                                    };
                                    var a = t.historylist || [];
                                    a.unshift(e), (a = a.method1()).length > 10 && a.pop(), n.session.set("historylist-argue", a), 
                                    t.setData({
                                        historylist: a
                                    });
                                }(), clearTimeout(u.setTime)) : (t.setData({
                                    searchlist: []
                                }), clearTimeout(u.setTime), u.setTime = !1);
                            },
                            fail: function(e) {
                                console.log(e);
                            },
                            complete: function() {
                                wx.hideNavigationBarLoading();
                            }
                        }, "", 1);
                    }, 600);
                },
                select_group_nav: function(e) {
                    var t = e.currentTarget.dataset.index;
                    this.setData({
                        list_group_idx: t
                    }), console.log(e.currentTarget.dataset), this.switch_list_type(e, 1);
                },
                hide_extend_value: function(e) {
                    wx.showTabBar(), this.setData({
                        show_extend_value: !1,
                        extend_value: ""
                    });
                },
                _show_extend_value: function(e) {
                    wx.hideTabBar(), this.setData({
                        show_extend_value: !0,
                        extend_value: e.currentTarget.dataset.value
                    });
                },
                show_prompt: function(e) {
                    this.$refs.prompt.showPrompt("请输入你的理由", e.currentTarget.dataset.value, e);
                },
                sava_share_image: function(e) {
                    var t = this;
                    wx.showActionSheet({
                        itemList: [ "保存海报", "保存二维码", "复制口令" ],
                        success: function(e) {
                            switch (e.tapIndex) {
                              case 2:
                                wx.setClipboardData({
                                    data: "打开任意端小程序（搜索‘投票活动评选’认准logo）即可跳转进入。@!" + n.md5("shibb" + t.orderno + "oleth") + "!@",
                                    success: function() {
                                        wx.showModal({
                                            title: "搜索‘投票活动评选’认准logo",
                                            content: "打开任意端小程序即可跳转进入,例如QQ小程序 消息 》搜索 》小程序 》投票活动评选",
                                            showCancel: !1,
                                            confirmText: "我知道了"
                                        });
                                    }
                                });
                                break;

                              case 1:
                                wx.showModal({
                                    content: "长按图片保存",
                                    showCancel: !1,
                                    confirmText: "我知道了",
                                    success: function() {
                                        wx.previewImage({
                                            urls: [ t.qrcode ]
                                        });
                                    }
                                });
                                break;

                              case 0:
                                wx.showLoading({
                                    title: "保存中"
                                });
                                var a = setTimeout(function() {
                                    wx.canvasToTempFilePath({
                                        x: 0,
                                        y: 0,
                                        width: 375,
                                        height: 525,
                                        destWidth: 1125,
                                        destHeight: 1575,
                                        canvasId: "shareCanvas" + t.share_qty,
                                        success: function(e) {
                                            wx.saveImageToPhotosAlbum({
                                                filePath: e.tempFilePath,
                                                success: function() {
                                                    wx.showModal({
                                                        title: "保存图片成功",
                                                        content: "图片已经保存到相册！",
                                                        showCancel: !1,
                                                        success: function(e) {
                                                            t.setData({
                                                                share: !1
                                                            });
                                                        },
                                                        fail: function(e) {},
                                                        complete: function(e) {}
                                                    });
                                                },
                                                fail: function(e) {
                                                    console.log(e), "saveImageToPhotosAlbum:fail cancel" == e.errMsg ? wx.showModal({
                                                        title: "保存图片失败",
                                                        content: "您已取消保存图片到相册！",
                                                        showCancel: !1
                                                    }) : wx.showModal({
                                                        title: "提示",
                                                        content: "保存图片失败，您可以点击确定设置获取相册权限后再尝试保存！",
                                                        complete: function(e) {
                                                            console.log(e), e.confirm ? wx.openSetting({}) : wx.showModal({
                                                                title: "保存图片失败",
                                                                content: "您已取消保存图片到相册！",
                                                                showCancel: !1
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }), wx.hideLoading(), clearTimeout(a);
                                }, 1e3);
                            }
                        },
                        fail: function(e) {
                            console.log(e.errMsg);
                        }
                    });
                },
                cencel_share: function(e) {
                    this.setData({
                        share: !1,
                        share_qty: this.share_qty + 1
                    });
                },
                generate_qrcode: function(e) {
                    var t = this.pages[e.currentTarget.dataset.index];
                    this.setData({
                        orderno: t.orderno,
                        title: t.title
                    });
                    var a = this, s = t.orderno, o = t.title, r = (t.model[0].title, t.model[0].items[0].extend_value || t.model[0].items[1].extend_value || ""), c = t.model[0].items[0].percent, l = t.model[0].items[1].percent, u = t.model[0].items[0].value, g = t.model[0].items[1].value, h = 100;
                    d.request({
                        url: i.argue_share_image,
                        data: d.addSid({
                            orderno: s,
                            page: "pages/discovery/discovery",
                            width: 400
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            if (1 == e.data.status) {
                                wx.showLoading({
                                    title: "加载中"
                                }), a.setData({
                                    qrcode: e.data.image
                                });
                                var t = n.Promisify(wx.getImageInfo);
                                n.Promise.all([ t({
                                    src: e.data.image
                                }), t({
                                    src: "https://api.173zb.com/vote/api/static/image/images/qrcodebg.jpg"
                                }) ]).then(function(e) {
                                    wx.hideLoading();
                                    var t = wx.createCanvasContext("shareCanvas" + a.share_qty);
                                    t.setFillStyle("#fff"), t.fillRect(0, 0, 375, 550), t.drawImage(e[1].path, 0, 0, 375, 550, 0, 0, 375, 550), 
                                    t.setTextAlign("left"), t.setFillStyle("#666"), t.setFontSize(16), n.drawText(t, n.substringOmit(r, 60, 58), 25, 50, 200, 325, 16);
                                    var s = function(e, t, a, s, o, r) {
                                        e.beginPath(), e.arc(t, a, s, 0, 2 * Math.PI * o), e.lineTo(t, a), e.setFillStyle(r), 
                                        e.setStrokeStyle(r), e.fill(), e.stroke(), e.closePath();
                                    };
                                    s(t, 187.5, 275, 81.25, 1, "orangered"), s(t, 187.5, 275, 81.25, l / 100, "#0574cb"), 
                                    t.setTextAlign("center"), t.setFillStyle("orangered"), t.setFontSize(22), t.fillText(u, 93.75, 165), 
                                    t.fillText((c || 0) + "%", 93.75, 195), t.setTextAlign("center"), t.setFillStyle("#0574cb"), 
                                    t.setFontSize(22), t.fillText(g, 281.25, 385), t.fillText((l || 0) + "%", 281.25, 415), 
                                    t.setTextAlign("left"), t.setTextBaseline("middle"), t.setFillStyle("#000"), t.setFontSize(22), 
                                    n.drawText(t, o, 25, 470, 100, 215, 22), t.setTextAlign("center"), t.setFontSize(12), 
                                    n.drawText(t, "识别二维码参与", 310, 535, 40, h, 12), t.drawImage(e[0].path, 260, 425, h, h), 
                                    t.stroke(), t.draw();
                                }), a.setData({
                                    share: !0
                                });
                            }
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    }, a, 0);
                },
                generate_vote_qrcode: function(e) {
                    var t = this.pages[e.currentTarget.dataset.index];
                    this.setData({
                        orderno: t.orderno,
                        title: t.title
                    });
                    var a = this, s = t.orderno, o = t.title, r = 100;
                    d.request({
                        url: i.argue_share_image,
                        data: d.addSid({
                            orderno: s,
                            page: "pages/discovery/discovery",
                            width: 400
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            if (1 == e.data.status) {
                                wx.showLoading({
                                    title: "加载中"
                                }), a.setData({
                                    qrcode: e.data.image
                                });
                                var s = n.Promisify(wx.getImageInfo);
                                n.Promise.all([ s({
                                    src: e.data.image
                                }), s({
                                    src: t.share_image_url || t.top_image_url
                                }) ]).then(function(e) {
                                    wx.hideLoading();
                                    var t = wx.createCanvasContext("shareCanvas" + a.share_qty);
                                    if (t.setFillStyle("#ffffff"), t.fillRect(0, 0, 375, 525), e[1].width < e[1].height) var s = e[1].width, i = s, d = 0, c = (e[1].height - i) / 2; else s = i = e[1].height, 
                                    c = 0, d = (e[1].width - s) / 2;
                                    t.drawImage(e[1].path, Number(d), Number(c), Number(s), Number(i), 0, 0, 375, 375), 
                                    t.setTextAlign("left"), t.setTextBaseline("middle"), t.setFillStyle("#000000"), 
                                    t.setFontSize(22), n.drawText(t, o, 25, 445, 100, 215, 22), t.setTextAlign("center"), 
                                    t.setFontSize(12), n.drawText(t, "识别二维码参与", 310, 510, 40, r, 12), t.drawImage(e[0].path, 260, 400, r, r), 
                                    t.stroke(), t.draw(), console.log("ok...");
                                }), a.setData({
                                    share: !0
                                });
                            }
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    }, a, 0);
                },
                swiperchange: function(e) {
                    if (!this.hide_other_page) {
                        var t = this.pages.length, a = this;
                        if (a.current = e.detail.current, a.current >= t - 2 || a.current >= t - 1) var s = setTimeout(function() {
                            a.load_page_info(!1, function() {
                                a.load_page_info();
                            }), clearTimeout(s);
                        }, 1e3);
                        this.timedjs(a.current), this.read(this.pages[a.current].orderno);
                    }
                },
                timedjs: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.timeInterval > 0 && (clearInterval(this.timeInterval), this.timeInterval = 0), 
                    this.pages && 2 == this.pages[e].type && (this.timeInterval = setInterval(function() {
                        this.pages[e].begin_vote && this.pages[e].end_vote ? this.pages[e].distance_vote_time += 1 : this.pages[e].distance_vote_time -= 1, 
                        this.setData({
                            distance_vote_time: this.pages[e].distance_vote_time
                        });
                    }.bind(this), 1e3)), this.pageShow || (console.log("show"), this.setData({
                        pageShow: !0
                    }));
                },
                upload_info: function(e) {},
                get_order_detail: function(e, t, a) {
                    var s = this;
                    d.request({
                        url: i.get_order_detail,
                        data: d.addSid({
                            orderno: e,
                            friend_uuid: s.friend_uuid
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(o) {
                            if (1 == o.data.status) {
                                var r = s.pages || [];
                                s.ordernos = [];
                                for (var i = 0; i < r.length; i++) {
                                    var n = r[i].orderno;
                                    n == e ? r.splice(i, 1) : s.ordernos.push(n);
                                }
                                2 == o.data.type && (o.data.model[0].theme && (s.$data.theme = o.data.model[0].theme), 
                                o.data.model[0].items.forEach(function(e, t) {
                                    if (1 == e.genre || 2 == e.genre || 3 == e.genre) {
                                        var a = !1;
                                        1 == e.genre && (o.data.model[0].items[t].image = "https://api.173zb.com/jiulku/api/static/images/audio_play.gif"), 
                                        2 == e.genre && (o.data.model[0].items[t].image += "?x-oss-process=video/snapshot,t_10000,f_jpg,w_0,h_0,m_fast", 
                                        o.data.model[0].items[t].large_image && (o.data.model[0].items[t].image = o.data.model[0].items[t].large_image)), 
                                        3 == e.genre && (o.data.model[0].items[t].image = "https://api.173zb.com/jiulku/api/static/images/open_document.png"), 
                                        e.delta && e.delta.ops.forEach(function(e) {
                                            !a && e.insert && e.insert.image && (o.data.model[0].items[t].image = e.insert.image, 
                                            a = !0);
                                        });
                                    }
                                })), r[t] && null != r[t].list_type && (o.data.list_type = r[t].list_type), s.$data.home && (o.data.allow_share = 0), 
                                o.data.model[0].items1 = o.data.model[0].items, r[t] = o.data, s.ordernos.push(e), 
                                s.setData({
                                    pages: r,
                                    theme: s.$data.theme
                                }), "function" == typeof a && a();
                            } else wx.showModal({
                                content: o.data.msg,
                                showCancel: !1
                            });
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                },
                cancel_like: function(e) {
                    var t = this;
                    d.request({
                        url: i.argue_cancel_like,
                        data: d.addSid({
                            intact_id: e.currentTarget.dataset.intact_id
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(a) {
                            1 == a.data.status && (t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].my_like_no = 0, 
                            t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].like_no--, 
                            t.setData({
                                pages: t.pages
                            }));
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    }, t, 2);
                },
                like: function(e) {
                    if (e.currentTarget.dataset.like) this.cancel_like(e); else {
                        var t = this;
                        d.request({
                            url: i.argue_like,
                            data: d.addSid({
                                intact_id: e.currentTarget.dataset.intact_id
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                1 == a.data.status && (t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].my_like_no = 1, 
                                t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].like_no++, 
                                t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].my_bearish_no && (t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].my_bearish_no = 0, 
                                t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].bearish_no--), 
                                t.setData({
                                    pages: t.pages
                                }));
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        }, t, 2);
                    }
                },
                cancel_bearish: function(e) {
                    var t = this;
                    d.request({
                        url: i.argue_cancel_bearish,
                        data: d.addSid({
                            intact_id: e.currentTarget.dataset.intact_id
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(a) {
                            1 == a.data.status && (t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].my_bearish_no = 0, 
                            t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].bearish_no--, 
                            t.setData({
                                pages: t.pages
                            }));
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    }, t, 2);
                },
                bearish: function(e) {
                    if (e.currentTarget.dataset.bearish) this.cancel_bearish(e); else {
                        var t = this;
                        d.request({
                            url: i.argue_bearish,
                            data: d.addSid({
                                intact_id: e.currentTarget.dataset.intact_id
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                1 == a.data.status && (t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].my_bearish_no = 1, 
                                t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].bearish_no++, 
                                t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].my_like_no && (t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].my_like_no = 0, 
                                t.pages[e.currentTarget.dataset.index].argues[e.currentTarget.dataset.idx].like_no--), 
                                t.setData({
                                    pages: t.pages
                                }));
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        }, t, 2);
                    }
                },
                write_reason: function(e) {
                    console.log(e), this.setData({
                        show_applaud: !1
                    });
                    var t = this.pages[e.currentTarget.dataset.index].model[0];
                    console.log(t), t.items.forEach(function(a, s) {
                        if (s == e.currentTarget.dataset.idx) {
                            if (t.items[s].extend_value == e.detail.value) return;
                            t.items[s].extend_value = e.detail.value;
                        } else t.items[s].extend_value = "";
                    });
                    var a = this;
                    this.save_order_data(this.pages[e.currentTarget.dataset.index].update ? i.update_order_data : i.save_order_data, this.pages[e.currentTarget.dataset.index].orderno, [ t ], function() {
                        a.pages[e.currentTarget.dataset.index].model[0] = t, a.pages[e.currentTarget.dataset.index].update = 1, 
                        a.setData({
                            pages: a.pages
                        });
                    });
                },
                select_radio: function(e) {
                    if (!e.currentTarget.dataset.checked) {
                        var t = this;
                        0 != this.pages[e.currentTarget.dataset.index].user_anonymity ? this.vote(e) : (t = this, 
                        wx.getSetting({
                            success: function(a) {
                                a.authSetting["scope.userInfo"] ? t.vote(e) : t.setData({
                                    show_auth: 1
                                });
                            }
                        }));
                    }
                },
                vote: function(e) {
                    if (this.ad.adVideo || (l = !0), 0 == l && this.pages[e.currentTarget.dataset.index].update) wx.showModal({
                        content: "观看视频获得重新选择机会",
                        confirmText: "获取机会",
                        success: function(e) {
                            e.confirm && (console.log(c), c && (console.log("激励视频 广告显示"), c.show().catch(function() {
                                c.load().then(function() {
                                    return c.show();
                                }).catch(function(e) {
                                    console.log("激励视频 广告显示失败"), l = !0, wx.showToast({
                                        title: "获得一次重新选择机会",
                                        icon: "none"
                                    });
                                });
                            })));
                        }
                    }); else {
                        l = !1;
                        var t = this.pages[e.currentTarget.dataset.index].model[0];
                        t.items.forEach(function(a, s) {
                            s == e.currentTarget.dataset.idx ? t.items[s].checked = !0 : (t.items[s].checked = !1, 
                            t.items[s].extend_value = "");
                        });
                        var a = this;
                        this.save_order_data(this.pages[e.currentTarget.dataset.index].update ? i.update_order_data : i.save_order_data, this.pages[e.currentTarget.dataset.index].orderno, [ t ], function() {
                            console.log("更新成功"), a.get_order_detail(a.pages[e.currentTarget.dataset.index].orderno, e.currentTarget.dataset.index);
                        });
                    }
                },
                save_order_data: function(e, t, a, s) {
                    var o = this, r = o.ad_info || {};
                    d.getUserInfo(), d.request({
                        url: e,
                        data: d.signdata({
                            orderno: t,
                            friend_uuid: o.friend_uuid || "",
                            modelJson: JSON.stringify(a),
                            terminal: getApp().globalData.system.model.replace(/<.*?>/i, ""),
                            city: r.city || "",
                            province: r.province || "",
                            country: r.country || "",
                            district: r.district || "",
                            write_time: 0
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            if (console.log(e), 1 == e.data.status) e.data.add_exp > 0 && (o.setData({
                                show_add_exp: 0
                            }), o.setData({
                                show_add_exp: "+" + e.data.add_exp
                            })), s(); else {
                                if (-1 == e.data.status) return void wx.showToast({
                                    title: e.data.msg,
                                    icon: "none",
                                    success: function() {
                                        s();
                                    }
                                });
                                wx.showModal({
                                    content: e.data.msg,
                                    showCancel: !1
                                });
                            }
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    }, o, 2);
                },
                load_page_info: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = this, s = n.session.get("argue_ordernos") || [];
                    d.request({
                        url: i.get_random_argue_order_detail,
                        data: d.addSid({
                            orderno_json: JSON.stringify(s)
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(o) {
                            if (console.log(o), 1 == o.data.status) {
                                0 == n.in_array(o.data.orderno, s) && (s.push(o.data.orderno), s.length > 30 && s.shift(), 
                                a.ordernos.push(o.data.orderno), n.session.set("argue_ordernos", s));
                                var r = a.pages || [];
                                r.push(o.data), a.setData({
                                    pages: r
                                }), t && t();
                            } else 0 == e && (n.session.set("argue_ordernos", a.ordernos), a.load_page_info(!0, t));
                        },
                        fail: function(e) {
                            console.log(e);
                        }
                    });
                },
                confirm: function(e) {
                    var t = e.detail.value, a = e.detail.key;
                    this.$refs.prompt.hidePrompt(), "" != t && a ? (a.detail.value = t, this.write_reason(a)) : console.log("取消了");
                },
                cancel: function() {
                    this.$refs.prompt.hidePrompt();
                },
                onEditorReady: function(t) {
                    var a = this, s = t.currentTarget.dataset.index;
                    console.log(s), e.createSelectorQuery().in(this).select("#editor" + s).context(function(e) {
                        a["editor" + s] = e.context, t.currentTarget.dataset.delta && a["editor" + s].setContents({
                            delta: t.currentTarget.dataset.delta
                        });
                    }).exec();
                },
                hide_exp: function() {
                    this.setData({
                        show_add_exp: null
                    });
                },
                auto_height_load: function(e) {
                    this.pages[e.currentTarget.dataset.index].auto_height = e.detail.height * (getApp().globalData.system.screenWidth / e.detail.width) - (60 + (this.$data.navigationdata.Increases || 0)), 
                    this.pages[e.currentTarget.dataset.index].auto_height > 450 && (this.pages[e.currentTarget.dataset.index].auto_height = 450), 
                    this.setData({
                        pages: this.pages
                    });
                },
                previewImage: function(e) {
                    var t = e.currentTarget.dataset.write_table;
                    t ? wx.navigateToMiniProgram({
                        appId: "wx4b5ee08ad8c0eddb",
                        path: "pages/index/detail/detail?orderno=" + t.orderno,
                        envVersion: "release",
                        fail: function(t) {
                            n.previewImage([ e.currentTarget.dataset.pic ], e.currentTarget.dataset.pic);
                        }
                    }) : n.previewImage([ e.currentTarget.dataset.pic ], e.currentTarget.dataset.pic);
                },
                onImageLoad1: function(e) {
                    var t = e.currentTarget.dataset.column, a = e.currentTarget.id, s = e.detail.width, o = e.detail.height * (300 / s), r = this.pages[t].model[0].items;
                    if (0 != r.length) {
                        for (var i = 0; i < r.length; i++) if (r[i].id == a) {
                            this.pages[t].model[0].items[i].height = o;
                            break;
                        }
                        r = this.pages[t].model[0].items;
                        for (var n = 0; n < r.length; n++) if (null == r[n].height) return;
                        var d = this.pages[t];
                        d.idarr || (d.idarr = [], d.col1H = 0, d.col2H = 0);
                        for (var c = 0; c < r.length; c++) {
                            d.idarr.push(r[c]);
                            var l = d.col1 || [], u = d.col2 || [];
                            d.col1H <= d.col2H ? (d.col1H += r[c].height, l.push(r[c])) : (d.col2H += r[c].height, 
                            u.push(r[c])), d.col1 = l, d.col2 = u;
                        }
                        this.pages[t] = d, this.setData({
                            pages: this.pages
                        });
                    }
                },
                onImageLoad: function(e) {
                    var t = e.currentTarget.dataset.column, a = this.pages[t];
                    if (a.model[0].items.length < 150 || n.session.get("load_vote_list_page_orderno_" + a.orderno)) this.onImageLoad1(e); else {
                        a.idarr || (a.idarr = [], a.col1H = 0, a.col2H = 0);
                        for (var s = e.currentTarget.id, o = a.idarr.length; o--; ) if (a.idarr[o].id === s) return void console.log("重复id");
                        var r = e.detail.width, i = e.detail.height * (300 / r), d = a.model[0].items;
                        if (0 != d.length) {
                            for (var c = null, l = 0; l < d.length; l++) if (d[l].id == s) {
                                c = d[l], a.idarr.push(d[l]), a.model[0].items[l].height = i;
                                break;
                            }
                            c.height = i;
                            var u = a.col1 || [], g = a.col2 || [];
                            a.col1H <= a.col2H ? (a.col1H += i, u.push(c)) : (a.col2H += i, g.push(c)), a.col1 = u, 
                            a.col2 = g, this.pages[t] = a, this.setData({
                                pages: this.pages
                            }), a.idarr.length == d.length && n.session.set("load_vote_list_page_orderno_" + a.orderno, n.date("Ymd"));
                        }
                    }
                },
                search_list: function(e) {
                    var t = e.currentTarget.dataset.column, a = e.detail.value, s = this;
                    s.pages[t].model[0].items.forEach(function(e, o) {
                        s.pages[t].model[0].items[o].hide = !("" == a || -1 != e.value.indexOf(a) || e.no == a);
                    }), s.pages[t].col1.forEach(function(e, o) {
                        s.pages[t].col1[o].hide = !("" == a || -1 != e.value.indexOf(a) || e.no == a);
                    }), s.pages[t].col2.forEach(function(e, o) {
                        s.pages[t].col2[o].hide = !("" == a || -1 != e.value.indexOf(a) || e.no == a);
                    }), s.setData({
                        pages: s.pages
                    });
                },
                switch_list_type: function(e) {
                    var t = this, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = e.currentTarget.dataset.type, o = e.currentTarget.dataset.column;
                    if (this.pages[o].list_type != s || a) {
                        if (-1 != this.list_group_idx) {
                            var r = [];
                            this.pages[o].model[0].items1.forEach(function(e) {
                                -1 != e.group_name.indexOf(t.pages[o].model[0].list_groups[t.list_group_idx]) && r.push(e);
                            });
                        } else r = n.cloneObjectFn(this.pages[o].model[0].items1);
                        this.pages[o].refresh = !0, this.pages[o].col1 = [], this.pages[o].col2 = [], this.pages[o].idarr = null, 
                        this.pages[o].model[0].items = [], -1 != s && this.setData({
                            pages: this.pages
                        }), r.forEach(function(e, t) {
                            e.hot_qty += parseInt(5 * Math.random(), 10), e.height = void 0, r[t] = e;
                        }), -1 == s && (r = n.selectionSort(r, !1, "no")), 0 == s && (r = n.selectionSort(r, !0, "timestamp")), 
                        1 == s && (r = n.selectionSort(r, !0, "hot_qty")), 2 == s && (r = n.selectionSort(r, !0, "poll_qty")), 
                        setTimeout(function() {
                            t.pages[o].list_type = s, t.pages[o].model[0].items = r, t.pages[o].refresh = !1, 
                            t.setData({
                                pages: t.pages
                            });
                        }, 500);
                    }
                },
                vote_explain: function(e) {
                    var t = e.currentTarget.dataset.column;
                    wx.navigateTo({
                        url: "vote_explain/vote_explain?orderno=" + this.pages[t].orderno
                    });
                },
                vote_item: function(e) {
                    var t = e.currentTarget.dataset.column;
                    if (e.currentTarget.dataset.model) var a = this.pages[t].model[0].items[e.currentTarget.dataset.index]; else console.log(e.currentTarget.dataset), 
                    a = this.pages[t][e.currentTarget.dataset.items][e.currentTarget.dataset.index];
                    var s = this, o = -1;
                    s.pages[t].model[0].items.forEach(function(e, t) {
                        e.id == a.id && (o = t);
                    }), o > -1 && wx.navigateTo({
                        url: "vote_item/vote_item?orderno=" + this.pages[t].orderno + "&id=" + a.id + "&hide_ad=" + s.$data.hide_ad + "&home=" + s.$data.home,
                        events: {
                            vote_item_read: function(e) {
                                s.pages[t].model[0].items[o].hot_qty += e.ad_add_hot, e.ad_add_hot || s.pages[t].read_no++, 
                                s.setData({
                                    pages: s.pages
                                });
                            },
                            vote_item_poll: function() {
                                s.pages[t].model[0].items[o].hot_qty += 10, s.pages[t].model[0].items[o].poll_qty++, 
                                s.pages[t].use_no++, s.setData({
                                    pages: s.pages
                                });
                            }
                        }
                    });
                }
            }, h = {
                data: function() {
                    return {
                        theme: {
                            color: "#268cdd",
                            sub_color: "#888",
                            hint_color: "#888",
                            bg_color: "white",
                            time_color: "rgba(233,233,233,.7)",
                            title_font_size: 17,
                            bg_image: "",
                            btn_image: ""
                        },
                        goHome: "",
                        navigationdata: {},
                        show_auth: 0,
                        historylist: !1,
                        searchvalue: "",
                        showsearch: !1,
                        pages: [],
                        searchlist: !1,
                        match_key: "",
                        show_extend_value: !1,
                        extend_value: "",
                        savedImgUrl: "",
                        share: !1,
                        share_qty: 0,
                        orderno: "",
                        title: "",
                        qrcode: "",
                        pageShow: !1,
                        show_applaud: !1,
                        show_add_exp: 0,
                        hide_ad: 0,
                        home: 0,
                        current: 0,
                        distance_vote_time: 0,
                        ad: {},
                        column: null,
                        idx: null,
                        col1: "",
                        col2: "",
                        stop_music: !1,
                        list_group_idx: -1
                    };
                },
                onLoad: function(e) {
                    wx.hideShareMenu(), getApp().globalData.setIncreases(this);
                    var t = decodeURIComponent(e.scene);
                    32 == t.length && (e.orderno = "dd" + t.substr(-17), e.uuid = "UID" + t.substr(0, 15), 
                    this.friend_uuid = e.uuid);
                    var a = this;
                    if (a.ordernos = [], getApp().globalData.loadAd(this, function() {
                        a.ad.adVideo && wx.createRewardedVideoAd && ((c = wx.createRewardedVideoAd({
                            adUnitId: a.ad.adVideo
                        })).onError(function(e) {
                            console.log(e);
                        }), c.onClose(function(e) {
                            e && e.isEnded || void 0 === e ? (console.log("正常播放结束，下发奖励"), l = !0, wx.showToast({
                                title: "获得一次重新选择机会",
                                icon: "none"
                            })) : console.log("播放中途退出，进行提示");
                        }));
                    }), e.orderno) return e.gzh && (e.orderno = n.aes.decrypt(e.orderno)), "dd20200421_00012133" == e.orderno && (e.home = 0), 
                    1 == e.home && a.setData({
                        home: 1
                    }), a.get_order_detail(e.orderno, 0, function() {
                        a.timedjs(), a.pages[0].model[0].ad_video ? n.session.get("ad_video_orderno_" + e.orderno + a.pages[0].model[0].ad_video) ? a.bg_music_play() : (a.$refs.video.show_video(a.pages[0].model[0].ad_video, !0), 
                        n.session.set("ad_video_orderno_" + e.orderno + a.pages[0].model[0].ad_video, n.date("Ymd"))) : a.bg_music_play(), 
                        1 == getCurrentPages().length && n.session.set("base_path", "/pages/discovery/discovery?orderno=" + e.orderno + "&uuid=" + e.uuid), 
                        1 == e.home && (a.pages[0].allow_share = 0, a.setData({
                            home: 1
                        })), a.pages[0].allow_share && wx.showShareMenu({
                            withShareTicket: !0,
                            menus: [ "shareAppMessage", "shareTimeline" ]
                        }), e.hide_ad && a.setData({
                            hide_ad: 1
                        });
                    }), void (a.hide_other_page = !0);
                    a.load_page_info(!1, function() {
                        a.load_page_info(!1, function() {
                            a.pageShow || a.setData({
                                pageShow: !0
                            });
                            var e = n.session.get("rollout") || 0;
                            if (0 == e) var t = setTimeout(function() {
                                a.setData({
                                    current: 1
                                }), clearTimeout(t);
                            }, 2e3);
                            e++, n.session.set("rollout", e);
                        });
                    });
                },
                onReady: function() {
                    wx.updateShareMenu({
                        withShareTicket: !0,
                        success: function() {}
                    });
                },
                onShow: function() {
                    getApp().globalData.lastpage = "discovery", this.setData({
                        historylist: n.session.get("historylist-argue") || !1
                    }), this.pageShow && this.timedjs(this.current);
                },
                onHide: function() {
                    this.timeInterval > 0 && (clearInterval(this.timeInterval), this.timeInterval = 0);
                },
                onUnload: function() {
                    this.timeInterval > 0 && (clearInterval(this.timeInterval), this.timeInterval = 0), 
                    d.audioplay("", !0);
                },
                onPullDownRefresh_: function() {
                    var e = this;
                    u.time = new Date().getTime(), wx.showLoading({
                        title: "加载中"
                    }), setTimeout(function() {
                        if (new Date().getTime() - u.time > 500 && (clearTimeout(e.timer), 2 == e.pages[e.current || 0].type)) {
                            e.pages[e.current || 0].refresh = !0;
                            var t = e.pages[e.current || 0].auto_height;
                            return e.setData({
                                pages: e.pages
                            }), e.pages[e.current || 0].col1 = [], e.pages[e.current || 0].col2 = [], e.pages[e.current || 0].idarr = null, 
                            e.get_order_detail(e.pages[e.current || 0].orderno, e.current || 0, function() {
                                e.timedjs(e.current), e.pages[e.current || 0].auto_height = t, e.setData({
                                    pages: e.pages
                                }), wx.stopPullDownRefresh();
                            }), void wx.hideLoading();
                        }
                    }, 500);
                },
                onReachBottom: function() {},
                onShareAppMessage: function(e) {
                    var t = this, a = t.$data.pages[t.$data.column || 0].orderno;
                    return "button" === e.from && (a = e.target.dataset.orderno, t._share(a)), d.ShareAppMessage(e, "【" + t.$data.pages[t.$data.column || 0].title + "】快来投票吧", "pages/discovery/discovery", {
                        orderno: a
                    }, function() {}, t.$data.pages[t.$data.column || 0].share_image_url || t.$data.pages[t.$data.column || 0].top_image_url);
                },
                onShareTimeline: function(e) {
                    var t = this;
                    return {
                        title: "【" + t.$data.pages[t.$data.column || 0].title + "】点击进入投票吧",
                        imageUrl: t.$data.pages[t.$data.column || 0].share_image_url || t.$data.pages[t.$data.column || 0].top_image_url
                    };
                },
                components: {
                    vasPrompt: function() {
                        a.e("components/prompt/prompt").then(function() {
                            return resolve(a("4da1"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                beforeMount: function() {},
                methods: o(o({
                    defriend: function(e) {
                        var t = this;
                        console.log(this.$data.pages[0].admin_id), wx.showModal({
                            content: "将屏蔽此人所创建的人所有内容，请确认操作！",
                            success: function(e) {
                                if (e.confirm) {
                                    var a = n.session.get("defriend_id_list") || [];
                                    a.push(t.$data.pages[0].admin_id), n.session.set("defriend_id_list", a), 1 == getCurrentPages().length ? wx.reLaunch({
                                        url: "/pages/issue/issue"
                                    }) : wx.navigateBack();
                                }
                            }
                        });
                    },
                    report_order: function(e) {
                        var t = this.$data.pages[0].orderno, a = [ "内容令人反感", "广告或者垃圾信息", "辱骂人生攻击", "有害信息（色情、不实、违法）", "内容未经授权", "其他" ];
                        wx.showActionSheet({
                            itemList: a,
                            success: function(e) {
                                d.request({
                                    url: i.host + "/order/report_order",
                                    data: {
                                        orderno: t,
                                        report_mag: a[e.tapIndex]
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(e) {
                                        1 == e.data.status && wx.showModal({
                                            content: "举报成功，将在24小时内处理。",
                                            showCancel: !1,
                                            success: function() {
                                                var e = n.session.get("defriend_id_list") || [];
                                                e.push(this.$data.pages[0].admin_id), n.session.set("defriend_id_list", e), 1 == getCurrentPages().length ? wx.reLaunch({
                                                    url: "/pages/issue/issue"
                                                }) : wx.navigateBack();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    tapShareAppMessage: function(e) {},
                    ShareAppMessage: function(e) {
                        var t = this;
                        return "button" === e.from && t._share(e.target.dataset.orderno), d.ShareAppMessage(e, "【" + t.title + "】快来投票吧", "pages/discovery/discovery", {
                            orderno: e.target.dataset.orderno
                        }, function() {}, t.$data.pages[t.$data.column || 0].share_image_url || t.$data.pages[t.$data.column || 0].top_image_url);
                    }
                }, g), {}, {
                    setData: function(e) {
                        var t, a, s = this, o = [];
                        Object.keys(e).forEach(function(r) {
                            o = r.split("."), t = e[r], a = s.$data, o.forEach(function(e, r) {
                                r + 1 == o.length ? (a[e] === t && s.$set(a, e, {}), s.$set(a, e, t)) : a[e] || s.$set(a, e, {}), 
                                a = a[e];
                            });
                        });
                    }
                })
            };
            t.default = h;
        }).call(this, a("543d").default);
    },
    b7f5: function(e, t, a) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("e7dc"), t(a("66fd")), e(t(a("f4d1")).default);
        }).call(this, a("543d").createPage);
    },
    f023: function(e, t, a) {},
    f4d1: function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a("13ec"), o = a("f98b");
        for (var r in o) "default" !== r && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(r);
        a("813f");
        var i = a("f0c5"), n = Object(i.a)(o.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        t.default = n.exports;
    },
    f98b: function(e, t, a) {
        "use strict";
        a.r(t);
        var s = a("b692"), o = a.n(s);
        for (var r in s) "default" !== r && function(e) {
            a.d(t, e, function() {
                return s[e];
            });
        }(r);
        t.default = o.a;
    }
}, [ [ "b7f5", "common/runtime", "common/vendor" ] ] ]);