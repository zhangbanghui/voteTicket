(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/color-picker/color-picker" ], {
    1776: function(t, o, e) {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var r = {
            data: function() {
                return {
                    opacity: 100,
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
                    barY: 0,
                    top: 0,
                    left: 0,
                    scrollTop: 0,
                    scrollLeft: 0,
                    timer: 0
                };
            },
            components: {},
            props: {
                rpxRatio: {
                    type: Number,
                    default: 1
                },
                colorData: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            beforeMount: function() {
                this.setData({
                    hueData: this.colorData.hueData,
                    pickerData: this.colorData.pickerData,
                    barY: this.colorData.barY
                });
            },
            mounted: function() {
                var t = this, o = wx.createSelectorQuery().in(this);
                o.select("#wrapper").boundingClientRect(), o.selectViewport().scrollOffset(), o.exec(function(o) {
                    t.setData({
                        top: o[0].top,
                        left: o[0].left,
                        scrollTop: o[1].scrollTop,
                        scrollLeft: o[1].scrollLeft
                    });
                });
            },
            methods: {
                chooseColorFun: function(t) {
                    var o = this;
                    clearTimeout(this.timer);
                    var e = (t.changedTouches[0].pageX - this.left - this.scrollLeft) / this.rpxRatio, r = (t.changedTouches[0].pageY - this.top - this.scrollTop) / this.rpxRatio;
                    e = (e = e > 480 ? 480 : e) < 0 ? 0 : e, r = (r = r > 480 ? 480 : r) < 0 ? 0 : r;
                    var a = this.pickerData;
                    a.x = e, a.y = r, this.setData({
                        pickerData: a,
                        timer: setTimeout(function() {
                            o.changeColorFun(e, r);
                        }, 50)
                    });
                },
                changeBarFun: function(t) {
                    var o = (t.changedTouches[0].pageY - this.top - this.scrollTop) / this.rpxRatio;
                    o = (o = o > 490 ? 490 : o) < 0 ? 0 : o, this.setData({
                        barY: o
                    }), this.changeHueFun(o);
                },
                changeColorFun: function(t, o) {
                    var e = this.hueData.colorStopRed, r = this.hueData.colorStopGreen, a = this.hueData.colorStopBlue, c = [ this.pickerData.red, this.pickerData.green, this.pickerData.blue ], n = c[0], i = c[1], l = c[2];
                    if (255 === e) {
                        var u = 255 - t * ((255 - r) / 480), p = 255 - t * ((255 - a) / 480);
                        n = 255, i = Math.round(u > r ? u : r), l = Math.round(p > a ? p : a);
                    }
                    if (255 === r) {
                        var s = 255 - t * ((255 - e) / 480), h = 255 - t * ((255 - a) / 480);
                        n = Math.round(s > e ? s : e), i = 255, l = Math.round(h > a ? h : a);
                    }
                    if (255 === a) {
                        var f = 255 - t * ((255 - e) / 480), d = 255 - t * ((255 - r) / 480);
                        n = Math.round(f > e ? f : e), i = Math.round(d > r ? d : r), l = 255;
                    }
                    var D = o * (n / 480), v = o * (i / 480), b = o * (l / 480), g = this.rgbToHexFun(n - D, i - v, l - b), k = this.pickerData;
                    k.red = Math.round(n - D), k.green = Math.round(i - v), k.blue = Math.round(l - b), 
                    k.hex = g, this.setData({
                        pickerData: k
                    }), this.$emit("changecolor", {
                        detail: {
                            colorData: {
                                hueData: this.hueData,
                                pickerData: this.pickerData,
                                barY: this.barY
                            }
                        }
                    });
                },
                changeHueFun: function(t) {
                    var o = this.hueData;
                    if (t < 81.67) {
                        var e = t / .32 > 255 ? 255 : t / .32;
                        o.colorStopRed = 255, o.colorStopGreen = Math.round(e), o.colorStopBlue = 0;
                    }
                    if (t >= 81.67 && t < 163.34) {
                        var r = (t - 81.67) / .32 > 255 ? 255 : (t - 81.67) / .32;
                        o.colorStopRed = 255 - Math.round(r), o.colorStopGreen = 255, o.colorStopBlue = 0;
                    }
                    if (t >= 163.34 && t < 245.01) {
                        var a = (t - 163.34) / .32 > 255 ? 255 : (t - 163.34) / .32;
                        o.colorStopRed = 0, o.colorStopGreen = 255, o.colorStopBlue = Math.round(a);
                    }
                    if (t >= 245.01 && t < 326.68) {
                        var c = (t - 245.01) / .32 > 255 ? 255 : (t - 245.01) / .32;
                        o.colorStopRed = 0, o.colorStopGreen = 255 - Math.round(c), o.colorStopBlue = 255;
                    }
                    if (t >= 326.68 && t < 408.35) {
                        var n = (t - 326.68) / .32 > 255 ? 255 : (t - 326.68) / .32;
                        o.colorStopRed = Math.round(n), o.colorStopGreen = 0, o.colorStopBlue = 255;
                    }
                    if (t >= 408.35) {
                        var i = (t - 408.35) / .32 > 255 ? 255 : (t - 408.35) / .32;
                        o.colorStopRed = 255, o.colorStopGreen = 0, o.colorStopBlue = 255 - Math.round(i);
                    }
                    this.setData({
                        hueData: o
                    }), this.changeColorFun(this.pickerData.x, this.pickerData.y);
                },
                rgbToHexFun: function(t, o, e) {
                    var r = (t << 16 | o << 8 | e).toString(16);
                    return r.length < 6 && (r = "".concat("0".repeat(6 - r.length)).concat(r)), "0" == r && (r = "000000"), 
                    "#".concat(r);
                }
            }
        };
        o.default = r;
    },
    "50e7": function(t, o, e) {
        "use strict";
        e.d(o, "b", function() {
            return r;
        }), e.d(o, "c", function() {
            return a;
        }), e.d(o, "a", function() {});
        var r = function() {
            this.$createElement, this._self._c;
        }, a = [];
    },
    "5a16": function(t, o, e) {},
    9785: function(t, o, e) {
        "use strict";
        var r = e("5a16");
        e.n(r).a;
    },
    a96a: function(t, o, e) {
        "use strict";
        e.r(o);
        var r = e("50e7"), a = e("e7e0");
        for (var c in a) "default" !== c && function(t) {
            e.d(o, t, function() {
                return a[t];
            });
        }(c);
        e("9785");
        var n = e("f0c5"), i = Object(n.a)(a.default, r.b, r.c, !1, null, null, null, !1, r.a, void 0);
        o.default = i.exports;
    },
    e7e0: function(t, o, e) {
        "use strict";
        e.r(o);
        var r = e("1776"), a = e.n(r);
        for (var c in r) "default" !== c && function(t) {
            e.d(o, t, function() {
                return r[t];
            });
        }(c);
        o.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/color-picker/color-picker-create-component", {
    "components/color-picker/color-picker-create-component": function(t, o, e) {
        e("543d").createComponent(e("a96a"));
    }
}, [ [ "components/color-picker/color-picker-create-component" ] ] ]);