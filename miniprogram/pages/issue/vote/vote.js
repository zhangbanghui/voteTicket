(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/issue/vote/vote" ], {
    "0b2d": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("ed80"), s = a("752b");
        for (var o in s) "default" !== o && function(t) {
            a.d(e, t, function() {
                return s[t];
            });
        }(o);
        a("1df3");
        var n = a("f0c5"), r = Object(n.a)(s.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = r.exports;
    },
    "1df3": function(t, e, a) {
        "use strict";
        var i = a("cec0");
        a.n(i).a;
    },
    2953: function(t, e, a) {
        "use strict";
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("e7dc"), e(a("66fd")), t(e(a("0b2d")).default);
        }).call(this, a("543d").createPage);
    },
    "5a67": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a("aca8"), s = (a("042c"), a("81c6")), o = a("e634"), n = {
                data: function() {
                    return {
                        navigationdata: {},
                        show_color_picker_name: !1,
                        colorData: {
                            opacity: -1,
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
                        rpxRatio: 1,
                        hide_vote_poll: 0,
                        show_poll_percent: 0,
                        concise_list: 0,
                        open_apply: 0,
                        tem_start_open_date: "",
                        tem_end_open_date: "",
                        begin_vote: 0,
                        end_vote: 0,
                        now_date: "",
                        back_delta: 1,
                        is_recover_ps: 1,
                        max_multiple_submit: "",
                        multiple_submit: "",
                        allow_share: 1,
                        user_anonymity: 1,
                        show_join_list: 0,
                        verify_phone: 0,
                        interval_items: [ 5, 15, 30, 60, 90, 120, 300, 600 ],
                        interval: 60,
                        ps_items: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50 ],
                        ps: 1,
                        ip_limit: 10,
                        today_min_ps: "",
                        list: [],
                        list_groups: [],
                        list_group_ps: [],
                        tagColor: [ "#fff", "#99ffdc", "#cfe7fa", "#f6fe9f", "#fe9ff4", "#feb39f", "#aaa", "orangered" ],
                        addr_local: 0,
                        addr_locals: [],
                        addr_local_name: "",
                        table_group: 0,
                        table_groups: [ "" ],
                        wifi: 0,
                        wifis: [ "" ],
                        wechat_group: 0,
                        wechat_groups: [ "" ],
                        wechat_gzh: 0,
                        wechat_gzh_info: {
                            hint: ""
                        },
                        vote_first_time: !1,
                        startdatetime: "",
                        enddatatime: "",
                        tem_start_date: "",
                        tem_start_time: "",
                        tem_end_date: "",
                        tem_end_time: "",
                        pageShow: !1,
                        orderno: "",
                        top_image_url: "",
                        title: "",
                        introduce: "",
                        show_release_info: null,
                        is_award: null,
                        award: "",
                        is_ip_limit: null,
                        release_nickname: "",
                        release_phone: "",
                        tem_start_open_time: "",
                        tem_end_open_time: "",
                        startopendatetime: "",
                        endopendatatime: "",
                        setting: 0,
                        options: {},
                        bg_music: !1,
                        ad_video: !1,
                        vote_rule_str: "",
                        share_image_url: "",
                        tem_restrict_region: !1,
                        restrict_region: !1,
                        apply_phone: !1,
                        apply_hint: "",
                        vote_lables: [],
                        setting_lable: !1,
                        vote_lable_percent: !1,
                        vote_lable_min: 0,
                        vote_lable_max: 1,
                        release_introduce: "",
                        vote_themes: "",
                        theme: "",
                        sweixin: "",
                        kefu_id: getApp().globalData.kefu_id,
                        write_table: ""
                    };
                },
                components: {
                    uLink: function() {
                        a.e("common/web_view/uLink").then(function() {
                            return resolve(a("245c"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    vasPrompt: function() {
                        a.e("components/prompt/prompt").then(function() {
                            return resolve(a("4da1"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    colorPicker: function() {
                        a.e("components/color-picker/color-picker").then(function() {
                            return resolve(a("a96a"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: {},
                onLoad: function(t) {
                    var e = this;
                    getApp().globalData.setNavigationBarTitle(this, "创建投票"), t.orderno && getApp().globalData.setNavigationBarTitle(this, "投票管理"), 
                    this.options = t, this.setData(t), getApp().globalData.setreLaunchtap(this, !0), 
                    wx.request({
                        url: "https://api.jiulku.com/api/static/json/theme/theme.json",
                        success: function(a) {
                            if (1 == a.data.status) {
                                var i = [], o = [], n = Number(s.date("md", new Date().getTime() / 1e3 - 432e3));
                                a.data.items.forEach(function(a, s) {
                                    !a.date || Number(a.date) >= n ? i.push(a) : o.unshift(a), t.tempName == a.name && e.setData({
                                        theme: a,
                                        top_image_url: a.top_image
                                    });
                                }), e.setData({
                                    vote_themes: i.concat(o)
                                }), wx.getSystemInfo({
                                    success: function(t) {
                                        e.setData({
                                            rpxRatio: t.screenWidth / 750
                                        });
                                    }
                                });
                            }
                        }
                    });
                },
                onReady: function() {
                    s.session.get("vote_first_time") || (this.setData({
                        vote_first_time: !0
                    }), s.session.set("vote_first_time", !0)), wx.hideShareMenu();
                },
                onShow: function() {
                    var e = this;
                    t.hideTabBar();
                    var a = s.navigate.get(), n = this;
                    if (a || 1038 != getApp().globalData.options.scene || (a = getApp().globalData.options.referrerInfo.extraData), 
                    a && a.navigate_back) {
                        if (s.navigate.clear(), "get_group_item" == a.func && "wechat_groups" == a.key) {
                            var r = s.session.get("vote_data");
                            r && (r.wechat_groups || (r.wechat_groups = [ "" ]), r.wechat_groups[a.index] = a.opengid, 
                            r.wechat_groups = s.unique(r.wechat_groups), s.session.clear("vote_data")), 1 == n.navigationdata.navindexs && wx.pageScrollTo({
                                scrollTop: 2e4
                            }), n.setData(r);
                        } else "get_group_item" == a.func && "table_groups" == a.key ? (n[a.key] || (n[a.key] = [ "" ]), 
                        n[a.key].forEach(function(t) {
                            a.orderno != n.orderno && t.orderno != a.orderno || wx.showModal({
                                content: a.orderno == n.orderno ? "无法选择正在编辑的表单" : "你已经选择了这个表单",
                                showCancel: !1,
                                confirmText: "我知道了",
                                success: function(t) {
                                    n[a.key][a.index] = "", n.setData(n.$data);
                                }
                            });
                        }), n[a.key][a.index] = a, n.setData(n.$data)) : "get_group_item" == a.func && "write_table" == a.key ? (n[a.key] = a, 
                        n.setData(n.$data)) : "editor" == a.func && (n[a.key] = a.editorctx.delta, n.setData(n.$data), 
                        n[a.id].setContents({
                            delta: a.editorctx.delta
                        }));
                        "editors" == a.func && (console.log(a), n[a.list][a.index][a.key] = a.editorctx.delta, 
                        n.setData(n.$data), n[a.id].setContents({
                            delta: a.editorctx.delta
                        })), "chooseImage_item" == a.func && (n.list[a.index].image = a.picture_choose_url, 
                        n.list[a.index].genre = a.picture_choose_genre, n.setData(n.$data)), "chooseImage_config" == a.func && (n[a.key] = a.picture_choose_url, 
                        n.setData(n.$data)), "chooseImageTheme" == a.func && (n.$data.theme[a.key] = a.picture_choose_url, 
                        n.setData(n.$data)), "chooseImageGzh" == a.func && (console.log(n.$data.wechat_gzh_info), 
                        n.$data.wechat_gzh_info[a.key] = a.picture_choose_url, n.setData(n.$data)), "choose_bg_music" == a.func && (n[a.key] = a, 
                        n.setData(n.$data)), "choose_ad_video" == a.func && (n[a.key] = a.picture_choose_url, 
                        n.setData(n.$data), s.show_hint_msg("choose_ad_video", "这个宣传视频配置后，用户第一进入投票主页会自动全屏播放，播放完毕自动关闭视频。建议视频不要太大，过大的视频对于网络较差的用户会造成视频加载体验不好。")), 
                        "config_vote_lable_box" == a.func && (n.$data.vote_lables[a.index].image = a.picture_choose_url, 
                        n.setData(n.$data));
                    }
                    this.pageShow || (n = this, this.orderno ? o.request({
                        url: i.get_vote_detail,
                        data: o.addSid({
                            orderno: n.orderno
                        }),
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        success: function(e) {
                            console.log(e), 1 == e.data.status ? (e.data.now_date = s.date("Y-m-d"), e.data.pageShow = !0, 
                            n.setData(e.data, function() {
                                t.createSelectorQuery().in(n).select("#j_page").boundingClientRect(function(t) {
                                    n.pageRect = t, n.toBottom && n.add_item();
                                }).exec();
                            }), e.data.setting_lable || wx.request({
                                url: i.Static + "/images/min_image/vote_lable_box.json",
                                success: function(t) {
                                    n.setData({
                                        vote_lables: t.data.items
                                    });
                                }
                            })) : wx.showModal({
                                content: e.data.msg,
                                showCancel: !1,
                                success: function() {
                                    wx.reLaunch({
                                        url: "/pages/issue/issue"
                                    });
                                }
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    }, this, 2) : (this.setData(s.session.get("votePage") || {}), this.setData({
                        now_date: s.date("Y-m-d"),
                        startdatetime: s.date("Y-m-d H:i", new Date().getTime() / 1e3 + 86400),
                        enddatatime: s.date("Y-m-d H:i", new Date().getTime() / 1e3 + 691200),
                        tem_start_date: s.date("Y-m-d", new Date().getTime() / 1e3 + 86400),
                        tem_start_time: s.date("H:i"),
                        tem_end_date: s.date("Y-m-d", new Date().getTime() / 1e3 + 691200),
                        tem_end_time: s.date("H:i"),
                        pageShow: !0
                    }, function() {
                        t.createSelectorQuery().in(n).select("#j_page").boundingClientRect(function(t) {
                            n.pageRect = t;
                        }).exec();
                    }), wx.request({
                        url: i.Static + "/images/min_image/vote_lable_box.json",
                        success: function(t) {
                            e.setData({
                                vote_lables: t.data.items
                            });
                        }
                    })));
                },
                onHide: function() {
                    t.showTabBar();
                },
                onUnload: function() {
                    this.orderno || this.issue || (s.session.clear("votePage"), s.session.set("votePage", this), 
                    wx.showToast({
                        title: "数据已存为草稿",
                        icon: "none"
                    }));
                },
                onPullDownRefresh: function() {},
                onReachBottom: function() {},
                onShareAppMessage: function(t) {
                    return o.ShareAppMessage(t, "申请修改数据", "pages/issue/vote/vote", {
                        orderno: this.orderno
                    }, function() {}, this.top_image_url);
                },
                methods: {
                    config_table: function(t) {
                        var e = this;
                        wx.showActionSheet({
                            itemList: [ "查看", "更改", "清除" ],
                            success: function(t) {
                                0 == t.tapIndex && wx.navigateToMiniProgram({
                                    appId: "wx4b5ee08ad8c0eddb",
                                    path: "pages/index/detail/detail?orderno=" + e.$data.write_table.orderno,
                                    envVersion: "release",
                                    success: function(t) {}
                                }), 1 == t.tapIndex && e.choose_table(), 2 == t.tapIndex && e.setData({
                                    write_table: ""
                                });
                            }
                        });
                    },
                    choose_table: function() {
                        wx.navigateToMiniProgram({
                            appId: "wx4b5ee08ad8c0eddb",
                            path: "pages/mind/manage/manage?check=0&navigate_back=1&func=get_group_item&key=write_table",
                            envVersion: "release",
                            success: function(t) {}
                        });
                    },
                    move_up_group: function(t) {
                        var e = t.currentTarget.dataset.index;
                        s.scope.upRecord(this.$data.list_groups, e), s.scope.upRecord(this.$data.list_group_ps, e), 
                        this.setData({
                            list_groups: this.$data.list_groups,
                            list_group_ps: this.$data.list_group_ps
                        });
                    },
                    move_down_group: function(t) {
                        var e = t.currentTarget.dataset.index;
                        s.scope.downRecord(this.$data.list_groups, e), s.scope.downRecord(this.$data.list_group_ps, e), 
                        this.setData({
                            list_groups: this.$data.list_groups,
                            list_group_ps: this.$data.list_group_ps
                        });
                    },
                    del_group: function(t) {
                        var e = this, a = t.currentTarget.dataset.index, i = this.$data.list_groups[a];
                        this.$data.list.forEach(function(t, a) {
                            t.group_name && (e.$data.list[a].group_name = t.group_name.replace(new RegExp(" " + i, "g"), ""));
                        }), this.$data.list_groups.splice(a, 1), this.$data.list_group_ps.splice(a, 1), 
                        this.setData({
                            list_groups: this.$data.list_groups,
                            list_group_ps: this.$data.list_group_ps,
                            list: this.$data.list
                        });
                    },
                    add_group_name: function(t) {
                        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.name;
                        this.$data.list[e].group_name = (this.$data.list[e].group_name || "") + " " + a, 
                        this.setData({
                            list: this.$data.list
                        });
                    },
                    del_group_name: function(t) {
                        if (!this.$data.begin_vote) {
                            var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.name;
                            this.$data.list[e].group_name = this.$data.list[e].group_name.replace(new RegExp(" " + a, "g"), ""), 
                            this.setData({
                                list: this.$data.list
                            });
                        }
                    },
                    save_list_group_ps: function(t) {
                        var e = t.currentTarget.dataset.index, a = t.currentTarget.dataset.max, i = t.detail.value;
                        this.$data.list_group_ps[e] = i > a ? a : i, this.setData({
                            list_group_ps: this.$data.list_group_ps
                        });
                    },
                    add_group: function(t) {
                        if (!t.func_) return t.func_ = "add_group", void this.$refs.prompt.showPrompt("确输入分组名称", "", t, "text", !0);
                        this.$data.list_groups && s.in_array(t.detail.value, this.$data.list_groups) || this.setData({
                            list_groups: (this.$data.list_groups || []).concat(t.detail.value),
                            list_group_ps: (this.$data.list_group_ps || []).concat("")
                        });
                    },
                    copy_vote: function() {
                        var t = this;
                        wx.showModal({
                            content: "确认复制这个投票活动",
                            success: function(e) {
                                e.confirm && o.request({
                                    url: i.host + "/order_issue/copy_vote",
                                    data: o.addSid({
                                        orderno: t.$data.orderno
                                    }),
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        if (1 == t.data.status) {
                                            wx.showToast({
                                                title: "复用成功"
                                            });
                                            var e = setTimeout(function() {
                                                clearTimeout(e), 1 == getCurrentPages().length ? wx.redirectTo({
                                                    url: "/pages/mind/manage/manage"
                                                }) : wx.navigateBack();
                                            }, 1e3);
                                        } else wx.showToast({
                                            title: t.data.msg,
                                            icon: "none"
                                        });
                                    }
                                }, t, 2);
                            }
                        });
                    },
                    kanshipin: function() {},
                    copyweichatid: function() {
                        wx.setClipboardData({
                            data: this.$data.kefu_id
                        });
                    },
                    tapShareAppMessage: function(t) {},
                    reLaunchtap: function() {
                        wx.reLaunch({
                            url: "/pages/discovery/discovery?orderno=" + this.orderno
                        });
                    },
                    sliderchangeopacity: function(t) {
                        this.$data.colorData.opacity = t.detail.value, this.setData({
                            colorData: this.$data.colorData
                        });
                    },
                    onChangeColor: function(t) {
                        t.detail.colorData.opacity = this.$data.colorData.opacity, this.setData({
                            colorData: t.detail.colorData
                        });
                    },
                    hide_color_picker: function(t) {
                        if (100 == this.$data.colorData.opacity || this.$data.colorData.opacity < 0) {
                            if (!t.func_) return t.func_ = "config_vote_theme_str", void this.$refs.prompt.showPrompt("确认数值（非专业请勿修改）", this.$data.colorData.pickerData.hex, t, "text", !0);
                            this.$data.theme[this.$data.show_color_picker_name] = this.$data.colorData.pickerData.hex;
                        } else {
                            var e = this.$data.colorData.hueData;
                            if (!t.func_) return t.func_ = "config_vote_theme_str", void this.$refs.prompt.showPrompt("确认数值（非专业请勿修改）", "rgba(" + e.colorStopRed + "," + e.colorStopGreen + "," + e.colorStopBlue + "," + this.$data.colorData.opacity / 100 + ")", t, "text", !0);
                            this.$data.theme[this.$data.show_color_picker_name] = "rgba(" + e.colorStopRed + "," + e.colorStopGreen + "," + e.colorStopBlue + "," + this.$data.colorData.opacity / 100 + ")";
                        }
                    },
                    config_vote_theme_str: function(t) {
                        console.log(t.detail.value), this.$data.theme[this.$data.show_color_picker_name] = t.detail.value, 
                        this.setData({
                            theme: this.$data.theme,
                            show_color_picker_name: !1
                        }), getApp().globalData.setNavigationBartap(this, !1);
                    },
                    navigatortap: function() {
                        this.setData({
                            show_color_picker_name: !1
                        }), getApp().globalData.setNavigationBartap(this, !1);
                    },
                    show_color_picker: function(t) {
                        var e = t.currentTarget.dataset.key;
                        this.$data.colorData.opacity = -1, "time_color" == e && (this.$data.colorData.opacity = 80), 
                        this.$data.show_color_picker_name = e, this.setData(this.$data), getApp().globalData.setNavigationBartap(this, !0);
                    },
                    select_theme: function(t) {
                        var e = this, a = t.currentTarget.dataset.index, i = this.$data.vote_themes[a];
                        console.log(i), i && (this.setData({
                            theme: i
                        }), this.$data.top_image_url && i.top_image ? wx.showModal({
                            content: "是否替换当前顶部宣传图",
                            success: function(t) {
                                t.confirm && e.setData({
                                    top_image_url: i.top_image
                                });
                            }
                        }) : this.setData({
                            top_image_url: i.top_image
                        }), this.$data.title || this.setData({
                            title: i.name
                        }));
                    },
                    confirm: function(t) {
                        var e = t.detail.value, a = t.detail.key;
                        this.$refs.prompt.hidePrompt(), "" != e && a ? (a.detail.value = e, this[a.func_](a)) : console.log("取消了");
                    },
                    cancel: function() {
                        this.$refs.prompt.hidePrompt();
                    },
                    config_vote_lable_box: function(t) {
                        var e = this, a = t.currentTarget.dataset.index;
                        wx.showActionSheet({
                            itemList: [ "选择图标", "编辑文字", "左移", "右移", "删除" ],
                            success: function(i) {
                                switch (i.tapIndex) {
                                  case 0:
                                    wx.navigateTo({
                                        url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&func=config_vote_lable_box&index=" + a
                                    });
                                    break;

                                  case 1:
                                    console.log(e.$refs), t.func_ = "config_vote_lable_str", e.$refs.prompt.showPrompt("请输入标签名", e.$data.vote_lables[a].name, t, "text", !0);
                                    break;

                                  case 2:
                                    s.scope.upRecord(e.$data.vote_lables, a), e.setData({
                                        vote_lables: e.$data.vote_lables
                                    });
                                    break;

                                  case 3:
                                    s.scope.downRecord(e.$data.vote_lables, a), e.setData({
                                        vote_lables: e.$data.vote_lables
                                    });
                                    break;

                                  case 4:
                                    s.scope.removeRecord(e.$data.vote_lables, a), e.setData({
                                        vote_lables: e.$data.vote_lables
                                    });
                                }
                            }
                        });
                    },
                    config_vote_lable_str: function(t) {
                        this.$data.vote_lables[t.currentTarget.dataset.index].name = t.detail.value, this.setData({
                            vote_lables: this.$data.vote_lables
                        });
                    },
                    add_vote_lable_box: function(t) {
                        this.$data.vote_lables.push({
                            name: "未命名",
                            image: "",
                            poll_qty: 0
                        }), this.setData({
                            vote_lables: this.$data.vote_lables
                        });
                    },
                    sliderchangemin: function(t) {
                        this.setData({
                            vote_lable_min: t.detail.value
                        });
                    },
                    sliderchangemax: function(t) {
                        this.setData({
                            vote_lable_max: t.detail.value
                        });
                    },
                    _export_vote_item_excel: function(t) {
                        var e = this, a = t.currentTarget.dataset.id;
                        wx.showActionSheet({
                            itemList: [ "导出投票参与人信息", "导出ip投票情况", "导出每小时投票数量" ],
                            success: function(t) {
                                o.request({
                                    url: i.host + "/order_analyze/export_vote_item_excel",
                                    data: o.signdata({
                                        orderno: e.$data.orderno,
                                        id: a,
                                        type: t.tapIndex
                                    }),
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    success: function(t) {
                                        1 == t.data.status ? wx.showModal({
                                            content: "数据导出成功,请到电脑下载数据表格",
                                            showCancel: !1,
                                            confirmText: "复制链接",
                                            success: function() {
                                                wx.setClipboardData({
                                                    data: t.data.url
                                                });
                                            }
                                        }) : wx.showToast({
                                            title: t.data.msg,
                                            icon: "none"
                                        });
                                    }
                                }, e, 2);
                            }
                        });
                    },
                    _export_vote_excel: function(t) {
                        o.request({
                            url: i.host + "/order_analyze/export_vote_excel",
                            data: o.signdata({
                                orderno: this.$data.orderno
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(t) {
                                console.log(t), 1 == t.data.status ? wx.showModal({
                                    content: "数据导出成功,请到电脑下载数据表格",
                                    showCancel: !1,
                                    confirmText: "复制链接",
                                    success: function() {
                                        wx.setClipboardData({
                                            data: t.data.url
                                        });
                                    }
                                }) : wx.showToast({
                                    title: t.data.msg,
                                    icon: "none"
                                });
                            }
                        }, this, 2);
                    },
                    bindRegionChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t.detail.value);
                        var e = t.detail.value, a = t.detail.value[0] + "-" + t.detail.value[1] + "-" + t.detail.value[2];
                        this.setData({
                            tem_restrict_region: e,
                            restrict_region: a
                        });
                    },
                    choose_bg_music: function(t) {
                        var e = this;
                        this.$data.bg_music ? wx.showActionSheet({
                            itemList: [ "更换", "清除" ],
                            success: function(t) {
                                0 == t.tapIndex && wx.navigateTo({
                                    url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&hideImage=1&showAudio=1&func=choose_bg_music&key=bg_music"
                                }), 1 == t.tapIndex && e.setData({
                                    bg_music: ""
                                });
                            }
                        }) : wx.navigateTo({
                            url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&hideImage=1&showAudio=1&func=choose_bg_music&key=bg_music"
                        });
                    },
                    choose_ad_video: function(t) {
                        var e = this;
                        this.$data.ad_video ? wx.showActionSheet({
                            itemList: [ "更换", "清除" ],
                            success: function(t) {
                                0 == t.tapIndex && wx.navigateTo({
                                    url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&hideImage=1&showVideo=1&func=choose_ad_video&key=ad_video"
                                }), 1 == t.tapIndex && e.setData({
                                    ad_video: ""
                                });
                            }
                        }) : wx.navigateTo({
                            url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&hideImage=1&showVideo=1&func=choose_ad_video&key=ad_video"
                        });
                    },
                    show_hint: function(t) {
                        console.log(t), this.$refs.boxmsg.show_box_msg(t.currentTarget.dataset.hint);
                    },
                    goto_editor: function(t) {
                        console.log(t), s.navigate.to("/common/editor/editor?navigate_back=1&id=" + t.currentTarget.id + "&func=" + t.currentTarget.dataset.func + "&key=" + t.currentTarget.dataset.key + "&index=" + t.currentTarget.dataset.index + "&list=" + t.currentTarget.dataset.items, {
                            delta: t.currentTarget.dataset.delta || ""
                        });
                    },
                    onEditorReady: function(e) {
                        console.log("onEditorReady", e.currentTarget.id);
                        var a = this, i = e.currentTarget.id;
                        e.currentTarget.dataset.index, t.createSelectorQuery().in(a).select("#" + i).context(function(t) {
                            a[i] = t.context, e.currentTarget.dataset.delta && a[i].setContents({
                                delta: e.currentTarget.dataset.delta
                            });
                        }).exec();
                    },
                    issue: function(t) {
                        var e = this, a = "";
                        if (this.orderno && (this.list.length > 0 && this.list.forEach(function(t, e) {
                            t.value && t.image || (a = "请补全信息（编号：" + (e + 1) + "号）");
                        }), t.detail.value.list = JSON.stringify(this.list)), t.detail.value.ip_limit = 0, 
                        t.detail.value.is_ip_limit && (t.detail.value.ip_limit = this.ip_limit), t.detail.value.allow_share = t.detail.value.allow_share ? 1 : 0, 
                        t.detail.value.is_award = t.detail.value.is_award ? 1 : 0, t.detail.value.is_award && (this.award || (a = "请输入奖励说明"), 
                        t.detail.value.award = JSON.stringify(this.award)), t.detail.value.startdatetime = this.startdatetime, 
                        t.detail.value.enddatatime = this.enddatatime, t.detail.value.ps = this.ps, t.detail.value.interval = this.interval, 
                        this.introduce || (a = "请输入主题介绍"), t.detail.value.introduce = JSON.stringify(this.introduce), 
                        t.detail.value.show_release_info = t.detail.value.show_release_info ? 1 : 0, this.$data.theme && (t.detail.value.theme = JSON.stringify(this.$data.theme)), 
                        t.detail.value.show_release_info && (t.detail.value.release_phone || (a = "请输入主办方手机"), 
                        t.detail.value.release_nickname || (a = "请输入主办方名称"), this.$data.release_introduce && (t.detail.value.release_introduce = JSON.stringify(this.$data.release_introduce))), 
                        t.detail.value.title || (a = "请输入投票主题"), t.detail.value.top_image_url = this.top_image_url, 
                        t.detail.value.top_image_url || (a = "顶部图不能空"), t.detail.value.share_image_url = this.share_image_url, 
                        t.detail.value.user_anonymity = t.detail.value.user_anonymity ? 1 : 0, t.detail.value.user_anonymity || (t.detail.value.show_join_list = t.detail.value.show_join_list ? 1 : 0, 
                        t.detail.value.verify_phone = t.detail.value.verify_phone ? 1 : 0), t.detail.value.is_recover_ps = t.detail.value.is_recover_ps, 
                        1 == t.detail.value.is_recover_ps && 1 != t.detail.value.ps || (t.detail.value.today_min_ps = ""), 
                        t.detail.value.list_groups = JSON.stringify(this.list_groups), t.detail.value.list_group_ps = JSON.stringify(this.list_group_ps), 
                        t.detail.value.bg_music = JSON.stringify(this.bg_music), t.detail.value.ad_video = this.ad_video, 
                        t.detail.value.setting && (t.detail.value.is_ip_limit = t.detail.value.is_ip_limit ? 1 : 0, 
                        t.detail.value.wifi = t.detail.value.wifi ? 1 : 0, t.detail.value.wifi && (t.detail.value.wifis = JSON.stringify(e.wifis)), 
                        t.detail.value.addr_local = t.detail.value.addr_local ? 1 : 0, t.detail.value.addr_local ? (t.detail.value.addr_locals = JSON.stringify(e.addr_locals), 
                        t.detail.value.addr_local_name = e.addr_local_name) : t.detail.value.restrict_region = e.restrict_region, 
                        t.detail.value.wechat_group = t.detail.value.wechat_group ? 1 : 0, t.detail.value.wechat_group && (t.detail.value.wechat_groups = JSON.stringify(e.wechat_groups)), 
                        t.detail.value.wechat_gzh = t.detail.value.wechat_gzh ? 1 : 0, t.detail.value.wechat_gzh && (t.detail.value.wechat_gzh_info = JSON.stringify(e.wechat_gzh_info)), 
                        t.detail.value.table_group = t.detail.value.table_group ? 1 : 0, t.detail.value.table_group && (t.detail.value.table_groups = JSON.stringify(e.table_groups)), 
                        t.detail.value.setting = t.detail.value.setting ? 1 : 0, t.detail.value.enddatatime = this.enddatatime, 
                        t.detail.value.startdatetime = this.startdatetime, t.detail.value.user_anonymity = t.detail.value.user_anonymity ? 1 : 0, 
                        t.detail.value.max_participation = Number(t.detail.value.max_participation)), t.detail.value.hide_vote_poll = t.detail.value.hide_vote_poll ? 1 : 0, 
                        t.detail.value.show_poll_percent = t.detail.value.show_poll_percent ? 1 : 0, t.detail.value.concise_list = t.detail.value.concise_list ? 1 : 0, 
                        t.detail.value.open_apply = t.detail.value.open_apply ? 1 : 0, t.detail.value.open_apply && (t.detail.value.startopendatetime = this.startopendatetime, 
                        t.detail.value.endopendatatime = this.endopendatatime, t.detail.value.apply_phone = this.apply_phone, 
                        t.detail.value.apply_hint = this.apply_hint || ""), t.detail.value.setting_lable = t.detail.value.setting_lable ? 1 : 0, 
                        t.detail.value.today_min_ps > 1 && t.detail.value.setting_lable && (t.detail.value.setting_lable = 0), 
                        this.$data.write_table && (t.detail.value.write_table = JSON.stringify(this.write_table)), 
                        t.detail.value.setting_lable && (0 == this.vote_lables.length ? t.detail.value.setting_lable = 0 : t.detail.value.vote_lables = JSON.stringify(this.vote_lables), 
                        t.detail.value.vote_lable_percent = t.detail.value.vote_lable_percent ? 1 : 0), 
                        "" == a) {
                            if (this.orderno) {
                                t.detail.value.orderno = this.orderno;
                                var n = i.update_vote;
                            } else n = i.issue_vote;
                            o.request({
                                url: n,
                                data: o.addSid(t.detail.value),
                                method: "POST",
                                header: {
                                    "content-type": "application/x-www-form-urlencoded"
                                },
                                success: function(t) {
                                    if (1 == t.data.status) {
                                        if (n == i.update_vote) {
                                            wx.showToast({
                                                title: t.data.msg
                                            });
                                            var a = setTimeout(function() {
                                                clearTimeout(a), wx.navigateBack();
                                            }, 1e3);
                                            return;
                                        }
                                        wx.showToast({
                                            title: "创建成功"
                                        }), e.issue = !0, s.session.clear("votePage"), a = setTimeout(function() {
                                            clearTimeout(a), wx.redirectTo({
                                                url: "/pages/mind/manage/manage?orderno=" + t.data.orderno + "&page=vote"
                                            });
                                        }, 1e3);
                                    } else wx.showModal({
                                        content: t.data.msg,
                                        showCancel: !1
                                    });
                                },
                                fail: function(t) {
                                    console.log(t);
                                }
                            }, e, 2);
                        } else wx.showModal({
                            content: a,
                            showCancel: !1
                        });
                    },
                    add_item: function() {
                        var t = Math.ceil(new Date().getTime() / 1e3);
                        t != this.add_core_time ? (this.add_core_time = t, this.list.push({
                            delta: "",
                            id: t,
                            show: !0
                        }), this.setData(this.$data), wx.pageScrollTo({
                            scrollTop: 1e3 * this.list.length + 22e3
                        })) : wx.showToast({
                            title: "操作太快了",
                            icon: "none"
                        });
                    },
                    saveItem: function(t) {
                        this.list[t.currentTarget.dataset.index].value = t.detail.value, this.setData(this.$data);
                    },
                    handleList: function(t) {
                        var e = this, a = t.currentTarget.dataset.index, i = Number(t.currentTarget.dataset.sub_index), o = e.list, n = "";
                        switch (i) {
                          case 0:
                            o[a].show = !o[a].show, e.setData({
                                list: o
                            });
                            break;

                          case 1:
                            if (e.begin_vote && o[a - 1] && o[a - 1].timestamp) return;
                            a > 0 && (e["editor" + o[a].id].setContents({
                                delta: o[a - 1].delta || null
                            }), e["editor" + o[a - 1].id].setContents({
                                delta: o[a].delta || null
                            }), n = o[a].id, o[a].id = o[a - 1].id, o[a - 1].id = n), s.scope.upRecord(o, a), 
                            e.setData({
                                list: o
                            });
                            break;

                          case 2:
                            a < o.length - 1 && (e["editor" + o[a].id].setContents({
                                delta: o[a + 1].delta || null
                            }), e["editor" + o[a + 1].id].setContents({
                                delta: o[a].delta || null
                            }), n = o[a].id, o[a].id = o[a + 1].id, o[a + 1].id = n), s.scope.downRecord(o, a), 
                            e.setData({
                                list: o
                            });
                            break;

                          case 3:
                            wx.showModal({
                                content: "确认删除",
                                success: function(t) {
                                    if (t.confirm) {
                                        for (var i = a; i < o.length - 1; i++) e["editor" + o[i].id].setContents({
                                            delta: o[i + 1].delta || null
                                        });
                                        if (n = o[a].id, s.scope.removeRecord(o, a), o[a]) {
                                            for (i = o.length - 1; i > a; i--) o[i].id = o[i - 1].id;
                                            o[a].id = n;
                                        }
                                        e.setData({
                                            list: o
                                        });
                                    }
                                }
                            });
                        }
                    },
                    audioplay: function(t) {
                        var e = this, a = t.currentTarget.dataset.src;
                        0 != o.audioplay(a) ? wx.showModal({
                            content: "播放...",
                            confirmText: "更换",
                            cancelText: "关闭",
                            success: function(i) {
                                i.confirm ? e.chooseImage_item(t) : o.audioplay(a, !0);
                            }
                        }) : wx.showToast({
                            title: "播放失败了",
                            icon: "fail"
                        });
                    },
                    openDocument: function(t) {
                        var e = this, a = t.currentTarget.dataset.src;
                        wx.showModal({
                            content: "文档操作",
                            confirmText: "更换",
                            cancelText: "预览",
                            success: function(i) {
                                i.confirm ? e.chooseImage_item(t) : s.openDocument(a);
                            }
                        });
                    },
                    chooseImage_item: function(t) {
                        if (t.currentTarget.dataset.edit) {
                            var e = t.currentTarget.dataset.index;
                            wx.navigateTo({
                                url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&showVideo=1&showAudio=1&showDocument=1&func=chooseImage_item&index=" + e
                            });
                        }
                    },
                    chooseImage_config: function(t) {
                        var e = t.currentTarget.dataset.key;
                        wx.navigateTo({
                            url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&func=chooseImage_config&key=" + e
                        });
                    },
                    chooseImageGzh: function(t) {
                        var e = t.currentTarget.dataset.key;
                        wx.navigateTo({
                            url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&func=chooseImageGzh&key=" + e
                        });
                    },
                    chooseImageTheme: function(t) {
                        var e = this, a = t.currentTarget.dataset.key;
                        this.$data.theme[a] ? wx.showActionSheet({
                            itemList: [ "更换", "预览", "清除" ],
                            success: function(t) {
                                0 == t.tapIndex && wx.navigateTo({
                                    url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&func=chooseImageTheme&key=" + a
                                }), 1 == t.tapIndex && s.previewImage([ e.$data.theme[a] ], e.$data.theme[a]), 2 == t.tapIndex && (e.$data.theme[a] = "", 
                                e.setData({
                                    theme: e.$data.theme
                                }));
                            }
                        }) : wx.navigateTo({
                            url: "/pages/mind/pictureBase/pictureBase?navigate_back=1&func=chooseImageTheme&key=" + a
                        });
                    },
                    config_switch: function(t) {
                        var e = t.currentTarget.dataset.key;
                        "open_apply" == e && o.request({
                            url: i.update_vote_open,
                            data: o.addSid({
                                open_apply: t.detail.value ? 1 : 0,
                                orderno: this.orderno
                            }),
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            success: function(e) {
                                t.detail.value && wx.showToast({
                                    title: e.data.msg,
                                    icon: "none"
                                });
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        }, this, 1), this[e] = t.detail.value ? 1 : 0, this.setData(this.$data);
                    },
                    config_input: function(t) {
                        this[t.currentTarget.dataset.key] = t.detail.value, this.setData(this.$data);
                    },
                    bindStartDateChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t), this.tem_start_date = t.detail.value, this.startdatetime = this.tem_start_date + " " + this.tem_start_time, 
                        this.startdatetime < s.date("Y-m-d H:i:s") && (this.tem_start_date = s.date("Y-m-d"), 
                        this.startdatetime = this.tem_start_date + " " + this.tem_start_time), this.setData(this.$data);
                    },
                    bindStartTimeChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t.detail.value), this.tem_start_time = t.detail.value, 
                        this.startdatetime = this.tem_start_date + " " + this.tem_start_time, this.startdatetime < s.date("Y-m-d H:i:s") && (this.tem_start_time = s.date("H:i"), 
                        this.startdatetime = this.tem_start_date + " " + this.tem_start_time), this.setData(this.$data);
                    },
                    bindEndDateChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t), this.tem_end_date = t.detail.value, this.enddatatime = this.tem_end_date + " " + this.tem_end_time, 
                        this.enddatatime < s.date("Y-m-d H:i:s") && (this.tem_end_date = s.date("Y-m-d"), 
                        this.enddatatime = this.tem_end_date + " " + this.tem_end_time), this.setData(this.$data);
                    },
                    bindEndTimeChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t.detail.value), this.tem_end_time = t.detail.value, 
                        this.enddatatime = this.tem_end_date + " " + this.tem_end_time, this.enddatatime < s.date("Y-m-d H:i:s") && (this.tem_end_time = s.date("H:i"), 
                        this.enddatatime = this.tem_end_date + " " + this.tem_end_time), this.setData(this.$data);
                    },
                    bindStartOpenDateChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t), this.tem_start_open_date = t.detail.value, 
                        this.startopendatetime = this.tem_start_open_date + " " + this.tem_start_open_time, 
                        this.startopendatetime < s.date("Y-m-d H:i:s") && (this.tem_start_open_date = s.date("Y-m-d"), 
                        this.startopendatetime = this.tem_start_open_date + " " + this.tem_start_open_time), 
                        this.setData(this.$data);
                    },
                    bindStartOpenTimeChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t.detail.value), this.tem_start_open_time = t.detail.value, 
                        this.startopendatetime = this.tem_start_open_date + " " + this.tem_start_open_time, 
                        this.startopendatetime < s.date("Y-m-d H:i:s") && (this.tem_start_open_time = s.date("H:i"), 
                        this.startopendatetime = this.tem_start_open_date + " " + this.tem_start_open_time), 
                        this.setData(this.$data);
                    },
                    bindEndOpenDateChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t), this.tem_end_open_date = t.detail.value, this.endopendatatime = this.tem_end_open_date + " " + this.tem_end_open_time, 
                        this.endopendatatime < s.date("Y-m-d H:i:s") && (this.tem_end_open_date = s.date("Y-m-d"), 
                        this.endopendatatime = this.tem_end_open_date + " " + this.tem_end_open_time), this.setData(this.$data);
                    },
                    bindEndOpenTimeChange: function(t) {
                        console.log("picker发送选择改变，携带值为", t.detail.value), this.tem_end_open_time = t.detail.value, 
                        this.endopendatatime = this.tem_end_open_date + " " + this.tem_end_open_time, this.endopendatatime < s.date("Y-m-d H:i:s") && (this.tem_end_open_time = s.date("H:i"), 
                        this.endopendatatime = this.tem_end_open_date + " " + this.tem_end_open_time), this.setData(this.$data);
                    },
                    bindpschange: function(t) {
                        this.setData({
                            ps: this.ps_items[t.detail.value]
                        });
                    },
                    bindipchange: function(t) {
                        this.setData({
                            ip_limit: this.ps_items[t.detail.value]
                        });
                    },
                    bindintervalchange: function(t) {
                        this.setData({
                            interval: this.interval_items[t.detail.value]
                        });
                    },
                    updae_vote_item: function(t) {
                        var e = this, a = !1;
                        this.list.forEach(function(i, s) {
                            i.id == t.id && (e.list[s] = t, a = !0);
                        }), !1 === a && this.list.push(t), this.setData({
                            list: this.list
                        });
                    },
                    vote_group: function() {
                        s.navigate.to("vote_group/vote_group?title=" + this.title + "&orderno=" + this.orderno + "&image=" + this.top_image_url, {});
                    },
                    openLocation: function(t) {
                        var e = t.currentTarget.dataset.latitude, a = t.currentTarget.dataset.longitude;
                        wx.openLocation({
                            latitude: e,
                            longitude: a,
                            scale: 13
                        });
                    },
                    config_addr_range: function(t) {
                        var e = this.$data;
                        this[t.currentTarget.dataset.key][t.currentTarget.dataset.index].km = t.detail.value, 
                        this.setData(e);
                    },
                    config_addr_local: function(t) {
                        var e = this.$data, a = this;
                        a[t.currentTarget.dataset.key] || (a[t.currentTarget.dataset.key] = [ "" ]), o.getUserLocation(function(i) {
                            !1 !== i ? (a.locality = i, e.addr_local = 1, a[t.currentTarget.dataset.key][t.currentTarget.dataset.index] = i, 
                            e.addr_local_name = "", a[t.currentTarget.dataset.key].forEach(function(t) {
                                e.addr_local_name += t.locality + " ";
                            }), e.addr_local_name = i.locality, a.setData(e)) : wx.showToast({
                                title: "获取位置信息失败",
                                icon: "none"
                            });
                        }, 1, 1);
                    },
                    tag_checked: function(t) {
                        this.table_groups[t.currentTarget.dataset.index].tags[t.currentTarget.dataset.idx] = this.table_groups[t.currentTarget.dataset.index].tags[t.currentTarget.dataset.idx] ? 0 : 1, 
                        this.setData(this.$data);
                    },
                    get_table: function(t) {
                        wx.navigateTo({
                            url: "/pages/mind/manage/manage?check=0&bindTable=fill_user_table"
                        });
                    },
                    add_group_item: function(t) {
                        this[t.currentTarget.dataset.key] || (this[t.currentTarget.dataset.key] = [ "" ]), 
                        this[t.currentTarget.dataset.key].push(""), this.setData(this.$data);
                    },
                    del_group_item: function(t) {
                        1 != this[t.currentTarget.dataset.key].length || "wechat_groups" == t.currentTarget.dataset.key ? (this[t.currentTarget.dataset.key].splice(t.currentTarget.dataset.index, 1), 
                        this.setData(this.$data)) : wx.showToast({
                            title: "至少保留一项",
                            icon: "none"
                        });
                    },
                    get_group_item: function(t) {
                        var e = this;
                        switch (this[t.currentTarget.dataset.key] || (this[t.currentTarget.dataset.key] = [ "" ]), 
                        t.currentTarget.dataset.key) {
                          case "wifis":
                            wx.getConnectedWifi({
                                success: function(a) {
                                    e[t.currentTarget.dataset.key].forEach(function(i) {
                                        i.BSSID != a.wifi.BSSID || wx.showModal({
                                            content: "你已经选择了这个wifi，如果需要设置更多wifi,请在设置中更改当前连接wifi。",
                                            showCancel: !1,
                                            confirmText: "我知道了",
                                            success: function(a) {
                                                e[t.currentTarget.dataset.key][t.currentTarget.dataset.index] = "", e.setData(e.$data);
                                            }
                                        });
                                    }), e[t.currentTarget.dataset.key][t.currentTarget.dataset.index] = a.wifi, e.setData(e.$data);
                                },
                                fail: function(t) {
                                    console.log(t), wx.showToast({
                                        title: t.errMsg,
                                        icon: "none"
                                    });
                                }
                            });
                            break;

                          case "table_groups":
                            wx.navigateTo({
                                url: "/pages/mind/manage/manage?check=0&func=get_group_item&navigate_back=1&key=table_groups&index=" + t.currentTarget.dataset.index
                            });
                            break;

                          case "wechat_groups":
                            this.options.last_page_path = "/pages/issue/vote/vote", s.session.set("vote_data", this.$data), 
                            s.session.set("last_page_options", this.options), wx.navigateTo({
                                url: "/pages/mind/wechat_group/wechat_group?func=get_group_item&navigate_back=1&key=wechat_groups&index=" + t.currentTarget.dataset.index
                            });
                        }
                    },
                    setData: function(t) {
                        var e, a, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, s = this, o = [];
                        Object.keys(t).forEach(function(n) {
                            o = n.split("."), e = t[n], a = s.$data, o.forEach(function(t, n) {
                                n + 1 == o.length ? (a[t] === e && s.$set(a, t, {}), s.$set(a, t, e), "function" == typeof i && i()) : a[t] || s.$set(a, t, {}), 
                                a = a[t];
                            });
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, a("543d").default);
    },
    "752b": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = a("5a67"), s = a.n(i);
        for (var o in i) "default" !== o && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = s.a;
    },
    cec0: function(t, e, a) {},
    ed80: function(t, e, a) {
        "use strict";
        a.d(e, "b", function() {
            return s;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {
            return i;
        });
        var i = {
            navigationTop: function() {
                return a.e("components/navigation-top/navigation-top").then(a.bind(null, "532f"));
            },
            colorPicker: function() {
                return a.e("components/color-picker/color-picker").then(a.bind(null, "a96a"));
            }
        }, s = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.list_groups, function(e, a) {
                var i = t.__map(t.list, function(a, i) {
                    var s = t.tools.indexOf(a.group_name || "", e);
                    return {
                        $orig: t.__get_orig(a),
                        g0: s
                    };
                }), s = t.__map(t.list, function(a, i) {
                    var s = t.tools.indexOf(a.group_name || "", e);
                    return {
                        $orig: t.__get_orig(a),
                        g1: s
                    };
                });
                return {
                    $orig: t.__get_orig(e),
                    l0: i,
                    l1: s
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l2: e
                }
            });
        }, o = [];
    }
}, [ [ "2953", "common/runtime", "common/vendor" ] ] ]);