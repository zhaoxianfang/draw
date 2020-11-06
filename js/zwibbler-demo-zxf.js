/**
 * Zwibbler
 * 一个在线画图工具
 * @license www.itzxf.com
 * @edit 20200427 zhaoxianfang 新增获取文件对象功能
 */
(function() {
    var __extends = (function() {
        var extendStatics = Object.setPrototypeOf || ({
                __proto__: []
            }
            instanceof Array && function(d, b) {
                d.__proto__ = b;
            }) || function(d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p)) d[p] = b[p];
        };
        return function(d, b) {
            extendStatics(d, b);

            function __() {
                this.constructor = d;
            }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new(P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }

            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }

            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function(thisArg, body) {
        var _ = {
                label: 0,
                sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            },
            f, y, t, g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;

        function verb(n) {
            return function(v) {
                return step([n, v]);
            };
        }

        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [0];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];
                y = 0;
            } finally {
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    };
    var __values = (this && this.__values) || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(c, a, b) {
            c != Array.prototype && c != Object.prototype && (c[a] = b.value)
        },
        ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function ca() {
        ca = function() {};
        ba.Symbol || (ba.Symbol = da)
    }
    var da = function() {
        var c = 0;
        return function(a) {
            return "jscomp_symbol_" + (a || "") + c++
        }
    }();

    function ea() {
        ca();
        var c = ba.Symbol.iterator;
        c || (c = ba.Symbol.iterator = ba.Symbol("iterator"));
        "function" != typeof Array.prototype[c] && aa(Array.prototype, c, {
            configurable: !0,
            writable: !0,
            value: function() {
                return fa(this)
            }
        });
        ea = function() {}
    }

    function fa(c) {
        var a = 0;
        return ha(function() {
            return a < c.length ? {
                done: !1,
                value: c[a++]
            } : {
                done: !0
            }
        })
    }

    function ha(c) {
        ea();
        c = {
            next: c
        };
        c[ba.Symbol.iterator] = function() {
            return this
        };
        return c
    }

    function ia(c, a) {
        ea();
        c instanceof String && (c += "");
        var b = 0,
            d = {
                next: function() {
                    if (b < c.length) {
                        var e = b++;
                        return {
                            value: a(e, c[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    }

    function ja(c, a) {
        if (a) {
            for (var b = ba, d = c.split("."), e = 0; e < d.length - 1; e++) {
                var h = d[e];
                h in b || (b[h] = {});
                b = b[h]
            }
            d = d[d.length - 1];
            e = b[d];
            h = a(e);
            h != e && null != h && aa(b, d, {
                configurable: !0,
                writable: !0,
                value: h
            })
        }
    }
    ja("Array.prototype.values", function(c) {
        return c ? c : function() {
            return ia(this, function(a, b) {
                return b
            })
        }
    });
    ja("Array.prototype.keys", function(c) {
        return c ? c : function() {
            return ia(this, function(a) {
                return a
            })
        }
    });

    function ka(c) {
        ea();
        var a = c[Symbol.iterator];
        return a ? a.call(c) : fa(c)
    }
    ja("Promise", function(c) {
        function a(a) {
            this.mc = 0;
            this.cn = void 0;
            this.zg = [];
            var b = this.Dl();
            try {
                a(b.resolve, b.reject)
            } catch (l) {
                b.reject(l)
            }
        }

        function b() {
            this.ye = null
        }

        function d(b) {
            return b instanceof a ? b : new a(function(a) {
                a(b)
            })
        }
        if (c) return c;
        b.prototype.Uo = function(a) {
            null == this.ye && (this.ye = [], this.Is());
            this.ye.push(a)
        };
        b.prototype.Is = function() {
            var a = this;
            this.Vo(function() {
                a.Mt()
            })
        };
        var e = ba.setTimeout;
        b.prototype.Vo = function(a) {
            e(a, 0)
        };
        b.prototype.Mt = function() {
            for (; this.ye && this.ye.length;) {
                var a = this.ye;
                this.ye = [];
                for (var b = 0; b < a.length; ++b) {
                    var d = a[b];
                    a[b] = null;
                    try {
                        d()
                    } catch (n) {
                        this.Js(n)
                    }
                }
            }
            this.ye = null
        };
        b.prototype.Js = function(a) {
            this.Vo(function() {
                throw a;
            })
        };
        a.prototype.Dl = function() {
            function a(a) {
                return function(e) {
                    d || (d = !0, a.call(b, e))
                }
            }
            var b = this,
                d = !1;
            return {
                resolve: a(this.Jw),
                reject: a(this.Wm)
            }
        };
        a.prototype.Jw = function(b) {
            if (b === this) this.Wm(new TypeError("A Promise cannot resolve to itself"));
            else if (b instanceof a) this.qx(b);
            else {
                a: switch (typeof b) {
                    case "object":
                        var d = null != b;
                        break a;
                    case "function":
                        d = !0;
                        break a;
                    default:
                        d = !1
                }
                d ? this.Iw(b) : this.Fp(b)
            }
        };
        a.prototype.Iw = function(a) {
            var b = void 0;
            try {
                b = a.then
            } catch (l) {
                this.Wm(l);
                return
            }
            "function" == typeof b ? this.rx(b, a) : this.Fp(a)
        };
        a.prototype.Wm = function(a) {
            this.tr(2, a)
        };
        a.prototype.Fp = function(a) {
            this.tr(1, a)
        };
        a.prototype.tr = function(a, b) {
            if (0 != this.mc) throw Error("Cannot settle(" + a + ", " + b + "): Promise already settled in state" + this.mc);
            this.mc = a;
            this.cn = b;
            this.Nt()
        };
        a.prototype.Nt = function() {
            if (null != this.zg) {
                for (var a = 0; a < this.zg.length; ++a) h.Uo(this.zg[a]);
                this.zg = null
            }
        };
        var h = new b;
        a.prototype.qx = function(a) {
            var b = this.Dl();
            a.Li(b.resolve, b.reject)
        };
        a.prototype.rx = function(a, b) {
            var d = this.Dl();
            try {
                a.call(b, d.resolve, d.reject)
            } catch (n) {
                d.reject(n)
            }
        };
        a.prototype.then = function(b, d) {
            function e(a, b) {
                return "function" == typeof a ? function(b) {
                    try {
                        c(a(b))
                    } catch (z) {
                        h(z)
                    }
                } : b
            }
            var c, h, f = new a(function(a, b) {
                c = a;
                h = b
            });
            this.Li(e(b, c), e(d, h));
            return f
        };
        a.prototype["catch"] = function(a) {
            return this.then(void 0, a)
        };
        a.prototype.Li = function(a, b) {
            function d() {
                switch (e.mc) {
                    case 1:
                        a(e.cn);
                        break;
                    case 2:
                        b(e.cn);
                        break;
                    default:
                        throw Error("Unexpected state: " + e.mc);
                }
            }
            var e = this;
            null == this.zg ? h.Uo(d) : this.zg.push(d)
        };
        a.resolve = d;
        a.reject = function(b) {
            return new a(function(a, d) {
                d(b)
            })
        };
        a.race = function(b) {
            return new a(function(a, e) {
                for (var c = ka(b), h = c.next(); !h.done; h = c.next()) d(h.value).Li(a, e)
            })
        };
        a.all = function(b) {
            var e = ka(b),
                c = e.next();
            return c.done ? d([]) : new a(function(a, b) {
                function h(b) {
                    return function(d) {
                        f[b] = d;
                        k--;
                        0 == k && a(f)
                    }
                }
                var f = [],
                    k = 0;
                do f.push(void 0), k++, d(c.value).Li(h(f.length - 1), b), c = e.next(); while (!c.done)
            })
        };
        return a
    });
    ja("String.prototype.startsWith", function(c) {
        return c ? c : function(a, b) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (a instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var d = this + "";
            a += "";
            for (var e = d.length, c = a.length, f = Math.max(0, Math.min(b | 0, d.length)), k = 0; k < c && f < e;)
                if (d[f++] != a[k++]) return !1;
            return k >= c
        }
    });
    ja("Array.prototype.fill", function(c) {
        return c ? c : function(a, b, d) {
            var e = this.length || 0;
            0 > b && (b = Math.max(0, e + b));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (b = Number(b || 0); b < d; b++) this[b] = a;
            return this
        }
    });
    ja("Math.sign", function(c) {
        return c ? c : function(a) {
            a = Number(a);
            return 0 === a || isNaN(a) ? a : 0 < a ? 1 : -1
        }
    });
    var r = function() {
            function c(a, b) {
                this.type = a;
                this.values = b
            }
            c.lj = function(a) {
                a.toLowerCase() in c.ko && (a = c.ko[a.toLowerCase()]);
                var b = /#([0-9a-f])([0-9a-f])([0-9a-f])/i,
                    d = /rgb\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *\)/,
                    e = /rgba\( *([0-9]+) *, *([0-9]+) *, *([0-9]+) *, *([0-9\.]+) *\)/;
                var h = /#([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])/i.exec(a);
                if (null !== h) a = parseInt(h[1], 16) / 255, b = parseInt(h[2], 16) / 255, d = parseInt(h[3], 16) / 255, h = 1;
                else if (h = e.exec(a), null !== h) a = parseFloat(h[1]) / 255, b = parseFloat(h[2]) / 255, d = parseFloat(h[3]) / 255, h = parseFloat(h[4]);
                else if (h = d.exec(a), null !== h) a = parseFloat(h[1]) / 255, b = parseFloat(h[2]) / 255, d = parseFloat(h[3]) / 255, h = 1;
                else if (h = b.exec(a), null !== h) a = parseInt(h[1], 16), a = (16 * a + a) / 255, b = parseInt(h[2], 16), b = (16 * b + b) / 255, d = parseInt(h[2], 16), d = (16 * d + d) / 255, h = 1;
                else return null;
                return new c(c.RGBA, [a, b, d, h])
            };
            c.Yd = function(a) {
                return c.lj(a) || new c(c.RGBA, [1, 0, 1, 1])
            };
            c.Dy = function(a) {
                var b = /#[0-9a-f]+|rgba?\([^\)]+\)|[a-z]+/gi,
                    d = [],
                    e;
                do(e = b.exec(a)) && d.push(e[0]); while (e);
                return d
            };
            c.prototype.toString = function() {
                function a(a) {
                    a = Math.round(255 * a);
                    return 16 > a ? "0" + a.toString(16) : a.toString(16)
                }
                var b = this.Si(c.RGBA);
                return 1 === b.values[3] ? "#" + a(b.values[0]) + a(b.values[1]) + a(b.values[2]) : "rgba(" + Math.round(255 * b.values[0]) + "," + Math.round(255 * b.values[1]) + "," + Math.round(255 * b.values[2]) + "," + b.values[3] + ")"
            };
            c.prototype.Si = function(a) {
                return c.ot[this.type][a](this)
            };
            c.prototype.Kb = function(a) {
                a.type !== this.type && (a = a.Si(this.type));
                if (this.type === c.bf) {
                    var b = this.values[0],
                        d = a.values[0];
                    b = b > d ? Math.min(b - d, d - b + 360) : Math.min(d - b, b - d + 360);
                    b /= 360;
                    return Math.pow(b * b + (this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) + (this.values[2] - a.values[2]) * (this.values[2] - a.values[2]), .5)
                }
                return Math.pow((this.values[0] - a.values[0]) * (this.values[0] - a.values[0]) + (this.values[1] - a.values[1]) * (this.values[1] - a.values[1]) + (this.values[2] - a.values[2]) * (this.values[2] - a.values[2]), .5)
            };
            c.RGBA = 0;
            c.to = 1;
            c.bf = 2;
            c.Ur = 3;
            c.sy = 3;
            c.ot = [
                [la, ma, na, oa],
                [pa, la, qa, ra],
                [sa, ta, la, ua],
                [va, wa, xa, la]
            ];
            c.ko = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrodyellow: "#fafad2",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370d8",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#d87093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                transparent: "rgba(0,0,0,0.0)",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            };
            return c
        }(),
        ya = .9505,
        za = 1,
        Aa = 1.089;

    function sa(c) {
        var a = c.values[0],
            b = c.values[1],
            d = c.values[2];
        0 > a && (a += 360);
        var e = a / 60 - Math.floor(a / 60),
            h = d * (1 - b),
            f = d * (1 - e * b);
        b = d * (1 - (1 - e) * b);
        var k = e = 0,
            l = 0;
        switch (Math.floor(a / 60) % 6) {
            case 0:
                e = d;
                k = b;
                l = h;
                break;
            case 1:
                e = f;
                k = d;
                l = h;
                break;
            case 2:
                e = h;
                k = d;
                l = b;
                break;
            case 3:
                e = h;
                k = f;
                l = d;
                break;
            case 4:
                e = b;
                k = h;
                l = d;
                break;
            case 5:
                e = d, k = h, l = f
        }
        return new r(r.RGBA, [e, k, l, c.values[3]])
    }

    function na(c) {
        var a = c.values[0],
            b = c.values[1],
            d = c.values[2],
            e = Math.max(a, b, d),
            h = Math.min(a, b, d);
        return new r(r.bf, [e === h ? 0 : e === a ? (60 * (b - d) / (e - h) + 360) % 360 : e === b ? 60 * (d - a) / (e - h) + 120 : 60 * (a - b) / (e - h) + 240, 0 === e ? 0 : 1 - h / e, e, c.values[3]])
    }

    function ra(c) {
        function a(a) {
            return a > 6 / 29 * (6 / 29) * (6 / 29) ? Math.pow(a, 1 / 3) : 1 / 3 * (29 / 6) * (29 / 6) * a + 4 / 29
        }
        var b = a(c.values[1] / za);
        return new r(r.Ur, [116 * b - 16, 500 * (a(c.values[0] / ya) - b), 200 * (b - a(c.values[2] / Aa)), c.values[3]])
    }

    function wa(c) {
        var a = (c.values[0] + 16) / 116,
            b = a + c.values[1] / 500,
            d = a - c.values[2] / 200,
            e = 6 / 29;
        return new r(r.to, [b > e ? ya * b * b * b : 3 * (b - 16 / 116) * e * e * ya, a > e ? za * a * a * a : 3 * (a - 16 / 116) * e * e * za, d > e ? Aa * d * d * d : 3 * (d - 16 / 116) * e * e * Aa, c.values[3]])
    }

    function ma(c) {
        for (var a = [], b = 0; 3 > b; b++) a[b] = .04045 >= c.values[b] ? c.values[b] / 12.92 : Math.pow((c.values[b] + .055) / 1.055, 2.4);
        return new r(r.to, [.4124 * a[0] + .3576 * a[1] + .1805 * a[2], .2126 * a[0] + .7152 * a[1] + .0722 * a[2], .0193 * a[0] + .1192 * a[1] + .9505 * a[2], c.values[3]])
    }

    function pa(c) {
        var a = [],
            b = [0, 0, 0, 0];
        a[0] = 3.241 * c.values[0] - 1.5374 * c.values[1] - .4986 * c.values[2];
        a[1] = -.9692 * c.values[0] + 1.876 * c.values[1] + .0416 * c.values[2];
        a[2] = .0556 * c.values[0] - .204 * c.values[1] + 1.057 * c.values[2];
        for (var d = 0; 3 > d; d++) b[d] = .0031308 >= a[d] ? 12.92 * a[d] : 1.055 * Math.pow(a[d], 1 / 2.4) - .055;
        b[3] = c.values[3];
        return new r(r.RGBA, b)
    }

    function la(c) {
        return new r(c.type, c.values.concat())
    }

    function oa(c) {
        return ra(ma(c))
    }

    function va(c) {
        return pa(wa(c))
    }

    function qa(c) {
        return na(pa(c))
    }

    function ta(c) {
        return ma(sa(c))
    }

    function ua(c) {
        return oa(sa(c))
    }

    function xa(c) {
        return qa(wa(c))
    };

    function Ba(c) {
        for (var a = "", b, d, e, h, f, k, l = 0; l < c.length;) b = c.charCodeAt(l++), d = c.charCodeAt(l++), e = c.charCodeAt(l++), h = b >> 2, b = (b & 3) << 4 | d >> 4, f = (d & 15) << 2 | e >> 6, k = e & 63, isNaN(d) ? f = k = 64 : isNaN(e) && (k = 64), a = a + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k);
        return a
    };
    var Ca = function() {
        function c(a, b, d) {
            void 0 === d && (d = "");
            this.name = a;
            this.attributes = b;
            this.text = d;
            this.children = []
        }
        c.prototype.toString = function() {
            var a = [];
            this.Mo(a, "");
            a = a.join("");
            for (var b = "", d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? b += String.fromCharCode(e) : (127 < e && 2048 > e ? b += String.fromCharCode(e >> 6 | 192) : (b += String.fromCharCode(e >> 12 | 224), b += String.fromCharCode(e >> 6 & 63 | 128)), b += String.fromCharCode(e & 63 | 128))
            }
            return b
        };
        c.prototype.Mo = function(a, b) {
            var d;
            if (this.hasAttributes() || 0 !== this.children.length) {
                a.push(b);
                a.push("<");
                a.push(this.name);
                for (d in this.attributes) this.attributes.hasOwnProperty(d) && (a.push(" "), a.push(d), void 0 !== this.attributes[d] && null !== this.attributes[d] && (a.push('="'), a.push(this.Co("" + this.attributes[d])), a.push('"')));
                if (this.children.length || "" !== this.text) {
                    a.push(">\n");
                    for (d = 0; d < this.children.length; d++) this.children[d].Mo(a, b + "  ");
                    "" !== this.text && a.push(b + "  " + this.Co(this.text));
                    a.push(b + "</" + this.name + ">")
                } else a.push("/>");
                a.push("\n")
            }
        };
        c.prototype.hasAttributes = function() {
            for (var a in this.attributes)
                if (this.attributes.hasOwnProperty(a)) return !0;
            return !1
        };
        c.prototype.fi = function(a) {
            for (var b in a) a.hasOwnProperty(b) && (this.attributes[b] = a[b])
        };
        c.prototype.Ud = function(a) {
            this.children.push(a)
        };
        c.prototype.Co = function(a) {
            return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
        };
        return c
    }();
    var x = new(function() {
        function c() {
            this.disabled = {};
            this.ee = [];
            this.hp = !1
        }
        c.prototype.enable = function(a, b) {
            void 0 === b && (b = !0);
            this.disabled[a] = !b
        };
        c.prototype.create = function(a, b) {
            void 0 === b && (b = !0);
            !1 === b && (this.disabled[a] = !0);
            var d = this;
            return function() {
                for (var b = 0; b < arguments.length; b++);
                d.Bv(a, arguments)
            }
        };
        c.prototype.addListener = function(a) {
            this.ee.push(a);
            return a
        };
        c.prototype.removeListener = function(a) {
            for (var b = 0; b < this.ee.length; b++)
                if (this.ee[b] === a) {
                    this.ee.splice(b, 1);
                    break
                }
        };
        c.prototype.It = function() {
            this.hp || (this.hp = !0, this.addListener(function(a, b) {
                console.log(a + ": " + b)
            }))
        };
        c.prototype.Bv = function(a, b) {
            var d = [],
                e;
            if (!this.disabled[a]) {
                var c = b[0].split("%s");
                d.push(c[0]);
                for (e = 1; e < c.length; e++) e - 1 >= b.length - 1 ? d.push("<too few args>") : "string" === typeof b[e] || "number" === typeof b[e] ? d.push(b[e]) : void 0 === b[e] ? d.push("(undefined)") : null === b[e] ? d.push("(null)") : b[e] instanceof Object && b[e].toString instanceof Function ? d.push(b[e].toString()) : d.push(JSON.stringify(b[e])), d.push(c[e]);
                d = d.join("");
                e = 0;
                for (c = this.ee; e < c.length; e++)(0, c[e])(a, d)
            }
        };
        return c
    }());
    var Da = x.create("EVALJS"),
        Ea = function() {
            function c(a, b) {
                this.td = a;
                this.key = b
            }
            c.prototype.toString = function() {
                return "LValue(" + this.key + ")"
            };
            return c
        }(),
        Fa = function() {
            function c(a, b, d) {
                this.id = a;
                this.Uj = b;
                d && (this.he = d)
            }
            c.prototype.he = function() {
                return this
            };
            c.prototype.mq = function(a) {
                return a
            };
            c.prototype.toString = function() {
                return "Token(id='" + this.id + "', lbp=" + this.Uj + ")"
            };
            return c
        }(),
        Ga = function() {
            function c(a, b) {
                return a[b]
            }

            function a(a, b, d) {
                a[b] = d
            }

            function b(a) {
                if (a instanceof Ea) {
                    if (a.td === z) return L(z, a.key);
                    if (a.td) return a.td[a.key]
                } else return a
            }

            function d(a, b) {
                void 0 === b && (b = 0);
                var d = E[a];
                d ? d.Uj = Math.max(d.Uj, b) : d = E[a] = new Fa(a, b);
                return d
            }

            function e(a, b) {
                var e = d(a);
                e.he = function() {
                    return b
                };
                return e
            }

            function h(a) {
                return new Fa("(literal)", 0, function() {
                    return a
                })
            }

            function f(a) {
                var b = new Fa("(name)", 0, function() {
                    return new Ea(z, a)
                });
                b.toString = function() {
                    return "Token(name: " + a + ")"
                };
                return b
            }

            function k(a, d, e) {
                l(a, d, function(a) {
                    return e(b(a), b(y(d - 1)))
                })
            }

            function l(a, b, e) {
                d(a, b).mq = e
            }

            function n(a, e, c) {
                d(a, e).he = function() {
                    return c(b(y(e)))
                }
            }

            function q(a, b, e) {
                d(a, b).he = e
            }

            function u(a) {
                return " " === a || "\t" === a || "\n" === a || "\r" === a
            }

            function v() {
                return Na < Y.length ? Y[Na++] : E["(end)"]
            }

            function w(a) {
                if (a && U.id !== a) throw Error("Error: expected " + a + " but got " + U.id);
                return U = v()
            }

            function y(a) {
                var b = U;
                U = v();
                for (var d = b.he(); a < U.Uj;) b = U, U = v(), d = b.mq(d);
                return d
            }
            var z = {},
                L = c,
                R = a,
                E = {},
                D = 0,
                C, W;
            e("true", !0);
            e("false", !1);
            e("null", null);
            e("undefined", void 0);
            d("(end)");
            (function(a, d, e) {
                l(a, d, function(a) {
                    return e(b(a), b(y(d)))
                })
            })(",", C = ++D, function(a, b) {
                return b
            });
            l("=", W = ++D, function(a) {
                var d = y(W);
                if (!(a instanceof Ea)) throw Error("Error: lhs of = must be assignable");
                d = b(d);
                if (a.td === z) R(z, a.key, d);
                else if (a.td instanceof Object) a.td[a.key] = d;
                else throw Error(a.td + "[" + a.key + "] cannot be assigned to.");
                return d
            });
            k("&&", ++D, function(a, b) {
                return a && b
            });
            k("||", ++D, function(a, b) {
                return a || b
            });
            k("|", ++D, function(a, b) {
                return a | b
            });
            k("^", ++D, function(a, b) {
                return a ^ b
            });
            k("&", ++D, function(a, b) {
                return a & b
            });
            k("===", ++D, function(a, b) {
                return a === b
            });
            k("!==", D, function(a, b) {
                return a !== b
            });
            k("==", D, function(a, b) {
                return a == b
            });
            k("!=", D, function(a, b) {
                return a != b
            });
            k(">", ++D, function(a, b) {
                return a > b
            });
            k(">=", D, function(a, b) {
                return a >= b
            });
            k("<", D, function(a, b) {
                return a < b
            });
            k("<=", D, function(a, b) {
                return a <= b
            });
            k("in", D, function(a, b) {
                return a in b
            });
            k("<<", ++D, function(a, b) {
                return a << b
            });
            k(">>", D, function(a, b) {
                return a >> b
            });
            k(">>>", D, function(a, b) {
                return a >>> b
            });
            k("+", ++D, function(a, b) {
                return a + b
            });
            k("-", D, function(a, b) {
                return a - b
            });
            k("*", ++D, function(a, b) {
                return a * b
            });
            k("/", D, function(a, b) {
                return a / b
            });
            k("%", D, function(a, b) {
                return a % b
            });
            n("!", ++D, function(a) {
                return !a
            });
            n("~", D, function(a) {
                return ~a
            });
            n("+", D, function(a) {
                return +a
            });
            n("-", D, function(a) {
                return -a
            });
            n("typeof", D, function(a) {
                return typeof a
            });
            l(".", ++D, function(a) {
                var d = U;
                if ("(name)" !== d.id) throw Error("Error: '.' expects a name, not " + U.id);
                if (a instanceof Ea) a.td = b(a), a.key = d.he().key;
                else if (a instanceof Object) a = new Ea(b(a), d.he().key);
                else throw Error("Error: '.' must be preceded by object");
                w();
                return a
            });
            q("(", ++D, function() {
                var a = y(0);
                w(")");
                return a
            });
            d(")");
            l("(", ++D, function(a) {
                var d = [];
                if (")" !== U.id)
                    for (;;) {
                        d.push(b(y(C + 1)));
                        if ("," !== U.id) break;
                        w(",")
                    }
                w(")");
                var e = null;
                a instanceof Ea && (e = a.td);
                a = b(a);
                if ("function" !== typeof a) throw Error("Tried to call a non-function; type was " + typeof a);
                return a.apply(e, d)
            });
            d(",");
            l("[", D, function(a) {
                var d = y(0);
                if (!(a instanceof Ea)) throw Error("Error: '[]' must be preceded by lvalue");
                w("]");
                a.td = b(a);
                a.key = b(d);
                return a
            });
            d("]");
            q("{", ++D, function() {
                for (var a = {};
                    "}" !== U.id;) {
                    if ("(literal)" === U.id) var d = U.he();
                    else if ("(name)" === U.id) d = U.he().key;
                    else throw Error("Bad {}; expecting name or string constant");
                    w();
                    w(":");
                    a[d] = b(y(C + 1));
                    if ("," !== U.id) break;
                    U = w(",")
                }
                w("}");
                return a
            });
            q("[", D, function() {
                for (var a = [];
                    "]" !== U.id;) {
                    a.push(b(y(C + 1)));
                    if ("," !== U.id) break;
                    U = w(",")
                }
                w("]");
                return a
            });
            d(",");
            d(":");
            d("}");
            var nb = /(\d+(\.\d+)?)|(===|!==|==|!=|\+=|-=|&&|\|\||<=|>=|<<|>>>|>>|&&|\|\||[{}\(\)\[\]\+\-\.\*\/=!,\?&\|:%~<>])|([a-zA-Z\$_][\$_a-zA-Z0-9]*)|("([^"\\]|\\.)*"|'([^'\\]|\\.)*')/g,
                Y = [],
                Na = 0,
                U;
            return {
                parse: function(a) {
                    for (var b = [], d = 0; d < a.length;) {
                        for (; u(a.charAt(d));) d++;
                        nb.lastIndex = d;
                        var e = nb.exec(a);
                        if (e && e.index === d)
                            if (d += e[0].length, e[1]) b.push(h(parseFloat(e[1])));
                            else if (e[3] && e[3] in E) b.push(E[e[3]]);
                        else if (e[4]) switch (e[4]) {
                            case "true":
                            case "false":
                            case "null":
                            case "in":
                            case "typeof":
                            case "undefined":
                                b.push(E[e[4]]);
                                break;
                            default:
                                b.push(f(e[4]))
                        } else {
                            if (e[5]) {
                                e = e[5].substr(1, e[5].length - 2);
                                for (var c = "", k = !1, l = 0; l < e.length; l++) {
                                    var n = e[l];
                                    if (k) {
                                        switch (n) {
                                            case "n":
                                                n = "\n";
                                                break;
                                            case "r":
                                                n = "\r";
                                                break;
                                            case "t":
                                                n = "\t"
                                        }
                                        c += n;
                                        k = !1
                                    } else "\\" === n ? k = !0 : c += n
                                }
                                b.push(h(c))
                            }
                        } else throw Error("Parse error: Expected stuff in " + a + " near: " + a.substr(d));
                    }
                    b.push(E["(end)"]);
                    return b
                },
                evaluate: function(d, e, h, f) {
                    Na = 0;
                    Y = e;
                    z = d;
                    L = h || function(a, b) {
                        return a[b]
                    };
                    R = f || function(a, b, d) {
                        a[b] = d
                    };
                    U = v();
                    d = b(y(0));
                    z = {};
                    L = c;
                    R = a;
                    return d
                }
            }
        }(),
        Ia = Ga.parse,
        Ja = Ga.evaluate;

    function Ka(c, a, b) {
        try {
            return Ja(c, Ia(a), b)
        } catch (d) {
            console.log("When evaluating: %s on scope ", a, c), console.log(d)
        }
    }

    function Ma(c, a) {
        if (c === a) return !0;
        if (!(c instanceof Object && a instanceof Object) || c.constructor !== a.constructor) return !1;
        for (var b in c)
            if (c.hasOwnProperty(b) && (!a.hasOwnProperty(b) || c[b] !== a[b] && ("object" !== typeof c[b] || !Ma(c[b], a[b])))) return !1;
        for (b in a)
            if (a.hasOwnProperty(b) && !c.hasOwnProperty(b)) return !1;
        return !0
    }
    var Oa = function() {
        function c() {
            this.ue = {};
            this.$h = !1;
            this.length = 0;
            this.pl = [];
            this.timeout = 0
        }
        c.prototype.watch = function(a, b, d) {
            a = {
                scope: a,
                parsed: Ia(b),
                yq: void 0,
                wq: d
            };
            b in this.ue ? this.ue[b].push(a) : this.ue[b] = [a];
            this.length += 1;
            this.$h = !0;
            this.check()
        };
        c.prototype.unwatch = function(a, b) {
            if (a in this.ue) {
                for (var d = this.ue[a], e = 0; e < d.length; e++)
                    if (d[e].wq === b) {
                        d.splice(e, 1);
                        break
                    }
                0 === d.length && delete this.ue[a];
                --this.length
            }
        };
        c.prototype.check = function(a) {
            var b = this;
            this.$h = !0;
            a && this.pl.push(a);
            0 === this.timeout && (this.timeout = setTimeout(function() {
                for (var a = (new Date).getTime(), e = 0, c = 0; 10 > c && b.$h; c++) {
                    b.$h = !1;
                    for (var f in b.ue)
                        for (var k = null, l = void 0, n = 0; n < b.ue[f].length; n++) {
                            var q = b.ue[f][n];
                            try {
                                q.scope !== k && (l = Ja(q.scope, q.parsed), k = q.scope, e += 1), Ma(q.yq, l) || (q.yq = l, q.wq(l), b.$h = !0)
                            } catch (u) {
                                console.log("Error when evaluating %s: ", f, u), console.log("Context was: %o", q.scope)
                            }
                        }
                    l = b.pl;
                    b.pl = [];
                    for (k = 0; k < l.length; k++)(0, l[k])()
                }
                Da("Evaluated %s/%s watchers in %sms", e, b.length, (new Date).getTime() - a);
                b.timeout = 0
            }, 0))
        };
        return c
    }();
    var Qa = function() {
            function c() {
                this.items = [];
                this.next = 0;
                this.Ce = !1;
                this.log = x.create("UNDOSTACK")
            }
            c.prototype.ua = function(a, b, d) {
                void 0 === b && (b = !1);
                a = a instanceof Pa ? [a] : a;
                if (0 !== a.length) {
                    this.next < this.items.length && (this.items.length = this.next);
                    if (!b)
                        for (b = 0; b < a.length; b++) a[b].gd(d);
                    for (d = this.top(); d;)
                        if (d[d.length - 1].Df(a[0])) {
                            if (a.shift(), 0 === a.length) break
                        } else break;
                    a.length && this.items.push(a);
                    this.Ce = !0;
                    this.next = this.items.length
                }
            };
            c.prototype.xc = function(a) {
                this.log("Undo index %s of %s", this.next, this.items.length);
                if (this.Sd()) {
                    for (var b = this.items[--this.next], d = b.length - 1; 0 <= d; d--) b[d].xc(a);
                    return this.Ce = !0
                }
                return !1
            };
            c.prototype.Gd = function(a) {
                this.log("Redo index %s of %s", this.next, this.items.length);
                if (this.Rd()) {
                    for (var b = this.items[this.next++], d = 0; d < b.length; d++) b[d].gd(a);
                    return this.Ce = !0
                }
                return !1
            };
            c.prototype.Sd = function() {
                return 0 < this.next
            };
            c.prototype.Rd = function() {
                return this.next < this.items.length
            };
            c.prototype.clear = function() {
                this.next = this.items.length = 0;
                this.Ce = !1
            };
            c.prototype.top = function() {
                return this.items.length ? this.items[this.items.length - 1] : null
            };
            return c
        }(),
        Pa = function() {
            function c() {}
            c.prototype.gd = function() {};
            c.prototype.xc = function() {};
            c.prototype.Df = function() {
                return !1
            };
            return c
        }();
    var Ra = function() {
            function c(a) {
                this.next = a
            }
            c.prototype.Kr = function(a) {
                for (var b = 0; b < a.length; b++) this.jb(a.charCodeAt(b))
            };
            c.prototype.jb = function(a) {
                this.next.jb(a)
            };
            c.prototype.flush = function() {
                this.next.flush()
            };
            c.prototype.og = function() {
                return this.next.og()
            };
            return c
        }(),
        Sa = function() {
            function c() {
                this.data = "";
                this.log = x.create("BYTESTREAM")
            }
            c.prototype.Kr = function(a) {
                for (var b = 0; b < a.length; b++) this.jb(a.charCodeAt(b))
            };
            c.prototype.og = function() {
                return this
            };
            c.prototype.jb = function(a) {
                if (255 < a || 0 > a) throw "Bad data written to byte buffer";
                this.data += String.fromCharCode(a)
            };
            c.prototype.flush = function() {};
            c.prototype.toString = function() {
                return this.data
            };
            c.prototype.Ib = function() {
                for (var a = [], b = 0; b < this.data.length; b++) a.push(this.data.charCodeAt(b));
                return a
            };
            c.ro = function(a, b) {
                c.no[a] = b
            };
            c.$e = function(a) {
                var b = new c;
                a = a.split(",");
                a.reverse();
                for (var d = 0; d < a.length; d++) {
                    var e = a[d];
                    e.length && (b = c.no[e](b))
                }
                return b
            };
            c.no = {};
            return c
        }();
    var Ta = function(c) {
        function a(a) {
            a = c.call(this, a) || this;
            a.hh = 0;
            a.total = 0;
            a.size = 0;
            a.keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            return a
        }
        __extends(a, c);
        a.prototype.jb = function(a) {
            this.hh = this.hh << 8 | a;
            this.size += 8;
            for (this.total += 1; 6 <= this.size;) this.next.jb(this.keys.charCodeAt(this.hh >> this.size - 6 & 63)), this.size -= 6
        };
        a.prototype.flush = function() {
            var a = (3 - this.total % 3) % 3;
            this.size && (this.next.jb(this.keys.charCodeAt(this.hh >> this.size - 6 & 63)), this.hh = this.size = 0);
            for (; a--;) this.next.jb(61);
            this.next.flush()
        };
        return a
    }(Ra);
    Sa.ro("Base64Encoder", function(c) {
        return new Ta(c)
    });
    var Ua = function(c) {
        function a(a) {
            a = c.call(this, a) || this;
            a.If = 0;
            a.Ed = 0;
            a.rq = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8193];
            a.log = x.create("BITWRITER");
            return a
        }
        __extends(a, c);
        a.prototype.jb = function(a) {
            this.Jr(a, 8)
        };
        a.prototype.Jr = function(a, d) {
            this.If = this.If << d | a & this.rq[d];
            for (this.Ed += d; 8 <= this.Ed;) this.next.jb(this.If >>> this.Ed - 8 & 255), this.Ed -= 8, this.If &= this.rq[this.Ed]
        };
        a.prototype.flush = function() {
            this.Ed && (this.next.jb(this.If << 8 - this.Ed), this.If = this.Ed = 0);
            this.next.flush()
        };
        return a
    }(Ra);
    var Va = function(c) {
        function a(a) {
            var b = c.call(this, a) || this;
            b.wg = 258;
            b.yy = 0;
            b.Xf = 0;
            b.first = !0;
            b.lh = [];
            b.Sm = [];
            b.rl = [];
            b.By = 0;
            b.Bl = 9;
            b.log = x.create("LZWEncoder");
            b.Rs = new Ua(a);
            b.yo();
            return b
        }
        __extends(a, c);
        a.prototype.jb = function(a) {
            if (this.first) this.Xf = a, this.first = !1;
            else {
                var b = this.fs(this.Xf, a);
                void 0 !== this.lh[b] ? this.Xf = this.lh[b] : (this.zi(this.Xf), this.lh[b] = this.wg, this.Sm[b] = this.Xf, this.Xf = this.rl[b] = a, 4095 > this.wg ? (this.wg += 1, this.Bl = Math.ceil(Math.log(this.wg) / Math.log(2))) : this.yo())
            }
        };
        a.prototype.fs = function(a, d) {
            var b;
            var c = d << 4 ^ a;
            for (b = 0 === c ? 1 : 18041 - c;;) {
                if (void 0 === this.lh[c] || this.Sm[c] === a && this.rl[c] === d) return c;
                c -= b;
                0 > c && (c += 18041)
            }
        };
        a.prototype.yo = function() {
            this.zi(a.Or);
            this.wg = 258;
            this.Bl = 9;
            this.lh.length = 0;
            this.Sm.length = 0;
            this.rl.length = 0
        };
        a.prototype.flush = function() {
            this.first || (this.zi(this.Xf), this.zi(a.Sr))
        };
        a.prototype.zi = function(a) {
            this.Rs.Jr(a, this.Bl)
        };
        a.Or = 256;
        a.Sr = 257;
        return a
    }(Ra);
    Sa.ro("LZWEncoder", function(c) {
        return new Va(c)
    });
    x.create("ANIM");
    var Wa = function() {
        function c() {
            this.Eg = 0;
            this.fn = null
        }
        c.prototype.request = function(a, b) {
            var d = this;
            this.Fs = a;
            this.fn = b;
            0 === this.Eg && (this.Eg = window.requestAnimationFrame(function(a) {
                d.Eg = 0;
                d.fn && d.fn(d.Fs, a)
            }))
        };
        c.prototype.cancel = function() {
            0 !== this.Eg && (window.cancelAnimationFrame(this.Eg), this.Eg = 0)
        };
        return c
    }();

    function Xa(c, a, b) {
        this.Na = c;
        this.Ck = a;
        this.fn = b;
        this.Hk = 0
    }
    var Ya = new(function() {
        function c() {
            this.yb = [];
            this.In = !1;
            this.log = x.create("ImageLoader")
        }
        c.prototype.timeout = function() {
            var a = [];
            this.log("Timeout running... %s images remaining", this.yb.length);
            for (var b = 0; b < this.yb.length; b++) this.yb[b].Na.complete ? this.yb[b].fn(this.yb[b].Na, this.yb[b].Ck) : 5E3 > this.yb[b].Hk ? (this.yb[b].Hk += 250, a.push(this.yb[b])) : this.yb[b].fn(this.yb[b].Na, this.yb[b].Ck);
            this.yb = a;
            this.yb.length ? setTimeout(this.timeout, 250) : (this.log("Timeout Stopped"), this.In = !1)
        };
        
        c.prototype.load = function(a, b, d) {
            var e = this;
            void 0 === d && (d = !1);
            var c = document.createElement("img"),
                f = new Xa(c, a, b);
            this.yb.push(f);
            var k = 0 <= a.indexOf("://"),
            l = "://" + window.location.host,
            n = 0 !== a.indexOf("data:") && k && -1 === a.indexOf(l);
            

            n && !d && (this.log("Using cross origin request for img"), c.crossOrigin = "");
            
            // c.crossOrigin = "Anonymous"
            // c.setAttribute("crossOrigin",'Anonymous')

            c.addEventListener("load", function() {
                e.log("LoadFn called. complete=%s", c.complete);
                if (c.complete){
                    for (var a = 0; a < e.yb.length; a++) {
                        var d = e.yb[a];
                        if (d.Na === c) {
                            e.yb.splice(a, 1);
                            b(c, d.Ck);
                            break
                        }
                    } } else e.In || (e.In = !0, setTimeout(e.timeout, 250), f.Hk = 250)
            }, !1);
            c.addEventListener("error", function() {
                e.log("Error loading %s; useCors=%s disableCors=%s", a, n, d);
                !n || d ? b(null, f.Ck) : e.load(a, b, !0)
            }, !1);
            c.src = a;
            return c
        };
        return c
    }());
    var Za = function() {
        function c() {
            this.images = {}
        }
        c.prototype.add = function(a, b) {
            var d = this.images[a];
            d || (d = {
                Na: null,
                qk: 0
            }, Ya.load(b, function(a) {
                d.Na = a
            }), this.images[a] = d);
            d.qk += 1
        };
        c.prototype.release = function(a) {
            var b = this.images[a];
            b && (--b.qk, 0 >= b.qk && delete this.images[a])
        };
        c.prototype.get = function(a) {
            return (a = this.images[a]) && a.Na ? a.Na : null
        };
        return c
    }();
    var $a = function() {
        function c(a) {
            this.code = "en";
            this.data = {};
            this.log = x.create("LANGUAGE");
            this.data = this.Lq(a, {})
        }
        c.prototype.pr = function(a) {
            a = a.split(",");
            this.log("Choice of languages: %s", a);
            for (var b = 0; b < a.length; b++) {
                var d = a[b].split("-")[0];
                if (d in this.data) {
                    this.log("Using language code %s", d);
                    this.code = d;
                    break
                } else this.log("No language for code %s", d)
            }
        };
        c.prototype.ol = function(a) {
            this.Lq(a, this.data)
        };
        c.prototype.Lq = function(a, b) {
            for (var d = a.split("\n"), e = /^([ \t]*)([^:]+):([^:]+):(.*)/,
                    c = 0; c < d.length; c++) {
                var f = e.exec(d[c]);
                if (f) {
                    var k = f[2],
                        l = f[3];
                    f = f[4];
                    k in b || (b[k] = {});
                    l in b[k] && this.log("Warning: Replacing %s:%s", k, l);
                    b[k][l] = f
                }
            }
            return b
        };
        c.prototype.fn = function() {
            var a = this;
            return function(b) {
                for (var d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
                return a.Eo(b, d)
            }
        };
        c.prototype.get = function(a) {
            for (var b = [], d = 1; d < arguments.length; d++) b[d - 1] = arguments[d];
            return this.Eo(a, b)
        };
        c.prototype.Eo = function(a, b) {
            var d = "<not translated:" + a + ">";
            this.code in this.data && a in this.data[this.code] && (d = this.data[this.code][a]);
            for (var e = 0; e < b.length; e++) d = d.replace("^" + e, b[e]);
            return d
        };
        return c
    }();
    var ab = x.create("EventEmitter"),
        bb = function() {
            function c() {
                this.Rh = !1;
                this.Ya = {};
                this.xd = [];
                this.gj = {}
            }
            c.prototype.na = function(a) {
                for (var b = this, d = 1; d < arguments.length; d++);
                this.xd.push(Array.prototype.slice.apply(arguments));
                1 === this.xd.length && setTimeout(function() {
                    for (var a = 0; a < b.xd.length; a++) b.Jl.apply(b, b.xd[a]);
                    b.xd.length = 0
                }, 0)
            };
            c.prototype.fd = function(a) {
                for (var b = 1; b < arguments.length; b++);
                this.xd.push(Array.prototype.slice.apply(arguments));
                if (1 === this.xd.length) {
                    for (b = 0; b < this.xd.length; b++) this.Jl.apply(this, this.xd[b]);
                    this.xd.length = 0
                }
            };
            c.prototype.lg = function(a) {
                for (var b = this, d = 1; d < arguments.length; d++);
                d = Array.prototype.slice.apply(arguments);
                var e = d[0];
                e in this.gj || setTimeout(function() {
                    var a = b.gj[e];
                    delete b.gj[e];
                    b.Jl.apply(b, a)
                }, 0);
                this.gj[e] = d
            };
            c.prototype.Jl = function(a) {
                for (var b = [], d = 1; d < arguments.length; d++) b[d - 1] = arguments[d];
                if (a in this.Ya) {
                    d = this.Ya[a];
                    this.Rh || ab("Emit %s", a);
                    for (var e = 0; e < d.length; e++) d[e].apply(null, b)
                }
            };
            c.prototype.pa = function(a, b) {
                this.Ya || (this.Ya = {});
                for (var d = 0, e = a.split(" "); d < e.length; d++) this.bind(e[d], b)
            };
            c.prototype.once = function(a, b) {
                function d() {
                    e.Dr(a, d);
                    b.apply(null, arguments)
                }
                var e = this;
                e.bind(a, d)
            };
            c.prototype.bind = function(a, b) {
                a in this.Ya ? this.Ya[a].push(b) : this.Ya[a] = [b];
                return b
            };
            c.prototype.removeListener = function(a, b) {
                return this.Dr(a, b)
            };
            c.prototype.Dr = function(a, b) {
                var d, e;
                if (a in this.Ya) {
                    var c = this.Ya[a];
                    var f = d = 0;
                    for (e = c.length - 1; d <= e; f = d += 1)
                        if (c[f] === b) {
                            c.splice(f, 1);
                            break
                        }
                    0 === c.length && delete this.Ya[a]
                }
            };
            c.prototype.jh = function() {
                this.Ya = {}
            };
            return c
        }();
    var cb = function(c) {
        function a() {
            var a = c.call(this) || this;
            a.keys = {};
            a.Rh = !0;
            a.Dx = new RegExp("alt backspace cmd command control ctrl del delete down end enter esc escape f4 home ins insert left meta pagedown pageup right shift up \u2318".split(" ").sort(function(a, b) {
                return b.length - a.length
            }).join("|"), "g");
            a.log = x.create("KEYMAP");
            a.Wp = function(b) {
                a.jv(b)
            };
            return a
        }
        __extends(a, c);
        a.prototype.map = function(a, d, e) {
            void 0 === e && (e = !0);
            a = a.toLowerCase().split(",");
            var b;
            if ("string" === typeof d)
                for (d = d.split(","), b = 0; b < a.length; b++)
                    for (var c = 0; c < d.length; c++) this.vo(a[b], d[c], !e);
            else
                for (b = 0; b < a.length; b++) this.vo(a[b], d, !e)
        };
        a.prototype.vo = function(a, d, e) {
            if (0 !== a.length) {
                var b = a.match(this.Dx) || [],
                    c = !1,
                    k = !1,
                    l = !1,
                    n = !1,
                    q = [],
                    u;
                for (u = 0; u < b.length; u++) switch (b[u]) {
                    case "alt":
                        l = !0;
                        break;
                    case "control":
                    case "ctrl":
                        k = !0;
                        break;
                    case "shift":
                        c = !0;
                        break;
                    case "home":
                        q.push(36);
                        break;
                    case "end":
                        q.push(35);
                        break;
                    case "pageup":
                        q.push(33);
                        break;
                    case "pagedown":
                        q.push(34);
                        break;
                    case "delete":
                    case "del":
                        q.push(46);
                        break;
                    case "backspace":
                        q.push(8);
                        break;
                    case "up":
                        q.push(38);
                        break;
                    case "right":
                        q.push(39);
                        break;
                    case "down":
                        q.push(40);
                        break;
                    case "left":
                        q.push(37);
                        break;
                    case "escape":
                    case "esc":
                        q.push(27);
                        break;
                    case "enter":
                        q.push(13);
                        break;
                    case "ins":
                    case "insert":
                        q.push(45);
                        break;
                    case "f4":
                        q.push(115);
                        break;
                    case "meta":
                    case "command":
                    case "cmd":
                    case "\u2318":
                        n = !0;
                        break;
                    default:
                        alert("key entry not found: " + b[u])
                }
                var v = this;
                b = function(a) {
                    c && -1 === a.indexOf("-shift") && (a += "-shift");
                    k && -1 === a.indexOf("-control") && (a += "-control");
                    l && -1 === a.indexOf("-alt") && (a += "-alt");
                    n && -1 === a.indexOf("-meta") && (a += "-meta");
                    "string" === typeof d ? v.log("%sKeyboard mapping: %s->%s", e ? "Remove " : "", a, d) : v.log("%sKeyboard mapping: %s->%s", e ? "Remove " : "", a, "function()");
                    if (e) {
                        if (a in v.keys) {
                            for (var b = [], h = 0, f = v.keys[a]; h < f.length; h++) {
                                var q = f[h];
                                q !== d && b.push(q)
                            }
                            v.keys[a] = b
                        }
                    } else if (a in v.keys) {
                        h = v.keys[a];
                        for (b = 0; b < h.length && h[b] !== d; b++);
                        b === h.length && v.keys[a].push(d)
                    } else v.keys[a] = [d]
                };
                if (0 === q.length) switch (a = a.toUpperCase().charAt(a.length - 1), a) {
                    case "=":
                        b("107-shift");
                        b("187");
                        b("61");
                        break;
                    case "+":
                        b("107");
                        b("61-shift");
                        break;
                    case "-":
                        b("109");
                        b("189");
                        b("173");
                        break;
                    default:
                        q.push(a.charCodeAt(0))
                }
                for (u = 0; u < q.length; u++) b("" + q[u])
            }
        };
        a.prototype.Iu = function(a) {
            var b = "";
            a.keyCode && (b += a.keyCode);
            a.shiftKey && (b += "-shift");
            a.ctrlKey && (b += "-control");
            a.altKey && (b += "-alt");
            a.metaKey && (b += "-meta");
            return b
        };
        a.prototype.translate = function(a) {
            var b = [],
                e = this.Iu(a);
            e in this.keys && (b = this.keys[e]);
            (32 > a.keyCode || 126 <= a.keyCode) && this.log("%s", e);
            return b
        };
        a.prototype.jv = function(a) {
            for (var b = 0, e = this.translate(a); b < e.length; b++) {
                var c = e[b];
                "string" === typeof c ? (this.log("action: %s", c), this.fd("*", c, a)) : c(a)
            }
        };
        a.prototype.Xo = function(a) {
            a.addEventListener("keydown", this.Wp)
        };
        a.prototype.detach = function(a) {
            a.removeEventListener("keydown", this.Wp)
        };
        return a
    }(bb);
    var eb = {
            1: "INITIAL CONNECTION",
            2: "APPEND",
            128: "ERROR",
            129: "ACK/NACK",
            255: "CONTINUATION"
        },
        fb = {
            0: "No",
            1: "Yes"
        };

    function A(c, a, b, d) {
        return {
            length: c,
            type: a,
            name: b,
            zy: d
        }
    }
    var gb = {
        1: [A(1, 0, "messageType", eb), A(1, 0, "more", fb), A(2, 0, "protocolVersion"), A(4, 0, "maxSize"), A(1, 0, "creationMode", {
            0: "POSSIBLY_CREATE",
            1: "NEVER_CREATE",
            2: "ALWAYS_CREATE"
        }), A(8, 0, "offset"), A(1, 0, "docIDLength"), A(-1, 1, "docID"), A(-2, 1, "data")],
        2: [A(1, 0, "messageType", eb), A(1, 0, "more", fb), A(8, 0, "offset"), A(-2, 1, "data")],
        128: [A(1, 0, "messageType", eb), A(1, 0, "more", fb), A(2, 0, "errorCode", {
            0: "UNSPECIFIED",
            1: "DOES_NOT_EXIST",
            2: "ALREADY_EXISTS",
            3: "INVALID_OFFSET"
        }), A(-2, 1, "description")],
        129: [A(1, 0, "messageType", eb), A(1, 0, "more", fb), A(2, 0, "ack", {
            0: "NACK",
            1: "ACK"
        }), A(8, 0, "offset")],
        255: [A(1, 0, "messageType", eb), A(1, 0, "more", fb), A(-2, 1, "data")]
    };

    function hb(c) {
        var a = gb[c.messageType];
        if (!a) throw Error("no encoder for message type " + c.messageType);
        for (var b = [], d = 0; d < a.length; d++) {
            var e = a[d];
            if (!(e.name in c)) throw Error("missing field " + e.name);
            var h = c[e.name];
            if (0 === e.type) {
                var f = b;
                e = e.length;
                do --e, f.push(Math.floor(h / Math.pow(2, 8 * e) % 256)); while (0 < e)
            } else if (h instanceof Uint8Array)
                for (f = 0; f < h.length; f++) b.push(h[f]);
            else
                for (f = b, h = (new TextEncoder).encode(h), e = 0; e < h.length; e++) f.push(h[e])
        }
        return new Uint8Array(b)
    }

    function ib(c) {
        var a = gb[c[0]];
        if (!a) return null;
        for (var b = {}, d = 0, e = 0, h = 0; h < a.length; h++) {
            var f = a[h],
                k;
            if (0 === f.type) {
                d = e;
                var l = f.length;
                for (k = 0; l;) k = 256 * k + c[d], --l, d += 1;
                k = d = k;
                e += f.length
            } else {
                l = d; - 2 === f.length && (l = c.length - e, b[f.name + "_length"] = l);
                k = c;
                var n = e,
                    q = l;
                void 0 === q && (q = k.length - n);
                k = (new TextDecoder).decode(k.slice(n, n + q));
                e += l
            }
            b[f.name] = k
        }
        return b
    }
    var jb = function(c) {
        function a(a, d) {
            var b = c.call(this) || this;
            b.cd = a;
            b.Xj = d;
            a.binaryType = "arraybuffer";
            a.onopen = function() {
                b.na({
                    type: "open"
                })
            };
            a.onerror = function() {
                b.na({
                    type: "error"
                });
                a.onerror = a.onclose = null
            };
            a.onclose = function() {
                b.na({
                    type: "close"
                });
                a.onerror = a.onclose = null
            };
            a.onmessage = function(a) {
                b.na({
                    type: "message",
                    message: new Uint8Array(a.data)
                })
            };
            return b
        }
        __extends(a, c);
        a.prototype.close = function() {
            this.cd.close()
        };
        a.prototype.read = function() {
            return __awaiter(this, void 0, void 0, function() {
                var a,
                    d, e, c, f;
                return __generator(this, function(b) {
                    switch (b.label) {
                        case 0:
                            a = [], b.label = 1;
                        case 1:
                            return [4, this.vq()];
                        case 2:
                            d = b.sent();
                            if ("message" !== d.type || 0 === a.length && !d.message[1]) return [2, d];
                            e = 0;
                            c = d.message;
                            a.length && (e = 2);
                            for (f = e; f < c.length; f++) a.push(c[f]);
                            return d.message[1] ? [3, 1] : [2, {
                                type: "message",
                                message: new Uint8Array(a)
                            }];
                        case 3:
                            return [2]
                    }
                })
            })
        };
        a.prototype.send = function(a) {
            var b = this.cd,
                e = 0,
                c = a.length;
            c > this.Xj && (c = this.Xj, a[1] = 1);
            b.send(a.slice(e, e + c));
            for (e += c; e < a.length;) c = a.length - e, c > this.Xj - 2 && (c = this.Xj - 2), b.send(hb({
                messageType: 255,
                more: e + c < a.length ? 1 : 0,
                data: a.slice(e, e + c)
            })), e += c
        };
        return a
    }(function() {
        function c() {
            this.$n = [];
            this.Ya = []
        }
        c.prototype.vq = function() {
            var a = this;
            return (new Promise(function(b) {
                a.Ya.length ? b(a.Ya.shift()) : a.$n.push(b)
            })).then(null, function(a) {
                throw a;
            })
        };
        c.prototype.na = function(a) {
            this.$n.length ? this.$n.shift()(a) : this.Ya.push(a)
        };
        return c
    }());

    function kb(c) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function() {
                return [2, new Promise(function(a) {
                    setTimeout(a, c)
                })]
            })
        })
    }
    var lb = function(c) {
        function a(a, d, e) {
            var b = c.call(this) || this;
            b.xa = a;
            b.Uw = d;
            b.latency = e;
            b.log = x.create("Sharing");
            b.Mm = function(a) {
                if ("" !== b.Fd) throw Error("Already have queued changes");
                b.Fd = a;
                b.xl()
            };
            b.ik = function() {};
            b.Bn = !1;
            b.connected = !1;
            b.cd = null;
            b.Ec = 0;
            b.Fd = "";
            b.Td = "";
            return b
        }
        __extends(a, c);
        a.prototype.hx = function(a) {
            this.latency = a
        };
        a.prototype.start = function(a, d) {
            var b = this;
            return new Promise(function(e, c) {
                b.log("Start shared session: createMode=%s", d);
                b.ik = e;
                if (1 === d) b.xa.pa("local-changes", b.Mm), b.gp(a, d, "").then(null, c);
                else {
                    var h = function(e) {
                        b.log("Got first changes; finally connecting.");
                        b.xa.removeListener("local-changes", h);
                        b.xa.pa("local-changes", b.Mm);
                        b.gp(a, d, e).then(null, c)
                    };
                    b.xa.pa("local-changes", h)
                }
            })
        };
        a.prototype.stop = function() {
            this.log("stop() -- shut down session");
            this.Bn = !1;
            this.cd && this.cd.close();
            this.xa.removeListener("local-changes", this.Mm)
        };
        a.prototype.gp = function(a, d, e) {
            return __awaiter(this, void 0, void 0, function() {
                var b, c;
                return __generator(this, function(h) {
                    switch (h.label) {
                        case 0:
                            this.Bn = !0, b = 0, h.label = 1;
                        case 1:
                            if (!this.Bn) return [3, 10];
                            this.connected = !1;
                            this.Td && (this.Fd = this.Td, this.Td = "");
                            if (!b) return [3, 3];
                            this.log("Waiting %sms before reconnecting", b);
                            return [4, kb(b)];
                        case 2:
                            h.sent(), h.label = 3;
                        case 3:
                            return b = Math.max(Math.min(2 * b, 3E5), 1E3), [4, this.connect()];
                        case 4:
                            return h.sent() ? [4, this.pv(a, d, e)] : [3, 1];
                        case 5:
                            if (!h.sent()) return [3, 1];
                            this.ik && (this.ik(), this.ik = function() {});
                            this.na("connected");
                            d = 1;
                            e = "";
                            this.connected = !0;
                            this.xl();
                            h.label = 6;
                        case 6:
                            return h.trys.push([6, 8, ,
                                9
                            ]), [4, this.Cs()];
                        case 7:
                            return h.sent(), [3, 9];
                        case 8:
                            return c = h.sent(), this.log("While trying to connect: " + c.message), console.log("While trying to connect: ", c), [3, 9];
                        case 9:
                            return this.connected = !1, b = 0, this.na("connect-error"), [3, 1];
                        case 10:
                            return [2]
                    }
                })
            })
        };
        a.prototype.connect = function() {
            return __awaiter(this, void 0, void 0, function() {
                var a, d, e;
                return __generator(this, function(b) {
                    switch (b.label) {
                        case 0:
                            return a = this.Uw, this.cd && this.cd.close(), this.cd = d = new jb(new WebSocket(a), 102400), this.log("Connect to %s; wait for event", a), [4, d.vq()];
                        case 1:
                            e = b.sent();
                            if ("open" !== e.type) return this.log("Received unexpected event: %s", e.type), [2, !1];
                            this.log("Connected to %s", a);
                            return [2, !0]
                    }
                })
            })
        };
        a.prototype.send = function(a) {
            var b = this;
            setTimeout(function() {
                b.cd && b.cd.send(a)
            }, this.latency)
        };
        a.prototype.pv = function(a, d, e) {
            return __awaiter(this, void 0, void 0, function() {
                var b, c;
                return __generator(this, function(h) {
                    switch (h.label) {
                        case 0:
                            this.log("Send INIT message docLen=%s changes=%s", this.Ec, e.length);
                            try {
                                this.send(hb({
                                    messageType: 1,
                                    more: 0,
                                    maxSize: 102400,
                                    protocolVersion: 2,
                                    creationMode: d,
                                    offset: this.Ec,
                                    docIDLength: a.length,
                                    docID: a,
                                    data: e
                                }))
                            } catch (l) {
                                throw console.log("Got error ", l), l;
                            }
                            return [4, this.cd.read()];
                        case 1:
                            b = h.sent();
                            if ("message" != b.type) return this.log("Expected message; got " + b.type), [2, !1];
                            c = ib(b.message);
                            if (128 === c.messageType) throw this.log("Got error response: %s", c.description), Error(c.description);
                            2 === c.messageType && (0 < c.offset && e.length && this.xa.Lh(e), this.log("Got initial changes at offset %s=>%s", c.offset, c.offset + c.data_length), (c.data.length || 0 === c.offset) && this.xa.ah(c.data, 0 === c.offset), 0 === c.offset && (this.Td = this.Fd = ""), this.Ec = c.offset + c.data_length);
                            this.log("Connected and initialized.");
                            return [2, !0]
                    }
                })
            })
        };
        a.prototype.xl = function() {
            this.Fd.length && this.connected && (this.send(hb({
                messageType: 2,
                offset: this.Ec,
                more: 0,
                data: this.Fd
            })), this.Td = this.Fd, this.Fd = "")
        };
        a.prototype.Cs = function() {
            return __awaiter(this, void 0, void 0, function() {
                var a, d;
                return __generator(this, function(b) {
                    switch (b.label) {
                        case 0:
                            return [4,
                                this.cd.read()
                            ];
                        case 1:
                            a = b.sent();
                            if ("message" !== a.type) return this.log("Expected message; got " + a.type), [2];
                            d = ib(a.message);
                            if (2 === d.messageType) {
                                if (this.Ec !== d.offset) throw Error("Error: docLength =" + this.Ec + " but got offset " + d.offset);
                                this.xa.ah(d.data, !1);
                                this.log("From server: APPEND " + this.Ec + "->" + (this.Ec + d.data_length));
                                this.Ec += d.data_length;
                                this.xl()
                            } else if (129 === d.messageType) d.ack ? (this.log("Received ACK " + this.Ec + "=>" + d.offset), this.xa.Lh(this.Td), this.Td = "", this.Ec = d.offset) : (this.log("Received NACK; my " + this.Ec + "!=" + d.offset), "" === this.Fd && (this.Fd = this.Td, this.Td = ""));
                            else throw Error("Unexpected message type " + d.messageType);
                            b.label = 2;
                        case 2:
                            return [3, 0];
                        case 3:
                            return [2]
                    }
                })
            })
        };
        return a
    }(bb);
    x.create("ColourPanel");
    var mb = {
        style: "\n.zwibbler-colour-panel {\n    overflow:hidden;\n    border-top: 1px solid black;\n    white-space: nowrap;\n    font-size: 0;\n}\n\n.zwibbler-colour-panel div { \n    display: inline-block;\n}",
        Kj: '<div class="zwibbler-colour-panel" z-style="{height:ColourPanelWidth()+\'px\'}">\n    <canvas z-clear-glyph="{width: ColourPanelWidth(), style:\'clear\'}"\n        z-on:click="setColour(\'rgba(0,0,0,0.0)\', true)"\n        z-on:contextmenu="setColour(\'rgba(0,0,0,0.0)\', false)">\n    </canvas>\n    <canvas z-clear-glyph="{width: ColourPanelWidth(), style:\'transparent\'}"\n        z-on:click="setOpacity(0.5, true)"\n        z-on:contextmenu="setOpacity(0.5, false)">\n    </canvas>\n    <div z-for="colour in ColourPanelColours"\n        z-style="{width: ColourPanelWidth()+\'px\', height: ColourPanelWidth()+\'px\', background: colour}"\n        z-on:click="setColour(colour, true)"\n        z-on:contextmenu="setColour(colour, false)">\n    </div>\n</div>\n',
        controller: function(c) {
            var a = c.ip();
            a.shift();
            a.shift();
            c.ColourPanelColours = a;
            c.ColourPanelWidth = function() {
                return c.Zd("useTouch") ? 40 : 20
            }
        }
    };
    var ob = function() {
        function c() {
            this.ph = [];
            this.log = x.create("DESTRUCTOR")
        }
        c.prototype.add = function(a) {
            this.ph.push(a)
        };
        c.prototype.addEventListener = function(a, b, d, e) {
            function c(b) {
                a.addEventListener(b, d, e);
                f.add(function() {
                    a.removeEventListener(b, d, e)
                })
            }
            var f = this;
            void 0 === e && (e = !1);
            var k = 0;
            for (b = b.split(" "); k < b.length; k++) c(b[k])
        };
        c.prototype.pa = function(a, b, d) {
            a.pa(b, d);
            this.add(function() {
                a.removeListener(b, d)
            })
        };
        c.prototype.Xa = function() {
            this.log("Running %s destructors", this.ph.length);
            for (var a = this.ph.length - 1; 0 <= a; a--) this.ph[a]();
            this.ph.length = 0
        };
        return c
    }();
    x.create("OTDocument");
    var pb = function() {
            function c(a, b, d, e, c) {
                void 0 === e && (e = []);
                void 0 === c && (c = !1);
                this.Pa = a;
                this.uc = b;
                this.dc = d;
                this.ops = e;
                this.local = c
            }
            c.prototype.clone = function(a, b) {
                void 0 === b && (b = this.dc);
                for (var d = [], e = 0, h = this.ops; e < h.length; e++) d.push(h[e].clone());
                return new c(a, this.uc, b, d, this.local)
            };
            c.prototype.inverse = function(a, b) {
                void 0 === a && (a = this.Pa);
                void 0 === b && (b = this.dc);
                for (var d = [], e = this.ops.length - 1; 0 <= e; e--) d.push(this.ops[e].inverse());
                return new c(a, this.uc, b, d, this.local)
            };
            return c
        }(),
        qb = function() {
            function c(a, b, d) {
                this.Zs = a;
                this.Ps = b;
                this.lq = d
            }
            c.prototype.getData = function() {
                return this.Zs
            };
            c.prototype.Ke = function() {
                return this.lq
            };
            c.prototype.empty = function() {
                return this.Ps === this.lq
            };
            return c
        }(),
        rb = function() {
            function c(a, b) {
                void 0 === a && (a = !1);
                this.Ls = a;
                this.Ae = b;
                this.log = x.create("OTDocument");
                this.yc = [];
                this.next = 0;
                this.local = [];
                this.all = [];
                this.ub = 0;
                this.te = {};
                this.xb = !1;
                this.Vj = null;
                this.Go = -1;
                this.al = ""
            }
            c.prototype.Sd = function() {
                return 0 < this.next && !this.locked()
            };
            c.prototype.Rd = function() {
                return this.next < this.yc.length && !this.locked()
            };
            c.prototype.xc = function() {
                this.Sd() && (this.xb = !0, this.Vq(this.yc[--this.next], !0), this.ua(!1, !0), this.xb = !1)
            };
            c.prototype.Gd = function() {
                this.Rd() && (this.xb = !0, this.Vq(this.yc[this.next++], !1), this.ua(!1, !0), this.xb = !1)
            };
            c.prototype.zl = function() {
                this.next = this.yc.length = 0
            };
            c.prototype.qm = function(a) {
                if (null === a) return this.all.length - 1;
                for (var b = 0; b < this.all.length; b++)
                    if (this.all[b].Pa === a) return b;
                return -1
            };
            c.prototype.locked = function() {
                return null !== this.Vj
            };
            c.prototype.om = function(a) {
                var b = this.qm(a);
                if (0 > b) return this.log("CID " + a + " does not exist"), !1;
                var d = this.qm(this.Vj);
                b === this.all.length - 1 && (a = null);
                this.xb = !0;
                this.Vj = a;
                if (b !== d) {
                    if (d < b)
                        for (a = d + 1; a <= b; a++) this.vf(this.all[a]);
                    else
                        for (a = d; a > b; a--) this.vf(this.all[a].inverse());
                    this.ua(!1)
                }
                this.xb = !1
            };
            c.prototype.mm = function() {
                for (var a = [], b = 0, d = this.all; b < d.length; b++) {
                    var e = d[b];
                    a.push({
                        Pa: e.Pa,
                        dc: e.dc,
                        local: e.local
                    })
                }
                return a
            };
            c.prototype.Zl = function() {
                return this.local.length ? 0 === this.Ae ? new qb(this.encode(this.local), this.ub.toString(), (this.ub + this.local.length).toString()) : new qb(this.encode(this.local), this.local[0].uc, this.local[this.local.length - 1].Pa) : new qb("", "0", "0")
            };
            c.prototype.Lh = function(a) {
                if (0 === this.Ae) {
                    a = parseInt(a, 10) - this.ub;
                    for (var b = 0; b < a; b++) this.all[this.ub + b].Pa = (this.ub + b + 1).toString(), this.ub + b + 1 < this.all.length && (this.all[this.ub + b + 1].uc = this.all[this.ub + b].Pa);
                    this.ub += a;
                    this.local.splice(0, a)
                } else
                    for (b = this.local.length - 1; 0 <= b; b--)
                        if (a === this.local[b].Pa) {
                            this.local.splice(0, b + 1);
                            break
                        }
            };
            c.prototype.Ke = function() {
                return this.all.length ? this.all[this.all.length - 1].Pa : this.ij()
            };
            c.prototype.nl = function(a, b) {
                void 0 === b && (b = !1);
                this.xb || (a.local = !0, b || (this.yc.length = this.next, this.yc.push(a), this.next += 1), this.local.push(a), this.all.push(a), this.Ls ? (this.log("Executing LOCAL %s", a.Pa), this.vf(a)) : this.log("adding LOCAL %s", a.Pa), 1 === this.Ae && (this.te[a.Pa] = a))
            };
            c.prototype.vf = function(a) {
                var b = 0;
                for (a = a.ops; b < a.length; b++) this.gd(a[b])
            };
            c.prototype.Xt = function(a) {
                for (var b = this.all.length - 1; 0 <= b && this.all[b].Pa !== a; b--);
                return b
            };
            c.prototype.Vq = function(a, b) {
                var d = this.Xt(a.Pa);
                if (-1 === d) this.log("ERROR");
                else {
                    var e = this.Ph();
                    b ? (e = a.inverse(e, this.now()), e.uc = this.all[d].Pa) : e = a.clone(e, this.now());
                    for (d = b ? d + 1 : d; d < this.all.length; d++) this.all[d].local ? e.uc = this.all[d].Pa : this.Jk(this.all[d], [e]);
                    this.local.push(e);
                    this.all.push(e);
                    this.vf(e);
                    1 === this.Ae && (this.te[e.Pa] = e)
                }
            };
            c.prototype.Jk = function(a, b) {
                if (0 !== b.length) {
                    if (a.uc !== b[0].uc) throw Error("Error: Expected same parentage.");
                    for (var d = 0, e = a.ops; d < e.length; d++)
                        for (var c = e[d], f = 0, k = b; f < k.length; f++) {
                            var l = k[f];
                            c = this.Ox(c, l.ops, a.Pa, l.Pa)
                        }
                    b[0].uc = a.Pa
                }
            };
            c.prototype.Ox = function(a, b, d, e) {
                this.log("Transform " + d + " agaisnt list " + e);
                for (var c = 0; c < b.length; c++) {
                    var f = b[c];
                    b[c] = this.Pn(a, f, d, e);
                    a = this.Pn(f, a, e, d)
                }
                return a
            };
            c.prototype.ah = function(a, b) {
                var d = this.decode(a);
                if (null === d || 0 === d.length) return null !== d;
                this.log("Entering addRemoteChanges");
                var e = null;
                b && (e = new pb(this.Ph(!0), this.Ke(), (new Date).getTime() / 1E3, b, !0));
                var c = this.qm(this.Vj),
                    f = this.all.length;
                if (0 === this.Ae) {
                    if (this.locked()) throw Error("Not implemented");
                    if (this.ub === this.all.length)
                        for (var k = 0; k < d.length; k++) {
                            var l = d[k];
                            this.all.push(l);
                            e && this.Jk(l, [e])
                        } else {
                            for (this.xb = !0; f !== this.ub;) --f, this.vf(this.all[f].inverse());
                            this.xb = !1;
                            l = this.all.slice(this.ub);
                            e && l.push(e);
                            for (this.all.length = this.ub; 0 < d.length && 0 < l.length;)
                                if (this.Es(d[0], l[0])) this.log("Removing DUPE oplist"), l.shift(), this.local.shift(), this.all.push(d.shift()), this.ub += 1;
                                else break;
                            for (var n = 0; n < d.length; n++) k = d[n], this.Jk(k, l);
                            e && l.pop();
                            this.all = this.all.concat(d, l)
                        }
                    this.ub += d.length
                } else {
                    for (f = 0; f < d.length; f++) k = d[f], k.Pa in this.te || (this.te[k.Pa] = k);
                    f = {};
                    f[this.ij()] = [];
                    for (l in this.te) f[l] = [];
                    for (l in this.te) k = this.te[l], k.uc in f && f[k.uc].push(k.Pa);
                    for (l in f) f[l].sort();
                    k = f[this.ij()];
                    d = this.ij();
                    for (e = 0; e < this.all.length && 1 === k.length && k[0] === this.all[e].Pa; e++) d = k[0], k = f[k[0]];
                    this.xb = !0;
                    for (k = c; k >= e; k--) {
                        this.log("[%s] Executing INVERSE %s", k, this.all[k].Pa);
                        try {
                            this.vf(this.all[k].inverse())
                        } catch (q) {
                            throw this.log("Error occurred HEREEEEEE %s", this.all[k].Pa), q;
                        }
                    }
                    this.xb = !1;
                    this.all.length = e;
                    e = [];
                    this.jm(f, d, e);
                    f = this.all.length;
                    for (d = 1; d < e.length; d++) this.all.push(e[d]);
                    c >= f && (c += e.length - 1)
                }
                this.xb = !0;
                for (e = f; e < c; e++) this.log("[%s] Executing REMOTE %s", e, this.all[e].Pa), this.vf(this.all[e]);
                0 < this.all.length - f ? this.ua(!0) : this.log("no remote changes to commit");
                this.xb = !1;
                this.log("Done addremotechanges");
                return !0
            };
            c.prototype.jm = function(a, b, d) {
                d.push(this.te[b]);
                for (b = a[b]; 1 === b.length;) d.push(this.te[b[0]]), b = a[b[0]];
                if (0 !== b.length) {
                    var e = d.length;
                    this.jm(a, b[0], d);
                    for (var c = 1; c < b.length; c++) {
                        var f = [];
                        this.jm(a, b[c], f);
                        for (var k = e; k < d.length; k++) this.Jk(d[k], f);
                        d.push.apply(d, f)
                    }
                }
            };
            c.prototype.ij = function() {
                return (0).toString()
            };
            c.prototype.Ph = function(a) {
                void 0 === a && (a = !1);
                if (0 === this.Ae) {
                    var b = this.Go.toString();
                    a || --this.Go;
                    return b
                }
                return this.al + Math.floor(1E6 * Math.random()).toString(36)
            };
            c.prototype.show = function() {
                this.log("%s", JSON.stringify(this.all, null, 2))
            };
            c.prototype.now = function() {
                return Math.floor((new Date).getTime() / 1E3)
            };
            c.prototype.Ww = function(a) {
                this.al = a
            };
            c.prototype.ap = function(a, b) {
                if (0 === this.Ae) {
                    var d = parseInt(a, 10),
                        e = parseInt(b, 10);
                    return 0 > d && 0 > e ? d > e : 0 < d && 0 < e ? d < e : 0 < e ? !1 : !0
                }
                return a < b
            };
            c.prototype.Es = function(a, b) {
                var d = this.encode([a]),
                    e = this.encode([b]);
                return d == e
            };
            c.prototype.ua = function() {};
            return c
        }(),
        sb = function() {
            function c(a, b, d) {
                this.type = a;
                this.Zb = b;
                this.newValue = d
            }
            c.prototype.clone = function() {
                return new c(this.type, this.Zb, this.newValue)
            };
            c.prototype.inverse = function() {
                return "a" === this.type ? new c("a", -this.Zb, this.newValue - this.Zb) : new c("m", 1 / this.Zb, this.newValue / this.Zb)
            };
            return c
        }();
    (function(c) {
        function a(a, d) {
            var b = c.call(this, !0, a) || this;
            b.prefix = d;
            b.value = 0;
            b.Ww(d);
            return b
        }
        __extends(a, c);
        a.prototype.gd = function(a) {
            "a" === a.type ? (this.log("Add to  %s  %s", this.value, a.Zb), this.value += a.Zb) : "m" === a.type && (this.log("Multiply %s by %s", this.value, a.Zb), this.value *= a.Zb);
            if (this.value !== a.newValue) throw Error("Document value should be " + a.newValue + ", but got " + this.value);
        };
        a.prototype.decode = function(a) {
            a = JSON.parse(a, function(a, b) {
                if (b instanceof Object) {
                    if (b.Zb) return new sb(b.type, b.Zb, b.newValue);
                    if (b.ops) return new pb(b.Pa, b.uc, b.dc, b.ops)
                }
                return b
            });
            if (0 === this.Ae)
                for (var b = this.ub, e = b + 1, c = 0; c < a.length; c++) {
                    var f = a[c];
                    f.uc = b.toString();
                    f.Pa = e.toString();
                    b = e;
                    e += 1
                }
            return a
        };
        a.prototype.encode = function(a) {
            return JSON.stringify(a)
        };
        a.prototype.Pn = function(a, d, e, c) {
            this.log("transform %s/,%s", e, c);
            if (this.ap(e, c)) return e = a.newValue, e = "a" === d.type ? e + d.Zb : e * d.Zb, new sb(d.type, d.Zb, e);
            e = d.newValue;
            e = "a" === a.type ? e + a.Zb : e * a.Zb;
            this.log("   Modified op2 with value " + e);
            return new sb("a", e - a.newValue, e)
        };
        a.prototype.add = function(a) {
            var b = this.Ph();
            this.nl(new pb(b, this.Ke(), Math.round((new Date).getTime() / 1E3), [new sb("a", a, this.value + a)]))
        };
        a.prototype.multiply = function(a) {
            var b = this.Ph();
            this.nl(new pb(b, this.Ke(), Math.round((new Date).getTime() / 1E3), [new sb("m", a, this.value * a)]))
        };
        return a
    })(rb);
    var wb = function() {
            function c(a, b) {
                this.ac = a;
                this.index = b
            }
            c.prototype.encode = function() {
                return this.ac + ";" + this.index
            };
            return c
        }(),
        yb = function() {
            function c(a, b, d, e) {
                this.fb = a;
                this.ba = e;
                this.type = "c";
                this.Ia = new wb(b, d)
            }
            c.prototype.encode = function() {
                var a = JSON.stringify(this.ba);
                return "C" + this.fb + ";" + this.Ia.encode() + ";" + a.length + ";" + a + ";"
            };
            c.prototype.clone = function() {
                return new c(this.fb, this.Ia.ac, this.Ia.index, this.ba)
            };
            c.prototype.inverse = function() {
                return new xb(this.fb, this.Ia.ac, this.Ia.index)
            };
            c.af = function(a, b) {
                var d = /C([^;]+);([^;]+);(-?\d+);(\d+);/g;
                d.lastIndex = b;
                var e = d.exec(a);
                if (e && e.index === b) {
                    var h = parseInt(e[4], 10),
                        f = JSON.parse(a.substr(d.lastIndex, h));
                    return {
                        jf: new c(e[1], e[2], parseInt(e[3], 10), f),
                        position: d.lastIndex + h + 1
                    }
                }
                return null
            };
            return c
        }(),
        xb = function() {
            function c(a, b, d) {
                this.fb = a;
                this.ac = b;
                this.index = d;
                this.ba = null;
                this.type = "d";
                this.Ia = new wb(b, d)
            }
            c.prototype.clone = function() {
                return new c(this.fb, this.Ia.ac, this.Ia.index)
            };
            c.prototype.inverse = function() {
                if (null === this.ba) throw Error("DeleteOp should have been executed before inverse");
                return new yb(this.fb, this.Ia.ac, this.Ia.index, this.ba)
            };
            c.prototype.encode = function() {
                return "D" + this.fb + ";" + this.Ia.encode() + ";"
            };
            c.af = function(a, b) {
                var d = /D([^;]+);([^;]+);(-?\d+);/g;
                d.lastIndex = b;
                var e = d.exec(a);
                return e && e.index === b ? {
                    jf: new c(e[1], e[2], parseInt(e[3], 10)),
                    position: d.lastIndex
                } : null
            };
            return c
        }(),
        zb = function() {
            function c(a, b, d) {
                this.fb = a;
                this.ba = b;
                this.Ef = d;
                this.type = "s"
            }
            c.prototype.clone = function() {
                return new c(this.fb, this.ba, this.Ef)
            };
            c.prototype.inverse = function() {
                if (null === this.Ef) throw Error("SetPropertiesOp was not executed before inversion");
                return new c(this.fb, this.Ef, this.ba)
            };
            c.prototype.encode = function() {
                var a = JSON.stringify(this.ba);
                return "S" + this.fb + ";" + a.length + ";" + a + ";"
            };
            c.af = function(a, b) {
                var d = /S([^;]+);(\d+);/g;
                d.lastIndex = b;
                var e = d.exec(a);
                if (e && e.index === b) {
                    var h = parseInt(e[2], 10),
                        f = JSON.parse(a.substr(d.lastIndex, h));
                    return {
                        jf: new c(e[1], f, null),
                        position: d.lastIndex + h + 1
                    }
                }
                return null
            };
            return c
        }(),
        Ab = function() {
            function c(a, b, d, e, c) {
                this.fb = a;
                this.type = "m";
                this.src = new wb(b, d);
                this.Ia = new wb(e, c)
            }
            c.prototype.clone = function() {
                return new c(this.fb, this.src.ac, this.src.index, this.Ia.ac, this.Ia.index)
            };
            c.prototype.inverse = function() {
                return new c(this.fb, this.Ia.ac, this.Ia.index, this.src.ac, this.src.index)
            };
            c.prototype.encode = function() {
                return "M" + this.fb + ";" + this.src.encode() + ";" + this.Ia.encode() + ";"
            };
            c.af = function(a, b) {
                var d = /M([^;]+);([^;]+);(-?\d+);([^;]+);(\d+);/g;
                d.lastIndex = b;
                var e = d.exec(a);
                return e && e.index === b ? {
                    jf: new c(e[1], e[2], parseInt(e[3], 10), e[4], parseInt(e[5], 10)),
                    position: d.lastIndex
                } : null
            };
            return c
        }(),
        Bb = function(c) {
            function a(a, d, e) {
                void 0 === e && (e = !1);
                var b = c.call(this, !1, 1) || this;
                b.tb = a;
                b.Nj = e;
                b.Zf = [];
                b.Vm = !1;
                b.Xw(d);
                return b
            }
            __extends(a, c);
            a.prototype.Xw = function(a) {
                this.al = a
            };
            a.prototype.createNode = function(a, d, e, c) {
                this.xb || (d = new yb(a, d, e, c), this.Zf.push(d), this.Nj && !this.locked() && this.gd(d));
                return a
            };
            a.prototype.Wd = function(a, d, e) {
                this.xb || (d = new xb(a, d, e), d.ba = this.tb.Ic(a), this.Zf.push(d), this.Nj && !this.locked() && this.gd(d))
            };
            a.prototype.Lc = function(a, d, e, c, f) {
                this.xb || (a = new Ab(a, c, f, d, e), this.Zf.push(a), this.Nj && !this.locked() && this.gd(a))
            };
            a.prototype.Ue = function(a, d, e) {
                this.xb || (a = new zb(a, d, e), this.Zf.push(a), this.Nj && !this.locked() && this.gd(a))
            };
            a.prototype.Ic = function(a) {
                return this.tb.Ic(a)
            };
            a.prototype.ua = function(a, d) {
                if (!this.Vm) {
                    if (!this.xb && this.Zf.length) {
                        for (var b = new pb(this.Ph(), this.Ke(), this.now()), c = 0, f = this.Zf; c < f.length; c++) b.ops.push(f[c]);
                        this.nl(b, d)
                    } else this.xb && (this.Vm = !0, this.tb.ua(a, d), this.Vm = !1);
                    this.Zf.length = 0
                }
            };
            a.prototype.gd = function(a) {
                this.log("Execute " + a.type);
                switch (a.type) {
                    case "c":
                        this.tb.createNode(a.fb, a.Ia.ac, a.Ia.index, a.ba);
                        break;
                    case "d":
                        -1 === a.Ia.index ? this.log("op was nullified.") : (a.ba = this.tb.Ic(a.fb), this.tb.Wd(a.fb, a.Ia.ac, a.Ia.index));
                        break;
                    case "s":
                        if (null === a.Ef) {
                            a.Ef = {};
                            var b = this.tb.Ic(a.fb),
                                e;
                            for (e in a.ba) a.Ef[e] = b[e]
                        }
                        this.tb.Ue(a.fb, a.ba, a.Ef);
                        break;
                    case "m":
                        -1 !== a.src.index && this.tb.Lc(a.fb, a.Ia.ac, a.Ia.index, a.src.ac, a.src.index)
                }
            };
            a.prototype.decode = function(a) {
                for (var b = [], e = 0, c = /B([^;]+);([^;]+);([^;]+);\d+;/g; e < a.length;) {
                    var f;
                    switch (a[e]) {
                        case "B":
                            c.lastIndex = e;
                            if ((f = c.exec(a)) && f.index === e) {
                                e = parseInt(f[1], 36);
                                var k = f[2];
                                f = f[3];
                                if (isNaN(e)) return this.log("Error: TS is not a number."), null;
                                f = new pb(f, k, e);
                                b.push(f);
                                e = c.lastIndex
                            } else return null;
                            continue;
                        case "C":
                            f = yb.af(a, e);
                            break;
                        case "D":
                            f = xb.af(a, e);
                            break;
                        case "S":
                            f = zb.af(a, e);
                            break;
                        case "M":
                            f = Ab.af(a, e);
                            break;
                        default:
                            return null
                    }
                    if (0 === b.length) return this.log("Got change outside of batch"),
                        null;
                    if (null === f) throw Error("change is null while decoding: " + a.substr(e, 500));
                    e = f.position;
                    b[b.length - 1].ops.push(f.jf)
                }
                return b
            };
            a.prototype.encode = function(a) {
                for (var b = "", e = 0; e < a.length; e++) {
                    var c = a[e];
                    b += "B" + c.dc.toString(36) + ";" + c.uc + ";" + c.Pa + ";" + c.ops.length + ";";
                    var f = 0;
                    for (c = c.ops; f < c.length; f++) b += c[f].encode()
                }
                return b
            };
            a.prototype.Pn = function(a, d, e, c) {
                function b(b, d, e) {
                    b = "c" === a.type ? 1 : -1;
                    switch (e.type) {
                        case "c":
                            if (0 > e.Ia.index) break;
                            e = e.clone();
                            h(d, e.Ia, b, "c");
                            l.log("Result is " + c + ":" + e.type + "." + e.Ia.index);
                            break;
                        case "d":
                            if (0 > e.Ia.index) break;
                            e = e.clone();
                            h(d, e.Ia, b, "d");
                            l.log("Result is " + c + ":" + e.type + "." + e.Ia.index);
                            break;
                        case "m":
                            0 > e.Ia.index || 0 > e.src.index || (e = e.clone(), h(d, e.src, b, "d"), h(d, e.Ia, b, "c"))
                    }
                    return e
                }

                function h(b, h, f, k) {
                    b.ac === h.ac && 0 <= h.index && (b.index < h.index || b.index == h.index && 0 < f ? (h.index += f, l.log("Shift " + c + ":" + d.type + " by " + f)) : b.index === h.index && 0 > f && "d" === k ? (h.index = -1, l.log("NULLIFY")) : l.log("No conflict; " + e + ":" + a.type + " " + b.index + " " + c + ":" + d.type + " " + h.index))
                }
                var l = this;
                this.log("xform " + e + ":" + a.type + "/" + c + ":" + d.type);
                if (this.ap(c, e)) return this.log("Not doing anything; " + c + "<" + e), d;
                "c" === a.type && 0 <= a.Ia.index ? d = b(a.type, a.Ia, d) : "d" === a.type && 0 <= a.Ia.index ? d = b(a.type, a.Ia, d) : "m" === a.type && 0 <= a.Ia.index && 0 <= a.src.index && (d = b("d", a.src, d), d = b("c", a.Ia, d));
                return d
            };
            return a
        }(rb);
    (function() {
        function c() {
            this.Fa = {};
            this.log = x.create("DebugTree");
            this.root = {
                fb: "0",
                parent: null,
                children: [],
                ba: {
                    name: "root"
                }
            };
            this.Fa["0"] = this.root
        }
        c.prototype.createNode = function(a, b, d, e) {
            this.log("create node " + a + " child of " + b);
            b = this.Fa[b];
            e = {
                fb: a,
                parent: b,
                children: [],
                ba: e
            };
            b.children.splice(d, 0, e);
            this.Fa[a] = e
        };
        c.prototype.Wd = function(a) {
            this.log("delete node " + a);
            if (a in this.Fa) {
                var b = this.Fa[a].parent;
                if (b)
                    for (var d = 0; d < b.children.length; d++)
                        if (b.children[d].fb === a) {
                            b.children.splice(d, 1);
                            break
                        }
                delete this.Fa[a]
            }
        };
        c.prototype.Lc = function(a, b, d) {
            this.log("move " + a + " to " + b + ":" + d);
            if (a in this.Fa) {
                var e = this.Fa[a];
                this.Wd(a);
                this.createNode(a, b, d, e.ba)
            }
        };
        c.prototype.Ue = function(a, b) {
            if (a in this.Fa)
                for (var d in b) b.hasOwnProperty(d) && (this.Fa[a].ba[d] = b[d])
        };
        c.prototype.Ic = function(a) {
            return a in this.Fa ? this.Fa[a].ba : {}
        };
        c.prototype.ua = function() {};
        c.prototype.toString = function() {
            return this.encode(this.root)
        };
        c.prototype.encode = function(a) {
            for (var b = "(" + a.ba.name, d = 0; d < a.children.length; d++) b += " " + this.encode(a.children[d]);
            return b + ")"
        };
        return c
    })();
    var Cb = x.create("DOCTREE"),
        Db = function() {
            function c(a, b) {
                this.fe = a;
                this.Fa = {};
                this.Fa["0"] = b
            }
            c.prototype.ys = function(a, b) {
                if (a in this.Fa) throw Error("Node " + a + " already exists");
                this.Fa[a] = b
            };
            c.prototype.createNode = function(a, b, d, e) {
                Cb("createNode(" + a + ", " + b + ", " + d + ")");
                if (a in this.Fa) throw Error("createNode " + a + " already exists");
                b = this.Ja(b);
                if (b.Ma() + 1 < d) throw Error("Asked to insert at index " + d + " but parent only has " + b.Ma() + " children");
                e = this.fe.Ev(a, e);
                b.Pj(e, d);
                e.parent = b;
                this.Fa[a] = e;
                this.fe.Bq && this.fe.Bq(e)
            };
            c.prototype.Ja = function(a) {
                if (a in this.Fa) return this.Fa[a];
                throw Error("nid " + a + " does not exist");
            };
            c.prototype.yd = function(a) {
                return a in this.Fa
            };
            c.prototype.Wd = function(a, b, d) {
                Cb("deleteNode(" + a + ", " + b + ", " + d + ")");
                var e = this.Ja(a),
                    c = this.Ja(b);
                if (e.parent !== c) throw Error("Asked to remove " + a + " from parent " + b + " but it has a different parent");
                if (c.rb(d) !== e) throw Error("Asked to remove " + a + ":" + d + " but it is in a different index");
                if (0 !== e.Ma()) throw Error("Asked to delete " + a + " but it still has children.");
                for (a = e.Ma() - 1; 0 <= a; a--) b = e.rb(a), this.Wd(b.id, e.id, a);
                c.removeChild(d);
                delete this.Fa[e.id];
                this.fe.Cq && this.fe.Cq(e)
            };
            c.prototype.Lc = function(a, b, d, e, c) {
                Cb("moveNode(" + a + ", dest=" + b + ":" + d + ", src=" + e + ":" + c + ")");
                var h = this.Ja(a),
                    k = this.Ja(b),
                    l = this.Ja(e);
                if (h.parent !== l) throw Error("node " + a + " does not have parent " + e);
                if (l.Ma() < c) throw Error("parent of " + a + " does not have a node at index " + c);
                if (l.rb(c) !== h) throw Error("node " + a + " not the " + c + "th child");
                if (h.parent === k) {
                    if (k.Ma() <= d) throw Error("asked to shift node at " + b + ":" + d + " but it only has " + k.Ma() + " children");
                    h.parent.Dn(d, c)
                } else {
                    if (k.Ma() < d) throw Error("asked to put a node at " + b + ":" + d + " but it only has " + k.Ma() + " children");
                    l.removeChild(c);
                    k.Pj(h, d);
                    h.parent = k
                }
            };
            c.prototype.Ue = function(a, b) {
                var d = this.Ja(a),
                    e;
                for (e in b) d.setProperty(e, b[e]);
                this.fe.Hq && this.fe.Hq(d, b)
            };
            c.prototype.Ic = function(a) {
                return this.Ja(a).Ic()
            };
            c.prototype.ua = function(a) {
                this.fe.fk && this.fe.fk(a)
            };
            c.prototype.rc = function(a) {
                for (var b in this.Fa) a(this.Fa[b])
            };
            return c
        }();

    function Eb() {}
    var Fb = setTimeout,
        Gb = [],
        Hb = !1;

    function Ib() {
        for (var c = 0; c < Gb.length; c++) Gb[c][0](Gb[c][1]);
        Gb = [];
        Hb = !1
    }

    function Jb(c, a) {
        Gb.push([c, a]);
        Hb || (Hb = !0, Fb(Ib, 0))
    }

    function Kb(c, a) {
        function b(b) {
            Lb(a, b)
        }

        function d(b) {
            Mb(a, b)
        }
        try {
            c(b, d)
        } catch (e) {
            d(e)
        }
    }

    function Nb(c) {
        var a = c.kw,
            b = a.mc;
        a = a.Il;
        var d = c.Cn[b];
        c = c.then;
        if ("function" === typeof d) {
            b = "fulfilled";
            try {
                a = d(a)
            } catch (e) {
                Mb(c, e)
            }
        }
        Ob(c, a) || ("fulfilled" === b && Lb(c, a), "rejected" === b && Mb(c, a))
    }

    function Ob(c, a) {
        var b = !1;
        try {
            if (c === a) throw new TypeError("A promises callback cannot return that same promise.");
            if (a && ("function" === typeof a || "object" === typeof a)) {
                var d = a.then;
                if ("function" === typeof d) return d.call(a, function(d) {
                    b || (b = !0, a !== d ? Lb(c, d) : Pb(c, d))
                }, function(a) {
                    b || (b = !0, Mb(c, a))
                }), !0
            }
        } catch (e) {
            return b || Mb(c, e), !0
        }
        return !1
    }

    function Lb(c, a) {
        c !== a && Ob(c, a) || Pb(c, a)
    }

    function Pb(c, a) {
        "pending" === c.mc && (c.mc = "sealed", c.Il = a, Jb(Qb, c))
    }

    function Mb(c, a) {
        "pending" === c.mc && (c.mc = "sealed", c.Il = a, Jb(Rb, c))
    }

    function Sb(c) {
        var a = c.Hn;
        c.Hn = [];
        for (c = 0; c < a.length; c++) Nb(a[c])
    }

    function Qb(c) {
        c.mc = "fulfilled";
        Sb(c)
    }

    function Rb(c) {
        c.mc = "rejected";
        Sb(c)
    }
    var Tb = function() {
        function c(a) {
            this.mc = "pending";
            this.Il = void 0;
            this.Hn = [];
            Kb(a, this)
        }
        c.prototype.then = function(a, b) {
            var d = {
                kw: this,
                then: new c(Eb),
                Cn: {}
            };
            d.Cn.fulfilled = a;
            d.Cn.rejected = b;
            "fulfilled" === this.mc || "rejected" === this.mc ? Jb(Nb, d) : this.Hn.push(d);
            return d.then
        };
        c.prototype["catch"] = function(a) {
            return this.then(null, a)
        };
        c.resolve = function(a) {
            return a && "object" === typeof a && a.constructor === this ? a : new this(function(b) {
                b(a)
            })
        };
        c.reject = function(a) {
            return new this(function(b, d) {
                d(a)
            })
        };
        return c
    }();
    Tb.prototype.then = Tb.prototype.then;
    x.create("HTML");

    function Ub(c) {
        return parseFloat(c || "") || 0
    }
    var Wb = function() {
        function c(a) {
            this.fa = a
        }
        c.prototype.Wa = function(a) {
            for (var b in a) {
                if (0 <= b.indexOf("-")) throw Error("setStyle: styles must be camelcase; not " + b);
                this.fa.style[b] = "" + a[b]
            }
            return this
        };
        c.prototype.fi = function(a) {
            for (var b in a) this.fa.setAttribute(b, a[b]);
            return this
        };
        c.prototype.Tc = function(a) {
            a.appendChild(this.fa);
            return this
        };
        c.prototype.sm = function(a) {
            a.parentNode && a.parentNode.insertBefore(this.fa, a.nextSibling)
        };
        c.prototype.insertBefore = function(a) {
            a.parentNode && a.parentNode.insertBefore(this.fa, a);
            return this
        };
        c.prototype.remove = function() {
            this.fa.parentNode && this.fa.parentNode.removeChild(this.fa);
            return this
        };
        c.prototype.be = function(a) {
            return window.getComputedStyle(this.fa)[a] || ""
        };
        c.prototype.Vb = function() {
            var a = this.fa.getBoundingClientRect();
            return {
                top: a.top + window.pageYOffset,
                left: a.left + window.pageXOffset,
                width: a.width,
                height: a.height
            }
        };
        c.prototype.Ak = function(a) {
            var b = (b = this.Wu()) ? b.Vb() : {
                left: 0,
                top: 0
            };
            this.fa.style.left = a.left - b.left + "px";
            this.fa.style.top = a.top - b.top + "px"
        };
        c.prototype.Wu = function() {
            if (!(this.fa instanceof HTMLElement) || "fixed" === this.be("position")) return Vb(document.body);
            for (var a = this.fa.parentElement; a && "static" === Vb(a).be("position");) a = a.parentElement;
            return a ? Vb(a) : null
        };
        c.prototype.gm = function() {
            var a = window.getComputedStyle(this.fa),
                b = {
                    left: Ub(a.marginLeft),
                    top: Ub(a.marginTop),
                    right: Ub(a.marginRight),
                    bottom: Ub(a.marginBottom),
                    zm: 0,
                    en: 0,
                    Nn: 0,
                    ul: 0
                };
            "content-box" === a.boxSizing && (b.zm += Ub(a.borderLeftWidth) + Ub(a.paddingLeft), b.Nn += Ub(a.borderTopWidth) + Ub(a.paddingTop), b.en += Ub(a.borderRightWidth) + Ub(a.paddingRight), b.ul += Ub(a.borderBottomWidth) + Ub(a.paddingBottom));
            return b
        };
        c.prototype.pd = function(a) {
            this.fa.classList.add(a);
            return this
        };
        c.prototype.Ln = function(a, b) {
            b ? this.fa.classList.add(a) : this.fa.classList.remove(a)
        };
        c.prototype.addEventListener = function(a, b, d) {
            void 0 === d && (d = !1);
            var e = 0;
            for (a = a.split(" "); e < a.length; e++) this.fa.addEventListener(a[e], b, d);
            return this
        };
        c.prototype.removeEventListener = function(a, b, d) {
            void 0 === d && (d = !1);
            var e = 0;
            for (a = a.split(" "); e < a.length; e++) this.fa.removeEventListener(a[e], b, d);
            return this
        };
        c.prototype.matches = function(a) {
            if (this.fa.matches) return this.fa.matches(a);
            var b = 0;
            for (a = a.split(","); b < a.length; b++) {
                var d = a[b];
                d = d.trim();
                if (0 != d.length) return "[" == d[0] ? this.fa.hasAttribute(d.substr(1, d.length - 2)) : this.fa.tagName === d.toUpperCase()
            }
            return !1
        };
        c.prototype.query = function(a, b) {
            this.matches(a) && b(this.fa);
            Array.prototype.forEach.call(this.fa.querySelectorAll(a), b)
        };
        c.prototype.clear = function() {
            for (; null !== this.fa.firstChild;) this.fa.removeChild(this.fa.firstChild);
            return this
        };
        c.prototype.Mg = function(a) {
            this.fa.innerText = a;
            return this
        };
        return c
    }();

    function Vb(c, a) {
        if ("string" === typeof c) {
            if ("<" == c[0]) {
                var b = Vb.sp(c);
                return new Wb(b[0])
            }
            b = new Wb(document.createElement(c));
            a && b.fi(a);
            return b
        }
        return new Wb(c)
    }
    var Xb = null;
    (function(c) {
        c.Ub = function(a) {
            return "jQuery" in window && a instanceof window.jQuery ? a[0] : a instanceof HTMLElement ? a : "string" === typeof a ? document.querySelector(a) : null
        };
        c.Dj = function() {
            var a = document.documentElement,
                b = a.scrollWidth > a.clientWidth;
            a = a.scrollHeight > a.clientHeight ? c.pg() : 0;
            b = b ? c.pg() : 0;
            return {
                width: window.innerWidth - a,
                height: window.innerHeight - b,
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }
        };
        c.pg = function() {
            if (null === Xb) {
                var a = document.createElement("div");
                a.style.visibility = "hidden";
                a.style.width = "100px";
                document.body.appendChild(a);
                var b = a.offsetWidth;
                a.style.overflow = "scroll";
                var d = document.createElement("div");
                d.style.width = "100%";
                a.appendChild(d);
                d = d.offsetWidth;
                a.parentNode.removeChild(a);
                Xb = b - d
            }
            return Xb
        };
        c.Op = function() {
            for (var a = document.getElementsByTagName("*"), b = 0, d = 0; d < a.length; d++) {
                var e = parseInt(c(a[d]).be("z-index"), 10) || 0;
                e > b && (b = e)
            }
            return b
        };
        c.sp = function(a) {
            var b = document.createElement("div");
            b.innerHTML = a;
            a = [];
            for (b = b.firstChild; b;) b instanceof HTMLElement && a.push(b), b = b.nextSibling;
            return a
        }
    })(Vb || (Vb = {}));

    function Yb(c) {
        return new Tb(function(a, b) {
            var d = new XMLHttpRequest;
            c.mimeType && d.overrideMimeType(c.mimeType);
            c.withCredentials && (d.withCredentials = !0);
            var e = c.method || "GET",
                h = c.Kq || {},
                f = c.url,
                k = "",
                l = !0,
                n;
            for (n in h) l || (k += "&"), l = !1, k += n + "=" + encodeURIComponent(h[n]);
            "GET" === e && 0 < k.length && (f += "?" + k, k = "");
            d.onreadystatechange = function() {
                if (4 === d.readyState)
                    if (200 === d.status) a(d);
                    else {
                        var e = d.statusText;
                        0 === d.status ? e = "Could not contact server." : d.getResponseHeader("status") && (e = d.getResponseHeader("status"));
                        b(Error(d.status + " " + e))
                    }
            };
            d.open(e, f, !0);
            "string" === typeof c.data && (k = c.data);
            c.contentType ? d.setRequestHeader("Content-type", "application/json") : "POST" === e && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            c.cancel && c.cancel.then(function() {
                d.abort()
            });
            c.lp ? setTimeout(function() {
                d.send(k)
            }, c.lp) : d.send(k)
        })
    }(function() {
        function c() {
            this.xr = null
        }
        c.prototype.Xa = function() {
            this.xr && Vb(this.xr).remove()
        };
        return c
    })();
    var Zb = [],
        $b = null;

    function ac(c) {
        for (var a = 0; a < Zb.length; a++)
            if (Zb[a] === c) return;
        Zb.push(c);
        $b || ($b = document.createElement("style"), document.head && document.head.insertBefore($b, document.head.firstChild));
        $b.appendChild(document.createTextNode(c))
    }
    var bc = function() {
            function c() {
                this.input = null
            }
            c.prototype.Xa = function() {
                this.input && this.input.parentNode && this.input.parentNode.removeChild(this.input)
            };
            c.prototype.open = function(a) {
                var b = this;
                return new Promise(function(d) {
                    b.input && b.input.parentNode && b.input.parentNode.removeChild(b.input);
                    b.input = document.createElement("input");
                    b.input.style.display = "none";
                    b.input.setAttribute("id", "ZwibblerFileInput");
                    b.input.setAttribute("type", "file");
                    document.body.appendChild(b.input);
                    a.accept && b.input.setAttribute("accept", a.accept);
                    var e = new FileReader,
                        c = "";
                    b.input.addEventListener("change", function() {
                        var b = this.files;
                        b && 0 < b.length && (c = b[0].type, "data-uri" === a.format ? e.readAsDataURL(b[0]) : "text" === a.format && e.readAsText(b[0]))
                    });
                    e.addEventListener("load", function() {
                        d({
                            contentType: c,
                            data: e.result
                        })
                    });
                    b.input.value = "";
                    b.input.click()
                })
            };
            return c
        }(),
        cc = function() {
            function c() {
                this.ak = "";
                this.anchor = null
            }
            c.prototype.Xa = function() {
                this.anchor && this.anchor.parentNode && this.anchor.parentNode.removeChild(this.anchor);
                "" !== this.ak && window.URL.revokeObjectURL(this.ak)
            };
            c.prototype.Ow = function(a, b) {
                for (var d = atob(a.split(",")[1]), e = a.split(",")[0].split(":")[1].split(";")[0], c = new ArrayBuffer(d.length), f = new Uint8Array(c), k = 0; k < d.length; k++) f[k] = d.charCodeAt(k);
                this.Nw(new Blob([c], {
                    type: e
                }), b)
            };
            c.prototype.Nw = function(a, b) {
                var d = this;
                this.Xa();
                window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveOrOpenBlob(a, b) : (this.ak = window.URL.createObjectURL(a), this.anchor = document.createElement("a"), this.anchor.innerHTML = "download", this.anchor.setAttribute("href", this.ak), this.anchor.setAttribute("download", b), this.anchor.style.display = "none", document.body.appendChild(this.anchor), this.anchor.click(), setTimeout(function() {
                    d.anchor && document.body.removeChild(d.anchor)
                }, 1E3))
            };
            return c
        }(),
        B = Vb;
    var dc = function() {
        function c(a, b, d, e, c) {
            void 0 === a && (a = "transparent");
            void 0 === b && (b = 0);
            void 0 === d && (d = 0);
            void 0 === e && (e = 0);
            void 0 === c && (c = 0);
            this.lf = a;
            this.left = b;
            this.top = d;
            this.right = e;
            this.bottom = c;
            this.zIndex = 1;
            this.insertBefore = null;
            this.ma = document.createElement("div")
        }
        c.prototype.Me = function() {
            this.ma && B(this.ma).remove()
        };
        c.prototype.show = function(a) {
            B(this.ma).Wa({
                position: "fixed",
                background: this.lf,
                opacity: .25,
                left: this.left + "px",
                top: this.top + "px",
                right: this.right + "px",
                bottom: this.bottom + "px",
                display: "block"
            });
            this.ma.addEventListener("click", a);
            this.ma.style.zIndex = this.zIndex.toString();
            this.insertBefore ? this.insertBefore.parentNode && this.insertBefore.parentNode.insertBefore(this.ma, this.insertBefore) : document.body.appendChild(this.ma)
        };
        return c
    }();

    function ec(c, a) {
        function b() {
            var a = h.offsetWidth,
                b = h.offsetHeight,
                d = B.Dj();
            B(h).Ak({
                left: d.x + d.width / 2 - a / 2,
                top: d.y + d.height / 2 - b / 2
            })
        }

        function d(a) {
            var b = (new Date).getTime();
            q && v && 200 > b - v && (a.preventDefault(), setTimeout(function() {
                u.hide()
            }, 0))
        }

        function e() {
            v = (new Date).getTime()
        }
        void 0 === a && (a = {});
        var h = B.Ub(c);
        if (!h) throw Error("Zwibbler.Dialog: Bad element passed in: " + c);
        var f = null === h.parentNode;
        f && document.body.appendChild(h);
        "static" === B(h).be("position") && (h.style.position = "absolute");
        h.style.display = "none";
        var k = new dc("transparent");
        k.insertBefore = h;
        var l = a.showNear,
            n = a.showHow,
            q = !1,
            u = {
                hide: function() {
                    k.Me();
                    h.style.display = "none";
                    if (u.onhide) u.onhide();
                    window.removeEventListener("resize", b)
                },
                isShown: function() {
                    return "none" !== B(h).be("display")
                },
                show: function(a, d, e, c) {
                    void 0 === e && (e = !1);
                    void 0 === c && (c = !0);
                    var f = 0,
                        w = 0,
                        y = "",
                        C = "";
                    v = 0;
                    if ("number" === typeof a && "number" === typeof d) {
                        f = a;
                        w = d;
                        var z = !0
                    } else y = a || l, C = d || n, z = !1;
                    a = B.Op() + 1;
                    h.style.zIndex = a.toString();
                    k.zIndex = a;
                    h.style.display = "block";
                    a = h.offsetWidth;
                    d = h.offsetHeight;
                    if (z) C = B.Dj(), f = {
                        left: f,
                        top: w
                    }, f.left = Math.min(f.left, C.x + C.width - a - 2), f.top = Math.min(f.top, C.y + C.height - d - 3), B(h).Ak(f);
                    else if (y && C) {
                        if (w = B.Ub(y)) f = h, y = C, C = B(w).Vb(), y = y.toLowerCase().split(" "), 2 !== y.length && (y = ["tl", "tl"]), 0 <= y[0].indexOf("b") && (C.top += w.offsetHeight), 0 <= y[0].indexOf("r") && (C.left += w.offsetWidth), 0 <= y[1].indexOf("b") && (C.top -= f.offsetHeight), 0 <= y[1].indexOf("r") && (C.left -= f.offsetWidth), f.style.position = "absolute", w = B.Dj(), y = f.clientHeight, C.left = Math.min(C.left, w.x + w.width - f.clientWidth), C.top = Math.min(C.top, w.y + w.height - y), B(f).Ak(C)
                    } else window.addEventListener("resize", b), b();
                    c && k.show(u.hide);
                    if (u.onshow) u.onshow();
                    q = e
                },
                destroy: function() {
                    window.removeEventListener("resize", b);
                    h.removeEventListener("click", d);
                    h.removeEventListener("pointerup", d);
                    h.removeEventListener("touchend", d);
                    h.removeEventListener("touchstart", e);
                    h.removeEventListener("pointerdown", e);
                    f && B(h).remove()
                },
                onshow: a.onshow,
                onhide: a.onhide
            },
            v = 0;
        h.addEventListener("click", d);
        "ontouchstart" in window ? (h.addEventListener("touchend", d), h.addEventListener("touchstart", e)) : (h.addEventListener("pointerup", d), h.addEventListener("pointerdown", e));
        return u
    };
    var fc = x.create("Zeact"),
        gc = function() {
            function c(a, b, d, e, c) {
                this.Qk = a;
                this.scope = b;
                this.element = d;
                this.name = e;
                this.value = c
            }
            c.prototype.emit = function(a, b) {
                this.Qk.na(this.element, a, b)
            };
            c.prototype.listen = function(a, b) {
                this.Qk.$a(this.element, a, b)
            };
            c.prototype.watch = function(a, b) {
                this.Qk.watch(this.scope, this.element, a, b)
            };
            c.prototype.destructor = function(a) {
                this.Qk.wa(this.element, a)
            };
            return c
        }(),
        hc = function() {
            function c() {
                this.ao = new Oa;
                this.bj = {};
                this.Be = {};
                this.Wr = 1
            }
            c.prototype.vb = function(a, b, d) {
                void 0 === d && (d = 2);
                this.bj[a] = {
                    name: a,
                    link: b,
                    wr: d
                }
            };
            c.prototype.Qi = function(a, b) {
                this.Be[a.toUpperCase()] = b;
                "string" === typeof b.template && (b.template = b.template.trim())
            };
            c.prototype.Md = function(a, b) {
                var d = this;
                this.vb(a, function(a, c, f, k) {
                    d.sx(a, function() {
                        d.watch(a, c, k, function(d) {
                            b(c, d, a)
                        })
                    })
                })
            };
            c.prototype.watch = function(a, b, d, e) {
                var c = this;
                this.ao.watch(a, d, e);
                this.wa(b, function() {
                    c.ao.unwatch(d, e)
                })
            };
            c.prototype.sx = function(a, b) {
                a.io ? (b(), this.digest()) : a.Ug ? a.Ug.push(b) : a.Ug = [b]
            };
            c.prototype.Gv = function(a) {
                if (!a.io && (a.io = !0, a.Ug)) {
                    for (var b = 0, d = a.Ug; b < d.length; b++)(0, d[b])();
                    delete a.Ug;
                    this.digest()
                }
            };
            c.prototype.$a = function(a, b, d) {
                a.addEventListener(b, d);
                this.wa(a, function() {
                    a.removeEventListener(b, d)
                });
                a.zwibblerListeners || (a.zwibblerListeners = {});
                a.zwibblerListeners[b] || (a.zwibblerListeners[b] = []);
                a.zwibblerListeners[b].push(d)
            };
            c.prototype.na = function(a, b, d) {
                var e = this;
                setTimeout(function() {
                    e.fd(a, b, d)
                }, 0)
            };
            c.prototype.fd = function(a, b, d) {
                if (a.zwibblerListeners && b in a.zwibblerListeners)
                    for (var e = 0, c = a.zwibblerListeners[b]; e < c.length; e++) {
                        var f = c[e];
                        try {
                            f.call(a, d)
                        } catch (k) {
                            console.log("Error while handling event " + b + ": ", k)
                        }
                    }
            };
            c.prototype.wa = function(a, b) {
                a.Tk ? a.Tk.push(b) : a.Tk = [b]
            };
            c.prototype.detach = function(a) {
                for (var b = a.firstChild; b;) this.detach(b), b = b.nextSibling;
                if (a.Tk) {
                    b = 0;
                    for (var d = a.Tk; b < d.length; b++)(0, d[b])();
                    delete a.zwibblerWatchers
                }
                a.zwibblerListeners && delete a.zwibblerListeners;
                a.cs && delete a.cs;
                a.Zg && delete a.Zg
            };
            c.prototype.digest = function(a) {
                this.ao.check(a)
            };
            c.prototype.Ut = function(a, b) {
                var d = /^z-([a-z0-9@\-]+)/.exec(a.toLowerCase());
                if (d && (d = d[1], d in this.bj && this.bj[d].wr === b)) return this.bj[d]
            };
            c.prototype.tl = function(a, b, d, e) {
                void 0 === e && (e = b);
                for (var c = b.parentNode, f = [], k = 0; k < e.attributes.length; k++) f.push({
                    name: e.attributes[k].name,
                    value: e.attributes[k].value
                });
                for (k = 0; k < f.length && b.parentNode; k++) {
                    e = f[k].name;
                    var l = f[k].value,
                        n = this.Ut(e, d);
                    if (n && n.wr === d && (fc("Link directive to %s for %s=%s", b.Zg, e, l), (e = n.link(a, b, e, l)) && e !== b)) return {
                        fa: e,
                        sk: !0
                    }
                }
                return {
                    fa: b,
                    sk: b.parentNode !== c
                }
            };
            c.prototype.Ui = function(a, b, d, e) {
                b = document.createElement(b);
                for (var c in d) b.setAttribute(c, d[c]);
                e && (b.Uk = e);
                a = this.oc(a, b);
                delete b.Uk;
                return a
            };
            c.prototype.Ds = function(a, b) {
                var d = this,
                    e = this.Be[b.tagName];
                if (!e) return null;
                fc("Attaching component %s", b.tagName);
                var c = e.template;
                if (c instanceof HTMLElement) var f = c.cloneNode(!0);
                else if ("string" === typeof c)
                    if ("<" === c[0]) {
                        fc("Using elementsFromString to instantiate component");
                        var k = B.sp(c);
                        if (0 === k.length) throw Error("Component " + b.tagName + ": Could not interpret as HTML: " + c);
                        if (1 < k.length) throw Error("Component " + b.tagName + ": Should render as a single element, but got " + k.length);
                        f = k[0]
                    } else {
                        fc("Using querySelector to instantiate component");
                        f = document.querySelector(c);
                        if (null === f) throw Error("Component " + b.tagName + ': querySelector("' + c + '") returned null');
                        f = f.cloneNode(!0)
                    }
                else throw Error("Component " + b.tagName + ": Could not interpret template " + c);
                c = null !== b.parentNode;
                null !== b.parentNode && b.parentNode.replaceChild(f, b);
                var l = this,
                    n = {
                        $emit: function(a, b) {
                            l.na(f, a, b)
                        },
                        $emitNow: function(a, b) {
                            l.fd(f, a, b)
                        },
                        $element: f,
                        $parent: a
                    };
                if (b.Uk) {
                    k = b.Uk;
                    for (var q in n) k[q] = n[q];
                    n = k
                }
                q = e.properties;
                var u = {};
                q && q.forEach(function(e) {
                    u[e] = 1;
                    var c = b.getAttribute(e);
                    c && (fc("Bind prop %s to %s", e, c), d.watch(a, f, c, function(a) {
                        n[e] = a
                    }))
                });
                f.Vr = 1;
                for (q = b.firstChild; q;) k = q.nextSibling, f.appendChild(q), q = k;
                e.style && ac(e.style);
                for (q = 0; q < b.attributes.length; q++) {
                    k = b.attributes[q].name;
                    var v = b.attributes[q].value;
                    u[k] || 0 === k.indexOf("z-") || f.setAttribute(k, v)
                }
                for (q = 1; 2 >= q; q++)
                    if (k = this.tl(a, f, q, b), c && k.sk) return {
                        scope: n,
                        node: k.fa
                    };
                for (q = 1; 2 >= q; q++)
                    if (k = this.tl(n, f, q, f), c && k.sk) return {
                        scope: n,
                        node: k.fa
                    };
                if (e.controller) try {
                    e.controller(n, new gc(this, n, f, "", "")), this.digest()
                } catch (w) {
                    console.log(w), console.log("When running controller for %s", b.tagName)
                }
                this.oc(n, f);
                return {
                    scope: n,
                    node: f
                }
            };
            c.prototype.oc = function(a, b) {
                var d = this,
                    e = this.wo(a, b);
                this.digest(function() {
                    d.Gv(a)
                });
                return e
            };
            c.prototype.wo = function(a, b) {
                if (1 === b.nodeType) {
                    if (b.Zg) return {
                        node: b,
                        scope: a
                    };
                    b.Zg = this.Wr++;
                    for (var d = 0; 2 >= d; d++) {
                        var e = this.tl(a, b, d);
                        if (e.sk) return {
                            node: e.fa,
                            scope: a
                        };
                        if (0 === d && (e = this.Ds(a, b))) return e
                    }
                    for (d = b.firstChild; d;) e = d.nextSibling, d.Vr || this.wo(a, d), d = e
                }
                return {
                    node: b,
                    scope: a
                }
            };
            return c
        }(),
        ic;
    (function(c) {
        function a(a, b, d) {
            var e = b.type ? b.type.toLowerCase() : "",
                c = d;
            if ("zwibblerValue" in b) var h = "zwibblerValue";
            else h = "value", c = "" + c;
            if ("radio" === e || "checkbox" === e) b.checked = b[h] === c;
            else {
                if ("SELECT" === b.tagName) {
                    e = 0;
                    for (var f = b.querySelectorAll("option"); e < f.length; e++) {
                        var u = f[e],
                            v = u.getAttribute("z-value");
                        if (v && Ka(a, v) === d) {
                            u.selected = !0;
                            return
                        }
                    }
                } else "DIV" === b.tagName && "value" in a && (a.value = c);
                b[h] = c
            }
        }

        function b(a, b) {
            var d = b.type ? b.type.toLowerCase() : "";
            if ("checkbox" === d) return "zwibblerValue" in b ? b.zwibblerValue : b.checked;
            if ("radio" === d)(d = b.getAttribute("name")) && (d = document.querySelector('input[name="' + d + "]:checked")) && (b = d);
            else if ("SELECT" === b.tagName) {
                d = 0;
                for (var e = b.querySelectorAll("option"); d < e.length; d++) {
                    var c = e[d];
                    if (c.selected && (c = c.getAttribute("z-value"))) return Ka(a, c)
                }
            } else if ("value" in a) return a.value;
            return "zwibblerValue" in b ? b.zwibblerValue : b.value
        }

        function d(a, b, d, c, l) {
            d && (a["this"] = d);
            c && (a.$event = c);
            return Ka(a, b, l)
        }
        c.Fy = a;
        c.yu = b;
        c.vp = d;
        c.$e = function() {
            function e(a, b) {
                var d = a.indexOf(b);
                return -1 === d ? "" : a.substr(d + b.length + 1)
            }
            var c = new hc;
            c.vb("init", function(a, b, e, c) {
                d(a, c, b)
            });
            c.Md("text", function(a, b) {
                a.textContent = b
            });
            c.Md("json", function(a, b) {
                a.textContent = JSON.stringify(b)
            });
            c.Md("html", function(a, b) {
                a.innerHTML = b
            });
            c.vb("model", function(d, e, h, n) {
                c.$a(e, "input", function() {
                    var a = b(d, e);
                    fc("input -> model: New value for %s: %s", n, a);
                    Ka(d, n + "=" + JSON.stringify(a));
                    c.digest()
                });
                setTimeout(function() {
                    var b = e.getAttribute("z-value");
                    b && (c.watch(d, e, b, function(c) {
                        fc("z-value for %s[%s] is %s", e.tagName, b, c);
                        e.zwibblerValue = c;
                        a(d, e, c)
                    }), c.wa(e, function() {
                        delete e.zwibblerValue
                    }));
                    c.watch(d, e, n, function(b) {
                        fc("model(%s) -> %s[%s] : new value is %s", n, e.tagName, e.type, b);
                        a(d, e, b)
                    })
                }, 0)
            });
            c.vb("on", function(a, b, h, n) {
                var f = e(h, "on");
                "" !== f && (fc("Attaching native event %s => %s", f, n), c.$a(b, f, function(e) {
                    fc("Got %s, execute %s", f, n);
                    d(a, n, b, e);
                    c.digest();
                    e && e.preventDefault && e.preventDefault()
                }))
            });
            c.vb("bind", function(a, b, d, h) {
                var f = e(d, "bind");
                "" !== f && c.watch(a, b, h, function(a) {
                    b.setAttribute(f, a);
                    "value" === f && "SELECT" === b.tagName && (console.log("SSet bound value %s=%s", f, a), console.log("Num children=", b.children.length), b.value = a)
                })
            }, 1);
            c.vb("for", function(a, b, d, e) {
                d = e.indexOf(" in ");
                if (-1 !== d) {
                    var h = e.substr(0, d),
                        f = e.substr(d + 4),
                        k = [];
                    fc("z-for '%s' in '%s'", h, f);
                    var l = b.parentNode,
                        n = b.nextSibling;
                    b.parentNode.removeChild(b);
                    c.watch(a, l, f, function(d) {
                        if ("number" === typeof d) {
                            for (var e = [], q = 0; q < d; q++) e.push(q);
                            d = e
                        }
                        for (q = 0; q < k.length; q++) e = k[q], e.parentNode && e.parentNode.removeChild(e), c.detach(e);
                        k.length = 0;
                        if ("object" === typeof d && "length" in d)
                            for (q = 0; q < d.length; q++) {
                                e = document.createComment("z-for " + f + "[" + q + "] = " + d[q]);
                                l.insertBefore(e, n);
                                k.push(e);
                                e = Object.create(a);
                                e.$parent = a;
                                e[h] = d[q];
                                var v = b.cloneNode(!0);
                                v.removeAttribute("z-for");
                                l.insertBefore(v, n);
                                e = c.oc(e, v).node;
                                k.push(e)
                            }
                    })
                }
            }, 0);
            c.vb("if", function(a, b, d, e) {
                var h = document.createComment(d + " " + e),
                    f = b.parentElement,
                    k = null;
                f.replaceChild(h, b);
                c.watch(a, f, e, function(e) {
                    e && !k ? (k = b.cloneNode(!0), k.removeAttribute(d), f.replaceChild(k, h), c.oc(a, k)) : !e && k && (c.detach(k), f.replaceChild(h, k), k = null)
                })
            }, 0);
            c.Md("class", function(a, b) {
                for (var d in b) B(a).Ln(d, b[d])
            });
            c.Md("style", function(a, b) {
                for (var d in b) a.style[d] = b[d]
            });
            c.Md("selected", function(a, b) {
                B(a).Ln("selected", b)
            });
            c.Md("disabled", function(a, b) {
                b ? a.setAttribute("disabled", "true") : a.removeAttribute("disabled")
            });
            c.Md("enabled", function(a, b) {
                b ? a.removeAttribute("disabled") : a.setAttribute("disabled", "true")
            });
            c.Md("checked", function(a, b) {
                a.checked = b ? !0 : !1
            });
            return c
        }
    })(ic || (ic = {}));
    var jc = ic;
    var kc = x.create("DRAGSORT");

    function lc(c) {
        function a(a) {
            "dragover" !== a.type && kc(a.type);
            for (var b = a.target; b.parentNode !== c.parent && b.parentNode;) b = b.parentNode;
            if (1 === b.nodeType && b.getAttribute("draggable") && "false" !== b.getAttribute("draggable").toLowerCase() && b.parentNode === c.parent)
                if ("dragstart" === a.type) {
                    for (var d = c.parent.children, e = 0; e < d.length; e++) console.log(c.Hi, d[e].getAttribute(c.Hi), d[e]), null !== d[e].getAttribute(c.Hi) && d[e].setAttribute("sort-index", e.toString());
                    a.dataTransfer.setData("text", b.id);
                    a.dataTransfer.dropEffect = "move";
                    f = h = b;
                    a.stopPropagation()
                } else "dragover" === a.type && f && h.parentNode === b.parentNode ? (f.classList.remove(c.Nm), f = b, f.classList.add(c.Nm), a.preventDefault()) : "dragend" === a.type && f && h.parentNode === b.parentNode ? (f.classList.remove(c.Nm), b = parseInt(f.getAttribute("sort-index") || "0"), d = parseInt(h.getAttribute("sort-index") || "0"), c.cw(d, b), a.preventDefault(), a.stopPropagation()) : "drop" === a.type && (a.preventDefault(), a.stopPropagation())
        }
        var b = c.parent.ds;
        c.parent.ds = !0;
        for (var d = c.parent.children, e = 0; e < d.length; e++) null !== d[e].getAttribute(c.Hi) && d[e].setAttribute("draggable", "true");
        if (b) return function() {};
        B(c.parent).addEventListener("dragstart dragover dragend drop", a);
        var h, f;
        return function() {
            B(c.parent).removeEventListener("dragstart dragover dragend drop", a)
        }
    };
    var mc = function() {
        function c(a, b) {
            this.name = b;
            this.ma = B("div").Wa({
                borderTop: "1px solid #888",
                padding: "5px",
                cursor: "default"
            }).Tc(a);
            this.update(0)
        }
        c.prototype.update = function(a) {
            this.ma.fa.innerText = this.name + "... " + Math.round(100 * a) + "%"
        };
        c.prototype.error = function(a) {
            var b = this,
                d = document.createElement("input");
            d.setAttribute("type", "button");
            d.value = "OK";
            d.addEventListener("click", function() {
                b.done()
            });
            this.ma.fa.innerText = this.name + "... " + a + " ";
            this.ma.fa.appendChild(d)
        };
        c.prototype.done = function() {
            this.ma.remove()
        };
        c.all = [];
        return c
    }();
    var nc = function() {
        function c(a, b, d) {
            void 0 === d && (d = !1);
            var e = this;
            this.ma = a;
            this.Ny = d;
            this.Em = 0;
            this.ym = {};
            this.pb = !1;
            this.timeout = null;
            this.lines = [];
            this.filter = null;
            this.et = "#5da700 #ed81ff #02ab34 #f92798 #59ff91 #ff6b80 #3cffe4 #ffd32b #5e8caa #ffdb7f #e5cdff #00c17e #f6f6f5 #9a861e #daff9d #808d40".split(" ");
            this.ft = "#2f361e #6b35c2 #416323 #431b77 #af2f21 #5451ad #805221 #962e7f #456354 #a52e4f #273c4c #692d25 #455b8a #3f1a2a #382454 #774f63".split(" ");
            this.Cl = [];
            ac('\n\n.z-inner-debug.black {\n    background: #000;\n}\n\n.z-inner-debug.white {\n    background: #fff;\n}\n\n.z-debug-panel {\n    font-family: "monospace";\n    font-size: 12px;\n    display: flex;\n    flex-flow: column nowrap;\n    text-align: left;\n}\n\n.z-inner-debug {\n    flex: 1 1 auto;\n    overflow: scroll;\n}\n\n.z-inner-debug.black div {\n    border-bottom: 1px solid #222;\n    margin-bottom: 3px;\n}\n\n.z-inner-debug.white div {\n    border-bottom: 1px solid #eee;\n    margin-bottom: 3px;\n}\n');
            a.classList.add("z-debug-panel");
            var c = 0;
            B("input").fi({
                type: "text",
                placeholder: "regexp...",
                onclick: "this.select()"
            }).Tc(a).addEventListener("input", function(a) {
                c && window.clearTimeout(c);
                c = setTimeout(function() {
                    e.ex(a.target.value);
                    c = 0
                }, 200)
            });
            this.Yc = B("div").pd("z-inner-debug").Tc(a).fa;
            B("button").Tc(this.ma).Wa({
                flex: "0 0 auto"
            }).Mg("Scroll to bottom/top").addEventListener("click", function() {
                e.Yc.scrollTop = e.Wo() ? 0 : e.Yc.scrollHeight
            });
            this.yv = x.addListener(function(a, b) {
                return e.Oo(a, b)
            });
            b.add(function() {
                x.removeListener(e.yv)
            });
            this.Oo("DEBUG", "Debug window starting");
            B(this.Yc).pd(d ? "white" : "black");
            this.Cl = d ? this.ft : this.et
        }
        c.prototype.show = function() {
            this.ma.style.display = "flex";
            this.pb = !0;
            this.uo();
            this.Yc.scrollTop = this.Yc.scrollHeight
        };
        c.prototype.Me = function() {
            this.ma.style.display = "none";
            this.pb = !1
        };
        c.prototype.nu = function(a) {
            a in this.ym || (this.ym[a] = this.Cl[this.Em], this.Em = (this.Em + 1) % this.Cl.length);
            return this.ym[a]
        };
        c.prototype.Oo = function(a, b) {
            for (var d = this, e = 0, c = b.split("\n"); e < c.length; e++) this.lines.push({
                key: a,
                line: c[e]
            });
            this.pb && null === this.timeout && (this.timeout = setTimeout(function() {
                d.timeout = null;
                d.uo()
            }, 100))
        };
        c.prototype.ex = function(a) {
            this.filter = 2 > a.length ? null : new RegExp(a, "i");
            for (a = this.Yc.firstChild; a;) {
                var b = a;
                1 === b.nodeType && "DIV" === b.tagName && (!this.filter || this.filter.exec(b.textContent) ? b.style.display = "block" : b.style.display = "none");
                a = a.nextSibling
            }
        };
        c.prototype.Wo = function() {
            return this.Yc.scrollTop >= this.Yc.scrollHeight - this.Yc.clientHeight
        };
        c.prototype.uo = function() {
            for (var a = this.Wo(),
                    b = 0, d = this.lines; b < d.length; b++) {
                var e = d[b],
                    c = this.nu(e.key),
                    f = document.createElement("div");
                f.style.color = c;
                e = e.key + ": " + e.line;
                this.filter && !this.filter.exec(e) && (f.style.display = "none");
                f.appendChild(document.createTextNode(e));
                this.Yc.appendChild(f)
            }
            a && (this.Yc.scrollTop = this.Yc.scrollHeight);
            this.lines.length = 0
        };
        return c
    }();
    var oc = function() {
        function c(a, b, d) {
            this.parentElement = a;
            this.stack = [];
            this.an = !1;
            this.oe = [];
            this.yx = !1;
            this.first = B("CANVAS", {
                width: b,
                height: d
            }).Tc(a).fa;
            this.stack.push({
                canvas: this.first,
                xa: this.first.getContext("2d"),
                gh: {}
            });
            this.qf = this.nj();
            this.width = this.first.width;
            this.height = this.first.height;
            this.Ai(this.first)
        }
        c.prototype.qs = function() {
            if (void 0 === a) var a = this.stack.length;
            var b = B("CANVAS").Wa({
                position: "absolute",
                left: this.first.offsetLeft + "px",
                top: this.first.offsetTop + "px",
                pointerEvents: "none",
                outline: "4px solid red"
            }).pd("zwibbler-overlay").fa;
            this.Ai(b);
            this.stack.splice(a, 0, {
                canvas: b,
                xa: b.getContext("2d"),
                gh: {}
            });
            a === this.stack.length - 1 ? this.parentElement.insertBefore(b, null) : this.parentElement.insertBefore(b, this.stack[a + 1].canvas);
            b.getContext("2d")
        };
        c.prototype.Oc = function(a, b, d) {
            var e = this;
            this.stack[a].gh[b] = d;
            if (!this.an) {
                var c = (new Date).getTime();
                this.an = !0;
                requestAnimationFrame(function() {
                    var a = (new Date).getTime(),
                        b = e.wu();
                    e.an = !1;
                    for (var d = 0, h = e.stack; d < h.length; d++) {
                        var q = h[d],
                            u = !0,
                            v;
                        for (v in q.gh) {
                            var w = q.xa;
                            u && (w.setTransform(b, 0, 0, b, 0, 0), w.clearRect(0, 0, e.width, e.height), u = !1);
                            q.gh[v](w, b)
                        }
                        q.gh = {}
                    }
                    if (e.yx) {
                        e.oe.push({
                            dc: a,
                            latency: a - c,
                            Gt: (new Date).getTime() - a
                        });
                        25 < e.oe.length && e.oe.shift();
                        w = h = d = 0;
                        for (q = e.oe; w < q.length; w++) u = q[w], d += u.latency, h += u.Gt;
                        d = Math.round(d / e.oe.length * 10) / 10;
                        h = Math.round(h / e.oe.length * 10) / 10;
                        a = 1 < e.oe.length ? Math.round(e.oe.length / ((a - e.oe[0].dc) / 1E3) * 100) / 100 : 0;
                        w = e.get(0);
                        w.setTransform(b, 0, 0, b, 0, 0);
                        w.fillStyle = "white";
                        b = "latency=" + d + "ms drawTime=" + h + "ms fps=" + a;
                        w.fillRect(0, 0, w.measureText("latency=MM.MMms drawTime=MM.MMms fps=MM").width, 13);
                        w.textBaseline = "top";
                        w.font = "10px arial";
                        w.fillStyle = "red";
                        w.fillText(b, 2, 2)
                    }
                })
            }
        };
        c.prototype.get = function(a) {
            return this.stack[a].xa
        };
        c.prototype.wu = function() {
            var a = this.nj();
            if (a !== this.qf) {
                this.qf = a;
                a = 0;
                for (var b = this.stack; a < b.length; a++) this.Ai(b[a].canvas)
            }
            return this.qf
        };
        c.prototype.Ve = function(a, b) {
            this.width = a;
            this.height = b;
            for (var d = 0, e = this.stack; d < e.length; d++) this.Ai(e[d].canvas)
        };
        c.prototype.nj = function() {
            var a = this.stack[0].xa;
            return (window.devicePixelRatio || 1) / (a.hy || a.Kv || a.Nv || a.Tv || a.Ns || 1)
        };
        c.prototype.Ai = function(a) {
            a.width = this.width * this.qf;
            a.height = this.height * this.qf;
            a.style.width = this.width + "px";
            a.style.height = this.height + "px";
            a.getContext("2d").setTransform(this.qf, 0, 0, this.qf, 0, 0)
        };
        return c
    }();

    function pc(c) {
        return "string" === typeof c
    }

    function F(c) {
        return "number" === typeof c
    }

    function qc(c) {
        return "object" === typeof c
    };
    var rc = function() {
        function c() {
            this.keys = {}
        }
        c.prototype.contains = function(a) {
            return a in this.keys
        };
        c.prototype.add = function(a) {
            if (a instanceof Array)
                for (var b = 0; b < a.length; b++) this.keys[a[b]] = !0;
            else this.keys[a] = !0
        };
        c.prototype.remove = function(a) {
            delete this.keys[a]
        };
        c.prototype.aj = function(a) {
            var b, d;
            void 0 === d && (d = "");
            if (!(a instanceof c)) throw d || "Assertion failed";
            d = new c;
            for (b in this.keys) a.contains(b) || d.add(b);
            return d
        };
        c.prototype.Ib = function() {
            var a;
            var b = [];
            for (a in this.keys) this.keys.hasOwnProperty(a) && b.push(a);
            return b
        };
        c.prototype.Ix = function() {
            var a;
            var b = [];
            for (a in this.keys) this.keys.hasOwnProperty(a) && b.push(parseFloat(a));
            return b
        };
        c.prototype.clear = function() {
            this.keys = {}
        };
        c.prototype.rc = function(a) {
            for (var b in this.keys)
                if (this.keys.hasOwnProperty(b) && a(b)) break
        };
        c.prototype.empty = function() {
            for (var a in this.keys)
                if (this.keys.hasOwnProperty(a)) return !1;
            return !0
        };
        return c
    }();

    function sc(c) {
        for (var a = [], b = 0; b < c; b++) a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890" [Math.floor(63 * Math.random())]);
        return a.join("")
    };
    var tc = x.create("MISC");

    function uc(c) {
        var a = document.createElement("canvas");
        c && c.appendChild(a);
        a.style.background = "transparent";
        return a
    }

    function vc(c, a) {
        var b = r.Yd(c);
        b.values[3] = a;
        return b.toString()
    }

    function wc(c) {
        var a = B.Dj(),
            b = B(c).Vb();
        b.left = Math.min(b.left, a.x + a.width - c.offsetWidth);
        b.top = Math.min(b.top, a.y + a.height - c.offsetHeight);
        B(c).Ak(b)
    }

    function xc(c) {
        var a = c.getContext("2d");
        if (null === a) return "error";
        var b = a.getImageData(0, 0, c.width, c.height);
        c = b.width;
        var d = b.height;
        a = c * d * 3;
        var e = a + 54,
            h = [66, 77, e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0],
            f = [40, 0, 0, 0, c & 255, c >> 8 & 255, c >> 16 & 255, c >> 24 & 255, d & 255, d >> 8 & 255, d >> 16 & 255, d >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, a & 255, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        a = (4 - 3 * c % 4) % 4;
        b = b.data;
        e = c << 2;
        for (var k = Sa.$e("Base64Encoder"), l = 0; l < h.length; l++) k.jb(h[l]);
        for (l = 0; l < f.length; l++) k.jb(f[l]);
        do {
            h = e * (d - 1);
            for (f = 0; f < c; f++) l = f << 2, k.jb(b[h + l + 2]), k.jb(b[h + l + 1]), k.jb(b[h + l]);
            for (h = 0; h < a; h++) k.jb(0)
        } while (--d);
        k.flush();
        return "data:image/bmp;base64," + k.og().toString()
    }

    function yc(c, a) {
        "erase" === a ? c.Pd ? (c.strokeStyle = "#000000", c.globalCompositeOperation = "destination-out", --c.lineWidth, c.stroke(), c.globalCompositeOperation = "source-over", c.strokeStyle = c.Pd, c.lineWidth += 2, c.stroke(), --c.lineWidth) : (c.strokeStyle = "#000000", c.globalCompositeOperation = "destination-out", c.stroke(), c.globalCompositeOperation = "source-over") : (c.strokeStyle = a, c.stroke())
    }

    function zc() {
        for (var c = 0; c < arguments.length; c++);
        c = arguments[0];
        for (var a = 1; a < arguments.length; a++) {
            var b = arguments[a],
                d;
            for (d in b) b.hasOwnProperty(d) && (c[d] = b[d])
        }
        return c
    }

    function Ac(c) {
        return c instanceof HTMLElement ? "INPUT" === c.tagName || "TEXTAREA" === c.tagName || c.isContentEditable ? !0 : !1 : !1
    };
    var Bc = x.create("Graphics", !0),
        G = function() {
            function c(a, b) {
                this.x = a;
                this.y = b
            }
            c.prototype.Kb = function(a) {
                return Math.sqrt((a.x - this.x) * (a.x - this.x) + (a.y - this.y) * (a.y - this.y))
            };
            c.prototype.toString = function() {
                return "(" + this.x + ", " + this.y + ")"
            };
            c.prototype.Hc = function(a) {
                return this.x === a.x && this.y === a.y
            };
            c.prototype.clone = function() {
                return new c(this.x, this.y)
            };
            c.prototype.Gx = function(a) {
                return new c(this.x - a.x, this.y - a.y)
            };
            c.prototype.np = function(a, b) {
                var d = a.x,
                    e = a.y,
                    c = this.x,
                    f = this.y,
                    k = b.x - d,
                    l = b.y - e,
                    n = k * k + l * l;
                if (0 === n) return this.Kb(a);
                n = ((c - d) * k + (f - e) * l) / n;
                1 < n ? n = 1 : 0 > n && (n = 0);
                d = d + n * k - c;
                e = e + n * l - f;
                return Math.sqrt(d * d + e * e)
            };
            return c
        }(),
        Cc = function() {
            function c(a, b) {
                this.width = a;
                this.height = b
            }
            c.prototype.Br = function() {
                return new H(0, 0, this.width, this.height)
            };
            return c
        }();

    function Dc(c, a, b, d) {
        return Math.sqrt((c - b) * (c - b) + (a - d) * (a - d))
    }

    function I(c, a, b, d) {
        var e = Dc(c, a, b, d);
        return 0 === e ? {
            x: 1,
            y: 0
        } : {
            x: (b - c) / e,
            y: (d - a) / e
        }
    }

    function Ec(c) {
        c.x *= -1;
        c.y *= -1;
        return c
    }
    var H = function() {
            function c(a, b, d, e) {
                this.x = a;
                this.y = b;
                this.width = d;
                this.height = e;
                this.Yq()
            }
            c.load = function(a) {
                return new c(a.x, a.y, a.width, a.height)
            };
            c.Wg = function(a) {
                if (0 === a.length) return new c(0, 0, 0, 0);
                for (var b = a[0].x, d = a[0].x, e = a[0].y, h = a[0].y, f = 1; f < a.length; f++) a[f].x < b && (b = a[f].x), a[f].x > d && (d = a[f].x), a[f].y < e && (e = a[f].y), a[f].y > h && (h = a[f].y);
                return new c(b, e, d - b, h - e)
            };
            c.prototype.save = function() {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height
                }
            };
            c.prototype.clone = function() {
                return new c(this.x, this.y, this.width, this.height)
            };
            c.prototype.Hc = function(a) {
                return this.x === a.x && this.y === a.y && this.width === a.width && this.height === a.height
            };
            c.prototype.ni = function(a) {
                a.x < this.x && (this.width += this.x - a.x, this.x = a.x);
                a.y < this.y && (this.height += this.y - a.y, this.y = a.y);
                a.x + a.width > this.x + this.width && (this.width += a.x + a.width - this.x - this.width);
                a.y + a.height > this.y + this.height && (this.height += a.y + a.height - this.y - this.height)
            };
            c.prototype.Rn = function(a, b) {
                a < this.x ? (this.width += this.x - a, this.x = a) : a > this.x + this.width && (this.width = a - this.x);
                b < this.y ? (this.height += this.y - b, this.y = b) : b > this.y + this.height && (this.height = b - this.y)
            };
            c.prototype.contains = function(a) {
                return this.x <= a.x && this.x + this.width > a.x + a.width && this.y <= a.y && this.y + this.height > a.y + a.height
            };
            c.prototype.jw = function(a) {
                return this.x > a.x + a.width || a.x > this.x + this.width || this.y > a.y + a.height || a.y > this.y + this.height ? !1 : !0
            };
            c.prototype.eh = function() {
                return this.width * this.height
            };
            c.prototype.Jq = function(a) {
                return this.jw(a) ? (Math.min(this.right(), a.right()) - Math.max(this.x, a.x)) * (Math.min(this.bottom(), a.bottom()) - Math.max(this.y, a.y)) : 0
            };
            c.prototype.ed = function(a, b, d) {
                void 0 === d && (d = 0);
                return this.x - d <= a && this.x + this.width + d > a && this.y - d <= b && this.y + this.height + d > b
            };
            c.prototype.Yq = function() {
                0 > this.width && (this.x += this.width, this.width = -this.width);
                0 > this.height && (this.y += this.height, this.height = -this.height)
            };
            c.prototype.Dd = function(a, b) {
                void 0 === b && (b = a);
                this.x -= a / 2;
                this.y -= b / 2;
                this.width += a;
                this.height += b
            };
            c.prototype.transform = function(a) {
                var b = a.apply(this.x, this.y);
                var d = a.apply(this.x + this.width, this.y);
                var e = a.apply(this.x + this.width, this.y + this.height);
                a = a.apply(this.x, this.y + this.height);
                this.x = Math.min(b.x, d.x, e.x, a.x);
                this.y = Math.min(b.y, d.y, e.y, a.y);
                this.width = Math.max(b.x, d.x, e.x, a.x) - this.x;
                this.height = Math.max(b.y, d.y, e.y, a.y) - this.y
            };
            c.prototype.right = function() {
                return this.x + this.width
            };
            c.prototype.bottom = function() {
                return this.y + this.height
            };
            c.prototype.ud = function() {
                return new G(this.x + this.width / 2, this.y + this.height / 2)
            };
            c.prototype.toString = function() {
                return "Rectangle(" + this.x + ", " + this.y + ", " + this.width + ", " + this.height + ")"
            };
            return c
        }(),
        J = function() {
            function c() {
                this.log = x.create("MATRIX");
                if (0 === arguments.length) this.m11 = 1, this.m21 = this.m12 = 0, this.m22 = 1, this.Ca = this.Ba = 0;
                else if (1 === arguments.length)
                    if ("string" === typeof arguments[0]) {
                        var a = arguments[0].match(/-?\d+\.?[\de\-]*/g);
                        if (!a || 6 != a.length) throw Error("Bad initializer for matrix: " + arguments[0]);
                        this.m11 = parseFloat(a[0]);
                        this.m21 = parseFloat(a[1]);
                        this.m12 = parseFloat(a[2]);
                        this.m22 = parseFloat(a[3]);
                        this.Ba = parseFloat(a[4]);
                        this.Ca = parseFloat(a[5])
                    } else {
                        if (6 !== arguments[0].length) throw "Bad array initializer for Matrix.";
                        this.m11 = arguments[0][0];
                        this.m12 = arguments[0][1];
                        this.m21 = arguments[0][2];
                        this.m22 = arguments[0][3];
                        this.Ba = arguments[0][4];
                        this.Ca = arguments[0][5]
                    }
                else this.m11 = arguments[0], this.m12 = arguments[1], this.m21 = arguments[2], this.m22 = arguments[3], this.Ba = arguments[4], this.Ca = arguments[5]
            }
            c.prototype.toString = function() {
                return "[ " + this.m11 + " " + this.m12 + " " + this.Ba + "    " + this.m21 + " " + this.m22 + " " + this.Ca + "    0 0 1 ]"
            };
            c.prototype.Ib = function() {
                return [this.m11, this.m12, this.m21, this.m22, this.Ba, this.Ca]
            };
            c.prototype.iq = function() {
                return 1 === this.m11 && 0 === this.m12 && 0 === this.m21 && 1 === this.m22 && 0 === this.Ba && 0 === this.Ca
            };
            c.prototype.Hc = function(a) {
                return this.m11 === a.m11 && this.m12 === a.m12 && this.m21 === a.m21 && this.m22 === a.m22 && this.Ba === a.Ba && this.Ca === a.Ca
            };
            c.prototype.multiply = function(a) {
                var b = new c;
                b.m11 = this.m11 * a.m11 + this.m12 * a.m21;
                b.m21 = this.m21 * a.m11 + this.m22 * a.m21;
                b.m12 = this.m11 * a.m12 + this.m12 * a.m22;
                b.m22 = this.m21 * a.m12 + this.m22 * a.m22;
                b.Ba = this.m11 * a.Ba + this.m12 * a.Ca + this.Ba;
                b.Ca = this.m21 * a.Ba + this.m22 * a.Ca + this.Ca;
                return b
            };
            c.prototype.apply = function(a, b) {
                return new G(this.m11 * a + this.m12 * b + this.Ba, this.m21 * a + this.m22 * b + this.Ca)
            };
            c.prototype.Yf = function(a) {
                var b;
                void 0 === b && (b = !1);
                b ? a.setTransform(this.m11, this.m21, this.m12, this.m22, this.Ba, this.Ca) : a.transform(this.m11, this.m21, this.m12, this.m22, this.Ba, this.Ca)
            };
            c.prototype.clone = function() {
                return new c(this.m11, this.m12, this.m21, this.m22, this.Ba, this.Ca)
            };
            c.prototype.inverse = function() {
                var a = this.m11 * this.m22 - this.m12 * this.m21;
                return new c(this.m22 / a, -this.m12 / a, -this.m21 / a, this.m11 / a, (this.m12 * this.Ca - this.Ba * this.m22) / a, (this.Ba * this.m21 - this.m11 * this.Ca) / a)
            };
            c.prototype.Fr = function() {
                var a = this.m11,
                    b = this.m21,
                    d = this.m12,
                    e = this.m22,
                    h = Math.sqrt(a * a + b * b),
                    f = Math.sqrt(d * d + e * e);
                return new c(a / h, d / f, b / h, e / f, this.Ba, this.Ca)
            };
            c.prototype.jc = function() {
                return new G(Math.sqrt(this.m11 * this.m11 + this.m21 * this.m21), Math.sqrt(this.m12 * this.m12 + this.m22 * this.m22))
            };
            c.prototype.vv = function() {
                return 1 === this.m11 && 1 === this.m22 && 0 === this.m12 && 0 === this.m21
            };
            c.prototype.translate = function(a, b) {
                return this.multiply(new Fc(a, b))
            };
            c.prototype.rotate = function(a, b, d) {
                return this.multiply(new Gc(a, b, d))
            };
            c.prototype.Pg = function() {
                return "matrix(" + this.m11 + ", " + this.m21 + ", " + this.m12 + ", " + this.m22 + ", " + this.Ba + ", " + this.Ca + ")"
            };
            c.prototype.toJSON = function() {
                return this.Pg()
            };
            return c
        }(),
        Gc = function(c) {
            function a(a, d, e) {
                var b = Math.cos(a);
                a = Math.sin(a);
                return c.call(this, b, a, -a, b, -d * b - e * a + d, d * a - e * b + e) || this
            }
            __extends(a, c);
            return a
        }(J),
        Fc = function(c) {
            function a(a, d) {
                return c.call(this, 1, 0, 0, 1, a, d) || this
            }
            __extends(a, c);
            return a
        }(J),
        Hc = function(c) {
            function a(a, d, e, h) {
                return void 0 === e || void 0 === h ? c.call(this, a, 0, 0, d, 0, 0) || this : c.call(this, a, 0, 0, d, e - a * e, h - d * h) || this
            }
            __extends(a, c);
            return a
        }(J),
        Ic = function(c) {
            function a(a, d, e) {
                var b = Math.cos(2 * a);
                a = Math.sin(2 * a);
                return c.call(this, b, a, a, -b, -d * b - e * a + d, -d * a + e * b + e) || this
            }
            __extends(a, c);
            return a
        }(J);

    function Jc(c, a, b, d, e, h, f, k, l, n) {
        if (!(8 < ++Jc.depth)) {
            var q = (a + d) / 2,
                u = (b + e) / 2,
                v = (d + h) / 2,
                w = (e + f) / 2,
                y = (h + k) / 2,
                z = (f + l) / 2,
                L = (q + v) / 2,
                R = (u + w) / 2;
            v = (v + y) / 2;
            w = (w + z) / 2;
            var E = (L + v) / 2,
                D = (R + w) / 2,
                C = k - a,
                W = l - b;
            d = Math.abs((d - k) * W - (e - l) * C);
            h = Math.abs((h - k) * W - (f - l) * C);
            (d + h) * (d + h) < n * (C * C + W * W) ? c.push(new G(E, D)) : (Jc(c, a, b, q, u, L, R, E, D, n), Jc(c, E, D, v, w, y, z, k, l, n))
        }--Jc.depth
    }(Jc || (Jc = {})).depth = 0;

    function Kc(c, a, b, d, e, h, f, k) {
        if (!(8 < ++Jc.depth)) {
            var l = (a + d) / 2,
                n = (b + e) / 2,
                q = (d + h) / 2,
                u = (e + f) / 2,
                v = (l + q) / 2,
                w = (n + u) / 2,
                y = h - a,
                z = f - b;
            d = Math.abs((d - h) * z - (e - f) * y);
            d * d <= k * (y * y + z * z) ? c.push(new G(v, w)) : (Kc(c, a, b, l, n, v, w, k), Kc(c, v, w, q, u, h, f, k))
        }--Jc.depth
    }

    function Lc(c, a, b) {
        var d, e = !1,
            h = c.length;
        1 < h && c[h - 1].x === c[0].x && c[h - 1].y === c[0].y && --h;
        if (3 > h) return !1;
        var f = c[h - 1].x;
        var k = c[h - 1].y;
        for (d = 0; d < h; d++) {
            var l = c[d].x;
            var n = c[d].y;
            if (l > f) {
                var q = f;
                var u = l;
                var v = k;
                k = n
            } else q = l, u = f, v = n;
            l < a === a <= f && (b - v) * (u - q) < (k - v) * (a - q) && (e = !e);
            f = l;
            k = n
        }
        return e
    }

    function Mc(c, a, b, d) {
        d *= d;
        for (var e = 1; e < c.length; e++) {
            var h = c[e - 1].x,
                f = c[e - 1].y,
                k = c[e].x - h,
                l = c[e].y - f,
                n = ((a - h) * k + (b - f) * l) / (k * k + l * l);
            1 < n ? n = 1 : 0 > n && (n = 0);
            h = h + n * k - a;
            f = f + n * l - b;
            if (h * h + f * f <= d) return !0
        }
        return !1
    }
    (function() {
        function c(a) {
            this.Yb = a
        }
        c.prototype.clear = function() {
            for (var a = 0; a < this.Yb.width * this.Yb.height * 4; a++) this.Yb.data[a] = 0
        };
        c.prototype.getImageData = function() {
            return this.Yb
        };
        c.prototype.width = function() {
            return this.Yb.width
        };
        c.prototype.height = function() {
            return this.Yb.height
        };
        c.prototype.get = function(a, b) {
            var d = this.Yb.width * b * 4 + 4 * a;
            return this.Yb.data[d] | this.Yb.data[d + 1] << 8 | this.Yb.data[d + 2] << 16 | this.Yb.data[d + 3] << 24
        };
        c.prototype.set = function(a, b, d) {
            a = this.Yb.width * b * 4 + 4 * a;
            this.Yb.data[a] = d & 255;
            this.Yb.data[a + 1] = d >> 8 & 255;
            this.Yb.data[a + 2] = d >> 16 & 255;
            this.Yb.data[a + 3] = d >> 24 & 255
        };
        return c
    })();
    (function() {
        function c(a, b) {
            this.data = [];
            this.fg = a;
            this.vi = b;
            this.data = []
        }
        c.prototype.width = function() {
            return this.fg
        };
        c.prototype.height = function() {
            return this.vi
        };
        c.prototype.getImageData = function() {
            var a = document.createElement("canvas");
            a.width = this.fg;
            a.height = this.vi;
            a = a.getContext("2d").getImageData(0, 0, this.fg, this.vi);
            for (var b = this.fg * this.vi, d = 0; d < b; d++) {
                var e = !0 === this.data[d] ? 255 : 0;
                a.data[4 * d] = e;
                a.data[4 * d + 1] = e;
                a.data[4 * d + 2] = e;
                a.data[4 * d + 3] = 255
            }
            return a
        };
        c.prototype.get = function(a, b) {
            return !0 === this.data[this.fg * b + a]
        };
        c.prototype.set = function(a, b, d) {
            this.data[this.fg * b + a] = d
        };
        return c
    })();
    var K = function() {
        function c(a) {
            this.closed = !1;
            this.da = [];
            a instanceof H && (this.moveTo(a.x, a.y), this.lineTo(a.x + a.width, a.y), this.lineTo(a.x + a.width, a.y + a.height), this.lineTo(a.x, a.y + a.height), this.lineTo(a.x, a.y), this.closePath())
        }
        c.prototype.clear = function() {
            this.closed = !1;
            this.da = []
        };
        c.prototype.beginPath = function() {};
        c.prototype.rect = function() {};
        c.prototype.moveTo = function(a, b) {
            this.da.push(c.Bc, a, b)
        };
        c.prototype.lineTo = function(a, b) {
            this.da.push(c.Ac, a, b)
        };
        c.prototype.bezierCurveTo = function(a, b, d, e, h, f) {
            this.da.push(c.ve, a, b, d, e, h, f)
        };
        c.prototype.quadraticCurveTo = function(a, b, d, e) {
            this.da.push(c.xe, a, b, d, e)
        };
        c.prototype.arc = function() {};
        c.prototype.arcTo = function() {};
        c.prototype.closePath = function() {
            this.da.push(c.zc)
        };
        c.prototype.ia = function(a) {
            for (var b = 0; b < this.da.length;) {
                switch (this.da[b]) {
                    case c.Bc:
                        a.moveTo && a.moveTo(this.da[b + 1], this.da[b + 2]);
                        break;
                    case c.Ac:
                        a.lineTo && a.lineTo(this.da[b + 1], this.da[b + 2]);
                        break;
                    case c.ve:
                        a.bezierCurveTo && a.bezierCurveTo(this.da[b + 1], this.da[b + 2], this.da[b + 3], this.da[b + 4], this.da[b + 5], this.da[b + 6]);
                        break;
                    case c.xe:
                        a.quadraticCurveTo && a.quadraticCurveTo(this.da[b + 1], this.da[b + 2], this.da[b + 3], this.da[b + 4]);
                        break;
                    case c.zc:
                        a.closePath && a.closePath();
                        break;
                    default:
                        alert("Error!")
                }
                b += c.Cc[this.da[b]]
            }
        };
        c.prototype.Kw = function() {
            for (var a = 0, b = 0, d = 0, e = []; a < this.da.length;) {
                switch (this.da[a]) {
                    case c.zc:
                        e.push([c.zc]);
                        break;
                    case c.Bc:
                        b = this.da[a + 1];
                        d = this.da[a + 2];
                        break;
                    case c.Ac:
                        e.push([c.Ac, b, d]);
                        b = this.da[a + 1];
                        d = this.da[a + 2];
                        break;
                    case c.ve:
                        e.push([c.ve,
                            this.da[a + 3], this.da[a + 4], this.da[a + 1], this.da[a + 2], b, d
                        ]);
                        b = this.da[a + 5];
                        d = this.da[a + 6];
                        break;
                    case c.xe:
                        e.push([c.xe, this.da[a + 1], this.da[a + 2], b, d]), b = this.da[a + 3], d = this.da[a + 4]
                }
                a += c.Cc[this.da[a]]
            }
            this.da.length && e.push([c.Bc, b, d]);
            a = new c;
            for (b = e.length - 1; 0 <= b; b--) Array.prototype.push.apply(a.da, e[b]);
            a.closed = this.closed;
            return a
        };
        c.prototype.Ye = function() {
            for (var a = 0, b, d = []; a < this.da.length;) {
                var e = c.qo[this.da[a]];
                for (b = 0; b < e; b++) d.push(new G(this.da[a + 1 + 2 * b], this.da[a + 1 + 2 * b + 1]));
                a += c.Cc[this.da[a]]
            }
            return d
        };
        c.prototype.transform = function(a) {
            for (var b = 0, d, e; b < this.da.length;) {
                e = c.qo[this.da[b]];
                for (d = 0; d < e; d++) {
                    var h = a.apply(this.da[b + 1 + 2 * d], this.da[b + 1 + 2 * d + 1]);
                    this.da[b + 1 + 2 * d] = h.x;
                    this.da[b + 1 + 2 * d + 1] = h.y
                }
                b += c.Cc[this.da[b]]
            }
        };
        c.prototype.clone = function() {
            var a = new c;
            a.da = this.da.concat();
            return a
        };
        c.prototype.$o = function(a) {
            for (var b = 0, d, e = d = 0, h = new H(this.da[1], this.da[2], 0, 0), f; b < this.da.length;) {
                switch (this.da[b]) {
                    case c.Bc:
                    case c.Ac:
                        d = this.da[b + 1];
                        e = this.da[b + 2];
                        h.Rn(d, e);
                        break;
                    case c.ve:
                        var k = f = [],
                            l = this.da[b + 5],
                            n = this.da[b + 6];
                        Jc(k, d, e, this.da[b + 1], this.da[b + 2], this.da[b + 3], this.da[b + 4], l, n, a * a);
                        k.push(new G(l, n));
                        for (d = 0; d < f.length; d++) h.Rn(f[d].x, f[d].y);
                        d = this.da[b + 5];
                        e = this.da[b + 6];
                        break;
                    case c.xe:
                        k = f = [];
                        l = this.da[b + 3];
                        n = this.da[b + 4];
                        Kc(k, d, e, this.da[b + 1], this.da[b + 2], l, n, a * a);
                        k.push(new G(l, n));
                        for (d = 0; d < f.length; d++) h.Rn(f[d].x, f[d].y);
                        d = this.da[b + 3];
                        e = this.da[b + 4]
                }
                b += c.Cc[this.da[b]]
            }
            return h
        };
        c.prototype.append = function(a) {
            this.da = this.da.concat(a.da)
        };
        c.prototype.Kn = function(a) {
            for (var b = 0, d = 0, e = 0, h = new c, f; b < this.da.length;) {
                switch (this.da[b]) {
                    case c.Bc:
                        d = this.da[b + 1];
                        e = this.da[b + 2];
                        h.moveTo(d, e);
                        break;
                    case c.Ac:
                        d = this.da[b + 1];
                        e = this.da[b + 2];
                        h.lineTo(d, e);
                        break;
                    case c.ve:
                        var k = f = [],
                            l = this.da[b + 5],
                            n = this.da[b + 6];
                        Jc(k, d, e, this.da[b + 1], this.da[b + 2], this.da[b + 3], this.da[b + 4], l, n, a * a);
                        k.push(new G(l, n));
                        2 === f.length && 1E-4 > d * (f[0].y - f[1].y) + f[0].x * (f[1].y - e) + f[1].x * (e - f[0].y) && (f[0] = f[1], f.length = 1);
                        for (d = 0; d < f.length; d++) h.lineTo(f[d].x, f[d].y);
                        d = this.da[b + 5];
                        e = this.da[b + 6];
                        break;
                    case c.xe:
                        k = f = [];
                        l = this.da[b + 3];
                        n = this.da[b + 4];
                        Kc(k, d, e, this.da[b + 1], this.da[b + 2], l, n, a * a);
                        k.push(new G(l, n));
                        for (d = 0; d < f.length; d++) h.lineTo(f[d].x, f[d].y);
                        d = this.da[b + 3];
                        e = this.da[b + 4];
                        break;
                    case c.zc:
                        h.closePath()
                }
                b += c.Cc[this.da[b]]
            }
            return h
        };
        c.prototype.qw = function(a, b) {
            var d;
            void 0 === d && (d = 0);
            return Lc(this.Ye(), a, b) || 0 < d && this.Pq(a, b, d)
        };
        c.prototype.Pq = function(a, b, d) {
            var e = 0,
                h = 0,
                f = 0;
            for (d *= d; f < this.da.length;) {
                switch (this.da[f]) {
                    case c.Bc:
                        e = this.da[f + 1];
                        h = this.da[f + 2];
                        break;
                    case c.Ac:
                        var k = this.da[f + 1];
                        var l = this.da[f + 2];
                        var n = k - e;
                        var q = l - h;
                        var u = n * n + q * q;
                        u = ((a - e) * n + (b - h) * q) / u;
                        1 < u ? u = 1 : 0 > u && (u = 0);
                        e += u * n;
                        q = h + u * q;
                        h = e - a;
                        q -= b;
                        h = h * h + q * q;
                        if (h <= d) return !0;
                        e = k;
                        h = l
                }
                f += c.Cc[this.da[f]]
            }
            return !1
        };
        c.prototype.dj = function(a, b) {
            for (var d = 0, e = 0, h = b[0], f, k = new G(0, 0), l; d < this.da.length;) {
                switch (this.da[d]) {
                    case c.Bc:
                        l = this.da[d + 1];
                        f = this.da[d + 2];
                        a.moveTo(l, f);
                        k = new G(l, f);
                        break;
                    case c.Ac:
                        l = this.da[d + 1];
                        var n = f = this.da[d + 2],
                            q = new G(l, n);
                        f = k.Kb(q);
                        if (!(0 >= f)) {
                            for (; f > h;) k.x += (q.x - k.x) * h / f, k.y += (q.y - k.y) * h / f, e & 1 ? a.moveTo(k.x, k.y) : a.lineTo(k.x, k.y), f -= h, e = (e + 1) % b.length, h = b[e];
                            f <= h && (k = new G(l, n), e & 1 ? a.moveTo(k.x, k.y) : a.lineTo(k.x, k.y), h -= f)
                        }
                }
                d += c.Cc[this.da[d]]
            }
        };
        c.prototype.eh = function() {
            function a(a, b) {
                h -= (a - d) * (b + e);
                d = a;
                e = b
            }
            for (var b = 0, d, e, h = 0; b < this.da.length;) {
                switch (this.da[b]) {
                    case c.Bc:
                        d = this.da[b + 1];
                        e = this.da[b + 2];
                        break;
                    case c.Ac:
                        a(this.da[b + 1], this.da[b + 2]);
                        break;
                    case c.ve:
                        a(this.da[b + 5], this.da[b + 6]);
                        break;
                    case c.xe:
                        a(this.da[b + 3], this.da[b + 4])
                }
                b += c.Cc[this.da[b]]
            }
            return h / 2
        };
        c.prototype.rp = function(a) {
            for (var b = 0, d = 0, e = 0, h = !1; b < this.da.length;) {
                switch (this.da[b]) {
                    case c.Bc:
                        d = this.da[b + 1];
                        e = this.da[b + 2];
                        h = !0;
                        break;
                    case c.Ac:
                        a(d, e, this.da[b + 1], this.da[b + 2], h), d = this.da[b + 1], e = this.da[b + 2], h = !1
                }
                b += c.Cc[this.da[b]]
            }
        };
        c.prototype.Vs = function() {
            var a = 0;
            this.rp(function(b, d, e, c) {
                a += Dc(b, d, e, c)
            });
            return a
        };
        c.prototype.Xs = function(a) {
            var b = new c,
                d = 0;
            this.rp(function(e, c, f, k, l) {
                if (d <= a) {
                    l && b.moveTo(e, c);
                    l = Dc(e, c, f, k);
                    if (d + l >= a) {
                        var h = a - d;
                        f = e + (f - e) * h / l;
                        k = c + (k - c) * h / l
                    }
                    d += l;
                    b.lineTo(f, k)
                }
            });
            return b
        };
        c.Bc = 0;
        c.Ac = 1;
        c.ve = 2;
        c.xe = 3;
        c.zc = 4;
        c.Cc = [3, 3, 7, 5, 1];
        c.qo = [1, 1, 3, 2, 0];
        return c
    }();

    function Nc(c, a, b, d, e) {
        var h;
        if (2 >= d - b) e.push(c[b]);
        else {
            var f = c[b],
                k = c[d - 1],
                l = 0,
                n = 0;
            for (h = b + 1; h < d; h++) {
                var q = c[h].np(f, k);
                q > l && (l = q, n = h)
            }
            0 < n && l > a ? (Nc(c, a, b, n, e), Nc(c, a, n, d, e)) : e.push(f)
        }
    }

    function Oc(c, a) {
        var b = [];
        Nc(c, a, 0, c.length, b);
        0 < c.length && 0 < b.length && !c[c.length - 1].Hc(b[b.length - 1]) && b.push(c[c.length - 1]);
        return b
    }
    var Pc = function() {
        function c() {
            this.la = [];
            if (1 === arguments.length) {
                var a = arguments[0];
                if (a instanceof H) this.la.push(new G(a.x, a.y)), this.la.push(new G(a.right(), a.y)), this.la.push(new G(a.right(), a.bottom())), this.la.push(new G(a.x, a.bottom()));
                else if (a instanceof Array) this.la = a;
                else throw alert("Bad parameter passed to Polygon() constructor."), "Error";
            }
        }
        c.prototype.rv = function(a) {
            var b = this.Ye();
            a = a.Ye();
            for (var d = 0; d < b.length; d++) {
                var e = b[d];
                if (!Lc(a, e.x, e.y)) return !1
            }
            return !0
        };
        c.prototype.transform = function(a) {
            for (var b = 0; b < this.la.length; b++) this.la[b] = a.apply(this.la[b].x, this.la[b].y)
        };
        c.prototype.add = function(a, b) {
            this.la.push(new G(a, b))
        };
        c.prototype.ed = function(a, b, d) {
            void 0 === d && (d = 0);
            return Lc(this.la, a, b) || d && Mc(this.la, a, b, d)
        };
        c.prototype.Ss = function() {
            return H.Wg(this.la)
        };
        c.prototype.clone = function() {
            return new c(this.la.slice(0))
        };
        c.prototype.Hc = function(a) {
            if (this.la.length !== a.la.length) return !1;
            for (var b = 0; b < this.la.length; b++) {
                var d = this.la[b],
                    e = a.la[b];
                if (d.x !== e.x || d.y !== e.y) return !1
            }
            return !0
        };
        c.prototype.Dd = function(a) {
            for (var b = [], d = 0; d < this.la.length; d++) {
                var e = this.la[0 === d ? this.la.length - 1 : d - 1],
                    c = this.la[d],
                    f = this.la[d === this.la.length - 1 ? 0 : d + 1],
                    k = Dc(e.x, e.y, c.x, c.y),
                    l = Dc(f.x, f.y, c.x, c.y);
                b.push({
                    x: c.x + ((c.x - e.x) / k + (c.x - f.x) / l) / Math.sqrt(2) * a,
                    y: c.y + ((c.y - e.y) / k + (c.y - f.y) / l) / Math.sqrt(2) * a
                })
            }
            this.la = b
        };
        c.prototype.ia = function(a) {
            if (!(1 > this.la.length)) {
                a.moveTo(this.la[0].x, this.la[0].y);
                for (var b = 1; b < this.la.length; b++) a.lineTo(this.la[b].x, this.la[b].y);
                a.closePath()
            }
        };
        c.prototype.Ye = function() {
            return this.la
        };
        c.qy = function(a, b) {
            for (var d = 0, e = 0, c = !1, f = [], k = [], l = 0; l < b.length; l++) k.push(0);
            for (;;) {
                var n = 0,
                    q = -1;
                for (l = 0; l < b.length; l++)
                    if (k[l] < b[l].length) {
                        var u = b[l][k[l]];
                        if (0 === l || u < n) {
                            n = u;
                            q = l;
                            var v = 1 - k[l] % 2
                        }
                    }
                if (-1 === q) return f;
                k[q] += 1;
                "intersection" === a ? v ? (e += 1, e === b.length && (d = n)) : (e === b.length && (f.push(d), f.push(n)), --e) : v ? (e += 1, 0 === q ? (c = !0, 1 === e) && (d = n) : c && 2 === e && (f.push(d), f.push(n))) : (c && 1 === e && (f.push(d), f.push(n)), --e, 0 === q && (c = !1), c && 1 === e && (d = n))
            }
        };
        return c
    }();

    function Qc(c, a, b, d, e, h, f, k) {
        b -= c;
        d -= a;
        f -= e;
        k -= h;
        var l = -f * d + b * k;
        if (0 === l) return null;
        e = (f * (a - h) - k * (c - e)) / l;
        return new G(c + e * b, a + e * d)
    }

    function Rc(c, a) {
        function b(a) {
            var b, e;
            var c = [];
            var l = b = 0;
            for (e = a.length; l < e; l++) {
                var n = a[l];
                a[b + 1] && (c[b] = d(n, a[b + 1]));
                b += 1
            }
            return c
        }

        function d(a, b) {
            return new G(a.x + (b.x - a.x) / 2, a.y + (b.y - a.y) / 2)
        }
        return a ? Rc(b(b(function(a) {
            var b, e;
            a = [a[0]].concat(a).concat(a[a.length - 1]);
            var c = [];
            var l = b = 0;
            for (e = a.length; l < e; l++) {
                var n = a[l];
                c[2 * b] = n;
                a[b + 1] && (c[2 * b + 1] = d(n, a[b + 1]));
                b += 1
            }
            return c
        }(c))), a - 1) : c
    }
    (function() {
        function c() {
            this.items = [];
            this.qa = new J
        }
        c.prototype.toString = function() {
            return this.items.join(" ")
        };
        c.prototype.arc = function() {
            throw Error("SvgPathContext.arc is not implemented.");
        };
        c.prototype.arcTo = function() {
            throw Error("SvgPathContext.arcTo is not implemented.");
        };
        c.prototype.moveTo = function(a, b) {
            var d = this.qa.apply(a, b);
            this.items.push("M", d.x, d.y)
        };
        c.prototype.lineTo = function(a, b) {
            var d = this.qa.apply(a, b);
            this.items.push("L", d.x, d.y)
        };
        c.prototype.transform = function(a, b, d, e, c, f) {
            a = new J(a, d, b, e, c, f);
            this.qa = this.qa.multiply(a)
        };
        c.prototype.rect = function() {};
        c.prototype.bezierCurveTo = function(a, b, d, e, c, f) {
            a = this.qa.apply(a, b);
            d = this.qa.apply(d, e);
            c = this.qa.apply(c, f);
            this.items.push("C", a.x, a.y, d.x, d.y, c.x, c.y)
        };
        c.prototype.quadraticCurveTo = function() {
            throw Error("SvgPathContext.quadraticCurveTo is not implemented.");
        };
        c.prototype.beginPath = function() {};
        c.prototype.closePath = function() {
            this.items.push("Z")
        };
        return c
    })();

    function Sc(c, a, b, d, e) {
        if (!(2 > a.length)) {
            void 0 === d && (d = !0);
            void 0 === e && (e = !0);
            var h = a[0].x === a[a.length - 1].x && a[0].y === a[a.length - 1].y,
                f = [],
                k = [],
                l = new G(0, 0),
                n = l,
                q = l,
                u = l,
                v = l,
                w = [];
            b /= 2;
            var y;
            for (y = 1; y < a.length; y++) {
                q = a[y - 1];
                v = a[y];
                u = I(q.x, q.y, v.x, v.y);
                l = new G(u.y, -u.x);
                n = new G(q.x - u.x * b - l.x * b, q.y - u.y * b - l.y * b);
                q = new G(q.x - u.x * b + l.x * b, q.y - u.y * b + l.y * b);
                if (k.length) {
                    var z = k[k.length - 1];
                    var L = w[w.length - 1];
                    n = Qc(z.x, z.y, z.x + L.x, z.y + L.y, n.x, n.y, n.x + u.x, n.y + u.y) || n;
                    z = f[f.length - 1];
                    q = Qc(z.x, z.y, z.x + L.x, z.y + L.y, q.x, q.y, q.x + u.x, q.y + u.y) || q
                }
                k.push(n);
                f.push(q);
                w.push(u)
            }
            h ? (z = k[0], L = w[0], n = Qc(z.x, z.y, z.x + L.x, z.y + L.y, n.x, n.y, n.x + u.x, n.y + u.y) || n, z = f[0], q = Qc(z.x, z.y, z.x + L.x, z.y + L.y, q.x, q.y, q.x + u.x, q.y + u.y) || q, k[0].x = n.x, k[0].y = n.y, f[0].x = q.x, f[0].y = q.y, k.push(n), f.push(q)) : (k.push(new G(v.x + u.x * b - l.x * b, v.y + u.y * b - l.y * b)), f.push(new G(v.x + u.x * b + l.x * b, v.y + u.y * b + l.y * b)));
            if (e) {
                c.moveTo(k[0].x, k[0].y);
                for (y = 1; y < k.length; y++) c.lineTo(k[y].x, k[y].y);
                h && (c.closePath(), c.moveTo(f[f.length - 1].x, f[f.length - 1].y))
            } else d && c.moveTo(f[f.length - 1].x, f[f.length - 1].y);
            if (d) {
                for (y = f.length - 1; 0 <= y; y--) c.lineTo(f[y].x, f[y].y);
                !h && e && c.lineTo(k[0].x, k[0].y)
            }
        }
    }
    (function() {
        function c(a) {
            this.la = a;
            this.n = 0;
            this.nb = new G(0, 0)
        }
        c.prototype.next = function(a) {
            if (0 === this.la.length) return null;
            if (0 === this.n) return this.nb = this.la[0].clone(), this.n += 1, this.nb.clone();
            for (; this.n < this.la.length;) {
                var b = this.nb.Kb(this.la[this.n]);
                if (0 === b) this.n += 1;
                else if (b <= a) a -= b, this.n += 1;
                else return this.nb.x += (this.la[this.n].x - this.nb.x) * a / b, this.nb.y += (this.la[this.n].y - this.nb.y) * a / b, this.nb.clone()
            }
            return null
        };
        return c
    })();
    var Tc = function() {
        function c() {
            this.path = []
        }
        c.prototype.ff = function(a, b) {
            0 < this.path.length && a === this.path[this.path.length - 1].x && b === this.path[this.path.length - 1].y || this.path.push(new G(a, b))
        };
        c.prototype.lm = function() {
            return this.path
        };
        return c
    }();

    function Uc(c, a) {
        c.length > a && (c = c.slice(c.length - a));
        return c
    }
    var Vc = function(c) {
        function a() {
            var a = null !== c && c.apply(this, arguments) || this;
            a.ii = [];
            a.order = 3;
            a.En = 3;
            a.hr = Math.pow(2, a.order);
            a.sampleSize = a.En + 1;
            return a
        }
        __extends(a, c);
        a.prototype.lm = function() {
            return this.ii
        };
        a.prototype.ff = function(a, d) {
            c.prototype.ff.call(this, a, d);
            if (this.path.length < this.sampleSize) this.ii = Rc(this.path, this.order);
            else {
                var b = Uc(Rc(Uc(this.path, this.sampleSize), this.order), this.hr * this.En);
                this.ii = this.ii.slice(0, this.ii.length - this.hr * (this.En - 1)).concat(b)
            }
        };
        return a
    }(Tc);
    var Wc = function() {
        function c(a) {
            this.Mc = a;
            this.Ni = [];
            this.$m = !0;
            this.log = x.create("cloudAddon");
            this.me = a.ja("cloudRadius")
        }
        c.prototype.format = function() {
            var a = this.Mc.nd.Ye();
            this.log("Format cloud; %s points", a.length);
            this.Ni = this.dt(a, this.me)
        };
        c.prototype.dt = function(a, b) {
            var d = [],
                e = 5 / 6 * b * 2,
                c, f = a[a.length - 1];
            for (c = 0; c < a.length; c++) {
                var k = a[c];
                var l = k.x - f.x,
                    n = k.y - f.y,
                    q = Math.sqrt(l * l + n * n);
                l /= q;
                n /= q;
                var u = q / e + .5 | 0;
                1 > u && (u = 1);
                u = q / u;
                for (var v = 0; v + .1 * u < q; v += u) d.push({
                    x: f.x + v * l,
                    y: f.y + v * n,
                    Va: 0,
                    end: 0
                });
                f = k
            }
            k = d[d.length - 1];
            for (c = 0; c < d.length; c++) e = d[c], l = e.x - k.x, n = e.y - k.y, f = .5 * Math.sqrt(l * l + n * n) / b, -1 > f && (f = -1), 1 < f && (f = 1), l = Math.atan2(n, l), f = Math.acos(f), f = [l - f, Math.PI + l + f], k.end = f[0], e.Va = f[1], k = e;
            return d
        };
        c.prototype.ia = function(a) {
            this.log("Drawing cloud with %s circles", this.Ni.length);
            var b = 15 * Math.PI / 180,
                d = this.me;
            a.beginPath();
            for (var e = 0; e < this.Ni.length; e++) {
                var c = this.Ni[e];
                a.arc(c.x, c.y, d, c.Va, c.end + b)
            }
            a.stroke()
        };
        return c
    }();

    function Xc(c) {
        return 0 != (c.Pb & 1)
    }

    function Yc(c) {
        return 0 != (c.Pb & 4)
    }

    function Zc(c) {
        return 5 === (c.Pb & 5) && c.fa
    };
    var $c = x.create("WrappedNode");

    function ad(c, a) {
        var b = {};
        b.ctx = c.ctx;
        b.id = a.id;
        b.type = a.type();
        b.children = new Proxy({}, {
            get: function(b, e) {
                var d = a.rb(e);
                return d instanceof bd ? d.xj(c) : d
            }
        });
        b.props = cd(a.ba, "", function(b, e) {
            a.bw(b, e)
        });
        Object.defineProperty(b, "parent", {
            configurable: !0,
            get: function() {
                return a.parent ? a.parent.xj(c) : null
            },
            set: function(b) {
                $c("Warning; replacing parent property");
                a.parent = b
            }
        });
        Yc(a) && Object.defineProperty(b, "element", {
            configurable: !0,
            get: function() {
                return a.fa
            }
        });
        return b
    }

    function cd(c, a, b) {
        function d(d) {
            if ("string" === typeof d)
                for (var e in c)
                    if (e.startsWith("" + a + d + ".")) return cd(c, "" + a + d + ".", b);
            return null
        }
        void 0 === a && (a = "");
        return new Proxy(c, {
            get: function(b, h) {
                if ("hasOwnProperty" === h) return function(b) {
                    return a + b in c
                };
                if ("string" === typeof h) {
                    var e = d(h);
                    return e ? e : c[a + h]
                }
                return c[h]
            },
            has: function(b, h) {
                if ("string" === typeof h) {
                    var e = d(h);
                    return e ? e : a + h in c
                }
                return b.hasOwnProperty(h)
            },
            set: function(d, h, f) {
                "string" === typeof h ? (c[a + h] = f, b(a + h, f)) : c[h] = f;
                return !0
            }
        })
    };
    var dd = x.create("BaseNode"),
        bd = function() {
            function c(a, b) {
                this.id = a;
                this.aa = b;
                this.Pb = 0;
                this.parent = null;
                this.ba = {};
                this.scope = null
            }
            c.prototype.type = function() {
                return "BaseNode"
            };
            c.prototype.toString = function() {
                return this.type() + ":" + this.id
            };
            c.prototype.bw = function(a, b) {
                this.aa.Ob([this.id], a, b)
            };
            c.prototype.xj = function(a) {
                this.scope || (this.scope = ad(a, this));
                return this.scope
            };
            c.dd = function(a, b) {
                c.types[a] = b
            };
            c.create = function(a, b, d) {
                return a in c.types ? new c.types[a](b, d) : null
            };
            c.prototype.Xa = function() {};
            c.prototype.jj = function(a, b) {
                var d = typeof this.ba[a],
                    e = typeof b;
                d !== e && "string" === e && "number" === d && (dd("Convert property %s to a number.", a), b = parseFloat(b));
                b instanceof Array && (b = b.slice(0));
                return b
            };
            c.prototype.Ic = function() {
                var a = {},
                    b;
                for (b in this.ba) this.ba.hasOwnProperty(b) && (a[b] = this.ja(b));
                return a
            };
            c.prototype.Ue = function(a) {
                for (var b in a) a.hasOwnProperty(b) && this.setProperty(b, a[b])
            };
            c.prototype.Eh = function(a) {
                return a in this.ba
            };
            c.prototype.Fi = function(a) {
                return this.Eh(a)
            };
            c.prototype.setProperty = function(a, b) {
                b = this.jj(a, b);
                this.Fi(a) && (dd("%s:%s set %s=%s", this.id, this.type(), a, b), this.ba[a] = b);
                return b
            };
            c.prototype.ja = function(a) {
                a = this.ba[a];
                a instanceof Array && (a = a.slice(0));
                return a
            };
            c.prototype.Ma = function() {
                return 0
            };
            c.prototype.removeChild = function() {
                throw Error("BaseNode removechild called.");
            };
            c.prototype.Pj = function() {
                throw Error("BaseNode insertChild called.");
            };
            c.prototype.rb = function() {
                throw Error("BaseNode getChild called.");
            };
            c.prototype.Dn = function() {
                throw Error("BaseNode swapChildren called.");
            };
            c.prototype.Ie = function(a) {
                for (var b = 0; b < this.Ma(); b++)
                    if (a === this.rb(b)) return b;
                return -1
            };
            c.types = {};
            return c
        }();
    var ed = function(c) {
        function a(b, d) {
            var e = c.call(this, b, d) || this;
            e.rect = new H(0, 0, 1, 1);
            e.wi = !1;
            e.Ga = new H(0, 0, 1, 1);
            e.bc = 0;
            e.log = x.create("GraphicsNode");
            e.Pb |= 1;
            e.ba.matrix = new J;
            e.ba.layer = "default";
            e.sl(a.sa);
            return e
        }
        __extends(a, c);
        a.prototype.sl = function(a) {
            for (var b in a) a.hasOwnProperty(b) && (this.ba[b] = a[b])
        };
        a.prototype.clip = function() {};
        a.prototype.Xa = function() {};
        a.prototype.Le = function() {
            return !1
        };
        a.prototype.Jj = function() {
            return null
        };
        a.prototype.ej = function() {};
        a.prototype.gq = function() {
            return !1
        };
        a.prototype.Fh = function() {
            return "text" in this.ba
        };
        a.prototype.Vc = function() {
            var a = this.ja("layer");
            return a ? "" + a : "default"
        };
        a.prototype.vm = function() {
            return null !== this.parent && null !== this.parent.parent && "PageNode" !== this.parent.type()
        };
        a.prototype.type = function() {
            return "BaseNode"
        };
        a.prototype.Ka = function() {
            return this.ja("matrix")
        };
        a.prototype.$d = function() {
            return this.Ka().inverse()
        };
        a.prototype.Kg = function(a) {
            this.setProperty("matrix", a)
        };
        a.prototype.jj = function(a, d) {
            d = c.prototype.jj.call(this, a, d);
            "matrix" === a && "string" === typeof d ? d = new J(d) : "opacity" === a && (d = parseFloat(d));
            return d
        };
        a.prototype.Fi = function(a) {
            switch (a) {
                case "customData":
                case "tag":
                case "locked":
                case "lockSize":
                case "lockRotation":
                case "lockPosition":
                case "lockEditMode":
                case "rotationHandles":
                case "lockAspectRatio":
                case "zIndex":
                case "snap":
                case "opacity":
                case "type":
                    return !0
            }
            return "_" === a[0] || this.Eh(a)
        };
        a.prototype.mj = function() {
            var a = new Pc(this.Ga);
            a.transform(this.Ka());
            return a
        };
        a.prototype.Cd = function() {
            return this.ja("zIndex") || 0
        };
        a.prototype.transform = function(a) {
            this.Kg(a.multiply(this.Ka()))
        };
        a.prototype.format = function() {};
        a.prototype.wb = function(a, d) {
            var b = this.$d().apply(a, d);
            return this.hidden() || this.ja("locked") || !this.Ga.ed(b.x, b.y) ? null : this
        };
        a.prototype.Te = function(a) {
            this.wi = a
        };
        a.prototype.hidden = function() {
            return this.wi
        };
        a.prototype.Lg = function() {};
        a.prototype.ek = function() {};
        a.prototype.hk = function() {};
        a.prototype.Zh = function(a) {
            if (a.Zh) {
                var b = {
                    "zwibbler:id": "" + this.id
                };
                if ("tag" in this.ba) {
                    var e = this.ba.tag;
                    "string" !== typeof e && (e = JSON.stringify(e));
                    b["zwibbler:tag"] = e
                }
                a.Zh(b)
            }
        };
        a.prototype.Yh = function(a) {
            a.Yh && a.Yh()
        };
        a.prototype.ia = function(b) {
            b.save();
            this.Zh(b);
            var d = this.ba.matrix;
            b.transform(d.m11, d.m21, d.m12, d.m22, d.Ba, d.Ca);
            "erase" === this.ba.strokeStyle ? b.Pd ? b.strokeStyle = b.Pd : (b.strokeStyle = "#000000", b.globalCompositeOperation = "destination-out") : b.strokeStyle = this.ba.strokeStyle;
            b.fillStyle = this.ba.fillStyle;
            b.lineWidth = this.ba.lineWidth;
            this.ba.shadow && (b.shadowOffsetX = 3, b.shadowOffsetY = 3, b.shadowBlur = 5, b.shadowColor = "rgba(0,0,0,0.5)");
            "opacity" in this.ba && (b.globalAlpha = this.ba.opacity);
            this.cf(b);
            this.Yh(b);
            b.restore();
            a.mo && (b.save(), b.beginPath(), b.lineWidth = 1, b.strokeStyle = "#ff8000", b.rect(this.rect.x, this.rect.y, this.rect.width, this.rect.height), b.stroke(), b.restore())
        };
        a.prototype.up = function(a, d) {
            var b = d ? function(b) {
                a.fillStyle = b;
                a.fill()
            } : function(b) {
                a.strokeStyle = b;
                a.stroke()
            };
            a.Pd ? (a.globalCompositeOperation = "destination-out", --a.lineWidth, b("#000000"), a.globalCompositeOperation = "source-over", a.fillStyle = a.Pd, a.lineWidth += 2, b(a.Pd), --a.lineWidth) : (a.globalCompositeOperation = "destination-out", b("#000000"), a.globalCompositeOperation = "source-over")
        };
        a.prototype.cf = function() {};
        a.prototype.resolve = function() {
            return !1
        };
        a.prototype.fu = function(a, d, e, c) {
            this.sh || (this.sh = {});
            var b = this.sh[a];
            if (!b || b.Ir !== c) {
                b && c === b.Ir || (b = {
                    Ir: c,
                    value: c
                }, this.sh[a] = b);
                a = /url\(([^\)]+)\)/.exec(c);
                var h;
                a && (h = a[1]);
                var l = this;
                h && (b.value = "rgba(0, 0, 0, 0.2)", e.add(this.id, "image", h, null, function(a) {
                    l.log("Got image response.");
                    b.value = d.createPattern(a, "repeat") || "magenta";
                    e.Fg(l.id)
                }))
            }
        };
        a.prototype.Au = function(a) {
            return this.sh && (a = this.sh[a]) ? a.value : "magenta"
        };
        a.prototype.Np = function() {
            return ""
        };
        a.prototype.ge = function() {};
        a.prototype.pj = function() {};
        a.prototype.qj = function() {
            return null
        };
        a.prototype.mr = function() {};
        a.sa = {
            fillStyle: "#cccccc",
            strokeStyle: "#000000",
            lineWidth: 2,
            shadow: !1
        };
        a.mo = !1;
        return a
    }(bd);
    var fd = function() {
        function c() {
            this.text = "";
            this.font = "10px Arial";
            this.Dp = "Arial";
            this.fontSize = 10;
            this.lines = [];
            this.Yn = "top";
            this.Dh = "left";
            this.jq = this.bold = !1;
            this.textDecoration = "";
            this.log = x.create("TextBox");
            this.rect = new H(0, 0, 0, this.fontSize)
        }
        c.prototype.nr = function(a, b, d, e, c) {
            this.Dp = a;
            this.fontSize = b;
            this.bold = d;
            this.jq = e;
            this.textDecoration = c
        };
        c.prototype.Mg = function(a) {
            this.text = a
        };
        c.prototype.hn = function(a, b) {
            switch (a) {
                case "left":
                case "center":
                case "right":
                    this.Dh = a;
                    break;
                case null:
                    break;
                default:
                    this.log("Unknown alignment: %s", a)
            }
            switch (b) {
                case "top":
                case "middle":
                case "bottom":
                    this.Yn = b;
                    break;
                case null:
                    break;
                default:
                    this.log("Unknnown alignment: %s", b)
            }
        };
        c.prototype.format = function(a, b, d) {
            this.font = "" + this.fontSize + 'px "' + this.Dp + '"';
            this.bold && (this.font = "bold " + this.font);
            this.jq && (this.font = "italic " + this.font);
            this.lines.length = 0;
            var e;
            a.font = this.font;
            var c = 0;
            this.rect.width = 0;
            if (0 === b) {
                var f = this.text.split("\n");
                for (e = 0; e < f.length; e++) {
                    var k = f[e];
                    var l = a.measureText(k).width;
                    c += this.fontSize;
                    this.lines.push({
                        x: 0,
                        y: c,
                        width: l,
                        text: k
                    });
                    this.rect.width = Math.max(this.rect.width, l)
                }
            } else {
                k = f = 0;
                var n = !1;
                for (e = 0; e < this.text.length; e++) {
                    var q = this.text.charAt(e);
                    l = a.measureText(this.text.substr(f, e - f + 1)).width;
                    "\n" === q ? n = !0 : l > b ? k ? (e = k, n = !0) : e > f && (--e, n = !0) : " " === q && (k = e);
                    n && (l = " " === this.text.charAt(e) ? a.measureText(this.text.substr(f, e - f)).width : a.measureText(this.text.substr(f, e - f + 1)).width, c += this.fontSize, this.lines.push({
                        x: 0,
                        y: c,
                        width: l,
                        text: this.text.substr(f, e - f + 1)
                    }), f = e + 1, k = 0, n = !1, this.rect.width = Math.max(this.rect.width, l))
                }
                l && (c += this.fontSize, this.lines.push({
                    x: 0,
                    y: c,
                    width: l,
                    text: this.text.substr(f, e - f)
                }), this.rect.width = Math.max(this.rect.width, l))
            }
            this.rect.x = 0;
            this.rect.y = 0;
            this.rect.height = c;
            if ("center" === this.Dh)
                for (e = 0; e < this.lines.length; e++) a = this.lines[e], a.x = this.rect.width / 2 - a.width / 2;
            else if ("right" === this.Dh)
                for (e = 0; e < this.lines.length; e++) a = this.lines[e], a.x = this.rect.width - a.width;
            b && "center" === this.Dh ? this.rect.x = b / 2 - this.rect.width / 2 : b && "right" === this.Dh && (this.rect.x = b - this.rect.width);
            d && "middle" === this.Yn ? this.rect.y = d / 2 - this.rect.height / 2 : d && "bottom" === this.Yn && (this.rect.y = d - this.rect.height)
        };
        c.prototype.ia = function(a, b, d) {
            this.fillText(a, b, d);
            this.qp(a, b, d)
        };
        c.prototype.qp = function(a, b, d) {
            var e;
            if (0 <= this.textDecoration.indexOf("underline")) {
                a.save();
                a.beginPath();
                var c = 1;
                for (e = 0; e < this.lines.length; e++) {
                    var f = this.lines[e];
                    a.moveTo(f.x + b, f.y + d + c);
                    a.lineTo(f.x + b + f.width, f.y + d + c)
                }
                a.strokeStyle = a.fillStyle;
                a.lineWidth = 1;
                a.stroke();
                a.beginPath();
                a.restore()
            }
            if (0 <= this.textDecoration.indexOf("line-through")) {
                a.save();
                a.beginPath();
                c = .25 * -this.fontSize;
                for (e = 0; e < this.lines.length; e++) f = this.lines[e], a.moveTo(f.x + b, f.y + d + c), a.lineTo(f.x + b + f.width, f.y + d + c);
                a.strokeStyle = a.fillStyle;
                a.lineWidth = 1;
                a.stroke();
                a.restore()
            }
        };
        c.prototype.fillText = function(a, b, d) {
            a.textBaseline = "alphabetic";
            a.font = this.font;
            for (var e = 0; e < this.lines.length; e++) {
                var c = this.lines[e];
                a.fillText(c.text, this.rect.x + c.x + b, this.rect.y + c.y + d)
            }
        };
        c.prototype.strokeText = function(a, b, d) {
            a.textBaseline = "alphabetic";
            a.font = this.font;
            for (var e = 0; e < this.lines.length; e++) {
                var c = this.lines[e];
                a.strokeText(c.text, this.rect.x + c.x + b, this.rect.y + c.y + d)
            }
        };
        return c
    }();
    var gd = function(c) {
        function a(b, d) {
            var e = c.call(this, b, d) || this;
            e.gb = new fd;
            e.pm = 0;
            e.border = {
                lineWidth: 0,
                lf: "#000000"
            };
            e.log = x.create("TEXT", !0);
            e.sl(a.bs);
            e.ba.text = "lorum ipsum dolor";
            return e
        }
        __extends(a, c);
        a.prototype.type = function() {
            return "TextNode"
        };
        a.prototype.setProperty = function(a, d) {
            this.ba[a] = this.jj(a, d);
            "textFillStyle" === a ? this.ba.fillStyle = d : "fillStyle" === a && (this.ba.textFillStyle = d)
        };
        a.prototype.format = function(a) {
            this.gb.nr(this.ba.fontName, this.ba.fontSize, this.ba.bold, this.ba.italic, this.ba.textDecoration);
            var b = this.ba.text;
            b.length && 10 === b.charCodeAt(b.length - 1) && (b = b.substr(0, b.length - 1));
            this.gb.Mg(b);
            var e = this.ba.matrix;
            b = e.apply(0, 0);
            e = e.apply(1, 0);
            b = b.Kb(e);
            e = this.ja("wrap");
            var c = !1 !== this.ja("scaleFont");
            this.gb.hn(this.ba.textAlign, "top");
            e ? (e = this.ba.baseWidth, void 0 === e && (this.gb.format(a, 0, 0), e = Math.max(this.gb.rect.width, 10), 500 < e && (e = 500), this.ba.baseWidth = e, this.log("Formatting text for first time; baseWidth=%s", e)), b = Math.ceil(b * e), this.gb.format(a, b, 0), a = this.gb.rect.height, this.Ga = new H(0, 0, e, a)) : c ? (this.gb.format(a, 0, 0), b = this.gb.rect.width, a = this.gb.rect.height, this.Ga = new H(0, -(0 + this.ja("fontSize")), b, a)) : (this.gb.format(a, 0, 0), b = this.gb.rect.width, a = this.gb.rect.height, this.Ga = new H(0, 0, b, a));
            a = new Pc(this.Ga);
            a.transform(this.Ka());
            this.rect = a.Ss();
            this.pm = this.rect.height;
            this.rect.height += .3 * this.ba.fontSize;
            a = this.ja("lineWidth") + 0;
            this.rect.Dd(a, a);
            this.border = this.ba.border ? this.mw(this.ba.border) : {
                lineWidth: 0,
                lf: "#000000"
            }
        };
        a.prototype.mw = function(a) {
            var b = {
                lineWidth: 0,
                lf: "#000000"
            };
            a = a.split(" ");
            for (var e = 0; e < a.length; e++) {
                var c = parseFloat(a[e]);
                if (isNaN(c)) {
                    if (c = r.lj(a[e])) b.lf = c.toString()
                } else b.lineWidth = c
            }
            return b
        };
        a.prototype.Ka = function() {
            return !1 === this.ja("scaleFont") ? c.prototype.Ka.call(this).Fr() : c.prototype.Ka.call(this)
        };
        a.prototype.ia = function(a) {
            if (0 !== this.ba.text.length) {
                var b = .3 * this.ba.fontSize;
                a.save();
                this.Zh(a);
                "opacity" in this.ba && (a.globalAlpha = this.ba.opacity);
                var e = this.ba.background;
                if (e || this.border.lineWidth) a.save(),
                    this.Ka().Yf(a), e && (a.fillStyle = e, a.fillRect(this.Ga.x, this.Ga.y, this.Ga.width, this.Ga.height + b)), this.border.lineWidth && (a.beginPath(), a.strokeStyle = this.border.lf, a.lineWidth = this.border.lineWidth, a.rect(this.Ga.x, this.Ga.y, this.Ga.width, this.Ga.height + b), a.stroke()), a.restore();
                this.ja("wrap") ? this.Ka().Fr().Yf(a) : this.Ka().Yf(a);
                a.strokeStyle = this.ba.strokeStyle;
                a.fillStyle = this.ba.fillStyle;
                a.lineWidth = this.ba.lineWidth;
                b = 0;
                e = this.Ka().jc();
                e = this.Ga.height * e.y;
                if (this.ba.wrap || !1 === this.ja("scaleFont")) switch (this.log("Available: %s rect: %s", e, this.gb.rect), this.ba.verticalAlign) {
                    case "bottom":
                        b += e - this.gb.rect.height;
                        break;
                    case "middle":
                        b += (e - this.gb.rect.height) / 2
                } else b = -(0 + this.ja("fontSize"));
                this.ba.shadow && (a.shadowOffsetX = 3, a.shadowOffsetY = 3, a.shadowBlur = 5, a.shadowColor = "rgba(0,0,0,0.5)");
                0 < this.ba.lineWidth && this.gb.strokeText(a, 0, b);
                this.gb.fillText(a, 0, b);
                this.gb.qp(a, 0, b);
                this.Yh(a);
                a.restore();
                ed.mo && (a.save(), a.beginPath(), a.lineWidth = 1, a.strokeStyle = "#ff8000", a.rect(this.rect.x, this.rect.y, this.rect.width, this.rect.height), a.stroke(), a.restore())
            }
        };
        a.bs = {
            textFillStyle: "#000000",
            fontName: "Arial",
            fontSize: 20,
            lineWidth: 0,
            fillStyle: "#000000",
            wrap: !1,
            textAlign: "left",
            bold: !1,
            italic: !1,
            background: "rgba(0,0,0,0.0)",
            textDecoration: ""
        };
        return a
    }(ed);
    ed.dd("TextNode", gd);
    var hd = function() {
            function c(a, b) {
                this.oa = a;
                this.ha = b;
                this.Ax = !0;
                this.log = x.create("MoveSegment")
            }
            c.prototype.ia = function(a) {
                a.moveTo(this.ha.x, this.ha.y)
            };
            c.prototype.re = function() {
                return this.Fc()
            };
            c.prototype.Fc = function() {
                return {
                    x: 1,
                    y: 0
                }
            };
            return c
        }(),
        id = function() {
            function c(a, b, d, e, c) {
                this.oa = a;
                this.ha = b;
                this.tn = e;
                this.ne = c;
                this.log = x.create("LineSegment");
                this.Sf = 0;
                this.Da = new G(0, 0);
                this.La = new G(0, 0);
                this.length = 0;
                this.from = new G(0, 0);
                this.ha = b;
                this.oa = a;
                this.ne = c;
                this.tn = e;
                d.next();
                this.nk = d.next();
                this.pk = d.next();
                this.moveTo = this.Tf = null;
                this.format()
            }
            c.prototype.format = function() {
                var a = Dc(this.oa.ha.x, this.oa.ha.y, this.ha.x, this.ha.y);
                this.Sf = this.length = a;
                var b = this.oa.ha.clone();
                this.oa instanceof c && this.ne && (this.ne = Math.min(this.ne, a / 2, this.oa.length / 2), a = I(this.oa.ha.x, this.oa.ha.y, this.ha.x, this.ha.y), b.x += a.x * this.ne, b.y += a.y * this.ne, this.oa.vx(this.ne), this.Sf -= this.ne);
                this.from = b;
                null === this.Tf && (this.Tf = this.ha);
                a = this.Sf / 10 * this.tn;
                10 < a && (a = 10);
                var d = b.x,
                    e = b.y,
                    h = this.ha.x,
                    f = this.ha.y;
                d += a;
                e += a;
                this.Da = new G(d + this.nk * (h + a - d), e + this.nk * (f + a - e));
                d = b.x - a;
                h = this.ha.x - a;
                e = b.y - a;
                f = this.ha.y - a;
                this.La = new G(d + this.pk * (h - d), e + this.pk * (f - e))
            };
            c.prototype.vx = function(a) {
                var b = I(this.from.x, this.from.y, this.ha.x, this.ha.y),
                    d = this.ha.clone();
                d.x -= b.x * a;
                d.y -= b.y * a;
                this.Tf = d;
                this.Sf -= a;
                a = this.Sf / 10 * this.tn;
                10 < a && (a = 10);
                b = this.from.x;
                var e = this.from.y,
                    c = d.x,
                    f = d.y;
                b += a;
                e += a;
                this.Da = new G(b + this.nk * (c + a - b), e + this.nk * (f + a - e));
                this.log("RECALC ctrl1=%s", this.Da);
                b = this.from.x - a;
                c = d.x - a;
                e = this.from.y - a;
                f = d.y - a;
                this.La = new G(b + this.pk * (c - b), e + this.pk * (f - e))
            };
            c.prototype.gi = function(a) {
                this.oa = a;
                this.format();
                this.oa instanceof c && (this.moveTo = this.oa.Tf)
            };
            c.prototype.ia = function(a) {
                null !== this.Tf && (this.ne && (this.moveTo && a.moveTo(this.moveTo.x, this.moveTo.y), a.quadraticCurveTo(this.oa.ha.x, this.oa.ha.y, this.from.x, this.from.y)), a.bezierCurveTo(this.Da.x, this.Da.y, this.La.x, this.La.y, this.Tf.x, this.Tf.y))
            };
            c.prototype.re = function() {
                return this.oa ? I(this.oa.ha.x, this.oa.ha.y, this.Da.x, this.Da.y) : this.Fc()
            };
            c.prototype.Fc = function() {
                return I(this.La.x, this.La.y, this.ha.x, this.ha.y)
            };
            return c
        }(),
        jd = function() {
            function c(a, b, d) {
                this.un = d;
                this.ha = b;
                this.oa = a;
                this.un = d;
                var e = Dc(a.ha.x, a.ha.y, b.x, b.y);
                e || (e = 1);
                var c = (b.x - a.ha.x) / e,
                    f = (b.y - a.ha.y) / e;
                this.La = new G(b.x - e * d * c, b.y - e * d * f);
                if ((b = a.La) && a.oa) {
                    var k = I(a.oa.ha.x, a.oa.ha.y, a.ha.x, a.ha.y),
                        l = Dc(a.oa.ha.x, a.oa.ha.y, a.ha.x, a.ha.y);
                    c = .5 * (c + k.x);
                    f = .5 * (f + k.y);
                    b.x = a.ha.x - l * d * c;
                    b.y = a.ha.y - l * d * f
                }
                this.Da = new G(a.ha.x + e * d * c, a.ha.y + e * d * f);
                this.length = e
            }
            c.prototype.gi = function(a) {
                this.oa = a;
                var b = a.La,
                    d = (this.ha.x - a.ha.x) / this.length,
                    e = (this.ha.y - a.ha.y) / this.length,
                    c = this.un;
                if (b && a.oa) {
                    var f = I(a.oa.ha.x, a.oa.ha.y, a.ha.x, a.ha.y),
                        k = Dc(a.oa.ha.x, a.oa.ha.y, a.ha.x, a.ha.y);
                    d = .5 * (d + f.x);
                    e = .5 * (e + f.y);
                    b.x = a.ha.x - k * c * d;
                    b.y = a.ha.y - k * c * e
                }
                this.Da = new G(a.ha.x + this.length * c * d, a.ha.y + this.length * c * e)
            };
            c.prototype.ia = function(a) {
                a.bezierCurveTo(this.Da.x, this.Da.y, this.La.x, this.La.y, this.ha.x, this.ha.y)
            };
            c.prototype.re = function() {
                return this.oa ? I(this.oa.ha.x, this.oa.ha.y, this.Da.x, this.Da.y) : {
                    x: 1,
                    y: 0
                }
            };
            c.prototype.Fc = function() {
                return 0 < this.un ? I(this.La.x, this.La.y, this.ha.x, this.ha.y) : I(this.oa.ha.x, this.oa.ha.y, this.ha.x, this.ha.y)
            };
            return c
        }(),
        kd = function() {
            function c(a, b, d) {
                this.oa = a;
                this.control = b;
                this.ha = d
            }
            c.prototype.ia = function(a) {
                a.quadraticCurveTo(this.control.x, this.control.y, this.ha.x, this.ha.y)
            };
            c.prototype.re = function() {
                return this.oa ? I(this.oa.ha.x, this.oa.ha.y, this.control.x, this.control.y) : {
                    x: 1,
                    y: 0
                }
            };
            c.prototype.Fc = function() {
                return I(this.control.x, this.control.y, this.ha.x, this.ha.y)
            };
            return c
        }(),
        ld = function() {
            function c(a, b, d, e) {
                this.oa = a;
                this.control = b;
                this.ha = d;
                this.me = e
            }
            c.prototype.ia = function(a) {
                a.arcTo(this.control.x, this.control.y, this.ha.x, this.ha.y, this.me)
            };
            c.prototype.re = function() {
                return {
                    x: 1,
                    y: 0
                }
            };
            c.prototype.Fc = function() {
                return I(0, 0, 1, 0)
            };
            return c
        }(),
        md = function() {
            function c(a, b, d, e, c, f, k) {
                this.oa = a;
                this.ud = b;
                this.ha = d;
                this.me = e;
                this.xn = c;
                this.Kt = f;
                this.pt = k
            }
            c.prototype.ia = function(a) {
                a.arc(this.ud.x, this.ud.y, this.me, this.xn, this.Kt, 0 !== this.pt)
            };
            c.prototype.re = function() {
                return {
                    x: 1,
                    y: 0
                }
            };
            c.prototype.Fc = function() {
                return I(0, 0, 1, 0)
            };
            return c
        }(),
        nd = function() {
            function c(a, b, d, e) {
                this.Da = b;
                this.La = d;
                this.Da = b;
                this.La = d;
                this.ha = e;
                this.oa = a
            }
            c.prototype.ia = function(a) {
                a.bezierCurveTo(this.Da.x, this.Da.y, this.La.x, this.La.y, this.ha.x, this.ha.y)
            };
            c.prototype.re = function() {
                return this.oa ? I(this.oa.ha.x, this.oa.ha.y, this.Da.x, this.Da.y) : {
                    x: 1,
                    y: 0
                }
            };
            c.prototype.Fc = function() {
                return I(this.La.x, this.La.y, this.ha.x, this.ha.y)
            };
            return c
        }(),
        od = function() {
            function c(a, b, d, e) {
                this.oa = a;
                this.Da = b;
                this.La = d;
                this.ha = e
            }
            c.prototype.ia = function(a) {
                if (this.oa) {
                    var b = [];
                    this.oa.La && b.push(this.oa.La);
                    this.Da && b.push(this.Da);
                    2 === b.length ? a.bezierCurveTo(b[0].x, b[0].y, b[1].x, b[1].y, this.ha.x, this.ha.y) : 1 === b.length && a.quadraticCurveTo(b[0].x, b[0].y, this.ha.x, this.ha.y)
                }
            };
            c.prototype.gi = function(a) {
                this.oa = a
            };
            c.prototype.re = function() {
                return this.oa && this.oa.La ? I(this.oa.ha.x, this.oa.ha.y, this.Da.x, this.Da.y) : {
                    x: 1,
                    y: 0
                }
            };
            c.prototype.Fc = function() {
                return this.Da ? I(this.Da.x, this.Da.y, this.ha.x, this.ha.y) : {
                    x: 1,
                    y: 0
                }
            };
            return c
        }(),
        pd = function() {
            function c(a, b, d, e, c) {
                this.oa = a;
                this.mh = b;
                this.ha = d;
                this.log = x.create("SEGMENT");
                this.oa = a;
                this.mh = b;
                c *= 2;
                var h = 2 * e.next() - 1;
                e.next();
                e = this.oa.Fc();
                if (!this.oa.Ax && e) {
                    var k = Dc(a.ha.x, a.ha.y, b.x, b.y);
                    this.Da = new G(a.ha.x + .5522847498 * e.x * k, a.ha.y + .5522847498 * e.y * k)
                } else this.Da = new G(a.ha.x + .5522847498 * (b.x - a.ha.x), a.ha.y + .5522847498 * (b.y - a.ha.y));
                this.La = new G(d.x - .5522847498 * (d.x - b.x) * (1 - h * c), d.y - .5522847498 * (d.y - b.y) * (1 - h * c));
                this.ha = d
            }
            c.prototype.gi = function(a) {
                this.oa = a;
                var b = this.oa.Fc();
                if (b) {
                    var d = Dc(a.ha.x, a.ha.y, this.mh.x, this.mh.y);
                    this.Da = new G(a.ha.x + .5522847498 * b.x * d, a.ha.y + .5522847498 * b.y * d)
                } else this.Da = new G(a.ha.x + .5522847498 * (this.mh.x - this.oa.ha.x), a.ha.y + .5522847498 * (this.mh.y - this.oa.ha.y))
            };
            c.prototype.ia = function(a) {
                a.bezierCurveTo(this.Da.x, this.Da.y, this.La.x, this.La.y, this.ha.x, this.ha.y)
            };
            c.prototype.re = function() {
                return this.oa ? I(this.oa.ha.x, this.oa.ha.y, this.Da.x, this.Da.y) : {
                    x: 1,
                    y: 0
                }
            };
            c.prototype.Fc = function() {
                return I(this.La.x, this.La.y, this.ha.x, this.ha.y)
            };
            return c
        }();
    var qd = function() {
        function c(a) {
            this.Kh = this.Jh = 0;
            if ("string" === typeof a) {
                for (; 8 > a.length;) a += a;
                for (var b = 16777619, d = 0; d < a.length; d++) b = (16777619 * b ^ a.charCodeAt(d)) & 4294967295;
                a = b
            }
            this.gr = a;
            this.reset()
        }
        c.prototype.reset = function() {
            this.Kh = this.Jh = this.gr
        };
        c.prototype.next = function() {
            this.Kh = 36969 * (this.Kh & 65535) + (this.Kh >> 16);
            this.Jh = 18E3 * (this.Jh & 65535) + (this.Jh >> 16);
            return ((this.Kh << 16) + this.Jh) / 4294967295 / 2 + .5
        };
        return c
    }();
    var rd = function() {
            function c(a) {
                this.la = a;
                this.n = 0;
                this.nb = new G(0, 0)
            }
            c.prototype.next = function(a) {
                if (0 === this.la.length) return null;
                if (0 === this.n) return this.nb = this.la[0].clone(), this.n += 1, this.nb.clone();
                for (; this.n < this.la.length;) {
                    var b = this.nb.Kb(this.la[this.n]);
                    if (0 === b) this.n += 1;
                    else if (b <= a) a -= b, this.n += 1;
                    else return this.nb.x += (this.la[this.n].x - this.nb.x) * a / b, this.nb.y += (this.la[this.n].y - this.nb.y) * a / b, this.nb.clone()
                }
                return null
            };
            return c
        }(),
        sd = function() {
            function c(a) {
                this.Mc = a;
                this.$m = !0;
                this.la = [];
                this.log = x.create("WaveAddon");
                this.me = a.ja("waveRadius")
            }
            c.prototype.format = function() {
                var a = this.Mc.vl(!1).Kn(M.Xk).Ye();
                this.log("Format cloud; %s points", a.length);
                this.la = this.gy(a, this.me)
            };
            c.prototype.gy = function(a, b) {
                var d = new rd(a),
                    e = 1,
                    c = [];
                if (2 > a.length) return c;
                var f = 0;
                for (var k = 1; k < a.length; k++) f += Dc(a[k - 1].x, a[k - 1].y, a[k].x, a[k].y);
                b = f / Math.round(f / (2 * b) + .5) / 2;
                for (f = [];;) {
                    k = d.next(2 * b);
                    if (!k) break;
                    f.push(k)
                }
                f.push(a[a.length - 1]);
                var l = f[0];
                c.push(l);
                for (d = 1; d < f.length; d++) {
                    k = f[d];
                    var n = I(l.x, l.y, k.x, k.y);
                    var q = b,
                        u = new G(n.y * e, -1 * n.x * e);
                    l = new G(l.x + (n.x + u.x) * q, l.y + (n.y + u.y) * q);
                    c.push(l);
                    c.push(k);
                    e *= -1;
                    l = k
                }
                for (d = 2; d < c.length - 1; d += 2) e = c[d - 1], f = c[d + 1], c[d].x = e.x + (f.x - e.x) / 2, c[d].y = e.y + (f.y - e.y) / 2;
                return c
            };
            c.prototype.ia = function(a) {
                a.beginPath();
                a.moveTo(this.la[0].x, this.la[0].y);
                for (var b = 1; b < this.la.length - 1; b += 2) a.quadraticCurveTo(this.la[b].x, this.la[b].y, this.la[b + 1].x, this.la[b + 1].y)
            };
            return c
        }();
    var M = function(c) {
        function a(b, d) {
            var e = c.call(this, b, d) || this;
            e.ta = [];
            e.gg = 0;
            e.qd = [];
            e.vn = [];
            e.Cr = !1;
            e.inverse = new J;
            e.origin = new G(0, 0);
            e.qc = [];
            e.nd = new K;
            e.Xp = !1;
            e.backgroundImage = null;
            e.log = x.create("PATHNODE");
            e.log("New PathNode Created");
            e.Gb = new gd("", d);
            e.Gb.setProperty("text", e.ba.text);
            e.sl(a.sa);
            e.ba.closed = !1;
            e.ba.commands = [];
            e.ba.seed = 0;
            return e
        }
        __extends(a, c);
        a.prototype.moveTo = function(b, d) {
            var e = this.ba.commands;
            e.push(a.$f);
            e.push(b);
            e.push(d)
        };
        a.prototype.Qs = function(b, d, e, c, f, k) {
            var h = this.ba.commands;
            h.push(a.Vg);
            h.push(f);
            h.push(k);
            h.push(b);
            h.push(d);
            h.push(e);
            h.push(c)
        };
        a.prototype.type = function() {
            return "PathNode"
        };
        a.prototype.Fh = function() {
            return !0
        };
        a.prototype.setProperty = function(a, d) {
            c.prototype.setProperty.call(this, a, d);
            switch (a) {
                case "bold":
                case "fontName":
                case "fontSize":
                case "italic":
                case "text":
                case "textAlign":
                case "textDecoration":
                case "wrap":
                    this.ba[a] = d;
                    this.Gb.setProperty(a, d);
                    break;
                case "textFillStyle":
                    this.Gb.setProperty("fillStyle", d);
                    this.ba[a] = d;
                    break;
                case "textBackground":
                    this.Gb.setProperty("background", d);
                    this.ba[a] = d;
                    break;
                case "cloudRadius":
                case "waveRadius":
                case "doubleLine":
                case "doubleLineDashSide":
                case "spotHighlight":
                case "verticalAlign":
                    this.ba[a] = d;
                    break;
                case "backgroundImage":
                    this.ba[a] = d, this.backgroundImage = null
            }
        };
        a.prototype.pj = function(b) {
            for (var d = 0, e = this.ba.commands, c = b / 3 | 0, f = 0; f < c; f++) d += a.Za[e[d]] + 1;
            f = b % 3 * 2 + 1;
            c = e[d + f];
            d = e[d + f + 1];
            this.log("getEditHandle(%s) = (%s, %s)", b, c, d);
            this.Ka().apply(c, d)
        };
        a.prototype.ge = function(b, d, e) {
            for (var c = 0, f = this.ba.commands, k = b / 3 | 0, l = 0; l < k; l++) c += a.Za[f[c]] + 1;
            k = this.inverse.apply(d, e);
            l = b % 3 * 2 + 1;
            f[c + l] = k.x;
            f[c + l + 1] = k.y;
            if (0 === b && this.ba.closed) {
                for (b = null; c < f.length;) k = a.Za[f[c]], 2 <= k && (b = c), c += k + 1;
                b && (c = b, k = this.inverse.apply(d, e), f[c + 1] = k.x, f[c + 2] = k.y)
            }
        };
        a.prototype.Np = function() {
            return "commands"
        };
        a.prototype.Fw = function(b) {
            for (var d = this.ba.commands, e = 0, c = 0; c < b / 3; c++) e += a.Za[d[e]] + 1;
            d.splice(e, a.Za[d[e]] + 1)
        };
        a.prototype.ju = function() {
            return this.ja("arrowXOffset") || this.ja("arrowSize")
        };
        a.prototype.format = function(b, d) {
            var e = this,
                c = null;
            this.ta.length = 0;
            this.inverse = this.ba.matrix.inverse();
            var f = new G(0, 0),
                k = this.ba.commands,
                l = null,
                n = this.ba.matrix,
                q = new qd(this.ba.seed);
            this.vn.length = 0;
            for (var u = null, v = null, w = 0; w < k.length;) {
                switch (k[w++]) {
                    case a.$f:
                        f = n.apply(k[w++], k[w++]);
                        v = new hd(l, f);
                        this.ta.push(v);
                        null === c && (c = f);
                        this.vn.push(f);
                        u = null;
                        break;
                    case a.we:
                        l && (f = n.apply(k[w++], k[w++]), this.ta.push(new id(l, f, q, this.ba.sloppiness, this.ba.roundRadius)), this.vn.push(f));
                        break;
                    case a.ag:
                        if (l) {
                            f = n.apply(k[w++], k[w++]);
                            var y = n.apply(k[w++], k[w++]);
                            this.ta.push(new kd(l, y, f))
                        }
                        break;
                    case a.Wk:
                        if (l) {
                            f = n.apply(k[w++], k[w++]);
                            y = n.apply(k[w++], k[w++]);
                            var z = k[w++];
                            this.ta.push(new ld(l, y, f, z))
                        }
                        break;
                    case a.Vk:
                        if (l) {
                            f = n.apply(k[w++], k[w++]);
                            y = n.apply(k[w++], k[w++]);
                            z = k[w++];
                            var L = k[w++],
                                R = k[w++],
                                E = k[w++];
                            this.ta.push(new md(l, y, f, z, L, R, E))
                        }
                        break;
                    case a.Vg:
                        l && (f = n.apply(k[w++], k[w++]), z = n.apply(k[w++], k[w++]), y = n.apply(k[w++], k[w++]), this.ta.push(new nd(l, z, y, f)));
                        break;
                    case a.so:
                        l && (f = n.apply(k[w++], k[w++]), z = n.apply(k[w++], k[w++]), y = n.apply(k[w++], k[w++]), this.ta.push(new od(l, z, y, f)));
                        break;
                    case a.ri:
                        l && (f = n.apply(k[w++], k[w++]), this.ta.push(new jd(l, f, this.ba.smoothness)));
                        break;
                    case a.Yk:
                        l && (f = n.apply(k[w++], k[w++]), z = n.apply(k[w++], k[w++]), this.ta.push(new pd(l, z, f, q, this.ba.sloppiness)));
                        break;
                    case a.zc:
                        this.ba.closed = !0;
                        u && l && u !== l && u.gi && v && (u.gi(l), l.ha = v.ha);
                        break;
                    default:
                        w++
                }
                l = this.ta[this.ta.length - 1];
                null !== u || l instanceof hd || (u = l)
            }
            this.origin = c || new G(0, 0);
            this.gg = this.ta.length;
            this.cu(q);
            this.rect.x = this.origin.x;
            this.rect.y = this.origin.y;
            this.rect.width = 0;
            this.rect.height = 0;
            c = this.ba.dashes.split(",");
            this.qc = [];
            for (w = 0; w < c.length; w++) f = parseFloat(c[w]), isNaN(f) || this.qc.push(f);
            c = this.qc.length ? a.Xk : a.Nr;
            this.nd = this.vl(!0).Kn(c);
            w = 0 + this.ja("shapeWidth");
            0 < w && (this.nd = this.nt(this.nd, w));
            this.rect = this.nd.$o(c);
            w = this.rect.width - 2 * (this.ba.lineWidth / 2 + 1);
            f = this.ba.lineWidth;
            k = this.nd.clone();
            k.transform(this.$d());
            this.Ga = k.$o(c);
            c = this.Ka().jc();
            this.Ga.Dd(Math.ceil(f / c.x), Math.ceil(f / c.y));
            this.rect.Dd(f + 1, f + 1);
            8 > this.rect.width && (this.rect.x += this.rect.width / 2 - 4, this.rect.width = 8);
            8 > this.rect.height && (this.rect.y += this.rect.height / 2 - 4, this.rect.height = 8);
            if ("" !== this.ba.text) {
                c = this.rect.ud();
                this.Gb.setProperty("textAlign", this.ba.textAlign || "center");
                this.Gb.setProperty("baseWidth", w);
                this.Gb.format(b, d);
                w = c.x - this.Gb.rect.x - this.Gb.rect.width / 2;
                f = 0;
                switch (this.ba.verticalAlign) {
                    default:
                        case "middle":
                        f = c.y - this.Gb.rect.y - this.Gb.pm / 2;
                    break;
                    case "top":
                            f = this.rect.y - this.Gb.rect.y;
                        break;
                    case "bottom":
                            f = this.rect.bottom() - this.Gb.pm - this.Gb.rect.y
                }
                this.Gb.transform(new Fc(w, f));
                this.Gb.format(b, d)
            }
            this.Cr = 0 === r.Yd(this.ba.fillStyle).values[3] && !this.backgroundImage;
            this.qd.length = 0;
            0 < this.ba.cloudRadius ? this.qd.push(new Wc(this)) : 0 < this.ba.waveRadius ? this.qd.push(new sd(this)) : this.ba.doubleLine && this.qd.push(new td(this));
            for (w = 0; w < this.qd.length; w++) this.qd[w].format(b);
            (w = this.ja("backgroundImage")) && null === this.backgroundImage && d.add(this.id, "image", w, null, function(a) {
                e.backgroundImage = a;
                d.Fg(e.id)
            })
        };
        a.prototype.vj = function() {
            return this.nd
        };
        a.prototype.cu = function(a) {
            function b(b, d) {
                b = b.clone();
                l && (b.x += d.x * f * .5, b.y += d.y * f * .5);
                var h = b.x - d.x * f;
                var n = b.y - d.y * f;
                var q = h + d.y * c / 2;
                var u = n - d.x * c / 2;
                h += -d.y * c / 2;
                n += d.x * c / 2;
                e.ta.push(new hd(e.ta[e.ta.length - 1], new G(h, n)));
                e.ta.push(new jd(e.ta[e.ta.length - 1], b, k));
                e.ta.push(new jd(e.ta[e.ta.length - 1], new G(q, u), k));
                "solid" === e.ba.arrowStyle && e.ta.push(new id(e.ta[e.ta.length - 1], new G(h, n), a, e.ba.smoothness, 0))
            }
            if (this.Xp = 0 < this.ba.arrowSize && !this.ba.closed && 0 < this.ta.length) {
                var e = this,
                    c = this.ba.arrowSize,
                    f = this.ba.arrowXOffset,
                    k = this.ba.smoothness,
                    l = this.ba.doubleLine;
                null === f && (f = c);
                var n = this.ta[this.ta.length - 1];
                b(n.ha, n.Fc());
                this.ba.doubleArrow && b(this.ta[0].ha, Ec(this.ta[1].re()))
            }
        };
        a.prototype.close = function() {
            this.ba.commands.push(a.zc)
        };
        a.prototype.Ks = function() {
            var a = this.ta[this.ta.length - 1];
            8 >= Dc(a.ha.x, a.ha.y, this.origin.x, this.origin.y) && this.close()
        };
        a.prototype.nt = function(a, d) {
            this.log("ConvertToRects: width=%s", d);
            for (var b = 0, c = a.da, f = 0, k = 0, l, n, q = new K; b < c.length;) {
                this.log("cmd %s %s %s", c[b], c[b + 1], c[b + 2]);
                switch (c[b]) {
                    case K.Bc:
                        f = c[b + 1];
                        k = c[b + 2];
                        break;
                    case K.Ac:
                        l = c[b + 1];
                        n = c[b + 2];
                        this.log("(%s,%s-%s,%s)", f, k, l, n);
                        if (0 < Dc(f, k, l, n)) {
                            var u = I(f, k, l, n),
                                v = u.y * d / 2;
                            u = -u.x * d / 2;
                            q.moveTo(f + v, k + u);
                            q.lineTo(l + v, n + u);
                            q.lineTo(l - v, n - u);
                            q.lineTo(f - v, k - u);
                            q.closePath()
                        }
                        f = l;
                        k = n
                }
                b += K.Cc[c[b]]
            }
            return q
        };
        a.prototype.clip = function(a) {
            if (this.ba.closed) {
                var b = new K;
                this.log("Clipping to a path");
                for (var e = 0; e < this.ta.length; e++) this.ta[e].ia(b);
                b.closePath();
                0 > b.eh() && (b = b.Kw());
                b.ia(a)
            }
        };
        a.prototype.ia = function(a) {
            this.ba.spotHighlight ? this.log("Not drawing node %s due to spothighlight", this.id) : c.prototype.ia.call(this, a)
        };
        a.prototype.cf = function(a) {
            var b = this.inverse;
            a.save();
            a.lineJoin = "round";
            a.transform(b.m11, b.m21, b.m12, b.m22, b.Ba, b.Ca);
            a.beginPath();
            a.lineCap = "round";
            b = !0;
            var e;
            for (e = 0; e < this.qd.length; e++) this.qd[e].$m && (b = !1);
            if (b)
                for (e = 0; e < this.ta.length; e++) this.ta[e].ia(a);
            for (e = 0; e < this.qd.length; e++) this.qd[e].ia(a);
            if (!b && 0 < this.ba.arrowSize)
                for (e = this.gg; e < this.ta.length; e++) this.ta[e].ia(a);
            if (this.ba.closed) {
                a.closePath();
                if (this.backgroundImage) {
                    a.fillStyle = a.createPattern(this.backgroundImage, "no-repeat") || "magenta";
                    e = Math.max(this.rect.width / this.backgroundImage.naturalWidth, this.rect.height / this.backgroundImage.naturalHeight);
                    var c = this.rect.width - this.backgroundImage.naturalWidth * e,
                        f = this.rect.height - this.backgroundImage.naturalHeight * e;
                    a.translate(this.rect.x + c / 2, this.rect.y + f / 2);
                    a.scale(e, e);
                    a.fill();
                    a.scale(1 / e, 1 / e);
                    a.translate(-this.rect.x - c / 2, -this.rect.y - f / 2)
                } else a.fill();
                a.shadowColor = "rgba(0,0,0,0.0)"
            }
            b && (this.qc.length && 0 < this.ba.lineWidth ? (a.beginPath(), this.nd.dj(a, this.qc), a.lineCap = "butt") : 0 < 0 + this.ja("shapeWidth") && (a.beginPath(), this.nd.ia(a)));
            0 < this.ba.lineWidth && a.stroke();
            if (this.ba.arrowSize && "solid" === this.ba.arrowStyle) {
                a.beginPath();
                for (e = this.gg; e < this.ta.length; e++) this.ta[e].ia(a);
                a.fillStyle = this.ba.strokeStyle;
                a.fill()
            }
            "" !== this.ba.text && this.Gb.ia(a);
            a.restore()
        };
        a.prototype.wb = function(a, d) {
            if (this.hidden() || this.ja("locked")) return null;
            var b = 12 + this.ba.shapeWidth / 2 + this.ba.lineWidth / 2;
            if (a >= this.rect.x - b && a < this.rect.x + b + this.rect.width && d >= this.rect.y - b && d < this.rect.y + b + this.rect.height)
                if (this.ba.closed && !this.Cr) {
                    if (this.nd.qw(a, d)) return this
                } else if (this.nd.Pq(a, d, b) || "" !== this.ba.text && this.Gb.wb(a, d)) return this;
            return null
        };
        a.prototype.vl = function(a) {
            var b = new K;
            if (0 < this.ba.arrowSize && !a)
                for (a = 0; a < this.gg; a++) this.ta[a].ia(b);
            else
                for (a = 0; a < this.ta.length; a++) this.ta[a].ia(b);
            this.ba.closed && b.closePath();
            return b
        };
        a.prototype.lineTo = function(b, d) {
            var e = this.ba.commands;
            e.push(a.we);
            e.push(b);
            e.push(d)
        };
        a.prototype.nh = function(b, d) {
            var e = this.ba.commands;
            e.push(a.ri);
            e.push(b);
            e.push(d)
        };
        a.prototype.Le = function() {
            return !1 !== this.ba.editable && !0 !== this.ba.lockEditMode
        };
        a.prototype.Jj = function(a, d, e) {
            e *= 8;
            if (a >= this.origin.x - e && a < this.origin.x + e && d >= this.origin.y - e && d < this.origin.y + e) return 0;
            for (var b = 0; b < this.gg; b++) {
                var c = this.ta[b];
                if (a >= this.ta[b].ha.x - e && a < this.ta[b].ha.x + e && d >= this.ta[b].ha.y - e && d < this.ta[b].ha.y + e) return 3 * b;
                if (c.control) {
                    if (a >= c.control.x - e && a < c.control.x + e && d >= c.control.y - e && d < c.control.y + e) return 3 * b + 1
                } else if (c.Da) {
                    if (a >= c.Da.x - e && a < c.Da.x + e && d >= c.Da.y - e && d < c.Da.y + e) return 3 * b + 1;
                    if (c.La && a >= c.La.x - e && a < c.La.x + e && d >= c.La.y - e && d < c.La.y + e) return 3 * b + 2
                }
            }
            return null
        };
        a.prototype.qj = function(b) {
            var d = this.ba.commands;
            b /= 3;
            var e = 0,
                c = !1,
                f = 0,
                k;
            for (k = 0; k < d.length;) {
                var l = d[k];
                if (l === a.zc) {
                    c = !0;
                    break
                }
                f += 1;
                k += a.Za[d[k]] + 1
            }
            0 === b && c && (b = f - 1);
            for (k = 0; k < d.length; e++) {
                c = null;
                switch (d[k]) {
                    case a.$f:
                        c = "move_to";
                        break;
                    case a.we:
                        c = "line_to";
                        break;
                    case a.ag:
                        c = "quadratic_to"
                }
                if (b === e) return c;
                k += a.Za[d[k]] + 1
            }
            return null
        };
        a.$r = function(b, d, e) {
            d /= 3;
            var c = 0,
                f = [],
                k = new G(0, 0),
                l = !1,
                n = 0,
                q;
            for (q = 0; q < b.length;) {
                var u = b[q];
                if (u === a.zc) {
                    l = !0;
                    break
                }
                n += 1;
                q += a.Za[b[q]] + 1
            }
            0 === d && l && (d = n - 1);
            for (q = 0; q < b.length; c++) {
                u = b[q];
                l = !1;
                d === c && (u === a.ag && "line_to" === e ? (f.push(a.we, b[q + 1], b[q + 2]), l = !0) : u === a.we && "quadratic_to" === e && (f.push(a.ag, b[q + 1], b[q + 2], (k.x + b[q + 1]) / 2, (k.y + b[q + 2]) / 2), l = !0));
                k = new G(b[q + 1], b[q + 2]);
                if (!l)
                    for (u = 0; u < 1 + a.Za[b[q]]; u++) f.push(b[q + u]);
                q += a.Za[b[q]] + 1
            }
            return f
        };
        a.prototype.gq = function() {
            return !0
        };
        a.prototype.ej = function(a, d, e) {
            a.save();
            a.lineWidth = 1 * d;
            a.strokeStyle = "#0050B7";
            a.fillStyle = "#0050B7";
            d *= 8;
            0 === e ? a.fillRect(this.origin.x - d, this.origin.y - d, 2 * d, 2 * d) : a.strokeRect(this.origin.x - d, this.origin.y - d, 2 * d, 2 * d);
            for (var b = 1; b < this.gg; b++) {
                var c = this.ta[b];
                a.beginPath();
                if (c.control) a.arc(c.control.x, c.control.y, d, 0, 2 * Math.PI), a.arc(c.control.x, c.control.y, 2 * d, 0, 2 * Math.PI), e === 3 * b + 1 ? a.fill() : a.stroke();
                else if (c instanceof nd || c instanceof od) {
                    var k = c.Da;
                    var l = c.La;
                    var n = c.oa.ha;
                    k && (a.moveTo(n.x, n.y), a.lineTo(k.x, k.y), a.moveTo(k.x + d, k.y), a.arc(k.x, k.y, d, 0, 2 * Math.PI), e === 3 * b + 1 ? a.fill() : a.stroke());
                    a.beginPath();
                    a.moveTo(c.ha.x, c.ha.y);
                    a.lineTo(l.x, l.y);
                    a.moveTo(l.x + d, l.y);
                    a.arc(l.x, l.y, d, 0, 2 * Math.PI);
                    e === 3 * b + 2 ? a.fill() : a.stroke()
                }
                e === 3 * b ? a.fillRect(this.ta[b].ha.x - d, this.ta[b].ha.y - d, 2 * d, 2 * d) : a.strokeRect(this.ta[b].ha.x - d, this.ta[b].ha.y - d, 2 * d, 2 * d)
            }
            a.restore()
        };
        a.Pr = function(a) {
            var b = new N,
                e = 0;
            for (a = a.da; e < a.length;) {
                switch (a[e]) {
                    case K.Bc:
                        b.moveTo(a[e + 1], a[e + 2]);
                        break;
                    case K.Ac:
                        b.lineTo(a[e + 1], a[e + 2]);
                        break;
                    case K.ve:
                        b.bezierCurveTo(a[e + 1], a[e + 2], a[e + 3], a[e + 4], a[e + 5], a[e + 6]);
                        break;
                    case K.xe:
                        b.quadraticCurveTo(a[e + 1], a[e + 2], a[e + 3], a[e + 4]);
                        break;
                    case K.zc:
                        b.close()
                }
                e += K.Cc[a[e]]
            }
            return b.Ib()
        };
        a.sa = {
            strokeStyle: "#000000",
            fillStyle: "#ffffff",
            fontName: "Arial",
            fontSize: 20,
            lineWidth: 2,
            dashes: "",
            shapeWidth: 0,
            smoothness: .3,
            sloppiness: 0,
            shadow: !1,
            closed: !1,
            arrowSize: 0,
            arrowXOffset: null,
            arrowStyle: "simple",
            doubleArrow: !1,
            text: "",
            roundRadius: 0,
            wrap: !1
        };
        a.Nr = 8;
        a.Xk = 2;
        a.$f = 0;
        a.we = 1;
        a.ag = 2;
        a.Wk = 3;
        a.Vg = 4;
        a.ri = 5;
        a.Yk = 6;
        a.zc = 7;
        a.so = 8;
        a.Vk = 9;
        a.ry = .5522847498;
        a.Za = [];
        return a
    }(ed);
    M.Za[M.$f] = 2;
    M.Za[M.we] = 2;
    M.Za[M.ag] = 4;
    M.Za[M.Wk] = 5;
    M.Za[M.Vg] = 6;
    M.Za[M.ri] = 2;
    M.Za[M.Yk] = 4;
    M.Za[M.zc] = 0;
    M.Za[M.so] = 6;
    M.Za[M.Vk] = 8;
    var N = function() {
        function c(a) {
            void 0 === a && (a = []);
            this.da = a
        }
        c.prototype.beginPath = function() {};
        c.prototype.jf = function(a, b, d) {
            for (var e = 0, c = 0; c < a; c++) e += M.Za[this.da[e]] + 1;
            this.da[e + 1] = b;
            this.da[e + 2] = d
        };
        c.prototype.moveTo = function(a, b) {
            this.da.push(M.$f);
            this.da.push(a);
            this.da.push(b)
        };
        c.prototype.lineTo = function(a, b) {
            this.da.push(M.we);
            this.da.push(a);
            this.da.push(b)
        };
        c.prototype.nh = function(a, b) {
            this.da.push(M.ri);
            this.da.push(a);
            this.da.push(b)
        };
        c.prototype.quadraticCurveTo = function(a, b, d, e) {
            this.da.push(M.ag);
            this.da.push(d);
            this.da.push(e);
            this.da.push(a);
            this.da.push(b)
        };
        c.prototype.nf = function(a, b, d, e) {
            this.da.push(M.Yk);
            this.da.push(d);
            this.da.push(e);
            this.da.push(a);
            this.da.push(b)
        };
        c.prototype.bezierCurveTo = function(a, b, d, e, c, f) {
            this.da.push(M.Vg);
            this.da.push(c);
            this.da.push(f);
            this.da.push(a);
            this.da.push(b);
            this.da.push(d);
            this.da.push(e)
        };
        c.prototype.arc = function(a, b, d, e, c, f) {
            void 0 === f && (f = !0);
            var h = (new Gc(-c, a, b)).apply(a + d, b);
            this.da.push(M.Vk);
            this.da.push(h.x);
            this.da.push(h.y);
            this.da.push(a);
            this.da.push(b);
            this.da.push(d);
            this.da.push(e);
            this.da.push(c);
            this.da.push(f ? 1 : 0)
        };
        c.prototype.arcTo = function(a, b, d, e, c) {
            this.da.push(M.Wk);
            this.da.push(d);
            this.da.push(e);
            this.da.push(a);
            this.da.push(b);
            this.da.push(c)
        };
        c.prototype.Hp = function() {
            for (var a = [], b = 0; b < this.da.length;) {
                for (var d = this.da[b], e = 0; e < M.Za[d]; e += 2) a.push(new G(this.da[b + 1 + e], this.da[b + 1 + e + 1]));
                b += M.Za[d] + 1
            }
            a = H.Wg(a);
            return {
                x: a.x,
                y: a.y,
                width: a.width,
                height: a.height
            }
        };
        c.prototype.translate = function(a, b) {
            for (var d = 0; d < this.da.length;) {
                for (var e = this.da[d], c = 0; c < M.Za[e]; c += 2) this.da[d + 1 + c] += a, this.da[d + 2 + c] += b;
                d += M.Za[e] + 1
            }
        };
        c.prototype.closePath = function() {
            this.da.push(M.zc)
        };
        c.prototype.close = function() {
            this.closePath()
        };
        c.prototype.Ib = function() {
            return this.da
        };
        return c
    }();
    N.prototype.change = N.prototype.jf;
    N.prototype.moveTo = N.prototype.moveTo;
    N.prototype.lineTo = N.prototype.lineTo;
    N.prototype.curveTo = N.prototype.nh;
    N.prototype.quadraticCurveTo = N.prototype.quadraticCurveTo;
    N.prototype.cornerTo = N.prototype.nf;
    N.prototype.bezierCurveTo = N.prototype.bezierCurveTo;
    N.prototype.arc = N.prototype.arc;
    N.prototype.arcTo = N.prototype.arcTo;
    N.prototype.getBoundingBox = N.prototype.Hp;
    N.prototype.translate = N.prototype.translate;
    N.prototype.closePath = N.prototype.closePath;
    N.prototype.close = N.prototype.close;
    N.prototype.toArray = N.prototype.Ib;
    ed.dd("PathNode", M);
    N.prototype.beginPath = N.prototype.beginPath;
    N.prototype.change = N.prototype.jf;
    N.prototype.moveTo = N.prototype.moveTo;
    N.prototype.lineTo = N.prototype.lineTo;
    N.prototype.curveTo = N.prototype.nh;
    N.prototype.quadraticTo = N.prototype.Ey;
    N.prototype.cornerTo = N.prototype.nf;
    N.prototype.bezierTo = N.prototype.Qs;
    N.prototype.arc = N.prototype.arc;
    N.prototype.arcTo = N.prototype.arcTo;
    N.prototype.getBoundingBox = N.prototype.Hp;
    N.prototype.translate = N.prototype.translate;
    N.prototype.closePath = N.prototype.closePath;
    N.prototype.close = N.prototype.close;
    N.prototype.toArray = N.prototype.Ib;
    var td = function() {
        function c(a) {
            this.Mc = a;
            this.me = 0;
            this.$m = !0;
            this.Hj = !1;
            this.path = new K;
            this.lk = new K;
            this.log = x.create("DoubleLineAddon")
        }
        c.prototype.format = function() {
            this.log("Formatting doubleline; thickness=%s", this.Mc.ja("doubleLine"));
            var a = this.Mc.vl(!1).Kn(M.Xk),
                b = this.Mc.ju();
            if (0 < b) {
                var d = a.Vs();
                d > b && (a = a.Xs(d - b))
            }
            a = a.Ye();
            b = this.Mc.ja("doubleLine");
            this.path = new K;
            this.lk = new K;
            d = this.Mc.ja("doubleLineDashSide");
            this.Hj = !1;
            "outer" === d ? (Sc(this.path, a, b, !0, !1), Sc(this.lk, a, b, !1, !0), this.Hj = !0) : "inner" === d ? (Sc(this.path, a, b, !1, !0), Sc(this.lk, a, b, !0, !1), this.Hj = !0) : Sc(this.path, a, b, !0, !0)
        };
        c.prototype.ia = function(a) {
            a.beginPath();
            this.Mc.qc.length && this.Hj ? (this.lk.dj(a, this.Mc.qc), this.path.ia(a)) : this.Mc.qc.length ? this.path.dj(a, this.Mc.qc) : this.path.ia(a)
        };
        return c
    }();
    var ud = x.create("FitCurve");

    function vd(c) {
        function a(a, b) {
            E.bezierCurveTo(b[1].x, b[1].y, b[2].x, b[2].y, b[3].x, b[3].y);
            ud("Bezier: (%s,%s), (%s,%s), (%s,%s), (%s,%s)", b[0].x, b[0].y, b[1].x, b[1].y, b[2].x, b[2].y, b[3].x, b[3].y)
        }

        function b(a, b) {
            return a.x * b.x + a.y * b.y
        }

        function d(a) {
            var b = 1 - a;
            return 3 * a * b * b
        }

        function e(a) {
            return 3 * a * a * (1 - a)
        }

        function h(a, b) {
            var d = a.x - b.x,
                e = a.y - b.y;
            return Math.sqrt(d * d + e * e)
        }

        function f(a) {
            return a.x * a.x + a.y * a.y
        }

        function k(a, b) {
            var d = Math.sqrt(f(a));
            0 !== d && (a.x *= b / d, a.y *= b / d);
            return a
        }

        function l(a, b, d) {
            void 0 === d && ud("Undef!");
            d.x = a.x + b.x;
            d.y = a.y + b.y;
            return d
        }

        function n(a, b) {
            return {
                x: a.x + b.x,
                y: a.y + b.y
            }
        }

        function q(a, b) {
            return {
                x: a.x * b,
                y: a.y * b
            }
        }

        function u(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }

        function v(a, c, f, v, w, y) {
            var z, D = [],
                C = [
                    [],
                    []
                ],
                L = [];
            var E = [{
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }];
            var R = f - c + 1;
            for (z = 0; z < R; z++) {
                var W = {
                    x: w.x,
                    y: w.y
                };
                var Y = {
                    x: y.x,
                    y: y.y
                };
                k(W, d(v[z]));
                k(Y, e(v[z]));
                D[z] = [W, Y]
            }
            C[0][0] = 0;
            C[0][1] = 0;
            C[1][0] = 0;
            C[1][1] = 0;
            L[0] = 0;
            for (z = L[1] = 0; z < R; z++) C[0][0] += b(D[z][0], D[z][0]), C[0][1] += b(D[z][0], D[z][1]),
                C[1][0] = C[0][1], C[1][1] += b(D[z][1], D[z][1]), W = 1 - v[z], Y = v[z], W = u(a[c + z], n(q(a[c], W * W * W), n(q(a[c], d(v[z])), n(q(a[f], e(v[z])), q(a[f], Y * Y * Y))))), L[0] += b(D[z][0], W), L[1] += b(D[z][1], W);
            v = C[0][0] * C[1][1] - C[1][0] * C[0][1];
            z = C[0][0] * L[1] - C[0][1] * L[0];
            L = L[0] * C[1][1] - L[1] * C[0][1];
            0 === v && (v = C[0][0] * C[1][1] * 1E-11);
            C = L / v;
            L = z / v;
            if (0 > C || 0 > L) return C = h(a[f], a[c]) / 3, E[0] = a[c], E[3] = a[f], l(E[0], k(w, C), E[1]), l(E[3], k(y, C), E[2]), E;
            E[0] = a[c];
            E[3] = a[f];
            l(E[0], k(w, C), E[1]);
            l(E[3], k(y, L), E[2]);
            return E
        }

        function w(a, b, d) {
            var e;
            var c = [];
            for (e = 0; e <= a; e++) c[e] = {
                x: b[e].x,
                y: b[e].y
            };
            for (e = 1; e <= a; e++)
                for (b = 0; b <= a - e; b++) c[b].x = (1 - d) * c[b].x + d * c[b + 1].x, c[b].y = (1 - d) * c[b].y + d * c[b + 1].y;
            return c[0]
        }

        function y(a) {
            var b = Math.sqrt(Math.sqrt(f(a)));
            0 !== b && (a.x /= b, a.y /= b);
            return a
        }

        function z(a, b, d, e, c) {
            var h, k = (d - b + 1) / 2;
            var l = 0;
            for (h = b + 1; h < d; h++) {
                var n = w(3, e, c[h - b]);
                n = u(n, a[h]);
                n = f(n);
                n >= l && (l = n, k = h)
            }
            return {
                sq: l,
                vr: k
            }
        }

        function L(b, d, e, c, f, n) {
            var q;
            var D = [{
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }, {
                x: 0,
                y: 0
            }];
            var C = n * n;
            if (2 === e - d + 1) n = h(b[e], b[d]) / 3, D[0] = b[d], D[3] = b[e], l(D[0], k(c, n), D[1]), l(D[3], k(f, n), D[2]), a(3, D);
            else {
                var E = [0];
                for (q = d + 1; q <= e; q++) E[q - d] = E[q - d - 1] + h(b[q], b[q - 1]);
                for (q = d + 1; q <= e; q++) E[q - d] /= E[e - d];
                var W = E;
                D = v(b, d, e, W, c, f);
                q = z(b, d, e, D, W);
                E = q.sq;
                q = q.vr;
                if (E < n) a(3, D);
                else {
                    if (E < C || R)
                        for (C = 0; 4 > C; C++) {
                            q = b;
                            E = d;
                            var Y = e;
                            var nb = D;
                            var Na = [];
                            for (D = E; D <= Y; D++) {
                                var oe = Na,
                                    kf = D - E,
                                    Q, db = nb,
                                    tb = q[D],
                                    ub = W[D - E],
                                    Ha = [];
                                var La = [];
                                var vb = w(3, db, ub);
                                for (Q = 0; 2 >= Q; Q++) Ha[Q] = {
                                    x: 0,
                                    y: 0
                                }, Ha[Q].x = 3 * (db[Q + 1].x - db[Q].x), Ha[Q].y = 3 * (db[Q + 1].y - db[Q].y);
                                for (Q = 0; 1 >= Q; Q++) La[Q] = {
                                    x: 0,
                                    y: 0
                                }, La[Q].x = 2 * (Ha[Q + 1].x - Ha[Q].x), La[Q].y = 2 * (Ha[Q + 1].y - Ha[Q].y);
                                Q = w(2, Ha, ub);
                                La = w(1, La, ub);
                                oe[kf] = ub - ((vb.x - tb.x) * Q.x + (vb.y - tb.y) * Q.y) / (Q.x * Q.x + Q.y * Q.y + (vb.x - tb.x) * La.x + (vb.y - tb.y) * La.y)
                            }
                            Y = Na;
                            D = v(b, d, e, Y, c, f);
                            q = z(b, d, e, D, Y);
                            E = q.sq;
                            q = q.vr;
                            if (E < n || R) {
                                a(3, D);
                                return
                            }
                            W = Y
                        }
                    Y = {
                        x: 0,
                        y: 0
                    };
                    C = u(b[q - 1], b[q]);
                    E = u(b[q], b[q + 1]);
                    Y.x = (C.x + E.x) / 2;
                    Y.y = (C.y + E.y) / 2;
                    C = Y = y(Y);
                    L(b, d, q, c, C, n);
                    C.x = -C.x;
                    C.y = -C.y;
                    L(b, q, e, C, f, n)
                }
            }
        }
        var R = !0;
        void 0 === R && (R = !1);
        var E = new K;
        E.moveTo(c[0].x, c[0].y);
        (function(a, b, d) {
            var e = u(a[1], a[0]);
            e = y(e);
            var c = b - 1;
            c = u(a[c - 1], a[c]);
            c = y(c);
            L(a, 0, b - 1, e, c, d)
        })(c, c.length, 25);
        return E
    };

    function wd(c, a, b, d, e, h) {
        var f = !1;
        c.save();
        switch (b) {
            case 0:
            case 3:
                var k = a.height;
                var l = a.width;
                break;
            default:
                k = a.width, l = a.height
        }
        switch (b) {
            case 2:
                f = !0
        }
        c.translate(a.x, a.y);
        c.fillStyle = "rgba(0, 0, 0, 0.2)";
        c.fillStyle = "#ccc";
        c.fillRect(0, 0, a.width, a.height);
        c.lineWidth = 1;
        c.fillStyle = "black";
        c.strokeStyle = "black";
        c.font = "10px sans-serif";
        a = Math.ceil(50 / e);
        b = h / e;
        var n = Math.ceil(b / a) * a;
        h = n;
        c.beginPath();
        if (f)
            for (b = (n - b) * e; b < l;) c.moveTo(0, b), c.lineTo(k, b), f = h.toString() + d, c.fillText(f, 0, b + 1 + 10), h += a,
                b += e * a;
        else
            for (b = (n - b) * e; b < l;) c.moveTo(b, k), c.lineTo(b, 0), f = h.toString() + d, c.fillText(f, b + 1, 10), h += a, b += e * a;
        c.stroke();
        c.restore()
    };
    var xd = function(c) {
        function a(a, d, e) {
            var b = c.call(this) || this;
            b.id = a;
            b.de = d;
            b.Rh = !0;
            b.width = 32;
            b.height = 500;
            b.Ly = 0;
            b.Hb = new H(0, 0, 0, 0);
            b.Bb = !1;
            b.Ms = "#c0c0c0";
            b.Zo = "#808080";
            b.borderWidth = 1;
            b.Ee = 0;
            b.De = 100;
            b.Zn = 10;
            b.position = 5;
            b.offset = 0;
            b.log = x.create("SCROLLBAR", !0);
            b.Rh = !0;
            b.canvas = uc(document.body);
            b.canvas.style.position = "absolute";
            b.canvas.style.border = "none";
            b.canvas.classList.add("zwibbler-scrollbar");
            b.canvas.classList.add("zwibbler-passthrough");
            b.xa = b.canvas.getContext("2d");
            e.addEventListener(b.canvas, "mousedown", function(a) {
                b.zb(a)
            });
            e.addEventListener(document.body, "mousemove", function(a) {
                b.ob(a)
            });
            e.addEventListener(document.body, "mouseup", function(a) {
                b.Cb(a)
            });
            e.addEventListener(b.canvas, "touchstart", function(a) {
                b.Lm(a)
            });
            e.addEventListener(document.body, "touchmove", function(a) {
                b.Lm(a)
            });
            e.addEventListener(document.body, "touchend", function(a) {
                b.Lm(a)
            });
            b.format();
            return b
        }
        __extends(a, c);
        a.prototype.Tc = function(a) {
            a.appendChild(this.canvas)
        };
        a.prototype.moveTo = function(a, d) {
            this.canvas.style.left = "" + a + "px";
            this.canvas.style.top = "" + d + "px"
        };
        a.prototype.Ve = function(a, d) {
            this.width = a;
            this.height = d;
            this.canvas.width = this.width;
            this.canvas.height = d;
            this.format();
            this.ia()
        };
        a.prototype.Me = function() {
            this.canvas.style.display = "none"
        };
        a.prototype.show = function() {
            this.canvas.style.display = "block"
        };
        a.prototype.uv = function() {
            return "block" === this.canvas.style.display
        };
        a.prototype.sr = function(a, d, e, c) {
            this.Ee = a;
            this.De = d - a;
            this.Zn = e;
            this.position = c;
            this.format();
            this.ia()
        };
        a.prototype.format = function() {
            var a = this.de ? this.width : this.height;
            var d = this.Zn / this.De * a;
            a *= (this.position - this.Ee) / this.De;
            this.Hb = this.de ? new H(a, 0, d - 1, this.height - 1) : new H(0, a, this.width - 1, d - 1);
            this.Hb.x = Math.round(this.Hb.x) + .5;
            this.Hb.y = Math.round(this.Hb.y) + .5;
            this.Hb.width = Math.round(this.Hb.width);
            this.Hb.height = Math.round(this.Hb.height)
        };
        a.prototype.ia = function() {
            this.xa.beginPath();
            this.xa.fillStyle = this.Ms;
            this.xa.strokeStyle = this.Zo;
            this.xa.lineWidth = this.borderWidth;
            this.xa.rect(this.borderWidth / 2, this.borderWidth / 2, this.width - this.borderWidth, this.height - this.borderWidth);
            this.xa.fill();
            this.xa.stroke();
            this.xa.beginPath();
            this.xa.fillStyle = this.Zo;
            this.xa.strokeStyle = "#000000";
            this.xa.rect(this.Hb.x, this.Hb.y, this.Hb.width, this.Hb.height);
            this.xa.fill();
            this.xa.stroke()
        };
        a.prototype.yp = function(a) {
            var b = B(this.canvas).Vb(),
                e = 0,
                c = 0;
            if ("touchstart" === a.type || "touchend" === a.type || "touchmove" === a.type) e = a.changedTouches[0].pageX, c = a.changedTouches[0].pageY;
            else if ("mousedown" === a.type || "mouseup" === a.type || "mousemove" === a.type) e = a.pageX, c = a.pageY;
            return new G(e - b.left, c - b.top)
        };
        a.prototype.Lm = function(a) {
            switch (a.type) {
                case "touchstart":
                    this.zb(a);
                    break;
                case "touchend":
                    this.Cb(a);
                    break;
                case "touchmove":
                    this.ob(a)
            }
        };
        a.prototype.Qq = function(a) {
            a = this.de ? a.x / this.width * this.De + this.Ee : a.y / this.height * this.De + this.Ee;
            a = Math.min(a, this.De - this.Zn + this.Ee);
            return a = Math.max(a, this.Ee)
        };
        a.prototype.zb = function(a) {
            a.preventDefault();
            a = this.yp(a);
            this.Hb.ed(a.x, a.y) ? this.de ? (this.offset = a.x - this.Hb.x, a.x -= this.offset) : (this.offset = a.y - this.Hb.y, a.y -= this.offset) : (this.position = this.Qq(a), this.offset = 0, this.de ? this.Hb.x = (this.position - this.Ee) / this.De * this.width : this.Hb.y = (this.position - this.Ee) / this.De * this.height, this.na("scroll", this.position), this.ia());
            this.Bb = !0
        };
        a.prototype.ob = function(a) {
            this.Bb && (this.Bb && "mousemove" === a.type && 0 === a.buttons ? this.Bb = !1 : (a.preventDefault(), a = this.yp(a), this.de ? a.x -= this.offset : a.y -= this.offset, this.position = this.Qq(a), this.na("scroll", this.position), this.format(), this.ia()))
        };
        a.prototype.Cb = function() {
            this.Bb && (this.Bb = !1)
        };
        a.prototype.pg = function() {
            return this.de ? this.height : this.width
        };
        a.vy = 0;
        a.ty = 1;
        a.py = 2;
        a.uy = 3;
        return a
    }(bb);
    var yd = {
            type: "translate",
            position: new G(0, 0),
            offset: new G(0, 0),
            Bf: ""
        },
        zd = {
            type: "translate",
            position: new G(0, 0),
            offset: new G(0, 0),
            Bf: ""
        },
        Ad = {
            type: "translate",
            position: new G(0, 0),
            offset: new G(0, 0),
            Bf: ""
        },
        Bd = function() {
            function c(a, b, d) {
                this.Xe = a;
                this.qa = b;
                this.Ga = d
            }
            c.prototype.Bj = function(a, b) {
                void 0 === a && (a = this.qa);
                void 0 === b && (b = 1);
                var d = a.jc();
                return new G(this.Ga.x + this.Ga.width * this.Xe.position.x + this.Xe.offset.x / d.x / b, this.Ga.y + this.Ga.height * this.Xe.position.y + this.Xe.offset.y / d.y / b)
            };
            c.prototype.wj = function() {
                var a = this.Bj();
                return this.qa.apply(a.x, a.y)
            };
            c.prototype.ia = function(a, b, d, e) {
                a.save();
                e = e.multiply(this.qa);
                var c = e.jc();
                c.x = 1 / c.x / d;
                c.y = 1 / c.y / d;
                d = this.Bj(e, d);
                e = e.multiply(new Hc(c.x, c.y, d.x, d.y));
                e.Yf(a);
                (b = b.get(this.Xe.Bf)) ? (e = b.width, c = b.height, a.drawImage(b, d.x - e / 2, d.y - c / 2, e, c)) : this.Pl(a, d);
                a.restore()
            };
            c.prototype.Pl = function(a, b) {
                a.strokeStyle = "red";
                a.lineWidth = 1;
                a.strokeRect(b.x - 10, b.y - 10, 20, 20)
            };
            c.prototype.wb = function(a, b, d, e, c) {
                var h = a.get(this.Xe.Bf);
                a = this.Bj(this.qa, c);
                b = this.qa.inverse().apply(b, d);
                d = this.qa.jc();
                d.x *= c;
                d.y *= c;
                h ? (e = h.height, c = h.width / 2 / d.x, e = e / 2 / d.y) : (c = e / d.x, e /= d.y);
                return (new H(a.x - c, a.y - e, 2 * c, 2 * e)).ed(b.x, b.y, 0)
            };
            c.prototype.click = function() {
                return !1
            };
            return c
        }(),
        Cd = function(c) {
            function a(a, d, e, h) {
                a = c.call(this, a, d, e) || this;
                a.origin = h;
                return a
            }
            __extends(a, c);
            a.prototype.rg = function(a) {
                var b = 1,
                    e = 1,
                    c = this.qa.inverse(),
                    f = this.wj(),
                    k = this.Bj();
                a = c.apply(f.x + a.x, f.y + a.y);
                k = new G(k.x - this.origin.x, k.y - this.origin.y);
                a = new G(a.x - this.origin.x, a.y - this.origin.y);
                a = (a.x * k.x + a.y * k.y) / (k.x * k.x + k.y * k.y);
                0 !== k.x && 0 !== k.y ? e = b = a : 0 !== k.x ? b = a : e = a;
                return this.qa.multiply(new Hc(b, e, this.origin.x, this.origin.y)).multiply(c)
            };
            a.prototype.Pl = function(a, d) {
                a.beginPath();
                a.strokeStyle = "#000";
                a.lineWidth = 1;
                a.rect(d.x - 4, d.y - 4, 8, 8);
                a.stroke()
            };
            return a
        }(Bd),
        Dd = function(c) {
            function a(a, d, e, h, f) {
                a = c.call(this, a, d, e) || this;
                a.Ri = f;
                a.log = x.create("RotationSelHandle");
                d = a.wj();
                a.origin = a.qa.apply(h.x, h.y);
                a.xn = Math.atan2(d.y - a.origin.y, d.x - a.origin.x);
                a.Ri = f;
                return a
            }
            __extends(a, c);
            a.prototype.rg = function(a) {
                var b = this.wj();
                a = Math.atan2(b.y + a.y - this.origin.y, b.x + a.x - this.origin.x) - this.xn;
                this.Ri && (b = Math.PI / 16, a = Math.floor(a / b) * b);
                return new Gc(-a, this.origin.x, this.origin.y)
            };
            a.prototype.Pl = function(a, d) {
                a.beginPath();
                a.strokeStyle = "#008000";
                a.lineWidth = 3;
                a.moveTo(d.x, d.y);
                a.arc(d.x, d.y, 6, 0, 1.5 * Math.PI, !1);
                a.stroke()
            };
            return a
        }(Bd),
        Ed = function(c) {
            function a(a, d) {
                return c.call(this, a, d, new H(0, 0, 0, 0)) || this
            }
            __extends(a, c);
            a.prototype.rg = function(a) {
                return new Fc(a.x, a.y)
            };
            return a
        }(Bd),
        Fd = function(c) {
            function a() {
                return c.call(this, Ad, new J, new H(0, 0, 0, 0)) || this
            }
            __extends(a, c);
            a.prototype.rg = function() {
                return new J
            };
            return a
        }(Bd),
        Gd = function(c) {
            function a(a, d, e) {
                return c.call(this, a, d, e) || this
            }
            __extends(a, c);
            a.prototype.click = function() {
                this.Xe.bp && this.Xe.bp();
                return !0
            };
            a.prototype.rg = function() {
                return new J
            };
            return a
        }(Bd);

    function Hd(c, a, b, d) {
        var e = void 0,
            h = new G(0, 0),
            f = b.jc();
        h.x = a.x + a.width * c.position.x + c.offset.x / f.x;
        h.y = a.y + a.height * c.position.y + c.offset.y / f.y;
        switch (c.type) {
            case "translate":
                return new Ed(c, b);
            case "scale":
                return e || (e = new G(a.right() - c.position.x * a.width, a.bottom() - c.position.y * a.height)), new Cd(c, b, a, e);
            case "rotate":
                return e || (e = a.ud()), new Dd(c, b, a, e, d || !1);
            case "click":
                return new Gd(c, b, a)
        }
    };
    var Id = x.create("SNAPPER");

    function Jd(c) {
        switch (c) {
            case 33:
                return "n-resize";
            case 34:
                return "e-resize";
            case 36:
                return "s-resize";
            case 40:
                return "w-resize";
            case 25:
                return "nw-resize";
            case 19:
                return "ne-resize";
            case 28:
                return "sw-resize";
            case 22:
                return "se-resize";
            case 1:
            case 4:
            case 8:
            case 2:
                return "move"
        }
        return "default"
    }

    function Kd(c, a) {
        return {
            id: c,
            gc: 2,
            x: a.x + a.width,
            ec: a.y,
            fc: a.y + a.height
        }
    }

    function Ld(c, a) {
        return {
            id: c,
            gc: 4,
            x: a.y + a.height,
            ec: a.x,
            fc: a.x + a.width
        }
    }
    var Md = function() {
        function c() {
            this.Af = [];
            this.Sg = []
        }
        c.prototype.clear = function() {
            this.Af.length = 0;
            this.Sg.length = 0
        };
        c.prototype.Po = function(a, b) {
            this.Af.push({
                id: b,
                gc: 1,
                x: a.y,
                ec: a.x,
                fc: a.x + a.width
            });
            this.Af.push(Ld(b, a));
            this.Sg.push({
                id: b,
                gc: 8,
                x: a.x,
                ec: a.y,
                fc: a.y + a.height
            });
            this.Sg.push(Kd(b, a))
        };
        c.prototype.Bx = function(a, b) {
            var d = 8;
            void 0 === d && (d = 10);
            var e = this.Ki(this.Sg, {
                id: b,
                gc: 8,
                x: a.x,
                ec: a.y,
                fc: a.y + a.height
            }, Number.MAX_VALUE);
            e = this.Ki(this.Sg, Kd(b, a), e);
            var c = this.Ki(this.Af, {
                id: b,
                gc: 1,
                x: a.y,
                ec: a.x,
                fc: a.x + a.width
            }, Number.MAX_VALUE);
            c = this.Ki(this.Af, Ld(b, a), c);
            return {
                x: Math.abs(e) < d ? e : 0,
                y: Math.abs(c) < d ? c : 0
            }
        };
        c.prototype.hm = function(a, b) {
            var d = 10;
            void 0 === d && (d = 10);
            var e = [];
            this.Ar(e, this.Sg, a, b, d);
            this.Ar(e, this.Af, b, a, d);
            e.reverse();
            return e
        };
        c.prototype.Ar = function(a, b, d, e, c) {
            for (var h = c * c, k = 0; k < b.length; k++) {
                var l = b[k],
                    n = Math.abs(d - l.x),
                    q = Number.MAX_VALUE,
                    u = 0;
                if (!(n > c || e < l.ec - c || e > l.fc + c)) {
                    if (e > l.ec + c && e < l.fc - c) {
                        var v = n * n;
                        v < q && (q = v, u = l.gc)
                    }
                    v = .5 * (l.ec + l.fc);
                    v = n * n + (e - v) * (e - v);
                    v < h && (q = v, u = l.gc | 32);
                    b === this.Af && (v = n * n + (e - l.ec) * (e - l.ec), v < q && (q = v, u = l.gc | 24), v = n * n + (e - l.fc) * (e - l.fc), v < q && (q = v, u = l.gc | 18));
                    q < h && a.push({
                        id: l.id,
                        gc: u
                    })
                }
            }
        };
        c.prototype.Ki = function(a, b, d) {
            for (var e = 0; e < a.length; e++) {
                var c = a[e],
                    f = c.x - b.x;
                Math.abs(f) > Math.abs(d) || b.id === c.id || 50 > (b.fc < c.ec ? c.ec - b.fc : b.ec > c.fc ? b.ec - c.fc : 0) && (d = f)
            }
            return d
        };
        return c
    }();
    var Nd = "ontouchstart" in window,
        Od = "onpointerdown" in window,
        Pd = {
            touchstart: "down",
            touchmove: "move",
            touchend: "up",
            touchcancel: "up",
            pointerdown: "down",
            pointermove: "move",
            pointerup: "up",
            mousedown: "down",
            mousemove: "move",
            mouseup: "up",
            pointercancel: "up"
        },
        Qd = [],
        Rd = function(c) {
            function a(a, d, e, h, f, k, l, n, q, u, v, w, y, z, L, R, E, D) {
                void 0 === E && (E = Qd);
                void 0 === D && (D = 0);
                k = c.call(this, a, d, e, k, n, q) || this;
                k.type = a;
                k.pageX = d;
                k.pageY = e;
                k.Eb = h;
                k.Fb = f;
                k.startTime = l;
                k.pointerId = u;
                k.data = v;
                k.index = w;
                k.os = y;
                k.buttons = z;
                k.ctrlKey = L;
                k.shiftKey = R;
                k.la = E;
                k.angle = D;
                k.scale = 0;
                k.rotation = 0;
                return k
            }
            __extends(a, c);
            a.prototype.clone = function() {
                return new a(this.type, this.pageX, this.pageY, this.Eb, this.Fb, this.timestamp, this.startTime, this.target, this.Zc, this.pointerId, this.data, this.index, this.os, this.buttons, this.ctrlKey, this.shiftKey, this.la, this.angle)
            };
            a.prototype.wj = function() {
                return this.offset({
                    x: this.pageX,
                    y: this.pageY
                }, void 0)
            };
            a.prototype.oj = function() {
                return this.timestamp - this.startTime
            };
            a.prototype.wh = function() {
                return Dc(this.pageX, this.pageY, this.Eb, this.Fb)
            };
            a.prototype.toString = function() {
                var a = c.prototype.toString.call(this) + (" " + this.oj() + "ms " + Math.round(this.wh()) + "px");
                0 != this.scale && (a += " scale=" + Math.round(100 * (this.scale || 0)) / 100, a += " " + Math.round(this.rotation || 0) + "deg");
                return a
            };
            a.prototype.setData = function(a, d) {
                this.data[a] = d
            };
            a.prototype.getData = function(a) {
                return this.data[a]
            };
            return a
        }(function() {
            function c(a, b, d, e, c, f) {
                this.type = a;
                this.pageX = b;
                this.pageY = d;
                this.timestamp = e;
                this.target = c;
                this.Zc = f
            }
            c.prototype.toString = function() {
                return "[" + this.type + " (" + this.Zc.type + ")] (" + this.pageX + "," + this.pageY + ")"
            };
            c.prototype.offset = function(a, b) {
                var d = B(b).Vb();
                return {
                    x: a.x - d.left,
                    y: a.y - d.top
                }
            };
            c.prototype.stopPropagation = function() {
                this.Zc.stopPropagation()
            };
            c.prototype.preventDefault = function() {
                this.Zc.preventDefault()
            };
            return c
        }()),
        Sd = x.create("TouchListener"),
        Yd = function(c) {
            function a(a, d) {
                function b(a) {
                    h.handleEvent(a)
                }
                void 0 === d && (d = {});
                var h = c.call(this) || this;
                h.fa = a;
                h.options = d;
                h.ee = [];
                h.pf = [];
                h.active = [];
                h.$p = {};
                h.Rh = !0;
                Nd ? (h.$a(a, "touchstart", b), h.$a(document, "touchmove", b), h.$a(document, "touchend", b), h.$a(document, "touchcancel", b)) : Od && !1 !== d.So && (h.$a(a, "pointerdown", b), h.$a(document, "pointermove", b), h.$a(document, "pointerup", b), h.$a(document, "pointercancel", b));
                Od && !1 !== d.So || (h.$a(a, "mousedown", b), h.$a(document, "mousemove", b), h.$a(document, "mouseup", b));
                return h
            }
            __extends(a, c);
            a.prototype.$a = function(a, d, e) {
                this.ee.push({
                    element: a,
                    event: d,
                    fn: e
                });
                "touchmove" === d ? a.addEventListener(d, e, {
                    passive: !1,
                    capture: !0 === this.options.Tn
                }) : a.addEventListener(d, e, !0 === this.options.Tn)
            };
            a.prototype.pa = function(a, d) {
                for (var b = 0, h = a.split(" "); b < h.length; b++) {
                    var f = h[b],
                        k = "";
                    switch (f) {
                        case "gesturestart":
                        case "gesturechange":
                        case "gestureend":
                            k = "gesture";
                            break;
                        case "tap":
                        case "doubletap":
                            k = "tap";
                            break;
                        case "swipe":
                            k = "swipe";
                            break;
                        case "hold":
                            k = "hold";
                            break;
                        case "drag":
                            k = "drag"
                    }
                    if ("" !== k && !this.$p[k]) {
                        switch (k) {
                            case "gesture":
                                this.pf.push(new Td(this));
                                break;
                            case "tap":
                                this.pf.push(new Ud(this));
                                break;
                            case "swipe":
                                this.pf.push(new Vd(this));
                                break;
                            case "hold":
                                this.pf.push(new Wd(this));
                                break;
                            case "drag":
                                this.pf.push(new Xd(this))
                        }
                        this.$p[k] = !0;
                        Sd("Created new detector " + k + " to handle " + f)
                    }
                }
                c.prototype.pa.call(this, a, d)
            };
            a.prototype.na = function(a, d) {
                c.prototype.fd.call(this, a, d)
            };
            a.prototype.Xa = function() {
                for (var a = 0, d = this.ee; a < d.length; a++) {
                    var e = d[a];
                    e.element.removeEventListener(e.event, e.fn, !0 === this.options.Tn)
                }
                a = 0;
                for (d = this.pf; a < d.length; a++) e = d[a], e.Xa && e.Xa();
                this.ee.length = 0;
                this.pf.length = 0;
                this.active.length = 0;
                this.Ya = {}
            };
            a.prototype.handleEvent = function(a) {
                var b = Pd[a.type],
                    e = (new Date).getTime();
                switch (a.type) {
                    case "touchstart":
                    case "touchend":
                        a.target === this.fa && a.preventDefault();
                    case "touchmove":
                    case "touchcancel":
                        for (var c = 0; c < a.changedTouches.length; c++) {
                            var f = a.changedTouches[c];
                            this.Gj(a, b, f.identifier, f.pageX, f.pageY, e)
                        }
                        break;
                    case "pointerdown":
                    case "pointerup":
                    case "pointermove":
                    case "pointercancel":
                        this.Gj(a, b, a.pointerId, a.pageX, a.pageY, e);
                        if ("pointercancel" === a.type)
                            for (c = this.active.length - 1; 0 <= c; c--) this.Gj(a, b, this.active[c].id, a.pageX, a.pageY, e);
                        break;
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                        this.Gj(a, b, 0, a.pageX, a.pageY, e)
                }
            };
            a.prototype.Gj = function(a, d, e, c, f, k) {
                switch (d) {
                    case "down":
                        d = this.As(e, c, f, k);
                        e = new Rd("down", c, f, c, f, k, k, a.target, a, e, d.data, d.index, this.active.length, a.buttons, a.ctrlKey, a.shiftKey);
                        break;
                    case "move":
                        d = this.Yt(e);
                        e = new Rd("move", c, f, d ? d.Eb : c, d ? d.Fb : f, k, d ? d.dc : k, a.target, a, e, d ? d.data : {}, d ? d.index : -1, this.active.length, a.buttons, a.ctrlKey, a.shiftKey);
                        break;
                    case "up":
                        d = this.Gw(e);
                        e = new Rd("up", c, f, d ? d.Eb : c, d ? d.Fb : f, k, d ? d.dc : k, a.target, a, e, d ? d.data : {}, d ? d.index : -1, this.active.length, a.buttons, a.ctrlKey, a.shiftKey);
                        break;
                    default:
                        return
                }
                null !== d && (d.tf = c, d.uf = f);
                (d || this.fa.contains(a.target)) && this.na(e.type, e)
            };
            a.prototype.Yt = function(a) {
                for (var b = 0, e = this.active; b < e.length; b++) {
                    var c = e[b];
                    if (c.id === a) return c
                }
                return null
            };
            a.prototype.As = function(a, d, e, c) {
                for (var b = 0; b < this.active.length; b++) {
                    var h = this.active[b];
                    if (h.id === a) return h.Eb = h.tf = d, h.Fb = h.uf = e, h.dc = c,
                        h.la = [new G(d, e)], h
                }
                this.active.push({
                    index: this.active.length,
                    id: a,
                    dc: c,
                    Eb: d,
                    Fb: e,
                    tf: d,
                    uf: e,
                    la: [new G(d, e)],
                    data: {}
                });
                return this.active[this.active.length - 1]
            };
            a.prototype.Gw = function(a) {
                for (var b = 0; b < this.active.length; b++)
                    if (this.active[b].id === a) return a = this.active[b], this.active.splice(b, 1), a;
                return null
            };
            return a
        }(bb);

    function Ud(c) {
        var a = [];
        c.pa("up", function(b) {
            Sd("Duration: %s distance: %s", b.oj(), b.wh());
            if (200 > b.oj() && 20 > b.wh()) {
                var d = b.clone();
                d.type = "tap";
                c.na("tap", d);
                a: {
                    for (d = 0; d < a.length; d++) {
                        var e = a[d];
                        if (300 > b.timestamp - e.dc && 20 > Dc(b.pageX, b.pageY, e.x, e.y)) {
                            e.x = b.pageX;
                            e.y = b.pageY;
                            e.dc = b.timestamp;
                            d = !0;
                            break a
                        }
                    }
                    4 === a.length && a.splice(0, 1);a.push({
                        x: b.pageX,
                        y: b.pageY,
                        id: b.pointerId,
                        dc: b.timestamp
                    });d = !1
                }
                d && (d = b.clone(), d.type = "doubletap", c.na("doubletap", d))
            }
        })
    }

    function Xd(c) {
        var a = -1,
            b = -1;
        c.pa("move", function(d) {
            a !== d.Eb && b !== d.Fb && 8 < d.wh() && (a = d.Eb, b = d.Fb, d = d.clone(), d.type = "drag", c.na("drag", d))
        })
    }

    function Td(c) {
        function a() {
            for (var a = 0, b = 0, d = 0; d < e.length; d++) Sd("Active touch: id:%s %s,%s", e[d].id, e[d].tf, e[d].uf), a += e[d].tf, b += e[d].uf;
            return {
                x: a / e.length,
                y: b / e.length
            }
        }

        function b(a, b) {
            for (var d = 0, c = 0; c < e.length; c++) {
                var h = e[c];
                d += Math.sqrt((h.tf - a) * (h.tf - a) + (h.uf - b) * (h.uf - b))
            }
            return d / e.length
        }

        function d(a, b, d, e, h) {
            a = a.clone();
            a.type = b;
            a.pageX = d.x;
            a.pageY = d.y;
            a.scale = e;
            a.rotation = h;
            c.na(a.type, a)
        }
        var e = [],
            h = !1,
            f = 0,
            k = 1,
            l = 1,
            n = {
                x: 0,
                y: 0
            };
        c.pa("down move up", function(q) {
            e = c.active;
            switch (q.type) {
                case "down":
                    2 <= e.length && !h && (h = !0, n = a(), l = b(n.x, n.y), k = 1, f = 0, d(q, "gesturestart", n, k, f));
                    break;
                case "move":
                    if (2 <= e.length && h) {
                        n = a();
                        k = b(n.x, n.y) / l;
                        for (var u = n.x, v = n.y, w = 0, y = 0; y < e.length; y++) {
                            var z = Math.atan2(e[y].uf - v, e[y].tf - u) - Math.atan2(e[y].Fb - v, e[y].Eb - u);
                            z > Math.PI ? z -= 2 * Math.PI : z <= -Math.PI && (z += 2 * Math.PI);
                            w += z
                        }
                        f = w / e.length / Math.PI * 180;
                        d(q, "gesturechange", n, k, f)
                    }
                    break;
                case "up":
                    h && 2 > e.length && (h = !1, d(q, "gestureend", n, k, f))
            }
        })
    }

    function Vd(c) {
        c.pa("up", function(a) {
            var b = a.la;
            if (!(200 > a.wh() || 1E3 < a.oj() || 2 > b.length)) {
                for (var d = b[0], e = b[b.length - 1], h = 1; h < b.length - 1; h++)
                    if (40 < b[h].np(d, e)) return !1;
                b = Math.atan2(e.y - d.y, e.x - d.x);
                Sd("Swipe angle %s", Math.round(b / Math.PI * 180));
                a = a.clone();
                a.type = "swipe";
                a.angle = b;
                c.na("swipe", a)
            }
        })
    }

    function Zd(c) {
        this.pw = c;
        this.time = (new Date).getTime();
        this.timeout = 0
    }
    var Wd = function() {
        function c(a) {
            function b(a) {
                var b = d.Re[a];
                b && (Sd("Remove pointer %s", a), clearTimeout(b.timeout), delete d.Re[a])
            }
            var d = this;
            this.Re = {};
            a.pa("down", function(e) {
                b(e.pointerId);
                d.Re[e.pointerId] = new Zd(new G(e.pageX, e.pageY));
                d.Re[e.pointerId].timeout = setTimeout(function() {
                    var b = e.clone();
                    b.type = "hold";
                    b.timestamp = (new Date).getTime();
                    a.na("hold", b)
                }, 1E3)
            });
            a.pa("move", function(a) {
                var e = a.pointerId;
                if (e in d.Re) {
                    var c = d.Re[e];
                    20 < (new G(a.pageX, a.pageY)).Kb(c.pw) && b(e)
                }
            });
            a.pa("up", function(a) {
                b(a.pointerId)
            })
        }
        c.prototype.Xa = function() {
            for (var a in this.Re) clearTimeout(this.Re[a].timeout)
        };
        return c
    }();
    var $d = function() {
        function c(a, b, d, e) {
            this.view = a;
            this.Cg = b;
            this.Ca = this.Ba = 0;
            this.Bb = !1;
            this.log = x.create("SELECT");
            this.Dq(d, e)
        }
        c.prototype.sb = function(a) {
            this.log("Gesture detected; aborting select box.");
            this.view.Qa(this.Cg);
            return this.Cg.sb ? this.Cg.sb(a) : !1
        };
        c.prototype.kc = function() {
            this.view.yl("select")
        };
        c.prototype.zb = function(a, b) {
            return this.Dq(a, b)
        };
        c.prototype.Dq = function(a, b) {
            this.Ba = a;
            this.Ca = b;
            return this.Bb = !0
        };
        c.prototype.ob = function(a, b) {
            if (this.Bb) {
                var d = this;
                this.view.Wq("select", function(e) {
                    e.save();
                    e.strokeStyle = "#0050B7";
                    e.lineWidth = 2 / d.view.scale;
                    e.fillStyle = "rgba(0, 80, 183, 0.2)";
                    var c = new H(d.Ba + .5, d.Ca + .5, a - d.Ba, b - d.Ca);
                    e.fillRect(c.x, c.y, c.width, c.height);
                    e.strokeRect(c.x, c.y, c.width, c.height);
                    e.restore()
                });
                return !0
            }
            return !1
        };
        c.prototype.Cb = function(a, b) {
            this.Bb = !1;
            this.view.cb();
            this.view.Rw(new H(this.Ba, this.Ca, a - this.Ba, b - this.Ca));
            this.view.Tb();
            this.view.Qa(this.Cg);
            return !0
        };
        return c
    }();
    var ae = function() {
        function c(a, b, d) {
            this.view = a;
            this.ba = b;
            this.Ov = d;
            this.state = "none";
            this.scale = 1;
            this.log = x.create("ImageStamp");
            this.Na = document.createElement("img");
            this.url = this.Na.src = b.url;
            "scale" in this.ba && (this.scale = this.ba.scale, delete this.ba.scale)
        }
        c.prototype.hd = function() {
            return "imagestamp"
        };
        c.prototype.Gc = function() {
            this.log("Entering ImageStampBehaviour");
            this.view.cc("move")
        };
        c.prototype.kc = function() {
            this.log("Leaving ImageStampBehaviour");
            this.view.ia()
        };
        c.prototype.Ra = function(a, b) {
            this.Na.complete && (a -= this.Na.width / 2, b -= this.Na.height / 2);
            return this.view.Ra(new G(a, b))
        };
        c.prototype.zb = function(a, b, d) {
            var e = this;
            this.log("onMouseDown type %s", d.type);
            var c = this.Ra(a, b);
            this.view.aa.transaction(function() {
                e.view.aa.createNode("ImageNode", zc({}, e.ba, {
                    url: e.url,
                    layer: e.view.Sa,
                    matrix: (new Fc(c.x, c.y)).multiply(new Hc(e.scale, e.scale))
                }))
            });
            this.Ov || (this.log("MultiStamp not set; return to pick mode."), this.view.hb());
            return !0
        };
        c.prototype.ob = function(a, b) {
            this.Na.complete || this.log("Don't draw; image not loaded.");
            var d = this.Ra(a, b),
                e = this;
            this.view.ia(function(a) {
                var b = a.globalAlpha;
                a.globalAlpha = .5;
                a.drawImage(e.Na, d.x, d.y, e.Na.naturalWidth * e.scale, e.Na.naturalHeight * e.scale);
                a.globalAlpha = b
            });
            return !0
        };
        c.prototype.Cb = function() {
            return !0
        };
        c.prototype.ld = function(a) {
            "cancel" === a && (this.view.hb(), this.view.ic.na("goto-toolbar"))
        };
        return c
    }();
    var be = function() {
        function c(a) {
            this.view = a;
            this.start = new G(0, 0);
            this.yn = new G(0, 0);
            this.active = !1;
            this.rect = null;
            this.log = x.create("PanZoomMixin")
        }
        c.prototype.sb = function(a) {
            this.log("onGesture(%s)", a.type);
            if (!this.view.ga.get("allowZoom")) return !1;
            if ("gesturestart" === a.type) this.start = new G(a.pageX, a.pageY), this.yn = this.view.Hd(a.pageX, a.pageY), this.rect = this.view.zf(), this.active = !0;
            else if ("gesturechange" === a.type && this.rect) {
                var b = a.pageX - this.start.x,
                    d = a.pageY - this.start.y;
                a = this.view.bi(1 / a.scale);
                a = new Hc(a, a, this.yn.x, this.yn.y);
                a = (new Fc(-b / this.view.scale, -d / this.view.scale)).multiply(a);
                b = this.rect.clone();
                b.transform(a);
                this.view.Ng(b)
            } else "gestureend" === a.type && (this.active = !1);
            return !0
        };
        return c
    }();
    var ce = function() {
        function c(a) {
            this.view = a;
            this.state = "none";
            this.start = new G(0, 0);
            this.zr = this.yr = 0;
            this.log = x.create("PanTool");
            this.md = new be(a)
        }
        c.prototype.Gc = function() {
            this.log("Entering PanToolBehaviour");
            this.view.cc("all-scroll")
        };
        c.prototype.kc = function() {
            this.log("Leaving PanToolBehaviour")
        };
        c.prototype.sb = function(a) {
            return this.md.sb(a)
        };
        c.prototype.Tp = function(a) {
            return new G(a.pageX, a.pageY)
        };
        c.prototype.zb = function(a, b, d) {
            this.log("onMouseDown type %s", d.type);
            this.state = "dragging";
            this.start = this.Tp(d);
            this.yr = this.view.lb;
            this.zr = this.view.bb;
            return !0
        };
        c.prototype.ob = function(a, b, d) {
            if ("dragging" !== this.state) return !1;
            a = this.Tp(d);
            b = this.zr + a.y - this.start.y;
            this.view.lb = this.yr + a.x - this.start.x;
            this.view.bb = b;
            this.view.Dc();
            this.view.ia();
            return !0
        };
        c.prototype.Cb = function() {
            this.state = "none";
            return !0
        };
        c.prototype.Km = function(a, b, d, e) {
            if (!this.view.ga.get("allowZoom")) return this.log("Zooming is disabled."), !1;
            this.log("onMouseWheel(%s, %s, %s)", a, b, d);
            d = 0 < d ? 1 / 1.1 : 1.1;
            a = new Hc(d, d, a, b);
            b = this.view.zf();
            b.transform(a);
            this.view.Ng(b);
            e.stopPropagation();
            e.preventDefault();
            return !0
        };
        c.prototype.ld = function(a) {
            "cancel" === a && this.view.hb()
        };
        c.prototype.hd = function() {
            return "pan"
        };
        return c
    }();
    var de = function() {
            function c(a, b) {
                void 0 === b && (b = "repeat");
                this.Na = a;
                this.repeat = b
            }
            c.prototype.loaded = function() {
                return this.Na instanceof HTMLImageElement ? this.Na.complete : !0
            };
            c.prototype.setTransform = function() {};
            return c
        }(),
        ee = function() {
            function c(a, b, d, e) {
                this.Ex = [];
                this.from = new G(a, b);
                this.ha = new G(d, e)
            }
            c.prototype.addColorStop = function(a, b) {
                this.Ex.push({
                    offset: a,
                    lf: b
                })
            };
            return c
        }(),
        ge = function() {
            function c() {
                this.stack = [];
                this.qa = new J;
                this.lineCap = "butt";
                this.lineJoin = "miter";
                this.lineWidth = 1;
                this.strokeStyle = this.fillStyle = "#000000";
                this.textBaseline = "top";
                this.font = "10px arial";
                this.globalCompositeOperation = "source-over";
                this.globalAlpha = 1;
                this.shadowBlur = this.shadowOffsetY = this.shadowOffsetX = 0;
                this.shadowColor = "rgba(0,0,0,0)"
            }
            c.prototype.save = function() {
                this.stack.push({
                    qa: this.qa.clone(),
                    fillStyle: this.fillStyle,
                    font: this.font,
                    lineJoin: this.lineJoin,
                    lineCap: this.lineCap,
                    lineWidth: this.lineWidth,
                    strokeStyle: this.strokeStyle,
                    textBaseline: this.textBaseline,
                    globalCompositeOperation: this.globalCompositeOperation,
                    globalAlpha: this.globalAlpha,
                    shadowOffsetX: this.shadowOffsetX,
                    shadowOffsetY: this.shadowOffsetY,
                    shadowBlur: this.shadowBlur,
                    shadowColor: this.shadowColor,
                    kf: this.fl()
                })
            };
            c.prototype.restore = function() {
                var a = this.stack.pop();
                a && (this.qa = a.qa, this.fillStyle = a.fillStyle, this.font = a.font, this.lineJoin = a.lineJoin, this.lineCap = a.lineCap, this.lineWidth = a.lineWidth, this.qa = a.qa, this.strokeStyle = a.strokeStyle, this.textBaseline = a.textBaseline, this.globalCompositeOperation = a.globalCompositeOperation, this.globalAlpha = a.globalAlpha, this.shadowOffsetX = a.shadowOffsetX, this.shadowOffsetY = a.shadowOffsetY, this.shadowBlur = a.shadowBlur, this.shadowColor = a.shadowColor, this.il(a.kf))
            };
            c.prototype.drawImage = function(a, b, d, e, c, f, k, l, n) {
                var h = a.width,
                    u = a.height,
                    v = 0,
                    w = h,
                    y = u;
                void 0 !== e && void 0 !== c && void 0 !== f && void 0 !== k && void 0 !== l && void 0 !== n ? (v = b, 0 - d, w = e, y = c, b = f, d = k, h = l, u = n) : void 0 !== e && void 0 !== c && (h = e, u = c);
                this.cl(a, v, 0, w, y, b, d, h, u)
            };
            c.prototype.beginPath = function() {};
            c.prototype.closePath = function() {};
            c.prototype.arc = function(a, b, d, e, c, f) {
                f && (f = e, e = c, c = f);
                for (; 0 > e;) e += 2 * Math.PI;
                for (; 0 > c;) c += 2 * Math.PI;
                e > c && (e -= 2 * Math.PI);
                var h = 2 * Math.PI;
                var l = e % h;
                var n = c % h;
                n === l && (n += 2 * Math.PI);
                c = [];
                e = Math.PI / 2;
                f = l < n ? 1 : -1;
                var q = l;
                for (h = Math.min(h, Math.abs(n - l)); 1E-5 < h;) {
                    l = q + f * Math.min(h, e);
                    var u = (l - q) / 2,
                        v = d * Math.cos(u),
                        w = d * Math.sin(u),
                        y = .5522847498 * Math.tan(u);
                    n = v + y * w;
                    v = -w + y * v;
                    w = -v;
                    y = u + q;
                    u = Math.cos(y);
                    y = Math.sin(y);
                    c.push({
                        iy: d * Math.cos(q),
                        ec: d * Math.sin(q),
                        jy: n * u - v * y,
                        fc: n * y + v * u,
                        ky: n * u - w * y,
                        my: n * y + w * u,
                        ly: d * Math.cos(l),
                        ny: d * Math.sin(l)
                    });
                    h -= Math.abs(l - q);
                    q = l
                }
                for (d = 0; d < c.length; d++) e = c[d], 0 === d && this.moveTo(e.iy + a, e.ec + b), this.bezierCurveTo(e.jy + a, e.fc + b, e.ky + a, e.my + b, e.ly + a, e.ny + b)
            };
            c.prototype.arcTo = function() {};
            c.prototype.strokeRect = function(a, b, d, e) {
                this.beginPath();
                this.rect(a, b, d, e);
                this.stroke()
            };
            c.prototype.setTransform = function(a, b, d, e, c, f) {
                this.qa = new J(a, d, b, e, c, f)
            };
            c.prototype.transform = function(a, b, d, e, c, f) {
                a = new J(a, d, b, e, c, f);
                this.qa = this.qa.multiply(a)
            };
            c.prototype.translate = function(a, b) {
                this.transform(1, 0, 0, 1, a, b)
            };
            c.prototype.scale = function(a, b) {
                this.transform(a, 0, 0, b, 0, 0)
            };
            c.prototype.rotate = function(a) {
                var b = Math.cos(a);
                a = Math.sin(a);
                this.transform(b, a, -a, b, 0, 0)
            };
            c.prototype.rect = function(a, b, d, e) {
                this.beginPath();
                this.moveTo(a, b);
                this.lineTo(a + d, b);
                this.lineTo(a + d, b + e);
                this.lineTo(a, b + e);
                this.lineTo(a, b);
                this.closePath()
            };
            c.prototype.fillRect = function(a, b, d, e) {
                this.rect(a, b, d, e);
                this.fill()
            };
            c.prototype.ef = function(a) {
                return fe(a)
            };
            c.prototype.createPattern = function(a, b) {
                return new de(a, b)
            };
            c.prototype.createLinearGradient = function(a, b, d, e) {
                return new ee(a, b, d, e)
            };
            return c
        }(),
        he = function() {
            function c(a) {
                this.fontFamily = "";
                this.fontSize = 10;
                this.lineHeight = this.fontVariant = this.fontWeight = this.fontStyle = "normal";
                a = fe(a);
                this.fontFamily = a.fontFamily || "Arial";
                this.fontSize = parseFloat(a.fontSize);
                this.fontStyle = a.fontStyle;
                this.fontWeight = a.fontWeight;
                this.fontVariant = a.fontVariant;
                this.lineHeight = a.lineHeight
            }
            c.prototype.toString = function() {
                var a = this.fontSize + 'px "' + this.fontFamily + '"';
                "bold" === this.fontWeight && (a = "bold " + a);
                "italic" === this.fontStyle && (a = "italic" + a);
                return a
            };
            return c
        }();

    function fe(c) {
        var a = null,
            b = "10",
            d = "normal",
            e = "normal",
            h = "normal",
            f = "normal",
            k = !1;
        c = c.split(/\s+/);
        a: for (;;) {
            var l = c.shift();
            if (!l) break;
            switch (l) {
                case "normal":
                    break;
                case "italic":
                case "oblique":
                    d = l;
                    break;
                case "small-caps":
                    h = l;
                    break;
                case "bold":
                case "bolder":
                case "lighter":
                case "100":
                case "200":
                case "300":
                case "400":
                case "500":
                case "600":
                case "700":
                case "800":
                case "900":
                    e = l;
                    break;
                default:
                    if (k) {
                        a = l;
                        c.length && (a += " " + c.join(" "));
                        2 < a.length && ('"' === a.charAt(0) || "'" === a.charAt(0)) && (a = a.substr(1, a.length - 2));
                        break a
                    } else l = l.split("/"), b = l[0], k = !0, 1 < l.length && (f = l[1])
            }
        }
        return {
            fontStyle: d,
            fontVariant: h,
            fontWeight: e,
            fontSize: b,
            lineHeight: f,
            fontFamily: a
        }
    };
    var ie = function() {
            function c() {
                this.da = []
            }
            c.prototype.lineTo = function(a, b, d) {
                a.apply(b, d);
                this.da.push({
                    kh: "L",
                    Ag: a.apply(b, d)
                })
            };
            c.prototype.moveTo = function(a, b, d) {
                a.apply(b, d);
                this.da.push({
                    kh: "M",
                    Ag: a.apply(b, d)
                })
            };
            c.prototype.quadraticCurveTo = function(a, b, d, e, c) {
                this.da.push({
                    kh: "Q",
                    Ag: a.apply(b, d),
                    kk: a.apply(e, c)
                })
            };
            c.prototype.bezierCurveTo = function(a, b, d, e, c, f, k) {
                this.da.push({
                    kh: "C",
                    Ag: a.apply(b, d),
                    kk: a.apply(e, c),
                    Om: a.apply(f, k)
                })
            };
            c.prototype.closePath = function() {
                this.da.push({
                    kh: "Z"
                })
            };
            c.prototype.Jn = function(a) {
                a = a.inverse();
                for (var b = "", d = 0; d < this.da.length; d++) {
                    var e = this.da[d];
                    0 < d && (b += " ");
                    b += e.kh;
                    if (e.Ag) {
                        var c = a.apply(e.Ag.x, e.Ag.y);
                        b += c.x + "," + c.y;
                        e.kk && (c = a.apply(e.kk.x, e.kk.y), b += "," + c.x + "," + c.y, e.Om && (e = a.apply(e.Om.x, e.Om.y), b += "," + e.x + "," + e.y))
                    }
                }
                return b
            };
            return c
        }(),
        je = function(c) {
            function a(a) {
                var b = c.call(this) || this;
                b.qa = new J;
                b.da = [];
                b.path = new ie;
                b.kf = "";
                b.lc = [];
                b.Nb = 0;
                b.log = x.create("SvgContext");
                b.Xg = 1;
                b.bg = 2;
                b.$k = 4;
                b.log("SVG context rect: %s", a);
                b.root = new Ca("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    "xmlns:zwibbler": "http://zwibbler.com/xml",
                    version: 1.2,
                    baseProfile: "tiny",
                    width: a.width,
                    height: a.height,
                    viewBox: a.x + " " + a.y + " " + a.width + " " + a.height
                });
                b.Zi = new Ca("defs", {});
                b.root.Ud(b.Zi);
                b.Ej = [b.root];
                return b
            }
            __extends(a, c);
            a.prototype.Dv = function() {
                return "clip" + this.Nb++
            };
            a.prototype.Zh = function(a) {
                a = new Ca("g", a || {});
                this.Fl().Ud(a);
                this.Ej.push(a)
            };
            a.prototype.Yh = function() {
                var a = this.Ej.pop();
                if (a && 1 === a.children.length) {
                    var d = a.children[0];
                    d.fi(a.attributes);
                    a.name = d.name;
                    a.attributes = d.attributes;
                    a.children = d.children;
                    a.text = d.text
                }
            };
            a.prototype.Fl = function() {
                return this.Ej[this.Ej.length - 1]
            };
            a.prototype.node = function(a, d, e, c) {
                function b(a, b) {
                    if (b instanceof de) e[a] = "url(#" + h.Pk(b) + ")";
                    else if ("string" === typeof b) {
                        var d = r.Yd(b),
                            c = d.values[3];
                        1 > c && (d.values[3] = 1, e[a + "-opacity"] = "" + c);
                        e[a] = d.toString()
                    }
                }
                void 0 === e && (e = {});
                var h = this;
                this.qa.iq() || (e.transform = "matrix(" + this.qa.m11 + " " + this.qa.m21 + " " + this.qa.m12 + " " + this.qa.m22 + " " + this.qa.Ba + " " + this.qa.Ca + ")");
                d & this.Xg ? b("fill", this.fillStyle) : e.fill = "none";
                d & this.bg && (b("stroke", this.strokeStyle), e["stroke-width"] = this.lineWidth, "miter" !== this.lineJoin && (e["stroke-linejoin"] = this.lineJoin), "butt" !== this.lineCap && (e["stroke-linecap"] = this.lineCap));
                d & this.$k && (d = this.ef(this.font), e["font-weight"] = d.fontWeight, e["font-size"] = parseFloat(d.fontSize), e["font-style"] = d.fontStyle, e["font-family"] = d.fontFamily);
                "" !== this.kf && (e["clip-path"] = "url(#" + this.kf + ")");
                this.vs(new Ca(a, e, c))
            };
            a.prototype.vs = function(a) {
                var b = !0,
                    e = null,
                    c = {},
                    f, k = this.Fl();
                0 === k.children.length ? b = !1 : e = k.children[k.children.length - 1];
                !e || a.name === e.name && a.text === e.text || (b = !1);
                if (b && e)
                    for (f in e.attributes)
                        if (e.attributes.hasOwnProperty(f))
                            if (f in a.attributes) {
                                var l = e.attributes[f],
                                    n = a.attributes[f];
                                if (l !== n)
                                    if (0 === f.indexOf("fill") || 0 === f.indexOf("stroke"))
                                        if ("none" === l) c[f] = n;
                                        else if ("none" === n) c[f] = l;
                                else {
                                    b = !1;
                                    break
                                } else {
                                    b = !1;
                                    break
                                }
                            } else c[f] = e.attributes[f];
                if (b && e)
                    for (f in a.attributes) a.attributes.hasOwnProperty(f) && (f in e.attributes || (c[f] = a.attributes[f]));
                b && e ? e.fi(c) : k.Ud(a)
            };
            a.prototype.Rj = function(a) {
                if (a === this.bg) {
                    if (0 === this.lineWidth) return !1;
                    a = this.strokeStyle
                } else a = this.fillStyle;
                return a instanceof de ? !0 : "string" === typeof a ? 0 < r.Yd(a).values[3] : !1
            };
            a.prototype.Do = function(a) {
                for (var b = 0; b < this.lc.length; b++)
                    if (this.lc[b].Hh === a) return this.lc[b].Vh;
                return null
            };
            a.prototype.Ok = function(a) {
                var b = this.Do(a);
                if (b) return b;
                b = "image" + this.lc.length;
                this.lc.push({
                    Hh: a,
                    Vh: b
                });
                var e = document.createElement("canvas"),
                    c = e.getContext("2d");
                e.width = a.width;
                e.height = a.height;
                c.drawImage(a, 0, 0);
                e = e.toDataURL();
                a = new Ca("image", {
                    id: b,
                    x: 0,
                    y: 0,
                    width: a.width,
                    height: a.height,
                    "xlink:href": e
                });
                this.Zi.Ud(a);
                return b
            };
            a.prototype.Pk = function(a) {
                var b = this.Do(a);
                if (b) return b;
                var e = this.Ok(a.Na);
                b = "pattern" + this.lc.length;
                this.lc.push({
                    Hh: a,
                    Vh: b
                });
                var c = new Ca("pattern", {
                    id: b
                });
                "no-repeat" === a.repeat ? (c.attributes.width = "1", c.attributes.height = "1") : "repeat-x" === a.repeat ? (c.attributes.patternUnits = "userSpaceOnUse", c.attributes.width = a.Na.width, c.attributes.height = 1E4) : ("repeat-y" === a.repeat ? (c.attributes.patternUnits = "userSpaceOnUse", c.attributes.width = 1E4) : (c.attributes.patternUnits = "userSpaceOnUse", c.attributes.width = a.Na.width), c.attributes.height = a.Na.height);
                c.Ud(new Ca("use", {
                    "xlink:href": "#" + e
                }));
                this.Zi.Ud(c);
                return b
            };
            a.prototype.toString = function() {
                return '<?xml version="1.0" encoding="UTF-8"?>\n' + this.root.toString()
            };
            a.prototype.toBlob = function() {
                for (var a = this.toString(), d = new Uint8Array(a.length), e = 0; e < a.length; e++) d[e] = a.charCodeAt(e);
                return new Blob([d], {
                    type: "image/svg+xml"
                })
            };
            a.prototype.beginPath = function() {
                this.path = new ie
            };
            a.prototype.transform = function(a, d, e, c, f, k) {
                a = new J(a, e, d, c, f, k);
                this.qa = this.qa.multiply(a)
            };
            a.prototype.closePath = function() {
                this.path.closePath()
            };
            a.prototype.fill = function() {
                this.Rj(this.Xg) && this.node("path", this.Xg, {
                    d: this.path.Jn(this.qa)
                })
            };
            a.prototype.stroke = function() {
                this.Rj(this.bg) && this.node("path", this.bg, {
                    d: this.path.Jn(this.qa)
                })
            };
            a.prototype.moveTo = function(a, d) {
                this.path.moveTo(this.qa, a, d)
            };
            a.prototype.lineTo = function(a, d) {
                this.path.lineTo(this.qa, a, d)
            };
            a.prototype.quadraticCurveTo = function(a, d, e, c) {
                this.path.quadraticCurveTo(this.qa, a, d, e, c)
            };
            a.prototype.bezierCurveTo = function(a, d, e, c, f, k) {
                this.path.bezierCurveTo(this.qa, a, d, e, c, f, k)
            };
            a.prototype.fillText = function(a, d, e) {
                this.Rj(this.Xg) && (this.ef(this.font), this.node("text", this.Xg | this.$k, {
                    x: d,
                    y: e
                }, a))
            };
            a.prototype.strokeText = function(a, d, e) {
                this.Rj(this.bg) && (this.ef(this.font), this.node("text", this.bg | this.$k, {
                    x: d,
                    y: e
                }, a))
            };
            a.prototype.cl = function(a, d, e, c, f, k, l, n, q) {
                var b = document.createElement("canvas"),
                    h = b.getContext("2d");
                b.width = c;
                b.height = f;
                h.drawImage(a, -d, -e);
                a = b.toDataURL();
                this.Fl().Ud(new Ca("image", {
                    transform: "matrix(" + this.qa.m11 + " " + this.qa.m21 + " " + this.qa.m12 + " " + this.qa.m22 + " " + this.qa.Ba + " " + this.qa.Ca + ")",
                    x: k,
                    y: l,
                    width: n,
                    height: q,
                    "xlink:href": a
                }))
            };
            a.prototype.measureText = function(a) {
                var b = document.createElement("canvas").getContext("2d");
                b.font = this.font;
                return b.measureText(a)
            };
            a.prototype.Og = function() {};
            a.prototype.fl = function() {
                return {
                    name: this.kf
                }
            };
            a.prototype.il = function(a) {
                this.kf = a ? a.name : ""
            };
            a.prototype.clip = function() {
                var a = this.Dv(),
                    d = new Ca("clipPath", {
                        id: a
                    });
                d.Ud(new Ca("path", {
                    d: this.path.Jn(this.qa)
                }));
                this.Zi.Ud(d);
                this.kf = a;
                this.path = new ie
            };
            return a
        }(ge);

    function ke(c) {
        var a;
        void 0 === a && (a = "Assertion failed.");
        if (!c) throw Error(a);
    }
    var le = function() {
            function c(a) {
                var b = this;
                this.$c = 0;
                this.log = x.create("BinaryReader");
                if ("string" === typeof a) this.length = a.length, this.getUint8 = function() {
                    ke(b.$c < a.length);
                    return a.charCodeAt(b.$c++) & 255
                };
                else {
                    var d = new Uint8Array(a);
                    this.length = d.length;
                    this.getUint8 = function() {
                        ke(b.$c < d.length);
                        return d[b.$c++]
                    }
                }
            }
            c.prototype.seek = function(a) {
                ke(0 <= a && a <= this.length);
                var b = this.$c;
                this.$c = a;
                return b
            };
            c.prototype.getUint16 = function() {
                return (this.getUint8() << 8 | this.getUint8()) >>> 0
            };
            c.prototype.getUint32 = function() {
                return this.getInt32() >>> 0
            };
            c.prototype.getInt16 = function() {
                var a = this.getUint16();
                a & 32768 && (a -= 65536);
                return a
            };
            c.prototype.getInt32 = function() {
                return this.getUint8() << 24 | this.getUint8() << 16 | this.getUint8() << 8 | this.getUint8()
            };
            c.prototype.Mb = function() {
                return this.getInt16()
            };
            c.prototype.cv = function() {
                this.getUint16()
            };
            c.prototype.xf = function() {
                return this.getInt16() / 16384
            };
            c.prototype.cm = function() {
                return this.getInt32() / 65536
            };
            c.prototype.Up = function(a) {
                for (var b = "", d = 0; d < a; d++) b += String.fromCharCode(this.getUint8());
                return b
            };
            c.prototype.dv = function(a) {
                for (var b = "", d = 0; d < a; d += 2) b += String.fromCharCode(this.getUint16());
                return b
            };
            c.prototype.getDate = function() {
                var a = 1E3 * (4294967296 * this.getUint32() + this.getUint32()) + Date.UTC(1904, 1, 1);
                return new Date(a)
            };
            return c
        }(),
        me = function() {
            function c(a) {
                this.format = 0;
                this.To = [];
                this.log = x.create("CMAP0");
                for (var b = 0; 256 > b; b++) {
                    var d = a.getUint8();
                    this.log("   Glyph[%s] = %s", b, d);
                    this.To.push(d)
                }
            }
            c.prototype.map = function(a) {
                return 0 <= a && 255 >= a ? this.To[a] : 0
            };
            return c
        }(),
        ne = function() {
            function c(a) {
                this.file = a;
                this.format = 4;
                this.cache = {};
                this.log = x.create("CMAP4");
                var b, d = [],
                    e = a.getUint16() / 2;
                a.getUint16();
                a.getUint16();
                a.getUint16();
                for (b = 0; b < e; b++) d.push({
                    Lj: 0,
                    Ek: 0,
                    tp: a.getUint16(),
                    bq: 0
                });
                a.getUint16();
                for (b = 0; b < e; b++) d[b].Ek = a.getUint16();
                for (b = 0; b < e; b++) d[b].bq = a.getUint16();
                for (b = 0; b < e; b++) {
                    var c = a.getUint16();
                    d[b].Lj = c ? a.$c - 2 + c : 0
                }
                this.ta = d
            }
            c.prototype.map = function(a) {
                if (!(a in this.cache)) {
                    for (var b = 0; b < this.ta.length; b++) {
                        var d = this.ta[b];
                        if (d.Ek <= a && d.tp >= a) {
                            if (d.Lj) {
                                var e = d.Lj + 2 * (a - d.Ek);
                                this.file.seek(e);
                                var c = this.file.getUint16()
                            } else c = d.bq + a & 65535;
                            this.log("Charcode %s is between %s and %s; maps to %s (%s) roffset=%s", a, d.Ek, d.tp, e, c, d.Lj);
                            this.cache[a] = c;
                            break
                        }
                    }
                    b === this.ta.length && (this.cache[a] = 0)
                }
                return this.cache[a]
            };
            return c
        }(),
        pe = function() {
            function c(a, b, d) {
                this.file = a;
                this.map = {};
                this.bk = -1;
                this.log = x.create("KERN0");
                this.Hx = b && !d || !b && d;
                this.file = a;
                this.offset = a.$c;
                this.Pv = a.getUint16();
                a.getUint16();
                a.getUint16();
                a.getUint16();
                for (b = 0; b < this.Pv; b++) {
                    d = a.getUint16();
                    var e = a.getUint16(),
                        c = a.Mb();
                    this.map[d << 16 | e] = c
                }
                this.reset()
            }
            c.prototype.reset = function() {
                this.bk = -1
            };
            c.prototype.get = function(a) {
                var b = 0;
                if (0 <= this.bk) {
                    var d = this.bk << 16 | a;
                    d in this.map && (b = this.map[d])
                }
                this.bk = a;
                return this.Hx ? {
                    x: 0,
                    y: b
                } : {
                    x: b,
                    y: 0
                }
            };
            return c
        }(),
        qe = function() {
            function c(a) {
                this.Al = [];
                this.Cf = [];
                this.eq = this.eo = this.bo = this.fo = this.co = this.Sn = this.flags = this.pq = this.version = 0;
                this.fontFamily = this.wf = "";
                this.Sh = 0;
                this.log = x.create("TrueType");
                this.file = new le(a);
                this.ib = this.Aw(this.file);
                this.ww(this.file);
                this.zw(this.file);
                this.uw(this.file);
                this.xw(this.file);
                this.yw(this.file);
                this.length = this.fv()
            }
            c.prototype.Aw = function(a) {
                var b = {};
                a.getUint32();
                var d = a.getUint16();
                a.getUint16();
                a.getUint16();
                a.getUint16();
                for (var e = 0; e < d; e++) {
                    var c = a.Up(4);
                    b[c] = {
                        at: a.getUint32(),
                        offset: a.getUint32(),
                        length: a.getUint32()
                    };
                    "head" !== c && this.log("Table %s has checksum 0x%s", c, b[c].at.toString(16))
                }
                return b
            };
            c.prototype.ww = function(a) {
                ke("head" in this.ib);
                a.seek(this.ib.head.offset);
                this.version = a.cm();
                a.cm();
                a.getUint32();
                this.pq = a.getUint32();
                ke(1594834165 === this.pq);
                this.flags = a.getUint16();
                this.Sn = a.getUint16();
                a.getDate();
                a.getDate();
                this.co = a.Mb();
                this.fo = a.Mb();
                this.bo = a.Mb();
                this.eo = a.Mb();
                a.getUint16();
                a.getUint16();
                a.getInt16();
                this.eq = a.getInt16();
                a.getInt16()
            };
            c.prototype.uw = function(a) {
                ke("cmap" in this.ib);
                var b = this.ib.cmap.offset;
                a.seek(b);
                a.getUint16();
                for (var d = a.getUint16(), e = 0; e < d; e++) {
                    var c = a.getUint16(),
                        f = a.getUint16(),
                        k = a.getUint32();
                    this.log("CMap platformid=%s specificid=%s offset=%s", c, f, k);
                    3 === c && 1 >= f && this.tw(a, b + k)
                }
            };
            c.prototype.tw = function(a, b) {
                var d = a.seek(b),
                    e = a.getUint16(),
                    c = a.getUint16();
                a.getUint16();
                var f;
                this.log("    Cmap format %s length %s", e, c);
                0 === e ? f = new me(a, c) : 4 === e && (f = new ne(a, c));
                f && this.Al.push(f);
                a.seek(d)
            };
            c.prototype.yw = function(a) {
                if ("kern" in this.ib) {
                    a.seek(this.ib.kern.offset);
                    var b = a.getUint16(),
                        d = a.getUint16();
                    this.log("Kern Table version: %s", b);
                    this.log("Kern nTables: %s", d);
                    for (var e = 0; e < d; e++) {
                        b = a.getUint16();
                        var c = a.getUint16(),
                            f = a.getUint16(),
                            k = f >> 8,
                            l = f & 4,
                            n = 0 === (f & 1);
                        this.log("Kerning subtable version %s format %s length %s coverage: %s", b, k, c, f);
                        b = null;
                        0 === k ? b = new pe(a, n, 0 != l) : (this.log("Unknown format -- skip"), a.seek(a.$c + c));
                        b && this.Cf.push(b)
                    }
                }
            };
            c.prototype.zw = function(a) {
                ke("name" in this.ib);
                var b = this.ib.name.offset;
                a.seek(b);
                a.getUint16();
                for (var d = a.getUint16(), e = a.getUint16(), c = 0; c < d; c++) {
                    var f = a.getUint16(),
                        k = a.getUint16(),
                        l = a.getUint16(),
                        n = a.getUint16(),
                        q = a.getUint16(),
                        u = a.getUint16();
                    u = a.seek(b + e + u);
                    q = 0 === f || 3 === f ? a.dv(q) : a.Up(q);
                    this.log("Name %s/%s id %s language %s: %s", f, k, n, l, q);
                    a.seek(u);
                    switch (n) {
                        case 1:
                            this.fontFamily = q;
                            break;
                        case 4:
                            this.wf = q
                    }
                }
            };
            c.prototype.xw = function(a) {
                ke("hhea" in this.ib);
                a.seek(this.ib.hhea.offset);
                a.cm();
                a.Mb();
                a.Mb();
                a.Mb();
                a.cv();
                a.Mb();
                a.Mb();
                a.Mb();
                a.getInt16();
                a.getInt16();
                a.Mb();
                a.getInt16();
                a.getInt16();
                a.getInt16();
                a.getInt16();
                a.getInt16();
                this.Sh = a.getUint16()
            };
            c.prototype.Gu = function(a) {
                ke("hmtx" in this.ib);
                var b = this.file;
                b.seek(this.ib.hmtx.offset + 4);
                var d = this.ib.hmtx.offset;
                if (a < this.Sh) {
                    var e = this.file.seek(d + 4 * a);
                    var c = b.getUint16();
                    a = b.getInt16()
                } else e = b.seek(d + 4 * (this.Sh - 1)), c = b.getUint16(), b.seek(d + 4 * this.Sh + 2 * (a - this.Sh)), a = b.Mb();
                this.file.seek(e);
                return {
                    Ro: c,
                    xv: a
                }
            };
            c.prototype.fv = function() {
                ke("maxp" in this.ib);
                var a = this.file.seek(this.ib.maxp.offset + 4),
                    b = this.file.getUint16();
                this.file.seek(a);
                return b
            };
            c.prototype.Bu = function(a) {
                ke("loca" in this.ib);
                var b = this.ib.loca,
                    d = this.file;
                if (1 === this.eq) {
                    b = d.seek(b.offset + 4 * a);
                    a = d.getUint32();
                    var e = d.getUint32()
                } else b = d.seek(b.offset + 2 * a), a = 2 * d.getUint16(), e = 2 * d.getUint16();
                d.seek(b);
                return a === e ? 0 : a + this.ib.glyf.offset
            };
            c.prototype.Uq = function(a) {
                var b = this.Bu(a);
                a = this.file;
                if (0 === b || b >= this.ib.glyf.offset + this.ib.glyf.length) return null;
                ke(b >= this.ib.glyf.offset);
                ke(b < this.ib.glyf.offset + this.ib.glyf.length);
                a.seek(b);
                b = {
                    Vd: [],
                    Uh: a.getInt16(),
                    la: [],
                    co: a.Mb(),
                    fo: a.Mb(),
                    bo: a.Mb(),
                    eo: a.Mb()
                };
                ke(-1 <= b.Uh); - 1 === b.Uh ? this.vw(a, b) : this.Bw(a, b);
                return b
            };
            c.prototype.Bw = function(a, b) {
                function d(b, d, c) {
                    for (var h = 0, l = 0; l < f; l++) {
                        var n = k[l];
                        n & d ? h = n & c ? h + a.getUint8() : h - a.getUint8() : ~n & c && (h += a.getInt16());
                        e[l][b] = h
                    }
                }
                b.Vd = [];
                for (var e = b.la = [], c = 0; c < b.Uh; c++) b.Vd.push(a.getUint16());
                a.seek(a.getUint16() + a.$c);
                if (0 !== b.Uh) {
                    var f = Math.max.apply(null, b.Vd) + 1,
                        k = [];
                    for (c = 0; c < f; c++) {
                        var l = a.getUint8();
                        k.push(l);
                        e.push({
                            x: 0,
                            y: 0,
                            yg: 0 < (l & 1)
                        });
                        if (l & 8) {
                            var n = a.getUint8();
                            ke(0 < n);
                            for (c += n; n--;) k.push(l), e.push({
                                x: 0,
                                y: 0,
                                yg: 0 < (l & 1)
                            })
                        }
                    }
                    d("x", 2, 16, b.co, b.bo);
                    d("y", 4, 32, b.fo, b.eo)
                }
            };
            c.prototype.vw = function(a, b) {
                var d, e, c = 32;
                b.Vd = [];
                for (b.la = []; c & 32;) {
                    c = a.getUint16();
                    var f = a.getUint16();
                    var k = 1;
                    var l = d = 0;
                    var n = 1;
                    var q = e = 0;
                    if (c & 1) {
                        var u = a.getInt16();
                        var v = a.getInt16()
                    } else u = a.getUint8(), v = a.getUint8();
                    c & 2 && (e = u, q = v);
                    c & 8 ? n = k = a.xf() : c & 64 ? (k = a.xf(), n = a.xf()) : c & 128 && (k = a.xf(), d = a.xf(), l = a.xf(), n = a.xf());
                    this.log("Read component glyph index %s", f);
                    this.log("Transform: [%s %s %s %s %s %s]", k, d, l, n, e, q);
                    u = a.$c;
                    if (f = this.Uq(f)) {
                        var w = b.la.length;
                        for (v = 0; v < f.Vd.length; v++) b.Vd.push(f.Vd[v] + w);
                        for (v = 0; v < f.la.length; v++) {
                            w = f.la[v].x;
                            var y = f.la[v].y;
                            w = k * w + d * y + e;
                            y = l * w + n * y + q;
                            b.la.push({
                                x: w,
                                y: y,
                                yg: f.la[v].yg
                            })
                        }
                    }
                    a.seek(u)
                }
                b.Uh = b.Vd.length;
                c & 256 && a.seek(a.getUint16() + a.$c)
            };
            c.prototype.zt = function(a, b, d, e) {
                b = this.Uq(b);
                if (null !== b)
                    for (var c = 0, f = 0, k = 0, l = 0, n; f < b.la.length; f++) {
                        var q = b.la[f];
                        0 === c ? (a.moveTo(q.x + d, q.y + e), c = 1) : 1 === c ? q.yg ? a.lineTo(q.x + d, q.y + e) : c = 2 : (n = b.la[f - 1], q.yg ? (a.quadraticCurveTo(n.x + d, n.y + e, q.x + d, q.y + e), c = 1) : a.quadraticCurveTo(n.x + d, n.y + e, (n.x + q.x) / 2 + d, (n.y + q.y) / 2 + e));
                        f === b.Vd[k] && (2 === c && (n = q, q = b.la[l], q.yg ? a.quadraticCurveTo(n.x + d, n.y + e, q.x + d, q.y + e) : a.quadraticCurveTo(n.x + d, n.y + e, (n.x + q.x) / 2 + d, (n.y + q.y) / 2 + e)), l = f + 1, k += 1, c = 0)
                    }
            };
            c.prototype.transform = function(a, b) {
                a.scale(b / this.Sn, -b / this.Sn)
            };
            c.prototype.Ft = function(a, b, d, e, c) {
                a.save();
                a.translate(d, e);
                this.transform(a, c);
                e = d = 0;
                this.Hw();
                for (c = 0; c < b.length; c++) {
                    var h = this.Fv(b.charCodeAt(c)),
                        k = this.Gu(h),
                        l = this.Rv(h);
                    this.log("Metrics for %s code %s index %s: %s %s kern: %s,%s", b.charAt(c), b.charCodeAt(c), h, k.Ro, k.xv, l.x, l.y);
                    this.zt(a, h, d + l.x, e + l.y);
                    d += k.Ro
                }
                a.restore()
            };
            c.prototype.Fv = function(a) {
                for (var b = 0, d = 0; d < this.Al.length && !(b = this.Al[d].map(a)); d++);
                return b
            };
            c.prototype.Hw = function() {
                for (var a = 0; a < this.Cf.length; a++) this.Cf[a].reset()
            };
            c.prototype.Rv = function(a) {
                for (var b, d = 0, e = 0, c = 0; c < this.Cf.length; c++) b = this.Cf[c].get(a), d += b.x, e += b.y;
                return {
                    x: d,
                    y: e
                }
            };
            return c
        }(),
        re = function(c) {
            function a() {
                var a = c.call(this) || this;
                a.fonts = {};
                a.Th = 0;
                a.Nl = [];
                a.log = x.create("FontCollection");
                return a
            }
            __extends(a, c);
            a.prototype.add = function(a, d) {
                this.Th += 1;
                var b = this;
                return Yb({
                    url: a,
                    mimeType: "text/plain; charset=x-user-defined"
                }).then(function(e) {
                    b.gs(a, d, e.responseText)
                }, function(d) {
                    b.za(a, d.message)
                })
            };
            a.prototype.au = function(a) {
                for (var b in this.fonts) {
                    var e = this.fonts[b];
                    if (e.url === a) return e.font
                }
                return null
            };
            a.prototype.za = function(a, d) {
                this.log("Error when fetching " + a + ": " + d);
                --this.Th;
                this.xo()
            };
            a.prototype.gs = function(a, d, e) {
                this.log("Got font %s; result is %s bytes", a, e.length);
                for (var b = "", c = 0; c < e.length; c++) b += String.fromCharCode(e.charCodeAt(c) & 255);
                e = new qe(b);
                this.log("Loaded '%s'", e.wf);
                for (c = 0; c < e.wf.length; c++) this.log("   %s, %s", e.wf.charAt(c), e.wf.charCodeAt(c));
                d = d || e.fontFamily;
                this.fonts[d] = {
                    name: e.wf,
                    url: a,
                    data: b,
                    font: e
                };
                --this.Th;
                this.xo()
            };
            a.prototype.xo = function() {
                if (0 === this.Th) {
                    this.na("done");
                    for (var a = 0; a < this.Nl.length; a++) this.Nl[a]();
                    this.Nl.length = 0
                }
            };
            a.prototype.get = function(a) {
                this.log("Lookup font %s", a);
                for (var b = 0; b < a.length; b++) this.log("   %s, %s", a.charAt(b), a.charCodeAt(b));
                if (a in this.fonts) return this.fonts[a].font;
                this.log("Lookup font %s; not found", a);
                for (var e in this.fonts) this.log("Searched: '%s'", e)
            };
            return a
        }(bb);
    var se = function() {
            function c(a, b, d, e) {
                this.x = a;
                this.y = b;
                this.width = d;
                this.height = e;
                this.lc = [];
                this.fonts = {};
                this.images = [];
                this.Lk = {};
                this.Nb = 1;
                this.ht = !0;
                this.page = {};
                this.log = x.create("PdfWriter");
                this.Wh = this.object("Pages", {
                    Kids: [],
                    Count: 0
                });
                this.Ys = this.object("Catalog", {
                    Pages: this.Wh._id + " 0 R"
                });
                this.Og()
            }
            c.prototype.sv = function() {
                if (null !== c.hl) return c.hl;
                var a = document.createElement("canvas"),
                    b = !1;
                a.width = 10;
                a.height = 10;
                "toDataURL" in a && (b = 0 < a.toDataURL("image/jpeg").indexOf("jpeg"));
                c.hl = b;
                this.log("JPEG supported: %s", b);
                return b
            };
            c.prototype.Og = function(a, b, d, e) {
                void 0 === a && (a = this.x);
                void 0 === b && (b = this.x);
                void 0 === d && (d = this.width);
                void 0 === e && (e = this.height);
                this.log("StartPage MediaBox=[%s %s %s %s]", a, b, d, e);
                this.page = this.object("Page", {
                    MediaBox: [a, b, a + d, b + e],
                    Parent: this.Wh._id + " 0 R"
                });
                this.Wh.Kids.push(this.page._id + " 0 R");
                this.Wh.Count += 1;
                this.Lk = {}
            };
            c.prototype.object = function(a, b) {
                var d = this.lc.length + 1;
                a && (b.Type = a);
                b._id = d;
                this.lc.push(b);
                return b
            };
            c.prototype.zs = function(a) {
                this.page.Contents = a._id + " 0 R"
            };
            c.prototype.stream = function(a) {
                if (this.ht) {
                    var b = Sa.$e("LZWEncoder");
                    b.Kr(a);
                    b.flush();
                    a = b.og().toString();
                    a = this.object(null, {
                        _stream: a,
                        Filter: "[/LZWDecode]",
                        DecodeParms: "[ << /EarlyChange 0 >> ]"
                    })
                } else a = this.object(null, {
                    _stream: a
                });
                return a
            };
            c.prototype.Vx = function(a) {
                if (!(a in this.fonts)) {
                    var b = "F" + this.Nb;
                    this.Nb += 1;
                    var d = "/" + a.replace(/ /g, "");
                    b = this.object("Font", {
                        _name: b,
                        BaseFont: d,
                        Encoding: "/StandardEncoding",
                        Subtype: "/Type1"
                    });
                    this.fonts[a] = b
                }
                this.ti("Font", this.fonts[a]);
                return "/" + this.fonts[a]._name
            };
            c.prototype.Hr = function(a, b) {
                var d = "" + a + "-" + b;
                if (!(d in this.Lk)) {
                    var e = "gs" + this.Nb;
                    this.Nb += 1;
                    var c = this.object("ExtGState", {
                        _name: e
                    });
                    b ? c.ca = this.ad(a) : c.CA = this.ad(a);
                    this.Lk[d] = e;
                    this.ti("ExtGState", c)
                }
                return this.Lk[d]
            };
            c.prototype.ti = function(a, b) {
                "Resources" in this.page || (this.page.Resources = {});
                a in this.page.Resources || (this.page.Resources[a] = {});
                this.page.Resources[a][b._name] = b._id + " 0 R"
            };
            c.prototype.el = function(a, b) {
                void 0 === b && (b = "");
                for (var d = 0; d < this.images.length; d++)
                    if (this.images[d].Hh === a && b === this.images[d].aq) return this.images[d].Vh;
                return null
            };
            c.prototype.Ok = function(a, b) {
                var d, e = this.el(a);
                if (!e) {
                    var c = "I" + this.Nb;
                    this.Nb += 1;
                    b instanceof HTMLCanvasElement ? e = b : (e = document.createElement("canvas"), e.width = b.width, e.height = b.height, e.getContext("2d").drawImage(b, 0, 0));
                    var f = e.getContext("2d").getImageData(0, 0, e.width, e.height),
                        k = !1;
                    if (this.sv()) {
                        this.log("Using JPEG encoding");
                        var l = "[/DCTDecode]";
                        var n = Sa.$e("");
                        for (d = 0; d < f.data.length; d += 4) k = k || 255 > f.data[d + 3];
                        d = e.toDataURL("image/jpeg");
                        var q = atob(d.split(",")[1]);
                        for (d = 0; d < q.length; d++) n.jb(q.charCodeAt(d))
                    } else {
                        this.log("Using LZW encoding");
                        l = "[/LZWDecode]";
                        n = Sa.$e("LZWEncoder");
                        for (d = 0; d < f.data.length; d += 4) n.jb(f.data[d]), n.jb(f.data[d + 1]), n.jb(f.data[d + 2]), k = k || 255 > f.data[d + 3];
                        var u = "[ <</EarlyChange 0 >> ]"
                    }
                    n.flush();
                    n = n.og().toString();
                    c = this.object("XObject", {
                        Subtype: "/Image",
                        Width: e.width,
                        Height: e.height,
                        ColorSpace: "/DeviceRGB",
                        BitsPerComponent: 8,
                        Length: n.length,
                        Interpolate: "true",
                        Filter: l,
                        _name: c,
                        _stream: n
                    });
                    u && (c.DecodeParms = u);
                    if (k) {
                        n = Sa.$e("LZWEncoder");
                        for (d = 0; d < f.data.length; d += 4) n.jb(f.data[d + 3]);
                        n.flush();
                        n = n.og().toString();
                        u = this.object("XObject", {
                            Subtype: "/Image",
                            Width: e.width,
                            Height: e.height,
                            ColorSpace: "/DeviceGray",
                            BitsPerComponent: 8,
                            Length: n.length,
                            Filter: "[/LZWDecode]",
                            DecodeParms: "[ << /EarlyChange 0 >> ]",
                            _stream: n
                        });
                        c.SMask = u._id + " 0 R"
                    }
                    this.images.push({
                        Hh: a,
                        aq: "",
                        Vh: c
                    });
                    e = c
                }
                this.ti("XObject", e);
                return "/" + e._name
            };
            c.prototype.Pk = function(a, b) {
                var d = this.el(a.Na, b.toString());
                if (!d) {
                    d = "P" + this.Nb;
                    this.Nb += 1;
                    this.Ok(a.Na, a.Na);
                    var e = this.el(a.Na),
                        c = new J(a.Na.width, 0, 0, -a.Na.height, 0, a.Na.height);
                    c = b.multiply(c);
                    var f = "1",
                        k = "1",
                        l = b.jc();
                    l = Math.max(l.x, l.y);
                    if ("no-repeat" === a.repeat || "repeat-y" === a.repeat) f = "" + Math.ceil(this.width / a.Na.width / l);
                    if ("no-repeat" === a.repeat || "repeat-x" === a.repeat) k = "" + Math.ceil(this.height / a.Na.height / l);
                    d = this.object("Pattern", {
                        _name: d,
                        PatternType: "1",
                        PaintType: "1",
                        TilingType: "2",
                        BBox: "[0 0 1 1]",
                        XStep: f,
                        YStep: k,
                        Matrix: "[ " + this.ad(c.m11, c.m21, c.m12, c.m22, c.Ba, c.Ca) + "]",
                        Resources: "<< /XObject << /" + e._name + " " + e._id + " 0 R >> >>"
                    });
                    d._stream = "/" + e._name + " Do";
                    this.images.push({
                        Hh: a.Na,
                        aq: b.toString(),
                        Vh: d
                    })
                }
                this.ti("Pattern", d);
                return "/" + d._name
            };
            c.prototype.Rf = function() {
                var a = [],
                    b = [],
                    d;
                a.push("%PDF-1.4\n%\u0080\u0081\u0082\u0083\n");
                for (d = 0; d < this.lc.length; d++) this.No(a, b, this.lc[d], !1);
                var e = a.join("").length;
                a.push("xref\n0 " + (this.lc.length + 1) + "\n");
                a.push("0000000000 65535 f\n");
                for (d = 0; d < this.lc.length; d++) {
                    for (var c = "" + b[d]; 10 > c.length;) c = "0" + c;
                    a.push(c + " 00000 n \n")
                }
                a.push("trailer\n");
                a.push("<< /Size " + (this.lc.length + 1) + "\n");
                a.push("   /Root " + this.Ys._id + " 0 R\n");
                a.push(">>\n");
                a.push("startxref\n");
                a.push(e + "\n");
                a.push("%%EOF\n");
                return a.join("")
            };
            c.prototype.toBlob = function() {
                for (var a = this.Rf(), b = new Uint8Array(a.length), d = 0; d < a.length; d++) b[d] = a.charCodeAt(d);
                return new Blob([b], {
                    type: "application/pdf"
                })
            };
            c.prototype.No = function(a, b, d, e) {
                e ? a.push("<<\n") : (b.push(a.join("").length), a.push(d._id + " 0 obj\n"), "Type" in d ? a.push("<< /Type /" + d.Type + "\n") : a.push("<<\n"));
                "_stream" in d && (d.Length = d._stream.toString().length);
                for (var c in d)
                    if (d.hasOwnProperty(c) && "Type" !== c && "_" !== c.charAt(0)) {
                        e && a.push("    ");
                        a.push("   /" + c + " ");
                        var f = d[c];
                        "object" === typeof f && "[object Array]" === Object.prototype.toString.apply(f) ? a.push("[ " + f.join(" ") + " ]") : "object" === typeof f ? this.No(a, b, f, !0) : a.push(f);
                        a.push("\n")
                    }
                e && a.push("    ");
                a.push(">>\n");
                "_stream" in d && (a.push("stream\n"), a.push(d._stream + "\n"), a.push("endstream\n"));
                e || a.push("endobj\n")
            };
            c.prototype.Lt = function(a) {
                return "(" + a.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)") + ")"
            };
            c.prototype.ad = function() {
                for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
                b = [];
                for (var d = 0; d < a.length; d++) {
                    var e = "" + a[d];
                    0 < e.indexOf("e") && (e = a[d].toFixed(20));
                    b.push(e)
                }
                return b.join(" ")
            };
            c.hl = null;
            return c
        }(),
        te = function(c) {
            function a(a, d) {
                var b = c.call(this) || this;
                b.$t = d;
                b.path = [];
                b.x = 0;
                b.y = 0;
                b.Mq = [];
                b.Kf = "";
                b.Qf = "";
                b.Pf = -1;
                b.Of = "";
                b.Nf = "";
                b.Mf = "";
                b.Lf = "";
                b.Jf = -1;
                b.log = x.create("PDFContext");
                b.ke = a.clone();
                b.ke.transform(new Hc(.75, .75, 0, 0));
                b.mb = new se(72 * a.x / 96, 72 * a.y / 96, 72 * a.width / 96, 72 * a.height / 96);
                b.stream = [];
                b.x = 0;
                b.y = 0;
                b.fillStyle = "#000000";
                b.strokeStyle = "#000000";
                b.Ko = b.ls;
                b.Io();
                return b
            }
            __extends(a, c);
            a.prototype.save = function() {
                c.prototype.save.call(this);
                this.stream.push("q");
                this.Mq.push({
                    Kf: this.Kf,
                    Qf: this.Qf,
                    Pf: this.Pf,
                    Of: this.Of,
                    Nf: this.Nf,
                    Mf: this.Mf,
                    Lf: this.Lf,
                    Jf: this.Jf
                })
            };
            a.prototype.restore = function() {
                c.prototype.restore.call(this);
                var a = this.Mq.pop();
                a && (this.stream.push("Q"), this.Kf = a.Kf, this.Qf = a.Qf, this.Pf = a.Pf, this.Of = a.Of, this.Nf = a.Nf, this.Mf = a.Mf, this.Lf = a.Lf, this.Jf = a.Jf)
            };
            a.prototype.Og = function(a) {
                var b = new Hc(.75, .75, 0, 0);
                a && (this.ke = a.clone(), this.ke.transform(b));
                this.Sl();
                this.mb.Og(this.ke.x, this.ke.y, this.ke.width, this.ke.height);
                this.Io();
                this.beginPath()
            };
            a.prototype.beginPath = function() {
                this.path.length = 0
            };
            a.prototype.Io = function() {
                this.log("Start page: %s", this.ke);
                this.setTransform(1, 0, 0, 1, 0, 0);
                this.Qf = this.Kf = "";
                this.Pf = -1;
                this.Lf = this.Mf = this.Nf = this.Of = "";
                this.Jf = -1
            };
            a.prototype.Sl = function() {
                this.stream.length && this.mb.zs(this.mb.stream(this.stream.join("\n")));
                this.stream.length = 0
            };
            a.prototype.toString = function() {
                this.Sl();
                return this.mb.Rf()
            };
            a.prototype.toBlob = function() {
                this.Sl();
                return this.mb.toBlob()
            };
            a.prototype.setTransform = function(a, d, c, h, f, k) {
                var b = this.ke.ud();
                this.qa = (new J(a, c, d, h, f, k)).multiply(new Ic(0, b.x, b.y)).multiply(new Hc(.75, .75, 0, 0))
            };
            a.prototype.closePath = function() {
                this.path.push("h")
            };
            a.prototype.fill = function() {
                this.jl();
                for (var a = 0; a < this.path.length; a++) this.stream.push(this.path[a]);
                this.stream.push("f")
            };
            a.prototype.stroke = function() {
                this.kl();
                for (var a = 0; a < this.path.length; a++) this.stream.push(this.path[a]);
                this.stream.push("S")
            };
            a.prototype.moveTo = function(a, d) {
                var b = this.qa.apply(a, d);
                this.path.push(this.mb.ad(b.x, b.y) + " m");
                this.x = a;
                this.y = d
            };
            a.prototype.lineTo = function(a, d) {
                var b = this.qa.apply(a, d);
                this.path.push(this.mb.ad(b.x, b.y) + " l");
                this.x = a;
                this.y = d
            };
            a.prototype.bezierCurveTo = function(a, d, c, h, f, k) {
                a = this.qa.apply(a, d);
                c = this.qa.apply(c, h);
                h = this.qa.apply(f, k);
                this.path.push(this.mb.ad(a.x, a.y, c.x, c.y, h.x, h.y) + " c");
                this.x = f;
                this.y = k
            };
            a.prototype.quadraticCurveTo = function(a, d, c, h) {
                this.bezierCurveTo(2 / 3 * a + 1 / 3 * this.x, 2 / 3 * d + 1 / 3 * this.y, 2 / 3 * a + 1 / 3 * c, 2 / 3 * d + 1 / 3 * h, c, h)
            };
            a.prototype.fillText = function(a, d, c) {
                this.Ko(a, d, c, 0)
            };
            a.prototype.strokeText = function(a, d, c) {
                this.Ko(a, d, c, 1)
            };
            a.prototype.measureText = function(a) {
                var b = document.createElement("canvas").getContext("2d");
                b.font = this.font;
                return b.measureText(a)
            };
            a.prototype.jl = function() {
                if (this.Kf !== this.fillStyle) {
                    if (this.fillStyle instanceof de) {
                        var a = this.mb.Pk(this.fillStyle, this.qa);
                        this.stream.push("/Pattern cs");
                        this.stream.push(a + " scn")
                    } else "string" === typeof this.fillStyle && (a = r.Yd(this.fillStyle).Si(r.RGBA), this.stream.push(this.mb.ad(a.values[0], a.values[1], a.values[2]) + " rg"), a = this.mb.Hr(a.values[3], !0), this.stream.push("/" + a + " gs"));
                    this.Kf = this.fillStyle
                }
            };
            a.prototype.kl = function() {
                function a(a) {
                    return "bevel" === a ? 2 : "round" === a ? 1 : 0
                }

                function d(a) {
                    return "butt" === a ? 0 : "round" === a ? 1 : 2
                }
                if (this.Qf !== this.strokeStyle) {
                    if (this.strokeStyle instanceof de) {
                        var c = this.mb.Pk(this.strokeStyle, this.qa);
                        this.stream.push("/Pattern CS");
                        this.stream.push(c + " SCN")
                    } else "string" === typeof this.strokeStyle && (c = r.Yd(this.strokeStyle).Si(r.RGBA), this.stream.push(this.mb.ad(c.values[0], c.values[1], c.values[2]) + " RG"), c = this.mb.Hr(c.values[3], !1), this.stream.push("/" + c + " gs"));
                    this.Qf = this.strokeStyle
                }
                this.Pf !== this.lineWidth && (this.Pf = this.lineWidth, this.stream.push(this.mb.ad(72 * this.lineWidth / 96) + " w"));
                this.Of !== this.lineJoin && (this.Of = this.lineJoin, this.stream.push(a(this.lineJoin) + " j"));
                this.Nf !== this.lineCap && (this.Nf = this.lineCap, this.stream.push(d(this.lineCap) + " J"))
            };
            a.prototype.ms = function(a, d, c, h) {
                var b = this.ef(this.font);
                if (this.Mf !== b.fontSize || this.Lf !== b.fontFamily) {
                    var e = this.mb.Vx(b.fontFamily);
                    this.stream.push(e + " " + this.mb.ad(parseFloat(b.fontSize)) + " Tf");
                    this.Mf = b.fontSize;
                    this.Lf = b.fontFamily
                }
                this.Jf !== h && (this.stream.push(h + " Tr"), this.Jf = h);
                0 === h ? this.jl() : this.kl();
                this.stream.push("BT");
                d = this.qa.multiply(new J(1, 0, 0, -1, d, c));
                this.stream.push(this.mb.ad(d.m11, d.m21, d.m12, d.m22, d.Ba, d.Ca) + " Tm");
                this.stream.push(this.mb.Lt(a) + " Tj");
                this.stream.push("ET")
            };
            a.prototype.ls = function(a, d, c, h) {
                var b = this.ef(this.font),
                    e = this.$t.get(b.fontFamily);
                e ? (0 === h ? this.jl() : this.kl(), this.beginPath(), e.Ft(this, a, d, c, parseFloat(b.fontSize)), 0 === h ? this.fill() : this.stroke()) : this.ms(a, d, c, h)
            };
            a.prototype.ef = function(a) {
                var b = "",
                    c = "",
                    h = "normal",
                    f = "normal",
                    k = "normal",
                    l = "normal";
                a = a.split(/\s+/);
                a: for (;;) {
                    var n = a.shift();
                    if (!n) break;
                    switch (n) {
                        case "normal":
                            break;
                        case "italic":
                        case "oblique":
                            h = n;
                            break;
                        case "small-caps":
                            k = n;
                            break;
                        case "bold":
                        case "bolder":
                        case "lighter":
                        case "100":
                        case "200":
                        case "300":
                        case "400":
                        case "500":
                        case "600":
                        case "700":
                        case "800":
                        case "900":
                            f = n;
                            break;
                        default:
                            if ("" === c) n = n.split("/"), c = n[0], 1 < n.length && (l = n[1]);
                            else {
                                b = n;
                                a.length && (b += " " + a.join(" "));
                                break a
                            }
                    }
                }
                b && (b = b.replace(/"/g, ""));
                return {
                    fontStyle: h,
                    fontVariant: k,
                    fontWeight: f,
                    fontSize: c,
                    lineHeight: l,
                    fontFamily: b
                }
            };
            a.prototype.cl = function(a, d, c, h, f, k, l, n, q) {
                this.log("DrawImage(%s, %s, %s, %s, %s, %s, %s %s)", d, c, h, f, k, l, n, q);
                l += q;
                var b = document.createElement("canvas"),
                    e = b.getContext("2d");
                b.width = h;
                b.height = f;
                e.drawImage(a, -d, -c);
                a = this.mb.Ok(a instanceof HTMLImageElement ? [a.src, d, c, h, f].join() : a, b);
                this.stream.push("q");
                k = this.qa.multiply(new J(n, 0, 0, -q, k, l));
                this.stream.push(this.mb.ad(k.m11, k.m21, k.m12, k.m22, k.Ba, k.Ca) + " cm");
                this.stream.push(a + " Do");
                this.stream.push("Q")
            };
            a.prototype.Rf = function() {
                return this.mb.Rf()
            };
            a.prototype.fl = function() {
                return {}
            };
            a.prototype.il = function() {};
            a.prototype.clip = function() {
                for (var a = 0; a < this.path.length; a++) this.stream.push(this.path[a]);
                this.stream.push("W");
                this.stream.push("n");
                this.path.length = 0
            };
            return a
        }(ge);
    var ue = function(c) {
        function a() {
            var a = c.call(this) || this;
            a.Dg = [];
            a.hg = !1;
            a.canvas = null;
            a.ga = null;
            a.log = x.create("FORMAT", !0);
            return a
        }
        __extends(a, c);
        a.prototype.add = function(a, d, c, h, f) {
            var b;
            var e = this.Dg;
            var n = 0;
            for (b = e.length; n < b; n++) {
                var q = e[n];
                q.type === d && q.Fm === a && q.url === c && (q.sn = !0)
            }
            this.log("Request URL %s", c.substr(0, 64));
            this.Dg.push({
                Fm: a,
                type: d,
                url: c,
                Kq: h || {},
                Ws: f,
                sn: !1
            });
            this.check()
        };
        a.prototype.check = function() {
            for (var a = 0; !this.hg && a < this.Dg.length;) this.Dg[a].sn ? this.Dg.shift() : (this.js(this.Dg[0]), a += 1);
            this.hg || this.na("done")
        };
        a.prototype.js = function(a) {
            var b = this;
            b.hg = !0;
            b.log("Processing request for item %s url=%s", a.Fm, a.url.substr(0, 64));
            0 === a.type.indexOf("image") && Ya.load(a.url, function(d, c) {
                null !== d ? (b.log("Image request completed for item %s url %s", a.Fm, c.substr(0, 64)), a.Ws(d, c)) : b.log("Image request failed for url %s", c);
                b.hg = !1;
                a.sn = !0;
                b.check()
            })
        };
        a.prototype.lt = function(a, d) {
            this.na("convert-dom-request", a, d)
        };
        a.prototype.Fg = function(a) {
            this.na("reformat", a)
        };
        a.prototype.He = function() {
            if (null === this.canvas) return new H(0, 0, 0, 0);
            var a = B(this.canvas).Vb();
            return new H(a.left, a.top, this.canvas.width, this.canvas.height)
        };
        a.prototype.Zd = function(a) {
            return this.ga ? this.ga.get(a) : null
        };
        return a
    }(bb);
    x.create("GroupNode");
    var ve = function(c) {
        function a(a, d) {
            var b = c.call(this, a, d) || this;
            b.children = [];
            b.Pb |= 2;
            return b
        }
        __extends(a, c);
        a.prototype.type = function() {
            return "GroupNode"
        };
        a.prototype.Ie = function(a) {
            for (var b = 0; b < this.children.length; b++)
                if (a === this.children[b]) return b;
            return -1
        };
        a.prototype.format = function(a, d) {
            for (var b = 0, c = this.children; b < c.length; b++) {
                var f = c[b];
                Xc(f) && f.format(a, d)
            }
        };
        a.prototype.Ma = function() {
            return this.children.length
        };
        a.prototype.removeChild = function(a) {
            var b = this.children[a];
            this.children.splice(a, 1);
            return b
        };
        a.prototype.Pj = function(a, d) {
            this.children.splice(d, 0, a)
        };
        a.prototype.rb = function(a) {
            return this.children[a]
        };
        a.prototype.Dn = function(a, d) {
            var b = this.children[a];
            this.children[a] = this.children[d];
            this.children[d] = b
        };
        return a
    }(ed);
    ed.dd("GroupNode", ve);

    function we(c) {
        c = c.replace(/\+/g, " ");
        return decodeURIComponent(c)
    }

    function xe() {
        if (void 0 === c) var c = window.location.hash;
        var a = c,
            b;
        c = {};
        var d = a.indexOf("#");
        0 <= d && (a = a.substr(d + 1));
        d = a.indexOf("#");
        0 <= d && (a = a.substr(0, d));
        a = a.split("&");
        d = 0;
        for (b = a.length; d < b; d++) {
            var e = a[d];
            var h = e.split("=");
            e = we(h[0]);
            "/" == e[0] && -1 === e.indexOf(".") && (e = e.substr(1));
            h = 1 < h.length ? we(h[1]) : "";
            e.length && (c[e] = h)
        }
        return c
    };
    var ye = x.create("CONFIG"),
        ze = function(c) {
            function a(a, d, e) {
                var b = c.call(this) || this;
                b.mg = {};
                for (var f in d) b.mg[f.toLowerCase()] = f;
                b.options = JSON.parse(JSON.stringify(d));
                for (var k in e) k.toLowerCase() in b.mg || alert("Zwibbler: Unknown option '" + k + "'"), b.set(k, e[k], !0);
                a.addEventListener(window, "hashchange", function() {
                    ye("Reload parameters from url hash");
                    b.Am()
                });
                a.add(function() {
                    b.Ya = {}
                });
                b.Am();
                for (var l in b.options) ye("%s=%s", l, b.options[l]);
                return b
            }
            __extends(a, c);
            a.prototype.Am = function() {
                var a = xe(),
                    d;
                for (d in a) this.set(d, a[d])
            };
            a.prototype.has = function(a) {
                return a.toLowerCase() in this.mg
            };
            a.prototype.set = function(a, d, c) {
                void 0 === c && (c = !1);
                a.toLowerCase() in this.mg && (a = this.mg[a.toLowerCase()]);
                if ("string" === typeof d && "number" === typeof this.options[a] && (d = parseFloat(d), isNaN(d))) return ye("Error: Config option %s expects a number", a), !1;
                ye("Set config %s=%s", a, d);
                this.options[a] = d;
                c || (this.fd("update", a, d), this.fd(a, d, !1))
            };
            a.prototype.pa = function(a, d) {
                if ("update" !== a && !(a in this.options)) throw Error(a + " is not a valid config setting.");
                d(this.options[a], !0);
                return c.prototype.pa.call(this, a, d)
            };
            a.prototype.get = function(a) {
                if (!(a in this.options)) throw Error(a + " is not a valid config setting.");
                return this.options[a]
            };
            return a
        }(bb);
    var Ae = x.create("CONFIG"),
        Be = function() {
            var c;
            if (document.currentScript && (c = document.currentScript.getAttribute("src"))) return c;
            if (!document.getElementsByTagName) return "";
            c = document.getElementsByTagName("script");
            if (0 === c.length) return "";
            c = c[c.length - 1];
            return void 0 !== c.getAttribute.length ? c.src : c.getAttribute("src") || ""
        }(),
        Ce = {
            autoGroup: !1,
            adaptiveBrushWidth: !1,
            adaptiveLineWidth: !1,
            angleArcs: 0,
            allowSelectBox: "auto",
            allowResize: !0,
            allowTextInShape: !0,
            allowPointerEvents: !0,
            allowSystemClipboard: !0,
            allowZoom: !0,
            autoPickTool: !0,
            autoPickToolText: !0,
            autoSnap: 0,
            background: "clear",
            backgroundImage: null,
            collaborationServer: "wss://itzxf.com/socket2",
            clickToDrawShapes: !1,
            colourPicker: "wheel",
            debug: !1,
            defaultArrowStyle: "simple",
            defaultArrowSize: 15,
            defaultArrowXOffset: null,
            defaultItalic: !1,
            defaultBold: !1,
            defaultBrushColour: "#000000",
            defaultBrushWidth: 10,
            defaultFillStyle: "#e0e0e0",
            defaultFont: "Arial",
            defaultFontSize: 20,
            defaultLineWidth: 2,
            defaultPaperSize: "none",
            defaultRoundRectRadius: 10,
            defaultSmoothness: "smooth",
            defaultStrokeStyle: "#000000",
            defaultText: "Lorum ipsum dolor",
            defaultTextBackground: "rgba(0,0,0,0.0)",
            defaultTextAlign: "left",
            defaultTextDecoration: "none",
            defaultTextFillStyle: "#000000",
            defaultTextStrokeStyle: "#000000",
            defaultTextLineWidth: 0,
            defaultZoom: 1,
            drawShapeStyle: "box",
            fonts: ["Arial", "Times New Roman"],
            gridBlocks: 10,
            gridColour: "#cccccc",
            gridSpacing: 20,
            imageFolder: "$SCRIPT",
            iPadNoScrollText: !1,
            keyBringToFront: "Home",
            keyCancel: "ESC",
            keyCopy: "Ctrl+C,\u2318+C",
            keyCurveTool: "C",
            keyCut: "Ctrl+X,\u2318+X,Shift+Delete",
            keyDelete: "Delete,Backspace",
            keyDown: "Down,Ctrl+Down",
            keyDuplicate: "Ctrl+D",
            keyEnter: "Enter",
            keyGroup: "Ctrl+G",
            keyLeft: "Left,Ctrl+Left",
            keyLineTool: "L",
            keyMoveDown: "PageDown",
            keyMoveUp: "PageUp",
            keyNext: "Down,Right",
            keyNextPage: "Shift+PageDown",
            keyPaste: "Ctrl+V,\u2318+V,Shift+Insert",
            keyPrevious: "Left,Up",
            keyPreviousPage: "Shift+Pageup",
            keyRedo: "Ctrl+Shift+Z",
            keyRight: "Right,Ctrl+Right",
            keySelectNone: "ESC",
            keySelectAll: "Ctrl+A",
            keySendToBack: "End",
            keyUndo: "Ctrl+Z",
            keyUngroup: "Ctrl+Shift+G",
            keyUp: "Up,Ctrl+Up",
            keyZoomIn: "+,Shift+=",
            keyZoomNormal: "=",
            keyZoomOut: "-",
            keyZoomToPage: "F4",
            keyZoomToWidth: "Shift+F4",
            language: "en",
            latency: 0,
            leaveTextToolOnBlur: !1,
            maximumZoom: 0,
            magnet: !0,
            minimumZoom: 0,
            multilineText: !1,
            nudge: 10,
            outsidePageColour: "#808080",
            pageBorderColour: "rbga(0,0,0,0.0)",
            pageInflation: 20,
            pagePlacement: "centre",
            pageSelectorDiv: "",
            pageShadow: !0,
            pageView: !1,
            pasteOffset: 10,
            pasteOffsetX: 0,
            pasteOffsetY: 0,
            persistent: !1,
            pixelsPerUnit: 1,
            preciseNudge: 1,
            readOnly: !1,
            scrollbars: !0,
            setFocus: !0,
            showArrowTool: !0,
            showBackgroundSelector: !1,
            showBrushTool: !0,
            showCircleTool: !0,
            showColourPanel: !0,
            showCopyPaste: !0,
            showCurveTool: !0,
            showDebug: !1,
            showFontNameProperty: !0,
            showFontSizeProperty: !0,
            showHints: !0,
            showImageSelector: !1,
            showImageTool: !1,
            showKeyboardHelp: !0,
            showLineTool: !0,
            showMathTool: !1,
            showMoveToFrontBack: !1,
            showPageSelector: !1,
            showPageSelectorControls: !0,
            showPickTool: !0,
            showPropertyPanel: !1,
            showRoundRectTool: !1,
            showRuler: !1,
            showShapeBrushTool: !1,
            showSloppinessProperty: !0,
            showSmoothnessProperty: !0,
            showSquareTool: !0,
            showTextTool: !0,
            showToolbar: !0,
            showUndoRedo: !0,
            simulateGestures: !1,
            singleStrokeBrush: !1,
            sloppy: !1,
            snap: 0,
            spotHighlightColour: "rgba(0,0,0,0.2)",
            spotHighlightZIndex: 1,
            symmetry: 0,
            textMode: "interactive",
            toolbarButtonSize: 50,
            useTouch: "auto",
            units: "",
            colourPalette: "auto",
            drawCircleStyle: "box",
            enableArrowKeysNudge: !1,
            showMenu: !1
        },
        De = {},
        Ee;
    for (Ee in Ce) De[Ee.toLowerCase()] = Ee;
    var Fe = function(c) {
        function a(a, d) {
            var b = c.call(this, a, Ce, d) || this;
            b.Xc = "";
            "" === b.Xc && b.set("imageFolder", b.options.imageFolder);
            "auto" === b.options.useTouch && Ae("Detected touch support: %s", "ontouchstart" in window || "onmsgesturechange" in window);
            Ae("Detect clipboard support: %s", b.um());
            return b
        }
        __extends(a, c);
        a.prototype.Am = function() {
            var a = xe(),
                d;
            for (d in a) this.set(d, a[d])
        };
        a.Tr = function(a) {
            return a.toLowerCase() in De
        };
        a.prototype.set = function(a, d, e) {
            void 0 === e && (e = !1);
            var b = this.mg[a.toLowerCase()] || "";
            "debug" === b && (b = "showDebug");
            if (!(b in this.options)) return Ae("Error: %s is not a configuration option.", a), !1;
            if ("defaultZoom" === b) {
                if ("page" !== d && "width" !== d && !F(d) && (d = parseFloat(d), isNaN(d))) return Ae("Error: Config option %s must be a number or 'page' or 'width'", b), !1
            } else if ("allowSelectBox" !== b)
                if ("imageFolder" === b) a = this.$u(), "" === a ? (this.Xc = d.replace("$SCRIPT/", ""), this.Xc = this.Xc.replace("$SCRIPT", "")) : this.Xc = d.replace("$SCRIPT/", "$SCRIPT").replace("$SCRIPT", a), "" !== this.Xc && "/" !== this.Xc[this.Xc.length - 1] && (this.Xc += "/"), Ae("scriptPath=%s imageFolder=%s, result:%s", a, this.options.imageFolder, this.Xc);
                else if ("string" === typeof d)
                if ("number" === typeof this.options[b]) {
                    if (d = parseFloat(d), isNaN(d)) return Ae("Error: Config option %s expects a number", b), !1
                } else if ("boolean" === typeof this.options[b] || "useTouch" === b && "auto" !== d) d = "1" === d || "true" === d || "" === d;
            return c.prototype.set.call(this, b, d, e)
        };
        a.prototype.$u = function() {
            var a = Be;
            var d = a.lastIndexOf("/");
            return a = 0 <= d ? a.substr(0, d + 1) : ""
        };
        a.prototype.Gy = function() {
            return this.options.showBrushTool
        };
        a.prototype.Jy = function() {
            return this.options.showPropertyPanel
        };
        a.prototype.Hy = function() {
            return this.options.showColourPanel
        };
        a.prototype.Iy = function() {
            return this.options.showDebug
        };
        a.prototype.Ky = function() {
            return this.options.showToolbar
        };
        a.prototype.Ta = function(a) {
            return this.get(a)
        };
        a.prototype.get = function(a) {
            switch (a) {
                case "useTouch":
                    return this.Rg();
                default:
                    return c.prototype.get.call(this, a)
            }
        };
        a.prototype.Rg = function() {
            return "auto" === this.options.useTouch ? "ontouchstart" in window || "onmsgesturechange" in window : this.options.useTouch
        };
        a.prototype.iu = function() {
            if ("auto" === this.options.allowSelectBox) {
                var a = this.Rg(),
                    d = document.documentElement.offsetHeight,
                    c = window.innerHeight,
                    h = !a || a && 0 < c - d + 50;
                Ae("Allowing select box: %s (useTouch=%s, documentHeight=%s, windowHeight=%s)", h, a, d, c);
                return h
            }
            return this.options.allowSelectBox
        };
        a.prototype.tu = function() {
            var a = ("" + this.options.defaultSmoothness).toLowerCase();
            return "sharpest" === a ? 0 : "sharper" === a ? .1 : "sharp" === a ? .2 : "smoothest" === a ? .5 : .3
        };
        a.prototype.em = function(a) {
            return 0 === a.indexOf("http:") || 0 === a.indexOf("https:") || 0 === a.indexOf("/") ? a : this.Xc + a
        };
        a.prototype.Ub = function(a) {
            return B.Ub(this.get(a))
        };
        a.prototype.Hs = function(a) {
            function b(a) {
                for (var b = "", d = 0; d < a.length; d++) {
                    var c = a.charAt(d);
                    b = c === c.toUpperCase() ? b + ("-" + c.toLowerCase()) : b + c
                }
                return b
            }
            var c = this,
                h = {
                    keyCut: 1,
                    keyCopy: 1,
                    keyPaste: 1
                },
                f;
            for (f in this.options) this.options.hasOwnProperty(f) && (0 !== f.indexOf("key") || h[f] || a.map(this.options[f], b(f).substr(4)));
            this.pa("allowSystemClipboard", function() {
                var b = !c.um();
                b ? Ae("Not using system clipboard. Mapping cut/copy/paste keys") : Ae("Using system clipboard. Ignore keyCut/keyCopy/keyPaste.");
                a.map(c.options.keyCut, "cut", b);
                a.map(c.options.keyCopy, "copy", b);
                a.map(c.options.keyPaste, "paste", b)
            })
        };
        a.prototype.Mp = function() {
            return "radial" === this.get("drawCircleStyle") || "radial" === this.get("drawShapeStyle") ? "circle" : "rectangle"
        };
        a.prototype.bi = function(a) {
            var b = a;
            0 < this.options.maximumZoom && (a = Math.min(a, this.options.maximumZoom));
            0 < this.options.minimumZoom && (a = Math.max(a, this.options.minimumZoom));
            a !== b && Ae("Zoom restricted to %s", a);
            return a
        };
        a.prototype.um = function() {
            var a = document;
            return this.get("allowSystemClipboard") && void 0 !== a.oncopy && void 0 !== a.oncut && void 0 !== a.onpaste
        };
        return a
    }(ze);
    var Ge = new(function() {
        function c() {
            this.Ul = {}
        }
        c.prototype.Ii = function() {
            if ("localStorage" in window) try {
                var a = window.localStorage
            } catch (b) {}
            return void 0 !== a
        };
        c.prototype.setItem = function(a, b) {
            this.Ii() ? window.localStorage.setItem(a, b) : this.Ul[a] = "" + b
        };
        c.prototype.getItem = function(a) {
            return this.Ii() ? window.localStorage.getItem(a) : this.Ul[a]
        };
        c.prototype.removeItem = function(a) {
            this.Ii() ? window.localStorage.removeItem(a) : delete this.Ul[a]
        };
        return c
    }());

    function He(c) {
        function a(a) {
            b && clearTimeout(b);
            b = setTimeout(function() {
                b = null;
                c()
            }, arguments.length ? a : 1E3)
        }
        var b = null;
        a.cancel = function() {
            b && (clearTimeout(b), b = null)
        };
        return a
    };
    var Je = function() {
        function c(a, b, d, c, h, f, k) {
            this.view = a;
            this.node = b;
            this.handle = d;
            this.Cg = f;
            this.Fb = this.Eb = 0;
            this.log = x.create("MoveEditNode");
            b.pj(d);
            this.Ra = b.ja("snap") || 0;
            this.zb(c, h, k)
        }
        c.prototype.Gc = function() {
            this.log("Entering MoveEditNode")
        };
        c.prototype.kc = function() {
            this.log("Leaving MoveEditNode")
        };
        c.prototype.zb = function(a, b) {
            var d = this.view.Ra(new G(a, b), this.Ra);
            a = d.x;
            b = d.y;
            this.log("onMouseDown(%s,%s)", a, b);
            this.Eb = a;
            this.Fb = b;
            return !0
        };
        c.prototype.ob = function(a, b) {
            var d = this.view.Ra(new G(a, b), this.Ra);
            a = d.x;
            b = d.y;
            this.node.ge(this.handle, a, b);
            this.node.format(this.view.xa, this.view.request);
            this.view.ia();
            return !1
        };
        c.prototype.Cb = function(a, b) {
            var d = this,
                c = this.view.Ra(new G(a, b), this.Ra);
            a = c.x;
            b = c.y;
            this.log("onMouseUp(%s,%s)", a, b, this.Eb, this.Fb);
            a !== this.Eb || b !== this.Fb ? (this.node.ge(this.handle, this.Eb, this.Fb), this.view.aa.transaction(function() {
                d.view.aa.ge(d.node.id, d.handle, a, b)
            })) : this.view.Sw(this.node.id, this.handle);
            this.view.ia();
            this.view.Qa(this.Cg || new Ie(this.view));
            return !0
        };
        return c
    }();

    function Ke(c) {
        for (var a = [], b = 0; b < c.length; b++) a.push(c[b].id);
        return a
    }
    var Le = function() {
        function c(a, b, d, c, h) {
            this.view = a;
            this.handle = b;
            this.Kx = d;
            new H(0, 0, 0, 0);
            this.Fa = [];
            this.tg = [];
            this.Db = new G(0, 0);
            this.log = x.create("TransformSelectionBehaviour");
            this.Ij = !1;
            this.Ra = 0;
            this.zb(c, h)
        }
        c.prototype.sb = function(a) {
            var b = this;
            if ("gesturestart" !== a.type && "gesturechange" !== a.type && "gestureend" !== a.type) return !1;
            this.log("%s scale=%s rotation=%s", a.type, a.scale, a.rotation);
            this.Ij = !0;
            var d = this.view.Hd(a.pageX, a.pageY, !0),
                c = d.x;
            d = d.y;
            "gesturestart" === a.type && (this.Db.x = c, this.Db.y = d);
            c -= this.Db.x;
            d -= this.Db.y;
            var h = a.scale,
                f = a.rotation;
            this.view.wk || (h = 1);
            this.view.ei || (f = 0);
            f = -f / 180 * Math.PI;
            if (0 < this.view.ga.get("snap")) {
                var k = Math.PI / 16;
                f = Math.floor(f / k) * k
            }
            h = new Hc(h, h, this.Db.x, this.Db.y);
            f = new Gc(f, this.Db.x, this.Db.y);
            var l = (new Fc(c, d)).multiply(h).multiply(f);
            for (c = 0; c < this.Fa.length; c++) this.Fa[c].Kg(l.multiply(this.tg[c])), this.Fa[c].format(this.view.xa, this.view.request);
            this.view.Kk(l);
            this.view.ia();
            if ("gestureend" === a.type) {
                for (c = 0; c < this.Fa.length; c++) this.Fa[c].Kg(this.tg[c]);
                this.view.aa.transaction(function() {
                    b.view.aa.Ld(Ke(b.Fa), l)
                });
                this.wp()
            }
            return !0
        };
        c.prototype.zb = function(a, b) {
            if (this.Ij) return !0;
            this.Fa = this.view.Wc();
            this.Pt(this.Fa);
            this.Db = this.view.Ra(new G(a, b), this.Ra);
            this.log("onMouseDown(%s,%s)", this.Db.x, this.Db.y);
            new H(this.view.bd.x, this.view.bd.y, this.view.bd.width, this.view.bd.height);
            return !0
        };
        c.prototype.Pt = function(a) {
            this.tg = [];
            for (var b = 0; b < a.length; b++) this.tg.push(a[b].Ka()), this.Ra = this.Ra || a[b].ja("snap")
        };
        c.prototype.ob = function(a, b) {
            if (this.Ij) return !0;
            var d = this;
            var c = this.view.Ra(new G(a, b), this.Ra);
            var h = c.x;
            var f = c.y;
            for (var k = this.handle.rg(new G(c.x - this.Db.x, c.y - this.Db.y)), l = 0; l < this.Fa.length; l++) c = k.multiply(this.tg[l]), this.Fa[l].Kg(c), this.Fa[l].format(this.view.xa, this.view.request);
            this.view.Kk(k);
            this.view.ia(function() {
                if (d.handle instanceof Dd) {
                    var a = d.view.xa;
                    a.save();
                    a.beginPath();
                    a.strokeStyle = "#0050B7";
                    a.lineWidth = 1 / d.view.scale;
                    a.moveTo(d.handle.origin.x, d.handle.origin.y);
                    a.lineTo(h, f);
                    a.stroke();
                    a.restore()
                }
            });
            return !0
        };
        c.prototype.Cb = function(a, b) {
            var d = this;
            if (this.Ij) return !0;
            var c = a,
                h = b,
                f = this.view.Ra(new G(a, b), this.Ra);
            a = f.x;
            b = f.y;
            this.log("onMouseUp(%s,%s)", a, b);
            if (f.Hc(this.Db)) this.Kx ? (c = this.view.aa.wb(c, h, this.view.Sa)) && c.Le() ? (this.log("Didn't move, and has edit mode. Selecting node %s", c.id), this.view.cb(), this.view.Jg(c)) : this.log("Didn't move, but node has no edit mode or failed hittest") : this.log("Didn't move, but toggleEditNode=false");
            else {
                this.log("Moved by %s,%s", a - this.Db.x, b - this.Db.y);
                var k = this.handle.rg(new G(f.x - this.Db.x, f.y - this.Db.y));
                for (c = 0; c < this.Fa.length; c++) this.Fa[c].Kg(this.tg[c]);
                this.view.aa.transaction(function() {
                    d.view.aa.Ld(Ke(d.Fa), k)
                })
            }
            this.wp();
            return !0
        };
        c.prototype.wp = function() {
            this.view.Kk(new J);
            this.view.fh();
            this.view.update(!0);
            this.view.hb()
        };
        return c
    }();
    var Me = function() {
        function c(a, b) {
            this.view = a;
            this.ba = b;
            this.fj = !1;
            this.Aa = this.Ge = this.ka = null;
            this.fillStyle = "#000000";
            this.Gk = !1;
            this.wa = new ob;
            this.Fn = "normal";
            this.log = x.create("Text");
            this.multiline = a.ga.get("multilineText");
            this.qb = document.createElement("div");
            a.ga.get("iPadNoScrollText") && null !== navigator.userAgent.match(/iPad|iPhone|Android/i) && (this.Fn = "top")
        }
        c.prototype.Gc = function() {
            this.log("Entering text mode");
            this.view.cc("text")
        };
        c.prototype.kc = function() {
            this.fj && this.Wi();
            this.view.cc("default");
            this.log("Leaving text mode");
            this.ka && this.ka.parentNode && this.ka.parentNode.removeChild(this.ka);
            this.ka = null;
            this.qb.parentNode && this.qb.parentNode.removeChild(this.qb);
            this.wa.Xa()
        };
        c.prototype.zb = function(a, b, d) {
            this.log("onMouseDown(%s)", d.type);
            if (this.fj) {
                if (d.target === this.ka) return this.log("Ignore click -- its in our own edit box."), !1;
                this.log("Editing somewhere else on mousedown; submit that first.");
                this.Wi();
                this.view.ga.get("autoPickToolText") && this.view.hb()
            } else d = this.view.aa.wb(a, b, this.view.Sa), this.zn(d, a, b);
            this.log("Eating click");
            return this.view.Ql = !0
        };
        c.prototype.Ot = function() {
            if (this.qb && this.ka) {
                this.qb.style.fontSize = this.ka.style.fontSize;
                this.qb.style.fontFamily = this.ka.style.fontFamily;
                this.qb.style.fontWeight = this.ka.style.fontWeight;
                this.qb.style.fontStyle = this.ka.style.fontStyle;
                this.qb.style.whiteSpace = "pre-line";
                this.qb.style.position = "absolute";
                this.qb.style.visibility = "hidden";
                this.qb.style.backgroundColor = "rgba(0,0,0,0.2)";
                document.body.appendChild(this.qb);
                this.qb.style.left = "0";
                for (this.qb.style.top = "0"; this.qb.firstChild;) this.qb.removeChild(this.qb.firstChild);
                this.qb.appendChild(document.createTextNode(this.ka.value));
                var a = this.qb.clientWidth,
                    b = this.ka.clientWidth;
                b < a && (b = a, this.view.ga.get("multilineText") && b > 500 * this.view.scale && (b = 500 * this.view.scale), this.ka.style.width = b + 2 + "px")
            }
        };
        c.prototype.zn = function(a, b, d) {
            function c() {
                v.ka && (v.log("Set editBox height to %s", "" + v.ka.scrollHeight + "px"), v.ka.style.height = "" + v.ka.scrollHeight + "px", v.ka.style.width = "" + v.ka.scrollWidth + "px");
                w = null
            }

            function h() {
                null === v.Aa && v.Ot()
            }
            var f = 0;
            this.Gk = !1;
            if (a && "TextNode" === a.type() || a && "PathNode" === a.type() && this.view.ga.get("allowTextInShape") || a && a.Fh()) {
                this.Aa = a;
                "top" !== this.Fn && "TextNode" === a.type() && this.Aa.Te(!0);
                this.view.ia();
                this.Ge = new G(a.rect.x, a.rect.y);
                if (f = a.ja("font")) {
                    f = fe(f);
                    var k = f.fontFamily || "arial";
                    var l = parseFloat(f.fontSize) || 10;
                    var n = "bold" === f.fontWeight;
                    var q = "italic" === f.fontStyle
                } else k = a.ja("fontName"), l = a.ja("fontSize"), n = a.ja("bold"),
                    q = a.ja("italic");
                "TextNode" === a.type() && (l *= a.Ka().jc().y);
                var u = a.ja("textDecoration");
                f = a.rect.width * this.view.scale;
                f = Math.max(f, 200);
                this.fillStyle = a.ja("textFillStyle") || this.Oa("textFillStyle")
            } else this.Aa = null, this.Ge = new G(b, d), k = this.Oa("fontName"), l = this.Oa("fontSize"), n = this.Oa("bold"), q = this.Oa("italic"), u = this.Oa("textDecoration"), this.fillStyle = this.ba.fillStyle || this.Oa("textFillStyle") || this.Oa("fillStyle"), this.Oa("wrap") && (d -= l);
            var v = this;
            this.ka = document.createElement("textarea");
            a = this.ka.clientHeight;
            this.ka.style.width = f ? "" + f + "px" : "auto";
            f = this.view.Ll(this.Ge.x, this.Ge.y);
            this.ka.style.position = "absolute";
            this.ka.style.fontFamily = k;
            this.ka.style.fontSize = "" + l * this.view.scale + "px";
            this.ka.style.overflow = "auto";
            this.ka.style.fontWeight = n ? "bold" : "normal";
            this.ka.style.fontStyle = q ? "italic" : "normal";
            this.ka.style.padding = "0";
            this.ka.style.border = "1px solid #888";
            this.ka.style.color = this.fillStyle;
            this.ka.style.backgroundColor = this.Oa("background");
            this.Aa && "PathNode" === this.Aa.type() && (this.ka.style.backgroundColor = "white");
            this.ka.style.textDecoration = u || "none";
            this.ka.style.textAlign = this.Oa("textAlign");
            this.ka.style.zIndex = "" + (this.view.Cd() + 1);
            this.log("Using z-index %s", this.ka.style.zIndex);
            "#ffffff" === r.Yd(this.fillStyle).toString() && (this.ka.style.backgroundColor = "#808080");
            k = this.view.canvas.parentElement;
            l = B(k).Vb();
            q = n = 0;
            "top" === this.Fn ? (q = B(this.view.canvas.first).Vb(), n = this.view.canvas.width, f = this.ka.clientWidth, n = q.left + n / 2 - f / 2, q = q.top) : (n = Math.round(f.x) - 1, q = Math.round(f.y) - 1);
            this.ka.style.WebkitTransitionDuration = "0";
            this.ka.style.MozTransitionDuration = "0";
            this.ka.style.msTransitionDuration = "0";
            this.ka.style.OTransitionDuration = "0";
            this.ka.style.transitionDuration = "0";
            this.ka.style.left = n - l.left + "px";
            this.ka.style.top = q - l.top + "px";
            k.appendChild(this.ka);
            wc(this.ka);
            this.fj = !0;
            this.Ge = new G(b, d + a);
            this.Aa && (this.ka.value = this.Aa.ja("text"));
            var w = null;
            w = setTimeout(c, 0);
            this.wa.addEventListener(this.ka, "keydown", function(a) {
                "keydown" === a.type && (27 === a.keyCode && v.multiline || 13 === a.keyCode && (a.shiftKey || !v.multiline) ? (v.log("Enter pressed. create text."), v.Wi(), v.view.Ea.pb && v.view.xx(), v.view.ga.get("autoPickToolText") && v.view.hb()) : 27 === a.keyCode ? (v.log("ESC pressed; cancel."), v.cancel(), v.view.hb(), v.view.ic.na("goto-toolbar")) : 13 === a.keyCode && (w || (w = setTimeout(c, 0))))
            });
            this.wa.addEventListener(this.ka, "input", h);
            this.wa.addEventListener(this.ka, "propertychange", h);
            this.view.ga.get("leaveTextToolOnBlur") && (this.wa.addEventListener(this.ka, "focus", function() {
                v.log("Text focus received.")
            }), this.wa.addEventListener(this.ka, "blur", function() {
                v.ka && !v.ka.Zm && (v.log("Text blur received -- removing=%s", !0 === v.ka.Zm), v.ka.Zm = !0, v.Wi())
            }));
            setTimeout(function() {
                v.ka && v.ka.focus()
            }, 200);
            this.ka.focus();
            this.view.ya.na("edit-text-shown", v.ka)
        };
        c.prototype.cancel = function() {
            this.ka && (this.ka.Zm = !0, this.ka.parentNode && this.ka.parentNode.removeChild(this.ka), this.view.ya.na("edit-text-hidden"), this.view.Ea.pb && this.view.ic.na("goto-canvas"));
            this.ka = null;
            this.fj = !1;
            this.Aa && (this.Aa.Te(!1), this.view.ia())
        };
        c.prototype.Oa = function(a) {
            if (this.Aa) {
                var b = this.Aa.ja(a);
                if (b) return b
            }
            return a in this.ba ? this.ba[a] : "background" === a ? this.view.ga.get("defaultTextBackground") : "wrap" === a ? this.view.ga.get("multilineText") : this.view.sa[a]
        };
        c.prototype.Aj = function() {
            return {
                textFillStyle: this.Oa("textFillStyle"),
                fillStyle: this.Oa("textFillStyle"),
                bold: this.Oa("bold"),
                italic: this.Oa("italic"),
                textDecoration: this.Oa("textDecoration"),
                strokeStyle: this.Oa("strokeStyle"),
                lineWidth: this.Oa("lineWidth"),
                fontName: this.Oa("fontName"),
                fontSize: this.Oa("fontSize"),
                textAlign: this.Oa("textAlign")
            }
        };
        c.prototype.Wi = function() {
            var a = this;
            if (this.ka) {
                var b = this.ka.value;
                this.cancel();
                if (this.Aa && this.Aa.ja("text") === b && !this.Gk) this.log("Text was not changed.");
                else if (null === this.Aa && "" === b) this.log("No text entered.");
                else if (this.Aa) {
                    this.log("Update text in node %s", this.Aa.id);
                    var d = {
                        text: b,
                        textFillStyle: this.fillStyle,
                        textAlign: this.Oa("textAlign"),
                        textDecoration: this.Oa("textDecoration")
                    };
                    "bold" in this.ba && (d.bold = this.ba.bold);
                    "italic" in this.ba && (d.italic = this.ba.italic);
                    this.view.aa.transaction(function() {
                        a.view.aa.Qc([a.Aa.id], d)
                    })
                } else if (this.Ge) {
                    this.log("Create new text node.");
                    var c = 0,
                        h = this.Oa("fontSize");
                    this.view.ga.get("multilineText") || (c = h);
                    var f = new Fc(this.Ge.x, this.Ge.y + c);
                    this.view.aa.transaction(function() {
                        var d = a.view.aa.createNode("TextNode", zc({
                            text: b,
                            background: a.Oa("background"),
                            fontSize: h,
                            fontName: a.Oa("fontName"),
                            bold: a.Oa("bold"),
                            italic: a.Oa("italic"),
                            textAlign: a.Oa("textAlign"),
                            textFillStyle: a.Oa("textFillStyle"),
                            textDecoration: a.Oa("textDecoration"),
                            strokeStyle: a.Oa("textStrokeStyle"),
                            lineWidth: a.Oa("textLineWidth"),
                            layer: a.ba.layer || a.view.Sa,
                            wrap: a.view.ga.get("multilineText")
                        }, a.ba));
                        a.view.aa.Ld([d], f)
                    })
                }
            }
        };
        c.prototype.ob = function() {
            return !1
        };
        c.prototype.ld = function(a) {
            this.log("keyboard: %s", a);
            "cancel" === a && null === this.ka && (this.view.hb(), this.view.ic.na("goto-toolbar"))
        };
        c.prototype.Oe = function(a) {
            this.log("Set text colour to %s", a);
            this.Gk = !0;
            this.fillStyle = a;
            this.ba.textFillStyle = a;
            this.ka && (this.ka.style.color = a, "#ffffff" === r.Yd(a).toString() ? this.ka.style.backgroundColor = "#808080" : this.ka.style.backgroundColor = "#ffffff")
        };
        c.prototype.Pe = function(a, b) {
            this.view.pn(a, b)
        };
        c.prototype.je = function(a, b) {
            "defaultBold" === a ? (a = "bold", this.ka && (this.ka.style.fontWeight = b ? "bold" : "normal")) : "defaultItalic" === a ? (a = "italic", this.ka && (this.ka.style.fontStyle = b ? "italic" : "normal")) : "defaultTextBackground" === a ? (a = "background", this.ka && (this.ka.style.backgroundColor = b)) : "defaultFont" === a ? (a = "fontName", this.ka && (this.ka.style.fontFamily = b)) : "defaultFontSize" === a ? (a = "fontSize", this.ka && (this.ka.style.fontSize = b + "px")) : "defaultTextFillStyle" === a ? (a = "textFillStyle", this.ka && (this.ka.style.color = b)) : "defaultTextDecoration" === a ? (a = "textDecoration", this.ka && (this.ka.style.textDecoration = b)) : "defaultTextAlign" === a && (a = "textAlign", this.ka && (this.ka.style.textAlign = b));
            this.log("Update %s=%s", a, b);
            this.Gk = !0;
            this.ba[a] = b
        };
        c.prototype.hd = function() {
            return "text"
        };
        c.prototype.Id = function(a, b) {
            this.ba[a] = b;
            "fillStyle" === a && (this.ba.textFillStyle = b);
            if (this.ka) switch (a) {
                case "textFillStyle":
                case "fillStyle":
                    this.ka.style.color = b
            }
        };
        return c
    }();
    var Ne = x.create("MOVE"),
        Qe = function() {
            function c(a, b, d, c) {
                var e = this;
                this.Ha = a;
                this.node = d;
                this.Yj = c;
                this.Xn = !0;
                this.placeholder = this.Nq = null;
                this.Bm = function() {};
                this.We = new Md;
                this.ql = new Wa;
                this.vd = null;
                Ne("Moving node: %s istool=%s", d.id, c);
                this.Wv = d.fa.style.position || "";
                this.Uv = d.fa.style.left || "";
                this.Xv = d.fa.style.top || "";
                this.ck = d.fa.parentElement;
                this.Yv = B(d.fa).be("zIndex");
                this.Vv = d.fa.nextElementSibling;
                this.jt = null !== d.fa.getAttribute("confine") || 1 === c;
                this.dk = d.fm();
                var f = this.Ha.Hd(b.Eb, b.Fb, !0);
                this.start = f;
                if (2 === c) {
                    a = Oe(this.node.fa);
                    var k = this.Ha.Hd(a.x, a.y, !0);
                    Ne("Moving fixture from %s; tl=%s", a, k);
                    a.x = k.x;
                    a.y = k.y;
                    this.node.rect = a;
                    this.dk = this.node.rect
                }
                "IFRAME" === d.fa.tagName && (this.Xn = !1);
                d.fa.style.position = "absolute";
                this.Xn && this.Ha.Dk.appendChild(d.fa);
                d.fa.style.zIndex = "1";
                1 === c && (this.node.rect = new H(f.x - this.node.fa.offsetWidth / 2, f.y - this.node.fa.offsetHeight / 2, this.node.fa.offsetWidth, this.node.fa.offsetHeight), this.dk = this.node.rect, this.Bm = function() {
                    Ne("Got image load event from dragged tool");
                    e.Cw(f)
                }, this.node.fa.addEventListener("load", this.Bm, !0));
                this.rect = this.node.fm();
                d.fa.classList.add("dragging");
                this.Ha.aa.sc(function(a) {
                    var b = a.rect;
                    Zc(a) && (b = a.fm());
                    e.We.Po(b, a.id)
                });
                this.ob(f.x, f.y, b)
            }
            c.prototype.Gc = function() {
                Ne("Entering DragHTMLBehaviour")
            };
            c.prototype.kc = function() {
                this.node.fa.style.left = this.Uv;
                this.node.fa.style.top = this.Xv;
                this.node.fa.style.position = this.Wv;
                this.node.fa.style.zIndex = this.Yv;
                this.node.fa.style.transform = "";
                this.node.fa.classList.remove("dragging");
                this.ck ? this.Xn && this.ck.insertBefore(this.node.fa, this.Vv) : B(this.node.fa).remove();
                this.vd && this.vd.classList.remove("drop");
                Ne("DragHTMLBehaviour.leave()");
                this.Xq();
                this.node.fa.removeEventListener("load", this.Bm, !0);
                this.ql.cancel()
            };
            c.prototype.kt = function(a, b) {
                var d = Oe(b);
                d.transform(this.Ha.Cj());
                a.x < d.x && (a.x = d.x);
                a.y < d.y && (a.y = d.y)
            };
            c.prototype.ob = function(a, b, d) {
                var c = this;
                this.ql.request(d, function(a) {
                    var b = c.Ha.Hd(a.pageX, a.pageY).Gx(c.start),
                        d = c.dk;
                    c.rect.x = d.x + b.x;
                    c.rect.y = d.y + b.y;
                    c.jt && c.ck && c.kt(c.rect, c.ck);
                    c.Ha.ga.get("magnet") && (b = c.We.Bx(c.rect, c.node.id), c.rect.x += b.x, c.rect.y += b.y);
                    c.node.fa.style.left = c.rect.x + "px";
                    c.node.fa.style.top = c.rect.y + "px";
                    b = Oe(c.node.fa);
                    b = c.Tt(b);
                    null !== b ? c.xs(b, a.pageX, a.pageY) : c.Xq();
                    a = c.node.ja("$component");
                    var e = null,
                        h = Oe(c.node.fa);
                    B(c.Ha.ce()).query('[z-drop-accept="' + a + '"]', function(a) {
                        var b = Oe(a),
                            d = Math.min(h.eh(), b.eh());
                        a !== c.node.fa && b.Jq(h) > .7 * d && (e = a)
                    });
                    a = e;
                    a !== c.vd && (c.vd && c.vd.classList.remove("drop"), c.vd = a, c.vd && c.vd.classList.add("drop"))
                });
                return !0
            };
            c.prototype.Tt = function(a) {
                var b = this.node.ja("$component"),
                    d = null;
                B(this.Ha.ce()).query("[container-for]", function(c) {
                    Pe(c, b) && Oe(c).Jq(a) > .5 * a.eh() && (d = c)
                });
                return d
            };
            c.prototype.xs = function(a, b, d) {
                var c = 0,
                    h = null,
                    f = new G(b, d),
                    k = null;
                for (b = a.firstElementChild; b;) {
                    if (!b.classList.contains("placeholder")) {
                        k = Oe(b);
                        k = (new G(k.x, k.y)).Kb(f);
                        if (!h || k < c) h = b, c = k;
                        k = b
                    }
                    b = b.nextElementSibling
                }
                h && h === k && (k = Oe(h), d > k.y && (h = null));
                d = h;
                if (this.placeholder && this.placeholder.parentNode) {
                    if (a !== this.placeholder.parentElement || d !== this.Nq) this.Nq = d, a.insertBefore(this.placeholder, d)
                } else console.log("Create placeholder"), this.placeholder = B("div", {
                    "class": "placeholder"
                }).Wa({
                    flex: "0 0 " + this.node.fa.offsetHeight + "px"
                }).fa, a.insertBefore(this.placeholder, d)
            };
            c.prototype.Xq = function() {
                this.placeholder && this.placeholder.parentNode && this.placeholder.parentNode.removeChild(this.placeholder)
            };
            c.prototype.Cb = function(a, b, d) {
                this.ql.cancel();
                Ne("onMouseUp()");
                if (1 === this.Yj && !Oe(this.Ha.canvas.first).ed(d.pageX, d.pageY)) return Ne("Dropped nowhere!"),
                    this.Ha.Qa(new Ie(this.Ha)), !0;
                a = "static";
                var c = 0,
                    h = 0,
                    f = 0;
                b = this.Ha.aa.zh();
                if (this.placeholder && this.placeholder.parentElement)
                    if ("flex" !== B(this.placeholder.parentElement).be("display") && (a = "absolute"), d = this.Ha.aa.dm(this.placeholder)) {
                        b = d;
                        c = this.placeholder;
                        h = this.placeholder.parentElement.firstElementChild;
                        for (f = 0; h && h !== c;) h.getAttribute("nid") && f++, h = h.nextElementSibling;
                        f = Math.min(f, d.Ma() - 1);
                        Ne("Use placeholder, place at %s:%s", b.id, f);
                        c = this.rect.x - d.rect.x;
                        h = this.rect.y - d.rect.y
                    } else Ne("Placeholder is not in a NID node");
                else Ne("No placeholder; add to root"), a = "absolute", f = -1, c = this.rect.x, h = this.rect.y;
                this.Ha.Qa(new Ie(this.Ha));
                this.Ha.aa.Va();
                0 === this.Yj || 2 === this.Yj ? this.Ha.aa.Lc(this.node.id, b.id, f) : b && 1 === this.Yj && (d = this.node.Ic(), "absolute" === a && (d["style.position"] = "absolute", d["style.left"] = c + "px", d["style.top"] = h + "px"), this.Ha.aa.createNode("HTMLNode", d, b.id, f), this.Ha.cb(), this.Ha.Qd(this.node));
                "absolute" === a ? this.Ha.aa.Qc([this.node.id], {
                    "style.left": c + "px",
                    "style.top": h + "px",
                    "style.position": a
                }) : this.Ha.aa.Qc([this.node.id], {
                    "style.left": "",
                    "style.top": "",
                    "style.position": ""
                });
                this.vd && (a = this.Ha.ya.Qp(this.vd)) && (a = this.Ha.ya.im(a), this.Ha.ya.im(this.node.id), a && a.element && O.fd(a.element, "drop", this.node.xj(null)));
                this.Ha.aa.ua(!1);
                this.Ha.Qa(new Ie(this.Ha));
                return !0
            };
            c.prototype.Cw = function(a) {
                this.node.rect = new H(a.x - this.node.fa.offsetWidth / 2, a.y - this.node.fa.offsetHeight / 2, this.node.fa.offsetWidth, this.node.fa.offsetHeight);
                this.dk = this.node.rect
            };
            return c
        }();

    function Oe(c) {
        c = B(c).Vb();
        return new H(c.left, c.top, c.width, c.height)
    };
    var Re = x.create("RESIZE"),
        Se = function() {
            function c(a, b, d) {
                this.Ha = a;
                this.node = b;
                this.gc = d;
                Re("Enter resize behaviour")
            }
            c.prototype.Gc = function() {};
            c.prototype.kc = function() {
                Re("Exit RESIZE")
            };
            c.prototype.ob = function(a, b, d) {
                this.Ha.Hd(d.pageX, d.pageY);
                b = (d.pageX - d.Eb) / this.Ha.scale;
                var c = (d.pageY - d.Fb) / this.Ha.scale;
                d = this.node.rect.clone();
                a = this.gc;
                if (a & 16) {
                    var h = Math.min(Math.abs(b), Math.abs(c));
                    b = Math.sign(b) * h;
                    c = Math.sign(c) * h
                }
                switch (a) {
                    case 25:
                    case 22:
                        c = b;
                        break;
                    case 19:
                    case 28:
                        c = -b
                }
                Id("D: %s,%s", b, c);
                a & 1 && (d.y += c, d.height -= c);
                a & 4 && (d.height += c);
                a & 8 && (d.x += b, d.width -= b);
                a & 2 && (d.width += b);
                if (this.node.fa) {
                    a = this.node.fa;
                    h = a.offsetParent;
                    b = d.x;
                    for (c = d.y; h instanceof HTMLElement && h !== this.Ha.aa.Kc;) b -= h.offsetLeft, c -= h.offsetTop, h = h.offsetParent;
                    h = B(a).gm();
                    a.style.left = b - h.left + "px";
                    a.style.top = c - h.top + "px";
                    a.style.width = d.width - h.zm - h.en + "px";
                    a.style.height = d.height - h.Nn - h.ul + "px"
                }
                return !0
            };
            c.prototype.Cb = function() {
                if (!this.node.fa) throw Error("Expected element to be created");
                this.Ha.Qa(new Ie(this.Ha));
                B(this.node.fa).gm();
                this.Ha.aa.Va();
                this.Ha.aa.Qc([this.node.id], {
                    "style.left": this.node.fa.style.left,
                    "style.top": this.node.fa.style.top,
                    "style.width": this.node.fa.style.width,
                    "style.height": this.node.fa.style.height
                });
                this.Ha.aa.ua(!1);
                return !0
            };
            return c
        }();
    var Te = x.create("DefaultBehaviour"),
        Ie = function() {
            function c(a) {
                this.view = a;
                this.dr = 1;
                this.view.yk("");
                if (this.Rg = this.view.ga.Rg()) this.dr = 2;
                this.md = new be(a)
            }
            c.prototype.Gc = function() {
                Te("Entering pick tool.");
                this.view.cc("default")
            };
            c.prototype.kc = function() {
                Te("Leaving pick tool.")
            };
            c.prototype.sb = function(a) {
                return this.md.sb(a)
            };
            c.prototype.zb = function(a, b, d) {
                var c, h;
                Te("onMouseDown");
                if (d.button) return Te("   -- not main button. ignore."), !1;
                if (this.view.ga.get("readOnly")) return (c = this.view.aa.wb(a, b, this.view.Sa)) ? (Te("layer=%s active=%s", c.Vc(), this.view.Sa), this.view.ya.na("node-clicked", parseInt(c.id, 36), a, b)) : Te("readOnly mode: Ignoring click."), !1;
                if (h = this.view.Eu(a, b)) {
                    if (h.click()) return this.view.ya.digest(), !0;
                    this.view.Qa(new Le(this.view, h, !1, a, b));
                    return !0
                }
                this.view.selection.length && this.view.tv(d) && this.view.oh();
                if (this.view.Aa && (c = this.view.Aa, h = c.Jj(a, b, 1 / this.view.scale * this.dr), null !== h)) return this.view.Qa(new Je(this.view, c, h, a, b, this, d)), !0;
                (c = this.view.aa.wb(a, b, this.view.Sa)) ? (Te("layer=%s active=%s", c.Vc(), this.view.Sa), this.view.ya.na("node-clicked", parseInt(c.id, 36), a, b)) : c = this.view.aa.dm(d.target);
                h = c && Yc(c);
                var f = this.view.We.hm(a, b);
                if (c && c.Vc() === this.view.Sa) {
                    f = c === this.view.Aa;
                    var k = this.view.Ih(c);
                    Te("wasEditNode: %s, wasSelected: %s", f, k);
                    k || (d.shiftKey || this.view.cb(), this.view.Qd(c), this.view.Tb());
                    if (h) return !1;
                    this.view.Qa(new Le(this.view, this.view.di ? new Ed(yd, c.Ka()) : new Fd, !f && k, a, b))
                } else if (this.view.Oq(a, b)) {
                    if (h) return !1;
                    this.view.Qa(new Le(this.view, this.view.di ? new Ed(yd, this.view.selection[0].Ka()) : new Fd, !0, a, b))
                } else {
                    if (!this.view.ga.iu()) return Te("Disabled select box -- mobile touch active."), this.view.Jg(null), this.view.cb(), this.view.Tb(), this.view.ia(), !1;
                    0 == f.length && (this.view.Jg(null), this.view.Qa(new $d(this.view, this, a, b)))
                }
                return !0
            };
            c.prototype.ob = function(a, b) {
                var d = this.view.We.hm(a, b);
                d.length ? this.view.cc(Jd(d[0].gc)) : this.view.cc("default");
                return !1
            };
            c.prototype.Cb = function() {
                Te("onMouseUp");
                return !1
            };
            c.prototype.Eq = function(a, b, d) {
                Te("Mouse drag!");
                if (Ac(d.Zc.target) || this.view.ga.get("readOnly")) return !1;
                a = this.view.Hd(d.Eb, d.Fb, !0);
                b = this.view.We.hm(a.x, a.y);
                if ((a = b.length ? this.view.aa.eb(b[0].id) : this.view.aa.wb(a.x, a.y, this.view.ng())) && Zc(a)) {
                    var c;
                    if (c = b.length) a: {
                        switch (b[0].gc) {
                            case 25:
                            case 33:
                            case 19:
                            case 34:
                            case 22:
                            case 36:
                            case 28:
                            case 40:
                                c = !0;
                                break a
                        }
                        c = !1
                    }
                    b = c && a.fa.hasAttribute("z-sizeable") ? new Se(this.view, a, b[0].gc, d.Eb, d.Fb) : new Qe(this.view, d, a, 0);
                    this.view.Qa(b)
                }
                if (!a) {
                    a: {
                        for (a = d.Zc.target; a;) {
                            if (a.hasAttribute("z-drag-to-create")) {
                                b = {
                                    fa: a,
                                    type: a.getAttribute("z-drag-to-create")
                                };
                                break a
                            }
                            a = a.parentElement
                        }
                        b = null
                    }
                    if (b) {
                        a = P.su(b.type);
                        a.$component = b.type;
                        b = b.fa;
                        c = {};
                        for (var h = 0; h < b.attributes.length; h++) {
                            var f = b.attributes[h].name,
                                k = b.attributes[h].value;
                            if (f.startsWith("z-prop:")) {
                                f = f.substr(7);
                                for (var l = !1, n = "", q = 0; q < f.length; q++) {
                                    var u = f[q];
                                    "-" === u ? l = !0 : l ? (n += u.toUpperCase(), l = !1) : n += u.toLowerCase()
                                }
                                f = n;
                                k = jc.vp(c, k, b);
                                a[f] = k
                            }
                        }
                        b = new Ue(this.view.aa.sj(), this.view.aa);
                        b.Ue(a);
                        b.format(this.view.xa, this.view.request);
                        this.view.Qa(new Qe(this.view, d, b, 1))
                    } else(a = this.view.aa.dm(d.target)) && Zc(a) && this.view.Qa(new Qe(this.view, d, a, 2))
                }
                return !1
            };
            c.prototype.ld = function(a, b) {
                Te("keyboard: %s on target %s", a, b.target.tagName);
                if ("INPUT" !== b.target.tagName) {
                    var d = !0,
                        c = this.view.ga.get("nudge");
                    b && b.ctrlKey && (c = this.view.ga.get("preciseNudge"));
                    var h = this.view.Ea.pb;
                    switch (a) {
                        case "bring-to-front":
                            this.view.Uc(0);
                            break;
                        case "send-to-back":
                            this.view.Uc(1);
                            break;
                        case "left":
                            h || this.view.$j(-1, 0, c) || (this.view.lb = Math.min(this.view.lb + 16, 0), this.view.Dc(), this.view.ia());
                            break;
                        case "right":
                            h || this.view.$j(1, 0, c) || (c = this.view.Yl().width, this.view.lb = Math.max(-(c * this.view.scale - c), this.view.lb - 16), this.view.Dc(), this.view.ia());
                            break;
                        case "up":
                            h || this.view.$j(0, -1, c) || (this.view.bb = Math.min(this.view.bb + 16, 0), this.view.Dc(), this.view.ia());
                            break;
                        case "down":
                            h || this.view.$j(0, 1, c) || (c = this.view.Yl().height, this.view.bb = Math.max(-(c * this.view.scale - c), this.view.bb - 16), this.view.Dc(), this.view.ia());
                            break;
                        case "select-none":
                            this.view.cb();
                            this.view.Tb();
                            this.view.ia();
                            h && this.view.ic.na("goto-toolbar");
                            break;
                        case "select-all":
                            var f = [];
                            this.view.aa.sc(function(a) {
                                f.push(a)
                            });
                            this.view.selectNodes(f);
                            this.view.ia();
                            h && this.view.ic.na("goto-toolbar");
                            break;
                        case "duplicate":
                            this.view.duplicate();
                            break;
                        case "move-up":
                            this.view.Uc(2);
                            break;
                        case "move-down":
                            this.view.Uc(3);
                            break;
                        case "delete":
                            this.view.oh();
                            break;
                        case "curve-tool":
                            this.view.jp({});
                            break;
                        case "line-tool":
                            this.view.nq({}, !1, !1);
                            break;
                        case "group":
                            this.view.group();
                            break;
                        case "ungroup":
                            this.view.Qg();
                            break;
                        case "undo":
                            this.view.xc();
                            break;
                        case "redo":
                            this.view.Gd();
                            break;
                        case "cut":
                            this.view.Hl();
                            break;
                        case "copy":
                            this.view.mf(!1, this.view.Jc(!1));
                            break;
                        case "paste":
                            this.view.Xh();
                            break;
                        case "zoom-normal":
                            this.view.ga.get("allowZoom") ? this.view.od(1) : Te("Zooming is disabled.");
                            break;
                        case "zoom-in":
                            this.view.ga.get("allowZoom") ? this.view.Rk() : Te("Zooming is disabled.");
                            break;
                        case "zoom-out":
                            this.view.ga.get("allowZoom") ? this.view.Sk() : Te("Zooming is disabled.");
                            break;
                        default:
                            d = !1
                    }
                    d && (b.preventDefault(), b.stopPropagation())
                }
            };
            c.prototype.Oe = function(a, b) {
                if (b) {
                    this.view.Ab = a;
                    this.view.Jb = a;
                    var d = "fillStyle"
                } else this.view.Rb = a, d = "strokeStyle";
                this.view.setProperty(d, a)
            };
            c.prototype.Pe = function(a, b) {
                b ? (this.view.Ab = vc(this.view.Ab, a), this.view.Jb = vc(this.view.Jb, a)) : this.view.Rb = vc(this.view.Rb, a);
                this.view.pn(a, b)
            };
            c.prototype.Jm = function(a, b) {
                Te("onDoubleClick");
                var d = this.view.aa.wb(a, b, this.view.Sa);
                Te("hittest: %s, hasText: %s", null !== d, null !== d && d.Fh());
                this.view.ya.na("double-click", a, b, d ? parseInt(d.id, 36) : null);
                if (d && "PathNode" === d.type() && !this.view.ga.get("allowTextInShape")) Te("Editing text in shape is disabled.");
                else if (d && d.Fh() && !this.view.ga.get("readOnly")) Te("Text double-clicked."), this.view.Gn({}), this.view.ra instanceof Me && this.view.ra.zn(d, a, b);
                else return !1;
                return !0
            };
            c.prototype.hd = function() {
                return "pick"
            };
            return c
        }();
    var Ve = function() {
        function c(a, b, d) {
            var c = this;
            this.view = a;
            this.options = b;
            this.mode = d;
            this.Qe = [];
            this.log = x.create("Brush");
            this.view.cb(!0);
            this.Zq = function() {
                return c.Gf()
            }
        }
        c.prototype.Gf = function() {
            this.Dm(this.Bd() / 2)
        };
        c.prototype.Gc = function() {
            this.view.cc("crosshair");
            this.Dm(this.Bd() / 2);
            window.addEventListener("resize", this.Zq)
        };
        c.prototype.kc = function() {
            this.view.cc("default");
            this.view.yl("brush");
            window.removeEventListener("resize", this.Zq)
        };
        c.prototype.reset = function() {
            this.Qe = []
        };
        c.prototype.Dm = function(a) {
            var b = document.createElement("canvas");
            a *= this.view.scale;
            a = Math.ceil(a + 1);
            b.width = 2 * a + 2;
            b.height = 2 * a + 2;
            var d = b.getContext("2d");
            d.beginPath();
            "round" === (this.options.lineCap || "round") ? d.arc(a + 1, a + 1, a, 0, 2 * Math.PI): d.rect(1, 1, 2 * a - 2, 2 * a - 2);
            d.lineWidth = 2;
            d.strokeStyle = "#ffffff";
            d.stroke();
            d.lineWidth = 1;
            d.strokeStyle = "#000000";
            d.stroke();
            b = b.toDataURL();
            this.view.cc("url(" + b + ") " + (a + 1) + " " + (a + 1) + ", auto")
        };
        c.prototype.Hg = function(a) {
            this.options.strokeStyle = a
        };
        c.prototype.Bd = function() {
            var a = this.options.lineWidth;
            this.view.ga.get("adaptiveBrushWidth") && (a /= this.view.scale);
            return a
        };
        c.prototype.zk = function(a) {
            this.options.lineWidth = a;
            this.Dm(this.Bd() / 2)
        };
        c.prototype.zb = function(a, b, d) {
            var c = "freehand" === this.mode || "brush" === this.mode ? new Vc : new Tc;
            c.ff(a, b);
            this.Qe[d.pointerId] = c;
            return !0
        };
        c.prototype.fw = function(a) {
            var b, d, c = this.view.cp();
            a.lineCap = this.options.lineCap || "round";
            a.lineJoin = "round" === a.lineCap ? "round" : "bevel";
            a.lineWidth = this.Bd();
            var h = a.globalAlpha;
            "opacity" in this.options && (a.globalAlpha = this.options.opacity);
            a.beginPath();
            for (var f in this.Qe) {
                var k = this.Qe[f].lm();
                a.moveTo(k[0].x, k[0].y);
                var l = b = 1;
                for (d = k.length - 1; b <= d; l = b += 1) l = k[l], a.lineTo(l.x, l.y)
            }
            yc(a, this.options.strokeStyle);
            c && a.restore();
            a.globalAlpha = h
        };
        c.prototype.ob = function(a, b, d) {
            var c = this;
            d.pointerId in this.Qe && (this.Qe[d.pointerId].ff(a, b), this.view.Wq("brush", function(a) {
                return c.fw(a)
            }));
            return !0
        };
        c.prototype.Cb = function(a, b, d) {
            this.ob(a, b, d);
            this.view.yl("brush");
            this.ua();
            return !0
        };
        c.prototype.ua = function() {
            var a, b;
            this.view.aa.Va();
            var d = "";
            for (var c in this.Qe) {
                var h = this.Qe[c].lm();
                if ("brush" === this.mode || "freehand" === this.mode) {
                    var f = [];
                    1 === h.length && h.push(new G(h[0].x + .1, h[0].y + .1));
                    if (1 < h.length) {
                        d = a = 0;
                        for (b = h.length - 1; a <= b; d = a += 1) f.push(h[d].x), f.push(h[d].y);
                        d = this.view.aa.createNode("BrushNode", zc({
                            points: f,
                            layer: this.view.Sa
                        }, this.options, {
                            lineWidth: this.Bd()
                        }))
                    }
                } else {
                    if ("shapebrush" === this.mode) {
                        h = Oc(h, 20);
                        var k;
                        var l = h;
                        if (!(2 > l.length)) {
                            a = l[0];
                            h = l[l.length - 1];
                            f = 40 > a.Kb(h);
                            for (b = 0; b < l.length; b++) {
                                var n = l[b];
                                for (k = b + 1; k < l.length; k++) {
                                    var q = l[k];
                                    20 > Math.abs(n.x - q.x) && (q.x = n.x);
                                    20 > Math.abs(n.y - q.y) && (q.y = n.y)
                                }
                            }
                            n = H.Wg(l).ud();
                            for (b = 0; b < l.length; b++) k = l[b], 20 > Math.abs(k.x - n.x) && (k.x = n.x), 20 > Math.abs(k.y - n.y) && (k.y = n.y);
                            f && (a.x = h.x, a.y = h.y)
                        }
                        h = l
                    } else if ("quadratic" === this.mode) {
                        h = Oc(h, 10);
                        a = vd(h);
                        d = a.da[1];
                        f = a.da[2];
                        l = a.da[4];
                        b = a.da[5];
                        h = a.da[8];
                        a = a.da[9];
                        l = ((3 * l - d) / 2 + (3 * l - h) / 2) / 2;
                        b = ((3 * b - f) / 2 + (3 * b - a) / 2) / 2;
                        k = new K;
                        k.moveTo(d, f);
                        k.quadraticCurveTo(l, b, h, a);
                        d = k;
                        f = M.Pr(d);
                        d = this.view.aa.createNode("PathNode", zc({
                            commands: f,
                            fillStyle: this.view.Ab,
                            sloppiness: 0,
                            layer: this.view.Sa
                        }, this.options, {
                            lineWidth: this.Bd()
                        }));
                        continue
                    }
                    1 === h.length && "freehand" === this.mode && h.push(new G(h[0].x + .1, h[0].y + .1));
                    if (1 < h.length) {
                        f = new N;
                        f.moveTo(h[0].x, h[0].y);
                        a = h[0].Hc(h[h.length - 1]);
                        d = b = 1;
                        for (l = h.length - 1; b <= l; d = b += 1) f.lineTo(h[d].x, h[d].y);
                        a && f.close();
                        d = this.view.aa.createNode("PathNode", zc({
                            commands: f.Ib(),
                            fillStyle: this.view.Ab,
                            sloppiness: 0,
                            layer: this.view.Sa
                        }, this.options, {
                            lineWidth: this.Bd()
                        }))
                    }
                }
            }
            this.view.aa.ua();
            this.view.cb();
            c = this.view.aa.eb(d);
            this.view.ga.get("singleStrokeBrush") ? (c && this.view.Qd(c), this.view.hb()) : this.reset();
            this.view.Tb()
        };
        c.prototype.Oe = function(a, b) {
            this.options.strokeStyle = a;
            if (b) {
                this.view.Ab = a;
                this.view.Jb = a;
                var d = "fillStyle"
            } else this.view.Rb = a, d = "strokeStyle";
            this.view.setProperty(d, a)
        };
        c.prototype.Pe = function(a) {
            this.view.Jb = vc(this.view.Jb, a);
            this.options.strokeStyle = vc(this.options.strokeStyle, a);
            this.view.Ab = this.view.Jb
        };
        c.prototype.ld = function(a) {
            this.log("keyboard: %s", a);
            "cancel" === a && (this.log("ESC pressed. Abort brush and go back to toolbar."), this.view.hb(), this.view.ic.na("goto-toolbar"))
        };
        c.prototype.je = function(a, b) {
            "defaultBrushWidth" === a ? this.zk(b) : "defaultBrushColour" === a && this.Hg(b)
        };
        c.prototype.Id = function(a, b) {
            switch (a) {
                case "lineWidth":
                    this.zk(b);
                    break;
                case "strokeStyle":
                case "fillStyle":
                    this.Hg(b)
            }
        };
        c.prototype.hd = function() {
            return "circle" === this.mode ? "ellipse" : this.mode
        };
        c.prototype.Aj = function() {
            return this.options
        };
        return c
    }();
    var We = function() {
        function c(a, b, d, c, h) {
            void 0 === d && (d = {});
            void 0 === c && (c = !1);
            void 0 === h && (h = !1);
            this.view = a;
            this.type = b;
            this.ba = d;
            this.rn = c;
            this.Ri = h;
            this.node = null;
            this.Vl = new G(0, 0);
            this.Tj = new G(0, 0);
            this.index = 0;
            this.state = "start";
            this.log = x.create("DRAWLINES");
            "wrap" in this.ba || (this.ba.wrap = this.view.ga.get("multilineText"));
            "fontSize" in this.ba || (this.ba.fontSize = this.view.ga.get("defaultFontSize"));
            this.md = new be(this.view);
            this.view.cb(!0)
        }
        c.prototype.Gc = function() {
            this.log("Entering DrawLinesBehaviour");
            this.view.cc("crosshair");
            this.view.ga.Rg() || this.view.yk("click-to-place-first-point-of-line");
            this.view.ia()
        };
        c.prototype.reset = function() {
            this.Gc()
        };
        c.prototype.sb = function(a) {
            a = this.md.sb(a);
            this.md.active && this.node && this.reset();
            return a
        };
        c.prototype.ld = function(a) {
            "cancel" === a && (null !== this.node && this.view.Ea.pb && "curve" === this.type && this.ua(), null !== this.node && (this.view.aa.Va(), this.view.aa.Sb([this.node.id]), this.view.aa.ua(!0)), this.view.Ea.pb ? this.view.ic.na("goto-toolbar") : this.view.hb())
        };
        c.prototype.done = function() {
            this.view.ga.get("autoPickTool") ? this.view.hb() : this.state = "start"
        };
        c.prototype.ff = function(a, b) {
            this.node instanceof M && ("curve" === this.type || "arrow" === this.type || "linear-bezier" === this.type ? this.node.nh(a, b) : this.node.lineTo(a, b))
        };
        c.prototype.zb = function(a, b) {
            var d = this.view.Ra(new G(a, b));
            this.log("onMouseDown(%s, %s) state=%s, index=%s", a, b, this.state, this.index);
            if ("start" === this.state) {
                this.Vl = d;
                var c = {
                    seed: Math.round(65535 * Math.random()),
                    strokeStyle: this.view.Rb,
                    lineWidth: this.Bd(),
                    sloppiness: this.view.sa.sloppiness,
                    smoothness: this.view.sa.smoothness
                };
                "arrow" === this.type && (c.arrowSize = this.view.ga.Ta("defaultArrowSize"), c.arrowStyle = this.view.ga.Ta("defaultArrowStyle"), c.arrowXOffset = this.view.ga.Ta("defaultArrowXOffset"));
                for (var h in this.ba) this.ba.hasOwnProperty(h) && (c[h] = this.ba[h]);
                this.view.aa.Va();
                c = this.view.aa.createNode("PathNode", c);
                this.view.aa.ua(!0);
                this.node = this.view.aa.eb(c);
                this.node.moveTo(d.x, d.y);
                this.ff(d.x, d.y);
                this.index = 3;
                this.view.update();
                this.state = "predrag"
            } else if ("placing" === this.state)
                if (c = this.Tj.Kb(d), this.log("Mouse moved by %s", c), "arrow" !== this.type && 8 > this.Vl.Kb(d) && 3 < this.index) this.log("Clicked close to start; automatically closing path"), this.node instanceof M && this.node.close(), this.ua(), this.done();
                else if (8 > this.Tj.Kb(d)) this.log("Didn't move. Stop drawing."), this.fp(), this.done();
            else {
                if (this.rn) return this.ua(), this.done(), !0;
                this.node && (this.ff(d.x, d.y), this.index += 3, this.view.aa.Nh(this.node.id), this.view.update())
            } else return this.log("Invalid state %s", this.state), !0;
            this.Tj = new G(d.x, d.y);
            return !0
        };
        c.prototype.fp = function() {
            3 < this.index ? (this.node instanceof M && this.node.Fw(this.index), this.ua()) : this.cancel()
        };
        c.prototype.Cb = function(a, b) {
            var d = new G(a, b);
            d = this.Vl.Kb(d);
            this.log("onMouseUp (%s,%s) %s", a, b, this.state);
            "predrag" === this.state && (this.log("MovedBy: %s", d), 10 < d ? (this.ua(), this.done()) : (this.state = "placing", this.view.yk("click-to-place-another-point-or-double-click-to-end-the-line")));
            return !0
        };
        c.prototype.ob = function(a, b, d) {
            b = this.view.Ra(new G(a, b));
            a = b.x;
            b = b.y;
            if (d.ctrlKey || this.Ri) {
                d = this.Tj;
                var c = Math.atan2(b - d.y, a - d.x),
                    h = Math.PI / 8;
                c >= -h && c < h ? b = d.y : c >= h && c < 3 * h ? (a = Math.max(b - d.y, a - d.x), b = d.y + a, a = d.x + a) : c >= 3 * h && c < 5 * h ? a = d.x : c >= 5 * h && c < 7 * h ? (a = Math.max(b - d.y, d.x - a), b = d.y + a, a = d.x - a) : c >= 7 * h || c <= 7 * -h ? b = d.y : c < 5 * -h ? (a = Math.max(d.y - b, d.x - a), b = d.y - a, a = d.x - a) : c < 3 * -h ? a = d.x : (a = Math.max(d.y - b, a - d.x), b = d.y - a, a = d.x + a)
            }
            this.node && (this.node.ge(this.index, a, b), this.node.format(this.view.xa, this.view.request), this.view.ia());
            return !1
        };
        c.prototype.gk = function() {
            this.log("onMouseClick()");
            return !0
        };
        c.prototype.mt = function(a) {
            for (var b = 0, d = [], c, h, f, k, l, n; b < a.length;) {
                var q = a[b];
                switch (q) {
                    case M.$f:
                        f = a[b + 1];
                        k = a[b + 2];
                        d.push(q, f, k);
                        break;
                    case M.we:
                        c = a[b + 1], h = a[b + 2], void 0 !== f && void 0 !== k && void 0 !== l && void 0 !== n && d.push(M.Vg, c, h, (l + f) / 2, (n + k) / 2, (f + c) / 2, (k + h) / 2), l = f, n = k, f = c, k = h
                }
                b += M.Za[q] + 1
            }
            return d
        };
        c.prototype.ua = function() {
            var a = this;
            if (this.node) {
                this.node instanceof M && this.node.Ks();
                this.view.aa.Va();
                this.view.aa.Sb([this.node.id]);
                this.view.aa.ua(!0);
                var b = this.view.ga.Ta("defaultArrowSize"),
                    d = this.node.ja("commands");
                "linear-bezier" === this.type && (d = this.mt(d));
                var c = {
                        arrowSize: "arrow" === this.type ? b : 0,
                        arrowStyle: this.view.ga.Ta("defaultArrowStyle"),
                        arrowXOffset: this.view.ga.Ta("defaultArrowXOffset"),
                        commands: d,
                        seed: this.node.ja("seed"),
                        fillStyle: this.view.Ab,
                        strokeStyle: this.view.Rb,
                        lineWidth: this.Bd(),
                        sloppiness: this.view.sa.sloppiness,
                        smoothness: this.view.sa.smoothness,
                        layer: this.view.Sa
                    },
                    h;
                for (h in this.ba) this.ba.hasOwnProperty(h) && (c[h] = this.ba[h]);
                this.view.aa.transaction(function() {
                    a.view.aa.createNode("PathNode", c)
                });
                this.node = null
            }
        };
        c.prototype.cancel = function() {
            this.node && (this.view.aa.Va(), this.view.aa.Sb([this.node.id]), this.view.aa.ua(!0), this.node = null)
        };
        c.prototype.kc = function() {
            this.fp();
            this.view.cc("default");
            this.view.yk("");
            this.view.ia()
        };
        c.prototype.Oe = function(a, b) {
            if (b) {
                this.view.Ab = a;
                this.view.Jb = a;
                var d = "fillStyle";
                this.log("We are drawing lines. Set strokeStyle instead of fillStyle")
            } else d = "strokeStyle";
            this.view.Rb = a;
            this.view.setProperty(d, a)
        };
        c.prototype.Pe = function(a, b) {
            b ? (this.view.Ab = vc(this.view.Ab, a), this.view.Jb = vc(this.view.Jb, a)) : this.view.Rb = vc(this.view.Rb, a);
            this.view.pn(a, b)
        };
        c.prototype.hd = function() {
            return this.type
        };
        c.prototype.Id = function(a, b) {
            this.ba[a] = b
        };
        c.prototype.Bd = function() {
            return this.view.bh(this.view.sa.lineWidth)
        };
        return c
    }();
    var Xe = function() {
        function c(a, b, d, c, h, f, k, l) {
            var e = this;
            this.view = a;
            this.nodeType = b;
            this.ba = d;
            this.width = c;
            this.height = h;
            this.er = f;
            this.Mx = k;
            this.state = "initial";
            this.start = new G(0, 0);
            this.end = new G(0, 0);
            this.node = null;
            this.log = x.create("DrawShape");
            "rectangle-tl" === f && (this.pp = function(a) {
                a.lineWidth = 1 / e.view.scale;
                a.strokeStyle = "#ccc";
                a.beginPath();
                a.rect(e.start.x, e.start.y, e.end.x - e.start.x, e.end.y - e.start.y);
                a.stroke()
            });
            this.Yo = null === l ? this.view.ga.get("autoPickTool") : l;
            this.md = new be(this.view);
            this.view.cb(!0)
        }
        c.prototype.pp = function() {};
        c.prototype.Gc = function() {
            this.log("Entering DrawShapeBehaviour");
            this.view.cc("crosshair")
        };
        c.prototype.kc = function() {
            this.log("Leaving DrawShapeBehaviour");
            this.cancel()
        };
        c.prototype.cancel = function() {
            this.node && (this.view.aa.Va(), this.view.aa.Sb([this.node.id]), this.view.aa.ua(!0), this.view.update(), this.node = null);
            this.state = "initial"
        };
        c.prototype.sb = function(a) {
            a = this.md.sb(a);
            this.node && this.md.active && (this.view.aa.Va(), this.view.aa.Sb([this.node.id]), this.view.aa.ua(!0), this.node = null, this.state = "initial");
            return a
        };
        c.prototype.ld = function(a) {
            "cancel" === a && this.view.hb()
        };
        c.prototype.zb = function(a, b) {
            "initial" === this.state && (this.start = this.view.Ra(new G(a, b)), this.state = "predraw", this.log("initial -> predraw"));
            return !0
        };
        c.prototype.ob = function(a, b, d) {
            a = this.view.Ra(new G(a, b));
            d = d.ctrlKey;
            "predraw" === this.state && 10 < this.start.Kb(a) && (this.create(), this.state = "drawing", this.log("predraw -> drawing"));
            "drawing" === this.state && (this.transform(this.start, a, d), this.end = a, this.view.update(!1, this.pp));
            return !0
        };
        c.prototype.Cb = function(a, b, d) {
            "predraw" === this.state ? this.view.ga.get("clickToDrawShapes") ? (this.create(), this.transform(this.start, null, d.ctrlKey), this.ua(), this.Yo && this.view.hb(), this.state = "initial") : this.cancel() : "drawing" === this.state && (this.transform(this.start, this.view.Ra(new G(a, b)), d.ctrlKey), this.ua(), this.Yo && this.view.hb(), this.state = "initial");
            return !0
        };
        c.prototype.create = function() {
            this.view.aa.Va();
            var a = this.view.aa.createNode(this.nodeType, this.ba);
            this.node = this.view.aa.eb(a);
            this.view.aa.ua(!0)
        };
        c.prototype.transform = function(a, b, d) {
            if (b)
                if ("circle" === this.er) {
                    var c = a;
                    a = a.Kb(b);
                    var h = 2 * a / this.width;
                    a = 2 * a / this.height
                } else {
                    if ("rectangle-tl" === this.er) a = a.clone(), b = b.clone(), a.x > b.x && (h = a.x, a.x = b.x, b.x = h), a.y > b.y && (h = a.y, a.y = b.y, b.y = h), c = a;
                    else if (h = [a, b], 0 === h.length) c = new G(0, 0);
                    else {
                        c = h[0].x;
                        for (var f = h[0].y, k = 1; k < h.length; k++) c += h[k].x, f += h[k].y;
                        c = new G(c / h.length, f / h.length)
                    }
                    h = (b.x - a.x) / this.width;
                    a = (b.y - a.y) / this.height
                }
            else c = a, a = h = 1;
            d && (a = h = Math.min(h, a));
            d = new Fc(c.x, c.y);
            d = d.multiply(new Hc(h, a));
            this.node && (this.node.Kg(d), this.view.aa.Nh(this.node.id))
        };
        c.prototype.ua = function() {
            var a = this;
            this.node && (this.ba.matrix = this.node.Ka(), this.view.aa.Va(), this.view.aa.Sb([this.node.id]), this.view.aa.ua(!0), this.node = null, this.view.aa.transaction(function() {
                a.view.aa.createNode(a.nodeType, a.ba)
            }))
        };
        c.prototype.zk = function(a) {
            this.ba.lineWidth = this.view.bh(a)
        };
        c.prototype.Oe = function(a, b) {
            Ie.prototype.Oe.call(this, a, b);
            this.ba[b ? "fillStyle" : "strokeStyle"] = a
        };
        c.prototype.Pe = function(a, b) {
            Ie.prototype.Pe.call(this, a, b);
            var d = b ? "fillStyle" : "strokeStyle",
                c = vc(this.ba[d], a);
            this.log("oldColour=%s+opacity %s = %s", this.ba[d], a, c);
            this.ba[d] = c
        };
        c.prototype.hd = function() {
            return this.Mx
        };
        c.prototype.Id = function(a, b) {
            this.ba[a] = b
        };
        c.prototype.Aj = function() {
            return this.ba
        };
        c.prototype.je = function(a, b) {
            "defaultLineWidth" === a && this.zk(b)
        };
        return c
    }();
    // for (var Ye, Ze = [], $e = 0; 4 > $e; $e++) Ze.push(String.fromCharCode(">2$-".charCodeAt($e) ^ "zwibbler3".charCodeAt($e % 9)));
    var Ze = []; for(let char of [23041,22235,26041]) Ze.push(String.fromCharCode(char));
    Ye = Ze.join(""); // DEMO 字符串 zxf 20200513 改：移除"DEMO"背景字符串 
    
    for (var af, bf = [115, 116, 114, 111, 107, 101, 84, 101, 120, 116], cf = [], df = 0; df < bf.length; df++) cf.push(String.fromCharCode(bf[df]));
    af = cf.join("");
    var ef = function() {
        function c(a, b, d, e, h, f, k, l, n, q) {
            var u = this;
            this.hc = a;
            this.canvas = b;
            this.aa = d;
            this.ic = e;
            this.ga = h;
            this.language = f;
            this.ya = k;
            this.wa = l;
            this.Dk = n;
            this.hf = q;
            this.Nd = "none";
            this.li = this.ki = 0;
            this.scale = 1;
            this.bb = this.lb = 0;
            this.bd = new H(0, 0, 0, 0);
            this.gn = new Pc;
            this.di = this.ei = this.wk = !0;
            this.vk = new J;
            this.selection = [];
            this.Uf = [];
            this.Sa = "default";
            this.qe = this.Ql = !1;
            this.sd = this.background = this.gf = null;
            this.backgroundRepeat = "no-repeat";
            this.wd = this.Aa = null;
            this.oo = 4;
            this.po = 3 * this.oo;
            this.Ze = this.rh = null;
            this.dg = !1;
            this.Jb = this.Ab = this.Rb = "#000000";
            this.jg = 5;
            this.sg = "";
            this.bc = 0;
            this.Gm = new H(0, 0, 0, 0);
            this.Hm = new H(0, 0, 0, 0);
            this.Ea = {
                pb: !1,
                Bb: !1,
                wl: !1,
                x: 100,
                y: 100
            };
            this.Mj = new Za;
            this.Fj = [];
            this.We = new Md;
            this.log = x.create("VIEW");
            this.xa = this.canvas.get(0);
            this.canvas.qs();
            this.qe = !0 === h.get("pageView");
            this.Dw();
            this.ra = new Ie(this);
            this.wa.add(function() {
                u.ra && u.ra.kc && u.ra.kc();
                u.request.jh();
                u.jd.jh();
                u.nc.jh();
                u.ra = {};
                u.aa.Xa()
            });
            this.jd = new xd("horizontal", !0, this.wa);
            this.jd.Tc(this.canvas.get(0).canvas.parentNode);
            this.nc = new xd("vertical", !1, this.wa);
            this.nc.Tc(this.canvas.get(0).canvas.parentNode);
            var v = this;
            this.request = new ue;
            this.request.canvas = this.canvas.get(0).canvas;
            this.request.ga = this.ga;
            this.request.pa("reformat", function(a) {
                v.log("Node %s requests reformat", a);
                v.aa.yd(a) && (v.log("   Reformatting... zoom=%s", v.Nd), v.aa.Nh(a));
                v.update();
                a === v.sd && v.Ti();
                v.Gg();
                v.ya.na("resource-loaded")
            });
            this.request.pa("convert-dom-request", function(a, b) {
                v.ya.na("convert-dom-request", b, a)
            });
            this.request.pa("mouseevent", function(a) {
                u.Nx.handleEvent(a)
            });
            h.pa("useTouch", function() {
                v.Ze = null;
                v.po = 3 * v.oo
            });
            this.nc.pa("scroll", function(a) {
                v.bb = -a * v.scale;
                v.ya.na("scroll");
                u.On();
                v.ia()
            });
            this.jd.pa("scroll", function(a) {
                v.lb = -a * v.scale;
                v.ia();
                u.On();
                v.ya.na("scroll")
            });
            this.Ti();
            this.aa = this.Wf(d);
            this.ga.pa("update", function(a, b) {
                v.je(a, b)
            });
            this.wa.addEventListener(document, "webkitfullscreenchange", function() {
                0 <= navigator.userAgent.search("Safari") && 0 > navigator.userAgent.search("Chrome") && (u.log("SAFARI WORKAROUND: Disabling requestAnimationFrame."), u.requestAnimationFrame = c.prototype.requestAnimationFrame)
            });
            a = document;
            a.fonts && this.wa.addEventListener(a.fonts, "loadingdone", function() {
                u.log("Font loading done, redraw now.");
                u.ia()
            });
            this.Sc(.5, 0, 0, -30, "", "rotate");
            this.Sc(0, 0, 0, 0, "", "scale");
            this.Sc(1, 0, 0, 0, "", "scale");
            this.Sc(1, 1, 0, 0, "", "scale");
            this.Sc(0, 1, 0, 0, "", "scale");
            this.Sc(.5, 0, 0, 0, "", "scale");
            this.Sc(1, .5, 0, 0, "", "scale");
            this.Sc(.5, 1, 0, 0, "", "scale");
            this.Sc(0, .5, 0, 0, "", "scale");
            this.ra = this.hb()
        }
        c.prototype.bh = function(a) {
            this.ga.get("adaptiveBrushWidth") && (a /= this.scale);
            return a
        };
        c.prototype.hv = function(a) {
            var b, d = "",
                c = !1;
            for (b = 0; b < a.rk.length; b++) {
                var h = a.rk[b];
                h === this.sd && (this.log("Background node has been removed"), d = "")
            }
            for (b = 0; b < a.Ei.length; b++) {
                h = a.Ei[b];
                var f = this.aa.Ja(h, !1);
                "background" === f.ja("layer") && (this.log("Background node has been added"), d = h)
            }
            for (b = 0; b < a.Mk.length; b++) h = a.Mk[b], f = this.aa.Ja(h, !1), "background" === f.ja("layer") ? (this.log("Background node has been changed"), d = h, c = !0) : h === this.sd && (this.log("Node removed from background layer"), d = "");
            "" === d || !c && d === this.sd || (this.sd = d, this.Ti(), this.sd && this.aa.eb(this.sd, !1).Te(!0));
            a.Ei.length && this.ya.na("nodes-added", a.Ei);
            a.Mk.length && this.ya.na("nodes-changed", a.Mk);
            a.rk.length && this.ya.na("nodes-removed", a.rk)
        };
        c.prototype.requestAnimationFrame = function(a) {
            a()
        };
        c.prototype.ng = function() {
            this.log("getActiveLayer() -> %s", this.Sa);
            return this.Sa
        };
        c.prototype.xk = function(a) {
            this.log("setActiveLayer(%s)", a);
            this.Sa = a;
            this.cb();
            this.Tb();
            this.ia()
        };
        c.prototype.hi = function(a, b) {
            this.aa.hi(a, b);
            this.xg(!1);
            b || a !== this.Sa || (this.cb(), this.Tb());
            this.ia()
        };
        c.prototype.Wf = function(a) {
            var b = this;
            this.log("setDocument()");
            this.hb();
            this.aa.Xa();
            this.aa = a;
            this.aa.Iq = function(a, d, c, k) {
                b.fk(a, d, c, k)
            };
            this.scale = 1;
            this.bb = this.lb = 0;
            this.selection = [];
            this.wd = this.Aa = null;
            this.bc += 1;
            this.bd = new H(0, 0, 0, 0);
            this.gn = new Pc(this.bd);
            this.vk = new J;
            this.sg = "";
            this.Sa = "default";
            this.Ab = "#ffffff";
            this.Jb = this.ga.Ta("defaultBrushColour");
            this.Rb = this.ga.Ta("defaultStrokeStyle");
            this.sa = {};
            this.sa.lineWidth = this.ga.Ta("defaultLineWidth");
            this.sa.sloppiness = .5;
            this.sa.fontName = this.ga.Ta("defaultFont");
            this.sa.fontSize = this.ga.Ta("defaultFontSize");
            this.sa.bold = this.ga.Ta("defaultBold");
            this.sa.italic = this.ga.Ta("defaultItalic");
            this.sa.smoothness = .3;
            this.sa.textFillStyle = this.ga.Ta("defaultTextFillStyle");
            this.sa.textStrokeStyle = this.ga.Ta("defaultTextStrokeStyle");
            this.sa.textLineWidth = this.ga.Ta("defaultTextLineWidth");
            this.sa.textDecoration = this.ga.Ta("defaultTextDecoration");
            this.sa.textAlign = this.ga.Ta("defaultTextAlign");
            this.jg = this.ga.get("defaultBrushWidth");
            var d = this.yf();
            this.lb = -d.x;
            this.bb = -d.y;
            this.Dc();
            this.aa.wn = this.ga.get("spotHighlightColour");
            this.aa.Bk = this.ga.get("spotHighlightZIndex");
            this.aa.format(this.xa, this.request);
            this.Hm = new H(0, 0, 0, 0);
            this.Gm = new H(0, 0, 0, 0);
            "none" !== this.Nd ? this.od(this.Nd) : (this.od(this.ga.get("defaultZoom")), this.ia());
            return a
        };
        c.prototype.je = function(a, b) {
            var d = !1;
            switch (a) {
                case "allowResize":
                    this.fh();
                    this.ia();
                    break;
                case "defaultBrushColour":
                    this.Jb = b;
                    break;
                case "defaultFillStyle":
                    this.Ab = this.sa.fillStyle = b;
                    break;
                case "defaultStrokeStyle":
                    this.Rb = b;
                    this.sa.strokeStyle = b;
                    break;
                case "defaultLineWidth":
                    this.sa.lineWidth = b;
                    break;
                case "defaultFont":
                    this.sa.fontName = b;
                    break;
                case "defaultBold":
                    this.sa.bold = b;
                    break;
                case "defaultTextAlign":
                    this.sa.textAlign = b;
                    break;
                case "defaultTextDecoration":
                    this.sa.textDecoration = b;
                    break;
                case "defaultItalic":
                    this.sa.italic = b;
                    break;
                case "defaultFontSize":
                    this.sa.fontSize = b;
                    break;
                case "defaultTextFillStyle":
                    this.sa.textFillStyle = b;
                    break;
                case "defaultTextStokeStyle":
                    this.sa.textStrokeStyle = b;
                    break;
                case "defaultTextLineWidth":
                    this.sa.textLineWidth = b;
                    break;
                case "defaultBrushWidth":
                    this.jg = b;
                    break;
                case "defaultZoom":
                    this.od(b);
                    break;
                case "pageView":
                    this.qe = b;
                    d = !0;
                    break;
                case "pagePlacement":
                case "pageInflation":
                    this.od(this.Nd);
                    break;
                case "snap":
                case "background":
                case "gridSpacing":
                case "gridBlocks":
                case "gridColour":
                case "backgroundImage":
                    this.Ti();
                    d = !0;
                    break;
                case "pageShadow":
                case "outsidePageColour":
                    d = !0;
                    break;
                case "readOnly":
                    !0 === b && (this.hb(), this.cb(), this.Tb(), d = !0);
                    this.aa.Lg(b);
                    break;
                case "spotHighlightColour":
                    this.aa.wn = b;
                    d = !0;
                    break;
                case "spotHighlightZIndex":
                    this.aa.Bk = b;
                    d = !0;
                    break;
                case "showRuler":
                case "pixelsPerUnit":
                case "units":
                    d = !0
            }
            this.ra.je && this.ra.je(a, b);
            d && this.ia()
        };
        c.prototype.pe = function(a, b) {
            this.sa[a] = b;
            switch (a) {
                case "fillStyle":
                    this.Jb = this.Ab = b;
                    break;
                case "strokeStyle":
                    this.Jb = this.Rb = b
            }
        };
        c.prototype.od = function(a) {
            a !== this.Nd && this.log("Zooming to: %s (scale %s)", a, this.scale);
            var b = this.He().width - 20;
            var d = this.aa.kv() || this.qe;
            var c = !0;
            this.Nd = a;
            d || "number" === typeof a || (this.log("WARNING: Cannot zoom to page/width because the document size has not been set."), c = "page" === a || "width" === a);
            if ("number" === typeof a) this.scale = a;
            else if ("none" === a || this.aa.empty() || !d) this.scale = 1;
            else {
                if ("page" === a) return d = this.yf(), this.Ng(d, "centre" === this.ga.get("pagePlacement"), !0), this.Nd = a, this.ra.Gf && this.ra.Gf(), c;
                "width" === a && (d = this.yf(), this.scale = b / d.width, this.lb = -d.x * this.scale, this.bb = -d.y * this.scale, this.log("RECT=%s scale=%s tx=%s ty=%s", d, this.scale, this.lb, this.bb), this.Nd = a)
            }
            this.Dc();
            this.ia();
            this.ra.Gf && this.ra.Gf();
            return c
        };
        c.prototype.Hd = function(a, b, d) {
            void 0 === d && (d = !1);
            a = this.Cj().apply(a, b);
            d || (a = this.Ra(a));
            return a
        };
        c.prototype.Ll = function(a, b) {
            return this.Cj().inverse().apply(a, b)
        };
        c.prototype.Sv = function(a, b, d) {
            return a.$d().multiply(this.Cj()).apply(b, d)
        };
        c.prototype.se = function(a) {
            return this.Hd(a.pageX, a.pageY, !0)
        };
        c.prototype.ld = function(a, b) {
            if ("TEXTAREA" !== b.target.tagName && "INPUT" !== b.target.tagName && "BUTTON" !== b.target.tagName && !b.target.isContentEditable && (this.ra.ld && this.ra.ld(a, b), !this.iv(a, b))) {
                switch (a) {
                    case "next-page":
                        this.wc(this.aa.ab + 1);
                        break;
                    case "previous-page":
                        this.wc(this.aa.ab - 1);
                        break;
                    case "zoom-to-page":
                        this.ga.get("allowZoom") && this.od("page");
                        break;
                    case "zoom-to-width":
                        this.ga.get("allowZoom") && this.od("width")
                }
                b.preventDefault();
                b.stopPropagation()
            }
        };
        c.prototype.Qm = function(a) {
            var b = a instanceof Rd ? a.Zc.target : a.target;
            var d = this.ga.get("readOnly");
            b = b && b.matches && (!b.matches(".zwibbler-canvas-holder,.zwibbler-canvas-holder *, [z-drag-tool], [z-drag-tool] *, [z-fixture] *") || b.matches(".zwibbler-passthrough, .zwibbler-passthrough *") || d && b.matches(".zwibbler-dom-node,.zwibbler-dom-node *"));
            a instanceof Rd && ((b = b && !a.getData("not-passthrough")) || "down" !== a.type || a.setData("not-passthrough", !0));
            return b
        };
        c.prototype.Dw = function() {
            function a(a) {
                d.log(a.type)
            }

            function b(a) {
                a.stopPropagation();
                a.preventDefault()
            }
            var d = this,
                c = this,
                h = new Yd(this.hc, {
                    So: this.ga.get("allowPointerEvents"),
                    Tn: !0
                });
            this.Nx = h;
            this.wa.add(function() {
                h.Xa()
            });
            h.pa("gesturestart", function(a) {
                c.log("GestureStart");
                c.ra.sb && !1 !== c.ra.sb(a) ? (a.stopPropagation(), a.preventDefault()) : c.log("Pass to browser")
            });
            h.pa("gesturechange", function(a) {
                c.ra.sb && !1 !== c.ra.sb(a) ? (a.stopPropagation(), a.preventDefault()) : c.log("Pass to browser")
            });
            h.pa("gestureend", function(a) {
                c.log("GestureEnd");
                c.ra.sb && !1 !== c.ra.sb(a) ? (a.stopPropagation(), a.preventDefault()) : c.log("Pass to browser")
            });
            var f = "onpointerdown" in window,
                k = "ongesturestart" in window,
                l = "onmousedown" in window;
            this.log("Have TouchEvents: %s", "ontouchstart" in window);
            this.log("Have PointerEvents: %s", f);
            this.log("Have GestureEvents: %s", k);
            this.log("Have MouseEvents: %s", l);
            f && !this.ga.get("allowPointerEvents") && this.log("Configuration does not allow PointerEvents");
            var n = !1,
                q;
            h.pa("down", function(a) {
                c.log(a.toString());
                d.Qm(a) || (n = !0, c.ra.zb && (q = c.se(a), !1 !== c.ra.zb(q.x, q.y, a) && (a.stopPropagation(), a.preventDefault())), d.Ql || d.ic.na("goto-canvas"), d.Ql = !1)
            });
            h.pa("move", function(a) {
                d.Qm(a) || (n && 0 === a.buttons && (c.log("MISSED POINTERUP! Fixing."), u(a)), c.ra.ob && (q = c.se(a), !1 !== c.ra.ob(q.x, q.y, a) && (a.stopPropagation(), a.preventDefault())))
            });
            var u = function(a) {
                d.Qm(a) || (n = !1, c.log(a.toString()), q = c.se(a), c.ra.Cb && !1 !== c.ra.Cb(q.x, q.y, a) && (a.stopPropagation(), a.preventDefault()))
            };
            h.pa("up", u);
            h.pa("tap", function(a) {
                c.log(a.toString());
                c.ra.gk && (q = c.se(a), !1 !== c.ra.gk(q.x, q.y, a) && (a.stopPropagation(), a.preventDefault()))
            });
            h.pa("drag", function(a) {
                c.log(a.toString());
                c.ra.Eq && (q = c.se(a), !1 !== c.ra.Eq(q.x, q.y, a) && (a.stopPropagation(), a.preventDefault()))
            });
            h.pa("doubletap", function(a) {
                c.log("doubletap: " + a.toString());
                c.ra.Jm && (q = c.se(a), !1 !== c.ra.Jm(q.x, q.y, a) && (a.stopPropagation(), a.preventDefault()))
            });
            this.wa.addEventListener(this.hc, "pointerleave", function(a) {
                c.ra.Fq && (q = c.se(a), !1 !== c.ra.Fq(q.x, q.y, a) && (a.stopPropagation(), a.preventDefault()))
            });
            this.wa.addEventListener(this.hc, "contextmenu", function(a) {
                var b = c.se(a);
                c.ra.Aq && !1 !== c.ra.Aq(b.x, b.y, a) ? (a.stopPropagation(), a.preventDefault()) : c.log("Pass contextmenu to browser")
            });
            this.wa.addEventListener(this.hc, "mouseenter", b);
            this.wa.addEventListener(this.hc, "mouseleave", b);
            this.wa.addEventListener(this.hc, "mouseover", b);
            this.wa.addEventListener(this.hc, "mouseout", b);
            !window.parent && this.ga.get("setFocus") && this.hc.focus();
            f = "mousewheel";
            "onwheel" in document.createElement("div") && (f = "wheel");
            c.log("Binding to '%s' for mouse wheel", f);
            this.wa.addEventListener(this.hc, f, function(a) {
                if ("wheel" === a.type || "mousewheel" === a.type) {
                    var b = a.wheelDelta || -40 * a.deltaY,
                        d = b / 120 * 32;
                    q = c.se(a);
                    if ((!c.ra.Km || !1 === c.ra.Km(q.x, q.y, d, a)) && c.nc.uv()) {
                        var e = c.yf();
                        c.bb = -120 >= b ? Math.max(c.bb + d, -(e.bottom() * c.scale - c.canvas.height)) : Math.min(c.bb + d, -e.y * c.scale);
                        c.Dc();
                        c.ia();
                        a.stopPropagation();
                        a.preventDefault()
                    }
                }
            });
            this.wa.addEventListener(this.hc, "dragover", function(a) {
                c.log("Dragover");
                a.preventDefault()
            });
            this.wa.addEventListener(this.hc, "drop", a);
            this.wa.addEventListener(this.hc, "dragenter", a);
            this.wa.addEventListener(this.hc, "dragleave", a)
        };
        c.prototype.Ff = function(a) {
            this.log("Received clipboard event: %s", a.type);
            if (this.ga.get("allowSystemClipboard"))
                if (null === a.clipboardData) this.log("Ignored; clipboardData is null.");
                else {
                    var b = this;
                    switch (a.type) {
                        case "copy":
                        case "cut":
                            if (!this.Zp()) break;
                            this.log("Cut to system clipboard.");
                            var d = this.mf(!0, this.Jc(!1));
                            a.clipboardData.setData("application/zwibbler", d);
                            a.preventDefault();
                            "cut" === a.type && this.oh();
                            break;
                        case "paste":
                            for (this.log("There are %s items on the clipboard", a.clipboardData.items.length), d = 0; d < a.clipboardData.items.length; d++) {
                                var c = a.clipboardData.items[d];
                                this.log("Item [%s] type is %s", d, c.type);
                                if (b.Um(c)) {
                                    a.preventDefault();
                                    break
                                } else if ("application/zwibbler" === c.type) {
                                    this.log("Pasting from system clipboard");
                                    c.getAsString(function(a) {
                                        b.Xh(a)
                                    });
                                    a.preventDefault();
                                    break
                                }
                            }
                    }
                }
            else this.log("   ignored due to allowSystemClipboard setting.")
        };
        c.prototype.ce = function() {
            return this.hc
        };
        c.prototype.Um = function(a) {
            var b = this;
            if (0 !== a.type.indexOf("image/")) return !1;
            a instanceof File || (a = a.getAsFile());
            var d = new FileReader;
            d.readAsDataURL(a);
            d.onloadend = function() {
                b.Qv(d.result)
            };
            return !0
        };
        c.prototype.iv = function(a, b) {
            if (!this.Ea.pb) return !1;
            var d = 0,
                c = 0,
                h = this.ga.get("nudge");
            switch (a) {
                case "right":
                    d = h;
                    break;
                case "left":
                    d = -h;
                    break;
                case "down":
                    c = h;
                    break;
                case "up":
                    c = -h;
                    break;
                case "enter":
                    if (this.ra.gk) {
                        this.Ea.Bb = !1;
                        var f = "tap"
                    } else this.Ea.Bb = !this.Ea.Bb, f = this.Ea.Bb ? "down" : "up"
            }
            if (d || c) f = this.He(), this.Ea.x += d, this.Ea.x = Math.max(this.Ea.x, 0), this.Ea.x = Math.min(f.width, this.Ea.x), this.Ea.y += c, this.Ea.y = Math.max(this.Ea.y, 0), this.Ea.y = Math.min(f.height, this.Ea.y), this.ia(), f = "move";
            return f ? (b.preventDefault(), b.stopPropagation(), this.ia(), c = B(this.canvas.first).Vb(), d = this.Ea.x + c.left - window.pageXOffset, h = this.Ea.y + c.top - window.pageYOffset, c = this.Hd(d, h), this.log("Simulate a %s at (%s,%s)", f, d, h), d = new Rd(f, d, h, d, h, (new Date).getTime(), (new Date).getTime(), b.target, b, 0, {}, 0, 0, 0, !1, !1), "down" !== f && "tap" !== f || !this.ra.zb || this.ra.zb(c.x, c.y, d), "move" === f && this.ra.ob && this.ra.ob(c.x, c.y, d), "up" !== f && "tap" !== f || !this.ra.Cb || this.ra.Cb(c.x, c.y, d), !0) : !1
        };
        c.prototype.qn = function(a) {
            void 0 === a && (a = !1);
            this.Ea.pb = !0;
            this.Ea.Bb = !1;
            this.Ea.wl = a;
            this.log("Showing keyboard cursor, caret=%s", a);
            this.ia()
        };
        c.prototype.xx = function() {
            this.Ea.pb = !0;
            this.Ea.wl = !1;
            if (0 < this.selection.length) {
                this.log("showKeyboardCursorAndStartMoving()");
                this.Ea.Bb = !0;
                var a = this.bd.ud();
                this.Ea.x = a.x;
                this.Ea.y = a.y;
                this.hb();
                this.Qa(new Le(this, new Ed(yd, this.selection[0].Ka()), !1, a.x - 4, a.y - 4))
            }
            this.ia()
        };
        c.prototype.lv = function() {
            this.Ea.pb && (this.log("Hiding keyboard cursor"), this.Ea.pb = !1, this.ia())
        };
        c.prototype.tv = function(a) {
            var b = B(this.canvas.first).Vb(),
                d = this.nc.pg();
            var c = a.pageX - b.left;
            a = a.pageY - b.top;
            b = this.He();
            return this.Ze && c > b.width - this.Ze.width - d && a < this.Ze.height
        };
        c.prototype.Ra = function(a, b) {
            void 0 === b && (b = 0);
            b = b || this.ga.get("snap") || 0;
            this.ga.get("autoSnap");
            if (0 < b) {
                var d = Math.round(a.x / b) * b;
                var c = Math.round(a.y / b) * b
            } else d = a.x, c = a.y;
            return new G(d, c)
        };
        c.prototype.Uc = function(a, b) {
            void 0 === b && (b = this.Jc(!1));
            this.aa.Va();
            this.aa.Uc(b, a);
            this.aa.ua()
        };
        c.prototype.setProperty = function(a, b) {
            var d = this.Jc(!0);
            this.sa[a] = b;
            if (d.length) {
                this.aa.Va();
                this.aa.Ob(d, a, b);
                if ("fillStyle" === a)
                    for (var c = 0; c < d.length; c++) {
                        var h = this.aa.Ja(d[c], !1);
                        h && (this.log("nodeType=%s closed=%s", h.type(), h.ja("closed")), "PathNode" === h.type() && !1 === h.ja("closed") && this.aa.Ob([d[c]], "strokeStyle", b))
                    }
                this.aa.ua()
            }
            0 < this.selection.length && "lineWidth" === a && "BrushNode" === this.selection[0].type() ? this.jg = b : "textFillStyle" === a && (this.sa.textFillStyle = b)
        };
        c.prototype.Id = function(a, b) {
            this.ra.Id && this.ra.Id(a, b)
        };
        c.prototype.rj = function() {
            return this.sa.fillStyle
        };
        c.prototype.yj = function() {
            return this.sa.strokeStyle
        };
        c.prototype.pn = function(a, b) {
            this.log("setSelectionOpacity(%s, fill=%s)", a, b);
            var d = this.Jc(!0);
            this.aa.Va();
            for (var c = b ? "fillStyle" : "strokeStyle", h = 0; h < d.length; h++) {
                var f = d[h],
                    k = this.aa.Ja(f);
                k && (k = k.ja(c)) && (k = vc(k, a), this.aa.Ob([f], c, k), this.log("   set %s of %s to %s", c, f, k))
            }
            this.aa.ua()
        };
        c.prototype.group = function() {
            var a = this;
            this.aa.transaction(function() {
                a.aa.group(a.Jc(!1))
            })
        };
        c.prototype.Qg = function() {
            var a = this;
            this.aa.transaction(function() {
                a.aa.Qg(a.Jc(!1))
            })
        };
        c.prototype.oh = function() {
            var a = this;
            this.aa.transaction(function() {
                a.aa.Sb(a.Jc(!1))
            })
        };
        c.prototype.cb = function(a) {
            void 0 === a && (a = !1);
            var b = !1;
            if (0 < this.selection.length) {
                b = 0;
                for (var d = this.selection; b < d.length; b++) {
                    var c = d[b];
                    Zc(c) && c.fa.classList.remove("zwibbler-selected")
                }
                this.bc += 1;
                this.selection.length = 0;
                this.log("Clear selection. selectGeneration=%s", this.bc);
                b = !0
            }
            null !== this.wd && (this.ya.na("selected-edit-handle", null, null), b = !0);
            this.Aa && (this.log("Clear selection."), this.wd = this.Aa = null, b = !0);
            b && a && (this.Tb(), this.ia())
        };
        c.prototype.Qd = function(a, b) {
            void 0 === b && (b = !0);
            this.Jg(null);
            if (a.bc !== this.bc && a.Vc() === this.Sa) {
                this.selection.push(a);
                a.bc = this.bc;
                if (5 === (a.Pb & 5)) Zc(a) && a.fa.classList.add("zwibbler-selected");
                else {
                    if (a.vm()) {
                        for (var d = a.parent, c = 0; c < d.Ma(); c++) {
                            var h = d.rb(c);
                            Xc(h) && this.Qd(h)
                        }
                        Xc(d) && this.Qd(d)
                    }
                    for (d = 0; d < a.Ma(); d++) h = a.rb(d), Xc(h) && this.Qd(h)
                }
                if (this.ga.get("autoGroup") && b)
                    for (h = 0, d = this.aa.ku(a); h < d.length; h++) this.Qd(d[h], !1)
            }
        };
        c.prototype.selectNodes = function(a) {
            this.cb();
            for (var b = 0; b < a.length; b++) a[b].ja("locked") || "PageNode" === a[b].type() || this.Qd(a[b]);
            this.Tb()
        };
        c.prototype.Sw = function(a, b) {
            var d = this.aa.eb(a, !1);
            d ? d.Le() && (d.gq() ? (d !== this.Aa && this.Jg(d), this.log("Select edit handle %s", b), this.wd = b, this.ya.na("selected-edit-handle", a, b)) : this.log("selectEditHandle: That handle is not selectable.")) : this.log("selectEditHandle: nodeid %s does not exist.", a)
        };
        c.prototype.Rw = function(a) {
            a = this.aa.Uu(a);
            for (var b = 0; b < a.length; b++) this.Qd(a[b])
        };
        c.prototype.Tb = function() {
            this.fh();
            this.ya.lg("selected-nodes");
            this.ia()
        };
        c.prototype.Xm = function() {
            for (var a = 0, b = this.Fj; a < b.length; a++) {
                var d = b[a];
                "" !== d.Bf && this.Mj.release(d.Bf)
            }
            this.Fj.length = 0
        };
        c.prototype.Sc = function(a, b, d, c, h, f, k) {
            this.Fj.push({
                type: f,
                position: new G(a, b),
                offset: new G(d, c),
                Bf: h,
                bp: k
            });
            "" !== h && this.Mj.add(h, h)
        };
        c.prototype.fh = function() {
            var a;
            this.di = this.ei = this.wk = !0;
            var b = !1;
            this.Uf.length = 0;
            if (0 !== this.selection.length) {
                for (a = 0; a < this.selection.length; a++) {
                    var d = this.selection[a];
                    "GroupNode" !== d.type() && (0 === a ? this.bd = d.rect.clone() : this.bd.ni(d.rect), this.bd.ni(d.rect), d.ja("lockSize") && (this.wk = !1), d.ja("lockRotation") && (this.ei = !1), d.ja("lockAspectRatio") && (b = !0), d.ja("lockPosition") && (this.di = !1))
                }
                this.gn = 1 === this.selection.length ? this.selection[0].mj() : new Pc(this.bd);
                var c = 0 < this.ga.get("snap");
                if (1 < this.selection.length) {
                    d = new J;
                    a = null;
                    var h = this.bd
                } else a = this.selection[0], h = a.Ga, d = a.Ka();
                for (var f = 0, k = this.Fj; f < k.length; f++) {
                    var l = k[f];
                    if ("scale" === l.type) {
                        if (!this.ga.get("allowResize") || !this.wk) continue;
                        if ("scale" === l.type && (0 !== l.position.x && 1 !== l.position.x || 0 !== l.position.y && 1 !== l.position.y) && b) continue
                    } else if ("rotate" === l.type && !this.ei) continue;
                    this.Uf.push(Hd(l, h, d, c))
                }
                if (this.ei && a && a.ja("rotationHandles"))
                    for (b = a.ja("rotationHandles"), a = 0; a < b.length; a += 4) new G(b[a], b[a + 1]), f = new G(b[a + 2], b[a + 3]), this.Uf.push(new Dd(zd, d, h, f, c))
            }
        };
        c.prototype.$s = function() {
            for (var a = 0, b = 0; b < this.selection.length; b++) b !== a && (this.selection[a] = this.selection[b]),
                this.aa.yd(this.selection[a].id) && (a += 1);
            this.selection.length !== a && (this.selection.length = a);
            this.Aa && !this.aa.yd(this.Aa.id) && (this.Aa = null, null !== this.wd && this.ya.na("selected-edit-handle", null, null), this.wd = null)
        };
        c.prototype.Oq = function(a, b) {
            return this.selection.length && this.gn.ed(a, b)
        };
        c.prototype.Zp = function() {
            return 0 !== this.selection.length || null !== this.Aa
        };
        c.prototype.Wc = function() {
            var a = this.selection.concat();
            this.Aa && a.push(this.Aa);
            return a
        };
        c.prototype.Tu = function(a) {
            if (0 === a.length) return new G(0, 0);
            for (var b = a[0].rect.clone(), d = 1; d < a.length; d++) b.ni(a[d].rect);
            return b.ud()
        };
        c.prototype.Rp = function(a) {
            for (var b = [], d = 0; d < a.length; d++) b.push(a[d].id);
            return b
        };
        c.prototype.Cj = function() {
            var a = B(this.canvas.first).Vb();
            this.ga.get("showRuler") && (a.left += 20, a.top += 20);
            return (new J).multiply(new Hc(1 / this.scale, 1 / this.scale)).multiply(new Fc(-this.lb, -this.bb)).multiply(new Fc(-a.left, -a.top))
        };
        c.prototype.Jc = function(a) {
            var b = this.Wc();
            a || (b = this.aa.Oi(b));
            return this.Rp(b)
        };
        c.prototype.Xl = function(a) {
            for (var b = null, d = 0; d < a.length; d++) {
                var c = this.aa.eb(a[d]);
                c && 0 == (c.Pb & 2) && (null === b ? b = c.rect.clone() : b.ni(c.rect))
            }
            null === b && (b = new H(0, 0, 0, 0));
            return b
        };
        c.prototype.update = function(a, b) {
            void 0 === a && (a = !1);
            if (this.aa.format(this.xa, this.request) || a) this.fh(), this.ia(b)
        };
        c.prototype.Ti = function() {
            var a = this.ga.get("snap"),
                b = null,
                d;
            var c = this.ga.get("background");
            var h = r.lj(c),
                f = this.ga.get("backgroundImage");
            this.background = this.gf = null;
            this.backgroundRepeat = "no-repeat";
            var k = this;
            this.log("createBackground() background=%s", c);
            this.log("backgroundNodeId==%s", this.sd);
            if ("grid" === c) {
                this.backgroundRepeat = "repeat";
                a = this.ga.get("gridBlocks");
                f = this.ga.get("gridSpacing");
                var l = (a || 1) * f;
                b = uc(document.body);
                b.width = l;
                b.height = l;
                c = b.getContext("2d");
                c.fillStyle = "#ffffff";
                c.fillRect(0, 0, l, l);
                c.beginPath();
                for (d = 0; d < l; d += f)
                    if (d % l || 1 > a) c.moveTo(d + .5, 0), c.lineTo(d + .5, l);
                for (d = 0; d < l; d += f)
                    if (d % l || 1 > a) c.moveTo(0, d + .5), c.lineTo(l, d + .5);
                c.strokeStyle = this.ga.get("gridColour");
                c.lineWidth = .5;
                c.stroke();
                if (0 < a) {
                    c.beginPath();
                    for (d = 0; d <= l; d += l) c.moveTo(d, 0), c.lineTo(d, l);
                    for (d = 0; d <= l; d += l) c.moveTo(0, d + .5), c.lineTo(l, d + .5);
                    c.lineWidth = 2;
                    c.stroke()
                }
            } else if (f) this.request.add("0", "image", f, null, function(a) {
                k.log("Background image finished loading");
                k.background = a
            });
            else if (this.sd) {
                if (this.log("Regenerate background image"), a = this.aa.eb(this.sd, !1)) c = a.rect.clone(), b = uc(document.body), b.width = c.x + c.width, b.height = c.y + c.height, c = b.getContext("2d"), a.ia(c)
            } else h ? (this.log("Using background colour %s", h.toString()), this.gf = function(a, b, d, c, e) {
                1 > h.values[3] && (a.globalCompositeOperation = "destination-out", a.fillRect(b, d, c, e), a.globalCompositeOperation = "source-over");
                a.fillStyle = h.toString();
                a.fillRect(b, d, c, e)
            }) : 0 < a && "clear" !== c && (this.backgroundRepeat = "repeat", b = uc(document.body), b.width = a, b.height = a, c = b.getContext("2d"), c.beginPath(), c.moveTo(0, 0), c.arc(0, 0, 3, 0, 2 * Math.PI, !1), c.moveTo(a, 0), c.arc(a, 0, 3, 0, 2 * Math.PI, !1), c.moveTo(a, a), c.arc(a, a, 3, 0, 2 * Math.PI, !1), c.moveTo(0, a), c.arc(0, a, 3, 0, 2 * Math.PI, !1), c.fillStyle = "#c0c0c0", c.fill());
            b && document.body.removeChild(b);
            this.background = b
        };
        c.prototype.Xd = function(a, b, d, c, h) {
            a.Pd = null;
            this.background ? (a.Pd = a.createPattern(this.background, this.backgroundRepeat), a.fillStyle = a.Pd || "magenta", a.fillRect(b, d, c, h)) : this.gf ? this.gf(a, b, d, c, h) : "G_vmlCanvasManager" in window && (a.fillStyle = "rgba(0, 0, 0, 0.0)", a.fillRect(b, d, c, h))
        };
        c.prototype.Bt = function(a) {
            var b = this.aa.km();
            a.beginPath();
            a.fillStyle = "#FFFFFF";
            this.ga.get("pageShadow") && (a.shadowOffsetX = 3, a.shadowOffsetY = 3, a.shadowBlur = 5, a.shadowColor = "rgba(0,0,0,1.0)");
            a.rect(0, 0, b.width, b.height);
            a.fill();
            a.shadowColor = "rgba(0,0,0,0.0)";
            a.shadowBlur = 0;
            a.shadowOffsetX = 0;
            a.shadowOffsetY = 0;
            a.strokeStyle = this.ga.get("pageBorderColour");
            a.stroke();
            this.Xd(a, 0, 0, b.width, b.height);
            this.gf && this.gf(a, 0, 0, b.width, b.height)
        };
        c.prototype.kn = function(a) {
            a ? (this.log("Setting a custom background function."), this.gf = a) : this.log("Clearing custom background function.")
        };
        c.prototype.At = function(a) {
            if (this.Ea.pb) {
                var b = this.Ea.x,
                    d = this.Ea.y,
                    c = this.nj();
                a.save();
                a.setTransform(c, 0, 0, c, 0, 0);
                a.beginPath();
                this.Ea.wl ? (a.moveTo(b - 3, d - 10), a.lineTo(b + 3, d - 10), a.moveTo(b - 3, d + 10), a.lineTo(b + 3, d + 10), a.moveTo(b, d - 10), a.lineTo(b, d + 10)) : (a.moveTo(b, d - 3), a.lineTo(b, d - 15), a.moveTo(b, d + 3), a.lineTo(b, d + 15), a.moveTo(b - 3, d), a.lineTo(b - 15, d), a.moveTo(b + 3, d), a.lineTo(b + 15, d));
                this.Ea.Bb && this.xa.arc(b, d, 8, 0, 2 * Math.PI, !1);
                a.lineWidth = 2;
                a.strokeStyle = "#000000";
                a.stroke();
                a.restore()
            }
        };
        c.prototype.Gf = function() {
            var a = this.ga.get("showRuler") ? 20 : 0,
                b = B(this.canvas.first).Vb(),
                d = B(this.canvas.first.parentElement).Vb(),
                c = this.canvas.width,
                h = this.canvas.height,
                f = b.left - d.left;
            b = b.top - d.top;
            this.nc.moveTo(f + c - 20, b + a);
            this.nc.Ve(20, h - 20);
            this.jd.moveTo(f + a, b + h - 20);
            this.jd.Ve(c - 20, 20);
            this.Gg();
            this.ia()
        };
        c.prototype.Gg = function() {
            if (!this.xm()) {
                var a = this.yf(),
                    b = this.He();
                b = new H(0, 0, b.width, b.height);
                a.Hc(this.Hm) && b.Hc(this.Gm) || !this.od(this.Nd) || (this.Hm = a, this.Gm = b)
            }
        };
        c.prototype.cp = function() {
            if (this.qe) {
                var a = this.aa.km();
                this.xa.save();
                this.xa.beginPath();
                this.xa.rect(0, 0, a.width, a.height);
                this.xa.clip()
            }
            return this.qe
        };
        c.prototype.ia = function(a) {
            var b = this;
            this.xm() || this.canvas.Oc(0, "main", function(d, c) {
                if (!b.ya.$i) {
                    var e = b.zf(),
                        f = e.x,
                        k = e.y,
                        l = e.width,
                        n = e.height;
                    b.qe && (d.fillStyle = b.ga.get("outsidePageColour"), d.fillRect(0, 0, b.canvas.width, b.canvas.height));
                    d.translate(b.lb, b.bb);
                    d.scale(b.scale, b.scale);
                    b.ga.get("showRuler") && d.translate(20 / b.scale, 20 / b.scale);
                    var q = new Fc(b.lb, b.bb);
                    q = q.multiply(new Hc(b.scale, b.scale));
                    d.pi = q;
                    b.qe ? b.Bt(d) : b.Xd(d, f, k, Math.max(l, l - f), Math.max(n, n - f));
                    b.aa.wx();
                    f = b.cp();
                    b.aa.ia(d, e);
                    b.ya.kg && (d.save(), b.ya.kg(d), d.restore());
                    0 < b.selection.length && (d.save(), b.Ct(d), d.restore());
                    f && d.restore();
                    b.Aa && b.Aa.ej(d, 1 / b.scale, b.wd);
                    "" !== b.sg && b.ga.get("showHints") && (d.save(), d.font = 15 / b.scale + "px Arial", d.fillStyle = "#000000", d.textBaseline = "top", d.fillText(b.sg, 0, 0), d.restore());
                    b.At(d);
                    b.ra.Gq && b.ra.Gq(d);
                    a && a(d);
                    b.ya.fd("draw", d);
                    b.ga.get("showRuler") && (d.setTransform(c, 0, 0, c, 0, 0), e = b.ga.get("pixelsPerUnit") * b.scale, f = b.ga.get("units"), d.fillStyle = "#ccc", d.fillRect(0, 0, 20, 20), wd(d, new H(20, 0, b.canvas.width - 20, 20), 0, f, e, -b.lb), wd(d, new H(0, 20, 20, b.canvas.height - 20), 2, f, e, -b.bb));
                    d.setTransform(1, 0, 0, 1, 0, 0);
                    0 < b.selection.length && b.Ze && b.Ze.naturalWidth && (e = b.Ze.width, d.drawImage(b.Ze, b.canvas.width - e - b.nc.pg(), 0));
                    b.rh && b.rh.complete && b.rh.naturalWidth && (e = b.rh.naturalWidth, d.drawImage(b.rh, b.canvas.width - e - b.nc.pg(), 0));
                    d.setTransform(c, 0, 0, c, 0, 0);
                    d.beginPath();
                    d.font = "20px Arial";
                    l = d.measureText(Ye).width;
                    e = b.canvas.width / c / l;
                    d.scale(e, e);
                    d.textBaseline = "top";
                    d.lineWidth = 4 / e;
                    d.strokeStyle = "rgba(128, 128, 128, 0.1)";
                    d[af](Ye, 0, 0)
                }
            })
        };
        c.prototype.Wq = function(a, b) {
            var d = this;
            this.canvas.Oc(1, a, function(a) {
                a.translate(d.lb, d.bb);
                a.scale(d.scale, d.scale);
                d.ga.get("showRuler") && a.translate(20 / d.scale, 20 / d.scale);
                b(a)
            })
        };
        c.prototype.yl = function(a) {
            this.canvas.Oc(1, a, function() {})
        };
        c.prototype.Ct = function(a) {
            a.lineWidth = 1 / this.scale;
            a.strokeStyle = "#888888";
            a.beginPath();
            for (var b = 0, d = 0; d < this.selection.length; d++) {
                var c = this.selection[d];
                var h = c.Ka();
                Yc(c) || c.hidden() || (c = new K(c.Ga), c.transform(h), c.dj(a, [3 / this.scale, 3 / this.scale]), b++)
            }
            if (0 !== b)
                for (a.stroke(), d = 0; d < this.Uf.length; d++) this.Uf[d].ia(a, this.Mj, this.scale, this.vk)
        };
        c.prototype.Jg = function(a) {
            this.Aa = a
        };
        c.prototype.bm = function() {
            return this.Aa
        };
        c.prototype.Kk = function(a) {
            this.vk = a
        };
        c.prototype.Ih = function(a) {
            return a.bc === this.bc
        };
        c.prototype.Eu = function(a, b) {
            if (this.Aa) return null;
            for (var d = this.po, c = null, h = 0; h < this.Uf.length; h++) {
                var f = this.Uf[h];
                if (f.wb(this.Mj, a, b, d, this.scale)) {
                    c = f;
                    break
                }
            }
            return c
        };
        c.prototype.xc = function() {
            this.Er(!1)
        };
        c.prototype.Gd = function() {
            this.Er(!0)
        };
        c.prototype.Er = function(a) {
            if (a ? this.aa.Rd() : this.aa.Sd()) a ? this.aa.Gd() : this.aa.xc(), a = this.aa.ug, this.log("Most recent change page=%s", a), a !== this.aa.ab ? (this.log("Undo/redo switched page %s->%s", this.aa.ab, a), this.wc(a)) : this.ia(), this.xg(!1)
        };
        c.prototype.fk = function(a, b, d, c) {
            var e = this;
            if (b.length && !a) {
                for (var f = [], k = 0; k < b.length; k++) {
                    var l = this.aa.eb(b[k], !1);
                    l && f.push(l)
                }
                this.ga.get("autoPickTool") && this.selectNodes(f)
            } else if (this.selection.length || this.Aa) {
                f = 0;
                this.bc += 1;
                l = this.aa.ab;
                for (k = 0; k < this.selection.length; k++) k !== f && (this.selection[f] = this.selection[k]), this.aa.yd(this.selection[f].id) && this.aa.ae(this.selection[f].id) === l && (this.selection[f].bc = this.bc, f++);
                this.selection.length !== f && (this.selection.length = f);
                this.Aa && !this.aa.yd(this.Aa.id) && (this.log("EditNode %s no longer exists", this.Aa.id), this.Aa = null, null !== this.wd && this.ya.na("selected-edit-handle", null, null), this.wd = null);
                0 !== this.selection.length || this.Aa || this.cb();
                this.Tb()
            }
            this.aa.format(this.xa, this.request);
            this.$s();
            this.fh();
            this.Gg();
            this.Dc();
            this.ia();
            this.We.clear();
            this.aa.sc(function(a) {
                5 === (a.Pb & 5) && e.We.Po(a.rect, a.id)
            });
            this.hv({
                Ei: b,
                rk: d,
                Mk: c
            });
            this.xg(a)
        };
        c.prototype.Hl = function() {
            this.mf(!1, this.Jc(!0));
            this.oh()
        };
        c.prototype.mf = function(a, b) {
            var d = this.aa.Su(b),
                c = this.aa.Pw(d);
            0 < d.length && (!0 !== a && Ge.setItem("clipboard", c), this.log("Reset paste offset to 0"), this.li = this.ki = 0);
            return c
        };
        c.prototype.duplicate = function() {
            var a = this,
                b = this.Jc(!1),
                d = this.ga.get("pasteOffset"),
                c = d || this.ga.get("pasteOffsetX"),
                h = d || this.ga.get("pasteOffsetY");
            this.aa.transaction(function() {
                a.aa.duplicate(b, c, h)
            })
        };
        c.prototype.Xh = function(a) {
            var b = this;
            if (!a) {
                var d = Ge.getItem("clipboard");
                if (d) a = d;
                else return
            }
            var c = this.ga.get("pasteOffset");
            d = c || this.ga.get("pasteOffsetX");
            c = c || this.ga.get("pasteOffsetY");
            this.ki += d;
            this.li += c;
            this.log("Using paste offset %s,%s", this.ki, this.li);
            var h = new Fc(this.ki, this.li);
            this.aa.transaction(function() {
                b.aa.oq(a, h)
            })
        };
        c.prototype.yk = function(a) {
            "" !== a ? (this.sg = this.language.get(a), this.ya.na("hint", this.sg)) : (this.sg = "", this.ya.na("hint", ""))
        };
        c.prototype.hb = function() {
            return this.Qa(new Ie(this))
        };
        c.prototype.Qa = function(a) {
            this.ra && this.ra.kc && this.ra.kc();
            this.ra = a;
            a.Gc && a.Gc();
            a.hd && this.ya.na("tool-changed", a.hd());
            return a
        };
        c.prototype.vh = function() {
            var a = null;
            this.ra.hd && (a = this.ra.hd());
            return a
        };
        c.prototype.Gn = function(a) {
            a = new Me(this, a);
            this.Qa(a);
            return a
        };
        c.prototype.nq = function(a, b, d) {
            this.Qa(new We(this, "line", a, b, d))
        };
        c.prototype.Ol = function(a) {
            a.lineWidth = a.lineWidth || this.jg;
            a.strokeStyle = a.strokeStyle || this.Jb;
            this.Qa(new Ve(this, a, "brush"))
        };
        c.prototype.Dt = function(a) {
            a.lineWidth = a.lineWidth || this.jg;
            a.strokeStyle = a.strokeStyle || this.Jb;
            this.Qa(new Ve(this, a, "shapebrush"))
        };
        c.prototype.op = function(a, b) {
            a.lineWidth = a.lineWidth || this.jg;
            a.strokeStyle = a.strokeStyle || this.Jb;
            this.Qa(new Ve(this, a, b))
        };
        c.prototype.jp = function(a) {
            this.Qa(new We(this, "curve", a))
        };
        c.prototype.Gs = function(a, b) {
            this.Qa(new We(this, "arrow", a, b))
        };
        c.prototype.yf = function() {
            if (this.qe) {
                var a = this.aa.km();
                var b = this.ga.get("pageInflation");
                a.Dd(b, b)
            } else a = this.aa.Xb();
            return a
        };
        c.prototype.On = function() {
            var a = B(this.canvas.first).Vb(),
                b = B(this.hc).Vb(),
                d = a.left - b.left;
            a = a.top - b.top;
            this.aa.Kc.style.transform = "translate(" + this.lb + "px, " + this.bb + "px) scale(" + this.scale + ")";
            this.Dk.style.transform = "translate(" + (this.lb + d) + "px, " + (this.bb + a) + "px) scale(" + this.scale + ")"
        };
        c.prototype.Dc = function() {
            if (!this.xm())
                if (this.On(), this.ya.na("scroll"), this.ga.get("scrollbars")) {
                    var a = this.He(),
                        b = this.yf(),
                        d = this.zf(),
                        c = !1,
                        h = !1;
                    d.y <= b.y && d.bottom() >= b.bottom() ? this.nc.Me() : (this.nc.show(), this.nc.sr(Math.min(d.y, b.y), Math.max(d.bottom(), b.bottom()), d.height, -this.bb / this.scale), c = !0);
                    d.x <= b.x && d.right() >= b.right() ? this.jd.Me() : (this.jd.show(), this.jd.sr(Math.min(d.x, b.x), Math.max(d.right(), b.right()), d.width, -this.lb / this.scale), h = !0);
                    h && c ? (this.nc.Ve(20, a.height - 20), this.jd.Ve(a.width - 20, 20)) : c ? this.nc.Ve(20, a.height) : h && this.jd.Ve(a.width, 20)
                } else this.nc.Me(), this.jd.Me()
        };
        c.prototype.Ig = function(a, b, d) {
            this.log("Set document size %s,%s", a, b);
            this.aa.Va();
            this.aa.setProperty("width", a);
            this.aa.setProperty("height", b);
            this.aa.ua(d);
            this.Dc();
            this.Gg();
            this.xg(!1)
        };
        c.prototype.$j = function(a, b, d) {
            var c = this;
            if (this.di)
                if (this.Ea.pb) this.log("Not nudging; keyboard cursor shown.");
                else {
                    a *= d / this.scale;
                    b *= d / this.scale;
                    this.log("Nudge selection by %s, %s", a, b);
                    var h = this.Jc(!0),
                        f = new Fc(a, b);
                    this.aa.transaction(function() {
                        c.aa.Ld(h, f)
                    });
                    this.Kk(f.multiply(this.vk));
                    return 0 < h.length
                }
            else this.log("Can't nudge; selection motion is locked.")
        };
        c.prototype.oi = function(a) {
            var b = new N;
            var d = new G(-50, -50);
            var c = new G(50, -50);
            var h = new G(50, 50);
            var f = new G(-50, 50);
            b.moveTo(d.x, d.y);
            b.lineTo(c.x, c.y);
            b.lineTo(h.x, h.y);
            b.lineTo(f.x, f.y);
            b.lineTo(d.x, d.y);
            b.close();
            a = zc({}, {
                commands: b.Ib(),
                fillStyle: this.Ab,
                strokeStyle: this.Rb,
                seed: Math.round(65535 * Math.random()),
                lineWidth: this.bh(this.sa.lineWidth),
                sloppiness: this.sa.sloppiness,
                layer: this.Sa,
                wrap: this.ga.get("multilineText"),
                fontSize: this.ga.get("defaultFontSize")
            }, a);
            this.log("Create an item on layer %s", this.Sa);
            this.Qa(new Xe(this, "PathNode", a, 100, 100, "rectangle", "rectangle", null))
        };
        c.prototype.Vn = function(a, b, d, c) {
            var e = new N;
            for (var f = 0; f <= a; f++) {
                var k = 50 * Math.sin(b),
                    l = 50 * -Math.cos(b);
                f & 1 && (k *= d, l *= d);
                "matrix" in c && (l = c.matrix.apply(k, l), k = l.x, l = l.y);
                0 === f ? e.moveTo(k, l) : e.lineTo(k, l);
                b += 2 * Math.PI / a
            }
            e.close();
            "matrix" in c && delete c.matrix;
            c = zc({}, {
                commands: e.Ib(),
                fillStyle: this.Ab,
                strokeStyle: this.Rb,
                seed: Math.round(65535 * Math.random()),
                lineWidth: this.bh(this.sa.lineWidth),
                sloppiness: this.sa.sloppiness,
                layer: this.Sa,
                wrap: this.ga.get("multilineText"),
                fontSize: this.ga.get("defaultFontSize")
            }, c);
            this.log("Create an item on layer %s", this.Sa);
            this.Qa(new Xe(this, "PathNode", c, 100, 100, this.ga.Mp(), "polygon", null))
        };
        c.prototype.lw = function() {
            this.Qa(new ce(this))
        };
        c.prototype.Nk = function(a) {
            var b = new G(0, 0);
            var d = new N;
            d.moveTo(b.x, b.y - 50);
            d.nf(b.x + 50, b.y - 50, b.x + 50, b.y);
            d.nf(b.x + 50, b.y + 50, b.x, b.y + 50);
            d.nf(b.x - 50, b.y + 50, b.x - 50, b.y);
            d.nf(b.x - 50, b.y - 50, b.x, b.y - 50);
            d.closePath();
            b = d.Ib();
            a = zc({}, {
                commands: b,
                fillStyle: this.Ab,
                strokeStyle: this.Rb,
                seed: Math.round(65535 * Math.random()),
                lineWidth: this.bh(this.sa.lineWidth),
                sloppiness: this.sa.sloppiness,
                layer: this.Sa,
                wrap: this.ga.get("multilineText"),
                fontSize: this.ga.get("defaultFontSize")
            }, a || {});
            this.Qa(new Xe(this, "PathNode", a, 100, 100, this.ga.Mp(), "circle", null))
        };
        c.prototype.Wn = function(a, b, d, c, h, f) {
            this.Qa(new Xe(this, a, b, d, c, h, "shape", f))
        };
        c.prototype.Xx = function(a, b) {
            this.Qa(new ae(this, a, b))
        };
        c.prototype.Un = function(a) {
            var b = this.aa.eb(a, !1);
            if (!b) return this.log("useEditHandleTool: node %s doesn't exist.", a), !1;
            if (!b.Le()) return this.log("useEditHandleTool: nodetype %s has no edit mode", b.type()), !1;
            this.hb();
            this.cb();
            this.Tb();
            this.Jg(b);
            this.ia()
        };
        c.prototype.Qv = function(a) {
            var b = this,
                d = this.Ra(new G(100, 100)),
                c = new Fc(d.x, d.y);
            this.aa.transaction(function() {
                var d = b.aa.createNode("ImageNode", {
                    url: a,
                    layer: b.Sa
                });
                b.aa.Ld([d], c)
            });
            this.hb()
        };
        c.prototype.Cd = function() {
            return B.Op()
        };
        c.prototype.Zv = function(a, b) {
            this.ra.Oe ? (this.log("Simulating click of colour %s", a), this.ra.Oe(a, b)) : this.log("A colour is not needed for this tool.")
        };
        c.prototype.ew = function(a, b) {
            this.ra.Pe ? (this.log("Simulating opacity change %s", a), this.ra.Pe(a, b)) : this.log("An opacity is not needed for this tool.")
        };
        c.prototype.wc = function(a) {
            this.aa.wc(a) && (this.cb(), this.Tb(), this.Gg(), this.ia(), this.ya.na("set-page", a))
        };
        c.prototype.mn = function(a) {
            this.qe = a;
            a = this.yf();
            this.lb = -a.x;
            this.bb = -a.y;
            this.Dc();
            this.ia()
        };
        c.prototype.fr = function(a) {
            var b = this.zf(),
                d = b.width / a;
            a = b.height / a;
            b.x -= (d - b.width) / 2;
            b.y -= (a - b.height) / 2;
            b.width = d;
            b.height = a;
            this.Ng(b)
        };
        c.prototype.Rk = function() {
            this.fr(this.ga.bi(1.1 * this.scale) / this.scale)
        };
        c.prototype.Sk = function() {
            this.fr(this.ga.bi(this.scale / 1.1) / this.scale)
        };
        c.prototype.th = function(a, b, d) {
            var c = this;
            d = d || this.Tu(a);
            var h = new Ic(b, d.x, d.y);
            this.aa.transaction(function() {
                c.aa.Ld(c.Rp(a), h)
            })
        };
        c.prototype.Cp = function(a, b) {
            this.Zp() || this.log("flipSelection: selection is empty");
            this.th(this.Wc(), a, b)
        };
        c.prototype.nj = function() {
            var a = this.xa;
            return (window.devicePixelRatio || 1) / (a.hy || a.Kv || a.Nv || a.Tv || a.Ns || 1)
        };
        c.prototype.Yl = function() {
            return new Cc(this.canvas.width, this.canvas.height)
        };
        c.prototype.He = function() {
            var a = this.Yl(),
                b = this.ga.get("showRuler") ? 20 : 0;
            return new H(b, b, a.width - b, a.height - b)
        };
        c.prototype.Vw = function(a, b) {
            this.canvas.Ve(a, b)
        };
        c.prototype.zf = function() {
            var a = this.He();
            return new H((0 - this.lb) / this.scale, (0 - this.bb) / this.scale, a.width / this.scale, a.height / this.scale)
        };
        c.prototype.Ng = function(a, b, d) {
            void 0 === b && (b = !1);
            void 0 === d && (d = !1);
            this.log("setViewRect(%s)", a);
            var c = this.He(),
                h = Math.min(c.width / a.width, c.height / a.height),
                f = a.x * h,
                k = a.y * h;
            this.lb = b ? (c.width - a.width * h) / 2 - f : -f;
            this.bb = d ? (c.height - a.height * h) / 2 - k : -k;
            this.Nd = this.scale = h;
            this.Dc();
            this.ia()
        };
        c.prototype.du = function(a) {
            this.request.hg ? (this.log("Formatting in progress; will call function soon"), this.request.once("done", a)) : (this.log("Format already done; call function in 1 tick"), setTimeout(a, 0))
        };
        c.prototype.Wj = function(a) {
            !this.dg && a ? (this.log("Locking updates."), this.dg = !0) : this.dg && !a && (this.log("Resuming updates"), this.dg = !1, this.Gg(), this.Dc(), this.ia())
        };
        c.prototype.xm = function() {
            this.dg && this.log("Updates are locked. Ignoring draw/format request");
            return this.dg
        };
        c.prototype.xg = function(a) {
            this.ya.lg("document-changed", {
                remote: a
            })
        };
        c.prototype.bi = function(a) {
            return this.ga.bi(a)
        };
        c.prototype.cc = function(a) {
            this.hf.style.cursor = a
        };
        return c
    }();
    var hf = function() {
        function c(a, b, d) {
            var c = this;
            this.ya = a;
            this.ma = b;
            this.log = x.create("APP");
            this.wa = new ob;
            this.rd = null;
            this.xq = this.zq = -1;
            this.cj = [];
            this.nm = !1;
            this.dn = this.Qn = null;
            for (this.Hf = []; null !== b.firstChild;) b.removeChild(b.firstChild);
            b = B(this.ma).be("position");
            "absolute" !== b && "fixed" !== b && (this.ma.style.position = "relative");
            this.ma.style.overflow = "none";
            this.ma.style.textAlign = "left";
            this.ma.classList.add("zwibbler-main");
            P.Ne(".zwibbler-main { font-size: 16px; }\n        .zwibbler-passthrough { cursor: pointer; }\n        .zwibbler-selected {outline: 4px solid rgba(0, 80, 183, 0.2);}\n        ");
            this.Yi = new nc(B("div").Wa({
                width: "300px"
            }).fa, this.wa);
            this.log("Zwibbler built on " + new Date(1587833583423) + " for 'web'");
            this.ga = new Fe(this.wa, d);
            this.language = new $a("\nen:arrowhead-size:Arrowhead size\nes:arrowhead-size:Flecha tama\u00f1o\n\nen:arrowhead-size-large:Large\nes:arrowhead-size-large:Grande\n\nen:arrowhead-size-medium:Medium\nes:arrowhead-size-medium:Medio\n\nen:arrowhead-size-none:None\nes:arrowhead-size-none:Nada\n\nen:arrowhead-size-small:Small\nes:arrowhead-size-small:Peque\u00f1o\n\nen:arrowhead-size-tiny:Tiny\nes:arrowhead-size-tiny:Diminuto\n\nen:arrowhead-style:Arrowhead style\nes:arrowhead-style:Flecha estilo\n\nen:arrowhead-style-simple:Simple\nes:arrowhead-style-simple:Llanura\n\nen:arrowhead-style-solid:Solid\nes:arrowhead-style-solid:Denso\n\nen:arrow-keys:Arrow Keys\nes:arrow-keys:Teclas de flecha\n\nen:arrow-tool:Arrow tool\nes:arrow-tool:Flecha\nfr:arrow-tool:Fl\u00e8che\nnl:arrow-tool:Pijl\n\nen:break-apart-group:Break apart group\nes:break-apart-group:Dividir el grupo\n\nen:bring-to-front:Bring to front\nes:bring-to-front:Traer al frente\n\nen:brush-tool:Brush tool\nes:brush-tool:Brocha\nfr:brush-tool:Brosse\nnl:brush-tool:Penseel\n\nen:circle-tool:Circle tool\nes:circle-tool:C\u00edrculo\nfr:circle-tool:Cercle\nnl:circle-tool:Cirkel\n\nen:click-to-place-another-point-or-double-click-to-end-the-line:Click to place another point, or double-click to end the line.\nes:click-to-place-another-point-or-double-click-to-end-the-line:Haga clic para colocar otro punto, o doble clic para finalizar la l\u00ednea\nfr:click-to-place-another-point-or-double-click-to-end-the-line:Cliquez pour placer un autre point, ou double-cliquez pour terminer la ligne.\nnl:click-to-place-another-point-or-double-click-to-end-the-line:Klik op een ander punt te plaatsen, of dubbelklik om de lijn te be\u00ebindigen.\n\nen:click-to-place-first-point-of-line:绘图中...\nes:click-to-place-first-point-of-line:Haga clic para colocar el primer punto de la l\u00ednea\nfr:click-to-place-the-first-point-of-line:Cliquez pour placer le premier point de la ligne\nnl:click-to-place-the-first-point-of-line:Klik om het eerste punt van de lijn te plaatsen.\n\nen:click-to-set-the-end-of-the-line:Click to set the end of the line\nes:click-to-set-the-end-of-the-line:Haga clic para colocar el extremo de la l\u00ednea\nfr:click-to-set-the-end-of-the-line:Cliquez pour d\u00e9finir la fin de la ligne\nnl:click-to-set-the-end-of-the-line:Klik hier voor het einde van de lijn in te stellen.\n\nen:copy:Copy\nes:copy:Copiar\nfr:copy:Copie\nnl:copy:Kopi\u00ebren\n\nen:curve-tool:Curve tool\nes:curve-tool:Curva\nfr:curve-tool:Courbes\nnl:curve-tool:Kromme\n\nen:delete-selection:Delete selection\nes:delete-selection:Eliminar la selecci\u00f3n\n\nen:del-key:Del\nes:del-key:Del\n\nen:double-arrows:Double arrows\nes:double-arrows:flechas dobles\n\nen:draw-curves:Draw curves\nes:draw-curves:Dibuje las curvas\n\nen:draw-lines:Draw lines\nes:draw-lines:Dibujar l\u00edneas\n\nen:duplicate-selection:Duplicate selection\nes:duplicate-selection:Duplica la selecci\u00f3n\n\nen:fill-colour:Fill colour\nes:fill-colour:Color de relleno\n\nen:font:Font\nes:font:Font\n\nen:font-size:Font size\nes:font-size:Tama\u00f1o de letra\n\nen:group-selection:Group selection\nes:group-selection:Grupo la selecci\u00f3n\n\nen:image-tool:Image tool\nes:image-tool:Imagen\nfr:image-tool:Image\nnl:image-tool:Afbeelding\n\nen:image-url:Image URL\nes:image-url:URL de la imagen\n\nen:keyboard:Keyboard\nes:keyboard:Teclado\n\nen:line-style:Line style\nes:line-style:Estilo de l\u00ednea\n\nen:line-style-long-dashes:Long dashes\nes:line-style-long-dashes:Gui\u00f3n largo\n\nen:line-style-short-dashes:Short dashes\nes:line-style-short-dashes:Gui\u00f3n corto\n\nen:line-style-solid:Solid\nes:line-style-solid:Denso\n\nen:line-tool:Line tool\nes:line-tool:Raya\nfr:line-tool:Lignes\nnl:line-tool:Lijn\n\nen:move-selection-away:Move selection away\nes:move-selection-away:Mover la selecci\u00f3n de distancia\n\nen:move-selection-closer:Move selection closer\nes:move-selection-closer:Mover la selecci\u00f3n de distancia\n\nen:move-while-zoomed:Move while zoomed\nes:move-while-zoomed:Desplazarse por la pantalla\n\nen:none:None\nes:none:Nada\n\nen:no:No\nes:no:No\n\nen:outline-colour:Outline colour\nes:outline-colour:Color del contorno\n\nen:outline-thickness:Outline thickness\nes:outline-thickness:Grosor del contorno\n\nen:page-down-key:Page Down\nes:page-down-key:Page Down\n\nen:page-up-key:Page Up\nes:page-up-key:Page Up\n\nen:paste:Paste\nes:paste:Pegar\nfr:paste:Coller\nnl:paste:Plak\n\nen:pick-tool:Pick tool\nes:pick-tool:Seleccionar\nfr:pick-tool:S\u00e9lectionner\nnl:pick-tool:Uitkiezen\n\nen:rectangle-tool:Rectangle tool\nes:rectangle-tool:rect\u00e1ngulo\nfr:rectangle-tool:Rectangle\nnl:rectangle-tool:Rechthoek\n\nen:redo:Redo\nes:redo:Rehacer\nfr:redo:Refaire\nnl:redo:Opnieuw maken\n\nen:rounded-rectangle-tool:Rounded rectangle tool\nes:rounded-rectangle-tool:Rect\u00e1ngulo redondeado\n\nen:save:Save\nes:save:Guardar\n\nen:send-to-back:Send to back\nes:send-to-back:Enviar a la parte posterior\n\nen:shadow:Shadow\nes:shadow:Sombra\n\nen:shape-brush-tool:Shape brush tool\nes:shape-brush-tool:Brush que dibuja formas\n\nen:sloppiness-artist:Artist\nes:sloppiness-artist:Artista\n\nen:sloppiness-cartoonist:Cartoonist\nes:sloppiness-cartoonist:Caricaturista\n\nen:sloppiness-child:Child\nes:sloppiness-child:Ni\u00f1o\n\nen:sloppiness-draftsman:Draftsman\nes:sloppiness-draftsman:Dibujante\n\nen:sloppiness-drunk:Drunk\nes:sloppiness-drunk:Borracho\n\nen:sloppiness:Sloppiness\nes:sloppiness:La dejadez\n\nen:smoothness-sharper:Sharper\nes:smoothness-sharper:Muy afilado\n\nen:smoothness-sharpest:Sharpest\nes:smoothness-sharpest:M\u00e1s afilado\n\nen:smoothness-sharp:Sharp\nes:smoothness-sharp:Afilado\n\nen:smoothness-smoothest:Smoothest\nes:smoothness-smoothest:Muy liso\n\nen:smoothness:Smoothness\nes:smoothness:Lisura\n\nen:smoothness-smooth:Smooth\nes:smoothness-smooth:Liso\n\nen:text-colour:Text colour\nes:text-colour:Color del texto\n\nen:text:Text\nes:text:Texto\n\nen:text-tool:Text tool\nes:text-tool:Texto\nfr:text-tool:Texte\nnl:text-tool:Tekst\n\nen:thickness-brush:Brush\nes:thickness-brush:Brocha\n\nen:thickness-marker:Marker\nes:thickness-marker:Rotulador\n\nen:thickness-pencil:Pencil\nes:thickness-pencil:L\u00e1piz\n\nen:thickness-pen:Pen\nes:thickness-pen:Pluma\n\nen:undo:Undo\nes:undo:Deshacer\nfr:undo:D\u00e9faire\nnl:undo:Ongedaan maken\n\nen:yes:Yes\nes:yes:S\u00ed\n\nen:zoom-in:Zoom in\nes:zoom-in:Zoom\n\nen:zoom-out:Zoom out\nes:zoom-out:Disminuir el zoom\n");
            this.language.pr(this.ga.get("language"));
            this.hf = B("div").pd("zwibbler-canvas-holder").Wa({
                position: "absolute",
                overflow: "hidden",
                touchAction: "none",
                background: "#FFFFFF",
            }).fa;
            this.ma.appendChild(this.hf);
            this.canvas = new oc(this.hf, 100, 100);
            B(this.canvas.first).pd("zwibbler-main-canvas").Wa({
                outline: "0",
                position: "absolute",
                left: "0",
                top: "0",
                pointerEvents: "none"
            });
            this.canvas.first.setAttribute("tabindex", "0");
            d = this.ce();
            this.ic = new bb;
            this.Dk = B("DIV").Wa({
                position: "absolute",
                My: "none",
                Ay: "none",
                transformOrigin: "left top",
                left: 0,
                top: 0
            }).pd("zwibbler-staging").Tc(d).fa;
            this.ci = {
                ctx: a
            };
            this.view = new ef(d, this.canvas, new ff(!1, d, this.ci), this.ic, this.ga, this.language, this.ya, this.wa, this.Dk, this.hf);
            this.Kc = B(this.view.aa.Kc).pd("zwibbler-html-root").Wa({
                position: "absolute",
                left: "0",
                top: "0",
                userSelect: "none",
                msUserSelect: "none"
            }).insertBefore(this.canvas.first).fa;
            this.jr();
            this.tc = this.ux();
            this.wa.addEventListener(window, "resize", function() {
                c.ya.resize()
            });
            window.$ && (this.log("jQuery detected; register for bootstrap events"), window.$(document).bind("shown.bs.modal", function() {
                c.log("Bootstrap modal shown; resize now");
                c.ya.resize()
            }));
            null !== this.ga.Ta("backgroundImage") && (this.jn(this.ga.Ta("backgroundImage")), this.view.aa.tk());
            this.ga.pa("update", function(a, b) {
                c.je(a, b)
            });
            P.Ne(".zwibbler-progress-notification {\n            position: absolute;\n            top: 0;\n            right: 0;\n            box-shadow: 3px 3px 3px #444;\n            background: #ccc;\n            color: black;\n            border-bottom-left-radius: 4px;\n            font-family: arial,sans;\n        }");
            this.Tq = B("div").pd("zwibbler-progress-notification").Tc(this.ma).fa;
            a.resize();
            this.ga.get("setFocus") && this.focus();
            this.je("showDebug", this.ga.get("showDebug"));
            this.view.xg(!1);
            this.ya.na("set-page", this.view.aa.ab);
            if (Ge.Ii()) {
                if (this.ga.get("persistent") && (a = Ge.getItem("zwibbler-document"))) try {
                    var h = gf.Yg(a, d, this.ci);
                    if (h) this.Wf(h);
                    else throw Error("Failed to open document.");
                } catch (f) {
                    this.log("Failed to load persistent document: %s", f.message)
                }
                this.Qn = He(function() {
                    c.ga.get("persistent") && (c.log("Saving document"), Ge.setItem("zwibbler-document", c.ya.save()))
                });
                this.ya.pa("document-changed", function() {
                    c.Qn()
                });
                this.wa.add(function() {
                    c.Qn.cancel()
                })
            }
            this.wa.add(function() {
                for (; c.ma.firstChild;) c.ma.removeChild(c.ma.firstChild);
                c.tc.jh();
                c.ic.jh()
            });
            this.wa.addEventListener(this.ce(), "dragstart", function(a) {
                if (a.target instanceof HTMLImageElement) {
                    var b = a.target.getAttribute("draggable");
                    if (!b || "false" === b.toLowerCase()) return a.preventDefault(), !1
                }
            })
        }
        c.prototype.Xa = function() {
            this.wa.Xa()
        };
        c.prototype.je = function(a, b) {
            var d = !1;
            this.log("onConfigChange %s=%s", a, b);
            switch (a) {
                case "showDebug":
                    b ? (this.Yi.show(), this.$g(0, "right", this.Yi.ma)) : (this.Yi.Me(), this.ai(this.Yi.ma));
                    d = !0;
                    break;
                case "backgroundImage":
                    this.jn(b);
                    break;
                case "language":
                    this.language.pr(b)
            }
            d && this.yi()
        };
        c.prototype.jr = function() {
            this.ga.Ta("sloppy") || this.view.pe("sloppiness", 0);
            this.view.pe("smoothness", this.ga.tu());
            this.view.pe("fillStyle", this.ga.Ta("defaultFillStyle"));
            this.view.pe("strokeStyle", this.ga.Ta("defaultStrokeStyle"));
            this.view.pe("fontName", this.ga.Ta("defaultFont"));
            this.view.pe("fontSize", this.ga.Ta("defaultFontSize"));
            this.view.pe("lineWidth", this.ga.Ta("defaultLineWidth"));
            this.view.pe("textFillStyle", this.ga.Ta("defaultTextFillStyle"))
        };
        c.prototype.Wf = function(a) {
            this.rd = null;
            this.hf.insertBefore(a.Kc, this.Kc);
            B(this.Kc).remove();
            this.Kc = a.Kc;
            B(this.Kc).Wa({
                position: "absolute",
                left: 0,
                top: 0,
                userSelect: "none"
            });
            this.view.Wf(a);
            this.jr();
            this.St();
            this.ya && (this.view.xg(!1), this.ya.na("set-page", a.ab));
            for (a = 0; a < this.cj.length; a++) {
                var b = this.cj[a];
                this.log("Removing old DomElement of type %s", b.tagName);
                B(b).remove()
            }
            this.cj = []
        };
        c.prototype.zl = function() {
            this.view.aa.tk()
        };
        c.prototype.ux = function() {
            var a = this,
                b = this;
            this.nm = !1;
            var d = new cb;
            this.ga.Hs(d);
            d.pa("*", function(b, d) {
                a.nm ? a.view.ld(b, d) : a.log("Ignore key action -- don't have focus.")
            });
            this.ma.setAttribute("tabindex", "0");
            d.Xo(this.ma);
            this.wa.add(function() {
                a.tc.detach(a.ma)
            });
            this.ic.pa("goto-toolbar", function() {
                a.dn && a.dn.focus()
            });
            this.ic.pa("goto-canvas", function() {
                b.focus()
            });
            this.wa.addEventListener(this.ma, "blur", function() {
                "text" !== b.view.vh() && (b.log("Blur event received -- hide keyboard cursor"), b.view.lv())
            });
            this.ga.pa("allowSystemClipboard", function(b) {
                a.log("allowSystemClipboard=>%s", b);
                a.ga.um() && (a.wa.addEventListener(document, "cut", function(b) {
                    return a.view.Ff(b)
                }), a.wa.addEventListener(document, "copy", function(b) {
                    return a.view.Ff(b)
                }), a.wa.addEventListener(document, "paste", function(b) {
                    return a.view.Ff(b)
                }))
            });
            return d
        };
        c.prototype.mx = function(a) {
            this.dn = a
        };
        c.prototype.focus = function() {
            document.activeElement && (document.activeElement === this.ma || document.activeElement.matches("zwibbler *, [zwibbler] *, .zwibbler-main *") && Ac(document.activeElement)) ? this.log("focus(): Already have focus.") : (this.nm = !0, this.ga.get("setFocus") && (this.log("focus(): set focus to div"), this.ma.focus()))
        };
        c.prototype.qn = function(a) {
            void 0 === a && (a = !1);
            this.focus();
            this.view.qn(a)
        };
        c.prototype.createNode = function(a, b, d) {
            "layer" in b || (b.layer = this.view.Sa);
            d || (d = this.view.aa.$l());
            this.view.aa.Va();
            a = this.view.aa.createNode(a, b, d);
            this.view.aa.ua();
            return a
        };
        c.prototype.transformNode = function(a, b) {
            var d = this;
            this.view.aa.transaction(function() {
                d.view.aa.Ld(a, b)
            });
            return !0
        };
        c.prototype.ln = function(a, b, d, c, h, f, k) {
            var e = this,
                n = new J(b, c, d, h, f, k);
            this.view.aa.transaction(function() {
                e.view.aa.Ob(a, "matrix", n)
            });
            return !0
        };
        c.prototype.mi = function(a, b, d) {
            var c = this,
                h = new Fc(b, d);
            this.view.aa.transaction(function() {
                c.view.aa.Ld(a, h)
            })
        };
        c.prototype.uk = function(a, b, d, c, h) {
            var e = this,
                k = new Hc(b, d, c, h);
            this.view.aa.transaction(function() {
                e.view.aa.Ld(a, k)
            });
            return !0
        };
        c.prototype.Wd = function(a) {
            this.view.aa.Va();
            this.view.aa.Sb(a);
            this.view.aa.ua();
            return !0
        };
        c.prototype.St = function() {
            var a = this;
            this.rd = null;
            this.view.aa.rc(!1, function(b) {
                "ImageNode" !== b.type() || "background" !== b.ja("layer") && "background" !== b.ja("tag") || (a.log("Found background image at nodeid %s", b.id), a.rd = b.id, b.Te(!0))
            })
        };
        c.prototype.jn = function(a) {
            this.view.aa.Va();
            null !== this.rd && this.view.aa.yd(this.rd) && this.view.aa.Sb([this.rd]);
            a && (a = this.view.aa.createNode("ImageNode", {
                url: a,
                locked: !0,
                tag: "background",
                layer: this.view.Sa
            }), this.view.aa.Uc([a], 1));
            this.rd = null;
            this.view.aa.ua(!0);
            this.view.cb();
            this.view.Tb()
        };
        c.prototype.mu = function() {
            return null !== this.rd && this.view.aa.yd(this.rd) ? this.view.aa.Ja(this.rd).ja("url") : null
        };
        c.prototype.tq = function() {
            this.Wf(new ff(!1, this.ce(), this.ci));
            null !== this.ga.Ta("backgroundImage") && (this.jn(this.ga.Ta("backgroundImage")), this.view.aa.tk())
        };
        c.prototype.yi = function() {
            var a = !0;
            void 0 === a && (a = !1);
            var b = this.ma.clientWidth,
                d = this.ma.clientHeight;
            if (a || b !== this.zq || d !== this.xq) {
                this.log("onResize()");
                this.zq = b;
                this.xq = d;
                for (var c = a = 0, h = 0, f = 0, k = 0, l = this.Hf; k < l.length; k++) {
                    var n = l[k];
                    switch (n.position) {
                        case "left":
                        case "right":
                            n.ma.style.top = h + "px";
                            n.ma.style.bottom = f + "px";
                            break;
                        case "top":
                        case "bottom":
                            n.ma.style.left = a + "px", n.ma.style.right = c + "px"
                    }
                    switch (n.position) {
                        case "left":
                            n.ma.style.left = a + "px";
                            a += n.ma.offsetWidth;
                            break;
                        case "right":
                            n.ma.style.right = c + "px";
                            c += n.ma.offsetWidth;
                            break;
                        case "top":
                            n.ma.style.top = h + "px";
                            h += n.ma.offsetHeight;
                            break;
                        case "bottom":
                            n.ma.style.bottom = f + "px", f += n.ma.offsetHeight
                    }
                }
                B(this.hf).Wa({
                    left: a + "px",
                    right: c + "px",
                    top: h + "px",
                    bottom: f + "px"
                });
                this.view.Vw(b - c - a, d - f - h);
                B(this.Tq).Wa({
                    top: "0",
                    right: c + "px"
                });
                this.view.Gf();
                this.ya.na("resize")
            } else this.log("Ignoring resize; div size did not change.")
        };
        c.prototype.bl = function(a, b, d) {
            void 0 === d && (d = this.view.aa.ab);
            var c = this.view.aa.ab;
            this.view.aa.wc(d);
            a.translate(-b.x, -b.y);
            this.view.Xd(a, b.x, b.y, b.width, b.height);
            this.view.aa.ia(a);
            this.ya.kg && this.ya.kg(a);
            this.view.aa.wc(c)
        };
        c.prototype.br = function(a, b, d) {
            0 == d && (d = b.width);
            var c = d / b.width;
            if ("image/svg+xml" === a || "application/pdf" === a) {
                var h = !1;
                "image/svg+xml" === a ? d = new je(new H(0, 0, b.width, b.height)) : (b = this.ya.xh(0), b = new H(b.x, b.y, b.width, b.height), d = new te(new H(0, 0, b.width, b.height), P.fonts), h = !0);
                if (h)
                    for (h = 0; h < this.view.aa.Wb(); h++) 0 < h && (b = this.view.aa.Xb(h), d.Og(b)), this.bl(d, b, h);
                else this.bl(d, b);
                return "data:" + a + ";base64," + Ba(d.toString())
            }
            h = document.createElement("canvas");
            h.setAttribute("width", Math.ceil(b.width * c).toString());
            h.setAttribute("height", Math.ceil(b.height * c).toString());
            d = h.getContext("2d");
            d.scale(c, c);
            if ("image/jpeg" === a || "image/bmp" === a) d.fillStyle = "#ffffff", d.fillRect(0, 0, b.width, b.height);
            this.bl(d, b);
            return "image/bmp" === a ? xc(h) : h.toDataURL(a)
        };
        c.prototype.Ob = function(a, b, d) {
            var c = this;
            this.log("External app setItemProperty %s: %s=%s", a, b, d);
            this.view.aa.transaction(function() {
                c.view.aa.Ob(a, b, d)
            });
            return !0
        };
        c.prototype.Qc = function(a, b) {
            var d = this;
            this.log("External app setNodeProperty %s: %s", a, b);
            this.view.aa.transaction(function() {
                d.view.aa.Qc(a, b)
            });
            return !0
        };
        c.prototype.tj = function(a, b) {
            var d, c;
            (d = this.view.aa.Ja(a)) && (c = d.ja(b));
            this.log("GetItemProperty %s: %s=%s", a, b, c);
            return c
        };
        c.prototype.El = function(a) {
            var b, d;
            if (6 > a.length) this.log("newShape: Cannot create shape with fewer than three points.");
            else {
                var c = new N;
                var h = b = 0;
                for (d = a.length - 1; b <= d; h = b += 2) {
                    var f = this.view.Ra(new G(a[h], a[h + 1]));
                    if (0 === h) {
                        c.moveTo(f.x, f.y);
                        var k = f
                    } else c.lineTo(f.x, f.y)
                }
                k && (c.lineTo(k.x, k.y), c.close());
                return this.Vi(c.Ib())
            }
        };
        c.prototype.Vi = function(a) {
            return this.createNode("PathNode", {
                commands: a,
                fillStyle: this.view.Ab,
                strokeStyle: this.view.Rb,
                seed: Math.round(65535 * Math.random()),
                lineWidth: this.view.sa.lineWidth,
                sloppiness: this.view.sa.sloppiness,
                angleArcs: this.ga.get("angleArcs")
            })
        };
        c.prototype.vt = function(a) {
            return new mc(this.Tq, a)
        };
        c.prototype.$g = function(a, b, d) {
            for (var c = 0, h = this.Hf; c < h.length; c++)
                if (h[c].ma === d) return;
            this.ma.appendChild(d);
            this.Hf.push({
                order: a,
                ma: d,
                position: b
            });
            d.style.position = "absolute";
            this.Hf.sort(function(a, b) {
                return a.order < b.order ? -1 : 1
            });
            this.yi()
        };
        c.prototype.ai = function(a) {
            for (var b = 0; b < this.Hf.length; b++)
                if (this.Hf[b].ma === a) {
                    this.Hf.splice(b, 1);
                    this.ma.removeChild(a);
                    break
                }
            this.yi()
        };
        c.prototype.ce = function() {
            for (var a = this.ma, b = a; b;) {
                if (b instanceof HTMLElement && (null !== b.getAttribute("zwibbler") || "ZWIBBLER" === b.tagName)) {
                    a = b;
                    break
                }
                b = b.parentElement
            }
            return a
        };
        c.prototype.ml = function(a, b) {
            this.tc.map(a, b)
        };
        return c
    }();
    var jf = function() {
        function c(a, b) {
            this.view = a;
            this.methods = b;
            this.log = x.create("CustomToolBehaviour");
            this.md = new be(a)
        }
        c.prototype.Gc = function() {
            this.log("Entering CustomToolBehaviour");
            this.methods.enter && this.methods.enter()
        };
        c.prototype.kc = function() {
            this.log("Leaving CustomToolBehaviour");
            this.methods.leave && this.methods.leave()
        };
        c.prototype.gk = function(a, b, d) {
            return this.methods.onMouseClick ? this.methods.onMouseClick(a, b, d.Zc) : !1
        };
        c.prototype.zb = function(a, b, d) {
            return this.methods.onMouseDown ? this.methods.onMouseDown(a, b, d.Zc) : !1
        };
        c.prototype.ob = function(a, b, d) {
            return this.methods.onMouseMove ? this.methods.onMouseMove(a, b, d.Zc) : !1
        };
        c.prototype.Cb = function(a, b, d) {
            return this.methods.onMouseUp ? this.methods.onMouseUp(a, b, d.Zc) : !1
        };
        c.prototype.Fq = function(a, b, d) {
            return this.methods.onMouseLeave ? this.methods.onMouseLeave(a, b, d) : !1
        };
        c.prototype.Jm = function(a, b, d) {
            return this.methods.onDoubleClick ? this.methods.onDoubleClick(a, b, d.Zc) : !1
        };
        c.prototype.Aq = function(a, b, d) {
            return this.methods.onContextMenu ? this.methods.onContextMenu(a, b, d) : !1
        };
        c.prototype.Oe = function(a, b) {
            return this.methods.onColour ? this.methods.onColour(a, b) : !1
        };
        c.prototype.Pe = function(a, b) {
            return this.methods.onOpacity ? this.methods.onOpacity(a, b) : !1
        };
        c.prototype.ld = function(a, b) {
            this.log("keyboard: %s", a);
            this.methods.onKeyCommand && !1 === this.methods.onKeyCommand(a, b) || "cancel" !== a || (this.log("ESC pressed. Abort and go back to toolbar."), this.view.hb(), this.view.ic.na("goto-toolbar"))
        };
        c.prototype.Gq = function(a) {
            if (this.methods.onRedraw) this.methods.onRedraw(a)
        };
        c.prototype.sb = function(a) {
            return this.methods.onGesture ? this.methods.onGesture(a) : this.md.sb(a)
        };
        c.prototype.Km = function(a, b, d, c) {
            return this.methods.onMouseWheel ? this.methods.onMouseWheel(a, b, d, c) : !1
        };
        c.prototype.hd = function() {
            return this.methods.getToolName ? this.methods.getToolName() : "custom"
        };
        return c
    }();
    var lf = function(c) {
        function a(a, d) {
            var b = c.call(this, a, d) || this;
            b.element = null;
            b.Xi = void 0;
            b.vc = new Pc;
            b.rm = new Pc;
            b.Fe = new J;
            b.readOnly = !1;
            b.pb = !1;
            b.Ad = null;
            b.width = 0;
            b.height = 0;
            b.Nc = null;
            b.Sq = "";
            b.log = x.create("DomNode", !0);
            b.Tg = -1;
            b.canvas = null;
            b.ba.data = "";
            b.ba.locked = !1;
            return b
        }
        __extends(a, c);
        a.prototype.type = function() {
            return "DomNode"
        };
        a.prototype.setProperty = function(a, d) {
            if ("data" === a) this.element && (B(this.element).remove(), this.Xi = this.element = null);
            else if ("border" === a || "lockSize" === a || "lockRotate" === a || "preview" === a) {
                this.ba[a] = d;
                return
            }
            c.prototype.setProperty.call(this, a, d)
        };
        a.prototype.cx = function(a) {
            null !== this.Ad && (this.log("Node %s receives DOM element and requests reformat", this.id), this.element && (this.log("   Remove existing DOM element"), B(this.element).remove()), this.element = a, this.element.style.position = "absolute", B(this.element).sm(this.Ad.canvas), this.width = this.element.offsetWidth || parseFloat(this.element.getAttribute("width") || "0"), this.height = this.element.offsetHeight || parseFloat(this.element.getAttribute("height") || "0"), B(this.element).remove(), this.Lg(this.readOnly, !0), this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.boxSizing = "border-box", this.element.classList.add("zwibbler-dom-node"), this.element.setAttribute("zwibbler-node-id", "" + this.id), this.ll("transformOrigin", "top left"), this.log("element height: %s, %s", this.element.offsetWidth, this.element.offsetHeight), this.Ad.Fg(this.id))
        };
        a.prototype.Ub = function() {
            return this.element
        };
        a.prototype.ll = function(a, d) {
            if (null !== this.element) {
                for (var b = a.charAt(0).toUpperCase() + a.substr(1), c = ["ms", "Webkit", "O", "Moz"], f = 0; f < c.length; f++) this.element.style[c[f] + b] = d;
                this.element.style[a] = d
            }
        };
        a.prototype.Te = function(a) {
            ed.prototype.Te.call(this, a);
            this.element && (this.element.style.visibility = this.wi ? "hidden" : "visible")
        };
        a.prototype.Lg = function(a, d) {
            void 0 === d && (d = !1);
            if (d || this.readOnly !== a) this.readOnly = a, this.element && this.Ad && this.pb && (this.Rm(this.Tg), B(this.element).sm(this.Ad.canvas))
        };
        a.prototype.format = function(a, d) {
            var b = this;
            this.canvas = d.canvas;
            null === this.element && this.Xi !== this.ja("data") && d && (this.Xi = this.ja("data"), this.Ad = d, this.log("DomNode %s requests conversion to DOM element", this.id), this.Ad.lt(this.Xi, this.id));
            if (this.element) {
                this.element.wy = this.id;
                var c = this.Ka(),
                    f = c.jc();
                this.element.style.width = this.width * f.x + "px";
                this.element.style.height = this.height * f.y + "px";
                c = c.multiply(new Hc(1 / f.x, 1 / f.y));
                f = this.Fe;
                f = f.multiply(c);
                f.vv() ? (this.ll("transform", ""), this.element.style.left = "" + f.Ba + "px", this.element.style.top = "" + f.Ca + "px") : (this.element.style.left = "0px", this.element.style.top = "0px", this.ll("transform", "matrix(" + f.m11 + "," + f.m21 + "," + f.m12 + "," + f.m22 + "," + f.Ba + "," + f.Ca + ")"));
                this.rect.x = 0;
                this.rect.y = 0;
                this.rect.width = this.width;
                this.rect.height = this.height;
                this.element.style.visibility = this.wi ? "hidden" : "visible"
            } else this.rect.x = 0, this.rect.y = 0, this.rect.width = 100, this.rect.height = 22;
            this.vc = new Pc(this.rect);
            this.Ga = this.rect.clone();
            this.rect.transform(this.Ka());
            this.vc.transform(this.Ka());
            if (c = this.ba.border) this.rect.Dd(c), this.rm = this.vc.clone(), this.rm.Dd(c / 2), this.vc.Dd(c);
            !this.ba.preview || null !== this.Nc && this.Sq === this.ba.preview ? this.ba.preview || (this.Nc = null) : (this.log("Requesting new preview image for %s", this.ba.preview), this.Nc = document.createElement("img"), this.Sq = this.Nc.src = this.ba.preview, this.Nc.onload = function() {
                b.log("Preview image loaded.");
                d.Fg(b.id)
            }, this.Nc.onerror = function() {
                b.log("Failed to load preview image")
            })
        };
        a.prototype.cf = function(a) {
            var b = a.pi;
            b && this.Ad && (b.m11 !== this.Fe.m11 || b.m21 !== this.Fe.m21 || b.m12 !== this.Fe.m12 || b.m22 !== this.Fe.m22 || b.Ba !== this.Fe.Ba || b.Ca !== this.Fe.Ca) && (this.log("Moving DOM element as result of draw zooming"), this.Fe = b, this.format(a, this.Ad));
            if (this.element) {
                var c = this.ba.border;
                if (c) {
                    var h = this.rm;
                    a.setTransform(1, 0, 0, 1, 0, 0);
                    a.beginPath();
                    a.lineWidth = c;
                    a.strokeStyle = "#cccccc";
                    a.moveTo(h.la[0].x, h.la[0].y);
                    a.lineTo(h.la[1].x, h.la[1].y);
                    a.lineTo(h.la[2].x, h.la[2].y);
                    a.lineTo(h.la[3].x, h.la[3].y);
                    a.lineTo(h.la[0].x, h.la[0].y);
                    a.closePath();
                    a.stroke()
                }
            } else a.beginPath(), a.lineWidth = 1, a.fillStyle = "#888888", a.strokeStyle = "#CCCCCC", a.rect(0, 0, 100, 22), a.stroke(), a.font = "20px Arial", a.textBaseline = "top", a.fillText("DomNode", 0, 0);
            if (this.Nc && this.Nc.naturalHeight && !b && this.pb) {
                this.log("Drawing preview image %s,%s ->%s,s", this.Nc.naturalWidth, this.Nc.naturalHeight, this.width, this.height);
                try {
                    a.drawImage(this.Nc, 0, 0, this.Nc.naturalWidth, this.Nc.naturalHeight, 0, 0, this.width, this.height)
                } catch (f) {
                    this.log("Tried to draw image, got error: %s", f.toString())
                }
            } else b && (b = a.globalCompositeOperation, a.globalCompositeOperation = "destination-out", a.fillRect(this.Ga.x, this.Ga.y, this.Ga.width, this.Ga.height), a.globalCompositeOperation = b)
        };
        a.prototype.clip = function(a) {
            this.vc.ia(a)
        };
        a.prototype.wb = function(a, d) {
            return !this.ba.locked && this.rect.ed(a, d) && this.vc.ed(a, d, 3) ? this : null
        };
        a.prototype.ek = function() {
            this.element && this.Ad && (this.log("Added DOM NODE %s", this.id), this.Rm(this.Tg));
            this.pb = !0
        };
        a.prototype.hk = function() {
            this.log("Removed DOM NODE %s", this.id);
            this.element && B(this.element).remove();
            this.pb = !1
        };
        a.prototype.Rm = function(a) {
            if (this.element && this.canvas && !(0 > a)) {
                a !== this.Tg ? (this.element.classList.remove("zwibbler-zorder-" + this.Tg), this.element.classList.add("zwibbler-zorder-" + a), this.Tg = a, this.log("Add class zwibbler-zorder-%s", a)) : this.log("order=zorder=%s", this.Tg);
                var b = null;
                for (--a; 0 <= a; a--) {
                    var c = this.canvas.parentElement.querySelector(".zwibbler-zorder-" + a);
                    if (c) {
                        b = c;
                        this.log("Found element zorder-%s", a);
                        break
                    }
                    this.log("Did not find element zorder-%s", a)
                }
                if (this.element.previousSibling !== b || null === b) b ? (this.log("Insert after previous."), B(this.element).sm(b)) : (this.log("Insert before canvas %s", this.canvas), B(this.element).insertBefore(this.canvas))
            }
        };
        a.prototype.Xa = function() {
            this.element && (this.log("DomNode %s destroyed", this.id), O.detach(this.element))
        };
        a.prototype.mr = function(a) {
            this.Rm(a)
        };
        return a
    }(ed);
    ed.dd("DomNode", lf);
    var mf = {
        style: ".zwibbler-page-selector {\n    overflow-y: scroll;\n    background: #888;\n    width: 160px;\n    text-align: center;\n}\n\n.zwibbler-page-selector [z-page] {\n    border: 3px solid transparent;\n    margin: 5px;\n    display: inline-block;\n    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);\n}\n\n.zwibbler-page-selector [z-page].selected {\n    border: 3px solid #9fb3e7;\n}\n",
        Kj: '<div class="zwibbler-page-selector">\n    <button z-if="getConfig(\'showPageSelectorControls\')"\n        z-click="ctx.setCurrentPage(ctx.insertPage(ctx.getCurrentPage()+1))">\n        Add Page\n    </button>\n    <button z-if="ctx.getConfig(\'showPageSelectorControls\')"\n        z-click="ctx.deletePage(ctx.getCurrentPage())">\n        Delete Page\n    </button>\n    <br>\n    <div z-sort="ctx.movePage($from,$to)">\n        <div z-for="page in ctx.getPageCount()"\n            draggable="TRUE"\n            z-sortable\n            z-page="page"\n            z-width="130"\n            z-height="130"\n            z-click="ctx.setCurrentPage(page)"\n            z-selected="page==ctx.getCurrentPage()">\n        </div>\n    </div>\n</div>\n'
    };
    var nf = {
        style: ".zwibbler-property-panel {\n    width: 200px;\n    background: #f5f5f5;\n    display:flex;\n    flex-flow: column nowrap;\n    overflow-y: scroll;\n    padding: 10px;\n    font-family: sans-serif;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none; \n     -khtml-user-select: none; \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none;     \n}\n\n.zwibbler-property-panel h3 {\n    margin-bottom: 0.5em;\n}\n\n.zwibbler-property-panel button {\n    font-family: inherit;\n    font-size: 100%;\n    padding: 5px;\n    display: block;\n    background-color: white;\n    color: black;\n    border: none;\n    border-radius: 2px;\n    border-bottom: 2px solid #ddd;\n    width: 100%;\n}\n\n.zwibbler-property-panel button[tool] {\n    display: inline-block;\n    width: 60px;\n    height: 60px;\n    font-size: 30px;\n}\n\n.zwibbler-property-panel button.zwibbler-option {\n    border: 0;\n    padding: 10px;\n    border-radius: 3px;\n    background: transparent;\n    text-align: left;\n}\n\n.zwibbler-property-panel button.selected {\n    background: #9fb3e7;\n}\n\n.zwibbler-property-panel button.hover {\n    background: #ddd;\n}\n\n.zwibbler-property-panel hr {\n    border: none;\n    border-top: 1px solid #ccc;\n}\n\n.zwibbler-property-panel select {\n    width: 100%;\n}\n\n.zwibbler-property-panel .colour-picker {\n    padding: 10px 0;\n}\n\n.zwibbler-property-panel [swatch] {\n    border: 1px solid black;\n    display: inline-block;\n    height: 2em;\n    width: 4em;\n    vertical-align:middle;\n    margin-right: 10px;\n}\n",
        Kj: '<div class="zwibbler-property-panel">\n<h3>Shape options</h3>\n<div z-if="summary.empty">\n    There are no selected shapes.\n</div>\n<div z-has="AnyNode">\n    <button z-click="deleteNodes()">Delete</button>                    \n    <button z-click="bringToFront()">\n        Move to front\n    </button>\n    <button z-click="sendToBack()">\n        Send to back\n    </button>\n</div>\n<div z-has="fontName">\n    <h3>Font</h3>\n    <select z-property="fontName">\n        <option z-for="font in getConfig(\'fonts\')" z-text="font" z-bind:value="font"></option>\n    </select>\n</div>\n<div z-has="fontSize">\n    <h3>Font size</h3>\n    <select z-property="fontSize">\n        <option value="8">8</option>\n        <option value="10">10</option>\n        <option value="12">12</option>\n        <option value="16">16</option>\n        <option value="20">20</option>\n        <option value="24">24</option>\n        <option value="50">50</option>\n    </select>\n</div>\n<div z-has="fillStyle|strokeStyle|background">\n    <h3>Colours</h3>\n    <div class="colour-picker" z-has="fillStyle">\n        <div swatch z-property="fillStyle" z-colour></div>\n        Fill style\n    </div>\n    <div class="colour-picker" z-has="strokeStyle">\n        <div swatch z-property="strokeStyle" z-colour></div>\n        Outline\n    </div>\n    <div class="colour-picker" z-has="background">\n        <div swatch z-property="background" z-colour></div>\n        Background\n    </div>\n</div>\n<div z-has="arrowSize">\n    <h3>Arrows</h3>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="0">None</button>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="10">Small</button>\n    <button class="zwibbler-option" z-property="arrowSize" z-value="15">Large</button>\n    <hr>\n    <button class="zwibbler-option" z-property="arrowStyle" z-value="solid">Solid</button>\n    <button class="zwibbler-option" z-property="arrowStyle" z-value="open">Open</button>\n</div>\n<div z-has="lineWidth">\n        <h3>Line width</h3> \n        <select z-property="lineWidth">\n            <option value="0">None</option>\n            <option value="1">1</option>\n            <option value="2">2</option>\n            <option value="4">4</option>\n            <option value="8">8</option>\n        </select>\n    </div>\n<div z-has="dashes">\n    <h3>Line style</h3>\n    <button class="zwibbler-option" z-property="dashes" z-value="">Solid</button>\n    <button class="zwibbler-option" z-property="dashes" z-value="3,3">Dots</button>\n    <button class="zwibbler-option" z-property="dashes" z-value="8,2">Dashes</button>\n</div>\n<div z-has="opacity">\n    <h3>Opacity</h3>\n    <input z-property="opacity" type="range" min="0.1" max="1.0" step="0.05">\n</div>              \n'
    };
    var of = function(c) {
        function a(a) {
            var b = c.call(this) || this;
            b.xa = a;
            b.path = new N;
            b.node = null;
            return b
        }
        __extends(a, c);
        a.prototype.beginPath = function() {
            this.path = new N;
            this.node = 0
        };
        a.prototype.closePath = function() {
            this.path.close()
        };
        a.prototype.moveTo = function(a, c) {
            this.path.moveTo(a, c)
        };
        a.prototype.lineTo = function(a, c) {
            this.path.lineTo(a, c)
        };
        a.prototype.quadraticCurveTo = function(a, c, e, h) {
            this.path.quadraticCurveTo(a, c, e, h)
        };
        a.prototype.bezierCurveTo = function(a, c, e, h, f, k) {
            this.path.bezierCurveTo(a, c, e, h, f, k)
        };
        a.prototype.fill = function() {
            this.Ao(!0)
        };
        a.prototype.stroke = function() {
            this.Ao(!1)
        };
        a.prototype.Ao = function(a) {
            this.node || (this.node = this.xa.createNode("PathNode", {
                da: this.path.Ib(),
                qa: this.qa.clone(),
                lineWidth: this.lineWidth
            }));
            a ? this.xa.Ob(this.node, "fillStyle", this.fillStyle) : this.xa.Ob(this.node, "strokeStyle", this.strokeStyle)
        };
        a.prototype.fillText = function(a, c, e) {
            this.Bo(a, c, e, !0)
        };
        a.prototype.strokeText = function(a, c, e) {
            this.Bo(a, c, e, !1)
        };
        a.prototype.Bo = function(a, c, e, h) {
            c = this.qa.multiply(new Fc(c, e));
            e = this.ef(this.font);
            a = {
                text: a,
                matrix: c,
                fontName: e.fontFamily,
                fontSize: e.fontSize,
                italic: "italic" === e.fontStyle,
                bold: "bold" === e.fontWeight
            };
            h ? a.fillStyle = this.fillStyle : a.strokeStyle = this.strokeStyle;
            this.xa.createNode("TextNode", a)
        };
        a.prototype.cl = function() {
            throw Error("drawImage: not implented");
        };
        a.prototype.measureText = function(a) {
            var b = document.createElement("canvas").getContext("2d");
            b.font = this.font;
            return b.measureText(a)
        };
        a.prototype.clip = function() {
            throw Error("clip: not implemented.");
        };
        a.prototype.fl = function() {
            return {}
        };
        a.prototype.il = function() {};
        return a
    }(ge);
    var pf = function() {
        function c() {
            var a = this;
            this.sw = new Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            })
        }
        c.prototype.then = function(a, b) {
            return this.sw.then(a, b)
        };
        return c
    }();

    function qf(c, a, b, d) {
        c.fillStyle = "#ffffff";
        c.fillRect(a, b, d, d);
        c.beginPath();
        c.strokeStyle = "#000000";
        c.moveTo(a, b);
        c.lineTo(a + d, b + d);
        c.moveTo(a + d, b);
        c.lineTo(a, b + d);
        c.stroke()
    }

    function rf(c, a, b, d) {
        for (var e, h = 0; h < d; h += 5) {
            e = 0 === h / 5 % 2;
            for (var f = 0; f < d; f += 5) c.fillStyle = e ? "#000000" : "#ffffff", e = !e, c.fillRect(a + f, b + h, 5, 5)
        }
        e = c.createLinearGradient(a + d, b + d, a, b);
        e.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        e.addColorStop(1, "rgba(255, 255, 255, 0.0)");
        c.fillStyle = e;
        c.fillRect(a, b, d, d)
    }

    function sf(c, a, b) {
        function d(a) {
            a.addEventListener("click contextmenu", function(b) {
                l.call(self, a.be("backgroundColor"), 0 === b.button || "contextmenu" !== b.type);
                b.preventDefault()
            })
        }

        function e(a, b) {
            return B("div").Wa({
                width: b + "px",
                height: b + "px",
                display: "inline-block"
            }).Tc(a)
        }

        function h(a, b) {
            var c = document.createElement("canvas");
            c.width = a;
            c.height = a;
            b(c.getContext("2d"), 0, 0, a);
            var d = e(f, a);
            d.fa.appendChild(c);
            return d
        }
        void 0 === b && (b = {});
        var f = B.Ub(c),
            k;
        if (f) {
            var l = b.onColour || b.onColor;
            c = h(a, qf);
            c.addEventListener("click contextmenu", function(a) {
                if ("click" === a.type || "contextmenu" === a.type) l.call(self, "transparent", 0 === a.button), a.preventDefault()
            });
            c = h(a, rf);
            c.addEventListener("click contextmenu", function(a) {
                if ("click" === a.type || "contextmenu" === a.type) {
                    if (b.onOpacity) b.onOpacity(.5, 0 === a.button);
                    a.preventDefault()
                }
            });
            for (k = 0; 1 >= k; k += 1 / 13) {
                var n = (new r(r.bf, [0, 0, k, 1])).toString();
                d(e(f, a).Wa({
                    backgroundColor: n
                }))
            }
            for (k = .3; 1 >= k; k += .7 / 14)
                for (c = 0; 360 > c; c += 22.5) n = (new r(r.bf, [c, .7, k, 1])).toString(), d(e(f, a).Wa({
                    backgroundColor: n
                }));
            for (c = 0; 360 > c; c += 22.5) n = (new r(r.bf, [c, 1, 1, 1])).toString(), d(e(f, a).Wa({
                backgroundColor: n
            }))
        }
    }(function() {
        function c(a, b) {
            var c = this;
            this.mk = null;
            var e = document.createElement("div");
            e.style.width = "320px";
            e.style.lineHeight = "0";
            e.style.position = "absolute";
            b.appendChild(e);
            sf(e, 20, {
                onColour: function(a, b) {
                    c.mk && c.mk.resolve({
                        type: "colour",
                        value: a,
                        fill: b
                    })
                }
            });
            this.Kl = ec(e);
            a.add(function() {
                c.Kl && c.Kl.destroy()
            })
        }
        c.prototype.show = function(a, b) {
            this.mk = new pf;
            this.Kl.show(a, b, !0);
            return this.mk
        };
        return c
    })();
    var S = x.create("CONTEXT");

    function T(c) {
        return "number" === typeof c ? c.toString(36) : c
    }

    function tf(c) {
        if (c instanceof Array) {
            for (var a = [], b = 0; b < c.length; b++) a.push(T(c[b]));
            return a
        }
        return [T(c)]
    }
    var V = function() {
        function c(a, b) {
            var c = this;
            this.Ya = {};
            this.Tl = {};
            this.ov = 0;
            this.Cm = null;
            this.eg = {};
            this.Jd = this.kg = null;
            this.$i = !1;
            this.hj = new bc;
            this.zp = new cc;
            this.$b = null;
            this.globals = {};
            this.Qo = !1;
            this.bn = 0;
            this.Bg = null;
            this.ep = "";
            this.ea = new hf(this, a, b);
            this.dw();
            var e = this;
            P.tm.push(this);
            this.ea.wa.add(function() {
                S("Running ZwibblerContext destructor");
                c.Fk();
                delete a.zwibbler;
                delete e.Ya;
                delete e.ea;
                delete e.kg;
                for (var b = P.tm, d = 0; d < b.length; d++)
                    if (b[d] === e) {
                        b.splice(d, 1);
                        break
                    }
                c.Jd && c.Jd.stop()
            });
            this.pa("document-changed", function(a) {
                c.summary = c.Ah();
                a.remote || c.$b && !c.$b.empty() || (c.$b = c.ea.view.aa.kb.Zl(), c.$b.empty() ? S("No outstanding changes to send...") : (S("Submitting local changes: %s", c.$b.getData()), c.na("local-changes", c.$b.getData())))
            });
            this.ea.ga.pa("latency", function(a) {
                c.Jd && c.Jd.hx(a)
            });
            this.ks();
            this.pa("selected-nodes", function() {
                c.summary = c.Ah()
            });
            this.pa("tool-changed", function() {
                c.summary = c.Ah()
            });
            this.summary = this.Ah();
            this.ui(uf, "left", "showToolbar");
            this.ui(mf, "right", "showPageSelector");
            this.ui(nf, "right", "showPropertyPanel");
            this.ui(mb, "bottom", "showColourPanel")
        }
        c.prototype.ml = function(a, b) {
            this.ea.ml(a, b)
        };
        c.prototype.ah = function(a, b) {
            void 0 === b && (b = !1);
            S("Add remote changes: %s reset=%s", a, b);
            b && (this.ea.Wf(new ff(!0, this.ea.ce(), this.ea.ci)), this.$b = null);
            this.ea.view.aa.kb.ah(a)
        };
        c.prototype.oc = function(a, b) {
            O.oc(a, b);
            O.digest();
            this.ea.wa.add(function() {
                S("DESTROYING A PANEL");
                O.detach(b)
            });
            if (!this.Qo && a instanceof c || a.ctx instanceof c) this.Qo = !0, this.pa("tool-changed", function() {
                return O.digest()
            }), this.ea.ga.pa("update", function() {
                return O.digest()
            }), this.pa("document-changed", function() {
                return O.digest()
            }), this.pa("selected-nodes", function() {
                return O.digest()
            });
            this.resize()
        };
        c.prototype.digest = function(a) {
            O.digest(a)
        };
        c.prototype.ns = function() {
            this.za("abortTransaction is not implemented. Please contact support.")
        };
        c.prototype.Sc = function(a, b, c, e, h, f) {
            switch (f) {
                case "scale":
                case "rotate":
                case "translate":
                    var d = f;
                    break;
                default:
                    if ("function" === typeof f) {
                        d = "click";
                        var l = f
                    } else {
                        this.za('addSelectionHandle: action must be "scale", "rotate", "translate", or a function');
                        return
                    }
            }
            this.ea.view.Sc(a, b, c, e, h, d, l)
        };
        c.prototype.Di = function(a, b) {
            var c = this.ea.view.aa.Ja(T(a));
            if (c)
                if (c instanceof ve) {
                    var e = tf(b);
                    this.Od(function(a) {
                        a.Di(c.id, e)
                    })
                } else S("parent is not a group");
            else S("addToGroup: Bad node id")
        };
        c.prototype.ol = function(a) {
            this.ea.language.ol(a)
        };
        c.prototype.ws = function(a, b, c) {
            if (!this.va()) return this.Qj(this.Wb(), b, c)
        };
        c.prototype.$g = function(a, b, c) {
            this.ea.$g(a, b, c)
        };
        c.prototype.Va = function() {
            this.ea.view.aa.Va()
        };
        c.prototype.Ji = function() {
            this.Va()
        };
        c.prototype.Us = function(a) {
            void 0 === a && (a = this.Wc());
            this.va() || this.ea.view.Uc(0, tf(a))
        };
        c.prototype.Rd = function() {
            return this.va() ? !1 : this.ea.view.aa.Rd()
        };
        c.prototype.Sd = function() {
            return this.va() ? !1 : this.ea.view.aa.Sd()
        };
        c.prototype.cb = function() {
            this.ea.view.cb();
            this.ea.view.Tb();
            this.ea.view.ia()
        };
        c.prototype.bt = function() {
            this.ea.zl()
        };
        c.prototype.ct = function(a, b) {
            if (this.va()) return !1;
            this.Hg(a, !b)
        };
        c.prototype.ua = function(a) {
            void 0 === a && (a = !1);
            this.ea.view.aa.ua(a)
        };
        c.prototype.gt = function() {
            this.ua(!0)
        };
        c.prototype.Pi = function() {
            this.ua(!1)
        };
        c.prototype.mf = function(a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = this.Wc());
            "boolean" !== typeof a && this.za("First parameter of copy() must be true/false");
            return this.ea.view.mf(a, tf(b))
        };
        c.prototype.ip = function() {
            function a(a) {
                for (var c = 30; 100 > c; c += 20) a.values[2] = c / 100, b.push(a.toString())
            }
            var b = "rgba(0,0,0,0.0) rgba(0,0,0,0.5) #000000 #ffffff #000088 #008800 #008888 #880000 #880088 #884400 #888888 #444444 #0000ff #00ff00 #00ffff #ff0000 #ff00ff #ffff00".split(" ");
            a(new r(r.bf, [0, 0, 0, 1]));
            for (var c = 0; 720 > c; c += 35) {
                var e = new r(r.bf, [c, .5, 0, 1]);
                a(e)
            }
            return b
        };
        c.prototype.qt = function(a, b) {
            return this.createNode("DataNode", a, b)
        };
        c.prototype.rt = function(a) {
            if (this.va()) return !1;
            var b = 0;
            this.Od(function(c) {
                b = parseInt(c.group(tf(a)), 36)
            });
            return b
        };
        c.prototype.Qb = function(a) {
            void 0 === a && (a = {});
            var b = {};
            if (a instanceof Array) return a.concat();
            if (!(a instanceof Object)) return a;
            for (var c in a)
                if (a.hasOwnProperty(c)) {
                    var e = a[c];
                    "matrix" === c && ("[object Array]" === Object.prototype.toString.apply(e) && "Matrix" === e[0] ? (e.splice(0, 1), e = new J(e)) : e instanceof J || (e = new J(e)));
                    b[c] = e
                }
            return b
        };
        c.prototype.tt = function(a) {
            return x.create(a)
        };
        c.prototype.createNode = function(a, b, c) {
            S("createNode(%s)", a);
            pc(a) || this.za("createNode: node type must be string");
            b = this.Qb(b);
            return c ? parseInt(this.ea.createNode(a, b, T(c)), 36) : parseInt(this.ea.createNode(a, b), 36)
        };
        c.prototype.st = function(a, b, c) {
            if (!P.Be[a]) throw Error("Component " + a + " not registered");
            var d = P.Be[a].sa;
            if (d)
                for (var h in d) h in b || (b[h] = d[h]);
            b.$component = a;
            return this.createNode("HTMLNode", b, c)
        };
        c.prototype.Vi = function(a) {
            return this.ea.Vi(a)
        };
        c.prototype.ui = function(a, b, c) {
            var d = this,
                h;
            this.ea.ga.pa(c, function(c) {
                c ? (h || (a.style && P.Ne(a.style), c = document.createElement("div"), c.innerHTML = a.Kj, h = c.firstChild, d.oc(d, h), a.controller && a.controller(d)), d.ea.$g(1, b, h)) : h && d.ea.ai(h)
            })
        };
        c.prototype.xt = function(a, b) {
            var c = B.Ub(a);
            if (c) {
                "object" === typeof b && "[object Array]" === Object.prototype.toString.apply(b) || this.za("createToolbar: second parameter must be array");
                P.Ne("a.zwibbler-button {\n            background-repeat: no-repeat;\n            background-position: center;\n            display: inline-block;\n            overflow: hidden;\n        }");
                for (var e = this, h = function(a, b) {
                        b.addEventListener("click", function(b) {
                            a.onclick.call(this, e, b)
                        })
                    }, f = 0; f < b.length; f++) {
                    var k = b[f],
                        l = B("a").pd("zwibbler-button").fa;
                    l.setAttribute("href", "javascript:void(0)");
                    k.toolName && B(l).pd(k.toolName);
                    k.onclick && h(k, l);
                    k.title && l.setAttribute("title", k.title);
                    k.background ? l.style.background = k.background : k.image && (l.style.backgroundImage = "url(" + k.image + ")");
                    k.html && (l.innerHTML = k.html);
                    c.appendChild(l)
                }
                var n;
                this.pa("tool-changed", function(a) {
                    n && n.classList.remove("zwibbler-selected");
                    (n = c.querySelector("." + a)) && n.classList.add("zwibbler-selected")
                })
            } else this.za("createToolbar: Could not convert first parameter to an HTML element")
        };
        c.prototype.El = function(a) {
            if (!this.ea.El(a)) return this.za("createShape needs an array of at least 6 numbers"), null
        };
        c.prototype.Hl = function() {
            if (this.va()) return !1;
            var a = this.ea.view.mf(!1, this.ea.view.Jc(!0));
            this.mp();
            return a
        };
        c.prototype.Xa = function() {
            this.ea.Xa();
            this.hj.Xa();
            this.zp.Xa();
            for (var a in this) this.hasOwnProperty(a) && delete this[a];
            this.$i = !0
        };
        c.prototype.Od = function(a) {
            this.ea.view.aa.transaction(a)
        };
        c.prototype.Wd = function(a) {
            this.Sb(a)
        };
        c.prototype.es = function(a) {
            for (var b = 0; b < a.length; b++) this.ea.view.aa.Ja(a[b], !1) || (a.splice(b, 1), --b);
            return 0 < a.length
        };
        c.prototype.Sb = function(a) {
            void 0 === a && (a = this.Wc());
            if (this.va()) return !1;
            S("deleteNodes()");
            var b = tf(a);
            this.es(b) && this.Od(function(a) {
                return a.Sb(b)
            })
        };
        c.prototype.yt = function() {
            var a = this;
            if (this.va()) return !1;
            1 < this.ov && this.za("deletePage is not implemented inside transactions. Please contact support.");
            if (1 === this.Wb()) this.Od(function(b) {
                return b.Sb(tf(a.Wl()))
            });
            else {
                var b = this.ea.view.aa.zh().id;
                this.Od(function(a) {
                    return a.Sb([b])
                })
            }
        };
        c.prototype.mp = function() {
            if (this.va()) return !1;
            this.ea.view.oh()
        };
        c.prototype.Ce = function() {
            1 === arguments.length && !1 === arguments[0] && this.ea.view.aa.qq();
            return this.ea.view.aa.Ce()
        };
        c.prototype.download = function(a, b, c, e) {
            void 0 === e && (e = 0);
            "jpeg" === a && (a = "jpg");
            "pdf" === a || "svg" === a || "png" === a || "jpg" === a || "bmp" === a || "zwibbler3" === a ? (a = "zwibbler3" === a ? gf.si(this.ea.view.aa, a, "data-uri") : this.save(a, c, e), this.zp.Ow(a, b)) : S("unsupported format for download: %s", a)
        };
        c.prototype.ia = function(a, b) {
            void 0 === b && (b = {});
            var c = b.page || 0,
                e = this.ea.view.aa.ab,
                h = this.ea.view.aa.Xb();
            this.ea.view.aa.wc(c);
            this.ea.view.Xd(a, 0, 0, h.width, h.height);
            this.ea.view.aa.ia(a);
            this.ea.view.aa.wc(e)
        };
        c.prototype.Ht = function(a) {
            if (this.va()) return !1;
            var b = this.ea.view.aa.eb(T(a), !1);
            b ? b.Fh() ? (a = this.ea.view.Gn({})) && a.zn(b, b.rect.x, b.rect.y) : S("editNodeText: node %s (%s) cannot contain text.", a, b.type()) : S("editNodeText: ExtNodeID %s does not exist.", a)
        };
        c.prototype.duplicate = function() {
            if (this.va()) return !1;
            this.ea.view.duplicate()
        };
        c.prototype.dl = function(a, b, c) {
            var d = this;
            if (!(this.$i || this.Tl[a] || this.hs(a))) {
                var h = function() {
                    if (!d.$i && (d.Tl[a] = !1, a in d.Ya))
                        for (var c = 0, e = d.Ya[a]; c < e.length; c++) e[c].apply(null, b)
                };
                "once" === c && (this.Tl[a] = !0);
                "now" === c ? h() : setTimeout(h, 0);
                return this
            }
        };
        c.prototype.na = function(a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            return this.dl(a, b, "normal")
        };
        c.prototype.fd = function(a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            return this.dl(a, b, "now")
        };
        c.prototype.lg = function(a) {
            for (var b = [], c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            return this.dl(a, b, "once")
        };
        c.prototype.zx = function(a) {
            this.eg[a] = a in this.eg ? this.eg[a] + 1 : 1
        };
        c.prototype.hs = function(a) {
            return a in this.eg && 0 < this.eg[a] ? (S("Skipped %s event", a), --this.eg[a], !0) : !1
        };
        c.prototype.focus = function(a, b) {
            void 0 === a && (a = !1);
            void 0 === b && (b = null);
            this.ea.mx(b);
            a ? this.ea.qn("text" === this.vh()) : this.ea.focus()
        };
        c.prototype.bu = function(a) {
            this.ea.view.aa.sc(function(b) {
                return a(parseInt(b.id, 36))
            }, this.Je())
        };
        c.prototype.Vt = function(a) {
            a = this.Ap(a);
            return a.length ? a[0] : null
        };
        c.prototype.Ap = function(a) {
            a = this.ea.view.aa.Wt(a);
            for (var b = [], c = 0; c < a.length; c++) b.push(a[c].id);
            return b
        };
        c.prototype.Zt = function(a, b, c) {
            if (this.va()) return !1;
            if (3 === arguments.length)
                if ("number" !== typeof b || "number" !== typeof c) this.za("flip: 2nd and 3rd args must be numbers.");
                else {
                    var d = new G(b, c);
                    this.ea.view.Cp(a / 180 * Math.PI, d)
                }
            else this.ea.view.Cp(a / 180 * Math.PI)
        };
        c.prototype.th = function(a, b, c, e) {
            if (this.va()) return !1;
            a = this.Lo(tf(a));
            "number" === typeof c && "number" === typeof e ? (c = new G(c, e), this.ea.view.th(a, b / 180 * Math.PI, c)) : this.ea.view.th(a, b / 180 * Math.PI)
        };
        c.prototype.Gp = function(a, b, c) {
            var d = this;
            void 0 === c && (c = {});
            c.onColour = c.onColour || c.onColor || function(a, b) {
                d.Hg(a, b)
            };
            c.onOpacity = c.onOpacity || function(a, b) {
                d.qr(a, b)
            };
            return sf(a, b, c)
        };
        c.prototype.ng = function() {
            return this.ea.view.ng()
        };
        c.prototype.Wl = function() {
            var a = [];
            this.ea.view.aa.sc(function(b) {
                a.push(parseInt(b.id, 36))
            }, this.Je());
            return a
        };
        c.prototype.lu = function() {
            return this.ea.mu()
        };
        c.prototype.Xl = function(a) {
            return this.df(this.ea.view.Xl(tf(a)))
        };
        c.prototype.Zd = function(a) {
            pc(a) || this.za("getConfig: Expected string");
            return this.ea.ga.get(a)
        };
        c.prototype.getContext = function() {
            return new of (this)
        };
        c.prototype.Je = function() {
            return this.ea.view.aa.ab
        };
        c.prototype.pu = function() {
            return this.ea.view.rj()
        };
        c.prototype.qu = function() {
            return this.ea.view.yj()
        };
        c.prototype.vh = function() {
            return this.ea.view.vh()
        };
        c.prototype.ru = function(a) {
            a = this.ea.view.aa.Ja(T(a));
            var b = null;
            a && "CustomNode" === a.type() && (b = a.Ua);
            return b
        };
        c.prototype.Lp = function(a, b) {
            var c = this.ea.view.Hd(a, b);
            return {
                x: c.x,
                y: c.y
            }
        };
        c.prototype.uu = function(a) {
            return this.ea.view.aa.ja(a)
        };
        c.prototype.xh = function() {
            var a;
            this.Zd("pageView") && (a = vf);
            return this.df(this.ea.view.aa.Xb(this.Je(), a))
        };
        c.prototype.Ub = function() {
            return this.ea.ce()
        };
        c.prototype.rj = function() {
            return this.ea.view.rj()
        };
        c.prototype.Fu = function() {
            for (var a = [], b = 0, c = this.ea.view.aa.mm(); b < c.length; b++) {
                var e = c[b];
                a.push({
                    cid: e.Pa,
                    ts: e.dc
                })
            }
            return a
        };
        c.prototype.em = function(a) {
            return this.ea.ga.em(a)
        };
        c.prototype.Ju = function(a) {
            return this.ea.language.get(a)
        };
        c.prototype.df = function(a) {
            return {
                x: a.x,
                y: a.y,
                width: a.width,
                height: a.height
            }
        };
        c.prototype.xi = function(a) {
            "object" !== typeof a && this.za("Error: Rectangle object expected.");
            a = new H(a.x || 0, a.y || 0, a.width || 0, a.height || 0);
            a.Yq();
            return a
        };
        c.prototype.xu = function() {
            return this.df(this.ea.view.aa.Ip())
        };
        c.prototype.Du = function(a) {
            var b = this.ea.view.aa.eb(T(a));
            return null === b ? (S("getGroupParent: No such node %s", a), null) : b.vm() && b.parent ? parseInt(b.parent.id, 36) : null
        };
        c.prototype.Cu = function(a) {
            var b = [],
                c = this.ea.view.aa.Ja(T(a));
            if (!(c && c instanceof ve)) return S("getGroupMembers: Error node %s is not a group.", a), b;
            if (c.children)
                for (a = 0, c = c.children; a < c.length; a++) b.push(parseInt(c[a].id, 36));
            return b
        };
        c.prototype.Hu = function(a, b) {
            return this.tj(a, b)
        };
        c.prototype.Lu = function() {
            var a = [],
                b = {};
            this.ea.view.aa.rc(!1, function(d) {
                !(c = d.Vc()) || c in b || (b[c] = 1, a.push(c))
            });
            var c = this.ng();
            c in b || a.push(c);
            return a
        };
        c.prototype.Ku = function(a) {
            var b = [];
            this.ea.view.aa.rc(!1, function(c) {
                c.Vc() === a && b.push(parseInt(c.id, 36))
            });
            return b
        };
        c.prototype.Mu = function(a, b, c) {
            var d = this.ea.view.aa.eb(T(a));
            if (null === d) return this.za("Error: node %s does not exist", a), null;
            a = this.ea.view.Sv(d, b, c);
            return {
                x: a.x,
                y: a.y
            }
        };
        c.prototype.ae = function(a) {
            return this.ea.view.aa.ae(T(a))
        };
        c.prototype.tj = function(a, b) {
            return this.ea.tj(T(a), b)
        };
        c.prototype.Nu = function(a) {
            a = tf(a);
            for (var b = null, c = 0; c < a.length; c++) {
                var e = a[c],
                    h = this.ea.view.aa.eb(e);
                null === h ? this.za("Error: node %s does not exist", e) : b ? b.ni(h.rect) : b = h.rect.clone()
            }
            b || (b = new H(0, 0, 0, 0));
            return this.df(b)
        };
        c.prototype.Ou = function(a) {
            var b = this.ea.view.aa.eb(T(a));
            if (null === b) return this.za("Error: node %s does not exist", a), null;
            a = b.Ka().jc();
            return {
                x: a.x,
                y: a.y
            }
        };
        c.prototype.Pu = function(a) {
            var b = this.ea.view.aa.eb(T(a));
            if (null === b) this.za("Error: node %s does not exist", a);
            else return a = b.Ka(), [a.m11, a.m21, a.m12, a.m22, a.Ba, a.Ca]
        };
        c.prototype.Qu = function(a) {
            a = this.ea.view.aa.Ja(T(a));
            var b = "";
            a && (b = a.type(), "CustomNode" === b && (b = a.ja("nodeType")));
            return b
        };
        c.prototype.Ru = function(a, b) {
            var c = this.ea.view.aa.wb(a, b, this.ea.view.Sa);
            return c ? c.id : this.ea.view.Oq(a, b) && (c = this.Wc(), c.length) ? c[0] : null
        };
        c.prototype.Vu = function(a, b) {
            for (var c = [], e = 0, h = this.ea.view.aa.mv(a, b); e < h.length; e++) c.push(parseInt(h[e].id, 36));
            return c
        };
        c.prototype.Wb = function() {
            return this.ea.view.aa.Wb()
        };
        c.prototype.uj = function(a) {
            return (a = this.ea.view.aa.zh(a)) ? parseInt(a.id, 36) : null
        };
        c.prototype.Sp = function(a) {
            return this.df(this.ea.view.aa.Xb(a, vf))
        };
        c.prototype.vj = function(a) {
            var b = this.ea.view.aa.eb(T(a), !1);
            if (!b || "PathNode" !== b.type()) return null;
            a = b.vj().clone().Ye();
            var c = [];
            b.Ka();
            for (b = 0; b < a.length; b++) {
                var e = a[b];
                c.push(e.x);
                c.push(e.y)
            }
            return c
        };
        c.prototype.Yu = function(a) {
            a = this.ea.view.aa.Ja(T(a), !1);
            if (!a || "PathNode" !== a.type()) return null;
            a = a.vj();
            for (var b = [], c = [], e = 0; e < a.da.length;) {
                switch (a.da[e]) {
                    case K.Bc:
                        c = [{
                            x: a.da[e + 1],
                            y: a.da[e + 2]
                        }];
                        b.push(c);
                        break;
                    case K.Ac:
                        c.push({
                            x: a.da[e + 1],
                            y: a.da[e + 2]
                        })
                }
                e += K.Cc[a.da[e]]
            }
            return b
        };
        c.prototype.Jp = function() {
            return this.ea.view.scale
        };
        c.prototype.bm = function() {
            var a = this.ea.view.bm();
            return a ? parseInt(a.id, 36) : 0
        };
        c.prototype.Zu = function(a, b, c, e) {
            var d = this.ea.view.Ll(a, b);
            if (void 0 === c || void 0 === e) return {
                x: d.x,
                y: d.y
            };
            a = this.ea.view.Ll(a + c, b + e);
            return this.df(new H(d.x, d.y, a.x - d.x, a.y - d.y))
        };
        c.prototype.av = function() {
            return this.ea.view.wd
        };
        c.prototype.yj = function() {
            return this.ea.view.yj()
        };
        c.prototype.qj = function(a, b) {
            var c = this.ea.view.aa.eb(T(a), !1);
            return c && c.Le() ? c.qj(b) : null
        };
        c.prototype.bx = function(a, b, c) {
            var d = this.ea.view.aa.Ja(T(a), !1);
            if (!d) return S("setEditHandle: node %s doesn't exist.", a), !1;
            if ("PathNode" !== d.type()) return S("setEditHandle: node %s is not a PathNode.", a), !1;
            d = d.ja("commands");
            d = M.$r(d, b, c);
            if (!d) return S("setEditHandle: failed"), !1;
            this.Ob(a, "commands", d);
            return !0
        };
        c.prototype.Wc = function(a) {
            void 0 === a && (a = !1);
            a = this.ea.view.Jc(a);
            for (var b = [], c = 0; c < a.length; c++) b.push(parseInt(a[c], 36));
            return b
        };
        c.prototype.Ah = function(a) {
            function b(a, b) {
                var d = c.properties[a];
                void 0 !== b && (c.properties[a] = d !== b && void 0 !== d ? null : b);
                c.empty = !1
            }
            void 0 === a && (a = this.Wc());
            for (var c = {
                    properties: {},
                    types: {},
                    nodes: [],
                    empty: !0
                }, e = this.ea.ga.get("allowTextInShape"), h = 0; h < a.length; h++) {
                var f = this.ea.view.aa.Ja(T(a[h]), !1);
                if (f) {
                    var k = f.type();
                    c.types[k] = !0;
                    c.types.AnyNode = !0;
                    c.empty = !1;
                    c.nodes.push(parseInt(f.id, 36));
                    "PathNode" === k && (k = f.ja("closed") ? "PathNode-closed" : "PathNode-open", c.types[k] = !0);
                    f = f.Ic();
                    for (var l in f) f.hasOwnProperty(l) && "matrix" !== l && ("BrushNode" !== k || "fillStyle" !== l) && ("PathNode-open" !== k || "fontSize" !== l && "fontName" !== l && "fillStyle" !== l) && ("PathNode-closed" !== k || (e || "fontSize" !== l && "fontName" !== l) && "arrowSize" !== l && "arrowStyle" !== l) && b(l, f[l])
                }
            }!c.nodes.length || "opacity" in c.properties || (c.properties.opacity = 1);
            if (this.ea.view.ra.Aj) {
                a = this.ea.view.ra.Aj();
                for (var n in a) b(n, a[n])
            }
            return c
        };
        c.prototype.ev = function() {
            return this.df(this.ea.view.zf())
        };
        c.prototype.gv = function(a) {
            this.ea.view.aa.om(a);
            this.ir("readOnly", this.ea.view.aa.locked())
        };
        c.prototype.za = function(a) {
            for (var b = 1; b < arguments.length; b++);
            b = arguments[0].split("%s");
            for (var c = [], e = 0; e < b.length; e++) c.push(b[e]), e < b.length - 1 && c.push(JSON.stringify(arguments[e + 1]));
            b = c.join("");
            S(b);
            console.log(b);
            throw Error(b);
        };
        c.prototype.hw = function(a) {
            a || (a = {});
            return this.hj.open({
                accept: a.accept,
                format: a.format
            }).then(function(a) {
                return a.data
            })
        };
        c.prototype.qv = function() {
            var a = this;
            if (this.va()) return !1;
            this.hj.open({
                accept: "image/*",
                format: "data-uri"
            }).then(function(b) {
                a.createNode("ImageNode", {
                    url: b.data,
                    xy: !0
                })
            })
        };
        c.prototype.Qj = function(a, b, c) {
            if (this.va()) return !1;
            var d = {};
            F(b) && F(c) && (d.width = b, d.height = c);
            this.Od(function(b) {
                return b.createNode("PageNode", d, b.root.id, a)
            });
            return a
        };
        c.prototype.wm = function(a) {
            return this.ea.view.aa.wm(a)
        };
        c.prototype.Ih = function(a) {
            a = this.ea.view.aa.eb(T(a));
            return null !== a && this.ea.view.Ih(a)
        };
        c.prototype.load = function(a, b) {
            void 0 === b && (b = a);
            var c = gf.Yg(b, this.ea.ce(), this.ea.ci);
            if (c) return this.Fk(), this.ea.Wf(c), !0;
            S("load(): Could not open file.");
            return !1
        };
        c.prototype.Wj = function(a) {
            var b = this;
            F(a) ? (this.Cm && clearTimeout(this.Cm), this.Cm = setTimeout(function() {
                b.ea.view.Wj(!1)
            }, a), b.ea.view.Wj(!0)) : this.za("lockUpdates: Expected a number")
        };
        c.prototype.Lh = function(a) {
            if (!this.$b || a !== this.$b.getData()) throw Error("markChangesSent(): marked changes were not the ones sent");
            S("Mark changes sent!");
            this.ea.view.aa.kb.Lh(this.$b.Ke());
            this.$b = this.ea.view.aa.kb.Zl();
            this.$b.empty() ? S("No more changes to send.") : (S("Sending more changes"), this.na("local-changes", this.$b.getData()))
        };
        c.prototype.Hv = function() {
            if (this.va()) return !1;
            this.ea.view.Uc(3)
        };
        c.prototype.Iv = function(a, b) {
            if (this.va()) return !1;
            if (F(a) && F(b)) {
                var c = this.Wb();
                if (0 > a || a >= c) this.za("From page must be > 0 and less than getPageCount()");
                else if (0 > b || b >= c) this.za("From page must be > 0 and less than getPageCount()");
                else {
                    var e = this.uj(a);
                    null !== e && this.Od(function(a) {
                        return a.Uc([T(e)], 4, b)
                    })
                }
            } else this.za("movePage: needs two valid page numbers.")
        };
        c.prototype.Jv = function() {
            if (this.va()) return !1;
            this.ea.view.Uc(2)
        };
        c.prototype.tq = function() {
            this.Fk()
        };
        c.prototype.nextPage = function() {
            this.Vf(Math.min(this.Je() + 1, this.Wb() - 1))
        };
        c.prototype.pa = function(a, b) {
            "draw" === a ? this.kg = b : a in this.Ya ? this.Ya[a].push(b) : this.Ya[a] = [b];
            return this
        };
        c.prototype.$v = function(a) {
            "function" === typeof a || this.za("Error: onComplete needs a function argument.");
            this.ea.view.du(a)
        };
        c.prototype.dw = function() {
            var a = this.ea.ga.get("defaultPaperSize");
            S("onNewDocument()");
            "none" !== a && this.nn(a)
        };
        c.prototype.iw = function(a) {
            var b = this;
            return this.hj.open({
                accept: "." + a,
                format: "text"
            }).then(function(a) {
                if (b.load(a.data)) return b;
                throw Error("Could not open the file.");
            })
        };
        c.prototype.Xh = function(a) {
            if (this.va()) return !1;
            this.ea.view.Xh(a)
        };
        c.prototype.rw = function() {
            this.Vf(Math.max(this.Je() - 1, 0))
        };
        c.prototype.print = function(a, b) {
            var c = [],
                e;
            if ("number" === typeof a) c.push(a);
            else if (a instanceof Array)
                for (e = 0; e < a.length; e++)
                    if (F(a[e])) c.push(a[e]);
                    else {
                        this.za("print(): pageSpec must be array of numbers");
                        return
                    }
            else if (!a)
                for (e = 0; e < this.Wb(); e++) c.push(e);
            var h = b ? this.xi(b) : this.xi(this.xh());
            var f = this.Je(),
                k = document.createElement("canvas");
            k.width = h.width;
            k.height = h.height;
            var l = k.getContext("2d");
            l.translate(-h.x, -h.y);
            e = window.location.hostname;
            var n = window.open("about:blank", "_blank");
            n.document.write("<!DOCTYPE html><html><head><title>" + e + "</title></head><body>");
            for (e = 0; e < c.length; e++) this.Vf(c[e]), this.ea.view.Xd(l, h.x, h.y, h.width, h.height), this.ea.view.aa.ia(l), 0 < e ? n.document.write("<div style='page-break-before:always'>") : n.document.write("<div>"),
                n.document.write("<img style='width:100%' src='"), n.document.write(k.toDataURL()), n.document.write("'></div>"), l.clearRect(h.x, h.y, h.width, h.height);
            n.document.write("</body></html>");
            n.document.close();
            setTimeout(function() {
                n.focus();
                n.print();
                setTimeout(function() {
                    n.close()
                }, 1E3)
            }, 1E3);
            this.Vf(f)
        };
        /**
         * [zxfGetfile 获取P图文件]
         * @Author   ZhaoXianFang
         * @DateTime 2020-04-26
         * @param    {String}     type [类型 fiel:返回文件对象;base4:返回base64格式;blob:二进制文件]
         * @param    {Boole}      needReturn [是否直接返回 true:是;false:否]
         * @return   {[type]}          [description]
         */
        c.prototype.zxfGetfile = function(type = 'file',needReturn = false) {
            // console.log('获取文件',type,needReturn)
            // type = type=='file'?'file':'base64';
            switch(type) {
                 case 'file':
                    type = 'file';
                    break;
                 case 'base64':
                    type = 'base64';
                    break;
                 case 'blob':
                    type = 'blob';
                    break;
                 default:
                    type = 'file';
            }

            var c = [],e;
            for (e = 0; e < this.Wb(); e++) c.push(e);
            
            var h = this.xi(this.xh());
            var f = this.Je(),
                k = document.createElement("canvas");
            // base64转图片文件
            function base64toFile(dataurl, filename = 'zxf_canvas') {
              let arr = dataurl.split(',')
              let mime = arr[0].match(/:(.*?);/)[1]
              let suffix = mime.split('/')[1]
              let bstr = atob(arr[1])
              let n = bstr.length
              let u8arr = new Uint8Array(n)
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n)
              }
              return new File([u8arr], `${filename}.${suffix}`, {
                type: mime
              })
            }
            /**
            *Base64字符串转二进制
            */
            function base64toBlob(base64) {
                  var arr = base64.split(','),
                    mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]),
                    n = bstr.length,
                    u8arr = new Uint8Array(n);
                    while (n--) {
                        u8arr[n] = bstr.charCodeAt(n);
                    }
                    return new Blob([u8arr], {
                        type: mime
                    });
            }

            function getObjectURL(file) {
                var url = null;
                if (window.createObjectURL !== undefined) { // basic
                  url = window.createObjectURL(file);
                } else if (window.URL !== undefined) { // mozilla(firefox)
                  url = window.URL.createObjectURL(file);
                } else if (window.webkitURL !== undefined) { // webkit or chrome
                  url = window.webkitURL.createObjectURL(file);
                }
                return url;
              }

             

            k.width = h.width;
            k.height = h.height;
            var l = k.getContext("2d");
            l.translate(-h.x, -h.y);
            e = window.location.hostname;
            
            for (e = 0; e < c.length; e++) this.Vf(c[e]), 

            this.ea.view.Xd(l, h.x, h.y, h.width, h.height), 
            // this.ea.view.aa.ia(l), 
            this.ea.view.aa.ia(l);

        
            // console.log('图片内容0',type,k.toDataURL())
            console.log('图片内容0',type,k)
            console.log('图片内容',k.toDataURL())

            var imgFile;
            switch(type) {
                 case 'file':
                    imgFile = base64toFile(k.toDataURL()); 
                    break;
                 case 'base64':
                    imgFile = k.toDataURL(); 
                    break;
                 case 'blob':
                    imgFile = base64toBlob(k.toDataURL()); 
                    break;
                 default:
                    imgFile = base64toFile(k.toDataURL()); 
            }
            
            console.log('图片内容',imgFile,type)

            this.getCanvasFile && this.getCanvasFile.call(imgFile)
            if(!this.getCanvasFile || needReturn){
                return imgFile
            }

        };
        c.prototype.va = function() {
            return this.ea.ga.get("readOnly") ? (S("readOnly; ignore tool click."), !0) : !1
        };
        c.prototype.Gd = function() {
            this.ea.view.Gd()
        };
        c.prototype.Oc = function(a) {
            this.ea.view.ia(a)
        };
        c.prototype.removeEventListener = function(a, b) {
            if (a in this.Ya) {
                for (var c = this.Ya[a], e = 0; e < c.length; e++)
                    if (c[e] === b) {
                        c.splice(e, 1);
                        break
                    }
                0 === c.length && delete this.Ya[a]
            }
        };
        c.prototype.removeListener = function(a, b) {
            this.removeEventListener(a, b)
        };
        c.prototype.resize = function() {
            if (!this.bn) {
                var a = this;
                a.bn = setTimeout(function() {
                    a.bn = 0;
                    a.ea.yi()
                }, 0)
            }
        };
        c.prototype.save = function(a, b, c) {
            void 0 === a && (a = "zwibbler3");
            void 0 === c && (c = 0);
            var d = {
                jpeg: "image/jpeg",
                jpg: "image/jpeg",
                png: "image/png",
                bmp: "image/bmp",
                svg: "image/svg+xml",
                pdf: "application/pdf"
            };
            b = this.xi(b || this.xh());
            switch (a) {
                case "list":
                    return gf.si(this.ea.view.aa, "list", "object");
                case "png":
                case "jpeg":
                case "jpg":
                case "bmp":
                case "svg":
                case "pdf":
                    return this.ea.br(d[a], b, c);
                case "zwibbler3":
                    return gf.si(this.ea.view.aa, "zwibbler3", "string");
                case "image/png":
                case "image/jpeg":
                case "image/bmp":
                    b = this.ea.br(a, b, c);
                    b = b.substr(b.indexOf(",") + 1);
                    a = "";
                    c = 0;
                    d = {
                        A: 0,
                        B: 1,
                        C: 2,
                        D: 3,
                        E: 4,
                        F: 5,
                        G: 6,
                        H: 7,
                        I: 8,
                        J: 9,
                        K: 10,
                        L: 11,
                        M: 12,
                        N: 13,
                        O: 14,
                        P: 15,
                        Q: 16,
                        R: 17,
                        S: 18,
                        T: 19,
                        U: 20,
                        V: 21,
                        W: 22,
                        X: 23,
                        Y: 24,
                        Z: 25,
                        a: 26,
                        b: 27,
                        c: 28,
                        d: 29,
                        e: 30,
                        f: 31,
                        g: 32,
                        h: 33,
                        i: 34,
                        j: 35,
                        k: 36,
                        l: 37,
                        m: 38,
                        n: 39,
                        o: 40,
                        p: 41,
                        q: 42,
                        r: 43,
                        s: 44,
                        t: 45,
                        u: 46,
                        v: 47,
                        w: 48,
                        x: 49,
                        y: 50,
                        z: 51,
                        0: 52,
                        1: 53,
                        2: 54,
                        3: 55,
                        4: 56,
                        5: 57,
                        6: 58,
                        7: 59,
                        8: 60,
                        9: 61,
                        "+": 62,
                        "/": 63,
                        "=": 64
                    };
                    for (b = b.replace(/[^A-Za-z0-9\-_=\+\/]/g, ""); c < b.length;) {
                        var h = d[b.charAt(c++)];
                        var f = d[b.charAt(c++)];
                        var k = d[b.charAt(c++)];
                        var l = d[b.charAt(c++)];
                        h = h << 2 | f >> 4;
                        f = (f & 15) << 4 | k >> 2;
                        var n = (k & 3) << 6 | l;
                        a += String.fromCharCode(h);
                        64 !== k && (a += String.fromCharCode(f));
                        64 !== l && (a += String.fromCharCode(n))
                    }
                    return a;
                default:
                    return "Unsupported format: " + a
            }
        };
        c.prototype.cc = function(a) {
            this.ea.view.cc(a)
        };
        c.prototype.Id = function(a, b) {
            if (this.va()) return !1;
            this.ea.view.Id(a, b)
        };
        c.prototype.Lo = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var e = this.ea.view.aa.eb(a[c], !1);
                e && b.push(e)
            }
            return b
        };
        c.prototype.selectNodes = function(a) {
            a = this.Lo(tf(a));
            this.ea.view.selectNodes(a);
            this.ea.view.Tb();
            this.ea.view.ia()
        };
        c.prototype.Tw = function(a) {
            if (this.va()) return !1;
            var b = tf(a || this.Wc());
            this.Od(function(a) {
                return a.Uc(b, 1)
            })
        };
        c.prototype.xk = function(a) {
            this.ea.view.xk(a)
        };
        c.prototype.ir = function(a, b) {
            "defaultPaperSize" === a && this.nn(b);
            return this.ea.ga.set(a, b)
        };
        c.prototype.Hg = function(a, b) {
            if (this.va()) return !1;
            this.ea.view.Zv(a, b)
        };
        c.prototype.Vf = function(a) {
            this.ea.view.wc(a)
        };
        c.prototype.kn = function(a) {
            this.ea.view.kn(a)
        };
        c.prototype.$w = function(a, b) {
            this.ea.view.aa.setProperty(a, b)
        };
        c.prototype.Ig = function(a, b) {
            !F(a) && null !== a || !F(b) && null !== b ? alert("setDocumentSize: width/height must be numbers") : this.ea.view.Ig(a, b, !0)
        };
        c.prototype.kr = function(a, b) {
            !F(a) && null !== a || !F(b) && null !== b ? alert("setDocumentSize: width/height must be numbers") : this.ea.view.Ig(a, b, !1)
        };
        c.prototype.lr = function(a, b) {
            var c = this.ea.view.aa.Ja(T(a));
            c ? ("DomNode" !== c.type() && this.za("setDomElement: Node %s is not a DomNode. It is %s", a, c.type()), c.cx(b), this.ea.cj.push(b)) : this.za("setDomElement: Node %s does not exist", a)
        };
        c.prototype.ax = function(a, b) {
            return this.lr(a, b)
        };
        c.prototype.ks = function() {
            var a = this;
            S("Setting up dragdrop");
            this.ea.wa.addEventListener(this.ea.ma, "drop", function(b) {
                b.preventDefault();
                if (b.dataTransfer) {
                    if (b.dataTransfer.items)
                        for (var c = 0; c < b.dataTransfer.items.length; c++) {
                            if ("file" === b.dataTransfer.items[c].kind) {
                                a.ea.view.Um(b.dataTransfer.items[c]);
                                break
                            }
                        } else
                            for (c = 0; c < b.dataTransfer.files.length;) {
                                a.ea.view.Um(b.dataTransfer.files[c]);
                                break
                            }
                    try {
                        var e = JSON.parse(b.dataTransfer.getData("text"))
                    } catch (k) {
                        return
                    }
                    if ("object" === typeof e && e["zwibbler-src"]) {
                        var h = parseFloat(e["zwibbler-width"]),
                            f = e["zwibbler-src"];
                        S("DragDrop received with src=%s size=%s", f, h);
                        f && P.Pp(f, function(c, d) {
                            var e = 1;
                            h && (e = h / c);
                            var k = a.Lp(b.pageX, b.pageY);
                            k.x -= c * e / 2;
                            k.y -= d * e / 2;
                            a.Ji();
                            var l = a.createNode("ImageNode", {
                                url: f
                            });
                            a.uk(l, e, e);
                            a.mi(l, k.x, k.y);
                            a.Pi();
                            a.Gr()
                        })
                    }
                }
            })
        };
        c.prototype.vu = function(a) {
            var b = this.ea.view.aa.Ja(T(a));
            if (!b) return this.za("getDomElement: Node %s does not exist", a), null;
            b instanceof lf || this.za("getDomElement: Node %s is not a DomNode. It is %s", a, b.type());
            return b.Ub()
        };
        c.prototype.Qp = function(a) {
            for (; a;) {
                var b = a.getAttribute("nid");
                if (b) return parseInt(b, 36) || 0;
                a = a.parentElement
            }
            return 0
        };
        c.prototype.im = function(a) {
            return (a = this.ea.view.aa.Ja(T(a))) ? a.xj({
                ctx: this
            }) : null
        };
        c.prototype.ix = function(a, b) {
            pc(a) && pc(b) ? (this.ng() === a && this.xk(b), this.ea.view.aa.rc(!1, function(c) {
                c.Vc() === a && c.setProperty("layer", b)
            })) : this.za("setLayerName() needs string arguments.")
        };
        c.prototype.nn = function(a, b) {
            var c = null,
                e = null,
                h = !0,
                f = !1;
            if (2 === arguments.length)
                if (F(arguments[0]) && F(arguments[1])) {
                    var k = arguments[0];
                    c = arguments[1]
                } else pc(arguments[0]) && "boolean" === typeof arguments[1] ? (e = arguments[0], f = arguments[1]) : h = !1;
            else if (1 === arguments.length && pc(arguments[0]))
                for (var l = arguments[0].split(" "), n = 0; n < l.length; n++) "landscape" === l[n] ? f = !0 : "portrait" === l[n] ? f = !1 : e = l[n];
            if (!1 === h) return S("Bad arguments to setPaperSize()."), !1;
            if (null === e) return this.Ig(k, c), !0;
            switch (e.toLowerCase()) {
                case "letter":
                    k = 816;
                    c = 1056;
                    break;
                case "legal":
                    k = 816;
                    c = 1344;
                    break;
                case "11x17":
                    k = 1056;
                    c = 1632;
                    break;
                case "tabloid":
                    k = 1056;
                    c = 1632;
                    break;
                case "a0":
                    k = 841 / 25.4 * 96;
                    c = 1189 / 25.4 * 96;
                    break;
                case "a1":
                    k = 594 / 25.4 * 96;
                    c = 841 / 25.4 * 96;
                    break;
                case "a2":
                    k = 420 / 25.4 * 96;
                    c = 594 / 25.4 * 96;
                    break;
                case "a3":
                    k = 297 / 25.4 * 96;
                    c = 420 / 25.4 * 96;
                    break;
                case "a4":
                    k = 210 / 25.4 * 96;
                    c = 297 / 25.4 * 96;
                    break;
                case "none":
                    c = k = null;
                    break;
                default:
                    return S("Invalid paper size: %s", e), !1
            }
            f && (e = k, k = c, c = e);
            this.Ig(k, c);
            return !0
        };
        c.prototype.gx = function(a, b, c) {
            this.Ob(a, b, c)
        };
        c.prototype.Qc = function(a, b) {
            if (this.va()) return !1;
            if (2 !== arguments.length) throw "Error: setNodeProperties takes 2 arguments.";
            this.ea.Qc(tf(a), this.Qb(b))
        };
        c.prototype.Ob = function(a, b, c) {
            if (this.va()) return !1;
            3 !== arguments.length && this.za("Error: setNodeProperty takes 3 arguments.");
            var d = {};
            d[b] = c;
            this.Qc(a, d)
        };
        c.prototype.jx = function(a, b) {
            for (var c = tf(a), e = 0; e < c.length; e++) {
                var h = this.ea.view.aa.eb(c[e], !0);
                h && h.Te(!b)
            }
            this.ea.view.ia()
        };
        c.prototype.qr = function(a, b) {
            if (this.va()) return !1;
            this.ea.view.ew(a, b)
        };
        c.prototype.kx = function(a, b, c) {
            F(a) && F(b) && F(c) || this.za("setPageSize(): requires pageNo, width, height");
            var d = this.uj(a);
            d ? this.Qc(d, {
                width: b,
                height: c
            }) : this.za("setPageSize: no such page %s", a)
        };
        c.prototype.mn = function(a) {
            this.ea.view.mn(a)
        };
        c.prototype.setProperty = function(a, b) {
            this.va() || (this.Ob(this.Wc(), a, b), this.Id(a, b), this.ea.view.pe(a, b))
        };
        c.prototype.px = function(a) {
            qc(a) && F(a.x) && F(a.y) && F(a.width) && F(a.height) || this.za("setViewRect: arg must be an object with numeric x, y, width, height properties");
            0 !== a.width && 0 !== a.height || this.za("setViewRect: width and height must be non-zero.");
            this.ea.view.Ng(this.xi(a))
        };
        c.prototype.od = function(a, b, c) {
            if (F(a) || "page" === a || "width" === a)
                if (1 === arguments.length) this.ea.view.od(a);
                else if (3 === arguments.length && "number" === typeof a && F(b) && F(c)) {
                var d = this.Jp() / a,
                    h = this.ea.view.zf();
                h.transform(new Hc(d, d, b, c));
                this.ea.view.Ng(h)
            } else this.za("setZoom: invalid arguments.");
            else S("setZoom: invalid parameter.")
        };
        c.prototype.hi = function(a, b) {
            void 0 === b && (b = !0);
            this.ea.view.hi(a, b)
        };
        c.prototype.Ra = function(a, b, c) {
            a = this.ea.view.Ra(new G(a, b), c);
            return {
                x: a.x,
                y: a.y
            }
        };
        c.prototype.Sj = function() {
            return P.Sj()
        };
        c.prototype.ji = function(a) {
            a ? (a = B.Ub(a)) || this.za("toggleFullScreen: can't find element from " + a) : a = this.Ub();
            a.style.backgroundColor = "#ffffff";
            P.ji(a)
        };
        c.prototype.mi = function(a, b, c) {
            if (this.va()) return !1;
            S("Translate node %s by %s,%s", a, b, c);
            return this.ea.mi(tf(a), b, c)
        };
        c.prototype.ai = function(a) {
            this.ea.ai(a)
        };
        c.prototype.Xm = function() {
            this.ea.view.Xm()
        };
        c.prototype.Lw = function(a) {
            if (this.va()) return !1;
            var b = 0 === Math.round(a / (Math.PI / 2)) % 2;
            this.Ji();
            for (var c = 0; c < this.Wb(); c++) this.ar(c, a);
            b || (a = this.ea.view.aa.ja("width"), b = this.ea.view.aa.ja("height"), a && b || !this.Zd("pageView") || (a = vf.width, b = vf.height), a && b && this.kr(b, a));
            this.Pi()
        };
        c.prototype.$q = function(a, b, c, e) {
            if (this.va()) return !1;
            S("Rotate nodes by %s around (%s,%s)", b / Math.PI * 180, c, e);
            for (var d = 4 === arguments.length, f = tf(a), k = new G(0, 0), l = 0; l < f.length; l++) {
                var n = f[l],
                    q = this.ea.view.aa.eb(n);
                q && (q || d) ? !d && q && (n = q.rect.ud(), k.x += n.x, k.y += n.y) : S("rotateNode: Node %s does not exist", n)
            }
            d ? (k.x = c, k.y = e) : (k.x /= f.length, k.y /= f.length);
            d = new Gc(b, k.x, k.y);
            return this.ea.transformNode(f, d)
        };
        c.prototype.ar = function(a, b) {
            a >= this.Wb() && this.za("rotatePage: page " + a + " does not exist.");
            if (!this.va()) {
                var c = Math.round(b / (Math.PI / 2));
                b = c * Math.PI / 2;
                var e = 0 === c % 2;
                this.Ji();
                c = this.Je();
                this.Vf(a);
                var h = this.Wl(),
                    f = this.xh(),
                    k = f.width / 2,
                    l = f.height / 2;
                this.$q(h, b, k, l);
                e || this.mi(h, l - k, k - l);
                e = this.uj(a);
                this.Qc(e, {
                    width: f.height,
                    height: f.width
                });
                this.Vf(c);
                this.Pi()
            }
        };
        c.prototype.uk = function(a, b, c, e, h) {
            void 0 === e && (e = 0);
            void 0 === h && (h = 0);
            if (this.va()) return !1;
            S("Scale node %s by %s,%s", a, b, c);
            return this.ea.uk(tf(a), b, c, e, h)
        };
        c.prototype.ln = function(a, b, c, e, h, f, k) {
            if (this.va()) return !1;
            7 !== arguments.length && this.za("setNodeTransform: requires 7 arguments");
            S("setNodeTransform(id=%s %s %s %s %s %s %s %s)", a, b, c, e, h, f, k);
            return this.ea.ln(tf(a), b, c, e, h, f, k)
        };
        c.prototype.ur = function(a, b, c) {
            var d = this;
            if (!this.Bg) {
                var h = document.createElement("div");
                h.style.width = "320px";
                h.style.lineHeight = "0";
                h.style.position = "absolute";
                this.Ub().appendChild(h);
                var f = this;
                this.Gp(h, 20, {
                    onColour: function(a, b) {
                        var c = f.ep;
                        if ("" === c || "fillStyle" === c && !b) c = "strokeStyle";
                        f.setProperty(c, a)
                    }
                });
                this.Bg = P.Zk(h);
                this.ea.wa.add(function() {
                    d.Bg && (d.Bg.destroy(), d.Bg = null)
                })
            }
            this.ep = a;
            this.Bg.show(b, c, !0)
        };
        c.prototype.wt = function(a) {
            void 0 === a && (a = sc(32));
            S("Creating shared session " + a);
            this.Fo(a, 2);
            return a
        };
        c.prototype.Fo = function(a, b) {
            var c = this;
            S("Attach to shared session %s, creating=%s", a, b);
            this.$b = null;
            this.Jd && this.Jd.stop();
            return new Tb(function(d, h) {
                var e = c.ea.ga.get("collaborationServer");
                "custom" !== e ? (e = new lb(c, e.replace("{name}", a), c.Zd("latency")), c.Jd = e, e.pa("connected", function() {
                    c.na("connected");
                    c.digest()
                }), e.pa("connect-error", function() {
                    c.na("connect-error");
                    c.digest()
                }), e.start(a, b).then(function() {
                    S("Session resolved");
                    d(a)
                }, function(a) {
                    S("Error joining session: %s", a.message);
                    h(a)
                })) : d(a);
                1 !== b && (c.$b = c.ea.view.aa.kb.Zl(), c.na("local-changes", c.$b.getData()));
                return a
            })
        };
        c.prototype.wv = function(a, b) {
            void 0 === a && (a = "");
            void 0 === b && (b = !1);
            return this.Fo(a, b ? 0 : 1).then(function() {
                S("Successfully connected to session.")
            }, function(a) {
                console.log("Error connecting to session:", a);
                throw a;
            })
        };
        c.prototype.Fk = function() {
            this.Jd && (this.Jd.stop(), this.Jd = null, this.na("disconnected"))
        };
        c.prototype.xc = function() {
            if (this.va()) return !1;
            this.ea.view.xc()
        };
        c.prototype.Qg = function(a) {
            if (this.va()) return !1;
            this.Od(function(b) {
                b.Qg(tf(a))
            })
        };
        c.prototype.upload = function(a, b) {
            function c() {}

            function e() {}
            var h = this.ea.vt(b || "Working"),
                f = new XMLHttpRequest,
                k = new FormData(a);
            f.upload.addEventListener("progress", function(a) {
                h.update(a.loaded / a.total)
            }, !1);
            f.addEventListener("load", function() {
                200 === f.status ? (h.done(), e(f.response, f)) : (h.error("Error"), c(f))
            }, !1);
            f.addEventListener("error", function() {
                h.error("Error");
                c(f)
            }, !1);
            f.addEventListener("abort", function() {
                h.error("Aborted");
                c(f)
            }, !1);
            f.open(a.method, a.action);
            f.send(k);
            var l = {
                success: function(a) {
                    e = a;
                    return l
                },
                error: function(a) {
                    c = a;
                    return l
                }
            };
            return l
        };
        c.prototype.Qx = function(a, b) {
            void 0 === b && (b = !1);
            if (this.va()) return !1;
            this.ea.view.Gs(this.Qb(a), b)
        };
        c.prototype.Rx = function(a, b) {
            if (this.va()) return !1;
            2 === arguments.length ? this.ea.view.Ol({
                lineWidth: b,
                strokeStyle: a
            }) : 1 === arguments.length ? this.ea.view.Ol(this.Qb(arguments[0])) : this.ea.view.Ol({})
        };
        c.prototype.Sx = function(a) {
            if (this.va()) return !1;
            this.ea.view.Nk(this.Qb(a))
        };
        c.prototype.Tx = function(a) {
            if (this.va()) return !1;
            this.ea.view.jp(this.Qb(a))
        };
        c.prototype.Ux = function(a) {
            if (this.va()) return !1;
            qc(a) ? (a = new jf(this.ea.view, a), this.ea.view.Qa(a)) : this.za("useCustomTool(): requires an object as argument.")
        };
        c.prototype.Un = function(a) {
            if (this.va()) return !1;
            this.ea.view.Un(T(a))
        };
        c.prototype.Nk = function(a) {
            void 0 === a && (a = {});
            if (this.va()) return !1;
            this.ea.view.Nk(this.Qb(a))
        };
        c.prototype.Wx = function(a, b, c) {
            void 0 === c && (c = "freehand");
            if (this.va()) return !1;
            qc(a) ? (a = this.Qb(a), c = b) : a = {
                strokeStyle: a,
                lineWidth: b
            };
            this.ea.view.op(a, c)
        };
        c.prototype.ey = function(a, b) {
            void 0 === b && (b = !0);
            if (this.va()) return !1;
            var c = a;
            pc(a) ? c = {
                url: a
            } : "url" in c || this.za("useStampTool: missing url in properties");
            this.ea.view.Xx(c, 1 === arguments.length || !0 === b)
        };
        c.prototype.Yx = function(a, b) {
            if (this.va()) return !1;
            if (qc(b)) {
                var c = b.singleLine;
                var e = b.orthogonal
            } else c = b;
            this.ea.view.nq(this.Qb(a), c, e)
        };
        c.prototype.Zx = function() {
            this.ea.view.lw()
        };
        c.prototype.Gr = function() {
            this.ea.view.hb()
        };
        c.prototype.Vn = function(a, b, c, e) {
            if (this.va()) return !1;
            F(a) || this.za("usePolygonTool: parameter 1 must be a number.");
            F(b) || this.za("usePolygonTool: parameter 2 must be a number.");
            c && !F(c) && this.za("usePolygonTool: parameter 3 must be a number.");
            e && !qc(e) && this.za("usePolygonTool: parameter 4 must be a object properties.");
            this.ea.view.Vn(a, b, c || 1, this.Qb(e || {}))
        };
        c.prototype.$x = function(a) {
            void 0 === a && (a = {});
            if (this.va()) return !1;
            this.ea.view.op(this.Qb(a), "quadratic")
        };
        c.prototype.oi = function(a) {
            void 0 === a && (a = {});
            if (this.va()) return !1;
            this.ea.view.oi(this.Qb(a))
        };
        c.prototype.ay = function(a) {
            void 0 === a && (a = {});
            if (this.va()) return !1;
            this.ea.view.oi(zc({
                roundRadius: this.ea.ga.get("defaultRoundRectRadius")
            }, a))
        };
        c.prototype.by = function(a, b) {
            if (this.va()) return !1;
            var c = {};
            qc(a) ? c = this.Qb(a) : pc(a) && (c.stokeStyle = a);
            F(b) && (c.lineWidth = b);
            this.ea.view.Dt(c)
        };
        c.prototype.Wn = function(a, b, c, e, h, f) {
            void 0 === h && (h = "rectangle-tl");
            void 0 === f && (f = null);
            if (this.va()) return !1;
            this.ea.view.Wn(a, this.Qb(b), c, e, h, f)
        };
        c.prototype.cy = function(a) {
            if (this.va()) return !1;
            this.ea.view.oi(this.Qb(a))
        };
        c.prototype.fy = function(a) {
            if (this.va()) return !1;
            this.ea.view.Gn(this.Qb(a))
        };
        c.prototype.Rk = function() {
            this.ea.view.Rk()
        };
        c.prototype.Sk = function() {
            this.ea.view.Sk()
        };
        return c
    }();
    V.prototype.addKeyboardShortcut = V.prototype.ml;
    V.prototype.addRemoteChanges = V.prototype.ah;
    V.prototype.attach = V.prototype.oc;
    V.prototype.abortTransaction = V.prototype.ns;
    V.prototype.addSelectionHandle = V.prototype.Sc;
    V.prototype.addToGroup = V.prototype.Di;
    V.prototype.addToLanguage = V.prototype.ol;
    V.prototype.addPage = V.prototype.ws;
    V.prototype.addPanel = V.prototype.$g;
    V.prototype.begin = V.prototype.Va;
    V.prototype.beginTransaction = V.prototype.Ji;
    V.prototype.bringToFront = V.prototype.Us;
    V.prototype.canRedo = V.prototype.Rd;
    V.prototype.canUndo = V.prototype.Sd;
    V.prototype.clearSelection = V.prototype.cb;
    V.prototype.clearUndo = V.prototype.bt;
    V.prototype.clickColour = V.prototype.ct;
    V.prototype.commit = V.prototype.ua;
    V.prototype.commitIrreversibleTransaction = V.prototype.gt;
    V.prototype.commitTransaction = V.prototype.Pi;
    V.prototype.copy = V.prototype.mf;
    V.prototype.createColours = V.prototype.ip;
    V.prototype.createDataNode = V.prototype.qt;
    V.prototype.createGroup = V.prototype.rt;
    V.prototype.createLogger = V.prototype.tt;
    V.prototype.createNode = V.prototype.createNode;
    V.prototype.createHTMLNode = V.prototype.st;
    V.prototype.createPath = V.prototype.Vi;
    V.prototype.createToolbar = V.prototype.xt;
    V.prototype.createShape = V.prototype.El;
    V.prototype.cut = V.prototype.Hl;
    V.prototype.destroy = V.prototype.Xa;
    V.prototype.deleteNode = V.prototype.Wd;
    V.prototype.deleteNodes = V.prototype.Sb;
    V.prototype.deletePage = V.prototype.yt;
    V.prototype.deleteSelection = V.prototype.mp;
    V.prototype.dirty = V.prototype.Ce;
    V.prototype.download = V.prototype.download;
    V.prototype.draw = V.prototype.ia;
    V.prototype.editNodeText = V.prototype.Ht;
    V.prototype.duplicate = V.prototype.duplicate;
    V.prototype.emit = V.prototype.na;
    V.prototype.emitNow = V.prototype.fd;
    V.prototype.emitOnce = V.prototype.lg;
    V.prototype.skipEvent = V.prototype.zx;
    V.prototype.focus = V.prototype.focus;
    V.prototype.forEachNode = V.prototype.bu;
    V.prototype.findNode = V.prototype.Vt;
    V.prototype.findNodes = V.prototype.Ap;
    V.prototype.flip = V.prototype.Zt;
    V.prototype.flipNodes = V.prototype.th;
    V.prototype.generatePalette = V.prototype.Gp;
    V.prototype.getActiveLayer = V.prototype.ng;
    V.prototype.getAllNodes = V.prototype.Wl;
    V.prototype.getBackgroundImage = V.prototype.lu;
    V.prototype.getBoundingRectangle = V.prototype.Xl;
    V.prototype.getConfig = V.prototype.Zd;
    V.prototype.getContext = V.prototype.getContext;
    V.prototype.getCurrentPage = V.prototype.Je;
    V.prototype.getCurrentFillColour = V.prototype.pu;
    V.prototype.getCurrentOutlineColour = V.prototype.qu;
    V.prototype.getCurrentTool = V.prototype.vh;
    V.prototype.getCustomNode = V.prototype.ru;
    V.prototype.getDocumentCoordinates = V.prototype.Lp;
    V.prototype.getDocumentProperty = V.prototype.uu;
    V.prototype.getDocumentSize = V.prototype.xh;
    V.prototype.getElement = V.prototype.Ub;
    V.prototype.getFillColour = V.prototype.rj;
    V.prototype.getHistory = V.prototype.Fu;
    V.prototype.getImageUrl = V.prototype.em;
    V.prototype.getLanguageString = V.prototype.Ju;
    V.prototype.getDrawingRectangle = V.prototype.xu;
    V.prototype.getGroupParent = V.prototype.Du;
    V.prototype.getGroupMembers = V.prototype.Cu;
    V.prototype.getItemProperty = V.prototype.Hu;
    V.prototype.getLayers = V.prototype.Lu;
    V.prototype.getLayerNodes = V.prototype.Ku;
    V.prototype.getNodeCoordinates = V.prototype.Mu;
    V.prototype.getNodePageNumber = V.prototype.ae;
    V.prototype.getNodeProperty = V.prototype.tj;
    V.prototype.getNodeRectangle = V.prototype.Nu;
    V.prototype.getNodeScale = V.prototype.Ou;
    V.prototype.getNodeTransform = V.prototype.Pu;
    V.prototype.getNodeType = V.prototype.Qu;
    V.prototype.getNodeUnderPoint = V.prototype.Ru;
    V.prototype.getNodesUnderPoint = V.prototype.Vu;
    V.prototype.getPageCount = V.prototype.Wb;
    V.prototype.getPageNode = V.prototype.uj;
    V.prototype.getPageRect = V.prototype.Sp;
    V.prototype.getPathData = V.prototype.vj;
    V.prototype.getPathAsPoints = V.prototype.Yu;
    V.prototype.getCanvasScale = V.prototype.Jp;
    V.prototype.getEditNode = V.prototype.bm;
    V.prototype.getScreenCoordinates = V.prototype.Zu;
    V.prototype.getSelectedEditHandle = V.prototype.av;
    V.prototype.getStrokeColour = V.prototype.yj;
    V.prototype.getEditHandleType = V.prototype.qj;
    V.prototype.setEditHandle = V.prototype.bx;
    V.prototype.getSelectedNodes = V.prototype.Wc;
    V.prototype.getPropertySummary = V.prototype.Ah;
    V.prototype.getViewRectangle = V.prototype.ev;
    V.prototype.goToRevision = V.prototype.gv;
    V.prototype.openFile = V.prototype.hw;
    V.prototype.insertImage = V.prototype.qv;
    V.prototype.insertPage = V.prototype.Qj;
    V.prototype.isLayerVisible = V.prototype.wm;
    V.prototype.isNodeSelected = V.prototype.Ih;
    V.prototype.load = V.prototype.load;
    V.prototype.lockUpdates = V.prototype.Wj;
    V.prototype.markChangesSent = V.prototype.Lh;
    V.prototype.moveDown = V.prototype.Hv;
    V.prototype.movePage = V.prototype.Iv;
    V.prototype.moveUp = V.prototype.Jv;
    V.prototype.newDocument = V.prototype.tq;
    V.prototype.nextPage = V.prototype.nextPage;
    V.prototype.on = V.prototype.pa;
    V.prototype.onComplete = V.prototype.$v;
    V.prototype.openFromComputer = V.prototype.iw;
    V.prototype.paste = V.prototype.Xh;
    V.prototype.previousPage = V.prototype.rw;
    V.prototype.print = V.prototype.print;
    V.prototype.zxfGetfile = V.prototype.zxfGetfile; // 20200426-zxf获取图片
    V.prototype.redo = V.prototype.Gd;
    V.prototype.redraw = V.prototype.Oc;
    V.prototype.removeEventListener = V.prototype.removeEventListener;
    V.prototype.resize = V.prototype.resize;
    V.prototype.save = V.prototype.save;
    V.prototype.setCursor = V.prototype.cc;
    V.prototype.setToolProperty = V.prototype.Id;
    V.prototype.selectNodes = V.prototype.selectNodes;
    V.prototype.sendToBack = V.prototype.Tw;
    V.prototype.setActiveLayer = V.prototype.xk;
    V.prototype.setConfig = V.prototype.ir;
    V.prototype.setColour = V.prototype.Hg;
    V.prototype.setCurrentPage = V.prototype.Vf;
    V.prototype.setCustomBackgroundFn = V.prototype.kn;
    V.prototype.setDocumentProperty = V.prototype.$w;
    V.prototype.setDocumentSize = V.prototype.Ig;
    V.prototype.setDocumentSizeInTransaction = V.prototype.kr;
    V.prototype.setDomElement = V.prototype.lr;
    V.prototype.setDomNode = V.prototype.ax;
    V.prototype.getDomElement = V.prototype.vu;
    V.prototype.getNodeFromElement = V.prototype.Qp;
    V.prototype.getNodeObject = V.prototype.im;
    V.prototype.setLayerName = V.prototype.ix;
    V.prototype.setPaperSize = V.prototype.nn;
    V.prototype.setItemProperty = V.prototype.gx;
    V.prototype.setNodeProperties = V.prototype.Qc;
    V.prototype.setNodeProperty = V.prototype.Ob;
    V.prototype.setNodeVisibility = V.prototype.jx;
    V.prototype.setOpacity = V.prototype.qr;
    V.prototype.setPageSize = V.prototype.kx;
    V.prototype.setPageView = V.prototype.mn;
    V.prototype.setProperty = V.prototype.setProperty;
    V.prototype.setViewRectangle = V.prototype.px;
    V.prototype.setZoom = V.prototype.od;
    V.prototype.showLayer = V.prototype.hi;
    V.prototype.snap = V.prototype.Ra;
    V.prototype.isFullscreenSupported = V.prototype.Sj;
    V.prototype.toggleFullscreen = V.prototype.ji;
    V.prototype.translateNode = V.prototype.mi;
    V.prototype.removePanel = V.prototype.ai;
    V.prototype.removeSelectionHandles = V.prototype.Xm;
    V.prototype.rotateDocument = V.prototype.Lw;
    V.prototype.rotateNode = V.prototype.$q;
    V.prototype.rotatePage = V.prototype.ar;
    V.prototype.scaleNode = V.prototype.uk;
    V.prototype.setNodeTransform = V.prototype.ln;
    V.prototype.showColourPicker = V.prototype.ur;
    V.prototype.createSharedSession = V.prototype.wt;
    V.prototype.joinSharedSession = V.prototype.wv;
    V.prototype.stopSharing = V.prototype.Fk;
    V.prototype.undo = V.prototype.xc;
    V.prototype.ungroup = V.prototype.Qg;
    V.prototype.upload = V.prototype.upload;
    V.prototype.useArrowTool = V.prototype.Qx;
    V.prototype.useBrushTool = V.prototype.Rx;
    V.prototype.useCircleTool = V.prototype.Sx;
    V.prototype.useCurveTool = V.prototype.Tx;
    V.prototype.useCustomTool = V.prototype.Ux;
    V.prototype.useEditHandleTool = V.prototype.Un;
    V.prototype.useEllipseTool = V.prototype.Nk;
    V.prototype.useFreehandTool = V.prototype.Wx;
    V.prototype.useStampTool = V.prototype.ey;
    V.prototype.useLineTool = V.prototype.Yx;
    V.prototype.usePanTool = V.prototype.Zx;
    V.prototype.usePickTool = V.prototype.Gr;
    V.prototype.usePolygonTool = V.prototype.Vn;
    V.prototype.useQuadraticBezierTool = V.prototype.$x;
    V.prototype.useRectangleTool = V.prototype.oi;
    V.prototype.useRoundRectTool = V.prototype.ay;
    V.prototype.useShapeBrushTool = V.prototype.by;
    V.prototype.useShapeTool = V.prototype.Wn;
    V.prototype.useSquareTool = V.prototype.cy;
    V.prototype.useTextTool = V.prototype.fy;
    V.prototype.zoomIn = V.prototype.Rk;
    V.prototype.zoomOut = V.prototype.Sk;
    var wf = {
            fontStyle: null,
            fontWeight: "normal",
            fontSize: 12,
            fontFamily: "Times New Roman",
            colour: "black",
            align: "left",
            background: "none",
            underline: !1
        },
        xf = {
            fontStyle: "fs",
            fontWeight: "fw",
            fontSize: "fh",
            fontFamily: "ff",
            colour: "fc",
            align: "ta",
            background: "fb",
            underline: "fu"
        },
        yf = function() {
            function c(a) {
                this.sa = a;
                this.options = {}
            }
            c.prototype.Px = function() {
                var a = new c(this.sa),
                    b;
                for (b in wf) wf.hasOwnProperty(b) && (a.options[b] = this.get(b));
                return a
            };
            c.prototype.Jx = function() {
                var a = {},
                    b;
                for (b in this.options) this.options.hasOwnProperty(b) && (a[b] = this.options[b]);
                return a
            };
            c.prototype.apply = function(a) {
                a.fillStyle = this.get("colour");
                a.font = this.ou()
            };
            c.prototype.empty = function() {
                var a = 0,
                    b;
                for (b in this.options) this.options.hasOwnProperty(b) && (a += 1);
                return 0 === a
            };
            c.prototype.kj = function(a, b) {
                var d = c.kj(a, b);
                return d.empty() ? this : d
            };
            c.prototype.Pg = function(a) {
                c.Pg(this.options, a)
            };
            c.prototype.set = function(a, b) {
                this.options[a] = b
            };
            c.prototype.get = function(a) {
                return a in this.options ? this.options[a] : this.sa[a]
            };
            c.prototype.has = function(a) {
                return a in this.options
            };
            c.prototype.Df = function(a) {
                for (var b in a.options) {
                    var c = this.get(b),
                        e = a.get(b);
                    c !== e && this.set(b, e)
                }
            };
            c.prototype.clone = function() {
                var a = new c(this.sa);
                a.Df(this);
                return a
            };
            c.prototype.ou = function() {
                var a = this.get("fontStyle"),
                    b = this.get("fontWeight"),
                    c = this.get("fontSize"),
                    e = this.get("fontFamily");
                this.get("colour");
                var h = [];
                a && h.push(a);
                b && h.push(b);
                h.push(c + "px");
                h.push(e);
                return h.join(" ")
            };
            c.prototype.Hc = function(a) {
                if (this === a) return !0;
                for (var b in this.options)
                    if (!(b in a.options) || a.options[b] !== this.options[b]) return !1;
                for (b in a.options)
                    if (!(b in this.options)) return !1;
                return !0
            };
            c.prototype.aj = function(a) {
                var b = new c(this.sa),
                    d;
                for (d in wf) wf.hasOwnProperty(d) && a.get(d) !== this.get(d) && (b.options[d] = this.get(d));
                return b
            };
            c.prototype.toString = function() {
                var a = [],
                    b;
                for (b in this.options) a.push(b + "=" + this.options[b]);
                return a.join(",")
            };
            return c
        }();
    (function(c) {
        c.kj = function(a, b) {
            void 0 === b && (b = "");
            var d = new c(wf);
            switch (b) {
                case "B":
                    d.set("fontWeight", "bold");
                    break;
                case "I":
                    d.set("fontStyle", "italic");
                    break;
                case "U":
                    d.set("underline", !0)
            }
            for (var e in a) {
                var h = a[e];
                if ("textDecoration" === e) d.set("underline", 0 <= h.indexOf("underline"));
                else if ("" !== h) switch (e) {
                    case "fontStyle":
                    case "fontFamily":
                    case "fontWeight":
                    case "background":
                        d.set(e, h);
                        break;
                    case "fontSize":
                        d.set(e, parseFloat(h) || 2);
                        break;
                    case "textAlign":
                        d.set("align", h);
                        break;
                    case "color":
                        d.set("colour", h)
                }
            }
            return d
        };
        c.Pg = function(a, b) {
            for (var c in a) {
                var e = a[c];
                switch (c) {
                    case "fontStyle":
                    case "fontFamily":
                    case "fontWeight":
                    case "background":
                        b[c] = e;
                        break;
                    case "fontSize":
                        b[c] = e + "px";
                        break;
                    case "align":
                        b.textAlign = e;
                        break;
                    case "colour":
                        b.color = e;
                        break;
                    case "underline":
                        b.textDecoration = e ? "underline" : ""
                }
            }
            return b
        }
    })(yf || (yf = {}));
    var zf = yf;
    x.create("TEXTWRITER");
    var Af = function() {
        function c() {
            this.Tm = null;
            this.jk = []
        }
        c.prototype.An = function() {};
        c.prototype.Rl = function() {
            this.jk.push("\n")
        };
        c.prototype.Lr = function(a) {
            this.Tm = a = this.Tm ? a.aj(this.Tm) : a.Px();
            a = a.Jx();
            for (var b in a) a.hasOwnProperty(b) && this.jk.push("/" + xf[b] + a[b] + ";")
        };
        c.prototype.Mr = function(a) {
            a = a.replace(/\//g, "//");
            this.jk.push(a)
        };
        c.prototype.toString = function() {
            return this.jk.join("")
        };
        return c
    }();

    function Bf(c, a) {
        for (var b = 0, d = "", e = "", h = "", f = 0; f < c.length; f++) {
            var k = c.charAt(f);
            switch (b) {
                case 0:
                    "/" === k ? b = 1 : d += k;
                    break;
                case 1:
                    "/" === k ? (d += k, b = 0) : (--f, d.length && (a("text", d.replace(/\/\//g, "/")), d = ""), e = "", b = 2);
                    break;
                case 2:
                    e += k;
                    2 === e.length && (b = 3, h = "");
                    break;
                case 3:
                    ";" === k ? (a(e, h), b = 0) : h += k
            }
        }
        d.length && a("text", d.replace(/\/\//g, "/"))
    };
    var Cf = x.create("InlineItem"),
        Df = function() {
            function c(a) {
                this.style = a;
                this.index = 0
            }
            c.prototype.count = function() {
                return 1
            };
            c.prototype.Wa = function(a) {
                Cf("Asked to set %s", a);
                this.style = this.style.clone();
                this.style.Df(a);
                Cf("After merge: %s", this.style)
            };
            c.prototype.Oj = function() {};
            c.prototype.split = function() {
                return null
            };
            c.prototype.uh = function() {
                return {
                    width: 0,
                    height: 0,
                    Cf: 0,
                    Ts: !0,
                    uq: !1
                }
            };
            c.prototype.qg = function() {
                return ""
            };
            return c
        }();
    x.create("TextItem");
    var Ef = function(c) {
        function a(a, d) {
            var b = c.call(this, a) || this;
            b.text = d;
            return b
        }
        __extends(a, c);
        a.prototype.count = function() {
            return this.text.length
        };
        a.prototype.split = function(b) {
            if (0 < b && b < this.text.length) {
                var c = this.text.substr(b);
                this.text = this.text.substr(0, b);
                return new a(this.style.clone(), c)
            }
            return null
        };
        a.prototype.uh = function(a, c) {
            var b = this.text.charAt(c);
            return {
                width: a ? a.measureText(b).width : 0,
                height: this.style.get("fontSize"),
                Cf: 0,
                Ts: " " === b || "-" === b,
                uq: "\n" === b
            }
        };
        a.prototype.qg = function(a, c) {
            return this.text.substr(a, c)
        };
        return a
    }(Df);
    var Ff = x.create("TEXTSEQ"),
        Gf = function() {
            function c(a) {
                this.style = a;
                this.children = [];
                this.length = this.cg = 0;
                this.le = null
            }
            c.Yg = function(a) {
                var b = new zf(wf),
                    d = new c(b),
                    e = {},
                    h;
                for (h in xf) xf.hasOwnProperty(h) && (e[xf[h]] = h);
                Bf(a, function(a, c) {
                    var h = c;
                    a in e ? ("fh" === a && (h = parseFloat(h)), "null" === h && (h = null), b.set(e[a], h)) : "text" === a ? d.append([new Ef(b.clone(), h)]) : Ff("Bad key: %s", a)
                });
                return d
            };
            c.prototype.save = function(a, b, c) {
                var d = !1;
                this.kq(a, b, function(a, b, e) {
                    c.Lr(a.style);
                    a = a.qg(b, e);
                    b = 0;
                    for (e = a.split("\n"); b < e.length; b++) {
                        var h = e[b];
                        if ("" === h) {
                            if (d || c.An(), c.Rl(), d = !1, "\n" === a) break
                        } else d || (c.An(), d = !0), c.Mr(h)
                    }
                });
                d && c.Rl();
                return c
            };
            c.prototype.append = function(a) {
                this.Oj(this.cg, a)
            };
            c.prototype.Oj = function(a, b) {
                Ff("Insert %s item at index %s", b.length, a);
                var c, e = 0;
                for (c = 0; c < this.children.length; c++) {
                    var h = this.children[c];
                    var f = h.count();
                    if (e === a) {
                        Ff("Found proper position");
                        break
                    } else if (e + f > a) {
                        Ff("Splitting item from %s..(%s)..%s", h.index, a, h.index + f);
                        this.Bi(c, a - e);
                        e = a;
                        c += 1;
                        break
                    }
                    e += f
                }
                for (this.children.splice.apply(this.children, [c, 0].concat(b)); c < this.children.length; c++) h = this.children[c], f = h.count(), Ff("Bump item %s index %s->%s length=%s", c, h.index, e, f), h.index = e, e += f, Ff("   item %s: %s/%s", c, h.index, h.count());
                this.cg = e;
                this.length = this.children.length;
                this.le = null
            };
            c.prototype.remove = function(a, b) {
                var c = [];
                if (0 === this.children.length) return c;
                this.Jo(a);
                this.Jo(a + b);
                for (var e = this.yh(a), h, f = e.item.index, k = e.index; k < this.children.length; k++) {
                    var l = this.children[k];
                    h = l.count();
                    f + h <= a + b ? c.push(l) : l.index = f - b;
                    f += h
                }
                this.children.splice(e.index, c.length);
                this.length -= c.length;
                this.cg -= b;
                this.le = null;
                return c
            };
            c.prototype.count = function() {
                return this.cg
            };
            c.prototype.yh = function(a) {
                for (var b = 0, c = 0; c < this.children.length; c++)
                    if (b += this.children[c].count(), b > a) return {
                        index: c,
                        item: this.children[c]
                    };
                if (this.children.length) return {
                    index: this.children.length - 1,
                    item: this.children[this.children.length - 1]
                };
                throw Error("getItemAt() on empty sequence.");
            };
            c.prototype.Bi = function(a, b) {
                var c = this.children[a],
                    e = c.split(b);
                e && (e.index = c.index + c.count(), this.children.splice(a + 1, 0, e), this.length += 1, Ff("Split %s..%s..%s", c.index, e.index, e.index + e.count()));
                return e
            };
            c.prototype.Jo = function(a) {
                var b = this.yh(a);
                b && b.item.index < a && this.Bi(b.index, a - b.item.index)
            };
            c.prototype.zj = function(a) {
                return 0 === this.length ? this.style : this.yh(a).item.style
            };
            c.prototype.Vp = function(a, b) {
                var c = [],
                    e = 0,
                    h = 0,
                    f = null,
                    k = 0;
                if (0 === b) return c.push({
                    start: a,
                    length: 0,
                    style: this.zj(a)
                }), c;
                for (var l = 0; l < this.children.length; l++) {
                    var n = this.children[l];
                    var q = n.count();
                    k += q;
                    if (k > a) {
                        null === f && (f = n.style, e = n.index);
                        var u = n.style.Hc(f);
                        u && (h += q);
                        if (!u || k >= b) c.push({
                            start: e,
                            length: h,
                            style: f
                        }), e = n.index, h = 0;
                        if (k >= a + b) break
                    }
                }
                return c
            };
            c.prototype.nx = function(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    this.Wa(c.style, c.start, c.length)
                }
            };
            c.prototype.Wa = function(a, b, c) {
                var d = 0,
                    h = b + c;
                Ff("setStyle: %s:%s %s", b, c, a);
                for (c = 0; c < this.children.length; c++) {
                    var f = this.children[c],
                        k = f.count();
                    d < b && b < d + k ? this.Bi(c, b - d) ? k = b - d : (f.Wa(a), Ff("Case 1")) : b <= d && h < d + k && h > d ? (this.Bi(c, h - d), k = h - d, f.Wa(a), Ff("Case 2")) : b <= d && d + k <= h && (f.Wa(a), Ff("Case 3: fromChar=%s..%s count=%s..%s", b, h, d, d + k));
                    d += k
                }
            };
            c.prototype.Qw = function(a, b, c) {
                for (var d = b;;) {
                    b = this.uh(null, a);
                    if (c(b)) {
                        a += 1;
                        break
                    } else if (0 === a) break;
                    --a
                }
                for (;;) {
                    b = this.uh(null, d);
                    if (c(b)) break;
                    else if (d >= this.cg - 1) break;
                    d += 1
                }
                return {
                    start: a,
                    length: d - a
                }
            };
            c.prototype.Xu = function(a, b) {
                return this.Qw(a, b, function(a) {
                    return a.uq
                })
            };
            c.prototype.uh = function(a, b) {
                if (0 === this.length) throw Error("error: expected to have child items");
                if (null === this.le || b < this.le.index || b >= this.le.index + this.le.count()) this.le = this.yh(b).item;
                return this.le.uh(a, b - this.le.index)
            };
            c.prototype.qg = function(a, b) {
                var c = "";
                this.kq(a, b, function(a, b, d) {
                    console.log("Iterate: ", a, b, d);
                    c += a.qg(b, d)
                });
                return c
            };
            c.prototype.kq = function(a, b, c) {
                var d = a + b;
                if (0 !== b) {
                    var h = this.yh(a);
                    if (h)
                        for (b = h.item, h = h.index; a < d;) {
                            var f = Math.min(b.count(), d - a);
                            c(b, a - b.index, f);
                            a += f;
                            h += 1;
                            if (h === this.children.length) break;
                            b = this.children[h]
                        }
                }
            };
            return c
        }();
    var Hf = x.create("SpliceText"),
        If = function(c) {
            function a(a, d, e, h, f) {
                var b = c.call(this) || this;
                b.Lb = a;
                b.text = d;
                b.start = e;
                b.length = h;
                b.style = f;
                b.ie = [];
                return b
            }
            __extends(a, c);
            a.prototype.Df = function(b) {
                if (!(b instanceof a)) return !1;
                Hf("?merge(%s,%s,%s) and (%s,%s,%s)", this.start, this.length, this.text.substr(0, 5), b.start, b.length, b.text.substr(0, 5));
                return 0 === this.length && 0 === b.length && this.start + this.text.length === b.start && (null === this.style && null === b.style || null != this.style && null !== b.style && this.style.Hc(b.style)) ? (this.text += b.text, Hf("Merging SpliceTextAction"), !0) : 0 !== this.text.length || 0 !== b.text.length || this.start !== b.start && b.start + b.length !== this.start ? !1 : (this.length += b.length, this.start < b.start ? this.ie = this.ie.concat(b.ie) : (this.ie = b.ie.concat(this.ie), this.start = b.start), Hf("Merging Deletes"), !0)
            };
            a.prototype.gd = function() {
                Hf("Execute SpliceTextAction(del=%s/%s insert %s...)", this.start, this.length, this.text.substr(0, 5));
                this.Lb.Mh(this.start);
                0 < this.length && (Hf("Removing text"), this.ie = this.Lb.text.remove(this.start, this.length));
                if (0 < this.text.length) {
                    if (null === this.style) throw Error("style is null");
                    var a = new Ef(this.style, this.text);
                    this.Lb.text.Oj(this.start, [a])
                }
            };
            a.prototype.xc = function() {
                Hf("Undo SpliceTextAction(del=%s/%s insert %s)", this.start, this.length, this.text);
                0 < this.text.length && this.Lb.text.remove(this.start, this.text.length);
                this.ie.length && this.Lb.text.Oj(this.start, this.ie);
                this.Lb.Mh(this.start)
            };
            return a
        }(Pa);
    var Jf = x.create("UNDO"),
        Kf = function(c) {
            function a(a, d, e, h) {
                var b = c.call(this) || this;
                b.Lb = a;
                b.from = d;
                b.length = e;
                b.style = h;
                b.Im = [];
                return b
            }
            __extends(a, c);
            a.prototype.gd = function() {
                Jf("Do apply style");
                this.Lb.Mh(this.from);
                this.Im = this.Lb.text.Vp(this.from, this.length);
                this.Lb.text.Wa(this.style, this.from, this.length)
            };
            a.prototype.xc = function() {
                Jf("Undo apply style");
                console.log(this.Im);
                this.Lb.Mh(this.from);
                this.Lb.text.nx(this.Im)
            };
            a.prototype.Df = function() {
                return !1
            };
            return a
        }(Pa);
    var Lf = x.create("TextEditor"),
        Mf = function(c) {
            function a(a, d) {
                var b = c.call(this) || this;
                b.yc = a;
                b.sa = d;
                b.dh = 0;
                b.ig = 0;
                b.ze = null;
                b.Mi = 0;
                b.active = !1;
                b.text = new Gf(d);
                return b
            }
            __extends(a, c);
            a.prototype.setActive = function(a) {
                this.active = a;
                Lf("setActive: %s", this.active)
            };
            a.prototype.Ch = function() {
                return Math.min(this.dh, this.ig)
            };
            a.prototype.Bh = function() {
                return Math.max(this.dh, this.ig)
            };
            a.prototype.save = function(a, c) {
                void 0 === a && (a = 0);
                void 0 === c && (c = this.text.length);
                return this.text.save(a, c, new Af).toString()
            };
            a.prototype.Pc = function(a, c) {
                void 0 === c && (c = a);
                this.ig = a;
                this.dh = c;
                this.lg("selchange")
            };
            a.prototype.cb = function() {
                this.Pc(0, 0)
            };
            a.prototype.exec = function(a, c) {
                var b = this.ig;
                switch (a) {
                    case "bold":
                        this.Ik("fontWeight", "bold", "normal");
                        return;
                    case "italic":
                        this.Ik("fontStyle", "italic", "normal");
                        return;
                    case "underline":
                        this.Ik("underline", !0, !1);
                        return;
                    case "orange":
                        this.Ik("background", "orange", "transparent");
                        return;
                    case "undo":
                        Lf("Processing undo");
                        this.yc.xc(this);
                        this.Pc(b);
                        return;
                    case "redo":
                        Lf("Processing redo");
                        this.yc.Gd(this);
                        this.Pc(b);
                        return;
                    case "font":
                        this.Gi("fontFamily", c);
                        return;
                    case "fontSize":
                        "string" === typeof c && (c = parseFloat(c) || 2);
                        this.Gi("fontSize", c);
                        return;
                    case "align":
                        this.Gi("align", c);
                        break;
                    case "delete":
                        Lf("Delete text");
                        this.Ym(!1);
                        return;
                    case "backspace":
                        Lf("Delete text backspace");
                        this.Ym(!0);
                        return;
                    case "select-none":
                        this.Pc(b, b);
                        return
                }
                this.Se()
            };
            a.prototype.Ik = function(a, c, e) {
                var b = this.Ch();
                b = this.text.Vp(b, this.Bh() - b);
                for (var d, k = 0; k < b.length && (d = b[k].style, d.get(a) === c); k++);
                this.Gi(a, k < b.length ? c : e)
            };
            a.prototype.fq = function(a) {
                var b = this.Ch(),
                    c = this.Bh() - b;
                a = a.replace("\r", "\n");
                Lf("Delete %s/%s Insert char %s...", b, c, a.substr(0, 5));
                if (this.ze && this.Mi === b && 0 === c) {
                    var h = this.ze;
                    Lf("Using recording caret style: %s", h)
                } else h = 0 === c && 0 < b ? this.text.zj(b - 1) : this.text.zj(b);
                this.yc.ua(new If(this, a, b, c, h), !1, this);
                this.Pc(b + a.length, b + a.length);
                this.ze = null
            };
            a.prototype.Gi = function(a, c) {
                if ("string" === typeof a) {
                    var b = new zf(wf);
                    b.set(a, c || "")
                } else b = a;
                if (b.empty()) Lf("apply empty style; ignore");
                else {
                    var d = this.Ch(),
                        f = this.Bh(),
                        k = [];
                    if (b.has("align")) {
                        var l = new zf(wf);
                        l.set("align", b.get("align"));
                        var n = this.text.Xu(d, f);
                        0 < n.length && (Lf("Apply paragraph style to %s:%s %s", n.start, n.start + n.length, b), k.push(new Kf(this, n.start, n.length, l)))
                    }
                    Lf("applystyle called set %s:%s %s", d, f, b);
                    d !== f ? k.push(new Kf(this, d, f - d, b)) : (this.ze = null === this.ze || this.Mi !== d ? this.text.zj(d).clone() : this.ze.clone(), this.ze.Df(b), this.Mi = d, Lf("Recording new caret style: %s", this.ze));
                    this.yc.ua(k, !1, this)
                }
            };
            a.prototype.Ym = function(a) {
                var b = this.Ch(),
                    c = this.Bh() - b;
                Lf("Delete %s characters (totalCount=%s)", c, this.text.count());
                c ? (this.yc.ua(new If(this, "", b, c, null), !1, this), this.Pc(b)) : a && 0 < b ? (this.yc.ua(new If(this, "", b - 1, 1, null), !1, this), this.Pc(b - 1)) : b < this.text.count() && this.yc.ua(new If(this, "", b, 1, null), !1, this);
                this.Mi = -1
            };
            a.prototype.bv = function() {
                var a = this.Ch(),
                    c = this.Bh() - a;
                Lf("getSelectedText()=%s", this.text.qg(a, c));
                return this.text.qg(a, c)
            };
            a.prototype.Ff = function(a) {
                var b = this;
                Lf("Received clipboard event: %s", a.type);
                switch (a.type) {
                    case "copy":
                    case "cut":
                        Lf("Cut/Copy to system clipboard.");
                        var c = this.bv();
                        Lf("text=%s", c);
                        c.length && (a.clipboardData.setData("text/plain", c), a.preventDefault(), "cut" === a.type && this.Ym(!1));
                        break;
                    case "paste":
                        for (Lf("There are %s items on the clipboard", a.clipboardData.items.length), c = 0; c < a.clipboardData.items.length; c++) {
                            var h = a.clipboardData.items[c];
                            Lf("Item [%s] type is %s", c, h.type);
                            "text/plain" === h.type && h.getAsString(function(a) {
                                b.fq(a)
                            })
                        }
                }
            };
            a.prototype.Mh = function() {};
            a.prototype.Se = function() {};
            return a
        }(bb);
    var Nf = x.create("HTMLTextEditor"),
        Sf = function(c) {
            function a(a, d, e) {
                void 0 === e && (e = {});
                var b = c.call(this, new Qa, (new zf(wf)).kj(window.getComputedStyle(d), d.tagName)) || this;
                b.fa = d;
                b.options = e;
                b.tc = new cb;
                b.tx(a);
                a.addEventListener(document, "selectionchange", function() {
                    b.gw()
                });
                a.addEventListener(document, "cut", function(a) {
                    b.Ff(a)
                });
                a.addEventListener(document, "copy", function(a) {
                    b.Ff(a)
                });
                a.addEventListener(document, "paste", function(a) {
                    b.Ff(a)
                });
                Of(b.text, d, b.sa);
                b.Se();
                b.pa("reformat", function() {
                    b.Se()
                });
                return b
            }
            __extends(a, c);
            a.prototype.fx = function(a) {
                this.fa.innerHTML = a;
                this.text = new Gf(this.sa);
                Of(this.text, this.fa, this.sa);
                B(this.fa).clear();
                a = this.text;
                var b = this.fa,
                    c = this.sa;
                a.save(0, a.count(), new Pf(b, c));
                this.Pc(0, 0)
            };
            a.prototype.tx = function(a) {
                var b = this;
                this.tc.map("ctrl+b,cmd+b", "bold");
                this.tc.map("ctrl+i,cmd+i", "italic");
                this.tc.map("ctrl+u,cmd+u", "underline");
                this.tc.map("ctrl+z,cmd+z", "undo");
                this.tc.map("ctrl+shift+z,cmd+shift+z", "redo");
                this.tc.map("delete", "delete");
                this.tc.map("backspace", "backspace");
                this.tc.pa("*", function(a, c) {
                    Nf("Keyboard event: ", a);
                    c.preventDefault();
                    c.stopPropagation();
                    b.exec(a)
                });
                this.tc.Xo(this.fa);
                a.add(function() {
                    b.tc.detach(b.fa)
                });
                a.addEventListener(this.fa, "keypress", function(a) {
                    var c = a.charCode;
                    13 === c && b.options.rn && !a.shiftKey ? b.na("enter") : (b.fq(String.fromCharCode(c)), a.preventDefault(), b.Se())
                })
            };
            a.prototype.setActive = function(a) {
                c.prototype.setActive.call(this, a);
                a ? (this.fa.setAttribute("contenteditable", "TRUE"), this.fa.focus()) : (this.fa.setAttribute("contenteditable", "FALSE"), this.fa.blur())
            };
            a.prototype.gw = function() {
                if (this.active) {
                    var a = document.getSelection();
                    if (null === a) this.cb();
                    else if (null === a.focusNode || null === a.anchorNode) this.cb();
                    else if (a.anchorNode === this.fa) Nf("Select-all %s..%s", 0, this.text.length), c.prototype.Pc.call(this, 0, this.text.count());
                    else {
                        var d = Qf(this.fa, a.anchorNode, a.anchorOffset);
                        a = Qf(this.fa, a.focusNode, a.focusOffset); - 1 !== d && -1 !== a && (0 === this.text.count() && (a = d = 0), a !== this.ig || d !== this.dh) && (c.prototype.Pc.call(this, a, d), Nf("Selected %s..%s", d, a))
                    }
                }
            };
            a.prototype.Pc = function(a, d) {
                void 0 === d && (d = a);
                Nf("self-set caret position: %s..%s", d, a);
                c.prototype.Pc.call(this, a, d);
                var b = Rf(this.fa, a),
                    h = Rf(this.fa, d),
                    f = document.createRange();
                d <= a ? (f.setStart(h.node, h.offset), f.setEnd(b.node, b.offset)) : (f.setStart(b.node, b.offset), f.setEnd(h.node, h.offset));
                if (b = window.getSelection()) b.removeAllRanges(), b.addRange(f)
            };
            a.prototype.Mh = function(a) {
                Nf("Mark for reformat: %s", a);
                this.lg("reformat")
            };
            a.prototype.Se = function() {
                B(this.fa).clear();
                var a = this.text,
                    c = this.fa,
                    e = this.sa;
                a.save(0, a.count(), new Pf(c, e));
                this.options.placeholder && 0 === this.text.count() && (a = B("div").Wa({
                    opacity: "0.5"
                }).Mg(this.options.placeholder).Tc(this.fa).fa, this.sa.Pg(a.style));
                this.Pc(this.ig, this.dh)
            };
            a.prototype.exec = function(a, d) {
                c.prototype.exec.call(this, a, d);
                this.Se()
            };
            return a
        }(Mf);

    function Qf(c, a, b) {
        function d(c) {
            if (c.nodeType === Node.ELEMENT_NODE) {
                var k = c.getAttribute("t-off");
                k && (e = parseFloat(k));
                if (c === a) return c instanceof Element && c.children[0] && "BR" === c.children[0].tagName && 1 === b && --e, f = !0;
                "DIV" === c.tagName && (h = !0);
                for (c = c.firstChild; c && !d(c);) c = c.nextSibling;
                return !!c
            }
            if (c.nodeType === Node.TEXT_NODE) {
                if (c === a) return f = !0;
                c = Tf(c.nodeValue, h);
                e += c.length;
                c.length && (h = !1)
            }
        }
        var e = 0,
            h = !0,
            f = !1;
        for (c = c.firstChild; c && !d(c);) c = c.nextSibling;
        return f ? e + b : -1
    }

    function Rf(c, a) {
        function b(c) {
            d = c;
            h = 0;
            if (c.nodeType === Node.ELEMENT_NODE) {
                var k = c.getAttribute("t-off");
                k && (e = parseFloat(k));
                "DIV" === c.tagName && (f = !0);
                for (c = c.firstChild; c && !b(c);) c = c.nextSibling;
                return !!c
            }
            if (c.nodeType === Node.TEXT_NODE) {
                c = Tf(c.nodeValue, f);
                if (e + c.length >= a) return h = a - e, !0;
                e += c.length;
                c.length && (f = !1)
            }
        }
        for (var d = c, e = 0, h = 0, f = !0, k = c.firstChild; k && !b(k);) k = k.nextSibling;
        return {
            node: d,
            offset: h
        }
    }

    function Tf(c, a) {
        for (var b = "", d = a, e = 0; e < c.length; e++) {
            var h = c[e];
            switch (h) {
                case " ":
                case "\n":
                case "\r":
                case "\t":
                    d || (b += " ", d = !0);
                    break;
                default:
                    b += h, d = !1
            }
        }
        return b
    }

    function Of(c, a, b) {
        function d(a, b) {
            if (a.nodeType === Node.ELEMENT_NODE) {
                switch (a.tagName) {
                    case "DIV":
                    case "P":
                        l || (h += "\n"), l = !1
                }
                "DIV" === a.tagName && (n = !0);
                a instanceof HTMLElement && (b = b.kj(a.style, a.tagName));
                for (var c = a.firstChild; c;) d(c, b), c = c.nextSibling
            } else a.nodeType === Node.TEXT_NODE && (f.Hc(b) || (e(f), f = b), c = Tf(a.nodeValue, n), h += c, c.length && (n = !1))
        }

        function e(a) {
            h.length && (k.push(new Ef(a, h)), h = "")
        }
        var h = "",
            f = b,
            k = [],
            l = !0,
            n = !0;
        for (a = a.firstChild; a;) d(a, b), a = a.nextSibling;
        e(f);
        k.length && c.append(k)
    }
    var Pf = function() {
        function c(a, b) {
            this.root = a;
            this.Qh = this.kp = b;
            this.span = this.ma = null;
            this.offset = 0;
            this.style = b
        }
        c.prototype.Lr = function(a) {
            Nf("writeStyle(" + a.toString());
            this.Qh = a
        };
        c.prototype.An = function() {
            Nf("startLine");
            this.ma = document.createElement("DIV");
            this.root.appendChild(this.ma);
            this.ma.setAttribute("t-off", this.offset.toString());
            this.ma.style.whiteSpace = "pre-wrap";
            this.style = this.kp;
            this.ma.style.fontSize = this.Qh.get("fontSize") + "px"
        };
        c.prototype.Rl = function() {
            Nf("endLine");
            if (!this.ma) throw Error("Expected div to exist");
            null === this.ma.firstChild && this.ma.appendChild(document.createElement("BR"));
            this.span = this.ma = null;
            this.offset += 1
        };
        c.prototype.Mr = function(a) {
            Nf("writeText(" + a + ")");
            if (!this.ma) throw Error("Expected div to exist");
            null !== this.span && this.style.Hc(this.Qh) || (this.span = document.createElement("SPAN"), this.ma.appendChild(this.span), this.Qh.Pg(this.span.style), this.style = this.Qh);
            this.span.appendChild(document.createTextNode(a));
            this.offset += a.length
        };
        return c
    }();
    var Uf = x.create("zeact");

    function Vf(c) {
        "BUTTON" === c.tagName && (c.getAttribute("type") || c.setAttribute("type", "button"))
    }
    var O = jc.$e();
    O.vb("click", function(c, a, b, d) {
        function e(b) {
            fc("z-click=[" + d + "] received " + b.type);
            jc.vp(c, d, a, b, h);
            O.digest();
            b.preventDefault()
        }

        function h(a, b) {
            a instanceof V && 0 <= b.indexOf("Tool") && (fc("Called %s", b), f = !0);
            return a[b]
        }
        Vf(a);
        b = "onpointerdown" in window;
        "ontouchstart" in window ? O.$a(a, "touchend", e) : b ? O.$a(a, "pointerup", e) : O.$a(a, "mouseup", e);
        var f;
        O.$a(a, "keydown", function(b) {
            b.target === a && 13 === b.keyCode && (f = !1, e(b), f && c.ctx.focus(!0, a))
        })
    });
    O.vb("has", function(c, a, b, d) {
        b = [];
        var e = 0;
        for (d = d.split("|"); e < d.length; e++) {
            var h = d[e];
            h = h.trim();
            b.push('("' + h + '" in ctx.summary.types || "' + h + '" in ctx.summary.properties)')
        }(b = b.join("||")) && O.watch(c, a, b, function(b) {
            a.style.display = b ? "block" : "none"
        })
    });
    O.vb("property", function(c, a, b, d) {
        b = 'ctx.summary.properties["' + d + '"]';
        var e = a.getAttribute("z-value"),
            h = null !== a.getAttribute("z-colour");
        O.watch(c, a, b, function(b) {
            "value" in a && (a.value = b);
            null !== e && B(a).Ln("selected", "" + b === e);
            h && (a.style.backgroundColor = b)
        });
        "BUTTON" === a.tagName ? (Vf(a), O.$a(a, "click", function() {
            var b = a.getAttribute("z-value") || "";
            c.ctx.setProperty(d, b)
        })) : O.$a(a, "change", function() {
            var b = jc.yu(c, a);
            void 0 !== b && c.ctx.setProperty(d, b)
        })
    });
    O.vb("popup", function(c, a, b, d) {
        var e = a.parentNode;
        if (!e) throw Error("z-popup: no parent node?!");
        var h = document.createComment("z-popup=" + d);
        e.replaceChild(h, a);
        O.wa(e, function() {
            e && e.replaceChild(a, h)
        });
        c.ctx.$popups || (c.ctx.$popups = {});
        c.ctx.$popups[d] = a
    });
    O.vb("show-popup", function(c, a, b, d) {
        Vf(a);
        O.$a(a, "click", function(a) {
            var b = c.ctx.$popups ? c.ctx.$popups[d] : null;
            if (!b) throw Error("Popup " + d + " not found");
            b = b.cloneNode(!0);
            O.oc(c, b);
            var e = ec(b);
            e.onhide = function() {
                Uf("Dialog is hidden.");
                e.destroy();
                O.detach(b)
            };
            e.show(a.pageX, a.pageY, !0)
        })
    });
    O.vb("colour", function(c, a) {
        O.$a(a, "click", function(b) {
            c.ctx.ur(a.getAttribute("z-property") || "", b.pageX, b.pageY)
        })
    });
    O.vb("page", function(c, a, b, d) {
        function e() {
            var a = h.Sp(k),
                b = Math.min(l / a.width, n / a.height);
            1 < b && (b = 1);
            f.width = a.width * b | 0;
            f.height = a.height * b | 0;
            q.setTransform(b, 0, 0, b, 0, 0);
            q.fillStyle = "white";
            q.fillRect(0, 0, a.width, a.height);
            h.ia(q, {
                page: k
            })
        }
        if (!a.oy) {
            var h = c.ctx,
                f = document.createElement("canvas"),
                k = Ka(c, d) || 0,
                l = parseInt(a.getAttribute("z-width") || "1000000"),
                n = parseInt(a.getAttribute("z-height") || "1000000");
            f.style.backgroundColor = "white";
            var q = f.getContext("2d");
            for (b = 0; b < a.attributes.length; b++) d = a.attributes[b], "z-page" !== d.name && f.setAttribute(d.name, d.value);
            a.parentNode && a.parentNode.replaceChild(f, a);
            e();
            h.pa("document-changed", e);
            h.pa("resource-loaded", e);
            O.wa(f, function() {
                h.removeEventListener("document-changed", e);
                h.removeEventListener("resource-loaded", e)
            });
            for (b = 0; b < a.attributes.length; b++) f.setAttribute(a.attributes[b].name, a.attributes[b].value);
            f.oy = !0;
            return O.oc(c, f).node
        }
    }, 1);
    O.vb("sort", function(c, a, b, d) {
        P.Ne(".zwibbler-sort-highlight { outline: 3px solid orange }");
        var e = lc({
            parent: a,
            Hi: "z-sortable",
            Nm: "zwibbler-sort-highlight",
            cw: function(a, b) {
                c.$from = a;
                c.$to = b;
                Ka(c, d);
                O.digest()
            }
        });
        O.wa(a, function() {
            e()
        })
    });

    function Wf() {
        fc("Document loaded.");
        Array.prototype.forEach.call(document.querySelectorAll("zwibbler,[zwibbler]"), function(c) {
            Xf(c, null, !1)
        })
    }

    function Yf(c, a, b) {
        B(c).matches(a) && b(c);
        Array.prototype.forEach.call(c.querySelectorAll(a), b)
    }

    function Xf(c, a, b) {
        if (!c.Zg && ("ZWIBBLER" === c.tagName && P.Ne("zwibbler {display: block}"), b || null === c.getAttribute("z-no-auto-init"))) {
            Yf(c, "[z-component]", function(a) {
                var b = a.getAttribute("z-component"),
                    c = a.getAttribute("z-controller"),
                    d = (a.getAttribute("z-properties") || "").split(/[ ,]+/);
                if (b) {
                    var e = null;
                    if (c)
                        if (c in P.controllers) e = P.controllers[c];
                        else if ("function" === typeof window.zcontroller) e = window.zcontroller;
                    else throw Error("While processing component: " + b + " could not find controller function " + c);
                    P.Qi(b, {
                        template: a,
                        properties: d,
                        controller: e
                    });
                    a.parentNode.removeChild(a)
                }
            });
            var d, e = {};
            for (b = 0; b < c.attributes.length; b++) {
                var h = c.attributes[b];
                P.Yp(h.name) && (e[h.name] = h.value)
            }
            Yf(c, "z-canvas,[z-canvas]", function(a) {
                d = P.create(a, e)
            });
            a || (a = d);
            (a.ctx = d) ? d.oc(a, c): (a = {}, O.oc(a, c));
            a.$digest = function() {
                O.digest()
            };
            a.$watch = function(b, d) {
                O.watch(a, c, b, d)
            };
            a.$apply = function(b) {
                if (b) return Ka(a, b);
                O.digest()
            };
            a.hidePopup = function(b) {
                a.Rq && b in a.Rq && a.Rq[b].hide()
            };
            b = c.getAttribute("z-controller") || "";
            b in P.controllers ? (fc("Running controller: %s", b), P.controllers[b](a)) : "function" === typeof window[b] ? (fc("Running controller: %s", b), window[b](a)) : b && console.log("Controller not found: %s", b);
            O.digest();
            return a
        }
    }
    document.addEventListener("DOMContentLoaded", function() {
        Wf()
    });
    O.vb("editable", function(c, a, b, d) {
        function e() {
            var b = a.innerHTML;
            h = b;
            Ka(c, d + "=" + JSON.stringify(b));
            Uf("Text editor no longer selected. Blurring");
            k.exec("select-none");
            k.setActive(!1)
        }
        if (c.ctx) {
            var h = "";
            O.watch(c, a, d, function(a) {
                h !== a && (h = a, k.fx(a))
            });
            var f = new ob,
                k = new Sf(f, a, {
                    rn: !0,
                    placeholder: a.getAttribute("placeholder") || ""
                });
            O.wa(a, function() {
                f.Xa()
            });
            O.$a(a, "focus", function() {
                Uf("Got text focus event");
                k.setActive(!0)
            });
            O.$a(a, "click", function() {
                Uf("Clicked on text");
                k.setActive(!0)
            });
            O.$a(a, "blur", function() {
                Uf("Got text blur event")
            });
            k.pa("selchange", function() {});
            k.pa("enter", e);
            c.ctx.pa("selected-nodes", function() {
                !c.ctx.Ih(c.id) && k.active && e()
            })
        }
    });
    O.Md("clear-glyph", function(c, a, b) {
        Uf("Drawing colour panel, width=%s tag=%s", JSON.stringify(a), c.tagName);
        "CANVAS" === c.tagName && (c.width = a.width, c.height = a.width, "clear" === a.style ? qf(c.getContext("2d"), 0, 0, a.width) : rf(c.getContext("2d"), 0, 0, a.width), b.resize())
    });
    var Zf = x.create("HTMLNode");

    function $f(c) {
        return function(a) {
            function b() {
                for (var b = [], c = 0; c < arguments.length; c++) b[c] = arguments[c];
                b = a.apply(this, b) || this;
                b.fa = null;
                b.children = [];
                b.Pb |= 6;
                return b
            }
            __extends(b, a);
            b.prototype.Ma = function() {
                return this.children.length
            };
            b.prototype.removeChild = function(a) {
                var b = this.children[a];
                this.children.splice(a, 1);
                Yc(b) && b.fa && b.fa.parentNode && b.fa.parentNode.removeChild(b.fa);
                return b
            };
            b.prototype.Zj = function(a) {
                for (a += 1; a < this.children.length; a++) {
                    var b = this.children[a];
                    if (Yc(b)) return b.fa
                }
                return null
            };
            b.prototype.Pj = function(a, b) {
                this.children.splice(b, 0, a);
                this.fa && Yc(a) && a.fa && this.gl(a.fa, this.Zj(b))
            };
            b.prototype.gl = function(a, b) {
                if (b) b.parentNode.insertBefore(a, b);
                else if (this.fa) {
                    var c = a.getAttribute("z-type") || "";
                    ag(this.fa, c).appendChild(a)
                }
            };
            b.prototype.rb = function(a) {
                return this.children[a]
            };
            b.prototype.Dn = function(a, b) {
                var c = this.Zj(a),
                    d = this.Zj(a),
                    e = this.children[a],
                    l = this.children[b],
                    n = this.children[a];
                this.children[a] = this.children[b];
                this.children[b] = n;
                this.fa && (Yc(e) && e.fa && this.gl(e.fa, d), Yc(l) && l.fa && this.gl(l.fa, c))
            };
            return b
        }(c)
    }
    var Ue = function(c) {
        function a(a, d) {
            var b = c.call(this, a, d) || this;
            b.Bp = !1;
            b.Pm = {};
            b.scope = null;
            return b
        }
        __extends(a, c);
        a.prototype.type = function() {
            return "HTMLNode"
        };
        a.prototype.Xa = function() {
            this.fa && !this.Bp && (O.detach(this.fa), B(this.fa).remove())
        };
        a.prototype.rr = function(a) {
            this.Pm = a
        };
        a.prototype.setProperty = function(a, d) {
            "matrix" === a || "object" !== typeof d || d instanceof Array ? (d = c.prototype.setProperty.call(this, a, d), this.Wa(a, d)) : this.Ue(bg(d, {}, a + "."))
        };
        a.prototype.ja = function(a) {
            switch (a) {
                case "lockRotation":
                case "lockSize":
                    return !0
            }
            return c.prototype.ja.call(this, a)
        };
        a.prototype.Wa = function(a, c) {
            this.fa && "style." === a.substr(0, 6) && (this.fa.style[a.substr(6)] = c || "")
        };
        a.prototype.format = function(a, c) {
            var b = this;
            if (null === this.fa) {
                var d = this.ba.$component;
                Zf("Create component element of type %s", d);
                var f = ad(this.Pm, this);
                f = P.Ui(this.Pm, d, {
                    nid: this.id,
                    "z-type": d
                }, f);
                if (!f) throw Error("Error: No component registered for " + d);
                this.scope = f.scope;
                this.fa = f.node;
                this.fa.style.boxSizing = "border-box";
                this.fa.Cy = function() {
                    return !1
                };
                this.parent && Yc(this.parent) && this.aw();
                for (var k in this.ba) this.Wa(k, this.ba[k]);
                this.fa.addEventListener("load", function() {
                    Zf("Something loaded; request reformat.");
                    c.na("reformat", b.id)
                })
            }
            d = this.Ka();
            "style.left" in this.ba && (this.fa.style.left = parseFloat(this.ba["style.left"]) + d.Ba + "px");
            "style.top" in this.ba && (this.fa.style.top = parseFloat(this.ba["style.top"]) + d.Ca + "px");
            d = 0;
            for (k = this.children; d < k.length; d++) f = k[d], Xc(f) && f.format(a, c)
        };
        a.prototype.lx = function(a) {
            this.rect = a;
            this.Ga = a.clone()
        };
        a.prototype.ia = function(a) {
            var b = a.globalCompositeOperation;
            a.globalCompositeOperation = "destination-out";
            a.fillRect(this.Ga.x, this.Ga.y, this.Ga.width, this.Ga.height);
            a.globalCompositeOperation = b;
            a.strokeStyle = "rgba(255,0,0,0.2)";
            a.lineWidth = 3
        };
        a.prototype.Fi = function() {
            return !0
        };
        a.prototype.aw = function() {
            if (this.parent && Yc(this.parent) && this.parent.fa) {
                var a = this.parent.Ie(this);
                if (-1 === a) throw Error("Child node not found");
                var c = ag(this.parent.fa, this.ba.$component);
                a = this.parent.Zj(a);
                c && this.fa && c.insertBefore(this.fa, a)
            }
        };
        a.prototype.fm = function() {
            if (!this.fa) return this.rect;
            var a = B(this.fa).gm();
            return new H(this.rect.x - a.left, this.rect.y - a.top, this.rect.width + a.left + a.right, this.rect.height + a.top + a.bottom)
        };
        return a
    }($f(ed));
    bd.dd("HTMLNode", Ue);

    function ag(c, a) {
        for (var b = c.querySelectorAll("[container-for]"), d = null, e = 0; e < b.length; e++)
            if (Pe(b[e], a)) {
                d = b[e];
                break
            }
        if (d) {
            b = d.parentElement;
            for (e = !0; b;) {
                if (b.getAttribute("nid")) {
                    e = b == c;
                    break
                }
                b = b.parentElement
            }
            if (e) return d
        }
        return c
    }

    function Pe(c, a) {
        var b = c.getAttribute("container-for");
        return b && 0 <= b.indexOf(a)
    }

    function bg(c, a, b) {
        void 0 === a && (a = {});
        void 0 === b && (b = "");
        for (var d in c) {
            var e = c[d];
            e instanceof Object && !(e instanceof Array) ? bg(e, a, d + ".") : a[b + d] = e
        }
        return a
    };
    var cg = function(c) {
        function a(a, d) {
            var b = c.call(this, a, d) || this;
            b.log = x.create("PAGE", !0);
            b.fa = document.createElement("div");
            b.fa.classList.add("zwibbler-page");
            b.fa.setAttribute("nid", a);
            return b
        }
        __extends(a, c);
        a.prototype.type = function() {
            return "PageNode"
        };
        a.prototype.setProperty = function(a, d) {
            if (void 0 === d) delete this.ba[a];
            else switch (a) {
                case "width":
                case "height":
                    this.ba[a] = d;
                    break;
                default:
                    c.prototype.setProperty.call(this, a, d)
            }
        };
        a.prototype.Xb = function() {
            return "width" in this.ba && "height" in this.ba ? new Cc(this.ba.width, this.ba.height) : null
        };
        a.prototype.format = function() {};
        a.prototype.wb = function() {
            return null
        };
        a.prototype.ia = function() {};
        return a
    }($f(bd));
    ed.dd("PageNode", cg);
    var dg = x.create("BRUSH"),
        eg = function(c) {
            function a(a, d) {
                var b = c.call(this, a, d) || this;
                b.la = [];
                b.qc = [];
                dg("New BrushNode created.");
                b.ba.points = [];
                b.ba.strokeStyle = "#ff00ff";
                b.ba.lineWidth = 10;
                return b
            }
            __extends(a, c);
            a.prototype.type = function() {
                return "BrushNode"
            };
            a.prototype.setProperty = function(a, d) {
                "fillStyle" === a && (a = "strokeStyle");
                "dashes" === a || "lineCap" === a ? this.ba[a] = d : c.prototype.setProperty.call(this, a, d)
            };
            a.prototype.ja = function(a) {
                "fillStyle" === a && (a = "strokeStyle");
                return c.prototype.ja.call(this, a)
            };
            a.prototype.format = function() {
                var a, c;
                this.la.length = 0;
                var e = this.ba.points;
                var h = a = 0;
                for (c = e.length - 1; a <= c; h = a += 2) this.la.push(new G(e[h], e[h + 1]));
                h = H.Wg(this.la);
                e = this.Ka().jc();
                a = this.ba.lineWidth;
                h.Dd(a / e.x, a / e.y);
                this.Ga = h.clone();
                h = new Pc(h);
                h.transform(this.ba.matrix);
                this.rect = H.Wg(h.la);
                this.qc = [];
                if ("dashes" in this.ba)
                    for (e = this.ba.dashes.split(","), h = 0; h < e.length; h++) a = parseFloat(e[h]), isNaN(a) || this.qc.push(a)
            };
            a.prototype.wb = function(a, c) {
                if (this.rect.ed(a, c)) {
                    var b = this.$d().apply(a, c);
                    if (Mc(this.la, b.x, b.y, 12 + this.ba.lineWidth / 2)) return this
                }
                return null
            };
            a.prototype.cf = function(b) {
                var c = this.ba.points;
                if (0 !== c.length) {
                    b.save();
                    b.beginPath();
                    var e = this.ja("lineCap") || "round";
                    b.lineCap = e;
                    b.lineJoin = "round" === e ? "round" : "bevel";
                    if (1 < this.qc.length) {
                        e = this.la;
                        var h = this.qc;
                        if (0 !== e.length) {
                            b.moveTo(e[0].x, e[0].y);
                            var f = 0;
                            for (var k = 1, l = h[0], n = e[0].clone(), q; k < e.length;) q = n.Kb(e[k]), 0 === q ? k += 1 : q <= l ? (n = e[k].clone(), f & 1 ? b.moveTo(n.x, n.y) : b.lineTo(n.x, n.y), l -= q, k += 1) : (n.x += (e[k].x - n.x) * l / q, n.y += (e[k].y - n.y) * l / q, f & 1 ? b.moveTo(n.x, n.y) : b.lineTo(n.x, n.y), f = (f + 1) % h.length, l = h[f])
                        }
                    } else
                        for (b.moveTo(c[0], c[1]), e = h = 2, f = c.length - 1; h <= f; e = h += 2) b.lineTo(c[e], c[e + 1]);
                    this.$d().Yf(b);
                    yc(b, this.ba.strokeStyle);
                    if (a.Zr) {
                        this.Ka().Yf(b);
                        b.beginPath();
                        e = h = 0;
                        for (f = c.length - 1; h <= f; e = h += 2) b.rect(c[e] - 2, c[e + 1] - 2, 4, 4);
                        b.fillStyle = "#ff0000";
                        b.fill()
                    }
                    b.restore()
                }
            };
            a.Zr = !1;
            return a
        }(ed);
    ed.dd("BrushNode", eg);

    function fg(c) {
        return {
            m11: c.m11,
            m12: c.m21,
            m21: c.m12,
            m22: c.m22,
            dx: c.Ba,
            dy: c.Ca
        }
    }
    var X = function() {
            function c(a, b) {
                this.node = a;
                this.request = b
            }
            c.prototype.eu = function(a, b, c) {
                this.node.fu(b, a, this.request, c)
            };
            c.prototype.zu = function(a) {
                return this.node.Au(a)
            };
            c.prototype.Se = function() {
                this.request.Fg(this.node.id)
            };
            c.prototype.zv = function(a, b) {
                this.request.add(this.node.id, "image", a, null, b)
            };
            c.prototype.Qt = function(a) {
                this.node.up(a, !0)
            };
            c.prototype.Fx = function(a) {
                this.node.up(a, !1)
            };
            c.prototype.gu = function(a, b) {
                var c = new fd;
                b.text && c.Mg(b.text);
                if (b.font) {
                    var e = fe(b.font);
                    c.nr(e.fontFamily || "arial", parseFloat(e.fontSize), "bold" === e.fontWeight, "italic" === e.fontStyle, b.textDecoration || "")
                }
                c.hn(b.halign || null, b.valign || null);
                c.format(a, b.width || 0, b.height || 0);
                return {
                    draw: function(a, b, d) {
                        c.ia(a, b, d)
                    },
                    width: c.rect.width,
                    height: c.rect.height
                }
            };
            c.prototype.jc = function() {
                return 1
            };
            c.prototype.ow = function(a) {
                return new he(a)
            };
            c.prototype.Zd = function(a) {
                return this.request.Zd(a)
            };
            return c
        }(),
        gg = function(c) {
            function a(a, d) {
                var b = c.call(this, a, d) || this;
                b.Ua = null;
                b.log = x.create("CUSTOM");
                b.setProperty("matrix", new J);
                return b
            }
            __extends(a, c);
            a.prototype.type = function() {
                return "CustomNode"
            };
            a.prototype.setProperty = function(a, d) {
                if (null === this.Ua && "nodeType" === a) {
                    var b = P.Gl[d];
                    this.Ua = new b(this.id);
                    for (var h in this.ba) this.setProperty(h, this.ba[h]);
                    this.ba.nodeType = d
                } else d = c.prototype.setProperty.call(this, a, d), "matrix" === a && (d = fg(d)), this.Ua && this.Ua.setProperty && this.Ua.setProperty(a, d)
            };
            a.prototype.Le = function() {
                return this.Ua && this.Ua.hasEditMode ? this.Ua.hasEditMode() : !1
            };
            a.prototype.am = function() {
                var a = [];
                this.Ua && this.Ua.getEditHandles && (a = this.Ua.getEditHandles());
                for (var c = this.Ka(), e = [], h = 0; h < a.length; h++) {
                    var f = a[h];
                    e.push(c.apply(f.x || 0, f.y || 0))
                }
                return e
            };
            a.prototype.wb = function(a, c) {
                var b = this.$d().apply(a, c);
                return this.hidden() || this.ja("locked") || !this.Ga.ed(b.x, b.y) || this.Ua && this.Ua.hittest && !this.Ua.hittest(b.x, b.y) ? null : this
            };
            a.prototype.ej = function(a, c) {
                a.beginPath();
                for (var b = 10 / c, d = 2 / c, f = 0, k = this.am(); f < k.length; f++) {
                    var l = k[f];
                    a.moveTo(l.x + b / c, l.y);
                    a.arc(l.x, l.y, b, 0, 2 * Math.PI, !1)
                }
                a.strokeStyle = "#0050B7";
                a.lineWidth = d;
                a.stroke()
            };
            a.prototype.pj = function() {
                this.am()
            };
            a.prototype.Jj = function(a, c, e) {
                for (var b = this.am(), d = 0; d < b.length; d++)
                    if (20 > b[d].Kb(new G(a, c)) / e) return d;
                return null
            };
            a.prototype.ge = function(a, c, e) {
                this.Ua && this.Ua.moveEditHandle && (c = this.$d().apply(c, e), this.Ua.moveEditHandle(a, c.x, c.y))
            };
            a.prototype.ja = function(a) {
                var b;
                this.Ua && this.Ua.getProperty && (b = this.Ua.getProperty(a));
                void 0 === b && (b = c.prototype.ja.call(this, a));
                "matrix" === a && (b = b ? b instanceof J ? b : new J(b.m11 || 1, b.m21 || 0, b.m12 || 0, b.m22 || 1, b.dx || 0, b.dy || 0) : new J);
                return b
            };
            a.prototype.Te = function(a) {
                this.Ua.setHidden && this.Ua.setHidden(a)
            };
            a.prototype.format = function(a, c) {
                if (this.Ua)
                    if (this.Lb || (this.Lb = new X(this, c)), "format" in this.Ua && this.Ua.format(a, this.Lb), this.Ua.getUntransformedRect) {
                        var b = this.Ua.getUntransformedRect();
                        this.Ga = new H(b.x || 0, b.y || 0, b.width || 0, b.height || 0);
                        this.rect = this.Ga.clone();
                        this.rect.transform(this.Ka())
                    } else this.log("Error: NodeType %s missing getUntransformedRect()", this.ba.nodeType)
            };
            a.prototype.cf = function(a) {
                a.save();
                a.getTransform = function() {
                    return a.pi ? fg(a.pi) : fg(new J)
                };
                this.Lb.jc = function() {
                    return a.pi ? a.pi.jc().x : 1
                };
                this.Ua.draw(a, this.Lb);
                a.restore()
            };
            return a
        }(ed);
    ed.dd("CustomNode", gg);
    X.prototype.formatFill = X.prototype.eu;
    X.prototype.getFill = X.prototype.zu;
    X.prototype.reformat = X.prototype.Se;
    X.prototype.loadImage = X.prototype.zv;
    X.prototype.fillEraser = X.prototype.Qt;
    X.prototype.strokeEraser = X.prototype.Fx;
    X.prototype.formatText = X.prototype.gu;
    X.prototype.getScale = X.prototype.jc;
    X.prototype.parseFont = X.prototype.ow;
    X.prototype.getConfig = X.prototype.Zd;
    var hg = function(c) {
        function a(a, d) {
            var b = c.call(this, a, d) || this;
            b.Rc = null;
            b.zd = null;
            b.width = 100;
            b.height = 20;
            b.vc = new Pc;
            b.sf = [];
            b.kd = new H(0, 0, b.width, b.height);
            b.pc = new H(0, 0, b.width, b.height);
            b.log = x.create("IMAGE", !0);
            delete b.ba.fillStyle;
            delete b.ba.strokeStyle;
            delete b.ba.lineWidth;
            b.ba.url = "";
            return b
        }
        __extends(a, c);
        a.prototype.type = function() {
            return "ImageNode"
        };
        a.prototype.setProperty = function(a, d) {
            c.prototype.setProperty.call(this, a, d);
            switch (a) {
                case "url":
                    this.zd = this.Rc = null;
                    break;
                case "brightness":
                case "contrast":
                case "gamma":
                    this.zd = null;
                    this.ba[a] = d;
                    break;
                case "allowCrop":
                case "crop":
                case "blendMode":
                case "opacity":
                case "width":
                case "height":
                    this.ba[a] = d
            }
        };
        a.prototype.Zw = function(a) {
            a.x = Math.max(a.x, 0);
            a.y = Math.max(a.y, 0);
            a.width = Math.min(a.width, this.kd.width);
            a.height = Math.min(a.height, this.kd.height);
            a.width = Math.max(1, a.width);
            a.height = Math.max(1, a.height);
            this.ba.crop = [a.x, a.y, a.width, a.height].join()
        };
        a.prototype.Kp = function() {
            var a = this.ba.crop,
                c = new H(0, 0, this.kd.width, this.kd.height);
            a && (a = a.split(","), c.x = parseFloat(a[0]) | 0, c.y = parseFloat(a[1]) | 0, c.width = parseFloat(a[2]) | 0, c.height = parseFloat(a[3]) | 0);
            return c
        };
        a.prototype.Mw = function() {
            var a = {
                brightness: this.ja("brightness"),
                contrast: this.ja("contrast"),
                gamma: this.ja("gamma")
            };
            this.zd = void 0 !== a.brightness && void 0 !== a.contrast && void 0 !== a.gamma && this.Rc ? this.Rt(this.Rc, a) || this.Rc : this.Rc
        };
        a.prototype.format = function(a, c) {
            function b(a, b, c) {
                n.sf.push({
                    x: n.pc.x + a * n.pc.width,
                    y: n.pc.y + b * n.pc.height,
                    de: c
                })
            }
            var d = this;
            null === this.Rc && "ImageSurface" in window ? (this.Rc = new window.ImageSurface(this.ba.url), this.kd = new H(0, 0, this.Rc.width, this.Rc.height)) : null === this.Rc ? (this.kd = new H(0, 0, this.width, this.height), c.add(this.id, "image", this.ba.url, null, function(a) {
                d.log("Got image response.");
                d.Rc = a;
                return c.Fg(d.id)
            })) : this.kd = new H(0, 0, this.Rc.width, this.Rc.height);
            if (null === this.zd && (this.Mw(), this.zd)) {
                var f = this.ja("width"),
                    k = this.ja("height");
                this.log("Override width/height as %s/%s", f, k);
                f && (this.zd.style.width = f + "px");
                k && (this.zd.style.height = k + "px")
            }
            this.pc = this.Kp();
            this.rect = this.pc.clone();
            if (f = this.ja("boundingPolygon")) {
                k = [];
                for (var l = 0; l < f.length; l += 2) k.push(new G(f[l], f[l + 1]));
                this.vc = new Pc(k)
            } else this.vc = new Pc(this.rect);
            this.Ga = this.rect.clone();
            this.vc.transform(this.ba.matrix);
            this.rect.transform(this.ba.matrix);
            this.sf.length = 0;
            var n = this;
            b(.5, 0, !0);
            b(1, .5, !1);
            b(.5, 1, !0);
            b(0, .5, !1)
        };
        a.prototype.mj = function() {
            return this.vc
        };
        a.prototype.wb = function(a, c) {
            return !this.ba.locked && this.vc.ed(a, c, 3) ? this : null
        };
        a.prototype.cf = function(b) {
            var c, e, h = !1;
            if (this.zd) try {
                var f = b.globalCompositeOperation,
                    k = b.globalAlpha,
                    l = this.ja("blendMode"),
                    n = this.ja("opacity");
                l && (b.globalCompositeOperation = "" + l, this.log("Using globalCompsiteOperation=%s (requested %s)", b.globalCompositeOperation, l));
                void 0 !== n && (b.globalAlpha = n);
                var q = this.ja("lineWidth") || 0;
                if (q) {
                    b.save();
                    this.$d().Yf(b);
                    var u = this.vc.clone();
                    u.Dd(q / 2);
                    b.beginPath();
                    u.ia(b);
                    b.lineWidth = q;
                    b.strokeStyle = this.ja("strokeStyle") || "#000000";
                    b.stroke();
                    b.restore()
                }
                b.drawImage(this.zd, this.pc.x, this.pc.y, this.pc.width, this.pc.height, this.pc.x, this.pc.y, this.pc.width, this.pc.height);
                b.globalAlpha = k;
                b.globalCompositeOperation = f;
                if (a.lo) {
                    var v = this.vc.la;
                    b.save();
                    b.setTransform(1, 0, 0, 1, 0, 0);
                    b.beginPath();
                    b.lineWidth = 2;
                    b.strokeStyle = "#000000";
                    b.moveTo(v[0].x, v[0].y);
                    var w = c = 1;
                    for (e = v.length - 1; c <= e; w = c += 1) b.lineTo(v[w].x, v[w].y);
                    b.closePath();
                    b.stroke();
                    b.restore()
                }
            } catch (y) {
                this.log("Error drawing image: %s", y.message), h = y
            }
            if (null === this.zd || h) b.save(), b.lineWidth = 1, b.strokeStyle = "#cccccc", b.strokeRect(0, 0, this.width, this.height), b.restore()
        };
        a.prototype.Le = function() {
            return !0 === this.ja("allowCrop") && !0 !== this.ja("lockEditMode")
        };
        a.prototype.ej = function(a, c) {
            a.save();
            a.beginPath();
            a.lineWidth = 1 * c;
            a.strokeStyle = "#0050B7";
            for (var b = this.Ka(), d = 0; d < this.sf.length; d++) {
                var f = this.sf[d],
                    k = b.apply(f.x, f.y),
                    l;
                if (f.de) {
                    var n = 20;
                    var q = l = 0;
                    var u = 3;
                    f = k.x - 10;
                    k = k.y - 6
                } else n = 0, l = 20, q = 3, u = 0, f = k.x - 6, k = k.y - 10;
                for (var v = 0; 5 > v; v++) a.moveTo(f, k), a.lineTo(f + n * c, k + l * c), f += q * c, k += u * c
            }
            a.stroke();
            a.restore()
        };
        a.prototype.Jj = function(a, c, e) {
            var b = this.Ka();
            e *= 10;
            for (var d = 0; d < this.sf.length; d++) {
                var k = this.sf[d];
                k = b.apply(k.x, k.y);
                if (k.x - e <= a && a < k.x + e && k.y - e <= c && c < k.y + e) return d
            }
            return null
        };
        a.prototype.pj = function(a) {
            a = this.sf[a];
            this.Ka().apply(a.x, a.y)
        };
        a.prototype.ge = function(a, c, e) {
            var b = this.Kp();
            c = this.$d().apply(c, e);
            c.x = Math.round(c.x);
            c.y = Math.round(c.y);
            0 === a && 0 <= c.y && c.y < this.kd.height ? (b.height -= c.y - b.y, b.y = c.y) : 1 === a && 0 <= c.x && c.x < this.kd.width ? b.width = c.x - b.x : 2 === a && 0 <= c.y && c.y < this.kd.height ? b.height = c.y - b.y : 3 === a && 0 <= c.x && c.x < this.kd.width && (b.width -= c.x - b.x, b.x = c.x);
            this.Zw(b)
        };
        a.prototype.Rt = function(a, c) {
            var b = a.width,
                d = a.height;
            if (!(a instanceof HTMLCanvasElement)) {
                var f = document.createElement("canvas");
                f.width = b;
                f.height = d;
                f.getContext("2d").drawImage(a, 0, 0);
                a = f
            }
            f = "number" === typeof c.brightness ? c.brightness : -1;
            var k = "number" === typeof c.contrast ? c.contrast : -1,
                l = "number" === typeof c.gamma ? c.gamma : -1,
                n = document.createElement("canvas");
            this.log("filterSpec: %s", JSON.stringify(c));
            this.log("brightness=%s contrast=%s gamma=%s w=%s h=%s", f, k, l, b, d);
            n.width = b + 1;
            n.height = d;
            try {
                var q = a.getContext("2d").getImageData(0, 0, b, d).data
            } catch (L) {
                return this.log("Cannot filter external image."), null
            }
            b = n.getContext("2d").getImageData(0, 0, b, d);
            d = b.data;
            for (var u = 0; u < q.length; u += 4) {
                var v = q[u] / 255,
                    w = q[u + 1] / 255,
                    y = q[u + 2] / 255,
                    z = q[u + 3];
                0 <= l && (v = Math.pow(v, l), w = Math.pow(w, l), y = Math.pow(y, l));
                0 <= f && (v *= f, y *= f, w *= f);
                0 <= k && (v = v * k - .5 * k + .5, w = w * k - .5 * k + .5, y = y * k - .5 * k + .5);
                d[u] = Math.min(255 * v | 0, 255);
                d[u + 1] = Math.min(255 * w | 0, 255);
                d[u + 2] = Math.min(255 * y | 0, 255);
                d[u + 3] = z
            }
            n.getContext("2d").putImageData(b, 0, 0);
            return n
        };
        a.lo = !1;
        return a
    }(ed);
    ed.dd("ImageNode", hg);
    var ig = function(c) {
        function a(a, d) {
            var b = c.call(this, a, d) || this;
            b.Ci = "UnknownNode";
            b.width = 100;
            b.height = 20;
            b.gb = new fd;
            b.log = x.create("UNKNOWN", !0);
            b.gb.hn("center", "middle");
            return b
        }
        __extends(a, c);
        a.prototype.ox = function(a) {
            this.Ci = a;
            this.gb.Mg(a);
            this.log("Creating placeholder for node type %s", a)
        };
        a.prototype.type = function() {
            return this.Ci
        };
        a.prototype.setProperty = function(a, c) {
            this.ba[a] = c
        };
        a.prototype.format = function(a) {
            this.log("Formatting placeholder for %s", this.Ci);
            this.rect = new H(0, 0, this.width, this.height);
            this.rect.transform(this.ba.matrix);
            this.gb.format(a, this.width, this.height)
        };
        a.prototype.cf = function(a) {
            this.log("Drawing placeholder for for %s", this.Ci);
            a.save();
            a.lineWidth = 1;
            a.fillStyle = "#888888";
            a.fillRect(0, 0, this.width, this.height);
            a.fillStyle = "#000000";
            this.gb.ia(a, 0, 0);
            a.restore()
        };
        a.lo = !1;
        return a
    }(ed);
    ed.dd("UnknownNode", ig);
    var jg = function(c) {
        function a() {
            var a = null !== c && c.apply(this, arguments) || this;
            a["class"] = "DataNode";
            return a
        }
        __extends(a, c);
        a.prototype.type = function() {
            return "DataNode"
        };
        a.prototype.Fi = function() {
            return !0
        };
        return a
    }(bd);
    bd.dd("DataNode", jg);
    var kg = x.create("RootNode"),
        lg = function(c) {
            function a(a, d, e) {
                a = c.call(this, a, d) || this;
                kg("Root node is constructed: Traits=%s", a.Pb);
                a.fa = e;
                return a
            }
            __extends(a, c);
            return a
        }($f(bd));
    var vf = new Cc(816, 1056),
        mg = x.create("DOC"),
        ff = function() {
            function c(a, b, c) {
                this.nv = c;
                this.Kc = document.createElement("DIV");
                this.Oc = new rc;
                this.Ep = !0;
                this.Nb = "0";
                this.Oh = new rc;
                this.removedNodes = new rc;
                this.ih = new rc;
                this.Bk = 0;
                this.wn = "magenta";
                this.readOnly = !1;
                this.Ml = new rc;
                this.Gh = new rc;
                this.ho = new rc;
                this.Kd = [];
                this.ug = this.qh = this.ab = 0;
                this.cr = "";
                this.Iq = function() {};
                this.vg = 0;
                this.Kc.setAttribute("nid", "0");
                this.root = new lg(this.sj(), this, this.Kc);
                this.tb = new Db(this, this.root);
                this.kb = new Bb(this.tb, sc(3), !0);
                this.qq();
                a || (this.Va(), this.wc(this.Qj(0)), this.ua(!0));
                b && this.ss(b, c)
            }
            c.prototype.ss = function(a, b) {
                var c = this;
                B(a).query("[z-fixture]", function(a) {
                    var d = a.getAttribute("z-fixture") || "",
                        e = new Ue(d, c);
                    e.fa = a;
                    e.Bp = !0;
                    e.rr(b);
                    mg("Register fixture %s", d);
                    e.fa.setAttribute("nid", d);
                    c.tb.ys(d, e)
                })
            };
            c.prototype.empty = function() {
                return 0 === this.root.Ma()
            };
            c.prototype.qq = function() {
                this.cr = this.kb.Ke()
            };
            c.prototype.Ce = function() {
                return this.cr !== this.kb.Ke()
            };
            c.prototype.Xa = function() {
                this.tb.rc(function(a) {
                    a.Xa()
                })
            };
            c.prototype.sj = function() {
                var a = this.Nb;
                this.Nb = ((2147483647 * Math.random() | 0) + 1).toString(36);
                return a
            };
            c.prototype.yd = function(a) {
                return this.tb.yd(a)
            };
            c.prototype.Bq = function(a) {
                mg("onCreateNode: %s", a);
                "PageNode" !== a.type() && (this.Oh.add(a.id), this.removedNodes.remove(a.id));
                a.ja("spotHighlight") && "PathNode" === a.type() && this.Kd.push(a);
                this.ug = this.ae(a.id) || 0;
                "DomNode" === a.type() ? this.Ml.add(a.id) : "PageNode" === a.type() && (this.qh = -1);
                Xc(a) && (a.ek(), a.Lg(this.readOnly), this.Oc.add(a.id), this.ho.add(a.Cd()))
            };
            c.prototype.Nh = function(a) {
                this.ih.add(a);
                this.ug = this.ae(a) || 0;
                this.Oc.add(a)
            };
            c.prototype.Ja = function(a, b) {
                void 0 === b && (b = !1);
                if (this.tb.yd(a)) {
                    var c = this.tb.Ja(a);
                    b && (this.Oc.add(a), this.ih.add(a), this.ug = this.ae(a) || 0);
                    return c
                }
                return null
            };
            c.prototype.eb = function(a, b) {
                void 0 === b && (b = !1);
                var c = this.Ja(a, b);
                return c && Xc(c) ? c : null
            };
            c.prototype.ae = function(a) {
                for (a = this.Ja(a, !1);;)
                    if (a)
                        if ("PageNode" === a.type()) break;
                        else {
                            if (null === a.parent) return null;
                            a = a.parent
                        }
                else return null;
                a = this.root.Ie(a);
                return 0 <= a ? a : null
            };
            c.prototype.Su = function(a) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var e = this.Ja(a[c], !1);
                    e && b.push(e)
                }
                return b = this.Oi(b)
            };
            c.prototype.Wt = function(a) {
                var b = [];
                this.tb.rc(function(c) {
                    c.ja("tag") === a && b.push(c)
                });
                return b
            };
            c.prototype.Va = function() {
                this.vg++;
                mg("begin(); nested transactions=%s", this.vg)
            };
            c.prototype.ua = function(a) {
                void 0 === a && (a = !1);
                this.vg = Math.max(this.vg - 1, 0);
                mg("commit(skip=%s); nested transactions=%s", a, this.vg);
                0 === this.vg ? (this.kb.ua(!1, a), this.tb.ua(!1)) : mg("In a nested transaction; not committing.")
            };
            c.prototype.transaction = function(a) {
                this.Va();
                a(this);
                this.ua()
            };
            c.prototype.fk = function(a) {
                mg("onCommit occured");
                this.Iq(a, this.Oh.Ib(), this.removedNodes.Ib(), this.ih.aj(this.Oh).aj(this.removedNodes).Ib());
                this.Oh = new rc;
                this.removedNodes = new rc;
                this.ih = new rc
            };
            c.prototype.xc = function() {
                this.kb.xc()
            };
            c.prototype.Gd = function() {
                this.kb.Gd()
            };
            c.prototype.Sd = function() {
                return this.kb.Sd()
            };
            c.prototype.Rd = function() {
                return this.kb.Rd()
            };
            c.prototype.tk = function() {
                this.kb.zl()
            };
            c.prototype.format = function(a, b) {
                var c = this,
                    e = [],
                    h;
                this.Ep ? this.tb.rc(function(a) {
                    Xc(a) && e.push(a)
                }) : this.Oc.rc(function(a) {
                    a = c.tb.Ja(a);
                    Xc(a) && e.push(a);
                    return !1
                });
                var f = this.Oi(e);
                var k = 0;
                for (h = f.length; k < h; k++) {
                    var l = f[k];
                    l.format(a, b)
                }
                this.Oc.clear();
                this.Ep = !1;
                this.it();
                return e.length
            };
            c.prototype.Et = function(a, b, c) {
                if (0 !== this.Kd.length && b === this.Bk) {
                    a.save();
                    a.beginPath();
                    b = c || this.Xb();
                    a.moveTo(b.x, b.y);
                    a.lineTo(b.x, b.bottom());
                    a.lineTo(b.right(), b.bottom());
                    a.lineTo(b.right(), b.y);
                    a.closePath();
                    c = !1;
                    for (var d = 0; d < this.Kd.length; d++) this.ae(this.Kd[d].id) === this.ab && (this.Kd[d].clip(a), c = !0);
                    c && (a.clip(), a.fillStyle = this.wn, a.fillRect(b.x, b.y, b.width, b.height));
                    a.restore()
                }
            };
            c.prototype.Xd = function(a, b) {
                var c = b || this.Xb(),
                    e = this.ja("background");
                e && (e = r.lj(e)) && (a.fillStyle = e.toString(), a.fillRect(c.x, c.y, c.width, c.height))
            };
            c.prototype.ia = function(a, b) {
                function c(c) {
                    h.sc(function(b) {
                        h.Gh.contains(b.Vc()) || b.Cd() !== c || b.hidden() || (b.mr(k++), b.ia(a))
                    });
                    h.Et(a, c, b)
                }
                var e, h = this;
                this.ho.add(this.Bk);
                var f = this.ho.Ix();
                f.sort(function(a, b) {
                    return a - b
                });
                var k = 0;
                var l = 0;
                for (e = f.length; l < e; l++) c(f[l])
            };
            c.prototype.wb = function(a, b, c, e) {
                var d = null;
                this.sc(function(f) {
                    f.Vc() === c && f.wb(a, b) && (!(null === d || d.Cd() <= f.Cd()) || e && e !== f.type() || (d = f))
                });
                return d
            };
            c.prototype.mv = function(a, b) {
                var c = [],
                    e = 0,
                    h = {};
                this.sc(function(d) {
                    d.wb(a, b) && (c.push(d), h[d.id] = e, e += 1)
                });
                c.sort(function(a, b) {
                    return a.Cd() != b.Cd() ? a.Cd() - b.Cd() : h[a.id] - h[b.id]
                });
                c.reverse();
                return c
            };
            c.prototype.Uu = function(a) {
                var b = [];
                this.sc(function(c) {
                    a.contains(c.rect) && b.push(c)
                });
                return b
            };
            c.prototype.Oi = function(a) {
                var b, c = [],
                    e = {};
                var h = 0;
                for (b = a.length; h < b; h++) {
                    var f = a[h];
                    if (Xc(f)) {
                        for (; f.vm() && f.parent;) mg("Node type %s:%s is a group member", f.id, f.type()), Xc(f.parent) && (f = f.parent);
                        f.id in e || (e[f.id] = f, c.push(f))
                    }
                }
                this.Cx(c);
                return c
            };
            c.prototype.rc = function(a, b) {
                function c(d) {
                    if (d.Ma()) {
                        a && Xc(d) && b(d);
                        for (var e = 0; e < d.Ma(); e++) c(d.rb(e))
                    } else Xc(d) && b(d)
                }
                c(this.root)
            };
            c.prototype.sc = function(a, b) {
                function c(b) {
                    if (Xc(b) && !1 === a(b)) return !1;
                    if (0 != (b.Pb & 2))
                        for (var d = 0; d < b.Ma(); d++)
                            if (!1 === c(b.rb(d))) return !1
                }
                void 0 === b && (b = this.ab);
                b < this.root.Ma() && c(this.root.rb(b || 0))
            };
            c.prototype.ku = function(a) {
                var b = !1,
                    c = a.mj(),
                    e = [];
                this.sc(function(d) {
                    b ? d.mj().rv(c) && e.push(d) : d === a && (b = !0)
                });
                return e
            };
            c.prototype.Cx = function(a) {
                var b = 0,
                    c = {};
                this.rc(!0, function(a) {
                    c[a.id] = b++
                });
                a.sort(function(a, b) {
                    return c[a.id] - c[b.id]
                })
            };
            c.prototype.Pw = function(a) {
                var b, c = [];
                var e = 0;
                var h = this.Oi(a);
                var f = 0;
                for (b = h.length; f < b; f++) a = h[f], e = this.Ho(a, c, e, null);
                return "zwibblerclip." + JSON.stringify(c)
            };
            c.prototype.Ho = function(a, b, c, e) {
                var d = a.Ic(),
                    f = {},
                    k;
                for (k in d) {
                    var l = d[k];
                    l instanceof J && (l = ["Matrix", l.m11, l.m12, l.m21, l.m22, l.Ba, l.Ca]);
                    f[k] = l
                }
                b.push({
                    type: "CreateAction",
                    node: a.type(),
                    parent: e,
                    properties: f
                });
                e = c + 1;
                for (d = 0; d < a.Ma(); d++) e = this.Ho(a.rb(d), b, e, c);
                return e
            };
            c.prototype.oq = function(a, b) {
                var c, e;
                0 === a.indexOf("zwibblerclip.") && (a = a.substr(13));
                var h = [];
                var f = JSON.parse(a);
                var k = {},
                    l = 0,
                    n = 0;
                var q = 0;
                for (e = f.length; q < e; q++) {
                    var u = f[q];
                    if ("GroupAction" === u.type) {
                        var v = this.sj();
                        k[l++] = v;
                        v = [];
                        var w = 0;
                        for (u = u.members; w < u.length; w++) v.push(k[u[w]]);
                        u = this.group(v);
                        k[l++] = u;
                        h.push(u)
                    } else if ("CreateAction" === u.type) {
                        var y = u.properties;
                        v = {};
                        for (c in y) y.hasOwnProperty(c) && (w = y[c], "[object Array]" === Object.prototype.toString.apply(w) && "Matrix" === w[0] && (w.splice(0, 1), w = new J(w)), v[c] = w);
                        y = this.$l();
                        var z = -1;
                        w = !0;
                        "parent" in u && u.parent in k ? (y = k[u.parent], w = !1) : "PageNode" === u.node && (y = this.root.id, z = this.ab + 1 + n, n += 1);
                        v = this.createNode(u.node, v, y, z);
                        k[l++] = v;
                        ("HTMLNode" !== u.node || w) && h.push(v)
                    }
                }
                0 !== n || b.iq() || this.Ld(h, b)
            };
            c.prototype.Ew = function(a, b) {
                var c = "function" !== typeof b ? function(a) {
                    return a === b
                } : b;
                for (var e = 0, h = 0; h < a.length; h++) c(a[h]) ? e += 1 : e && (a[h - e] = a[h]);
                a.length -= e
            };
            c.prototype.Cq = function(a) {
                var b = this.ae(a.id) || 0;
                this.Oh.remove(a.id);
                this.ih.remove(a.id);
                this.removedNodes.add(a.id);
                Xc(a) && a.hk();
                a.Xa();
                this.Oc.remove(a.id);
                a.ja("spotHighlight") && this.Ew(this.Kd, a);
                this.Ml.remove(a.id);
                "PageNode" === a.type() ? (b === this.ab && (mg("Removed current page."), this.wc(Math.min(b, this.Wb() - 1)), this.ug = this.ab), this.qh = -1) : this.ug = b
            };
            c.prototype.Ip = function(a) {
                function b(a) {
                    if (!k || a.rect.x < c) c = a.rect.x;
                    if (!k || a.rect.right() > e) e = a.rect.right();
                    if (!k || a.rect.y < h) h = a.rect.y;
                    if (!k || a.rect.bottom() > f) f = a.rect.bottom();
                    k = !0
                }
                var c = 0,
                    e = 0,
                    h = 0,
                    f = 0,
                    k = !1;
                "number" === typeof a ? this.sc(b, a) : this.rc(!1, b);
                return k ? new H(c, h, e - c, f - h) : new H(0, 0, 10, 10)
            };
            c.prototype.kv = function() {
                var a = this.zh(void 0),
                    b = null;
                a instanceof cg && (b = a.Xb());
                return b || this.root.Eh("width")
            };
            c.prototype.Xb = function(a, b) {
                var c = this.zh(a),
                    e = null;
                c instanceof cg && (e = c.Xb());
                return e ? e.Br() : this.ja("width") ? new H(0, 0, this.ja("width"), this.ja("height")) : b ? b.Br() : this.Ip(a)
            };
            c.prototype.ja = function(a) {
                return this.root.ja(a)
            };
            c.prototype.Eh = function() {
                return this.root
            };
            c.prototype.setProperty = function(a, b) {
                this.Ob([this.root.id], a, b)
            };
            c.prototype.Ob = function(a, b, c) {
                var d = {};
                d[b] = c;
                this.Qc(a, d)
            };
            c.prototype.Qc = function(a, b) {
                var c = this;
                this.rf(a, function(a) {
                    var d = {},
                        e;
                    for (e in b) d[e] = a.ja(e);
                    c.kb.Ue(a.id, b, d)
                })
            };
            c.prototype.Hq = function(a, b) {
                this.Oc.add(a.id);
                if ("spotHighlight" in b && "PathNode" === a.type()) {
                    for (var c = 0; c < this.Kd.length; c++)
                        if (this.Kd[c] === a) {
                            this.Kd.splice(c, 1);
                            break
                        }
                    b.spotHighlight && "PathNode" === a.type() ? (mg("Added node %s to spotHighlightNodes", a.id), this.Kd.push(a)) : mg("Removed node %s from spotHighlightNodes", a.id)
                }
            };
            c.prototype.hi = function(a, b) {
                mg("showLayer(%s, %s)", a, b);
                b ? (this.Gh.remove(a), this.sc(function(b) {
                    b.Vc() === a && b.ek()
                })) : (this.Gh.add(a), this.sc(function(b) {
                    b.Vc() === a && b.hk()
                }))
            };
            c.prototype.wm = function(a) {
                return !this.Gh.contains(a)
            };
            c.prototype.Qj = function(a) {
                mg("Adding page to document with index %s", a);
                if (a > this.root.Ma()) return mg("Error: Can insert page with index %s", a), -1;
                this.createNode("PageNode", {}, this.root.id, a);
                return a
            };
            c.prototype.Wb = function() {
                return this.root.Ma()
            };
            c.prototype.wc = function(a) {
                if (a !== this.ab) {
                    if (0 <= a && a < this.Wb()) return mg("Set current page to %s/%s", a, this.Wb()), this.ab = a, !0;
                    mg("Tried to set page to non-existing %s", a);
                    return !1
                }
            };
            c.prototype.wx = function() {
                this.qh !== this.ab && (this.Mn(this.qh, !1), this.Mn(this.ab, !0), this.qh = this.ab)
            };
            c.prototype.Mn = function(a, b) {
                var c = this;
                b ? this.sc(function(a) {
                    "DomNode" !== a.type() || c.Gh.contains(a.Vc()) || a.ek()
                }, a) : this.Ml.rc(function(a) {
                    (a = c.eb(a, !1)) && a.hk()
                })
            };
            c.prototype.zh = function(a) {
                return 0 === this.root.Ma() ? this.root : void 0 === a ? this.root.rb(this.ab) : this.root.rb(a)
            };
            c.prototype.km = function() {
                return this.Xb(this.ab, vf)
            };
            c.prototype.Lg = function(a) {
                this.rc(!1, function(b) {
                    b.Lg(a)
                })
            };
            c.prototype.getRootNode = function() {
                return this.root
            };
            c.prototype.Ev = function(a, b) {
                var c = b.$type || "",
                    e = bd.create(c, a, this);
                e || (c in P.Gl ? (e = new gg(a, this), e.setProperty("nodeType", c)) : (mg("Bad node type: %s", c), e = bd.create("UnknownNode", a, this), e.ox(c)));
                5 === (e.Pb & 5) && e.rr(this.nv);
                e.Ue(b);
                return e
            };
            c.prototype.createNode = function(a, b, c, e, h) {
                h || (h = this.sj());
                c || (c = this.$l());
                var d = this.Ja(c);
                if (!d) throw Error("createNode type=" + a + ": parent " + c + " does not exist");
                if (void 0 === e || -1 == e) e = d.Ma();
                b.$type = a;
                this.kb.createNode(h, c, e, b);
                return h
            };
            c.prototype.rf = function(a, b) {
                for (var c = 0; c < a.length; c++) {
                    var e = a[c],
                        h = this.Ja(e);
                    h ? b(h) : mg("Node %s does not exist", e)
                }
            };
            c.prototype.Sb = function(a) {
                function b(a) {
                    for (var d = a.Ma() - 1; 0 <= d; d--) b(a.rb(d));
                    c.kb.Wd(a.id, a.parent.id, a.parent.Ie(a))
                }
                var c = this;
                this.rf(a, function(a) {
                    a.parent ? b(a) : mg("deleteNode(%s): node has no parent", a.id)
                })
            };
            c.prototype.Ld = function(a, b) {
                var c = this;
                this.rf(a, function(a) {
                    if (Xc(a)) {
                        var d = b.multiply(a.Ka());
                        c.Ob([a.id], "matrix", d)
                    }
                })
            };
            c.prototype.ge = function(a, b, c, e) {
                var d = this.eb(a, !0);
                if (d && d.Le()) {
                    var f = d.Np(),
                        k = d.ja(f);
                    d.ge(b, c, e);
                    b = d.ja(f);
                    d.setProperty(f, k);
                    this.Ob([a], f, b)
                }
            };
            c.prototype.$l = function() {
                return this.root.rb(this.ab).id
            };
            c.prototype.group = function(a) {
                var b = this.createNode("GroupNode", {});
                this.Di(b, a);
                return b
            };
            c.prototype.Di = function(a, b) {
                var c = this,
                    e = 0;
                this.rf(b, function(b) {
                    if (!b.parent) throw Error("Expected node to have a parent");
                    c.kb.Lc(b.id, a, e++, b.parent.id, b.parent.Ie(b))
                })
            };
            c.prototype.Qg = function(a) {
                var b = this,
                    c = {};
                this.rf(a, function(a) {
                    if (a instanceof ve && !(a.id in c) && a.parent) {
                        c[a.id] = !0;
                        for (var d = a.parent.Ma(), e = a.Ma() - 1; 0 <= e; e--) b.kb.Lc(a.children[e].id, a.parent.id, d, a.id, e);
                        b.Sb([a.id])
                    }
                })
            };
            c.prototype.duplicate = function(a, b, c) {
                function d(a, b) {
                    var c = a.Ic();
                    "matrix" in c && (c.matrix = f.multiply(c.matrix));
                    c = h.createNode(a.type(), c, b);
                    if (0 != (a.Pb & 2))
                        for (var e = 0; e < a.Ma(); e++) d(a.rb(e), c)
                }
                var h = this,
                    f = new Fc(b, c);
                this.rf(a, function(a) {
                    null !== a.parent && d(a, a.parent.id)
                })
            };
            c.prototype.Lc = function(a, b, c) {
                var d = this.Ja(a);
                if (null === d) throw Error("moveNode: " + a + " does not exist");
                var h = this.Ja(b);
                if (null === h) throw Error("moveNode: New parent " + b + " does not exist"); - 1 === c && (c = d.parent !== h ? h.Ma() : h.Ma() - 1);
                if (null === d.parent) throw Error("Expected a parent");
                h === d.parent && c === d.parent.Ie(d) ? mg("moveNode: Skip moving to the same place") : this.kb.Lc(a, b, c, d.parent.id, d.parent.Ie(d))
            };
            c.prototype.Uc = function(a, b, c) {
                var d = this;
                void 0 === c && (c = -1);
                this.rf(a, function(a) {
                    if (a.parent) {
                        var e = a.parent.id,
                            h = a.parent.Ie(a);
                        switch (b) {
                            case 0:
                                d.Lc(a.id, e, -1);
                                break;
                            case 1:
                                d.Lc(a.id, e, 0);
                                break;
                            case 3:
                                0 < h && d.Lc(a.id, e, h - 1);
                                break;
                            case 2:
                                h < a.parent.Ma() - 1 && d.Lc(a.id, e, h + 1);
                                break;
                            case 4:
                                d.Lc(a.id, e, c)
                        }
                    }
                })
            };
            c.prototype.toString = function() {
                return this.encode(this.root)
            };
            c.prototype.encode = function(a, b) {
                void 0 === b && (b = "");
                if (!(a instanceof bd)) return b + "NOT A NODE: " + a + "\n";
                var c = a.type();
                c = b + a.id + ": " + c + "\n";
                for (var e = 0; e < a.Ma(); e++) c += this.encode(a.rb(e), b + "  ");
                return c
            };
            c.prototype.dm = function(a) {
                if (a instanceof Element)
                    for (; a;) {
                        var b = a.getAttribute("nid");
                        if (b && (b = this.Ja(b)) && 5 === (b.Pb & 5)) return b;
                        a = a.parentElement
                    }
                return null
            };
            c.prototype.it = function() {
                this.zo(this.Kc, new J, null, 0, 0)
            };
            c.prototype.zo = function(a, b, c, e, h) {
                if (a instanceof HTMLElement) {
                    var d = a.offsetLeft - a.scrollLeft,
                        k = a.offsetTop - a.scrollTop;
                    c === a.offsetParent && (d -= e, k -= h);
                    b = b.multiply(new Fc(d, k));
                    c = a.getAttribute("nid") || "0";
                    (c = this.Ja(c)) && Zc(c) && (e = new H(0, 0, c.fa.offsetWidth, c.fa.offsetHeight), e.transform(b), c.lx(e));
                    for (c = a.firstElementChild; c;) this.zo(c, b, a.offsetParent, a.offsetLeft, a.offsetTop), c = c.nextElementSibling
                }
            };
            c.prototype.mm = function() {
                return this.kb.mm()
            };
            c.prototype.locked = function() {
                return this.kb.locked()
            };
            c.prototype.om = function(a) {
                return this.kb.om(a)
            };
            return c
        }();
    var gf = new(function() {
        function c() {
            this.log = x.create("serializer");
            this.jo = {
                pdf: "application/pdf",
                svg: "image/svg+xml",
                png: "image/png",
                jpeg: "image/jpeg",
                jpg: "image/jpeg",
                bmp: "image/bmp"
            }
        }
        c.prototype.Yg = function(a, b, c) {
            if (a instanceof Array) b = this.cq(a, b, c);
            else {
                if ("string" !== typeof a) return this.log("Can only open an array or string as a document."), null;
                if ("{" === a.charAt(0)) b = this.Av(a, b, c);
                else if (0 === a.indexOf("zwibbler3.")) a = JSON.parse(a.substr(10)), b = this.cq(a, b, c);
                else if (0 === a.indexOf("zwibblerclip.")) b = new ff(!1, b, c), b.oq(a, new J), b.tk();
                else throw Error("Format detection failed.");
            }
            for (a = 1; a < b.Wb(); a++) b.Mn(a, !1);
            return b
        };
        c.prototype.Av = function(a, b, c) {
            function d(a) {
                var b = new J;
                b.m11 = a.m11;
                b.m12 = a.m12;
                b.m21 = a.m21;
                b.m22 = a.m22;
                b.Ba = a.dx;
                b.Ca = a.dy;
                return b
            }

            function h(a, b) {
                switch (a.type) {
                    case "Node":
                        for (var c = [], e = a.children, f = e.length - 1; 0 <= f; f--) try {
                            c.push(h(e[f], b + 1))
                        } catch (D) {}
                        return 0 < b ? k.group(c) : "";
                    case "PathNode":
                    case "ArrowNode":
                        var l = a;
                        e = 0;
                        "arrowSize" in l && (e = l.arrowSize, l = l.path);
                        c = d(l.matrix);
                        e = {
                            strokeStyle: l.strokeStyle,
                            fillStyle: l.fillStyle,
                            lineWidth: l.lineWidth,
                            smoothness: l.smoothness,
                            sloppiness: l.sloppiness,
                            shadow: l.shadow,
                            arrowSize: e,
                            seed: Math.round(65535 * Math.random())
                        };
                        "textNode" in l && (f = l.textNode, e.fontSize = f.fontSize, e.fontName = f.fontName, e.text = f.text, e.textFillStyle = "textFillStyle" in f ? f.textFillStyle : f.fillStyle);
                        "path" in l && (l = l.path);
                        var n = l.startX,
                            q = l.startY;
                        f = l.closed;
                        var R = new N;
                        l = l.segments;
                        n = c.apply(n, q);
                        R.moveTo(n.x, n.y);
                        for (n = 0; n < l.length; n++) {
                            var E = l[n];
                            switch (E.type) {
                                case 1:
                                    q = c.apply(E.x, E.y);
                                    R.lineTo(q.x, q.y);
                                    break;
                                case 2:
                                    q = c.apply(E.x, E.y);
                                    R.nh(q.x, q.y);
                                    break;
                                case 3:
                                    q = c.apply(E.x1, E.y1);
                                    E = c.apply(E.x, E.y);
                                    R.nf(q.x, q.y, E.x, E.y);
                                    break;
                                default:
                                    throw "Unknown path segment type: " + E.type;
                            }
                        }
                        f && R.close();
                        e.commands = R.Ib();
                        return k.createNode("PathNode", e);
                    case "TextNode":
                        return c = d(a.matrix), c = c.multiply(new Fc(0, 1.3 * a.fontSize)), k.createNode("TextNode", {
                            fillStyle: a.fillStyle,
                            lineWidth: 0,
                            text: a.text,
                            fontName: a.fontName,
                            fontSize: a.fontSize,
                            matrix: c
                        });
                    default:
                        throw Error("Unknown node type: " + a.type);
                }
            }
            var f = x.create("IMPORT"),
                k = new ff(!1, b, c);
            try {
                var l = JSON.parse(a)
            } catch (n) {
                a = a.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
                try {
                    l = JSON.parse(a)
                } catch (q) {
                    throw f("Couldn't parse file."), "Couldn't parse file.";
                }
            }
            f("Successfully parsed!");
            h(l, 0);
            k.ua(!0);
            return k
        };
        c.prototype.cq = function(a, b, c) {
            function d(a, b) {
                if (void 0 !== a) {
                    var c = {};
                    for (var e in a) a.hasOwnProperty(e) && "children" !== e && "parent" !== e && "id" !== e && "type" !== e && (c[e] = "matrix" === e ? new J(a[e]) : a[e]);
                    e = a.id;
                    0 !== a.id && n.createNode(a.type, c, b, -1, e.toString(36));
                    if (void 0 !== a.children)
                        for (c = 0; c < a.children.length; c++) d(a.children[c], e.toString(36))
                }
            }
            a = JSON.parse(JSON.stringify(a));
            var h = {};
            var f = !1;
            for (var k = 0, l = a; k < l.length; k++)
                if ("PageNode" === l[k].type) {
                    f = !0;
                    break
                }
            var n = new ff(f, b, c);
            n.Va();
            for (b = 0; b < a.length; b++)
                if (c = a[b], "document" === c.type)
                    for (delete c.type, f = 0, k = c; f < k.length; f++) l = k[f], n.setProperty(l, c[l]);
                else {
                    if ("parent" in c) {
                        if (!(c.parent in h)) throw Error("Error: child " + c.id + " references parent " + c.parent + " before it was defined.");
                        f = h[c.parent];
                        void 0 !== f.children ? f.children.push(c) : f.children = [c]
                    }
                    "GroupNode" !== c.type && "PageNode" !== c.type || void 0 !== c.children || (c.children = []);
                    h[c.id] = c
                }
            d(h[0], "0");
            n.ua(!0);
            return n
        };
        c.prototype.xp = function(a) {
            function b(a, d) {
                var e = {
                    id: parseInt(d.id, 36),
                    type: d.type()
                };
                c.push(e);
                a && (e.parent = parseInt(a.id, 36));
                var h = d.Ic(),
                    l;
                for (l in h) h.hasOwnProperty(l) && ("matrix" === l ? e[l] = h[l].Ib() : "inverse" !== l && (e[l] = h[l]));
                for (e = 0; e < d.Ma(); e++) b(d, d.rb(e))
            }
            var c = [];
            b(null, a.getRootNode());
            return c
        };
        c.prototype.si = function(a, b, c) {
            b in this.jo && (b = this.jo[b]);
            if ("list" === b) a = this.xp(a), b = "application/json";
            else if ("zwibbler3" === b) a = this.xp(a), a = "zwibbler3." + JSON.stringify(a), b = "application/octet-stream";
            else if ("image/svg+xml" === b) {
                var d = a.Xb();
                var h = new je(d);
                a.Xd(h);
                a.ia(h);
                a = h;
                b = "image/svg+xml"
            } else if ("application/pdf" === b) {
                d = a.Xb(0);
                h = new te(new H(0, 0, d.width, d.height), P.fonts);
                var f = a.ab;
                for (b = 0; b < a.Wb(); b++) 0 < b && (d = a.Xb(b), h.Og(d)), h.translate(-d.x, -d.y), a.wc(b), a.Xd(h), a.ia(h);
                a.wc(f);
                a = h;
                b = "application/pdf"
            } else if (!(d = "image/png" === b || "image/bmp" === b) && (d = "image/jpeg" == b) && (d = document.createElement("canvas"), h = !1, d.width = 10, d.height = 10, "toDataURL" in d && (h = 0 < d.toDataURL("image/jpeg").indexOf("jpeg")), tc("JPEG supported: %s", h), d = h), d) h = document.createElement("canvas"), d = a.Xb(), h.width = d.width, h.height = d.height, f = h.getContext("2d"), f.translate(-d.x, -d.y), a.Xd(f), a.ia(f), a = "image/bmp" === b ? xc(h) : h.toDataURL(b), a = a.split(",")[1], a = atob(a);
            else throw "Unknown save format: " + b;
            if ("string" === typeof a)
                if ("string" === c) var k = a;
                else if ("data-uri" === c) k = "data:" + b + ";base64," + Ba(a);
            else {
                if ("blob" === c)
                    for (c = new Uint8Array(a.length), b = 0; b < a.length; b++) c[b] = a.charCodeAt(b)
            } else if (a.toBlob && a.toString) "string" === c ? k = a.toString() : "data-uri" === c ? k = "data:" + b + ";base64," + Ba(a.toString()) : "blob" === c && (k = a.toBlob());
            else if ("object" === c) k = a;
            else throw "Error in ZwibblerDocument.save()";
            return k
        };
        return c
    }());
    "undefined" !== typeof jQuery && (jQuery.fn.zwibbler = function(c) {
        void 0 === c && (c = {});
        var a = null;
        this.each(function(b, d) {
            d.zwibbler && jQuery(d).empty();
            a = new V(d, c);
            d.zwibbler = a
        });
        return a
    }, jQuery.fn.zwibblerContext = function() {
        return this[0].zwibbler
    });
    var Z = function() {
        function c() {
            this.tm = [];
            this.buttons = [];
            this.Gl = {};
            this.fonts = new re;
            this.Be = {};
            this.log = x.create("ZWIBBLER");
            this.WebSocket = WebSocket;
            this.controllers = {};
            this.Rr = V
        }
        c.prototype.create = function(a, b) {
            "string" === typeof a && 0 < a.length && "." !== a.charAt(0) && "#" !== a.charAt(0) && (a = "#" + a);
            var c = B.Ub(a);
            return c ? new V(c, b) : (alert("Zwibbler.create: Cannot find an element with id " + a), null)
        };
        c.prototype.ps = function(a) {
            for (var b = ["name", "image", "onclick"], c = 0; c < b.length; c++)
                if (!(b[c] in a)) return alert("Zwibbler.addButton: missing " + b[c]), !1;
            this.buttons.push(a);
            return !0
        };
        c.prototype.rs = function(a, b) {
            this.Gl[a] = b
        };
        c.prototype.Yr = function(a, b) {
            void 0 === b && (b = {});
            return this.Zk(a, b)
        };
        c.prototype.Zk = function(a, b) {
            void 0 === b && (b = {});
            return ec(a, b)
        };
        c.prototype.ut = function(a, b) {
            return this.Rf(a, b)
        };
        c.prototype.vb = function(a, b) {
            O.vb(a, function(a, c, h, f) {
                b(new gc(O, a, c, h, f))
            })
        };
        c.prototype.Rf = function(a, b, c) {
            function d() {
                var a = y.Xb(),
                    b = 1,
                    d = 0,
                    e = 0;
                l && (a.y = l);
                u && (a.height = u - a.y);
                n && (a.x = n);
                q && (a.width = q - a.x);
                f && k ? b = Math.min(f / a.width, k / a.height) : f ? (b = f / a.width, k = a.height * b) : k ? (b = k / a.height, f = a.width * b) : (f = a.width, k = a.height);
                a.width * b < f && (d = f / 2 - a.width * b / 2);
                a.height * b < k && (e = k / 2 - a.height * b / 2);
                d -= a.x * b;
                e -= a.y * b;
                v.width = Math.ceil(f);
                v.height = Math.ceil(k);
                w.translate(d, e);
                w.scale(b, b);
                y.ia(w);
                h.log("Drawn.");
                c(v)
            }
            var h = this;
            void 0 === b && (b = {});
            void 0 === c && (c = function() {});
            var f = b.width || 0,
                k = b.height || 0,
                l = b.top || 0,
                n = b.left || 0,
                q = b.right || 0,
                u = b.bottom || 0,
                v = uc(null),
                w = v.getContext("2d"),
                y = gf.Yg(a, null, {});
            if (!y) throw Error("Zwibbler.render: Could not open document");
            var z = new ue;
            y.format(w, z);
            z.pa("reformat", function(a) {
                y.Nh(a)
            });
            z.hg ? z.pa("done", function() {
                y.format(w, z);
                d()
            }) : d();
            return v
        };
        c.prototype.save = function(a, b) {
            return new Tb(function(c, e) {
                var d = gf.Yg(a, null, {});
                if (d) {
                    d.Eh("background") || d.setProperty("background", "white");
                    var f = uc(null).getContext("2d"),
                        k = new ue;
                    k.pa("reformat", function(a) {
                        d.Nh(a)
                    });
                    k.pa("done", function() {
                        try {
                            d.format(f, k);
                            var a = gf.si(d, b, "string");
                            c(a)
                        } catch (n) {
                            e(n)
                        }
                    });
                    d.format(f, k)
                } else e(Error("Failed to open document"))
            })
        };
        c.prototype.nw = function(a) {
            a = r.Yd(a);
            return {
                r: a.values[0],
                g: a.values[1],
                b: a.values[2],
                a: a.values[3]
            }
        };
        c.prototype.Cv = function(a) {
            return (new r(r.RGBA, [a.r, a.g, a.b, a.a])).toString()
        };
        c.prototype.hu = function(a) {
            var b = document.createElement("a");
            b.href = a;
            return b.href
        };
        c.prototype.Os = function(a) {
            return Ba(a)
        };
        c.prototype.us = function(a, b) {
            var c = this;
            this.fonts.add(a, b).then(function() {
                if (!b) {
                    var d = c.fonts.au(a);
                    d && (b = d.wf)
                }
                b && c.Ne('\n@font-face {\n    font-family: "' + b + '";\n    src: url("' + a + '");\n}')
            }, function() {})
        };
        c.prototype.Xr = function(a) {
            return new N(a)
        };
        c.prototype.Qr = function(a) {
            var b = new N,
                c;
            void 0 === c && (c = null);
            a = a.match(/[A-Z]|[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/gi);
            var e = 0,
                h = 0,
                f, k = 0,
                l = 0,
                n = [];
            if (a)
                for (f = 0; f < a.length; f++) {
                    var q = a[f++];
                    var u = a;
                    for (n.length = 0; f < u.length; f++) {
                        var v = parseFloat(u[f]);
                        if (isNaN(v)) {
                            f--;
                            break
                        } else n.push(v)
                    }
                    if ("M" === q) {
                        b.moveTo(n[0], n[1]);
                        for (q = 2; q < n.length; q += 2) b.lineTo(n[q], n[q + 1]);
                        e = n[n.length - 2];
                        h = n[n.length - 1]
                    } else if ("m" === q)
                        for (b.moveTo(n[0] + e, n[1] + h), e = n[0] + e, h = n[1] + h, q = 2; q < n.length; q += 2) b.lineTo(n[q] + e, n[q + 1] + h), e = n[q] + e, h = n[q + 1] + h;
                    else if ("L" === q) {
                        for (q = 0; q < n.length; q += 2) b.lineTo(n[q], n[q + 1]);
                        e = n[n.length - 2];
                        h = n[n.length - 1]
                    } else if ("l" === q)
                        for (q = 0; q < n.length; q += 2) b.lineTo(n[q] + e, n[q + 1] + h), e = n[q] + e, h = n[q + 1] + h;
                    else if ("H" === q)
                        for (q = 0; q < n.length; q += 1) b.lineTo(n[q], h), e = n[q];
                    else if ("h" === q)
                        for (q = 0; q < n.length; q += 1) b.lineTo(n[q] + e, h), e = n[q] + e;
                    else if ("V" === q)
                        for (q = 0; q < n.length; q += 1) b.lineTo(e, n[q]), h = n[q];
                    else if ("v" === q)
                        for (q = 0; q < n.length; q += 1) b.lineTo(e, n[q] + h), h = n[q] + h;
                    else if ("Q" === q)
                        for (q = 0; q < n.length; q += 4) b.quadraticCurveTo(n[q], n[q + 1], n[q + 2], n[q + 3]), k = n[q], l = n[q + 1], e = n[q + 2], h = n[q + 3];
                    else if ("C" === q)
                        for (q = 0; q < n.length; q += 6) b.bezierCurveTo(n[q], n[q + 1], n[q + 2], n[q + 3], n[q + 4], n[q + 5]), k = n[q + 2], l = n[q + 3], e = n[q + 4], h = n[q + 5];
                    else if ("c" === q)
                        for (q = 0; q < n.length; q += 6) b.bezierCurveTo(n[q] + e, n[q + 1] + h, n[q + 2] + e, n[q + 3] + h, n[q + 4] + e, n[q + 5] + h), k = n[q + 2] + e, l = n[q + 3] + h, e = n[q + 4] + e, h = n[q + 5] + h;
                    else if ("S" === q)
                        for (q = 0; q < n.length; q += 4) k = e + e - k, l = h + h - l, b.bezierCurveTo(k, l, n[q], n[q + 1], n[q + 2], n[q + 3]), k = n[q], l = n[q + 1], e = n[q + 2], h = n[q + 3];
                    else if ("s" === q)
                        for (q = 0; q < n.length; q += 4) k = e + e - k, l = h + h - l, b.bezierCurveTo(k, l, n[q] + e, n[q + 1] + h, n[q + 2] + e, n[q + 3] + h), k = n[q] + e, l = n[q + 1] + h, e = n[q + 2] + e, h = n[q + 3] + h;
                    else "z" === q || "Z" === q ? b.closePath() : c ? c(q, n) : Bc("Unknown command: %s", q)
                }
            return b.Ib()
        };
        c.prototype.Pp = function(a, b) {
            var c = document.createElement("img");
            c.src = a;
            c.onload = function() {
                b(c.naturalWidth, c.naturalHeight, c)
            }
        };
        c.prototype.Yw = function(a, b) {
            return vc(a, b)
        };
        c.prototype.Lx = function(a) {
            return this.ji(a)
        };
        c.prototype.Sj = function() {
            var a = document.createElement("DIV");
            return !!(a.requestFullscreen || a.msRequestFullscreen || a.Mv || a.webkitRequestFullscreen)
        };
        c.prototype.ji = function(a) {
            var b = B.Ub(a);
            if (!b) throw Error("Zwibbler.toggleFullScreen: " + a + " not found");
            a = document;
            this.hq() ? document.exitFullscreen ? document.exitFullscreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.Lv ? a.Lv() : a.webkitExitFullscreen && a.webkitExitFullscreen() : b.requestFullscreen ? b.requestFullscreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.Mv ? b.mozRequestFullScreen() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : console.log("Element does not contain any requestFullscreen methods")
        };
        c.prototype.hq = function() {
            var a = document;
            return a.fullscreenElement || a.mozFullScreenElement || a.webkitFullscreenElement || a.msFullscreenElement ? !0 : !1
        };
        c.prototype.Jt = function() {
            x.It()
        };
        c.prototype.Yp = function(a) {
            return Fe.Tr(a)
        };
        c.prototype.Ne = function(a) {
            ac(a)
        };
        c.prototype.controller = function(a, b) {
            this.controllers[a] = b
        };
        c.prototype.Qi = function(a, b) {
            O.Qi(a, b);
            this.Be[a] = b
        };
        c.prototype.su = function(a) {
            return a in this.Be ? JSON.parse(JSON.stringify(this.Be[a].sa || {})) : {}
        };
        c.prototype.Ui = function(a, b, c, e) {
            void 0 === c && (c = {});
            void 0 === e && (e = null);
            if ("object" !== typeof a || "string" !== typeof b) throw Error("Bad arguments passed to createComponent");
            return O.Ui(a, b, c, e)
        };
        c.prototype.oc = function(a, b) {
            var c = B.Ub(a);
            if (!c) throw Error("Zwibbler.attach: Cannot find element from " + a);
            return Xf(c, b, !0)
        };
        c.prototype.Bs = function(a) {
            return "string" !== typeof a.url ? Tb.reject(Error("Zwibbler.ajax: settings.url missing")) : Yb({
                url: a.url,
                method: a.method,
                Kq: a.params,
                mimeType: a.mimeType,
                contentType: a.contentType,
                withCredentials: a.withCredentials,
                data: a.data,
                lp: a.delay
            }).then(function(a) {
                O.digest();
                return a
            }, function(a) {
                O.digest();
                throw a;
            })
        };
        return c
    }();
    document.addEventListener("dragstart", function(c) {
        var a = c.target;
        "IMG" === a.tagName && (a = {
            "zwibbler-src": a.getAttribute("zwibbler-src"),
            "zwibbler-width": a.getAttribute("zwibbler-width")
        }, a["zwibbler-src"] && c.dataTransfer.setData("text", JSON.stringify(a)))
    });
    var P = new Z;
    P.instances = P.tm;
    Z.prototype.addButton = Z.prototype.ps;
    Z.prototype.addCustomNode = Z.prototype.rs;
    Z.prototype.Popup = Z.prototype.Yr;
    Z.prototype.Dialog = Z.prototype.Zk;
    Z.prototype.createPreview = Z.prototype.ut;
    Z.prototype.directive = Z.prototype.vb;
    Z.prototype.render = Z.prototype.Rf;
    Z.prototype.save = Z.prototype.save;
    Z.prototype.parseColour = Z.prototype.nw;
    Z.prototype.makeColour = Z.prototype.Cv;
    Z.prototype.getAbsoluteUrl = Z.prototype.hu;
    Z.prototype.base64Encode = Z.prototype.Os;
    Z.prototype.addFont = Z.prototype.us;
    Z.prototype.PathCommands = Z.prototype.Xr;
    Z.prototype.CommandsFromSvgPath = Z.prototype.Qr;
    Z.prototype.getImageSize = Z.prototype.Pp;
    Z.prototype.setColourOpacity = Z.prototype.Yw;
    Z.prototype.toggleFullScreen = Z.prototype.Lx;
    Z.prototype.isFullscreenSupported = Z.prototype.Sj;
    Z.prototype.toggleFullscreen = Z.prototype.ji;
    Z.prototype.isFullScreen = Z.prototype.hq;
    Z.prototype.enableConsoleLogging = Z.prototype.Jt;
    Z.prototype.hasConfig = Z.prototype.Yp;
    Z.prototype.injectStyle = Z.prototype.Ne;
    Z.prototype.controller = Z.prototype.controller;
    Z.prototype.component = Z.prototype.Qi;
    Z.prototype.createComponent = Z.prototype.Ui;
    Z.prototype.attach = Z.prototype.oc;
    Z.prototype.ajax = Z.prototype.Bs;
    Z.prototype.Context = Z.prototype.Rr;
    window.Zwibbler = P;
    var uf = {
        // style: ".zwibbler-builtin-toolbar {\n    background: white;\n    width: 130px;\n    overflow-y: auto;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none; \n     -khtml-user-select: none; \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none; \n}\n\n.zwibbler-builtin-toolbar button {\n    font-family: inherit;\n    font-size: 100%;\n    padding: 5px;\n    background-color: white;\n    border: none;\n}\n\n.zwibbler-builtin-toolbar button img {\n    margin: 0;\n}\n\n.zwibbler-builtin-toolbar button:hover,\n.zwibbler-builtin-toolbar button.selected {\n    background-color: #9fb3e7;\n}\n",
        // Kj: '<div class="zwibbler-builtin-toolbar">\n<button \n    z-if="getConfig(\'showPickTool\')"\n    z-click="usePickTool()"\n    z-selected="getCurrentTool()===\'pick\'"\n    title="Pick">\n    <img z-bind:src="getImageUrl(\'wd-pick.png\')">\n</button>\n<button \n    z-if="getConfig(\'showSquareTool\')"\n    z-click="useRectangleTool()"\n    z-selected="getCurrentTool()===\'rectangle\'"\n    title="Rectangle">\n    <img z-bind:src="getImageUrl(\'wd-box.png\')">\n</button>\n<button \n    z-if="getConfig(\'showRoundRectTool\')"\n    z-click="useRoundRectTool()"\n    title="Rounded Rectangle">\n    <img z-bind:src="getImageUrl(\'wd-roundrect.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCircleTool\')"\n    z-click="useCircleTool()"\n    z-selected="getCurrentTool()===\'circle\'"\n    title="Circle">\n    <img z-bind:src="getImageUrl(\'wd-circle.png\')">\n</button>\n<button \n    z-if="getConfig(\'showShapeBrushTool\')"\n    z-click="useShapeBrushTool()"\n    title="Shape brush">\n    <img z-bind:src="getImageUrl(\'wd-shapebrush.png\')">\n</button>\n<button \n    z-if="getConfig(\'showBrushTool\')"\n    z-click="useBrushTool()"\n    z-selected="getCurrentTool()===\'brush\'"\n    title="Brush">\n    <img z-bind:src="getImageUrl(\'wd-brush.png\')">\n</button>\n<button \n    z-if="getConfig(\'showLineTool\')"\n    z-click="useLineTool()"\n    z-selected="getCurrentTool()===\'line\'"\n    title="Lines">\n    <img z-bind:src="getImageUrl(\'wd-line.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCurveTool\')"\n    z-click="useCurveTool()"\n    z-selected="getCurrentTool()===\'curve\'"\n    title="Curves">\n    <img z-bind:src="getImageUrl(\'wd-curve.png\')">\n</button>\n<button \n    z-if="getConfig(\'showArrowTool\')"\n    z-click="useArrowTool()"\n    z-selected="getCurrentTool()===\'arrow\'"\n    title="Arrows">\n    <img z-bind:src="getImageUrl(\'wd-arrow.png\')">\n</button>\n<button \n    z-if="getConfig(\'showTextTool\')"\n    z-selected="getCurrentTool()===\'text\'"\n    z-click="useTextTool()"\n    title="Text">\n    <img z-bind:src="getImageUrl(\'wd-text.png\')">\n</button>\n<button \n    z-if="getConfig(\'showImageTool\')"\n    z-click="insertImage()"\n    title="Insert image...">\n    <img z-bind:src="getImageUrl(\'wd-image.png\')">\n</button>\n<button \n    z-if="getConfig(\'showMoveToFrontBack\')"\n    z-click="bringToFront()"\n    title="Bring to front">\n    <img z-bind:src="getImageUrl(\'wd-moveup.png\')">\n</button>\n<button \n    z-if="getConfig(\'showMoveToFrontBack\')"\n    z-click="sendToBack()"\n    title="Send to back">\n    <img z-bind:src="getImageUrl(\'wd-movedown.png\')">\n</button>\n<button \n    z-if="getConfig(\'showUndoRedo\')"\n    z-disabled="!canUndo()"\n    z-click="undo()"\n    title="Undo">\n    <img z-bind:src="getImageUrl(\'wd-undo.png\')">\n</button>\n<button \n    z-if="getConfig(\'showUndoRedo\')"\n    z-disabled="!canRedo()"\n    z-click="redo()"\n    title="Redo">\n    <img z-bind:src="getImageUrl(\'wd-redo.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCopyPaste\')"\n    z-click="copy()"\n    title="Copy">\n    <img z-bind:src="getImageUrl(\'wd-copy.png\')">\n</button>\n<button \n    z-if="getConfig(\'showCopyPaste\')"\n    z-click="paste()"\n    title="Paste">\n    <img z-bind:src="getImageUrl(\'wd-paste.png\')">\n</button>\n<button\n    z-for="button in _zwibblerButtons"\n    z-bind:title="button.name"\n    z-click="_zwibblerButtonClicked(this, button)">\n    <img z-bind:src="getImageUrl(button.image)">\n</button>\n</div>\n',
        
        style: ".zwibbler-builtin-toolbar {\n    background: white;\n    width: 110px;\n    overflow-y: auto;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none; \n     -khtml-user-select: none; \n       -moz-user-select: none; \n        -ms-user-select: none; \n            user-select: none; \n}\n\n.zwibbler-builtin-toolbar button {\n    font-family: inherit;\n    font-size: 100%;\n    padding: 5px;\n    background-color: white;\n    border: none;\n}\n\n.zwibbler-builtin-toolbar button img {\n    margin: 0;\n}\n\n.zwibbler-builtin-toolbar button:hover,\n.zwibbler-builtin-toolbar button.selected {\n    background-color: #9fb3e7;\n}\n@media only screen and (max-width: 980px) {\n .zwibbler-builtin-toolbar button{\n width: 70px!important; \n height: 70px!important; \n margin-left: 10px!important; \n}\n}\n .zwibbler-builtin-toolbar::-webkit-scrollbar-track {\n  -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n background-color:#F5F5F5;\n }\n .zwibbler-builtin-toolbar::-webkit-scrollbar {\n    width:10px;\n background-color:#F5F5F5;\n }\n .zwibbler-builtin-toolbar::-webkit-scrollbar-thumb {\n background-color:#F90;\n background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)\n }\n ",
        // Kj: '<div class="zwibbler-builtin-toolbar">\n <button \n z-if="getConfig(\'showPickTool\')"\n z-click="usePickTool()"\n z-selected="getCurrentTool()===\'pick\'"\n title="选择">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/select.png\')">\n</button>\n <button \n z-if="getConfig(\'showShapeBrushTool\')"\n z-click="useBrushTool()"\n title="画笔">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/pencil.png\')">\n</button>\n <button \n z-if="getConfig(\'showSquareTool\')"\n z-click="useRectangleTool()"\n z-selected="getCurrentTool()===\'rectangle\'"\n title="矩形">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/square.png\')">\n</button>\n <button \n z-if="getConfig(\'showRoundRectTool\')"\n z-click="useRoundRectTool()"\n title="圆角矩形">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/roundrect.png\')">\n</button>\n <button \n z-if="getConfig(\'showCircleTool\')"\n z-click="useCircleTool()"\n z-selected="getCurrentTool()===\'circle\'"\n title="圆形">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/circle.png\')">\n</button>\n <button \n z-if="getConfig(\'showBrushTool\')"\n z-click="useBrushTool(\'erase\', 20)"\n z-selected="getCurrentTool()===\'brush\'"\n title="橡皮擦">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/brush.png\')">\n</button>\n <button \n z-if="getConfig(\'showLineTool\')"\n z-click="useLineTool()"\n z-selected="getCurrentTool()===\'line\'"\n title="线条">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/line.png\')">\n</button>\n <button \n z-if="getConfig(\'showCurveTool\')"\n z-click="useCurveTool()"\n z-selected="getCurrentTool()===\'curve\'"\n title="曲线">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/curve.png\')">\n</button>\n <button \n z-if="getConfig(\'showCurveTool\')"\n z-click="useShapeBrushTool()"\n title="折线">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/polyline.png\')">\n</button>\n <button \n z-if="getConfig(\'showArrowTool\')"\n z-click="useArrowTool()"\n z-selected="getCurrentTool()===\'arrow\'"\n title="箭头">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/arrow.png\')">\n</button>\n <button \n z-if="getConfig(\'showTextTool\')"\n z-selected="getCurrentTool()===\'text\'"\n z-click="useTextTool()"\n    title="文字">\n    <img z-bind:src="getImageUrl(\'../static/zwibbler/text.png\')">\n</button>\n <button \n z-if="getConfig(\'showImageTool\')"\n z-click="insertImage()"\n title="插入图片">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/img.png\')">\n</button>\n <button \n z-if="getConfig(\'showMoveToFrontBack\')"\n z-click="bringToFront()"\n title="置前">\n  <img z-bind:src="getImageUrl(\'../static/zwibbler/bringToFront.png\')">\n</button>\n <button \n z-if="getConfig(\'showMoveToFrontBack\')"\n z-click="sendToBack()"\n title="置后">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/sendToBack.png\')">\n</button>\n <button \n z-click="zoomIn()"\n title="放大">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/zoomIn.png\')">\n</button>\n <button \n z-click="zoomOut()"\n title="缩小">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/zoomOut.png\')">\n</button>\n <button \n z-if="getConfig(\'showUndoRedo\')"\n z-disabled="!canUndo()"\n z-click="undo()"\n title="撤销">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/undo.png\')">\n</button>\n <button \n z-if="getConfig(\'showUndoRedo\')"\n z-disabled="!canRedo()"\n z-click="redo()"\n title="重做">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/redo.png\')">\n</button>\n <button \n z-click="copy()"\n title="复制">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/copy.png\')">\n</button>\n <button \n z-click="paste()"\n title="粘贴">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/paste.png\')">\n</button>\n <button \n z-click="deleteSelection()"\n title="删除">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/remove.png\')">\n</button>\n <button \n z-click="zxfGetfile()"\n title="保存">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/save.png\')">\n</button>\n <button \n z-click="toggleFullscreen()"\n  title="全屏">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/fullscreen.png\')">\n</button>\n <button\n z-for="button in _zwibblerButtons"\n  z-bind:title="button.name"\n z-click="_zwibblerButtonClicked(this, button)">\n <img z-bind:src="getImageUrl(button.image)">\n</button> \n</div>\n',
        Kj: '<div class="zwibbler-builtin-toolbar">\n <button \n  z-click="usePickTool()"\n z-selected="getCurrentTool()===\'pick\'"\n title="选择">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/select.png\')">\n</button>\n <button \n z-click="useBrushTool()"\n title="画笔">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/pencil.png\')">\n</button>\n <button \n z-click="useRectangleTool()"\n z-selected="getCurrentTool()===\'rectangle\'"\n title="矩形">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/square.png\')">\n</button>\n <button \n z-click="useRoundRectTool()"\n title="圆角矩形">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/roundrect.png\')">\n</button>\n <button \n z-click="useCircleTool()"\n z-selected="getCurrentTool()===\'circle\'"\n title="圆形">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/circle.png\')">\n</button>\n <button \n z-click="useBrushTool(\'erase\', 20)"\n z-selected="getCurrentTool()===\'brush\'"\n title="橡皮擦">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/brush.png\')">\n</button>\n <button \n  z-click="useLineTool()"\n z-selected="getCurrentTool()===\'line\'"\n title="线条">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/line.png\')">\n</button>\n <button \n  z-click="useShapeBrushTool()"\n title="折线">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/polyline.png\')">\n</button>\n <button \n  z-click="useArrowTool()"\n z-selected="getCurrentTool()===\'arrow\'"\n title="箭头">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/arrow.png\')">\n</button>\n <button \n  z-selected="getCurrentTool()===\'text\'"\n z-click="useTextTool()"\n    title="文字">\n    <img z-bind:src="getImageUrl(\'../static/zwibbler/text.png\')">\n</button>\n <button \n  z-click="insertImage()"\n title="插入图片">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/img.png\')">\n</button>\n <button \n  z-click="bringToFront()"\n title="置前">\n  <img z-bind:src="getImageUrl(\'../static/zwibbler/bringToFront.png\')">\n</button>\n <button \n  z-click="sendToBack()"\n title="置后">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/sendToBack.png\')">\n</button>\n <button \n z-click="zoomIn()"\n title="放大">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/zoomIn.png\')">\n</button>\n <button \n z-click="zoomOut()"\n title="缩小">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/zoomOut.png\')">\n</button>\n <button \n  z-disabled="!canUndo()"\n z-click="undo()"\n title="撤销">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/undo.png\')">\n</button>\n <button \n z-disabled="!canRedo()"\n z-click="redo()"\n title="重做">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/redo.png\')">\n</button>\n <button \n z-click="copy()"\n title="复制">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/copy.png\')">\n</button>\n <button \n z-click="paste()"\n title="粘贴">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/paste.png\')">\n</button>\n <button \n z-click="deleteSelection()"\n title="删除">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/remove.png\')">\n</button>\n <button \n z-click="deletePage()"\n title="清屏">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/clear.png\')">\n</button>\n <button \n z-click="zxfGetfile()"\n title="保存">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/save.png\')">\n</button>\n <button \n z-click="print()" \n title="打印">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/print.png\')">\n</button>\n <button \n z-click="download(\'png\', \'download.png\')" \n title="下载">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/download.png\')">\n</button>\n <button \n z-click="toggleFullscreen()"\n  title="全屏">\n <img z-bind:src="getImageUrl(\'../static/zwibbler/fullscreen.png\')">\n</button>\n <button\n z-for="button in _zwibblerButtons"\n  z-bind:title="button.name"\n z-click="_zwibblerButtonClicked(this, button)">\n <img z-bind:src="getImageUrl(button.image)">\n</button> \n</div>\n',
        
        controller: function(c) {
            c._zwibblerButtons = P.buttons;
            c._zwibblerButtonClicked = function(a, b) {
                b.onclick.call(a, c)
            }
        }
    };
}).call(window);
