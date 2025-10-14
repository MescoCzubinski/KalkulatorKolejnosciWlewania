(function () {
  const W = document.createElement("link").relList;
  if (W && W.supports && W.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) v(j);
  new MutationObserver((j) => {
    for (const U of j)
      if (U.type === "childList")
        for (const L of U.addedNodes)
          L.tagName === "LINK" && L.rel === "modulepreload" && v(L);
  }).observe(document, { childList: !0, subtree: !0 });
  function Q(j) {
    const U = {};
    return (
      j.integrity && (U.integrity = j.integrity),
      j.referrerPolicy && (U.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (U.credentials = "include")
        : j.crossOrigin === "anonymous"
        ? (U.credentials = "omit")
        : (U.credentials = "same-origin"),
      U
    );
  }
  function v(j) {
    if (j.ep) return;
    j.ep = !0;
    const U = Q(j);
    fetch(j.href, U);
  }
})();
var Fi = { exports: {} },
  ge = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fo;
function qy() {
  if (Fo) return ge;
  Fo = 1;
  var T = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.fragment");
  function Q(v, j, U) {
    var L = null;
    if (
      (U !== void 0 && (L = "" + U),
      j.key !== void 0 && (L = "" + j.key),
      "key" in j)
    ) {
      U = {};
      for (var ol in j) ol !== "key" && (U[ol] = j[ol]);
    } else U = j;
    return (
      (j = U.ref),
      { $$typeof: T, type: v, key: L, ref: j !== void 0 ? j : null, props: U }
    );
  }
  return (ge.Fragment = W), (ge.jsx = Q), (ge.jsxs = Q), ge;
}
var Io;
function Yy() {
  return Io || ((Io = 1), (Fi.exports = qy())), Fi.exports;
}
var N = Yy(),
  Ii = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Po;
function By() {
  if (Po) return Z;
  Po = 1;
  var T = Symbol.for("react.transitional.element"),
    W = Symbol.for("react.portal"),
    Q = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    U = Symbol.for("react.consumer"),
    L = Symbol.for("react.context"),
    ol = Symbol.for("react.forward_ref"),
    R = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    X = Symbol.iterator;
  function P(s) {
    return s === null || typeof s != "object"
      ? null
      : ((s = (X && s[X]) || s["@@iterator"]),
        typeof s == "function" ? s : null);
  }
  var dl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Rl = Object.assign,
    rl = {};
  function Sl(s, E, M) {
    (this.props = s),
      (this.context = E),
      (this.refs = rl),
      (this.updater = M || dl);
  }
  (Sl.prototype.isReactComponent = {}),
    (Sl.prototype.setState = function (s, E) {
      if (typeof s != "object" && typeof s != "function" && s != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, s, E, "setState");
    }),
    (Sl.prototype.forceUpdate = function (s) {
      this.updater.enqueueForceUpdate(this, s, "forceUpdate");
    });
  function Cl() {}
  Cl.prototype = Sl.prototype;
  function pl(s, E, M) {
    (this.props = s),
      (this.context = E),
      (this.refs = rl),
      (this.updater = M || dl);
  }
  var cl = (pl.prototype = new Cl());
  (cl.constructor = pl), Rl(cl, Sl.prototype), (cl.isPureReactComponent = !0);
  var mt = Array.isArray,
    $ = { H: null, A: null, T: null, S: null, V: null },
    wl = Object.prototype.hasOwnProperty;
  function Jl(s, E, M, O, H, F) {
    return (
      (M = F.ref),
      { $$typeof: T, type: s, key: E, ref: M !== void 0 ? M : null, props: F }
    );
  }
  function Wl(s, E) {
    return Jl(s.type, E, void 0, void 0, void 0, s.props);
  }
  function zt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === T;
  }
  function Ha(s) {
    var E = { "=": "=0", ":": "=2" };
    return (
      "$" +
      s.replace(/[=:]/g, function (M) {
        return E[M];
      })
    );
  }
  var _t = /\/+/g;
  function Hl(s, E) {
    return typeof s == "object" && s !== null && s.key != null
      ? Ha("" + s.key)
      : E.toString(36);
  }
  function ya() {}
  function va(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (
          (typeof s.status == "string"
            ? s.then(ya, ya)
            : ((s.status = "pending"),
              s.then(
                function (E) {
                  s.status === "pending" &&
                    ((s.status = "fulfilled"), (s.value = E));
                },
                function (E) {
                  s.status === "pending" &&
                    ((s.status = "rejected"), (s.reason = E));
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
  function ql(s, E, M, O, H) {
    var F = typeof s;
    (F === "undefined" || F === "boolean") && (s = null);
    var C = !1;
    if (s === null) C = !0;
    else
      switch (F) {
        case "bigint":
        case "string":
        case "number":
          C = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case T:
            case W:
              C = !0;
              break;
            case A:
              return (C = s._init), ql(C(s._payload), E, M, O, H);
          }
      }
    if (C)
      return (
        (H = H(s)),
        (C = O === "" ? "." + Hl(s, 0) : O),
        mt(H)
          ? ((M = ""),
            C != null && (M = C.replace(_t, "$&/") + "/"),
            ql(H, E, M, "", function (Zt) {
              return Zt;
            }))
          : H != null &&
            (zt(H) &&
              (H = Wl(
                H,
                M +
                  (H.key == null || (s && s.key === H.key)
                    ? ""
                    : ("" + H.key).replace(_t, "$&/") + "/") +
                  C
              )),
            E.push(H)),
        1
      );
    C = 0;
    var kl = O === "" ? "." : O + ":";
    if (mt(s))
      for (var yl = 0; yl < s.length; yl++)
        (O = s[yl]), (F = kl + Hl(O, yl)), (C += ql(O, E, M, F, H));
    else if (((yl = P(s)), typeof yl == "function"))
      for (s = yl.call(s), yl = 0; !(O = s.next()).done; )
        (O = O.value), (F = kl + Hl(O, yl++)), (C += ql(O, E, M, F, H));
    else if (F === "object") {
      if (typeof s.then == "function") return ql(va(s), E, M, O, H);
      throw (
        ((E = String(s)),
        Error(
          "Objects are not valid as a React child (found: " +
            (E === "[object Object]"
              ? "object with keys {" + Object.keys(s).join(", ") + "}"
              : E) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return C;
  }
  function S(s, E, M) {
    if (s == null) return s;
    var O = [],
      H = 0;
    return (
      ql(s, O, "", "", function (F) {
        return E.call(M, F, H++);
      }),
      O
    );
  }
  function _(s) {
    if (s._status === -1) {
      var E = s._result;
      (E = E()),
        E.then(
          function (M) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 1), (s._result = M));
          },
          function (M) {
            (s._status === 0 || s._status === -1) &&
              ((s._status = 2), (s._result = M));
          }
        ),
        s._status === -1 && ((s._status = 0), (s._result = E));
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
            var E = new window.ErrorEvent("error", {
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
            if (!window.dispatchEvent(E)) return;
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
      map: S,
      forEach: function (s, E, M) {
        S(
          s,
          function () {
            E.apply(this, arguments);
          },
          M
        );
      },
      count: function (s) {
        var E = 0;
        return (
          S(s, function () {
            E++;
          }),
          E
        );
      },
      toArray: function (s) {
        return (
          S(s, function (E) {
            return E;
          }) || []
        );
      },
      only: function (s) {
        if (!zt(s))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return s;
      },
    }),
    (Z.Component = Sl),
    (Z.Fragment = Q),
    (Z.Profiler = j),
    (Z.PureComponent = pl),
    (Z.StrictMode = v),
    (Z.Suspense = R),
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
    (Z.cloneElement = function (s, E, M) {
      if (s == null)
        throw Error(
          "The argument must be a React element, but you passed " + s + "."
        );
      var O = Rl({}, s.props),
        H = s.key,
        F = void 0;
      if (E != null)
        for (C in (E.ref !== void 0 && (F = void 0),
        E.key !== void 0 && (H = "" + E.key),
        E))
          !wl.call(E, C) ||
            C === "key" ||
            C === "__self" ||
            C === "__source" ||
            (C === "ref" && E.ref === void 0) ||
            (O[C] = E[C]);
      var C = arguments.length - 2;
      if (C === 1) O.children = M;
      else if (1 < C) {
        for (var kl = Array(C), yl = 0; yl < C; yl++)
          kl[yl] = arguments[yl + 2];
        O.children = kl;
      }
      return Jl(s.type, H, void 0, void 0, F, O);
    }),
    (Z.createContext = function (s) {
      return (
        (s = {
          $$typeof: L,
          _currentValue: s,
          _currentValue2: s,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (s.Provider = s),
        (s.Consumer = { $$typeof: U, _context: s }),
        s
      );
    }),
    (Z.createElement = function (s, E, M) {
      var O,
        H = {},
        F = null;
      if (E != null)
        for (O in (E.key !== void 0 && (F = "" + E.key), E))
          wl.call(E, O) &&
            O !== "key" &&
            O !== "__self" &&
            O !== "__source" &&
            (H[O] = E[O]);
      var C = arguments.length - 2;
      if (C === 1) H.children = M;
      else if (1 < C) {
        for (var kl = Array(C), yl = 0; yl < C; yl++)
          kl[yl] = arguments[yl + 2];
        H.children = kl;
      }
      if (s && s.defaultProps)
        for (O in ((C = s.defaultProps), C)) H[O] === void 0 && (H[O] = C[O]);
      return Jl(s, F, void 0, void 0, null, H);
    }),
    (Z.createRef = function () {
      return { current: null };
    }),
    (Z.forwardRef = function (s) {
      return { $$typeof: ol, render: s };
    }),
    (Z.isValidElement = zt),
    (Z.lazy = function (s) {
      return { $$typeof: A, _payload: { _status: -1, _result: s }, _init: _ };
    }),
    (Z.memo = function (s, E) {
      return { $$typeof: b, type: s, compare: E === void 0 ? null : E };
    }),
    (Z.startTransition = function (s) {
      var E = $.T,
        M = {};
      $.T = M;
      try {
        var O = s(),
          H = $.S;
        H !== null && H(M, O),
          typeof O == "object" &&
            O !== null &&
            typeof O.then == "function" &&
            O.then(fl, B);
      } catch (F) {
        B(F);
      } finally {
        $.T = E;
      }
    }),
    (Z.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (Z.use = function (s) {
      return $.H.use(s);
    }),
    (Z.useActionState = function (s, E, M) {
      return $.H.useActionState(s, E, M);
    }),
    (Z.useCallback = function (s, E) {
      return $.H.useCallback(s, E);
    }),
    (Z.useContext = function (s) {
      return $.H.useContext(s);
    }),
    (Z.useDebugValue = function () {}),
    (Z.useDeferredValue = function (s, E) {
      return $.H.useDeferredValue(s, E);
    }),
    (Z.useEffect = function (s, E, M) {
      var O = $.H;
      if (typeof M == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return O.useEffect(s, E);
    }),
    (Z.useId = function () {
      return $.H.useId();
    }),
    (Z.useImperativeHandle = function (s, E, M) {
      return $.H.useImperativeHandle(s, E, M);
    }),
    (Z.useInsertionEffect = function (s, E) {
      return $.H.useInsertionEffect(s, E);
    }),
    (Z.useLayoutEffect = function (s, E) {
      return $.H.useLayoutEffect(s, E);
    }),
    (Z.useMemo = function (s, E) {
      return $.H.useMemo(s, E);
    }),
    (Z.useOptimistic = function (s, E) {
      return $.H.useOptimistic(s, E);
    }),
    (Z.useReducer = function (s, E, M) {
      return $.H.useReducer(s, E, M);
    }),
    (Z.useRef = function (s) {
      return $.H.useRef(s);
    }),
    (Z.useState = function (s) {
      return $.H.useState(s);
    }),
    (Z.useSyncExternalStore = function (s, E, M) {
      return $.H.useSyncExternalStore(s, E, M);
    }),
    (Z.useTransition = function () {
      return $.H.useTransition();
    }),
    (Z.version = "19.1.1"),
    Z
  );
}
var ld;
function uc() {
  return ld || ((ld = 1), (Ii.exports = By())), Ii.exports;
}
var nt = uc(),
  Pi = { exports: {} },
  Se = {},
  lc = { exports: {} },
  tc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td;
function Gy() {
  return (
    td ||
      ((td = 1),
      (function (T) {
        function W(S, _) {
          var B = S.length;
          S.push(_);
          l: for (; 0 < B; ) {
            var fl = (B - 1) >>> 1,
              s = S[fl];
            if (0 < j(s, _)) (S[fl] = _), (S[B] = s), (B = fl);
            else break l;
          }
        }
        function Q(S) {
          return S.length === 0 ? null : S[0];
        }
        function v(S) {
          if (S.length === 0) return null;
          var _ = S[0],
            B = S.pop();
          if (B !== _) {
            S[0] = B;
            l: for (var fl = 0, s = S.length, E = s >>> 1; fl < E; ) {
              var M = 2 * (fl + 1) - 1,
                O = S[M],
                H = M + 1,
                F = S[H];
              if (0 > j(O, B))
                H < s && 0 > j(F, O)
                  ? ((S[fl] = F), (S[H] = B), (fl = H))
                  : ((S[fl] = O), (S[M] = B), (fl = M));
              else if (H < s && 0 > j(F, B)) (S[fl] = F), (S[H] = B), (fl = H);
              else break l;
            }
          }
          return _;
        }
        function j(S, _) {
          var B = S.sortIndex - _.sortIndex;
          return B !== 0 ? B : S.id - _.id;
        }
        if (
          ((T.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var U = performance;
          T.unstable_now = function () {
            return U.now();
          };
        } else {
          var L = Date,
            ol = L.now();
          T.unstable_now = function () {
            return L.now() - ol;
          };
        }
        var R = [],
          b = [],
          A = 1,
          X = null,
          P = 3,
          dl = !1,
          Rl = !1,
          rl = !1,
          Sl = !1,
          Cl = typeof setTimeout == "function" ? setTimeout : null,
          pl = typeof clearTimeout == "function" ? clearTimeout : null,
          cl = typeof setImmediate < "u" ? setImmediate : null;
        function mt(S) {
          for (var _ = Q(b); _ !== null; ) {
            if (_.callback === null) v(b);
            else if (_.startTime <= S)
              v(b), (_.sortIndex = _.expirationTime), W(R, _);
            else break;
            _ = Q(b);
          }
        }
        function $(S) {
          if (((rl = !1), mt(S), !Rl))
            if (Q(R) !== null) (Rl = !0), wl || ((wl = !0), Hl());
            else {
              var _ = Q(b);
              _ !== null && ql($, _.startTime - S);
            }
        }
        var wl = !1,
          Jl = -1,
          Wl = 5,
          zt = -1;
        function Ha() {
          return Sl ? !0 : !(T.unstable_now() - zt < Wl);
        }
        function _t() {
          if (((Sl = !1), wl)) {
            var S = T.unstable_now();
            zt = S;
            var _ = !0;
            try {
              l: {
                (Rl = !1), rl && ((rl = !1), pl(Jl), (Jl = -1)), (dl = !0);
                var B = P;
                try {
                  t: {
                    for (
                      mt(S), X = Q(R);
                      X !== null && !(X.expirationTime > S && Ha());

                    ) {
                      var fl = X.callback;
                      if (typeof fl == "function") {
                        (X.callback = null), (P = X.priorityLevel);
                        var s = fl(X.expirationTime <= S);
                        if (((S = T.unstable_now()), typeof s == "function")) {
                          (X.callback = s), mt(S), (_ = !0);
                          break t;
                        }
                        X === Q(R) && v(R), mt(S);
                      } else v(R);
                      X = Q(R);
                    }
                    if (X !== null) _ = !0;
                    else {
                      var E = Q(b);
                      E !== null && ql($, E.startTime - S), (_ = !1);
                    }
                  }
                  break l;
                } finally {
                  (X = null), (P = B), (dl = !1);
                }
                _ = void 0;
              }
            } finally {
              _ ? Hl() : (wl = !1);
            }
          }
        }
        var Hl;
        if (typeof cl == "function")
          Hl = function () {
            cl(_t);
          };
        else if (typeof MessageChannel < "u") {
          var ya = new MessageChannel(),
            va = ya.port2;
          (ya.port1.onmessage = _t),
            (Hl = function () {
              va.postMessage(null);
            });
        } else
          Hl = function () {
            Cl(_t, 0);
          };
        function ql(S, _) {
          Jl = Cl(function () {
            S(T.unstable_now());
          }, _);
        }
        (T.unstable_IdlePriority = 5),
          (T.unstable_ImmediatePriority = 1),
          (T.unstable_LowPriority = 4),
          (T.unstable_NormalPriority = 3),
          (T.unstable_Profiling = null),
          (T.unstable_UserBlockingPriority = 2),
          (T.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (T.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Wl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (T.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (T.unstable_next = function (S) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var _ = 3;
                break;
              default:
                _ = P;
            }
            var B = P;
            P = _;
            try {
              return S();
            } finally {
              P = B;
            }
          }),
          (T.unstable_requestPaint = function () {
            Sl = !0;
          }),
          (T.unstable_runWithPriority = function (S, _) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var B = P;
            P = S;
            try {
              return _();
            } finally {
              P = B;
            }
          }),
          (T.unstable_scheduleCallback = function (S, _, B) {
            var fl = T.unstable_now();
            switch (
              (typeof B == "object" && B !== null
                ? ((B = B.delay),
                  (B = typeof B == "number" && 0 < B ? fl + B : fl))
                : (B = fl),
              S)
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
              (S = {
                id: A++,
                callback: _,
                priorityLevel: S,
                startTime: B,
                expirationTime: s,
                sortIndex: -1,
              }),
              B > fl
                ? ((S.sortIndex = B),
                  W(b, S),
                  Q(R) === null &&
                    S === Q(b) &&
                    (rl ? (pl(Jl), (Jl = -1)) : (rl = !0), ql($, B - fl)))
                : ((S.sortIndex = s),
                  W(R, S),
                  Rl || dl || ((Rl = !0), wl || ((wl = !0), Hl()))),
              S
            );
          }),
          (T.unstable_shouldYield = Ha),
          (T.unstable_wrapCallback = function (S) {
            var _ = P;
            return function () {
              var B = P;
              P = _;
              try {
                return S.apply(this, arguments);
              } finally {
                P = B;
              }
            };
          });
      })(tc)),
    tc
  );
}
var ad;
function Xy() {
  return ad || ((ad = 1), (lc.exports = Gy())), lc.exports;
}
var ac = { exports: {} },
  Gl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud;
function Cy() {
  if (ud) return Gl;
  ud = 1;
  var T = uc();
  function W(R) {
    var b = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        b += "&args[]=" + encodeURIComponent(arguments[A]);
    }
    return (
      "Minified React error #" +
      R +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Q() {}
  var v = {
      d: {
        f: Q,
        r: function () {
          throw Error(W(522));
        },
        D: Q,
        C: Q,
        L: Q,
        m: Q,
        X: Q,
        S: Q,
        M: Q,
      },
      p: 0,
      findDOMNode: null,
    },
    j = Symbol.for("react.portal");
  function U(R, b, A) {
    var X =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: j,
      key: X == null ? null : "" + X,
      children: R,
      containerInfo: b,
      implementation: A,
    };
  }
  var L = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ol(R, b) {
    if (R === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Gl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
    (Gl.createPortal = function (R, b) {
      var A =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(W(299));
      return U(R, b, null, A);
    }),
    (Gl.flushSync = function (R) {
      var b = L.T,
        A = v.p;
      try {
        if (((L.T = null), (v.p = 2), R)) return R();
      } finally {
        (L.T = b), (v.p = A), v.d.f();
      }
    }),
    (Gl.preconnect = function (R, b) {
      typeof R == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        v.d.C(R, b));
    }),
    (Gl.prefetchDNS = function (R) {
      typeof R == "string" && v.d.D(R);
    }),
    (Gl.preinit = function (R, b) {
      if (typeof R == "string" && b && typeof b.as == "string") {
        var A = b.as,
          X = ol(A, b.crossOrigin),
          P = typeof b.integrity == "string" ? b.integrity : void 0,
          dl = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        A === "style"
          ? v.d.S(R, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: X,
              integrity: P,
              fetchPriority: dl,
            })
          : A === "script" &&
            v.d.X(R, {
              crossOrigin: X,
              integrity: P,
              fetchPriority: dl,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Gl.preinitModule = function (R, b) {
      if (typeof R == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var A = ol(b.as, b.crossOrigin);
            v.d.M(R, {
              crossOrigin: A,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && v.d.M(R);
    }),
    (Gl.preload = function (R, b) {
      if (
        typeof R == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var A = b.as,
          X = ol(A, b.crossOrigin);
        v.d.L(R, A, {
          crossOrigin: X,
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
    (Gl.preloadModule = function (R, b) {
      if (typeof R == "string")
        if (b) {
          var A = ol(b.as, b.crossOrigin);
          v.d.m(R, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: A,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else v.d.m(R);
    }),
    (Gl.requestFormReset = function (R) {
      v.d.r(R);
    }),
    (Gl.unstable_batchedUpdates = function (R, b) {
      return R(b);
    }),
    (Gl.useFormState = function (R, b, A) {
      return L.H.useFormState(R, b, A);
    }),
    (Gl.useFormStatus = function () {
      return L.H.useHostTransitionStatus();
    }),
    (Gl.version = "19.1.1"),
    Gl
  );
}
var ed;
function Qy() {
  if (ed) return ac.exports;
  ed = 1;
  function T() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (W) {
        console.error(W);
      }
  }
  return T(), (ac.exports = Cy()), ac.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function Zy() {
  if (nd) return Se;
  nd = 1;
  var T = Xy(),
    W = uc(),
    Q = Qy();
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
  function j(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function U(l) {
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
  function L(l) {
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
  function ol(l) {
    if (U(l) !== l) throw Error(v(188));
  }
  function R(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = U(l)), t === null)) throw Error(v(188));
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
          if (n === a) return ol(e), l;
          if (n === u) return ol(e), t;
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (a.return !== u.return) (a = e), (u = n);
      else {
        for (var f = !1, i = e.child; i; ) {
          if (i === a) {
            (f = !0), (a = e), (u = n);
            break;
          }
          if (i === u) {
            (f = !0), (u = e), (a = n);
            break;
          }
          i = i.sibling;
        }
        if (!f) {
          for (i = n.child; i; ) {
            if (i === a) {
              (f = !0), (a = n), (u = e);
              break;
            }
            if (i === u) {
              (f = !0), (u = n), (a = e);
              break;
            }
            i = i.sibling;
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
  var A = Object.assign,
    X = Symbol.for("react.element"),
    P = Symbol.for("react.transitional.element"),
    dl = Symbol.for("react.portal"),
    Rl = Symbol.for("react.fragment"),
    rl = Symbol.for("react.strict_mode"),
    Sl = Symbol.for("react.profiler"),
    Cl = Symbol.for("react.provider"),
    pl = Symbol.for("react.consumer"),
    cl = Symbol.for("react.context"),
    mt = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    wl = Symbol.for("react.suspense_list"),
    Jl = Symbol.for("react.memo"),
    Wl = Symbol.for("react.lazy"),
    zt = Symbol.for("react.activity"),
    Ha = Symbol.for("react.memo_cache_sentinel"),
    _t = Symbol.iterator;
  function Hl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (_t && l[_t]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var ya = Symbol.for("react.client.reference");
  function va(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ya ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Rl:
        return "Fragment";
      case Sl:
        return "Profiler";
      case rl:
        return "StrictMode";
      case $:
        return "Suspense";
      case wl:
        return "SuspenseList";
      case zt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case dl:
          return "Portal";
        case cl:
          return (l.displayName || "Context") + ".Provider";
        case pl:
          return (l._context.displayName || "Context") + ".Consumer";
        case mt:
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
        case Wl:
          (t = l._payload), (l = l._init);
          try {
            return va(l(t));
          } catch {}
      }
    return null;
  }
  var ql = Array.isArray,
    S = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _ = Q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    B = { pending: !1, data: null, method: null, action: null },
    fl = [],
    s = -1;
  function E(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || ((l.current = fl[s]), (fl[s] = null), s--);
  }
  function O(l, t) {
    s++, (fl[s] = l.current), (l.current = t);
  }
  var H = E(null),
    F = E(null),
    C = E(null),
    kl = E(null);
  function yl(l, t) {
    switch ((O(C, t), O(F, l), O(H, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Oo(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = Oo(t)), (l = _o(t, l));
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
    M(H), O(H, l);
  }
  function Zt() {
    M(H), M(F), M(C);
  }
  function qn(l) {
    l.memoizedState !== null && O(kl, l);
    var t = H.current,
      a = _o(t, l.type);
    t !== a && (O(F, l), O(H, a));
  }
  function ze(l) {
    F.current === l && (M(H), M(F)),
      kl.current === l && (M(kl), (de._currentValue = B));
  }
  var Yn = Object.prototype.hasOwnProperty,
    Bn = T.unstable_scheduleCallback,
    Gn = T.unstable_cancelCallback,
    yd = T.unstable_shouldYield,
    vd = T.unstable_requestPaint,
    bt = T.unstable_now,
    md = T.unstable_getCurrentPriorityLevel,
    ec = T.unstable_ImmediatePriority,
    nc = T.unstable_UserBlockingPriority,
    be = T.unstable_NormalPriority,
    hd = T.unstable_LowPriority,
    fc = T.unstable_IdlePriority,
    gd = T.log,
    Sd = T.unstable_setDisableYieldValue,
    bu = null,
    $l = null;
  function Vt(l) {
    if (
      (typeof gd == "function" && Sd(l),
      $l && typeof $l.setStrictMode == "function")
    )
      try {
        $l.setStrictMode(bu, l);
      } catch {}
  }
  var Fl = Math.clz32 ? Math.clz32 : pd,
    zd = Math.log,
    bd = Math.LN2;
  function pd(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((zd(l) / bd) | 0)) | 0;
  }
  var pe = 256,
    Ee = 4194304;
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
  function Te(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      f = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return (
      i !== 0
        ? ((u = i & ~n),
          u !== 0
            ? (e = ma(u))
            : ((f &= i),
              f !== 0
                ? (e = ma(f))
                : a || ((a = i & ~l), a !== 0 && (e = ma(a)))))
        : ((i = u & ~n),
          i !== 0
            ? (e = ma(i))
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
  function pu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Ed(l, t) {
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
  function ic() {
    var l = pe;
    return (pe <<= 1), (pe & 4194048) === 0 && (pe = 256), l;
  }
  function cc() {
    var l = Ee;
    return (Ee <<= 1), (Ee & 62914560) === 0 && (Ee = 4194304), l;
  }
  function Xn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Eu(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function Td(l, t, a, u, e, n) {
    var f = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var i = l.entanglements,
      c = l.expirationTimes,
      y = l.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var g = 31 - Fl(a),
        p = 1 << g;
      (i[g] = 0), (c[g] = -1);
      var m = y[g];
      if (m !== null)
        for (y[g] = null, g = 0; g < m.length; g++) {
          var h = m[g];
          h !== null && (h.lane &= -536870913);
        }
      a &= ~p;
    }
    u !== 0 && sc(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function sc(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var u = 31 - Fl(t);
    (l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 4194090));
  }
  function rc(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Fl(a),
        e = 1 << u;
      (e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e);
    }
  }
  function Cn(l) {
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
  function Qn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function oc() {
    var l = _.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : Ko(l.type));
  }
  function Ad(l, t) {
    var a = _.p;
    try {
      return (_.p = l), t();
    } finally {
      _.p = a;
    }
  }
  var Lt = Math.random().toString(36).slice(2),
    Yl = "__reactFiber$" + Lt,
    Ql = "__reactProps$" + Lt,
    qa = "__reactContainer$" + Lt,
    Zn = "__reactEvents$" + Lt,
    Od = "__reactListeners$" + Lt,
    _d = "__reactHandles$" + Lt,
    dc = "__reactResources$" + Lt,
    Tu = "__reactMarker$" + Lt;
  function Vn(l) {
    delete l[Yl], delete l[Ql], delete l[Zn], delete l[Od], delete l[_d];
  }
  function Ya(l) {
    var t = l[Yl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[qa] || a[Yl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Ro(l); l !== null; ) {
            if ((a = l[Yl])) return a;
            l = Ro(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Ba(l) {
    if ((l = l[Yl] || l[qa])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Au(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Ga(l) {
    var t = l[dc];
    return (
      t ||
        (t = l[dc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function _l(l) {
    l[Tu] = !0;
  }
  var yc = new Set(),
    vc = {};
  function ha(l, t) {
    Xa(l, t), Xa(l + "Capture", t);
  }
  function Xa(l, t) {
    for (vc[l] = t, l = 0; l < t.length; l++) yc.add(t[l]);
  }
  var Md = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    mc = {},
    hc = {};
  function Dd(l) {
    return Yn.call(hc, l)
      ? !0
      : Yn.call(mc, l)
      ? !1
      : Md.test(l)
      ? (hc[l] = !0)
      : ((mc[l] = !0), !1);
  }
  function Ae(l, t, a) {
    if (Dd(t))
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
  function Mt(l, t, a, u) {
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
  var Ln, gc;
  function Ca(l) {
    if (Ln === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (Ln = (t && t[1]) || ""),
          (gc =
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
      gc
    );
  }
  var Kn = !1;
  function wn(l, t) {
    if (!l || Kn) return "";
    Kn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var p = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(p.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(p, []);
                } catch (h) {
                  var m = h;
                }
                Reflect.construct(l, [], p);
              } else {
                try {
                  p.call();
                } catch (h) {
                  m = h;
                }
                l.call(p.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (h) {
                m = h;
              }
              (p = l()) &&
                typeof p.catch == "function" &&
                p.catch(function () {});
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
        i = n[1];
      if (f && i) {
        var c = f.split(`
`),
          y = i.split(`
`);
        for (
          e = u = 0;
          u < c.length && !c[u].includes("DetermineComponentFrameRoot");

        )
          u++;
        for (; e < y.length && !y[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === c.length || e === y.length)
          for (
            u = c.length - 1, e = y.length - 1;
            1 <= u && 0 <= e && c[u] !== y[e];

          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (c[u] !== y[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || c[u] !== y[e])) {
                  var g =
                    `
` + c[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", l.displayName)),
                    g
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      (Kn = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Ca(a) : "";
  }
  function Ud(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ca(l.type);
      case 16:
        return Ca("Lazy");
      case 13:
        return Ca("Suspense");
      case 19:
        return Ca("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Ca("Activity");
      default:
        return "";
    }
  }
  function Sc(l) {
    try {
      var t = "";
      do (t += Ud(l)), (l = l.return);
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
  function ft(l) {
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
  function zc(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Rd(l) {
    var t = zc(l) ? "checked" : "value",
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
    l._valueTracker || (l._valueTracker = Rd(l));
  }
  function bc(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = zc(l) ? (l.checked ? "true" : "false") : l.value),
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
  var jd = /[\n"\\]/g;
  function it(l) {
    return l.replace(jd, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jn(l, t, a, u, e, n, f, i) {
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
            (l.value = "" + ft(t))
          : l.value !== "" + ft(t) && (l.value = "" + ft(t))
        : (f !== "submit" && f !== "reset") || l.removeAttribute("value"),
      t != null
        ? Wn(l, f, ft(t))
        : a != null
        ? Wn(l, f, ft(a))
        : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.name = "" + ft(i))
        : l.removeAttribute("name");
  }
  function pc(l, t, a, u, e, n, f, i) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + ft(a) : ""),
        (t = t != null ? "" + ft(t) : a),
        i || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = i ? l.checked : !!u),
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
  function Qa(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        (e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ft(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          (l[e].selected = !0), u && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ec(l, t, a) {
    if (
      t != null &&
      ((t = "" + ft(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ft(a) : "";
  }
  function Tc(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(v(92));
        if (ql(u)) {
          if (1 < u.length) throw Error(v(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), (t = a);
    }
    (a = ft(t)),
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
  var xd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ac(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : u
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || xd.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function Oc(l, t, a) {
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
        (u = t[e]), t.hasOwnProperty(e) && a[e] !== u && Ac(l, e, u);
    } else for (var n in t) t.hasOwnProperty(n) && Ac(l, n, t[n]);
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
  var Nd = new Map([
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
    Hd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function De(l) {
    return Hd.test("" + l)
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
  function _c(l) {
    var t = Ba(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ql] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Jn(
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
                'input[name="' + it("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Ql] || null;
                if (!e) throw Error(v(90));
                Jn(
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
              (u = a[t]), u.form === l.form && bc(u);
          }
          break l;
        case "textarea":
          Ec(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && Qa(l, !!a.multiple, t, !1);
      }
    }
  }
  var In = !1;
  function Mc(l, t, a) {
    if (In) return l(t, a);
    In = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((In = !1),
        (Va !== null || La !== null) &&
          (vn(), Va && ((t = Va), (l = La), (La = Va = null), _c(t), l)))
      )
        for (t = 0; t < l.length; t++) _c(l[t]);
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
  var Dt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Pn = !1;
  if (Dt)
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
  var Kt = null,
    lf = null,
    Ue = null;
  function Dc() {
    if (Ue) return Ue;
    var l,
      t = lf,
      a = t.length,
      u,
      e = "value" in Kt ? Kt.value : Kt.textContent,
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
  function je() {
    return !0;
  }
  function Uc() {
    return !1;
  }
  function Zl(l) {
    function t(a, u, e, n, f) {
      (this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = f),
        (this.currentTarget = null);
      for (var i in l)
        l.hasOwnProperty(i) && ((a = l[i]), (this[i] = a ? a(n) : n[i]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? je
          : Uc),
        (this.isPropagationStopped = Uc),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = je));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = je));
        },
        persist: function () {},
        isPersistent: je,
      }),
      t
    );
  }
  var ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xe = Zl(ga),
    Mu = A({}, ga, { view: 0, detail: 0 }),
    qd = Zl(Mu),
    tf,
    af,
    Du,
    Ne = A({}, Mu, {
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
    Rc = Zl(Ne),
    Yd = A({}, Ne, { dataTransfer: 0 }),
    Bd = Zl(Yd),
    Gd = A({}, Mu, { relatedTarget: 0 }),
    uf = Zl(Gd),
    Xd = A({}, ga, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Cd = Zl(Xd),
    Qd = A({}, ga, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Zd = Zl(Qd),
    Vd = A({}, ga, { data: 0 }),
    jc = Zl(Vd),
    Ld = {
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
    Kd = {
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
    wd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Jd(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = wd[l])
      ? !!t[l]
      : !1;
  }
  function ef() {
    return Jd;
  }
  var Wd = A({}, Mu, {
      key: function (l) {
        if (l.key) {
          var t = Ld[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Re(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Kd[l.keyCode] || "Unidentified"
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
    kd = Zl(Wd),
    $d = A({}, Ne, {
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
    xc = Zl($d),
    Fd = A({}, Mu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ef,
    }),
    Id = Zl(Fd),
    Pd = A({}, ga, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    l0 = Zl(Pd),
    t0 = A({}, Ne, {
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
    a0 = Zl(t0),
    u0 = A({}, ga, { newState: 0, oldState: 0 }),
    e0 = Zl(u0),
    n0 = [9, 13, 27, 32],
    nf = Dt && "CompositionEvent" in window,
    Uu = null;
  Dt && "documentMode" in document && (Uu = document.documentMode);
  var f0 = Dt && "TextEvent" in window && !Uu,
    Nc = Dt && (!nf || (Uu && 8 < Uu && 11 >= Uu)),
    Hc = " ",
    qc = !1;
  function Yc(l, t) {
    switch (l) {
      case "keyup":
        return n0.indexOf(t.keyCode) !== -1;
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
  function Bc(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ka = !1;
  function i0(l, t) {
    switch (l) {
      case "compositionend":
        return Bc(t);
      case "keypress":
        return t.which !== 32 ? null : ((qc = !0), Hc);
      case "textInput":
        return (l = t.data), l === Hc && qc ? null : l;
      default:
        return null;
    }
  }
  function c0(l, t) {
    if (Ka)
      return l === "compositionend" || (!nf && Yc(l, t))
        ? ((l = Dc()), (Ue = lf = Kt = null), (Ka = !1), l)
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
        return Nc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var s0 = {
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
  function Gc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!s0[l.type] : t === "textarea";
  }
  function Xc(l, t, a, u) {
    Va ? (La ? La.push(u) : (La = [u])) : (Va = u),
      (t = bn(t, "onChange")),
      0 < t.length &&
        ((a = new xe("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t }));
  }
  var Ru = null,
    ju = null;
  function r0(l) {
    bo(l, 0);
  }
  function He(l) {
    var t = Au(l);
    if (bc(t)) return l;
  }
  function Cc(l, t) {
    if (l === "change") return t;
  }
  var Qc = !1;
  if (Dt) {
    var ff;
    if (Dt) {
      var cf = "oninput" in document;
      if (!cf) {
        var Zc = document.createElement("div");
        Zc.setAttribute("oninput", "return;"),
          (cf = typeof Zc.oninput == "function");
      }
      ff = cf;
    } else ff = !1;
    Qc = ff && (!document.documentMode || 9 < document.documentMode);
  }
  function Vc() {
    Ru && (Ru.detachEvent("onpropertychange", Lc), (ju = Ru = null));
  }
  function Lc(l) {
    if (l.propertyName === "value" && He(ju)) {
      var t = [];
      Xc(t, ju, l, Fn(l)), Mc(r0, t);
    }
  }
  function o0(l, t, a) {
    l === "focusin"
      ? (Vc(), (Ru = t), (ju = a), Ru.attachEvent("onpropertychange", Lc))
      : l === "focusout" && Vc();
  }
  function d0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return He(ju);
  }
  function y0(l, t) {
    if (l === "click") return He(t);
  }
  function v0(l, t) {
    if (l === "input" || l === "change") return He(t);
  }
  function m0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Il = typeof Object.is == "function" ? Object.is : m0;
  function xu(l, t) {
    if (Il(l, t)) return !0;
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
      if (!Yn.call(t, e) || !Il(l[e], t[e])) return !1;
    }
    return !0;
  }
  function Kc(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wc(l, t) {
    var a = Kc(l);
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
      a = Kc(a);
    }
  }
  function Jc(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Jc(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Wc(l) {
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
  var h0 = Dt && "documentMode" in document && 11 >= document.documentMode,
    wa = null,
    rf = null,
    Nu = null,
    of = !1;
  function kc(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    of ||
      wa == null ||
      wa !== Me(u) ||
      ((u = wa),
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
      (Nu && xu(Nu, u)) ||
        ((Nu = u),
        (u = bn(rf, "onSelect")),
        0 < u.length &&
          ((t = new xe("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = wa))));
  }
  function Sa(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ja = {
      animationend: Sa("Animation", "AnimationEnd"),
      animationiteration: Sa("Animation", "AnimationIteration"),
      animationstart: Sa("Animation", "AnimationStart"),
      transitionrun: Sa("Transition", "TransitionRun"),
      transitionstart: Sa("Transition", "TransitionStart"),
      transitioncancel: Sa("Transition", "TransitionCancel"),
      transitionend: Sa("Transition", "TransitionEnd"),
    },
    df = {},
    $c = {};
  Dt &&
    (($c = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ja.animationend.animation,
      delete Ja.animationiteration.animation,
      delete Ja.animationstart.animation),
    "TransitionEvent" in window || delete Ja.transitionend.transition);
  function za(l) {
    if (df[l]) return df[l];
    if (!Ja[l]) return l;
    var t = Ja[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in $c) return (df[l] = t[a]);
    return l;
  }
  var Fc = za("animationend"),
    Ic = za("animationiteration"),
    Pc = za("animationstart"),
    g0 = za("transitionrun"),
    S0 = za("transitionstart"),
    z0 = za("transitioncancel"),
    ls = za("transitionend"),
    ts = new Map(),
    yf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  yf.push("scrollEnd");
  function ht(l, t) {
    ts.set(l, t), ha(t, [l]);
  }
  var as = new WeakMap();
  function ct(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = as.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: Sc(t) }), as.set(l, t), t);
    }
    return { value: l, source: t, stack: Sc(t) };
  }
  var st = [],
    Wa = 0,
    vf = 0;
  function qe() {
    for (var l = Wa, t = (vf = Wa = 0); t < l; ) {
      var a = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (((st[t++] = null), u !== null && e !== null)) {
        var f = u.pending;
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
          (u.pending = e);
      }
      n !== 0 && us(a, e, n);
    }
  }
  function Ye(l, t, a, u) {
    (st[Wa++] = l),
      (st[Wa++] = t),
      (st[Wa++] = a),
      (st[Wa++] = u),
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
          ((e = 31 - Fl(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Be(l) {
    if (50 < ee) throw ((ee = 0), (pi = null), Error(v(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var $a = {};
  function b0(l, t, a, u) {
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
  function Pl(l, t, a, u) {
    return new b0(l, t, a, u);
  }
  function hf(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Ut(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = Pl(l.tag, t, l.key, l.mode)),
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
      f = Ey(l, a, H.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case zt:
          return (l = Pl(31, a, t, e)), (l.elementType = zt), (l.lanes = n), l;
        case Rl:
          return ba(a.children, e, n, t);
        case rl:
          (f = 8), (e |= 24);
          break;
        case Sl:
          return (
            (l = Pl(12, a, t, e | 2)), (l.elementType = Sl), (l.lanes = n), l
          );
        case $:
          return (l = Pl(13, a, t, e)), (l.elementType = $), (l.lanes = n), l;
        case wl:
          return (l = Pl(19, a, t, e)), (l.elementType = wl), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Cl:
              case cl:
                f = 10;
                break l;
              case pl:
                f = 9;
                break l;
              case mt:
                f = 11;
                break l;
              case Jl:
                f = 14;
                break l;
              case Wl:
                (f = 16), (u = null);
                break l;
            }
          (f = 29),
            (a = Error(v(130, l === null ? "null" : typeof l, ""))),
            (u = null);
      }
    return (
      (t = Pl(f, a, t, e)), (t.elementType = l), (t.type = u), (t.lanes = n), t
    );
  }
  function ba(l, t, a, u) {
    return (l = Pl(7, l, u, t)), (l.lanes = a), l;
  }
  function gf(l, t, a) {
    return (l = Pl(6, l, null, t)), (l.lanes = a), l;
  }
  function Sf(l, t, a) {
    return (
      (t = Pl(4, l.children !== null ? l.children : [], l.key, t)),
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
    Ce = 0,
    rt = [],
    ot = 0,
    pa = null,
    Rt = 1,
    jt = "";
  function Ea(l, t) {
    (Fa[Ia++] = Ce), (Fa[Ia++] = Xe), (Xe = l), (Ce = t);
  }
  function ns(l, t, a) {
    (rt[ot++] = Rt), (rt[ot++] = jt), (rt[ot++] = pa), (pa = l);
    var u = Rt;
    l = jt;
    var e = 32 - Fl(u) - 1;
    (u &= ~(1 << e)), (a += 1);
    var n = 32 - Fl(t) + e;
    if (30 < n) {
      var f = e - (e % 5);
      (n = (u & ((1 << f) - 1)).toString(32)),
        (u >>= f),
        (e -= f),
        (Rt = (1 << (32 - Fl(t) + e)) | (a << e) | u),
        (jt = n + l);
    } else (Rt = (1 << n) | (a << e) | u), (jt = l);
  }
  function zf(l) {
    l.return !== null && (Ea(l, 1), ns(l, 1, 0));
  }
  function bf(l) {
    for (; l === Xe; )
      (Xe = Fa[--Ia]), (Fa[Ia] = null), (Ce = Fa[--Ia]), (Fa[Ia] = null);
    for (; l === pa; )
      (pa = rt[--ot]),
        (rt[ot] = null),
        (jt = rt[--ot]),
        (rt[ot] = null),
        (Rt = rt[--ot]),
        (rt[ot] = null);
  }
  var Xl = null,
    hl = null,
    ll = !1,
    Ta = null,
    pt = !1,
    pf = Error(v(519));
  function Aa(l) {
    var t = Error(v(418, ""));
    throw (Yu(ct(t, l)), pf);
  }
  function fs(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Yl] = l), (t[Ql] = u), a)) {
      case "dialog":
        J("cancel", t), J("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fe.length; a++) J(fe[a], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        J("error", t), J("load", t);
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        J("invalid", t),
          pc(
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
        J("invalid", t);
        break;
      case "textarea":
        J("invalid", t), Tc(t, u.value, u.defaultValue, u.children), _e(t);
    }
    (a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      Ao(t.textContent, a)
        ? (u.popover != null && (J("beforetoggle", t), J("toggle", t)),
          u.onScroll != null && J("scroll", t),
          u.onScrollEnd != null && J("scrollend", t),
          u.onClick != null && (t.onclick = pn),
          (t = !0))
        : (t = !1),
      t || Aa(l);
  }
  function is(l) {
    for (Xl = l.return; Xl; )
      switch (Xl.tag) {
        case 5:
        case 13:
          pt = !1;
          return;
        case 27:
        case 3:
          pt = !0;
          return;
        default:
          Xl = Xl.return;
      }
  }
  function Hu(l) {
    if (l !== Xl) return !1;
    if (!ll) return is(l), (ll = !0), !1;
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Bi(l.type, l.memoizedProps))),
        (a = !a)),
      a && hl && Aa(l),
      is(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                hl = St(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        hl = null;
      }
    } else
      t === 27
        ? ((t = hl), ia(l.type) ? ((l = Qi), (Qi = null), (hl = l)) : (hl = t))
        : (hl = Xl ? St(l.stateNode.nextSibling) : null);
    return !0;
  }
  function qu() {
    (hl = Xl = null), (ll = !1);
  }
  function cs() {
    var l = Ta;
    return (
      l !== null &&
        (Kl === null ? (Kl = l) : Kl.push.apply(Kl, l), (Ta = null)),
      l
    );
  }
  function Yu(l) {
    Ta === null ? (Ta = [l]) : Ta.push(l);
  }
  var Ef = E(null),
    Oa = null,
    xt = null;
  function wt(l, t, a) {
    O(Ef, t._currentValue), (t._currentValue = a);
  }
  function Nt(l) {
    (l._currentValue = Ef.current), M(Ef);
  }
  function Tf(l, t, a) {
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
  function Af(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = e;
          for (var c = 0; c < t.length; c++)
            if (i.context === t[c]) {
              (n.lanes |= a),
                (i = n.alternate),
                i !== null && (i.lanes |= a),
                Tf(n.return, a, l),
                u || (f = null);
              break l;
            }
          n = i.next;
        }
      } else if (e.tag === 18) {
        if (((f = e.return), f === null)) throw Error(v(341));
        (f.lanes |= a),
          (n = f.alternate),
          n !== null && (n.lanes |= a),
          Tf(f, a, l),
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
          var i = e.type;
          Il(e.pendingProps.value, f.value) ||
            (l !== null ? l.push(i) : (l = [i]));
        }
      } else if (e === kl.current) {
        if (((f = e.alternate), f === null)) throw Error(v(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(de) : (l = [de]));
      }
      e = e.return;
    }
    l !== null && Af(t, l, a, u), (t.flags |= 262144);
  }
  function Qe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Il(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function _a(l) {
    (Oa = l),
      (xt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Bl(l) {
    return ss(Oa, l);
  }
  function Ze(l, t) {
    return Oa === null && _a(l), ss(l, t);
  }
  function ss(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), xt === null)) {
      if (l === null) throw Error(v(308));
      (xt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else xt = xt.next = t;
    return a;
  }
  var p0 =
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
    E0 = T.unstable_scheduleCallback,
    T0 = T.unstable_NormalPriority,
    Al = {
      $$typeof: cl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Of() {
    return { controller: new p0(), data: new Map(), refCount: 0 };
  }
  function Gu(l) {
    l.refCount--,
      l.refCount === 0 &&
        E0(T0, function () {
          l.controller.abort();
        });
  }
  var Xu = null,
    _f = 0,
    Pa = 0,
    lu = null;
  function A0(l, t) {
    if (Xu === null) {
      var a = (Xu = []);
      (_f = 0),
        (Pa = Di()),
        (lu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        });
    }
    return _f++, t.then(rs, rs), t;
  }
  function rs() {
    if (--_f === 0 && Xu !== null) {
      lu !== null && (lu.status = "fulfilled");
      var l = Xu;
      (Xu = null), (Pa = 0), (lu = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function O0(l, t) {
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
  var os = S.S;
  S.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      A0(l, t),
      os !== null && os(l, t);
  };
  var Ma = E(null);
  function Mf() {
    var l = Ma.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Ve(l, t) {
    t === null ? O(Ma, Ma.current) : O(Ma, t.pool);
  }
  function ds() {
    var l = Mf();
    return l === null ? null : { parent: Al._currentValue, pool: l };
  }
  var Cu = Error(v(460)),
    ys = Error(v(474)),
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
        throw ((l = t.reason), gs(l), l);
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
            throw ((l = t.reason), gs(l), l);
        }
        throw ((Qu = t), Cu);
    }
  }
  var Qu = null;
  function hs() {
    if (Qu === null) throw Error(v(459));
    var l = Qu;
    return (Qu = null), l;
  }
  function gs(l) {
    if (l === Cu || l === Le) throw Error(v(483));
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
  function Wt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function kt(l, t, a) {
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
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), rc(l, a);
    }
  }
  function jf(l, t) {
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
      i = e.shared.pending;
    if (i !== null) {
      e.shared.pending = null;
      var c = i,
        y = c.next;
      (c.next = null), f === null ? (n = y) : (f.next = y), (f = c);
      var g = l.alternate;
      g !== null &&
        ((g = g.updateQueue),
        (i = g.lastBaseUpdate),
        i !== f &&
          (i === null ? (g.firstBaseUpdate = y) : (i.next = y),
          (g.lastBaseUpdate = c)));
    }
    if (n !== null) {
      var p = e.baseState;
      (f = 0), (g = y = c = null), (i = n);
      do {
        var m = i.lane & -536870913,
          h = m !== i.lane;
        if (h ? (k & m) === m : (u & m) === m) {
          m !== 0 && m === Pa && (xf = !0),
            g !== null &&
              (g = g.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var G = l,
              q = i;
            m = t;
            var nl = a;
            switch (q.tag) {
              case 1:
                if (((G = q.payload), typeof G == "function")) {
                  p = G.call(nl, p, m);
                  break l;
                }
                p = G;
                break l;
              case 3:
                G.flags = (G.flags & -65537) | 128;
              case 0:
                if (
                  ((G = q.payload),
                  (m = typeof G == "function" ? G.call(nl, p, m) : G),
                  m == null)
                )
                  break l;
                p = A({}, p, m);
                break l;
              case 2:
                Jt = !0;
            }
          }
          (m = i.callback),
            m !== null &&
              ((l.flags |= 64),
              h && (l.flags |= 8192),
              (h = e.callbacks),
              h === null ? (e.callbacks = [m]) : h.push(m));
        } else
          (h = {
            lane: m,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            g === null ? ((y = g = h), (c = p)) : (g = g.next = h),
            (f |= m);
        if (((i = i.next), i === null)) {
          if (((i = e.shared.pending), i === null)) break;
          (h = i),
            (i = h.next),
            (h.next = null),
            (e.lastBaseUpdate = h),
            (e.shared.pending = null);
        }
      } while (!0);
      g === null && (c = p),
        (e.baseState = c),
        (e.firstBaseUpdate = y),
        (e.lastBaseUpdate = g),
        n === null && (e.shared.lanes = 0),
        (ua |= f),
        (l.lanes = f),
        (l.memoizedState = p);
    }
  }
  function Ss(l, t) {
    if (typeof l != "function") throw Error(v(191, l));
    l.call(t);
  }
  function zs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Ss(a[l], t);
  }
  var tu = E(null),
    we = E(0);
  function bs(l, t) {
    (l = Ct), O(we, l), O(tu, t), (Ct = l | t.baseLanes);
  }
  function Nf() {
    O(we, Ct), O(tu, tu.current);
  }
  function Hf() {
    (Ct = we.current), M(tu), M(we);
  }
  var $t = 0,
    V = null,
    ul = null,
    El = null,
    Je = !1,
    au = !1,
    Da = !1,
    We = 0,
    Ku = 0,
    uu = null,
    _0 = 0;
  function zl() {
    throw Error(v(321));
  }
  function qf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Il(l[a], t[a])) return !1;
    return !0;
  }
  function Yf(l, t, a, u, e, n) {
    return (
      ($t = n),
      (V = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? ur : er),
      (Da = !1),
      (n = a(u, e)),
      (Da = !1),
      au && (n = Es(t, a, u, e)),
      ps(l),
      n
    );
  }
  function ps(l) {
    S.H = ln;
    var t = ul !== null && ul.next !== null;
    if ((($t = 0), (El = ul = V = null), (Je = !1), (Ku = 0), (uu = null), t))
      throw Error(v(300));
    l === null ||
      Ml ||
      ((l = l.dependencies), l !== null && Qe(l) && (Ml = !0));
  }
  function Es(l, t, a, u) {
    V = l;
    var e = 0;
    do {
      if ((au && (uu = null), (Ku = 0), (au = !1), 25 <= e))
        throw Error(v(301));
      if (((e += 1), (El = ul = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (S.H = N0), (n = t(a, u));
    } while (au);
    return n;
  }
  function M0() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? wu(t) : t),
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
    if (Je) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      Je = !1;
    }
    ($t = 0), (El = ul = V = null), (au = !1), (Ku = We = 0), (uu = null);
  }
  function Vl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return El === null ? (V.memoizedState = El = l) : (El = El.next = l), El;
  }
  function Tl() {
    if (ul === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ul.next;
    var t = El === null ? V.memoizedState : El.next;
    if (t !== null) (El = t), (ul = l);
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
        El === null ? (V.memoizedState = El = l) : (El = El.next = l);
    }
    return El;
  }
  function Cf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wu(l) {
    var t = Ku;
    return (
      (Ku += 1),
      uu === null && (uu = []),
      (l = ms(uu, l, t)),
      (t = V),
      (El === null ? t.memoizedState : El.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? ur : er)),
      l
    );
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return wu(l);
      if (l.$$typeof === cl) return Bl(l);
    }
    throw Error(v(438, String(l)));
  }
  function Qf(l) {
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
      a === null && ((a = Cf()), (V.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Ha;
    return t.index++, a;
  }
  function Ht(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function $e(l) {
    var t = Tl();
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
      var i = (f = null),
        c = null,
        y = t,
        g = !1;
      do {
        var p = y.lane & -536870913;
        if (p !== y.lane ? (k & p) === p : ($t & p) === p) {
          var m = y.revertLane;
          if (m === 0)
            c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              p === Pa && (g = !0);
          else if (($t & m) === m) {
            (y = y.next), m === Pa && (g = !0);
            continue;
          } else
            (p = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              c === null ? ((i = c = p), (f = n)) : (c = c.next = p),
              (V.lanes |= m),
              (ua |= m);
          (p = y.action),
            Da && a(n, p),
            (n = y.hasEagerState ? y.eagerState : a(n, p));
        } else
          (m = {
            lane: p,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            c === null ? ((i = c = m), (f = n)) : (c = c.next = m),
            (V.lanes |= p),
            (ua |= p);
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (c === null ? (f = n) : (c.next = i),
        !Il(n, l.memoizedState) && ((Ml = !0), g && ((a = lu), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = f),
        (l.baseQueue = c),
        (u.lastRenderedState = n);
    }
    return e === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Vf(l) {
    var t = Tl(),
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
      Il(n, t.memoizedState) || (Ml = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, u];
  }
  function Ts(l, t, a) {
    var u = V,
      e = Tl(),
      n = ll;
    if (n) {
      if (a === void 0) throw Error(v(407));
      a = a();
    } else a = t();
    var f = !Il((ul || e).memoizedState, a);
    f && ((e.memoizedState = a), (Ml = !0)), (e = e.queue);
    var i = _s.bind(null, u, e, l);
    if (
      (Ju(2048, 8, i, [l]),
      e.getSnapshot !== t || f || (El !== null && El.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        eu(9, Fe(), Os.bind(null, u, e, a, t), null),
        sl === null)
      )
        throw Error(v(349));
      n || ($t & 124) !== 0 || As(u, t, a);
    }
    return a;
  }
  function As(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = V.updateQueue),
      t === null
        ? ((t = Cf()), (V.updateQueue = t), (t.stores = [l]))
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
      return !Il(l, a);
    } catch {
      return !0;
    }
  }
  function Ds(l) {
    var t = ka(l, 2);
    t !== null && et(t, l, 2);
  }
  function Lf(l) {
    var t = Vl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Da)) {
        Vt(!0);
        try {
          a();
        } finally {
          Vt(!1);
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
  function D0(l, t, a, u, e) {
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
      S.T !== null ? a(!0) : (n.isTransition = !1),
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
      var n = S.T,
        f = {};
      S.T = f;
      try {
        var i = a(e, u),
          c = S.S;
        c !== null && c(f, i), js(l, t, i);
      } catch (y) {
        Kf(l, t, y);
      } finally {
        S.T = n;
      }
    } else
      try {
        (n = a(e, u)), js(l, t, n);
      } catch (y) {
        Kf(l, t, y);
      }
  }
  function js(l, t, a) {
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
      Ns(t),
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
      do (t.status = "rejected"), (t.reason = a), Ns(t), (t = t.next);
      while (t !== u);
    }
    l.action = null;
  }
  function Ns(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Hs(l, t) {
    return t;
  }
  function qs(l, t) {
    if (ll) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var u = V;
          if (ll) {
            if (hl) {
              t: {
                for (var e = hl, n = pt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = St(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                (n = e.data), (e = n === "F!" || n === "F" ? e : null);
              }
              if (e) {
                (hl = St(e.nextSibling)), (u = e.data === "F!");
                break l;
              }
            }
            Aa(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Vl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hs,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = lr.bind(null, V, u)),
      (u.dispatch = a),
      (u = Lf(!1)),
      (n = $f.bind(null, V, !1, u.queue)),
      (u = Vl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = D0.bind(null, V, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function Ys(l) {
    var t = Tl();
    return Bs(t, ul, l);
  }
  function Bs(l, t, a) {
    if (
      ((t = Zf(l, t, Hs)[0]),
      (l = $e(Ht)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = wu(t);
      } catch (f) {
        throw f === Cu ? Le : f;
      }
    else u = t;
    t = Tl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((V.flags |= 2048), eu(9, Fe(), U0.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function U0(l, t) {
    l.action = t;
  }
  function Gs(l) {
    var t = Tl(),
      a = ul;
    if (a !== null) return Bs(t, a, l);
    Tl(), (t = t.memoizedState), (a = Tl());
    var u = a.queue.dispatch;
    return (a.memoizedState = l), [t, u, !1];
  }
  function eu(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = V.updateQueue),
      t === null && ((t = Cf()), (V.updateQueue = t)),
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
    return Tl().memoizedState;
  }
  function Ie(l, t, a, u) {
    var e = Vl();
    (u = u === void 0 ? null : u),
      (V.flags |= l),
      (e.memoizedState = eu(1 | t, Fe(), a, u));
  }
  function Ju(l, t, a, u) {
    var e = Tl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    ul !== null && u !== null && qf(u, ul.memoizedState.deps)
      ? (e.memoizedState = eu(t, n, a, u))
      : ((V.flags |= l), (e.memoizedState = eu(1 | t, n, a, u)));
  }
  function Cs(l, t) {
    Ie(8390656, 8, l, t);
  }
  function Qs(l, t) {
    Ju(2048, 8, l, t);
  }
  function Zs(l, t) {
    return Ju(4, 2, l, t);
  }
  function Vs(l, t) {
    return Ju(4, 4, l, t);
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
    (a = a != null ? a.concat([l]) : null), Ju(4, 4, Ls.bind(null, t, l), a);
  }
  function wf() {}
  function ws(l, t) {
    var a = Tl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && qf(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function Js(l, t) {
    var a = Tl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && qf(t, u[1])) return u[0];
    if (((u = l()), Da)) {
      Vt(!0);
      try {
        l();
      } finally {
        Vt(!1);
      }
    }
    return (a.memoizedState = [u, t]), u;
  }
  function Jf(l, t, a) {
    return a === void 0 || ($t & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = $r()), (V.lanes |= l), (ua |= l), a);
  }
  function Ws(l, t, a, u) {
    return Il(a, t)
      ? a
      : tu.current !== null
      ? ((l = Jf(l, a, u)), Il(l, t) || (Ml = !0), l)
      : ($t & 42) === 0
      ? ((Ml = !0), (l.memoizedState = a))
      : ((l = $r()), (V.lanes |= l), (ua |= l), t);
  }
  function ks(l, t, a, u, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = S.T,
      i = {};
    (S.T = i), $f(l, !1, t, a);
    try {
      var c = e(),
        y = S.S;
      if (
        (y !== null && y(i, c),
        c !== null && typeof c == "object" && typeof c.then == "function")
      ) {
        var g = O0(c, u);
        Wu(l, t, g, ut(l));
      } else Wu(l, t, u, ut(l));
    } catch (p) {
      Wu(l, t, { then: function () {}, status: "rejected", reason: p }, ut());
    } finally {
      (_.p = n), (S.T = f);
    }
  }
  function R0() {}
  function Wf(l, t, a, u) {
    if (l.tag !== 5) throw Error(v(476));
    var e = $s(l).queue;
    ks(
      l,
      e,
      t,
      B,
      a === null
        ? R0
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
    Wu(l, t, {}, ut());
  }
  function kf() {
    return Bl(de);
  }
  function Is() {
    return Tl().memoizedState;
  }
  function Ps() {
    return Tl().memoizedState;
  }
  function j0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ut();
          l = Wt(a);
          var u = kt(t, l, a);
          u !== null && (et(u, t, a), Zu(u, t, a)),
            (t = { cache: Of() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function x0(l, t, a) {
    var u = ut();
    (a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Pe(l)
        ? tr(t, a)
        : ((a = mf(l, t, a, u)), a !== null && (et(a, l, u), ar(a, t, u)));
  }
  function lr(l, t, a) {
    var u = ut();
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
    if (Pe(l)) tr(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var f = t.lastRenderedState,
            i = n(f, a);
          if (((e.hasEagerState = !0), (e.eagerState = i), Il(i, f)))
            return Ye(l, t, e, 0), sl === null && qe(), !1;
        } catch {
        } finally {
        }
      if (((a = mf(l, t, e, u)), a !== null))
        return et(a, l, u), ar(a, t, u), !0;
    }
    return !1;
  }
  function $f(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: Di(),
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Pe(l))
    ) {
      if (t) throw Error(v(479));
    } else (t = mf(l, a, u, 2)), t !== null && et(t, l, 2);
  }
  function Pe(l) {
    var t = l.alternate;
    return l === V || (t !== null && t === V);
  }
  function tr(l, t) {
    au = Je = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function ar(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      (u &= l.pendingLanes), (a |= u), (t.lanes = a), rc(l, a);
    }
  }
  var ln = {
      readContext: Bl,
      use: ke,
      useCallback: zl,
      useContext: zl,
      useEffect: zl,
      useImperativeHandle: zl,
      useLayoutEffect: zl,
      useInsertionEffect: zl,
      useMemo: zl,
      useReducer: zl,
      useRef: zl,
      useState: zl,
      useDebugValue: zl,
      useDeferredValue: zl,
      useTransition: zl,
      useSyncExternalStore: zl,
      useId: zl,
      useHostTransitionStatus: zl,
      useFormState: zl,
      useActionState: zl,
      useOptimistic: zl,
      useMemoCache: zl,
      useCacheRefresh: zl,
    },
    ur = {
      readContext: Bl,
      use: ke,
      useCallback: function (l, t) {
        return (Vl().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Bl,
      useEffect: Cs,
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
        var a = Vl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Da) {
          Vt(!0);
          try {
            l();
          } finally {
            Vt(!1);
          }
        }
        return (a.memoizedState = [u, t]), u;
      },
      useReducer: function (l, t, a) {
        var u = Vl();
        if (a !== void 0) {
          var e = a(t);
          if (Da) {
            Vt(!0);
            try {
              a(t);
            } finally {
              Vt(!1);
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
          (l = l.dispatch = x0.bind(null, V, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Vl();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Lf(l);
        var t = l.queue,
          a = lr.bind(null, V, t);
        return (t.dispatch = a), [l.memoizedState, a];
      },
      useDebugValue: wf,
      useDeferredValue: function (l, t) {
        var a = Vl();
        return Jf(a, l, t);
      },
      useTransition: function () {
        var l = Lf(!1);
        return (
          (l = ks.bind(null, V, l.queue, !0, !1)),
          (Vl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = V,
          e = Vl();
        if (ll) {
          if (a === void 0) throw Error(v(407));
          a = a();
        } else {
          if (((a = t()), sl === null)) throw Error(v(349));
          (k & 124) !== 0 || As(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          Cs(_s.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          eu(9, Fe(), Os.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Vl(),
          t = sl.identifierPrefix;
        if (ll) {
          var a = jt,
            u = Rt;
          (a = (u & ~(1 << (32 - Fl(u) - 1))).toString(32) + a),
            (t = "«" + t + "R" + a),
            (a = We++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "»");
        } else (a = _0++), (t = "«" + t + "r" + a.toString(32) + "»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: kf,
      useFormState: qs,
      useActionState: qs,
      useOptimistic: function (l) {
        var t = Vl();
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
      useMemoCache: Qf,
      useCacheRefresh: function () {
        return (Vl().memoizedState = j0.bind(null, V));
      },
    },
    er = {
      readContext: Bl,
      use: ke,
      useCallback: ws,
      useContext: Bl,
      useEffect: Qs,
      useImperativeHandle: Ks,
      useInsertionEffect: Zs,
      useLayoutEffect: Vs,
      useMemo: Js,
      useReducer: $e,
      useRef: Xs,
      useState: function () {
        return $e(Ht);
      },
      useDebugValue: wf,
      useDeferredValue: function (l, t) {
        var a = Tl();
        return Ws(a, ul.memoizedState, l, t);
      },
      useTransition: function () {
        var l = $e(Ht)[0],
          t = Tl().memoizedState;
        return [typeof l == "boolean" ? l : wu(l), t];
      },
      useSyncExternalStore: Ts,
      useId: Is,
      useHostTransitionStatus: kf,
      useFormState: Ys,
      useActionState: Ys,
      useOptimistic: function (l, t) {
        var a = Tl();
        return Us(a, ul, l, t);
      },
      useMemoCache: Qf,
      useCacheRefresh: Ps,
    },
    N0 = {
      readContext: Bl,
      use: ke,
      useCallback: ws,
      useContext: Bl,
      useEffect: Qs,
      useImperativeHandle: Ks,
      useInsertionEffect: Zs,
      useLayoutEffect: Vs,
      useMemo: Js,
      useReducer: Vf,
      useRef: Xs,
      useState: function () {
        return Vf(Ht);
      },
      useDebugValue: wf,
      useDeferredValue: function (l, t) {
        var a = Tl();
        return ul === null ? Jf(a, l, t) : Ws(a, ul.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Vf(Ht)[0],
          t = Tl().memoizedState;
        return [typeof l == "boolean" ? l : wu(l), t];
      },
      useSyncExternalStore: Ts,
      useId: Is,
      useHostTransitionStatus: kf,
      useFormState: Gs,
      useActionState: Gs,
      useOptimistic: function (l, t) {
        var a = Tl();
        return ul !== null
          ? Us(a, ul, l, t)
          : ((a.baseState = l), [l, a.queue.dispatch]);
      },
      useMemoCache: Qf,
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
    throw t.$$typeof === X
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
  function nr(l) {
    var t = l._init;
    return t(l._payload);
  }
  function fr(l) {
    function t(o, r) {
      if (l) {
        var d = o.deletions;
        d === null ? ((o.deletions = [r]), (o.flags |= 16)) : d.push(r);
      }
    }
    function a(o, r) {
      if (!l) return null;
      for (; r !== null; ) t(o, r), (r = r.sibling);
      return null;
    }
    function u(o) {
      for (var r = new Map(); o !== null; )
        o.key !== null ? r.set(o.key, o) : r.set(o.index, o), (o = o.sibling);
      return r;
    }
    function e(o, r) {
      return (o = Ut(o, r)), (o.index = 0), (o.sibling = null), o;
    }
    function n(o, r, d) {
      return (
        (o.index = d),
        l
          ? ((d = o.alternate),
            d !== null
              ? ((d = d.index), d < r ? ((o.flags |= 67108866), r) : d)
              : ((o.flags |= 67108866), r))
          : ((o.flags |= 1048576), r)
      );
    }
    function f(o) {
      return l && o.alternate === null && (o.flags |= 67108866), o;
    }
    function i(o, r, d, z) {
      return r === null || r.tag !== 6
        ? ((r = gf(d, o.mode, z)), (r.return = o), r)
        : ((r = e(r, d)), (r.return = o), r);
    }
    function c(o, r, d, z) {
      var D = d.type;
      return D === Rl
        ? g(o, r, d.props.children, z, d.key)
        : r !== null &&
          (r.elementType === D ||
            (typeof D == "object" &&
              D !== null &&
              D.$$typeof === Wl &&
              nr(D) === r.type))
        ? ((r = e(r, d.props)), $u(r, d), (r.return = o), r)
        : ((r = Ge(d.type, d.key, d.props, null, o.mode, z)),
          $u(r, d),
          (r.return = o),
          r);
    }
    function y(o, r, d, z) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== d.containerInfo ||
        r.stateNode.implementation !== d.implementation
        ? ((r = Sf(d, o.mode, z)), (r.return = o), r)
        : ((r = e(r, d.children || [])), (r.return = o), r);
    }
    function g(o, r, d, z, D) {
      return r === null || r.tag !== 7
        ? ((r = ba(d, o.mode, z, D)), (r.return = o), r)
        : ((r = e(r, d)), (r.return = o), r);
    }
    function p(o, r, d) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return (r = gf("" + r, o.mode, d)), (r.return = o), r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case P:
            return (
              (d = Ge(r.type, r.key, r.props, null, o.mode, d)),
              $u(d, r),
              (d.return = o),
              d
            );
          case dl:
            return (r = Sf(r, o.mode, d)), (r.return = o), r;
          case Wl:
            var z = r._init;
            return (r = z(r._payload)), p(o, r, d);
        }
        if (ql(r) || Hl(r))
          return (r = ba(r, o.mode, d, null)), (r.return = o), r;
        if (typeof r.then == "function") return p(o, tn(r), d);
        if (r.$$typeof === cl) return p(o, Ze(o, r), d);
        an(o, r);
      }
      return null;
    }
    function m(o, r, d, z) {
      var D = r !== null ? r.key : null;
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return D !== null ? null : i(o, r, "" + d, z);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case P:
            return d.key === D ? c(o, r, d, z) : null;
          case dl:
            return d.key === D ? y(o, r, d, z) : null;
          case Wl:
            return (D = d._init), (d = D(d._payload)), m(o, r, d, z);
        }
        if (ql(d) || Hl(d)) return D !== null ? null : g(o, r, d, z, null);
        if (typeof d.then == "function") return m(o, r, tn(d), z);
        if (d.$$typeof === cl) return m(o, r, Ze(o, d), z);
        an(o, d);
      }
      return null;
    }
    function h(o, r, d, z, D) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return (o = o.get(d) || null), i(r, o, "" + z, D);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case P:
            return (
              (o = o.get(z.key === null ? d : z.key) || null), c(r, o, z, D)
            );
          case dl:
            return (
              (o = o.get(z.key === null ? d : z.key) || null), y(r, o, z, D)
            );
          case Wl:
            var K = z._init;
            return (z = K(z._payload)), h(o, r, d, z, D);
        }
        if (ql(z) || Hl(z)) return (o = o.get(d) || null), g(r, o, z, D, null);
        if (typeof z.then == "function") return h(o, r, d, tn(z), D);
        if (z.$$typeof === cl) return h(o, r, d, Ze(r, z), D);
        an(r, z);
      }
      return null;
    }
    function G(o, r, d, z) {
      for (
        var D = null, K = null, x = r, Y = (r = 0), Ul = null;
        x !== null && Y < d.length;
        Y++
      ) {
        x.index > Y ? ((Ul = x), (x = null)) : (Ul = x.sibling);
        var I = m(o, x, d[Y], z);
        if (I === null) {
          x === null && (x = Ul);
          break;
        }
        l && x && I.alternate === null && t(o, x),
          (r = n(I, r, Y)),
          K === null ? (D = I) : (K.sibling = I),
          (K = I),
          (x = Ul);
      }
      if (Y === d.length) return a(o, x), ll && Ea(o, Y), D;
      if (x === null) {
        for (; Y < d.length; Y++)
          (x = p(o, d[Y], z)),
            x !== null &&
              ((r = n(x, r, Y)),
              K === null ? (D = x) : (K.sibling = x),
              (K = x));
        return ll && Ea(o, Y), D;
      }
      for (x = u(x); Y < d.length; Y++)
        (Ul = h(x, o, Y, d[Y], z)),
          Ul !== null &&
            (l &&
              Ul.alternate !== null &&
              x.delete(Ul.key === null ? Y : Ul.key),
            (r = n(Ul, r, Y)),
            K === null ? (D = Ul) : (K.sibling = Ul),
            (K = Ul));
      return (
        l &&
          x.forEach(function (da) {
            return t(o, da);
          }),
        ll && Ea(o, Y),
        D
      );
    }
    function q(o, r, d, z) {
      if (d == null) throw Error(v(151));
      for (
        var D = null, K = null, x = r, Y = (r = 0), Ul = null, I = d.next();
        x !== null && !I.done;
        Y++, I = d.next()
      ) {
        x.index > Y ? ((Ul = x), (x = null)) : (Ul = x.sibling);
        var da = m(o, x, I.value, z);
        if (da === null) {
          x === null && (x = Ul);
          break;
        }
        l && x && da.alternate === null && t(o, x),
          (r = n(da, r, Y)),
          K === null ? (D = da) : (K.sibling = da),
          (K = da),
          (x = Ul);
      }
      if (I.done) return a(o, x), ll && Ea(o, Y), D;
      if (x === null) {
        for (; !I.done; Y++, I = d.next())
          (I = p(o, I.value, z)),
            I !== null &&
              ((r = n(I, r, Y)),
              K === null ? (D = I) : (K.sibling = I),
              (K = I));
        return ll && Ea(o, Y), D;
      }
      for (x = u(x); !I.done; Y++, I = d.next())
        (I = h(x, o, Y, I.value, z)),
          I !== null &&
            (l && I.alternate !== null && x.delete(I.key === null ? Y : I.key),
            (r = n(I, r, Y)),
            K === null ? (D = I) : (K.sibling = I),
            (K = I));
      return (
        l &&
          x.forEach(function (Hy) {
            return t(o, Hy);
          }),
        ll && Ea(o, Y),
        D
      );
    }
    function nl(o, r, d, z) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Rl &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case P:
            l: {
              for (var D = d.key; r !== null; ) {
                if (r.key === D) {
                  if (((D = d.type), D === Rl)) {
                    if (r.tag === 7) {
                      a(o, r.sibling),
                        (z = e(r, d.props.children)),
                        (z.return = o),
                        (o = z);
                      break l;
                    }
                  } else if (
                    r.elementType === D ||
                    (typeof D == "object" &&
                      D !== null &&
                      D.$$typeof === Wl &&
                      nr(D) === r.type)
                  ) {
                    a(o, r.sibling),
                      (z = e(r, d.props)),
                      $u(z, d),
                      (z.return = o),
                      (o = z);
                    break l;
                  }
                  a(o, r);
                  break;
                } else t(o, r);
                r = r.sibling;
              }
              d.type === Rl
                ? ((z = ba(d.props.children, o.mode, z, d.key)),
                  (z.return = o),
                  (o = z))
                : ((z = Ge(d.type, d.key, d.props, null, o.mode, z)),
                  $u(z, d),
                  (z.return = o),
                  (o = z));
            }
            return f(o);
          case dl:
            l: {
              for (D = d.key; r !== null; ) {
                if (r.key === D)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === d.containerInfo &&
                    r.stateNode.implementation === d.implementation
                  ) {
                    a(o, r.sibling),
                      (z = e(r, d.children || [])),
                      (z.return = o),
                      (o = z);
                    break l;
                  } else {
                    a(o, r);
                    break;
                  }
                else t(o, r);
                r = r.sibling;
              }
              (z = Sf(d, o.mode, z)), (z.return = o), (o = z);
            }
            return f(o);
          case Wl:
            return (D = d._init), (d = D(d._payload)), nl(o, r, d, z);
        }
        if (ql(d)) return G(o, r, d, z);
        if (Hl(d)) {
          if (((D = Hl(d)), typeof D != "function")) throw Error(v(150));
          return (d = D.call(d)), q(o, r, d, z);
        }
        if (typeof d.then == "function") return nl(o, r, tn(d), z);
        if (d.$$typeof === cl) return nl(o, r, Ze(o, d), z);
        an(o, d);
      }
      return (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
        ? ((d = "" + d),
          r !== null && r.tag === 6
            ? (a(o, r.sibling), (z = e(r, d)), (z.return = o), (o = z))
            : (a(o, r), (z = gf(d, o.mode, z)), (z.return = o), (o = z)),
          f(o))
        : a(o, r);
    }
    return function (o, r, d, z) {
      try {
        ku = 0;
        var D = nl(o, r, d, z);
        return (nu = null), D;
      } catch (x) {
        if (x === Cu || x === Le) throw x;
        var K = Pl(29, x, null, o.mode);
        return (K.lanes = z), (K.return = o), K;
      } finally {
      }
    };
  }
  var fu = fr(!0),
    ir = fr(!1),
    dt = E(null),
    Et = null;
  function Ft(l) {
    var t = l.alternate;
    O(Ol, Ol.current & 1),
      O(dt, l),
      Et === null &&
        (t === null || tu.current !== null || t.memoizedState !== null) &&
        (Et = l);
  }
  function cr(l) {
    if (l.tag === 22) {
      if ((O(Ol, Ol.current), O(dt, l), Et === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (Et = l);
      }
    } else It();
  }
  function It() {
    O(Ol, Ol.current), O(dt, dt.current);
  }
  function qt(l) {
    M(dt), Et === l && (Et = null), M(Ol);
  }
  var Ol = E(0);
  function un(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || Ci(a))
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
      (a = a == null ? t : A({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var If = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = ut(),
        e = Wt(u);
      (e.payload = t),
        a != null && (e.callback = a),
        (t = kt(l, e, u)),
        t !== null && (et(t, l, u), Zu(t, l, u));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = ut(),
        e = Wt(u);
      (e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = kt(l, e, u)),
        t !== null && (et(t, l, u), Zu(t, l, u));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = ut(),
        u = Wt(a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = kt(l, u, a)),
        t !== null && (et(t, l, a), Zu(t, l, a));
    },
  };
  function sr(l, t, a, u, e, n, f) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !xu(a, u) || !xu(e, n)
        : !0
    );
  }
  function rr(l, t, a, u) {
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
      a === t && (a = A({}, a));
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
  function or(l) {
    en(l);
  }
  function dr(l) {
    console.error(l);
  }
  function yr(l) {
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
  function vr(l, t, a) {
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
      (a = Wt(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        nn(l, t);
      }),
      a
    );
  }
  function mr(l) {
    return (l = Wt(l)), (l.tag = 3), l;
  }
  function hr(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      (l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          vr(t, a, u);
        });
    }
    var f = a.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (l.callback = function () {
        vr(t, a, u),
          typeof e != "function" &&
            (ea === null ? (ea = new Set([this])) : ea.add(this));
        var i = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: i !== null ? i : "",
        });
      });
  }
  function H0(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Bu(t, a, e, !0),
        (a = dt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              Et === null ? Ti() : a.alternate === null && gl === 0 && (gl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === Df
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Oi(l, u, e)),
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
                  Oi(l, u, e)),
              !1
            );
        }
        throw Error(v(435, a.tag));
      }
      return Oi(l, u, e), Ti(), !1;
    }
    if (ll)
      return (
        (t = dt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== pf && ((l = Error(v(422), { cause: u })), Yu(ct(l, a))))
          : (u !== pf && ((t = Error(v(423), { cause: u })), Yu(ct(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = ct(u, a)),
            (e = Pf(l.stateNode, u, e)),
            jf(l, e),
            gl !== 4 && (gl = 2)),
        !1
      );
    var n = Error(v(520), { cause: u });
    if (
      ((n = ct(n, a)),
      ue === null ? (ue = [n]) : ue.push(n),
      gl !== 4 && (gl = 2),
      t === null)
    )
      return !0;
    (u = ct(u, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = Pf(a.stateNode, u, l)),
            jf(a, l),
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
                  (ea === null || !ea.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = mr(e)),
              hr(e, l, a, u),
              jf(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var gr = Error(v(461)),
    Ml = !1;
  function jl(l, t, a, u) {
    t.child = l === null ? ir(t, null, a, u) : fu(t, l.child, a, u);
  }
  function Sr(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var f = {};
      for (var i in u) i !== "ref" && (f[i] = u[i]);
    } else f = u;
    return (
      _a(t),
      (u = Yf(l, t, a, f, n, e)),
      (i = Bf()),
      l !== null && !Ml
        ? (Gf(l, t, e), Yt(l, t, e))
        : (ll && i && zf(t), (t.flags |= 1), jl(l, t, u, e), t.child)
    );
  }
  function zr(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !hf(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), br(l, t, n, u, e))
        : ((l = Ge(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !ii(l, e))) {
      var f = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : xu), a(f, u) && l.ref === t.ref)
      )
        return Yt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Ut(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function br(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (xu(n, u) && l.ref === t.ref)
        if (((Ml = !1), (t.pendingProps = u = n), ii(l, e)))
          (l.flags & 131072) !== 0 && (Ml = !0);
        else return (t.lanes = l.lanes), Yt(l, t, e);
    }
    return li(l, t, a, u, e);
  }
  function pr(l, t, a) {
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
        return Er(l, t, u, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ve(t, n !== null ? n.cachePool : null),
          n !== null ? bs(t, n) : Nf(),
          cr(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Er(l, t, n !== null ? n.baseLanes | a : a, a)
        );
    } else
      n !== null
        ? (Ve(t, n.cachePool), bs(t, n), It(), (t.memoizedState = null))
        : (l !== null && Ve(t, null), Nf(), It());
    return jl(l, t, e, a), t.child;
  }
  function Er(l, t, a, u) {
    var e = Mf();
    return (
      (e = e === null ? null : { parent: Al._currentValue, pool: e }),
      (t.memoizedState = { baseLanes: a, cachePool: e }),
      l !== null && Ve(t, null),
      Nf(),
      cr(t),
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
  function li(l, t, a, u, e) {
    return (
      _a(t),
      (a = Yf(l, t, a, u, void 0, e)),
      (u = Bf()),
      l !== null && !Ml
        ? (Gf(l, t, e), Yt(l, t, e))
        : (ll && u && zf(t), (t.flags |= 1), jl(l, t, a, e), t.child)
    );
  }
  function Tr(l, t, a, u, e, n) {
    return (
      _a(t),
      (t.updateQueue = null),
      (a = Es(t, u, a, e)),
      ps(l),
      (u = Bf()),
      l !== null && !Ml
        ? (Gf(l, t, n), Yt(l, t, n))
        : (ll && u && zf(t), (t.flags |= 1), jl(l, t, a, n), t.child)
    );
  }
  function Ar(l, t, a, u, e) {
    if ((_a(t), t.stateNode === null)) {
      var n = $a,
        f = a.contextType;
      typeof f == "object" && f !== null && (n = Bl(f)),
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
        (n.context = typeof f == "object" && f !== null ? Bl(f) : $a),
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
      var i = t.memoizedProps,
        c = Ua(a, i);
      n.props = c;
      var y = n.context,
        g = a.contextType;
      (f = $a), typeof g == "object" && g !== null && (f = Bl(g));
      var p = a.getDerivedStateFromProps;
      (g =
        typeof p == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (i = t.pendingProps !== i),
        g ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i || y !== f) && rr(t, n, u, f)),
        (Jt = !1);
      var m = t.memoizedState;
      (n.state = m),
        Lu(t, u, n, e),
        Vu(),
        (y = t.memoizedState),
        i || m !== y || Jt
          ? (typeof p == "function" && (Ff(t, a, p, u), (y = t.memoizedState)),
            (c = Jt || sr(t, a, c, u, m, y, f))
              ? (g ||
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
                (t.memoizedState = y)),
            (n.props = u),
            (n.state = y),
            (n.context = f),
            (u = c))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1));
    } else {
      (n = t.stateNode),
        Rf(l, t),
        (f = t.memoizedProps),
        (g = Ua(a, f)),
        (n.props = g),
        (p = t.pendingProps),
        (m = n.context),
        (y = a.contextType),
        (c = $a),
        typeof y == "object" && y !== null && (c = Bl(y)),
        (i = a.getDerivedStateFromProps),
        (y =
          typeof i == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f !== p || m !== c) && rr(t, n, u, c)),
        (Jt = !1),
        (m = t.memoizedState),
        (n.state = m),
        Lu(t, u, n, e),
        Vu();
      var h = t.memoizedState;
      f !== p ||
      m !== h ||
      Jt ||
      (l !== null && l.dependencies !== null && Qe(l.dependencies))
        ? (typeof i == "function" && (Ff(t, a, i, u), (h = t.memoizedState)),
          (g =
            Jt ||
            sr(t, a, g, u, m, h, c) ||
            (l !== null && l.dependencies !== null && Qe(l.dependencies)))
            ? (y ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, h, c),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, h, c)),
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
          (n.context = c),
          (u = g))
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
            : jl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Yt(l, t, e)),
      l
    );
  }
  function Or(l, t, a, u) {
    return qu(), (t.flags |= 256), jl(l, t, a, u), t.child;
  }
  var ti = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ai(l) {
    return { baseLanes: l, cachePool: ds() };
  }
  function ui(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= yt), l;
  }
  function _r(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      f;
    if (
      ((f = n) ||
        (f =
          l !== null && l.memoizedState === null ? !1 : (Ol.current & 2) !== 0),
      f && ((e = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (ll) {
        if ((e ? Ft(t) : It(), ll)) {
          var i = hl,
            c;
          if ((c = i)) {
            l: {
              for (c = i, i = pt; c.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (((c = St(c.nextSibling)), c === null)) {
                  i = null;
                  break l;
                }
              }
              i = c;
            }
            i !== null
              ? ((t.memoizedState = {
                  dehydrated: i,
                  treeContext: pa !== null ? { id: Rt, overflow: jt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (c = Pl(18, null, null, 0)),
                (c.stateNode = i),
                (c.return = t),
                (t.child = c),
                (Xl = t),
                (hl = null),
                (c = !0))
              : (c = !1);
          }
          c || Aa(t);
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i = i.dehydrated), i !== null))
        )
          return Ci(i) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        qt(t);
      }
      return (
        (i = u.children),
        (u = u.fallback),
        e
          ? (It(),
            (e = t.mode),
            (i = cn({ mode: "hidden", children: i }, e)),
            (u = ba(u, e, a, null)),
            (i.return = t),
            (u.return = t),
            (i.sibling = u),
            (t.child = i),
            (e = t.child),
            (e.memoizedState = ai(a)),
            (e.childLanes = ui(l, f, a)),
            (t.memoizedState = ti),
            u)
          : (Ft(t), ei(t, i))
      );
    }
    if (
      ((c = l.memoizedState), c !== null && ((i = c.dehydrated), i !== null))
    ) {
      if (n)
        t.flags & 256
          ? (Ft(t), (t.flags &= -257), (t = ni(l, t, a)))
          : t.memoizedState !== null
          ? (It(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (It(),
            (e = u.fallback),
            (i = t.mode),
            (u = cn({ mode: "visible", children: u.children }, i)),
            (e = ba(e, i, a, null)),
            (e.flags |= 2),
            (u.return = t),
            (e.return = t),
            (u.sibling = e),
            (t.child = u),
            fu(t, l.child, null, a),
            (u = t.child),
            (u.memoizedState = ai(a)),
            (u.childLanes = ui(l, f, a)),
            (t.memoizedState = ti),
            (t = e));
      else if ((Ft(t), Ci(i))) {
        if (((f = i.nextSibling && i.nextSibling.dataset), f)) var y = f.dgst;
        (f = y),
          (u = Error(v(419))),
          (u.stack = ""),
          (u.digest = f),
          Yu({ value: u, source: null, stack: null }),
          (t = ni(l, t, a));
      } else if (
        (Ml || Bu(l, t, a, !1), (f = (a & l.childLanes) !== 0), Ml || f)
      ) {
        if (
          ((f = sl),
          f !== null &&
            ((u = a & -a),
            (u = (u & 42) !== 0 ? 1 : Cn(u)),
            (u = (u & (f.suspendedLanes | a)) !== 0 ? 0 : u),
            u !== 0 && u !== c.retryLane))
        )
          throw ((c.retryLane = u), ka(l, u), et(f, l, u), gr);
        i.data === "$?" || Ti(), (t = ni(l, t, a));
      } else
        i.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = c.treeContext),
            (hl = St(i.nextSibling)),
            (Xl = t),
            (ll = !0),
            (Ta = null),
            (pt = !1),
            l !== null &&
              ((rt[ot++] = Rt),
              (rt[ot++] = jt),
              (rt[ot++] = pa),
              (Rt = l.id),
              (jt = l.overflow),
              (pa = t)),
            (t = ei(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (It(),
        (e = u.fallback),
        (i = t.mode),
        (c = l.child),
        (y = c.sibling),
        (u = Ut(c, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = c.subtreeFlags & 65011712),
        y !== null ? (e = Ut(y, e)) : ((e = ba(e, i, a, null)), (e.flags |= 2)),
        (e.return = t),
        (u.return = t),
        (u.sibling = e),
        (t.child = u),
        (u = e),
        (e = t.child),
        (i = l.child.memoizedState),
        i === null
          ? (i = ai(a))
          : ((c = i.cachePool),
            c !== null
              ? ((y = Al._currentValue),
                (c = c.parent !== y ? { parent: y, pool: y } : c))
              : (c = ds()),
            (i = { baseLanes: i.baseLanes | a, cachePool: c })),
        (e.memoizedState = i),
        (e.childLanes = ui(l, f, a)),
        (t.memoizedState = ti),
        u)
      : (Ft(t),
        (a = l.child),
        (l = a.sibling),
        (a = Ut(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [l]), (t.flags |= 16)) : f.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function ei(l, t) {
    return (
      (t = cn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function cn(l, t) {
    return (
      (l = Pl(22, l, null, t)),
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
  function ni(l, t, a) {
    return (
      fu(t, l.child, null, a),
      (l = ei(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Mr(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Tf(l.return, t, a);
  }
  function fi(l, t, a, u, e) {
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
  function Dr(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    if ((jl(l, t, u.children, a), (u = Ol.current), (u & 2) !== 0))
      (u = (u & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && Mr(l, a, t);
          else if (l.tag === 19) Mr(l, a, t);
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
    switch ((O(Ol, u), e)) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          (l = a.alternate),
            l !== null && un(l) === null && (e = a),
            (a = a.sibling);
        (a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          fi(t, !1, e, a, n);
        break;
      case "backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && un(l) === null)) {
            t.child = e;
            break;
          }
          (l = e.sibling), (e.sibling = a), (a = e), (e = l);
        }
        fi(t, !0, a, null, n);
        break;
      case "together":
        fi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (ua |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Bu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(v(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Ut(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = Ut(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function ii(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Qe(l)));
  }
  function q0(l, t, a) {
    switch (t.tag) {
      case 3:
        yl(t, t.stateNode.containerInfo),
          wt(t, Al, l.memoizedState.cache),
          qu();
        break;
      case 27:
      case 5:
        qn(t);
        break;
      case 4:
        yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        wt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (Ft(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? _r(l, t, a)
            : (Ft(t), (l = Yt(l, t, a)), l !== null ? l.sibling : null);
        Ft(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (Bu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Dr(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          O(Ol, Ol.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), pr(l, t, a);
      case 24:
        wt(t, Al, l.memoizedState.cache);
    }
    return Yt(l, t, a);
  }
  function Ur(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Ml = !0;
      else {
        if (!ii(l, a) && (t.flags & 128) === 0) return (Ml = !1), q0(l, t, a);
        Ml = (l.flags & 131072) !== 0;
      }
    else (Ml = !1), ll && (t.flags & 1048576) !== 0 && ns(t, Ce, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var u = t.elementType,
            e = u._init;
          if (((u = e(u._payload)), (t.type = u), typeof u == "function"))
            hf(u)
              ? ((l = Ua(u, l)), (t.tag = 1), (t = Ar(null, t, u, l, a)))
              : ((t.tag = 0), (t = li(null, t, u, l, a)));
          else {
            if (u != null) {
              if (((e = u.$$typeof), e === mt)) {
                (t.tag = 11), (t = Sr(null, t, u, l, a));
                break l;
              } else if (e === Jl) {
                (t.tag = 14), (t = zr(null, t, u, l, a));
                break l;
              }
            }
            throw ((t = va(u) || u), Error(v(306, t, "")));
          }
        }
        return t;
      case 0:
        return li(l, t, t.type, t.pendingProps, a);
      case 1:
        return (u = t.type), (e = Ua(u, t.pendingProps)), Ar(l, t, u, e, a);
      case 3:
        l: {
          if ((yl(t, t.stateNode.containerInfo), l === null))
            throw Error(v(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          (e = n.element), Rf(l, t), Lu(t, u, null, a);
          var f = t.memoizedState;
          if (
            ((u = f.cache),
            wt(t, Al, u),
            u !== n.cache && Af(t, [Al], a, !0),
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
              t = Or(l, t, u, a);
              break l;
            } else if (u !== e) {
              (e = ct(Error(v(424)), t)), Yu(e), (t = Or(l, t, u, a));
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
                hl = St(l.firstChild),
                  Xl = t,
                  ll = !0,
                  Ta = null,
                  pt = !0,
                  a = ir(t, null, u, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((qu(), u === e)) {
              t = Yt(l, t, a);
              break l;
            }
            jl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          fn(l, t),
          l === null
            ? (a = Ho(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : ll ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = En(C.current).createElement(a)),
                (u[Yl] = t),
                (u[Ql] = l),
                Nl(u, a, l),
                _l(u),
                (t.stateNode = u))
            : (t.memoizedState = Ho(
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
            ll &&
            ((u = t.stateNode = jo(t.type, t.pendingProps, C.current)),
            (Xl = t),
            (pt = !0),
            (e = hl),
            ia(t.type) ? ((Qi = e), (hl = St(u.firstChild))) : (hl = e)),
          jl(l, t, t.pendingProps.children, a),
          fn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            ll &&
            ((e = u = hl) &&
              ((u = sy(u, t.type, t.pendingProps, pt)),
              u !== null
                ? ((t.stateNode = u),
                  (Xl = t),
                  (hl = St(u.firstChild)),
                  (pt = !1),
                  (e = !0))
                : (e = !1)),
            e || Aa(t)),
          qn(t),
          (e = t.type),
          (n = t.pendingProps),
          (f = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Bi(e, n) ? (u = null) : f !== null && Bi(e, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Yf(l, t, M0, null, null, a)), (de._currentValue = e)),
          fn(l, t),
          jl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            ll &&
            ((l = a = hl) &&
              ((a = ry(a, t.pendingProps, pt)),
              a !== null
                ? ((t.stateNode = a), (Xl = t), (hl = null), (l = !0))
                : (l = !1)),
            l || Aa(t)),
          null
        );
      case 13:
        return _r(l, t, a);
      case 4:
        return (
          yl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = fu(t, null, u, a)) : jl(l, t, u, a),
          t.child
        );
      case 11:
        return Sr(l, t, t.type, t.pendingProps, a);
      case 7:
        return jl(l, t, t.pendingProps, a), t.child;
      case 8:
        return jl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return jl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (u = t.pendingProps),
          wt(t, t.type, u.value),
          jl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          _a(t),
          (e = Bl(e)),
          (u = u(e)),
          (t.flags |= 1),
          jl(l, t, u, a),
          t.child
        );
      case 14:
        return zr(l, t, t.type, t.pendingProps, a);
      case 15:
        return br(l, t, t.type, t.pendingProps, a);
      case 19:
        return Dr(l, t, a);
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
            : ((a = Ut(l.child, u)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return pr(l, t, a);
      case 24:
        return (
          _a(t),
          (u = Bl(Al)),
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
              wt(t, Al, e))
            : ((l.lanes & a) !== 0 && (Rf(l, t), Lu(t, null, null, a), Vu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  wt(t, Al, u))
                : ((u = n.cache),
                  wt(t, Al, u),
                  u !== e.cache && Af(t, [Al], a, !0))),
          jl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  function Bt(l) {
    l.flags |= 4;
  }
  function Rr(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Xo(t))) {
      if (
        ((t = dt.current),
        t !== null &&
          ((k & 4194048) === k
            ? Et !== null
            : ((k & 62914560) !== k && (k & 536870912) === 0) || t !== Et))
      )
        throw ((Qu = Df), ys);
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? cc() : 536870912), (l.lanes |= t), (ru |= t));
  }
  function Fu(l, t) {
    if (!ll)
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
  function ml(l) {
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
  function Y0(l, t, a) {
    var u = t.pendingProps;
    switch ((bf(t), t.tag)) {
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
        return ml(t), null;
      case 1:
        return ml(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          Nt(Al),
          Zt(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (Hu(t)
              ? Bt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), cs())),
          ml(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Bt(t),
              a !== null ? (ml(t), Rr(t, a)) : (ml(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (Bt(t), ml(t), Rr(t, a))
              : (ml(t), (t.flags &= -16777217))
            : (l.memoizedProps !== u && Bt(t), ml(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        ze(t), (a = C.current);
        var e = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== u && Bt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(v(166));
            return ml(t), null;
          }
          (l = H.current),
            Hu(t) ? fs(t) : ((l = jo(e, u, a)), (t.stateNode = l), Bt(t));
        }
        return ml(t), null;
      case 5:
        if ((ze(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Bt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(v(166));
            return ml(t), null;
          }
          if (((l = H.current), Hu(t))) fs(t);
          else {
            switch (((e = En(C.current)), l)) {
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
            (l[Yl] = t), (l[Ql] = u);
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
            l: switch ((Nl(l, a, u), a)) {
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
            l && Bt(t);
          }
        }
        return ml(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Bt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(v(166));
          if (((l = C.current), Hu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Xl),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            (l[Yl] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                Ao(l.nodeValue, a)
              )),
              l || Aa(t);
          } else (l = En(l).createTextNode(u)), (l[Yl] = t), (t.stateNode = l);
        }
        return ml(t), null;
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = Hu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(v(317));
              e[Yl] = t;
            } else
              qu(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ml(t), (e = !1);
          } else
            (e = cs()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0);
          if (!e) return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        if ((qt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
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
          ml(t),
          null
        );
      case 4:
        return Zt(), l === null && xi(t.stateNode.containerInfo), ml(t), null;
      case 10:
        return Nt(t.type), ml(t), null;
      case 19:
        if ((M(Ol), (e = t.memoizedState), e === null)) return ml(t), null;
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) Fu(e, !1);
          else {
            if (gl !== 0 || (l !== null && (l.flags & 128) !== 0))
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
                  return O(Ol, (Ol.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null &&
              bt() > dn &&
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
                  !ll)
              )
                return ml(t), null;
            } else
              2 * bt() - e.renderingStartTime > dn &&
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
            (e.renderingStartTime = bt()),
            (t.sibling = null),
            (l = Ol.current),
            O(Ol, u ? (l & 1) | 2 : l & 1),
            t)
          : (ml(t), null);
      case 22:
      case 23:
        return (
          qt(t),
          Hf(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ml(t),
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
          l !== null && M(Ma),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Nt(Al),
          ml(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function B0(l, t) {
    switch ((bf(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nt(Al),
          Zt(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return ze(t), null;
      case 13:
        if (
          (qt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(v(340));
          qu();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return M(Ol), null;
      case 4:
        return Zt(), null;
      case 10:
        return Nt(t.type), null;
      case 22:
      case 23:
        return (
          qt(t),
          Hf(),
          l !== null && M(Ma),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Nt(Al), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jr(l, t) {
    switch ((bf(t), t.tag)) {
      case 3:
        Nt(Al), Zt();
        break;
      case 26:
      case 27:
      case 5:
        ze(t);
        break;
      case 4:
        Zt();
        break;
      case 13:
        qt(t);
        break;
      case 19:
        M(Ol);
        break;
      case 10:
        Nt(t.type);
        break;
      case 22:
      case 23:
        qt(t), Hf(), l !== null && M(Ma);
        break;
      case 24:
        Nt(Al);
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
    } catch (i) {
      il(t, t.return, i);
    }
  }
  function Pt(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var f = u.inst,
              i = f.destroy;
            if (i !== void 0) {
              (f.destroy = void 0), (e = t);
              var c = a,
                y = i;
              try {
                y();
              } catch (g) {
                il(e, c, g);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (g) {
      il(t, t.return, g);
    }
  }
  function xr(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        zs(t, a);
      } catch (u) {
        il(l, l.return, u);
      }
    }
  }
  function Nr(l, t, a) {
    (a.props = Ua(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (u) {
      il(l, t, u);
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
      il(l, t, e);
    }
  }
  function Tt(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          il(l, t, e);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          il(l, t, e);
        }
      else a.current = null;
  }
  function Hr(l) {
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
      il(l, l.return, e);
    }
  }
  function ci(l, t, a) {
    try {
      var u = l.stateNode;
      ey(u, l.type, a, t), (u[Ql] = t);
    } catch (e) {
      il(l, l.return, e);
    }
  }
  function qr(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ia(l.type)) ||
      l.tag === 4
    );
  }
  function si(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || qr(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && ia(l.type)) ||
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
  function ri(l, t, a) {
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
            a != null || t.onclick !== null || (t.onclick = pn));
    else if (
      u !== 4 &&
      (u === 27 && ia(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (ri(l, t, a), l = l.sibling; l !== null; )
        ri(l, t, a), (l = l.sibling);
  }
  function rn(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (
      u !== 4 &&
      (u === 27 && ia(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (rn(l, t, a), l = l.sibling; l !== null; )
        rn(l, t, a), (l = l.sibling);
  }
  function Yr(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Nl(t, u, a), (t[Yl] = l), (t[Ql] = a);
    } catch (n) {
      il(l, l.return, n);
    }
  }
  var Gt = !1,
    bl = !1,
    oi = !1,
    Br = typeof WeakSet == "function" ? WeakSet : Set,
    Dl = null;
  function G0(l, t) {
    if (((l = l.containerInfo), (qi = Dn), (l = Wc(l)), sf(l))) {
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
              i = -1,
              c = -1,
              y = 0,
              g = 0,
              p = l,
              m = null;
            t: for (;;) {
              for (
                var h;
                p !== a || (e !== 0 && p.nodeType !== 3) || (i = f + e),
                  p !== n || (u !== 0 && p.nodeType !== 3) || (c = f + u),
                  p.nodeType === 3 && (f += p.nodeValue.length),
                  (h = p.firstChild) !== null;

              )
                (m = p), (p = h);
              for (;;) {
                if (p === l) break t;
                if (
                  (m === a && ++y === e && (i = f),
                  m === n && ++g === u && (c = f),
                  (h = p.nextSibling) !== null)
                )
                  break;
                (p = m), (m = p.parentNode);
              }
              p = h;
            }
            a = i === -1 || c === -1 ? null : { start: i, end: c };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Yi = { focusedElem: l, selectionRange: a }, Dn = !1, Dl = t;
      Dl !== null;

    )
      if (
        ((t = Dl), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Dl = l);
      else
        for (; Dl !== null; ) {
          switch (((t = Dl), (n = t.alternate), (l = t.flags), t.tag)) {
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
                  il(a, a.return, q);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Xi(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xi(l);
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
            (l.return = t.return), (Dl = l);
            break;
          }
          Dl = t.return;
        }
  }
  function Gr(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        la(l, a), u & 4 && Iu(5, a);
        break;
      case 1:
        if ((la(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (f) {
              il(a, a.return, f);
            }
          else {
            var e = Ua(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              il(a, a.return, f);
            }
          }
        u & 64 && xr(a), u & 512 && Pu(a, a.return);
        break;
      case 3:
        if ((la(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
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
            zs(l, t);
          } catch (f) {
            il(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && u & 4 && Yr(a);
      case 26:
      case 5:
        la(l, a), t === null && u & 4 && Hr(a), u & 512 && Pu(a, a.return);
        break;
      case 12:
        la(l, a);
        break;
      case 13:
        la(l, a),
          u & 4 && Qr(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = J0.bind(null, a)), oy(l, a))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Gt), !u)) {
          (t = (t !== null && t.memoizedState !== null) || bl), (e = Gt);
          var n = bl;
          (Gt = u),
            (bl = t) && !n ? ta(l, a, (a.subtreeFlags & 8772) !== 0) : la(l, a),
            (Gt = e),
            (bl = n);
        }
        break;
      case 30:
        break;
      default:
        la(l, a);
    }
  }
  function Xr(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Xr(t)),
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
  var vl = null,
    Ll = !1;
  function Xt(l, t, a) {
    for (a = a.child; a !== null; ) Cr(l, t, a), (a = a.sibling);
  }
  function Cr(l, t, a) {
    if ($l && typeof $l.onCommitFiberUnmount == "function")
      try {
        $l.onCommitFiberUnmount(bu, a);
      } catch {}
    switch (a.tag) {
      case 26:
        bl || Tt(a, t),
          Xt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        bl || Tt(a, t);
        var u = vl,
          e = Ll;
        ia(a.type) && ((vl = a.stateNode), (Ll = !1)),
          Xt(l, t, a),
          ce(a.stateNode),
          (vl = u),
          (Ll = e);
        break;
      case 5:
        bl || Tt(a, t);
      case 6:
        if (
          ((u = vl),
          (e = Ll),
          (vl = null),
          Xt(l, t, a),
          (vl = u),
          (Ll = e),
          vl !== null)
        )
          if (Ll)
            try {
              (vl.nodeType === 9
                ? vl.body
                : vl.nodeName === "HTML"
                ? vl.ownerDocument.body
                : vl
              ).removeChild(a.stateNode);
            } catch (n) {
              il(a, t, n);
            }
          else
            try {
              vl.removeChild(a.stateNode);
            } catch (n) {
              il(a, t, n);
            }
        break;
      case 18:
        vl !== null &&
          (Ll
            ? ((l = vl),
              Uo(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                a.stateNode
              ),
              he(l))
            : Uo(vl, a.stateNode));
        break;
      case 4:
        (u = vl),
          (e = Ll),
          (vl = a.stateNode.containerInfo),
          (Ll = !0),
          Xt(l, t, a),
          (vl = u),
          (Ll = e);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bl || Pt(2, a, t), bl || Pt(4, a, t), Xt(l, t, a);
        break;
      case 1:
        bl ||
          (Tt(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && Nr(a, t, u)),
          Xt(l, t, a);
        break;
      case 21:
        Xt(l, t, a);
        break;
      case 22:
        (bl = (u = bl) || a.memoizedState !== null), Xt(l, t, a), (bl = u);
        break;
      default:
        Xt(l, t, a);
    }
  }
  function Qr(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        he(l);
      } catch (a) {
        il(t, t.return, a);
      }
  }
  function X0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Br()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Br()),
          t
        );
      default:
        throw Error(v(435, l.tag));
    }
  }
  function di(l, t) {
    var a = X0(l);
    t.forEach(function (u) {
      var e = W0.bind(null, l, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function lt(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          f = t,
          i = f;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (ia(i.type)) {
                (vl = i.stateNode), (Ll = !1);
                break l;
              }
              break;
            case 5:
              (vl = i.stateNode), (Ll = !1);
              break l;
            case 3:
            case 4:
              (vl = i.stateNode.containerInfo), (Ll = !0);
              break l;
          }
          i = i.return;
        }
        if (vl === null) throw Error(v(160));
        Cr(n, f, e),
          (vl = null),
          (Ll = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Zr(t, l), (t = t.sibling);
  }
  var gt = null;
  function Zr(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        lt(t, l),
          tt(l),
          u & 4 && (Pt(3, l, l.return), Iu(3, l), Pt(5, l, l.return));
        break;
      case 1:
        lt(t, l),
          tt(l),
          u & 512 && (bl || a === null || Tt(a, a.return)),
          u & 64 &&
            Gt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u)))));
        break;
      case 26:
        var e = gt;
        if (
          (lt(t, l),
          tt(l),
          u & 512 && (bl || a === null || Tt(a, a.return)),
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
                          n[Tu] ||
                          n[Yl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title")
                          )),
                        Nl(n, u, a),
                        (n[Yl] = l),
                        _l(n),
                        (u = n);
                      break l;
                    case "link":
                      var f = Bo("link", "href", e).get(u + (a.href || ""));
                      if (f) {
                        for (var i = 0; i < f.length; i++)
                          if (
                            ((n = f[i]),
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
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Nl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (f = Bo("meta", "content", e).get(
                          u + (a.content || "")
                        ))
                      ) {
                        for (i = 0; i < f.length; i++)
                          if (
                            ((n = f[i]),
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
                            f.splice(i, 1);
                            break t;
                          }
                      }
                      (n = e.createElement(u)),
                        Nl(n, u, a),
                        e.head.appendChild(n);
                      break;
                    default:
                      throw Error(v(468, u));
                  }
                  (n[Yl] = l), _l(n), (u = n);
                }
                l.stateNode = u;
              } else Go(e, l.type, l.stateNode);
            else l.stateNode = Yo(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? Go(e, l.type, l.stateNode)
                  : Yo(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                ci(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        lt(t, l),
          tt(l),
          u & 512 && (bl || a === null || Tt(a, a.return)),
          a !== null && u & 4 && ci(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (lt(t, l),
          tt(l),
          u & 512 && (bl || a === null || Tt(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            Za(e, "");
          } catch (h) {
            il(l, l.return, h);
          }
        }
        u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), ci(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (oi = !0);
        break;
      case 6:
        if ((lt(t, l), tt(l), u & 4)) {
          if (l.stateNode === null) throw Error(v(162));
          (u = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = u;
          } catch (h) {
            il(l, l.return, h);
          }
        }
        break;
      case 3:
        if (
          ((On = null),
          (e = gt),
          (gt = Tn(t.containerInfo)),
          lt(t, l),
          (gt = e),
          tt(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            he(t.containerInfo);
          } catch (h) {
            il(l, l.return, h);
          }
        oi && ((oi = !1), Vr(l));
        break;
      case 4:
        (u = gt),
          (gt = Tn(l.stateNode.containerInfo)),
          lt(t, l),
          tt(l),
          (gt = u);
        break;
      case 12:
        lt(t, l), tt(l);
        break;
      case 13:
        lt(t, l),
          tt(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Si = bt()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), di(l, u)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var c = a !== null && a.memoizedState !== null,
          y = Gt,
          g = bl;
        if (
          ((Gt = y || e),
          (bl = g || c),
          lt(t, l),
          (bl = g),
          (Gt = y),
          tt(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || c || Gt || bl || Ra(l)),
              a = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                c = a = t;
                try {
                  if (((n = c.stateNode), e))
                    (f = n.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    i = c.stateNode;
                    var p = c.memoizedProps.style,
                      m =
                        p != null && p.hasOwnProperty("display")
                          ? p.display
                          : null;
                    i.style.display =
                      m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                  }
                } catch (h) {
                  il(c, c.return, h);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                c = t;
                try {
                  c.stateNode.nodeValue = e ? "" : c.memoizedProps;
                } catch (h) {
                  il(c, c.return, h);
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
            a !== null && ((u.retryQueue = null), di(l, a))));
        break;
      case 19:
        lt(t, l),
          tt(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), di(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        lt(t, l), tt(l);
    }
  }
  function tt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (qr(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(v(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = si(l);
            rn(l, n, e);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Za(f, ""), (a.flags &= -33));
            var i = si(l);
            rn(l, i, f);
            break;
          case 3:
          case 4:
            var c = a.stateNode.containerInfo,
              y = si(l);
            ri(l, y, c);
            break;
          default:
            throw Error(v(161));
        }
      } catch (g) {
        il(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Vr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Vr(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function la(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Gr(l, t.alternate, t), (t = t.sibling);
  }
  function Ra(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pt(4, t, t.return), Ra(t);
          break;
        case 1:
          Tt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Nr(t, t.return, a),
            Ra(t);
          break;
        case 27:
          ce(t.stateNode);
        case 26:
        case 5:
          Tt(t, t.return), Ra(t);
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
  function ta(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ta(e, n, a), Iu(4, n);
          break;
        case 1:
          if (
            (ta(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (y) {
              il(u, u.return, y);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var i = u.stateNode;
            try {
              var c = e.shared.hiddenCallbacks;
              if (c !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < c.length; e++)
                  Ss(c[e], i);
            } catch (y) {
              il(u, u.return, y);
            }
          }
          a && f & 64 && xr(n), Pu(n, n.return);
          break;
        case 27:
          Yr(n);
        case 26:
        case 5:
          ta(e, n, a), a && u === null && f & 4 && Hr(n), Pu(n, n.return);
          break;
        case 12:
          ta(e, n, a);
          break;
        case 13:
          ta(e, n, a), a && f & 4 && Qr(e, n);
          break;
        case 22:
          n.memoizedState === null && ta(e, n, a), Pu(n, n.return);
          break;
        case 30:
          break;
        default:
          ta(e, n, a);
      }
      t = t.sibling;
    }
  }
  function yi(l, t) {
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
  function vi(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Gu(l));
  }
  function At(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Lr(l, t, a, u), (t = t.sibling);
  }
  function Lr(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(l, t, a, u), e & 2048 && Iu(9, t);
        break;
      case 1:
        At(l, t, a, u);
        break;
      case 3:
        At(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Gu(l)));
        break;
      case 12:
        if (e & 2048) {
          At(l, t, a, u), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              f = n.id,
              i = n.onPostCommit;
            typeof i == "function" &&
              i(
                f,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (c) {
            il(t, t.return, c);
          }
        } else At(l, t, a, u);
        break;
      case 13:
        At(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? At(l, t, a, u)
              : le(l, t)
            : n._visibility & 2
            ? At(l, t, a, u)
            : ((n._visibility |= 2),
              iu(l, t, a, u, (t.subtreeFlags & 10256) !== 0)),
          e & 2048 && yi(f, t);
        break;
      case 24:
        At(l, t, a, u), e & 2048 && vi(t.alternate, t);
        break;
      default:
        At(l, t, a, u);
    }
  }
  function iu(l, t, a, u, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        f = t,
        i = a,
        c = u,
        y = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          iu(n, f, i, c, e), Iu(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null
            ? g._visibility & 2
              ? iu(n, f, i, c, e)
              : le(n, f)
            : ((g._visibility |= 2), iu(n, f, i, c, e)),
            e && y & 2048 && yi(f.alternate, f);
          break;
        case 24:
          iu(n, f, i, c, e), e && y & 2048 && vi(f.alternate, f);
          break;
        default:
          iu(n, f, i, c, e);
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
            le(a, u), e & 2048 && yi(u.alternate, u);
            break;
          case 24:
            le(a, u), e & 2048 && vi(u.alternate, u);
            break;
          default:
            le(a, u);
        }
        t = t.sibling;
      }
  }
  var te = 8192;
  function cu(l) {
    if (l.subtreeFlags & te)
      for (l = l.child; l !== null; ) Kr(l), (l = l.sibling);
  }
  function Kr(l) {
    switch (l.tag) {
      case 26:
        cu(l),
          l.flags & te &&
            l.memoizedState !== null &&
            Ay(gt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        cu(l);
        break;
      case 3:
      case 4:
        var t = gt;
        (gt = Tn(l.stateNode.containerInfo)), cu(l), (gt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = te), (te = 16777216), cu(l), (te = t))
            : cu(l));
        break;
      default:
        cu(l);
    }
  }
  function wr(l) {
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
          (Dl = u), Wr(u, l);
        }
      wr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Jr(l), (l = l.sibling);
  }
  function Jr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ae(l), l.flags & 2048 && Pt(9, l, l.return);
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
          ? ((t._visibility &= -3), on(l))
          : ae(l);
        break;
      default:
        ae(l);
    }
  }
  function on(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          (Dl = u), Wr(u, l);
        }
      wr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          Pt(8, t, t.return), on(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), on(t));
          break;
        default:
          on(t);
      }
      l = l.sibling;
    }
  }
  function Wr(l, t) {
    for (; Dl !== null; ) {
      var a = Dl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Pt(8, a, t);
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
      if (((u = a.child), u !== null)) (u.return = a), (Dl = u);
      else
        l: for (a = l; Dl !== null; ) {
          u = Dl;
          var e = u.sibling,
            n = u.return;
          if ((Xr(u), u === a)) {
            Dl = null;
            break l;
          }
          if (e !== null) {
            (e.return = n), (Dl = e);
            break l;
          }
          Dl = n;
        }
    }
  }
  var C0 = {
      getCacheForType: function (l) {
        var t = Bl(Al),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    Q0 = typeof WeakMap == "function" ? WeakMap : Map,
    tl = 0,
    sl = null,
    w = null,
    k = 0,
    al = 0,
    at = null,
    aa = !1,
    su = !1,
    mi = !1,
    Ct = 0,
    gl = 0,
    ua = 0,
    ja = 0,
    hi = 0,
    yt = 0,
    ru = 0,
    ue = null,
    Kl = null,
    gi = !1,
    Si = 0,
    dn = 1 / 0,
    yn = null,
    ea = null,
    xl = 0,
    na = null,
    ou = null,
    du = 0,
    zi = 0,
    bi = null,
    kr = null,
    ee = 0,
    pi = null;
  function ut() {
    if ((tl & 2) !== 0 && k !== 0) return k & -k;
    if (S.T !== null) {
      var l = Pa;
      return l !== 0 ? l : Di();
    }
    return oc();
  }
  function $r() {
    yt === 0 && (yt = (k & 536870912) === 0 || ll ? ic() : 536870912);
    var l = dt.current;
    return l !== null && (l.flags |= 32), yt;
  }
  function et(l, t, a) {
    ((l === sl && (al === 2 || al === 9)) || l.cancelPendingCommit !== null) &&
      (yu(l, 0), fa(l, k, yt, !1)),
      Eu(l, a),
      ((tl & 2) === 0 || l !== sl) &&
        (l === sl &&
          ((tl & 2) === 0 && (ja |= a), gl === 4 && fa(l, k, yt, !1)),
        Ot(l));
  }
  function Fr(l, t, a) {
    if ((tl & 6) !== 0) throw Error(v(327));
    var u = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || pu(l, t),
      e = u ? L0(l, t) : Ai(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        su && !u && fa(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !Z0(a))) {
          (e = Ai(l, t, !1)), (n = !1);
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
              var i = l;
              e = ue;
              var c = i.current.memoizedState.isDehydrated;
              if ((c && (yu(i, f).flags |= 256), (f = Ai(i, f, !1)), f !== 2)) {
                if (mi && !c) {
                  (i.errorRecoveryDisabledLanes |= n), (ja |= n), (e = 4);
                  break l;
                }
                (n = Kl),
                  (Kl = e),
                  n !== null && (Kl === null ? (Kl = n) : Kl.push.apply(Kl, n));
              }
              e = f;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          yu(l, 0), fa(l, t, 0, !0);
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
              fa(u, t, yt, !aa);
              break l;
            case 2:
              Kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((t & 62914560) === t && ((e = Si + 300 - bt()), 10 < e)) {
            if ((fa(u, t, yt, !aa), Te(u, 0, !0) !== 0)) break l;
            u.timeoutHandle = Mo(
              Ir.bind(null, u, a, Kl, yn, gi, t, yt, ja, ru, aa, n, 2, -0, 0),
              e
            );
            break l;
          }
          Ir(u, a, Kl, yn, gi, t, yt, ja, ru, aa, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Ot(l);
  }
  function Ir(l, t, a, u, e, n, f, i, c, y, g, p, m, h) {
    if (
      ((l.timeoutHandle = -1),
      (p = t.subtreeFlags),
      (p & 8192 || (p & 16785408) === 16785408) &&
        ((oe = { stylesheets: null, count: 0, unsuspend: Ty }),
        Kr(t),
        (p = Oy()),
        p !== null))
    ) {
      (l.cancelPendingCommit = p(
        no.bind(null, l, t, n, a, u, e, f, i, c, g, 1, m, h)
      )),
        fa(l, n, f, !y);
      return;
    }
    no(l, t, n, a, u, e, f, i, c);
  }
  function Z0(l) {
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
            if (!Il(n(), e)) return !1;
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
  function fa(l, t, a, u) {
    (t &= ~hi),
      (t &= ~ja),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes);
    for (var e = t; 0 < e; ) {
      var n = 31 - Fl(e),
        f = 1 << n;
      (u[n] = -1), (e &= ~f);
    }
    a !== 0 && sc(l, a, t);
  }
  function vn() {
    return (tl & 6) === 0 ? (ne(0), !1) : !0;
  }
  function Ei() {
    if (w !== null) {
      if (al === 0) var l = w.return;
      else (l = w), (xt = Oa = null), Xf(l), (nu = null), (ku = 0), (l = w);
      for (; l !== null; ) jr(l.alternate, l), (l = l.return);
      w = null;
    }
  }
  function yu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), fy(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      Ei(),
      (sl = l),
      (w = a = Ut(l.current, null)),
      (k = t),
      (al = 0),
      (at = null),
      (aa = !1),
      (su = pu(l, t)),
      (mi = !1),
      (ru = yt = hi = ja = ua = gl = 0),
      (Kl = ue = null),
      (gi = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Fl(u),
          n = 1 << e;
        (t |= l[e]), (u &= ~n);
      }
    return (Ct = t), qe(), a;
  }
  function Pr(l, t) {
    (V = null),
      (S.H = ln),
      t === Cu || t === Le
        ? ((t = hs()), (al = 3))
        : t === ys
        ? ((t = hs()), (al = 4))
        : (al =
            t === gr
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (at = t),
      w === null && ((gl = 1), nn(l, ct(t, l.current)));
  }
  function lo() {
    var l = S.H;
    return (S.H = ln), l === null ? ln : l;
  }
  function to() {
    var l = S.A;
    return (S.A = C0), l;
  }
  function Ti() {
    (gl = 4),
      aa || ((k & 4194048) !== k && dt.current !== null) || (su = !0),
      ((ua & 134217727) === 0 && (ja & 134217727) === 0) ||
        sl === null ||
        fa(sl, k, yt, !1);
  }
  function Ai(l, t, a) {
    var u = tl;
    tl |= 2;
    var e = lo(),
      n = to();
    (sl !== l || k !== t) && ((yn = null), yu(l, t)), (t = !1);
    var f = gl;
    l: do
      try {
        if (al !== 0 && w !== null) {
          var i = w,
            c = at;
          switch (al) {
            case 8:
              Ei(), (f = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              dt.current === null && (t = !0);
              var y = al;
              if (((al = 0), (at = null), vu(l, i, c, y), a && su)) {
                f = 0;
                break l;
              }
              break;
            default:
              (y = al), (al = 0), (at = null), vu(l, i, c, y);
          }
        }
        V0(), (f = gl);
        break;
      } catch (g) {
        Pr(l, g);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (xt = Oa = null),
      (tl = u),
      (S.H = e),
      (S.A = n),
      w === null && ((sl = null), (k = 0), qe()),
      f
    );
  }
  function V0() {
    for (; w !== null; ) ao(w);
  }
  function L0(l, t) {
    var a = tl;
    tl |= 2;
    var u = lo(),
      e = to();
    sl !== l || k !== t
      ? ((yn = null), (dn = bt() + 500), yu(l, t))
      : (su = pu(l, t));
    l: do
      try {
        if (al !== 0 && w !== null) {
          t = w;
          var n = at;
          t: switch (al) {
            case 1:
              (al = 0), (at = null), vu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (vs(n)) {
                (al = 0), (at = null), uo(t);
                break;
              }
              (t = function () {
                (al !== 2 && al !== 9) || sl !== l || (al = 7), Ot(l);
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
                ? ((al = 0), (at = null), uo(t))
                : ((al = 0), (at = null), vu(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (w.tag) {
                case 26:
                  f = w.memoizedState;
                case 5:
                case 27:
                  var i = w;
                  if (!f || Xo(f)) {
                    (al = 0), (at = null);
                    var c = i.sibling;
                    if (c !== null) w = c;
                    else {
                      var y = i.return;
                      y !== null ? ((w = y), mn(y)) : (w = null);
                    }
                    break t;
                  }
              }
              (al = 0), (at = null), vu(l, t, n, 5);
              break;
            case 6:
              (al = 0), (at = null), vu(l, t, n, 6);
              break;
            case 8:
              Ei(), (gl = 6);
              break l;
            default:
              throw Error(v(462));
          }
        }
        K0();
        break;
      } catch (g) {
        Pr(l, g);
      }
    while (!0);
    return (
      (xt = Oa = null),
      (S.H = u),
      (S.A = e),
      (tl = a),
      w !== null ? 0 : ((sl = null), (k = 0), qe(), gl)
    );
  }
  function K0() {
    for (; w !== null && !yd(); ) ao(w);
  }
  function ao(l) {
    var t = Ur(l.alternate, l, Ct);
    (l.memoizedProps = l.pendingProps), t === null ? mn(l) : (w = t);
  }
  function uo(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Tr(a, t, t.pendingProps, t.type, void 0, k);
        break;
      case 11:
        t = Tr(a, t, t.pendingProps, t.type.render, t.ref, k);
        break;
      case 5:
        Xf(t);
      default:
        jr(a, t), (t = w = es(t, Ct)), (t = Ur(a, t, Ct));
    }
    (l.memoizedProps = l.pendingProps), t === null ? mn(l) : (w = t);
  }
  function vu(l, t, a, u) {
    (xt = Oa = null), Xf(t), (nu = null), (ku = 0);
    var e = t.return;
    try {
      if (H0(l, e, t, a, k)) {
        (gl = 1), nn(l, ct(a, l.current)), (w = null);
        return;
      }
    } catch (n) {
      if (e !== null) throw ((w = e), n);
      (gl = 1), nn(l, ct(a, l.current)), (w = null);
      return;
    }
    t.flags & 32768
      ? (ll || u === 1
          ? (l = !0)
          : su || (k & 536870912) !== 0
          ? (l = !1)
          : ((aa = l = !0),
            (u === 2 || u === 9 || u === 3 || u === 6) &&
              ((u = dt.current),
              u !== null && u.tag === 13 && (u.flags |= 16384))),
        eo(t, l))
      : mn(t);
  }
  function mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        eo(t, aa);
        return;
      }
      l = t.return;
      var a = Y0(t.alternate, t, Ct);
      if (a !== null) {
        w = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        w = t;
        return;
      }
      w = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function eo(l, t) {
    do {
      var a = B0(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (w = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        w = l;
        return;
      }
      w = l = a;
    } while (l !== null);
    (gl = 6), (w = null);
  }
  function no(l, t, a, u, e, n, f, i, c) {
    l.cancelPendingCommit = null;
    do hn();
    while (xl !== 0);
    if ((tl & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= vf),
        Td(l, a, n, f, i, c),
        l === sl && ((w = sl = null), (k = 0)),
        (ou = t),
        (na = l),
        (du = a),
        (zi = n),
        (bi = e),
        (kr = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            k0(be, function () {
              return ro(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        (u = S.T), (S.T = null), (e = _.p), (_.p = 2), (f = tl), (tl |= 4);
        try {
          G0(l, t, a);
        } finally {
          (tl = f), (_.p = e), (S.T = u);
        }
      }
      (xl = 1), fo(), io(), co();
    }
  }
  function fo() {
    if (xl === 1) {
      xl = 0;
      var l = na,
        t = ou,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = S.T), (S.T = null);
        var u = _.p;
        _.p = 2;
        var e = tl;
        tl |= 4;
        try {
          Zr(t, l);
          var n = Yi,
            f = Wc(l.containerInfo),
            i = n.focusedElem,
            c = n.selectionRange;
          if (
            f !== i &&
            i &&
            i.ownerDocument &&
            Jc(i.ownerDocument.documentElement, i)
          ) {
            if (c !== null && sf(i)) {
              var y = c.start,
                g = c.end;
              if ((g === void 0 && (g = y), "selectionStart" in i))
                (i.selectionStart = y),
                  (i.selectionEnd = Math.min(g, i.value.length));
              else {
                var p = i.ownerDocument || document,
                  m = (p && p.defaultView) || window;
                if (m.getSelection) {
                  var h = m.getSelection(),
                    G = i.textContent.length,
                    q = Math.min(c.start, G),
                    nl = c.end === void 0 ? q : Math.min(c.end, G);
                  !h.extend && q > nl && ((f = nl), (nl = q), (q = f));
                  var o = wc(i, q),
                    r = wc(i, nl);
                  if (
                    o &&
                    r &&
                    (h.rangeCount !== 1 ||
                      h.anchorNode !== o.node ||
                      h.anchorOffset !== o.offset ||
                      h.focusNode !== r.node ||
                      h.focusOffset !== r.offset)
                  ) {
                    var d = p.createRange();
                    d.setStart(o.node, o.offset),
                      h.removeAllRanges(),
                      q > nl
                        ? (h.addRange(d), h.extend(r.node, r.offset))
                        : (d.setEnd(r.node, r.offset), h.addRange(d));
                  }
                }
              }
            }
            for (p = [], h = i; (h = h.parentNode); )
              h.nodeType === 1 &&
                p.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
            for (
              typeof i.focus == "function" && i.focus(), i = 0;
              i < p.length;
              i++
            ) {
              var z = p[i];
              (z.element.scrollLeft = z.left), (z.element.scrollTop = z.top);
            }
          }
          (Dn = !!qi), (Yi = qi = null);
        } finally {
          (tl = e), (_.p = u), (S.T = a);
        }
      }
      (l.current = t), (xl = 2);
    }
  }
  function io() {
    if (xl === 2) {
      xl = 0;
      var l = na,
        t = ou,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = S.T), (S.T = null);
        var u = _.p;
        _.p = 2;
        var e = tl;
        tl |= 4;
        try {
          Gr(l, t.alternate, t);
        } finally {
          (tl = e), (_.p = u), (S.T = a);
        }
      }
      xl = 3;
    }
  }
  function co() {
    if (xl === 4 || xl === 3) {
      (xl = 0), vd();
      var l = na,
        t = ou,
        a = du,
        u = kr;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (xl = 5)
        : ((xl = 0), (ou = na = null), so(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (ea = null),
        Qn(a),
        (t = t.stateNode),
        $l && typeof $l.onCommitFiberRoot == "function")
      )
        try {
          $l.onCommitFiberRoot(bu, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        (t = S.T), (e = _.p), (_.p = 2), (S.T = null);
        try {
          for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
            var i = u[f];
            n(i.value, { componentStack: i.stack });
          }
        } finally {
          (S.T = t), (_.p = e);
        }
      }
      (du & 3) !== 0 && hn(),
        Ot(l),
        (e = l.pendingLanes),
        (a & 4194090) !== 0 && (e & 42) !== 0
          ? l === pi
            ? ee++
            : ((ee = 0), (pi = l))
          : (ee = 0),
        ne(0);
    }
  }
  function so(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Gu(t)));
  }
  function hn(l) {
    return fo(), io(), co(), ro();
  }
  function ro() {
    if (xl !== 5) return !1;
    var l = na,
      t = zi;
    zi = 0;
    var a = Qn(du),
      u = S.T,
      e = _.p;
    try {
      (_.p = 32 > a ? 32 : a), (S.T = null), (a = bi), (bi = null);
      var n = na,
        f = du;
      if (((xl = 0), (ou = na = null), (du = 0), (tl & 6) !== 0))
        throw Error(v(331));
      var i = tl;
      if (
        ((tl |= 4),
        Jr(n.current),
        Lr(n, n.current, f, a),
        (tl = i),
        ne(0, !1),
        $l && typeof $l.onPostCommitFiberRoot == "function")
      )
        try {
          $l.onPostCommitFiberRoot(bu, n);
        } catch {}
      return !0;
    } finally {
      (_.p = e), (S.T = u), so(l, t);
    }
  }
  function oo(l, t, a) {
    (t = ct(a, t)),
      (t = Pf(l.stateNode, t, 2)),
      (l = kt(l, t, 2)),
      l !== null && (Eu(l, 2), Ot(l));
  }
  function il(l, t, a) {
    if (l.tag === 3) oo(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          oo(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (ea === null || !ea.has(u)))
          ) {
            (l = ct(a, l)),
              (a = mr(2)),
              (u = kt(t, a, 2)),
              u !== null && (hr(a, u, t, l), Eu(u, 2), Ot(u));
            break;
          }
        }
        t = t.return;
      }
  }
  function Oi(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Q0();
      var e = new Set();
      u.set(t, e);
    } else (e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e));
    e.has(a) ||
      ((mi = !0), e.add(a), (l = w0.bind(null, l, t, a)), t.then(l, l));
  }
  function w0(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      sl === l &&
        (k & a) === a &&
        (gl === 4 || (gl === 3 && (k & 62914560) === k && 300 > bt() - Si)
          ? (tl & 2) === 0 && yu(l, 0)
          : (hi |= a),
        ru === k && (ru = 0)),
      Ot(l);
  }
  function yo(l, t) {
    t === 0 && (t = cc()), (l = ka(l, t)), l !== null && (Eu(l, t), Ot(l));
  }
  function J0(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), yo(l, a);
  }
  function W0(l, t) {
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
    u !== null && u.delete(t), yo(l, a);
  }
  function k0(l, t) {
    return Bn(l, t);
  }
  var gn = null,
    mu = null,
    _i = !1,
    Sn = !1,
    Mi = !1,
    xa = 0;
  function Ot(l) {
    l !== mu &&
      l.next === null &&
      (mu === null ? (gn = mu = l) : (mu = mu.next = l)),
      (Sn = !0),
      _i || ((_i = !0), F0());
  }
  function ne(l, t) {
    if (!Mi && Sn) {
      Mi = !0;
      do
        for (var a = !1, u = gn; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = u.suspendedLanes,
                i = u.pingedLanes;
              (n = (1 << (31 - Fl(42 | l) + 1)) - 1),
                (n &= e & ~(f & ~i)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), go(u, n));
          } else
            (n = k),
              (n = Te(
                u,
                u === sl ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1
              )),
              (n & 3) === 0 || pu(u, n) || ((a = !0), go(u, n));
          u = u.next;
        }
      while (a);
      Mi = !1;
    }
  }
  function $0() {
    vo();
  }
  function vo() {
    Sn = _i = !1;
    var l = 0;
    xa !== 0 && (ny() && (l = xa), (xa = 0));
    for (var t = bt(), a = null, u = gn; u !== null; ) {
      var e = u.next,
        n = mo(u, t);
      n === 0
        ? ((u.next = null),
          a === null ? (gn = e) : (a.next = e),
          e === null && (mu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (Sn = !0)),
        (u = e);
    }
    ne(l);
  }
  function mo(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var f = 31 - Fl(n),
        i = 1 << f,
        c = e[f];
      c === -1
        ? ((i & a) === 0 || (i & u) !== 0) && (e[f] = Ed(i, t))
        : c <= t && (l.expiredLanes |= i),
        (n &= ~i);
    }
    if (
      ((t = sl),
      (a = k),
      (a = Te(
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
    if ((a & 3) === 0 || pu(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Gn(u), Qn(a))) {
        case 2:
        case 8:
          a = nc;
          break;
        case 32:
          a = be;
          break;
        case 268435456:
          a = fc;
          break;
        default:
          a = be;
      }
      return (
        (u = ho.bind(null, l)),
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
  function ho(l, t) {
    if (xl !== 0 && xl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var a = l.callbackNode;
    if (hn() && l.callbackNode !== a) return null;
    var u = k;
    return (
      (u = Te(
        l,
        l === sl ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      u === 0
        ? null
        : (Fr(l, u, t),
          mo(l, bt()),
          l.callbackNode != null && l.callbackNode === a
            ? ho.bind(null, l)
            : null)
    );
  }
  function go(l, t) {
    if (hn()) return null;
    Fr(l, t, !0);
  }
  function F0() {
    iy(function () {
      (tl & 6) !== 0 ? Bn(ec, $0) : vo();
    });
  }
  function Di() {
    return xa === 0 && (xa = ic()), xa;
  }
  function So(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : De("" + l);
  }
  function zo(l, t) {
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
  function I0(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = So((e[Ql] || null).action),
        f = u.submitter;
      f &&
        ((t = (t = f[Ql] || null)
          ? So(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((n = t), (f = null)));
      var i = new xe("action", "action", null, u, e);
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (xa !== 0) {
                  var c = f ? zo(e, f) : new FormData(e);
                  Wf(
                    a,
                    { pending: !0, data: c, method: e.method, action: n },
                    null,
                    c
                  );
                }
              } else
                typeof n == "function" &&
                  (i.preventDefault(),
                  (c = f ? zo(e, f) : new FormData(e)),
                  Wf(
                    a,
                    { pending: !0, data: c, method: e.method, action: n },
                    n,
                    c
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Ui = 0; Ui < yf.length; Ui++) {
    var Ri = yf[Ui],
      P0 = Ri.toLowerCase(),
      ly = Ri[0].toUpperCase() + Ri.slice(1);
    ht(P0, "on" + ly);
  }
  ht(Fc, "onAnimationEnd"),
    ht(Ic, "onAnimationIteration"),
    ht(Pc, "onAnimationStart"),
    ht("dblclick", "onDoubleClick"),
    ht("focusin", "onFocus"),
    ht("focusout", "onBlur"),
    ht(g0, "onTransitionRun"),
    ht(S0, "onTransitionStart"),
    ht(z0, "onTransitionCancel"),
    ht(ls, "onTransitionEnd"),
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
    ty = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(fe)
    );
  function bo(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = u.length - 1; 0 <= f; f--) {
            var i = u[f],
              c = i.instance,
              y = i.currentTarget;
            if (((i = i.listener), c !== n && e.isPropagationStopped()))
              break l;
            (n = i), (e.currentTarget = y);
            try {
              n(e);
            } catch (g) {
              en(g);
            }
            (e.currentTarget = null), (n = c);
          }
        else
          for (f = 0; f < u.length; f++) {
            if (
              ((i = u[f]),
              (c = i.instance),
              (y = i.currentTarget),
              (i = i.listener),
              c !== n && e.isPropagationStopped())
            )
              break l;
            (n = i), (e.currentTarget = y);
            try {
              n(e);
            } catch (g) {
              en(g);
            }
            (e.currentTarget = null), (n = c);
          }
      }
    }
  }
  function J(l, t) {
    var a = t[Zn];
    a === void 0 && (a = t[Zn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (po(t, l, 2, !1), a.add(u));
  }
  function ji(l, t, a) {
    var u = 0;
    t && (u |= 4), po(a, l, u, t);
  }
  var zn = "_reactListening" + Math.random().toString(36).slice(2);
  function xi(l) {
    if (!l[zn]) {
      (l[zn] = !0),
        yc.forEach(function (a) {
          a !== "selectionchange" && (ty.has(a) || ji(a, !1, l), ji(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[zn] || ((t[zn] = !0), ji("selectionchange", !1, t));
    }
  }
  function po(l, t, a, u) {
    switch (Ko(t)) {
      case 2:
        var e = Dy;
        break;
      case 8:
        e = Uy;
        break;
      default:
        e = wi;
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
  function Ni(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var i = u.stateNode.containerInfo;
          if (i === e) break;
          if (f === 4)
            for (f = u.return; f !== null; ) {
              var c = f.tag;
              if ((c === 3 || c === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; i !== null; ) {
            if (((f = Ya(i)), f === null)) return;
            if (((c = f.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              u = n = f;
              continue l;
            }
            i = i.parentNode;
          }
        }
        u = u.return;
      }
    Mc(function () {
      var y = n,
        g = Fn(a),
        p = [];
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
              h = kd;
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
              h = Rc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Bd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = Id;
              break;
            case Fc:
            case Ic:
            case Pc:
              h = Cd;
              break;
            case ls:
              h = l0;
              break;
            case "scroll":
            case "scrollend":
              h = qd;
              break;
            case "wheel":
              h = a0;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Zd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = xc;
              break;
            case "toggle":
            case "beforetoggle":
              h = e0;
          }
          var q = (t & 4) !== 0,
            nl = !q && (l === "scroll" || l === "scrollend"),
            o = q ? (m !== null ? m + "Capture" : null) : m;
          q = [];
          for (var r = y, d; r !== null; ) {
            var z = r;
            if (
              ((d = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                d === null ||
                o === null ||
                ((z = Ou(r, o)), z != null && q.push(ie(r, z, d))),
              nl)
            )
              break;
            r = r.return;
          }
          0 < q.length &&
            ((m = new h(m, G, null, a, g)), p.push({ event: m, listeners: q }));
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
              g.window === g
                ? g
                : (m = g.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            h
              ? ((G = a.relatedTarget || a.toElement),
                (h = y),
                (G = G ? Ya(G) : null),
                G !== null &&
                  ((nl = U(G)),
                  (q = G.tag),
                  G !== nl || (q !== 5 && q !== 27 && q !== 6)) &&
                  (G = null))
              : ((h = null), (G = y)),
            h !== G)
          ) {
            if (
              ((q = Rc),
              (z = "onMouseLeave"),
              (o = "onMouseEnter"),
              (r = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = xc),
                (z = "onPointerLeave"),
                (o = "onPointerEnter"),
                (r = "pointer")),
              (nl = h == null ? m : Au(h)),
              (d = G == null ? m : Au(G)),
              (m = new q(z, r + "leave", h, a, g)),
              (m.target = nl),
              (m.relatedTarget = d),
              (z = null),
              Ya(g) === y &&
                ((q = new q(o, r + "enter", G, a, g)),
                (q.target = d),
                (q.relatedTarget = nl),
                (z = q)),
              (nl = z),
              h && G)
            )
              t: {
                for (q = h, o = G, r = 0, d = q; d; d = hu(d)) r++;
                for (d = 0, z = o; z; z = hu(z)) d++;
                for (; 0 < r - d; ) (q = hu(q)), r--;
                for (; 0 < d - r; ) (o = hu(o)), d--;
                for (; r--; ) {
                  if (q === o || (o !== null && q === o.alternate)) break t;
                  (q = hu(q)), (o = hu(o));
                }
                q = null;
              }
            else q = null;
            h !== null && Eo(p, m, h, q, !1),
              G !== null && nl !== null && Eo(p, nl, G, q, !0);
          }
        }
        l: {
          if (
            ((m = y ? Au(y) : window),
            (h = m.nodeName && m.nodeName.toLowerCase()),
            h === "select" || (h === "input" && m.type === "file"))
          )
            var D = Cc;
          else if (Gc(m))
            if (Qc) D = v0;
            else {
              D = d0;
              var K = o0;
            }
          else
            (h = m.nodeName),
              !h ||
              h.toLowerCase() !== "input" ||
              (m.type !== "checkbox" && m.type !== "radio")
                ? y && kn(y.elementType) && (D = Cc)
                : (D = y0);
          if (D && (D = D(l, y))) {
            Xc(p, D, a, g);
            break l;
          }
          K && K(l, m, y),
            l === "focusout" &&
              y &&
              m.type === "number" &&
              y.memoizedProps.value != null &&
              Wn(m, "number", m.value);
        }
        switch (((K = y ? Au(y) : window), l)) {
          case "focusin":
            (Gc(K) || K.contentEditable === "true") &&
              ((wa = K), (rf = y), (Nu = null));
            break;
          case "focusout":
            Nu = rf = wa = null;
            break;
          case "mousedown":
            of = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (of = !1), kc(p, a, g);
            break;
          case "selectionchange":
            if (h0) break;
          case "keydown":
          case "keyup":
            kc(p, a, g);
        }
        var x;
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
            ? Yc(l, a) && (Y = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (Y = "onCompositionStart");
        Y &&
          (Nc &&
            a.locale !== "ko" &&
            (Ka || Y !== "onCompositionStart"
              ? Y === "onCompositionEnd" && Ka && (x = Dc())
              : ((Kt = g),
                (lf = "value" in Kt ? Kt.value : Kt.textContent),
                (Ka = !0))),
          (K = bn(y, Y)),
          0 < K.length &&
            ((Y = new jc(Y, l, null, a, g)),
            p.push({ event: Y, listeners: K }),
            x ? (Y.data = x) : ((x = Bc(a)), x !== null && (Y.data = x)))),
          (x = f0 ? i0(l, a) : c0(l, a)) &&
            ((Y = bn(y, "onBeforeInput")),
            0 < Y.length &&
              ((K = new jc("onBeforeInput", "beforeinput", null, a, g)),
              p.push({ event: K, listeners: Y }),
              (K.data = x))),
          I0(p, l, y, a, g);
      }
      bo(p, t);
    });
  }
  function ie(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function bn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Ou(l, a)),
          e != null && u.unshift(ie(l, e, n)),
          (e = Ou(l, t)),
          e != null && u.push(ie(l, e, n))),
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
  function Eo(l, t, a, u, e) {
    for (var n = t._reactName, f = []; a !== null && a !== u; ) {
      var i = a,
        c = i.alternate,
        y = i.stateNode;
      if (((i = i.tag), c !== null && c === u)) break;
      (i !== 5 && i !== 26 && i !== 27) ||
        y === null ||
        ((c = y),
        e
          ? ((y = Ou(a, n)), y != null && f.unshift(ie(a, y, c)))
          : e || ((y = Ou(a, n)), y != null && f.push(ie(a, y, c)))),
        (a = a.return);
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var ay = /\r\n?/g,
    uy = /\u0000|\uFFFD/g;
  function To(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        ay,
        `
`
      )
      .replace(uy, "");
  }
  function Ao(l, t) {
    return (t = To(t)), To(l) === t;
  }
  function pn() {}
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
        Oc(l, u, n);
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
        u != null && (l.onclick = pn);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
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
        J("beforetoggle", l), J("toggle", l), Ae(l, "popover", u);
        break;
      case "xlinkActuate":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Mt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Mt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Ae(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Nd.get(a) || a), Ae(l, a, u));
    }
  }
  function Hi(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        Oc(l, u, n);
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
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = pn);
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
        if (!vc.hasOwnProperty(a))
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
              : Ae(l, a, u);
          }
    }
  }
  function Nl(l, t, a) {
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
        J("error", l), J("load", l);
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
        J("invalid", l);
        var i = (n = f = e = null),
          c = null,
          y = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var g = a[u];
            if (g != null)
              switch (u) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  c = g;
                  break;
                case "defaultChecked":
                  y = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  i = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null) throw Error(v(137, t));
                  break;
                default:
                  el(l, t, u, g, a, null);
              }
          }
        pc(l, n, i, c, y, f, e, !1), _e(l);
        return;
      case "select":
        J("invalid", l), (u = f = n = null);
        for (e in a)
          if (a.hasOwnProperty(e) && ((i = a[e]), i != null))
            switch (e) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                u = i;
              default:
                el(l, t, e, i, a, null);
            }
        (t = n),
          (a = f),
          (l.multiple = !!u),
          t != null ? Qa(l, !!u, t, !1) : a != null && Qa(l, !!u, a, !0);
        return;
      case "textarea":
        J("invalid", l), (n = e = u = null);
        for (f in a)
          if (a.hasOwnProperty(f) && ((i = a[f]), i != null))
            switch (f) {
              case "value":
                u = i;
                break;
              case "defaultValue":
                e = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(v(91));
                break;
              default:
                el(l, t, f, i, a, null);
            }
        Tc(l, u, e, n), _e(l);
        return;
      case "option":
        for (c in a)
          if (a.hasOwnProperty(c) && ((u = a[c]), u != null))
            switch (c) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                el(l, t, c, u, a, null);
            }
        return;
      case "dialog":
        J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l);
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < fe.length; u++) J(fe[u], l);
        break;
      case "image":
        J("error", l), J("load", l);
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        J("error", l), J("load", l);
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
        for (y in a)
          if (a.hasOwnProperty(y) && ((u = a[y]), u != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                el(l, t, y, u, a, null);
            }
        return;
      default:
        if (kn(t)) {
          for (g in a)
            a.hasOwnProperty(g) &&
              ((u = a[g]), u !== void 0 && Hi(l, t, g, u, a, void 0));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && ((u = a[i]), u != null && el(l, t, i, u, a, null));
  }
  function ey(l, t, a, u) {
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
          i = null,
          c = null,
          y = null,
          g = null;
        for (h in a) {
          var p = a[h];
          if (a.hasOwnProperty(h) && p != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                c = p;
              default:
                u.hasOwnProperty(h) || el(l, t, h, null, u, p);
            }
        }
        for (var m in u) {
          var h = u[m];
          if (((p = a[m]), u.hasOwnProperty(m) && (h != null || p != null)))
            switch (m) {
              case "type":
                n = h;
                break;
              case "name":
                e = h;
                break;
              case "checked":
                y = h;
                break;
              case "defaultChecked":
                g = h;
                break;
              case "value":
                f = h;
                break;
              case "defaultValue":
                i = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(v(137, t));
                break;
              default:
                h !== p && el(l, t, m, h, u, p);
            }
        }
        Jn(l, f, i, c, y, g, n, e);
        return;
      case "select":
        h = f = i = m = null;
        for (n in a)
          if (((c = a[n]), a.hasOwnProperty(n) && c != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = c;
              default:
                u.hasOwnProperty(n) || el(l, t, n, null, u, c);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (c = a[e]),
            u.hasOwnProperty(e) && (n != null || c != null))
          )
            switch (e) {
              case "value":
                m = n;
                break;
              case "defaultValue":
                i = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== c && el(l, t, e, n, u, c);
            }
        (t = i),
          (a = f),
          (u = h),
          m != null
            ? Qa(l, !!a, m, !1)
            : !!u != !!a &&
              (t != null ? Qa(l, !!a, t, !0) : Qa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        h = m = null;
        for (i in a)
          if (
            ((e = a[i]),
            a.hasOwnProperty(i) && e != null && !u.hasOwnProperty(i))
          )
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                el(l, t, i, null, u, e);
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
        Ec(l, m, h);
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
        for (c in u)
          if (
            ((m = u[c]),
            (h = a[c]),
            u.hasOwnProperty(c) && m !== h && (m != null || h != null))
          )
            switch (c) {
              case "selected":
                l.selected =
                  m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                el(l, t, c, m, u, h);
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
        for (y in u)
          if (
            ((m = u[y]),
            (h = a[y]),
            u.hasOwnProperty(y) && m !== h && (m != null || h != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(v(137, t));
                break;
              default:
                el(l, t, y, m, u, h);
            }
        return;
      default:
        if (kn(t)) {
          for (var nl in a)
            (m = a[nl]),
              a.hasOwnProperty(nl) &&
                m !== void 0 &&
                !u.hasOwnProperty(nl) &&
                Hi(l, t, nl, void 0, u, m);
          for (g in u)
            (m = u[g]),
              (h = a[g]),
              !u.hasOwnProperty(g) ||
                m === h ||
                (m === void 0 && h === void 0) ||
                Hi(l, t, g, m, u, h);
          return;
        }
    }
    for (var o in a)
      (m = a[o]),
        a.hasOwnProperty(o) &&
          m != null &&
          !u.hasOwnProperty(o) &&
          el(l, t, o, null, u, m);
    for (p in u)
      (m = u[p]),
        (h = a[p]),
        !u.hasOwnProperty(p) ||
          m === h ||
          (m == null && h == null) ||
          el(l, t, p, m, u, h);
  }
  var qi = null,
    Yi = null;
  function En(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Oo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _o(l, t) {
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
  function Bi(l, t) {
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
  var Gi = null;
  function ny() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Gi
        ? !1
        : ((Gi = l), !0)
      : ((Gi = null), !1);
  }
  var Mo = typeof setTimeout == "function" ? setTimeout : void 0,
    fy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Do = typeof Promise == "function" ? Promise : void 0,
    iy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Do < "u"
        ? function (l) {
            return Do.resolve(null).then(l).catch(cy);
          }
        : Mo;
  function cy(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ia(l) {
    return l === "head";
  }
  function Uo(l, t) {
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
            if ((a & 1 && ce(f.documentElement), a & 2 && ce(f.body), a & 4))
              for (a = f.head, ce(a), f = a.firstChild; f; ) {
                var i = f.nextSibling,
                  c = f.nodeName;
                f[Tu] ||
                  c === "SCRIPT" ||
                  c === "STYLE" ||
                  (c === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(f),
                  (f = i);
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
  function Xi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xi(a), Vn(a);
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
  function sy(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Tu])
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
      if (((l = St(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function ry(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = St(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Ci(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function oy(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete") t();
    else {
      var u = function () {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u);
    }
  }
  function St(l) {
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
  var Qi = null;
  function Ro(l) {
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
  function jo(l, t, a) {
    switch (((t = En(a)), l)) {
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
  function ce(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Vn(l);
  }
  var vt = new Map(),
    xo = new Set();
  function Tn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var Qt = _.d;
  _.d = { f: dy, r: yy, D: vy, C: my, L: hy, m: gy, X: zy, S: Sy, M: by };
  function dy() {
    var l = Qt.f(),
      t = vn();
    return l || t;
  }
  function yy(l) {
    var t = Ba(l);
    t !== null && t.tag === 5 && t.type === "form" ? Fs(t) : Qt.r(l);
  }
  var gu = typeof document > "u" ? null : document;
  function No(l, t, a) {
    var u = gu;
    if (u && typeof t == "string" && t) {
      var e = it(t);
      (e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        xo.has(e) ||
          (xo.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Nl(t, "link", l),
            _l(t),
            u.head.appendChild(t)));
    }
  }
  function vy(l) {
    Qt.D(l), No("dns-prefetch", l, null);
  }
  function my(l, t) {
    Qt.C(l, t), No("preconnect", l, t);
  }
  function hy(l, t, a) {
    Qt.L(l, t, a);
    var u = gu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + it(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + it(a.imageSizes) + '"]'))
        : (e += '[href="' + it(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Su(l);
          break;
        case "script":
          n = zu(l);
      }
      vt.has(n) ||
        ((l = A(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        vt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(se(n))) ||
          (t === "script" && u.querySelector(re(n))) ||
          ((t = u.createElement("link")),
          Nl(t, "link", l),
          _l(t),
          u.head.appendChild(t)));
    }
  }
  function gy(l, t) {
    Qt.m(l, t);
    var a = gu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + it(u) + '"][href="' + it(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = zu(l);
      }
      if (
        !vt.has(n) &&
        ((l = A({ rel: "modulepreload", href: l }, t)),
        vt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(re(n))) return;
        }
        (u = a.createElement("link")),
          Nl(u, "link", l),
          _l(u),
          a.head.appendChild(u);
      }
    }
  }
  function Sy(l, t, a) {
    Qt.S(l, t, a);
    var u = gu;
    if (u && l) {
      var e = Ga(u).hoistableStyles,
        n = Su(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var i = { loading: 0, preload: null };
        if ((f = u.querySelector(se(n)))) i.loading = 5;
        else {
          (l = A({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = vt.get(n)) && Zi(l, a);
          var c = (f = u.createElement("link"));
          _l(c),
            Nl(c, "link", l),
            (c._p = new Promise(function (y, g) {
              (c.onload = y), (c.onerror = g);
            })),
            c.addEventListener("load", function () {
              i.loading |= 1;
            }),
            c.addEventListener("error", function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            An(f, t, u);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: i }),
          e.set(n, f);
      }
    }
  }
  function zy(l, t) {
    Qt.X(l, t);
    var a = gu;
    if (a && l) {
      var u = Ga(a).hoistableScripts,
        e = zu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(re(e))),
        n ||
          ((l = A({ src: l, async: !0 }, t)),
          (t = vt.get(e)) && Vi(l, t),
          (n = a.createElement("script")),
          _l(n),
          Nl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function by(l, t) {
    Qt.M(l, t);
    var a = gu;
    if (a && l) {
      var u = Ga(a).hoistableScripts,
        e = zu(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(re(e))),
        n ||
          ((l = A({ src: l, async: !0, type: "module" }, t)),
          (t = vt.get(e)) && Vi(l, t),
          (n = a.createElement("script")),
          _l(n),
          Nl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Ho(l, t, a, u) {
    var e = (e = C.current) ? Tn(e) : null;
    if (!e) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Su(a.href)),
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
          l = Su(a.href);
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
              vt.has(l) ||
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
                vt.set(l, a),
                n || py(e, l, a, f.state))),
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
            ? ((t = zu(a)),
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
  function Su(l) {
    return 'href="' + it(l) + '"';
  }
  function se(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function qo(l) {
    return A({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function py(l, t, a, u) {
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
        Nl(t, "link", a),
        _l(t),
        l.head.appendChild(t));
  }
  function zu(l) {
    return '[src="' + it(l) + '"]';
  }
  function re(l) {
    return "script[async]" + l;
  }
  function Yo(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + it(a.href) + '"]');
          if (u) return (t.instance = u), _l(u), u;
          var e = A({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            _l(u),
            Nl(u, "style", e),
            An(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Su(a.href);
          var n = l.querySelector(se(e));
          if (n) return (t.state.loading |= 4), (t.instance = n), _l(n), n;
          (u = qo(a)),
            (e = vt.get(e)) && Zi(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            _l(n);
          var f = n;
          return (
            (f._p = new Promise(function (i, c) {
              (f.onload = i), (f.onerror = c);
            })),
            Nl(n, "link", u),
            (t.state.loading |= 4),
            An(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = zu(a.src)),
            (e = l.querySelector(re(n)))
              ? ((t.instance = e), _l(e), e)
              : ((u = a),
                (e = vt.get(n)) && ((u = A({}, a)), Vi(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                _l(e),
                Nl(e, "link", u),
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
        ((u = t.instance), (t.state.loading |= 4), An(u, a.precedence, l));
    return t.instance;
  }
  function An(l, t, a) {
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
      var i = u[f];
      if (i.dataset.precedence === t) n = i;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Zi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Vi(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function Bo(l, t, a) {
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
          n[Tu] ||
          n[Yl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var i = u.get(f);
        i ? i.push(n) : u.set(f, [n]);
      }
    }
    return u;
  }
  function Go(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function Ey(l, t, a) {
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
  function Xo(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var oe = null;
  function Ty() {}
  function Ay(l, t, a) {
    if (oe === null) throw Error(v(475));
    var u = oe;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var e = Su(a.href),
          n = l.querySelector(se(e));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (u.count++, (u = _n.bind(u)), l.then(u, u)),
            (t.state.loading |= 4),
            (t.instance = n),
            _l(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = qo(a)),
          (e = vt.get(e)) && Zi(a, e),
          (n = n.createElement("link")),
          _l(n);
        var f = n;
        (f._p = new Promise(function (i, c) {
          (f.onload = i), (f.onerror = c);
        })),
          Nl(n, "link", a),
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
  function Oy() {
    if (oe === null) throw Error(v(475));
    var l = oe;
    return (
      l.stylesheets && l.count === 0 && Li(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Li(l, l.stylesheets), l.unsuspend)) {
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
      if (this.stylesheets) Li(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Mn = null;
  function Li(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Mn = new Map()),
        t.forEach(_y, l),
        (Mn = null),
        _n.call(l));
  }
  function _y(l, t) {
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
    $$typeof: cl,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0,
  };
  function My(l, t, a, u, e, n, f, i) {
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
      (this.formState = i),
      (this.incompleteTransitions = new Map());
  }
  function Co(l, t, a, u, e, n, f, i, c, y, g, p) {
    return (
      (l = new My(l, t, a, f, i, c, y, p)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = Pl(3, null, null, t)),
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
  function Qo(l) {
    return l ? ((l = $a), l) : $a;
  }
  function Zo(l, t, a, u, e, n) {
    (e = Qo(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = Wt(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = kt(l, u, t)),
      a !== null && (et(a, l, t), Zu(a, l, t));
  }
  function Vo(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ki(l, t) {
    Vo(l, t), (l = l.alternate) && Vo(l, t);
  }
  function Lo(l) {
    if (l.tag === 13) {
      var t = ka(l, 67108864);
      t !== null && et(t, l, 67108864), Ki(l, 67108864);
    }
  }
  var Dn = !0;
  function Dy(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = _.p;
    try {
      (_.p = 2), wi(l, t, a, u);
    } finally {
      (_.p = n), (S.T = e);
    }
  }
  function Uy(l, t, a, u) {
    var e = S.T;
    S.T = null;
    var n = _.p;
    try {
      (_.p = 8), wi(l, t, a, u);
    } finally {
      (_.p = n), (S.T = e);
    }
  }
  function wi(l, t, a, u) {
    if (Dn) {
      var e = Ji(u);
      if (e === null) Ni(l, t, u, Un, a), wo(l, u);
      else if (jy(e, l, t, a, u)) u.stopPropagation();
      else if ((wo(l, u), t & 4 && -1 < Ry.indexOf(l))) {
        for (; e !== null; ) {
          var n = Ba(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var f = ma(n.pendingLanes);
                  if (f !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; f; ) {
                      var c = 1 << (31 - Fl(f));
                      (i.entanglements[1] |= c), (f &= ~c);
                    }
                    Ot(n), (tl & 6) === 0 && ((dn = bt() + 500), ne(0));
                  }
                }
                break;
              case 13:
                (i = ka(n, 2)), i !== null && et(i, n, 2), vn(), Ki(n, 2);
            }
          if (((n = Ji(u)), n === null && Ni(l, t, u, Un, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Ni(l, t, u, null, a);
    }
  }
  function Ji(l) {
    return (l = Fn(l)), Wi(l);
  }
  var Un = null;
  function Wi(l) {
    if (((Un = null), (l = Ya(l)), l !== null)) {
      var t = U(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = L(t)), l !== null)) return l;
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
  function Ko(l) {
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
        switch (md()) {
          case ec:
            return 2;
          case nc:
            return 8;
          case be:
          case hd:
            return 32;
          case fc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ki = !1,
    ca = null,
    sa = null,
    ra = null,
    ye = new Map(),
    ve = new Map(),
    oa = [],
    Ry =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function wo(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ca = null;
        break;
      case "dragenter":
      case "dragleave":
        sa = null;
        break;
      case "mouseover":
      case "mouseout":
        ra = null;
        break;
      case "pointerover":
      case "pointerout":
        ye.delete(t.pointerId);
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
        t !== null && ((t = Ba(t)), t !== null && Lo(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function jy(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return (ca = me(ca, l, t, a, u, e)), !0;
      case "dragenter":
        return (sa = me(sa, l, t, a, u, e)), !0;
      case "mouseover":
        return (ra = me(ra, l, t, a, u, e)), !0;
      case "pointerover":
        var n = e.pointerId;
        return ye.set(n, me(ye.get(n) || null, l, t, a, u, e)), !0;
      case "gotpointercapture":
        return (
          (n = e.pointerId), ve.set(n, me(ve.get(n) || null, l, t, a, u, e)), !0
        );
    }
    return !1;
  }
  function Jo(l) {
    var t = Ya(l.target);
    if (t !== null) {
      var a = U(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = L(a)), t !== null)) {
            (l.blockedOn = t),
              Ad(l.priority, function () {
                if (a.tag === 13) {
                  var u = ut();
                  u = Cn(u);
                  var e = ka(a, u);
                  e !== null && et(e, a, u), Ki(a, u);
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
      var a = Ji(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ($n = u), a.target.dispatchEvent(u), ($n = null);
      } else return (t = Ba(a)), t !== null && Lo(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Wo(l, t, a) {
    Rn(l) && a.delete(t);
  }
  function xy() {
    (ki = !1),
      ca !== null && Rn(ca) && (ca = null),
      sa !== null && Rn(sa) && (sa = null),
      ra !== null && Rn(ra) && (ra = null),
      ye.forEach(Wo),
      ve.forEach(Wo);
  }
  function jn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ki ||
        ((ki = !0),
        T.unstable_scheduleCallback(T.unstable_NormalPriority, xy)));
  }
  var xn = null;
  function ko(l) {
    xn !== l &&
      ((xn = l),
      T.unstable_scheduleCallback(T.unstable_NormalPriority, function () {
        xn === l && (xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (Wi(u || a) === null) continue;
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
    function t(c) {
      return jn(c, l);
    }
    ca !== null && jn(ca, l),
      sa !== null && jn(sa, l),
      ra !== null && jn(ra, l),
      ye.forEach(t),
      ve.forEach(t);
    for (var a = 0; a < oa.length; a++) {
      var u = oa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < oa.length && ((a = oa[0]), a.blockedOn === null); )
      Jo(a), a.blockedOn === null && oa.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          f = e[Ql] || null;
        if (typeof n == "function") f || ko(a);
        else if (f) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (f = n[Ql] || null))) i = f.formAction;
            else if (Wi(e) !== null) continue;
          } else i = f.action;
          typeof i == "function" ? (a[u + 1] = i) : (a.splice(u, 3), (u -= 3)),
            ko(a);
        }
      }
  }
  function $i(l) {
    this._internalRoot = l;
  }
  (Nn.prototype.render = $i.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(v(409));
      var a = t.current,
        u = ut();
      Zo(a, u, l, t, null, null);
    }),
    (Nn.prototype.unmount = $i.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Zo(l.current, 2, null, l, null, null), vn(), (t[qa] = null);
        }
      });
  function Nn(l) {
    this._internalRoot = l;
  }
  Nn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = oc();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < oa.length && t !== 0 && t < oa[a].priority; a++);
      oa.splice(a, 0, l), a === 0 && Jo(l);
    }
  };
  var $o = W.version;
  if ($o !== "19.1.1") throw Error(v(527, $o, "19.1.1"));
  _.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(v(188))
        : ((l = Object.keys(l).join(",")), Error(v(268, l)));
    return (
      (l = R(t)),
      (l = l !== null ? b(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Ny = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hn.isDisabled && Hn.supportsFiber)
      try {
        (bu = Hn.inject(Ny)), ($l = Hn);
      } catch {}
  }
  return (
    (Se.createRoot = function (l, t) {
      if (!j(l)) throw Error(v(299));
      var a = !1,
        u = "",
        e = or,
        n = dr,
        f = yr,
        i = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (i = t.unstable_transitionCallbacks)),
        (t = Co(l, 1, !1, null, null, a, u, e, n, f, i, null)),
        (l[qa] = t.current),
        xi(l),
        new $i(t)
      );
    }),
    (Se.hydrateRoot = function (l, t, a) {
      if (!j(l)) throw Error(v(299));
      var u = !1,
        e = "",
        n = or,
        f = dr,
        i = yr,
        c = null,
        y = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (i = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (c = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (y = a.formState)),
        (t = Co(l, 1, !0, t, a ?? null, u, e, n, f, i, c, y)),
        (t.context = Qo(null)),
        (a = t.current),
        (u = ut()),
        (u = Cn(u)),
        (e = Wt(u)),
        (e.callback = null),
        kt(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Eu(t, a),
        Ot(t),
        (l[qa] = t.current),
        xi(l),
        new Nn(t)
      );
    }),
    (Se.version = "19.1.1"),
    Se
  );
}
var fd;
function Vy() {
  if (fd) return Pi.exports;
  fd = 1;
  function T() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T);
      } catch (W) {
        console.error(W);
      }
  }
  return T(), (Pi.exports = Zy()), Pi.exports;
}
var Ly = Vy();
function Ky({ title: T, resetBtnText: W, reset: Q, showResetButton: v = !0 }) {
  return (
    !v && Q && Q(!1),
    N.jsxs("div", {
      className: "flex w-full items-center justify-center gap-5 ",
      children: [
        N.jsx("h1", {
          className: "text-3xl w-fit font-semibold text-left flex-wrap",
          children: T,
        }),
        N.jsx("div", {
          className: "flex flex-wrap gap-2 items-center justify-center",
          children:
            v &&
            N.jsx("button", {
              type: "button",
              onClick: () => {
                Q?.(!0);
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
function wy(T) {
  return T.replace(/[^0-9.,]/g, "")
    .replace(/^0+(?=\d)/, "")
    .replace(/,/g, ".")
    .replace(/^\.($|[^0-9])/, "0.")
    .replace(/\.{2,}/g, ".")
    .replace(/(.*?\..*?)\./g, "$1")
    .replace(/(\d+\.\d{2})\d*/g, "$1")
    .replace(/[a-zA-Z]+/g, "");
}
function Na({
  number: T = !1,
  text: W = !1,
  select: Q = !1,
  value: v,
  setValue: j,
  title: U,
  placeholder: L,
  options: ol = [],
  unit: R,
}) {
  const [b, A] = nt.useState(!1);
  return N.jsxs("div", {
    className: "flex flex-col mb-5",
    children: [
      U &&
        N.jsxs("label", {
          htmlFor: U,
          className: "pl-1 pb-1 text-lg font-medium",
          children: [U, ":"],
        }),
      N.jsxs("div", {
        className: "flex w-full h-fit gap-x-2 items-center",
        children: [
          W &&
            N.jsx(
              "input",
              {
                id: U,
                autoComplete: "off",
                type: "text",
                onChange: (X) => {
                  A(!0), j(X.target.value);
                },
                value: b ? v : "",
                placeholder: L,
              },
              U
            ),
          T &&
            N.jsx(
              "input",
              {
                id: U,
                autoComplete: "off",
                type: "text",
                pattern: "[0-9]*",
                inputMode: "numeric",
                onChange: (X) => {
                  A(!0), j(wy(X.target.value));
                },
                value: b ? v : "",
                placeholder: L,
              },
              U
            ),
          Q &&
            N.jsxs(
              "select",
              {
                onChange: (X) => {
                  A(!0), j(X.target.value);
                },
                id: U,
                value: b ? v : "",
                "aria-label": U,
                children: [
                  N.jsx("option", {
                    value: "",
                    disabled: !0,
                    hidden: !0,
                    children: L,
                  }),
                  ol.length > 0 &&
                    ol.map((X) =>
                      N.jsx(
                        "option",
                        { value: X.value, children: X.name },
                        X.value + X.name
                      )
                    ),
                ],
              },
              U
            ),
          N.jsx("div", { className: "text-xl h-fit", children: R }),
        ],
      }),
    ],
  });
}
const Jy = [
    { name: "adiuwant kondycjoner wody", type: "adiuwant" },
    { name: "siarczan amonu", type: "nawóz" },
    { name: "mocznik", type: "nawóz" },
    { name: "proszek/granulat", type: "nawóz" },
    { name: "WP proszek do sporządzania zawiesiny", type: "ś.o.r." },
    { name: "WG granulat do sporządzania zawiesiny", type: "ś.o.r." },
    { name: "SC koncentrat do sporządzania zawiesiny", type: "ś.o.r." },
    { name: "CS zawiesina kapsuł", type: "ś.o.r." },
    { name: "ZC mieszanina CS i SC", type: "ś.o.r." },
    { name: "EC koncentrat do sporządzania emulsji", type: "ś.o.r." },
    { name: "EW emulsja olej w wodzie", type: "ś.o.r." },
    { name: "EO emulsja woda w oleju", type: "ś.o.r." },
    { name: "EG granulat do sporządzania emulsji", type: "ś.o.r." },
    { name: "SE zawiesionoemulsja", type: "ś.o.r." },
    { name: "GW żel do sporządzania emulsji", type: "ś.o.r." },
    { name: "GL żel do sporządzania emulsji", type: "ś.o.r." },
    { name: "ME mikroemulsja", type: "ś.o.r." },
    { name: "ZE mieszanina CS i SE", type: "ś.o.r." },
    { name: "ZW mieszanina CS i EW", type: "ś.o.r." },
    { name: "OF koncentrat zawiesinowy olejowy", type: "ś.o.r." },
    { name: "OD zawiesina olejowa", type: "ś.o.r." },
    { name: "SL koncentrat rozpuszczalny", type: "ś.o.r." },
    { name: "SP proszek rozpuszczalny", type: "ś.o.r." },
    { name: "SG granulat rozpuszczalny", type: "ś.o.r." },
    { name: "r.s.m.", type: "nawóz" },
    { name: "płyn", type: "nawóz" },
    { name: "płyn/proszek", type: "stymulator mineralny" },
    { name: "olejowy", type: "adiuwant" },
    { name: "surfaktant", type: "adiuwant" },
    { name: "inny poprawiające przyczepność", type: "adiuwant" },
    { name: "zmniejszający pianę", type: "adiuwant" },
    { name: "płyn", type: "biopreparat" },
    { name: "proszek", type: "biopreparat" },
  ],
  id = [
    {
      name: "CS zawiesina kapsuł",
      type: "ś.o.r.",
      alert1: "skonsultuj z doradcą producenta środka",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "EC koncentrat do sporządzania emulsji",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "EG granulat do sporządzania emulsji",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "EO emulsja woda w oleju",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "EW emulsja olej w wodzie",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "GL żel do sporządzania emulsji",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "GW żel do sporządzania emulsji",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "ME mikroemulsja",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "OD zawiesina olejowa",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "OF koncentrat zawiesinowy olejowy",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "SC koncentrat do sporządzania zawiesiny",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "SE zawiesionoemulsja",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "SG granulat rozpuszczalny",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "nie mieszać z r.s.m.",
      alert5: "",
    },
    {
      name: "SL koncentrat rozpuszczalny",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "",
      alert5: "",
    },
    {
      name: "SP proszek rozpuszczalny",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "",
      alert5: "",
    },
    {
      name: "WG granulat do sporządzania zawiesiny",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "WP proszek do sporządzania zawiesiny",
      type: "ś.o.r.",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "ZC mieszanina CS i SC",
      type: "ś.o.r.",
      alert1: "skonsultuj z doradcą producenta środka",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "ZE mieszanina CS i SE",
      type: "ś.o.r.",
      alert1: "skonsultuj z doradcą producenta środka",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "ZW mieszanina CS i EW",
      type: "ś.o.r.",
      alert1: "skonsultuj z doradcą producenta środka",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
  ],
  cd = [
    {
      name: "mocznik",
      type: "nawóz",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "",
      alert5: "",
    },
    {
      name: "r.s.m.",
      type: "nawóz",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "nie mieszaj z adiuwantami poprawiajacymi wnikanie",
      alert5: "",
    },
    {
      name: "płyn",
      type: "nawóz",
      alert1: "nie łącz siarczanu miedzi z herbicydami",
      alert2: "nie łącz siarczanów z fosforem",
      alert3: "ostrożnie łącz żelazo z herbicydami",
      alert4: "nie mieszaj manganu z regulatorami wzrostu",
      alert5: "",
    },
    {
      name: "proszek/granulat",
      type: "nawóz",
      alert1: "nie łącz nawozów Ca i Mg",
      alert2: "nie łącz siarczanów z fosforem",
      alert3: "",
      alert4: "nie mieszaj manganu z regulatorami wzrostu",
      alert5: "",
    },
  ],
  sd = [
    {
      name: "kondycjoner wody",
      type: "adiuwant",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "",
      alert5: "",
    },
    {
      name: "olejowy",
      type: "adiuwant",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "mieszanina potencjalnie niezgodna, postepuj ostrożnie",
      alert5: "",
    },
    {
      name: "surfaktant",
      type: "adiuwant",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "nie mieszaj adiuwantów poprawiajacymi wnikanie z r.s.m.",
      alert5: "",
    },
    {
      name: "inny poprawiające przyczepność",
      type: "adiuwant",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "nie mieszaj adiuwantów poprawiajacymi wnikanie z r.s.m.",
      alert5: "",
    },
    {
      name: "zmniejszający pianę",
      type: "adiuwant",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "",
      alert5: "",
    },
  ],
  rd = [
    {
      name: "płyn",
      type: "biopreparat",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "skonsultuj z doradcą producenta środka",
      alert5: "",
    },
    {
      name: "proszek",
      type: "biopreparat",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "skonsultuj z doradcą producenta środka",
      alert5: "",
    },
  ],
  od = [
    {
      name: "płyn/proszek",
      type: "stymulator mineralny",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "",
      alert5: "",
    },
  ];
function Wy({ elements: T, setElements: W, isReset: Q, setHasSorted: v }) {
  const [j, U] = nt.useState(""),
    [L, ol] = nt.useState(""),
    [R, b] = nt.useState(!1),
    [A, X] = nt.useState("");
  nt.useEffect(() => {
    Q && (U(""), ol(""), X(""), b(!1));
  }, [Q]);
  function P(rl, Sl) {
    const Cl = {
      name: "",
      type: "",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "",
      alert5: "",
    };
    let pl = { ...Cl };
    switch (Sl) {
      case "ś.o.r.":
        pl = id.find((cl) => cl.name === rl) ?? Cl;
        break;
      case "adiuwant":
        pl = sd.find((cl) => cl.name === rl) ?? Cl;
        break;
      case "nawóz":
        pl = cd.find((cl) => cl.name === rl) ?? Cl;
        break;
      case "biopreparat":
        pl = rd.find((cl) => cl.name === rl) ?? Cl;
        break;
      case "stymulator mineralny":
        pl = od.find((cl) => cl.name === rl) ?? Cl;
        break;
    }
    return {
      alert1: pl.alert1,
      alert2: pl.alert2,
      alert3: pl.alert3,
      alert4: pl.alert4,
      alert5: pl.alert5,
    };
  }
  function dl(rl) {
    return rl.map((Sl) => ({ name: Sl.name, value: Sl.name }));
  }
  function Rl() {
    if ((v(!1), j === "" || L === "" || A === "")) {
      b(!0);
      return;
    }
    const rl = P(A, L);
    W([
      ...T.filter((Sl) => Sl.title !== "H₂O - woda"),
      {
        title: j,
        name: A,
        type: L,
        alert1: rl.alert1,
        alert2: rl.alert2,
        alert3: rl.alert3,
        alert4: rl.alert4,
        alert5: rl.alert5,
      },
    ]),
      U(""),
      ol(""),
      X(""),
      b(!1);
  }
  return N.jsxs("div", {
    className: "border-2 border-[var(--detail-color)] rounded-2xl p-4",
    children: [
      N.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [
          N.jsx("h1", {
            className: "text-2xl text-nowrap font-semibold",
            children: "Dodaj element",
          }),
          N.jsx("img", {
            src: "./add.svg",
            alt: "add element",
            className:
              "w-12 cursor-pointer hover:shadow-[0_5_5px_var(--primary-color)] transition-shadow outline-0",
            onClick: () => Rl(),
          }),
        ],
      }),
      N.jsx(Na, {
        text: !0,
        value: j,
        setValue: U,
        title: "Nazwa środka",
        placeholder: "Podaj nazwę środka",
      }),
      N.jsx(Na, {
        select: !0,
        value: L,
        setValue: ol,
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
      L === "ś.o.r." &&
        N.jsx(Na, {
          select: !0,
          value: A,
          setValue: X,
          title: "Formulacja środka",
          placeholder: "Wybierz ś.o.r.",
          options: dl(id),
        }),
      L === "adiuwant" &&
        N.jsx(Na, {
          select: !0,
          value: A,
          setValue: X,
          title: "Formulacja adiuwantu",
          placeholder: "Wybierz adiuwant",
          options: dl(sd),
        }),
      L === "nawóz" &&
        N.jsx(Na, {
          select: !0,
          value: A,
          setValue: X,
          title: "Formulacja nawozu",
          placeholder: "Wybierz nawóz",
          options: dl(cd),
        }),
      L === "biopreparat" &&
        N.jsx(Na, {
          select: !0,
          value: A,
          setValue: X,
          title: "Formulacja biopreparatu",
          placeholder: "Wybierz biopreparat",
          options: dl(rd),
        }),
      L === "stymulator mineralny" &&
        N.jsx(Na, {
          select: !0,
          value: A,
          setValue: X,
          title: "Formulacja stymulatora",
          placeholder: "Wybierz stymulator",
          options: dl(od),
        }),
      R &&
        N.jsx("p", {
          className: "text-xl text-center text-red-500",
          children: "Wypełnij wszystkie pola",
        }),
    ],
  });
}
function dd({ children: T, title: W, showTitleOnMobile: Q }) {
  const [v, j] = nt.useState(Q);
  return (
    nt.useEffect(() => {
      window.innerWidth > 768 && j(!0);
    }, []),
    N.jsx("div", {
      className: "flex flex-col w-[310px] h-fit",
      children: N.jsxs("div", {
        className: "flex flex-col",
        children: [
          v ||
            (W !== "" &&
              N.jsx("p", {
                className: "text-xl text-center font-semibold mb-4",
                children: W.toUpperCase(),
              })),
          T,
        ],
      }),
    })
  );
}
function ky({ element: T, elements: W, setElements: Q, index: v }) {
  function j(U) {
    return U === "najlepiej ogrzana" ||
      U === "nie łącz nawozów Ca i Mg" ||
      U === "skonsultuj z doradcą producenta środka" ||
      U === "ostrożnie łącz żelazo z herbicydami" ||
      U === "nie łącz siarczanu miedzi z herbicydami" ||
      U === "nie mieszaj manganu z regulatorami wzrostu" ||
      U ===
        "nie mieszać z herbicydami typu -fop -den -dym oraz insektycydami EC" ||
      U ===
        "herbicydów typu -fop -den -dym, insektycydów EC oraz granulatów rozpuszczalnych SG nie mieszać z r.s.m."
      ? "text-yellow-500"
      : "text-red-500";
  }
  return N.jsxs("div", {
    className:
      "flex flex-col gap-y-2 w-full p-4 border-2 border-[var(--primary-color)] rounded-2xl",
    children: [
      N.jsx("div", {
        className: "flex w-full items-center justify-between gap-2",
        children: N.jsxs("div", {
          className: "flex items-center justify-between w-full gap-2",
          children: [
            v !== 0 &&
              N.jsxs("p", {
                className: "text-2xl font-semibold",
                children: [v, "."],
              }),
            N.jsx("p", {
              className: "text-2xl font-semibold",
              children: T.title,
            }),
            T.title !== "H₂O - woda"
              ? N.jsx("img", {
                  src: "./delete.svg",
                  alt: "delete",
                  className:
                    "w-12 cursor-pointer hover:shadow-[0_5_5px_var(--primary-color)] transition-shadow outline-0",
                  onClick: () => Q(W.filter((U) => U.title !== T.title)),
                })
              : N.jsx("div", {}),
          ],
        }),
      }),
      N.jsxs("p", {
        className: "text-xl leading-snug",
        children: [
          N.jsx("span", { className: "font-semibold", children: T.type }),
          " ",
          T.name,
        ],
      }),
      T.alert1 &&
        N.jsx("p", { className: `text-xl ${j(T.alert1)}`, children: T.alert1 }),
      T.alert2 &&
        N.jsx("p", { className: `text-xl ${j(T.alert2)}`, children: T.alert2 }),
      T.alert3 &&
        N.jsx("p", { className: `text-xl ${j(T.alert3)}`, children: T.alert3 }),
      T.alert4 &&
        N.jsx("p", { className: `text-xl ${j(T.alert4)}`, children: T.alert4 }),
      T.alert5 &&
        N.jsx("p", { className: `text-xl ${j(T.alert5)}`, children: T.alert5 }),
    ],
  });
}
function $y() {
  const [T, W] = nt.useState(!1),
    [Q, v] = nt.useState(!1),
    [j, U] = nt.useState([]);
  nt.useEffect(() => {
    U([]), W(!1);
  }, [T]);
  const L = {
    title: "H₂O - woda",
    type: "",
    name: "",
    alert1: "najlepiej ogrzana",
    alert2: "",
    alert3: "",
    alert4: "",
    alert5: "",
  };
  function ol() {
    v(!0);
    const R = Jy.map((A) => A.type + A.name),
      b = [...j].sort((A, X) => {
        const P = R.indexOf(A.type + A.name),
          dl = R.indexOf(X.type + X.name);
        return (P === -1 ? 1 / 0 : P) - (dl === -1 ? 1 / 0 : dl);
      });
    j.length !== 0 && U([L, ...b.filter((A) => A.title !== "H₂O - woda"), L]);
  }
  return N.jsx("div", {
    className:
      "w-full min-h-screen h-full text-[var(--detail-color)] flex items-center flex-col bg-[#E6FFE6] p-2",
    children: N.jsxs("div", {
      className:
        "flex justify-center w-fit flex-wrap gap-10 p-4 bg-[var(--bg-color)] rounded-3xl shadow-[0_0_15px_var(--primary-color)]",
      children: [
        N.jsx(Ky, {
          title: "Kalkulator kolejności wlewania do opryskiwacza",
          resetBtnText: "Reset",
          reset: W,
        }),
        N.jsxs(dd, {
          title: "",
          showTitleOnMobile: !1,
          children: [
            N.jsx(Wy, {
              setHasSorted: v,
              elements: j,
              setElements: U,
              isReset: T,
            }),
            N.jsx("button", {
              className:
                "w-full mt-10 border-2 border-[var(--detail-color)] rounded-2xl p-2 text-xl font-semibold hover:bg-[var(--detail-color)] hover:text-[var(--bg-color)] transition-colors",
              onClick: () => ol(),
              children: "Pokaż kolejność",
            }),
          ],
        }),
        j.length > 0 &&
          N.jsx(dd, {
            title: "",
            showTitleOnMobile: !1,
            children: N.jsx("div", {
              className: "flex flex-col gap-2",
              children: j.map((R, b) =>
                N.jsx(
                  ky,
                  {
                    index: Q ? b + 1 : 0,
                    element: R,
                    elements: j,
                    setElements: U,
                  },
                  b
                )
              ),
            }),
          }),
      ],
    }),
  });
}
Ly.createRoot(document.getElementById("root")).render(
  N.jsx(nt.StrictMode, { children: N.jsx($y, {}) })
);
