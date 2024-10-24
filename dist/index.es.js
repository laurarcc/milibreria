var ui = Object.defineProperty;
var fi = (e, t, r) => t in e ? ui(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Et = (e, t, r) => fi(e, typeof t != "symbol" ? t + "" : t, r);
import * as D from "react";
import nt, { forwardRef as di, useContext as pi, Children as hi, isValidElement as Kt, cloneElement as Ht } from "react";
function mi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dr = { exports: {} }, xt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xn;
function gi() {
  if (xn) return xt;
  xn = 1;
  var e = nt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, f) {
    var d, p = {}, y = null, C = null;
    f !== void 0 && (y = "" + f), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (C = u.ref);
    for (d in u) n.call(u, d) && !i.hasOwnProperty(d) && (p[d] = u[d]);
    if (c && c.defaultProps) for (d in u = c.defaultProps, u) p[d] === void 0 && (p[d] = u[d]);
    return { $$typeof: t, type: c, key: y, ref: C, props: p, _owner: o.current };
  }
  return xt.Fragment = r, xt.jsx = a, xt.jsxs = a, xt;
}
var wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function yi() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = nt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = Symbol.iterator, g = "@@iterator";
    function m(l) {
      if (l === null || typeof l != "object")
        return null;
      var x = S && l[S] || l[g];
      return typeof x == "function" ? x : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(l) {
      {
        for (var x = arguments.length, P = new Array(x > 1 ? x - 1 : 0), F = 1; F < x; F++)
          P[F - 1] = arguments[F];
        R("error", l, P);
      }
    }
    function R(l, x, P) {
      {
        var F = w.ReactDebugCurrentFrame, re = F.getStackAddendum();
        re !== "" && (x += "%s", P = P.concat([re]));
        var le = P.map(function(Q) {
          return String(Q);
        });
        le.unshift("Warning: " + x), Function.prototype.apply.call(console[l], console, le);
      }
    }
    var E = !1, b = !1, I = !1, A = !1, Z = !1, J;
    J = Symbol.for("react.module.reference");
    function s(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || Z || l === o || l === f || l === d || A || l === C || E || b || I || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === p || l.$$typeof === a || l.$$typeof === c || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === J || l.getModuleId !== void 0));
    }
    function _(l, x, P) {
      var F = l.displayName;
      if (F)
        return F;
      var re = x.displayName || x.name || "";
      return re !== "" ? P + "(" + re + ")" : P;
    }
    function N(l) {
      return l.displayName || "Context";
    }
    function B(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            var x = l;
            return N(x) + ".Consumer";
          case a:
            var P = l;
            return N(P._context) + ".Provider";
          case u:
            return _(l, l.render, "ForwardRef");
          case p:
            var F = l.displayName || null;
            return F !== null ? F : B(l.type) || "Memo";
          case y: {
            var re = l, le = re._payload, Q = re._init;
            try {
              return B(Q(le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, ce = 0, se, ge, Ee, xe, T, O, z;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function j() {
      {
        if (ce === 0) {
          se = console.log, ge = console.info, Ee = console.warn, xe = console.error, T = console.group, O = console.groupCollapsed, z = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        ce++;
      }
    }
    function K() {
      {
        if (ce--, ce === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, l, {
              value: se
            }),
            info: Y({}, l, {
              value: ge
            }),
            warn: Y({}, l, {
              value: Ee
            }),
            error: Y({}, l, {
              value: xe
            }),
            group: Y({}, l, {
              value: T
            }),
            groupCollapsed: Y({}, l, {
              value: O
            }),
            groupEnd: Y({}, l, {
              value: z
            })
          });
        }
        ce < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = w.ReactCurrentDispatcher, L;
    function q(l, x, P) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (re) {
            var F = re.stack.trim().match(/\n( *(at )?)/);
            L = F && F[1] || "";
          }
        return `
` + L + l;
      }
    }
    var H = !1, G;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      G = new ve();
    }
    function $(l, x) {
      if (!l || H)
        return "";
      {
        var P = G.get(l);
        if (P !== void 0)
          return P;
      }
      var F;
      H = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var le;
      le = V.current, V.current = null, j();
      try {
        if (x) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Pe) {
              F = Pe;
            }
            Reflect.construct(l, [], Q);
          } else {
            try {
              Q.call();
            } catch (Pe) {
              F = Pe;
            }
            l.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pe) {
            F = Pe;
          }
          l();
        }
      } catch (Pe) {
        if (Pe && F && typeof Pe.stack == "string") {
          for (var X = Pe.stack.split(`
`), _e = F.stack.split(`
`), ye = X.length - 1, Se = _e.length - 1; ye >= 1 && Se >= 0 && X[ye] !== _e[Se]; )
            Se--;
          for (; ye >= 1 && Se >= 0; ye--, Se--)
            if (X[ye] !== _e[Se]) {
              if (ye !== 1 || Se !== 1)
                do
                  if (ye--, Se--, Se < 0 || X[ye] !== _e[Se]) {
                    var Be = `
` + X[ye].replace(" at new ", " at ");
                    return l.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", l.displayName)), typeof l == "function" && G.set(l, Be), Be;
                  }
                while (ye >= 1 && Se >= 0);
              break;
            }
        }
      } finally {
        H = !1, V.current = le, K(), Error.prepareStackTrace = re;
      }
      var st = l ? l.displayName || l.name : "", rt = st ? q(st) : "";
      return typeof l == "function" && G.set(l, rt), rt;
    }
    function Re(l, x, P) {
      return $(l, !1);
    }
    function M(l) {
      var x = l.prototype;
      return !!(x && x.isReactComponent);
    }
    function $e(l, x, P) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return $(l, M(l));
      if (typeof l == "string")
        return q(l);
      switch (l) {
        case f:
          return q("Suspense");
        case d:
          return q("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return Re(l.render);
          case p:
            return $e(l.type, x, P);
          case y: {
            var F = l, re = F._payload, le = F._init;
            try {
              return $e(le(re), x, P);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, et = {}, tt = w.ReactDebugCurrentFrame;
    function Ve(l) {
      if (l) {
        var x = l._owner, P = $e(l.type, l._source, x ? x.type : null);
        tt.setExtraStackFrame(P);
      } else
        tt.setExtraStackFrame(null);
    }
    function Cr(l, x, P, F, re) {
      {
        var le = Function.call.bind(je);
        for (var Q in l)
          if (le(l, Q)) {
            var X = void 0;
            try {
              if (typeof l[Q] != "function") {
                var _e = Error((F || "React class") + ": " + P + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              X = l[Q](x, Q, F, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ye) {
              X = ye;
            }
            X && !(X instanceof Error) && (Ve(re), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", P, Q, typeof X), Ve(null)), X instanceof Error && !(X.message in et) && (et[X.message] = !0, Ve(re), k("Failed %s type: %s", P, X.message), Ve(null));
          }
      }
    }
    var zt = Array.isArray;
    function St(l) {
      return zt(l);
    }
    function U(l) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, P = x && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return P;
      }
    }
    function Vt(l) {
      try {
        return Lt(l), !1;
      } catch {
        return !0;
      }
    }
    function Lt(l) {
      return "" + l;
    }
    function Ct(l) {
      if (Vt(l))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", U(l)), Lt(l);
    }
    var it = w.ReactCurrentOwner, qo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hn, mn, Er;
    Er = {};
    function Go(l) {
      if (je.call(l, "ref")) {
        var x = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Ko(l) {
      if (je.call(l, "key")) {
        var x = Object.getOwnPropertyDescriptor(l, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Ho(l, x) {
      if (typeof l.ref == "string" && it.current && x && it.current.stateNode !== x) {
        var P = B(it.current.type);
        Er[P] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(it.current.type), l.ref), Er[P] = !0);
      }
    }
    function Xo(l, x) {
      {
        var P = function() {
          hn || (hn = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Jo(l, x) {
      {
        var P = function() {
          mn || (mn = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Qo = function(l, x, P, F, re, le, Q) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: x,
        ref: P,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: le
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function Zo(l, x, P, F, re) {
      {
        var le, Q = {}, X = null, _e = null;
        P !== void 0 && (Ct(P), X = "" + P), Ko(x) && (Ct(x.key), X = "" + x.key), Go(x) && (_e = x.ref, Ho(x, re));
        for (le in x)
          je.call(x, le) && !qo.hasOwnProperty(le) && (Q[le] = x[le]);
        if (l && l.defaultProps) {
          var ye = l.defaultProps;
          for (le in ye)
            Q[le] === void 0 && (Q[le] = ye[le]);
        }
        if (X || _e) {
          var Se = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          X && Xo(Q, Se), _e && Jo(Q, Se);
        }
        return Qo(l, X, _e, re, F, it.current, Q);
      }
    }
    var xr = w.ReactCurrentOwner, gn = w.ReactDebugCurrentFrame;
    function at(l) {
      if (l) {
        var x = l._owner, P = $e(l.type, l._source, x ? x.type : null);
        gn.setExtraStackFrame(P);
      } else
        gn.setExtraStackFrame(null);
    }
    var wr;
    wr = !1;
    function Tr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function yn() {
      {
        if (xr.current) {
          var l = B(xr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function ei(l) {
      return "";
    }
    var bn = {};
    function ti(l) {
      {
        var x = yn();
        if (!x) {
          var P = typeof l == "string" ? l : l.displayName || l.name;
          P && (x = `

Check the top-level render call using <` + P + ">.");
        }
        return x;
      }
    }
    function vn(l, x) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var P = ti(x);
        if (bn[P])
          return;
        bn[P] = !0;
        var F = "";
        l && l._owner && l._owner !== xr.current && (F = " It was passed a child from " + B(l._owner.type) + "."), at(l), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, F), at(null);
      }
    }
    function Sn(l, x) {
      {
        if (typeof l != "object")
          return;
        if (St(l))
          for (var P = 0; P < l.length; P++) {
            var F = l[P];
            Tr(F) && vn(F, x);
          }
        else if (Tr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var re = m(l);
          if (typeof re == "function" && re !== l.entries)
            for (var le = re.call(l), Q; !(Q = le.next()).done; )
              Tr(Q.value) && vn(Q.value, x);
        }
      }
    }
    function ri(l) {
      {
        var x = l.type;
        if (x == null || typeof x == "string")
          return;
        var P;
        if (typeof x == "function")
          P = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === p))
          P = x.propTypes;
        else
          return;
        if (P) {
          var F = B(x);
          Cr(P, l.props, "prop", F, l);
        } else if (x.PropTypes !== void 0 && !wr) {
          wr = !0;
          var re = B(x);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ni(l) {
      {
        for (var x = Object.keys(l.props), P = 0; P < x.length; P++) {
          var F = x[P];
          if (F !== "children" && F !== "key") {
            at(l), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), at(null);
            break;
          }
        }
        l.ref !== null && (at(l), k("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    var Cn = {};
    function En(l, x, P, F, re, le) {
      {
        var Q = s(l);
        if (!Q) {
          var X = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = ei();
          _e ? X += _e : X += yn();
          var ye;
          l === null ? ye = "null" : St(l) ? ye = "array" : l !== void 0 && l.$$typeof === t ? (ye = "<" + (B(l.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof l, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, X);
        }
        var Se = Zo(l, x, P, re, le);
        if (Se == null)
          return Se;
        if (Q) {
          var Be = x.children;
          if (Be !== void 0)
            if (F)
              if (St(Be)) {
                for (var st = 0; st < Be.length; st++)
                  Sn(Be[st], l);
                Object.freeze && Object.freeze(Be);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Sn(Be, l);
        }
        if (je.call(x, "key")) {
          var rt = B(l), Pe = Object.keys(x).filter(function(li) {
            return li !== "key";
          }), Rr = Pe.length > 0 ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Cn[rt + Rr]) {
            var ci = Pe.length > 0 ? "{" + Pe.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rr, rt, ci, rt), Cn[rt + Rr] = !0;
          }
        }
        return l === n ? ni(Se) : ri(Se), Se;
      }
    }
    function oi(l, x, P) {
      return En(l, x, P, !0);
    }
    function ii(l, x, P) {
      return En(l, x, P, !1);
    }
    var ai = ii, si = oi;
    wt.Fragment = n, wt.jsx = ai, wt.jsxs = si;
  }()), wt;
}
process.env.NODE_ENV === "production" ? Dr.exports = gi() : Dr.exports = yi();
var we = Dr.exports, Fr = { exports: {} }, Wt = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function bi() {
  if (Tn) return ne;
  Tn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function R(b) {
    if (typeof b == "object" && b !== null) {
      var I = b.$$typeof;
      switch (I) {
        case t:
          switch (b = b.type, b) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case d:
                case S:
                case C:
                case a:
                  return b;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function E(b) {
    return R(b) === f;
  }
  return ne.AsyncMode = u, ne.ConcurrentMode = f, ne.ContextConsumer = c, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = d, ne.Fragment = n, ne.Lazy = S, ne.Memo = C, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = p, ne.isAsyncMode = function(b) {
    return E(b) || R(b) === u;
  }, ne.isConcurrentMode = E, ne.isContextConsumer = function(b) {
    return R(b) === c;
  }, ne.isContextProvider = function(b) {
    return R(b) === a;
  }, ne.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ne.isForwardRef = function(b) {
    return R(b) === d;
  }, ne.isFragment = function(b) {
    return R(b) === n;
  }, ne.isLazy = function(b) {
    return R(b) === S;
  }, ne.isMemo = function(b) {
    return R(b) === C;
  }, ne.isPortal = function(b) {
    return R(b) === r;
  }, ne.isProfiler = function(b) {
    return R(b) === i;
  }, ne.isStrictMode = function(b) {
    return R(b) === o;
  }, ne.isSuspense = function(b) {
    return R(b) === p;
  }, ne.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === i || b === o || b === p || b === y || typeof b == "object" && b !== null && (b.$$typeof === S || b.$$typeof === C || b.$$typeof === a || b.$$typeof === c || b.$$typeof === d || b.$$typeof === m || b.$$typeof === w || b.$$typeof === k || b.$$typeof === g);
  }, ne.typeOf = R, ne;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function vi() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function R($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === f || $ === i || $ === o || $ === p || $ === y || typeof $ == "object" && $ !== null && ($.$$typeof === S || $.$$typeof === C || $.$$typeof === a || $.$$typeof === c || $.$$typeof === d || $.$$typeof === m || $.$$typeof === w || $.$$typeof === k || $.$$typeof === g);
    }
    function E($) {
      if (typeof $ == "object" && $ !== null) {
        var Re = $.$$typeof;
        switch (Re) {
          case t:
            var M = $.type;
            switch (M) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case p:
                return M;
              default:
                var $e = M && M.$$typeof;
                switch ($e) {
                  case c:
                  case d:
                  case S:
                  case C:
                  case a:
                    return $e;
                  default:
                    return Re;
                }
            }
          case r:
            return Re;
        }
      }
    }
    var b = u, I = f, A = c, Z = a, J = t, s = d, _ = n, N = S, B = C, Y = r, ce = i, se = o, ge = p, Ee = !1;
    function xe($) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T($) || E($) === u;
    }
    function T($) {
      return E($) === f;
    }
    function O($) {
      return E($) === c;
    }
    function z($) {
      return E($) === a;
    }
    function W($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function j($) {
      return E($) === d;
    }
    function K($) {
      return E($) === n;
    }
    function V($) {
      return E($) === S;
    }
    function L($) {
      return E($) === C;
    }
    function q($) {
      return E($) === r;
    }
    function H($) {
      return E($) === i;
    }
    function G($) {
      return E($) === o;
    }
    function ve($) {
      return E($) === p;
    }
    oe.AsyncMode = b, oe.ConcurrentMode = I, oe.ContextConsumer = A, oe.ContextProvider = Z, oe.Element = J, oe.ForwardRef = s, oe.Fragment = _, oe.Lazy = N, oe.Memo = B, oe.Portal = Y, oe.Profiler = ce, oe.StrictMode = se, oe.Suspense = ge, oe.isAsyncMode = xe, oe.isConcurrentMode = T, oe.isContextConsumer = O, oe.isContextProvider = z, oe.isElement = W, oe.isForwardRef = j, oe.isFragment = K, oe.isLazy = V, oe.isMemo = L, oe.isPortal = q, oe.isProfiler = H, oe.isStrictMode = G, oe.isSuspense = ve, oe.isValidElementType = R, oe.typeOf = E;
  }()), oe;
}
var On;
function Hr() {
  return On || (On = 1, process.env.NODE_ENV === "production" ? Wt.exports = bi() : Wt.exports = vi()), Wt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Or, $n;
function Si() {
  if ($n) return Or;
  $n = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Or = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var p in c)
        t.call(c, p) && (u[p] = c[p]);
      if (e) {
        f = e(c);
        for (var y = 0; y < f.length; y++)
          r.call(c, f[y]) && (u[f[y]] = c[f[y]]);
      }
    }
    return u;
  }, Or;
}
var $r, _n;
function Xr() {
  if (_n) return $r;
  _n = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $r = e, $r;
}
var _r, Pn;
function uo() {
  return Pn || (Pn = 1, _r = Function.call.bind(Object.prototype.hasOwnProperty)), _r;
}
var Pr, kn;
function Ci() {
  if (kn) return Pr;
  kn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Xr(), r = {}, n = uo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var y = Error(
                (u || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            p = i[d](a, d, u, c, null, t);
          } catch (S) {
            p = S;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var C = f ? f() : "";
            e(
              "Failed " + c + " type: " + p.message + (C ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Pr = o, Pr;
}
var kr, An;
function Ei() {
  if (An) return kr;
  An = 1;
  var e = Hr(), t = Si(), r = Xr(), n = uo(), o = Ci(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return kr = function(c, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(T) {
      var O = T && (f && T[f] || T[d]);
      if (typeof O == "function")
        return O;
    }
    var y = "<<anonymous>>", C = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: k(),
      arrayOf: R,
      element: E(),
      elementType: b(),
      instanceOf: I,
      node: s(),
      objectOf: Z,
      oneOf: A,
      oneOfType: J,
      shape: N,
      exact: B
    };
    function S(T, O) {
      return T === O ? T !== 0 || 1 / T === 1 / O : T !== T && O !== O;
    }
    function g(T, O) {
      this.message = T, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(T) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, z = 0;
      function W(K, V, L, q, H, G, ve) {
        if (q = q || y, G = G || L, ve !== r) {
          if (u) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = q + ":" + L;
            !O[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[Re] = !0, z++);
          }
        }
        return V[L] == null ? K ? V[L] === null ? new g("The " + H + " `" + G + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new g("The " + H + " `" + G + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : T(V, L, q, H, G);
      }
      var j = W.bind(null, !1);
      return j.isRequired = W.bind(null, !0), j;
    }
    function w(T) {
      function O(z, W, j, K, V, L) {
        var q = z[W], H = se(q);
        if (H !== T) {
          var G = ge(q);
          return new g(
            "Invalid " + K + " `" + V + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return m(O);
    }
    function k() {
      return m(a);
    }
    function R(T) {
      function O(z, W, j, K, V) {
        if (typeof T != "function")
          return new g("Property `" + V + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var L = z[W];
        if (!Array.isArray(L)) {
          var q = se(L);
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected an array."));
        }
        for (var H = 0; H < L.length; H++) {
          var G = T(L, H, j, K, V + "[" + H + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return m(O);
    }
    function E() {
      function T(O, z, W, j, K) {
        var V = O[z];
        if (!c(V)) {
          var L = se(V);
          return new g("Invalid " + j + " `" + K + "` of type " + ("`" + L + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(T);
    }
    function b() {
      function T(O, z, W, j, K) {
        var V = O[z];
        if (!e.isValidElementType(V)) {
          var L = se(V);
          return new g("Invalid " + j + " `" + K + "` of type " + ("`" + L + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(T);
    }
    function I(T) {
      function O(z, W, j, K, V) {
        if (!(z[W] instanceof T)) {
          var L = T.name || y, q = xe(z[W]);
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return m(O);
    }
    function A(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(z, W, j, K, V) {
        for (var L = z[W], q = 0; q < T.length; q++)
          if (S(L, T[q]))
            return null;
        var H = JSON.stringify(T, function(ve, $) {
          var Re = ge($);
          return Re === "symbol" ? String($) : $;
        });
        return new g("Invalid " + K + " `" + V + "` of value `" + String(L) + "` " + ("supplied to `" + j + "`, expected one of " + H + "."));
      }
      return m(O);
    }
    function Z(T) {
      function O(z, W, j, K, V) {
        if (typeof T != "function")
          return new g("Property `" + V + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var L = z[W], q = se(L);
        if (q !== "object")
          return new g("Invalid " + K + " `" + V + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected an object."));
        for (var H in L)
          if (n(L, H)) {
            var G = T(L, H, j, K, V + "." + H, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return m(O);
    }
    function J(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < T.length; O++) {
        var z = T[O];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(z) + " at index " + O + "."
          ), a;
      }
      function W(j, K, V, L, q) {
        for (var H = [], G = 0; G < T.length; G++) {
          var ve = T[G], $ = ve(j, K, V, L, q, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && H.push($.data.expectedType);
        }
        var Re = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new g("Invalid " + L + " `" + q + "` supplied to " + ("`" + V + "`" + Re + "."));
      }
      return m(W);
    }
    function s() {
      function T(O, z, W, j, K) {
        return Y(O[z]) ? null : new g("Invalid " + j + " `" + K + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return m(T);
    }
    function _(T, O, z, W, j) {
      return new g(
        (T || "React class") + ": " + O + " type `" + z + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function N(T) {
      function O(z, W, j, K, V) {
        var L = z[W], q = se(L);
        if (q !== "object")
          return new g("Invalid " + K + " `" + V + "` of type `" + q + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var H in T) {
          var G = T[H];
          if (typeof G != "function")
            return _(j, K, V, H, ge(G));
          var ve = G(L, H, j, K, V + "." + H, r);
          if (ve)
            return ve;
        }
        return null;
      }
      return m(O);
    }
    function B(T) {
      function O(z, W, j, K, V) {
        var L = z[W], q = se(L);
        if (q !== "object")
          return new g("Invalid " + K + " `" + V + "` of type `" + q + "` " + ("supplied to `" + j + "`, expected `object`."));
        var H = t({}, z[W], T);
        for (var G in H) {
          var ve = T[G];
          if (n(T, G) && typeof ve != "function")
            return _(j, K, V, G, ge(ve));
          if (!ve)
            return new g(
              "Invalid " + K + " `" + V + "` key `" + G + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(z[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var $ = ve(L, G, j, K, V + "." + G, r);
          if ($)
            return $;
        }
        return null;
      }
      return m(O);
    }
    function Y(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(Y);
          if (T === null || c(T))
            return !0;
          var O = p(T);
          if (O) {
            var z = O.call(T), W;
            if (O !== T.entries) {
              for (; !(W = z.next()).done; )
                if (!Y(W.value))
                  return !1;
            } else
              for (; !(W = z.next()).done; ) {
                var j = W.value;
                if (j && !Y(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(T, O) {
      return T === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function se(T) {
      var O = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : ce(O, T) ? "symbol" : O;
    }
    function ge(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var O = se(T);
      if (O === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function Ee(T) {
      var O = ge(T);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function xe(T) {
      return !T.constructor || !T.constructor.name ? y : T.constructor.name;
    }
    return C.checkPropTypes = o, C.resetWarningCache = o.resetWarningCache, C.PropTypes = C, C;
  }, kr;
}
var Ar, In;
function xi() {
  if (In) return Ar;
  In = 1;
  var e = Xr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ar = function() {
    function n(a, c, u, f, d, p) {
      if (p !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ar;
}
if (process.env.NODE_ENV !== "production") {
  var wi = Hr(), Ti = !0;
  Fr.exports = Ei()(wi.isElement, Ti);
} else
  Fr.exports = xi()();
var Ri = Fr.exports;
const h = /* @__PURE__ */ mi(Ri);
function fo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = fo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ke() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = fo(e)) && (n && (n += " "), n += t);
  return n;
}
function er(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const u = c;
              r[o][u] = er(i[u], a[u]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function ar(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let u = 0; u < i.length; u += 1) {
      const f = i[u];
      f && (a += (c === !0 ? "" : " ") + t(f), c = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
function Xe(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Oi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Jr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Oi(e, t, r);
}
function $i(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Je(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Je($i(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Xe(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Xe(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const _i = (e) => {
  const t = Je(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Ot = (e, t) => {
  try {
    return _i(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function sr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function po(e) {
  e = Je(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, d = (f + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), sr({
    type: c,
    values: u
  });
}
function zr(e) {
  e = Je(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Je(po(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Mn(e, t) {
  const r = zr(e), n = zr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function He(e, t) {
  return e = Je(e), t = Jr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, sr(e);
}
function Ut(e, t, r) {
  try {
    return He(e, t);
  } catch {
    return e;
  }
}
function Qr(e, t) {
  if (e = Je(e), t = Jr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return sr(e);
}
function ue(e, t, r) {
  try {
    return Qr(e, t);
  } catch {
    return e;
  }
}
function Zr(e, t) {
  if (e = Je(e), t = Jr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return sr(e);
}
function fe(e, t, r) {
  try {
    return Zr(e, t);
  } catch {
    return e;
  }
}
function Pi(e, t = 0.15) {
  return zr(e) > 0.5 ? Qr(e, t) : Zr(e, t);
}
function Yt(e, t, r) {
  try {
    return Pi(e, t);
  } catch {
    return e;
  }
}
function ki(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ho = (e) => ki(e) && e !== "classes";
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Xe(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ge(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function mo(e) {
  if (!Ge(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = mo(e[r]);
  }), t;
}
function Me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ge(e) && Ge(t) && Object.keys(t).forEach((o) => {
    Ge(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ge(e[o]) ? n[o] = Me(e[o], t[o], r) : r.clone ? n[o] = Ge(t[o]) ? mo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function _t(e, t) {
  return t ? Me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Qe = process.env.NODE_ENV !== "production" ? h.oneOfType([h.number, h.string, h.object, h.array]) : {};
function Ai(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Ii(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Mi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Xe(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Ni(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const u = t(e.breakpoints.not(...c), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const cr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Nn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${cr[e]}px)`
}, ji = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : cr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ke(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Nn;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Nn;
    return Object.keys(t).reduce((a, c) => {
      if (Ii(i.keys, c)) {
        const u = Mi(n.containerQueries ? n : ji, c);
        u && (a[u] = r(t[c], c));
      } else if (Object.keys(i.values || cr).includes(c)) {
        const u = i.up(c);
        a[u] = r(t[c], c);
      } else {
        const u = c;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Bi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Di(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function lr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function tr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = lr(e, r) || n, t && (o = t(o, n, e)), o;
}
function be(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, f = lr(u, n) || {};
    return Ke(a, c, (p) => {
      let y = tr(f, o, p);
      return p === y && typeof p == "string" && (y = tr(f, o, `${t}${p === "default" ? "" : pe(p)}`, p)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Qe
  } : {}, i.filterProps = [t], i;
}
function Fi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const zi = {
  m: "margin",
  p: "padding"
}, Vi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, jn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Li = Fi((e) => {
  if (e.length > 2)
    if (jn[e])
      e = jn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = zi[t], o = Vi[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), ur = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], fr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Wi = [...ur, ...fr];
function Nt(e, t, r, n) {
  const o = lr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function en(e) {
  return Nt(e, "spacing", 8, "spacing");
}
function jt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ui(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = jt(t, r), n), {});
}
function Yi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Li(r), i = Ui(o, n), a = e[r];
  return Ke(e, a, i);
}
function go(e, t) {
  const r = en(e.theme);
  return Object.keys(e).map((n) => Yi(e, t, n, r)).reduce(_t, {});
}
function he(e) {
  return go(e, ur);
}
he.propTypes = process.env.NODE_ENV !== "production" ? ur.reduce((e, t) => (e[t] = Qe, e), {}) : {};
he.filterProps = ur;
function me(e) {
  return go(e, fr);
}
me.propTypes = process.env.NODE_ENV !== "production" ? fr.reduce((e, t) => (e[t] = Qe, e), {}) : {};
me.filterProps = fr;
process.env.NODE_ENV !== "production" && Wi.reduce((e, t) => (e[t] = Qe, e), {});
function dr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? _t(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ze(e, t) {
  return be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const qi = ze("border", Fe), Gi = ze("borderTop", Fe), Ki = ze("borderRight", Fe), Hi = ze("borderBottom", Fe), Xi = ze("borderLeft", Fe), Ji = ze("borderColor"), Qi = ze("borderTopColor"), Zi = ze("borderRightColor"), ea = ze("borderBottomColor"), ta = ze("borderLeftColor"), ra = ze("outline", Fe), na = ze("outlineColor"), pr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Nt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: jt(t, n)
    });
    return Ke(e, e.borderRadius, r);
  }
  return null;
};
pr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Qe
} : {};
pr.filterProps = ["borderRadius"];
dr(qi, Gi, Ki, Hi, Xi, Ji, Qi, Zi, ea, ta, pr, ra, na);
const hr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Nt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: jt(t, n)
    });
    return Ke(e, e.gap, r);
  }
  return null;
};
hr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Qe
} : {};
hr.filterProps = ["gap"];
const mr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Nt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: jt(t, n)
    });
    return Ke(e, e.columnGap, r);
  }
  return null;
};
mr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Qe
} : {};
mr.filterProps = ["columnGap"];
const gr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Nt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: jt(t, n)
    });
    return Ke(e, e.rowGap, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Qe
} : {};
gr.filterProps = ["rowGap"];
const oa = be({
  prop: "gridColumn"
}), ia = be({
  prop: "gridRow"
}), aa = be({
  prop: "gridAutoFlow"
}), sa = be({
  prop: "gridAutoColumns"
}), ca = be({
  prop: "gridAutoRows"
}), la = be({
  prop: "gridTemplateColumns"
}), ua = be({
  prop: "gridTemplateRows"
}), fa = be({
  prop: "gridTemplateAreas"
}), da = be({
  prop: "gridArea"
});
dr(hr, mr, gr, oa, ia, aa, sa, ca, la, ua, fa, da);
function ht(e, t) {
  return t === "grey" ? t : e;
}
const pa = be({
  prop: "color",
  themeKey: "palette",
  transform: ht
}), ha = be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ht
}), ma = be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ht
});
dr(pa, ha, ma);
function Ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ga = be({
  prop: "width",
  transform: Ie
}), tn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, u;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || cr[r];
      return n ? ((u = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ie(r)
      };
    };
    return Ke(e, e.maxWidth, t);
  }
  return null;
};
tn.filterProps = ["maxWidth"];
const ya = be({
  prop: "minWidth",
  transform: Ie
}), ba = be({
  prop: "height",
  transform: Ie
}), va = be({
  prop: "maxHeight",
  transform: Ie
}), Sa = be({
  prop: "minHeight",
  transform: Ie
});
be({
  prop: "size",
  cssProperty: "width",
  transform: Ie
});
be({
  prop: "size",
  cssProperty: "height",
  transform: Ie
});
const Ca = be({
  prop: "boxSizing"
});
dr(ga, tn, ya, ba, va, Sa, Ca);
const yr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Fe
  },
  borderTop: {
    themeKey: "borders",
    transform: Fe
  },
  borderRight: {
    themeKey: "borders",
    transform: Fe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Fe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Fe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Fe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: pr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ht
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ht
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ht
  },
  // spacing
  p: {
    style: me
  },
  pt: {
    style: me
  },
  pr: {
    style: me
  },
  pb: {
    style: me
  },
  pl: {
    style: me
  },
  px: {
    style: me
  },
  py: {
    style: me
  },
  padding: {
    style: me
  },
  paddingTop: {
    style: me
  },
  paddingRight: {
    style: me
  },
  paddingBottom: {
    style: me
  },
  paddingLeft: {
    style: me
  },
  paddingX: {
    style: me
  },
  paddingY: {
    style: me
  },
  paddingInline: {
    style: me
  },
  paddingInlineStart: {
    style: me
  },
  paddingInlineEnd: {
    style: me
  },
  paddingBlock: {
    style: me
  },
  paddingBlockStart: {
    style: me
  },
  paddingBlockEnd: {
    style: me
  },
  m: {
    style: he
  },
  mt: {
    style: he
  },
  mr: {
    style: he
  },
  mb: {
    style: he
  },
  ml: {
    style: he
  },
  mx: {
    style: he
  },
  my: {
    style: he
  },
  margin: {
    style: he
  },
  marginTop: {
    style: he
  },
  marginRight: {
    style: he
  },
  marginBottom: {
    style: he
  },
  marginLeft: {
    style: he
  },
  marginX: {
    style: he
  },
  marginY: {
    style: he
  },
  marginInline: {
    style: he
  },
  marginInlineStart: {
    style: he
  },
  marginInlineEnd: {
    style: he
  },
  marginBlock: {
    style: he
  },
  marginBlockStart: {
    style: he
  },
  marginBlockEnd: {
    style: he
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: hr
  },
  rowGap: {
    style: gr
  },
  columnGap: {
    style: mr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ie
  },
  maxWidth: {
    style: tn
  },
  minWidth: {
    transform: Ie
  },
  height: {
    transform: Ie
  },
  maxHeight: {
    transform: Ie
  },
  minHeight: {
    transform: Ie
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ea(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function xa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wa() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: d,
      style: p
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = lr(o, f) || {};
    return p ? p(a) : Ke(a, n, (S) => {
      let g = tr(y, d, S);
      return S === g && typeof S == "string" && (g = tr(y, d, `${r}${S === "default" ? "" : pe(S)}`, S)), u === !1 ? g : {
        [u]: g
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? yr;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(o);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const f = Bi(o.breakpoints), d = Object.keys(f);
      let p = f;
      return Object.keys(u).forEach((y) => {
        const C = xa(u[y], o);
        if (C != null)
          if (typeof C == "object")
            if (i[y])
              p = _t(p, e(y, C, o, i));
            else {
              const S = Ke({
                theme: o
              }, C, (g) => ({
                [y]: g
              }));
              Ea(S, C) ? p[y] = t({
                sx: C,
                theme: o
              }) : p = _t(p, S);
            }
          else
            p = _t(p, e(y, C, o, i));
      }), Ai(o, Di(d, p));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const gt = wa();
gt.filterProps = ["sx"];
function rr() {
  return rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rr.apply(null, arguments);
}
function yo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ta = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ra = /* @__PURE__ */ yo(
  function(e) {
    return Ta.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Oa = !1;
function $a(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function _a(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Pa = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Oa : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_a(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = $a(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Oe = "-ms-", nr = "-moz-", ee = "-webkit-", bo = "comm", rn = "rule", nn = "decl", ka = "@import", vo = "@keyframes", Aa = "@layer", Ia = Math.abs, br = String.fromCharCode, Ma = Object.assign;
function Na(e, t) {
  return Te(e, 0) ^ 45 ? (((t << 2 ^ Te(e, 0)) << 2 ^ Te(e, 1)) << 2 ^ Te(e, 2)) << 2 ^ Te(e, 3) : 0;
}
function So(e) {
  return e.trim();
}
function ja(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function Vr(e, t) {
  return e.indexOf(t);
}
function Te(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pt(e, t, r) {
  return e.slice(t, r);
}
function We(e) {
  return e.length;
}
function on(e) {
  return e.length;
}
function qt(e, t) {
  return t.push(e), e;
}
function Ba(e, t) {
  return e.map(t).join("");
}
var vr = 1, yt = 1, Co = 0, Ae = 0, Ce = 0, bt = "";
function Sr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: vr, column: yt, length: a, return: "" };
}
function Tt(e, t) {
  return Ma(Sr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Da() {
  return Ce;
}
function Fa() {
  return Ce = Ae > 0 ? Te(bt, --Ae) : 0, yt--, Ce === 10 && (yt = 1, vr--), Ce;
}
function Ne() {
  return Ce = Ae < Co ? Te(bt, Ae++) : 0, yt++, Ce === 10 && (yt = 1, vr++), Ce;
}
function Ye() {
  return Te(bt, Ae);
}
function Xt() {
  return Ae;
}
function Bt(e, t) {
  return Pt(bt, e, t);
}
function kt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Eo(e) {
  return vr = yt = 1, Co = We(bt = e), Ae = 0, [];
}
function xo(e) {
  return bt = "", e;
}
function Jt(e) {
  return So(Bt(Ae - 1, Lr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function za(e) {
  for (; (Ce = Ye()) && Ce < 33; )
    Ne();
  return kt(e) > 2 || kt(Ce) > 3 ? "" : " ";
}
function Va(e, t) {
  for (; --t && Ne() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97); )
    ;
  return Bt(e, Xt() + (t < 6 && Ye() == 32 && Ne() == 32));
}
function Lr(e) {
  for (; Ne(); )
    switch (Ce) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Lr(Ce);
        break;
      case 40:
        e === 41 && Lr(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Ae;
}
function La(e, t) {
  for (; Ne() && e + Ce !== 57; )
    if (e + Ce === 84 && Ye() === 47)
      break;
  return "/*" + Bt(t, Ae - 1) + "*" + br(e === 47 ? e : Ne());
}
function Wa(e) {
  for (; !kt(Ye()); )
    Ne();
  return Bt(e, Ae);
}
function Ua(e) {
  return xo(Qt("", null, null, null, [""], e = Eo(e), 0, [0], e));
}
function Qt(e, t, r, n, o, i, a, c, u) {
  for (var f = 0, d = 0, p = a, y = 0, C = 0, S = 0, g = 1, m = 1, w = 1, k = 0, R = "", E = o, b = i, I = n, A = R; m; )
    switch (S = k, k = Ne()) {
      case 40:
        if (S != 108 && Te(A, p - 1) == 58) {
          Vr(A += te(Jt(k), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Jt(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += za(S);
        break;
      case 92:
        A += Va(Xt() - 1, 7);
        continue;
      case 47:
        switch (Ye()) {
          case 42:
          case 47:
            qt(Ya(La(Ne(), Xt()), t, r), u);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * g:
        c[f++] = We(A) * w;
      case 125 * g:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            m = 0;
          case 59 + d:
            w == -1 && (A = te(A, /\f/g, "")), C > 0 && We(A) - p && qt(C > 32 ? Dn(A + ";", n, r, p - 1) : Dn(te(A, " ", "") + ";", n, r, p - 2), u);
            break;
          case 59:
            A += ";";
          default:
            if (qt(I = Bn(A, t, r, f, d, o, c, R, E = [], b = [], p), i), k === 123)
              if (d === 0)
                Qt(A, t, I, I, E, i, p, c, b);
              else
                switch (y === 99 && Te(A, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Qt(e, I, I, n && qt(Bn(e, I, I, 0, 0, o, c, R, o, E = [], p), b), o, b, p, c, n ? E : b);
                    break;
                  default:
                    Qt(A, I, I, I, [""], b, 0, c, b);
                }
        }
        f = d = C = 0, g = w = 1, R = A = "", p = a;
        break;
      case 58:
        p = 1 + We(A), C = S;
      default:
        if (g < 1) {
          if (k == 123)
            --g;
          else if (k == 125 && g++ == 0 && Fa() == 125)
            continue;
        }
        switch (A += br(k), k * g) {
          case 38:
            w = d > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            c[f++] = (We(A) - 1) * w, w = 1;
            break;
          case 64:
            Ye() === 45 && (A += Jt(Ne())), y = Ye(), d = p = We(R = A += Wa(Xt())), k++;
            break;
          case 45:
            S === 45 && We(A) == 2 && (g = 0);
        }
    }
  return i;
}
function Bn(e, t, r, n, o, i, a, c, u, f, d) {
  for (var p = o - 1, y = o === 0 ? i : [""], C = on(y), S = 0, g = 0, m = 0; S < n; ++S)
    for (var w = 0, k = Pt(e, p + 1, p = Ia(g = a[S])), R = e; w < C; ++w)
      (R = So(g > 0 ? y[w] + " " + k : te(k, /&\f/g, y[w]))) && (u[m++] = R);
  return Sr(e, t, r, o === 0 ? rn : c, u, f, d);
}
function Ya(e, t, r) {
  return Sr(e, t, r, bo, br(Da()), Pt(e, 2, -2), 0);
}
function Dn(e, t, r, n) {
  return Sr(e, t, r, nn, Pt(e, 0, n), Pt(e, n + 1, -1), n);
}
function mt(e, t) {
  for (var r = "", n = on(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function qa(e, t, r, n) {
  switch (e.type) {
    case Aa:
      if (e.children.length) break;
    case ka:
    case nn:
      return e.return = e.return || e.value;
    case bo:
      return "";
    case vo:
      return e.return = e.value + "{" + mt(e.children, n) + "}";
    case rn:
      e.value = e.props.join(",");
  }
  return We(r = mt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ga(e) {
  var t = on(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function Ka(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ha = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ye(), o === 38 && i === 12 && (r[n] = 1), !kt(i); )
    Ne();
  return Bt(t, Ae);
}, Xa = function(t, r) {
  var n = -1, o = 44;
  do
    switch (kt(o)) {
      case 0:
        o === 38 && Ye() === 12 && (r[n] = 1), t[n] += Ha(Ae - 1, r, n);
        break;
      case 2:
        t[n] += Jt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ye() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += br(o);
    }
  while (o = Ne());
  return t;
}, Ja = function(t, r) {
  return xo(Xa(Eo(t), r));
}, Fn = /* @__PURE__ */ new WeakMap(), Qa = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Fn.get(n)) && !o) {
      Fn.set(t, !0);
      for (var i = [], a = Ja(r, i), c = n.props, u = 0, f = 0; u < a.length; u++)
        for (var d = 0; d < c.length; d++, f++)
          t.props[f] = i[u] ? a[u].replace(/&\f/g, c[d]) : c[d] + " " + a[u];
    }
  }
}, Za = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function wo(e, t) {
  switch (Na(e, t)) {
    case 5103:
      return ee + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + nr + e + Oe + e + e;
    case 6828:
    case 4268:
      return ee + e + Oe + e + e;
    case 6165:
      return ee + e + Oe + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Oe + "flex-$1$2") + e;
    case 5443:
      return ee + e + Oe + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + Oe + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + Oe + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + Oe + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + Oe + te(e, "grow", "positive") + e;
    case 4554:
      return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + Oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (We(e) - 1 - t > 6) switch (Te(e, t + 1)) {
        case 109:
          if (Te(e, t + 4) !== 45) break;
        case 102:
          return te(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + nr + (Te(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Vr(e, "stretch") ? wo(te(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Te(e, t + 1) !== 115) break;
    case 6444:
      switch (Te(e, We(e) - 3 - (~Vr(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + ee) + e;
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ee + (Te(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + Oe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Te(e, t + 11)) {
        case 114:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + Oe + e + e;
  }
  return e;
}
var es = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case nn:
      t.return = wo(t.value, t.length);
      break;
    case vo:
      return mt([Tt(t, {
        value: te(t.value, "@", "@" + ee)
      })], o);
    case rn:
      if (t.length) return Ba(t.props, function(i) {
        switch (ja(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return mt([Tt(t, {
              props: [te(i, /:(read-\w+)/, ":" + nr + "$1")]
            })], o);
          case "::placeholder":
            return mt([Tt(t, {
              props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")]
            }), Tt(t, {
              props: [te(i, /:(plac\w+)/, ":" + nr + "$1")]
            }), Tt(t, {
              props: [te(i, /:(plac\w+)/, Oe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, ts = [es], rs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var m = g.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ts, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var m = g.getAttribute("data-emotion").split(" "), w = 1; w < m.length; w++)
        i[m[w]] = !0;
      c.push(g);
    }
  );
  var u, f = [Qa, Za];
  {
    var d, p = [qa, Ka(function(g) {
      d.insert(g);
    })], y = Ga(f.concat(o, p)), C = function(m) {
      return mt(Ua(m), y);
    };
    u = function(m, w, k, R) {
      d = k, C(m ? m + "{" + w.styles + "}" : w.styles), R && (S.inserted[w.name] = !0);
    };
  }
  var S = {
    key: r,
    sheet: new Pa({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return S.sheet.hydrate(c), S;
}, To = Hr(), ns = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, os = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Ro = {};
Ro[To.ForwardRef] = ns;
Ro[To.Memo] = os;
var is = !0;
function as(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Oo = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  is === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ss = function(t, r, n) {
  Oo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function cs(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ls = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, us = !1, fs = /[A-Z]|^ms/g, ds = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $o = function(t) {
  return t.charCodeAt(1) === 45;
}, zn = function(t) {
  return t != null && typeof t != "boolean";
}, Ir = /* @__PURE__ */ yo(function(e) {
  return $o(e) ? e : e.replace(fs, "-$&").toLowerCase();
}), Vn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ds, function(n, o, i) {
          return Ue = {
            name: o,
            styles: i,
            next: Ue
          }, o;
        });
  }
  return ls[t] !== 1 && !$o(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, ps = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function At(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ue = {
          name: o.name,
          styles: o.styles,
          next: Ue
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ue = {
              name: a.name,
              styles: a.styles,
              next: Ue
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return hs(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Ue, f = r(e);
        return Ue = u, At(e, t, f);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function hs(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += At(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : zn(c) && (n += Ir(i) + ":" + Vn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && us)
          throw new Error(ps);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var u = 0; u < a.length; u++)
            zn(a[u]) && (n += Ir(i) + ":" + Vn(i, a[u]) + ";");
        else {
          var f = At(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Ir(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var Ln = /label:\s*([^\s;{]+)\s*(;|$)/g, Ue;
function an(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ue = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += At(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += At(r, t, e[c]), n) {
      var u = i;
      o += u[c];
    }
  Ln.lastIndex = 0;
  for (var f = "", d; (d = Ln.exec(o)) !== null; )
    f += "-" + d[1];
  var p = cs(o) + f;
  return {
    name: p,
    styles: o,
    next: Ue
  };
}
var ms = function(t) {
  return t();
}, gs = D.useInsertionEffect ? D.useInsertionEffect : !1, ys = gs || ms, _o = /* @__PURE__ */ D.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ rs({
    key: "css"
  }) : null
);
_o.Provider;
var bs = function(t) {
  return /* @__PURE__ */ di(function(r, n) {
    var o = pi(_o);
    return t(r, o, n);
  });
}, vs = /* @__PURE__ */ D.createContext({});
function Ss() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return an(t);
}
var sn = function() {
  var t = Ss.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Cs = Ra, Es = function(t) {
  return t !== "theme";
}, Wn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Cs : Es;
}, Un = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, xs = !1, ws = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Oo(r, n, o), ys(function() {
    return ss(r, n, o);
  }), null;
}, Ts = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Un(t, r, n), u = c || Wn(o), f = !u("as");
  return function() {
    var d = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      p.push(d[0][0]);
      for (var y = d.length, C = 1; C < y; C++)
        p.push(d[C], d[0][C]);
    }
    var S = bs(function(g, m, w) {
      var k = f && g.as || o, R = "", E = [], b = g;
      if (g.theme == null) {
        b = {};
        for (var I in g)
          b[I] = g[I];
        b.theme = D.useContext(vs);
      }
      typeof g.className == "string" ? R = as(m.registered, E, g.className) : g.className != null && (R = g.className + " ");
      var A = an(p.concat(E), m.registered, b);
      R += m.key + "-" + A.name, a !== void 0 && (R += " " + a);
      var Z = f && c === void 0 ? Wn(k) : u, J = {};
      for (var s in g)
        f && s === "as" || Z(s) && (J[s] = g[s]);
      return J.className = R, w && (J.ref = w), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement(ws, {
        cache: m,
        serialized: A,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ D.createElement(k, J));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = p, S.__emotion_forwardProp = c, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && xs ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function(g, m) {
      return e(g, rr({}, r, m, {
        shouldForwardProp: Un(S, m, !0)
      })).apply(void 0, p);
    }, S;
  };
}, Rs = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Wr = Ts.bind();
Rs.forEach(function(e) {
  Wr[e] = Wr(e);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Os(e, t) {
  const r = Wr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function $s(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Yn = [];
function qn(e) {
  return Yn[0] = e, an(Yn);
}
const _s = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Ps(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = _s(t), a = Object.keys(i);
  function c(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function u(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function f(y, C) {
    const S = a.indexOf(C);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(S !== -1 && typeof t[a[S]] == "number" ? t[a[S]] : C) - n / 100}${r})`;
  }
  function d(y) {
    return a.indexOf(y) + 1 < a.length ? f(y, a[a.indexOf(y) + 1]) : c(y);
  }
  function p(y) {
    const C = a.indexOf(y);
    return C === 0 ? c(a[1]) : C === a.length - 1 ? u(a[C]) : f(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: u,
    between: f,
    only: d,
    not: p,
    unit: r,
    ...o
  };
}
const ks = {
  borderRadius: 4
};
function Po(e = 8, t = en({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function As(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function ko(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = Ps(r), u = Po(o);
  let f = Me({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...ks,
      ...i
    }
  }, a);
  return f = Ni(f), f.applyStyles = As, f = t.reduce((d, p) => Me(d, p), f), f.unstable_sxConfig = {
    ...yr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return gt({
      sx: p,
      theme: this
    });
  }, f;
}
const Gn = (e) => e, Is = () => {
  let e = Gn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Gn;
    }
  };
}, Ms = Is(), Ns = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function vt(e, t, r = "Mui") {
  const n = Ns[t];
  return n ? `${r}-${n}` : `${Ms.generate(e)}-${t}`;
}
function Dt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = vt(e, o, r);
  }), n;
}
var Ur = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn;
function js() {
  if (Kn) return ie;
  Kn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var w = m.$$typeof;
      switch (w) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case f:
            case d:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case a:
                case u:
                case y:
                case p:
                case i:
                  return m;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return ie.ContextConsumer = a, ie.ContextProvider = i, ie.Element = e, ie.ForwardRef = u, ie.Fragment = r, ie.Lazy = y, ie.Memo = p, ie.Portal = t, ie.Profiler = o, ie.StrictMode = n, ie.Suspense = f, ie.SuspenseList = d, ie.isAsyncMode = function() {
    return !1;
  }, ie.isConcurrentMode = function() {
    return !1;
  }, ie.isContextConsumer = function(m) {
    return g(m) === a;
  }, ie.isContextProvider = function(m) {
    return g(m) === i;
  }, ie.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ie.isForwardRef = function(m) {
    return g(m) === u;
  }, ie.isFragment = function(m) {
    return g(m) === r;
  }, ie.isLazy = function(m) {
    return g(m) === y;
  }, ie.isMemo = function(m) {
    return g(m) === p;
  }, ie.isPortal = function(m) {
    return g(m) === t;
  }, ie.isProfiler = function(m) {
    return g(m) === o;
  }, ie.isStrictMode = function(m) {
    return g(m) === n;
  }, ie.isSuspense = function(m) {
    return g(m) === f;
  }, ie.isSuspenseList = function(m) {
    return g(m) === d;
  }, ie.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === f || m === d || m === C || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === p || m.$$typeof === i || m.$$typeof === a || m.$$typeof === u || m.$$typeof === S || m.getModuleId !== void 0);
  }, ie.typeOf = g, ie;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function Bs() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = !1, g = !1, m = !1, w = !1, k = !1, R;
    R = Symbol.for("react.module.reference");
    function E(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === o || k || M === n || M === f || M === d || w || M === C || S || g || m || typeof M == "object" && M !== null && (M.$$typeof === y || M.$$typeof === p || M.$$typeof === i || M.$$typeof === a || M.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === R || M.getModuleId !== void 0));
    }
    function b(M) {
      if (typeof M == "object" && M !== null) {
        var $e = M.$$typeof;
        switch ($e) {
          case e:
            var je = M.type;
            switch (je) {
              case r:
              case o:
              case n:
              case f:
              case d:
                return je;
              default:
                var et = je && je.$$typeof;
                switch (et) {
                  case c:
                  case a:
                  case u:
                  case y:
                  case p:
                  case i:
                    return et;
                  default:
                    return $e;
                }
            }
          case t:
            return $e;
        }
      }
    }
    var I = a, A = i, Z = e, J = u, s = r, _ = y, N = p, B = t, Y = o, ce = n, se = f, ge = d, Ee = !1, xe = !1;
    function T(M) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(M) {
      return xe || (xe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z(M) {
      return b(M) === a;
    }
    function W(M) {
      return b(M) === i;
    }
    function j(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function K(M) {
      return b(M) === u;
    }
    function V(M) {
      return b(M) === r;
    }
    function L(M) {
      return b(M) === y;
    }
    function q(M) {
      return b(M) === p;
    }
    function H(M) {
      return b(M) === t;
    }
    function G(M) {
      return b(M) === o;
    }
    function ve(M) {
      return b(M) === n;
    }
    function $(M) {
      return b(M) === f;
    }
    function Re(M) {
      return b(M) === d;
    }
    ae.ContextConsumer = I, ae.ContextProvider = A, ae.Element = Z, ae.ForwardRef = J, ae.Fragment = s, ae.Lazy = _, ae.Memo = N, ae.Portal = B, ae.Profiler = Y, ae.StrictMode = ce, ae.Suspense = se, ae.SuspenseList = ge, ae.isAsyncMode = T, ae.isConcurrentMode = O, ae.isContextConsumer = z, ae.isContextProvider = W, ae.isElement = j, ae.isForwardRef = K, ae.isFragment = V, ae.isLazy = L, ae.isMemo = q, ae.isPortal = H, ae.isProfiler = G, ae.isStrictMode = ve, ae.isSuspense = $, ae.isSuspenseList = Re, ae.isValidElementType = E, ae.typeOf = b;
  }()), ae;
}
process.env.NODE_ENV === "production" ? Ur.exports = js() : Ur.exports = Bs();
var Xn = Ur.exports;
function Ao(e, t = "") {
  return e.displayName || e.name || t;
}
function Jn(e, t, r) {
  const n = Ao(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ds(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ao(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xn.ForwardRef:
          return Jn(e, e.render, "ForwardRef");
        case Xn.Memo:
          return Jn(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Io(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: qn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = qn(o.style));
  }), n;
}
const Fs = ko();
function Mr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function zs(e) {
  return e ? (t, r) => r[e] : null;
}
function Vs(e, t, r) {
  e.theme = Ys(e.theme) ? r : e.theme[t] || e.theme;
}
function Zt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Zt(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Mo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Mo(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const c in a.props)
        if (e[c] !== a.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== a.props[c])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function Ls(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Fs,
    rootShouldForwardProp: n = Mr,
    slotShouldForwardProp: o = Mr
  } = e;
  function i(c) {
    Vs(c, t, r);
  }
  return (c, u = {}) => {
    $s(c, (b) => b.filter((I) => I !== gt));
    const {
      name: f,
      slot: d,
      skipVariantsResolver: p,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = zs(No(d)),
      ...S
    } = u, g = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), m = y || !1;
    let w = Mr;
    d === "Root" || d === "root" ? w = n : d ? w = o : qs(c) && (w = void 0);
    const k = Os(c, {
      shouldForwardProp: w,
      label: Us(f, d),
      ...S
    }), R = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(A) {
          return Zt(A, b);
        };
      if (Ge(b)) {
        const I = Io(b);
        return I.variants ? function(Z) {
          return Zt(Z, I);
        } : I.style;
      }
      return b;
    }, E = (...b) => {
      const I = [], A = b.map(R), Z = [];
      if (I.push(i), f && C && Z.push(function(N) {
        var se, ge;
        const Y = (ge = (se = N.theme.components) == null ? void 0 : se[f]) == null ? void 0 : ge.styleOverrides;
        if (!Y)
          return null;
        const ce = {};
        for (const Ee in Y)
          ce[Ee] = Zt(N, Y[Ee]);
        return C(N, ce);
      }), f && !g && Z.push(function(N) {
        var ce, se;
        const B = N.theme, Y = (se = (ce = B == null ? void 0 : B.components) == null ? void 0 : ce[f]) == null ? void 0 : se.variants;
        return Y ? Mo(N, Y) : null;
      }), m || Z.push(gt), Array.isArray(A[0])) {
        const _ = A.shift(), N = new Array(I.length).fill(""), B = new Array(Z.length).fill("");
        let Y;
        Y = [...N, ..._, ...B], Y.raw = [...N, ..._.raw, ...B], I.unshift(Y);
      }
      const J = [...I, ...A, ...Z], s = k(...J);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = Ws(f, d, c)), s;
    };
    return k.withConfig && (E.withConfig = k.withConfig), E;
  };
}
function Ws(e, t, r) {
  return e ? `${e}${pe(t || "")}` : `Styled(${Ds(r)})`;
}
function Us(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${No(t || "Root")}`), r;
}
function Ys(e) {
  for (const t in e)
    return !1;
  return !0;
}
function qs(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function No(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Gs = typeof window < "u" ? D.useLayoutEffect : D.useEffect;
function jo(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Ks(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Hs(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Ks(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Xs = jo(h.elementType, Hs), Js = h.oneOfType([h.func, h.object]);
function Qs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Gt(e) {
  const t = D.useRef(e);
  return Gs(() => {
    t.current = e;
  }), D.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Qn(...e) {
  return D.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Qs(r, t);
    });
  }, e);
}
const Zn = {};
function Bo(e, t) {
  const r = D.useRef(Zn);
  return r.current === Zn && (r.current = e(t)), r;
}
const Zs = [];
function ec(e) {
  D.useEffect(e, Zs);
}
class cn {
  constructor() {
    Et(this, "currentId", null);
    Et(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Et(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new cn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function tc() {
  const e = Bo(cn.create).current;
  return ec(e.disposeEffect), e;
}
function eo(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const rc = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (h.node, h.object);
function nc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? er(o.defaultProps, n) : !o.styleOverrides && !o.variants ? er(o, n) : n;
}
function oc({
  props: e,
  name: t
}) {
  const r = D.useContext(rc);
  return nc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const to = {
  theme: void 0
};
function ic(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (to.theme = o.theme, i = Io(e(to)), t = i, r = o.theme), i;
  };
}
function ac(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const ro = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, sc = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!r || r && !r([...i, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, c], Array.isArray(u) ? [...a, c] : a) : t([...i, c], u, a));
    });
  }
  n(e);
}, cc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Nr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return sc(
    e,
    (c, u, f) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const d = `--${r ? `${r}-` : ""}${c.join("-")}`, p = cc(c, u);
        Object.assign(o, {
          [d]: p
        }), ro(i, c, `var(${d})`, f), ro(a, c, `var(${d}, ${p})`, f);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function lc(e, t = {}) {
  const {
    getSelector: r = m,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: f,
    css: d,
    varsWithDefaults: p
  } = Nr(u, t);
  let y = p;
  const C = {}, {
    [c]: S,
    ...g
  } = i;
  if (Object.entries(g || {}).forEach(([R, E]) => {
    const {
      vars: b,
      css: I,
      varsWithDefaults: A
    } = Nr(E, t);
    y = Me(y, A), C[R] = {
      css: I,
      vars: b
    };
  }), S) {
    const {
      css: R,
      vars: E,
      varsWithDefaults: b
    } = Nr(S, t);
    y = Me(y, b), C[c] = {
      css: R,
      vars: E
    };
  }
  function m(R, E) {
    var I, A;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), R) {
      if (b === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((A = (I = i[R]) == null ? void 0 : I.palette) == null ? void 0 : A.mode) || R})`]: {
            ":root": E
          }
        };
      if (b)
        return e.defaultColorScheme === R ? `:root, ${b.replace("%s", String(R))}` : b.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let R = {
        ...f
      };
      return Object.entries(C).forEach(([, {
        vars: E
      }]) => {
        R = Me(R, E);
      }), R;
    },
    generateStyleSheets: () => {
      var Z, J;
      const R = [], E = e.defaultColorScheme || "light";
      function b(s, _) {
        Object.keys(_).length && R.push(typeof s == "string" ? {
          [s]: {
            ..._
          }
        } : s);
      }
      b(r(void 0, {
        ...d
      }), d);
      const {
        [E]: I,
        ...A
      } = C;
      if (I) {
        const {
          css: s
        } = I, _ = (J = (Z = i[E]) == null ? void 0 : Z.palette) == null ? void 0 : J.mode, N = !n && _ ? {
          colorScheme: _,
          ...s
        } : {
          ...s
        };
        b(r(E, {
          ...N
        }), N);
      }
      return Object.entries(A).forEach(([s, {
        css: _
      }]) => {
        var Y, ce;
        const N = (ce = (Y = i[s]) == null ? void 0 : Y.palette) == null ? void 0 : ce.mode, B = !n && N ? {
          colorScheme: N,
          ..._
        } : {
          ..._
        };
        b(r(s, {
          ...B
        }), B);
      }), R;
    }
  };
}
function uc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const It = {
  black: "#000",
  white: "#fff"
}, fc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ct = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, lt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Rt = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, ut = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, ft = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, dt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, no = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: It.white,
    default: It.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, jr = {
  text: {
    primary: It.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: It.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function oo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Zr(e.main, o) : t === "dark" && (e.dark = Qr(e.main, i)));
}
function dc(e = "light") {
  return e === "dark" ? {
    main: ut[200],
    light: ut[50],
    dark: ut[400]
  } : {
    main: ut[700],
    light: ut[400],
    dark: ut[800]
  };
}
function pc(e = "light") {
  return e === "dark" ? {
    main: ct[200],
    light: ct[50],
    dark: ct[400]
  } : {
    main: ct[500],
    light: ct[300],
    dark: ct[700]
  };
}
function hc(e = "light") {
  return e === "dark" ? {
    main: lt[500],
    light: lt[300],
    dark: lt[700]
  } : {
    main: lt[700],
    light: lt[400],
    dark: lt[800]
  };
}
function mc(e = "light") {
  return e === "dark" ? {
    main: ft[400],
    light: ft[300],
    dark: ft[700]
  } : {
    main: ft[700],
    light: ft[500],
    dark: ft[900]
  };
}
function gc(e = "light") {
  return e === "dark" ? {
    main: dt[400],
    light: dt[300],
    dark: dt[700]
  } : {
    main: dt[800],
    light: dt[500],
    dark: dt[900]
  };
}
function yc(e = "light") {
  return e === "dark" ? {
    main: Rt[400],
    light: Rt[300],
    dark: Rt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Rt[500],
    dark: Rt[900]
  };
}
function ln(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || dc(t), a = e.secondary || pc(t), c = e.error || hc(t), u = e.info || mc(t), f = e.success || gc(t), d = e.warning || yc(t);
  function p(g) {
    const m = Mn(g, jr.text.primary) >= r ? jr.text.primary : no.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Mn(g, m);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const y = ({
    color: g,
    name: m,
    mainShade: w = 500,
    lightShade: k = 300,
    darkShade: R = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[w] && (g.main = g[w]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Xe(11, m ? ` (${m})` : "", w));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Xe(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return oo(g, "light", k, n), oo(g, "dark", R, n), g.contrastText || (g.contrastText = p(g.main)), g;
  }, C = {
    dark: jr,
    light: no
  };
  return process.env.NODE_ENV !== "production" && (C[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Me({
    // A collection of common colors.
    common: {
      ...It
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: fc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...C[t]
  }, o);
}
function bc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function vc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Sc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const io = {
  textTransform: "uppercase"
}, ao = '"Roboto", "Helvetica", "Arial", sans-serif';
function Cc(e, t) {
  const {
    fontFamily: r = ao,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, C = d || ((m) => `${m / u * y}rem`), S = (m, w, k, R, E) => ({
    fontFamily: r,
    fontWeight: m,
    fontSize: C(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ao ? {
      letterSpacing: `${Sc(R / w)}em`
    } : {},
    ...E,
    ...f
  }), g = {
    h1: S(o, 96, 1.167, -1.5),
    h2: S(o, 60, 1.2, -0.5),
    h3: S(i, 48, 1.167, 0),
    h4: S(i, 34, 1.235, 0.25),
    h5: S(i, 24, 1.334, 0),
    h6: S(a, 20, 1.6, 0.15),
    subtitle1: S(i, 16, 1.75, 0.15),
    subtitle2: S(a, 14, 1.57, 0.1),
    body1: S(i, 16, 1.5, 0.15),
    body2: S(i, 14, 1.43, 0.15),
    button: S(a, 14, 1.75, 0.4, io),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, io),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Me({
    htmlFontSize: u,
    pxToRem: C,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...g
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Ec = 0.2, xc = 0.14, wc = 0.12;
function de(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Ec})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${xc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${wc})`].join(",");
}
const Tc = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Rc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Oc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function so(e) {
  return `${Math.round(e)}ms`;
}
function $c(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function _c(e) {
  const t = {
    ...Rc,
    ...e.easing
  }, r = {
    ...Oc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: $c,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const d = (y) => typeof y == "string", p = (y) => !Number.isNaN(parseFloat(y));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : so(a)} ${c} ${typeof u == "string" ? u : so(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Pc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Yr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: u,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Xe(20));
  const d = ln(i), p = ko(e);
  let y = Me(p, {
    mixins: vc(p.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Tc.slice(),
    typography: Cc(d, c),
    transitions: _c(a),
    zIndex: {
      ...Pc
    }
  });
  if (y = Me(y, f), y = t.reduce((C, S) => Me(C, S), y), process.env.NODE_ENV !== "production") {
    const C = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (g, m) => {
      let w;
      for (w in g) {
        const k = g[w];
        if (C.includes(w) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = vt("", w);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${w}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[w] = {};
        }
      }
    };
    Object.keys(y.components).forEach((g) => {
      const m = y.components[g].styleOverrides;
      m && g.startsWith("Mui") && S(m, g);
    });
  }
  return y.unstable_sxConfig = {
    ...yr,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(S) {
    return gt({
      sx: S,
      theme: this
    });
  }, y;
}
function kc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ac = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = kc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Do(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Fo(e) {
  return e === "dark" ? Ac : [];
}
function Ic(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = ln(t);
  return {
    palette: i,
    opacity: {
      ...Do(i.mode),
      ...r
    },
    overlays: n || Fo(i.mode),
    ...o
  };
}
function Mc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Nc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], jc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Nc(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Bc(e) {
  return Ge(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Dc(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Bc(c) || a.startsWith("unstable_") ? delete n[a] : Ge(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Fc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function $t(e) {
  return !e || !e.startsWith("hsl") ? e : po(e);
}
function qe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Ot($t(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function zc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Le = (e) => {
  try {
    return e();
  } catch {
  }
}, Vc = (e = "mui") => ac(e);
function Br(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = Ic({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Yr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...Do(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Fo(o)
  }, a;
}
function Lc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Mc,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, d = Object.keys(r)[0], p = n || (r.light && d !== "light" ? "light" : d), y = Vc(i), {
    [p]: C,
    light: S,
    dark: g,
    ...m
  } = r, w = {
    ...m
  };
  let k = C;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (k = !0), !k)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Xe(21, p));
  const R = Br(w, k, f, p);
  S && !w.light && Br(w, S, void 0, "light"), g && !w.dark && Br(w, g, void 0, "dark");
  let E = {
    defaultColorScheme: p,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: y,
    colorSchemes: w,
    font: {
      ...bc(R.typography),
      ...R.font
    },
    spacing: zc(f.spacing)
  };
  Object.keys(E.colorSchemes).forEach((J) => {
    const s = E.colorSchemes[J].palette, _ = (N) => {
      const B = N.split("-"), Y = B[1], ce = B[2];
      return y(N, s[Y][ce]);
    };
    if (s.mode === "light" && (v(s.common, "background", "#fff"), v(s.common, "onBackground", "#000")), s.mode === "dark" && (v(s.common, "background", "#000"), v(s.common, "onBackground", "#fff")), Fc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      v(s.Alert, "errorColor", ue(s.error.light, 0.6)), v(s.Alert, "infoColor", ue(s.info.light, 0.6)), v(s.Alert, "successColor", ue(s.success.light, 0.6)), v(s.Alert, "warningColor", ue(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", _("palette-error-main")), v(s.Alert, "infoFilledBg", _("palette-info-main")), v(s.Alert, "successFilledBg", _("palette-success-main")), v(s.Alert, "warningFilledBg", _("palette-warning-main")), v(s.Alert, "errorFilledColor", Le(() => s.getContrastText(s.error.main))), v(s.Alert, "infoFilledColor", Le(() => s.getContrastText(s.info.main))), v(s.Alert, "successFilledColor", Le(() => s.getContrastText(s.success.main))), v(s.Alert, "warningFilledColor", Le(() => s.getContrastText(s.warning.main))), v(s.Alert, "errorStandardBg", fe(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", fe(s.info.light, 0.9)), v(s.Alert, "successStandardBg", fe(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", fe(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", _("palette-error-main")), v(s.Alert, "infoIconColor", _("palette-info-main")), v(s.Alert, "successIconColor", _("palette-success-main")), v(s.Alert, "warningIconColor", _("palette-warning-main")), v(s.AppBar, "defaultBg", _("palette-grey-100")), v(s.Avatar, "defaultBg", _("palette-grey-400")), v(s.Button, "inheritContainedBg", _("palette-grey-300")), v(s.Button, "inheritContainedHoverBg", _("palette-grey-A100")), v(s.Chip, "defaultBorder", _("palette-grey-400")), v(s.Chip, "defaultAvatarColor", _("palette-grey-700")), v(s.Chip, "defaultIconColor", _("palette-grey-700")), v(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(s.LinearProgress, "primaryBg", fe(s.primary.main, 0.62)), v(s.LinearProgress, "secondaryBg", fe(s.secondary.main, 0.62)), v(s.LinearProgress, "errorBg", fe(s.error.main, 0.62)), v(s.LinearProgress, "infoBg", fe(s.info.main, 0.62)), v(s.LinearProgress, "successBg", fe(s.success.main, 0.62)), v(s.LinearProgress, "warningBg", fe(s.warning.main, 0.62)), v(s.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.11)`), v(s.Slider, "primaryTrack", fe(s.primary.main, 0.62)), v(s.Slider, "secondaryTrack", fe(s.secondary.main, 0.62)), v(s.Slider, "errorTrack", fe(s.error.main, 0.62)), v(s.Slider, "infoTrack", fe(s.info.main, 0.62)), v(s.Slider, "successTrack", fe(s.success.main, 0.62)), v(s.Slider, "warningTrack", fe(s.warning.main, 0.62));
      const N = Yt(s.background.default, 0.8);
      v(s.SnackbarContent, "bg", N), v(s.SnackbarContent, "color", Le(() => s.getContrastText(N))), v(s.SpeedDialAction, "fabHoverBg", Yt(s.background.paper, 0.15)), v(s.StepConnector, "border", _("palette-grey-400")), v(s.StepContent, "border", _("palette-grey-400")), v(s.Switch, "defaultColor", _("palette-common-white")), v(s.Switch, "defaultDisabledColor", _("palette-grey-100")), v(s.Switch, "primaryDisabledColor", fe(s.primary.main, 0.62)), v(s.Switch, "secondaryDisabledColor", fe(s.secondary.main, 0.62)), v(s.Switch, "errorDisabledColor", fe(s.error.main, 0.62)), v(s.Switch, "infoDisabledColor", fe(s.info.main, 0.62)), v(s.Switch, "successDisabledColor", fe(s.success.main, 0.62)), v(s.Switch, "warningDisabledColor", fe(s.warning.main, 0.62)), v(s.TableCell, "border", fe(Ut(s.divider, 1), 0.88)), v(s.Tooltip, "bg", Ut(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      v(s.Alert, "errorColor", fe(s.error.light, 0.6)), v(s.Alert, "infoColor", fe(s.info.light, 0.6)), v(s.Alert, "successColor", fe(s.success.light, 0.6)), v(s.Alert, "warningColor", fe(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", _("palette-error-dark")), v(s.Alert, "infoFilledBg", _("palette-info-dark")), v(s.Alert, "successFilledBg", _("palette-success-dark")), v(s.Alert, "warningFilledBg", _("palette-warning-dark")), v(s.Alert, "errorFilledColor", Le(() => s.getContrastText(s.error.dark))), v(s.Alert, "infoFilledColor", Le(() => s.getContrastText(s.info.dark))), v(s.Alert, "successFilledColor", Le(() => s.getContrastText(s.success.dark))), v(s.Alert, "warningFilledColor", Le(() => s.getContrastText(s.warning.dark))), v(s.Alert, "errorStandardBg", ue(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", ue(s.info.light, 0.9)), v(s.Alert, "successStandardBg", ue(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", ue(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", _("palette-error-main")), v(s.Alert, "infoIconColor", _("palette-info-main")), v(s.Alert, "successIconColor", _("palette-success-main")), v(s.Alert, "warningIconColor", _("palette-warning-main")), v(s.AppBar, "defaultBg", _("palette-grey-900")), v(s.AppBar, "darkBg", _("palette-background-paper")), v(s.AppBar, "darkColor", _("palette-text-primary")), v(s.Avatar, "defaultBg", _("palette-grey-600")), v(s.Button, "inheritContainedBg", _("palette-grey-800")), v(s.Button, "inheritContainedHoverBg", _("palette-grey-700")), v(s.Chip, "defaultBorder", _("palette-grey-700")), v(s.Chip, "defaultAvatarColor", _("palette-grey-300")), v(s.Chip, "defaultIconColor", _("palette-grey-300")), v(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(s.LinearProgress, "primaryBg", ue(s.primary.main, 0.5)), v(s.LinearProgress, "secondaryBg", ue(s.secondary.main, 0.5)), v(s.LinearProgress, "errorBg", ue(s.error.main, 0.5)), v(s.LinearProgress, "infoBg", ue(s.info.main, 0.5)), v(s.LinearProgress, "successBg", ue(s.success.main, 0.5)), v(s.LinearProgress, "warningBg", ue(s.warning.main, 0.5)), v(s.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.13)`), v(s.Slider, "primaryTrack", ue(s.primary.main, 0.5)), v(s.Slider, "secondaryTrack", ue(s.secondary.main, 0.5)), v(s.Slider, "errorTrack", ue(s.error.main, 0.5)), v(s.Slider, "infoTrack", ue(s.info.main, 0.5)), v(s.Slider, "successTrack", ue(s.success.main, 0.5)), v(s.Slider, "warningTrack", ue(s.warning.main, 0.5));
      const N = Yt(s.background.default, 0.98);
      v(s.SnackbarContent, "bg", N), v(s.SnackbarContent, "color", Le(() => s.getContrastText(N))), v(s.SpeedDialAction, "fabHoverBg", Yt(s.background.paper, 0.15)), v(s.StepConnector, "border", _("palette-grey-600")), v(s.StepContent, "border", _("palette-grey-600")), v(s.Switch, "defaultColor", _("palette-grey-300")), v(s.Switch, "defaultDisabledColor", _("palette-grey-600")), v(s.Switch, "primaryDisabledColor", ue(s.primary.main, 0.55)), v(s.Switch, "secondaryDisabledColor", ue(s.secondary.main, 0.55)), v(s.Switch, "errorDisabledColor", ue(s.error.main, 0.55)), v(s.Switch, "infoDisabledColor", ue(s.info.main, 0.55)), v(s.Switch, "successDisabledColor", ue(s.success.main, 0.55)), v(s.Switch, "warningDisabledColor", ue(s.warning.main, 0.55)), v(s.TableCell, "border", ue(Ut(s.divider, 1), 0.68)), v(s.Tooltip, "bg", Ut(s.grey[700], 0.92));
    }
    qe(s.background, "default"), qe(s.background, "paper"), qe(s.common, "background"), qe(s.common, "onBackground"), qe(s, "divider"), Object.keys(s).forEach((N) => {
      const B = s[N];
      B && typeof B == "object" && (B.main && v(s[N], "mainChannel", Ot($t(B.main))), B.light && v(s[N], "lightChannel", Ot($t(B.light))), B.dark && v(s[N], "darkChannel", Ot($t(B.dark))), B.contrastText && v(s[N], "contrastTextChannel", Ot($t(B.contrastText))), N === "text" && (qe(s[N], "primary"), qe(s[N], "secondary")), N === "action" && (B.active && qe(s[N], "active"), B.selected && qe(s[N], "selected")));
    });
  }), E = t.reduce((J, s) => Me(J, s), E);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: jc(E)
  }, {
    vars: I,
    generateThemeVars: A,
    generateStyleSheets: Z
  } = lc(E, b);
  return E.vars = I, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([J, s]) => {
    E[J] = s;
  }), E.generateThemeVars = A, E.generateStyleSheets = Z, E.generateSpacing = function() {
    return Po(f.spacing, en(this));
  }, E.getColorSchemeSelector = uc(c), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = a, E.unstable_sxConfig = {
    ...yr,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, E.unstable_sx = function(s) {
    return gt({
      sx: s,
      theme: this
    });
  }, E.toRuntimeSource = Dc, E;
}
function co(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: ln({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Wc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", u = o == null ? void 0 : o[c], f = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Yr(e, ...t);
    let d = r;
    "palette" in e || f[c] && (f[c] !== !0 ? d = f[c].palette : c === "dark" && (d = {
      mode: "dark"
    }));
    const p = Yr({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = c, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, co(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, co(p, "light", f.light)), p;
  }
  return !r && !("light" in f) && c === "light" && (f.light = !0), Lc({
    ...a,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Uc = Wc(), Yc = "$$material", Ze = Ls({
  themeId: Yc,
  defaultTheme: Uc,
  rootShouldForwardProp: ho
}), or = ic;
process.env.NODE_ENV !== "production" && (h.node, h.object.isRequired);
function Ft(e) {
  return oc(e);
}
class ir {
  constructor() {
    Et(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ir();
  }
  static use() {
    const t = Bo(ir.create).current, [r, n] = D.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, D.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Gc(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function qc() {
  return ir.use();
}
function Gc() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Kc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function qr(e, t) {
  return qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, qr(e, t);
}
function Hc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, qr(e, t);
}
const lo = nt.createContext(null);
function Xc(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function un(e, t) {
  var r = function(i) {
    return t && Kt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && hi.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Jc(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var f = n[u][a];
        c[n[u][a]] = r(f);
      }
    c[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function ot(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Qc(e, t) {
  return un(e.children, function(r) {
    return Ht(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ot(r, "appear", e),
      enter: ot(r, "enter", e),
      exit: ot(r, "exit", e)
    });
  });
}
function Zc(e, t, r) {
  var n = un(e.children), o = Jc(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Kt(a)) {
      var c = i in t, u = i in n, f = t[i], d = Kt(f) && !f.props.in;
      u && (!c || d) ? o[i] = Ht(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: ot(a, "exit", e),
        enter: ot(a, "enter", e)
      }) : !u && c && !d ? o[i] = Ht(a, {
        in: !1
      }) : u && c && Kt(f) && (o[i] = Ht(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: ot(a, "exit", e),
        enter: ot(a, "enter", e)
      }));
    }
  }), o;
}
var el = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, tl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, fn = /* @__PURE__ */ function(e) {
  Hc(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Xc(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? Qc(o, c) : Zc(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = un(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = rr({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = Kc(o, ["component", "childFactory"]), u = this.state.contextValue, f = el(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ nt.createElement(lo.Provider, {
      value: u
    }, f) : /* @__PURE__ */ nt.createElement(lo.Provider, {
      value: u
    }, /* @__PURE__ */ nt.createElement(i, c, f));
  }, t;
}(nt.Component);
fn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: h.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: h.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: h.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: h.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: h.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: h.func
} : {};
fn.defaultProps = tl;
function zo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: f
  } = e, [d, p] = D.useState(!1), y = ke(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), C = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, S = ke(r.child, d && r.childLeaving, n && r.childPulsate);
  return !c && !d && p(!0), D.useEffect(() => {
    if (!c && u != null) {
      const g = setTimeout(u, f);
      return () => {
        clearTimeout(g);
      };
    }
  }, [u, c, f]), /* @__PURE__ */ we.jsx("span", {
    className: y,
    style: C,
    children: /* @__PURE__ */ we.jsx("span", {
      className: S
    })
  });
}
process.env.NODE_ENV !== "production" && (zo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object.isRequired,
  className: h.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: h.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: h.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: h.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: h.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: h.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: h.number,
  /**
   * exit delay
   */
  timeout: h.number.isRequired
});
const De = Dt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Gr = 550, rl = 80, nl = sn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ol = sn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, il = sn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, al = Ze("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), sl = Ze(zo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${De.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${nl};
    animation-duration: ${Gr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${De.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${De.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${De.childLeaving} {
    opacity: 0;
    animation-name: ${ol};
    animation-duration: ${Gr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${De.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${il};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Vo = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = Ft({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [u, f] = D.useState([]), d = D.useRef(0), p = D.useRef(null);
  D.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [u]);
  const y = D.useRef(!1), C = tc(), S = D.useRef(null), g = D.useRef(null), m = D.useCallback((E) => {
    const {
      pulsate: b,
      rippleX: I,
      rippleY: A,
      rippleSize: Z,
      cb: J
    } = E;
    f((s) => [...s, /* @__PURE__ */ we.jsx(sl, {
      classes: {
        ripple: ke(i.ripple, De.ripple),
        rippleVisible: ke(i.rippleVisible, De.rippleVisible),
        ripplePulsate: ke(i.ripplePulsate, De.ripplePulsate),
        child: ke(i.child, De.child),
        childLeaving: ke(i.childLeaving, De.childLeaving),
        childPulsate: ke(i.childPulsate, De.childPulsate)
      },
      timeout: Gr,
      pulsate: b,
      rippleX: I,
      rippleY: A,
      rippleSize: Z
    }, d.current)]), d.current += 1, p.current = J;
  }, [i]), w = D.useCallback((E = {}, b = {}, I = () => {
  }) => {
    const {
      pulsate: A = !1,
      center: Z = o || b.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = b;
    if ((E == null ? void 0 : E.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (y.current = !0);
    const s = J ? null : g.current, _ = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, B, Y;
    if (Z || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      N = Math.round(_.width / 2), B = Math.round(_.height / 2);
    else {
      const {
        clientX: ce,
        clientY: se
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      N = Math.round(ce - _.left), B = Math.round(se - _.top);
    }
    if (Z)
      Y = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), Y % 2 === 0 && (Y += 1);
    else {
      const ce = Math.max(Math.abs((s ? s.clientWidth : 0) - N), N) * 2 + 2, se = Math.max(Math.abs((s ? s.clientHeight : 0) - B), B) * 2 + 2;
      Y = Math.sqrt(ce ** 2 + se ** 2);
    }
    E != null && E.touches ? S.current === null && (S.current = () => {
      m({
        pulsate: A,
        rippleX: N,
        rippleY: B,
        rippleSize: Y,
        cb: I
      });
    }, C.start(rl, () => {
      S.current && (S.current(), S.current = null);
    })) : m({
      pulsate: A,
      rippleX: N,
      rippleY: B,
      rippleSize: Y,
      cb: I
    });
  }, [o, m, C]), k = D.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), R = D.useCallback((E, b) => {
    if (C.clear(), (E == null ? void 0 : E.type) === "touchend" && S.current) {
      S.current(), S.current = null, C.start(0, () => {
        R(E, b);
      });
      return;
    }
    S.current = null, f((I) => I.length > 0 ? I.slice(1) : I), p.current = b;
  }, [C]);
  return D.useImperativeHandle(r, () => ({
    pulsate: k,
    start: w,
    stop: R
  }), [k, w, R]), /* @__PURE__ */ we.jsx(al, {
    className: ke(De.root, i.root, a),
    ref: g,
    ...c,
    children: /* @__PURE__ */ we.jsx(fn, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (Vo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: h.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string
});
function cl(e) {
  return vt("MuiButtonBase", e);
}
const ll = Dt("MuiButtonBase", ["root", "disabled", "focusVisible"]), ul = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = ar({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, cl, o);
  return r && n && (a.root += ` ${n}`), a;
}, fl = Ze("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${ll.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), dn = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = Ft({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: f = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: y = !1,
    focusVisibleClassName: C,
    LinkComponent: S = "a",
    onBlur: g,
    onClick: m,
    onContextMenu: w,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: E,
    onKeyDown: b,
    onKeyUp: I,
    onMouseDown: A,
    onMouseLeave: Z,
    onMouseUp: J,
    onTouchEnd: s,
    onTouchMove: _,
    onTouchStart: N,
    tabIndex: B = 0,
    TouchRippleProps: Y,
    touchRippleRef: ce,
    type: se,
    ...ge
  } = n, Ee = D.useRef(null), xe = qc(), T = Qn(xe.ref, ce), [O, z] = D.useState(!1);
  f && O && z(!1), D.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), Ee.current.focus();
    }
  }), []);
  const W = xe.shouldMount && !d && !f;
  D.useEffect(() => {
    O && y && !d && xe.pulsate();
  }, [d, y, O, xe]);
  function j(U, Vt, Lt = p) {
    return Gt((Ct) => (Vt && Vt(Ct), Lt || xe[U](Ct), !0));
  }
  const K = j("start", A), V = j("stop", w), L = j("stop", k), q = j("stop", J), H = j("stop", (U) => {
    O && U.preventDefault(), Z && Z(U);
  }), G = j("start", N), ve = j("stop", s), $ = j("stop", _), Re = j("stop", (U) => {
    eo(U.target) || z(!1), g && g(U);
  }, !1), M = Gt((U) => {
    Ee.current || (Ee.current = U.currentTarget), eo(U.target) && (z(!0), E && E(U)), R && R(U);
  }), $e = () => {
    const U = Ee.current;
    return u && u !== "button" && !(U.tagName === "A" && U.href);
  }, je = Gt((U) => {
    y && !U.repeat && O && U.key === " " && xe.stop(U, () => {
      xe.start(U);
    }), U.target === U.currentTarget && $e() && U.key === " " && U.preventDefault(), b && b(U), U.target === U.currentTarget && $e() && U.key === "Enter" && !f && (U.preventDefault(), m && m(U));
  }), et = Gt((U) => {
    y && U.key === " " && O && !U.defaultPrevented && xe.stop(U, () => {
      xe.pulsate(U);
    }), I && I(U), m && U.target === U.currentTarget && $e() && U.key === " " && !U.defaultPrevented && m(U);
  });
  let tt = u;
  tt === "button" && (ge.href || ge.to) && (tt = S);
  const Ve = {};
  tt === "button" ? (Ve.type = se === void 0 ? "button" : se, Ve.disabled = f) : (!ge.href && !ge.to && (Ve.role = "button"), f && (Ve["aria-disabled"] = f));
  const Cr = Qn(r, Ee), zt = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: f,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: y,
    tabIndex: B,
    focusVisible: O
  }, St = ul(zt);
  return /* @__PURE__ */ we.jsxs(fl, {
    as: tt,
    className: ke(St.root, c),
    ownerState: zt,
    onBlur: Re,
    onClick: m,
    onContextMenu: V,
    onFocus: M,
    onKeyDown: je,
    onKeyUp: et,
    onMouseDown: K,
    onMouseLeave: H,
    onMouseUp: q,
    onDragLeave: L,
    onTouchEnd: ve,
    onTouchMove: $,
    onTouchStart: G,
    ref: Cr,
    tabIndex: f ? -1 : B,
    type: se,
    ...Ve,
    ...ge,
    children: [a, W ? /* @__PURE__ */ we.jsx(Vo, {
      ref: T,
      center: i,
      ...Y
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (dn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Js,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: h.bool,
  /**
   * The content of the component.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Xs,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: h.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: h.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: h.string,
  /**
   * @ignore
   */
  href: h.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: h.elementType,
  /**
   * @ignore
   */
  onBlur: h.func,
  /**
   * @ignore
   */
  onClick: h.func,
  /**
   * @ignore
   */
  onContextMenu: h.func,
  /**
   * @ignore
   */
  onDragLeave: h.func,
  /**
   * @ignore
   */
  onFocus: h.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: h.func,
  /**
   * @ignore
   */
  onKeyDown: h.func,
  /**
   * @ignore
   */
  onKeyUp: h.func,
  /**
   * @ignore
   */
  onMouseDown: h.func,
  /**
   * @ignore
   */
  onMouseLeave: h.func,
  /**
   * @ignore
   */
  onMouseUp: h.func,
  /**
   * @ignore
   */
  onTouchEnd: h.func,
  /**
   * @ignore
   */
  onTouchMove: h.func,
  /**
   * @ignore
   */
  onTouchStart: h.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * @default 0
   */
  tabIndex: h.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: h.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: h.oneOfType([h.func, h.shape({
    current: h.shape({
      pulsate: h.func.isRequired,
      start: h.func.isRequired,
      stop: h.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: h.oneOfType([h.oneOf(["button", "reset", "submit"]), h.string])
});
function dl(e) {
  return typeof e.main == "string";
}
function pl(e, t = []) {
  if (!dl(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Kr(e = []) {
  return ([, t]) => t && pl(t, e);
}
function hl(e) {
  return vt("MuiButton", e);
}
const pt = Dt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Lo = /* @__PURE__ */ D.createContext({});
process.env.NODE_ENV !== "production" && (Lo.displayName = "ButtonGroupContext");
const Wo = /* @__PURE__ */ D.createContext(void 0);
process.env.NODE_ENV !== "production" && (Wo.displayName = "ButtonGroupButtonContext");
const ml = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${pe(t)}`, `size${pe(o)}`, `${i}Size${pe(o)}`, `color${pe(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${pe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${pe(o)}`]
  }, u = ar(c, hl, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, Uo = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], gl = Ze(dn, {
  shouldForwardProp: (e) => ho(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${pe(r.color)}`], t[`size${pe(r.size)}`], t[`${r.variant}Size${pe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(or(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${pt.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${pt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${pt.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${pt.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Kr()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : He(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${pt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${pt.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }]
  };
})), yl = Ze("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${pe(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, ...Uo]
}), bl = Ze("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${pe(r.size)}`]];
  }
})({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, ...Uo]
}), pn = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = D.useContext(Lo), o = D.useContext(Wo), i = er(n, t), a = Ft({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: f = "button",
    className: d,
    disabled: p = !1,
    disableElevation: y = !1,
    disableFocusRipple: C = !1,
    endIcon: S,
    focusVisibleClassName: g,
    fullWidth: m = !1,
    size: w = "medium",
    startIcon: k,
    type: R,
    variant: E = "text",
    ...b
  } = a, I = {
    ...a,
    color: u,
    component: f,
    disabled: p,
    disableElevation: y,
    disableFocusRipple: C,
    fullWidth: m,
    size: w,
    type: R,
    variant: E
  }, A = ml(I), Z = k && /* @__PURE__ */ we.jsx(yl, {
    className: A.startIcon,
    ownerState: I,
    children: k
  }), J = S && /* @__PURE__ */ we.jsx(bl, {
    className: A.endIcon,
    ownerState: I,
    children: S
  }), s = o || "";
  return /* @__PURE__ */ we.jsxs(gl, {
    ownerState: I,
    className: ke(n.className, A.root, d, s),
    component: f,
    disabled: p,
    focusRipple: !C,
    focusVisibleClassName: ke(A.focusVisible, g),
    ref: r,
    type: R,
    ...b,
    classes: A,
    children: [Z, c, J]
  });
});
process.env.NODE_ENV !== "production" && (pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: h.oneOfType([h.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), h.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: h.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: h.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * Element placed after the children.
   */
  endIcon: h.node,
  /**
   * @ignore
   */
  focusVisibleClassName: h.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: h.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: h.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: h.oneOfType([h.oneOf(["small", "medium", "large"]), h.string]),
  /**
   * Element placed before the children.
   */
  startIcon: h.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * @ignore
   */
  type: h.oneOfType([h.oneOf(["button", "reset", "submit"]), h.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: h.oneOfType([h.oneOf(["contained", "outlined", "text"]), h.string])
});
function Pl(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ we.jsx(
      pn,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: t, color: n },
        children: r
      }
    )
  );
}
function kl(e) {
  const {
    bgcolor: t,
    text: r,
    txtcolor: n,
    disabled: o,
    onClick: i,
    size: a,
    borderColor: c,
    borderWidth: u,
    hoverColor: f,
    hoverTxtColor: d
  } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ we.jsx(
      pn,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: {
          backgroundColor: t,
          color: n,
          borderColor: c,
          borderWidth: u,
          "&:hover": {
            backgroundColor: f,
            color: d
          }
        },
        children: r
      }
    )
  );
}
function vl(e) {
  return vt("MuiSvgIcon", e);
}
Dt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Sl = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(r)}`]
  };
  return ar(o, vl, n);
}, Cl = Ze("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${pe(r.color)}`], t[`fontSize${pe(r.fontSize)}`]];
  }
})(or(({
  theme: e
}) => {
  var t, r, n, o, i, a, c, u, f, d, p, y, C, S;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (g) => !g.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((u = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((d = (f = e.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : d.call(f, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, g]) => g && g.main).map(([g]) => {
        var m, w;
        return {
          props: {
            color: g
          },
          style: {
            color: (w = (m = (e.vars ?? e).palette) == null ? void 0 : m[g]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (y = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : y.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (S = (C = (e.vars ?? e).palette) == null ? void 0 : C.action) == null ? void 0 : S.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), Mt = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = Ft({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: f,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: y = "0 0 24 24",
    ...C
  } = n, S = /* @__PURE__ */ D.isValidElement(o) && o.type === "svg", g = {
    ...n,
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: y,
    hasSvgAsChild: S
  }, m = {};
  d || (m.viewBox = y);
  const w = Sl(g);
  return /* @__PURE__ */ we.jsxs(Cl, {
    as: c,
    className: ke(w.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r,
    ...m,
    ...C,
    ...S && o.props,
    ownerState: g,
    children: [S ? o.props.children : o, p ? /* @__PURE__ */ we.jsx("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: h.oneOfType([h.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), h.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: h.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: h.oneOfType([h.oneOf(["inherit", "large", "medium", "small"]), h.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: h.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: h.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: h.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: h.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: h.string
});
Mt && (Mt.muiName = "SvgIcon");
function El(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ we.jsx(Mt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Mt.muiName, /* @__PURE__ */ D.memo(/* @__PURE__ */ D.forwardRef(r));
}
const xl = El(/* @__PURE__ */ we.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function wl(e) {
  return vt("MuiIconButton", e);
}
const Tl = Dt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Rl = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${pe(n)}`, o && `edge${pe(o)}`, `size${pe(i)}`]
  };
  return ar(a, wl, t);
}, Ol = Ze(dn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${pe(r.color)}`], r.edge && t[`edge${pe(r.edge)}`], t[`size${pe(r.size)}`]];
  }
})(or(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.action.active, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), or(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Kr()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Kr()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${Tl.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), Yo = /* @__PURE__ */ D.forwardRef(function(t, r) {
  const n = Ft({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: u = !1,
    disableFocusRipple: f = !1,
    disableRipple: d = !1,
    size: p = "medium",
    ...y
  } = n, C = {
    ...n,
    edge: o,
    color: c,
    disabled: u,
    disableFocusRipple: f,
    disableRipple: d,
    size: p
  }, S = Rl(C);
  return /* @__PURE__ */ we.jsx(Ol, {
    className: ke(S.root, a),
    centerRipple: !0,
    focusRipple: !f,
    disabled: u,
    disableRipple: d,
    ref: r,
    ...y,
    ownerState: C,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: jo(h.node, (e) => D.Children.toArray(e.children).some((r) => /* @__PURE__ */ D.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: h.oneOfType([h.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), h.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: h.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: h.oneOfType([h.oneOf(["small", "medium", "large"]), h.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object])
});
function Al(e) {
  const { favcolor: t, onClick: r, disabled: n } = e;
  return /* @__PURE__ */ we.jsx(Yo, { onClick: r, disabled: n, children: /* @__PURE__ */ we.jsx(xl, { sx: { color: t } }) });
}
export {
  kl as ButtonCustomProps,
  Pl as CustomButton,
  Al as FavCustom
};
//# sourceMappingURL=index.es.js.map
