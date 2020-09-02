(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/editor/editor" ], {
    "0a95": function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o("81c6"), a = {
                data: function() {
                    return {
                        navigationdata: {},
                        formats: {},
                        bottom: 0,
                        readOnly: !1,
                        placeholder: "开始输入...",
                        navigate_back: "",
                        previewarginBottom: "",
                        show_color_picker_name: !1,
                        colorData: {
                            hueData: {
                                colorStopRed: 255,
                                colorStopGreen: 0,
                                colorStopBlue: 0
                            },
                            pickerData: {
                                x: 0,
                                y: 480,
                                red: 0,
                                green: 0,
                                blue: 0,
                                hex: "#000000"
                            },
                            barY: 0
                        },
                        rpxRatio: 1
                    };
                },
                components: {
                    colorPicker: (o("aca8"), o("e634"), function() {
                        o.e("components/color-picker/color-picker").then(function() {
                            return resolve(o("a96a"));
                        }.bind(null, o)).catch(o.oe);
                    })
                },
                props: {},
                onLoad: function(t) {
                    var e = this;
                    getApp().globalData.setNavigationBarTitle(this, "图文编辑"), wx.loadFontFace({
                        family: "Pacifico",
                        source: 'url("https://sungd.github.io/Pacifico.ttf")',
                        success: console.log
                    }), t.navigate_back && this.setData({
                        navigate_back: t
                    }), wx.getSystemInfo({
                        success: function(t) {
                            e.setData({
                                rpxRatio: t.screenWidth / 750
                            });
                        }
                    });
                },
                onShow: function() {
                    var t = n.navigate.get();
                    t && t.navigate_back && (n.navigate.clear(), "insertImage" == t.func && this.editorCtx.insertImage({
                        src: t.picture_choose_url,
                        success: function() {
                            console.log("insert image success");
                        }
                    }));
                },
                methods: {
                    onChangeColor: function(t) {
                        console.log(t), this.setData({
                            colorData: t.detail.colorData
                        }), this.editorCtx.format(this.show_color_picker_name, t.detail.colorData.pickerData.hex);
                    },
                    hide_color_picker: function() {
                        this.setData({
                            show_color_picker_name: !1
                        });
                    },
                    save_editor: function() {
                        var t = this;
                        this.editorCtx.getContents({
                            success: function(e) {
                                console.log(e), t.navigate_back.editorctx = e, n.navigate.back(1, t.navigate_back);
                            }
                        });
                    },
                    readOnlyChange: function() {
                        this.setData({
                            readOnly: !this.readOnly
                        });
                    },
                    onEditorReady: function() {
                        var e = this;
                        t.createSelectorQuery().in(this).select("#editor").context(function(t) {
                            if (e.editorCtx = t.context, e.navigate_back) {
                                var o = n.navigate.get().delta;
                                e.editorCtx.setContents({
                                    delta: o
                                });
                            }
                        }).exec();
                    },
                    undo: function() {
                        this.editorCtx.undo();
                    },
                    redo: function() {
                        this.editorCtx.redo();
                    },
                    format: function(t) {
                        var e = t.currentTarget.dataset, o = e.name, n = e.value;
                        o && ("color" != o && "backgroundColor" != o ? this.editorCtx.format(o, n) : this.setData({
                            show_color_picker_name: o
                        }));
                    },
                    onStatusChange: function(t) {
                        var e = t.detail;
                        this.setData({
                            formats: e
                        });
                    },
                    insertDivider: function() {
                        this.editorCtx.insertDivider({
                            success: function() {
                                console.log("insert divider success");
                            }
                        });
                    },
                    clear: function() {
                        this.editorCtx.clear({
                            success: function(t) {
                                console.log("clear success");
                            }
                        });
                    },
                    removeFormat: function() {
                        this.editorCtx.removeFormat();
                    },
                    insertDate: function() {
                        var t = new Date(), e = "".concat(t.getFullYear(), "/").concat(t.getMonth() + 1, "/").concat(t.getDate());
                        this.editorCtx.insertText({
                            text: e
                        });
                    },
                    insertImage: function() {
                        wx.navigateTo({
                            url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&func=insertImage"
                        });
                    },
                    setData: function(t) {
                        var e, o, n = this, a = [];
                        Object.keys(t).forEach(function(c) {
                            a = c.split("."), e = t[c], o = n.$data, a.forEach(function(t, c) {
                                c + 1 == a.length ? n.$set(o, t, e) : o[t] || n.$set(o, t, {}), o = o[t];
                            });
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, o("543d").default);
    },
    "2e5f": function(t, e, o) {
        "use strict";
        o.d(e, "b", function() {
            return a;
        }), o.d(e, "c", function() {
            return c;
        }), o.d(e, "a", function() {
            return n;
        });
        var n = {
            navigationTop: function() {
                return o.e("components/navigation-top/navigation-top").then(o.bind(null, "532f"));
            },
            colorPicker: function() {
                return o.e("components/color-picker/color-picker").then(o.bind(null, "a96a"));
            }
        }, a = function() {
            this.$createElement, this._self._c;
        }, c = [];
    },
    "3b07": function(t, e, o) {},
    "7c3a": function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("0a95"), a = o.n(n);
        for (var c in n) "default" !== c && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = a.a;
    },
    a008: function(t, e, o) {
        "use strict";
        var n = o("3b07");
        o.n(n).a;
    },
    c3cd: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("2e5f"), a = o("7c3a");
        for (var c in a) "default" !== c && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(c);
        o("a008");
        var i = o("f0c5"), r = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = r.exports;
    },
    fa99: function(t, e, o) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("e7dc"), e(o("66fd")), t(e(o("c3cd")).default);
        }).call(this, o("543d").createPage);
    }
}, [ [ "fa99", "common/runtime", "common/vendor" ] ] ]);