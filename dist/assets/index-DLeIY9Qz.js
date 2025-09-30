(function () {
  const W = document.createElement("link").relList;
  if (W && W.supports && W.supports("modulepreload")) return;
  for (const H of document.querySelectorAll('link[rel="modulepreload"]')) v(H);
  new MutationObserver((H) => {
    for (const R of H)
      if (R.type === "childList")
        for (const K of R.addedNodes)
          K.tagName === "LINK" && K.rel === "modulepreload" && v(K);
  }).observe(document, { childList: !0, subtree: !0 });
  function X(H) {
    const R = {};
    return (
      H.integrity && (R.integrity = H.integrity),
      H.referrerPolicy && (R.referrerPolicy = H.referrerPolicy),
      H.crossOrigin === "use-credentials"
        ? (R.credentials = "include")
        : H.crossOrigin === "anonymous"
        ? (R.credentials = "omit")
        : (R.credentials = "same-origin"),
      R
    );
  }
  function v(H) {
    if (H.ep) return;
    H.ep = !0;
    const R = X(H);
    fetch(H.href, R);
  }
})();
var Fc = { exports: {} },
  Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fy;
function Rr() {
  if (Fy) return Se;
  Fy = 1;
  var A = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.fragment");
  function X(v, H, R) {
    var K = null;
    if (
      (R !== void 0 && (K = "" + R),
      H.key !== void 0 && (K = "" + H.key),
      "key" in H)
    ) {
      R = {};
      for (var il in H) il !== "key" && (R[il] = H[il]);
    } else R = H;
    return (
      (H = R.ref),
      { $$typeof: A, type: v, key: K, ref: H !== void 0 ? H : null, props: R }
    );
  }
  return (Se.Fragment = W), (Se.jsx = X), (Se.jsxs = X), Se;
}
var Iy;
function Nr() {
  return Iy || ((Iy = 1), (Fc.exports = Rr())), Fc.exports;
}
var x = Nr(),
  Ic = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Py;
