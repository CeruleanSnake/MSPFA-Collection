!function() {
    "use strict";
    function f(e, t) {
        var n;
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
                }
            }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0
                  , a = function() {};
                return {
                    s: a,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: a
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, u = !0, i = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return u = e.done,
                e
            },
            e: function(e) {
                i = !0,
                o = e
            },
            f: function() {
                try {
                    u || null == n.return || n.return()
                } finally {
                    if (i)
                        throw o
                }
            }
        }
    }
    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    !function() {
        for (var u, e, i = [], t = function() {
            var e, t = f(i);
            try {
                for (t.s(); !(e = t.n()).done; ) {
                    var n = e.value;
                    MSPFA.p >= n[0] && MSPFA.p <= n[1] ? (n[3].volume = n[2],
                    n[3].paused && n[3].play(),
                    n[3]._pause = !1) : n[3].paused || void 0 !== n[3]._pause || (n[3]._pause = !0)
                }
            } catch (e) {
                t.e(e)
            } finally {
                t.f()
            }
            var r, a = f(u);
            try {
                for (a.s(); !(r = a.n()).done; ) {
                    var o = r.value;
                    o._pause && (o.pause(),
                    o.currentTime = 0),
                    delete o._pause
                }
            } catch (e) {
                a.e(e)
            } finally {
                a.f()
            }
        }, n = 0, r = function() {
            ++n === i.length && (u = Object.values(o),
            MSPFA.slide.push(t),
            t())
        }, a = function(e) {
            var t = document.createElement("span");
            t.appendChild(document.createTextNode("No audio file was found at the following URL:")),
            t.appendChild(document.createElement("br"));
            var n = document.createElement("a");
            n.textContent = n.href = e.target.src,
            n.target = "_blank",
            t.appendChild(n),
            MSPFA.dialog("Error", t, ["Okay"]),
            r()
        }, o = {}, l = /@mspfa audio(?: (\d+))?(?: (\d+))?(?: ([\d\.]+))? (.+?)(?:;|\n|$)/g; e = l.exec(MSPFA.story.y); ) {
            o[e[4]] ? r() : (o[e[4]] = new Audio(e[4]),
            o[e[4]].loop = !0,
            o[e[4]].addEventListener("canplay", r),
            o[e[4]].addEventListener("error", a));
            var c = parseInt(e[1]) || 1;
            i.push([c, e[2] ? parseInt(e[2]) || 1 / 0 : e[1] ? c : 1 / 0, Number(e[3]) || 1, o[e[4]]])
        }
    }()
}();
