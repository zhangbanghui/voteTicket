(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Commodity-box" ], {
    "00a1": function(o, t, n) {
        "use strict";
        var e = n("748f");
        n.n(e).a;
    },
    3384: function(o, t, n) {
        "use strict";
        n.r(t);
        var e = n("cd5b"), r = n.n(e);
        for (var c in e) "default" !== c && function(o) {
            n.d(t, o, function() {
                return e[o];
            });
        }(c);
        t.default = r.a;
    },
    "4ff9": function(o, t, n) {
        "use strict";
        n.r(t);
        var e = n("f03a"), r = n("3384");
        for (var c in r) "default" !== c && function(o) {
            n.d(t, o, function() {
                return r[o];
            });
        }(c);
        n("00a1");
        var a = n("f0c5"), u = Object(a.a)(r.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = u.exports;
    },
    "748f": function(o, t, n) {},
    cd5b: function(o, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var e = {
            name: "commodity-box",
            props: [ "obj", "report" ],
            methods: {
                goto_: function(o) {
                    wx.navigateTo({
                        url: o.currentTarget.dataset.url
                    });
                },
                _report_order: function(o) {
                    this.$emit("report_order", this.obj.orderno);
                }
            }
        };
        t.default = e;
    },
    f03a: function(o, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return e;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
        var e = function() {
            this.$createElement, this._self._c;
        }, r = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Commodity-box-create-component", {
    "components/Commodity-box-create-component": function(o, t, n) {
        n("543d").createComponent(n("4ff9"));
    }
}, [ [ "components/Commodity-box-create-component" ] ] ]);