function xr() {
  if (Py) return Z;
  Py = 1;
  var A = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.portal"),
    X = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    H = Symbol.for("react.profiler"),
    R = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    il = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    M = Symbol.for("react.lazy"),
    C = Symbol.iterator;
  function ll(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (C && s[C]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var ml = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ml = Object.assign,
    Tl = {};
  function Xl(s, T, _) {
    (this.props = s),
      (this.context = T),
      (this.refs = Tl),
      (this.updater = _ || ml);
  }
  (Xl.prototype.isReactComponent = {}),
    (Xl.prototype.setState = function (s, T) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, T, "setState");
    }),
    (Xl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function da() {}
  da.prototype = Xl.prototype;
  function pt(s, T, _) {
    (this.props = s),
      (this.context = T),
      (this.refs = Tl),
      (this.updater = _ || ml);
  }
  var Nl = (pt.prototype = new da());
  (Nl.constructor = pt), Ml(Nl, Xl.prototype), (Nl.isPureReactComponent = !0);
  var rt = Array.isArray,
    $ = { H: null, A: null, T: null, S: null, V: null },
    Kl = Object.prototype.hasOwnProperty;
  function Jl(s, T, _, p, j, F) {
    return (
      (_ = F.ref),
      { $$typeof: A, type: s, key: T, ref: _ !== void 0 ? _ : null, props: F }
    );
  }
  function wl(s, T) {
    return Jl(s.type, T, void 0, void 0, void 0, s.props);
  }
  function St(s) {
    return typeof s == "object" && s !== null && s.$$typeof === A;
  }
  function ja(s) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (_) {
        return T[_];
      })
    );
  }
  var Ot = /\/+/g;
  function xl(s, T) {
    return typeof s == "object" && s !== null && s.key != null
      ? ja("" + s.key)
      : T.toString(36);
  }
  function ra() {}
  function va(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(ra, ra)
            : ((s.status = "pending"),
              s.then(
                function (T) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = T));
                },
                function (T) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = T));
                }
              )),
          s.status)
        ) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Hl(s, T, _, p, j) {
    var F = typeof s;
    (F === "undefined" || F === "boolean") && (s = null);
    var Q = !1;
    if (s === null) Q = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case A:
            case W:
              Q = !0;
              break;
            case M:
              return (Q = s._init), Hl(Q(s._payload), T, _, p, j);
          }
      }
    if (Q)
      return (
        (j = j(s)),
        (Q = p === "" ? "." + xl(s, 0) : p),
        rt(j)
          ? ((_ = ""),
            Q != null && (_ = Q.replace(Ot, "$&/") + "/"),
            Hl(j, T, _, "", function (Ct) {
              return Ct;
            }))
          : j != null &&
            (St(j) &&
              (j = wl(
                j,
                _ +
                  (j.key == null || (s && s.key === j.key)
                    ? ""
                    : ("" + j.key).replace(Ot, "$&/") + "/") +
                  Q
              )),
            T.push(j)),
        1
      );
    Q = 0;
    var Wl = p === "" ? "." : p + ":";
    if (rt(s))
      for (var ol = 0; ol < s.length; ol++)
        (p = s[ol]), (F = Wl + xl(p, ol)), (Q += Hl(p, T, _, F, j));
    else if (((ol = ll(s)), typeof ol == "function"))
      for (s = ol.call(s), ol = 0; !(p = s.next()).done; )
        (p = p.value), (F = Wl + xl(p, ol++)), (Q += Hl(p, T, _, F, j));
    else if (F === "object") {
      if (typeof s.then == "function") return Hl(va(s), T, _, p, j);
      throw (
        ((T = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return Q;
  }
  function g(s, T, _) {
    if (s == null) return s;
    var p = [],
      j = 0;
    return (
      Hl(s, p, "", "", function (F) {
        return T.call(_, F, j++);
      }),
      p
    );
  }
  function O(s) {
    if (s._status === -1) {
      var T = s._result;
      (T = T()),
        T.then(
          function (_) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = _));
          },
          function (_) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = _));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = T));
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var B =
    typeof reportError == "function"
      ? reportError
      : function (s) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var T = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof s == "object" &&
                s !== null &&
                typeof s.message == "string"
                  ? String(s.message)
                  : String(s),
              error: s,
            });
            if (!window.dispatchEvent(T)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", s);
            return;
          }
          console.error(s);
        };
  function fl() {}
  return (
    (Z.Children = {
      map: g,
      forEach: function (s, T, _) {
        g(
          s,
          function () {
            T.apply(this, arguments);
          },
          _
        );
      },
      count: function (s) {
        var T = 0;
        return (
          g(s, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (s) {
        return (
          g(s, function (T) {
            return T;
          }) || []
        );
      },
      only: function (s) {
        if (!St(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (Z.Component = Xl),
    (Z.Fragment = X),
    (Z.Profiler = H),
    (Z.PureComponent = pt),
    (Z.StrictMode = v),
    (Z.Suspense = U),
    (Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (Z.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (s) {
        return $.H.useMemoCache(s);
      },
    }),
    (Z.cache = function (s) {
      return function () {
        return s.apply(null, arguments);
      };
    }),
    (Z.cloneElement = function (s, T, _) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var p = Ml({}, s.props),
        j = s.key,
        F = void 0;
      if (T != null)
        for (Q in (T.ref !== void 0 && (F = void 0),
        T.key !== void 0 && (j = "" + T.key),
        T))
          !Kl.call(T, Q) ||
            Q === "key" ||
            Q === "__self" ||
            Q === "__source" ||
            (Q === "ref" && T.ref === void 0) ||
            (p[Q] = T[Q]);
      var Q = arguments.length - 2;
      if (Q === 1) p.children = _;
      else if (1 < Q) {
        for (var Wl = Array(Q), ol = 0; ol < Q; ol++)
          Wl[ol] = arguments[ol + 2];
        p.children = Wl;
      }
      return Jl(s.type, j, void 0, void 0, F, p);
    }),
    (Z.createContext = function (s) {
      return (
        (s = {
          $$typeof: K,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: R, _context: s }),
        s
      );
    }),
    (Z.createElement = function (s, T, _) {
      var p,
        j = {},
        F = null;
      if (T != null)
        for (p in (T.key !== void 0 && (F = "" + T.key), T))
          Kl.call(T, p) &&
            p !== "key" &&
            p !== "__self" &&
            p !== "__source" &&
            (j[p] = T[p]);
      var Q = arguments.length - 2;
      if (Q === 1) j.children = _;
      else if (1 < Q) {
        for (var Wl = Array(Q), ol = 0; ol < Q; ol++)
          Wl[ol] = arguments[ol + 2];
        j.children = Wl;
      }
      if (s && s.defaultProps)
        for (p in ((Q = s.defaultProps), Q)) j[p] === void 0 && (j[p] = Q[p]);
      return Jl(s, F, void 0, void 0, null, j);
    }),
    (Z.createRef = function () {
      return { current: null };
    }),
    (Z.forwardRef = function (s) {
      return { $$typeof: il, render: s };
    }),
    (Z.isValidElement = St),
    (Z.lazy = function (s) {
      return { $$typeof: M, _payload: { _status: -1, _result: s }, _init: O };
    }),
    (Z.memo = function (s, T) {
      return { $$typeof: b, type: s, compare: T === void 0 ? null : T };
    }),
    (Z.startTransition = function (s) {
      var T = $.T,
        _ = {};
      $.T = _;
      try {
        var p = s(),
          j = $.S;
        j !== null && j(_, p),
          typeof p == "object" &&
            p !== null &&
            typeof p.then == "function" &&
            p.then(fl, B);
      } catch (F) {
        B(F);
      } finally {
        $.T = T;
      }
    }),
    (Z.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (Z.use = function (s) {
      return $.H.use(s);
    }),
    (Z.useActionState = function (s, T, _) {
      return $.H.useActionState(s, T, _);
    }),
    (Z.useCallback = function (s, T) {
      return $.H.useCallback(s, T);
    }),
    (Z.useContext = function (s) {
      return $.H.useContext(s);
    }),
    (Z.useDebugValue = function () {}),
    (Z.useDeferredValue = function (s, T) {
      return $.H.useDeferredValue(s, T);
    }),
    (Z.useEffect = function (s, T, _) {
      var p = $.H;
      if (typeof _ == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return p.useEffect(s, T);
    }),
    (Z.useId = function () {
      return $.H.useId();
    }),
    (Z.useImperativeHandle = function (s, T, _) {
      return $.H.useImperativeHandle(s, T, _);
    }),
    (Z.useInsertionEffect = function (s, T) {
      return $.H.useInsertionEffect(s, T);
    }),
    (Z.useLayoutEffect = function (s, T) {
      return $.H.useLayoutEffect(s, T);
    }),
    (Z.useMemo = function (s, T) {
      return $.H.useMemo(s, T);
    }),
    (Z.useOptimistic = function (s, T) {
      return $.H.useOptimistic(s, T);
    }),
    (Z.useReducer = function (s, T, _) {
      return $.H.useReducer(s, T, _);
    }),
    (Z.useRef = function (s) {
      return $.H.useRef(s);
    }),
    (Z.useState = function (s) {
      return $.H.useState(s);
    }),
    (Z.useSyncExternalStore = function (s, T, _) {
      return $.H.useSyncExternalStore(s, T, _);
    }),
    (Z.useTransition = function () {
      return $.H.useTransition();
    }),
    (Z.version = "19.1.1"),
    Z
  );
}
var l0;
function ui() {
  return l0 || ((l0 = 1), (Ic.exports = xr())), Ic.exports;
}
var Gl = ui(),
  Pc = { exports: {} },
  ge = {},
  li = { exports: {} },
  ti = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var t0;
function Hr() {
  return (
    t0 ||
      ((t0 = 1),
      (function (A) {
        function W(g, O) {
          var B = g.length;
          g.push(O);
          l: for (; 0 < B; ) {
            var fl = (B - 1) >>> 1,
              s = g[fl];
            if (0 < H(s, O)) (g[fl] = O), (g[B] = s), (B = fl);
            else break l;
          }
        }
        function X(g) {
          return g.length === 0 ? null : g[0];
        }
        function v(g) {
          if (g.length === 0) return null;
          var O = g[0],
            B = g.pop();
          if (B !== O) {
            g[0] = B;
            l: for (var fl = 0, s = g.length, T = s >>> 1; fl < T; ) {
              var _ = 2 * (fl + 1) - 1,
                p = g[_],
                j = _ + 1,
                F = g[j];
              if (0 > H(p, B))
                j < s && 0 > H(F, p)
                  ? ((g[fl] = F), (g[j] = B), (fl = j))
                  : ((g[fl] = p), (g[_] = B), (fl = _));
              else if (j < s && 0 > H(F, B)) (g[fl] = F), (g[j] = B), (fl = j);
              else break l;
            }
          }
          return O;
        }
        function H(g, O) {
          var B = g.sortIndex - O.sortIndex;
          return B !== 0 ? B : g.id - O.id;
        }
        if (
          ((A.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var R = performance;
          A.unstable_now = function () {
            return R.now();
          };
        } else {
          var K = Date,
            il = K.now();
          A.unstable_now = function () {
            return K.now() - il;
          };
        }
        var U = [],
          b = [],
          M = 1,
          C = null,
          ll = 3,
          ml = !1,
          Ml = !1,
          Tl = !1,
          Xl = !1,
          da = typeof setTimeout == "function" ? setTimeout : null,
          pt = typeof clearTimeout == "function" ? clearTimeout : null,
          Nl = typeof setImmediate < "u" ? setImmediate : null;
        function rt(g) {
          for (var O = X(b); O !== null; ) {
            if (O.callback === null) v(b);
            else if (O.startTime <= g)
              v(b), (O.sortIndex = O.expirationTime), W(U, O);
            else break;
            O = X(b);
          }
        }
        function $(g) {
          if (((Tl = !1), rt(g), !Ml))
            if (X(U) !== null) (Ml = !0), Kl || ((Kl = !0), xl());
            else {
              var O = X(b);
              O !== null && Hl($, O.startTime - g);
            }
        }
        var Kl = !1,
          Jl = -1,
          wl = 5,
          St = -1;
        function ja() {
          return Xl ? !0 : !(A.unstable_now() - St < wl);
        }
        function Ot() {
          if (((Xl = !1), Kl)) {
            var g = A.unstable_now();
            St = g;
            var O = !0;
            try {
              l: {
                (Ml = !1), Tl && ((Tl = !1), pt(Jl), (Jl = -1)), (ml = !0);
                var B = ll;
                try {
                  t: {
                    for (
                      rt(g), C = X(U);
                      C !== null && !(C.expirationTime > g && ja());

                    ) {
                      var fl = C.callback;
                      if (typeof fl == "function") {
                        (C.callback = null), (ll = C.priorityLevel);
                        var s = fl(C.expirationTime <= g);
                        if (((g = A.unstable_now()), typeof s == "function")) {
                          (C.callback = s), rt(g), (O = !0);
                          break t;
                        }
                        C === X(U) && v(U), rt(g);
                      } else v(U);
                      C = X(U);
                    }
                    if (C !== null) O = !0;
                    else {
                      var T = X(b);
                      T !== null && Hl($, T.startTime - g), (O = !1);
                    }
                  }
                  break l;
                } finally {
                  (C = null), (ll = B), (ml = !1);
                }
                O = void 0;
              }
            } finally {
              O ? xl() : (Kl = !1);
            }
          }
        }
        var xl;
        if (typeof Nl == "function")
          xl = function () {
            Nl(Ot);
          };
        else if (typeof MessageChannel < "u") {
          var ra = new MessageChannel(),
            va = ra.port2;
          (ra.port1.onmessage = Ot),
            (xl = function () {
              va.postMessage(null);
            });
        } else
          xl = function () {
            da(Ot, 0);
          };
        function Hl(g, O) {
          Jl = da(function () {
            g(A.unstable_now());
          }, O);
        }
        (A.unstable_IdlePriority = 5),
          (A.unstable_ImmediatePriority = 1),
          (A.unstable_LowPriority = 4),
          (A.unstable_NormalPriority = 3),
          (A.unstable_Profiling = null),
          (A.unstable_UserBlockingPriority = 2),
          (A.unstable_cancelCallback = function (g) {
            g.callback = null;
          }),
          (A.unstable_forceFrameRate = function (g) {
            0 > g || 125 < g
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (wl = 0 < g ? Math.floor(1e3 / g) : 5);
          }),
          (A.unstable_getCurrentPriorityLevel = function () {
            return ll;
          }),
          (A.unstable_next = function (g) {
            switch (ll) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = ll;
            }
            var B = ll;
            ll = O;
            try {
              return g();
            } finally {
              ll = B;
            }
          }),
          (A.unstable_requestPaint = function () {
            Xl = !0;
          }),
          (A.unstable_runWithPriority = function (g, O) {
            switch (g) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                g = 3;
            }
            var B = ll;
            ll = g;
            try {
              return O();
            } finally {
              ll = B;
            }
          }),
          (A.unstable_scheduleCallback = function (g, O, B) {
            var fl = A.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? fl + B : fl))
                : (B = fl),
              g)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (s = B + s),
              (g = {
                id: M++,
                callback: O,
                priorityLevel: g,
                startTime: B,
                expirationTime: s,
                sortIndex: -1,
              }),
              B > fl
                ? ((g.sortIndex = B),
                  W(b, g),
                  X(U) === null &&
                    g === X(b) &&
                    (Tl ? (pt(Jl), (Jl = -1)) : (Tl = !0), Hl($, B - fl)))
                : ((g.sortIndex = s),
                  W(U, g),
                  Ml || ml || ((Ml = !0), Kl || ((Kl = !0), xl()))),
              g
            );
          }),
          (A.unstable_shouldYield = ja),
          (A.unstable_wrapCallback = function (g) {
            var O = ll;
            return function () {
              var B = ll;
              ll = O;
              try {
                return g.apply(this, arguments);
              } finally {
                ll = B;
              }
            };
          });
      })(ti)),
    ti
  );
}
var a0;
function jr() {
  return a0 || ((a0 = 1), (li.exports = Hr())), li.exports;
}
var ai = { exports: {} },
  Yl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u0;
function qr() {
  if (u0) return Yl;
  u0 = 1;
  var A = ui();
  function W(U) {
    var b = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        b += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return (
      "Minified React error #" +
      U +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function X() {}
  var v = {
      d: {
        f: X,
        r: function () {
          throw Error(W(522));
        },
        D: X,
        C: X,
        L: X,
        m: X,
        X,
        S: X,
        M: X,
      },
      p: 0,
      findDOMNode: null,
    },
    H = Symbol.for("react.portal");
  function R(U, b, M) {
    var C =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: H,
      key: C == null ? null : "" + C,
      children: U,
      containerInfo: b,
      implementation: M,
    };
  }
  var K = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function il(U, b) {
    if (U === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Yl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
    (Yl.createPortal = function (U, b) {
      var M =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(W(299));
      return R(U, b, null, M);
    }),
    (Yl.flushSync = function (U) {
      var b = K.T,
        M = v.p;
      try {
        if (((K.T = null), (v.p = 2), U)) return U();
      } finally {
        (K.T = b), (v.p = M), v.d.f();
      }
    }),
    (Yl.preconnect = function (U, b) {
      typeof U == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        v.d.C(U, b));
    }),
    (Yl.prefetchDNS = function (U) {
      typeof U == "string" && v.d.D(U);
    }),
    (Yl.preinit = function (U, b) {
      if (typeof U == "string" && b && typeof b.as == "string") {
        var M = b.as,
          C = il(M, b.crossOrigin),
          ll = typeof b.integrity == "string" ? b.integrity : void 0,
          ml = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        M === "style"
          ? v.d.S(U, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: C,
              integrity: ll,
              fetchPriority: ml,
            })
          : M === "script" &&
            v.d.X(U, {
              crossOrigin: C,
              integrity: ll,
              fetchPriority: ml,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Yl.preinitModule = function (U, b) {
      if (typeof U == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var M = il(b.as, b.crossOrigin);
            v.d.M(U, {
              crossOrigin: M,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && v.d.M(U);
    }),
    (Yl.preload = function (U, b) {
      if (
        typeof U == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var M = b.as,
          C = il(M, b.crossOrigin);
        v.d.L(U, M, {
          crossOrigin: C,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (Yl.preloadModule = function (U, b) {
      if (typeof U == "string")
        if (b) {
          var M = il(b.as, b.crossOrigin);
          v.d.m(U, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: M,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else v.d.m(U);
    }),
    (Yl.requestFormReset = function (U) {
      v.d.r(U);
    }),
    (Yl.unstable_batchedUpdates = function (U, b) {
      return U(b);
    }),
    (Yl.useFormState = function (U, b, M) {
      return K.H.useFormState(U, b, M);
    }),
    (Yl.useFormStatus = function () {
      return K.H.useHostTransitionStatus();
    }),
    (Yl.version = "19.1.1"),
    Yl
  );
}
var e0;
function Yr() {
  if (e0) return ai.exports;
  e0 = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (W) {
        console.error(W);
      }
  }
  return A(), (ai.exports = qr()), ai.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var n0;
function Br() {
  if (n0) return ge;
  n0 = 1;
  var A = jr(),
    W = ui(),
    X = Yr();
  function v(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function H(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function R(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function K(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function il(l) {
    if (R(l) !== l) throw Error(v(188));
  }
  function U(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = R(l)), t === null)) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return il(e), l;
          if (n === u) return il(e), t;
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === a) {
            (f = !0), (a = e), (u = n);
            break;
          }
          if (c === u) {
            (f = !0), (u = e), (a = n);
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === a) {
              (f = !0), (a = n), (u = e);
              break;
            }
            if (c === u) {
              (f = !0), (u = n), (a = e);
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(v(189));
        }
      }
      if (a.alternate !== u) throw Error(v(190));
    }
    if (a.tag !== 3) throw Error(v(188));
    return a.stateNode.current === a ? l : t;
  }
  function b(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = b(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var M = Object.assign,
    C = Symbol.for("react.element"),
    ll = Symbol.for("react.transitional.element"),
    ml = Symbol.for("react.portal"),
    Ml = Symbol.for("react.fragment"),
    Tl = Symbol.for("react.strict_mode"),
    Xl = Symbol.for("react.profiler"),
    da = Symbol.for("react.provider"),
    pt = Symbol.for("react.consumer"),
    Nl = Symbol.for("react.context"),
    rt = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    Kl = Symbol.for("react.suspense_list"),
    Jl = Symbol.for("react.memo"),
    wl = Symbol.for("react.lazy"),
    St = Symbol.for("react.activity"),
    ja = Symbol.for("react.memo_cache_sentinel"),
    Ot = Symbol.iterator;
  function xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Ot && l[Ot]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var ra = Symbol.for("react.client.reference");
  function va(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ra ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ml:
        return "Fragment";
      case Xl:
        return "Profiler";
      case Tl:
        return "StrictMode";
      case $:
        return "Suspense";
      case Kl:
        return "SuspenseList";
      case St:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ml:
          return "Portal";
        case Nl:
          return (l.displayName || "Context") + ".Provider";
        case pt:
          return (l._context.displayName || "Context") + ".Consumer";
        case rt:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case Jl:
          return (
            (t = l.displayName || null), t !== null ? t : va(l.type) || "Memo"
          );
        case wl:
          (t = l._payload), (l = l._init);
          try {
            return va(l(t));
          } catch {}
      }
    return null;
  }
  var Hl = Array.isArray,
    g = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    fl = [],
    s = -1;
  function T(l) {
    return { current: l };
  }
  function _(l) {
    0 > s || ((l.current = fl[s]), (fl[s] = null), s--);
  }
  function p(l, t) {
    s++, (fl[s] = l.current), (l.current = t);
  }
  var j = T(null),
    F = T(null),
    Q = T(null),
    Wl = T(null);
  function ol(l, t) {
    switch ((p(Q, t), p(F, l), p(j, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Oy(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = Oy(t)), (l = _y(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    _(j), p(j, l);
  }
  function Ct() {
    _(j), _(F), _(Q);
  }
  function qn(l) {
    l.memoizedState !== null && p(Wl, l);
    var t = j.current,
      a = _y(t, l.type);
    t !== a && (p(F, l), p(j, a));
  }
  function be(l) {
    F.current === l && (_(j), _(F)),
      Wl.current === l && (_(Wl), (de._currentValue = B));
  }
  var Yn = Object.prototype.hasOwnProperty,
    Bn = A.unstable_scheduleCallback,
    Gn = A.unstable_cancelCallback,
    i0 = A.unstable_shouldYield,
    s0 = A.unstable_requestPaint,
    gt = A.unstable_now,
    o0 = A.unstable_getCurrentPriorityLevel,
    ei = A.unstable_ImmediatePriority,
    ni = A.unstable_UserBlockingPriority,
    ze = A.unstable_NormalPriority,
    y0 = A.unstable_LowPriority,
    fi = A.unstable_IdlePriority,
    d0 = A.log,
    r0 = A.unstable_setDisableYieldValue,
    zu = null,
    kl = null;
  function Zt(l) {
    if (
      (typeof d0 == "function" && r0(l),
      kl && typeof kl.setStrictMode == "function")
    )
      try {
        kl.setStrictMode(zu, l);
      } catch {}
  }
  var $l = Math.clz32 ? Math.clz32 : h0,
    v0 = Math.log,
    m0 = Math.LN2;
  function h0(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((v0(l) / m0) | 0)) | 0;
  }
  var Ee = 256,
    Te = 4194304;
  function ma(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ae(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      f = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return (
      c !== 0
        ? ((u = c & ~n),
          u !== 0
            ? (e = ma(u))
            : ((f &= c),
              f !== 0
                ? (e = ma(f))
                : a || ((a = c & ~l), a !== 0 && (e = ma(a)))))
        : ((c = u & ~n),
          c !== 0
            ? (e = ma(c))
            : f !== 0
            ? (e = ma(f))
            : a || ((a = u & ~l), a !== 0 && (e = ma(a)))),
      e === 0
        ? 0
        : t !== 0 &&
          t !== e &&
          (t & n) === 0 &&
          ((n = e & -e),
          (a = t & -t),
          n >= a || (n === 32 && (a & 4194048) !== 0))
        ? t
        : e
    );
  }
  function Eu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function S0(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ci() {
    var l = Ee;
    return (Ee <<= 1), (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function ii() {
    var l = Te;
    return (Te <<= 1), (Te & 62914560) === 0 && (Te = 4194304), l;
  }
  function Xn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Tu(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function g0(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var c = l.entanglements,
      i = l.expirationTimes,
      r = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var S = 31 - $l(a),
        E = 1 << S;
      (c[S] = 0), (i[S] = -1);
      var m = r[S];
      if (m !== null)
        for (r[S] = null, S = 0; S < m.length; S++) {
          var h = m[S];
          h !== null && (h.lane &= -536870913);
        }
      a &= ~E;
    }
    u !== 0 && si(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function si(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - $l(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194090));
  }
  function oi(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - $l(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function Qn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Cn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function yi() {
    var l = O.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Ky(l.type));
  }
  function b0(l, t) {
    var a = O.p;
    try {
      return (O.p = l), t();
    } finally {
      O.p = a;
    }
  }
  var Vt = Math.random().toString(36).slice(2),
    jl = "__reactFiber$" + Vt,
    Ql = "__reactProps$" + Vt,
    qa = "__reactContainer$" + Vt,
    Zn = "__reactEvents$" + Vt,
    z0 = "__reactListeners$" + Vt,
    E0 = "__reactHandles$" + Vt,
    di = "__reactResources$" + Vt,
    Au = "__reactMarker$" + Vt;
  function Vn(l) {
    delete l[jl], delete l[Ql], delete l[Zn], delete l[z0], delete l[E0];
  }
  function Ya(l) {
    var t = l[jl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[qa] || a[jl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Ry(l); l !== null; ) {
            if ((a = l[jl])) return a;
            l = Ry(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Ba(l) {
    if ((l = l[jl] || l[qa])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function pu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Ga(l) {
    var t = l[di];
    return (
      t ||
        (t = l[di] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Al(l) {
    l[Au] = !0;
  }
  var ri = new Set(),
    vi = {};
  function ha(l, t) {
    Xa(l, t), Xa(l + "Capture", t);
  }
  function Xa(l, t) {
    for (vi[l] = t, l = 0; l < t.length; l++) ri.add(t[l]);
  }
  var T0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    mi = {},
    hi = {};
  function A0(l) {
    return Yn.call(hi, l)
      ? !0
      : Yn.call(mi, l)
      ? !1
      : T0.test(l)
      ? (hi[l] = !0)
      : ((mi[l] = !0), !1);
  }
  function pe(l, t, a) {
    if (A0(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Oe(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function _t(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  var Ln, Si;
  function Qa(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (Ln = (t && t[1]) || ""),
          (Si =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ln +
      l +
      Si
    );
  }
  var Kn = !1;
  function Jn(l, t) {
    if (!l || Kn) return "";
    Kn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var E = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(E.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(E, []);
                } catch (h) {
                  var m = h;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (h) {
                  m = h;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (h) {
                m = h;
              }
              (E = l()) &&
                typeof E.catch == "function" &&
                E.catch(function () {});
            }
          } catch (h) {
            if (h && m && typeof h.stack == "string") return [h.stack, m.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        f = n[0],
        c = n[1];
      if (f && c) {
        var i = f.split(`
`),
          r = c.split(`
`);
        for (
          e = u = 0;
          u < i.length && !i[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < r.length && !r[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === i.length || e === r.length)
          for (
            u = i.length - 1, e = r.length - 1;
            1 <= u && 0 <= e && i[u] !== r[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== r[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || i[u] !== r[e])) {
                  var S =
                    `
` + i[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (Kn = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Qa(a) : "";
  }
  function p0(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Qa(l.type);
      case 16:
        return Qa("Lazy");
      case 13:
        return Qa("Suspense");
      case 19:
        return Qa("SuspenseList");
      case 0:
      case 15:
        return Jn(l.type, !1);
      case 11:
        return Jn(l.type.render, !1);
      case 1:
        return Jn(l.type, !0);
      case 31:
        return Qa("Activity");
      default:
        return "";
    }
  }
  function gi(l) {
    try {
      var t = "";
      do (t += p0(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function et(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function bi(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function O0(l) {
    var t = bi(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      u = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var e = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (f) {
            (u = "" + f), n.call(this, f);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (f) {
            u = "" + f;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function _e(l) {
    l._valueTracker || (l._valueTracker = O0(l));
  }
  function zi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = bi(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Me(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var _0 = /[\n"\\]/g;
  function nt(l) {
    return l.replace(_0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function wn(l, t, a, u, e, n, f, c) {
    (l.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.type = f)
        : l.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + et(t))
          : l.value !== "" + et(t) && (l.value = "" + et(t))
        : (f !== "submit" && f !== "reset") || l.removeAttribute("value"),
      t != null
        ? Wn(l, f, et(t))
        : a != null
        ? Wn(l, f, et(a))
        : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + et(c))
        : l.removeAttribute("name");
  }
  function Ei(l, t, a, u, e, n, f, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + et(a) : ""),
        (t = t != null ? "" + et(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = c ? l.checked : !!u),
      (l.defaultChecked = !!u),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (l.name = f);
  }
  function Wn(l, t, a) {
    (t === "number" && Me(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Ca(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + et(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ti(l, t, a) {
    if (
      t != null &&
      ((t = "" + et(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + et(a) : "";
  }
  function Ai(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(v(92));
        if (Hl(u)) {
          if (1 < u.length) throw Error(v(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = et(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u);
  }
  function Za(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var M0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pi(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : u
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || M0.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function Oi(l, t, a) {
    if (t != null && typeof t != "object") throw Error(v(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
            ? (l.cssFloat = "")
            : (l[u] = ""));
      for (var e in t)
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && pi(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && pi(l, n, t[n]);
  }
  function kn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var D0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    U0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function De(l) {
    return U0.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var $n = null;
  function Fn(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Va = null,
    La = null;
  function _i(l) {
    var t = Ba(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ql] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (wn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + nt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Ql] || null;
                if (!e) throw Error(v(90));
                wn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (u = a[t]), u.form === l.form && zi(u);
          }
          break l;
        case "textarea":
          Ti(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && Ca(l, !!a.multiple, t, !1);
      }
    }
  }
  var In = !1;
  function Mi(l, t, a) {
    if (In) return l(t, a);
    In = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((In = !1),
        (Va !== null || La !== null) &&
          (vn(), Va && ((t = Va), (l = La), (La = Va = null), _i(t), l)))
      )
        for (t = 0; t < l.length; t++) _i(l[t]);
    }
  }
  function Ou(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Ql] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(v(231, t, typeof a));
    return a;
  }
  var Mt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Pn = !1;
  if (Mt)
    try {
      var _u = {};
      Object.defineProperty(_u, "passive", {
        get: function () {
          Pn = !0;
        },
      }),
        window.addEventListener("test", _u, _u),
        window.removeEventListener("test", _u, _u);
    } catch {
      Pn = !1;
    }
  var Lt = null,
    lf = null,
    Ue = null;
  function Di() {
    if (Ue) return Ue;
    var l,
      t = lf,
      a = t.length,
      u,
      e = "value" in Lt ? Lt.value : Lt.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var f = a - l;
    for (u = 1; u <= f && t[a - u] === e[n - u]; u++);
    return (Ue = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function Re(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ne() {
    return !0;
  }
  function Ui() {
    return !1;
  }
  function Cl(l) {
    function t(a, u, e, n, f) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = f),
        (this.currentTarget = null);
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ne
          : Ui),
        (this.isPropagationStopped = Ui),
        this
      );
    }
    return (
      M(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ne));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ne));
        },
        persist: function () {},
        isPersistent: Ne,
      }),
      t
    );
  }
  var Sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xe = Cl(Sa),
    Mu = M({}, Sa, { view: 0, detail: 0 }),
    R0 = Cl(Mu),
    tf,
    af,
    Du,
    He = M({}, Mu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ef,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Du &&
              (Du && l.type === "mousemove"
                ? ((tf = l.screenX - Du.screenX), (af = l.screenY - Du.screenY))
                : (af = tf = 0),
              (Du = l)),
            tf);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : af;
      },
    }),
    Ri = Cl(He),
    N0 = M({}, He, { dataTransfer: 0 }),
    x0 = Cl(N0),
    H0 = M({}, Mu, { relatedTarget: 0 }),
    uf = Cl(H0),
    j0 = M({}, Sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    q0 = Cl(j0),
    Y0 = M({}, Sa, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    B0 = Cl(Y0),
    G0 = M({}, Sa, { data: 0 }),
    Ni = Cl(G0),
    X0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Q0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    C0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Z0(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = C0[l])
      ? !!t[l]
      : !1;
  }
  function ef() {
    return Z0;
  }
  var V0 = M({}, Mu, {
      key: function (l) {
        if (l.key) {
          var t = X0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Re(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Q0[l.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ef,
      charCode: function (l) {
        return l.type === "keypress" ? Re(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Re(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    L0 = Cl(V0),
    K0 = M({}, He, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    xi = Cl(K0),
    J0 = M({}, Mu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ef,
    }),
    w0 = Cl(J0),
    W0 = M({}, Sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    k0 = Cl(W0),
    $0 = M({}, He, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    F0 = Cl($0),
    I0 = M({}, Sa, { newState: 0, oldState: 0 }),
    P0 = Cl(I0),
    ld = [9, 13, 27, 32],
    nf = Mt && "CompositionEvent" in window,
    Uu = null;
  Mt && "documentMode" in document && (Uu = document.documentMode);
  var td = Mt && "TextEvent" in window && !Uu,
    Hi = Mt && (!nf || (Uu && 8 < Uu && 11 >= Uu)),
    ji = " ",
    qi = !1;
  function Yi(l, t) {
    switch (l) {
      case "keyup":
        return ld.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bi(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ka = !1;
  function ad(l, t) {
    switch (l) {
      case "compositionend":
        return Bi(t);
      case "keypress":
        return t.which !== 32 ? null : ((qi = !0), ji);
      case "textInput":
        return (l = t.data), l === ji && qi ? null : l;
      default:
        return null;
    }
  }
  function ud(l, t) {
    if (Ka)
      return l === "compositionend" || (!nf && Yi(l, t))
        ? ((l = Di()), (Ue = lf = Lt = null), (Ka = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ed = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Gi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!ed[l.type] : t === "textarea";
  }
  function Xi(l, t, a, u) {
    Va ? (La ? La.push(u) : (La = [u])) : (Va = u),
      (t = zn(t, "onChange")),
      0 < t.length &&
        ((a = new xe("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var Ru = null,
    Nu = null;
  function nd(l) {
    zy(l, 0);
  }
  function je(l) {
    var t = pu(l);
    if (zi(t)) return l;
  }
  function Qi(l, t) {
    if (l === "change") return t;
  }
  var Ci = !1;
  if (Mt) {
    var ff;
    if (Mt) {
      var cf = "oninput" in document;
      if (!cf) {
        var Zi = document.createElement("div");
        Zi.setAttribute("oninput", "return;"),
          (cf = typeof Zi.oninput == "function");
      }
      ff = cf;
    } else ff = !1;
    Ci = ff && (!document.documentMode || 9 < document.documentMode);
  }
  function Vi() {
    Ru && (Ru.detachEvent("onpropertychange", Li), (Nu = Ru = null));
  }
  function Li(l) {
    if (l.propertyName === "value" && je(Nu)) {
      var t = [];
      Xi(t, Nu, l, Fn(l)), Mi(nd, t);
    }
  }
  function fd(l, t, a) {
    l === "focusin"
      ? (Vi(), (Ru = t), (Nu = a), Ru.attachEvent("onpropertychange", Li))
      : l === "focusout" && Vi();
  }
  function cd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return je(Nu);
  }
  function id(l, t) {
    if (l === "click") return je(t);
  }
  function sd(l, t) {
    if (l === "input" || l === "change") return je(t);
  }
  function od(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Fl = typeof Object.is == "function" ? Object.is : od;
  function xu(l, t) {
    if (Fl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Yn.call(t, e) || !Fl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function Ki(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ji(l, t) {
    var a = Ki(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ki(a);
    }
  }
  function wi(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? wi(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Wi(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Me(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Me(l.document);
    }
    return t;
  }
  function sf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var yd = Mt && "documentMode" in document && 11 >= document.documentMode,
    Ja = null,
    of = null,
    Hu = null,
    yf = !1;
  function ki(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    yf ||
      Ja == null ||
      Ja !== Me(u) ||
      ((u = Ja),
      "selectionStart" in u && sf(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Hu && xu(Hu, u)) ||
        ((Hu = u),
        (u = zn(of, "onSelect")),
        0 < u.length &&
          ((t = new xe("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = Ja))));
  }
  function ga(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var wa = {
      animationend: ga("Animation", "AnimationEnd"),
      animationiteration: ga("Animation", "AnimationIteration"),
      animationstart: ga("Animation", "AnimationStart"),
      transitionrun: ga("Transition", "TransitionRun"),
      transitionstart: ga("Transition", "TransitionStart"),
      transitioncancel: ga("Transition", "TransitionCancel"),
      transitionend: ga("Transition", "TransitionEnd"),
    },
    df = {},
    $i = {};
  Mt &&
    (($i = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wa.animationend.animation,
      delete wa.animationiteration.animation,
      delete wa.animationstart.animation),
    "TransitionEvent" in window || delete wa.transitionend.transition);
  function ba(l) {
    if (df[l]) return df[l];
    if (!wa[l]) return l;
    var t = wa[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in $i) return (df[l] = t[a]);
    return l;
  }
  var Fi = ba("animationend"),
    Ii = ba("animationiteration"),
    Pi = ba("animationstart"),
    dd = ba("transitionrun"),
    rd = ba("transitionstart"),
    vd = ba("transitioncancel"),
    ls = ba("transitionend"),
    ts = new Map(),
    rf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  rf.push("scrollEnd");
  function vt(l, t) {
    ts.set(l, t), ha(t, [l]);
  }
  var as = new WeakMap();
  function ft(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = as.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: gi(t) }), as.set(l, t), t);
    }
    return { value: l, source: t, stack: gi(t) };
  }
  var ct = [],
    Wa = 0,
    vf = 0;
  function qe() {
    for (var l = Wa, t = (vf = Wa = 0); t < l; ) {
      var a = ct[t];
      ct[t++] = null;
      var u = ct[t];
      ct[t++] = null;
      var e = ct[t];
      ct[t++] = null;
      var n = ct[t];
      if (((ct[t++] = null), u !== null && e !== null)) {
        var f = u.pending;
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
          (u.pending = e);
      }
      n !== 0 && us(a, e, n);
    }
  }
  function Ye(l, t, a, u) {
    (ct[Wa++] = l),
      (ct[Wa++] = t),
      (ct[Wa++] = a),
      (ct[Wa++] = u),
      (vf |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u);
  }
  function mf(l, t, a, u) {
    return Ye(l, t, a, u), Be(l);
  }
  function ka(l, t) {
    return Ye(l, null, null, t), Be(l);
  }
  function us(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - $l(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Be(l) {
    if (50 < ee) throw ((ee = 0), (Ec = null), Error(v(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var $a = {};
  function md(l, t, a, u) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Il(l, t, a, u) {
    return new md(l, t, a, u);
  }
  function hf(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Dt(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = Il(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function es(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Ge(l, t, a, u, e, n) {
    var f = 0;
    if (((u = l), typeof l == "function")) hf(l) && (f = 1);
    else if (typeof l == "string")
      f = Sr(l, a, j.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case St:
          return (l = Il(31, a, t, e)), (l.elementType = St), (l.lanes = n), l;
        case Ml:
          return za(a.children, e, n, t);
        case Tl:
          (f = 8), (e |= 24);
          break;
        case Xl:
          return (
            (l = Il(12, a, t, e | 2)), (l.elementType = Xl), (l.lanes = n), l
          );
        case $:
          return (l = Il(13, a, t, e)), (l.elementType = $), (l.lanes = n), l;
        case Kl:
          return (l = Il(19, a, t, e)), (l.elementType = Kl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case da:
              case Nl:
                f = 10;
                break l;
              case pt:
                f = 9;
                break l;
              case rt:
                f = 11;
                break l;
              case Jl:
                f = 14;
                break l;
              case wl:
                (f = 16), (u = null);
                break l;
            }
          (f = 29),
            (a = Error(v(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = Il(f, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function za(l, t, a, u) {
    return (l = Il(7, l, u, t)), (l.lanes = a), l;
  }
  function Sf(l, t, a) {
    return (l = Il(6, l, null, t)), (l.lanes = a), l;
  }
  function gf(l, t, a) {
    return (
      (t = Il(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var Fa = [],
    Ia = 0,
    Xe = null,
    Qe = 0,
    it = [],
    st = 0,
    Ea = null,
    Ut = 1,
    Rt = "";
  function Ta(l, t) {
    (Fa[Ia++] = Qe), (Fa[Ia++] = Xe), (Xe = l), (Qe = t);
  }
  function ns(l, t, a) {
    (it[st++] = Ut), (it[st++] = Rt), (it[st++] = Ea), (Ea = l);
    var u = Ut;
    l = Rt;
    var e = 32 - $l(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - $l(t) + e;
    if (30 < n) {
      var f = e - (e % 5);
      (n = (u & ((1 << f) - 1)).toString(32)),
        (u >>= f),
        (e -= f),
        (Ut = (1 << (32 - $l(t) + e)) | (a << e) | u),
        (Rt = n + l);
    } else (Ut = (1 << n) | (a << e) | u), (Rt = l);
  }
  function bf(l) {
    l.return !== null && (Ta(l, 1), ns(l, 1, 0));
  }
  function zf(l) {
    for (; l === Xe; )
      (Xe = Fa[--Ia]), (Fa[Ia] = null), (Qe = Fa[--Ia]), (Fa[Ia] = null);
    for (; l === Ea; )
      (Ea = it[--st]),
        (it[st] = null),
        (Rt = it[--st]),
        (it[st] = null),
        (Ut = it[--st]),
        (it[st] = null);
  }
  var Bl = null,
    rl = null,
    P = !1,
    Aa = null,
    bt = !1,
    Ef = Error(v(519));
  function pa(l) {
    var t = Error(v(418, ""));
    throw (Yu(ft(t, l)), Ef);
  }
  function fs(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[jl] = l), (t[Ql] = u), a)) {
      case "dialog":
        w("cancel", t), w("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        w("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fe.length; a++) w(fe[a], t);
        break;
      case "source":
        w("error", t);
        break;
      case "img":
      case "image":
      case "link":
        w("error", t), w("load", t);
        break;
      case "details":
        w("toggle", t);
        break;
      case "input":
        w("invalid", t),
          Ei(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0
          ),
          _e(t);
        break;
      case "select":
        w("invalid", t);
        break;
      case "textarea":
        w("invalid", t), Ai(t, u.value, u.defaultValue, u.children), _e(t);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      py(t.textContent, a)
        ? (u.popover != null && (w("beforetoggle", t), w("toggle", t)),
          u.onScroll != null && w("scroll", t),
          u.onScrollEnd != null && w("scrollend", t),
          u.onClick != null && (t.onclick = En),
          (t = !0))
        : (t = !1),
      t || pa(l);
  }
  function cs(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function ju(l) {
    if (l !== Bl) return !1;
    if (!P) return cs(l), (P = !0), !1;
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Bc(l.type, l.memoizedProps))),
        (a = !a)),
      a && rl && pa(l),
      cs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                rl = ht(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        rl = null;
      }
    } else
      t === 27
        ? ((t = rl), fa(l.type) ? ((l = Cc), (Cc = null), (rl = l)) : (rl = t))
        : (rl = Bl ? ht(l.stateNode.nextSibling) : null);
    return !0;
  }
  function qu() {
    (rl = Bl = null), (P = !1);
  }
  function is() {
    var l = Aa;
    return (
      l !== null &&
        (Ll === null ? (Ll = l) : Ll.push.apply(Ll, l), (Aa = null)),
      l
    );
  }
  function Yu(l) {
    Aa === null ? (Aa = [l]) : Aa.push(l);
  }
  var Tf = T(null),
    Oa = null,
    Nt = null;
  function Kt(l, t, a) {
    p(Tf, t._currentValue), (t._currentValue = a);
  }
  function xt(l) {
    (l._currentValue = Tf.current), _(Tf);
  }
  function Af(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function pf(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              (n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                Af(n.return, a, l),
                u || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (((f = e.return), f === null)) throw Error(v(341));
        (f.lanes |= a),
          (n = f.alternate),
          n !== null && (n.lanes |= a),
          Af(f, a, l),
          (f = null);
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (((e = f.sibling), e !== null)) {
            (e.return = f.return), (f = e);
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function Bu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(v(387));
        if (((f = f.memoizedProps), f !== null)) {
          var c = e.type;
          Fl(e.pendingProps.value, f.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (e === Wl.current) {
        if (((f = e.alternate), f === null)) throw Error(v(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(de) : (l = [de]));
      }
      e = e.return;
    }
    l !== null && pf(t, l, a, u), (t.flags |= 262144);
  }
  function Ce(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Fl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function _a(l) {
    (Oa = l),
      (Nt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function ql(l) {
    return ss(Oa, l);
  }
  function Ze(l, t) {
    return Oa === null && _a(l), ss(l, t);
  }
  function ss(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Nt === null)) {
      if (l === null) throw Error(v(308));
      (Nt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Nt = Nt.next = t;
    return a;
  }
  var hd =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    Sd = A.unstable_scheduleCallback,
    gd = A.unstable_NormalPriority,
    zl = {
      $$typeof: Nl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Of() {
    return { controller: new hd(), data: new Map(), refCount: 0 };
  }
  function Gu(l) {
    l.refCount--,
      l.refCount === 0 &&
        Sd(gd, function () {
          l.controller.abort();
        });
  }
  var Xu = null,
    _f = 0,
    Pa = 0,
    lu = null;
  function bd(l, t) {
    if (Xu === null) {
      var a = (Xu = []);
      (_f = 0),
        (Pa = Dc()),
        (lu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return _f++, t.then(os, os), t;
  }
  function os() {
    if (--_f === 0 && Xu !== null) {
      lu !== null && (lu.status = "fulfilled");
      var l = Xu;
      (Xu = null), (Pa = 0), (lu = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function zd(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          (u.status = "fulfilled"), (u.value = t);
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        }
      ),
      u
    );
  }
  var ys = g.S;
  g.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      bd(l, t),
      ys !== null && ys(l, t);
  };
  var Ma = T(null);
  function Mf() {
    var l = Ma.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Ve(l, t) {
    t === null ? p(Ma, Ma.current) : p(Ma, t.pool);
  }
  function ds() {
    var l = Mf();
    return l === null ? null : { parent: zl._currentValue, pool: l };
  }
  var Qu = Error(v(460)),
    rs = Error(v(474)),
    Le = Error(v(542)),
    Df = { then: function () {} };
  function vs(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function Ke() {}
  function ms(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Ke, Ke), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), Ss(l), l);
      default:
        if (typeof t.status == "string") t.then(Ke, Ke);
        else {
          if (((l = sl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(v(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "fulfilled"), (e.value = u);
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  (e.status = "rejected"), (e.reason = u);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), Ss(l), l);
        }
        throw ((Cu = t), Qu);
    }
  }
  var Cu = null;
  function hs() {
    if (Cu === null) throw Error(v(459));
    var l = Cu;
    return (Cu = null), l;
  }
  function Ss(l) {
    if (l === Qu || l === Le) throw Error(v(483));
  }
  var Jt = !1;
  function Uf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Rf(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function wt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Wt(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (tl & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Be(l)),
        us(l, null, a),
        t
      );
    }
    return Ye(l, u, t, a), Be(l);
  }
  function Zu(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), oi(l, a);
    }
  }
  function Nf(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (e = n = f) : (n = n.next = f), (a = a.next);
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      (a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var xf = !1;
  function Vu() {
    if (xf) {
      var l = lu;
      if (l !== null) throw l;
    }
  }
  function Lu(l, t, a, u) {
    xf = !1;
    var e = l.updateQueue;
    Jt = !1;
    var n = e.firstBaseUpdate,
      f = e.lastBaseUpdate,
      c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c,
        r = i.next;
      (i.next = null), f === null ? (n = r) : (f.next = r), (f = i);
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (c = S.lastBaseUpdate),
        c !== f &&
          (c === null ? (S.firstBaseUpdate = r) : (c.next = r),
          (S.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var E = e.baseState;
      (f = 0), (S = r = i = null), (c = n);
      do {
        var m = c.lane & -536870913,
          h = m !== c.lane;
        if (h ? (k & m) === m : (u & m) === m) {
          m !== 0 && m === Pa && (xf = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var G = l,
              q = c;
            m = t;
            var nl = a;
            switch (q.tag) {
              case 1:
                if (((G = q.payload), typeof G == "function")) {
                  E = G.call(nl, E, m);
                  break l;
                }
                E = G;
                break l;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = q.payload),
                  (m = typeof G == "function" ? G.call(nl, E, m) : G),
                  m == null)
                )
                  break l;
                E = M({}, E, m);
                break l;
              case 2:
                Jt = !0;
            }
          }
          (m = c.callback),
            m !== null &&
              ((l.flags |= 64),
              h && (l.flags |= 8192),
              (h = e.callbacks),
              h === null ? (e.callbacks = [m]) : h.push(m));
        } else
          (h = {
            lane: m,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            S === null ? ((r = S = h), (i = E)) : (S = S.next = h),
            (f |= m);
        if (((c = c.next), c === null)) {
          if (((c = e.shared.pending), c === null)) break;
          (h = c),
            (c = h.next),
            (h.next = null),
            (e.lastBaseUpdate = h),
            (e.shared.pending = null);
        }
      } while (!0);
      S === null && (i = E),
        (e.baseState = i),
        (e.firstBaseUpdate = r),
        (e.lastBaseUpdate = S),
        n === null && (e.shared.lanes = 0),
        (aa |= f),
        (l.lanes = f),
        (l.memoizedState = E);
    }
  }
  function gs(l, t) {
    if (typeof l != "function") throw Error(v(191, l));
    l.call(t);
  }
  function bs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) gs(a[l], t);
  }
  var tu = T(null),
    Je = T(0);
  function zs(l, t) {
    (l = Xt), p(Je, l), p(tu, t), (Xt = l | t.baseLanes);
  }
  function Hf() {
    p(Je, Xt), p(tu, tu.current);
  }
  function jf() {
    (Xt = Je.current), _(tu), _(Je);
  }
  var kt = 0,
    V = null,
    ul = null,
    gl = null,
    we = !1,
    au = !1,
    Da = !1,
    We = 0,
    Ku = 0,
    uu = null,
    Ed = 0;
  function hl() {
    throw Error(v(321));
  }
  function qf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Fl(l[a], t[a])) return !1;
    return !0;
  }
  function Yf(l, t, a, u, e, n) {
    return (
      (kt = n),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (g.H = l === null || l.memoizedState === null ? uo : eo),
      (Da = !1),
      (n = a(u, e)),
      (Da = !1),
      au && (n = Ts(t, a, u, e)),
      Es(l),
      n
    );
  }
  function Es(l) {
    g.H = ln;
    var t = ul !== null && ul.next !== null;
    if (((kt = 0), (gl = ul = V = null), (we = !1), (Ku = 0), (uu = null), t))
      throw Error(v(300));
    l === null ||
      pl ||
      ((l = l.dependencies), l !== null && Ce(l) && (pl = !0));
  }
  function Ts(l, t, a, u) {
    V = l;
    var e = 0;
    do {
      if ((au && (uu = null), (Ku = 0), (au = !1), 25 <= e))
        throw Error(v(301));
      if (((e += 1), (gl = ul = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (g.H = Dd), (n = t(a, u));
    } while (au);
    return n;
  }
  function Td() {
    var l = g.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Ju(t) : t),
      (l = l.useState()[0]),
      (ul !== null ? ul.memoizedState : null) !== l && (V.flags |= 1024),
      t
    );
  }
  function Bf() {
    var l = We !== 0;
    return (We = 0), l;
  }
  function Gf(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Xf(l) {
    if (we) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      we = !1;
    }
    (kt = 0), (gl = ul = V = null), (au = !1), (Ku = We = 0), (uu = null);
  }
  function Zl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return gl === null ? (V.memoizedState = gl = l) : (gl = gl.next = l), gl;
  }
  function bl() {
    if (ul === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ul.next;
    var t = gl === null ? V.memoizedState : gl.next;
    if (t !== null) (gl = t), (ul = l);
    else {
      if (l === null)
        throw V.alternate === null ? Error(v(467)) : Error(v(310));
      (ul = l),
        (l = {
          memoizedState: ul.memoizedState,
          baseState: ul.baseState,
          baseQueue: ul.baseQueue,
          queue: ul.queue,
          next: null,
        }),
        gl === null ? (V.memoizedState = gl = l) : (gl = gl.next = l);
    }
    return gl;
  }
  function Qf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ju(l) {
    var t = Ku;
    return (
      (Ku += 1),
      uu === null && (uu = []),
      (l = ms(uu, l, t)),
      (t = V),
      (gl === null ? t.memoizedState : gl.next) === null &&
        ((t = t.alternate),
        (g.H = t === null || t.memoizedState === null ? uo : eo)),
      l
    );
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ju(l);
      if (l.$$typeof === Nl) return ql(l);
    }
    throw Error(v(438, String(l)));
  }
  function Cf(l) {
    var t = null,
      a = V.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = V.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Qf()), (V.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = ja;
    return t.index++, a;
  }
  function Ht(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = bl();
    return Zf(t, ul, l);
  }
  function Zf(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        (e.next = n.next), (n.next = f);
      }
      (t.baseQueue = e = n), (u.pending = null);
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var c = (f = null),
        i = null,
        r = t,
        S = !1;
      do {
        var E = r.lane & -536870913;
        if (E !== r.lane ? (k & E) === E : (kt & E) === E) {
          var m = r.revertLane;
          if (m === 0)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: r.action,
                  hasEagerState: r.hasEagerState,
                  eagerState: r.eagerState,
                  next: null,
                }),
              E === Pa && (S = !0);
          else if ((kt & m) === m) {
            (r = r.next), m === Pa && (S = !0);
            continue;
          } else
            (E = {
              lane: 0,
              revertLane: r.revertLane,
              action: r.action,
              hasEagerState: r.hasEagerState,
              eagerState: r.eagerState,
              next: null,
            }),
              i === null ? ((c = i = E), (f = n)) : (i = i.next = E),
              (V.lanes |= m),
              (aa |= m);
          (E = r.action),
            Da && a(n, E),
            (n = r.hasEagerState ? r.eagerState : a(n, E));
        } else
          (m = {
            lane: E,
            revertLane: r.revertLane,
            action: r.action,
            hasEagerState: r.hasEagerState,
            eagerState: r.eagerState,
            next: null,
          }),
            i === null ? ((c = i = m), (f = n)) : (i = i.next = m),
            (V.lanes |= E),
            (aa |= E);
        r = r.next;
      } while (r !== null && r !== t);
      if (
        (i === null ? (f = n) : (i.next = c),
        !Fl(n, l.memoizedState) && ((pl = !0), S && ((a = lu), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = f),
        (l.baseQueue = i),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Vf(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var f = (e = e.next);
      do (n = l(n, f.action)), (f = f.next);
      while (f !== e);
      Fl(n, t.memoizedState) || (pl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function As(l, t, a) {
    var u = V,
      e = bl(),
      n = P;
    if (n) {
      if (a === void 0) throw Error(v(407));
      a = a();
    } else a = t();
    var f = !Fl((ul || e).memoizedState, a);
    f && ((e.memoizedState = a), (pl = !0)), (e = e.queue);
    var c = _s.bind(null, u, e, l);
    if (
      (wu(2048, 8, c, [l]),
      e.getSnapshot !== t || f || (gl !== null && gl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        eu(9, Fe(), Os.bind(null, u, e, a, t), null),
        sl === null)
      )
        throw Error(v(349));
      n || (kt & 124) !== 0 || ps(u, t, a);
    }
    return a;
  }
  function ps(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = V.updateQueue),
      t === null
        ? ((t = Qf()), (V.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function Os(l, t, a, u) {
    (t.value = a), (t.getSnapshot = u), Ms(t) && Ds(l);
  }
  function _s(l, t, a) {
    return a(function () {
      Ms(t) && Ds(l);
    });
  }
  function Ms(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Fl(l, a);
    } catch {
      return !0;
    }
  }
  function Ds(l) {
    var t = ka(l, 2);
    t !== null && ut(t, l, 2);
  }
  function Lf(l) {
    var t = Zl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Da)) {
        Zt(!0);
        try {
          a();
        } finally {
          Zt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ht,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Us(l, t, a, u) {
    return (l.baseState = a), Zf(l, ul, typeof u == "function" ? u : Ht);
  }
  function Ad(l, t, a, u, e) {
    if (Pe(l)) throw Error(v(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          n.listeners.push(f);
        },
      };
      g.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Rs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function Rs(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = g.T,
        f = {};
      g.T = f;
      try {
        var c = a(e, u),
          i = g.S;
        i !== null && i(f, c), Ns(l, t, c);
      } catch (r) {
        Kf(l, t, r);
      } finally {
        g.T = n;
      }
    } else
      try {
        (n = a(e, u)), Ns(l, t, n);
      } catch (r) {
        Kf(l, t, r);
      }
  }
  function Ns(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            xs(l, t, u);
          },
          function (u) {
            return Kf(l, t, u);
          }
        )
      : xs(l, t, a);
  }
  function xs(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      Hs(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Rs(l, a)));
  }
  function Kf(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do (t.status = "rejected"), (t.reason = a), Hs(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function Hs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function js(l, t) {
    return t;
  }
  function qs(l, t) {
    if (P) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var u = V;
          if (P) {
            if (rl) {
              t: {
                for (var e = rl, n = bt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = ht(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (rl = ht(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            pa(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Zl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: js,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = lo.bind(null, V, u)),
      (u.dispatch = a),
      (u = Lf(!1)),
      (n = $f.bind(null, V, !1, u.queue)),
      (u = Zl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = Ad.bind(null, V, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Ys(l) {
    var t = bl();
    return Bs(t, ul, l);
  }
  function Bs(l, t, a) {
    if (
      ((t = Zf(l, t, js)[0]),
      (l = $e(Ht)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Ju(t);
      } catch (f) {
        throw f === Qu ? Le : f;
      }
    else u = t;
    t = bl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((V.flags |= 2048), eu(9, Fe(), pd.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function pd(l, t) {
    l.action = t;
  }
  function Gs(l) {
    var t = bl(),
      a = ul;
    if (a !== null) return Bs(t, a, l);
    bl(), (t = t.memoizedState), (a = bl());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function eu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = Qf()), (V.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function Fe() {
    return { destroy: void 0, resource: void 0 };
  }
  function Xs() {
    return bl().memoizedState;
  }
  function Ie(l, t, a, u) {
    var e = Zl();
    (u = u === void 0 ? null : u),
      (V.flags |= l),
      (e.memoizedState = eu(1 | t, Fe(), a, u));
  }
  function wu(l, t, a, u) {
    var e = bl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    ul !== null && u !== null && qf(u, ul.memoizedState.deps)
      ? (e.memoizedState = eu(t, n, a, u))
      : ((V.flags |= l), (e.memoizedState = eu(1 | t, n, a, u)));
  }
  function Qs(l, t) {
    Ie(8390656, 8, l, t);
  }
  function Cs(l, t) {
    wu(2048, 8, l, t);
  }
  function Zs(l, t) {
    return wu(4, 2, l, t);
  }
  function Vs(l, t) {
    return wu(4, 4, l, t);
  }
  function Ls(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Ks(l, t, a) {
    (a = a != null ? a.concat([l]) : null), wu(4, 4, Ls.bind(null, t, l), a);
  }
  function Jf() {}
  function Js(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && qf(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function ws(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && qf(t, u[1])) return u[0];
    if (((u = l()), Da)) {
      Zt(!0);
      try {
        l();
      } finally {
        Zt(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function wf(l, t, a) {
    return a === void 0 || (kt & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = Fo()), (V.lanes |= l), (aa |= l), a);
  }
  function Ws(l, t, a, u) {
    return Fl(a, t)
      ? a
      : tu.current !== null
      ? ((l = wf(l, a, u)), Fl(l, t) || (pl = !0), l)
      : (kt & 42) === 0
      ? ((pl = !0), (l.memoizedState = a))
      : ((l = Fo()), (V.lanes |= l), (aa |= l), t);
  }
  function ks(l, t, a, u, e) {
    var n = O.p;
    O.p = n !== 0 && 8 > n ? n : 8;
    var f = g.T,
      c = {};
    (g.T = c), $f(l, !1, t, a);
    try {
      var i = e(),
        r = g.S;
      if (
        (r !== null && r(c, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var S = zd(i, u);
        Wu(l, t, S, at(l));
      } else Wu(l, t, u, at(l));
    } catch (E) {
      Wu(l, t, { then: function () {}, status: "rejected", reason: E }, at());
    } finally {
      (O.p = n), (g.T = f);
    }
  }
  function Od() {}
  function Wf(l, t, a, u) {
    if (l.tag !== 5) throw Error(v(476));
    var e = $s(l).queue;
    ks(
      l,
      e,
      t,
      B,
      a === null
        ? Od
        : function () {
            return Fs(l), a(u);
          }
    );
  }
  function $s(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ht,
        lastRenderedState: B,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ht,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Fs(l) {
    var t = $s(l).next.queue;
    Wu(l, t, {}, at());
  }
  function kf() {
    return ql(de);
  }
  function Is() {
    return bl().memoizedState;
  }
  function Ps() {
    return bl().memoizedState;
  }
  function _d(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = at();
          l = wt(a);
          var u = Wt(t, l, a);
          u !== null && (ut(u, t, a), Zu(u, t, a)),
            (t = { cache: Of() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Md(l, t, a) {
    var u = at();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pe(l)
        ? to(t, a)
        : ((a = mf(l, t, a, u)), a !== null && (ut(a, l, u), ao(a, t, u)));
  }
  function lo(l, t, a) {
    var u = at();
    Wu(l, t, a, u);
  }
  function Wu(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Pe(l)) to(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var f = t.lastRenderedState,
            c = n(f, a);
          if (((e.hasEagerState = !0), (e.eagerState = c), Fl(c, f)))
            return Ye(l, t, e, 0), sl === null && qe(), !1;
        } catch {
        } finally {
        }
      if (((a = mf(l, t, e, u)), a !== null))
        return ut(a, l, u), ao(a, t, u), !0;
    }
    return !1;
  }
  function $f(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Dc(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pe(l))
    ) {
      if (t) throw Error(v(479));
    } else (t = mf(l, a, u, 2)), t !== null && ut(t, l, 2);
  }
  function Pe(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function to(l, t) {
    au = we = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function ao(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), oi(l, a);
    }
  }
  var ln = {
      readContext: ql,
      use: ke,
      useCallback: hl,
      useContext: hl,
      useEffect: hl,
      useImperativeHandle: hl,
      useLayoutEffect: hl,
      useInsertionEffect: hl,
      useMemo: hl,
      useReducer: hl,
      useRef: hl,
      useState: hl,
      useDebugValue: hl,
      useDeferredValue: hl,
      useTransition: hl,
      useSyncExternalStore: hl,
      useId: hl,
      useHostTransitionStatus: hl,
      useFormState: hl,
      useActionState: hl,
      useOptimistic: hl,
      useMemoCache: hl,
      useCacheRefresh: hl,
    },
    uo = {
      readContext: ql,
      use: ke,
      useCallback: function (l, t) {
        return (Zl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: ql,
      useEffect: Qs,
      useImperativeHandle: function (l, t, a) {
        (a = a != null ? a.concat([l]) : null),
          Ie(4194308, 4, Ls.bind(null, t, l), a);
      },
      useLayoutEffect: function (l, t) {
        return Ie(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        Ie(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Zl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Da) {
          Zt(!0);
          try {
            l();
          } finally {
            Zt(!1);
          }
        }
        return (a.memoizedState = [u, t]), u;
      },
      useReducer: function (l, t, a) {
        var u = Zl();
        if (a !== void 0) {
          var e = a(t);
          if (Da) {
            Zt(!0);
            try {
              a(t);
            } finally {
              Zt(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = Md.bind(null, V, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Zl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Lf(l);
        var t = l.queue,
          a = lo.bind(null, V, t);
        return (t.dispatch = a), [l.memoizedState, a];
      },
      useDebugValue: Jf,
      useDeferredValue: function (l, t) {
        var a = Zl();
        return wf(a, l, t);
      },
      useTransition: function () {
        var l = Lf(!1);
        return (
          (l = ks.bind(null, V, l.queue, !0, !1)),
          (Zl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = V,
          e = Zl();
        if (P) {
          if (a === void 0) throw Error(v(407));
          a = a();
        } else {
          if (((a = t()), sl === null)) throw Error(v(349));
          (k & 124) !== 0 || ps(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          Qs(_s.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          eu(9, Fe(), Os.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Zl(),
          t = sl.identifierPrefix;
        if (P) {
          var a = Rt,
            u = Ut;
          (a = (u & ~(1 << (32 - $l(u) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = We++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»");
        } else (a = Ed++), (t = "«" + t + "r" + a.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: kf,
      useFormState: qs,
      useActionState: qs,
      useOptimistic: function (l) {
        var t = Zl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a), (t = $f.bind(null, V, !0, a)), (a.dispatch = t), [l, t]
        );
      },
      useMemoCache: Cf,
      useCacheRefresh: function () {
        return (Zl().memoizedState = _d.bind(null, V));
      },
    },
    eo = {
      readContext: ql,
      use: ke,
      useCallback: Js,
      useContext: ql,
      useEffect: Cs,
      useImperativeHandle: Ks,
      useInsertionEffect: Zs,
      useLayoutEffect: Vs,
      useMemo: ws,
      useReducer: $e,
      useRef: Xs,
      useState: function () {
        return $e(Ht);
      },
      useDebugValue: Jf,
      useDeferredValue: function (l, t) {
        var a = bl();
        return Ws(a, ul.memoizedState, l, t);
      },
      useTransition: function () {
        var l = $e(Ht)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Ju(l), t];
      },
      useSyncExternalStore: As,
      useId: Is,
      useHostTransitionStatus: kf,
      useFormState: Ys,
      useActionState: Ys,
      useOptimistic: function (l, t) {
        var a = bl();
        return Us(a, ul, l, t);
      },
      useMemoCache: Cf,
      useCacheRefresh: Ps,
    },
    Dd = {
      readContext: ql,
      use: ke,
      useCallback: Js,
      useContext: ql,
      useEffect: Cs,
      useImperativeHandle: Ks,
      useInsertionEffect: Zs,
      useLayoutEffect: Vs,
      useMemo: ws,
      useReducer: Vf,
      useRef: Xs,
      useState: function () {
        return Vf(Ht);
      },
      useDebugValue: Jf,
      useDeferredValue: function (l, t) {
        var a = bl();
        return ul === null ? wf(a, l, t) : Ws(a, ul.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Vf(Ht)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Ju(l), t];
      },
      useSyncExternalStore: As,
      useId: Is,
      useHostTransitionStatus: kf,
      useFormState: Gs,
      useActionState: Gs,
      useOptimistic: function (l, t) {
        var a = bl();
        return ul !== null
          ? Us(a, ul, l, t)
          : ((a.baseState = l), [l, a.queue.dispatch]);
      },
      useMemoCache: Cf,
      useCacheRefresh: Ps,
    },
    nu = null,
    ku = 0;
  function tn(l) {
    var t = ku;
    return (ku += 1), nu === null && (nu = []), ms(nu, l, t);
  }
  function $u(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function an(l, t) {
    throw t.$$typeof === C
      ? Error(v(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          v(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function no(l) {
    var t = l._init;
    return t(l._payload);
  }
  function fo(l) {
    function t(y, o) {
      if (l) {
        var d = y.deletions;
        d === null ? ((y.deletions = [o]), (y.flags |= 16)) : d.push(o);
      }
    }
    function a(y, o) {
      if (!l) return null;
      for (; o !== null; ) t(y, o), (o = o.sibling);
      return null;
    }
    function u(y) {
      for (var o = new Map(); y !== null; )
        y.key !== null ? o.set(y.key, y) : o.set(y.index, y), (y = y.sibling);
      return o;
    }
    function e(y, o) {
      return (y = Dt(y, o)), (y.index = 0), (y.sibling = null), y;
    }
    function n(y, o, d) {
      return (
        (y.index = d),
        l
          ? ((d = y.alternate),
            d !== null
              ? ((d = d.index), d < o ? ((y.flags |= 67108866), o) : d)
              : ((y.flags |= 67108866), o))
          : ((y.flags |= 1048576), o)
      );
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, o, d, z) {
      return o === null || o.tag !== 6
        ? ((o = Sf(d, y.mode, z)), (o.return = y), o)
        : ((o = e(o, d)), (o.return = y), o);
    }
    function i(y, o, d, z) {
      var D = d.type;
      return D === Ml
        ? S(y, o, d.props.children, z, d.key)
        : o !== null &&
          (o.elementType === D ||
            (typeof D == "object" &&
              D !== null &&
              D.$$typeof === wl &&
              no(D) === o.type))
        ? ((o = e(o, d.props)), $u(o, d), (o.return = y), o)
        : ((o = Ge(d.type, d.key, d.props, null, y.mode, z)),
          $u(o, d),
          (o.return = y),
          o);
    }
    function r(y, o, d, z) {
      return o === null ||
        o.tag !== 4 ||
        o.stateNode.containerInfo !== d.containerInfo ||
        o.stateNode.implementation !== d.implementation
        ? ((o = gf(d, y.mode, z)), (o.return = y), o)
        : ((o = e(o, d.children || [])), (o.return = y), o);
    }
    function S(y, o, d, z, D) {
      return o === null || o.tag !== 7
        ? ((o = za(d, y.mode, z, D)), (o.return = y), o)
        : ((o = e(o, d)), (o.return = y), o);
    }
    function E(y, o, d) {
      if (
        (typeof o == "string" && o !== "") ||
        typeof o == "number" ||
        typeof o == "bigint"
      )
        return (o = Sf("" + o, y.mode, d)), (o.return = y), o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case ll:
            return (
              (d = Ge(o.type, o.key, o.props, null, y.mode, d)),
              $u(d, o),
              (d.return = y),
              d
            );
          case ml:
            return (o = gf(o, y.mode, d)), (o.return = y), o;
          case wl:
            var z = o._init;
            return (o = z(o._payload)), E(y, o, d);
        }
        if (Hl(o) || xl(o))
          return (o = za(o, y.mode, d, null)), (o.return = y), o;
        if (typeof o.then == "function") return E(y, tn(o), d);
        if (o.$$typeof === Nl) return E(y, Ze(y, o), d);
        an(y, o);
      }
      return null;
    }
    function m(y, o, d, z) {
      var D = o !== null ? o.key : null;
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return D !== null ? null : c(y, o, "" + d, z);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case ll:
            return d.key === D ? i(y, o, d, z) : null;
          case ml:
            return d.key === D ? r(y, o, d, z) : null;
          case wl:
            return (D = d._init), (d = D(d._payload)), m(y, o, d, z);
        }
        if (Hl(d) || xl(d)) return D !== null ? null : S(y, o, d, z, null);
        if (typeof d.then == "function") return m(y, o, tn(d), z);
        if (d.$$typeof === Nl) return m(y, o, Ze(y, d), z);
        an(y, d);
      }
      return null;
    }
    function h(y, o, d, z, D) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (y = y.get(d) || null), c(o, y, "" + z, D);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ll:
            return (
              (y = y.get(z.key === null ? d : z.key) || null), i(o, y, z, D)
            );
          case ml:
            return (
              (y = y.get(z.key === null ? d : z.key) || null), r(o, y, z, D)
            );
          case wl:
            var L = z._init;
            return (z = L(z._payload)), h(y, o, d, z, D);
        }
        if (Hl(z) || xl(z)) return (y = y.get(d) || null), S(o, y, z, D, null);
        if (typeof z.then == "function") return h(y, o, d, tn(z), D);
        if (z.$$typeof === Nl) return h(y, o, d, Ze(o, z), D);
        an(o, z);
      }
      return null;
    }
    function G(y, o, d, z) {
      for (
        var D = null, L = null, N = o, Y = (o = 0), _l = null;
        N !== null && Y < d.length;
        Y++
      ) {
        N.index > Y ? ((_l = N), (N = null)) : (_l = N.sibling);
        var I = m(y, N, d[Y], z);
        if (I === null) {
          N === null && (N = _l);
          break;
        }
        l && N && I.alternate === null && t(y, N),
          (o = n(I, o, Y)),
          L === null ? (D = I) : (L.sibling = I),
          (L = I),
          (N = _l);
      }
      if (Y === d.length) return a(y, N), P && Ta(y, Y), D;
      if (N === null) {
        for (; Y < d.length; Y++)
          (N = E(y, d[Y], z)),
            N !== null &&
              ((o = n(N, o, Y)),
              L === null ? (D = N) : (L.sibling = N),
              (L = N));
        return P && Ta(y, Y), D;
      }
      for (N = u(N); Y < d.length; Y++)
        (_l = h(N, y, Y, d[Y], z)),
          _l !== null &&
            (l &&
              _l.alternate !== null &&
              N.delete(_l.key === null ? Y : _l.key),
            (o = n(_l, o, Y)),
            L === null ? (D = _l) : (L.sibling = _l),
            (L = _l));
      return (
        l &&
          N.forEach(function (ya) {
            return t(y, ya);
          }),
        P && Ta(y, Y),
        D
      );
    }
    function q(y, o, d, z) {
      if (d == null) throw Error(v(151));
      for (
        var D = null, L = null, N = o, Y = (o = 0), _l = null, I = d.next();
        N !== null && !I.done;
        Y++, I = d.next()
      ) {
        N.index > Y ? ((_l = N), (N = null)) : (_l = N.sibling);
        var ya = m(y, N, I.value, z);
        if (ya === null) {
          N === null && (N = _l);
          break;
        }
        l && N && ya.alternate === null && t(y, N),
          (o = n(ya, o, Y)),
          L === null ? (D = ya) : (L.sibling = ya),
          (L = ya),
          (N = _l);
      }
      if (I.done) return a(y, N), P && Ta(y, Y), D;
      if (N === null) {
        for (; !I.done; Y++, I = d.next())
          (I = E(y, I.value, z)),
            I !== null &&
              ((o = n(I, o, Y)),
              L === null ? (D = I) : (L.sibling = I),
              (L = I));
        return P && Ta(y, Y), D;
      }
      for (N = u(N); !I.done; Y++, I = d.next())
        (I = h(N, y, Y, I.value, z)),
          I !== null &&
            (l && I.alternate !== null && N.delete(I.key === null ? Y : I.key),
            (o = n(I, o, Y)),
            L === null ? (D = I) : (L.sibling = I),
            (L = I));
      return (
        l &&
          N.forEach(function (Ur) {
            return t(y, Ur);
          }),
        P && Ta(y, Y),
        D
      );
    }
    function nl(y, o, d, z) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Ml &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case ll:
            l: {
              for (var D = d.key; o !== null; ) {
                if (o.key === D) {
                  if (((D = d.type), D === Ml)) {
                    if (o.tag === 7) {
                      a(y, o.sibling),
                        (z = e(o, d.props.children)),
                        (z.return = y),
                        (y = z);
                      break l;
                    }
                  } else if (
                    o.elementType === D ||
                    (typeof D == "object" &&
                      D !== null &&
                      D.$$typeof === wl &&
                      no(D) === o.type)
                  ) {
                    a(y, o.sibling),
                      (z = e(o, d.props)),
                      $u(z, d),
                      (z.return = y),
                      (y = z);
                    break l;
                  }
                  a(y, o);
                  break;
                } else t(y, o);
                o = o.sibling;
              }
              d.type === Ml
                ? ((z = za(d.props.children, y.mode, z, d.key)),
                  (z.return = y),
                  (y = z))
                : ((z = Ge(d.type, d.key, d.props, null, y.mode, z)),
                  $u(z, d),
                  (z.return = y),
                  (y = z));
            }
            return f(y);
          case ml:
            l: {
              for (D = d.key; o !== null; ) {
                if (o.key === D)
                  if (
                    o.tag === 4 &&
                    o.stateNode.containerInfo === d.containerInfo &&
                    o.stateNode.implementation === d.implementation
                  ) {
                    a(y, o.sibling),
                      (z = e(o, d.children || [])),
                      (z.return = y),
                      (y = z);
                    break l;
                  } else {
                    a(y, o);
                    break;
                  }
                else t(y, o);
                o = o.sibling;
              }
              (z = gf(d, y.mode, z)), (z.return = y), (y = z);
            }
            return f(y);
          case wl:
            return (D = d._init), (d = D(d._payload)), nl(y, o, d, z);
        }
        if (Hl(d)) return G(y, o, d, z);
        if (xl(d)) {
          if (((D = xl(d)), typeof D != "function")) throw Error(v(150));
          return (d = D.call(d)), q(y, o, d, z);
        }
        if (typeof d.then == "function") return nl(y, o, tn(d), z);
        if (d.$$typeof === Nl) return nl(y, o, Ze(y, d), z);
        an(y, d);
      }
      return (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
        ? ((d = "" + d),
          o !== null && o.tag === 6
            ? (a(y, o.sibling), (z = e(o, d)), (z.return = y), (y = z))
            : (a(y, o), (z = Sf(d, y.mode, z)), (z.return = y), (y = z)),
          f(y))
        : a(y, o);
    }
    return function (y, o, d, z) {
      try {
        ku = 0;
        var D = nl(y, o, d, z);
        return (nu = null), D;
      } catch (N) {
        if (N === Qu || N === Le) throw N;
        var L = Il(29, N, null, y.mode);
        return (L.lanes = z), (L.return = y), L;
      } finally {
      }
    };
  }
  var fu = fo(!0),
    co = fo(!1),
    ot = T(null),
    zt = null;
  function $t(l) {
    var t = l.alternate;
    p(El, El.current & 1),
      p(ot, l),
      zt === null &&
        (t === null || tu.current !== null || t.memoizedState !== null) &&
        (zt = l);
  }
  function io(l) {
    if (l.tag === 22) {
      if ((p(El, El.current), p(ot, l), zt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (zt = l);
      }
    } else Ft();
  }
  function Ft() {
    p(El, El.current), p(ot, ot.current);
  }
  function jt(l) {
    _(ot), zt === l && (zt = null), _(El);
  }
  var El = T(0);
  function un(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Qc(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Ff(l, t, a, u) {
    (t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : M({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var If = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = at(),
        e = wt(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = Wt(l, e, u)),
        t !== null && (ut(t, l, u), Zu(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = at(),
        e = wt(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = Wt(l, e, u)),
        t !== null && (ut(t, l, u), Zu(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = at(),
        u = wt(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Wt(l, u, a)),
        t !== null && (ut(t, l, a), Zu(t, l, a));
    },
  };
  function so(l, t, a, u, e, n, f) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !xu(a, u) || !xu(e, n)
        : !0
    );
  }
  function oo(l, t, a, u) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && If.enqueueReplaceState(t, t.state, null);
  }
  function Ua(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = M({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  var en =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function yo(l) {
    en(l);
  }
  function ro(l) {
    console.error(l);
  }
  function vo(l) {
    en(l);
  }
  function nn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function mo(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Pf(l, t, a) {
    return (
      (a = wt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        nn(l, t);
      }),
      a
    );
  }
  function ho(l) {
    return (l = wt(l)), (l.tag = 3), l;
  }
  function So(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          mo(t, a, u);
        });
    }
    var f = a.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (l.callback = function () {
        mo(t, a, u),
          typeof e != "function" &&
            (ua === null ? (ua = new Set([this])) : ua.add(this));
        var c = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function Ud(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Bu(t, a, e, !0),
        (a = ot.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              zt === null ? Ac() : a.alternate === null && vl === 0 && (vl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === Df
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Oc(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === Df
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Oc(l, u, e)),
              !1
            );
        }
        throw Error(v(435, a.tag));
      }
      return Oc(l, u, e), Ac(), !1;
    }
    if (P)
      return (
        (t = ot.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Ef && ((l = Error(v(422), { cause: u })), Yu(ft(l, a))))
          : (u !== Ef && ((t = Error(v(423), { cause: u })), Yu(ft(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = ft(u, a)),
            (e = Pf(l.stateNode, u, e)),
            Nf(l, e),
            vl !== 4 && (vl = 2)),
        !1
      );
    var n = Error(v(520), { cause: u });
    if (
      ((n = ft(n, a)),
      ue === null ? (ue = [n]) : ue.push(n),
      vl !== 4 && (vl = 2),
      t === null)
    )
      return !0;
    (u = ft(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = Pf(a.stateNode, u, l)),
            Nf(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ua === null || !ua.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = ho(e)),
              So(e, l, a, u),
              Nf(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var go = Error(v(461)),
    pl = !1;
  function Dl(l, t, a, u) {
    t.child = l === null ? co(t, null, a, u) : fu(t, l.child, a, u);
  }
  function bo(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var c in u) c !== "ref" && (f[c] = u[c]);
    } else f = u;
    return (
      _a(t),
      (u = Yf(l, t, a, f, n, e)),
      (c = Bf()),
      l !== null && !pl
        ? (Gf(l, t, e), qt(l, t, e))
        : (P && c && bf(t), (t.flags |= 1), Dl(l, t, u, e), t.child)
    );
  }
  function zo(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !hf(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Eo(l, t, n, u, e))
        : ((l = Ge(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !cc(l, e))) {
      var f = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : xu), a(f, u) && l.ref === t.ref)
      )
        return qt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Dt(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Eo(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (xu(n, u) && l.ref === t.ref)
        if (((pl = !1), (t.pendingProps = u = n), cc(l, e)))
          (l.flags & 131072) !== 0 && (pl = !0);
        else return (t.lanes = l.lanes), qt(l, t, e);
    }
    return lc(l, t, a, u, e);
  }
  function To(l, t, a) {
    var u = t.pendingProps,
      e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((u = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, n = 0; e !== null; )
            (n = n | e.lanes | e.childLanes), (e = e.sibling);
          t.childLanes = n & ~u;
        } else (t.childLanes = 0), (t.child = null);
        return Ao(l, t, u, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ve(t, n !== null ? n.cachePool : null),
          n !== null ? zs(t, n) : Hf(),
          io(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Ao(l, t, n !== null ? n.baseLanes | a : a, a)
        );
    } else
      n !== null
        ? (Ve(t, n.cachePool), zs(t, n), Ft(), (t.memoizedState = null))
        : (l !== null && Ve(t, null), Hf(), Ft());
    return Dl(l, t, e, a), t.child;
  }
  function Ao(l, t, a, u) {
    var e = Mf();
    return (
      (e = e === null ? null : { parent: zl._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: a, cachePool: e }),
      l !== null && Ve(t, null),
      Hf(),
      io(t),
      l !== null && Bu(l, t, u, !0),
      null
    );
  }
  function fn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(v(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function lc(l, t, a, u, e) {
    return (
      _a(t),
      (a = Yf(l, t, a, u, void 0, e)),
      (u = Bf()),
      l !== null && !pl
        ? (Gf(l, t, e), qt(l, t, e))
        : (P && u && bf(t), (t.flags |= 1), Dl(l, t, a, e), t.child)
    );
  }
  function po(l, t, a, u, e, n) {
    return (
      _a(t),
      (t.updateQueue = null),
      (a = Ts(t, u, a, e)),
      Es(l),
      (u = Bf()),
      l !== null && !pl
        ? (Gf(l, t, n), qt(l, t, n))
        : (P && u && bf(t), (t.flags |= 1), Dl(l, t, a, n), t.child)
    );
  }
  function Oo(l, t, a, u, e) {
    if ((_a(t), t.stateNode === null)) {
      var n = $a,
        f = a.contextType;
      typeof f == "object" && f !== null && (n = ql(f)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = If),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Uf(t),
        (f = a.contextType),
        (n.context = typeof f == "object" && f !== null ? ql(f) : $a),
        (n.state = t.memoizedState),
        (f = a.getDerivedStateFromProps),
        typeof f == "function" && (Ff(t, a, f, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((f = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          f !== n.state && If.enqueueReplaceState(n, n.state, null),
          Lu(t, u, n, e),
          Vu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0);
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        i = Ua(a, c);
      n.props = i;
      var r = n.context,
        S = a.contextType;
      (f = $a), typeof S == "object" && S !== null && (f = ql(S));
      var E = a.getDerivedStateFromProps;
      (S =
        typeof E == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || r !== f) && oo(t, n, u, f)),
        (Jt = !1);
      var m = t.memoizedState;
      (n.state = m),
        Lu(t, u, n, e),
        Vu(),
        (r = t.memoizedState),
        c || m !== r || Jt
          ? (typeof E == "function" && (Ff(t, a, E, u), (r = t.memoizedState)),
            (i = Jt || so(t, a, i, u, m, r, f))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = r)),
            (n.props = u),
            (n.state = r),
            (n.context = f),
            (u = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        Rf(l, t),
        (f = t.memoizedProps),
        (S = Ua(a, f)),
        (n.props = S),
        (E = t.pendingProps),
        (m = n.context),
        (r = a.contextType),
        (i = $a),
        typeof r == "object" && r !== null && (i = ql(r)),
        (c = a.getDerivedStateFromProps),
        (r =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f !== E || m !== i) && oo(t, n, u, i)),
        (Jt = !1),
        (m = t.memoizedState),
        (n.state = m),
        Lu(t, u, n, e),
        Vu();
      var h = t.memoizedState;
      f !== E ||
      m !== h ||
      Jt ||
      (l !== null && l.dependencies !== null && Ce(l.dependencies))
        ? (typeof c == "function" && (Ff(t, a, c, u), (h = t.memoizedState)),
          (S =
            Jt ||
            so(t, a, S, u, m, h, i) ||
            (l !== null && l.dependencies !== null && Ce(l.dependencies)))
            ? (r ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, h, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, h, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (f === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (f === l.memoizedProps && m === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = h)),
          (n.props = u),
          (n.state = h),
          (n.context = i),
          (u = S))
        : (typeof n.componentDidUpdate != "function" ||
            (f === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (f === l.memoizedProps && m === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      fn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = fu(t, l.child, null, e)),
              (t.child = fu(t, null, a, e)))
            : Dl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = qt(l, t, e)),
      l
    );
  }
  function _o(l, t, a, u) {
    return qu(), (t.flags |= 256), Dl(l, t, a, u), t.child;
  }
  var tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ac(l) {
    return { baseLanes: l, cachePool: ds() };
  }
  function uc(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= yt), l;
  }
  function Mo(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      f;
    if (
      ((f = n) ||
        (f =
          l !== null && l.memoizedState === null ? !1 : (El.current & 2) !== 0),
      f && ((e = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (P) {
        if ((e ? $t(t) : Ft(), P)) {
          var c = rl,
            i;
          if ((i = c)) {
            l: {
              for (i = c, c = bt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (((i = ht(i.nextSibling)), i === null)) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null
              ? ((t.memoizedState = {
                  dehydrated: c,
                  treeContext: Ea !== null ? { id: Ut, overflow: Rt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = Il(18, null, null, 0)),
                (i.stateNode = c),
                (i.return = t),
                (t.child = i),
                (Bl = t),
                (rl = null),
                (i = !0))
              : (i = !1);
          }
          i || pa(t);
        }
        if (
          ((c = t.memoizedState),
          c !== null && ((c = c.dehydrated), c !== null))
        )
          return Qc(c) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        jt(t);
      }
      return (
        (c = u.children),
        (u = u.fallback),
        e
          ? (Ft(),
            (e = t.mode),
            (c = cn({ mode: "hidden", children: c }, e)),
            (u = za(u, e, a, null)),
            (c.return = t),
            (u.return = t),
            (c.sibling = u),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = ac(a)),
            (e.childLanes = uc(l, f, a)),
            (t.memoizedState = tc),
            u)
          : ($t(t), ec(t, c))
      );
    }
    if (
      ((i = l.memoizedState), i !== null && ((c = i.dehydrated), c !== null))
    ) {
      if (n)
        t.flags & 256
          ? ($t(t), (t.flags &= -257), (t = nc(l, t, a)))
          : t.memoizedState !== null
          ? (Ft(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (Ft(),
            (e = u.fallback),
            (c = t.mode),
            (u = cn({ mode: "visible", children: u.children }, c)),
            (e = za(e, c, a, null)),
            (e.flags |= 2),
            (u.return = t),
            (e.return = t),
            (u.sibling = e),
            (t.child = u),
            fu(t, l.child, null, a),
            (u = t.child),
            (u.memoizedState = ac(a)),
            (u.childLanes = uc(l, f, a)),
            (t.memoizedState = tc),
            (t = e));
      else if (($t(t), Qc(c))) {
        if (((f = c.nextSibling && c.nextSibling.dataset), f)) var r = f.dgst;
        (f = r),
          (u = Error(v(419))),
          (u.stack = ""),
          (u.digest = f),
          Yu({ value: u, source: null, stack: null }),
          (t = nc(l, t, a));
      } else if (
        (pl || Bu(l, t, a, !1), (f = (a & l.childLanes) !== 0), pl || f)
      ) {
        if (
          ((f = sl),
          f !== null &&
            ((u = a & -a),
            (u = (u & 42) !== 0 ? 1 : Qn(u)),
            (u = (u & (f.suspendedLanes | a)) !== 0 ? 0 : u),
            u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), ka(l, u), ut(f, l, u), go);
        c.data === "$?" || Ac(), (t = nc(l, t, a));
      } else
        c.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (rl = ht(c.nextSibling)),
            (Bl = t),
            (P = !0),
            (Aa = null),
            (bt = !1),
            l !== null &&
              ((it[st++] = Ut),
              (it[st++] = Rt),
              (it[st++] = Ea),
              (Ut = l.id),
              (Rt = l.overflow),
              (Ea = t)),
            (t = ec(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (Ft(),
        (e = u.fallback),
        (c = t.mode),
        (i = l.child),
        (r = i.sibling),
        (u = Dt(i, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = i.subtreeFlags & 65011712),
        r !== null ? (e = Dt(r, e)) : ((e = za(e, c, a, null)), (e.flags |= 2)),
        (e.return = t),
        (u.return = t),
        (u.sibling = e),
        (t.child = u),
        (u = e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = ac(a))
          : ((i = c.cachePool),
            i !== null
              ? ((r = zl._currentValue),
                (i = i.parent !== r ? { parent: r, pool: r } : i))
              : (i = ds()),
            (c = { baseLanes: c.baseLanes | a, cachePool: i })),
        (e.memoizedState = c),
        (e.childLanes = uc(l, f, a)),
        (t.memoizedState = tc),
        u)
      : ($t(t),
        (a = l.child),
        (l = a.sibling),
        (a = Dt(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function ec(l, t) {
    return (
      (t = cn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function cn(l, t) {
    return (
      (l = Il(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function nc(l, t, a) {
    return (
      fu(t, l.child, null, a),
      (l = ec(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Do(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Af(l.return, t, a);
  }
  function fc(l, t, a, u, e) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = u),
        (n.tail = a),
        (n.tailMode = e));
  }
  function Uo(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    if ((Dl(l, t, u.children, a), (u = El.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Do(l, a, t);
          else if (l.tag === 19) Do(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      u &= 1;
    }
    switch ((p(El, u), e)) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && un(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          fc(t, !1, e, a, n);
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && un(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        fc(t, !0, a, null, n);
        break;
      case "together":
        fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function qt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (aa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Bu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(v(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Dt(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = Dt(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function cc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Ce(l)));
  }
  function Rd(l, t, a) {
    switch (t.tag) {
      case 3:
        ol(t, t.stateNode.containerInfo),
          Kt(t, zl, l.memoizedState.cache),
          qu();
        break;
      case 27:
      case 5:
        qn(t);
        break;
      case 4:
        ol(t, t.stateNode.containerInfo);
        break;
      case 10:
        Kt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? ($t(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? Mo(l, t, a)
            : ($t(t), (l = qt(l, t, a)), l !== null ? l.sibling : null);
        $t(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (Bu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Uo(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          p(El, El.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), To(l, t, a);
      case 24:
        Kt(t, zl, l.memoizedState.cache);
    }
    return qt(l, t, a);
  }
  function Ro(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) pl = !0;
      else {
        if (!cc(l, a) && (t.flags & 128) === 0) return (pl = !1), Rd(l, t, a);
        pl = (l.flags & 131072) !== 0;
      }
    else (pl = !1), P && (t.flags & 1048576) !== 0 && ns(t, Qe, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType,
            e = u._init;
          if (((u = e(u._payload)), (t.type = u), typeof u == "function"))
            hf(u)
              ? ((l = Ua(u, l)), (t.tag = 1), (t = Oo(null, t, u, l, a)))
              : ((t.tag = 0), (t = lc(null, t, u, l, a)));
          else {
            if (u != null) {
              if (((e = u.$$typeof), e === rt)) {
                (t.tag = 11), (t = bo(null, t, u, l, a));
                break l;
              } else if (e === Jl) {
                (t.tag = 14), (t = zo(null, t, u, l, a));
                break l;
              }
            }
            throw ((t = va(u) || u), Error(v(306, t, "")));
          }
        }
        return t;
      case 0:
        return lc(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = Ua(u, t.pendingProps)), Oo(l, t, u, e, a);
      case 3:
        l: {
          if ((ol(t, t.stateNode.containerInfo), l === null))
            throw Error(v(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), Rf(l, t), Lu(t, u, null, a);
          var f = t.memoizedState;
          if (
            ((u = f.cache),
            Kt(t, zl, u),
            u !== n.cache && pf(t, [zl], a, !0),
            Vu(),
            (u = f.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = _o(l, t, u, a);
              break l;
            } else if (u !== e) {
              (e = ft(Error(v(424)), t)), Yu(e), (t = _o(l, t, u, a));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                rl = ht(l.firstChild),
                  Bl = t,
                  P = !0,
                  Aa = null,
                  bt = !0,
                  a = co(t, null, u, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((qu(), u === e)) {
              t = qt(l, t, a);
              break l;
            }
            Dl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          fn(l, t),
          l === null
            ? (a = jy(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : P ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Tn(Q.current).createElement(a)),
                (u[jl] = t),
                (u[Ql] = l),
                Rl(u, a, l),
                Al(u),
                (t.stateNode = u))
            : (t.memoizedState = jy(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          qn(t),
          l === null &&
            P &&
            ((u = t.stateNode = Ny(t.type, t.pendingProps, Q.current)),
            (Bl = t),
            (bt = !0),
            (e = rl),
            fa(t.type) ? ((Cc = e), (rl = ht(u.firstChild))) : (rl = e)),
          Dl(l, t, t.pendingProps.children, a),
          fn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((e = u = rl) &&
              ((u = er(u, t.type, t.pendingProps, bt)),
              u !== null
                ? ((t.stateNode = u),
                  (Bl = t),
                  (rl = ht(u.firstChild)),
                  (bt = !1),
                  (e = !0))
                : (e = !1)),
            e || pa(t)),
          qn(t),
          (e = t.type),
          (n = t.pendingProps),
          (f = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Bc(e, n) ? (u = null) : f !== null && Bc(e, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Yf(l, t, Td, null, null, a)), (de._currentValue = e)),
          fn(l, t),
          Dl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = a = rl) &&
              ((a = nr(a, t.pendingProps, bt)),
              a !== null
                ? ((t.stateNode = a), (Bl = t), (rl = null), (l = !0))
                : (l = !1)),
            l || pa(t)),
          null
        );
      case 13:
        return Mo(l, t, a);
      case 4:
        return (
          ol(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = fu(t, null, u, a)) : Dl(l, t, u, a),
          t.child
        );
      case 11:
        return bo(l, t, t.type, t.pendingProps, a);
      case 7:
        return Dl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Dl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Dl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          Kt(t, t.type, u.value),
          Dl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          _a(t),
          (e = ql(e)),
          (u = u(e)),
          (t.flags |= 1),
          Dl(l, t, u, a),
          t.child
        );
      case 14:
        return zo(l, t, t.type, t.pendingProps, a);
      case 15:
        return Eo(l, t, t.type, t.pendingProps, a);
      case 19:
        return Uo(l, t, a);
      case 31:
        return (
          (u = t.pendingProps),
          (a = t.mode),
          (u = { mode: u.mode, children: u.children }),
          l === null
            ? ((a = cn(u, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Dt(l.child, u)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return To(l, t, a);
      case 24:
        return (
          _a(t),
          (u = ql(zl)),
          l === null
            ? ((e = Mf()),
              e === null &&
                ((e = sl),
                (n = Of()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              Uf(t),
              Kt(t, zl, e))
            : ((l.lanes & a) !== 0 && (Rf(l, t), Lu(t, null, null, a), Vu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  Kt(t, zl, u))
                : ((u = n.cache),
                  Kt(t, zl, u),
                  u !== e.cache && pf(t, [zl], a, !0))),
          Dl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  function Yt(l) {
    l.flags |= 4;
  }
  function No(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Xy(t))) {
      if (
        ((t = ot.current),
        t !== null &&
          ((k & 4194048) === k
            ? zt !== null
            : ((k & 62914560) !== k && (k & 536870912) === 0) || t !== zt))
      )
        throw ((Cu = Df), rs);
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? ii() : 536870912), (l.lanes |= t), (ou |= t));
  }
  function Fu(l, t) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), (a = a.sibling);
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling);
    else
      for (e = l.child; e !== null; )
        (a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling);
    return (l.subtreeFlags |= u), (l.childLanes = a), t;
  }
  function Nd(l, t, a) {
    var u = t.pendingProps;
    switch ((zf(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          xt(zl),
          Ct(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (ju(t)
              ? Yt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), is())),
          dl(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Yt(t),
              a !== null ? (dl(t), No(t, a)) : (dl(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (Yt(t), dl(t), No(t, a))
              : (dl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== u && Yt(t), dl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        be(t), (a = Q.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== u && Yt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(v(166));
            return dl(t), null;
          }
          (l = j.current),
            ju(t) ? fs(t) : ((l = Ny(e, u, a)), (t.stateNode = l), Yt(t));
        }
        return dl(t), null;
      case 5:
        if ((be(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Yt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(v(166));
            return dl(t), null;
          }
          if (((l = j.current), ju(t))) fs(t);
          else {
            switch (((e = Tn(Q.current)), l)) {
              case 1:
                l = e.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = e.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = e.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (l = e.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof u.is == "string"
                        ? e.createElement("select", { is: u.is })
                        : e.createElement("select")),
                      u.multiple
                        ? (l.multiple = !0)
                        : u.size && (l.size = u.size);
                    break;
                  default:
                    l =
                      typeof u.is == "string"
                        ? e.createElement(a, { is: u.is })
                        : e.createElement(a);
                }
            }
            (l[jl] = t), (l[Ql] = u);
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6) l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break l;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
            t.stateNode = l;
            l: switch ((Rl(l, a, u), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!u.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Yt(t);
          }
        }
        return dl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Yt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(v(166));
          if (((l = Q.current), ju(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Bl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[jl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                py(l.nodeValue, a)
              )),
              l || pa(t);
          } else (l = Tn(l).createTextNode(u)), (l[jl] = t), (t.stateNode = l);
        }
        return dl(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = ju(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(v(317));
              e[jl] = t;
            } else
              qu(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            dl(t), (e = !1);
          } else
            (e = is()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        if ((jt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = u !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (u = t.child),
            (e = null),
            u.alternate !== null &&
              u.alternate.memoizedState !== null &&
              u.alternate.memoizedState.cachePool !== null &&
              (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null &&
            u.memoizedState.cachePool !== null &&
            (n = u.memoizedState.cachePool.pool),
            n !== e && (u.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          sn(t, t.updateQueue),
          dl(t),
          null
        );
      case 4:
        return Ct(), l === null && xc(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return xt(t.type), dl(t), null;
      case 19:
        if ((_(El), (e = t.memoizedState), e === null)) return dl(t), null;
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) Fu(e, !1);
          else {
            if (vl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = un(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      Fu(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      sn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    es(a, l), (a = a.sibling);
                  return p(El, (El.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              gt() > dn &&
              ((t.flags |= 128), (u = !0), Fu(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = un(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                sn(t, l),
                Fu(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !P)
              )
                return dl(t), null;
            } else
              2 * gt() - e.renderingStartTime > dn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), Fu(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((t = e.tail),
            (e.rendering = t),
            (e.tail = t.sibling),
            (e.renderingStartTime = gt()),
            (t.sibling = null),
            (l = El.current),
            p(El, u ? (l & 1) | 2 : l & 1),
            t)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          jt(t),
          jf(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (a = t.updateQueue),
          a !== null && sn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && _(Ma),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          xt(zl),
          dl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function xd(l, t) {
    switch ((zf(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          xt(zl),
          Ct(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 13:
        if (
          (jt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(v(340));
          qu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return _(El), null;
      case 4:
        return Ct(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return (
          jt(t),
          jf(),
          l !== null && _(Ma),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return xt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xo(l, t) {
    switch ((zf(t), t.tag)) {
      case 3:
        xt(zl), Ct();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        Ct();
        break;
      case 13:
        jt(t);
        break;
      case 19:
        _(El);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        jt(t), jf(), l !== null && _(Ma);
        break;
      case 24:
        xt(zl);
    }
  }
  function Iu(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              f = a.inst;
            (u = n()), (f.destroy = u);
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (c) {
      cl(t, t.return, c);
    }
  }
  function It(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst,
              c = f.destroy;
            if (c !== void 0) {
              (f.destroy = void 0), (e = t);
              var i = a,
                r = c;
              try {
                r();
              } catch (S) {
                cl(e, i, S);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (S) {
      cl(t, t.return, S);
    }
  }
  function Ho(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        bs(t, a);
      } catch (u) {
        cl(l, l.return, u);
      }
    }
  }
  function jo(l, t, a) {
    (a.props = Ua(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      cl(l, t, u);
    }
  }
  function Pu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      cl(l, t, e);
    }
  }
  function Et(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          cl(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          cl(l, t, e);
        }
      else a.current = null;
  }
  function qo(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function ic(l, t, a) {
    try {
      var u = l.stateNode;
      Pd(u, l.type, a, t), (u[Ql] = t);
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function Yo(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && fa(l.type)) ||
      l.tag === 4
    );
  }
  function sc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Yo(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && fa(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function oc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = En));
    else if (
      u !== 4 &&
      (u === 27 && fa(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (oc(l, t, a), l = l.sibling; l !== null; )
        oc(l, t, a), (l = l.sibling);
  }
  function on(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (
      u !== 4 &&
      (u === 27 && fa(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (on(l, t, a), l = l.sibling; l !== null; )
        on(l, t, a), (l = l.sibling);
  }
  function Bo(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Rl(t, u, a), (t[jl] = l), (t[Ql] = a);
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var Bt = !1,
    Sl = !1,
    yc = !1,
    Go = typeof WeakSet == "function" ? WeakSet : Set,
    Ol = null;
  function Hd(l, t) {
    if (((l = l.containerInfo), (qc = Dn), (l = Wi(l)), sf(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0,
              c = -1,
              i = -1,
              r = 0,
              S = 0,
              E = l,
              m = null;
            t: for (;;) {
              for (
                var h;
                E !== a || (e !== 0 && E.nodeType !== 3) || (c = f + e),
                  E !== n || (u !== 0 && E.nodeType !== 3) || (i = f + u),
                  E.nodeType === 3 && (f += E.nodeValue.length),
                  (h = E.firstChild) !== null;

              )
                (m = E), (E = h);
              for (;;) {
                if (E === l) break t;
                if (
                  (m === a && ++r === e && (c = f),
                  m === n && ++S === u && (i = f),
                  (h = E.nextSibling) !== null)
                )
                  break;
                (E = m), (m = E.parentNode);
              }
              E = h;
            }
            a = c === -1 || i === -1 ? null : { start: c, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Yc = { focusedElem: l, selectionRange: a }, Dn = !1, Ol = t;
      Ol !== null;

    )
      if (
        ((t = Ol), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Ol = l);
      else
        for (; Ol !== null; ) {
          switch (((t = Ol), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode);
                try {
                  var G = Ua(a.type, e, a.elementType === a.type);
                  (l = u.getSnapshotBeforeUpdate(G, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l);
                } catch (q) {
                  cl(a, a.return, q);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Xc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(v(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ol = l);
            break;
          }
          Ol = t.return;
        }
  }
  function Xo(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pt(l, a), u & 4 && Iu(5, a);
        break;
      case 1:
        if ((Pt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (f) {
              cl(a, a.return, f);
            }
          else {
            var e = Ua(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              cl(a, a.return, f);
            }
          }
        u & 64 && Ho(a), u & 512 && Pu(a, a.return);
        break;
      case 3:
        if ((Pt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            bs(l, t);
          } catch (f) {
            cl(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Bo(a);
      case 26:
      case 5:
        Pt(l, a), t === null && u & 4 && qo(a), u & 512 && Pu(a, a.return);
        break;
      case 12:
        Pt(l, a);
        break;
      case 13:
        Pt(l, a),
          u & 4 && Zo(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = Zd.bind(null, a)), fr(l, a))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Bt), !u)) {
          (t = (t !== null && t.memoizedState !== null) || Sl), (e = Bt);
          var n = Sl;
          (Bt = u),
            (Sl = t) && !n ? la(l, a, (a.subtreeFlags & 8772) !== 0) : Pt(l, a),
            (Bt = e),
            (Sl = n);
        }
        break;
      case 30:
        break;
      default:
        Pt(l, a);
    }
  }
  function Qo(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Qo(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Vn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var yl = null,
    Vl = !1;
  function Gt(l, t, a) {
    for (a = a.child; a !== null; ) Co(l, t, a), (a = a.sibling);
  }
  function Co(l, t, a) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(zu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Sl || Et(a, t),
          Gt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Sl || Et(a, t);
        var u = yl,
          e = Vl;
        fa(a.type) && ((yl = a.stateNode), (Vl = !1)),
          Gt(l, t, a),
          ie(a.stateNode),
          (yl = u),
          (Vl = e);
        break;
      case 5:
        Sl || Et(a, t);
      case 6:
        if (
          ((u = yl),
          (e = Vl),
          (yl = null),
          Gt(l, t, a),
          (yl = u),
          (Vl = e),
          yl !== null)
        )
          if (Vl)
            try {
              (yl.nodeType === 9
                ? yl.body
                : yl.nodeName === "HTML"
                ? yl.ownerDocument.body
                : yl
              ).removeChild(a.stateNode);
            } catch (n) {
              cl(a, t, n);
            }
          else
            try {
              yl.removeChild(a.stateNode);
            } catch (n) {
              cl(a, t, n);
            }
        break;
      case 18:
        yl !== null &&
          (Vl
            ? ((l = yl),
              Uy(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                a.stateNode
              ),
              he(l))
            : Uy(yl, a.stateNode));
        break;
      case 4:
        (u = yl),
          (e = Vl),
          (yl = a.stateNode.containerInfo),
          (Vl = !0),
          Gt(l, t, a),
          (yl = u),
          (Vl = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Sl || It(2, a, t), Sl || It(4, a, t), Gt(l, t, a);
        break;
      case 1:
        Sl ||
          (Et(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && jo(a, t, u)),
          Gt(l, t, a);
        break;
      case 21:
        Gt(l, t, a);
        break;
      case 22:
        (Sl = (u = Sl) || a.memoizedState !== null), Gt(l, t, a), (Sl = u);
        break;
      default:
        Gt(l, t, a);
    }
  }
  function Zo(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        he(l);
      } catch (a) {
        cl(t, t.return, a);
      }
  }
  function jd(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Go()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Go()),
          t
        );
      default:
        throw Error(v(435, l.tag));
    }
  }
  function dc(l, t) {
    var a = jd(l);
    t.forEach(function (u) {
      var e = Vd.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function Pl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          f = t,
          c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (fa(c.type)) {
                (yl = c.stateNode), (Vl = !1);
                break l;
              }
              break;
            case 5:
              (yl = c.stateNode), (Vl = !1);
              break l;
            case 3:
            case 4:
              (yl = c.stateNode.containerInfo), (Vl = !0);
              break l;
          }
          c = c.return;
        }
        if (yl === null) throw Error(v(160));
        Co(n, f, e),
          (yl = null),
          (Vl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Vo(t, l), (t = t.sibling);
  }
  var mt = null;
  function Vo(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pl(t, l),
          lt(l),
          u & 4 && (It(3, l, l.return), Iu(3, l), It(5, l, l.return));
        break;
      case 1:
        Pl(t, l),
          lt(l),
          u & 512 && (Sl || a === null || Et(a, a.return)),
          u & 64 &&
            Bt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = mt;
        if (
          (Pl(t, l),
          lt(l),
          u & 512 && (Sl || a === null || Et(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  (u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e);
                  t: switch (u) {
                    case "title":
                      (n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Au] ||
                          n[jl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Rl(n, u, a),
                        (n[jl] = l),
                        Al(n),
                        (u = n);
                      break l;
                    case "link":
                      var f = By("link", "href", e).get(u + (a.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Rl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (f = By("meta", "content", e).get(
                          u + (a.content || "")
                        ))
                      ) {
                        for (c = 0; c < f.length; c++)
                          if (
                            ((n = f[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Rl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(v(468, u));
                  }
                  (n[jl] = l), Al(n), (u = n);
                }
                l.stateNode = u;
              } else Gy(e, l.type, l.stateNode);
            else l.stateNode = Yy(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? Gy(e, l.type, l.stateNode)
                  : Yy(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                ic(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Pl(t, l),
          lt(l),
          u & 512 && (Sl || a === null || Et(a, a.return)),
          a !== null && u & 4 && ic(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (Pl(t, l),
          lt(l),
          u & 512 && (Sl || a === null || Et(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Za(e, "");
          } catch (h) {
            cl(l, l.return, h);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), ic(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (yc = !0);
        break;
      case 6:
        if ((Pl(t, l), lt(l), u & 4)) {
          if (l.stateNode === null) throw Error(v(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (h) {
            cl(l, l.return, h);
          }
        }
        break;
      case 3:
        if (
          ((On = null),
          (e = mt),
          (mt = An(t.containerInfo)),
          Pl(t, l),
          (mt = e),
          lt(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            he(t.containerInfo);
          } catch (h) {
            cl(l, l.return, h);
          }
        yc && ((yc = !1), Lo(l));
        break;
      case 4:
        (u = mt),
          (mt = An(l.stateNode.containerInfo)),
          Pl(t, l),
          lt(l),
          (mt = u);
        break;
      case 12:
        Pl(t, l), lt(l);
        break;
      case 13:
        Pl(t, l),
          lt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (gc = gt()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), dc(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null,
          r = Bt,
          S = Sl;
        if (
          ((Bt = r || e),
          (Sl = S || i),
          Pl(t, l),
          (Sl = S),
          (Bt = r),
          lt(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || i || Bt || Sl || Ra(l)),
              a = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (((n = i.stateNode), e))
                    (f = n.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    c = i.stateNode;
                    var E = i.memoizedProps.style,
                      m =
                        E != null && E.hasOwnProperty("display")
                          ? E.display
                          : null;
                    c.style.display =
                      m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                  }
                } catch (h) {
                  cl(i, i.return, h);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (h) {
                  cl(i, i.return, h);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), dc(l, a))));
        break;
      case 19:
        Pl(t, l),
          lt(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), dc(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pl(t, l), lt(l);
    }
  }
  function lt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (Yo(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(v(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = sc(l);
            on(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Za(f, ""), (a.flags &= -33));
            var c = sc(l);
            on(l, c, f);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo,
              r = sc(l);
            oc(l, r, i);
            break;
          default:
            throw Error(v(161));
        }
      } catch (S) {
        cl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Lo(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Lo(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function Pt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Xo(l, t.alternate, t), (t = t.sibling);
  }
  function Ra(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          It(4, t, t.return), Ra(t);
          break;
        case 1:
          Et(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && jo(t, t.return, a),
            Ra(t);
          break;
        case 27:
          ie(t.stateNode);
        case 26:
        case 5:
          Et(t, t.return), Ra(t);
          break;
        case 22:
          t.memoizedState === null && Ra(t);
          break;
        case 30:
          Ra(t);
          break;
        default:
          Ra(t);
      }
      l = l.sibling;
    }
  }
  function la(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          la(e, n, a), Iu(4, n);
          break;
        case 1:
          if (
            (la(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (r) {
              cl(u, u.return, r);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var c = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  gs(i[e], c);
            } catch (r) {
              cl(u, u.return, r);
            }
          }
          a && f & 64 && Ho(n), Pu(n, n.return);
          break;
        case 27:
          Bo(n);
        case 26:
        case 5:
          la(e, n, a), a && u === null && f & 4 && qo(n), Pu(n, n.return);
          break;
        case 12:
          la(e, n, a);
          break;
        case 13:
          la(e, n, a), a && f & 4 && Zo(e, n);
          break;
        case 22:
          n.memoizedState === null && la(e, n, a), Pu(n, n.return);
          break;
        case 30:
          break;
        default:
          la(e, n, a);
      }
      t = t.sibling;
    }
  }
  function rc(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Gu(a));
  }
  function vc(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Gu(l));
  }
  function Tt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Ko(l, t, a, u), (t = t.sibling);
  }
  function Ko(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(l, t, a, u), e & 2048 && Iu(9, t);
        break;
      case 1:
        Tt(l, t, a, u);
        break;
      case 3:
        Tt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Gu(l)));
        break;
      case 12:
        if (e & 2048) {
          Tt(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              f = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                f,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (i) {
            cl(t, t.return, i);
          }
        } else Tt(l, t, a, u);
        break;
      case 13:
        Tt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Tt(l, t, a, u)
              : le(l, t)
            : n._visibility & 2
            ? Tt(l, t, a, u)
            : ((n._visibility |= 2),
              cu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && rc(f, t);
        break;
      case 24:
        Tt(l, t, a, u), e & 2048 && vc(t.alternate, t);
        break;
      default:
        Tt(l, t, a, u);
    }
  }
  function cu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        f = t,
        c = a,
        i = u,
        r = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          cu(n, f, c, i, e), Iu(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null
            ? S._visibility & 2
              ? cu(n, f, c, i, e)
              : le(n, f)
            : ((S._visibility |= 2), cu(n, f, c, i, e)),
            e && r & 2048 && rc(f.alternate, f);
          break;
        case 24:
          cu(n, f, c, i, e), e && r & 2048 && vc(f.alternate, f);
          break;
        default:
          cu(n, f, c, i, e);
      }
      t = t.sibling;
    }
  }
  function le(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            le(a, u), e & 2048 && rc(u.alternate, u);
            break;
          case 24:
            le(a, u), e & 2048 && vc(u.alternate, u);
            break;
          default:
            le(a, u);
        }
        t = t.sibling;
      }
  }
  var te = 8192;
  function iu(l) {
    if (l.subtreeFlags & te)
      for (l = l.child; l !== null; ) Jo(l), (l = l.sibling);
  }
  function Jo(l) {
    switch (l.tag) {
      case 26:
        iu(l),
          l.flags & te &&
            l.memoizedState !== null &&
            br(mt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        iu(l);
        break;
      case 3:
      case 4:
        var t = mt;
        (mt = An(l.stateNode.containerInfo)), iu(l), (mt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = te), (te = 16777216), iu(l), (te = t))
            : iu(l));
        break;
      default:
        iu(l);
    }
  }
  function wo(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function ae(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Ol = u), ko(u, l);
        }
      wo(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Wo(l), (l = l.sibling);
  }
  function Wo(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ae(l), l.flags & 2048 && It(9, l, l.return);
        break;
      case 3:
        ae(l);
        break;
      case 12:
        ae(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), yn(l))
          : ae(l);
        break;
      default:
        ae(l);
    }
  }
  function yn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Ol = u), ko(u, l);
        }
      wo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          It(8, t, t.return), yn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), yn(t));
          break;
        default:
          yn(t);
      }
      l = l.sibling;
    }
  }
  function ko(l, t) {
    for (; Ol !== null; ) {
      var a = Ol;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          It(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Gu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) (u.return = a), (Ol = u);
      else
        l: for (a = l; Ol !== null; ) {
          u = Ol;
          var e = u.sibling,
            n = u.return;
          if ((Qo(u), u === a)) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Ol = e);
            break l;
          }
          Ol = n;
        }
    }
  }
  var qd = {
      getCacheForType: function (l) {
        var t = ql(zl),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    Yd = typeof WeakMap == "function" ? WeakMap : Map,
    tl = 0,
    sl = null,
    J = null,
    k = 0,
    al = 0,
    tt = null,
    ta = !1,
    su = !1,
    mc = !1,
    Xt = 0,
    vl = 0,
    aa = 0,
    Na = 0,
    hc = 0,
    yt = 0,
    ou = 0,
    ue = null,
    Ll = null,
    Sc = !1,
    gc = 0,
    dn = 1 / 0,
    rn = null,
    ua = null,
    Ul = 0,
    ea = null,
    yu = null,
    du = 0,
    bc = 0,
    zc = null,
    $o = null,
    ee = 0,
    Ec = null;
  function at() {
    if ((tl & 2) !== 0 && k !== 0) return k & -k;
    if (g.T !== null) {
      var l = Pa;
      return l !== 0 ? l : Dc();
    }
    return yi();
  }
  function Fo() {
    yt === 0 && (yt = (k & 536870912) === 0 || P ? ci() : 536870912);
    var l = ot.current;
    return l !== null && (l.flags |= 32), yt;
  }
  function ut(l, t, a) {
    ((l === sl && (al === 2 || al === 9)) || l.cancelPendingCommit !== null) &&
      (ru(l, 0), na(l, k, yt, !1)),
      Tu(l, a),
      ((tl & 2) === 0 || l !== sl) &&
        (l === sl &&
          ((tl & 2) === 0 && (Na |= a), vl === 4 && na(l, k, yt, !1)),
        At(l));
  }
  function Io(l, t, a) {
    if ((tl & 6) !== 0) throw Error(v(327));
    var u = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Eu(l, t),
      e = u ? Xd(l, t) : pc(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        su && !u && na(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !Bd(a))) {
          (e = pc(l, t, !1)), (n = !1);
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var f = 0;
          else
            (f = l.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ue;
              var i = c.current.memoizedState.isDehydrated;
              if ((i && (ru(c, f).flags |= 256), (f = pc(c, f, !1)), f !== 2)) {
                if (mc && !i) {
                  (c.errorRecoveryDisabledLanes |= n), (Na |= n), (e = 4);
                  break l;
                }
                (n = Ll),
                  (Ll = e),
                  n !== null && (Ll === null ? (Ll = n) : Ll.push.apply(Ll, n));
              }
              e = f;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          ru(l, 0), na(l, t, 0, !0);
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              na(u, t, yt, !ta);
              break l;
            case 2:
              Ll = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((t & 62914560) === t && ((e = gc + 300 - gt()), 10 < e)) {
            if ((na(u, t, yt, !ta), Ae(u, 0, !0) !== 0)) break l;
            u.timeoutHandle = My(
              Po.bind(null, u, a, Ll, rn, Sc, t, yt, Na, ou, ta, n, 2, -0, 0),
              e
            );
            break l;
          }
          Po(u, a, Ll, rn, Sc, t, yt, Na, ou, ta, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    At(l);
  }
  function Po(l, t, a, u, e, n, f, c, i, r, S, E, m, h) {
    if (
      ((l.timeoutHandle = -1),
      (E = t.subtreeFlags),
      (E & 8192 || (E & 16785408) === 16785408) &&
        ((ye = { stylesheets: null, count: 0, unsuspend: gr }),
        Jo(t),
        (E = zr()),
        E !== null))
    ) {
      (l.cancelPendingCommit = E(
        fy.bind(null, l, t, n, a, u, e, f, c, i, S, 1, m, h)
      )),
        na(l, n, f, !r);
      return;
    }
    fy(l, t, n, a, u, e, f, c, i);
  }
  function Bd(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!Fl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function na(l, t, a, u) {
    (t &= ~hc),
      (t &= ~Na),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - $l(e),
        f = 1 << n;
      (u[n] = -1), (e &= ~f);
    }
    a !== 0 && si(l, a, t);
  }
  function vn() {
    return (tl & 6) === 0 ? (ne(0), !1) : !0;
  }
  function Tc() {
    if (J !== null) {
      if (al === 0) var l = J.return;
      else (l = J), (Nt = Oa = null), Xf(l), (nu = null), (ku = 0), (l = J);
      for (; l !== null; ) xo(l.alternate, l), (l = l.return);
      J = null;
    }
  }
  function ru(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), tr(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      Tc(),
      (sl = l),
      (J = a = Dt(l.current, null)),
      (k = t),
      (al = 0),
      (tt = null),
      (ta = !1),
      (su = Eu(l, t)),
      (mc = !1),
      (ou = yt = hc = Na = aa = vl = 0),
      (Ll = ue = null),
      (Sc = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - $l(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (Xt = t), qe(), a;
  }
  function ly(l, t) {
    (V = null),
      (g.H = ln),
      t === Qu || t === Le
        ? ((t = hs()), (al = 3))
        : t === rs
        ? ((t = hs()), (al = 4))
        : (al =
            t === go
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (tt = t),
      J === null && ((vl = 1), nn(l, ft(t, l.current)));
  }
  function ty() {
    var l = g.H;
    return (g.H = ln), l === null ? ln : l;
  }
  function ay() {
    var l = g.A;
    return (g.A = qd), l;
  }
  function Ac() {
    (vl = 4),
      ta || ((k & 4194048) !== k && ot.current !== null) || (su = !0),
      ((aa & 134217727) === 0 && (Na & 134217727) === 0) ||
        sl === null ||
        na(sl, k, yt, !1);
  }
  function pc(l, t, a) {
    var u = tl;
    tl |= 2;
    var e = ty(),
      n = ay();
    (sl !== l || k !== t) && ((rn = null), ru(l, t)), (t = !1);
    var f = vl;
    l: do
      try {
        if (al !== 0 && J !== null) {
          var c = J,
            i = tt;
          switch (al) {
            case 8:
              Tc(), (f = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ot.current === null && (t = !0);
              var r = al;
              if (((al = 0), (tt = null), vu(l, c, i, r), a && su)) {
                f = 0;
                break l;
              }
              break;
            default:
              (r = al), (al = 0), (tt = null), vu(l, c, i, r);
          }
        }
        Gd(), (f = vl);
        break;
      } catch (S) {
        ly(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Nt = Oa = null),
      (tl = u),
      (g.H = e),
      (g.A = n),
      J === null && ((sl = null), (k = 0), qe()),
      f
    );
  }
  function Gd() {
    for (; J !== null; ) uy(J);
  }
  function Xd(l, t) {
    var a = tl;
    tl |= 2;
    var u = ty(),
      e = ay();
    sl !== l || k !== t
      ? ((rn = null), (dn = gt() + 500), ru(l, t))
      : (su = Eu(l, t));
    l: do
      try {
        if (al !== 0 && J !== null) {
          t = J;
          var n = tt;
          t: switch (al) {
            case 1:
              (al = 0), (tt = null), vu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (vs(n)) {
                (al = 0), (tt = null), ey(t);
                break;
              }
              (t = function () {
                (al !== 2 && al !== 9) || sl !== l || (al = 7), At(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              al = 7;
              break l;
            case 4:
              al = 5;
              break l;
            case 7:
              vs(n)
                ? ((al = 0), (tt = null), ey(t))
                : ((al = 0), (tt = null), vu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (J.tag) {
                case 26:
                  f = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (!f || Xy(f)) {
                    (al = 0), (tt = null);
                    var i = c.sibling;
                    if (i !== null) J = i;
                    else {
                      var r = c.return;
                      r !== null ? ((J = r), mn(r)) : (J = null);
                    }
                    break t;
                  }
              }
              (al = 0), (tt = null), vu(l, t, n, 5);
              break;
            case 6:
              (al = 0), (tt = null), vu(l, t, n, 6);
              break;
            case 8:
              Tc(), (vl = 6);
              break l;
            default:
              throw Error(v(462));
          }
        }
        Qd();
        break;
      } catch (S) {
        ly(l, S);
      }
    while (!0);
    return (
      (Nt = Oa = null),
      (g.H = u),
      (g.A = e),
      (tl = a),
      J !== null ? 0 : ((sl = null), (k = 0), qe(), vl)
    );
  }
  function Qd() {
    for (; J !== null && !i0(); ) uy(J);
  }
  function uy(l) {
    var t = Ro(l.alternate, l, Xt);
    (l.memoizedProps = l.pendingProps), t === null ? mn(l) : (J = t);
  }
  function ey(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = po(a, t, t.pendingProps, t.type, void 0, k);
        break;
      case 11:
        t = po(a, t, t.pendingProps, t.type.render, t.ref, k);
        break;
      case 5:
        Xf(t);
      default:
        xo(a, t), (t = J = es(t, Xt)), (t = Ro(a, t, Xt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? mn(l) : (J = t);
  }
  function vu(l, t, a, u) {
    (Nt = Oa = null), Xf(t), (nu = null), (ku = 0);
    var e = t.return;
    try {
      if (Ud(l, e, t, a, k)) {
        (vl = 1), nn(l, ft(a, l.current)), (J = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((J = e), n);
      (vl = 1), nn(l, ft(a, l.current)), (J = null);
      return;
    }
    t.flags & 32768
      ? (P || u === 1
          ? (l = !0)
          : su || (k & 536870912) !== 0
          ? (l = !1)
          : ((ta = l = !0),
            (u === 2 || u === 9 || u === 3 || u === 6) &&
              ((u = ot.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        ny(t, l))
      : mn(t);
  }
  function mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        ny(t, ta);
        return;
      }
      l = t.return;
      var a = Nd(t.alternate, t, Xt);
      if (a !== null) {
        J = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    vl === 0 && (vl = 5);
  }
  function ny(l, t) {
    do {
      var a = xd(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (J = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        J = l;
        return;
      }
      J = l = a;
    } while (l !== null);
    (vl = 6), (J = null);
  }
  function fy(l, t, a, u, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do hn();
    while (Ul !== 0);
    if ((tl & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= vf),
        g0(l, a, n, f, c, i),
        l === sl && ((J = sl = null), (k = 0)),
        (yu = t),
        (ea = l),
        (du = a),
        (bc = n),
        (zc = e),
        ($o = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            Ld(ze, function () {
              return yy(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = g.T), (g.T = null), (e = O.p), (O.p = 2), (f = tl), (tl |= 4);
        try {
          Hd(l, t, a);
        } finally {
          (tl = f), (O.p = e), (g.T = u);
        }
      }
      (Ul = 1), cy(), iy(), sy();
    }
  }
  function cy() {
    if (Ul === 1) {
      Ul = 0;
      var l = ea,
        t = yu,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = g.T), (g.T = null);
        var u = O.p;
        O.p = 2;
        var e = tl;
        tl |= 4;
        try {
          Vo(t, l);
          var n = Yc,
            f = Wi(l.containerInfo),
            c = n.focusedElem,
            i = n.selectionRange;
          if (
            f !== c &&
            c &&
            c.ownerDocument &&
            wi(c.ownerDocument.documentElement, c)
          ) {
            if (i !== null && sf(c)) {
              var r = i.start,
                S = i.end;
              if ((S === void 0 && (S = r), "selectionStart" in c))
                (c.selectionStart = r),
                  (c.selectionEnd = Math.min(S, c.value.length));
              else {
                var E = c.ownerDocument || document,
                  m = (E && E.defaultView) || window;
                if (m.getSelection) {
                  var h = m.getSelection(),
                    G = c.textContent.length,
                    q = Math.min(i.start, G),
                    nl = i.end === void 0 ? q : Math.min(i.end, G);
                  !h.extend && q > nl && ((f = nl), (nl = q), (q = f));
                  var y = Ji(c, q),
                    o = Ji(c, nl);
                  if (
                    y &&
                    o &&
                    (h.rangeCount !== 1 ||
                      h.anchorNode !== y.node ||
                      h.anchorOffset !== y.offset ||
                      h.focusNode !== o.node ||
                      h.focusOffset !== o.offset)
                  ) {
                    var d = E.createRange();
                    d.setStart(y.node, y.offset),
                      h.removeAllRanges(),
                      q > nl
                        ? (h.addRange(d), h.extend(o.node, o.offset))
                        : (d.setEnd(o.node, o.offset), h.addRange(d));
                  }
                }
              }
            }
            for (E = [], h = c; (h = h.parentNode); )
              h.nodeType === 1 &&
                E.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < E.length;
              c++
            ) {
              var z = E[c];
              (z.element.scrollLeft = z.left), (z.element.scrollTop = z.top);
            }
          }
          (Dn = !!qc), (Yc = qc = null);
        } finally {
          (tl = e), (O.p = u), (g.T = a);
        }
      }
      (l.current = t), (Ul = 2);
    }
  }
  function iy() {
    if (Ul === 2) {
      Ul = 0;
      var l = ea,
        t = yu,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = g.T), (g.T = null);
        var u = O.p;
        O.p = 2;
        var e = tl;
        tl |= 4;
        try {
          Xo(l, t.alternate, t);
        } finally {
          (tl = e), (O.p = u), (g.T = a);
        }
      }
      Ul = 3;
    }
  }
  function sy() {
    if (Ul === 4 || Ul === 3) {
      (Ul = 0), s0();
      var l = ea,
        t = yu,
        a = du,
        u = $o;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ul = 5)
        : ((Ul = 0), (yu = ea = null), oy(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ua = null),
        Cn(a),
        (t = t.stateNode),
        kl && typeof kl.onCommitFiberRoot == "function")
      )
        try {
          kl.onCommitFiberRoot(zu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (t = g.T), (e = O.p), (O.p = 2), (g.T = null);
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var c = u[f];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          (g.T = t), (O.p = e);
        }
      }
      (du & 3) !== 0 && hn(),
        At(l),
        (e = l.pendingLanes),
        (a & 4194090) !== 0 && (e & 42) !== 0
          ? l === Ec
            ? ee++
            : ((ee = 0), (Ec = l))
          : (ee = 0),
        ne(0);
    }
  }
  function oy(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Gu(t)));
  }
  function hn(l) {
    return cy(), iy(), sy(), yy();
  }
  function yy() {
    if (Ul !== 5) return !1;
    var l = ea,
      t = bc;
    bc = 0;
    var a = Cn(du),
      u = g.T,
      e = O.p;
    try {
      (O.p = 32 > a ? 32 : a), (g.T = null), (a = zc), (zc = null);
      var n = ea,
        f = du;
      if (((Ul = 0), (yu = ea = null), (du = 0), (tl & 6) !== 0))
        throw Error(v(331));
      var c = tl;
      if (
        ((tl |= 4),
        Wo(n.current),
        Ko(n, n.current, f, a),
        (tl = c),
        ne(0, !1),
        kl && typeof kl.onPostCommitFiberRoot == "function")
      )
        try {
          kl.onPostCommitFiberRoot(zu, n);
        } catch {}
      return !0;
    } finally {
      (O.p = e), (g.T = u), oy(l, t);
    }
  }
  function dy(l, t, a) {
    (t = ft(a, t)),
      (t = Pf(l.stateNode, t, 2)),
      (l = Wt(l, t, 2)),
      l !== null && (Tu(l, 2), At(l));
  }
  function cl(l, t, a) {
    if (l.tag === 3) dy(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          dy(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ua === null || !ua.has(u)))
          ) {
            (l = ft(a, l)),
              (a = ho(2)),
              (u = Wt(t, a, 2)),
              u !== null && (So(a, u, t, l), Tu(u, 2), At(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Oc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Yd();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((mc = !0), e.add(a), (l = Cd.bind(null, l, t, a)), t.then(l, l));
  }
  function Cd(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (k & a) === a &&
        (vl === 4 || (vl === 3 && (k & 62914560) === k && 300 > gt() - gc)
          ? (tl & 2) === 0 && ru(l, 0)
          : (hc |= a),
        ou === k && (ou = 0)),
      At(l);
  }
  function ry(l, t) {
    t === 0 && (t = ii()), (l = ka(l, t)), l !== null && (Tu(l, t), At(l));
  }
  function Zd(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), ry(l, a);
  }
  function Vd(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    u !== null && u.delete(t), ry(l, a);
  }
  function Ld(l, t) {
    return Bn(l, t);
  }
  var Sn = null,
    mu = null,
    _c = !1,
    gn = !1,
    Mc = !1,
    xa = 0;
  function At(l) {
    l !== mu &&
      l.next === null &&
      (mu === null ? (Sn = mu = l) : (mu = mu.next = l)),
      (gn = !0),
      _c || ((_c = !0), Jd());
  }
  function ne(l, t) {
    if (!Mc && gn) {
      Mc = !0;
      do
        for (var a = !1, u = Sn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes,
                c = u.pingedLanes;
              (n = (1 << (31 - $l(42 | l) + 1)) - 1),
                (n &= e & ~(f & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), Sy(u, n));
          } else
            (n = k),
              (n = Ae(
                u,
                u === sl ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Eu(u, n) || ((a = !0), Sy(u, n));
          u = u.next;
        }
      while (a);
      Mc = !1;
    }
  }
  function Kd() {
    vy();
  }
  function vy() {
    gn = _c = !1;
    var l = 0;
    xa !== 0 && (lr() && (l = xa), (xa = 0));
    for (var t = gt(), a = null, u = Sn; u !== null; ) {
      var e = u.next,
        n = my(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (Sn = e) : (a.next = e),
          e === null && (mu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (gn = !0)),
        (u = e);
    }
    ne(l);
  }
  function my(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var f = 31 - $l(n),
        c = 1 << f,
        i = e[f];
      i === -1
        ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = S0(c, t))
        : i <= t && (l.expiredLanes |= c),
        (n &= ~c);
    }
    if (
      ((t = sl),
      (a = k),
      (a = Ae(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (al === 2 || al === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Gn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Eu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Gn(u), Cn(a))) {
        case 2:
        case 8:
          a = ni;
          break;
        case 32:
          a = ze;
          break;
        case 268435456:
          a = fi;
          break;
        default:
          a = ze;
      }
      return (
        (u = hy.bind(null, l)),
        (a = Bn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Gn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function hy(l, t) {
    if (Ul !== 0 && Ul !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var a = l.callbackNode;
    if (hn() && l.callbackNode !== a) return null;
    var u = k;
    return (
      (u = Ae(
        l,
        l === sl ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      u === 0
        ? null
        : (Io(l, u, t),
          my(l, gt()),
          l.callbackNode != null && l.callbackNode === a
            ? hy.bind(null, l)
            : null)
    );
  }
  function Sy(l, t) {
    if (hn()) return null;
    Io(l, t, !0);
  }
  function Jd() {
    ar(function () {
      (tl & 6) !== 0 ? Bn(ei, Kd) : vy();
    });
  }
  function Dc() {
    return xa === 0 && (xa = ci()), xa;
  }
  function gy(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : De("" + l);
  }
  function by(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function wd(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = gy((e[Ql] || null).action),
        f = u.submitter;
      f &&
        ((t = (t = f[Ql] || null)
          ? gy(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((n = t), (f = null)));
      var c = new xe("action", "action", null, u, e);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (xa !== 0) {
                  var i = f ? by(e, f) : new FormData(e);
                  Wf(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (i = f ? by(e, f) : new FormData(e)),
                  Wf(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Uc = 0; Uc < rf.length; Uc++) {
    var Rc = rf[Uc],
      Wd = Rc.toLowerCase(),
      kd = Rc[0].toUpperCase() + Rc.slice(1);
    vt(Wd, "on" + kd);
  }
  vt(Fi, "onAnimationEnd"),
    vt(Ii, "onAnimationIteration"),
    vt(Pi, "onAnimationStart"),
    vt("dblclick", "onDoubleClick"),
    vt("focusin", "onFocus"),
    vt("focusout", "onBlur"),
    vt(dd, "onTransitionRun"),
    vt(rd, "onTransitionStart"),
    vt(vd, "onTransitionCancel"),
    vt(ls, "onTransitionEnd"),
    Xa("onMouseEnter", ["mouseout", "mouseover"]),
    Xa("onMouseLeave", ["mouseout", "mouseover"]),
    Xa("onPointerEnter", ["pointerout", "pointerover"]),
    Xa("onPointerLeave", ["pointerout", "pointerover"]),
    ha(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    ha(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    ha("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ha(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    ha(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    ha(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var fe =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    $d = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(fe)
    );
  function zy(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f],
              i = c.instance,
              r = c.currentTarget;
            if (((c = c.listener), i !== n && e.isPropagationStopped()))
              break l;
            (n = c), (e.currentTarget = r);
            try {
              n(e);
            } catch (S) {
              en(S);
            }
            (e.currentTarget = null), (n = i);
          }
        else
          for (f = 0; f < u.length; f++) {
            if (
              ((c = u[f]),
              (i = c.instance),
              (r = c.currentTarget),
              (c = c.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            (n = c), (e.currentTarget = r);
            try {
              n(e);
            } catch (S) {
              en(S);
            }
            (e.currentTarget = null), (n = i);
          }
      }
    }
  }
  function w(l, t) {
    var a = t[Zn];
    a === void 0 && (a = t[Zn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (Ey(t, l, 2, !1), a.add(u));
  }
  function Nc(l, t, a) {
    var u = 0;
    t && (u |= 4), Ey(a, l, u, t);
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function xc(l) {
    if (!l[bn]) {
      (l[bn] = !0),
        ri.forEach(function (a) {
          a !== "selectionchange" && ($d.has(a) || Nc(a, !1, l), Nc(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[bn] || ((t[bn] = !0), Nc("selectionchange", !1, t));
    }
  }
  function Ey(l, t, a, u) {
    switch (Ky(t)) {
      case 2:
        var e = Ar;
        break;
      case 8:
        e = pr;
        break;
      default:
        e = Jc;
    }
    (a = e.bind(null, t, a, l)),
      (e = void 0),
      !Pn ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
        ? l.addEventListener(t, a, { passive: e })
        : l.addEventListener(t, a, !1);
  }
  function Hc(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (((f = Ya(c)), f === null)) return;
            if (((i = f.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
    Mi(function () {
      var r = n,
        S = Fn(a),
        E = [];
      l: {
        var m = ts.get(l);
        if (m !== void 0) {
          var h = xe,
            G = l;
          switch (l) {
            case "keypress":
              if (Re(a) === 0) break l;
            case "keydown":
            case "keyup":
              h = L0;
              break;
            case "focusin":
              (G = "focus"), (h = uf);
              break;
            case "focusout":
              (G = "blur"), (h = uf);
              break;
            case "beforeblur":
            case "afterblur":
              h = uf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = Ri;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = x0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = w0;
              break;
            case Fi:
            case Ii:
            case Pi:
              h = q0;
              break;
            case ls:
              h = k0;
              break;
            case "scroll":
            case "scrollend":
              h = R0;
              break;
            case "wheel":
              h = F0;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = B0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = xi;
              break;
            case "toggle":
            case "beforetoggle":
              h = P0;
          }
          var q = (t & 4) !== 0,
            nl = !q && (l === "scroll" || l === "scrollend"),
            y = q ? (m !== null ? m + "Capture" : null) : m;
          q = [];
          for (var o = r, d; o !== null; ) {
            var z = o;
            if (
              ((d = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                d === null ||
                y === null ||
                ((z = Ou(o, y)), z != null && q.push(ce(o, z, d))),
              nl)
            )
              break;
            o = o.return;
          }
          0 < q.length &&
            ((m = new h(m, G, null, a, S)), E.push({ event: m, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((m = l === "mouseover" || l === "pointerover"),
            (h = l === "mouseout" || l === "pointerout"),
            m &&
              a !== $n &&
              (G = a.relatedTarget || a.fromElement) &&
              (Ya(G) || G[qa]))
          )
            break l;
          if (
            (h || m) &&
            ((m =
              S.window === S
                ? S
                : (m = S.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            h
              ? ((G = a.relatedTarget || a.toElement),
                (h = r),
                (G = G ? Ya(G) : null),
                G !== null &&
                  ((nl = R(G)),
                  (q = G.tag),
                  G !== nl || (q !== 5 && q !== 27 && q !== 6)) &&
                  (G = null))
              : ((h = null), (G = r)),
            h !== G)
          ) {
            if (
              ((q = Ri),
              (z = "onMouseLeave"),
              (y = "onMouseEnter"),
              (o = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = xi),
                (z = "onPointerLeave"),
                (y = "onPointerEnter"),
                (o = "pointer")),
              (nl = h == null ? m : pu(h)),
              (d = G == null ? m : pu(G)),
              (m = new q(z, o + "leave", h, a, S)),
              (m.target = nl),
              (m.relatedTarget = d),
              (z = null),
              Ya(S) === r &&
                ((q = new q(y, o + "enter", G, a, S)),
                (q.target = d),
                (q.relatedTarget = nl),
                (z = q)),
              (nl = z),
              h && G)
            )
              t: {
                for (q = h, y = G, o = 0, d = q; d; d = hu(d)) o++;
                for (d = 0, z = y; z; z = hu(z)) d++;
                for (; 0 < o - d; ) (q = hu(q)), o--;
                for (; 0 < d - o; ) (y = hu(y)), d--;
                for (; o--; ) {
                  if (q === y || (y !== null && q === y.alternate)) break t;
                  (q = hu(q)), (y = hu(y));
                }
                q = null;
              }
            else q = null;
            h !== null && Ty(E, m, h, q, !1),
              G !== null && nl !== null && Ty(E, nl, G, q, !0);
          }
        }
        l: {
          if (
            ((m = r ? pu(r) : window),
            (h = m.nodeName && m.nodeName.toLowerCase()),
            h === "select" || (h === "input" && m.type === "file"))
          )
            var D = Qi;
          else if (Gi(m))
            if (Ci) D = sd;
            else {
              D = cd;
              var L = fd;
            }
          else
            (h = m.nodeName),
              !h ||
              h.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? r && kn(r.elementType) && (D = Qi)
                : (D = id);
          if (D && (D = D(l, r))) {
            Xi(E, D, a, S);
            break l;
          }
          L && L(l, m, r),
            l === "focusout" &&
              r &&
              m.type === "number" &&
              r.memoizedProps.value != null &&
              Wn(m, "number", m.value);
        }
        switch (((L = r ? pu(r) : window), l)) {
          case "focusin":
            (Gi(L) || L.contentEditable === "true") &&
              ((Ja = L), (of = r), (Hu = null));
            break;
          case "focusout":
            Hu = of = Ja = null;
            break;
          case "mousedown":
            yf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (yf = !1), ki(E, a, S);
            break;
          case "selectionchange":
            if (yd) break;
          case "keydown":
          case "keyup":
            ki(E, a, S);
        }
        var N;
        if (nf)
          l: {
            switch (l) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break l;
              case "compositionend":
                Y = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break l;
            }
            Y = void 0;
          }
        else
          Ka
            ? Yi(l, a) && (Y = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (Y = "onCompositionStart");
        Y &&
          (Hi &&
            a.locale !== "ko" &&
            (Ka || Y !== "onCompositionStart"
              ? Y === "onCompositionEnd" && Ka && (N = Di())
              : ((Lt = S),
                (lf = "value" in Lt ? Lt.value : Lt.textContent),
                (Ka = !0))),
          (L = zn(r, Y)),
          0 < L.length &&
            ((Y = new Ni(Y, l, null, a, S)),
            E.push({ event: Y, listeners: L }),
            N ? (Y.data = N) : ((N = Bi(a)), N !== null && (Y.data = N)))),
          (N = td ? ad(l, a) : ud(l, a)) &&
            ((Y = zn(r, "onBeforeInput")),
            0 < Y.length &&
              ((L = new Ni("onBeforeInput", "beforeinput", null, a, S)),
              E.push({ event: L, listeners: Y }),
              (L.data = N))),
          wd(E, l, r, a, S);
      }
      zy(E, t);
    });
  }
  function ce(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function zn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Ou(l, a)),
          e != null && u.unshift(ce(l, e, n)),
          (e = Ou(l, t)),
          e != null && u.push(ce(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function hu(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ty(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var c = a,
        i = c.alternate,
        r = c.stateNode;
      if (((c = c.tag), i !== null && i === u)) break;
      (c !== 5 && c !== 26 && c !== 27) ||
        r === null ||
        ((i = r),
        e
          ? ((r = Ou(a, n)), r != null && f.unshift(ce(a, r, i)))
          : e || ((r = Ou(a, n)), r != null && f.push(ce(a, r, i)))),
        (a = a.return);
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Fd = /\r\n?/g,
    Id = /\u0000|\uFFFD/g;
  function Ay(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Fd,
        `
`
      )
      .replace(Id, "");
  }
  function py(l, t) {
    return (t = Ay(t)), Ay(l) === t;
  }
  function En() {}
  function el(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || Za(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            Za(l, "" + u);
        break;
      case "className":
        Oe(l, "class", u);
        break;
      case "tabIndex":
        Oe(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oe(l, a, u);
        break;
      case "style":
        Oi(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Oe(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (u = De("" + u)), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && el(l, t, "name", e.name, e, null),
                el(l, t, "formEncType", e.formEncType, e, null),
                el(l, t, "formMethod", e.formMethod, e, null),
                el(l, t, "formTarget", e.formTarget, e, null))
              : (el(l, t, "encType", e.encType, e, null),
                el(l, t, "method", e.method, e, null),
                el(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (u = De("" + u)), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = En);
        break;
      case "onScroll":
        u != null && w("scroll", l);
        break;
      case "onScrollEnd":
        u != null && w("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(v(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = De("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
            u != null &&
            typeof u != "function" &&
            typeof u != "symbol"
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        w("beforetoggle", l), w("toggle", l), pe(l, "popover", u);
        break;
      case "xlinkActuate":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        _t(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        _t(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        _t(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        _t(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        pe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = D0.get(a) || a), pe(l, a, u));
    }
  }
  function jc(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Oi(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(v(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? Za(l, u)
          : (typeof u == "number" || typeof u == "bigint") && Za(l, "" + u);
        break;
      case "onScroll":
        u != null && w("scroll", l);
        break;
      case "onScrollEnd":
        u != null && w("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = En);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!vi.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Ql] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e);
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
              ? l.setAttribute(a, "")
              : pe(l, a, u);
          }
    }
  }
  function Rl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        w("error", l), w("load", l);
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, t));
                default:
                  el(l, t, n, f, a, null);
              }
          }
        e && el(l, t, "srcSet", a.srcSet, a, null),
          u && el(l, t, "src", a.src, a, null);
        return;
      case "input":
        w("invalid", l);
        var c = (n = f = e = null),
          i = null,
          r = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  r = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(v(137, t));
                  break;
                default:
                  el(l, t, u, S, a, null);
              }
          }
        Ei(l, n, c, i, r, f, e, !1), _e(l);
        return;
      case "select":
        w("invalid", l), (u = f = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((c = a[e]), c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                u = c;
              default:
                el(l, t, e, c, a, null);
            }
        (t = n),
          (a = f),
          (l.multiple = !!u),
          t != null ? Ca(l, !!u, t, !1) : a != null && Ca(l, !!u, a, !0);
        return;
      case "textarea":
        w("invalid", l), (n = e = u = null);
        for (f in a)
          if (a.hasOwnProperty(f) && ((c = a[f]), c != null))
            switch (f) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(v(91));
                break;
              default:
                el(l, t, f, c, a, null);
            }
        Ai(l, u, e, n), _e(l);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && ((u = a[i]), u != null))
            switch (i) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                el(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        w("beforetoggle", l), w("toggle", l), w("cancel", l), w("close", l);
        break;
      case "iframe":
      case "object":
        w("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < fe.length; u++) w(fe[u], l);
        break;
      case "image":
        w("error", l), w("load", l);
        break;
      case "details":
        w("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        w("error", l), w("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (r in a)
          if (a.hasOwnProperty(r) && ((u = a[r]), u != null))
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                el(l, t, r, u, a, null);
            }
        return;
      default:
        if (kn(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((u = a[S]), u !== void 0 && jc(l, t, S, u, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((u = a[c]), u != null && el(l, t, c, u, a, null));
  }
  function Pd(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          f = null,
          c = null,
          i = null,
          r = null,
          S = null;
        for (h in a) {
          var E = a[h];
          if (a.hasOwnProperty(h) && E != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = E;
              default:
                u.hasOwnProperty(h) || el(l, t, h, null, u, E);
            }
        }
        for (var m in u) {
          var h = u[m];
          if (((E = a[m]), u.hasOwnProperty(m) && (h != null || E != null)))
            switch (m) {
              case "type":
                n = h;
                break;
              case "name":
                e = h;
                break;
              case "checked":
                r = h;
                break;
              case "defaultChecked":
                S = h;
                break;
              case "value":
                f = h;
                break;
              case "defaultValue":
                c = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(v(137, t));
                break;
              default:
                h !== E && el(l, t, m, h, u, E);
            }
        }
        wn(l, f, c, i, r, S, n, e);
        return;
      case "select":
        h = f = c = m = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = i;
              default:
                u.hasOwnProperty(n) || el(l, t, n, null, u, i);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (i = a[e]),
            u.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                m = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && el(l, t, e, n, u, i);
            }
        (t = c),
          (a = f),
          (u = h),
          m != null
            ? Ca(l, !!a, m, !1)
            : !!u != !!a &&
              (t != null ? Ca(l, !!a, t, !0) : Ca(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        h = m = null;
        for (c in a)
          if (
            ((e = a[c]),
            a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                el(l, t, c, null, u, e);
            }
        for (f in u)
          if (
            ((e = u[f]),
            (n = a[f]),
            u.hasOwnProperty(f) && (e != null || n != null))
          )
            switch (f) {
              case "value":
                m = e;
                break;
              case "defaultValue":
                h = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(v(91));
                break;
              default:
                e !== n && el(l, t, f, e, u, n);
            }
        Ti(l, m, h);
        return;
      case "option":
        for (var G in a)
          if (
            ((m = a[G]),
            a.hasOwnProperty(G) && m != null && !u.hasOwnProperty(G))
          )
            switch (G) {
              case "selected":
                l.selected = !1;
                break;
              default:
                el(l, t, G, null, u, m);
            }
        for (i in u)
          if (
            ((m = u[i]),
            (h = a[i]),
            u.hasOwnProperty(i) && m !== h && (m != null || h != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                el(l, t, i, m, u, h);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in a)
          (m = a[q]),
            a.hasOwnProperty(q) &&
              m != null &&
              !u.hasOwnProperty(q) &&
              el(l, t, q, null, u, m);
        for (r in u)
          if (
            ((m = u[r]),
            (h = a[r]),
            u.hasOwnProperty(r) && m !== h && (m != null || h != null))
          )
            switch (r) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(v(137, t));
                break;
              default:
                el(l, t, r, m, u, h);
            }
        return;
      default:
        if (kn(t)) {
          for (var nl in a)
            (m = a[nl]),
              a.hasOwnProperty(nl) &&
                m !== void 0 &&
                !u.hasOwnProperty(nl) &&
                jc(l, t, nl, void 0, u, m);
          for (S in u)
            (m = u[S]),
              (h = a[S]),
              !u.hasOwnProperty(S) ||
                m === h ||
                (m === void 0 && h === void 0) ||
                jc(l, t, S, m, u, h);
          return;
        }
    }
    for (var y in a)
      (m = a[y]),
        a.hasOwnProperty(y) &&
          m != null &&
          !u.hasOwnProperty(y) &&
          el(l, t, y, null, u, m);
    for (E in u)
      (m = u[E]),
        (h = a[E]),
        !u.hasOwnProperty(E) ||
          m === h ||
          (m == null && h == null) ||
          el(l, t, E, m, u, h);
  }
  var qc = null,
    Yc = null;
  function Tn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Oy(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _y(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Bc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gc = null;
  function lr() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Gc
        ? !1
        : ((Gc = l), !0)
      : ((Gc = null), !1);
  }
  var My = typeof setTimeout == "function" ? setTimeout : void 0,
    tr = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Dy = typeof Promise == "function" ? Promise : void 0,
    ar =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Dy < "u"
        ? function (l) {
            return Dy.resolve(null).then(l).catch(ur);
          }
        : My;
  function ur(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function fa(l) {
    return l === "head";
  }
  function Uy(l, t) {
    var a = t,
      u = 0,
      e = 0;
    do {
      var n = a.nextSibling;
      if ((l.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (0 < u && 8 > u) {
            a = u;
            var f = l.ownerDocument;
            if ((a & 1 && ie(f.documentElement), a & 2 && ie(f.body), a & 4))
              for (a = f.head, ie(a), f = a.firstChild; f; ) {
                var c = f.nextSibling,
                  i = f.nodeName;
                f[Au] ||
                  i === "SCRIPT" ||
                  i === "STYLE" ||
                  (i === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(f),
                  (f = c);
              }
          }
          if (e === 0) {
            l.removeChild(n), he(t);
            return;
          }
          e--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? e++
            : (u = a.charCodeAt(0) - 48);
      else u = 0;
      a = n;
    } while (a);
    he(t);
  }
  function Xc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(a), Vn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function er(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Au])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = ht(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function nr(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = ht(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Qc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function fr(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete") t();
    else {
      var u = function () {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u);
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Cc = null;
  function Ry(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Ny(l, t, a) {
    switch (((t = Tn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(v(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(v(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function ie(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Vn(l);
  }
  var dt = new Map(),
    xy = new Set();
  function An(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Qt = O.d;
  O.d = { f: cr, r: ir, D: sr, C: or, L: yr, m: dr, X: vr, S: rr, M: mr };
  function cr() {
    var l = Qt.f(),
      t = vn();
    return l || t;
  }
  function ir(l) {
    var t = Ba(l);
    t !== null && t.tag === 5 && t.type === "form" ? Fs(t) : Qt.r(l);
  }
  var Su = typeof document > "u" ? null : document;
  function Hy(l, t, a) {
    var u = Su;
    if (u && typeof t == "string" && t) {
      var e = nt(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        xy.has(e) ||
          (xy.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Rl(t, "link", l),
            Al(t),
            u.head.appendChild(t)));
    }
  }
  function sr(l) {
    Qt.D(l), Hy("dns-prefetch", l, null);
  }
  function or(l, t) {
    Qt.C(l, t), Hy("preconnect", l, t);
  }
  function yr(l, t, a) {
    Qt.L(l, t, a);
    var u = Su;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + nt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + nt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + nt(a.imageSizes) + '"]'))
        : (e += '[href="' + nt(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = gu(l);
          break;
        case "script":
          n = bu(l);
      }
      dt.has(n) ||
        ((l = M(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        dt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(se(n))) ||
          (t === "script" && u.querySelector(oe(n))) ||
          ((t = u.createElement("link")),
          Rl(t, "link", l),
          Al(t),
          u.head.appendChild(t)));
    }
  }
  function dr(l, t) {
    Qt.m(l, t);
    var a = Su;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + nt(u) + '"][href="' + nt(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = bu(l);
      }
      if (
        !dt.has(n) &&
        ((l = M({ rel: "modulepreload", href: l }, t)),
        dt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(oe(n))) return;
        }
        (u = a.createElement("link")),
          Rl(u, "link", l),
          Al(u),
          a.head.appendChild(u);
      }
    }
  }
  function rr(l, t, a) {
    Qt.S(l, t, a);
    var u = Su;
    if (u && l) {
      var e = Ga(u).hoistableStyles,
        n = gu(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if ((f = u.querySelector(se(n)))) c.loading = 5;
        else {
          (l = M({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = dt.get(n)) && Zc(l, a);
          var i = (f = u.createElement("link"));
          Al(i),
            Rl(i, "link", l),
            (i._p = new Promise(function (r, S) {
              (i.onload = r), (i.onerror = S);
            })),
            i.addEventListener("load", function () {
              c.loading |= 1;
            }),
            i.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            pn(f, t, u);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: c }),
          e.set(n, f);
      }
    }
  }
  function vr(l, t) {
    Qt.X(l, t);
    var a = Su;
    if (a && l) {
      var u = Ga(a).hoistableScripts,
        e = bu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(oe(e))),
        n ||
          ((l = M({ src: l, async: !0 }, t)),
          (t = dt.get(e)) && Vc(l, t),
          (n = a.createElement("script")),
          Al(n),
          Rl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function mr(l, t) {
    Qt.M(l, t);
    var a = Su;
    if (a && l) {
      var u = Ga(a).hoistableScripts,
        e = bu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(oe(e))),
        n ||
          ((l = M({ src: l, async: !0, type: "module" }, t)),
          (t = dt.get(e)) && Vc(l, t),
          (n = a.createElement("script")),
          Al(n),
          Rl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function jy(l, t, a, u) {
    var e = (e = Q.current) ? An(e) : null;
    if (!e) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = gu(a.href)),
            (a = Ga(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = gu(a.href);
          var n = Ga(e).hoistableStyles,
            f = n.get(l);
          if (
            (f ||
              ((e = e.ownerDocument || e),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, f),
              (n = e.querySelector(se(l))) &&
                !n._p &&
                ((f.instance = n), (f.state.loading = 5)),
              dt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                dt.set(l, a),
                n || hr(e, l, a, f.state))),
            t && u === null)
          )
            throw Error(v(528, ""));
          return f;
        }
        if (t && u !== null) throw Error(v(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = bu(a)),
              (a = Ga(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(v(444, l));
    }
  }
  function gu(l) {
    return 'href="' + nt(l) + '"';
  }
  function se(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qy(l) {
    return M({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function hr(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Rl(t, "link", a),
        Al(t),
        l.head.appendChild(t));
  }
  function bu(l) {
    return '[src="' + nt(l) + '"]';
  }
  function oe(l) {
    return "script[async]" + l;
  }
  function Yy(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + nt(a.href) + '"]');
          if (u) return (t.instance = u), Al(u), u;
          var e = M({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Al(u),
            Rl(u, "style", e),
            pn(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = gu(a.href);
          var n = l.querySelector(se(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), Al(n), n;
          (u = qy(a)),
            (e = dt.get(e)) && Zc(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Al(n);
          var f = n;
          return (
            (f._p = new Promise(function (c, i) {
              (f.onload = c), (f.onerror = i);
            })),
            Rl(n, "link", u),
            (t.state.loading |= 4),
            pn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = bu(a.src)),
            (e = l.querySelector(oe(n)))
              ? ((t.instance = e), Al(e), e)
              : ((u = a),
                (e = dt.get(n)) && ((u = M({}, a)), Vc(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Al(e),
                Rl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(v(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), pn(u, a.precedence, l));
    return t.instance;
  }
  function pn(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        f = 0;
      f < u.length;
      f++
    ) {
      var c = u[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Zc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Vc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function By(l, t, a) {
    if (On === null) {
      var u = new Map(),
        e = (On = new Map());
      e.set(a, u);
    } else (e = On), (u = e.get(a)), u || ((u = new Map()), e.set(a, u));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Au] ||
          n[jl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = u.get(f);
        c ? c.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Gy(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Sr(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Xy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ye = null;
  function gr() {}
  function br(l, t, a) {
    if (ye === null) throw Error(v(475));
    var u = ye;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var e = gu(a.href),
          n = l.querySelector(se(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (u.count++, (u = _n.bind(u)), l.then(u, u)),
            (t.state.loading |= 4),
            (t.instance = n),
            Al(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = qy(a)),
          (e = dt.get(e)) && Zc(a, e),
          (n = n.createElement("link")),
          Al(n);
        var f = n;
        (f._p = new Promise(function (c, i) {
          (f.onload = c), (f.onerror = i);
        })),
          Rl(n, "link", a),
          (t.instance = n);
      }
      u.stylesheets === null && (u.stylesheets = new Map()),
        u.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (u.count++,
          (t = _n.bind(u)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function zr() {
    if (ye === null) throw Error(v(475));
    var l = ye;
    return (
      l.stylesheets && l.count === 0 && Lc(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Lc(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                (l.unsuspend = null), u();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function _n() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Lc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Mn = null;
  function Lc(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Mn = new Map()),
        t.forEach(Er, l),
        (Mn = null),
        _n.call(l));
  }
  function Er(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Mn.get(l);
      if (a) var u = a.get(null);
      else {
        (a = new Map()), Mn.set(l, a);
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (a.set(f.dataset.precedence, f), (u = f));
        }
        u && a.set(null, u);
      }
      (e = t.instance),
        (f = e.getAttribute("data-precedence")),
        (n = a.get(f) || u),
        n === u && a.set(null, e),
        a.set(f, e),
        this.count++,
        (u = _n.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var de = {
    $$typeof: Nl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function Tr(l, t, a, u, e, n, f, c) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Xn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xn(0)),
      (this.hiddenUpdates = Xn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = c),
      (this.incompleteTransitions = new Map());
  }
  function Qy(l, t, a, u, e, n, f, c, i, r, S, E) {
    return (
      (l = new Tr(l, t, a, f, c, i, r, E)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Il(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Of()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      Uf(n),
      l
    );
  }
  function Cy(l) {
    return l ? ((l = $a), l) : $a;
  }
  function Zy(l, t, a, u, e, n) {
    (e = Cy(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = wt(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = Wt(l, u, t)),
      a !== null && (ut(a, l, t), Zu(a, l, t));
  }
  function Vy(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Kc(l, t) {
    Vy(l, t), (l = l.alternate) && Vy(l, t);
  }
  function Ly(l) {
    if (l.tag === 13) {
      var t = ka(l, 67108864);
      t !== null && ut(t, l, 67108864), Kc(l, 67108864);
    }
  }
  var Dn = !0;
  function Ar(l, t, a, u) {
    var e = g.T;
    g.T = null;
    var n = O.p;
    try {
      (O.p = 2), Jc(l, t, a, u);
    } finally {
      (O.p = n), (g.T = e);
    }
  }
  function pr(l, t, a, u) {
    var e = g.T;
    g.T = null;
    var n = O.p;
    try {
      (O.p = 8), Jc(l, t, a, u);
    } finally {
      (O.p = n), (g.T = e);
    }
  }
  function Jc(l, t, a, u) {
    if (Dn) {
      var e = wc(u);
      if (e === null) Hc(l, t, u, Un, a), Jy(l, u);
      else if (_r(e, l, t, a, u)) u.stopPropagation();
      else if ((Jy(l, u), t & 4 && -1 < Or.indexOf(l))) {
        for (; e !== null; ) {
          var n = Ba(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var f = ma(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << (31 - $l(f));
                      (c.entanglements[1] |= i), (f &= ~i);
                    }
                    At(n), (tl & 6) === 0 && ((dn = gt() + 500), ne(0));
                  }
                }
                break;
              case 13:
                (c = ka(n, 2)), c !== null && ut(c, n, 2), vn(), Kc(n, 2);
            }
          if (((n = wc(u)), n === null && Hc(l, t, u, Un, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Hc(l, t, u, null, a);
    }
  }
  function wc(l) {
    return (l = Fn(l)), Wc(l);
  }
  var Un = null;
  function Wc(l) {
    if (((Un = null), (l = Ya(l)), l !== null)) {
      var t = R(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = K(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Un = l), null;
  }
  function Ky(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (o0()) {
          case ei:
            return 2;
          case ni:
            return 8;
          case ze:
          case y0:
            return 32;
          case fi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kc = !1,
    ca = null,
    ia = null,
    sa = null,
    re = new Map(),
    ve = new Map(),
    oa = [],
    Or =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Jy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ca = null;
        break;
      case "dragenter":
      case "dragleave":
        ia = null;
        break;
      case "mouseover":
      case "mouseout":
        sa = null;
        break;
      case "pointerover":
      case "pointerout":
        re.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(t.pointerId);
    }
  }
  function me(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = Ba(t)), t !== null && Ly(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function _r(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (ca = me(ca, l, t, a, u, e)), !0;
      case "dragenter":
        return (ia = me(ia, l, t, a, u, e)), !0;
      case "mouseover":
        return (sa = me(sa, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return re.set(n, me(re.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), ve.set(n, me(ve.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function wy(l) {
    var t = Ya(l.target);
    if (t !== null) {
      var a = R(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = K(a)), t !== null)) {
            (l.blockedOn = t),
              b0(l.priority, function () {
                if (a.tag === 13) {
                  var u = at();
                  u = Qn(u);
                  var e = ka(a, u);
                  e !== null && ut(e, a, u), Kc(a, u);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = wc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ($n = u), a.target.dispatchEvent(u), ($n = null);
      } else return (t = Ba(a)), t !== null && Ly(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Wy(l, t, a) {
    Rn(l) && a.delete(t);
  }
  function Mr() {
    (kc = !1),
      ca !== null && Rn(ca) && (ca = null),
      ia !== null && Rn(ia) && (ia = null),
      sa !== null && Rn(sa) && (sa = null),
      re.forEach(Wy),
      ve.forEach(Wy);
  }
  function Nn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      kc ||
        ((kc = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, Mr)));
  }
  var xn = null;
  function ky(l) {
    xn !== l &&
      ((xn = l),
      A.unstable_scheduleCallback(A.unstable_NormalPriority, function () {
        xn === l && (xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (Wc(u || a) === null) continue;
            break;
          }
          var n = Ba(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Wf(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function he(l) {
    function t(i) {
      return Nn(i, l);
    }
    ca !== null && Nn(ca, l),
      ia !== null && Nn(ia, l),
      sa !== null && Nn(sa, l),
      re.forEach(t),
      ve.forEach(t);
    for (var a = 0; a < oa.length; a++) {
      var u = oa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < oa.length && ((a = oa[0]), a.blockedOn === null); )
      wy(a), a.blockedOn === null && oa.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          f = e[Ql] || null;
        if (typeof n == "function") f || ky(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (f = n[Ql] || null))) c = f.formAction;
            else if (Wc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? (a[u + 1] = c) : (a.splice(u, 3), (u -= 3)),
            ky(a);
        }
      }
  }
  function $c(l) {
    this._internalRoot = l;
  }
  (Hn.prototype.render = $c.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(v(409));
      var a = t.current,
        u = at();
      Zy(a, u, l, t, null, null);
    }),
    (Hn.prototype.unmount = $c.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Zy(l.current, 2, null, l, null, null), vn(), (t[qa] = null);
        }
      });
  function Hn(l) {
    this._internalRoot = l;
  }
  Hn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = yi();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < oa.length && t !== 0 && t < oa[a].priority; a++);
      oa.splice(a, 0, l), a === 0 && wy(l);
    }
  };
  var $y = W.version;
  if ($y !== "19.1.1") throw Error(v(527, $y, "19.1.1"));
  O.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(v(188))
        : ((l = Object.keys(l).join(",")), Error(v(268, l)));
    return (
      (l = U(t)),
      (l = l !== null ? b(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Dr = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!jn.isDisabled && jn.supportsFiber)
      try {
        (zu = jn.inject(Dr)), (kl = jn);
      } catch {}
  }
  return (
    (ge.createRoot = function (l, t) {
      if (!H(l)) throw Error(v(299));
      var a = !1,
        u = "",
        e = yo,
        n = ro,
        f = vo,
        c = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (c = t.unstable_transitionCallbacks)),
        (t = Qy(l, 1, !1, null, null, a, u, e, n, f, c, null)),
        (l[qa] = t.current),
        xc(l),
        new $c(t)
      );
    }),
    (ge.hydrateRoot = function (l, t, a) {
      if (!H(l)) throw Error(v(299));
      var u = !1,
        e = "",
        n = yo,
        f = ro,
        c = vo,
        i = null,
        r = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (i = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (r = a.formState)),
        (t = Qy(l, 1, !0, t, a ?? null, u, e, n, f, c, i, r)),
        (t.context = Cy(null)),
        (a = t.current),
        (u = at()),
        (u = Qn(u)),
        (e = wt(u)),
        (e.callback = null),
        Wt(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Tu(t, a),
        At(t),
        (l[qa] = t.current),
        xc(l),
        new Hn(t)
      );
    }),
    (ge.version = "19.1.1"),
    ge
  );
}
var f0;
function Gr() {
  if (f0) return Pc.exports;
  f0 = 1;
  function A() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (W) {
        console.error(W);
      }
  }
  return A(), (Pc.exports = Br()), Pc.exports;
}
var Xr = Gr();
function Qr({ title: A, resetBtnText: W, reset: X, showResetButton: v = !0 }) {
  return (
    !v && X && X(!1),
    x.jsxs("div", {
      className: "flex w-full items-center justify-center gap-5 ",
      children: [
        x.jsx("h1", {
          className: "text-3xl w-fit font-semibold text-left flex-wrap",
          children: A,
        }),
        x.jsx("div", {
          className: "flex flex-wrap gap-2 items-center justify-center",
          children:
            v &&
            x.jsx("button", {
              type: "button",
              onClick: () => {
                X?.(!0);
              },
              className:
                "text-xl border-2 rounded-full p-2 px-3 bg-[var(--bg-color)] cursor-pointer hover:shadow-[0_0_10px_var(--primary-color)] transition-shadow outline-0",
              "aria-label": W,
              title: W,
              children: "Resetuj",
            }),
        }),
      ],
    })
  );
}
function Cr(A) {
  return A.replace(/[^0-9.,]/g, "")
    .replace(/^0+(?=\d)/, "")
    .replace(/,/g, ".")
    .replace(/^\.($|[^0-9])/, "0.")
    .replace(/\.{2,}/g, ".")
    .replace(/(.*?\..*?)\./g, "$1")
    .replace(/(\d+\.\d{2})\d*/g, "$1")
    .replace(/[a-zA-Z]+/g, "");
}
function Ha({
  number: A = !1,
  text: W = !1,
  select: X = !1,
  value: v,
  setValue: H,
  title: R,
  placeholder: K,
  options: il = [],
  unit: U,
}) {
  const [b, M] = Gl.useState(!1);
  return x.jsxs("div", {
    className: "flex flex-col mb-5",
    children: [
      R &&
        x.jsxs("label", {
          htmlFor: R,
          className: "pl-1 pb-1 text-lg font-medium",
          children: [R, ":"],
        }),
      x.jsxs("div", {
        className: "flex w-full h-fit gap-x-2 items-center",
        children: [
          W &&
            x.jsx(
              "input",
              {
                id: R,
                autoComplete: "off",
                type: "text",
                onChange: (C) => {
                  M(!0), H(C.target.value);
                },
                value: b ? v : "",
                placeholder: K,
              },
              R
            ),
          A &&
            x.jsx(
              "input",
              {
                id: R,
                autoComplete: "off",
                type: "text",
                pattern: "[0-9]*",
                inputMode: "numeric",
                onChange: (C) => {
                  M(!0), H(Cr(C.target.value));
                },
                value: b ? v : "",
                placeholder: K,
              },
              R
            ),
          X &&
            x.jsxs(
              "select",
              {
                onChange: (C) => {
                  M(!0), H(C.target.value);
                },
                id: R,
                value: b ? v : "",
                "aria-label": R,
                children: [
                  x.jsx("option", {
                    value: "",
                    disabled: !0,
                    hidden: !0,
                    children: K,
                  }),
                  il.length > 0 &&
                    il.map((C) =>
                      x.jsx(
                        "option",
                        { value: C.value, children: C.name },
                        C.value + C.name
                      )
                    ),
                ],
              },
              R
            ),
          x.jsx("div", { className: "text-xl h-fit", children: U }),
        ],
      }),
    ],
  });
}
const Zr = [
    { symbol: "WP", name: "proszek do sporządzania zawiesiny" },
    { symbol: "WG", name: "granulat do sporządzania zawiesiny" },
    { symbol: "SC", name: "koncentrat do sporządzania zawiesiny" },
    {
      symbol: "CS",
      name: "zawiesina kapsuł",
      alert1: "skonsultuj z doradcą producenta środka",
    },
    {
      symbol: "ZC",
      name: "mieszanina CS i SC",
      alert1: "skonsultuj z doradcą producenta środka",
    },
    { symbol: "EC", name: "koncentrat do sporządzania emulsji" },
    { symbol: "EW", name: "emulsja olej w wodzie" },
    { symbol: "EO", name: "emulsja woda w oleju" },
    { symbol: "EG", name: "granulat do sporządzania emulsji" },
    { symbol: "SE", name: "zawiesionoemulsja" },
    { symbol: "GW", name: "żel do sporządzania emulsji" },
    { symbol: "GL", name: "żel do sporządzania emulsji" },
    { symbol: "ME", name: "mikroemulsja" },
    {
      symbol: "ZE",
      name: "mieszanina CS i SE",
      alert1: "skonsultuj z doradcą producenta środka",
    },
    {
      symbol: "ZW",
      name: "mieszanina CS i EW",
      alert1: "skonsultuj z doradcą producenta środka",
    },
    { symbol: "OF", name: "koncentrat zawiesinowy olejowy" },
    { symbol: "OD", name: "zawiesina olejowa" },
    { symbol: "SL", name: "koncentrat rozpuszczalny" },
    { symbol: "SP", name: "proszek rozpuszczalny" },
    { symbol: "SG", name: "granulat rozpuszczalny" },
  ],
  Vr = [
    { symbol: "G", name: "mocznik" },
    {
      symbol: "-",
      name: "proszek/granulat",
      alert1: "nie łącz nawozów Ca i Mg",
      alert2: "nie łącz siarczanów z fosforem",
    },
    { symbol: "-", name: "r.s.m." },
    {
      symbol: "-",
      name: "płyn",
      alert1: "nie łącz siarczanu miedzi z herbicydami",
      alert2: "nie łącz siarczanów z fosforem",
      alert3: "ostrożnie łącz żelazo z herbicydami",
    },
  ],
  Lr = [
    { symbol: "-", name: "kondycjoner wody" },
    { symbol: "-", name: "olejowy" },
    { symbol: "-", name: "surfaktant" },
    { symbol: "-", name: "inny poprawiające przyczepność" },
    { symbol: "-", name: "zmniejszający pianę" },
  ],
  Kr = [
    {
      symbol: "-",
      name: "płyn",
      alert1: "skonsultuj z doradcą producenta środka",
    },
    {
      symbol: "-",
      name: "proszek",
      alert1: "skonsultuj z doradcą producenta środka",
    },
  ],
  Jr = [{ symbol: "-", name: "płyn/proszek" }],
  wr = [
    { symbol: "-", type: "adiuwant", subType: "kondycjoner wody" },
    { symbol: "G", type: "nawóz", name: "mocznik" },
    { symbol: "-", type: "nawóz", name: "proszek/granulat" },
    { symbol: "WP", type: "ś.o.r.", name: "proszek do sporządzania zawiesiny" },
    {
      symbol: "WG",
      type: "ś.o.r.",
      name: "granulat do sporządzania zawiesiny",
    },
    {
      symbol: "SC",
      type: "ś.o.r.",
      name: "koncentrat do sporządzania zawiesiny",
    },
    { symbol: "CS", type: "ś.o.r.", name: "zawiesina kapsuł" },
    { symbol: "ZC", type: "ś.o.r.", name: "mieszanina CS i SC" },
    {
      symbol: "EC",
      type: "ś.o.r.",
      name: "koncentrat do sporządzania emulsji",
    },
    { symbol: "EW", type: "ś.o.r.", name: "emulsja olej w wodzie" },
    { symbol: "EO", type: "ś.o.r.", name: "emulsja woda w oleju" },
    { symbol: "EG", type: "ś.o.r.", name: "granulat do sporządzania emulsji" },
    { symbol: "SE", type: "ś.o.r.", name: "zawiesionoemulsja" },
    { symbol: "GW", type: "ś.o.r.", name: "żel do sporządzania emulsji" },
    { symbol: "GL", type: "ś.o.r.", name: "żel do sporządzania emulsji" },
    { symbol: "ME", type: "ś.o.r.", name: "mikroemulsja" },
    { symbol: "ZE", type: "ś.o.r.", name: "mieszanina CS i SE" },
    { symbol: "ZW", type: "ś.o.r.", name: "mieszanina CS i EW" },
    { symbol: "OF", type: "ś.o.r.", name: "koncentrat zawiesinowy olejowy" },
    { symbol: "OD", type: "ś.o.r.", name: "zawiesina olejowa" },
    { symbol: "SL", type: "ś.o.r.", name: "koncentrat rozpuszczalny" },
    { symbol: "SP", type: "ś.o.r.", name: "proszek rozpuszczalny" },
    { symbol: "SG", type: "ś.o.r.", name: "granulat rozpuszczalny" },
    { symbol: "-", type: "nawóz", name: "r.s.m." },
    { symbol: "-", type: "nawóz", name: "płyn" },
    { symbol: "-", type: "stymulator mineralny", name: "płyn/proszek" },
    { symbol: "-", type: "adiuwant", name: "olejowy" },
    { symbol: "-", type: "adiuwant", name: "surfaktant" },
    { symbol: "-", type: "adiuwant", name: "inny poprawiające przyczepność" },
    { symbol: "-", type: "adiuwant", name: "zmniejszający pianę" },
    { symbol: "-", type: "biopreparat", name: "płyn" },
    { symbol: "-", type: "biopreparat", name: "proszek" },
  ];
function Wr({ elements: A, setElements: W, isReset: X }) {
  const [v, H] = Gl.useState(!1),
    [R, K] = Gl.useState(""),
    [il, U] = Gl.useState(""),
    [b, M] = Gl.useState(""),
    [C, ll] = Gl.useState({ alert1: "", alert2: "", alert3: "" });
  Gl.useEffect(() => {
    H(!1);
  }, [il, R, b]),
    Gl.useEffect(() => {
      X && (U(""), K(""), M(""), ll({ alert1: "", alert2: "", alert3: "" }));
    }, [X]);
  function ml(Ml) {
    return Ml.map((Tl) => ({
      name: (Tl.symbol !== "-" ? Tl.symbol + " " : "") + Tl.name,
      value: (Tl.symbol !== "-" ? Tl.symbol + " " : "") + Tl.name,
    }));
  }
  return x.jsxs("div", {
    className: "border-2 border-[var(--detail-color)] rounded-2xl p-4",
    children: [
      x.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [
          x.jsx("h1", {
            className: "text-2xl text-nowrap font-semibold",
            children: "Dodaj element",
          }),
          x.jsx("img", {
            src: "./add.svg",
            alt: "add element",
            className:
              "w-12 cursor-pointer hover:shadow-[0_5_5px_var(--primary-color)] transition-shadow outline-0",
            onClick: () => {
              if (il === "" || b === "") {
                H(!0);
                return;
              }
              H(!1),
                U(""),
                K(""),
                M(""),
                ll({ alert1: "", alert2: "", alert3: "" }),
                W([
                  ...A,
                  {
                    name: il,
                    type: R,
                    subType: b,
                    alert1: "",
                    alert2: "",
                    alert3: "",
                  },
                ]);
            },
          }),
        ],
      }),
      x.jsx(Ha, {
        text: !0,
        value: il,
        setValue: U,
        title: "Nazwa środka",
        placeholder: "Podaj nazwę środka",
      }),
      x.jsx(Ha, {
        select: !0,
        value: R,
        setValue: K,
        title: "Rodzaj składnika",
        placeholder: "Wybierz składnik",
        options: [
          { name: "ś.o.r.", value: "ś.o.r." },
          { name: "adiuwant", value: "adiuwant" },
          { name: "nawóz", value: "nawóz" },
          { name: "biopreparat", value: "biopreparat" },
          { name: "stymulator mineralny", value: "stymulator mineralny" },
        ],
      }),
      R === "ś.o.r." &&
        x.jsx(Ha, {
          select: !0,
          value: b,
          setValue: M,
          title: "Formulacja środka",
          placeholder: "Wybierz ś.o.r.",
          options: ml(Zr),
        }),
      R === "adiuwant" &&
        x.jsx(Ha, {
          select: !0,
          value: b,
          setValue: M,
          title: "Formulacja adiuwantu",
          placeholder: "Wybierz adiuwant",
          options: ml(Lr),
        }),
      R === "nawóz" &&
        x.jsx(Ha, {
          select: !0,
          value: b,
          setValue: M,
          title: "Formulacja nawozu",
          placeholder: "Wybierz nawóz",
          options: ml(Vr),
        }),
      R === "biopreparat" &&
        x.jsx(Ha, {
          select: !0,
          value: b,
          setValue: M,
          title: "Formulacja biopreparatu",
          placeholder: "Wybierz biopreparat",
          options: ml(Kr),
        }),
      R === "stymulator mineralny" &&
        x.jsx(Ha, {
          select: !0,
          value: b,
          setValue: M,
          title: "Formulacja stymulatora",
          placeholder: "Wybierz stymulator",
          options: ml(Jr),
        }),
      C.alert1 &&
        x.jsx("p", {
          className: "text-xl text-center text-red-500",
          children: C.alert1,
        }),
      C.alert2 &&
        x.jsx("p", {
          className: "text-xl text-center text-red-500",
          children: C.alert2,
        }),
      C.alert3 &&
        x.jsx("p", {
          className: "text-xl text-center text-red-500",
          children: C.alert3,
        }),
      v &&
        x.jsx("p", {
          className: "text-xl text-center text-red-500",
          children: "Wypełnij wszystkie pola",
        }),
    ],
  });
}
function c0({ children: A, title: W, showTitleOnMobile: X }) {
  const [v, H] = Gl.useState(X);
  return (
    Gl.useEffect(() => {
      window.innerWidth > 768 && H(!0);
    }, []),
    x.jsx("div", {
      className: "flex flex-col w-[310px] h-fit",
      children: x.jsxs("div", {
        className: "flex flex-col",
        children: [
          v ||
            (W !== "" &&
              x.jsx("p", {
                className: "text-xl text-center font-semibold mb-4",
                children: W.toUpperCase(),
              })),
          A,
        ],
      }),
    })
  );
}
function kr({ element: A, elements: W, setElements: X }) {
  const [v] = Gl.useState(!1),
    H = A.alert1 || A.alert2 || A.alert3;
  return x.jsxs("div", {
    className:
      "flex flex-col gap-y-2 w-full p-4 border-2 border-[var(--primary-color)] rounded-2xl",
    children: [
      x.jsx("div", {
        className: "flex w-full items-center justify-between gap-2",
        children: x.jsxs("div", {
          className: "flex items-center justify-between w-full gap-2",
          children: [
            x.jsx("p", {
              className: "text-2xl font-semibold",
              children: A.name,
            }),
            x.jsx("img", {
              src: "./delete.svg",
              alt: "delete",
              className:
                "w-12 cursor-pointer hover:shadow-[0_5_5px_var(--primary-color)] transition-shadow outline-0",
              onClick: () => X(W.filter((R) => R.name !== A.name)),
            }),
          ],
        }),
      }),
      x.jsxs("p", {
        className: "text-xl leading-snug",
        children: [
          x.jsx("span", { className: "font-semibold", children: A.type }),
          " ",
          A.subType,
        ],
      }),
      v &&
        H &&
        x.jsxs("div", {
          className:
            "mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg",
          children: [
            x.jsx("h3", {
              className: "font-semibold text-yellow-800 mb-2",
              children: "Uwagi:",
            }),
            x.jsxs("ul", {
              className: "space-y-1",
              children: [
                A.alert1 &&
                  x.jsxs("li", {
                    className: "text-yellow-700",
                    children: ["• ", A.alert1],
                  }),
                A.alert2 &&
                  x.jsxs("li", {
                    className: "text-yellow-700",
                    children: ["• ", A.alert2],
                  }),
                A.alert3 &&
                  x.jsxs("li", {
                    className: "text-yellow-700",
                    children: ["• ", A.alert3],
                  }),
              ],
            }),
          ],
        }),
    ],
  });
}
function $r() {
  const [A, W] = Gl.useState(!1),
    [X, v] = Gl.useState([]);
  return (
    Gl.useEffect(() => {
      v([]), W(!1);
    }, [A]),
    x.jsx("div", {
      className:
        "w-full min-h-screen h-full text-[var(--detail-color)] flex items-center flex-col bg-[#E6FFE6] p-2",
      children: x.jsxs("div", {
        className:
          "flex justify-center w-fit flex-wrap gap-10 p-4 bg-[var(--bg-color)] rounded-3xl shadow-[0_0_15px_var(--primary-color)]",
        children: [
          x.jsx(Qr, {
            title: "Kalkulator kolejności wlewania do opryskiwacza",
            resetBtnText: "Reset",
            reset: W,
          }),
          x.jsxs(c0, {
            title: "",
            showTitleOnMobile: !1,
            children: [
              x.jsx(Wr, { elements: X, setElements: v, isReset: A }),
              x.jsx("button", {
                className:
                  "w-full mt-5 border-2 border-[var(--detail-color)] rounded-2xl p-2 text-xl font-semibold hover:bg-[var(--detail-color)] hover:text-[var(--bg-color)] transition-colors",
                onClick: () => {
                  const H = wr.map(
                      (K) =>
                        K.type +
                        (K.symbol !== "-" ? K.symbol + " " : "") +
                        K.name
                    ),
                    R = [...X].sort((K, il) => {
                      const U = H.indexOf(K.type + K.subType),
                        b = H.indexOf(il.type + il.subType);
                      return (U === -1 ? 1 / 0 : U) - (b === -1 ? 1 / 0 : b);
                    });
                  v(R);
                },
                children: "Pokaż kolejność",
              }),
            ],
          }),
          X.length > 0 &&
            x.jsx(c0, {
              title: "",
              showTitleOnMobile: !1,
              children: x.jsx("div", {
                className: "flex flex-col gap-2",
                children: X.map((H, R) =>
                  x.jsx(kr, { element: H, elements: X, setElements: v }, R)
                ),
              }),
            }),
        ],
      }),
    })
  );
}
Xr.createRoot(document.getElementById("root")).render(
  x.jsx(Gl.StrictMode, { children: x.jsx($r, {}) })
);
