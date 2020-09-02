(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/web_view/uLink" ], {
    "245c": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("35c2"), i = n("4f53");
        for (var c in i) "default" !== c && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(c);
        var a = n("f0c5"), u = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "35c2": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
        var o = function() {
            this.$createElement, this._self._c;
        }, i = [];
    },
    "4f53": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("8caf"), i = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = i.a;
    },
    "8caf": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                name: "u-link",
                props: {
                    sy: {
                        type: String,
                        default: ""
                    },
                    href: {
                        type: String,
                        default: ""
                    },
                    text: {
                        type: String,
                        default: ""
                    },
                    inWhiteList: {
                        type: Boolean,
                        default: !1
                    }
                },
                methods: {
                    openLink: function(e) {
                        e && (this.href = e), this.openURL();
                    },
                    openURL: function() {
                        this.inWhiteList ? e.navigateTo({
                            url: "/common/web_view/web_view?url=" + this.href
                        }) : (e.setClipboardData({
                            data: this.href
                        }), e.showModal({
                            content: "本网址无法直接在小程序内打开。已自动复制网址，请在手机浏览器里粘贴该网址",
                            showCancel: !1
                        }));
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "common/web_view/uLink-create-component", {
    "common/web_view/uLink-create-component": function(e, t, n) {
        n("543d").createComponent(n("245c"));
    }
}, [ [ "common/web_view/uLink-create-component" ] ] ]);