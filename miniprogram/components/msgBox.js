(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/msgBox" ], {
    "0d0a": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("a9a4"), a = e("2eeb");
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        e("f310");
        var u = e("f0c5"), s = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = s.exports;
    },
    "2eeb": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("423b"), a = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = a.a;
    },
    "423b": function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            data: function() {
                return {
                    url: null,
                    image: null,
                    msg_type: null,
                    title: null,
                    send_time: null,
                    msg_content: null,
                    review_qty: null,
                    type: null
                };
            },
            name: "msgBox",
            props: [ "obj", "notice" ],
            mounted: function() {
                this.setData(this.obj), this.notice && this.setData(this.notice);
            },
            methods: {
                setData: function(t) {
                    var n, e, o = this, a = [];
                    Object.keys(t).forEach(function(c) {
                        a = c.split("."), n = t[c], e = o.$data, a.forEach(function(t, c) {
                            c + 1 == a.length ? (e[t] === n && o.$set(e, t, {}), o.$set(e, t, n)) : e[t] || o.$set(e, t, {}), 
                            e = e[t];
                        });
                    });
                }
            }
        };
        n.default = o;
    },
    "52e4": function(t, n, e) {},
    a9a4: function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
        var o = function() {
            this.$createElement, this._self._c;
        }, a = [];
    },
    f310: function(t, n, e) {
        "use strict";
        var o = e("52e4");
        e.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/msgBox-create-component", {
    "components/msgBox-create-component": function(t, n, e) {
        e("543d").createComponent(e("0d0a"));
    }
}, [ [ "components/msgBox-create-component" ] ] ]);