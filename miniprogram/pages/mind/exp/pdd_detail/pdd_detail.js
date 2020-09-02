(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/exp/pdd_detail/pdd_detail" ], {
    "047c": function(t, e, o) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("e7dc"), e(o("66fd")), t(e(o("2fbb")).default);
        }).call(this, o("543d").createPage);
    },
    "18e5": function(t, e, o) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = o("aca8"), a = (o("042c"), o("81c6")), i = o("e634"), s = {
            data: function() {
                return {
                    navigationdata: {},
                    savedImgUrl: "",
                    share: !1,
                    qrcode: "",
                    goHome: !1,
                    goods_gallery_urls: null,
                    goods_name: null,
                    min_group_price: null,
                    coupon_discount: null,
                    sales_tip: null,
                    coupon_remain_quantity: null,
                    no_more: null,
                    coupon_start_time: null,
                    coupon_end_time: null,
                    goods_id: ""
                };
            },
            components: {},
            props: {},
            onLoad: function(t) {
                var e = decodeURIComponent(t.scene);
                32 == e.length && (t.goods_id = e.substr(-17).replace(/\$/g, "")), getApp().globalData.setNavigationBarTitle(this, "星星购"), 
                1 == getCurrentPages().length && this.setData({
                    goHome: !0
                });
                var o = this;
                i.request({
                    url: n.ddk_goods_goods_detail,
                    data: i.addSid({
                        goods_id: t.goods_id
                    }),
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        if (console.log(t), 1 == t.data.status) {
                            var e = t.data.goods_details[0];
                            e.coupon_remain_quantity > 0 && (e.coupon_start_time = a.date("Y/m/d", e.coupon_start_time), 
                            e.coupon_end_time = a.date("Y/m/d", e.coupon_end_time)), o.setData(e);
                        }
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                }, o, 1);
            },
            onReady: function() {},
            onShow: function() {},
            onHide: function() {},
            onUnload: function() {},
            onPullDownRefresh: function() {},
            onReachBottom: function() {},
            onShareAppMessage: function(t) {
                return i.ShareAppMessage(t, (this.min_group_price - this.coupon_discount) / 100 + "元 - " + this.goods_name, "pages/mind/exp/pdd_detail/pdd_detail", {
                    goods_id: this.goods_id
                }, function() {}, this.goods_image_url);
            },
            methods: {
                tapShareAppMessage: function(t) {},
                ShareAppMessage: function(t) {
                    return i.ShareAppMessage(t, (this.min_group_price - this.coupon_discount) / 100 + "元 - " + this.goods_name, "pages/mind/exp/pdd_detail/pdd_detail", {
                        goods_id: this.goods_id
                    }, function() {}, this.goods_image_url);
                },
                sava_share_image: function(t) {
                    var e = this;
                    wx.showLoading({
                        title: "保存中"
                    });
                    var o = setTimeout(function() {
                        wx.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: 375,
                            height: 525,
                            destWidth: 1125,
                            destHeight: 1575,
                            canvasId: "shareCanvas",
                            success: function(t) {
                                console.log(t, "保存"), e.setData({
                                    savedImgUrl: t.tempFilePath
                                });
                            }
                        }), wx.hideLoading(), clearTimeout(o);
                    }, 1e3), n = setTimeout(function() {
                        clearTimeout(n), "" != e.savedImgUrl && wx.saveImageToPhotosAlbum({
                            filePath: e.savedImgUrl,
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
                    }, 1500);
                },
                cencel_share: function(t) {
                    this.setData({
                        share: !1
                    });
                },
                generate_qrcode: function(t) {
                    var e = this, o = this.goods_id, s = (this.min_group_price - this.coupon_discount) / 100 + "元 - " + this.goods_name;
                    s.length > 45 && (s = s.substr(0, 45) + "...");
                    var d = 100;
                    i.request({
                        url: n.pdd_goods_share,
                        data: i.addSid({
                            goods_id: o,
                            page: "pages/mind/exp/pdd_detail/pdd_detail",
                            width: d
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
                                var o = a.Promisify(wx.getImageInfo);
                                a.Promise.all([ o({
                                    src: t.data.image
                                }), o({
                                    src: e.goods_gallery_urls[0]
                                }) ]).then(function(t) {
                                    wx.hideLoading();
                                    var e = wx.createCanvasContext("shareCanvas");
                                    if (e.setFillStyle("#fff"), e.fillRect(0, 0, 375, 525), t[1].width < t[1].height) var o = t[1].width, n = o, i = 0, c = (t[1].height - n) / 2; else o = n = t[1].height, 
                                    c = 0, i = (t[1].width - o) / 2;
                                    console.log(o, n, i, c, t[1]), e.drawImage(t[1].path, Number(i), Number(c), Number(o), Number(n), 0, 0, 375, 375), 
                                    e.setTextAlign("left"), e.setFillStyle("#000"), e.setFontSize(16), a.drawText(e, s, 20, 435 + (s.length < 11 ? 15 : 0), 200, 210), 
                                    e.setFillStyle("#000"), e.setTextAlign("center"), e.setFontSize(12), a.drawText(e, "识别二维码查看", 310, 510, 40, d), 
                                    e.drawImage(t[0].path, 260, 390, d, d), e.stroke(), e.draw();
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
                to_pdd: function() {
                    var t = this;
                    wx.showModal({
                        content: "确认兑换！",
                        success: function(e) {
                            e.confirm && i.request({
                                url: n.ddk_goods_promotion_url_generate,
                                data: i.addSid({
                                    goods_id: t.goods_id
                                }),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    1 == t.data.status ? wx.showToast({
                                        title: "兑换成功",
                                        success: function() {
                                            wx.navigateToMiniProgram({
                                                appId: t.data.app_id || "wx32540bd863b27570",
                                                path: t.data.page_path,
                                                envVersion: "release",
                                                success: function(t) {}
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
                            }, t, 1);
                        }
                    });
                },
                setData: function(t) {
                    var e, o, n = this, a = [];
                    Object.keys(t).forEach(function(i) {
                        a = i.split("."), e = t[i], o = n.$data, a.forEach(function(t, i) {
                            i + 1 == a.length ? (o[t] === e && n.$set(o, t, {}), n.$set(o, t, e)) : o[t] || n.$set(o, t, {}), 
                            o = o[t];
                        });
                    });
                }
            }
        };
        e.default = s;
    },
    "2fbb": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("9d8d"), a = o("d30d");
        for (var i in a) "default" !== i && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(i);
        o("fda4");
        var s = o("f0c5"), d = Object(s.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = d.exports;
    },
    "97bc": function(t, e, o) {},
    "9d8d": function(t, e, o) {
        "use strict";
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var n = function() {
            this.$createElement, this._self._c;
        }, a = [];
    },
    d30d: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("18e5"), a = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = a.a;
    },
    fda4: function(t, e, o) {
        "use strict";
        var n = o("97bc");
        o.n(n).a;
    }
}, [ [ "047c", "common/runtime", "common/vendor" ] ] ]);