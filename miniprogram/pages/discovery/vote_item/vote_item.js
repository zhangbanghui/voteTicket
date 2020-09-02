(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/discovery/vote_item/vote_item" ], {
    "05bc": function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("4b5f"), i = a("9227");
        for (var n in i) "default" !== n && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(n);
        a("6f7c");
        var s = a("f0c5"), d = Object(s.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = d.exports;
    },
    "31f4": function(t, e, a) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("e7dc"), e(a("66fd")), t(e(a("05bc")).default);
        }).call(this, a("543d").createPage);
    },
    "4b5f": function(t, e, a) {
        "use strict";
        a.d(e, "b", function() {
            return i;
        }), a.d(e, "c", function() {
            return n;
        }), a.d(e, "a", function() {
            return o;
        });
        var o = {
            navigationTop: function() {
                return a.e("components/navigation-top/navigation-top").then(a.bind(null, "532f"));
            }
        }, i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.vote.vote_lables, function(e, a) {
                var o = t.tools.percent(e.poll_qty, t.vote.lable_poll_qty || 0, 0);
                return {
                    $orig: t.__get_orig(e),
                    g0: o
                };
            })), a = t.tools.in_array(t.item.id, t.vote_items, "id");
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e,
                    g1: a
                }
            });
        }, n = [];
    },
    "6f7c": function(t, e, a) {
        "use strict";
        var o = a("f4c5");
        a.n(o).a;
    },
    "76fa": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a("aca8"), i = (a("042c"), a("81c6")), n = a("e634"), s = null, d = {
                data: function() {
                    return {
                        hide_ad: 0,
                        home: 0,
                        hide_vote_buttom: 0,
                        navigationdata: {},
                        savedImgUrl: "",
                        share: !1,
                        share_qty: 0,
                        show_add_exp: 0,
                        item: "",
                        vote: "",
                        ranking: "",
                        hot_list: "",
                        qrcode: "",
                        orderno: null,
                        id: null,
                        ad: {},
                        ads: "",
                        log_votes: {
                            list: []
                        },
                        log_ip_votes: {
                            list: []
                        },
                        ddk: {
                            items: []
                        },
                        show_auth: 0,
                        vote_lable_show: !1,
                        vote_lable_check_qty: 0,
                        vote_item_show: !1,
                        vote_items: "",
                        show_item_ad: !1,
                        vote_success: !1,
                        theme: {
                            color: "#268cdd",
                            bg_color: "white",
                            bg_image: "",
                            btn_image: ""
                        }
                    };
                },
                components: {},
                props: {},
                onLoad: function(t) {
                    getApp().globalData.setNavigationBarTitle(this, "添加到我的小程序☞"), wx.hideShareMenu();
                    var e = decodeURIComponent(t.scene);
                    e.length > 17 && (t.orderno = "dd" + e.substr(-17), t.id = e.substr(0, e.length - 17)), 
                    this.setData(t), 1 == getCurrentPages().length && i.session.set("base_path", "/pages/discovery/discovery?orderno=" + t.orderno + "&uuid=" + t.uuid);
                    var a = this;
                    getApp().globalData.setreLaunchtap(this, !0), a.get_page_info(o.get_vote_order_detail, function() {
                        getApp().globalData.loadAd(a, function() {
                            if (a.ad.adVideo_2 && wx.createRewardedVideoAd && ((s = wx.createRewardedVideoAd({
                                adUnitId: a.ad.adVideo_2
                            })).onError(function(t) {
                                console.log(t);
                            }), s.onClose(function(t) {
                                if (t && t.isEnded || void 0 === t) {
                                    if (console.log("正常播放结束，下发奖励"), a.pull_back && (a.pull_back = !1, a._pull_back()), 
                                    a.add_poll) return a.add_poll = !1, void a.add_poll_tap(1);
                                    a.get_page_info(o.get_vote_order_detail_ad, function() {
                                        0 != a.vote.add_hot_qty ? (a.eventChannel && a.eventChannel.emit("vote_item_read", {
                                            ad_add_hot: a.vote.add_hot_qty
                                        }), wx.showToast({
                                            title: "增加热度值" + a.vote.add_hot_qty,
                                            icon: "none"
                                        })) : wx.showToast({
                                            title: "今日增加热度上限了",
                                            icon: "none"
                                        });
                                    });
                                } else if (console.log("播放中途退出，进行提示"), !a.vote.hide_ad && getApp().globalData.ad.adUnitId_2 && !getApp().globalData.interstitialAd) {
                                    getApp().globalData.interstitialAd = !0;
                                    var e = null;
                                    wx.createInterstitialAd && (e = wx.createInterstitialAd({
                                        adUnitId: getApp().globalData.ad.adUnitId_2
                                    })), e && e.show().catch(function(t) {
                                        console.error(t), getApp().globalData.interstitialAd = !1;
                                    });
                                }
                            })), !a.vote.hide_ad && a.ad.adUnitId_3) {
                                var t = null;
                                wx.createInterstitialAd && (t = wx.createInterstitialAd({
                                    adUnitId: getApp().globalData.ad.adUnitId_3
                                })), t && t.show().catch(function(t) {
                                    console.error(t, getApp().globalData.ad.adUnitId_3), getApp().globalData.interstitialAd = !1;
                                });
                            }
                        }), a.eventChannel && a.eventChannel.emit("vote_item_read", {
                            ad_add_hot: a.vote.ad_add_hot
                        });
                    }), wx.request({
                        url: o.ad,
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(t) {
                            t.data.items && a.setData({
                                ads: t.data.items
                            });
                        }
                    }), this.$data.vote_items = i.session.get("vote_items_orderno_" + t.orderno) || [];
                },
                onReady: function() {
                    wx.updateShareMenu({
                        withShareTicket: !0,
                        success: function() {}
                    });
                },
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    if (this.$data.vote_success) n.load_page_list(this, "ddk", o.ddk_top_goods_list_query, !1); else if (!this.vote.user_anonymity) {
                        var t = this, e = this.log_votes || {}, a = e.last_start || 0;
                        n.list_request(o.get_vote_log_list, this, e, n.addSid({
                            start: a,
                            orderno: this.orderno,
                            id: this.id
                        }), function(e, a) {
                            t.setData({
                                log_votes: e
                            });
                        });
                    }
                },
                onShareAppMessage: function(t) {
                    var e = this, a = e.$data.item.image;
                    if (e.$data.item.genre > 0) {
                        var o = !1;
                        a = e.$data.vote.top_image_url, e.$data.item.delta && e.$data.item.delta.ops.forEach(function(t) {
                            !o && t.insert && t.insert.image && (a = t.insert.image, o = !0);
                        }), 0 == o && 2 == e.$data.item.genre && (a = e.$data.item.image + "?x-oss-process=video/snapshot,t_10000,f_jpg,w_0,h_0,m_fast");
                    }
                    return n.ShareAppMessage(t, "【" + e.vote.title + "】快来投我一票吧", "pages/discovery/vote_item/vote_item", {
                        orderno: e.orderno,
                        id: e.id
                    }, function() {}, a || "");
                },
                onShareTimeline: function(t) {
                    var e = this, a = e.$data.item.image;
                    if (e.$data.item.genre > 0) {
                        var o = !1;
                        a = e.$data.vote.top_image_url, e.$data.item.delta && e.$data.item.delta.ops.forEach(function(t) {
                            !o && t.insert && t.insert.image && (a = t.insert.image, o = !0);
                        }), 0 == o && 2 == e.$data.item.genre && (a = e.$data.item.image + "?x-oss-process=video/snapshot,t_10000,f_jpg,w_0,h_0,m_fast");
                    }
                    return {
                        title: "【" + e.vote.title + "】点击进入投我一票吧",
                        imageUrl: a
                    };
                },
                methods: {
                    miniProgramsuccess: function(t) {
                        n.request({
                            url: o.host + "/ad/log_miniProgram",
                            data: n.signdata({
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
                        n.request({
                            url: o.host + "/ad/log_miniProgram",
                            data: n.signdata({
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
                    batch_poll_tap: function(t) {
                        var e = this;
                        if (this.hide_vote_buttom) wx.showModal({
                            content: "没有投票权限",
                            showCancel: !1,
                            success: function(t) {
                                1 == getCurrentPages().length ? wx.redirectTo({
                                    url: "/pages/discovery/discovery?orderno=" + e.orderno + "&hide_ad=" + e.$data.hide_ad + "&home=" + e.$data.home
                                }) : wx.navigateBack();
                            }
                        }); else {
                            var a = this;
                            this.setData({
                                show_item_ad: !1
                            }), 0 != a.vote.user_anonymity ? a.add_batch_poll_tap() : wx.getSetting({
                                success: function(t) {
                                    t.authSetting["scope.userInfo"] ? a.add_batch_poll_tap() : a.setData({
                                        show_auth: 1
                                    });
                                }
                            });
                        }
                    },
                    add_batch_poll_tap: function() {
                        var e = this, a = this, s = i.Promisify(t.request), d = [];
                        this.$data.vote_items.forEach(function(t) {
                            d.push(s({
                                url: o.add_vote_item_poll,
                                data: n.signdata({
                                    orderno: e.orderno,
                                    id: t.id,
                                    add_poll: 1
                                }),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                }
                            }));
                        }), t.showLoading({
                            title: "投票中"
                        }), a.setData({
                            vote_item_show: !1,
                            show_item_ad: !1
                        }), i.Promise.all(d).then(function(e) {
                            if (t.hideLoading(), 0 == e[0].data.status) wx.showModal({
                                content: e[0].data.msg,
                                showCancel: !1,
                                success: function(t) {
                                    wx.redirectTo({
                                        url: "/pages/discovery/vote_item/vote_item?redirectTo=1&orderno=" + a.orderno + "&id=" + a.$data.vote_items[0].id
                                    });
                                }
                            }); else if (wx.getStorageSync("add_poll_tap_" + a.orderno) || (wx.setStorageSync("add_poll_tap_" + a.orderno, 1), 
                            n.subscribe_msg()), wx.pageScrollTo({
                                scrollTop: 0
                            }), a.vote.hide_ad ? wx.showModal({
                                content: "投票成功",
                                showCancel: !1,
                                success: function() {
                                    a.reLaunchtap();
                                }
                            }) : a.setData({
                                vote_success: !0
                            }), n.load_page_list(a, "ddk", o.ddk_top_goods_list_query, {
                                start: 0,
                                sort_type: 1
                            }, !0), a.eventChannel && a.eventChannel.emit("vote_item_poll"), !a.vote.hide_ad && getApp().globalData.ad.adUnitId_2 && !getApp().globalData.interstitialAd) {
                                console.log("展示插屏"), getApp().globalData.interstitialAd = !0;
                                var i = null;
                                wx.createInterstitialAd && (i = wx.createInterstitialAd({
                                    adUnitId: getApp().globalData.ad.adUnitId_2
                                })), i && i.show().catch(function(t) {
                                    console.error(t), getApp().globalData.interstitialAd = !1;
                                });
                            }
                        });
                    },
                    del_item_poll: function(t) {
                        var e = this, a = t.currentTarget.dataset.index;
                        wx.showModal({
                            content: "确认移除",
                            success: function(t) {
                                t.confirm && (i.scope.removeRecord(e.$data.vote_items, a), e.setData({
                                    vote_items: e.$data.vote_items,
                                    vote_item_show: e.$data.vote_items.length > 0
                                }), i.session.set("vote_items_orderno_" + e.$data.orderno, e.$data.vote_items));
                            }
                        });
                    },
                    show_add_poll: function(t) {
                        var e = this, a = this.$data.vote_items || [], o = !1;
                        if (a.forEach(function(t, a) {
                            t.id == e.$data.id && (o = !0);
                        }), !o) {
                            if (a.length >= this.$data.vote.today_max_ps) return wx.showToast({
                                title: "最多选择" + this.$data.vote.today_max_ps + "项",
                                icon: "none"
                            }), void this.setData({
                                vote_item_show: !0
                            });
                            a.push({
                                name: this.$data.item.value,
                                image: this.$data.item.image,
                                id: this.$data.item.id,
                                genre: this.$data.item.genre,
                                delta: this.$data.item.delta,
                                no: this.$data.item.no
                            });
                        }
                        a.forEach(function(t, e) {
                            if (1 == t.genre || 2 == t.genre || 3 == t.genre) {
                                var o = !1;
                                1 == t.genre && (a[e].image = "https://api.173zb.com/jiulku/api/static/images/audio_play.gif"), 
                                3 == t.genre && (a[e].image = "https://api.173zb.com/jiulku/api/static/images/open_document.png"), 
                                t.delta && t.delta.ops.forEach(function(t) {
                                    !o && t.insert && t.insert.image && (a[e].image = t.insert.image, o = !0);
                                });
                            }
                        }), this.setData({
                            vote_item_show: !0,
                            vote_items: a
                        });
                        var n = setTimeout(function() {
                            e.setData({
                                show_item_ad: !0
                            }), clearTimeout(n);
                        }, 1234);
                        i.session.set("vote_items_orderno_" + this.$data.orderno, a);
                    },
                    hide_vote_item: function(t) {
                        this.setData({
                            vote_item_show: !1,
                            show_item_ad: !1
                        });
                    },
                    confirmtap: function(t) {
                        this.setData({
                            vote_success: !1
                        });
                    },
                    report_order: function(t) {
                        var e = this.orderno, a = [ "内容令人反感", "广告或者垃圾信息", "辱骂人生攻击", "有害信息（色情、不实、违法）", "内容未经授权", "其他" ];
                        wx.showActionSheet({
                            itemList: a,
                            success: function(t) {
                                n.request({
                                    url: o.host + "/order/report_order",
                                    data: {
                                        orderno: e,
                                        report_mag: a[t.tapIndex]
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
                                                var t = i.session.get("defriend_id_list") || [];
                                                t.push(this.$data.pages[0].admin_id), i.session.set("defriend_id_list", t), 1 == getCurrentPages().length ? wx.reLaunch({
                                                    url: "/pages/issue/issue"
                                                }) : wx.navigateBack();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    openDocument: function(t) {
                        var e = t.currentTarget.dataset.src;
                        i.openDocument(e);
                    },
                    audioplay: function(t) {
                        n.audioplayid(t.target.id);
                    },
                    tapShareAppMessage: function(t) {},
                    ShareAppMessage: function(t) {
                        var e = this, a = e.$data.item.image;
                        if (e.$data.item.genre > 0) {
                            var o = !1;
                            a = e.$data.vote.top_image_url, e.$data.item.delta && e.$data.item.delta.ops.forEach(function(t) {
                                !o && t.insert && t.insert.image && (a = t.insert.image, o = !0);
                            }), 0 == o && 2 == e.$data.item.genre && (a = e.$data.item.image + "?x-oss-process=video/snapshot,t_10000,f_jpg,w_0,h_0,m_fast");
                        }
                        return n.ShareAppMessage(t, "【" + e.vote.title + "】快来投我一票吧", "pages/discovery/vote_item/vote_item", {
                            orderno: e.orderno,
                            id: e.id
                        }, function() {}, a || "");
                    },
                    sava_share_image: function(t) {
                        var e = this;
                        wx.showActionSheet({
                            itemList: [ "保存海报", "保存二维码", "复制口令" ],
                            success: function(t) {
                                switch (t.tapIndex) {
                                  case 2:
                                    wx.setClipboardData({
                                        data: "打开任意端小程序（搜索‘投票活动评选’认准logo）即可跳转进入。@!" + i.md5("shibb" + e.orderno + "oleth") + "!@",
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
                                                urls: [ e.qrcode ]
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
                                            canvasId: "shareCanvas" + e.share_qty,
                                            success: function(t) {
                                                wx.saveImageToPhotosAlbum({
                                                    filePath: t.tempFilePath,
                                                    success: function() {
                                                        wx.showModal({
                                                            title: "保存图片成功",
                                                            content: "图片已经保存到相册！",
                                                            showCancel: !1,
                                                            success: function(t) {
                                                                e.setData({
                                                                    share: !1
                                                                });
                                                            },
                                                            fail: function(t) {},
                                                            complete: function(t) {}
                                                        });
                                                    },
                                                    fail: function(t) {
                                                        console.log(t), "saveImageToPhotosAlbum:fail cancel" == t.errMsg ? wx.showModal({
                                                            title: "保存图片失败",
                                                            content: "您已取消保存图片到相册！",
                                                            showCancel: !1
                                                        }) : wx.showModal({
                                                            title: "提示",
                                                            content: "保存图片失败，您可以点击确定设置获取相册权限后再尝试保存！",
                                                            complete: function(t) {
                                                                console.log(t), t.confirm ? wx.openSetting({}) : wx.showModal({
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
                            fail: function(t) {
                                console.log(t.errMsg);
                            }
                        });
                    },
                    save_form_id: function(t) {
                        getApp().globalData.form_id = t.detail.formId;
                    },
                    onGotUserInfo: function(t) {
                        this.setData({
                            show_auth: 0
                        });
                    },
                    hide_vote_lable: function() {
                        this.setData({
                            vote_lable_show: !1
                        });
                    },
                    show_vote_lable: function() {
                        this.setData({
                            vote_lable_show: !0
                        });
                    },
                    change_vote_lable_box: function(t) {
                        var e = t.currentTarget.dataset.vote_lable_max, a = t.currentTarget.dataset.index, o = this.$data.vote.vote_lables, i = 0, n = 0;
                        if (o[a].checked) o.forEach(function(t) {
                            n += t.poll_qty, t.checked && i++;
                        }), i--, n--, o[a].poll_qty--; else {
                            if (o.forEach(function(t) {
                                n += t.poll_qty, t.checked && i++;
                            }), i >= e) return;
                            i++, n++, o[a].poll_qty++;
                        }
                        o[a].checked = !o[a].checked, this.$data.vote.vote_lables = o, this.$data.vote.lable_poll_qty = n, 
                        this.setData({
                            vote: this.$data.vote,
                            vote_lable_check_qty: i
                        });
                    },
                    poll_tap: function(t) {
                        var e = this;
                        if (this.hide_vote_buttom) wx.showModal({
                            content: "没有投票权限",
                            showCancel: !1,
                            success: function(t) {
                                1 == getCurrentPages().length ? wx.redirectTo({
                                    url: "/pages/discovery/discovery?orderno=" + e.orderno + "&hide_ad=" + e.$data.hide_ad + "&home=" + e.$data.home
                                }) : wx.navigateBack();
                            }
                        }); else {
                            var a = this;
                            0 != a.vote.user_anonymity ? a.add_poll_tap() : wx.getSetting({
                                success: function(t) {
                                    t.authSetting["scope.userInfo"] ? a.add_poll_tap() : a.setData({
                                        show_auth: 1
                                    });
                                }
                            });
                        }
                    },
                    add_poll_tap: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = this;
                        this.get_page_info(o.add_vote_item_poll, function() {
                            if (wx.getStorageSync("add_poll_tap_" + e.orderno) && !e.vote.platform_admin || (wx.setStorageSync("add_poll_tap_" + e.orderno, 1), 
                            n.subscribe_msg()), wx.pageScrollTo({
                                scrollTop: 0
                            }), e.vote.hide_ad ? wx.showModal({
                                content: "投票成功",
                                showCancel: !1
                            }) : e.setData({
                                vote_success: !0
                            }), e.setData({
                                vote_lable_show: !1
                            }), getApp().globalData.setNavigationBartap(e, !0), n.load_page_list(e, "ddk", n.addSid(o.ddk_top_goods_list_query), {
                                start: 0,
                                sort_type: 1
                            }, !0), e.eventChannel && e.eventChannel.emit("vote_item_poll"), !e.vote.hide_ad && getApp().globalData.ad.adUnitId_2 && !getApp().globalData.interstitialAd) {
                                console.log("展示插屏"), getApp().globalData.interstitialAd = !0;
                                var t = null;
                                wx.createInterstitialAd && (t = wx.createInterstitialAd({
                                    adUnitId: getApp().globalData.ad.adUnitId_2
                                })), t && t.show().catch(function(t) {
                                    console.error(t, getApp().globalData.ad.adUnitId_2), getApp().globalData.interstitialAd = !1;
                                });
                            }
                        }, t);
                    },
                    bindgetphonenumber: function(t) {
                        if ("" != t.detail.iv && "" != t.detail.encryptedData) {
                            var e = this;
                            n.request({
                                url: o.host + "/user_wx/wx_bind_phone",
                                data: n.addSid({
                                    wxPhoneIv: t.detail.iv,
                                    wxPhoneData: t.detail.encryptedData
                                }),
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(a) {
                                    1 == a.data.status && (n.clearlogin(), getApp().globalData.hasLogin = !1, getApp().globalData.login_data = !1, 
                                    e[t.currentTarget.dataset.func](t));
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
                    get_page_info: function(t, e) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, d = this;
                        n.request({
                            url: t,
                            data: n.signdata({
                                orderno: this.orderno,
                                id: this.id,
                                add_poll: a,
                                vote_lables: this.$data.vote.setting_lable ? JSON.stringify(this.$data.vote.vote_lables) : "",
                                home: this.$data.home
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                if (console.log(t), 1 == t.data.status) {
                                    t.data.need_check_table_group && wx.showModal({
                                        content: "发布者指定成员才能投票，请咨询发布者如何参与投票。",
                                        showCancel: !1,
                                        confirmText: "我知道了",
                                        success: function(t) {
                                            d.setData({
                                                hide_vote_buttom: 1
                                            });
                                        }
                                    }), t.data.need_check_wechat_gzh && 1035 != getApp().globalData.options.scene && 1043 != getApp().globalData.options.scene && 1058 != getApp().globalData.options.scene && 1074 != getApp().globalData.options.scene && 1082 != getApp().globalData.options.scene && (d.setData({
                                        hide_vote_buttom: 1
                                    }), wx.showModal({
                                        content: "发布者指定了公众号成员参与，需要进入指定公众号。长按图片保存,通过微信扫一扫获取相册二维码识别进入公众号",
                                        showCancel: !1,
                                        confirmText: "我知道了",
                                        success: function() {
                                            "" != t.data.check_wechat_gzh_info.hint ? wx.showModal({
                                                content: t.data.check_wechat_gzh_info.hint,
                                                showCancel: !1,
                                                confirmText: "我知道了",
                                                success: function() {
                                                    wx.previewImage({
                                                        urls: [ t.data.check_wechat_gzh_info.qrcode ]
                                                    });
                                                }
                                            }) : wx.previewImage({
                                                urls: [ t.data.check_wechat_gzh_info.qrcode ]
                                            });
                                        }
                                    })), t.data.need_check_wechat_group && (1044 == getApp().globalData.options.scene && getApp().globalData.options.shareTicket ? wx.getShareInfo({
                                        shareTicket: getApp().globalData.options.shareTicket,
                                        success: function(e) {
                                            n.request({
                                                url: o.get_wechat_group_id,
                                                data: n.addSid({
                                                    encryptedData: e.encryptedData,
                                                    iv: e.iv
                                                }),
                                                method: "POST",
                                                header: {
                                                    "content-type": "application/x-www-form-urlencoded"
                                                },
                                                success: function(e) {
                                                    1 == e.data.status && 0 != i.array_contain(t.data.check_wechat_groups, e.data.opengid) || wx.showModal({
                                                        content: "发布者指定了微信群参与，在指定群聊天框打开才能进入。",
                                                        showCancel: !1,
                                                        success: function(t) {
                                                            d.setData({
                                                                hide_vote_buttom: 1
                                                            });
                                                        }
                                                    });
                                                },
                                                fail: function(t) {
                                                    console.log(t);
                                                }
                                            }, d, 1);
                                        }
                                    }) : wx.showModal({
                                        content: "发布者指定了微信群参与，在指定群聊天框打开才能进入。",
                                        showCancel: !1,
                                        success: function(t) {
                                            d.setData({
                                                hide_vote_buttom: 1
                                            });
                                        }
                                    })), t.data.need_check_wifi && wx.getConnectedWifi({
                                        success: function(e) {
                                            0 == i.array_contain(t.data.check_wifis, e.wifi.BSSID, "BSSID") && wx.showModal({
                                                content: "需要连接指定wifi才能填写，请咨询发布者连接指定wifi在来。",
                                                showCancel: !1,
                                                confirmText: "我知道了",
                                                success: function(t) {
                                                    d.setData({
                                                        hide_vote_buttom: 1
                                                    });
                                                }
                                            });
                                        },
                                        fail: function(t) {
                                            wx.showModal({
                                                content: "需要连接指定wifi才能填写，请咨询发布者连接指定wifi在来。",
                                                showCancel: !1,
                                                confirmText: "我知道了",
                                                success: function() {
                                                    wx.showModal({
                                                        content: t.errMsg,
                                                        showCancel: !1,
                                                        success: function() {
                                                            d.setData({
                                                                hide_vote_buttom: 1
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    }), t.data.need_check_addr && (d.setData({
                                        hide_vote_buttom: 1
                                    }), n.getUserLocation(function(e) {
                                        if (!1 !== e) if (d.setData({
                                            hide_vote_buttom: 0
                                        }), d.ad_info = e.local.ad_info, t.data.need_check_addr_locals) {
                                            var a = !1, o = 0, i = {};
                                            t.data.check_addr_locals.forEach(function(t) {
                                                var s = n.distance(t.latitude, t.longitude, e.latitude, e.longitude);
                                                (0 == o || o > s) && (o = s, i = t), t.km > 0 ? !a && s <= t.km && (a = !0) : a || t.locality != e.locality || (a = !0);
                                            }), a || (null == i.km || 0 == i.km ? wx.showModal({
                                                content: "限定" + i.locality + "区域可填，您不在此范围内。",
                                                showCancel: !1,
                                                success: function() {
                                                    d.setData({
                                                        hide_vote_buttom: 1
                                                    });
                                                }
                                            }) : wx.showModal({
                                                content: "发布者限定了发布区域范围" + i.km + "千米内可填，您不在此范围内。（超出了" + parseFloat(o - parseFloat(i.km)).toFixed(2) + "千米）",
                                                cancelText: "查看位置",
                                                success: function(t) {
                                                    t.cancel ? wx.openLocation({
                                                        latitude: parseFloat(i.latitude),
                                                        longitude: parseFloat(i.longitude),
                                                        scale: 13,
                                                        success: function() {
                                                            d.setData({
                                                                hide_vote_buttom: 1
                                                            });
                                                        }
                                                    }) : d.setData({
                                                        hide_vote_buttom: 1
                                                    });
                                                }
                                            }));
                                        } else {
                                            var s = e.local.ad_info.province;
                                            s && t.data.restrict_region_arr[0] != s && (d.setData({
                                                hidepage: !0
                                            }), wx.showModal({
                                                content: "限定" + t.data.restrict_region + "区域参与，您不在此范围内。",
                                                showCancel: !1,
                                                success: function() {
                                                    d.setData({
                                                        hide_vote_buttom: 1
                                                    });
                                                }
                                            }));
                                            var r = e.local.ad_info.city;
                                            "全部" != t.data.restrict_region_arr[1] && r && t.data.restrict_region_arr[1] != r && (d.setData({
                                                hidepage: !0
                                            }), wx.showModal({
                                                content: "限定" + t.data.restrict_region + "区域参与，您不在此范围内。",
                                                showCancel: !1,
                                                success: function() {
                                                    d.setData({
                                                        hide_vote_buttom: 1
                                                    });
                                                }
                                            }));
                                            var c = e.local.ad_info.district;
                                            "全部" != t.data.restrict_region_arr[2] && c && t.data.restrict_region_arr[2] != c && (d.setData({
                                                hidepage: !0
                                            }), wx.showModal({
                                                content: "限定" + t.data.restrict_region + "区域参与，您不在此范围内。",
                                                showCancel: !1,
                                                success: function() {
                                                    d.setData({
                                                        hide_vote_buttom: 1
                                                    });
                                                }
                                            }));
                                        } else wx.showModal({
                                            content: "获取位置信息失败。",
                                            showCancel: !1,
                                            success: function() {
                                                1 == d.navigationdata.navindexs ? d.reLaunchtap() : wx.navigateBack();
                                            }
                                        });
                                    }, !0)), t.data.add_exp > 0 && (d.setData({
                                        show_add_exp: 0
                                    }), d.setData({
                                        show_add_exp: "+ " + t.data.add_exp
                                    }));
                                    var a = 0, r = [], c = 0, l = t.data.list, _ = null;
                                    if (!(l = i.selectionSort(l, !0, "poll_qty")) || 0 == l.length) return void wx.showModal({
                                        content: "当前版本不兼容",
                                        showCancel: !1
                                    });
                                    l.forEach(function(e, o) {
                                        e.id != d.id && (r.length < 4 || e.hot_qty >= c) && (c = e.hot_qty, r.unshift(e), 
                                        r.length > 4 && r.shift()), e.id == d.id && (a = o + 1, _ = e, t.data.setting_lable && (_.vote_lables && (t.data.vote_lables = _.vote_lables), 
                                        t.data.lable_poll_qty = 0, t.data.vote_lables && t.data.vote_lables.forEach(function(e) {
                                            t.data.lable_poll_qty += e.poll_qty;
                                        })));
                                    }), _.isJson = function(t) {
                                        if ("string" == typeof t) try {
                                            var e = JSON.parse(t);
                                            return !("object" != typeof e || !e);
                                        } catch (e) {
                                            return console.log("error：" + t + "!!!" + e), !1;
                                        }
                                    }(_.delta), _.isJson && (_.delta = JSON.parse(_.delta)), t.data.hide_vote_poll && (r = []), 
                                    r.forEach(function(t, e) {
                                        if (1 == t.genre || 2 == t.genre || 3 == t.genre) {
                                            var a = !1;
                                            1 == t.genre && (r[e].image = "https://api.173zb.com/jiulku/api/static/images/audio_play.gif"), 
                                            2 == t.genre && (r[e].image += "?x-oss-process=video/snapshot,t_10000,f_jpg,w_0,h_0,m_fast", 
                                            r[e].large_image && (r[e].image = r[e].large_image)), 3 == t.genre && (r[e].image = "https://api.173zb.com/jiulku/api/static/images/open_document.png"), 
                                            t.delta && t.delta.ops.forEach(function(t) {
                                                !a && t.insert && t.insert.image && (r[e].image = t.insert.image, a = !0);
                                            });
                                        }
                                    }), r = i.selectionSort(r, !0, "hot_qty"), 1 == d.$data.hide_ad && (t.data.hide_ad = 1), 
                                    1 == d.$data.home && (t.data.allow_share = !1), t.data.allow_share ? wx.showShareMenu({
                                        withShareTicket: !0,
                                        menus: [ "shareAppMessage", "shareTimeline" ]
                                    }) : wx.hideShareMenu(), t.data.theme && (d.$data.theme = t.data.theme), d.setData({
                                        item: _,
                                        vote: t.data,
                                        ranking: a,
                                        hot_list: r,
                                        theme: d.$data.theme
                                    }), "function" == typeof e && e();
                                } else {
                                    if (s && -1 == t.data.status) return void wx.showModal({
                                        content: t.data.msg,
                                        confirmText: "立即投票",
                                        cancelText: "稍后再投",
                                        success: function(t) {
                                            t.confirm ? s && (d.add_poll = !0, console.log("激励视频 广告显示"), s.show().catch(function() {
                                                s.load().then(function() {
                                                    return s.show();
                                                }).catch(function(t) {
                                                    console.log("激励视频 广告显示失败");
                                                });
                                            })) : wx.navigateBack();
                                        }
                                    });
                                    wx.showModal({
                                        content: t.data.msg,
                                        showCancel: !1,
                                        success: function() {
                                            wx.navigateBack();
                                        }
                                    });
                                }
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }, this, 1);
                    },
                    item_tap: function(t) {
                        var e = t.currentTarget.dataset.id;
                        wx.redirectTo({
                            url: "/pages/discovery/vote_item/vote_item?redirectTo=1&orderno=" + this.orderno + "&id=" + e + "&hide_ad=" + this.$data.hide_ad + "&home=" + this.$data.home
                        });
                    },
                    reLaunchtap: function() {
                        getCurrentPages().length > 1 ? wx.navigateBack() : wx.reLaunch({
                            url: "/pages/discovery/discovery?orderno=" + this.orderno
                        });
                    },
                    ip_log_tap: function(t) {
                        var e = this;
                        n.request({
                            url: o.host + "/order/get_ip_log_info",
                            data: n.signdata({
                                orderno: e.$data.orderno,
                                id: e.$data.id,
                                ip: t.currentTarget.dataset.ip,
                                ok: t.currentTarget.dataset.ok ? 1 : 0
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(a) {
                                -1 != a.data.status || t.currentTarget.dataset.ok ? wx.showToast({
                                    title: a.data.msg,
                                    icon: "none"
                                }) : wx.showModal({
                                    content: "确认操作",
                                    success: function(a) {
                                        a.confirm && (t.currentTarget.dataset.ok = !0, e.ip_log_tap(t));
                                    }
                                });
                            }
                        });
                    },
                    ad_pull_back: function(t) {
                        this.pull_back = !0, this.add_poll = !1, s && (console.log("激励视频 广告显示"), s.show().catch(function() {
                            s.load().then(function() {
                                return s.show();
                            }).catch(function(t) {
                                console.log("激励视频 广告显示失败");
                            });
                        }));
                    },
                    _pull_back: function(t) {
                        var e = this;
                        n.request({
                            url: o.host + "/order/pull_back",
                            data: n.signdata({
                                orderno: e.$data.orderno,
                                id: e.$data.id
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                1 == t.data.status ? e.reLaunchtap() : wx.showToast({
                                    title: t.data.msg,
                                    icon: "none"
                                });
                            }
                        });
                    },
                    ad_show_ip: function(t) {
                        var e = this;
                        wx.showModal({
                            content: "内包含了所有参与投票人的ip模糊信息，举办方可以清楚看到投票人在平台的所有投票记录，如果有异常数据，平台有权删除数据并对异常ip封号处理，举办方有权公开数据决定是否取消违规作品资格！",
                            confirmText: e.$data.vote.issue_user ? "查看记录" : "我知道了",
                            success: function(t) {
                                if (e.$data.vote.issue_user) if (t.confirm) e.load_ip_votes(); else if (!e.$data.vote.hide_ad && app.ad.adUnitId_2 && !app.interstitialAd) {
                                    app.interstitialAd = !0;
                                    var a = null;
                                    wx.createInterstitialAd && (a = wx.createInterstitialAd({
                                        adUnitId: app.ad.adUnitId_2
                                    })), a && a.show().catch(function(t) {
                                        console.error(t), app.interstitialAd = !1;
                                    });
                                }
                            }
                        });
                    },
                    load_ip_votes: function() {
                        var t = this, e = this.$data.log_ip_votes || {}, a = e.last_start || 0;
                        n.list_request(o.get_vote_log_list, this, e, n.addSid({
                            start: a,
                            orderno: this.$data.orderno,
                            id: this.$data.id,
                            ip_group: 1
                        }), function(e, a) {
                            t.setData({
                                log_ip_votes: e
                            });
                        });
                    },
                    ad_add_hot: function() {
                        var t = this;
                        t.ad.adVideo_2 ? wx.showModal({
                            content: "观看视频选手增加热度值",
                            confirmText: "增加热度",
                            success: function(e) {
                                if (e.confirm) console.log(s), t.show_ip = !1, t.add_poll = !1, s && (console.log("激励视频 广告显示"), 
                                s.show().catch(function() {
                                    s.load().then(function() {
                                        return s.show();
                                    }).catch(function(t) {
                                        console.log("激励视频 广告显示失败");
                                    });
                                })); else if (!t.vote.hide_ad && getApp().globalData.ad.adUnitId_2 && !getApp().globalData.interstitialAd) {
                                    getApp().globalData.interstitialAd = !0;
                                    var a = null;
                                    wx.createInterstitialAd && (a = wx.createInterstitialAd({
                                        adUnitId: getApp().globalData.ad.adUnitId_2
                                    })), a && a.show().catch(function(t) {
                                        console.error(t), getApp().globalData.interstitialAd = !1;
                                    });
                                }
                            }
                        }) : t.get_page_info(o.get_vote_order_detail_ad, function() {
                            0 != t.vote.add_hot_qty ? (t.eventChannel && t.eventChannel.emit("vote_item_read", {
                                ad_add_hot: t.vote.add_hot_qty
                            }), wx.showToast({
                                title: "增加热度值" + t.vote.add_hot_qty,
                                icon: "none"
                            })) : wx.showToast({
                                title: "今日增加热度上限了",
                                icon: "none"
                            });
                        });
                    },
                    onEditorReady: function(e) {
                        var a = this, o = e.currentTarget.id;
                        t.createSelectorQuery().in(this).select("#" + o).context(function(t) {
                            "editor_delta" == o && t.context.setContents({
                                delta: a.item.delta
                            }), "editor_introduce" == o && t.context.setContents({
                                delta: a.vote.release_introduce
                            });
                        }).exec();
                    },
                    cencel_share: function(t) {
                        this.setData({
                            share: !1,
                            share_qty: this.share_qty + 1
                        });
                    },
                    previewImage: function(t) {
                        i.previewImage([ t.currentTarget.dataset.pic ], t.currentTarget.dataset.pic);
                    },
                    generate_vote_qrcode: function(t) {
                        var e = this, a = e.orderno, s = e.vote.title, d = e.item.image, r = e.item.value.replace(/\s/g, "");
                        if (e.item.genre > 0) {
                            d = e.vote.top_image_url;
                            var c = !1;
                            e.$data.item.delta && e.$data.item.delta.ops.forEach(function(t) {
                                !c && t.insert && t.insert.image && (d = t.insert.image, c = !0);
                            }), 0 == c && 2 == e.$data.item.genre && (d = e.$data.item.large_image || e.$data.item.image + "?x-oss-process=video/snapshot,t_12000,f_jpg,w_0,h_0,m_fast");
                        }
                        r.length > 10 && (r = r.substr(0, 9) + "...");
                        var l = 100;
                        n.request({
                            url: o.vote_share_image,
                            data: n.addSid({
                                orderno: a,
                                id: e.id,
                                page: "pages/discovery/vote_item/vote_item",
                                width: 400
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                if (1 == t.data.status) {
                                    wx.showLoading({
                                        title: "加载中"
                                    }), e.setData({
                                        qrcode: t.data.image
                                    });
                                    var a = i.Promisify(wx.getImageInfo);
                                    i.Promise.all([ a({
                                        src: t.data.image
                                    }), a({
                                        src: d
                                    }) ]).then(function(t) {
                                        wx.hideLoading();
                                        var a = wx.createCanvasContext("shareCanvas" + e.share_qty);
                                        if (a.setFillStyle("#fff"), a.fillRect(0, 0, 375, 525), t[1].width < t[1].height) var o = t[1].width, n = o, d = 0, r = (t[1].height - n) / 2; else o = n = t[1].height, 
                                        r = 0, d = (t[1].width - o) / 2;
                                        a.drawImage(t[1].path, Number(d), Number(r), Number(o), Number(n), 0, 0, 375, 375), 
                                        a.setTextAlign("left"), a.setFillStyle("#000"), a.setFontSize(15), i.drawText(a, "【" + e.item.value + "】正在参与", 10, 410, 40, 335, 15), 
                                        a.setTextAlign("left"), a.setTextBaseline("middle"), a.setFillStyle("#000"), a.setFontSize(22), 
                                        i.drawText(a, s, 25, 445, 100, 215, 22), a.setTextAlign("center"), a.setFontSize(12), 
                                        i.drawText(a, "识别二维码投Ta票", 310, 510, 40, l, 12), a.drawImage(t[0].path, 260, 400, l, l), 
                                        a.stroke(), a.draw();
                                    }), e.setData({
                                        share: !0
                                    });
                                }
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }, e, 0);
                    },
                    hide_exp: function() {
                        this.setData({
                            show_add_exp: null
                        });
                    },
                    navigatortap: function() {
                        wx.pageScrollTo({
                            scrollTop: 0
                        }), this.setData({
                            vote_success: !1
                        }), getApp().globalData.setNavigationBartap(this, !1);
                    },
                    setData: function(t) {
                        var e, a, o = this, i = [];
                        Object.keys(t).forEach(function(n) {
                            i = n.split("."), e = t[n], a = o.$data, i.forEach(function(t, n) {
                                n + 1 == i.length ? (a[t] === e && o.$set(a, t, {}), o.$set(a, t, e)) : a[t] || o.$set(a, t, {}), 
                                a = a[t];
                            });
                        });
                    }
                }
            };
            e.default = d;
        }).call(this, a("543d").default);
    },
    9227: function(t, e, a) {
        "use strict";
        a.r(e);
        var o = a("76fa"), i = a.n(o);
        for (var n in o) "default" !== n && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(n);
        e.default = i.a;
    },
    f4c5: function(t, e, a) {}
}, [ [ "31f4", "common/runtime", "common/vendor" ] ] ]);