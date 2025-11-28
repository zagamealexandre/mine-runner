import M, { useRef as A, useEffect as C, useMemo as G, useState as me } from "react";
import { useFrame as I, useThree as he, Canvas as pe } from "@react-three/fiber";
import * as _ from "three";
import { Text as ve } from "@react-three/drei";
var N = { exports: {} }, w = {};
var H;
function xe() {
  if (H) return w;
  H = 1;
  var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(a, r, s) {
    var c = null;
    if (s !== void 0 && (c = "" + s), r.key !== void 0 && (c = "" + r.key), "key" in r) {
      s = {};
      for (var u in r)
        u !== "key" && (s[u] = r[u]);
    } else s = r;
    return r = s.ref, {
      $$typeof: t,
      type: a,
      key: c,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return w.Fragment = n, w.jsx = o, w.jsxs = o, w;
}
var P = {};
var Z;
function be() {
  return Z || (Z = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === le ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Y:
          return "Fragment";
        case re:
          return "Profiler";
        case te:
          return "StrictMode";
        case ae:
          return "Suspense";
        case ie:
          return "SuspenseList";
        case ue:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case oe:
            return e.displayName || "Context";
          case ne:
            return (e._context.displayName || "Context") + ".Consumer";
          case se:
            var i = e.render;
            return e = e.displayName, e || (e = i.displayName || i.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ce:
            return i = e.displayName || null, i !== null ? i : t(e.type) || "Memo";
          case L:
            i = e._payload, e = e._init;
            try {
              return t(e(i));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function o(e) {
      try {
        n(e);
        var i = !1;
      } catch {
        i = !0;
      }
      if (i) {
        i = console;
        var m = i.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return m.call(
          i,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), n(e);
      }
    }
    function a(e) {
      if (e === Y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === L)
        return "<...>";
      try {
        var i = t(e);
        return i ? "<" + i + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var e = D.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function c(e) {
      if (U.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function u(e, i) {
      function m() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          i
        ));
      }
      m.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: m,
        configurable: !0
      });
    }
    function x() {
      var e = t(this.type);
      return X[e] || (X[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, i, m, p, O, z) {
      var v = m.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: i,
        props: m,
        _owner: p
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, i, m, p, O, z) {
      var v = i.children;
      if (v !== void 0)
        if (p)
          if (fe(v)) {
            for (p = 0; p < v.length; p++)
              f(v[p]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(v);
      if (U.call(i, "key")) {
        v = t(e);
        var g = Object.keys(i).filter(function(de) {
          return de !== "key";
        });
        p = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", J[v + p] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          v,
          g,
          v
        ), J[v + p] = !0);
      }
      if (v = null, m !== void 0 && (o(m), v = "" + m), c(i) && (o(i.key), v = "" + i.key), "key" in i) {
        m = {};
        for (var $ in i)
          $ !== "key" && (m[$] = i[$]);
      } else m = i;
      return v && u(
        m,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), d(
        e,
        v,
        m,
        r(),
        O,
        z
      );
    }
    function f(e) {
      h(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === L && (e._payload.status === "fulfilled" ? h(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function h(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var S = M, j = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), ne = Symbol.for("react.consumer"), oe = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), ae = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), ue = Symbol.for("react.activity"), le = Symbol.for("react.client.reference"), D = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, fe = Array.isArray, F = console.createTask ? console.createTask : function() {
      return null;
    };
    S = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var W, X = {}, q = S.react_stack_bottom_frame.bind(
      S,
      s
    )(), B = F(a(s)), J = {};
    P.Fragment = Y, P.jsx = function(e, i, m) {
      var p = 1e4 > D.recentlyCreatedOwnerStacks++;
      return b(
        e,
        i,
        m,
        !1,
        p ? Error("react-stack-top-frame") : q,
        p ? F(a(e)) : B
      );
    }, P.jsxs = function(e, i, m) {
      var p = 1e4 > D.recentlyCreatedOwnerStacks++;
      return b(
        e,
        i,
        m,
        !0,
        p ? Error("react-stack-top-frame") : q,
        p ? F(a(e)) : B
      );
    };
  })()), P;
}
var Q;
function ye() {
  return Q || (Q = 1, process.env.NODE_ENV === "production" ? N.exports = xe() : N.exports = be()), N.exports;
}
var l = ye();
const K = (t) => {
  let n;
  const o = /* @__PURE__ */ new Set(), a = (d, b) => {
    const f = typeof d == "function" ? d(n) : d;
    if (!Object.is(f, n)) {
      const h = n;
      n = b ?? (typeof f != "object" || f === null) ? f : Object.assign({}, n, f), o.forEach((S) => S(n, h));
    }
  }, r = () => n, u = { setState: a, getState: r, getInitialState: () => x, subscribe: (d) => (o.add(d), () => o.delete(d)) }, x = n = t(a, r, u);
  return u;
}, Ee = ((t) => t ? K(t) : K), Re = (t) => t;
function _e(t, n = Re) {
  const o = M.useSyncExternalStore(
    t.subscribe,
    M.useCallback(() => n(t.getState()), [t, n]),
    M.useCallback(() => n(t.getInitialState()), [t, n])
  );
  return M.useDebugValue(o), o;
}
const ee = (t) => {
  const n = Ee(t), o = (a) => _e(n, a);
  return Object.assign(o, n), o;
}, Se = ((t) => t ? ee(t) : ee), y = 1, E = 40, R = 40, T = 4, ge = 8e3, k = Se((t, n) => ({
  grid: [],
  playerPos: new _.Vector2(E / 2, R / 2),
  mousePos: new _.Vector2(E / 2, R / 2),
  initGrid: () => {
    const o = [];
    for (let r = 0; r < R; r++) {
      o[r] = [];
      for (let s = 0; s < E; s++)
        o[r][s] = { x: s, y: r, mine: !1, count: 0, revealed: !1 };
    }
    for (let r = 0; r < 150; r++) {
      const s = Math.floor(Math.random() * E), c = Math.floor(Math.random() * R);
      o[c][s].mine = !0;
    }
    const a = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
      [1, 1]
    ];
    for (let r = 0; r < R; r++)
      for (let s = 0; s < E; s++) {
        if (o[r][s].mine) continue;
        let c = 0;
        for (const [u, x] of a) {
          const d = s + u, b = r + x;
          d >= 0 && d < E && b >= 0 && b < R && o[b][d].mine && c++;
        }
        o[r][s].count = c;
      }
    t({ grid: o });
  },
  setMousePos: (o, a) => {
    const r = Math.max(0, Math.min(E - 1, o)), s = Math.max(0, Math.min(R - 1, a));
    t({ mousePos: new _.Vector2(r, s) });
  },
  updatePlayer: (o) => {
    const { playerPos: a, mousePos: r } = n();
    a.lerp(r, 0.05), n().revealAroundPlayer(), n().hideOldReveals();
  },
  revealAroundPlayer: () => {
    const { grid: o, playerPos: a } = n(), r = Math.round(a.x), s = Math.round(a.y);
    let c = !1;
    const u = Math.max(0, r - Math.ceil(T)), x = Math.min(E, r + Math.ceil(T) + 1), d = Math.max(0, s - Math.ceil(T)), b = Math.min(R, s + Math.ceil(T) + 1);
    for (let f = d; f < b; f++)
      for (let h = u; h < x; h++) {
        if (o[f][h].revealed) continue;
        const S = h - a.x, j = f - a.y;
        Math.sqrt(S * S + j * j) <= T && (o[f][h].revealed = !0, o[f][h].revealedAt = Date.now(), c = !0);
      }
    c && t({ grid: [...o] });
  },
  hideOldReveals: () => {
    const { grid: o } = n(), a = Date.now();
    let r = !1;
    for (let s = 0; s < R; s++)
      for (let c = 0; c < E; c++) {
        const u = o[s][c];
        u.revealed && u.revealedAt && a - u.revealedAt > ge && (u.revealed = !1, u.revealedAt = void 0, r = !0);
      }
    r && t({ grid: [...o] });
  }
}));
function je({ position: t, count: n = 20 }) {
  const o = A([]), a = A(null);
  C(() => {
    o.current = [];
    for (let s = 0; s < n; s++) {
      const c = Math.PI * 2 * s / n, u = 0.5 + Math.random() * 1;
      o.current.push({
        position: t.clone(),
        velocity: new _.Vector3(
          Math.cos(c) * u,
          1.5 + Math.random() * 1,
          // Upward
          Math.sin(c) * u
        ),
        life: 1,
        maxLife: 1
      });
    }
  }, [t, n]), I((s, c) => {
    if (!a.current || !a.current.geometry) return;
    const u = a.current.geometry, x = u.attributes.position.array, d = u.attributes.size.array;
    let b = !0;
    o.current.forEach((f, h) => {
      if (f.life > 0) {
        b = !1, f.position.add(f.velocity.clone().multiplyScalar(c)), f.velocity.y -= 2 * c, f.life -= c * 0.8, x[h * 3] = f.position.x, x[h * 3 + 1] = f.position.y, x[h * 3 + 2] = f.position.z;
        const S = f.life / f.maxLife;
        d[h] = 0.15 * S;
      } else
        x[h * 3] = 0, x[h * 3 + 1] = -1e3, x[h * 3 + 2] = 0, d[h] = 0;
    }), u.attributes.position.needsUpdate = !0, u.attributes.size.needsUpdate = !0, b && a.current?.parent && a.current.parent.remove(a.current);
  });
  const r = G(() => {
    const s = new _.BufferGeometry(), c = new Float32Array(n * 3), u = new Float32Array(n);
    return s.setAttribute("position", new _.BufferAttribute(c, 3)), s.setAttribute("size", new _.BufferAttribute(u, 1)), s;
  }, [n]);
  return /* @__PURE__ */ l.jsx("points", { ref: a, geometry: r, children: /* @__PURE__ */ l.jsx(
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
function we({ cell: t }) {
  const n = A(null), [o, a] = me(!1), r = A(!1), s = G(() => {
    const u = new _.MeshStandardMaterial({ color: "#ff4444" }), x = new _.MeshStandardMaterial({ color: "#ffffff" }), d = new _.MeshStandardMaterial({ color: "#333333" });
    return [
      d,
      // x+
      d,
      // x-
      u,
      // y+ (Top - initially visible)
      x,
      // y- (Bottom - becomes visible after flip)
      d,
      // z+
      d
      // z-
    ];
  }, []);
  C(() => {
    t.revealed && !r.current && t.mine && (r.current = !0, a(!0), setTimeout(() => a(!1), 2e3));
  }, [t.revealed, t.mine]), I((u, x) => {
    if (!n.current) return;
    const d = t.revealed ? Math.PI : 0;
    n.current.rotation.x = _.MathUtils.lerp(n.current.rotation.x, d, x * 2);
  });
  const c = G(() => {
    switch (t.count) {
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
  }, [t.count]);
  return /* @__PURE__ */ l.jsxs("group", { position: [t.x * y, 0, t.y * y], children: [
    /* @__PURE__ */ l.jsxs(
      "mesh",
      {
        ref: n,
        position: [0, 0, 0],
        material: s,
        castShadow: !0,
        receiveShadow: !0,
        children: [
          /* @__PURE__ */ l.jsx("boxGeometry", { args: [y * 0.95, 0.2, y * 0.95] }),
          t.revealed && /* @__PURE__ */ l.jsx(l.Fragment, { children: t.mine ? /* @__PURE__ */ l.jsxs("mesh", { position: [0, -0.1, 0], children: [
            /* @__PURE__ */ l.jsx("sphereGeometry", { args: [0.25] }),
            /* @__PURE__ */ l.jsx("meshStandardMaterial", { color: "black" })
          ] }) : t.count > 0 && /* @__PURE__ */ l.jsx(
            ve,
            {
              position: [0, -0.11, 0],
              rotation: [Math.PI / 2, 0, 0],
              fontSize: 0.5,
              color: c,
              anchorX: "center",
              anchorY: "middle",
              fontWeight: "bold",
              children: t.count
            }
          ) })
        ]
      }
    ),
    o && /* @__PURE__ */ l.jsx(
      je,
      {
        position: new _.Vector3(0, 0.5, 0),
        count: 15
      }
    )
  ] });
}
function Pe() {
  const t = k((n) => n.grid);
  return /* @__PURE__ */ l.jsx("group", { children: t.map(
    (n, o) => n.map((a, r) => /* @__PURE__ */ l.jsx(we, { cell: a }, `${r}-${o}`))
  ) });
}
function Te() {
  const t = k((o) => o.playerPos), n = A(null);
  return I(() => {
    n.current && (n.current.position.x = t.x * y, n.current.position.z = t.y * y);
  }), /* @__PURE__ */ l.jsxs("mesh", { ref: n, position: [0, 0.5, 0], children: [
    /* @__PURE__ */ l.jsx("sphereGeometry", { args: [0.3] }),
    /* @__PURE__ */ l.jsx("meshStandardMaterial", { color: "#00ff88", emissive: "#00ff88", emissiveIntensity: 0.5 }),
    /* @__PURE__ */ l.jsx("pointLight", { distance: 5, intensity: 2, color: "#00ff88" })
  ] });
}
function Me() {
  const t = k((r) => r.setMousePos), n = k((r) => r.updatePlayer), { camera: o } = he();
  C(() => {
    o.position.set(20, 25, 55), o.lookAt(E * y / 2, 0, R * y / 2);
  }, [o]), I((r, s) => {
    n(s);
  });
  const a = (r) => {
    const s = r.point.x / y, c = r.point.z / y;
    t(s, c);
  };
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx("ambientLight", { intensity: 0.5 }),
    /* @__PURE__ */ l.jsx("directionalLight", { position: [10, 20, 10], intensity: 1, castShadow: !0 }),
    /* @__PURE__ */ l.jsxs(
      "mesh",
      {
        rotation: [-Math.PI / 2, 0, 0],
        position: [E * y / 2, -0.1, R * y / 2],
        scale: [E * y, R * y, 1],
        onPointerMove: a,
        visible: !1,
        children: [
          /* @__PURE__ */ l.jsx("planeGeometry", {}),
          /* @__PURE__ */ l.jsx("meshBasicMaterial", { color: "red", wireframe: !0 })
        ]
      }
    ),
    /* @__PURE__ */ l.jsx(Pe, {}),
    /* @__PURE__ */ l.jsx(Te, {})
  ] });
}
function Ne() {
  const t = k((n) => n.initGrid);
  return C(() => {
    t();
  }, [t]), /* @__PURE__ */ l.jsx("div", { style: { width: "100%", height: "100%", background: "#111", overflow: "hidden", position: "relative" }, children: /* @__PURE__ */ l.jsx(
    pe,
    {
      camera: {
        position: [20, 25, 55],
        fov: 35,
        near: 0.1,
        far: 1e3
      },
      shadows: !0,
      children: /* @__PURE__ */ l.jsx(Me, {})
    }
  ) });
}
export {
  Ne as MineRunner
};
