
// function i (t, e, n) {
//     var r = "weapp_session_" + n("b685").WX_SESSION_MAGIC_ID, 
//     o = {
//         get: function () {
//             return wx.getStorageSync(r) || null;
//         },
//         set: function (t) {
//             wx.setStorageSync(r, t);
//         },
//         clear: function () {
//             wx.removeStorageSync(r);
//         }
//     };
//     global.i = o;
//     t.exports = o;
// }
const i = {
    get: function () {
        return wx.getStorageSync(r) || null;
    },
    set: function (t) {
        wx.setStorageSync(r, t);
    },
    clear: function () {
        wx.removeStorageSync(r);
    }
}
function g() {
    var t = i.get();
    return !(!t || !t.sid) && t.sid;
}
function _() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t.sid = g(), e && (t.sid = e), t.path = getCurrentPages()[getCurrentPages().length - 1].route, 
    Object.keys(t).forEach(function(e) {
        !1 === t[e] && (t[e] = 0), !0 === t[e] && (t[e] = 1), void 0 === t[e] && (t[e] = ""), 
        NaN === t[e] && (t[e] = 0);
    }), Object.assign(t, getApp().globalData.commonParameters);
}
const d = new Uint32Array(17)
const a = true
const e = 'hex'
t.prototype.hash = function () {}
function t(t) {
    if (t) d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, 
    this.blocks = d, this.buffer8 = l; else if (a) {
        var e = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(e), this.blocks = new Uint32Array(e);
    } else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, 
    this.finalized = this.hashed = !1, this.first = !0;
}
t.prototype.update = function(t) {
    if (!this.finalized) {
        var e, n = typeof t;
        if ("string" !== n) {
            if ("object" !== n) throw r;
            if (null === t) throw r;
            if (a && t.constructor === ArrayBuffer) t = new Uint8Array(t); else if (!(Array.isArray(t) || a && ArrayBuffer.isView(t))) throw r;
            e = !0;
        }
        console.log('update', a)
        
        for (var o, i, c = 0, s = t.length, u = this.blocks, l = this.buffer8; c < s; ) {
            if (this.hashed && (this.hashed = !1, u[0] = u[16], u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0), 
            e) if (a) for (i = this.start; c < s && i < 64; ++c) l[i++] = t[c]; else for (i = this.start; c < s && i < 64; ++c) u[i >> 2] |= t[c] << y[3 & i++]; else if (a) for (i = this.start; c < s && i < 64; ++c) (o = t.charCodeAt(c)) < 128 ? l[i++] = o : o < 2048 ? (l[i++] = 192 | o >> 6, 
            l[i++] = 128 | 63 & o) : o < 55296 || o >= 57344 ? (l[i++] = 224 | o >> 12, l[i++] = 128 | o >> 6 & 63, 
            l[i++] = 128 | 63 & o) : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++c)), 
            l[i++] = 240 | o >> 18, l[i++] = 128 | o >> 12 & 63, l[i++] = 128 | o >> 6 & 63, 
            l[i++] = 128 | 63 & o); else for (i = this.start; c < s && i < 64; ++c) (o = t.charCodeAt(c)) < 128 ? u[i >> 2] |= o << y[3 & i++] : o < 2048 ? (u[i >> 2] |= (192 | o >> 6) << y[3 & i++], 
            u[i >> 2] |= (128 | 63 & o) << y[3 & i++]) : o < 55296 || o >= 57344 ? (u[i >> 2] |= (224 | o >> 12) << y[3 & i++], 
            u[i >> 2] |= (128 | o >> 6 & 63) << y[3 & i++], u[i >> 2] |= (128 | 63 & o) << y[3 & i++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(++c)), 
            u[i >> 2] |= (240 | o >> 18) << y[3 & i++], u[i >> 2] |= (128 | o >> 12 & 63) << y[3 & i++], 
            u[i >> 2] |= (128 | o >> 6 & 63) << y[3 & i++], u[i >> 2] |= (128 | 63 & o) << y[3 & i++]);
            this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.start = i - 64, 
            this.hash(), this.hashed = !0) : this.start = i;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, 
        this.bytes = this.bytes % 4294967296), this;
    }
}
function l(n) {
    const res = new t(!0).update(n)[e]()
    return res;
}
const signdata = function(t) {
    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], // app_id
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; // app_os 比如 "android"
    console.log(e, n)
    // e && (t = _(t)), 
    t.ts = Math.round(new Date().getTime() / 1e3);
    var r = Object.keys(t).sort(function(t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
    }), 
    o = "", 
    i = "";
    console.log(r.forEach(function(e) {
        o += e + "=" + t[e] || "", n && (i += e + "=" + t[e] + "&");
    }))
    r.forEach(function(e) {
        o += e + "=" + t[e] || "", n && (i += e + "=" + t[e] + "&");
    })
    t.data_sign = l("".concat(t.ts, "@#@#") + l(o) + "@#@#".concat(t.ts))
    return  n ? i + "data_sign=" + t.data_sign : t;
}
const res = signdata({
    add_poll: 0,
    app_id: "com.jiulku.yizhimao.tppx",
    app_os: "android",
    app_ver: "1.0.0.0",
    // data_sign: "742c1323bae1b3b72fe8338893374893",
    data_sign: '',
    home: "1",
    id: "1598686092",
    orderno: "dd20200829_00000034",
    path: "pages/discovery/vote_item/vote_item",
    sid: 0,
    ts: 1599060268,
    vote_lables: "",
})
console.log(res)