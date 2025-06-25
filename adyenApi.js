  /**
 * Opening block for IIFE
 */
            (function() {
                var origin = "https://www.petsuppliesplus.com";
                var originKey = "live_6B5AHSI6YFHD5BUVAYSFMCVIUAUZNC7D";
                var genTime = "2025-06-25T10:22:22Z";
                var checkoutShopperUrl = "https://checkoutshopper-live-us.adyen.com/checkoutshopper/";

                var adyen = window.adyen = window.adyen || {};
                adyen.key = "10001|B8312CC1095F801C198ECB224223EF231C2D8C7869F9844A5DDFBA3828612D5A3C4882B4431754BF83DE854056F49075DC8F9EB45262C48EE1F19FF1BE2C55CE6705850E85B6C74251E94228052A388E2CE12F3CE4E947347D677D72DE9B2FA21522D315AD3A522DD8C093686EB95D48378A5F823A32830463689655367D4181736528EEEA005F9E38B8C6E91C83EB76209CCEBE1F235112068505F8232412A1CEA82E85C32E5A0C75FC4DD14FF2AEC37EB858A0D917660004AD068EB6B7D33821534DBB626CF1D976D50BCAE8BAE1C3487C1F413AC38BC79BCC7C7F1C1353B28596432FD6D3840CC2F056ACEA055D552B8F3D57A3FD97B9D2E2FBBE4CB3C115";

                /*!
 * 
 *             ***********
 *             securedFields-card version: 4.8.3
 *             ***********
 *
 */
                ( () => {
                    var e = {
                        666: e => {
                            var t = function(e) {
                                "use strict";
                                var t, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(e, t, r) {
                                    e[t] = r.value
                                }
                                , i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
                                function u(e, t, r) {
                                    return Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }),
                                    e[t]
                                }
                                try {
                                    u({}, "")
                                } catch (e) {
                                    u = function(e, t, r) {
                                        return e[t] = r
                                    }
                                }
                                function l(e, t, r, n) {
                                    var i = t && t.prototype instanceof v ? t : v
                                      , a = Object.create(i.prototype)
                                      , c = new A(n || []);
                                    return o(a, "_invoke", {
                                        value: k(e, r, c)
                                    }),
                                    a
                                }
                                function p(e, t, r) {
                                    try {
                                        return {
                                            type: "normal",
                                            arg: e.call(t, r)
                                        }
                                    } catch (e) {
                                        return {
                                            type: "throw",
                                            arg: e
                                        }
                                    }
                                }
                                e.wrap = l;
                                var f = "suspendedStart"
                                  , d = "suspendedYield"
                                  , h = "executing"
                                  , y = "completed"
                                  , b = {};
                                function v() {}
                                function g() {}
                                function m() {}
                                var w = {};
                                u(w, a, (function() {
                                    return this
                                }
                                ));
                                var O = Object.getPrototypeOf
                                  , _ = O && O(O(R([])));
                                _ && _ !== r && n.call(_, a) && (w = _);
                                var S = m.prototype = v.prototype = Object.create(w);
                                function P(e) {
                                    ["next", "throw", "return"].forEach((function(t) {
                                        u(e, t, (function(e) {
                                            return this._invoke(t, e)
                                        }
                                        ))
                                    }
                                    ))
                                }
                                function j(e, t) {
                                    function r(o, i, a, c) {
                                        var s = p(e[o], e, i);
                                        if ("throw" !== s.type) {
                                            var u = s.arg
                                              , l = u.value;
                                            return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                                r("next", e, a, c)
                                            }
                                            ), (function(e) {
                                                r("throw", e, a, c)
                                            }
                                            )) : t.resolve(l).then((function(e) {
                                                u.value = e,
                                                a(u)
                                            }
                                            ), (function(e) {
                                                return r("throw", e, a, c)
                                            }
                                            ))
                                        }
                                        c(s.arg)
                                    }
                                    var i;
                                    o(this, "_invoke", {
                                        value: function(e, n) {
                                            function o() {
                                                return new t((function(t, o) {
                                                    r(e, n, t, o)
                                                }
                                                ))
                                            }
                                            return i = i ? i.then(o, o) : o()
                                        }
                                    })
                                }
                                function k(e, t, r) {
                                    var n = f;
                                    return function(o, i) {
                                        if (n === h)
                                            throw new Error("Generator is already running");
                                        if (n === y) {
                                            if ("throw" === o)
                                                throw i;
                                            return T()
                                        }
                                        for (r.method = o,
                                        r.arg = i; ; ) {
                                            var a = r.delegate;
                                            if (a) {
                                                var c = C(a, r);
                                                if (c) {
                                                    if (c === b)
                                                        continue;
                                                    return c
                                                }
                                            }
                                            if ("next" === r.method)
                                                r.sent = r._sent = r.arg;
                                            else if ("throw" === r.method) {
                                                if (n === f)
                                                    throw n = y,
                                                    r.arg;
                                                r.dispatchException(r.arg)
                                            } else
                                                "return" === r.method && r.abrupt("return", r.arg);
                                            n = h;
                                            var s = p(e, t, r);
                                            if ("normal" === s.type) {
                                                if (n = r.done ? y : d,
                                                s.arg === b)
                                                    continue;
                                                return {
                                                    value: s.arg,
                                                    done: r.done
                                                }
                                            }
                                            "throw" === s.type && (n = y,
                                            r.method = "throw",
                                            r.arg = s.arg)
                                        }
                                    }
                                }
                                function C(e, r) {
                                    var n = e.iterator[r.method];
                                    if (n === t) {
                                        if (r.delegate = null,
                                        "throw" === r.method) {
                                            if (e.iterator.return && (r.method = "return",
                                            r.arg = t,
                                            C(e, r),
                                            "throw" === r.method))
                                                return b;
                                            r.method = "throw",
                                            r.arg = new TypeError("The iterator does not provide a 'throw' method")
                                        }
                                        return b
                                    }
                                    var o = p(n, e.iterator, r.arg);
                                    if ("throw" === o.type)
                                        return r.method = "throw",
                                        r.arg = o.arg,
                                        r.delegate = null,
                                        b;
                                    var i = o.arg;
                                    return i ? i.done ? (r[e.resultName] = i.value,
                                    r.next = e.nextLoc,
                                    "return" !== r.method && (r.method = "next",
                                    r.arg = t),
                                    r.delegate = null,
                                    b) : i : (r.method = "throw",
                                    r.arg = new TypeError("iterator result is not an object"),
                                    r.delegate = null,
                                    b)
                                }
                                function E(e) {
                                    var t = {
                                        tryLoc: e[0]
                                    };
                                    1 in e && (t.catchLoc = e[1]),
                                    2 in e && (t.finallyLoc = e[2],
                                    t.afterLoc = e[3]),
                                    this.tryEntries.push(t)
                                }
                                function x(e) {
                                    var t = e.completion || {};
                                    t.type = "normal",
                                    delete t.arg,
                                    e.completion = t
                                }
                                function A(e) {
                                    this.tryEntries = [{
                                        tryLoc: "root"
                                    }],
                                    e.forEach(E, this),
                                    this.reset(!0)
                                }
                                function R(e) {
                                    if (e) {
                                        var r = e[a];
                                        if (r)
                                            return r.call(e);
                                        if ("function" == typeof e.next)
                                            return e;
                                        if (!isNaN(e.length)) {
                                            var o = -1
                                              , i = function r() {
                                                for (; ++o < e.length; )
                                                    if (n.call(e, o))
                                                        return r.value = e[o],
                                                        r.done = !1,
                                                        r;
                                                return r.value = t,
                                                r.done = !0,
                                                r
                                            };
                                            return i.next = i
                                        }
                                    }
                                    return {
                                        next: T
                                    }
                                }
                                function T() {
                                    return {
                                        value: t,
                                        done: !0
                                    }
                                }
                                return g.prototype = m,
                                o(S, "constructor", {
                                    value: m,
                                    configurable: !0
                                }),
                                o(m, "constructor", {
                                    value: g,
                                    configurable: !0
                                }),
                                g.displayName = u(m, s, "GeneratorFunction"),
                                e.isGeneratorFunction = function(e) {
                                    var t = "function" == typeof e && e.constructor;
                                    return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                                }
                                ,
                                e.mark = function(e) {
                                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m,
                                    u(e, s, "GeneratorFunction")),
                                    e.prototype = Object.create(S),
                                    e
                                }
                                ,
                                e.awrap = function(e) {
                                    return {
                                        __await: e
                                    }
                                }
                                ,
                                P(j.prototype),
                                u(j.prototype, c, (function() {
                                    return this
                                }
                                )),
                                e.AsyncIterator = j,
                                e.async = function(t, r, n, o, i) {
                                    void 0 === i && (i = Promise);
                                    var a = new j(l(t, r, n, o),i);
                                    return e.isGeneratorFunction(r) ? a : a.next().then((function(e) {
                                        return e.done ? e.value : a.next()
                                    }
                                    ))
                                }
                                ,
                                P(S),
                                u(S, s, "Generator"),
                                u(S, a, (function() {
                                    return this
                                }
                                )),
                                u(S, "toString", (function() {
                                    return "[object Generator]"
                                }
                                )),
                                e.keys = function(e) {
                                    var t = Object(e)
                                      , r = [];
                                    for (var n in t)
                                        r.push(n);
                                    return r.reverse(),
                                    function e() {
                                        for (; r.length; ) {
                                            var n = r.pop();
                                            if (n in t)
                                                return e.value = n,
                                                e.done = !1,
                                                e
                                        }
                                        return e.done = !0,
                                        e
                                    }
                                }
                                ,
                                e.values = R,
                                A.prototype = {
                                    constructor: A,
                                    reset: function(e) {
                                        if (this.prev = 0,
                                        this.next = 0,
                                        this.sent = this._sent = t,
                                        this.done = !1,
                                        this.delegate = null,
                                        this.method = "next",
                                        this.arg = t,
                                        this.tryEntries.forEach(x),
                                        !e)
                                            for (var r in this)
                                                "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                                    },
                                    stop: function() {
                                        this.done = !0;
                                        var e = this.tryEntries[0].completion;
                                        if ("throw" === e.type)
                                            throw e.arg;
                                        return this.rval
                                    },
                                    dispatchException: function(e) {
                                        if (this.done)
                                            throw e;
                                        var r = this;
                                        function o(n, o) {
                                            return c.type = "throw",
                                            c.arg = e,
                                            r.next = n,
                                            o && (r.method = "next",
                                            r.arg = t),
                                            !!o
                                        }
                                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                            var a = this.tryEntries[i]
                                              , c = a.completion;
                                            if ("root" === a.tryLoc)
                                                return o("end");
                                            if (a.tryLoc <= this.prev) {
                                                var s = n.call(a, "catchLoc")
                                                  , u = n.call(a, "finallyLoc");
                                                if (s && u) {
                                                    if (this.prev < a.catchLoc)
                                                        return o(a.catchLoc, !0);
                                                    if (this.prev < a.finallyLoc)
                                                        return o(a.finallyLoc)
                                                } else if (s) {
                                                    if (this.prev < a.catchLoc)
                                                        return o(a.catchLoc, !0)
                                                } else {
                                                    if (!u)
                                                        throw new Error("try statement without catch or finally");
                                                    if (this.prev < a.finallyLoc)
                                                        return o(a.finallyLoc)
                                                }
                                            }
                                        }
                                    },
                                    abrupt: function(e, t) {
                                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                            var o = this.tryEntries[r];
                                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                                var i = o;
                                                break
                                            }
                                        }
                                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                                        var a = i ? i.completion : {};
                                        return a.type = e,
                                        a.arg = t,
                                        i ? (this.method = "next",
                                        this.next = i.finallyLoc,
                                        b) : this.complete(a)
                                    },
                                    complete: function(e, t) {
                                        if ("throw" === e.type)
                                            throw e.arg;
                                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                        this.method = "return",
                                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                                        b
                                    },
                                    finish: function(e) {
                                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                            var r = this.tryEntries[t];
                                            if (r.finallyLoc === e)
                                                return this.complete(r.completion, r.afterLoc),
                                                x(r),
                                                b
                                        }
                                    },
                                    catch: function(e) {
                                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                            var r = this.tryEntries[t];
                                            if (r.tryLoc === e) {
                                                var n = r.completion;
                                                if ("throw" === n.type) {
                                                    var o = n.arg;
                                                    x(r)
                                                }
                                                return o
                                            }
                                        }
                                        throw new Error("illegal catch attempt")
                                    },
                                    delegateYield: function(e, r, n) {
                                        return this.delegate = {
                                            iterator: R(e),
                                            resultName: r,
                                            nextLoc: n
                                        },
                                        "next" === this.method && (this.arg = t),
                                        b
                                    }
                                },
                                e
                            }(e.exports);
                            try {
                                regeneratorRuntime = t
                            } catch (e) {
                                "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
                            }
                        }
                    }
                      , t = {};
                    function r(n) {
                        var o = t[n];
                        if (void 0 !== o)
                            return o.exports;
                        var i = t[n] = {
                            exports: {}
                        };
                        return e[n](i, i.exports, r),
                        i.exports
                    }
                    ( () => {
                        "use strict";
                        r(666);
                        var e, t, n, o, i, a, c, s = {}, u = [], l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
                        function p(e, t) {
                            for (var r in t)
                                e[r] = t[r];
                            return e
                        }
                        function f(e) {
                            var t = e.parentNode;
                            t && t.removeChild(e)
                        }
                        function d(t, r, n) {
                            var o, i, a, c = {};
                            for (a in r)
                                "key" == a ? o = r[a] : "ref" == a ? i = r[a] : c[a] = r[a];
                            if (arguments.length > 2 && (c.children = arguments.length > 3 ? e.call(arguments, 2) : n),
                            "function" == typeof t && null != t.defaultProps)
                                for (a in t.defaultProps)
                                    void 0 === c[a] && (c[a] = t.defaultProps[a]);
                            return h(t, c, o, i, null)
                        }
                        function h(e, r, o, i, a) {
                            var c = {
                                type: e,
                                props: r,
                                key: o,
                                ref: i,
                                __k: null,
                                __: null,
                                __b: 0,
                                __e: null,
                                __d: void 0,
                                __c: null,
                                __h: null,
                                constructor: void 0,
                                __v: null == a ? ++n : a
                            };
                            return null == a && null != t.vnode && t.vnode(c),
                            c
                        }
                        function y(e) {
                            return e.children
                        }
                        function b(e, t) {
                            this.props = e,
                            this.context = t
                        }
                        function v(e, t) {
                            if (null == t)
                                return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
                            for (var r; t < e.__k.length; t++)
                                if (null != (r = e.__k[t]) && null != r.__e)
                                    return r.__e;
                            return "function" == typeof e.type ? v(e) : null
                        }
                        function g(e) {
                            var t, r;
                            if (null != (e = e.__) && null != e.__c) {
                                for (e.__e = e.__c.base = null,
                                t = 0; t < e.__k.length; t++)
                                    if (null != (r = e.__k[t]) && null != r.__e) {
                                        e.__e = e.__c.base = r.__e;
                                        break
                                    }
                                return g(e)
                            }
                        }
                        function m(e) {
                            (!e.__d && (e.__d = !0) && o.push(e) && !w.__r++ || i !== t.debounceRendering) && ((i = t.debounceRendering) || a)(w)
                        }
                        function w() {
                            var e, t, r, n, i, a, s, u;
                            for (o.sort(c); e = o.shift(); )
                                e.__d && (t = o.length,
                                n = void 0,
                                i = void 0,
                                s = (a = (r = e).__v).__e,
                                (u = r.__P) && (n = [],
                                (i = p({}, a)).__v = a.__v + 1,
                                x(u, a, i, r.__n, void 0 !== u.ownerSVGElement, null != a.__h ? [s] : null, n, null == s ? v(a) : s, a.__h),
                                A(n, a),
                                a.__e != s && g(a)),
                                o.length > t && o.sort(c));
                            w.__r = 0
                        }
                        function O(e, t, r, n, o, i, a, c, l, p) {
                            var f, d, b, g, m, w, O, j = n && n.__k || u, k = j.length;
                            for (r.__k = [],
                            f = 0; f < t.length; f++)
                                if (null != (g = r.__k[f] = null == (g = t[f]) || "boolean" == typeof g || "function" == typeof g ? null : "string" == typeof g || "number" == typeof g || "bigint" == typeof g ? h(null, g, null, null, g) : Array.isArray(g) ? h(y, {
                                    children: g
                                }, null, null, null) : g.__b > 0 ? h(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g)) {
                                    if (g.__ = r,
                                    g.__b = r.__b + 1,
                                    null === (b = j[f]) || b && g.key == b.key && g.type === b.type)
                                        j[f] = void 0;
                                    else
                                        for (d = 0; d < k; d++) {
                                            if ((b = j[d]) && g.key == b.key && g.type === b.type) {
                                                j[d] = void 0;
                                                break
                                            }
                                            b = null
                                        }
                                    x(e, g, b = b || s, o, i, a, c, l, p),
                                    m = g.__e,
                                    (d = g.ref) && b.ref != d && (O || (O = []),
                                    b.ref && O.push(b.ref, null, g),
                                    O.push(d, g.__c || m, g)),
                                    null != m ? (null == w && (w = m),
                                    "function" == typeof g.type && g.__k === b.__k ? g.__d = l = _(g, l, e) : l = S(e, g, b, j, m, l),
                                    "function" == typeof r.type && (r.__d = l)) : l && b.__e == l && l.parentNode != e && (l = v(b))
                                }
                            for (r.__e = w,
                            f = k; f--; )
                                null != j[f] && ("function" == typeof r.type && null != j[f].__e && j[f].__e == r.__d && (r.__d = P(n).nextSibling),
                                D(j[f], j[f]));
                            if (O)
                                for (f = 0; f < O.length; f++)
                                    T(O[f], O[++f], O[++f])
                        }
                        function _(e, t, r) {
                            for (var n, o = e.__k, i = 0; o && i < o.length; i++)
                                (n = o[i]) && (n.__ = e,
                                t = "function" == typeof n.type ? _(n, t, r) : S(r, n, n, o, n.__e, t));
                            return t
                        }
                        function S(e, t, r, n, o, i) {
                            var a, c, s;
                            if (void 0 !== t.__d)
                                a = t.__d,
                                t.__d = void 0;
                            else if (null == r || o != i || null == o.parentNode)
                                e: if (null == i || i.parentNode !== e)
                                    e.appendChild(o),
                                    a = null;
                                else {
                                    for (c = i,
                                    s = 0; (c = c.nextSibling) && s < n.length; s += 1)
                                        if (c == o)
                                            break e;
                                    e.insertBefore(o, i),
                                    a = i
                                }
                            return void 0 !== a ? a : o.nextSibling
                        }
                        function P(e) {
                            var t, r, n;
                            if (null == e.type || "string" == typeof e.type)
                                return e.__e;
                            if (e.__k)
                                for (t = e.__k.length - 1; t >= 0; t--)
                                    if ((r = e.__k[t]) && (n = P(r)))
                                        return n;
                            return null
                        }
                        function j(e, t, r) {
                            "-" === t[0] ? e.setProperty(t, null == r ? "" : r) : e[t] = null == r ? "" : "number" != typeof r || l.test(t) ? r : r + "px"
                        }
                        function k(e, t, r, n, o) {
                            var i;
                            e: if ("style" === t)
                                if ("string" == typeof r)
                                    e.style.cssText = r;
                                else {
                                    if ("string" == typeof n && (e.style.cssText = n = ""),
                                    n)
                                        for (t in n)
                                            r && t in r || j(e.style, t, "");
                                    if (r)
                                        for (t in r)
                                            n && r[t] === n[t] || j(e.style, t, r[t])
                                }
                            else if ("o" === t[0] && "n" === t[1])
                                i = t !== (t = t.replace(/Capture$/, "")),
                                t = t.toLowerCase()in e ? t.toLowerCase().slice(2) : t.slice(2),
                                e.l || (e.l = {}),
                                e.l[t + i] = r,
                                r ? n || e.addEventListener(t, i ? E : C, i) : e.removeEventListener(t, i ? E : C, i);
                            else if ("dangerouslySetInnerHTML" !== t) {
                                if (o)
                                    t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                                else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                                    try {
                                        e[t] = null == r ? "" : r;
                                        break e
                                    } catch (e) {}
                                "function" == typeof r || (null == r || !1 === r && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, r))
                            }
                        }
                        function C(e) {
                            return this.l[e.type + !1](t.event ? t.event(e) : e)
                        }
                        function E(e) {
                            return this.l[e.type + !0](t.event ? t.event(e) : e)
                        }
                        function x(e, r, n, o, i, a, c, s, u) {
                            var l, f, d, h, v, g, m, w, _, S, P, j, k, C, E, x = r.type;
                            if (void 0 !== r.constructor)
                                return null;
                            null != n.__h && (u = n.__h,
                            s = r.__e = n.__e,
                            r.__h = null,
                            a = [s]),
                            (l = t.__b) && l(r);
                            try {
                                e: if ("function" == typeof x) {
                                    if (w = r.props,
                                    _ = (l = x.contextType) && o[l.__c],
                                    S = l ? _ ? _.props.value : l.__ : o,
                                    n.__c ? m = (f = r.__c = n.__c).__ = f.__E : ("prototype"in x && x.prototype.render ? r.__c = f = new x(w,S) : (r.__c = f = new b(w,S),
                                    f.constructor = x,
                                    f.render = I),
                                    _ && _.sub(f),
                                    f.props = w,
                                    f.state || (f.state = {}),
                                    f.context = S,
                                    f.__n = o,
                                    d = f.__d = !0,
                                    f.__h = [],
                                    f._sb = []),
                                    null == f.__s && (f.__s = f.state),
                                    null != x.getDerivedStateFromProps && (f.__s == f.state && (f.__s = p({}, f.__s)),
                                    p(f.__s, x.getDerivedStateFromProps(w, f.__s))),
                                    h = f.props,
                                    v = f.state,
                                    f.__v = r,
                                    d)
                                        null == x.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(),
                                        null != f.componentDidMount && f.__h.push(f.componentDidMount);
                                    else {
                                        if (null == x.getDerivedStateFromProps && w !== h && null != f.componentWillReceiveProps && f.componentWillReceiveProps(w, S),
                                        !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(w, f.__s, S) || r.__v === n.__v) {
                                            for (r.__v !== n.__v && (f.props = w,
                                            f.state = f.__s,
                                            f.__d = !1),
                                            f.__e = !1,
                                            r.__e = n.__e,
                                            r.__k = n.__k,
                                            r.__k.forEach((function(e) {
                                                e && (e.__ = r)
                                            }
                                            )),
                                            P = 0; P < f._sb.length; P++)
                                                f.__h.push(f._sb[P]);
                                            f._sb = [],
                                            f.__h.length && c.push(f);
                                            break e
                                        }
                                        null != f.componentWillUpdate && f.componentWillUpdate(w, f.__s, S),
                                        null != f.componentDidUpdate && f.__h.push((function() {
                                            f.componentDidUpdate(h, v, g)
                                        }
                                        ))
                                    }
                                    if (f.context = S,
                                    f.props = w,
                                    f.__P = e,
                                    j = t.__r,
                                    k = 0,
                                    "prototype"in x && x.prototype.render) {
                                        for (f.state = f.__s,
                                        f.__d = !1,
                                        j && j(r),
                                        l = f.render(f.props, f.state, f.context),
                                        C = 0; C < f._sb.length; C++)
                                            f.__h.push(f._sb[C]);
                                        f._sb = []
                                    } else
                                        do {
                                            f.__d = !1,
                                            j && j(r),
                                            l = f.render(f.props, f.state, f.context),
                                            f.state = f.__s
                                        } while (f.__d && ++k < 25);
                                    f.state = f.__s,
                                    null != f.getChildContext && (o = p(p({}, o), f.getChildContext())),
                                    d || null == f.getSnapshotBeforeUpdate || (g = f.getSnapshotBeforeUpdate(h, v)),
                                    E = null != l && l.type === y && null == l.key ? l.props.children : l,
                                    O(e, Array.isArray(E) ? E : [E], r, n, o, i, a, c, s, u),
                                    f.base = r.__e,
                                    r.__h = null,
                                    f.__h.length && c.push(f),
                                    m && (f.__E = f.__ = null),
                                    f.__e = !1
                                } else
                                    null == a && r.__v === n.__v ? (r.__k = n.__k,
                                    r.__e = n.__e) : r.__e = R(n.__e, r, n, o, i, a, c, u);
                                (l = t.diffed) && l(r)
                            } catch (e) {
                                r.__v = null,
                                (u || null != a) && (r.__e = s,
                                r.__h = !!u,
                                a[a.indexOf(s)] = null),
                                t.__e(e, r, n)
                            }
                        }
                        function A(e, r) {
                            t.__c && t.__c(r, e),
                            e.some((function(r) {
                                try {
                                    e = r.__h,
                                    r.__h = [],
                                    e.some((function(e) {
                                        e.call(r)
                                    }
                                    ))
                                } catch (e) {
                                    t.__e(e, r.__v)
                                }
                            }
                            ))
                        }
                        function R(t, r, n, o, i, a, c, u) {
                            var l, p, d, h = n.props, y = r.props, b = r.type, g = 0;
                            if ("svg" === b && (i = !0),
                            null != a)
                                for (; g < a.length; g++)
                                    if ((l = a[g]) && "setAttribute"in l == !!b && (b ? l.localName === b : 3 === l.nodeType)) {
                                        t = l,
                                        a[g] = null;
                                        break
                                    }
                            if (null == t) {
                                if (null === b)
                                    return document.createTextNode(y);
                                t = i ? document.createElementNS("http://www.w3.org/2000/svg", b) : document.createElement(b, y.is && y),
                                a = null,
                                u = !1
                            }
                            if (null === b)
                                h === y || u && t.data === y || (t.data = y);
                            else {
                                if (a = a && e.call(t.childNodes),
                                p = (h = n.props || s).dangerouslySetInnerHTML,
                                d = y.dangerouslySetInnerHTML,
                                !u) {
                                    if (null != a)
                                        for (h = {},
                                        g = 0; g < t.attributes.length; g++)
                                            h[t.attributes[g].name] = t.attributes[g].value;
                                    (d || p) && (d && (p && d.__html == p.__html || d.__html === t.innerHTML) || (t.innerHTML = d && d.__html || ""))
                                }
                                if (function(e, t, r, n, o) {
                                    var i;
                                    for (i in r)
                                        "children" === i || "key" === i || i in t || k(e, i, null, r[i], n);
                                    for (i in t)
                                        o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || r[i] === t[i] || k(e, i, t[i], r[i], n)
                                }(t, y, h, i, u),
                                d)
                                    r.__k = [];
                                else if (g = r.props.children,
                                O(t, Array.isArray(g) ? g : [g], r, n, o, i && "foreignObject" !== b, a, c, a ? a[0] : n.__k && v(n, 0), u),
                                null != a)
                                    for (g = a.length; g--; )
                                        null != a[g] && f(a[g]);
                                u || ("value"in y && void 0 !== (g = y.value) && (g !== t.value || "progress" === b && !g || "option" === b && g !== h.value) && k(t, "value", g, h.value, !1),
                                "checked"in y && void 0 !== (g = y.checked) && g !== t.checked && k(t, "checked", g, h.checked, !1))
                            }
                            return t
                        }
                        function T(e, r, n) {
                            try {
                                "function" == typeof e ? e(r) : e.current = r
                            } catch (e) {
                                t.__e(e, n)
                            }
                        }
                        function D(e, r, n) {
                            var o, i;
                            if (t.unmount && t.unmount(e),
                            (o = e.ref) && (o.current && o.current !== e.__e || T(o, null, r)),
                            null != (o = e.__c)) {
                                if (o.componentWillUnmount)
                                    try {
                                        o.componentWillUnmount()
                                    } catch (e) {
                                        t.__e(e, r)
                                    }
                                o.base = o.__P = null,
                                e.__c = void 0
                            }
                            if (o = e.__k)
                                for (i = 0; i < o.length; i++)
                                    o[i] && D(o[i], r, n || "function" != typeof e.type);
                            n || null == e.__e || f(e.__e),
                            e.__ = e.__e = e.__d = void 0
                        }
                        function I(e, t, r) {
                            return this.constructor(e, r)
                        }
                        function L(r, n, o) {
                            var i, a, c;
                            t.__ && t.__(r, n),
                            a = (i = "function" == typeof o) ? null : o && o.__k || n.__k,
                            c = [],
                            x(n, r = (!i && o || n).__k = d(y, null, [r]), a || s, s, void 0 !== n.ownerSVGElement, !i && o ? [o] : a ? null : n.firstChild ? e.call(n.childNodes) : null, c, !i && o ? o : a ? a.__e : n.firstChild, i),
                            A(c, r)
                        }
                        e = u.slice,
                        t = {
                            __e: function(e, t, r, n) {
                                for (var o, i, a; t = t.__; )
                                    if ((o = t.__c) && !o.__)
                                        try {
                                            if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)),
                                            a = o.__d),
                                            null != o.componentDidCatch && (o.componentDidCatch(e, n || {}),
                                            a = o.__d),
                                            a)
                                                return o.__E = o
                                        } catch (t) {
                                            e = t
                                        }
                                throw e
                            }
                        },
                        n = 0,
                        b.prototype.setState = function(e, t) {
                            var r;
                            r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state),
                            "function" == typeof e && (e = e(p({}, r), this.props)),
                            e && p(r, e),
                            null != e && this.__v && (t && this._sb.push(t),
                            m(this))
                        }
                        ,
                        b.prototype.forceUpdate = function(e) {
                            this.__v && (this.__e = !0,
                            e && this.__h.push(e),
                            m(this))
                        }
                        ,
                        b.prototype.render = y,
                        o = [],
                        a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
                        c = function(e, t) {
                            return e.__v.__b - t.__v.__b
                        }
                        ,
                        w.__r = 0;
                        window.console && window.console.error && window.console.error.bind(window.console),
                        window.console && window.console.info && window.console.info.bind(window.console),
                        window.console && window.console.log && window.console.log.bind(window.console);
                        var K, M = window.console && window.console.warn && window.console.warn.bind(window.console), F = function(e, t) {
                            var r = e
                              , n = t.slice()
                              , o = ""
                              , i = !1
                              , a = "card" === r
                              , c = a && 1 === n.length;
                            return a && !c || (c && (r = n[0]),
                            n = [r],
                            o = r,
                            i = !0),
                            {
                                cardGroupTypes: n,
                                cardBrand: o,
                                isSingleBrandedCard: i
                            }
                        }, B = function(e, t) {
                            if (e)
                                return e.querySelector(t)
                        }, H = function(e, t, r, n) {
                            if ("function" != typeof e.addEventListener) {
                                if (!e.attachEvent)
                                    throw new Error(": Unable to bind ".concat(t, "-event"));
                                e.attachEvent("on".concat(t), r)
                            } else
                                e.addEventListener(t, r, n)
                        }, N = function(e, t, r, n) {
                            if ("function" == typeof e.addEventListener)
                                e.removeEventListener(t, r, n);
                            else {
                                if (!e.attachEvent)
                                    throw new Error(": Unable to unbind ".concat(t, "-event"));
                                e.detachEvent("on".concat(t), r)
                            }
                        };
                        function V(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        var U = "encryptedExpiryDate"
                          , W = "encryptedExpiryMonth"
                          , G = "encryptedExpiryYear"
                          , $ = "encryptedSecurityCode"
                          , J = "encryptedSecurityCode3digits"
                          , z = "encryptedSecurityCode4digits"
                          , Y = "expiryMonth"
                          , q = "expiryYear"
                          , X = "cvc"
                          , Q = " "
                          , Z = "/"
                          , ee = 30
                          , te = 6
                          , re = 11
                          , ne = 8
                          , oe = 24
                          , ie = "message blocked: event origin does not match permitted origin"
                          , ae = "message blocked: postMessage data type is incorrect (event.data not present or not a string)"
                          , ce = "message blocked: postMessage data is not JSON"
                          , se = "config message received and handled"
                          , ue = "config message rejected no adyen window object"
                          , le = "config message rejected no encryption key"
                          , pe = "special message received and handled"
                          , fe = "special message data lacks main props"
                          , de = "special message data numKey incorrect"
                          , he = "message received but not handled"
                          , ye = "touch"
                          , be = "focus"
                          , ve = "IEClearedField"
                          , ge = "KeyPressed"
                          , me = "luhnCheck"
                          , we = "rightClickPaste"
                          , Oe = "abcdefghijklmnopqrstuvwxyz"
                          , _e = "thyquickbrownfoxjumpsoverlazydog"
                          , Se = "required"
                          , Pe = "hidden"
                          , je = Se
                          , ke = Se
                          , Ce = "error.va.sf-cc-dat.01"
                          , Ee = "error.va.sf-cc-dat.02"
                          , xe = "error.va.gen.01"
                          , Ae = "error.va.sf-cc-num.01"
                          , Re = "error.va.sf-cc-num.03"
                          , Te = "error.va.sf-cc-cvc.02"
                          , De = "RSA-OAEP"
                          , Ie = (V(K = {}, "encryptedCardNumber", "error.va.sf-cc-num.04"),
                        V(K, U, "error.va.sf-cc-dat.05"),
                        V(K, G, "error.va.sf-cc-yr.02"),
                        V(K, $, Te),
                        V(K, "encryptedBankAccountNumber", "error.va.sf-ach-num.02"),
                        V(K, "encryptedBankLocationId", "error.va.sf-ach-loc.02"),
                        V(K, "encryptedPassword", "error.va.sf-kcp-pwd.02"),
                        V(K, "encryptedDigits", xe),
                        K)
                          , Le = ["error.va.sf-cc-num.02", "error.va.sf-cc-dat.04", "error.va.sf-cc-yr.01", "error.va.sf-cc-mth.01", "error.va.sf-cc-cvc.01", "error.va.sf-kcp-pwd.01", "error.va.sf-ach-num.01", "error.va.sf-ach-loc.01", xe]
                          , Ke = "123456789012345678901234567890"
                          , Me = {
                            base: {
                                color: "#00112C",
                                background: "#fff",
                                fontSize: "16px",
                                fontWeight: "400"
                            },
                            placeholder: {
                                fontWeight: "200"
                            },
                            error: {
                                color: "#00112c"
                            },
                            validated: {}
                        };
                        function Fe(e) {
                            return Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            Fe(e)
                        }
                        function Be(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function He(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Be(Object(r), !0).forEach((function(t) {
                                    Ne(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }
                        function Ne(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        var Ve, Ue = {
                            background: "background",
                            caretColor: "caret-color",
                            color: "color",
                            display: "display",
                            font: "font",
                            fontFamily: "font-family",
                            fontSize: "font-size",
                            fontSizeAdjust: "font-size-adjust",
                            fontSmoothing: "font-smoothing",
                            fontStretch: "font-stretch",
                            fontStyle: "font-style",
                            fontVariant: "font-variant",
                            fontVariantAlternates: "font-variant-alternates",
                            fontVariantCaps: "font-variant-caps",
                            fontVariantEastAsian: "font-variant-east-asian",
                            fontVariantLigatures: "font-variant-ligatures",
                            fontVariantNumeric: "font-variant-numeric",
                            fontWeight: "font-weight",
                            letterSpacing: "letter-spacing",
                            lineHeight: "line-height",
                            mozOsxFontSmoothing: "-moz-osx-font-smoothing",
                            mozTransition: "moz-transition",
                            outline: "outline",
                            opacity: "opacity",
                            padding: "padding",
                            textAlign: "text-align",
                            textShadow: "text-shadow",
                            transition: "transition",
                            webkitFontSmoothing: "-webkit-font-smoothing",
                            webkitTransition: "webkit-transition",
                            wordSpacing: "word-spacing"
                        }, We = {
                            base: ".input-field",
                            autofill: {
                                0: ".input-field:-webkit-autofill",
                                1: ".input-field:-webkit-autofill:active",
                                2: ".input-field:-webkit-autofill:hover",
                                3: ".input-field:-webkit-autofill:focus",
                                4: ".input-field:-webkit-autofill:autofill"
                            },
                            error: ".chckt-input-field--error",
                            validated: ".chckt-input-field--validated",
                            placeholder: {
                                0: ".input-field::placeholder",
                                1: ".input-field::-webkit-input-placeholder",
                                2: ".input-field:placeholder-shown"
                            },
                            "::msclear": {
                                0: ".input-field::ms-clear"
                            }
                        }, Ge = function(e) {
                            return !function(e) {
                                var t = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/
                                  , r = !1;
                                for (var n in e)
                                    if (e.hasOwnProperty(n)) {
                                        var o = e[n];
                                        if (o)
                                            for (var i in o)
                                                if (o.hasOwnProperty(i)) {
                                                    var a = o[i];
                                                    !0 === t.test(a) && (r = !0)
                                                }
                                    }
                                return !0 === r
                            }(e)
                        }, $e = function(e, t) {
                            var r = t.property
                              , n = t.value;
                            if ("autofill" !== e)
                                return r + ":" + n + ";";
                            var o = "";
                            return r === Ue.background && (o = "box-shadow: 0 0 0 1000px ".concat(n, " inset !important;background-color:").concat(n, " !important;")),
                            r === Ue.color && (o = "-webkit-text-fill-color: ".concat(n, ";color:").concat(n, " !important;")),
                            o
                        }, Je = function(e) {
                            return function(t) {
                                for (var r = He(He({}, t), {}, {
                                    autofill: He({}, t.base)
                                }), n = Object.keys(r), o = 0; o < n.length; o++) {
                                    var i = n[o]
                                      , a = []
                                      , c = Object.keys(r[i])
                                      , s = [];
                                    for (var u in r[i])
                                        r[i].hasOwnProperty(u) && s.push(r[i][u]);
                                    for (var l = 0; l < c.length; l++) {
                                        var p = c[l]
                                          , f = s[l]
                                          , d = Ue[p];
                                        if (d) {
                                            var h = $e(i, {
                                                property: d,
                                                value: f
                                            });
                                            a.push(h)
                                        }
                                    }
                                    if (We[i] && a) {
                                        var y = a.filter(Boolean).join("");
                                        e(y, We[i], i)
                                    }
                                }
                            }
                        }, ze = function(e) {
                            var t = document.createElement("style");
                            return t.setAttribute("data-styling-key", e),
                            t.appendChild(document.createTextNode("")),
                            document.head.appendChild(t),
                            t.sheet
                        }, Ye = function(e, t, r) {
                            try {
                                if ("object" === Fe(t))
                                    for (var n in t)
                                        t[n] && e.insertRule && e.insertRule(t[n] + " {" + r + "}", 0);
                                else
                                    e.insertRule && e.insertRule(t + "{" + r + "}", 0)
                            } catch (e) {}
                        }, qe = Je((function(e, t, r) {
                            var n = ze(r);
                            Ye(n, t, e)
                        }
                        )), Xe = Je((function(e, t, r) {
                            var n = Qe(r);
                            n ? Ze(n) : n = ze(r),
                            Ye(n, t, e)
                        }
                        )), Qe = function(e) {
                            var t = B(document, '[data-styling-key="' + e + '"]');
                            return t ? t.sheet : null
                        }, Ze = function(e) {
                            for (var t = e.cssRules.length, r = 0; r < t; r++)
                                e.deleteRule(0)
                        };
                        const et = {
                            process: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                  , t = {
                                    base: He(He({}, Me.base), e.base),
                                    placeholder: He(He({}, Me.placeholder), e.placeholder),
                                    validated: He(He({}, Me.validated), e.validated),
                                    error: He(He({}, Me.error), e.error)
                                };
                                Ve = Ge(t) ? t : He({}, Me),
                                qe(Ve)
                            },
                            update: function(e) {
                                var t = {
                                    base: He(He({}, Ve.base), e.base),
                                    placeholder: He(He({}, Ve.placeholder), e.placeholder),
                                    validated: He(He({}, Ve.validated), e.validated),
                                    error: He(He({}, Ve.error), e.error)
                                };
                                Ge(t) && Xe(Ve = t)
                            }
                        };
                        function tt(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return rt(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return rt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return rt(e, t)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function rt(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        function nt(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function ot(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? nt(Object(r), !0).forEach((function(t) {
                                    it(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nt(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }
                        function it(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function at(e) {
                            return at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            at(e)
                        }
                        function ct(e) {
                            return "object" === at(e) && null !== e && "[object Array]" === Object.prototype.toString.call(e)
                        }
                        function st(e, t) {
                            return t.split(".").reduce((function(e, t) {
                                return e && e[t] ? e[t] : void 0
                            }
                            ), e)
                        }
                        function ut(e, t, r) {
                            return ot(ot({}, e), {}, it({}, t, r))
                        }
                        function lt(e, t) {
                            var r = e && Object.keys(e);
                            r && r.length && r.map((function(r) {
                                return t[r] = e[r],
                                !0
                            }
                            ))
                        }
                        function pt() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            var n = ct(t[0]) ? t[0] : t;
                            return {
                                from: function(e) {
                                    return n.map((function(t) {
                                        return t in e ? it({}, t, e[t]) : {}
                                    }
                                    )).reduce((function(e, t) {
                                        return ot(ot({}, e), t)
                                    }
                                    ), {})
                                }
                            }
                        }
                        function ft() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            var n = ct(t[0]) ? t[0] : t;
                            return {
                                from: function(e) {
                                    var t = Object.keys(e).filter((function(e) {
                                        return !n.includes(e)
                                    }
                                    ));
                                    return pt.apply(void 0, tt(t)).from(e)
                                }
                            }
                        }
                        const dt = crypto;
                        var ht = function(e) {
                            return e instanceof CryptoKey
                        };
                        function yt(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        var bt = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t, r) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = "SHA-".concat(t.slice(-3)),
                                            e.t0 = Uint8Array,
                                            e.next = 4,
                                            dt.subtle.digest(n, r);
                                        case 4:
                                            return e.t1 = e.sent,
                                            e.abrupt("return", new e.t0(e.t1));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )),
                            function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        yt(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        yt(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            );
                            return function(e, r) {
                                return t.apply(this, arguments)
                            }
                        }();
                        const vt = bt;
                        function gt(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        var mt = new TextEncoder
                          , wt = new TextDecoder
                          , Ot = Math.pow(2, 32);
                        function _t() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            var n = t.reduce((function(e, t) {
                                return e + t.length
                            }
                            ), 0)
                              , o = new Uint8Array(n)
                              , i = 0;
                            return t.forEach((function(e) {
                                o.set(e, i),
                                i += e.length
                            }
                            )),
                            o
                        }
                        function St(e, t) {
                            return _t(mt.encode(e), new Uint8Array([0]), t)
                        }
                        function Pt(e, t, r) {
                            if (t < 0 || t >= Ot)
                                throw new RangeError("value must be >= 0 and <= ".concat(Ot - 1, ". Received ").concat(t));
                            e.set([t >>> 24, t >>> 16, t >>> 8, 255 & t], r)
                        }
                        function jt(e) {
                            var t = new Uint8Array(4);
                            return Pt(t, e),
                            t
                        }
                        function kt(e) {
                            return _t(jt(e.length), e)
                        }
                        function Ct(e, t, r) {
                            return Et.apply(this, arguments)
                        }
                        function Et() {
                            var e;
                            return e = regeneratorRuntime.mark((function e(t, r, n) {
                                var o, i, a, c;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            o = Math.ceil((r >> 3) / 32),
                                            i = new Uint8Array(32 * o),
                                            a = 0;
                                        case 3:
                                            if (!(a < o)) {
                                                e.next = 17;
                                                break
                                            }
                                            return (c = new Uint8Array(4 + t.length + n.length)).set(jt(a + 1)),
                                            c.set(t, 4),
                                            c.set(n, 4 + t.length),
                                            e.t0 = i,
                                            e.next = 11,
                                            vt("sha256", c);
                                        case 11:
                                            e.t1 = e.sent,
                                            e.t2 = 32 * a,
                                            e.t0.set.call(e.t0, e.t1, e.t2);
                                        case 14:
                                            a++,
                                            e.next = 3;
                                            break;
                                        case 17:
                                            return e.abrupt("return", i.slice(0, r >> 3));
                                        case 18:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )),
                            Et = function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        gt(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        gt(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            ,
                            Et.apply(this, arguments)
                        }
                        var xt = function(e) {
                            return function(e) {
                                var t = e;
                                "string" == typeof t && (t = mt.encode(t));
                                for (var r = [], n = 0; n < t.length; n += 32768)
                                    r.push(String.fromCharCode.apply(null, t.subarray(n, n + 32768)));
                                return btoa(r.join(""))
                            }(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
                        }
                          , At = function(e) {
                            var t = e;
                            t instanceof Uint8Array && (t = wt.decode(t)),
                            t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                            try {
                                return function(e) {
                                    for (var t = atob(e), r = new Uint8Array(t.length), n = 0; n < t.length; n++)
                                        r[n] = t.charCodeAt(n);
                                    return r
                                }(t)
                            } catch (e) {
                                throw new TypeError("The input to be decoded is not correctly encoded.")
                            }
                        };
                        function Rt(e) {
                            return Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            Rt(e)
                        }
                        function Tt(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        function Dt(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function It(e, t, r) {
                            return t && Dt(e.prototype, t),
                            r && Dt(e, r),
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }),
                            e
                        }
                        function Lt(e, t) {
                            if ("function" != typeof t && null !== t)
                                throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }),
                            Object.defineProperty(e, "prototype", {
                                writable: !1
                            }),
                            t && Nt(e, t)
                        }
                        function Kt(e) {
                            var t = Ht();
                            return function() {
                                var r, n = Vt(e);
                                if (t) {
                                    var o = Vt(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === Rt(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return Mt(e)
                                }(this, r)
                            }
                        }
                        function Mt(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        function Ft(e) {
                            var t = "function" == typeof Map ? new Map : void 0;
                            return Ft = function(e) {
                                if (null === e || (r = e,
                                -1 === Function.toString.call(r).indexOf("[native code]")))
                                    return e;
                                var r;
                                if ("function" != typeof e)
                                    throw new TypeError("Super expression must either be null or a function");
                                if (void 0 !== t) {
                                    if (t.has(e))
                                        return t.get(e);
                                    t.set(e, n)
                                }
                                function n() {
                                    return Bt(e, arguments, Vt(this).constructor)
                                }
                                return n.prototype = Object.create(e.prototype, {
                                    constructor: {
                                        value: n,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Nt(n, e)
                            }
                            ,
                            Ft(e)
                        }
                        function Bt(e, t, r) {
                            return Bt = Ht() ? Reflect.construct.bind() : function(e, t, r) {
                                var n = [null];
                                n.push.apply(n, t);
                                var o = new (Function.bind.apply(e, n));
                                return r && Nt(o, r.prototype),
                                o
                            }
                            ,
                            Bt.apply(null, arguments)
                        }
                        function Ht() {
                            if ("undefined" == typeof Reflect || !Reflect.construct)
                                return !1;
                            if (Reflect.construct.sham)
                                return !1;
                            if ("function" == typeof Proxy)
                                return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                ))),
                                !0
                            } catch (e) {
                                return !1
                            }
                        }
                        function Nt(e, t) {
                            return Nt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            Nt(e, t)
                        }
                        function Vt(e) {
                            return Vt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            Vt(e)
                        }
                        var Ut = function(e) {
                            Lt(r, e);
                            var t = Kt(r);
                            function r(e) {
                                var n, o;
                                return Tt(this, r),
                                (n = t.call(this, e)).code = "ERR_JOSE_GENERIC",
                                n.name = n.constructor.name,
                                null === (o = Error.captureStackTrace) || void 0 === o || o.call(Error, Mt(n), n.constructor),
                                n
                            }
                            return It(r, null, [{
                                key: "code",
                                get: function() {
                                    return "ERR_JOSE_GENERIC"
                                }
                            }]),
                            r
                        }(Ft(Error))
                          , Wt = function(e) {
                            Lt(r, e);
                            var t = Kt(r);
                            function r() {
                                var e;
                                return Tt(this, r),
                                (e = t.apply(this, arguments)).code = "ERR_JOSE_NOT_SUPPORTED",
                                e
                            }
                            return It(r, null, [{
                                key: "code",
                                get: function() {
                                    return "ERR_JOSE_NOT_SUPPORTED"
                                }
                            }]),
                            r
                        }(Ut)
                          , Gt = function(e) {
                            Lt(r, e);
                            var t = Kt(r);
                            function r() {
                                var e;
                                return Tt(this, r),
                                (e = t.apply(this, arguments)).code = "ERR_JWE_INVALID",
                                e
                            }
                            return It(r, null, [{
                                key: "code",
                                get: function() {
                                    return "ERR_JWE_INVALID"
                                }
                            }]),
                            r
                        }(Ut);
                        Symbol.asyncIterator;
                        const $t = dt.getRandomValues.bind(dt);
                        function Jt(e) {
                            switch (e) {
                            case "A128GCM":
                            case "A128GCMKW":
                            case "A192GCM":
                            case "A192GCMKW":
                            case "A256GCM":
                            case "A256GCMKW":
                                return 96;
                            case "A128CBC-HS256":
                            case "A192CBC-HS384":
                            case "A256CBC-HS512":
                                return 128;
                            default:
                                throw new Wt("Unsupported JWE Algorithm: ".concat(e))
                            }
                        }
                        const zt = function(e) {
                            return $t(new Uint8Array(Jt(e) >> 3))
                        };
                        const Yt = function(e, t) {
                            if (t.length << 3 !== Jt(e))
                                throw new Gt("Invalid Initialization Vector length")
                        };
                        const qt = function(e, t) {
                            var r = e.byteLength << 3;
                            if (r !== t)
                                throw new Gt("Invalid Content Encryption Key length. Expected ".concat(t, " bits, got ").concat(r, " bits"))
                        }
                          , Xt = function(e) {
                            return ht(e)
                        };
                        var Qt = ["CryptoKey"];
                        function Zt(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function er(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        Zt(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        Zt(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        var tr = function() {
                            var e = er(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            throw new Wt('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.');
                                        case 1:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        const rr = [{
                            hash: "SHA-256",
                            name: "HMAC"
                        }, !0, ["sign"]];
                        function nr(e) {
                            return new TypeError("CryptoKey does not support this operation, its ".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "algorithm.name", " must be ").concat(e))
                        }
                        function or(e, t) {
                            return e.name === t
                        }
                        function ir(e) {
                            return parseInt(e.name.slice(4), 10)
                        }
                        function ar(e, t) {
                            if (t.length && !t.some((function(t) {
                                return e.usages.includes(t)
                            }
                            ))) {
                                var r = "CryptoKey does not support this operation, its usages must include ";
                                if (t.length > 2) {
                                    var n = t.pop();
                                    r += "one of ".concat(t.join(", "), ", or ").concat(n, ".")
                                } else
                                    2 === t.length ? r += "one of ".concat(t[0], " or ").concat(t[1], ".") : r += "".concat(t[0], ".");
                                throw new TypeError(r)
                            }
                        }
                        function cr(e, t) {
                            switch (t) {
                            case "A128GCM":
                            case "A192GCM":
                            case "A256GCM":
                                if (!or(e.algorithm, "AES-GCM"))
                                    throw nr("AES-GCM");
                                var r = parseInt(t.slice(1, 4), 10);
                                if (e.algorithm.length !== r)
                                    throw nr(r, "algorithm.length");
                                break;
                            case "A128KW":
                            case "A192KW":
                            case "A256KW":
                                if (!or(e.algorithm, "AES-KW"))
                                    throw nr("AES-KW");
                                var n = parseInt(t.slice(1, 4), 10);
                                if (e.algorithm.length !== n)
                                    throw nr(n, "algorithm.length");
                                break;
                            case "ECDH":
                                switch (e.algorithm.name) {
                                case "ECDH":
                                case "X25519":
                                case "X448":
                                    break;
                                default:
                                    throw nr("ECDH, X25519, or X448")
                                }
                                break;
                            case "PBES2-HS256+A128KW":
                            case "PBES2-HS384+A192KW":
                            case "PBES2-HS512+A256KW":
                                if (!or(e.algorithm, "PBKDF2"))
                                    throw nr("PBKDF2");
                                break;
                            case "RSA-OAEP":
                            case "RSA-OAEP-256":
                            case "RSA-OAEP-384":
                            case "RSA-OAEP-512":
                                if (!or(e.algorithm, "RSA-OAEP"))
                                    throw nr("RSA-OAEP");
                                var o = parseInt(t.slice(9), 10) || 1;
                                if (ir(e.algorithm.hash) !== o)
                                    throw nr("SHA-".concat(o), "algorithm.hash");
                                break;
                            default:
                                throw new TypeError("CryptoKey does not support this operation")
                            }
                            for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), c = 2; c < i; c++)
                                a[c - 2] = arguments[c];
                            ar(e, a)
                        }
                        function sr(e) {
                            return sr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            sr(e)
                        }
                        function ur(e, t) {
                            for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                                n[o - 2] = arguments[o];
                            if (n.length > 2) {
                                var i = n.pop();
                                e += "one of type ".concat(n.join(", "), ", or ").concat(i, ".")
                            } else
                                2 === n.length ? e += "one of type ".concat(n[0], " or ").concat(n[1], ".") : e += "of type ".concat(n[0], ".");
                            return null == t ? e += " Received ".concat(t) : "function" == typeof t && t.name ? e += " Received function ".concat(t.name) : "object" === sr(t) && null != t && t.constructor && t.constructor.name && (e += " Received an instance of ".concat(t.constructor.name)),
                            e
                        }
                        const lr = function(e) {
                            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                                r[n - 1] = arguments[n];
                            return ur.apply(void 0, ["Key must be ", e].concat(r))
                        };
                        function pr(e, t) {
                            for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
                                n[o - 2] = arguments[o];
                            return ur.apply(void 0, ["Key for the ".concat(e, " algorithm must be "), t].concat(n))
                        }
                        function fr(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function dr(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        fr(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        fr(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        function hr(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return yr(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return yr(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return yr(e, t)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function yr(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        function br(e, t) {
                            if (e.algorithm.length !== parseInt(t.slice(1, 4), 10))
                                throw new TypeError("Invalid key size for alg: ".concat(t))
                        }
                        function vr(e, t, r) {
                            if (ht(e))
                                return cr(e, t, r),
                                e;
                            if (e instanceof Uint8Array)
                                return dt.subtle.importKey("raw", e, "AES-KW", !0, [r]);
                            throw new TypeError(lr.apply(void 0, [e].concat(hr(Qt), ["Uint8Array"])))
                        }
                        var gr = function() {
                            var e = dr(regeneratorRuntime.mark((function e(t, r, n) {
                                var o, i, a;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                            vr(r, t, "wrapKey");
                                        case 2:
                                            return br(i = e.sent, t),
                                            e.next = 6,
                                            (o = dt.subtle).importKey.apply(o, ["raw", n].concat(hr(rr)));
                                        case 6:
                                            return a = e.sent,
                                            e.t0 = Uint8Array,
                                            e.next = 10,
                                            dt.subtle.wrapKey("raw", a, i, "AES-KW");
                                        case 10:
                                            return e.t1 = e.sent,
                                            e.abrupt("return", new e.t0(e.t1));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t, r, n) {
                                return e.apply(this, arguments)
                            }
                        }();
                        function mr(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return wr(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return wr(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return wr(e, t)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function wr(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        function Or(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function _r(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        Or(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        Or(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        function Sr(e, t, r, n) {
                            return Pr.apply(this, arguments)
                        }
                        function Pr() {
                            return Pr = _r(regeneratorRuntime.mark((function e(t, r, n, o) {
                                var i, a, c, s, u, l = arguments;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (i = l.length > 4 && void 0 !== l[4] ? l[4] : new Uint8Array(0),
                                            a = l.length > 5 && void 0 !== l[5] ? l[5] : new Uint8Array(0),
                                            ht(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new TypeError(lr.apply(void 0, [t].concat(mr(Qt))));
                                        case 4:
                                            if (cr(t, "ECDH"),
                                            ht(r)) {
                                                e.next = 7;
                                                break
                                            }
                                            throw new TypeError(lr.apply(void 0, [r].concat(mr(Qt))));
                                        case 7:
                                            return cr(r, "ECDH", "deriveBits"),
                                            c = _t(kt(mt.encode(n)), kt(i), kt(a), jt(o)),
                                            s = "X25519" === t.algorithm.name ? 256 : "X448" === t.algorithm.name ? 448 : Math.ceil(parseInt(t.algorithm.namedCurve.substr(-3), 10) / 8) << 3,
                                            e.t0 = Uint8Array,
                                            e.next = 13,
                                            dt.subtle.deriveBits({
                                                name: t.algorithm.name,
                                                public: t
                                            }, r, s);
                                        case 13:
                                            return e.t1 = e.sent,
                                            u = new e.t0(e.t1),
                                            e.abrupt("return", Ct(u, o, c));
                                        case 16:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))),
                            Pr.apply(this, arguments)
                        }
                        function jr(e) {
                            return kr.apply(this, arguments)
                        }
                        function kr() {
                            return (kr = _r(regeneratorRuntime.mark((function e(t) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (ht(t)) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError(lr.apply(void 0, [t].concat(mr(Qt))));
                                        case 2:
                                            return e.abrupt("return", dt.subtle.generateKey(t.algorithm, !0, ["deriveBits"]));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))).apply(this, arguments)
                        }
                        function Cr(e) {
                            if (!ht(e))
                                throw new TypeError(lr.apply(void 0, [e].concat(mr(Qt))));
                            return ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve) || "X25519" === e.algorithm.name || "X448" === e.algorithm.name
                        }
                        function Er(e) {
                            if (!(e instanceof Uint8Array) || e.length < 8)
                                throw new Gt("PBES2 Salt Input must be 8 or more octets")
                        }
                        function xr(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function Ar(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        xr(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        xr(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        function Rr(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return Tr(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return Tr(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return Tr(e, t)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function Tr(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        function Dr(e, t) {
                            if (e instanceof Uint8Array)
                                return dt.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveBits"]);
                            if (ht(e))
                                return cr(e, t, "deriveBits", "deriveKey"),
                                e;
                            throw new TypeError(lr.apply(void 0, [e].concat(Rr(Qt), ["Uint8Array"])))
                        }
                        function Ir(e, t, r, n) {
                            return Lr.apply(this, arguments)
                        }
                        function Lr() {
                            return (Lr = Ar(regeneratorRuntime.mark((function e(t, r, n, o) {
                                var i, a, c, s, u;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return Er(t),
                                            i = St(r, t),
                                            a = parseInt(r.slice(13, 16), 10),
                                            c = {
                                                hash: "SHA-".concat(r.slice(8, 11)),
                                                iterations: n,
                                                name: "PBKDF2",
                                                salt: i
                                            },
                                            s = {
                                                length: a,
                                                name: "AES-KW"
                                            },
                                            e.next = 7,
                                            Dr(o, r);
                                        case 7:
                                            if (!(u = e.sent).usages.includes("deriveBits")) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.t0 = Uint8Array,
                                            e.next = 12,
                                            dt.subtle.deriveBits(c, u, a);
                                        case 12:
                                            return e.t1 = e.sent,
                                            e.abrupt("return", new e.t0(e.t1));
                                        case 14:
                                            if (!u.usages.includes("deriveKey")) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.abrupt("return", dt.subtle.deriveKey(c, u, s, !1, ["wrapKey", "unwrapKey"]));
                                        case 16:
                                            throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
                                        case 17:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))).apply(this, arguments)
                        }
                        var Kr = function() {
                            var e = Ar(regeneratorRuntime.mark((function e(t, r, n) {
                                var o, i, a, c, s = arguments;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return o = s.length > 3 && void 0 !== s[3] ? s[3] : 2048,
                                            i = s.length > 4 && void 0 !== s[4] ? s[4] : $t(new Uint8Array(16)),
                                            e.next = 4,
                                            Ir(i, t, o, r);
                                        case 4:
                                            return a = e.sent,
                                            e.next = 7,
                                            gr(t.slice(-6), a, n);
                                        case 7:
                                            return c = e.sent,
                                            e.abrupt("return", {
                                                encryptedKey: c,
                                                p2c: o,
                                                p2s: xt(i)
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t, r, n) {
                                return e.apply(this, arguments)
                            }
                        }();
                        function Mr(e) {
                            switch (e) {
                            case "RSA-OAEP":
                            case "RSA-OAEP-256":
                            case "RSA-OAEP-384":
                            case "RSA-OAEP-512":
                                return "RSA-OAEP";
                            default:
                                throw new Wt("alg ".concat(e, " is not supported either by JOSE or your javascript runtime"))
                            }
                        }
                        const Fr = function(e, t) {
                            if (e.startsWith("RS") || e.startsWith("PS")) {
                                var r = t.algorithm.modulusLength;
                                if ("number" != typeof r || r < 2048)
                                    throw new TypeError("".concat(e, " requires key modulusLength to be 2048 bits or larger"))
                            }
                        };
                        function Br(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return Hr(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return Hr(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return Hr(e, t)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function Hr(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        function Nr(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function Vr(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        Nr(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        Nr(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        var Ur = function() {
                            var e = Vr(regeneratorRuntime.mark((function e(t, r, n) {
                                var o, i;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (ht(r)) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError(lr.apply(void 0, [r].concat(Br(Qt))));
                                        case 2:
                                            if (cr(r, t, "encrypt", "wrapKey"),
                                            Fr(t, r),
                                            !r.usages.includes("encrypt")) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.t0 = Uint8Array,
                                            e.next = 8,
                                            dt.subtle.encrypt(Mr(t), r, n);
                                        case 8:
                                            return e.t1 = e.sent,
                                            e.abrupt("return", new e.t0(e.t1));
                                        case 10:
                                            if (!r.usages.includes("wrapKey")) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 13,
                                            (o = dt.subtle).importKey.apply(o, ["raw", n].concat(Br(rr)));
                                        case 13:
                                            return i = e.sent,
                                            e.t2 = Uint8Array,
                                            e.next = 17,
                                            dt.subtle.wrapKey("raw", i, r, Mr(t));
                                        case 17:
                                            return e.t3 = e.sent,
                                            e.abrupt("return", new e.t2(e.t3));
                                        case 19:
                                            throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
                                        case 20:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t, r, n) {
                                return e.apply(this, arguments)
                            }
                        }();
                        function Wr(e) {
                            switch (e) {
                            case "A128GCM":
                                return 128;
                            case "A192GCM":
                                return 192;
                            case "A256GCM":
                            case "A128CBC-HS256":
                                return 256;
                            case "A192CBC-HS384":
                                return 384;
                            case "A256CBC-HS512":
                                return 512;
                            default:
                                throw new Wt("Unsupported JWE Algorithm: ".concat(e))
                            }
                        }
                        const Gr = function(e) {
                            return $t(new Uint8Array(Wr(e) >> 3))
                        };
                        function $r() {
                            return "undefined" != typeof WebSocketPair || "undefined" != typeof navigator && "Cloudflare-Workers" === navigator.userAgent || "undefined" != typeof EdgeRuntime && "vercel" === EdgeRuntime
                        }
                        function Jr(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function zr(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Jr(Object(r), !0).forEach((function(t) {
                                    Yr(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jr(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }
                        function Yr(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function qr(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function Xr(e) {
                            var t, r;
                            switch (e.kty) {
                            case "oct":
                                switch (e.alg) {
                                case "HS256":
                                case "HS384":
                                case "HS512":
                                    t = {
                                        name: "HMAC",
                                        hash: "SHA-".concat(e.alg.slice(-3))
                                    },
                                    r = ["sign", "verify"];
                                    break;
                                case "A128CBC-HS256":
                                case "A192CBC-HS384":
                                case "A256CBC-HS512":
                                    throw new Wt("".concat(e.alg, " keys cannot be imported as CryptoKey instances"));
                                case "A128GCM":
                                case "A192GCM":
                                case "A256GCM":
                                case "A128GCMKW":
                                case "A192GCMKW":
                                case "A256GCMKW":
                                    t = {
                                        name: "AES-GCM"
                                    },
                                    r = ["encrypt", "decrypt"];
                                    break;
                                case "A128KW":
                                case "A192KW":
                                case "A256KW":
                                    t = {
                                        name: "AES-KW"
                                    },
                                    r = ["wrapKey", "unwrapKey"];
                                    break;
                                case "PBES2-HS256+A128KW":
                                case "PBES2-HS384+A192KW":
                                case "PBES2-HS512+A256KW":
                                    t = {
                                        name: "PBKDF2"
                                    },
                                    r = ["deriveBits"];
                                    break;
                                default:
                                    throw new Wt('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            case "RSA":
                                switch (e.alg) {
                                case "PS256":
                                case "PS384":
                                case "PS512":
                                    t = {
                                        name: "RSA-PSS",
                                        hash: "SHA-".concat(e.alg.slice(-3))
                                    },
                                    r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "RS256":
                                case "RS384":
                                case "RS512":
                                    t = {
                                        name: "RSASSA-PKCS1-v1_5",
                                        hash: "SHA-".concat(e.alg.slice(-3))
                                    },
                                    r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "RSA-OAEP":
                                case "RSA-OAEP-256":
                                case "RSA-OAEP-384":
                                case "RSA-OAEP-512":
                                    t = {
                                        name: "RSA-OAEP",
                                        hash: "SHA-".concat(parseInt(e.alg.slice(-3), 10) || 1)
                                    },
                                    r = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                                    break;
                                default:
                                    throw new Wt('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            case "EC":
                                switch (e.alg) {
                                case "ES256":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-256"
                                    },
                                    r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ES384":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-384"
                                    },
                                    r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ES512":
                                    t = {
                                        name: "ECDSA",
                                        namedCurve: "P-521"
                                    },
                                    r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ECDH-ES":
                                case "ECDH-ES+A128KW":
                                case "ECDH-ES+A192KW":
                                case "ECDH-ES+A256KW":
                                    t = {
                                        name: "ECDH",
                                        namedCurve: e.crv
                                    },
                                    r = e.d ? ["deriveBits"] : [];
                                    break;
                                default:
                                    throw new Wt('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            case "OKP":
                                switch (e.alg) {
                                case "EdDSA":
                                    t = {
                                        name: e.crv
                                    },
                                    r = e.d ? ["sign"] : ["verify"];
                                    break;
                                case "ECDH-ES":
                                case "ECDH-ES+A128KW":
                                case "ECDH-ES+A192KW":
                                case "ECDH-ES+A256KW":
                                    t = {
                                        name: e.crv
                                    },
                                    r = e.d ? ["deriveBits"] : [];
                                    break;
                                default:
                                    throw new Wt('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                }
                                break;
                            default:
                                throw new Wt('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
                            }
                            return {
                                algorithm: t,
                                keyUsages: r
                            }
                        }
                        var Qr = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                var r, n, o, i, a, c, s, u, l, p;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (t.alg) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
                                        case 2:
                                            if (o = Xr(t),
                                            i = o.algorithm,
                                            a = o.keyUsages,
                                            c = [i, null !== (r = t.ext) && void 0 !== r && r, null !== (n = t.key_ops) && void 0 !== n ? n : a],
                                            "PBKDF2" !== i.name) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return", (s = dt.subtle).importKey.apply(s, ["raw", At(t.k)].concat(c)));
                                        case 6:
                                            return delete (u = zr({}, t)).alg,
                                            delete u.use,
                                            e.prev = 9,
                                            e.next = 12,
                                            (l = dt.subtle).importKey.apply(l, ["jwk", u].concat(c));
                                        case 12:
                                        case 21:
                                            return e.abrupt("return", e.sent);
                                        case 15:
                                            if (e.prev = 15,
                                            e.t0 = e.catch(9),
                                            "Ed25519" !== i.name || "NotSupportedError" !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.name) || !$r()) {
                                                e.next = 22;
                                                break
                                            }
                                            return c[0] = {
                                                name: "NODE-ED25519",
                                                namedCurve: "NODE-ED25519"
                                            },
                                            e.next = 21,
                                            (p = dt.subtle).importKey.apply(p, ["jwk", u].concat(c));
                                        case 22:
                                            throw e.t0;
                                        case 23:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, null, [[9, 15]])
                            }
                            )),
                            function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        qr(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        qr(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            );
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }();
                        const Zr = Qr;
                        function en(e) {
                            return en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            en(e)
                        }
                        function tn(e) {
                            if ("object" !== en(t = e) || null === t || "[object Object]" !== Object.prototype.toString.call(e))
                                return !1;
                            var t;
                            if (null === Object.getPrototypeOf(e))
                                return !0;
                            for (var r = e; null !== Object.getPrototypeOf(r); )
                                r = Object.getPrototypeOf(r);
                            return Object.getPrototypeOf(e) === r
                        }
                        function rn(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function nn(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? rn(Object(r), !0).forEach((function(t) {
                                    on(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rn(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }
                        function on(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function an(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function cn(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        an(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        an(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        function sn(e, t, r) {
                            return un.apply(this, arguments)
                        }
                        function un() {
                            return (un = cn(regeneratorRuntime.mark((function e(t, r, n) {
                                var o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (tn(t)) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError("JWK must be an object");
                                        case 2:
                                            r || (r = t.alg),
                                            e.t0 = t.kty,
                                            e.next = "oct" === e.t0 ? 6 : "RSA" === e.t0 ? 12 : "EC" === e.t0 || "OKP" === e.t0 ? 14 : 15;
                                            break;
                                        case 6:
                                            if ("string" == typeof t.k && t.k) {
                                                e.next = 8;
                                                break
                                            }
                                            throw new TypeError('missing "k" (Key Value) Parameter value');
                                        case 8:
                                            if (null != n || (n = !0 !== t.ext),
                                            !n) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.abrupt("return", Zr(nn(nn({}, t), {}, {
                                                alg: r,
                                                ext: null !== (o = t.ext) && void 0 !== o && o
                                            })));
                                        case 11:
                                            return e.abrupt("return", At(t.k));
                                        case 12:
                                            if (void 0 === t.oth) {
                                                e.next = 14;
                                                break
                                            }
                                            throw new Wt('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
                                        case 14:
                                            return e.abrupt("return", Zr(nn(nn({}, t), {}, {
                                                alg: r
                                            })));
                                        case 15:
                                            throw new Wt('Unsupported "kty" (Key Type) Parameter value');
                                        case 16:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))).apply(this, arguments)
                        }
                        function ln(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return pn(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return pn(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return pn(e, t)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function pn(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        const fn = function(e, t, r) {
                            e.startsWith("HS") || "dir" === e || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e) ? function(e, t) {
                                if (!(t instanceof Uint8Array)) {
                                    if (!Xt(t))
                                        throw new TypeError(pr.apply(void 0, [e, t].concat(ln(Qt), ["Uint8Array"])));
                                    if ("secret" !== t.type)
                                        throw new TypeError("".concat(Qt.join(" or "), ' instances for symmetric algorithms must be of type "secret"'))
                                }
                            }(e, t) : function(e, t, r) {
                                if (!Xt(t))
                                    throw new TypeError(pr.apply(void 0, [e, t].concat(ln(Qt))));
                                if ("secret" === t.type)
                                    throw new TypeError("".concat(Qt.join(" or "), ' instances for asymmetric algorithms must not be of type "secret"'));
                                if ("sign" === r && "public" === t.type)
                                    throw new TypeError("".concat(Qt.join(" or "), ' instances for asymmetric algorithm signing must be of type "private"'));
                                if ("decrypt" === r && "public" === t.type)
                                    throw new TypeError("".concat(Qt.join(" or "), ' instances for asymmetric algorithm decryption must be of type "private"'));
                                if (t.algorithm && "verify" === r && "private" === t.type)
                                    throw new TypeError("".concat(Qt.join(" or "), ' instances for asymmetric algorithm verifying must be of type "public"'));
                                if (t.algorithm && "encrypt" === r && "private" === t.type)
                                    throw new TypeError("".concat(Qt.join(" or "), ' instances for asymmetric algorithm encryption must be of type "public"'))
                            }(e, t, r)
                        };
                        function dn(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return hn(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return hn(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return hn(e, t)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function hn(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        function yn(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function bn(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        yn(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        yn(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        function vn(e, t, r, n, o) {
                            return gn.apply(this, arguments)
                        }
                        function gn() {
                            return (gn = bn(regeneratorRuntime.mark((function e(t, r, n, o, i) {
                                var a, c, s, u, l, p;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (n instanceof Uint8Array) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError(lr(n, "Uint8Array"));
                                        case 2:
                                            return a = parseInt(t.slice(1, 4), 10),
                                            e.next = 5,
                                            dt.subtle.importKey("raw", n.subarray(a >> 3), "AES-CBC", !1, ["encrypt"]);
                                        case 5:
                                            return c = e.sent,
                                            e.next = 8,
                                            dt.subtle.importKey("raw", n.subarray(0, a >> 3), {
                                                hash: "SHA-".concat(a << 1),
                                                name: "HMAC"
                                            }, !1, ["sign"]);
                                        case 8:
                                            return s = e.sent,
                                            e.t0 = Uint8Array,
                                            e.next = 12,
                                            dt.subtle.encrypt({
                                                iv: o,
                                                name: "AES-CBC"
                                            }, c, r);
                                        case 12:
                                            return e.t1 = e.sent,
                                            u = new e.t0(e.t1),
                                            l = _t(i, o, u, (f = i.length << 3,
                                            d = void 0,
                                            h = void 0,
                                            y = void 0,
                                            d = Math.floor(f / Ot),
                                            h = f % Ot,
                                            Pt(y = new Uint8Array(8), d, 0),
                                            Pt(y, h, 4),
                                            y)),
                                            e.t2 = Uint8Array,
                                            e.next = 18,
                                            dt.subtle.sign("HMAC", s, l);
                                        case 18:
                                            return e.t3 = e.sent.slice(0, a >> 3),
                                            p = new e.t2(e.t3),
                                            e.abrupt("return", {
                                                ciphertext: u,
                                                tag: p
                                            });
                                        case 21:
                                        case "end":
                                            return e.stop()
                                        }
                                    var f, d, h, y
                                }
                                ), e)
                            }
                            )))).apply(this, arguments)
                        }
                        function mn(e, t, r, n, o) {
                            return wn.apply(this, arguments)
                        }
                        function wn() {
                            return (wn = bn(regeneratorRuntime.mark((function e(t, r, n, o, i) {
                                var a, c, s, u;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (!(n instanceof Uint8Array)) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 3,
                                            dt.subtle.importKey("raw", n, "AES-GCM", !1, ["encrypt"]);
                                        case 3:
                                            a = e.sent,
                                            e.next = 8;
                                            break;
                                        case 6:
                                            cr(n, t, "encrypt"),
                                            a = n;
                                        case 8:
                                            return e.t0 = Uint8Array,
                                            e.next = 11,
                                            dt.subtle.encrypt({
                                                additionalData: i,
                                                iv: o,
                                                name: "AES-GCM",
                                                tagLength: 128
                                            }, a, r);
                                        case 11:
                                            return e.t1 = e.sent,
                                            c = new e.t0(e.t1),
                                            s = c.slice(-16),
                                            u = c.slice(0, -16),
                                            e.abrupt("return", {
                                                ciphertext: u,
                                                tag: s
                                            });
                                        case 16:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))).apply(this, arguments)
                        }
                        var On = function() {
                            var e = bn(regeneratorRuntime.mark((function e(t, r, n, o, i) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (ht(n) || n instanceof Uint8Array) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new TypeError(lr.apply(void 0, [n].concat(dn(Qt), ["Uint8Array"])));
                                        case 2:
                                            Yt(t, o),
                                            e.t0 = t,
                                            e.next = "A128CBC-HS256" === e.t0 || "A192CBC-HS384" === e.t0 || "A256CBC-HS512" === e.t0 ? 6 : "A128GCM" === e.t0 || "A192GCM" === e.t0 || "A256GCM" === e.t0 ? 8 : 10;
                                            break;
                                        case 6:
                                            return n instanceof Uint8Array && qt(n, parseInt(t.slice(-3), 10)),
                                            e.abrupt("return", vn(t, r, n, o, i));
                                        case 8:
                                            return n instanceof Uint8Array && qt(n, parseInt(t.slice(1, 4), 10)),
                                            e.abrupt("return", mn(t, r, n, o, i));
                                        case 10:
                                            throw new Wt("Unsupported JWE Content Encryption Algorithm");
                                        case 11:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t, r, n, o, i) {
                                return e.apply(this, arguments)
                            }
                        }();
                        const _n = On;
                        function Sn(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function Pn(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        Sn(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        Sn(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        function jn(e, t, r, n) {
                            return kn.apply(this, arguments)
                        }
                        function kn() {
                            return (kn = Pn(regeneratorRuntime.mark((function e(t, r, n, o) {
                                var i, a, c, s;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return i = t.slice(0, 7),
                                            o || (o = zt(i)),
                                            e.next = 4,
                                            _n(i, n, r, o, new Uint8Array(0));
                                        case 4:
                                            return a = e.sent,
                                            c = a.ciphertext,
                                            s = a.tag,
                                            e.abrupt("return", {
                                                encryptedKey: c,
                                                iv: xt(o),
                                                tag: xt(s)
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))).apply(this, arguments)
                        }
                        function Cn(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return xn(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || En(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function En(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return xn(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name),
                                "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xn(e, t) : void 0
                            }
                        }
                        function xn(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        const An = function(e, t, r, n, o) {
                            if (void 0 !== o.crit && void 0 === n.crit)
                                throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
                            if (!n || void 0 === n.crit)
                                return new Set;
                            if (!Array.isArray(n.crit) || 0 === n.crit.length || n.crit.some((function(e) {
                                return "string" != typeof e || 0 === e.length
                            }
                            )))
                                throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
                            var i;
                            i = void 0 !== r ? new Map([].concat(Cn(Object.entries(r)), Cn(t.entries()))) : t;
                            var a, c = function(e, t) {
                                var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!r) {
                                    if (Array.isArray(e) || (r = En(e)) || t && e && "number" == typeof e.length) {
                                        r && (e = r);
                                        var n = 0
                                          , o = function() {};
                                        return {
                                            s: o,
                                            n: function() {
                                                return n >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[n++]
                                                }
                                            },
                                            e: function(e) {
                                                throw e
                                            },
                                            f: o
                                        }
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var i, a = !0, c = !1;
                                return {
                                    s: function() {
                                        r = r.call(e)
                                    },
                                    n: function() {
                                        var e = r.next();
                                        return a = e.done,
                                        e
                                    },
                                    e: function(e) {
                                        c = !0,
                                        i = e
                                    },
                                    f: function() {
                                        try {
                                            a || null == r.return || r.return()
                                        } finally {
                                            if (c)
                                                throw i
                                        }
                                    }
                                }
                            }(n.crit);
                            try {
                                for (c.s(); !(a = c.n()).done; ) {
                                    var s = a.value;
                                    if (!i.has(s))
                                        throw new Wt('Extension Header Parameter "'.concat(s, '" is not recognized'));
                                    if (void 0 === o[s])
                                        throw new e('Extension Header Parameter "'.concat(s, '" is missing'));
                                    if (i.get(s) && void 0 === n[s])
                                        throw new e('Extension Header Parameter "'.concat(s, '" MUST be integrity protected'))
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                            return new Set(n.crit)
                        };
                        var Rn = ["ext", "key_ops", "alg", "use"];
                        function Tn(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }
                        function Dn(e) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return In(e)
                            }(e) || function(e) {
                                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                                    return Array.from(e)
                            }(e) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return In(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return In(e, t)
                            }(e) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function In(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        function Ln(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        var Kn = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                var r, n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (!(t instanceof Uint8Array)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                kty: "oct",
                                                k: xt(t)
                                            });
                                        case 2:
                                            if (ht(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new TypeError(lr.apply(void 0, [t].concat(Dn(Qt), ["Uint8Array"])));
                                        case 4:
                                            if (t.extractable) {
                                                e.next = 6;
                                                break
                                            }
                                            throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
                                        case 6:
                                            return e.next = 8,
                                            dt.subtle.exportKey("jwk", t);
                                        case 8:
                                            return (r = e.sent).ext,
                                            r.key_ops,
                                            r.alg,
                                            r.use,
                                            n = Tn(r, Rn),
                                            e.abrupt("return", n);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )),
                            function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        Ln(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        Ln(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            );
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }();
                        const Mn = Kn;
                        function Fn(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function Bn(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        Fn(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        Fn(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        function Hn(e) {
                            return Nn.apply(this, arguments)
                        }
                        function Nn() {
                            return (Nn = Bn(regeneratorRuntime.mark((function e(t) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", Mn(t));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))).apply(this, arguments)
                        }
                        var Vn = ["encryptedKey"]
                          , Un = ["encryptedKey"];
                        function Wn(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }
                        function Gn(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function $n() {
                            var e;
                            return e = regeneratorRuntime.mark((function e(t, r, n, o) {
                                var i, a, c, s, u, l, p, f, d, h, y, b, v, g, m, w, O, _, S, P = arguments;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            i = P.length > 4 && void 0 !== P[4] ? P[4] : {},
                                            fn(t, n, "encrypt"),
                                            e.t0 = t,
                                            e.next = "dir" === e.t0 ? 5 : "ECDH-ES" === e.t0 || "ECDH-ES+A128KW" === e.t0 || "ECDH-ES+A192KW" === e.t0 || "ECDH-ES+A256KW" === e.t0 ? 7 : "RSA1_5" === e.t0 || "RSA-OAEP" === e.t0 || "RSA-OAEP-256" === e.t0 || "RSA-OAEP-384" === e.t0 || "RSA-OAEP-512" === e.t0 ? 39 : "PBES2-HS256+A128KW" === e.t0 || "PBES2-HS384+A192KW" === e.t0 || "PBES2-HS512+A256KW" === e.t0 ? 44 : "A128KW" === e.t0 || "A192KW" === e.t0 || "A256KW" === e.t0 ? 53 : "A128GCMKW" === e.t0 || "A192GCMKW" === e.t0 || "A256GCMKW" === e.t0 ? 58 : 67;
                                            break;
                                        case 5:
                                            return s = n,
                                            e.abrupt("break", 68);
                                        case 7:
                                            if (Cr(n)) {
                                                e.next = 9;
                                                break
                                            }
                                            throw new Wt("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                                        case 9:
                                            if (u = i.apu,
                                            l = i.apv,
                                            p = i.epk,
                                            e.t1 = p,
                                            e.t1) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.next = 15,
                                            jr(n);
                                        case 15:
                                            p = e.sent.privateKey;
                                        case 16:
                                            return e.next = 18,
                                            Hn(p);
                                        case 18:
                                            return f = e.sent,
                                            d = f.x,
                                            h = f.y,
                                            y = f.crv,
                                            b = f.kty,
                                            e.next = 25,
                                            Sr(n, p, "ECDH-ES" === t ? r : t, "ECDH-ES" === t ? Wr(r) : parseInt(t.slice(-5, -2), 10), u, l);
                                        case 25:
                                            if (v = e.sent,
                                            c = {
                                                epk: {
                                                    x: d,
                                                    crv: y,
                                                    kty: b
                                                }
                                            },
                                            "EC" === b && (c.epk.y = h),
                                            u && (c.apu = xt(u)),
                                            l && (c.apv = xt(l)),
                                            "ECDH-ES" !== t) {
                                                e.next = 33;
                                                break
                                            }
                                            return s = v,
                                            e.abrupt("break", 68);
                                        case 33:
                                            return s = o || Gr(r),
                                            g = t.slice(-6),
                                            e.next = 37,
                                            gr(g, v, s);
                                        case 37:
                                            return a = e.sent,
                                            e.abrupt("break", 68);
                                        case 39:
                                            return s = o || Gr(r),
                                            e.next = 42,
                                            Ur(t, n, s);
                                        case 42:
                                            return a = e.sent,
                                            e.abrupt("break", 68);
                                        case 44:
                                            return s = o || Gr(r),
                                            m = i.p2c,
                                            w = i.p2s,
                                            e.next = 48,
                                            Kr(t, n, s, m, w);
                                        case 48:
                                            return O = e.sent,
                                            a = O.encryptedKey,
                                            c = Wn(O, Vn),
                                            e.abrupt("break", 68);
                                        case 53:
                                            return s = o || Gr(r),
                                            e.next = 56,
                                            gr(t, n, s);
                                        case 56:
                                            return a = e.sent,
                                            e.abrupt("break", 68);
                                        case 58:
                                            return s = o || Gr(r),
                                            _ = i.iv,
                                            e.next = 62,
                                            jn(t, n, s, _);
                                        case 62:
                                            return S = e.sent,
                                            a = S.encryptedKey,
                                            c = Wn(S, Un),
                                            e.abrupt("break", 68);
                                        case 67:
                                            throw new Wt('Invalid or unsupported "alg" (JWE Algorithm) header value');
                                        case 68:
                                            return e.abrupt("return", {
                                                cek: s,
                                                encryptedKey: a,
                                                parameters: c
                                            });
                                        case 69:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )),
                            $n = function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        Gn(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        Gn(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            ,
                            $n.apply(this, arguments)
                        }
                        const Jn = function(e, t, r, n) {
                            return $n.apply(this, arguments)
                        };
                        function zn(e, t) {
                            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!r) {
                                if (Array.isArray(e) || (r = function(e, t) {
                                    if (!e)
                                        return;
                                    if ("string" == typeof e)
                                        return Yn(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === r && e.constructor && (r = e.constructor.name);
                                    if ("Map" === r || "Set" === r)
                                        return Array.from(e);
                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                        return Yn(e, t)
                                }(e)) || t && e && "number" == typeof e.length) {
                                    r && (e = r);
                                    var n = 0
                                      , o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return n >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[n++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: o
                                    }
                                }
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var i, a = !0, c = !1;
                            return {
                                s: function() {
                                    r = r.call(e)
                                },
                                n: function() {
                                    var e = r.next();
                                    return a = e.done,
                                    e
                                },
                                e: function(e) {
                                    c = !0,
                                    i = e
                                },
                                f: function() {
                                    try {
                                        a || null == r.return || r.return()
                                    } finally {
                                        if (c)
                                            throw i
                                    }
                                }
                            }
                        }
                        function Yn(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        const qn = function() {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                                t[r] = arguments[r];
                            var n, o = t.filter(Boolean);
                            if (0 === o.length || 1 === o.length)
                                return !0;
                            var i, a = zn(o);
                            try {
                                for (a.s(); !(i = a.n()).done; ) {
                                    var c = i.value
                                      , s = Object.keys(c);
                                    if (n && 0 !== n.size)
                                        for (var u = 0, l = s; u < l.length; u++) {
                                            var p = l[u];
                                            if (n.has(p))
                                                return !1;
                                            n.add(p)
                                        }
                                    else
                                        n = new Set(s)
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            return !0
                        };
                        function Xn(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function Qn(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Xn(Object(r), !0).forEach((function(t) {
                                    Zn(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xn(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }
                        function Zn(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function eo(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function to(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        var ro = Symbol()
                          , no = function() {
                            function e(t) {
                                if (function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                !(t instanceof Uint8Array))
                                    throw new TypeError("plaintext must be an instance of Uint8Array");
                                this._plaintext = t
                            }
                            var t, r, n, o, i;
                            return t = e,
                            r = [{
                                key: "setKeyManagementParameters",
                                value: function(e) {
                                    if (this._keyManagementParameters)
                                        throw new TypeError("setKeyManagementParameters can only be called once");
                                    return this._keyManagementParameters = e,
                                    this
                                }
                            }, {
                                key: "setProtectedHeader",
                                value: function(e) {
                                    if (this._protectedHeader)
                                        throw new TypeError("setProtectedHeader can only be called once");
                                    return this._protectedHeader = e,
                                    this
                                }
                            }, {
                                key: "setSharedUnprotectedHeader",
                                value: function(e) {
                                    if (this._sharedUnprotectedHeader)
                                        throw new TypeError("setSharedUnprotectedHeader can only be called once");
                                    return this._sharedUnprotectedHeader = e,
                                    this
                                }
                            }, {
                                key: "setUnprotectedHeader",
                                value: function(e) {
                                    if (this._unprotectedHeader)
                                        throw new TypeError("setUnprotectedHeader can only be called once");
                                    return this._unprotectedHeader = e,
                                    this
                                }
                            }, {
                                key: "setAdditionalAuthenticatedData",
                                value: function(e) {
                                    return this._aad = e,
                                    this
                                }
                            }, {
                                key: "setContentEncryptionKey",
                                value: function(e) {
                                    if (this._cek)
                                        throw new TypeError("setContentEncryptionKey can only be called once");
                                    return this._cek = e,
                                    this
                                }
                            }, {
                                key: "setInitializationVector",
                                value: function(e) {
                                    if (this._iv)
                                        throw new TypeError("setInitializationVector can only be called once");
                                    return this._iv = e,
                                    this
                                }
                            }, {
                                key: "encrypt",
                                value: (o = regeneratorRuntime.mark((function e(t, r) {
                                    var n, o, i, a, c, s, u, l, p, f, d, h, y, b, v, g;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if (this._protectedHeader || this._unprotectedHeader || this._sharedUnprotectedHeader) {
                                                    e.next = 2;
                                                    break
                                                }
                                                throw new Gt("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
                                            case 2:
                                                if (qn(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
                                                    e.next = 4;
                                                    break
                                                }
                                                throw new Gt("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                                            case 4:
                                                if (n = Qn(Qn(Qn({}, this._protectedHeader), this._unprotectedHeader), this._sharedUnprotectedHeader),
                                                An(Gt, new Map, null == r ? void 0 : r.crit, this._protectedHeader, n),
                                                void 0 === n.zip) {
                                                    e.next = 11;
                                                    break
                                                }
                                                if (this._protectedHeader && this._protectedHeader.zip) {
                                                    e.next = 9;
                                                    break
                                                }
                                                throw new Gt('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                                            case 9:
                                                if ("DEF" === n.zip) {
                                                    e.next = 11;
                                                    break
                                                }
                                                throw new Wt('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value');
                                            case 11:
                                                if (o = n.alg,
                                                i = n.enc,
                                                "string" == typeof o && o) {
                                                    e.next = 14;
                                                    break
                                                }
                                                throw new Gt('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                                            case 14:
                                                if ("string" == typeof i && i) {
                                                    e.next = 16;
                                                    break
                                                }
                                                throw new Gt('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                                            case 16:
                                                if ("dir" !== o) {
                                                    e.next = 21;
                                                    break
                                                }
                                                if (!this._cek) {
                                                    e.next = 19;
                                                    break
                                                }
                                                throw new TypeError("setContentEncryptionKey cannot be called when using Direct Encryption");
                                            case 19:
                                                e.next = 24;
                                                break;
                                            case 21:
                                                if ("ECDH-ES" !== o) {
                                                    e.next = 24;
                                                    break
                                                }
                                                if (!this._cek) {
                                                    e.next = 24;
                                                    break
                                                }
                                                throw new TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement");
                                            case 24:
                                                return e.next = 26,
                                                Jn(o, i, t, this._cek, this._keyManagementParameters);
                                            case 26:
                                                if (u = e.sent,
                                                c = u.cek,
                                                a = u.encryptedKey,
                                                (s = u.parameters) && (r && ro in r ? this._unprotectedHeader ? this._unprotectedHeader = Qn(Qn({}, this._unprotectedHeader), s) : this.setUnprotectedHeader(s) : this._protectedHeader ? this._protectedHeader = Qn(Qn({}, this._protectedHeader), s) : this.setProtectedHeader(s)),
                                                this._iv || (this._iv = zt(i)),
                                                p = this._protectedHeader ? mt.encode(xt(JSON.stringify(this._protectedHeader))) : mt.encode(""),
                                                this._aad ? (f = xt(this._aad),
                                                l = _t(p, mt.encode("."), mt.encode(f))) : l = p,
                                                "DEF" !== n.zip) {
                                                    e.next = 45;
                                                    break
                                                }
                                                return e.next = 37,
                                                ((null == r ? void 0 : r.deflateRaw) || tr)(this._plaintext);
                                            case 37:
                                                return y = e.sent,
                                                e.next = 40,
                                                _n(i, y, c, this._iv, l);
                                            case 40:
                                                b = e.sent,
                                                d = b.ciphertext,
                                                h = b.tag,
                                                e.next = 51;
                                                break;
                                            case 45:
                                                return e.next = 48,
                                                _n(i, this._plaintext, c, this._iv, l);
                                            case 48:
                                                v = e.sent,
                                                d = v.ciphertext,
                                                h = v.tag;
                                            case 51:
                                                return g = {
                                                    ciphertext: xt(d),
                                                    iv: xt(this._iv),
                                                    tag: xt(h)
                                                },
                                                a && (g.encrypted_key = xt(a)),
                                                f && (g.aad = f),
                                                this._protectedHeader && (g.protected = wt.decode(p)),
                                                this._sharedUnprotectedHeader && (g.unprotected = this._sharedUnprotectedHeader),
                                                this._unprotectedHeader && (g.header = this._unprotectedHeader),
                                                e.abrupt("return", g);
                                            case 58:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e, this)
                                }
                                )),
                                i = function() {
                                    var e = this
                                      , t = arguments;
                                    return new Promise((function(r, n) {
                                        var i = o.apply(e, t);
                                        function a(e) {
                                            eo(i, r, n, a, c, "next", e)
                                        }
                                        function c(e) {
                                            eo(i, r, n, a, c, "throw", e)
                                        }
                                        a(void 0)
                                    }
                                    ))
                                }
                                ,
                                function(e, t) {
                                    return i.apply(this, arguments)
                                }
                                )
                            }],
                            r && to(t.prototype, r),
                            n && to(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            e
                        }();
                        function oo(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function io(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        var ao = function() {
                            function e(t) {
                                !function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, e),
                                this._flattened = new no(t)
                            }
                            var t, r, n, o, i;
                            return t = e,
                            r = [{
                                key: "setContentEncryptionKey",
                                value: function(e) {
                                    return this._flattened.setContentEncryptionKey(e),
                                    this
                                }
                            }, {
                                key: "setInitializationVector",
                                value: function(e) {
                                    return this._flattened.setInitializationVector(e),
                                    this
                                }
                            }, {
                                key: "setProtectedHeader",
                                value: function(e) {
                                    return this._flattened.setProtectedHeader(e),
                                    this
                                }
                            }, {
                                key: "setKeyManagementParameters",
                                value: function(e) {
                                    return this._flattened.setKeyManagementParameters(e),
                                    this
                                }
                            }, {
                                key: "encrypt",
                                value: (o = regeneratorRuntime.mark((function e(t, r) {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                this._flattened.encrypt(t, r);
                                            case 2:
                                                return n = e.sent,
                                                e.abrupt("return", [n.protected, n.encrypted_key, n.iv, n.ciphertext, n.tag].join("."));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e, this)
                                }
                                )),
                                i = function() {
                                    var e = this
                                      , t = arguments;
                                    return new Promise((function(r, n) {
                                        var i = o.apply(e, t);
                                        function a(e) {
                                            oo(i, r, n, a, c, "next", e)
                                        }
                                        function c(e) {
                                            oo(i, r, n, a, c, "throw", e)
                                        }
                                        a(void 0)
                                    }
                                    ))
                                }
                                ,
                                function(e, t) {
                                    return i.apply(this, arguments)
                                }
                                )
                            }],
                            r && io(t.prototype, r),
                            n && io(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            e
                        }();
                        function co(e) {
                            var t, r;
                            function n(t, r) {
                                try {
                                    var i = e[t](r)
                                      , a = i.value
                                      , c = a instanceof so;
                                    Promise.resolve(c ? a.v : a).then((function(r) {
                                        if (c) {
                                            var s = "return" === t ? "return" : "next";
                                            if (!a.k || r.done)
                                                return n(s, r);
                                            r = e[s](r).value
                                        }
                                        o(i.done ? "return" : "normal", r)
                                    }
                                    ), (function(e) {
                                        n("throw", e)
                                    }
                                    ))
                                } catch (e) {
                                    o("throw", e)
                                }
                            }
                            function o(e, o) {
                                switch (e) {
                                case "return":
                                    t.resolve({
                                        value: o,
                                        done: !0
                                    });
                                    break;
                                case "throw":
                                    t.reject(o);
                                    break;
                                default:
                                    t.resolve({
                                        value: o,
                                        done: !1
                                    })
                                }
                                (t = t.next) ? n(t.key, t.arg) : r = null
                            }
                            this._invoke = function(e, o) {
                                return new Promise((function(i, a) {
                                    var c = {
                                        key: e,
                                        arg: o,
                                        resolve: i,
                                        reject: a,
                                        next: null
                                    };
                                    r ? r = r.next = c : (t = r = c,
                                    n(e, o))
                                }
                                ))
                            }
                            ,
                            "function" != typeof e.return && (this.return = void 0)
                        }
                        function so(e, t) {
                            this.v = e,
                            this.k = t
                        }
                        co.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
                            return this
                        }
                        ,
                        co.prototype.next = function(e) {
                            return this._invoke("next", e)
                        }
                        ,
                        co.prototype.throw = function(e) {
                            return this._invoke("throw", e)
                        }
                        ,
                        co.prototype.return = function(e) {
                            return this._invoke("return", e)
                        }
                        ;
                        var uo = xt;
                        function lo(e) {
                            if (!e)
                                return new Uint8Array(0);
                            e.length % 2 == 1 && (e = "0" + e);
                            for (var t = e.length / 2, r = new Uint8Array(t), n = 0; n < t; n++)
                                r[n] = parseInt(e.substr(2 * n, 2), 16);
                            return r
                        }
                        function po(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function fo(e) {
                            return ho.apply(this, arguments)
                        }
                        function ho() {
                            var e;
                            return e = regeneratorRuntime.mark((function e(t) {
                                var r, n, o, i, a, c, s, u, l;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (2 === (r = t.split("|")).length) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("Malformed public key: type 1");
                                        case 3:
                                            return n = r[0],
                                            o = r[1],
                                            i = lo(n),
                                            a = lo(o),
                                            c = uo(i),
                                            s = uo(a),
                                            u = {
                                                kty: "RSA",
                                                kid: "asf-key",
                                                e: c,
                                                n: s
                                            },
                                            e.next = 12,
                                            sn(u, De);
                                        case 12:
                                            if (l = e.sent,
                                            window.skipKeyLengthCheckForUnitTests || 2048 === l.algorithm.modulusLength) {
                                                e.next = 15;
                                                break
                                            }
                                            throw new Error("Malformed public key: type 2");
                                        case 15:
                                            return e.abrupt("return", l);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )),
                            ho = function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        po(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        po(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            ,
                            ho.apply(this, arguments)
                        }
                        function yo(e) {
                            var t, r = this, n = e.txVariant;
                            this.txVariant = n,
                            this.props.fieldType = e.fieldType,
                            window.sfConfigLog.d_handlingConfig = !0,
                            window.sfConfigLog.e_fieldType = this.props.fieldType,
                            this.props.extraFieldData = null;
                            try {
                                this.props.extraFieldData = JSON.parse(e.extraFieldData)
                            } catch (e) {}
                            if (this.props.numKey = e.numKey,
                            this.props.legacyInputMode = e.legacyInputMode,
                            this.props.uniqueIdFromLabel = e.uid,
                            e.isCreditCardType && (t = F(n, e.cardGroupTypes),
                            this.props.trimTrailingSeparator = !(!1 === e.trimTrailingSeparator),
                            this.props.isSingleBrandedCard = t.isSingleBrandedCard,
                            this.props.cardBrand = t.cardBrand,
                            this.props.cardGroupTypes = t.cardGroupTypes,
                            this.props.cvcPolicy = e.cvcPolicy,
                            this.props.maskSecurityCode = e.maskSecurityCode,
                            this.props.expiryDatePolicy = e.expiryDatePolicy,
                            this.props.minimumExpiryDate = e.minimumExpiryDate,
                            this.props.disableIOSArrowKeys = e.disableIOSArrowKeys),
                            this.showWarnings = e.showWarnings,
                            this.props.implementationType = e.implementationType,
                            "undefined" == typeof adyen)
                                return this.showWarnings && M("WARNING: securedFields:: the expected top level object is not present. Error: type 7"),
                                window.sfConfigLog.z_errors.push("CONFIG_MSG_REJECTED_TYPE_7"),
                                ue;
                            if (!adyen.key || !adyen.key.length)
                                return this.showWarnings && M("WARNING: securedFields:: the encryption key is not present. It will not be possible to encrypt input fields. Error: type 8"),
                                window.sfConfigLog.z_errors.push("CONFIG_MSG_REJECTED_TYPE_8"),
                                le;
                            window.sfConfigLog.f_processedStylesStart = (new Date).getTime(),
                            et.process(e.iframeUIConfig.sfStyles),
                            window.sfConfigLog.g_processedStylesStop = (new Date).getTime(),
                            this.props.placeholdersConfig = e.iframeUIConfig.placeholders,
                            this.props.ariaConfig = e.iframeUIConfig.ariaConfig,
                            st(this.props.ariaConfig, "lang") && document.getElementsByTagName("html")[0].setAttribute("lang", this.props.ariaConfig.lang.toString());
                            var o = st(this.props.ariaConfig, "".concat(this.props.fieldType, ".iframeTitle"));
                            return o && document.getElementsByTagName("head")[0].setAttribute("title", o),
                            window.sfConfigLog.h_beginningKeyGen = !0,
                            fo(adyen.key).then((function(t) {
                                r.props.encryptionKey = t,
                                window.sfHasConfigured = !0,
                                window.sfConfigLog.i_configured = !0;
                                var n = B(document, "#originErrorField");
                                n && B(document, "body").removeChild(n);
                                r.setState({
                                    status: e.fieldType
                                })
                            }
                            )).catch((function(e) {
                                window.sfConfigLog.z_errors.push(e.toString())
                            }
                            )),
                            se
                        }
                        const bo = function(e, t) {
                            return Number(e) === t || (M("WARNING: securedFields:: postMessage special data is incorrect: type 5"),
                            !1)
                        };
                        function vo(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function go(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function mo(e) {
                            if (!(Object.prototype.hasOwnProperty.call(e, "txVariant") && Object.prototype.hasOwnProperty.call(e, "fieldType") && Object.prototype.hasOwnProperty.call(e, "numKey")))
                                return this.showWarnings && M("\nWARNING: securedFields:: postMessage special data is incorrect: type 4"),
                                fe;
                            if (!bo(e.numKey, this.props.numKey))
                                return de;
                            var t, r, n = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? vo(Object(r), !0).forEach((function(t) {
                                        go(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vo(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({}, e);
                            if (n.focus)
                                return this.sfCompRef.specialMessageOnFocus(),
                                pe;
                            if (n.styleObject)
                                return et.update(n.styleObject),
                                pe;
                            if (Object.prototype.hasOwnProperty.call(n, "destroy"))
                                return L(null, document.body, this.base),
                                pe;
                            if (n.fieldClick)
                                return this.sfCompRef.specialMessageOnClick(n),
                                pe;
                            if (n.checkoutTouchEvent)
                                return null === (t = (r = this.sfCompRef).specialMessageOnCheckoutTouchEvent) || void 0 === t || t.call(r, n),
                                pe;
                            if (n.brand)
                                return ("card" === this.txVariant || "bcmc" === this.txVariant && this.props.fieldType === $) && this.sfCompRef.specialMessageOnBrand(n),
                                pe;
                            if (Object.prototype.hasOwnProperty.call(n, "unsupportedCard")) {
                                if (!0 === n.unsupportedCard && n.code.length)
                                    return this.sfCompRef.specialMessageUnsupportedCard(n),
                                    pe;
                                if (!1 === n.unsupportedCard && 0 === n.code.length)
                                    return this.sfCompRef.specialMessageUnsupportedCard(null),
                                    pe
                            }
                            return n.externalValidation ? (this.sfCompRef.specialMessageExternalValidation(n),
                            pe) : n.autoComplete ? (this.sfCompRef.specialMessageAutoComplete(n),
                            pe) : n.code ? (this.sfCompRef.specialMessageOnCode(n),
                            pe) : n.expiryDatePolicy ? (this.sfCompRef.specialMessageExpiryDatePolicy(n),
                            pe) : pe
                        }
                        function wo(e) {
                            var t, r = e.origin || e.originalEvent.origin, n = origin.length - 1;
                            if ("/" === origin.charAt(n) && (origin = origin.substring(0, n)),
                            r !== origin)
                                return ie;
                            if ("string" != typeof e.data)
                                return this.showWarnings && M("\nWARNING: securedFields:: postMessage data is incorrect: type 1"),
                                ae;
                            try {
                                t = JSON.parse(e.data)
                            } catch (e) {
                                return this.showWarnings && M("\nWARNING: securedFields:: postMessage data is incorrect: type 2"),
                                ce
                            }
                            return function(e) {
                                return Object.prototype.hasOwnProperty.call(e, "txVariant") && Object.prototype.hasOwnProperty.call(e, "fieldType") && Object.prototype.hasOwnProperty.call(e, "extraFieldData") && Object.prototype.hasOwnProperty.call(e, "numKey") && Object.prototype.hasOwnProperty.call(e, "cardGroupTypes") && Object.prototype.hasOwnProperty.call(e, "isCreditCardType") && Object.prototype.hasOwnProperty.call(e, "showWarnings") && Object.prototype.hasOwnProperty.call(e, "sfLogAtStart")
                            }(t) ? (this.eventOrigin = r,
                            this.eventSource = e.source,
                            this.handleConfigMessage(t)) : function(e) {
                                return !!(Object.prototype.hasOwnProperty.call(e, "focus") || Object.prototype.hasOwnProperty.call(e, "brand") || Object.prototype.hasOwnProperty.call(e, "destroy") || Object.prototype.hasOwnProperty.call(e, "styleObject") || Object.prototype.hasOwnProperty.call(e, "fieldClick") || Object.prototype.hasOwnProperty.call(e, "checkoutTouchEvent") || Object.prototype.hasOwnProperty.call(e, "_b$dl") || Object.prototype.hasOwnProperty.call(e, "externalValidation") || Object.prototype.hasOwnProperty.call(e, "unsupportedCard") || Object.prototype.hasOwnProperty.call(e, "code") || Object.prototype.hasOwnProperty.call(e, "autoComplete") || Object.prototype.hasOwnProperty.call(e, "expiryDatePolicy"))
                            }(t) ? this.handleSpecialMessage(t) : (M("\nWARNING: securedFields:: postMessage data is incorrect: type 6"),
                            he)
                        }
                        function Oo(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function _o(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function So(e) {
                            if (!Object.prototype.hasOwnProperty.call(e, "action") || Object.prototype.hasOwnProperty.call(e, "action") && "" === e.action)
                                throw new Error("message not sent: no action set");
                            var t = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Oo(Object(r), !0).forEach((function(t) {
                                        _o(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oo(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({}, e);
                            t.fieldType = this.props.fieldType,
                            t.numKey = this.props.numKey;
                            var r = JSON.stringify(t);
                            return this.eventSource.postMessage(r, this.eventOrigin),
                            r
                        }
                        var Po = /(android)/i.test(navigator.userAgent)
                          , jo = function() {
                            var e = navigator.userAgent
                              , t = e.indexOf("MSIE ");
                            if (t > 0)
                                return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
                            if (e.indexOf("Trident/") > 0) {
                                var r = e.indexOf("rv:");
                                return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10)
                            }
                            var n = e.indexOf("Edge/");
                            if (n > 0)
                                return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10);
                            return !1
                        }()
                          , ko = /iphone|ipod|ipad/i.test(navigator.userAgent);
                        const Co = {
                            __IS_ANDROID: Po,
                            __IS_IE: jo,
                            __IS_IOS: ko,
                            __IS_CHROME_IOS: ko && /crios/i.test(navigator.userAgent),
                            __IS_FIREFOX: /(firefox)/i.test(navigator.userAgent),
                            __IS_SAFARI: /(safari)/i.test(navigator.userAgent) && !/(chrome)/i.test(navigator.userAgent)
                        };
                        var Eo, xo, Ao, Ro, To = function() {
                            Co.__IS_SAFARI ? !1 === Ro.safariTabFixApplied && (Ro.safariTabFixApplied = !0,
                            setTimeout((function() {
                                B(document, "#".concat(Eo)).focus()
                            }
                            ), 200)) : B(document, "#".concat(Eo)).focus()
                        }, Do = function() {
                            Ao.call(Ro, {
                                action: "shifttab"
                            })
                        }, Io = function() {
                            (Co.__IS_FIREFOX || Co.__IS_IE && Co.__IS_IE <= 11) && ((xo = B(document, "#shiftTabField")).setAttribute("tabindex", 0),
                            H(xo, "focus", Do))
                        }, Lo = function(e, t, r) {
                            Eo = e,
                            Ao = t,
                            Ro = r,
                            (Co.__IS_FIREFOX || Co.__IS_IE && Co.__IS_IE <= 11 || Co.__IS_SAFARI) && H(window, "focus", To),
                            setTimeout(Io, 0)
                        };
                        function Ko(e) {
                            return Ko = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            Ko(e)
                        }
                        function Mo(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function Fo(e, t) {
                            return Fo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            Fo(e, t)
                        }
                        function Bo(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ("function" == typeof Proxy)
                                    return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                    ))),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var r, n = No(e);
                                if (t) {
                                    var o = No(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === Ko(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return Ho(e)
                                }(this, r)
                            }
                        }
                        function Ho(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        function No(e) {
                            return No = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            No(e)
                        }
                        var Vo = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                t && Fo(e, t)
                            }(i, e);
                            var t, r, n, o = Bo(i);
                            function i(e) {
                                var t, r, n, a;
                                return function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, i),
                                t = o.call(this, e),
                                r = Ho(t),
                                a = function(e) {
                                    t.sfCompRef = e
                                }
                                ,
                                (n = "handleComponentRef")in r ? Object.defineProperty(r, n, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : r[n] = a,
                                t.setState({
                                    status: "configuring"
                                }),
                                t.messageReceiver = wo.bind(Ho(t)),
                                t.handleConfigMessage = yo,
                                t.handleSpecialMessage = mo,
                                t.sendPostMessage = So,
                                t.tabbingFixesAddCount = 0,
                                t.safariTabFixApplied = !1,
                                t.onChange = t.onChange.bind(Ho(t)),
                                t.init(),
                                t
                            }
                            return t = i,
                            r = [{
                                key: "init",
                                value: function() {
                                    H(window, "message", this.messageReceiver, !1),
                                    window.sfConfigLog.b_type = this.props.type,
                                    window.sfConfigLog.c_listenerAdded = !0
                                }
                            }, {
                                key: "onChange",
                                value: function(e) {
                                    this.sendPostMessage(e)
                                }
                            }, {
                                key: "componentDidMount",
                                value: function() {}
                            }, {
                                key: "shouldComponentUpdate",
                                value: function() {
                                    return "configuring" === this.state.status
                                }
                            }, {
                                key: "componentDidUpdate",
                                value: function(e, t) {
                                    if ("configuring" === t.status) {
                                        if (this.tabbingFixesAddCount += 1,
                                        this.tabbingFixesAddCount >= 2)
                                            throw new Error("Tabbing Fixes being added more than once");
                                        Lo(this.props.uniqueIdFromLabel || this.props.fieldType, this.onChange, this),
                                        "object" === Ko(this.sfCompRef) && (window.sfConfigLog.k_sendingConfigConfirmation = !0,
                                        this.onChange({
                                            action: "config"
                                        }))
                                    }
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    this.sfCompRef = null,
                                    N(window, "message", this.messageReceiver, !1),
                                    (Co.__IS_FIREFOX || Co.__IS_IE && Co.__IS_IE <= 11) && (N(window, "focus", To),
                                    N(xo, "focus", Do))
                                }
                            }, {
                                key: "render",
                                value: function(e) {
                                    var t = e.SFFactory
                                      , r = e.type;
                                    return "configuring" !== this.state.status ? (r && (window.sfConfigLog.j_renderedField = !0),
                                    t(this.props, this.state, this.handleComponentRef, this.onChange)) : null
                                }
                            }],
                            r && Mo(t.prototype, r),
                            n && Mo(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            i
                        }(b);
                        const Uo = Vo;
                        const Wo = function(e, t) {
                            var r;
                            window.origin = window.origin || origin,
                            window.originKey = window.originKey || originKey,
                            window.genTime = window.genTime || genTime,
                            window.checkoutShopperUrl = window.checkoutShopperUrl || checkoutShopperUrl,
                            window.sfConfigLog = {
                                a_sfInit: !0,
                                z_errors: [],
                                b_type: void 0,
                                c_listenerAdded: void 0,
                                d_handlingConfig: void 0,
                                e_fieldType: void 0,
                                f_processedStylesStart: void 0,
                                g_processedStylesStop: void 0,
                                h_beginningKeyGen: void 0,
                                i_configured: void 0,
                                j_renderedField: void 0,
                                k_sendingConfigConfirmation: void 0
                            };
                            var n = document.location.origin || "".concat(document.location.protocol, "//").concat(document.location.host)
                              , o = n + document.location.pathname;
                            return window.checkoutShopperUrl.indexOf("-live") > -1 && -1 === window.origin.indexOf("https") ? (window.sfConfigLog.z_errors.push("Merchant origin is insecure (not https)"),
                            !1) : (r = "".concat(window.checkoutShopperUrl, "securedfields/").concat(window.originKey, "/").concat("4.8.3", "/securedFields.html")) !== o ? (window.console && window.console.error && window.console.error("ERROR: sfInit:: Invalid hosting of SecuredFields file.  Document origin: ", n, "Permitted src=", r, "Actual src=", o),
                            !1) : (L(d(Uo, {
                                SFFactory: e,
                                type: t
                            }), document.body),
                            !0)
                        };
                        var Go, $o, Jo, zo;
                        function Yo(e) {
                            return "amex" === e ? Go : $o
                        }
                        function qo(e) {
                            return "amex" === e ? Jo : zo
                        }
                        function Xo(e) {
                            var t = this;
                            return new Promise((function(r) {
                                "" !== e.error || t.state.hasUnsupportedCard ? r(t.handleErrorOnField(e)) : t.isValidLength ? r(t.handleValidField(e)) : r(t.handleInvalidField(e))
                            }
                            ))
                        }
                        function Qo(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function Zo(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function ei(e) {
                            var t = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Qo(Object(r), !0).forEach((function(t) {
                                        Zo(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qo(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({}, e)
                              , r = t.error;
                            return this.state.hasUnsupportedCard && (r = Re),
                            t.error = r,
                            t = ft("endDigits").from(t),
                            {
                                onChangeObj: this.state.hasUnsupportedCard ? null : t,
                                stateObj: {
                                    status: "errorOnField",
                                    showAsValid: !1,
                                    ariaInvalid: !0,
                                    error: r
                                }
                            }
                        }
                        function ti(e) {
                            var t = null
                              , r = null;
                            return this.setState((function(e) {
                                return t = e.showAsValid,
                                r = "" !== e.error,
                                {}
                            }
                            )),
                            t || r ? {
                                onChangeObj: e,
                                stateObj: {
                                    showAsValid: !1,
                                    ariaInvalid: !1,
                                    error: ""
                                }
                            } : {
                                onChangeObj: null,
                                stateObj: {}
                            }
                        }
                        function ri(e) {
                            return e.charAt(e.length - 1)
                        }
                        function ni(e, t) {
                            var r = t || 1;
                            return e.substr(0, e.length - r)
                        }
                        function oi(e, t) {
                            var r = t || "some";
                            return 1 === e.length && "number" == typeof parseInt(e) ? r + ge : e || r
                        }
                        function ii(e, t) {
                            var r = Oe[+e]
                              , n = _e.indexOf(r);
                            if (n > 9) {
                                var o = String(n).split("")
                                  , i = t.lastIndexOf(o[0])
                                  , a = t.lastIndexOf(o[1]);
                                return "".concat(i, "_").concat(a)
                            }
                            return String(t.lastIndexOf(n))
                        }
                        function ai(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function ci(e) {
                            return function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        ai(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        ai(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                        }
                        var si = function() {
                            var e = ci(regeneratorRuntime.mark((function e(t, r) {
                                var n, o, i, a, c = arguments;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = c.length > 2 && void 0 !== c[2] ? c[2] : "A256CBC-HS512",
                                            o = c.length > 3 && void 0 !== c[3] ? c[3] : De,
                                            i = (new TextEncoder).encode(JSON.stringify(t)),
                                            e.next = 5,
                                            new ao(i).setProtectedHeader({
                                                alg: o,
                                                enc: n,
                                                version: "1"
                                            }).encrypt(r).catch((function(e) {
                                                console.warn("### encryptJWE:: encrypt error:: e=", e)
                                            }
                                            ));
                                        case 5:
                                            return a = e.sent,
                                            e.abrupt("return", a);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }();
                        function ui(e, t) {
                            return li.apply(this, arguments)
                        }
                        function li() {
                            return (li = ci(regeneratorRuntime.mark((function e(t, r) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            if (r) {
                                                e.next = 3;
                                                break
                                            }
                                            return console.warn("WARNING: No encryptionKey"),
                                            e.abrupt("return", null);
                                        case 3:
                                            return e.next = 5,
                                            si(t, r);
                                        case 5:
                                            return n = e.sent,
                                            e.abrupt("return", n);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )))).apply(this, arguments)
                        }
                        function pi(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function fi(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        var di = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                var r, n, o, i, a, c, s, u, l, p, f, d, h, y;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.valToEncrypt,
                                            o = t.encryptionType,
                                            i = t.encryptionKey,
                                            a = t.encryptionName,
                                            c = t.fieldType,
                                            s = t.eventLogger,
                                            (u = {}).type = o,
                                            u.action = "encryption",
                                            l = ui,
                                            pi(r = {}, a, n),
                                            pi(r, "generationtime", window.genTime),
                                            p = r,
                                            f = s ? s.mergeLog(p) : p,
                                            e.next = 9,
                                            l(f, i);
                                        case 9:
                                            return d = e.sent,
                                            h = !!d,
                                            y = function() {
                                                var e, t = o;
                                                "month" !== o && "year" !== o || (t = "encryptedExpiry".concat((e = o).charAt(0).toUpperCase() + e.slice(1)));
                                                var r = [];
                                                return r.push({
                                                    type: o,
                                                    encryptedFieldName: t,
                                                    blob: d
                                                }),
                                                u[c] = r,
                                                u
                                            }
                                            ,
                                            e.abrupt("return", h ? y() : null);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            )),
                            function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        fi(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        fi(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            );
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }();
                        function hi(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function yi(e, t, r, n) {
                            return bi.apply(this, arguments)
                        }
                        function bi() {
                            var e;
                            return e = regeneratorRuntime.mark((function e(t, r, n, o) {
                                var i, a, c, s;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return i = this.props.fieldType,
                                            a = st(this, r),
                                            c = {
                                                valToEncrypt: a,
                                                encryptionType: i,
                                                encryptionKey: this.props.encryptionKey,
                                                eventLogger: this.eventLogger,
                                                encryptionName: t,
                                                fieldType: i
                                            },
                                            e.next = 5,
                                            di(c);
                                        case 5:
                                            if (!(s = e.sent)) {
                                                e.next = 10;
                                                break
                                            }
                                            return n.map((function(e) {
                                                return Object.prototype.hasOwnProperty.call(o, e) && (s[e] = o[e]),
                                                !0
                                            }
                                            )),
                                            i === W && (s.code = ii(a, s[W][0].blob)),
                                            e.abrupt("return", {
                                                onChangeObj: s,
                                                stateObj: {
                                                    showAsValid: !0,
                                                    ariaInvalid: !1,
                                                    error: ""
                                                }
                                            });
                                        case 10:
                                            return console.warn("### handleValidField::ENCRYPTION FAIL:: encryptedObj=", s),
                                            e.abrupt("return", {
                                                onChangeObj: null,
                                                stateObj: {}
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this)
                            }
                            )),
                            bi = function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        hi(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        hi(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            ,
                            bi.apply(this, arguments)
                        }
                        function vi(e, t) {
                            var r = "$1".concat(Q)
                              , n = "$1".concat(Q, "$2").concat(Q)
                              , o = e.replace(/(\d{4})/g, r);
                            return t && (e.length >= 8 && (o = e.replace(/(\d{4})/, r)),
                            e.length >= 10 && (o = e.replace(/(\d{4})(\d{6})/g, n))),
                            o
                        }
                        function gi(e) {
                            var t = e.substr(0, 2)
                              , r = e.substr(2, 4);
                            return t.length ? t + Z + r : ""
                        }
                        function mi(e) {
                            var t = 0
                              , r = e.split(Z)
                              , n = [];
                            if (r.forEach((function(e) {
                                if ("" !== e) {
                                    var t = e.replace(/[^\d]/g, "");
                                    n.push(t)
                                }
                            }
                            )),
                            2 === n.length && 1 === n[0].length) {
                                var o = n[1].substr(0, 1);
                                n[0] += o,
                                n[1] = n[1].substr(1),
                                t = 2
                            }
                            return {
                                dateArr: n,
                                cursorPosFlag: t,
                                originalVal: e
                            }
                        }
                        function wi(e) {
                            return {
                                unmaskedVal: e.replace(/[^\d]/g, ""),
                                originalVal: e
                            }
                        }
                        function Oi(e, t) {
                            var r = Math.floor(e / t);
                            return e % t > 0 ? r : r - 1
                        }
                        const _i = function(e) {
                            var t = e;
                            return t.fireEvent = function(e, t, r, n) {
                                var o;
                                try {
                                    o = new Event(t),
                                    r && n && (o[r] = n)
                                } catch (r) {
                                    if (!document.createEvent)
                                        return void e.fireEvent("on".concat(t));
                                    (o = document.createEvent("Event")).initEvent(t, !1, !1)
                                }
                                e.dispatchEvent(o)
                            }
                            ,
                            t
                        };
                        var Si = "delete"
                          , Pi = function(e, t) {
                            switch (t) {
                            case "key":
                            case "code":
                                return "Backspace" === e || "Delete" === e ? Si : "ArrowLeft" === e ? "leftarrow" : "ArrowRight" === e ? "rightarrow" : " " === e || "Space" === e ? "space" : "Shift" === e || "ShiftRight" === e || "ShiftLeft" === e ? "shift" : "Tab" === e ? "tab" : "Unidentified" === e ? "androidkeystroke" : e;
                            case "keyCode":
                            case "which":
                                return 8 === e || 46 === e ? Si : 37 === e ? "leftarrow" : 39 === e ? "rightarrow" : 32 === e ? "space" : 16 === e ? "shift" : 9 === e ? "tab" : 229 === e ? "androidkeystroke" : String.fromCharCode(e);
                            default:
                                return e
                            }
                        };
                        const ji = {
                            handleKeyPress: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Pi;
                                return void 0 !== e.key ? t(e.key, "key") : void 0 !== e.code && "" !== e.code ? t(e.code, "code") : e.keyCode >= 0 ? t(e.keyCode, "keyCode") : void 0 !== e.which && t(e.which, "which")
                            },
                            getCaretPos: function(e, t) {
                                var r = !0 === t ? "selectionEnd" : "selectionStart";
                                return r in e ? e[r] : 0
                            },
                            setSelectionRange: function(e, t, r) {
                                var n = r || t;
                                e.setSelectionRange && (e.focus(),
                                e.setSelectionRange(t, n))
                            },
                            __DELETE_OR_BACKSPACE: Si,
                            __X_KEY: "xKeyPressed"
                        };
                        function ki(e) {
                            var t = this.fieldRef
                              , r = {};
                            if (_i(r),
                            this.props.fieldType === e.fieldType) {
                                if (this.props.disableIOSArrowKeys && this.setState({
                                    shouldDisableField: !1
                                }),
                                this.hasFocus) {
                                    var n = t.value
                                      , o = ji.getCaretPos(t);
                                    return t.value = n,
                                    ji.setSelectionRange(t, o),
                                    "handleClickMessage: Field types match, securedField has focus - reset field value & set caret pos"
                                }
                                return r.fireEvent(t, "focus"),
                                "handleClickMessage: Field types match, securedField does not have focus - fire focus event"
                            }
                            return Co.__IS_IOS && this.props.disableIOSArrowKeys && this.setState({
                                shouldDisableField: !0
                            }),
                            this.hasFocus ? (r.fireEvent(t, "blur"),
                            this.hasFocus = !1,
                            t.disabled = !0,
                            setTimeout((function() {
                                t.disabled = !1
                            }
                            ), 10),
                            "handleClickMessage: Field types do not match but this securedField does have focus so force it to blur") : "handleClickMessage: Field types do not match but this securedField does not have focus so do nothing"
                        }
                        function Ci(e) {
                            if (this.props.fieldType === e.fieldType && !0 === e.externalValidation) {
                                var t = e.code;
                                return t || console.warn("WARNING: handleExternalValidation - no error code has been sent"),
                                this.setState({
                                    showAsValid: !1,
                                    ariaInvalid: !0,
                                    isDirty: !0,
                                    error: t
                                }),
                                !0
                            }
                            return !1
                        }
                        function Ei(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                              , r = {};
                            _i(r),
                            t && (this.fieldRef.value = e.autoComplete,
                            r.fireEvent(this.fieldRef, "paste")),
                            r.fireEvent(this.fieldRef, "input")
                        }
                        function xi() {
                            this.state.isDirty || this.setState({
                                isDirty: !0
                            })
                        }
                        function Ai(e) {
                            return Ai = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            Ai(e)
                        }
                        function Ri(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function Ti(e, t) {
                            return Ti = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            Ti(e, t)
                        }
                        function Di(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ("function" == typeof Proxy)
                                    return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                    ))),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var r, n = Ii(e);
                                if (t) {
                                    var o = Ii(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === Ai(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(e)
                                }(this, r)
                            }
                        }
                        function Ii(e) {
                            return Ii = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            Ii(e)
                        }
                        var Li, Ki, Mi, Fi = "is-autofilled", Bi = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                t && Ti(e, t)
                            }(i, e);
                            var t, r, n, o = Di(i);
                            function i(e) {
                                var t;
                                !function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, i);
                                var r = (t = o.call(this, e)).processConfigObjects(t.props);
                                return t.props.ariaErrorText = r.ariaErrorText,
                                t.props.placeholder = function(e) {
                                    return !1 !== e && function(e) {
                                        return null != e
                                    }(e)
                                }(r.placeholder) ? r.placeholder : t.props.placeholder,
                                t.props.ariaLabel = r.ariaLabel ? r.ariaLabel.toString() : t.props.ariaLabel,
                                t.props.contextualText = r.contextualText,
                                t.isComposing = !1,
                                t.wasComposing = !1,
                                t
                            }
                            return t = i,
                            r = [{
                                key: "init",
                                value: function() {
                                    var e = this;
                                    if (!this.props.encryptionName || "" === this.props.encryptionName)
                                        throw new Error('Error: An "encryptionName" property has not been set on the SF component');
                                    this.setBindings(),
                                    this.setListeners(),
                                    this.specialMessageOnClick = ki,
                                    this.specialMessageExternalValidation = Ci,
                                    this.specialMessageAutoComplete = Ei,
                                    this.processInputFeedback = Xo,
                                    this.handleErrorOnField = ei,
                                    this.handleInvalidField = ti,
                                    this.handleValidField = yi,
                                    this.setDirty = xi,
                                    this.unmask = wi,
                                    this.validate = function() {
                                        throw new Error("Input element does not have a validation function defined.")
                                    }
                                    ,
                                    this.mask = null,
                                    this.onAutoFillStart = function(t) {
                                        return e.setState({
                                            isInAutofillMode: !0
                                        }),
                                        t.classList.add(Fi)
                                    }
                                    ,
                                    this.onAutoFillCancel = function(e) {
                                        return e.classList.remove(Fi)
                                    }
                                }
                            }, {
                                key: "setBindings",
                                value: function() {
                                    var e = this;
                                    this._onKeyDown = this.onKeyDown.bind(this),
                                    this._onInput = this.onInput.bind(this),
                                    this._onPaste = this.onPaste.bind(this),
                                    this._onChange = this.onChangeEvent.bind(this),
                                    this._onAnimationStart = this.onAnimationStart.bind(this),
                                    this._onCompositionStart = this.onCompositionStart.bind(this),
                                    this._onCompositionEnd = this.onCompositionEnd.bind(this),
                                    Co.__IS_ANDROID && (this._onKeyUpAndroid = this.onKeyUpAndroid.bind(this)),
                                    Co.__IS_IOS && (this._onTouchStart = function() {
                                        e.onChange({
                                            action: ye,
                                            hasGenuineTouchEvents: !0
                                        })
                                    }
                                    ,
                                    this._onClick = function() {
                                        e.props.disableIOSArrowKeys && e.setState({
                                            shouldDisableField: !1
                                        })
                                    }
                                    ,
                                    this.specialMessageOnCheckoutTouchEvent = function() {
                                        e.props.disableIOSArrowKeys && e.setState({
                                            shouldDisableField: !0
                                        })
                                    }
                                    ),
                                    this._onFocus = this.onFocus.bind(this),
                                    this._onBlur = this.onBlur.bind(this)
                                }
                            }, {
                                key: "setListeners",
                                value: function() {
                                    H(this.fieldRef, "keydown", this._onKeyDown, !1),
                                    H(this.fieldRef, "input", this._onInput, !1),
                                    H(this.fieldRef, "paste", this._onPaste, !1),
                                    H(this.fieldRef, "change", this._onChange, !1),
                                    H(this.fieldRef, "animationstart", this._onAnimationStart, !1),
                                    H(this.fieldRef, "compositionstart", this._onCompositionStart, !1),
                                    H(this.fieldRef, "compositionend", this._onCompositionEnd, !1),
                                    Co.__IS_ANDROID && H(this.fieldRef, "keyup", this._onKeyUpAndroid, !1),
                                    Co.__IS_IOS && (H(document, "touchstart", this._onTouchStart),
                                    H(document, "click", this._onClick)),
                                    H(this.fieldRef, "focus", this._onFocus, !1),
                                    H(this.fieldRef, "blur", this._onBlur, !1)
                                }
                            }, {
                                key: "onKeyDown",
                                value: function(e) {
                                    var t = ji.handleKeyPress(e);
                                    this.oldValue = this.fieldRef.value,
                                    this.deleteKeyPressed = t === ji.__DELETE_OR_BACKSPACE,
                                    this.action = oi(t, this.desc),
                                    this.setState({
                                        status: "keyDown"
                                    })
                                }
                            }, {
                                key: "onInput",
                                value: function() {
                                    throw new Error("Subclass must implement an onInput method")
                                }
                            }, {
                                key: "onPaste",
                                value: function() {}
                            }, {
                                key: "onChangeEvent",
                                value: function(e) {}
                            }, {
                                key: "onAnimationStart",
                                value: function(e) {
                                    var t = e.target;
                                    switch (e.animationName) {
                                    case "onautofillstart":
                                        return this.onAutoFillStart(t);
                                    case "onautofillcancel":
                                        return this.onAutoFillCancel(t);
                                    default:
                                        return null
                                    }
                                }
                            }, {
                                key: "onKeyUpAndroid",
                                value: function() {}
                            }, {
                                key: "onCompositionStart",
                                value: function() {
                                    this.isComposing = !0,
                                    this.setState({
                                        status: "compositionStart",
                                        showAsValid: !1
                                    })
                                }
                            }, {
                                key: "onCompositionEnd",
                                value: function(e) {
                                    this.isComposing = !1,
                                    Co.__IS_FIREFOX || 10 === Co.__IS_IE || Co.__IS_IE && Co.__IS_IE > 11 ? this.wasComposing = !0 : this.onInput(e, !0)
                                }
                            }, {
                                key: "onFocus",
                                value: function() {
                                    var e = this.getNumChars();
                                    this.hasFocus = !0,
                                    this.onChange({
                                        action: be,
                                        focus: !0,
                                        numChars: e
                                    })
                                }
                            }, {
                                key: "onBlur",
                                value: function(e, t) {
                                    var r = this.getNumChars();
                                    this.hasFocus = !1,
                                    this.onChange({
                                        action: be,
                                        focus: !1,
                                        numChars: r
                                    }),
                                    t || this.checkIncompleteField()
                                }
                            }, {
                                key: "getNumChars",
                                value: function() {
                                    return wi(this.fieldRef.value).unmaskedVal.length
                                }
                            }, {
                                key: "checkIncompleteField",
                                value: function() {
                                    var e = this
                                      , t = null;
                                    this.fieldRef.value.length && !this.isValidLength && "" === this.state.error && (t = {
                                        error: Ie[this.props.fieldType],
                                        action: "incorrectly filled field"
                                    }),
                                    !this.fieldRef.value.length && Le.includes(this.state.error) && (t = {
                                        error: "",
                                        action: ge
                                    }),
                                    t && this.processInputFeedback(t).then((function(t) {
                                        var r = t.onChangeObj
                                          , n = t.stateObj;
                                        r && e.onChange(r),
                                        e.setState(n)
                                    }
                                    ))
                                }
                            }, {
                                key: "specialMessageOnFocus",
                                value: function() {
                                    var e = this;
                                    Co.__IS_IOS ? this.setState({
                                        shouldDisableField: !1
                                    }, (function() {
                                        e.onChange({
                                            action: ye
                                        }),
                                        setTimeout((function() {
                                            e.fieldRef.focus()
                                        }
                                        ), 200)
                                    }
                                    )) : this.fieldRef.focus()
                                }
                            }, {
                                key: "specialMessageOnBrand",
                                value: function() {}
                            }, {
                                key: "specialMessageOnCode",
                                value: function() {}
                            }, {
                                key: "specialMessageExpiryDatePolicy",
                                value: function() {}
                            }, {
                                key: "specialMessageUnsupportedCard",
                                value: function() {}
                            }, {
                                key: "destroy",
                                value: function() {
                                    N(this.fieldRef, "keydown", this._onKeyDown, !1),
                                    N(this.fieldRef, "input", this._onInput, !1),
                                    N(this.fieldRef, "paste", this._onPaste, !1),
                                    N(this.fieldRef, "change", this._onChange, !1),
                                    N(this.fieldRef, "animationstart", this._onAnimationStart, !1),
                                    N(this.fieldRef, "compositionstart", this._onCompositionStart, !1),
                                    N(this.fieldRef, "compositionend", this._onCompositionEnd, !1),
                                    Co.__IS_ANDROID && N(this.fieldRef, "keyup", this._onKeyUpAndroid, !1),
                                    Co.__IS_IOS && (N(document, "touchstart", this._onTouchStart),
                                    N(document, "click", this._onClick)),
                                    N(this.fieldRef, "focus", this._onFocus, !1),
                                    N(this.fieldRef, "blur", this._onBlur, !1),
                                    this.eventLogger && this.eventLogger.destroy()
                                }
                            }, {
                                key: "processConfigObjects",
                                value: function(e) {
                                    var t, r, n, o = (t = e.fieldType,
                                    (r = e.placeholdersConfig) && (t !== $ ? Object.prototype.hasOwnProperty.call(r, t) && (n = r[t].toString()) : Object.prototype.hasOwnProperty.call(r, t) ? n = r[t].toString() : ($o = r[J].toString(),
                                    Go = r[z].toString())),
                                    {
                                        placeholder: n
                                    }), i = function(e, t) {
                                        var r = {
                                            label: void 0,
                                            error: void 0,
                                            contextualTexts: null
                                        }
                                          , n = Object.keys(r);
                                        return t && Object.prototype.hasOwnProperty.call(t, e) && Object.keys(t[e]).forEach((function(o) {
                                            if (n.includes(o)) {
                                                var i = t[e][o];
                                                r[o] = i
                                            }
                                        }
                                        )),
                                        r
                                    }(e.fieldType, e.ariaConfig), a = function(e, t) {
                                        var r = "";
                                        return t && (e !== $ ? Object.prototype.hasOwnProperty.call(t, e) && (r = t[e].toString()) : Object.prototype.hasOwnProperty.call(t, e) ? r = t[e].toString() : (zo = t[J].toString(),
                                        Jo = t[z].toString())),
                                        {
                                            contextualText: r
                                        }
                                    }(e.fieldType, i.contextualTexts);
                                    return {
                                        placeholder: o.placeholder,
                                        ariaLabel: i.label,
                                        ariaErrorText: i.error,
                                        contextualText: a.contextualText
                                    }
                                }
                            }, {
                                key: "componentDidMount",
                                value: function() {}
                            }, {
                                key: "componentDidUpdate",
                                value: function() {}
                            }, {
                                key: "componentWillUnmount",
                                value: function() {}
                            }, {
                                key: "render",
                                value: function() {
                                    throw new Error("Input element cannot be rendered.")
                                }
                            }],
                            r && Ri(t.prototype, r),
                            n && Ri(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            i
                        }(b);
                        Mi = {
                            onChange: function() {}
                        },
                        (Ki = "defaultProps")in (Li = Bi) ? Object.defineProperty(Li, Ki, {
                            value: Mi,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : Li[Ki] = Mi;
                        function Hi(e) {
                            return Hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            Hi(e)
                        }
                        function Ni(e, t) {
                            var r = null
                              , n = null;
                            if ("string" !== Hi(e).toLowerCase() && !e) {
                                if (Co.__IS_IE && (10 === Co.__IS_IE || 11 === Co.__IS_IE))
                                    return null;
                                r = "",
                                n = we
                            }
                            if (Co.__IS_IE && (10 === Co.__IS_IE || 11 === Co.__IS_IE) && ("" !== e && "" === t && (r = "",
                            n = ve),
                            "" === e && "" === t))
                                return null;
                            var o = t;
                            return /[\uFF10-\uFF19]/g.test(o) && (o = o.replace(/[\uFF10-\uFF19]/g, (function(e) {
                                return String.fromCharCode(e.charCodeAt(0) - 65248)
                            }
                            ))),
                            {
                                oldValue: r,
                                action: n,
                                currentVal: o
                            }
                        }
                        function Vi(e) {
                            var t = this.unmask(e);
                            lt(this.extraValidationProps, t);
                            var r = this.validate(t)
                              , n = r.newValue
                              , o = r.isValidLength
                              , i = r.error
                              , a = r.propsOnThis
                              , c = r.newCursorPosition
                              , s = r.maxLength
                              , u = r.commObj;
                            return i.length ? (lt(a, this),
                            this.setState({
                                status: "onInput_finalised",
                                commObj: u
                            }),
                            u) : (this.fieldRef.value = n,
                            c && ji.setSelectionRange(this.fieldRef, c),
                            u = ut(u, "error", ""),
                            u = ut(u, "action", oi(this.action, this.desc)),
                            this.isValidLength = o,
                            this.deleteKeyPressed = !1,
                            lt(a, this),
                            this.setState({
                                status: "onInput_finalised",
                                maxLength: s || this.props.maxLength,
                                commObj: u
                            }),
                            u)
                        }
                        function Ui(e) {
                            return Ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            Ui(e)
                        }
                        function Wi(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function Gi(e, t) {
                            return Gi = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            Gi(e, t)
                        }
                        function $i(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ("function" == typeof Proxy)
                                    return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                    ))),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var r, n = zi(e);
                                if (t) {
                                    var o = zi(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === Ui(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return Ji(e)
                                }(this, r)
                            }
                        }
                        function Ji(e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }
                        function zi(e) {
                            return zi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            zi(e)
                        }
                        function Yi(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        var qi = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                t && Gi(e, t)
                            }(i, e);
                            var t, r, n, o = $i(i);
                            function i(e) {
                                var t;
                                !function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, i),
                                Yi(Ji(t = o.call(this, e)), "handleFieldRef", (function(e) {
                                    t.fieldRef = e
                                }
                                ));
                                var r = t.props.placeholder === Ke ? t.props.placeholder.substr(0, t.props.maxLength) : t.props.placeholder
                                  , n = t.props.contextualText;
                                return t.setState({
                                    status: "initialising",
                                    error: "",
                                    showAsValid: !1,
                                    ariaInvalid: !1,
                                    maxLength: t.props.maxLength,
                                    hasUnsupportedCard: !1,
                                    ariaRequired: "true",
                                    displayPolicy: Se,
                                    placeholder: r,
                                    contextualText: n,
                                    isDirty: !1,
                                    shouldDisableField: Co.__IS_IOS && t.props.disableIOSArrowKeys,
                                    isInAutofillMode: !1,
                                    autofillHasHappened: !1
                                }),
                                t.handleOnInput = Vi,
                                t.desc = t.props.description,
                                t.isValidLength = !1,
                                t.action = "",
                                t.oldValue = void 0,
                                t.deleteKeyPressed = !1,
                                t.valToEncrypt = t.props.valToEncrypt || "fieldRef.value",
                                t.extraFeedbackPropsArr = [],
                                t.extraValidationProps = {},
                                t
                            }
                            return t = i,
                            r = [{
                                key: "onChange",
                                value: function(e) {
                                    this.props.onChange(e)
                                }
                            }, {
                                key: "componentDidMount",
                                value: function() {
                                    this.init(),
                                    this.handleValidField = function() {
                                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                                            t[r] = arguments[r];
                                        var n = t
                                          , o = n.shift();
                                        return function() {
                                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                                                t[r] = arguments[r];
                                            return o.apply(this, n.concat(t))
                                        }
                                    }(this.handleValidField, this.props.encryptionName, this.valToEncrypt, this.extraFeedbackPropsArr),
                                    this.props.unmask && (this.unmask = this.props.unmask),
                                    this.props.mask && (this.mask = this.props.mask),
                                    this.validate = this.props.validate,
                                    this.setState({
                                        status: "mounted"
                                    })
                                }
                            }, {
                                key: "onInput",
                                value: function(e, t, r) {
                                    if (this.setDirty(),
                                    this.isComposing)
                                        return {
                                            isComposing: !0
                                        };
                                    var n = Ni(this.oldValue, this.fieldRef.value);
                                    return n ? (null !== n.oldValue && (this.oldValue = n.oldValue,
                                    this.action = n.action),
                                    r || this.handleOnInput(n.currentVal, e),
                                    n) : {
                                        unwantedIEEvent: !0
                                    }
                                }
                            }, {
                                key: "componentDidUpdate",
                                value: function() {
                                    var e = this;
                                    if ("onInput_finalised" === this.state.status) {
                                        var t = this.state.commObj;
                                        t && (this.setState({
                                            status: "processing_input"
                                        }),
                                        this.processInputFeedback(t).then((function(t) {
                                            var r = t.onChangeObj
                                              , n = t.stateObj;
                                            r && e.onChange(r),
                                            e.setState(n)
                                        }
                                        )))
                                    }
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    this.destroy(),
                                    this.fieldRef = null
                                }
                            }, {
                                key: "isHideableField",
                                value: function() {
                                    return this.props.fieldType === U || this.props.fieldType === W || this.props.fieldType === G || this.props.fieldType === $
                                }
                            }, {
                                key: "render",
                                value: function(e, t, r) {
                                    var n, o, i, a = e.fieldType, c = e.autoComplete, s = e.ariaLabel, u = e.legacyInputMode, l = e.uniqueIdFromLabel, p = e.maskSecurityCode, f = t.placeholder, h = t.contextualText, y = t.maxLength, b = t.error, v = t.showAsValid, g = t.ariaInvalid, m = t.ariaRequired, w = t.displayPolicy, O = t.isDirty, _ = t.shouldDisableField, S = "object" !== Ui(r) ? r : function() {
                                        return null
                                    }
                                    , P = l || a, j = null === (n = this.props.ariaErrorText) || void 0 === n || null === (o = n[b]) || void 0 === o ? void 0 : o.toString();
                                    b && !j && (j = null === (i = this.props.ariaErrorText) || void 0 === i ? void 0 : i[xe]);
                                    var k = u ? "tel" : "text";
                                    p && (k = "password");
                                    var C = !b && (null == h ? void 0 : h.length) > 0 ? h : j;
                                    return d("div", {
                                        className: "gsf-holder",
                                        style: "".concat(this.isHideableField() && w === Pe ? "display: none" : "display: block")
                                    }, d("input", {
                                        ref: this.handleFieldRef,
                                        id: P,
                                        "data-fieldtype": a,
                                        type: k,
                                        inputmode: !u && "numeric",
                                        maxlength: y,
                                        autocomplete: c,
                                        placeholder: f,
                                        "aria-label": s,
                                        "aria-invalid": O ? g.toString() : "false",
                                        "aria-required": m,
                                        "aria-describedby": "".concat(P, "-ariaContext"),
                                        style: "display: block",
                                        className: "js-iframe-input input-field".concat("" !== b ? " chckt-input-field--error js-chckt-input-field-error" : "").concat(v && O ? " chckt-input-field--validated js-chckt-input-field-validated" : ""),
                                        "data-type": "gsf",
                                        readonly: _
                                    }), d("span", {
                                        className: "aria-error aria-context",
                                        id: "".concat(P, "-ariaContext")
                                    }, C), d(S, null))
                                }
                            }],
                            r && Wi(t.prototype, r),
                            n && Wi(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            i
                        }(Bi);
                        Yi(qi, "defaultProps", {
                            placeholder: Ke,
                            ariaLabel: "input field in iframe",
                            maxLength: 2,
                            encryptionName: "generic"
                        });
                        const Xi = qi;
                        function Qi(e, t) {
                            var r = this.unmask(e).unmaskedVal
                              , n = !1;
                            this.deleteKeyPressed && r === this.unmask(this.oldValue).unmaskedVal && (n = !0);
                            var o = this.validate(r)
                              , i = o.newValue
                              , a = o.isValidLength
                              , c = o.luhnCheckPassStatus
                              , s = o.passedSingleDigitTest
                              , u = o.commObj
                              , l = o.newCursorPosition;
                            this.fieldRef.value = i,
                            n && (l -= 1),
                            l < 0 && (l = 0),
                            (l || this.deleteKeyPressed && 0 === l) && (t && !this.deleteKeyPressed && (l = this.fieldRef.value.length),
                            ji.setSelectionRange(this.fieldRef, l)),
                            u = ut(u, "error", ""),
                            u = ut(u, "action", oi(this.action, this.desc));
                            var p = this.unmask(i).unmaskedVal
                              , f = p.substr(0, te);
                            this.storedBinValue !== f && (u = ut(u, "binValue", f));
                            var d = p.substr(0, re);
                            d.length === re ? this.storedEncryptableBinValue !== d && (u = ut(u, "binValue", f),
                            u = ut(u, "encryptableBinValue", d),
                            this.storedEncryptableBinValue = d) : d.length < re && this.storedEncryptableBinValue.length && (u = ut(u, "binValue", "no-encrypted-value"),
                            this.storedEncryptableBinValue = ""),
                            u = ut(u, "endDigits", a ? p.substring(p.length - 4) : "");
                            var h = a && p.length >= 16 ? p.substring(0, ne) : "";
                            return u = h ? ut(u, "issuerBin", h) : u,
                            this.isValidLength = a,
                            this.luhnCheckPassStatus = c,
                            this.passedSingleDigitTest = s,
                            this.newCursorPosition = l,
                            this.storedBinValue = f,
                            this.deleteKeyPressed = !1,
                            this.setState({
                                status: "onInput_finalised",
                                commObj: u
                            }),
                            u
                        }
                        var Zi, ea = {
                            __NO_BRAND: "noBrand",
                            cards: []
                        };
                        ea.cards.push({
                            cardType: "mc",
                            startingRules: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
                            permittedLengths: [16],
                            pattern: /^(5[1-5][0-9]{0,14}|2[2-7][0-9]{0,14})$/,
                            securityCode: "CVC"
                        }),
                        ea.cards.push({
                            cardType: "visadankort",
                            startingRules: [4571],
                            permittedLengths: [16],
                            pattern: /^(4571)[0-9]{0,12}$/
                        }),
                        ea.cards.push({
                            cardType: "visa",
                            startingRules: [4],
                            permittedLengths: [13, 16, 19],
                            pattern: /^4[0-9]{0,18}$/,
                            securityCode: "CVV"
                        }),
                        ea.cards.push({
                            cardType: "amex",
                            startingRules: [34, 37],
                            permittedLengths: [15],
                            pattern: /^3[47][0-9]{0,13}$/,
                            securityCode: "CID"
                        }),
                        ea.cards.push({
                            cardType: "diners",
                            startingRules: [36],
                            permittedLengths: [14, 15, 16, 17, 18, 19],
                            pattern: /^(36)[0-9]{0,12}$/
                        }),
                        ea.cards.push({
                            cardType: "maestrouk",
                            startingRules: [6759],
                            permittedLengths: [16, 18, 19],
                            pattern: /^(6759)[0-9]{0,15}$/
                        }),
                        ea.cards.push({
                            cardType: "solo",
                            startingRules: [6767],
                            permittedLengths: [16, 18, 19],
                            pattern: /^(6767)[0-9]{0,15}$/
                        }),
                        ea.cards.push({
                            cardType: "laser",
                            startingRules: [6304, 6706, 677117, 677120],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^(6304|6706|6709|6771)[0-9]{0,15}$/,
                            cvcPolicy: "optional"
                        }),
                        ea.cards.push({
                            cardType: "discover",
                            startingRules: [6011, 644, 645, 646, 647, 648, 649, 65],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^(6011[0-9]{0,12}|(644|645|646|647|648|649)[0-9]{0,13}|65[0-9]{0,14})$/
                        }),
                        ea.cards.push({
                            cardType: "jcb",
                            startingRules: [3528, 3529, 353, 354, 355, 356, 357, 358],
                            permittedLengths: [16, 19],
                            pattern: /^(352[8,9]{1}[0-9]{0,15}|35[4-8]{1}[0-9]{0,16})$/,
                            securityCode: "CAV"
                        }),
                        ea.cards.push({
                            cardType: "bcmc",
                            startingRules: [6703, 479658, 606005],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^((6703)[0-9]{0,15}|(479658|606005)[0-9]{0,13})$/,
                            cvcPolicy: "hidden"
                        }),
                        ea.cards.push({
                            cardType: "bijcard",
                            startingRules: [5100081],
                            permittedLengths: [16],
                            pattern: /^(5100081)[0-9]{0,9}$/
                        }),
                        ea.cards.push({
                            cardType: "dankort",
                            startingRules: [5019],
                            permittedLengths: [16],
                            pattern: /^(5019)[0-9]{0,12}$/
                        }),
                        ea.cards.push({
                            cardType: "hipercard",
                            startingRules: [606282],
                            permittedLengths: [16],
                            pattern: /^(606282)[0-9]{0,10}$/
                        }),
                        ea.cards.push({
                            cardType: "cup",
                            startingRules: [62, 81],
                            permittedLengths: [14, 15, 16, 17, 18, 19],
                            pattern: /^(62|81)[0-9]{0,17}$/
                        }),
                        ea.cards.push({
                            cardType: "maestro",
                            startingRules: [50, 56, 57, 58, 6],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^(5[0|6-8][0-9]{0,17}|6[0-9]{0,18})$/,
                            cvcPolicy: "optional"
                        }),
                        ea.cards.push({
                            cardType: "elo",
                            startingRules: [506699, 50670, 50671, 50672, 50673, 50674, 50675, 50676, 506770, 506771, 506772, 506773, 506774, 506775, 506776, 506777, 506778, 401178, 438935, 451416, 457631, 457632, 504175, 627780, 636297, 636368],
                            permittedLengths: [16],
                            pattern: /^((((506699)|(506770)|(506771)|(506772)|(506773)|(506774)|(506775)|(506776)|(506777)|(506778)|(401178)|(438935)|(451416)|(457631)|(457632)|(504175)|(627780)|(636368)|(636297))[0-9]{0,10})|((50676)|(50675)|(50674)|(50673)|(50672)|(50671)|(50670))[0-9]{0,11})$/
                        }),
                        ea.cards.push({
                            cardType: "uatp",
                            startingRules: [1],
                            permittedLengths: [15],
                            pattern: /^1[0-9]{0,14}$/,
                            cvcPolicy: "optional"
                        }),
                        ea.cards.push({
                            cardType: "cartebancaire",
                            startingRules: [4, 5, 6],
                            permittedLengths: [16],
                            pattern: /^[4-6][0-9]{0,15}$/
                        }),
                        ea.cards.push({
                            cardType: "visaalphabankbonus",
                            startingRules: [450903],
                            permittedLengths: [16],
                            pattern: /^(450903)[0-9]{0,10}$/
                        }),
                        ea.cards.push({
                            cardType: "mcalphabankbonus",
                            startingRules: [510099],
                            permittedLengths: [16],
                            pattern: /^(510099)[0-9]{0,10}$/
                        }),
                        ea.cards.push({
                            cardType: "hiper",
                            startingRules: [637095, 637568, 637599, 637609, 637612],
                            permittedLengths: [16],
                            pattern: /^(637095|637568|637599|637609|637612)[0-9]{0,10}$/
                        }),
                        ea.cards.push({
                            cardType: "oasis",
                            startingRules: [982616],
                            permittedLengths: [16],
                            pattern: /^(982616)[0-9]{0,10}$/,
                            cvcPolicy: "optional"
                        }),
                        ea.cards.push({
                            cardType: "karenmillen",
                            startingRules: [98261465],
                            permittedLengths: [16],
                            pattern: /^(98261465)[0-9]{0,8}$/,
                            cvcPolicy: "optional"
                        }),
                        ea.cards.push({
                            cardType: "warehouse",
                            startingRules: [982633],
                            permittedLengths: [16],
                            pattern: /^(982633)[0-9]{0,10}$/,
                            cvcPolicy: "optional"
                        }),
                        ea.cards.push({
                            cardType: "mir",
                            startingRules: [220],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^(220)[0-9]{0,16}$/
                        }),
                        ea.cards.push({
                            cardType: "codensa",
                            startingRules: [590712],
                            permittedLengths: [16],
                            pattern: /^(590712)[0-9]{0,10}$/
                        }),
                        ea.cards.push({
                            cardType: "naranja",
                            startingRules: [377798, 377799, 402917, 402918, 527571, 527572, 589562],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^(37|40|5[28])([279])\d*$/
                        }),
                        ea.cards.push({
                            cardType: "cabal",
                            startingRules: [589657, 600691, 603522, 6042, 6043, 636908],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^(58|6[03])([03469])\d*$/
                        }),
                        ea.cards.push({
                            cardType: "shopping",
                            startingRules: [2799, 589407, 603488],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^(27|58|60)([39])\d*$/
                        }),
                        ea.cards.push({
                            cardType: "argencard",
                            startingRules: [501],
                            permittedLengths: [16, 17, 18, 19],
                            pattern: /^(50)(1)\d*$/
                        }),
                        ea.cards.push({
                            cardType: "troy",
                            startingRules: [9792],
                            permittedLengths: [16],
                            pattern: /^(97)(9)\d*$/
                        }),
                        ea.cards.push({
                            cardType: "forbrugsforeningen",
                            startingRules: [600722],
                            permittedLengths: [16],
                            pattern: /^(60)(0)\d*$/
                        }),
                        ea.cards.push({
                            cardType: "vpay",
                            startingRules: [401, 408, 413, 434, 435, 437, 439, 441, 442, 443, 444, 446, 447, 455, 458, 460, 461, 463, 466, 471, 479, 482, 483, 487],
                            permittedLengths: [13, 14, 15, 16, 17, 18, 19],
                            pattern: /^(40[1,8]|413|43[4,5]|44[1,2,3,4,6,7]|45[5,8]|46[0,1,3,6]|47[1,9]|48[2,3,7])[0-9]{0,16}$/
                        }),
                        ea.cards.push({
                            cardType: "rupay",
                            startingRules: [508528],
                            permittedLengths: [16],
                            pattern: /^(100003|508(2|[5-9])|60(69|[7-8])|652(1[5-9]|[2-5][0-9]|8[5-9])|65300[3-4]|8172([0-1]|[3-5]|7|9)|817(3[3-8]|40[6-9]|410)|35380([0-2]|[5-6]|9))[0-9]{0,12}$/
                        });
                        var ta = function(e, t, r) {
                            var n = Math.floor(e / 4)
                              , o = t + (e % 4 > 0 ? n : n - 1);
                            return "amex" === r.toLowerCase() && (o = t + 2),
                            o
                        };
                        const ra = {
                            detectCard: function(e, t) {
                                var r, n, o;
                                if (t) {
                                    if ((r = ea.cards.filter((function(e) {
                                        return t.includes(e.cardType)
                                    }
                                    )).filter((function(t) {
                                        return Object.prototype.hasOwnProperty.call(t, "pattern") && e.match(t.pattern)
                                    }
                                    ))).length) {
                                        if (1 === r.length)
                                            return r[0];
                                        for (n = 0,
                                        o = r.length; n < o; n += 1)
                                            if (!r[n].longestRule) {
                                                var i = r[n].startingRules.reduce((function(e, t) {
                                                    return e > t ? e : t
                                                }
                                                ));
                                                r[n].longestRule = String(i).length
                                            }
                                        return r.reduce((function(e, t) {
                                            return e.longestRule >= t.longestRule ? e : t
                                        }
                                        ))
                                    }
                                    return {
                                        cardType: ea.__NO_BRAND
                                    }
                                }
                                return {
                                    cardType: ea.__NO_BRAND
                                }
                            },
                            detectCardLength: function(e, t, r) {
                                var n, o, i = 0, a = !1, c = t, s = e.cardType !== ea.__NO_BRAND ? e.permittedLengths[e.permittedLengths.length - 1] : 0;
                                return r && s < r && (s = r,
                                e.permittedLengths.push(r)),
                                s && c > s && (i = c.length - s) > 0 && (o = c = c.substring(0, c.length - i)),
                                e.permittedLengths.forEach((function(e) {
                                    c.length === e && (a = !0)
                                }
                                )),
                                c.length === s && (n = ta(c.length, s, e.cardType)),
                                {
                                    shortenedNewValue: o,
                                    maxLength: n,
                                    reachedValidLength: a
                                }
                            },
                            getShortestPermittedCardLength: function() {
                                if (!Zi) {
                                    var e = [];
                                    ea.cards.forEach((function(t) {
                                        e = e.concat(t.permittedLengths)
                                    }
                                    )),
                                    Zi = Math.min.apply(null, e)
                                }
                                return Zi
                            },
                            getCardByBrand: function(e) {
                                return ea.cards.filter((function(t) {
                                    return t.cardType === e
                                }
                                ))[0]
                            },
                            isGenericCardType: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "card";
                                return "card" === e || "scheme" === e
                            },
                            __NO_BRAND: ea.__NO_BRAND,
                            allCards: ea.cards
                        };
                        function na(e) {
                            if ("reset" === e.brand)
                                return this.binLookupBrand = null,
                                this.enableLuhnCheck = !0,
                                this.hasDoneResetOnBrand = !0,
                                this.fieldRef.setAttribute("maxlength", String(oe)),
                                this.binLookupPanLength = null,
                                void this.onInput();
                            if (e.brand !== this.cardBrand && (this.cardBrand = e.brand,
                            this.binLookupBrand = [this.cardBrand]),
                            (null == e ? void 0 : e.panLength) > 0) {
                                var t = ta(e.panLength, e.panLength, e.brand);
                                this.fieldRef.setAttribute("maxlength", t),
                                this.binLookupPanLength = e.panLength
                            }
                            var r = this.enableLuhnCheck;
                            this.enableLuhnCheck = !(!1 === e.enableLuhnCheck),
                            (this.enableLuhnCheck !== r || this.binLookupPanLength) && this.onInput()
                        }
                        function oa(e) {
                            if (e) {
                                var t = Re;
                                this.setState({
                                    showAsValid: !1,
                                    ariaInvalid: !0,
                                    error: t,
                                    hasUnsupportedCard: !0
                                })
                            } else
                                this.setState({
                                    hasUnsupportedCard: !1
                                }),
                                this.specialMessageAutoComplete(null, !1)
                        }
                        function ia(e, t) {
                            return function(e) {
                                if (Array.isArray(e))
                                    return e
                            }(e) || function(e, t) {
                                var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null == r)
                                    return;
                                var n, o, i = [], a = !0, c = !1;
                                try {
                                    for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value),
                                    !t || i.length !== t); a = !0)
                                        ;
                                } catch (e) {
                                    c = !0,
                                    o = e
                                } finally {
                                    try {
                                        a || null == r.return || r.return()
                                    } finally {
                                        if (c)
                                            throw o
                                    }
                                }
                                return i
                            }(e, t) || function(e, t) {
                                if (!e)
                                    return;
                                if ("string" == typeof e)
                                    return aa(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === r && e.constructor && (r = e.constructor.name);
                                if ("Map" === r || "Set" === r)
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return aa(e, t)
                            }(e, t) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()
                        }
                        function aa(e, t) {
                            (null == t || t > e.length) && (t = e.length);
                            for (var r = 0, n = new Array(t); r < t; r++)
                                n[r] = e[r];
                            return n
                        }
                        function ca(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function sa(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        var ua = "".concat(Oe).concat(Oe.toUpperCase())
                          , la = (new Date).getTime()
                          , pa = {}
                          , fa = function() {
                            pa.incrementEvtCount("activate"),
                            window.location && "string" == typeof window.location.href && pa.set("referrer", window.location.href)
                        }
                          , da = function() {
                            pa.incrementEvtCount("deactivate")
                        }
                          , ha = function(e, t) {
                            switch (t) {
                            case "key":
                            case "code":
                                return "Shift" === e || "ShiftRight" === e || "ShiftLeft" === e ? "Shift" : "Control" === e || "ControlLeft" === e || "ControlRight" === e ? "Control" : "Alt" === e || "AltLeft" === e || "AltRight" === e ? "Alt" : " " === e || "Space" === e ? "Space" : "Meta" === e || "MetaRight" === e || "MetaLeft" === e ? "Meta" : e;
                            case "keyCode":
                            case "which":
                                return 8 === e ? "Backspace" : 16 === e ? "Shift" : 17 === e ? "Control" : 18 === e ? "Alt" : 37 === e ? "ArrowLeft" : 39 === e ? "ArrowRight" : 46 === e ? "Delete" : 32 === e ? "Space" : 91 === e || 93 === e ? "Meta" : String.fromCharCode(e);
                            default:
                                return e
                            }
                        };
                        pa = {
                            data: {},
                            incrementEvtCount: function(e) {
                                Object.prototype.hasOwnProperty.call(pa.data, e) ? pa.data[e]++ : pa.data[e] = 1
                            },
                            log: function(e, t) {
                                var r = "".concat(e, "FieldLog")
                                  , n = (new Date).getTime() - la;
                                n = Math.round(n / 100),
                                Object.prototype.hasOwnProperty.call(pa.data, r) ? pa.data[r] += ",".concat(t, "@").concat(n) : pa.data[r] = "".concat(t, "@").concat(n),
                                pa.data[r].length > 1500 && (pa.data[r] = pa.data[r].substring(pa.data[r].length - 1500),
                                pa.data[r] = pa.data[r].substring(pa.data[r].indexOf(",") + 1))
                            },
                            set: function(e, t) {
                                pa.data[e] = t
                            },
                            bind: function(e, t) {
                                pa.incrementEvtCount("".concat(t, "Bind")),
                                pa.clickHandler = function() {
                                    pa.incrementEvtCount("".concat(t, "FieldClickCount")),
                                    pa.log(t, "cl")
                                }
                                ,
                                pa.changeHandler = function() {
                                    pa.incrementEvtCount("".concat(t, "FieldChangeCount")),
                                    pa.log(t, "ch")
                                }
                                ,
                                pa.pasteHandler = function() {
                                    pa.incrementEvtCount("".concat(t, "FieldPasteCount")),
                                    pa.log(t, "pa")
                                }
                                ,
                                pa.focusHandler = function() {
                                    pa.incrementEvtCount("".concat(t, "FieldFocusCount")),
                                    pa.log(t, "fo")
                                }
                                ,
                                pa.blurHandler = function() {
                                    pa.incrementEvtCount("".concat(t, "FieldBlurCount")),
                                    pa.log(t, "bl")
                                }
                                ,
                                pa.touchstartHandler = function() {
                                    pa.incrementEvtCount("".concat(t, "FieldTouchStartCount")),
                                    pa.log(t, "Ts")
                                }
                                ,
                                pa.touchendHandler = function() {
                                    pa.incrementEvtCount("".concat(t, "FieldTouchEndCount")),
                                    pa.log(t, "Te")
                                }
                                ,
                                pa.keydownHandler = function(e) {
                                    pa.incrementEvtCount("".concat(t, "FieldKeyCount"));
                                    var r = ji.handleKeyPress(e, ha);
                                    switch (e && r) {
                                    case "Backspace":
                                        pa.log(t, "Kb");
                                        break;
                                    case "ArrowLeft":
                                        pa.log(t, "Kl");
                                        break;
                                    case "ArrowRight":
                                        pa.log(t, "Kr");
                                        break;
                                    case "Delete":
                                        pa.log(t, "Kd");
                                        break;
                                    case "Space":
                                        pa.log(t, "Ks");
                                        break;
                                    case "Shift":
                                        pa.log(t, "Sd");
                                        break;
                                    case "Control":
                                        pa.log(t, "Cd");
                                        break;
                                    case "Alt":
                                        pa.log(t, "Ad");
                                        break;
                                    case "Meta":
                                        pa.log(t, "Md");
                                        break;
                                    default:
                                        "0123456789".includes(r) ? pa.log(t, "KN") : ua.includes(r) ? pa.log(t, "KL") : (pa.log(t, "KU"),
                                        pa.log("".concat(t, "UnkKeys"), e.keyCode))
                                    }
                                }
                                ,
                                H(e, "change", pa.changeHandler, !0),
                                H(e, "click", pa.clickHandler, !0),
                                H(e, "paste", pa.pasteHandler, !0),
                                H(e, "focus", pa.focusHandler, !0),
                                H(e, "blur", pa.blurHandler, !0),
                                H(e, "touchstart", pa.touchstartHandler, !0),
                                H(e, "touchend", pa.touchendHandler, !0),
                                H(e, "keydown", pa.keydownHandler, !0),
                                pa.elem = e
                            },
                            mergeLog: function(e) {
                                var t = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? ca(Object(r), !0).forEach((function(t) {
                                            sa(e, t, r[t])
                                        }
                                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ca(Object(r)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        }
                                        ))
                                    }
                                    return e
                                }({}, e);
                                return Object.entries(pa.data).forEach((function(e) {
                                    var r = ia(e, 2)
                                      , n = r[0]
                                      , o = r[1];
                                    t[n] = String(o)
                                }
                                )),
                                t
                            },
                            destroy: function() {
                                N(window, "focus", fa, !1),
                                N(window, "blur", da, !1),
                                N(pa.elem, "change", pa.changeHandler, !0),
                                N(pa.elem, "click", pa.clickHandler, !0),
                                N(pa.elem, "paste", pa.pasteHandler, !0),
                                N(pa.elem, "focus", pa.focusHandler, !0),
                                N(pa.elem, "blur", pa.blurHandler, !0),
                                N(pa.elem, "touchstart", pa.touchstartHandler, !0),
                                N(pa.elem, "touchend", pa.touchendHandler, !0),
                                N(pa.elem, "keydown", pa.keydownHandler, !0)
                            }
                        };
                        var ya = function(e, t) {
                            if ("string" != typeof e || "number" !== e && "cvc" !== e)
                                throw new Error("Invalid field name. Expected 'number' or 'cvc' but received '".concat(e, "'"));
                            return window && (H(window, "focus", fa, !1),
                            H(window, "blur", da, !1)),
                            pa.bind(t, e),
                            {
                                mergeLog: pa.mergeLog,
                                destroy: pa.destroy
                            }
                        };
                        function ba(e) {
                            return ba = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            ba(e)
                        }
                        function va(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function ga() {
                            return ga = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Oa(e)); )
                                        ;
                                    return e
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                                }
                            }
                            ,
                            ga.apply(this, arguments)
                        }
                        function ma(e, t) {
                            return ma = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            ma(e, t)
                        }
                        function wa(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ("function" == typeof Proxy)
                                    return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                    ))),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var r, n = Oa(e);
                                if (t) {
                                    var o = Oa(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === ba(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(e)
                                }(this, r)
                            }
                        }
                        function Oa(e) {
                            return Oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            Oa(e)
                        }
                        var _a = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                t && ma(e, t)
                            }(i, e);
                            var t, r, n, o = wa(i);
                            function i(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, i),
                                (t = o.call(this, e)).handleOnInput = Qi,
                                t.cardBrand = t.props.cardBrand,
                                t.oldCursor = void 0,
                                t.newCursorPosition = void 0,
                                t.storedBinValue = "",
                                t.storedEncryptableBinValue = "",
                                t.luhnCheckPassStatus = "untested",
                                t.passedSingleDigitTest = "untested",
                                t.binLookupBrand = null,
                                t.binLookupPanLength = null,
                                t.enableLuhnCheck = !0,
                                t.hasDoneResetOnBrand = !1,
                                t.extraFeedbackPropsArr = ["endDigits", "issuerBin"],
                                t.acDate = null,
                                t.acName = null,
                                t.acElements = function() {
                                    return d("div", null, d("input", {
                                        className: "autocomplete-field",
                                        type: "text",
                                        id: "acDtField",
                                        name: "cc-exp",
                                        autocomplete: "cc-exp",
                                        "aria-hidden": "true",
                                        tabIndex: Co.__IS_CHROME_IOS && !t.state.autofillHasHappened ? null : "-1"
                                    }), d("input", {
                                        className: "autocomplete-field",
                                        type: "text",
                                        id: "acNmField",
                                        name: "cc-name",
                                        autocomplete: "cc-name",
                                        "aria-hidden": "true",
                                        tabIndex: Co.__IS_CHROME_IOS && !t.state.autofillHasHappened ? null : "-1"
                                    }))
                                }
                                ,
                                t
                            }
                            return t = i,
                            r = [{
                                key: "componentDidMount",
                                value: function() {
                                    ga(Oa(i.prototype), "componentDidMount", this).call(this),
                                    this.eventLogger = ya("number", this.fieldRef),
                                    this.addAutoCompleteListeners(),
                                    this.specialMessageOnBrand = na,
                                    this.specialMessageUnsupportedCard = oa
                                }
                            }, {
                                key: "addAutoCompleteListeners",
                                value: function() {
                                    var e = this;
                                    this.acDate = B(this.base, "#acDtField"),
                                    this.acName = B(this.base, "#acNmField"),
                                    this.autoCompleteListener = function(t) {
                                        if ("cc-name" !== t.currentTarget.getAttribute("name") || !function(e) {
                                            var t = e.replace(/[\s-]/g, "");
                                            if (!t.length)
                                                return !1;
                                            var r = Number(t);
                                            return Number.isFinite(r)
                                        }(t.currentTarget.value)) {
                                            e.setState({
                                                isInAutofillMode: !1,
                                                autofillHasHappened: !0
                                            });
                                            var r = t.currentTarget.getAttribute("name");
                                            e.onChange({
                                                action: "autoComplete",
                                                name: r,
                                                value: t.currentTarget.value
                                            })
                                        }
                                    }
                                    .bind(this),
                                    this.autoCompleteFocusListener = function() {
                                        e.fieldRef.focus()
                                    }
                                    .bind(this),
                                    this.acDate && (H(this.acDate, "input", this.autoCompleteListener, !1),
                                    Co.__IS_CHROME_IOS && H(this.acDate, "focus", this.autoCompleteFocusListener, !1)),
                                    this.acName && (H(this.acName, "input", this.autoCompleteListener, !1),
                                    Co.__IS_CHROME_IOS && H(this.acName, "focus", this.autoCompleteFocusListener, !1))
                                }
                            }, {
                                key: "onKeyDown",
                                value: function(e) {
                                    this.oldCursor = ji.getCaretPos(this.fieldRef, !0),
                                    ga(Oa(i.prototype), "onKeyDown", this).call(this, e)
                                }
                            }, {
                                key: "onInput",
                                value: function(e, t) {
                                    var r = ga(Oa(i.prototype), "onInput", this).call(this, e, t, !0);
                                    if (null == r || !r.isComposing) {
                                        var n = t;
                                        this.wasComposing && (this.wasComposing = !1,
                                        n = !0),
                                        null != r && r.unwantedIEEvent || this.handleOnInput(r.currentVal, n, e)
                                    }
                                }
                            }, {
                                key: "onKeyUpAndroid",
                                value: function() {
                                    this.newCursorPosition === this.fieldRef.value.length && ji.setSelectionRange(this.fieldRef, this.newCursorPosition)
                                }
                            }, {
                                key: "onBlur",
                                value: function(e) {
                                    var t = this;
                                    ga(Oa(i.prototype), "onBlur", this).call(this, e, !0),
                                    this.doLuhnCheck().then((function(e) {
                                        var r = e.onChangeObj
                                          , n = e.stateObj;
                                        r && t.onChange(r),
                                        t.setState(n, (function() {
                                            ga(Oa(i.prototype), "checkIncompleteField", t).call(t)
                                        }
                                        ))
                                    }
                                    ))
                                }
                            }, {
                                key: "doLuhnCheck",
                                value: function() {
                                    var e = this;
                                    return new Promise((function(t) {
                                        if ("false" === e.luhnCheckPassStatus || "true" === e.luhnCheckPassStatus && "false" === e.passedSingleDigitTest) {
                                            var r = {
                                                action: me,
                                                error: Ae
                                            };
                                            t(e.processInputFeedback(r))
                                        } else
                                            t({
                                                onChangeObj: null,
                                                stateObj: {}
                                            })
                                    }
                                    ))
                                }
                            }, {
                                key: "componentDidUpdate",
                                value: function() {
                                    var e = this;
                                    if ("onInput_finalised" === this.state.status) {
                                        var t = this.state.commObj;
                                        if (t) {
                                            if (Object.prototype.hasOwnProperty.call(t, "binValue")) {
                                                var r = {
                                                    action: "binValue",
                                                    binValue: t.binValue
                                                }
                                                  , n = Object.prototype.hasOwnProperty.call(t, "encryptableBinValue") ? t.encryptableBinValue : null;
                                                if (t = ft("binValue", "encryptableBinValue").from(t),
                                                this.storedEncryptableBinValue.length && n) {
                                                    var o = {
                                                        valToEncrypt: n,
                                                        encryptionType: "encryptedBinValue",
                                                        encryptionKey: this.props.encryptionKey,
                                                        encryptionName: "binValue",
                                                        fieldType: "encryptedBinValue"
                                                    };
                                                    di(o).then((function(t) {
                                                        t && (r.encryptedBin = t.encryptedBinValue[0].blob,
                                                        r.uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                                                            var t = 16 * Math.random() | 0;
                                                            return ("x" == e ? t : 3 & t | 8).toString(16)
                                                        }
                                                        ))),
                                                        e.onChange(r)
                                                    }
                                                    ))
                                                } else
                                                    this.onChange(r)
                                            }
                                            if (Object.prototype.hasOwnProperty.call(t, "brand")) {
                                                if (!this.props.isSingleBrandedCard && (t.brand !== this.cardBrand || this.hasDoneResetOnBrand)) {
                                                    this.hasDoneResetOnBrand && (this.hasDoneResetOnBrand = !1),
                                                    this.cardBrand = t.brand;
                                                    var i = pt("brand", "cvcPolicy", "cvcText", "maxLength").from(t);
                                                    i.action = "brand",
                                                    this.onChange(i)
                                                }
                                                t = ft("brand", "cvcPolicy", "cvcText", "maxLength").from(t)
                                            }
                                            this.setState({
                                                status: "processing_input"
                                            }),
                                            this.processInputFeedback(t).then((function(t) {
                                                var r = t.onChangeObj
                                                  , n = t.stateObj;
                                                r && e.onChange(r),
                                                e.setState(n)
                                            }
                                            )).catch((function(e) {
                                                console.warn("WARNING: ", e)
                                            }
                                            ))
                                        }
                                    }
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    this.acDate && (N(this.acDate, "input", this.autoCompleteListener, !1),
                                    Co.__IS_CHROME_IOS && N(this.acDate, "focus", this.autoCompleteFocusListener, !1)),
                                    this.acName && (N(this.acName, "input", this.autoCompleteListener, !1),
                                    Co.__IS_CHROME_IOS && N(this.acName, "focus", this.autoCompleteFocusListener, !1)),
                                    ga(Oa(i.prototype), "destroy", this).call(this)
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    return ga(Oa(i.prototype), "render", this).call(this, this.props, this.state, this.acElements)
                                }
                            }],
                            r && va(t.prototype, r),
                            n && va(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            i
                        }(Xi);
                        !function(e, t, r) {
                            t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        }(_a, "defaultProps", {
                            placeholder: "1111 2222 3333 4444",
                            ariaLabel: "Card number"
                        });
                        const Sa = _a;
                        function Pa(e, t) {
                            var r = 0;
                            return t ? (e >= 5 && (r = 1),
                            e >= 12 && (r = 2)) : r = Math.floor(e / 5),
                            r
                        }
                        var ja = function(e) {
                            var t = e.oldCursor
                              , r = e.oldValue
                              , n = e.newValue
                              , o = e.isAmexType;
                            return t - Pa(t, o) + Pa(t + (n.length - r.length), o) + (wi(n).unmaskedVal.length - wi(r).unmaskedVal.length)
                        };
                        function ka(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function Ca(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ka(Object(r), !0).forEach((function(t) {
                                    Ea(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ka(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }
                        function Ea(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function xa(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Security_code"
                              , n = arguments.length > 3 ? arguments[3] : void 0;
                            if (!t || 1 === t.length)
                                return n;
                            var o = "amex" === e ? 4 : 3;
                            return Ca(Ca({}, n), {}, {
                                maxLength: o,
                                cvcText: r
                            })
                        }
                        function Aa() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "card"
                              , t = arguments.length > 1 ? arguments[1] : void 0
                              , r = arguments.length > 2 ? arguments[2] : void 0
                              , n = arguments.length > 3 ? arguments[3] : void 0;
                            return t ? 1 === t.length ? Ca(Ca({}, n), {}, {
                                brand: e
                            }) : Ca(Ca({}, n), {}, {
                                brand: e,
                                cvcPolicy: r
                            }) : n
                        }
                        var Ra = {};
                        const Ta = {
                            checkNumber: function(e) {
                                var t = e;
                                if ("number" == typeof e)
                                    return !1;
                                if (isNaN(parseInt(t, 10)))
                                    return !1;
                                var r = t.length
                                  , n = 1 & r
                                  , o = 0;
                                if (void 0 === Ra[t]) {
                                    for (var i = 0; i < r; i++) {
                                        var a = parseInt(t.charAt(i), 10);
                                        1 & i ^ n || (a *= 2) > 9 && (a -= 9),
                                        o += a
                                    }
                                    Ra[t] = o % 10 == 0
                                }
                                return Ra[t]
                            }
                        };
                        function Da(e, t, r) {
                            var n = null
                              , o = wi(e).unmaskedVal
                              , i = r || function(e, t) {
                                var r = wi(e).unmaskedVal
                                  , n = ra.detectCard(r, t)
                                  , o = !1;
                                return n.cardType !== ra.__NO_BRAND ? n.permittedLengths.forEach((function(e) {
                                    r.length === e && (o = !0)
                                }
                                )) : r.length >= ra.getShortestPermittedCardLength() && (o = !0),
                                o
                            }(e, t);
                            if (i) {
                                var a = Ta.checkNumber(o);
                                n = {
                                    action: me,
                                    error: a ? "" : Ae,
                                    valid: a
                                }
                            }
                            return n
                        }
                        function Ia(e) {
                            var t, r = {}, n = "untested", o = "untested", i = !1, a = !1, c = this.binLookupBrand || this.props.cardGroupTypes || [], s = function(e, t, r, n) {
                                return r ? ra.getCardByBrand(n) || {
                                    cardType: ra.__NO_BRAND
                                } : ra.detectCard(e.substr(0, 7), t)
                            }(e, c, this.props.isSingleBrandedCard, this.cardBrand), u = "amex" === s.cardType.toLowerCase();
                            t = this.mask(e, u);
                            var l = {
                                oldCursor: this.oldCursor,
                                oldValue: this.oldValue,
                                newValue: t,
                                isAmexType: u
                            }
                              , p = ja(l);
                            if (s.cardType !== ra.__NO_BRAND) {
                                var f, d = null !== (f = s.cvcPolicy) && void 0 !== f ? f : je;
                                r = Aa(s.cardType, c, d, r),
                                r = xa(s.cardType, c, s.securityCode, r);
                                var h = ra.detectCardLength(s, e, this.binLookupPanLength);
                                t = h.shortenedNewValue ? this.mask(h.shortenedNewValue, u) : t,
                                i = h.reachedValidLength
                            } else
                                r = function(e, t) {
                                    var r, n = Ca({}, t);
                                    return e && 1 === e.length && (r = e[0]),
                                    xa(void 0, e, void 0, n = Aa(r, e, je, n))
                                }(c, r),
                                e.length >= ra.getShortestPermittedCardLength() && (i = !0),
                                !1 === this.enableLuhnCheck && (i = e.length >= 16);
                            if (i) {
                                var y = !1 === this.enableLuhnCheck ? {
                                    valid: 16 === e.length,
                                    error: "",
                                    action: me
                                } : Da(t, this.binLookupBrand || this.props.cardGroupTypes, !0);
                                a = y.valid,
                                this.binLookupPanLength && e.length !== this.binLookupPanLength && (a = !1),
                                n = y.valid.toString(),
                                o = (!function(e) {
                                    if ("string" != typeof e)
                                        throw new Error("This function only works with strings due to JavaScript's problems with big numbers");
                                    var t = e.length
                                      , r = e.charAt(t - 1)
                                      , n = new Array(t);
                                    return n.fill(r),
                                    e === n.join("")
                                }(e)).toString()
                            }
                            return "" !== t && (this.deleteKeyPressed && p === t.length && ri(t) === Q && (t = ni(t)),
                            i && ri(t) === Q && this.props.trimTrailingSeparator && (t = ni(t))),
                            {
                                newValue: t,
                                isValidLength: a,
                                commObj: r,
                                newCursorPosition: p,
                                luhnCheckPassStatus: n,
                                passedSingleDigitTest: o
                            }
                        }
                        function La(e) {
                            var t = e.fieldType
                              , r = e.placeholdersConfig
                              , n = e.ariaConfig
                              , o = e.encryptionKey
                              , i = e.numKey
                              , a = e.legacyInputMode
                              , c = e.uniqueIdFromLabel
                              , s = e.implementationType;
                            return {
                                ref: e.handleComponentRef,
                                fieldType: t,
                                placeholdersConfig: r,
                                ariaConfig: n,
                                encryptionKey: o,
                                numKey: i,
                                onChange: e.onChange,
                                legacyInputMode: a,
                                uniqueIdFromLabel: c,
                                implementationType: s,
                                disableIOSArrowKeys: e.disableIOSArrowKeys
                            }
                        }
                        var Ka = ["cardBrand", "cardGroupTypes", "isSingleBrandedCard", "trimTrailingSeparator"];
                        function Ma() {
                            return Ma = Object.assign ? Object.assign.bind() : function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r)
                                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                }
                                return e
                            }
                            ,
                            Ma.apply(this, arguments)
                        }
                        function Fa(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function Ba(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function Ha(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }
                        const Na = function(e, t, r, n) {
                            var o = e.cardBrand
                              , i = e.cardGroupTypes
                              , a = e.isSingleBrandedCard
                              , c = e.trimTrailingSeparator
                              , s = Ha(e, Ka);
                            !function(e) {
                                if (null == e)
                                    throw new TypeError("Cannot destructure " + e)
                            }(t);
                            var u = La(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Fa(Object(r), !0).forEach((function(t) {
                                        Ba(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fa(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({
                                handleComponentRef: r,
                                onChange: n
                            }, s));
                            return d(Sa, Ma({}, u, {
                                description: "number",
                                encryptionName: "number",
                                mask: vi,
                                validate: Ia,
                                maxLength: oe,
                                autoComplete: "cc-number",
                                cardBrand: o,
                                cardGroupTypes: i,
                                isSingleBrandedCard: a,
                                trimTrailingSeparator: c
                            }))
                        };
                        function Va(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function Ua(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Va(Object(r), !0).forEach((function(t) {
                                    Wa(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Va(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }
                        function Wa(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function Ga(e, t, r, n, o, i, a) {
                            try {
                                var c = e[i](a)
                                  , s = c.value
                            } catch (e) {
                                return void r(e)
                            }
                            c.done ? t(s) : Promise.resolve(s).then(n, o)
                        }
                        function $a() {
                            return Ja.apply(this, arguments)
                        }
                        function Ja() {
                            var e;
                            return e = regeneratorRuntime.mark((function e() {
                                var t, r, n, o, i, a, c;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.props.fieldType,
                                            r = {
                                                valToEncrypt: this.separateDateValues[0],
                                                encryptionType: "month",
                                                encryptionKey: this.props.encryptionKey,
                                                encryptionName: Y,
                                                fieldType: t
                                            },
                                            e.next = 4,
                                            di(r);
                                        case 4:
                                            return (n = e.sent) || console.warn("### handleValidDateField::ENCRYPTION FAIL:: encryptedMonthObj=", n),
                                            o = Ua(Ua({}, r), {}, {
                                                valToEncrypt: this.separateDateValues[1],
                                                encryptionType: "year",
                                                encryptionName: q
                                            }),
                                            e.next = 9,
                                            di(o);
                                        case 9:
                                            if ((i = e.sent) || console.warn("### handleValidDateField::ENCRYPTION FAIL:: encryptedYearObj=", i),
                                            !n || !i) {
                                                e.next = 16;
                                                break
                                            }
                                            return a = i[U],
                                            (c = n[U] && n[U][0]) && a.unshift(c),
                                            e.abrupt("return", {
                                                onChangeObj: i,
                                                stateObj: {
                                                    showAsValid: !0,
                                                    ariaInvalid: !1,
                                                    error: ""
                                                }
                                            });
                                        case 16:
                                            return console.warn("### handleValidDateField:: ENCRYPTION FAIL"),
                                            e.abrupt("return", {});
                                        case 18:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e, this)
                            }
                            )),
                            Ja = function() {
                                var t = this
                                  , r = arguments;
                                return new Promise((function(n, o) {
                                    var i = e.apply(t, r);
                                    function a(e) {
                                        Ga(i, n, o, a, c, "next", e)
                                    }
                                    function c(e) {
                                        Ga(i, n, o, a, c, "throw", e)
                                    }
                                    a(void 0)
                                }
                                ))
                            }
                            ,
                            Ja.apply(this, arguments)
                        }
                        function za(e) {
                            return za = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            za(e)
                        }
                        function Ya(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function qa() {
                            return qa = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Za(e)); )
                                        ;
                                    return e
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                                }
                            }
                            ,
                            qa.apply(this, arguments)
                        }
                        function Xa(e, t) {
                            return Xa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            Xa(e, t)
                        }
                        function Qa(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ("function" == typeof Proxy)
                                    return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                    ))),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var r, n = Za(e);
                                if (t) {
                                    var o = Za(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === za(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(e)
                                }(this, r)
                            }
                        }
                        function Za(e) {
                            return Za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            Za(e)
                        }
                        var ec = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                t && Xa(e, t)
                            }(i, e);
                            var t, r, n, o = Qa(i);
                            function i(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, i),
                                (t = o.call(this, e)).separateDateValues = [],
                                t.oldCursor = void 0,
                                t.newCursorPosition = void 0,
                                t.extraValidationProps = {
                                    minimumExpiryDateStr: t.props.minimumExpiryDate
                                },
                                t.setState({
                                    status: "initialising",
                                    ariaRequired: t.props.expiryDatePolicy === ke ? "true" : "false"
                                }),
                                t
                            }
                            return t = i,
                            r = [{
                                key: "componentDidMount",
                                value: function() {
                                    qa(Za(i.prototype), "componentDidMount", this).call(this),
                                    this.handleValidField = $a
                                }
                            }, {
                                key: "onKeyDown",
                                value: function(e) {
                                    this.oldCursor = ji.getCaretPos(this.fieldRef, !0),
                                    qa(Za(i.prototype), "onKeyDown", this).call(this, e)
                                }
                            }, {
                                key: "onKeyUpAndroid",
                                value: function() {
                                    this.newCursorPosition === this.fieldRef.value.length && ji.setSelectionRange(this.fieldRef, this.newCursorPosition)
                                }
                            }, {
                                key: "getNumChars",
                                value: function() {
                                    var e = qa(Za(i.prototype), "getNumChars", this).call(this);
                                    return this.fieldRef.value.length >= 3 && (e += 1),
                                    e
                                }
                            }, {
                                key: "specialMessageExpiryDatePolicy",
                                value: function(e) {
                                    this.setState({
                                        status: "expiryDatePolicyMsg_processed",
                                        ariaRequired: e.expiryDatePolicy === ke ? "true" : "false",
                                        displayPolicy: e.expiryDatePolicy
                                    })
                                }
                            }],
                            r && Ya(t.prototype, r),
                            n && Ya(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            i
                        }(Xi);
                        !function(e, t, r) {
                            t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        }(ec, "defaultProps", {
                            placeholder: "MM/YY",
                            ariaLabel: "Expiry date"
                        });
                        const tc = ec;
                        const rc = function() {
                            var e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            t.length > 2 && (r = (r = t.substring(2) + r).substring(0, 2),
                            t = t.substring(0, 2));
                            var n = Number(t);
                            return 1 === t.length && (n >= 2 && n <= 9 || e) && (t = "0".concat(n)),
                            2 === t.length && (0 === n && (t = "01"),
                            n > 12 && (r = (r = t.substring(1) + r).substring(0, 2),
                            t = "0".concat(t.substring(0, 1)))),
                            {
                                typedMonth: t,
                                typedYear: r
                            }
                        };
                        const nc = function(e, t, r, n) {
                            var o = ""
                              , i = ""
                              , a = r.getFullYear()
                              , c = "20".concat(t)
                              , s = Number(c)
                              , u = Number(e)
                              , l = new Date(s,u - 1)
                              , p = new Date(a,r.getMonth() - 3);
                            if (l.getTime() < p)
                                return {
                                    value: o = gi(e + t),
                                    error: i = Ce
                                };
                            if (s > a + ee)
                                return {
                                    value: o = gi(e + t),
                                    error: i = Ee
                                };
                            var f = function(e, t) {
                                var r = null;
                                if (!e)
                                    return r;
                                if (e) {
                                    var n = e.split(Z);
                                    if (n[0].length < 1 || n[0].length > 2 || n[1].length < 2 || 3 === n[1].length || n[1].length > 4)
                                        return r;
                                    var o = n[0]
                                      , i = 2 === n[1].length ? "20".concat(n[1]) : n[1];
                                    return i > t + ee ? r : r = new Date(Number(i),Number(o) - 1)
                                }
                                return r
                            }(n, a);
                            return f && l.getTime() < f.getTime() ? {
                                value: o = gi(e + t),
                                error: i = "error.va.sf-cc-dat.03"
                            } : {
                                value: o,
                                error: i
                            }
                        };
                        function oc(e) {
                            var t, r, n = e.originalVal, o = e.dateArr, i = e.cursorPosFlag, a = e.minimumExpiryDateStr, c = !1, s = 1 === this.oldValue.length && ri(n) === Z, u = {}, l = new Date(genTime), p = rc(o[0], o[1], s), f = p.typedMonth, d = p.typedYear;
                            if (d && 2 === d.length) {
                                var h = nc(f, d, l, a)
                                  , y = h.value
                                  , b = h.error;
                                if (y.length && (this.fieldRef.value = y),
                                b.length)
                                    return (u = ut(u, "error", b)).action = oi(this.action, "date"),
                                    {
                                        error: b,
                                        commObj: u,
                                        propsOnThis: {
                                            separateDateValues: []
                                        }
                                    }
                            }
                            2 === (t = this.mask(f + d)).length && ri(t) === Z && (t = ni(t, 1)),
                            "" !== t && this.deleteKeyPressed && ji.getCaretPos(this.fieldRef) === n.length && 2 === ji.getCaretPos(this.fieldRef) && (t = ni(t, 2)),
                            5 === t.length && (c = !0),
                            i && (r = i);
                            var v = this.unmask(t).dateArr
                              , g = [v[0] && 2 === v[0].length ? v[0] : "", v[1] && 2 === v[1].length ? "20".concat(v[1]) : ""]
                              , m = g[1]
                              , w = 4 === (null == m ? void 0 : m.length) && !Number.isNaN(parseInt(m));
                            return "" !== g[0] && w || (c = !1),
                            {
                                newValue: t,
                                isValidLength: c,
                                commObj: u,
                                error: "",
                                newCursorPosition: r,
                                propsOnThis: {
                                    newCursorPosition: r,
                                    separateDateValues: g
                                }
                            }
                        }
                        var ic = ["minimumExpiryDate", "expiryDatePolicy"];
                        function ac() {
                            return ac = Object.assign ? Object.assign.bind() : function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r)
                                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                }
                                return e
                            }
                            ,
                            ac.apply(this, arguments)
                        }
                        function cc(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function sc(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function uc(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }
                        const lc = function(e, t, r, n) {
                            var o = e.minimumExpiryDate
                              , i = e.expiryDatePolicy
                              , a = uc(e, ic);
                            !function(e) {
                                if (null == e)
                                    throw new TypeError("Cannot destructure " + e)
                            }(t);
                            var c = La(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? cc(Object(r), !0).forEach((function(t) {
                                        sc(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cc(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({
                                handleComponentRef: r,
                                onChange: n
                            }, a));
                            return d(tc, ac({}, c, {
                                description: "date",
                                encryptionName: "n/a",
                                mask: gi,
                                unmask: mi,
                                validate: oc,
                                maxLength: 5,
                                autoComplete: "cc-exp",
                                minimumExpiryDate: o,
                                expiryDatePolicy: i
                            }))
                        };
                        function pc(e) {
                            return pc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            pc(e)
                        }
                        function fc(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function dc() {
                            return dc = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = bc(e)); )
                                        ;
                                    return e
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                                }
                            }
                            ,
                            dc.apply(this, arguments)
                        }
                        function hc(e, t) {
                            return hc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            hc(e, t)
                        }
                        function yc(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ("function" == typeof Proxy)
                                    return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                    ))),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var r, n = bc(e);
                                if (t) {
                                    var o = bc(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === pc(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(e)
                                }(this, r)
                            }
                        }
                        function bc(e) {
                            return bc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            bc(e)
                        }
                        var vc = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                t && hc(e, t)
                            }(i, e);
                            var t, r, n, o = yc(i);
                            function i(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, i),
                                (t = o.call(this, e)).setState({
                                    status: "initialising",
                                    ariaRequired: t.props.expiryDatePolicy === ke ? "true" : "false"
                                }),
                                t
                            }
                            return t = i,
                            r = [{
                                key: "onBlur",
                                value: function(e) {
                                    dc(bc(i.prototype), "onBlur", this).call(this, e, this.fieldRef.value.length),
                                    "0" !== this.fieldRef.value && "1" !== this.fieldRef.value || (this.fieldRef.value = "01",
                                    this.onInput(e))
                                }
                            }, {
                                key: "specialMessageExpiryDatePolicy",
                                value: function(e) {
                                    this.setState({
                                        status: "expiryDatePolicyMsg_processed",
                                        ariaRequired: e.expiryDatePolicy === ke ? "true" : "false",
                                        displayPolicy: e.expiryDatePolicy
                                    })
                                }
                            }],
                            r && fc(t.prototype, r),
                            n && fc(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            i
                        }(Xi);
                        const gc = vc;
                        function mc(e) {
                            var t = e.unmaskedVal
                              , r = !1
                              , n = rc(t).typedMonth;
                            return 2 === n.length && (r = !0),
                            {
                                newValue: n,
                                isValidLength: r,
                                commObj: {},
                                error: ""
                            }
                        }
                        var wc = ["expiryDatePolicy"];
                        function Oc() {
                            return Oc = Object.assign ? Object.assign.bind() : function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r)
                                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                }
                                return e
                            }
                            ,
                            Oc.apply(this, arguments)
                        }
                        function _c(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function Sc(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function Pc(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }
                        const jc = function(e, t, r, n) {
                            var o = e.expiryDatePolicy
                              , i = Pc(e, wc);
                            !function(e) {
                                if (null == e)
                                    throw new TypeError("Cannot destructure " + e)
                            }(t);
                            var a = mc
                              , c = La(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? _c(Object(r), !0).forEach((function(t) {
                                        Sc(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _c(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({
                                handleComponentRef: r,
                                onChange: n
                            }, i));
                            return d(gc, Oc({}, c, {
                                description: "month",
                                encryptionName: "expiryMonth",
                                mask: undefined,
                                unmask: undefined,
                                validate: a,
                                maxLength: 2,
                                autoComplete: "cc-exp-month",
                                valToEncrypt: undefined,
                                expiryDatePolicy: o
                            }))
                        };
                        function kc(e) {
                            var t, r = e.unmaskedVal, n = e.minimumExpiryDateStr, o = e.month, i = !1, a = {}, c = new Date(genTime), s = "", u = 1, l = r;
                            if (l && 2 === l.length)
                                if (o && Number(o) > 0) {
                                    var p = nc(o, l, c, n).error;
                                    if (p.length)
                                        return (a = ut(a, "error", p)).action = oi(this.action, "date"),
                                        {
                                            error: p,
                                            commObj: a,
                                            propsOnThis: {
                                                fullYear: ""
                                            }
                                        };
                                    s = "20".concat(l)
                                } else {
                                    var f = c.getFullYear();
                                    if (s = "20".concat(l),
                                    t = Number(s),
                                    c.getMonth() > 2 && (u = 0),
                                    t < f - u)
                                        return (a = ut(a, "error", Ce)).action = oi(this.action, "year"),
                                        {
                                            error: Ce,
                                            commObj: a,
                                            propsOnThis: {
                                                fullYear: ""
                                            }
                                        };
                                    if (t > f + ee)
                                        return (a = ut(a, "error", Ee)).action = oi(this.action, "year"),
                                        {
                                            error: Ee,
                                            commObj: a,
                                            propsOnThis: {
                                                fullYear: ""
                                            }
                                        }
                                }
                            var d = l;
                            return 2 === d.length && (i = !0),
                            {
                                newValue: d,
                                isValidLength: i,
                                commObj: a,
                                error: "",
                                propsOnThis: {
                                    fullYear: s
                                }
                            }
                        }
                        function Cc(e) {
                            return Cc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            Cc(e)
                        }
                        function Ec(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function xc(e, t) {
                            return xc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            xc(e, t)
                        }
                        function Ac(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ("function" == typeof Proxy)
                                    return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                    ))),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var r, n = Rc(e);
                                if (t) {
                                    var o = Rc(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === Cc(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(e)
                                }(this, r)
                            }
                        }
                        function Rc(e) {
                            return Rc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            Rc(e)
                        }
                        var Tc = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                t && xc(e, t)
                            }(i, e);
                            var t, r, n, o = Ac(i);
                            function i(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, i),
                                (t = o.call(this, e)).extraValidationProps = {
                                    minimumExpiryDateStr: t.props.minimumExpiryDate,
                                    month: null
                                },
                                t.setState({
                                    status: "initialising",
                                    ariaRequired: t.props.expiryDatePolicy === ke ? "true" : "false"
                                }),
                                t
                            }
                            return t = i,
                            r = [{
                                key: "specialMessageOnCode",
                                value: function(e) {
                                    var t = function(e, t) {
                                        var r = e.split("_")
                                          , n = t[Number(r[0])]
                                          , o = r.length > 1 ? Number(n + t[Number(r[1])]) : Number(n)
                                          , i = _e[o];
                                        return Oe.indexOf(i).toString()
                                    }(e.code, e.blob)
                                      , r = 1 === t.length ? "0".concat(t) : t;
                                    this.extraValidationProps.month !== r && (this.extraValidationProps.month = r,
                                    this.onInput())
                                }
                            }, {
                                key: "specialMessageExpiryDatePolicy",
                                value: function(e) {
                                    this.setState({
                                        status: "expiryDatePolicyMsg_processed",
                                        ariaRequired: e.expiryDatePolicy === ke ? "true" : "false",
                                        displayPolicy: e.expiryDatePolicy
                                    })
                                }
                            }],
                            r && Ec(t.prototype, r),
                            n && Ec(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            i
                        }(Xi);
                        const Dc = Tc;
                        var Ic = ["minimumExpiryDate", "expiryDatePolicy"];
                        function Lc() {
                            return Lc = Object.assign ? Object.assign.bind() : function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r)
                                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                }
                                return e
                            }
                            ,
                            Lc.apply(this, arguments)
                        }
                        function Kc(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function Mc(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function Fc(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }
                        const Bc = function(e, t, r, n) {
                            var o = e.minimumExpiryDate
                              , i = e.expiryDatePolicy
                              , a = Fc(e, Ic);
                            !function(e) {
                                if (null == e)
                                    throw new TypeError("Cannot destructure " + e)
                            }(t);
                            var c = kc
                              , s = La(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Kc(Object(r), !0).forEach((function(t) {
                                        Mc(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kc(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({
                                handleComponentRef: r,
                                onChange: n
                            }, a));
                            return d(Dc, Lc({}, s, {
                                description: "year",
                                encryptionName: "expiryYear",
                                mask: undefined,
                                unmask: undefined,
                                validate: c,
                                maxLength: 2,
                                autoComplete: "cc-exp-year",
                                valToEncrypt: "fullYear",
                                minimumExpiryDate: o,
                                expiryDatePolicy: i
                            }))
                        };
                        function Hc(e, t) {
                            var r, n = /^\d{3}$/;
                            if (!t.includes("amex"))
                                return n;
                            switch (e) {
                            case null:
                            case "":
                            case "unrecognised-single-brand":
                            case "card":
                                r = /^\d{3,4}$/;
                                break;
                            case "amex":
                                r = /^\d{4}$/;
                                break;
                            default:
                                r = n
                            }
                            return r
                        }
                        function Nc(e) {
                            var t = this
                              , r = !1
                              , n = {}
                              , o = e.cvcPolicy
                              , i = e.brand
                              , a = Yo(i)
                              , c = qo(i)
                              , s = Hc(i, this.props.cardGroupTypes);
                            s.test(this.fieldRef.value) && (r = !0);
                            var u = String(s).indexOf("4") > -1 ? 4 : 3;
                            this.props.isSingleBrandedCard || (this.cardBrand = i),
                            this.isValidLength = r,
                            this.setState({
                                status: "brandMsg_processed",
                                maxLength: u,
                                placeholder: a,
                                contextualText: c,
                                ariaRequired: o === je ? "true" : "false",
                                displayPolicy: o
                            }),
                            this.fieldRef.value.length > 2 && (n = ut(n, "error", r ? "" : Te),
                            n = ut(n, "action", oi(this.action, X)),
                            this.processInputFeedback(n).then((function(e) {
                                var r = e.onChangeObj
                                  , n = e.stateObj;
                                r && t.onChange(r),
                                t.setState(n)
                            }
                            )))
                        }
                        function Vc(e) {
                            return Vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                return typeof e
                            }
                            : function(e) {
                                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                            }
                            ,
                            Vc(e)
                        }
                        function Uc(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n.enumerable = n.enumerable || !1,
                                n.configurable = !0,
                                "value"in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n)
                            }
                        }
                        function Wc() {
                            return Wc = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
                                var n = function(e, t) {
                                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Jc(e)); )
                                        ;
                                    return e
                                }(e, t);
                                if (n) {
                                    var o = Object.getOwnPropertyDescriptor(n, t);
                                    return o.get ? o.get.call(arguments.length < 3 ? e : r) : o.value
                                }
                            }
                            ,
                            Wc.apply(this, arguments)
                        }
                        function Gc(e, t) {
                            return Gc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                return e.__proto__ = t,
                                e
                            }
                            ,
                            Gc(e, t)
                        }
                        function $c(e) {
                            var t = function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ("function" == typeof Proxy)
                                    return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                                    ))),
                                    !0
                                } catch (e) {
                                    return !1
                                }
                            }();
                            return function() {
                                var r, n = Jc(e);
                                if (t) {
                                    var o = Jc(this).constructor;
                                    r = Reflect.construct(n, arguments, o)
                                } else
                                    r = n.apply(this, arguments);
                                return function(e, t) {
                                    if (t && ("object" === Vc(t) || "function" == typeof t))
                                        return t;
                                    if (void 0 !== t)
                                        throw new TypeError("Derived constructors may only return object or undefined");
                                    return function(e) {
                                        if (void 0 === e)
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return e
                                    }(e)
                                }(this, r)
                            }
                        }
                        function Jc(e) {
                            return Jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                return e.__proto__ || Object.getPrototypeOf(e)
                            }
                            ,
                            Jc(e)
                        }
                        var zc = function(e) {
                            !function(e, t) {
                                if ("function" != typeof t && null !== t)
                                    throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }),
                                t && Gc(e, t)
                            }(i, e);
                            var t, r, n, o = $c(i);
                            function i(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t))
                                        throw new TypeError("Cannot call a class as a function")
                                }(this, i),
                                (t = o.call(this, e)).cardBrand = t.props.cardBrand,
                                t.setState({
                                    status: "initialising",
                                    placeholder: Yo(t.props.cardBrand),
                                    contextualText: qo(t.props.cardBrand),
                                    ariaRequired: t.props.cvcPolicy === je ? "true" : "false"
                                }),
                                t
                            }
                            return t = i,
                            (r = [{
                                key: "componentDidMount",
                                value: function() {
                                    Wc(Jc(i.prototype), "componentDidMount", this).call(this),
                                    this.eventLogger = ya("cvc", this.fieldRef),
                                    this.specialMessageOnBrand = Nc
                                }
                            }]) && Uc(t.prototype, r),
                            n && Uc(t, n),
                            Object.defineProperty(t, "prototype", {
                                writable: !1
                            }),
                            i
                        }(Xi);
                        !function(e, t, r) {
                            t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        }(zc, "defaultProps", {
                            placeholder: "1234",
                            ariaLabel: "Security code"
                        });
                        const Yc = zc;
                        function qc(e) {
                            var t = e.unmaskedVal
                              , r = !1
                              , n = Hc(this.cardBrand, this.props.cardGroupTypes);
                            return n.test(t) && (r = !0),
                            {
                                newValue: t,
                                isValidLength: r,
                                commObj: {},
                                error: "",
                                maxLength: String(n).indexOf("4") > -1 ? 4 : 3
                            }
                        }
                        var Xc = ["cardBrand", "cvcPolicy", "cardGroupTypes", "isSingleBrandedCard", "maskSecurityCode"];
                        function Qc() {
                            return Qc = Object.assign ? Object.assign.bind() : function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r)
                                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                }
                                return e
                            }
                            ,
                            Qc.apply(this, arguments)
                        }
                        function Zc(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function es(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function ts(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }
                        const rs = function(e, t, r, n) {
                            var o = e.cardBrand
                              , i = e.cvcPolicy
                              , a = e.cardGroupTypes
                              , c = e.isSingleBrandedCard
                              , s = e.maskSecurityCode
                              , u = ts(e, Xc);
                            !function(e) {
                                if (null == e)
                                    throw new TypeError("Cannot destructure " + e)
                            }(t);
                            var l = La(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Zc(Object(r), !0).forEach((function(t) {
                                        es(e, t, r[t])
                                    }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zc(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }
                                    ))
                                }
                                return e
                            }({
                                handleComponentRef: r,
                                onChange: n
                            }, u));
                            return d(Yc, Qc({}, l, {
                                description: "csc",
                                encryptionName: "cvc",
                                validate: qc,
                                cardGroupTypes: a,
                                maxLength: 4,
                                autoComplete: "cc-csc",
                                cardBrand: o,
                                cvcPolicy: i,
                                isSingleBrandedCard: c,
                                maskSecurityCode: s
                            }))
                        };
                        var ns = function(e, t, r) {
                            if (0 === e || !t.length)
                                return 0;
                            var n = t.length - r.length
                              , o = n > 0
                              , i = function(e, t) {
                                return /\s/.test(e.charAt(t))
                            }
                              , a = e - n;
                            return o && (i(t, a + 1) || i(t, a)) ? e + 1 : !o && i(t, e - 1) ? e - 1 : e
                        };
                        var os = ["fieldType", "extraFieldData", "placeholdersConfig"];
                        function is() {
                            return is = Object.assign ? Object.assign.bind() : function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r)
                                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                }
                                return e
                            }
                            ,
                            is.apply(this, arguments)
                        }
                        function as(e, t) {
                            var r = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(e);
                                t && (n = n.filter((function(t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                                }
                                ))),
                                r.push.apply(r, n)
                            }
                            return r
                        }
                        function cs(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? as(Object(r), !0).forEach((function(t) {
                                    ss(e, t, r[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : as(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }
                                ))
                            }
                            return e
                        }
                        function ss(e, t, r) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r,
                            e
                        }
                        function us(e, t) {
                            if (null == e)
                                return {};
                            var r, n, o = function(e, t) {
                                if (null == e)
                                    return {};
                                var r, n, o = {}, i = Object.keys(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || (o[r] = e[r]);
                                return o
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++)
                                    r = i[n],
                                    t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }
                        const ls = function(e, t, r, n) {
                            var o, i, a, c, s, u = e.fieldType, l = e.extraFieldData, p = e.placeholdersConfig, f = us(e, os);
                            !function(e) {
                                if (null == e)
                                    throw new TypeError("Cannot destructure " + e)
                            }(t);
                            var h = "maxLength"
                              , y = cs({}, p)
                              , b = st(l, "maskInterval");
                            +b && (s = (s = +b) > 0 || !Number.isNaN(s) ? s : null);
                            var v = st(l, "length");
                            if (v && ("number" == typeof v && (a = (a = l.length) > 0 ? a : null),
                            "string" == typeof v)) {
                                var g = function(e) {
                                    var t = null
                                      , r = null
                                      , n = e.replace(/[^\d\-|]/g, "")
                                      , o = e.replace(/[^\-|]/g, "").substr(0, 1)
                                      , i = n.match(/\d+/g);
                                    if (!i)
                                        return {
                                            startVal: t,
                                            endVal: r,
                                            separatorStr: o
                                        };
                                    var a = i.map((function(e) {
                                        return +e
                                    }
                                    )).filter((function(e, t, r) {
                                        return r.indexOf(e) === t && e > 0
                                    }
                                    )).reduce((function(e, t) {
                                        return e.length < 2 && e.push(t),
                                        e
                                    }
                                    ), []).sort((function(e, t) {
                                        return e - t
                                    }
                                    ));
                                    return a.length ? 1 === a.length ? {
                                        startVal: t,
                                        endVal: r = a[0],
                                        separatorStr: o
                                    } : {
                                        startVal: t = a[0],
                                        endVal: r = a[1],
                                        separatorStr: o
                                    } : {
                                        startVal: t,
                                        endVal: r,
                                        separatorStr: o
                                    }
                                }(v)
                                  , m = g.startVal
                                  , w = g.endVal
                                  , O = g.separatorStr;
                                a = w,
                                (c = m) && a && O.length && (h = O.indexOf("|") > -1 ? "twoStops" : "range")
                            }
                            s && (i = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " "
                                  , r = new RegExp("(.{".concat(e, "})(?!$)"),"g");
                                return function(e) {
                                    return e.replace(/\W/gi, "").replace(r, "$1".concat(t)).trim()
                                }
                            }(s),
                            a && (a += Oi(a, s)),
                            c && (c += Oi(c, s)));
                            var _, S = a || 2;
                            switch (u) {
                            case "encryptedCardNumber":
                                o = "giftCardNumber";
                                break;
                            case "encryptedSecurityCode":
                                o = "giftCardPin";
                                break;
                            default:
                                o = (_ = u.substr(9)).charAt(0).toLowerCase() + _.slice(1)
                            }
                            var P = function(e, t) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "maxLength";
                                return function(n) {
                                    var o = n.unmaskedVal
                                      , i = !1
                                      , a = t || e
                                      , c = o
                                      , s = this.mask ? this.mask(c) : c
                                      , u = null;
                                    if (this.mask) {
                                        var l = this.fieldRef.selectionStart
                                          , p = this.oldValue;
                                        u = ns(l, s, p)
                                    }
                                    switch (r) {
                                    case "range":
                                        s.length >= a && s.length <= e && (i = !0);
                                        break;
                                    case "twoStops":
                                        s.length !== a && s.length !== e || (i = !0);
                                        break;
                                    default:
                                        s.length === e && (i = !0)
                                    }
                                    return {
                                        newValue: s,
                                        isValidLength: i,
                                        commObj: {},
                                        error: "",
                                        newCursorPosition: u
                                    }
                                }
                            }(S, c, h);
                            y[u] || "" === y[u] || (y[u] = s ? i(Ke).substr(0, S) : Ke.substr(0, S));
                            var j = La(cs({
                                handleComponentRef: r,
                                onChange: n,
                                fieldType: u
                            }, f));
                            return d(Xi, is({}, j, {
                                placeholdersConfig: y,
                                description: "digits",
                                encryptionName: o,
                                mask: i,
                                unmask: undefined,
                                validate: P,
                                maxLength: S,
                                autoComplete: undefined,
                                valToEncrypt: undefined
                            }))
                        };
                        const ps = function(e, t) {
                            var r = e.fieldType;
                            return function(e) {
                                if (null == e)
                                    throw new TypeError("Cannot destructure " + e)
                            }(t),
                            d("input", {
                                className: "input-field",
                                style: "display:block;color:red;",
                                value: "Undefined SF type: ".concat(r),
                                readOnly: !0
                            })
                        };
                        var fs = {
                            encryptedCardNumber: Na,
                            encryptedExpiryDate: lc,
                            encryptedSecurityCode: rs,
                            encryptedExpiryMonth: jc,
                            encryptedExpiryYear: Bc,
                            encryptedPassword: ls,
                            default: ps
                        };
                        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                            value: function(e, t) {
                                if (null == this)
                                    throw new TypeError('"this" is null or not defined');
                                var r = Object(this)
                                  , n = r.length >>> 0;
                                if (0 === n)
                                    return !1;
                                var o = 0 | t
                                  , i = Math.max(o >= 0 ? o : n - Math.abs(o), 0);
                                function a(e, t) {
                                    return e === t || "number" == typeof e && "number" == typeof t && isNaN(e) && isNaN(t)
                                }
                                for (; i < n; ) {
                                    if (a(r[i], e))
                                        return !0;
                                    i++
                                }
                                return !1
                            }
                        }),
                        Object.entries || (Object.entries = function(e) {
                            for (var t = Object.keys(e), r = t.length, n = new Array(r); r--; )
                                n[r] = [t[r], e[t[r]]];
                            return n
                        }
                        ),
                        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
                            value: function(e) {
                                if (null == this)
                                    throw new TypeError("this is null or not defined");
                                for (var t = Object(this), r = t.length >>> 0, n = arguments[1] >> 0, o = n < 0 ? Math.max(r + n, 0) : Math.min(n, r), i = arguments[2], a = void 0 === i ? r : i >> 0, c = a < 0 ? Math.max(r + a, 0) : Math.min(a, r); o < c; )
                                    t[o] = e,
                                    o++;
                                return t
                            }
                        }),
                        Wo((function(e, t, r, n) {
                            var o = fs[t.status] || fs.default;
                            return o ? o(e, t, r, n) : null
                        }
                        ), "card"),
                        window.sfVersion = "4.8.3"
                    }
                    )()
                }
                )();

            }
            )();
        </script>
        <script type="text/javascript">
            setTimeout(function() {
                /**
     * sfHasConfigured is an indicator that the Adyen asset server has served the html file, inserted the publicKey
     * & SF code, and that handleConfigMessage has been allowed to run & has judged that the SF has been configured correctly
     */
                if (!window.sfHasConfigured) {
                    // problem with asset template (no js inserted)
                    if (!window.sfConfigLog) {
                        window.sfConfigLog = {
                            errors: ['No JS file found']
                        };
                    }
                    // problem retrieving key or with asset template (no key inserted)
                    if (!adyen.key) {
                        // If js has run type prop will have been added & it will have already detected this error
                        if (typeof window.sfConfigLog.type === 'undefined') {
                            window.sfConfigLog.errors.push('No encryption key found')
                        }
                    }
                    if (window.console && window.console.warn) {
                        console.warn('WARNING: securedFields:: the iframe has not configured correctly. Config log=', window.sfConfigLog);
                        console.warn('If the above errors, or the message in the iframe itself, give no insight - then check your clientKey.')
                        console.warn('Check that the clientKey is created against the right endpoint ("test" | "live") and that the list of "Allowed Origins" contains the domain of your website.');
                    }

                    var body = document.querySelector('body');
                    var errorInput = document.createElement('input');
                    errorInput.setAttribute('id', 'originErrorField');
                    errorInput.setAttribute('readonly', 'true');
                    errorInput.setAttribute('style', 'display:block;');
                    errorInput.value = 'The iframe has not configured - see Warning in Console';
                    body.appendChild(errorInput);
                }
            }, 5000);

            // Señal de que Adyen API está lista
            if (window.adyen && window.adyen.key && window.adyen.generationTime) {
                console.log("adyenApi.js: Adyen key and generationTime are set. Dispatching adyenApiReady event.");
                document.dispatchEvent(new CustomEvent('adyenApiReady'));
            } else {
                console.error("adyenApi.js: Adyen key or generationTime not set after script execution. Cannot dispatch adyenApiReady event.");
            }
