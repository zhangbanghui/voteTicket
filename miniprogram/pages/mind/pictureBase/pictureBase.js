(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mind/pictureBase/pictureBase" ], {
    "23e7": function(e, t, a) {},
    "49fa": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a("5eae"), o = a("55c1");
        for (var n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        a("52ae");
        var s = a("f0c5"), c = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        t.default = c.exports;
    },
    "52ae": function(e, t, a) {
        "use strict";
        var i = a("23e7");
        a.n(i).a;
    },
    "55c1": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a("eca2"), o = a.n(i);
        for (var n in i) "default" !== n && function(e) {
            a.d(t, e, function() {
                return i[e];
            });
        }(n);
        t.default = o.a;
    },
    "5eae": function(e, t, a) {
        "use strict";
        a.d(t, "b", function() {
            return i;
        }), a.d(t, "c", function() {
            return o;
        }), a.d(t, "a", function() {});
        var i = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__map(e.col1, function(t, a) {
                var i = e.tools.in_array(t.pic, e.checked_images || []), o = e.tools.in_array(t.pic, e.checked_images || []), n = e.tools.in_array(t.pic, e.checked_images || []);
                return {
                    $orig: e.__get_orig(t),
                    g0: i,
                    g1: o,
                    g2: n
                };
            })), a = e.__map(e.col2, function(t, a) {
                var i = e.tools.in_array(t.pic, e.checked_images || []), o = e.tools.in_array(t.pic, e.checked_images || []);
                return {
                    $orig: e.__get_orig(t),
                    g3: i,
                    g4: o
                };
            }), i = e.tools.toFixed((e.now_size || 0) / 1024, 2), o = e.tools.toFixed((e.max_size || 0) / 1024.2), n = e.tools.toFixed((e.max_upload_size || 0) / 1024, 2);
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: t,
                    l1: a,
                    g5: i,
                    g6: o,
                    g7: n
                }
            });
        }, o = [];
    },
    "71c9": function(e, t, a) {
        "use strict";
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            a("e7dc"), t(a("66fd")), e(t(a("49fa")).default);
        }).call(this, a("543d").createPage);
    },
    eca2: function(e, t, a) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a("aca8"), o = a("81c6"), n = a("e634"), s = (new Object(), getApp().globalData, 
            0), c = 0, r = [], l = {
                data: function() {
                    return {
                        navigationdata: {},
                        level_nav_title: "",
                        categorys: [],
                        images: [],
                        showDocument: !0,
                        showVideo: !0,
                        showAudio: !0,
                        hideImage: !1,
                        nav: {
                            color: "#268cdd",
                            check: 0,
                            items: [ "图库", "我的" ]
                        },
                        review: 0,
                        select_group: !1,
                        use_image_id: "",
                        level_nav_left: "",
                        img_urls: [],
                        col1: [],
                        col2: [],
                        last_start: "",
                        checked_images: "",
                        navigate_back: "",
                        max_upload_size: "",
                        now_size: "",
                        max_size: "",
                        arr_type: "",
                        wx_check: 0,
                        sweixin: "",
                        call_sid: ""
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
                onLoad: function(e) {
                    getApp().globalData.setNavigationBarTitle(this, "我的图库"), this.nav.check = o.session.get("navBoxTapNavCheck") || 0, 
                    e.navigate_back ? (this.setData({
                        showAudio: !!e.showAudio,
                        showVideo: !!e.showVideo,
                        showDocument: !!e.showDocument,
                        hideImage: !!e.hideImage,
                        navigate_back: e,
                        checked_images: o.navigate.get() && o.navigate.get().images || []
                    }), e.hideImage && (this.nav.check = 1)) : (this.setData(e), e.call_sid && getApp().globalData.setNavigationBartap(this, !0)), 
                    this.setData({
                        nav: this.nav
                    }), this.loadImages();
                },
                onReady: function() {},
                onShow: function() {},
                onHide: function() {},
                onUnload: function() {},
                onPullDownRefresh: function() {},
                onReachBottom: function() {
                    this.arr_type = "", this.loadImages(this.last_start, "push");
                },
                methods: {
                    back_app: function() {
                        wx.navigateBackApplication({
                            extraData: this.$data.call_sid
                        });
                    },
                    kanshipin: function() {},
                    cancel_group: function() {
                        this.setData({
                            select_group: !1
                        });
                    },
                    select_groupFun: function(e) {
                        var t = e.currentTarget.dataset.name;
                        this.update_group(t);
                    },
                    insert_group: function(e) {
                        var t = e.detail.value, a = this;
                        a.update_group(t, function() {
                            a.categorys.push(t), a.setData({
                                categorys: a.categorys
                            });
                        });
                    },
                    update_group: function(e, t) {
                        var a = this.use_image_id, o = this;
                        this.setData({
                            select_group: !1,
                            use_image_id: null
                        }), n.request({
                            url: i.update_group_category,
                            data: n.signdata({
                                image_id: a,
                                category: e
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                1 == e.data.status && ("function" == typeof t && t(), o.loadImages(0, o.last_start));
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        }, this, 1);
                    },
                    navBoxTap: function(e) {
                        var t = this.nav;
                        e.currentTarget.dataset.index != t.check && (t.check = e.currentTarget.dataset.index, 
                        o.session.set("navBoxTapNavCheck", t.check), this.setData({
                            nav: t
                        }), this.arr_type = "", this.loadImages());
                    },
                    level_nav_tap: function(e) {
                        this.setData({
                            level_nav_left: e.target.offsetLeft,
                            level_nav_title: e.currentTarget.dataset.item
                        }), o.session.set(this.nav.check + "_picture_category", e.currentTarget.dataset.item), 
                        o.session.set(this.nav.check + "_picture_level_nav_left", e.target.offsetLeft), 
                        this.arr_type = "", this.loadImages(0);
                    },
                    addbnt: function(t) {
                        var a = this, s = [], c = {}, r = 0;
                        a.$data.hideImage || s.push("上传图片"), a.$data.showVideo && !a.$data.wx_check && s.push("上传视频"), 
                        a.$data.showAudio && s.push("上传音频"), a.$data.showDocument && s.push("上传文档"), a.$data.wx_check || s.push("上传外链"), 
                        this.arr_type = "unshift", wx.showActionSheet({
                            itemList: s,
                            success: function(l) {
                                "上传图片" == s[l.tapIndex] && wx.chooseImage({
                                    count: 9,
                                    sourceType: [ "album", "camera" ],
                                    success: function(t) {
                                        var o = t.tempFilePaths.length, s = t.tempFilePaths.length;
                                        t.tempFilePaths.forEach(function(t, c) {
                                            var l = setTimeout(function() {
                                                wx.showLoading({
                                                    title: "上传中 "
                                                });
                                                var c = wx.uploadFile({
                                                    url: i.upload_image,
                                                    filePath: t,
                                                    name: "imageFile",
                                                    formData: n.addSid(Object.assign(a.navigate_back || {}, {
                                                        category: a.level_nav_title
                                                    }), a.$data.call_sid),
                                                    success: function(t) {
                                                        if (413 == t.statusCode) return wx.hideLoading(), void wx.showToast({
                                                            title: "上传文件过大",
                                                            icon: "none"
                                                        });
                                                        o--, s > 1 && wx.showLoading({
                                                            title: "第" + (s - o) + "张"
                                                        });
                                                        var i = JSON.parse(t.data.replace(/^\s+|\s+$/gm, ""));
                                                        0 == i.status ? (wx.hideLoading(), wx.showModal({
                                                            content: i.msg,
                                                            showCancel: !1
                                                        })) : a.setData({
                                                            images: [ {
                                                                id: "img-" + +new Date() + "-1",
                                                                pic: i.image,
                                                                image_id: i.image_id,
                                                                type: i.type,
                                                                genre: i.genre,
                                                                name: i.name,
                                                                src: i.src
                                                            } ]
                                                        }, function() {
                                                            e.createSelectorQuery().in(a).select("#j_page").boundingClientRect(function(e) {
                                                                wx.pageScrollTo({
                                                                    scrollTop: 0
                                                                });
                                                            }).exec();
                                                        }), 0 == o && (wx.hideLoading(), wx.showToast({
                                                            title: "上传完成"
                                                        }), c.offProgressUpdate());
                                                    },
                                                    fail: console.log
                                                });
                                                clearTimeout(l), 1 == s && c.onProgressUpdate(function(e) {
                                                    e.progress != r && (r = e.progress, wx.showLoading({
                                                        title: r.toString() + "%"
                                                    }));
                                                });
                                            }, 100 * c);
                                        });
                                    }
                                }), "上传视频" == s[l.tapIndex] && (o.show_hint_msg("chooseVideoUploadHint", "视频大于15M建议使用压缩上传，过大的视频上传时间可能要1~3分钟，请耐心等待不要退出页面，超过3分钟未上传完毕请联系客服，超大视频请使用腾讯视频上传。"), 
                                wx.showActionSheet({
                                    itemList: [ "源视频上传", "压缩上传", "腾讯视频上传" ],
                                    success: function(o) {
                                        2 == o.tapIndex ? (t.func_ = "upload_w_url", a.$refs.prompt.showPrompt("请输入腾讯视频页面地址", t.currentTarget.dataset.name, t, "text", !0)) : wx.chooseVideo({
                                            camera: "front",
                                            maxDuration: 60,
                                            compressed: 1 == o.tapIndex,
                                            sourceType: [ "album", "camera" ],
                                            success: function(t) {
                                                wx.showLoading({
                                                    title: "上传中 "
                                                }), n.subscribe_msg("1"), (c = wx.uploadFile({
                                                    url: i.upload_image,
                                                    filePath: t.tempFilePath,
                                                    name: "imageFile",
                                                    formData: n.addSid(Object.assign(a.navigate_back || {}, {
                                                        category: a.level_nav_title
                                                    }), a.$data.call_sid),
                                                    success: function(t) {
                                                        if (413 == t.statusCode) return wx.hideLoading(), void wx.showToast({
                                                            title: "上传文件过大",
                                                            icon: "none"
                                                        });
                                                        var i = JSON.parse(t.data.replace(/^\s+|\s+$/gm, ""));
                                                        0 == i.status ? (wx.hideLoading(), wx.showModal({
                                                            content: i.msg,
                                                            showCancel: !1
                                                        })) : a.setData({
                                                            images: (a.images || []).concat({
                                                                id: "img-" + +new Date() + "-1",
                                                                pic: i.image,
                                                                image_id: i.image_id,
                                                                type: i.type,
                                                                genre: i.genre,
                                                                name: i.name,
                                                                src: i.src
                                                            })
                                                        }, function() {
                                                            e.createSelectorQuery().in(a).select("#j_page").boundingClientRect(function(e) {
                                                                wx.pageScrollTo({
                                                                    scrollTop: 0
                                                                });
                                                            }).exec();
                                                        }), wx.hideLoading(), wx.showToast({
                                                            title: "上传完成"
                                                        }), c.offProgressUpdate();
                                                    }
                                                })).onProgressUpdate(function(e) {
                                                    e.progress != r && (r = e.progress, wx.showLoading({
                                                        title: r.toString() + "%"
                                                    }));
                                                });
                                            }
                                        });
                                    }
                                })), "上传音频" == s[l.tapIndex] && wx.showActionSheet({
                                    itemList: [ "录音", "上传音频" ],
                                    success: function(t) {
                                        0 == t.tapIndex && wx.showModal({
                                            content: "点击确认开始录音，最多录制1分钟",
                                            success: function(t) {
                                                if (t.confirm) {
                                                    var o = new Date().getTime(), s = wx.getRecorderManager();
                                                    s.onStart(function() {
                                                        console.log("recorder start"), wx.showModal({
                                                            content: "录音中...",
                                                            showCancel: !1,
                                                            confirmText: "完成录音",
                                                            success: function(e) {
                                                                s.stop();
                                                            }
                                                        });
                                                    }), s.onPause(function() {
                                                        console.log("recorder pause"), wx.showLoading({
                                                            title: "暂停中"
                                                        });
                                                    }), s.onStop(function(t) {
                                                        console.log("recorder stop", t);
                                                        var s = t.tempFilePath;
                                                        if (0 != n.audioplay(s)) {
                                                            var l = Math.floor((new Date().getTime() - o) / 1e3);
                                                            if (l < 1 || l > 600) return wx.showToast({
                                                                title: "录音时长须大于1秒，小于600秒",
                                                                icon: "none"
                                                            }), void n.audioplay(s, !0);
                                                            wx.showModal({
                                                                content: "试听中",
                                                                confirmText: "上传",
                                                                success: function(t) {
                                                                    n.audioplay(s, !0), t.confirm && (wx.showLoading({
                                                                        title: "上传中 "
                                                                    }), n.subscribe_msg("1"), (c = wx.uploadFile({
                                                                        url: i.upload_image,
                                                                        filePath: s,
                                                                        name: "imageFile",
                                                                        formData: n.addSid(Object.assign(a.navigate_back || {}, {
                                                                            category: a.level_nav_title
                                                                        }), a.$data.call_sid),
                                                                        success: function(t) {
                                                                            if (413 == t.statusCode) return wx.hideLoading(), void wx.showToast({
                                                                                title: "上传文件过大",
                                                                                icon: "none"
                                                                            });
                                                                            var i = JSON.parse(t.data.replace(/^\s+|\s+$/gm, ""));
                                                                            0 == i.status ? (wx.hideLoading(), wx.showModal({
                                                                                content: i.msg,
                                                                                showCancel: !1
                                                                            })) : a.setData({
                                                                                images: (a.images || []).concat({
                                                                                    id: "img-" + +new Date() + "-1",
                                                                                    pic: i.image,
                                                                                    image_id: i.image_id,
                                                                                    type: i.type,
                                                                                    genre: i.genre,
                                                                                    name: i.name,
                                                                                    src: i.src
                                                                                })
                                                                            }, function() {
                                                                                e.createSelectorQuery().in(a).select("#j_page").boundingClientRect(function(e) {
                                                                                    wx.pageScrollTo({
                                                                                        scrollTop: 0
                                                                                    });
                                                                                }).exec();
                                                                            }), wx.hideLoading(), wx.showToast({
                                                                                title: "上传完成"
                                                                            }), c.offProgressUpdate();
                                                                        }
                                                                    })).onProgressUpdate(function(e) {
                                                                        e.progress != r && (r = e.progress, wx.showLoading({
                                                                            title: r.toString() + "%"
                                                                        }));
                                                                    }));
                                                                }
                                                            });
                                                        } else wx.showToast({
                                                            title: "试听失败了",
                                                            icon: "fail"
                                                        });
                                                    }), s.onFrameRecorded(function(e) {
                                                        var t = e.frameBuffer;
                                                        console.log("frameBuffer.byteLength", t.byteLength);
                                                    }), s.start({
                                                        duration: 6e4,
                                                        sampleRate: 44100,
                                                        numberOfChannels: 2,
                                                        encodeBitRate: 192e3,
                                                        format: "mp3",
                                                        frameSize: 50
                                                    });
                                                }
                                            }
                                        }), 1 != t.tapIndex || wx.chooseMessageFile({
                                            count: 5,
                                            type: "file",
                                            extension: [ "m4a", "wav", "aac", "mp3", "webm" ],
                                            success: function(t) {
                                                var o = t.tempFiles.length;
                                                t.tempFiles.forEach(function(t, s) {
                                                    var l = setTimeout(function() {
                                                        wx.showLoading({
                                                            title: "上传中 "
                                                        }), c = wx.uploadFile({
                                                            url: i.upload_image,
                                                            filePath: t.path,
                                                            name: "imageFile",
                                                            formData: n.addSid(Object.assign(a.navigate_back || {}, {
                                                                name: t.name,
                                                                category: a.level_nav_title
                                                            }), a.$data.call_sid),
                                                            success: function(t) {
                                                                if (413 == t.statusCode) return wx.hideLoading(), void wx.showToast({
                                                                    title: "上传文件过大",
                                                                    icon: "none"
                                                                });
                                                                o--;
                                                                var i = JSON.parse(t.data.replace(/^\s+|\s+$/gm, ""));
                                                                0 == i.status ? (wx.hideLoading(), wx.showModal({
                                                                    content: i.msg,
                                                                    showCancel: !1
                                                                })) : a.setData({
                                                                    images: (a.images || []).concat({
                                                                        id: "img-" + +new Date() + "-1",
                                                                        pic: i.image,
                                                                        image_id: i.image_id,
                                                                        type: i.type,
                                                                        genre: i.genre,
                                                                        name: i.name,
                                                                        src: i.src
                                                                    })
                                                                }, function() {
                                                                    e.createSelectorQuery().in(a).select("#j_page").boundingClientRect(function(e) {
                                                                        wx.pageScrollTo({
                                                                            scrollTop: 0
                                                                        });
                                                                    }).exec();
                                                                }), 0 == o && (wx.hideLoading(), wx.showToast({
                                                                    title: "上传完成"
                                                                }), c.offProgressUpdate());
                                                            }
                                                        }), clearTimeout(l), c.onProgressUpdate(function(e) {
                                                            e.progress != r && (r = e.progress, wx.showLoading({
                                                                title: r.toString() + "%"
                                                            }));
                                                        });
                                                    }, 100 * s);
                                                });
                                            },
                                            fail: function() {
                                                "windows" == getApp().globalData.system.platform.toLowerCase() && wx.showModal({
                                                    content: "目前pc端无法上传音频，需要将音频通过发送到微信的文件传输助手，在手机端小程序选择文件传输助手的音频上传。",
                                                    showCancel: !1
                                                });
                                            }
                                        });
                                    }
                                }), "上传文档" != s[l.tapIndex] ? "上传外链" == s[l.tapIndex] && (t.func_ = "upload_w_url", 
                                a.$refs.prompt.showPrompt("请输入源文件链接,或咨询微信“hzh2013bb”", t.currentTarget.dataset.name, t, "text", !0)) : wx.chooseMessageFile({
                                    count: 5,
                                    type: "file",
                                    extension: [ "doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf" ],
                                    success: function(t) {
                                        console.log(t);
                                        var o = t.tempFiles.length;
                                        t.tempFiles.forEach(function(t, s) {
                                            var l = setTimeout(function() {
                                                wx.showLoading({
                                                    title: "上传中"
                                                }), c = wx.uploadFile({
                                                    url: i.upload_image,
                                                    filePath: t.path,
                                                    name: "imageFile",
                                                    formData: n.addSid(Object.assign(a.navigate_back || {}, {
                                                        name: t.name,
                                                        category: a.level_nav_title
                                                    }), a.$data.call_sid),
                                                    success: function(t) {
                                                        if (413 == t.statusCode) return wx.hideLoading(), void wx.showToast({
                                                            title: "上传文件过大",
                                                            icon: "none"
                                                        });
                                                        o--;
                                                        var i = JSON.parse(t.data.replace(/^\s+|\s+$/gm, ""));
                                                        0 == i.status ? (wx.hideLoading(), wx.showModal({
                                                            content: i.msg,
                                                            showCancel: !1
                                                        })) : a.setData({
                                                            images: (a.images || []).concat({
                                                                id: "img-" + +new Date() + "-1",
                                                                pic: i.image,
                                                                image_id: i.image_id,
                                                                type: i.type,
                                                                genre: i.genre,
                                                                name: i.name,
                                                                src: i.src
                                                            })
                                                        }, function() {
                                                            e.createSelectorQuery().in(a).select("#j_page").boundingClientRect(function(e) {
                                                                wx.pageScrollTo({
                                                                    scrollTop: 0
                                                                });
                                                            }).exec();
                                                        }), 0 == o && (wx.hideLoading(), wx.showToast({
                                                            title: "上传完成"
                                                        }), c.offProgressUpdate());
                                                    }
                                                }), clearTimeout(l), c.onProgressUpdate(function(e) {
                                                    e.progress != r && (r = e.progress, wx.showLoading({
                                                        title: r.toString() + "%"
                                                    }));
                                                });
                                            }, 100 * s);
                                        });
                                    }
                                });
                            },
                            fail: function(e) {
                                console.log(e.errMsg);
                            }
                        });
                    },
                    upload_w_url: function(t) {
                        var a = this;
                        wx.showLoading({
                            title: "上传中"
                        }), n.request({
                            url: i.upload_image,
                            data: n.signdata(Object.assign(a.navigate_back || {}, {
                                w_url: t.detail.value,
                                category: a.level_nav_title
                            })),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                var i = t.data;
                                0 == i.status ? (wx.hideLoading(), wx.showModal({
                                    content: i.msg,
                                    showCancel: !1
                                })) : (a.setData({
                                    images: (a.images || []).concat({
                                        id: "img-" + +new Date() + "-1",
                                        pic: i.image,
                                        image_id: i.image_id,
                                        type: i.type,
                                        genre: i.genre,
                                        name: i.name,
                                        src: i.src,
                                        large_image: i.large_image || 0,
                                        url: i.url || 0
                                    })
                                }, function() {
                                    e.createSelectorQuery().in(a).select("#j_page").boundingClientRect(function(e) {
                                        wx.pageScrollTo({
                                            scrollTop: 0
                                        });
                                    }).exec();
                                }), wx.showToast({
                                    title: "上传完成"
                                })), wx.hideLoading();
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        }, this, 1);
                    },
                    onImageLoad: function(e) {
                        for (var t = e.currentTarget.id, a = r.length; a--; ) if (r[a].id === t) return void console.log("重复id");
                        var i = e.detail.width, o = e.detail.height * (300 / i), n = this.images;
                        if (0 != n.length) {
                            for (var l = null, d = 0; d < n.length; d++) {
                                var u = n[d];
                                if (u.id === t) {
                                    l = u, r.push(u);
                                    break;
                                }
                            }
                            l.height = o, null == this.img_urls && (this.img_urls = []), 0 != l.genre && l.genre ? 2 == l.genre && (o = 240, 
                            l.height = o) : this.img_urls.push(l.pic);
                            var g = this.col1 || [], h = this.col2 || [];
                            s <= c ? (s += o, "unshift" == this.arr_type ? g.unshift(l) : g.push(l)) : (c += o, 
                            "unshift" == this.arr_type ? h.unshift(l) : h.push(l));
                            var m = {
                                col1: g,
                                col2: h,
                                img_urls: this.img_urls
                            };
                            this.setData(m);
                        }
                    },
                    delete_image: function(e, t) {
                        var a = this;
                        n.request({
                            url: i.del_image,
                            data: n.addSid({
                                image_id: t
                            }, a.$data.call_sid),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(i) {
                                console.log(i), 1 == i.data.status ? (a[e].forEach(function(i, o) {
                                    i.image_id == t && a[e].splice(o, 1);
                                }), a.setData(a.$data)) : wx.showModal({
                                    content: i.data.msg
                                });
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        }, a, 1);
                    },
                    loadImages: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, a = this, l = [];
                        0 == e && (s = 0, c = 0, r = [], this.setData({
                            img_urls: [],
                            col1: [],
                            col2: [],
                            images: []
                        }), a.setData({
                            level_nav_title: o.session.get(this.nav.check + "_picture_category") || "默认",
                            level_nav_left: o.session.get(this.nav.check + "_picture_level_nav_left") || null
                        })), a.setData({
                            images: []
                        }), n.request({
                            url: i.get_image_list,
                            data: n.addSid({
                                type: this.nav.check > 0 ? 0 : 1,
                                limit: t,
                                start: e,
                                category: this.level_nav_title
                            }, a.$data.call_sid),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                if (console.log(e), e.data.status) {
                                    a.setData(e.data);
                                    for (var t = e.data.items, i = 0; i < t.length; i++) l.push({
                                        pic: t[i].image,
                                        image_id: t[i].image_id,
                                        type: t[i].type,
                                        genre: t[i].genre || 0,
                                        large_image: t[i].large_image || 0,
                                        url: t[i].url || 0,
                                        name: t[i].name || "",
                                        src: t[i].src || t[i].image,
                                        review: t[i].review,
                                        error: t[i].error,
                                        verify: t[i].verify,
                                        uuid: t[i].uuid
                                    });
                                    var o = "img-" + +new Date();
                                    for (i = 0; i < l.length; i++) l[i].id = o + "-" + i;
                                    console.log(l), a.setData({
                                        images: l,
                                        last_start: e.data.last_start
                                    });
                                }
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        });
                    },
                    previewImage: function(e) {
                        if (this.navigate_back.navigate_back) return e.no_back = 1, void this.showActionSheet(e);
                        o.previewImage(this.img_urls, e.currentTarget.dataset.pic);
                    },
                    navigatortap: function() {
                        this.navigate_back.picture_choose_urls = this.checked_images, this.navigate_back.picture_choose_url = this.checked_images[1], 
                        o.navigate.back(1, this.navigate_back);
                    },
                    showActionSheet2: function(e) {
                        var t = this[e.currentTarget.dataset.items][e.currentTarget.dataset.index], a = this;
                        wx.showActionSheet({
                            itemList: [ "预览", "审核通过", "异常文件" ],
                            success: function(s) {
                                if (console.log(s.tapIndex), 0 == s.tapIndex) if (0 == t.genre) o.previewImage(a.img_urls, t.pic); else {
                                    if (1 == t.genre) return 0 == n.audioplay(t.src) ? void wx.showToast({
                                        title: "播放失败了",
                                        icon: "fail"
                                    }) : void wx.showModal({
                                        content: "播放...",
                                        showCancel: !1,
                                        confirmText: "关闭",
                                        success: function(e) {
                                            n.audioplay(t.src, !0);
                                        }
                                    });
                                    if (2 == t.genre) return void o.navigate.to("/pages/mind/pictureBase/playVideo/playVideo", {
                                        src: t.url || t.src
                                    });
                                }
                                if (1 == s.tapIndex) {
                                    n.subscribe_msg();
                                    var c = e.currentTarget.dataset.items;
                                    n.request({
                                        url: i.host + "/picture/review_image_url",
                                        data: n.signdata({
                                            url: t.src,
                                            review_uuid: t.uuid
                                        }),
                                        method: "POST",
                                        header: {
                                            "content-type": "application/x-www-form-urlencoded"
                                        },
                                        success: function(e) {
                                            console.log(e), 1 == e.data.status ? (a[c].forEach(function(e, i) {
                                                e.src == t.src && a[c].splice(i, 1);
                                            }), a.setData(a.$data)) : wx.showModal({
                                                content: e.data.msg
                                            });
                                        },
                                        fail: function(e) {
                                            console.log(e);
                                        }
                                    }, a, 1);
                                }
                                if (2 == s.tapIndex) {
                                    var r = [ "广告或者垃圾信息", "辱骂人生攻击", "有害信息（色情、不实、违法）", "内容未经授权" ];
                                    wx.showActionSheet({
                                        itemList: r,
                                        success: function(t) {
                                            e.detail.value = r[t.tapIndex], a.del_image_url(e);
                                        }
                                    });
                                }
                            },
                            fail: function(e) {
                                console.log(e.errMsg);
                            }
                        });
                    },
                    del_image_url: function(e) {
                        var t = this[e.currentTarget.dataset.items][e.currentTarget.dataset.index], a = this;
                        n.subscribe_msg();
                        var o = e.currentTarget.dataset.items;
                        n.request({
                            url: i.host + "/picture/del_image_url",
                            data: n.signdata({
                                url: t.src,
                                review_uuid: t.uuid,
                                err_msg: e.detail.value
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                console.log(e), 1 == e.data.status ? (a[o].forEach(function(e, i) {
                                    e.src == t.src && a[o].splice(i, 1);
                                }), a.setData(a.$data)) : wx.showModal({
                                    content: e.data.msg
                                });
                            },
                            fail: function(e) {
                                console.log(e);
                            }
                        }, a, 1);
                    },
                    showActionSheet1: function(e) {
                        var t = this[e.currentTarget.dataset.items][e.currentTarget.dataset.index];
                        if (this.navigate_back.navigate_back) t.genre > 0 ? (this.navigate_back.picture_choose_url = t.src, 
                        this.navigate_back.picture_choose_genre = t.genre, this.navigate_back.picture_choose_name = t.name, 
                        o.navigate.back(1, this.navigate_back)) : this.showActionSheet(e); else {
                            if (1 == t.genre) return 0 == n.audioplay(t.src) ? void wx.showToast({
                                title: "播放失败了",
                                icon: "fail"
                            }) : void wx.showModal({
                                content: "播放...",
                                showCancel: !1,
                                confirmText: "关闭",
                                success: function(e) {
                                    n.audioplay(t.src, !0);
                                }
                            });
                            if (2 == t.genre) return void o.navigate.to("/pages/mind/pictureBase/playVideo/playVideo", {
                                src: t.url || t.src
                            });
                            if (3 == t.genre) return void o.openDocument(t.src);
                        }
                    },
                    alter_file_name: function(e) {
                        if (e.func_) {
                            var t = this, a = e.currentTarget.dataset.items, o = this[a][e.currentTarget.dataset.index].image_id, s = e.detail.value;
                            n.request({
                                url: i.alter_image_name,
                                data: n.addSid({
                                    image_id: o,
                                    name: s
                                }, t.$data.call_sid),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(e) {
                                    console.log(e), 1 == e.data.status ? (t[a].forEach(function(e, i) {
                                        e.image_id == o && (t[a][i].name = s);
                                    }), t.setData(t.$data)) : wx.showModal({
                                        content: e.data.msg
                                    });
                                },
                                fail: function(e) {
                                    console.log(e);
                                }
                            }, t, 1);
                        } else e.func_ = "alter_file_name", this.$refs.prompt.showPrompt("请输入文件名称", e.currentTarget.dataset.name, e, "text", !0);
                    },
                    showActionSheet: function(e) {
                        var t = this[e.currentTarget.dataset.items][e.currentTarget.dataset.index], a = this;
                        if (t.review) this.showActionSheet2(e); else {
                            if (a.navigate_back.navigate_back && !e.no_back && t.genre < 1) {
                                if (a.navigate_back.maxLength > 1) {
                                    for (var i in a.checked_images) if (t.pic == a.checked_images[i]) return o.scope.removeRecord(a.checked_images, i), 
                                    void a.setData({
                                        checked_images: a.checked_images
                                    });
                                    return a.checked_images.length + 1 > a.navigate_back.maxLength ? void wx.showToast({
                                        title: "最多选择" + a.navigate_back.maxLength + "张图片~",
                                        icon: "none"
                                    }) : (a.checked_images.push(t.src), void a.setData({
                                        checked_images: a.checked_images
                                    }));
                                }
                                return a.navigate_back.picture_choose_url = t.src, a.navigate_back.picture_choose_genre = t.genre, 
                                a.navigate_back.picture_choose_name = t.name, void o.navigate.back(1, a.navigate_back);
                            }
                            console.log(t), 1 != Number(t.type) ? wx.showActionSheet({
                                itemList: [ "预览", "移动分组", "删除文件" ],
                                success: function(i) {
                                    if (console.log(i.tapIndex), 0 == i.tapIndex) {
                                        if (1 == t.genre) return 0 == n.audioplay(t.src) ? void wx.showToast({
                                            title: "播放失败了",
                                            icon: "fail"
                                        }) : void wx.showModal({
                                            content: "播放...",
                                            showCancel: !1,
                                            confirmText: "关闭",
                                            success: function(e) {
                                                n.audioplay(t.src, !0);
                                            }
                                        });
                                        if (2 == t.genre) return void o.navigate.to("/pages/mind/pictureBase/playVideo/playVideo", {
                                            src: t.url || t.src
                                        });
                                        o.previewImage(a.img_urls, t.pic);
                                    }
                                    1 == i.tapIndex && a.setData({
                                        select_group: !0,
                                        use_image_id: t.image_id
                                    }), 2 == i.tapIndex && a.delete_image(e.currentTarget.dataset.items, t.image_id);
                                },
                                fail: function(e) {
                                    console.log(e.errMsg);
                                }
                            }) : o.previewImage(a.img_urls, t.pic);
                        }
                    },
                    confirm: function(e) {
                        var t = e.detail.value, a = e.detail.key;
                        this.$refs.prompt.hidePrompt(), "" != t && a ? (a.detail.value = t, this[a.func_](a)) : console.log("取消了");
                    },
                    cancel: function() {
                        this.$refs.prompt.hidePrompt();
                    },
                    setData: function(e, t) {
                        var a, i, o = this, n = [];
                        Object.keys(e).forEach(function(t) {
                            n = t.split("."), a = e[t], i = o.$data, n.forEach(function(e, t) {
                                t + 1 == n.length ? (i[e] === a && o.$set(i, e, {}), o.$set(i, e, a)) : i[e] || o.$set(i, e, {}), 
                                i = i[e];
                            });
                        }), t && t();
                    }
                }
            };
            t.default = l;
        }).call(this, a("543d").default);
    }
}, [ [ "71c9", "common/runtime", "common/vendor" ] ] ]);