(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/hint-box" ], {
    3669: function(n, t, o) {},
    "3c08": function(n, t, o) {
        "use strict";
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return c;
        }), o.d(t, "a", function() {});
        var e = function() {
            this.$createElement, this._self._c;
        }, c = [];
    },
    "45b3": function(n, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, t.default = {
            data: function() {
                return {
                    show: !1,
                    hint: ""
                };
            },
            methods: {
                show_box_msg: function(n) {
                    this.setData({
                        hint: n.replace(/<br\/>/g, "\n"),
                        show: !0
                    });
                },
                _hide: function() {
                    this.setData({
                        show: !1
                    });
                }
            }
        };
    },
    "4abd": function(n, t, o) {
        "use strict";
        o.r(t);
        var e = o("3c08"), c = o("ab58");
        for (var a in c) "default" !== a && function(n) {
            o.d(t, n, function() {
                return c[n];
            });
        }(a);
        o("aacb");
        var u = o("f0c5"), i = Object(u.a)(c.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = i.exports;
    },
    aacb: function(n, t, o) {
        "use strict";
        var e = o("3669");
        o.n(e).a;
    },
    ab58: function(n, t, o) {
        "use strict";
        o.r(t);
        var e = o("45b3"), c = o.n(e);
        for (var a in e) "default" !== a && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(a);
        t.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/hint-box-create-component", {
    "components/hint-box-create-component": function(n, t, o) {
        o("543d").createComponent(o("4abd"));
    }
}, [ [ "components/hint-box-create-component" ] ] ]);