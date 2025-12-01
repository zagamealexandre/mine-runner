import Y, { useRef as N, useEffect as Q, useMemo as ce, useState as _r } from "react";
import { useFrame as ee, useThree as Sr, Canvas as wr } from "@react-three/fiber";
import * as M from "three";
import { Text as Pr } from "@react-three/drei";
var Z = { exports: {} }, z = {};
var Ie;
function jr() {
  if (Ie) return z;
  Ie = 1;
  var n = Y, a = Symbol.for("react.element"), i = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(d, p, g) {
    var R, v = {}, E = null, k = null;
    g !== void 0 && (E = "" + g), p.key !== void 0 && (E = "" + p.key), p.ref !== void 0 && (k = p.ref);
    for (R in p) c.call(p, R) && !u.hasOwnProperty(R) && (v[R] = p[R]);
    if (d && d.defaultProps) for (R in p = d.defaultProps, p) v[R] === void 0 && (v[R] = p[R]);
    return { $$typeof: a, type: d, key: E, ref: k, props: v, _owner: o.current };
  }
  return z.Fragment = i, z.jsx = h, z.jsxs = h, z;
}
var G = {};
var Le;
function Tr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && (function() {
    var n = Y, a = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), $ = Symbol.iterator, le = "@@iterator";
    function Ve(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[le];
      return typeof r == "function" ? r : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          t[s - 1] = arguments[s];
        Ue("error", e, t);
      }
    }
    function Ue(e, r, t) {
      {
        var s = I.ReactDebugCurrentFrame, y = s.getStackAddendum();
        y !== "" && (r += "%s", t = t.concat([y]));
        var b = t.map(function(f) {
          return String(f);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var ze = !1, Ge = !1, Be = !1, Ne = !1, Je = !1, fe;
    fe = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === u || Je || e === o || e === g || e === R || Ne || e === k || ze || Ge || Be || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === v || e.$$typeof === h || e.$$typeof === d || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Xe(e, r, t) {
      var s = e.displayName;
      if (s)
        return s;
      var y = r.displayName || r.name || "";
      return y !== "" ? t + "(" + y + ")" : t;
    }
    function de(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case i:
          return "Portal";
        case u:
          return "Profiler";
        case o:
          return "StrictMode";
        case g:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return de(r) + ".Consumer";
          case h:
            var t = e;
            return de(t._context) + ".Provider";
          case p:
            return Xe(e, e.render, "ForwardRef");
          case v:
            var s = e.displayName || null;
            return s !== null ? s : A(e.type) || "Memo";
          case E: {
            var y = e, b = y._payload, f = y._init;
            try {
              return A(f(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, V = 0, ve, pe, he, me, ye, ge, be;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function Ke() {
      {
        if (V === 0) {
          ve = console.log, pe = console.info, he = console.warn, me = console.error, ye = console.group, ge = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Re,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function He() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: ve
            }),
            info: D({}, e, {
              value: pe
            }),
            warn: D({}, e, {
              value: he
            }),
            error: D({}, e, {
              value: me
            }),
            group: D({}, e, {
              value: ye
            }),
            groupCollapsed: D({}, e, {
              value: ge
            }),
            groupEnd: D({}, e, {
              value: be
            })
          });
        }
        V < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = I.ReactCurrentDispatcher, te;
    function q(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (y) {
            var s = y.stack.trim().match(/\n( *(at )?)/);
            te = s && s[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, X;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      X = new Ze();
    }
    function Ee(e, r) {
      if (!e || ne)
        return "";
      {
        var t = X.get(e);
        if (t !== void 0)
          return t;
      }
      var s;
      ne = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = re.current, re.current = null, Ke();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (P) {
              s = P;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (P) {
              s = P;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            s = P;
          }
          e();
        }
      } catch (P) {
        if (P && s && typeof P.stack == "string") {
          for (var l = P.stack.split(`
`), w = s.stack.split(`
`), x = l.length - 1, _ = w.length - 1; x >= 1 && _ >= 0 && l[x] !== w[_]; )
            _--;
          for (; x >= 1 && _ >= 0; x--, _--)
            if (l[x] !== w[_]) {
              if (x !== 1 || _ !== 1)
                do
                  if (x--, _--, _ < 0 || l[x] !== w[_]) {
                    var T = `
` + l[x].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, T), T;
                  }
                while (x >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = b, He(), Error.prepareStackTrace = y;
      }
      var W = e ? e.displayName || e.name : "", F = W ? q(W) : "";
      return typeof e == "function" && X.set(e, F), F;
    }
    function Qe(e, r, t) {
      return Ee(e, !1);
    }
    function er(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, er(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case g:
          return q("Suspense");
        case R:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Qe(e.render);
          case v:
            return K(e.type, r, t);
          case E: {
            var s = e, y = s._payload, b = s._init;
            try {
              return K(b(y), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, xe = {}, _e = I.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(t);
      } else
        _e.setExtraStackFrame(null);
    }
    function rr(e, r, t, s, y) {
      {
        var b = Function.call.bind(U);
        for (var f in e)
          if (b(e, f)) {
            var l = void 0;
            try {
              if (typeof e[f] != "function") {
                var w = Error((s || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              l = e[f](r, f, s, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              l = x;
            }
            l && !(l instanceof Error) && (H(y), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", t, f, typeof l), H(null)), l instanceof Error && !(l.message in xe) && (xe[l.message] = !0, H(y), S("Failed %s type: %s", t, l.message), H(null));
          }
      }
    }
    var tr = Array.isArray;
    function ae(e) {
      return tr(e);
    }
    function nr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ar(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function we(e) {
      if (ar(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(e)), Se(e);
    }
    var Pe = I.ReactCurrentOwner, or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Te;
    function ir(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, r) {
      typeof e.ref == "string" && Pe.current;
    }
    function cr(e, r) {
      {
        var t = function() {
          je || (je = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Te || (Te = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, s, y, b, f) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function dr(e, r, t, s, y) {
      {
        var b, f = {}, l = null, w = null;
        t !== void 0 && (we(t), l = "" + t), sr(r) && (we(r.key), l = "" + r.key), ir(r) && (w = r.ref, ur(r, y));
        for (b in r)
          U.call(r, b) && !or.hasOwnProperty(b) && (f[b] = r[b]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (b in x)
            f[b] === void 0 && (f[b] = x[b]);
        }
        if (l || w) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && cr(f, _), w && lr(f, _);
        }
        return fr(e, l, w, y, s, Pe.current, f);
      }
    }
    var oe = I.ReactCurrentOwner, Oe = I.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ce() {
      {
        if (oe.current) {
          var e = A(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      return "";
    }
    var Me = {};
    function pr(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ke(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = pr(r);
        if (Me[t])
          return;
        Me[t] = !0;
        var s = "";
        e && e._owner && e._owner !== oe.current && (s = " It was passed a child from " + A(e._owner.type) + "."), L(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, s), L(null);
      }
    }
    function Ae(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var s = e[t];
            se(s) && ke(s, r);
          }
        else if (se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = Ve(e);
          if (typeof y == "function" && y !== e.entries)
            for (var b = y.call(e), f; !(f = b.next()).done; )
              se(f.value) && ke(f.value, r);
        }
      }
    }
    function hr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === v))
          t = r.propTypes;
        else
          return;
        if (t) {
          var s = A(r);
          rr(t, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var y = A(r);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var s = r[t];
          if (s !== "children" && s !== "key") {
            L(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var De = {};
    function Fe(e, r, t, s, y, b) {
      {
        var f = qe(e);
        if (!f) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = vr();
          w ? l += w : l += Ce();
          var x;
          e === null ? x = "null" : ae(e) ? x = "array" : e !== void 0 && e.$$typeof === a ? (x = "<" + (A(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, l);
        }
        var _ = dr(e, r, t, y, b);
        if (_ == null)
          return _;
        if (f) {
          var T = r.children;
          if (T !== void 0)
            if (s)
              if (ae(T)) {
                for (var W = 0; W < T.length; W++)
                  Ae(T[W], e);
                Object.freeze && Object.freeze(T);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(T, e);
        }
        if (U.call(r, "key")) {
          var F = A(e), P = Object.keys(r).filter(function(xr) {
            return xr !== "key";
          }), ue = P.length > 0 ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!De[F + ue]) {
            var Er = P.length > 0 ? "{" + P.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, F, Er, F), De[F + ue] = !0;
          }
        }
        return e === c ? mr(_) : hr(_), _;
      }
    }
    function yr(e, r, t) {
      return Fe(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Fe(e, r, t, !1);
    }
    var br = gr, Rr = yr;
    G.Fragment = c, G.jsx = br, G.jsxs = Rr;
  })()), G;
}
var We;
function Or() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? Z.exports = jr() : Z.exports = Tr()), Z.exports;
}
var m = Or();
const Ye = (n) => {
  let a;
  const i = /* @__PURE__ */ new Set(), c = (g, R) => {
    const v = typeof g == "function" ? g(a) : g;
    if (!Object.is(v, a)) {
      const E = a;
      a = R ?? (typeof v != "object" || v === null) ? v : Object.assign({}, a, v), i.forEach((k) => k(a, E));
    }
  }, o = () => a, d = { setState: c, getState: o, getInitialState: () => p, subscribe: (g) => (i.add(g), () => i.delete(g)) }, p = a = n(c, o, d);
  return d;
}, Cr = ((n) => n ? Ye(n) : Ye), Mr = (n) => n;
function kr(n, a = Mr) {
  const i = Y.useSyncExternalStore(
    n.subscribe,
    Y.useCallback(() => a(n.getState()), [n, a]),
    Y.useCallback(() => a(n.getInitialState()), [n, a])
  );
  return Y.useDebugValue(i), i;
}
const $e = (n) => {
  const a = Cr(n), i = (c) => kr(a, c);
  return Object.assign(i, a), i;
}, Ar = ((n) => n ? $e(n) : $e), j = 1, O = 40, C = 40, B = 2, Dr = 8e3, J = Ar((n, a) => ({
  grid: [],
  playerPos: new M.Vector2(O / 2, C / 2),
  mousePos: new M.Vector2(O / 2, C / 2),
  initGrid: () => {
    const i = [];
    for (let o = 0; o < C; o++) {
      i[o] = [];
      for (let u = 0; u < O; u++)
        i[o][u] = { x: u, y: o, mine: !1, count: 0, revealed: !1 };
    }
    for (let o = 0; o < 150; o++) {
      const u = Math.floor(Math.random() * O), h = Math.floor(Math.random() * C);
      i[h][u].mine = !0;
    }
    const c = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
      [1, 1]
    ];
    for (let o = 0; o < C; o++)
      for (let u = 0; u < O; u++) {
        if (i[o][u].mine) continue;
        let h = 0;
        for (const [d, p] of c) {
          const g = u + d, R = o + p;
          g >= 0 && g < O && R >= 0 && R < C && i[R][g].mine && h++;
        }
        i[o][u].count = h;
      }
    n({ grid: i });
  },
  setMousePos: (i, c) => {
    const o = Math.max(0, Math.min(O - 1, i)), u = Math.max(0, Math.min(C - 1, c));
    n({ mousePos: new M.Vector2(o, u) });
  },
  updatePlayer: (i) => {
    const { playerPos: c, mousePos: o } = a();
    c.lerp(o, 0.05), a().revealAroundPlayer(), a().hideOldReveals();
  },
  revealAroundPlayer: () => {
    const { grid: i, playerPos: c } = a(), o = Math.round(c.x), u = Math.round(c.y);
    let h = !1;
    const d = Math.max(0, o - Math.ceil(B)), p = Math.min(O, o + Math.ceil(B) + 1), g = Math.max(0, u - Math.ceil(B)), R = Math.min(C, u + Math.ceil(B) + 1);
    for (let v = g; v < R; v++)
      for (let E = d; E < p; E++) {
        if (i[v][E].revealed) continue;
        const k = E - c.x, $ = v - c.y;
        Math.sqrt(k * k + $ * $) <= B && (i[v][E].revealed = !0, i[v][E].revealedAt = Date.now(), h = !0);
      }
    h && n({ grid: [...i] });
  },
  hideOldReveals: () => {
    const { grid: i } = a(), c = Date.now();
    let o = !1;
    for (let u = 0; u < C; u++)
      for (let h = 0; h < O; h++) {
        const d = i[u][h];
        d.revealed && d.revealedAt && c - d.revealedAt > Dr && (d.revealed = !1, d.revealedAt = void 0, o = !0);
      }
    o && n({ grid: [...i] });
  }
}));
function Fr({ position: n, count: a = 20 }) {
  const i = N([]), c = N(null);
  Q(() => {
    i.current = [];
    for (let u = 0; u < a; u++) {
      const h = Math.PI * 2 * u / a, d = 0.5 + Math.random() * 1;
      i.current.push({
        position: n.clone(),
        velocity: new M.Vector3(
          Math.cos(h) * d,
          1.5 + Math.random() * 1,
          // Upward
          Math.sin(h) * d
        ),
        life: 1,
        maxLife: 1
      });
    }
  }, [n, a]), ee((u, h) => {
    if (!c.current || !c.current.geometry) return;
    const d = c.current.geometry, p = d.attributes.position.array, g = d.attributes.size.array;
    let R = !0;
    i.current.forEach((v, E) => {
      if (v.life > 0) {
        R = !1, v.position.add(v.velocity.clone().multiplyScalar(h)), v.velocity.y -= 2 * h, v.life -= h * 0.8, p[E * 3] = v.position.x, p[E * 3 + 1] = v.position.y, p[E * 3 + 2] = v.position.z;
        const k = v.life / v.maxLife;
        g[E] = 0.15 * k;
      } else
        p[E * 3] = 0, p[E * 3 + 1] = -1e3, p[E * 3 + 2] = 0, g[E] = 0;
    }), d.attributes.position.needsUpdate = !0, d.attributes.size.needsUpdate = !0, R && c.current?.parent && c.current.parent.remove(c.current);
  });
  const o = ce(() => {
    const u = new M.BufferGeometry(), h = new Float32Array(a * 3), d = new Float32Array(a);
    return u.setAttribute("position", new M.BufferAttribute(h, 3)), u.setAttribute("size", new M.BufferAttribute(d, 1)), u;
  }, [a]);
  return /* @__PURE__ */ m.jsx("points", { ref: c, geometry: o, children: /* @__PURE__ */ m.jsx(
    "pointsMaterial",
    {
      size: 0.15,
      color: "#ffffff",
      transparent: !0,
      opacity: 0.8,
      sizeAttenuation: !0,
      depthWrite: !1
    }
  ) });
}
function Ir({ cell: n }) {
  const a = N(null), [i, c] = _r(!1), o = N(!1), u = ce(() => {
    const d = new M.MeshStandardMaterial({ color: "#ff4444" }), p = new M.MeshStandardMaterial({ color: "#ffffff" }), g = new M.MeshStandardMaterial({ color: "#333333" });
    return [
      g,
      // x+
      g,
      // x-
      d,
      // y+ (Top - initially visible)
      p,
      // y- (Bottom - becomes visible after flip)
      g,
      // z+
      g
      // z-
    ];
  }, []);
  Q(() => {
    n.revealed && !o.current && n.mine && (o.current = !0, c(!0), setTimeout(() => c(!1), 2e3));
  }, [n.revealed, n.mine]), ee((d, p) => {
    if (!a.current) return;
    const g = n.revealed ? Math.PI : 0;
    a.current.rotation.x = M.MathUtils.lerp(a.current.rotation.x, g, p * 2);
  });
  const h = ce(() => {
    switch (n.count) {
      case 1:
        return "#0000ff";
      // Blue
      case 2:
        return "#008000";
      // Green
      case 3:
        return "#ff0000";
      // Red
      case 4:
        return "#000080";
      // Navy
      case 5:
        return "#800000";
      // Maroon
      case 6:
        return "#008080";
      // Teal
      case 7:
        return "#000000";
      // Black
      case 8:
        return "#808080";
      // Gray
      default:
        return "black";
    }
  }, [n.count]);
  return /* @__PURE__ */ m.jsxs("group", { position: [n.x * j, 0, n.y * j], children: [
    /* @__PURE__ */ m.jsxs(
      "mesh",
      {
        ref: a,
        position: [0, 0, 0],
        material: u,
        castShadow: !0,
        receiveShadow: !0,
        children: [
          /* @__PURE__ */ m.jsx("boxGeometry", { args: [j * 0.95, 0.2, j * 0.95] }),
          n.revealed && /* @__PURE__ */ m.jsx(m.Fragment, { children: n.mine ? /* @__PURE__ */ m.jsxs("mesh", { position: [0, -0.1, 0], children: [
            /* @__PURE__ */ m.jsx("sphereGeometry", { args: [0.25] }),
            /* @__PURE__ */ m.jsx("meshStandardMaterial", { color: "black" })
          ] }) : n.count > 0 && /* @__PURE__ */ m.jsx(
            Pr,
            {
              position: [0, -0.11, 0],
              rotation: [Math.PI / 2, 0, 0],
              fontSize: 0.5,
              color: h,
              anchorX: "center",
              anchorY: "middle",
              fontWeight: "bold",
              children: n.count
            }
          ) })
        ]
      }
    ),
    i && /* @__PURE__ */ m.jsx(
      Fr,
      {
        position: new M.Vector3(0, 0.5, 0),
        count: 15
      }
    )
  ] });
}
function Lr() {
  const n = J((a) => a.grid);
  return /* @__PURE__ */ m.jsx("group", { children: n.map(
    (a, i) => a.map((c, o) => /* @__PURE__ */ m.jsx(Ir, { cell: c }, `${o}-${i}`))
  ) });
}
function Wr() {
  const n = J((i) => i.playerPos), a = N(null);
  return ee(() => {
    a.current && (a.current.position.x = n.x * j, a.current.position.z = n.y * j);
  }), /* @__PURE__ */ m.jsxs("mesh", { ref: a, position: [0, 0.5, 0], children: [
    /* @__PURE__ */ m.jsx("sphereGeometry", { args: [0.3] }),
    /* @__PURE__ */ m.jsx("meshStandardMaterial", { color: "#00ff88", emissive: "#00ff88", emissiveIntensity: 0.5 }),
    /* @__PURE__ */ m.jsx("pointLight", { distance: 5, intensity: 2, color: "#00ff88" })
  ] });
}
function Yr() {
  const n = J((o) => o.setMousePos), a = J((o) => o.updatePlayer), { camera: i } = Sr();
  Q(() => {
    i.position.set(20, 25, 55), i.lookAt(O * j / 2, 0, C * j / 2);
  }, [i]), ee((o, u) => {
    a(u);
  });
  const c = (o) => {
    const u = o.point.x / j, h = o.point.z / j;
    n(u, h);
  };
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ m.jsx("directionalLight", { position: [10, 20, 10], intensity: 1, castShadow: !0 }),
    /* @__PURE__ */ m.jsxs(
      "mesh",
      {
        rotation: [-Math.PI / 2, 0, 0],
        position: [O * j / 2, -0.1, C * j / 2],
        scale: [O * j, C * j, 1],
        onPointerMove: c,
        visible: !1,
        children: [
          /* @__PURE__ */ m.jsx("planeGeometry", {}),
          /* @__PURE__ */ m.jsx("meshBasicMaterial", { color: "red", wireframe: !0 })
        ]
      }
    ),
    /* @__PURE__ */ m.jsx(Lr, {}),
    /* @__PURE__ */ m.jsx(Wr, {})
  ] });
}
function zr() {
  const n = J((a) => a.initGrid);
  return Q(() => {
    n();
  }, [n]), /* @__PURE__ */ m.jsx("div", { style: { width: "100%", height: "100%", background: "#000000", overflow: "hidden", position: "relative" }, children: /* @__PURE__ */ m.jsxs(
    wr,
    {
      gl: { antialias: !0 },
      camera: {
        position: [20, 25, 55],
        fov: 35,
        near: 0.1,
        far: 1e3
      },
      shadows: !0,
      children: [
        /* @__PURE__ */ m.jsx("color", { attach: "background", args: ["#000000"] }),
        /* @__PURE__ */ m.jsx(Yr, {})
      ]
    }
  ) });
}
export {
  zr as MineRunner
};
