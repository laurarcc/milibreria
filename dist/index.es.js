var gi = Object.defineProperty;
var yi = (e, t, r) => t in e ? gi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Tt = (e, t, r) => yi(e, typeof t != "symbol" ? t + "" : t, r);
import * as M from "react";
import ot, { forwardRef as bi, useContext as vi, Children as Si, isValidElement as Qt, cloneElement as Zt } from "react";
function Ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wr = { exports: {} }, Rt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function xi() {
  if ($n) return Rt;
  $n = 1;
  var e = ot, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, u, d) {
    var p, h = {}, y = null, C = null;
    d !== void 0 && (y = "" + d), u.key !== void 0 && (y = "" + u.key), u.ref !== void 0 && (C = u.ref);
    for (p in u) n.call(u, p) && !i.hasOwnProperty(p) && (h[p] = u[p]);
    if (c && c.defaultProps) for (p in u = c.defaultProps, u) h[p] === void 0 && (h[p] = u[p]);
    return { $$typeof: t, type: c, key: y, ref: C, props: h, _owner: o.current };
  }
  return Rt.Fragment = r, Rt.jsx = a, Rt.jsxs = a, Rt;
}
var Ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function Ei() {
  return kn || (kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ot, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = Symbol.iterator, g = "@@iterator";
    function m(l) {
      if (l === null || typeof l != "object")
        return null;
      var T = S && l[S] || l[g];
      return typeof T == "function" ? T : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(l) {
      {
        for (var T = arguments.length, P = new Array(T > 1 ? T - 1 : 0), z = 1; z < T; z++)
          P[z - 1] = arguments[z];
        R("error", l, P);
      }
    }
    function R(l, T, P) {
      {
        var z = E.ReactDebugCurrentFrame, ie = z.getStackAddendum();
        ie !== "" && (T += "%s", P = P.concat([ie]));
        var de = P.map(function(ee) {
          return String(ee);
        });
        de.unshift("Warning: " + T), Function.prototype.apply.call(console[l], console, de);
      }
    }
    var x = !1, b = !1, A = !1, I = !1, Q = !1, K;
    K = Symbol.for("react.module.reference");
    function s(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || Q || l === o || l === d || l === p || I || l === C || x || b || A || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === h || l.$$typeof === a || l.$$typeof === c || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === K || l.getModuleId !== void 0));
    }
    function O(l, T, P) {
      var z = l.displayName;
      if (z)
        return z;
      var ie = T.displayName || T.name || "";
      return ie !== "" ? P + "(" + ie + ")" : P;
    }
    function j(l) {
      return l.displayName || "Context";
    }
    function B(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
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
        case d:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            var T = l;
            return j(T) + ".Consumer";
          case a:
            var P = l;
            return j(P._context) + ".Provider";
          case u:
            return O(l, l.render, "ForwardRef");
          case h:
            var z = l.displayName || null;
            return z !== null ? z : B(l.type) || "Memo";
          case y: {
            var ie = l, de = ie._payload, ee = ie._init;
            try {
              return B(ee(de));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, Z = 0, re, me, ye, ue, w, $, F;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function D() {
      {
        if (Z === 0) {
          re = console.log, me = console.info, ye = console.warn, ue = console.error, w = console.group, $ = console.groupCollapsed, F = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: U,
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
        Z++;
      }
    }
    function H() {
      {
        if (Z--, Z === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, l, {
              value: re
            }),
            info: W({}, l, {
              value: me
            }),
            warn: W({}, l, {
              value: ye
            }),
            error: W({}, l, {
              value: ue
            }),
            group: W({}, l, {
              value: w
            }),
            groupCollapsed: W({}, l, {
              value: $
            }),
            groupEnd: W({}, l, {
              value: F
            })
          });
        }
        Z < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = E.ReactCurrentDispatcher, L;
    function q(l, T, P) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (ie) {
            var z = ie.stack.trim().match(/\n( *(at )?)/);
            L = z && z[1] || "";
          }
        return `
` + L + l;
      }
    }
    var X = !1, G;
    {
      var xe = typeof WeakMap == "function" ? WeakMap : Map;
      G = new xe();
    }
    function k(l, T) {
      if (!l || X)
        return "";
      {
        var P = G.get(l);
        if (P !== void 0)
          return P;
      }
      var z;
      X = !0;
      var ie = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var de;
      de = V.current, V.current = null, D();
      try {
        if (T) {
          var ee = function() {
            throw Error();
          };
          if (Object.defineProperty(ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ee, []);
            } catch (Pe) {
              z = Pe;
            }
            Reflect.construct(l, [], ee);
          } else {
            try {
              ee.call();
            } catch (Pe) {
              z = Pe;
            }
            l.call(ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pe) {
            z = Pe;
          }
          l();
        }
      } catch (Pe) {
        if (Pe && z && typeof Pe.stack == "string") {
          for (var J = Pe.stack.split(`
`), _e = z.stack.split(`
`), Se = J.length - 1, Ee = _e.length - 1; Se >= 1 && Ee >= 0 && J[Se] !== _e[Ee]; )
            Ee--;
          for (; Se >= 1 && Ee >= 0; Se--, Ee--)
            if (J[Se] !== _e[Ee]) {
              if (Se !== 1 || Ee !== 1)
                do
                  if (Se--, Ee--, Ee < 0 || J[Se] !== _e[Ee]) {
                    var Be = `
` + J[Se].replace(" at new ", " at ");
                    return l.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", l.displayName)), typeof l == "function" && G.set(l, Be), Be;
                  }
                while (Se >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        X = !1, V.current = de, H(), Error.prepareStackTrace = ie;
      }
      var lt = l ? l.displayName || l.name : "", nt = lt ? q(lt) : "";
      return typeof l == "function" && G.set(l, nt), nt;
    }
    function Re(l, T, P) {
      return k(l, !1);
    }
    function N(l) {
      var T = l.prototype;
      return !!(T && T.isReactComponent);
    }
    function ke(l, T, P) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return k(l, N(l));
      if (typeof l == "string")
        return q(l);
      switch (l) {
        case d:
          return q("Suspense");
        case p:
          return q("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return Re(l.render);
          case h:
            return ke(l.type, T, P);
          case y: {
            var z = l, ie = z._payload, de = z._init;
            try {
              return ke(de(ie), T, P);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, tt = {}, rt = E.ReactDebugCurrentFrame;
    function Le(l) {
      if (l) {
        var T = l._owner, P = ke(l.type, l._source, T ? T.type : null);
        rt.setExtraStackFrame(P);
      } else
        rt.setExtraStackFrame(null);
    }
    function Tr(l, T, P, z, ie) {
      {
        var de = Function.call.bind(je);
        for (var ee in l)
          if (de(l, ee)) {
            var J = void 0;
            try {
              if (typeof l[ee] != "function") {
                var _e = Error((z || "React class") + ": " + P + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              J = l[ee](T, ee, z, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Se) {
              J = Se;
            }
            J && !(J instanceof Error) && (Le(ie), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", P, ee, typeof J), Le(null)), J instanceof Error && !(J.message in tt) && (tt[J.message] = !0, Le(ie), _("Failed %s type: %s", P, J.message), Le(null));
          }
      }
    }
    var Ut = Array.isArray;
    function Et(l) {
      return Ut(l);
    }
    function Y(l) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, P = T && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return P;
      }
    }
    function Yt(l) {
      try {
        return qt(l), !1;
      } catch {
        return !0;
      }
    }
    function qt(l) {
      return "" + l;
    }
    function wt(l) {
      if (Yt(l))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Y(l)), qt(l);
    }
    var st = E.ReactCurrentOwner, Qo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, vn, Sn, Rr;
    Rr = {};
    function Zo(l) {
      if (je.call(l, "ref")) {
        var T = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function ei(l) {
      if (je.call(l, "key")) {
        var T = Object.getOwnPropertyDescriptor(l, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ti(l, T) {
      if (typeof l.ref == "string" && st.current && T && st.current.stateNode !== T) {
        var P = B(st.current.type);
        Rr[P] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(st.current.type), l.ref), Rr[P] = !0);
      }
    }
    function ri(l, T) {
      {
        var P = function() {
          vn || (vn = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function ni(l, T) {
      {
        var P = function() {
          Sn || (Sn = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        P.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var oi = function(l, T, P, z, ie, de, ee) {
      var J = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: T,
        ref: P,
        props: ee,
        // Record the component responsible for creating this element.
        _owner: de
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function ii(l, T, P, z, ie) {
      {
        var de, ee = {}, J = null, _e = null;
        P !== void 0 && (wt(P), J = "" + P), ei(T) && (wt(T.key), J = "" + T.key), Zo(T) && (_e = T.ref, ti(T, ie));
        for (de in T)
          je.call(T, de) && !Qo.hasOwnProperty(de) && (ee[de] = T[de]);
        if (l && l.defaultProps) {
          var Se = l.defaultProps;
          for (de in Se)
            ee[de] === void 0 && (ee[de] = Se[de]);
        }
        if (J || _e) {
          var Ee = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          J && ri(ee, Ee), _e && ni(ee, Ee);
        }
        return oi(l, J, _e, ie, z, st.current, ee);
      }
    }
    var Or = E.ReactCurrentOwner, Cn = E.ReactDebugCurrentFrame;
    function ct(l) {
      if (l) {
        var T = l._owner, P = ke(l.type, l._source, T ? T.type : null);
        Cn.setExtraStackFrame(P);
      } else
        Cn.setExtraStackFrame(null);
    }
    var $r;
    $r = !1;
    function kr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function xn() {
      {
        if (Or.current) {
          var l = B(Or.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function ai(l) {
      return "";
    }
    var En = {};
    function si(l) {
      {
        var T = xn();
        if (!T) {
          var P = typeof l == "string" ? l : l.displayName || l.name;
          P && (T = `

Check the top-level render call using <` + P + ">.");
        }
        return T;
      }
    }
    function wn(l, T) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var P = si(T);
        if (En[P])
          return;
        En[P] = !0;
        var z = "";
        l && l._owner && l._owner !== Or.current && (z = " It was passed a child from " + B(l._owner.type) + "."), ct(l), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, z), ct(null);
      }
    }
    function Tn(l, T) {
      {
        if (typeof l != "object")
          return;
        if (Et(l))
          for (var P = 0; P < l.length; P++) {
            var z = l[P];
            kr(z) && wn(z, T);
          }
        else if (kr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var ie = m(l);
          if (typeof ie == "function" && ie !== l.entries)
            for (var de = ie.call(l), ee; !(ee = de.next()).done; )
              kr(ee.value) && wn(ee.value, T);
        }
      }
    }
    function ci(l) {
      {
        var T = l.type;
        if (T == null || typeof T == "string")
          return;
        var P;
        if (typeof T == "function")
          P = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === h))
          P = T.propTypes;
        else
          return;
        if (P) {
          var z = B(T);
          Tr(P, l.props, "prop", z, l);
        } else if (T.PropTypes !== void 0 && !$r) {
          $r = !0;
          var ie = B(T);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function li(l) {
      {
        for (var T = Object.keys(l.props), P = 0; P < T.length; P++) {
          var z = T[P];
          if (z !== "children" && z !== "key") {
            ct(l), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), ct(null);
            break;
          }
        }
        l.ref !== null && (ct(l), _("Invalid attribute `ref` supplied to `React.Fragment`."), ct(null));
      }
    }
    var Rn = {};
    function On(l, T, P, z, ie, de) {
      {
        var ee = s(l);
        if (!ee) {
          var J = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = ai();
          _e ? J += _e : J += xn();
          var Se;
          l === null ? Se = "null" : Et(l) ? Se = "array" : l !== void 0 && l.$$typeof === t ? (Se = "<" + (B(l.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof l, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, J);
        }
        var Ee = ii(l, T, P, ie, de);
        if (Ee == null)
          return Ee;
        if (ee) {
          var Be = T.children;
          if (Be !== void 0)
            if (z)
              if (Et(Be)) {
                for (var lt = 0; lt < Be.length; lt++)
                  Tn(Be[lt], l);
                Object.freeze && Object.freeze(Be);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tn(Be, l);
        }
        if (je.call(T, "key")) {
          var nt = B(l), Pe = Object.keys(T).filter(function(mi) {
            return mi !== "key";
          }), _r = Pe.length > 0 ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Rn[nt + _r]) {
            var hi = Pe.length > 0 ? "{" + Pe.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _r, nt, hi, nt), Rn[nt + _r] = !0;
          }
        }
        return l === n ? li(Ee) : ci(Ee), Ee;
      }
    }
    function ui(l, T, P) {
      return On(l, T, P, !0);
    }
    function fi(l, T, P) {
      return On(l, T, P, !1);
    }
    var di = fi, pi = ui;
    Ot.Fragment = n, Ot.jsx = di, Ot.jsxs = pi;
  }()), Ot;
}
process.env.NODE_ENV === "production" ? Wr.exports = xi() : Wr.exports = Ei();
var te = Wr.exports, Ur = { exports: {} }, Gt = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function wi() {
  if (_n) return ae;
  _n = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function R(b) {
    if (typeof b == "object" && b !== null) {
      var A = b.$$typeof;
      switch (A) {
        case t:
          switch (b = b.type, b) {
            case u:
            case d:
            case n:
            case i:
            case o:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case p:
                case S:
                case C:
                case a:
                  return b;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function x(b) {
    return R(b) === d;
  }
  return ae.AsyncMode = u, ae.ConcurrentMode = d, ae.ContextConsumer = c, ae.ContextProvider = a, ae.Element = t, ae.ForwardRef = p, ae.Fragment = n, ae.Lazy = S, ae.Memo = C, ae.Portal = r, ae.Profiler = i, ae.StrictMode = o, ae.Suspense = h, ae.isAsyncMode = function(b) {
    return x(b) || R(b) === u;
  }, ae.isConcurrentMode = x, ae.isContextConsumer = function(b) {
    return R(b) === c;
  }, ae.isContextProvider = function(b) {
    return R(b) === a;
  }, ae.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, ae.isForwardRef = function(b) {
    return R(b) === p;
  }, ae.isFragment = function(b) {
    return R(b) === n;
  }, ae.isLazy = function(b) {
    return R(b) === S;
  }, ae.isMemo = function(b) {
    return R(b) === C;
  }, ae.isPortal = function(b) {
    return R(b) === r;
  }, ae.isProfiler = function(b) {
    return R(b) === i;
  }, ae.isStrictMode = function(b) {
    return R(b) === o;
  }, ae.isSuspense = function(b) {
    return R(b) === h;
  }, ae.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === h || b === y || typeof b == "object" && b !== null && (b.$$typeof === S || b.$$typeof === C || b.$$typeof === a || b.$$typeof === c || b.$$typeof === p || b.$$typeof === m || b.$$typeof === E || b.$$typeof === _ || b.$$typeof === g);
  }, ae.typeOf = R, ae;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function Ti() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, C = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function R(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === d || k === i || k === o || k === h || k === y || typeof k == "object" && k !== null && (k.$$typeof === S || k.$$typeof === C || k.$$typeof === a || k.$$typeof === c || k.$$typeof === p || k.$$typeof === m || k.$$typeof === E || k.$$typeof === _ || k.$$typeof === g);
    }
    function x(k) {
      if (typeof k == "object" && k !== null) {
        var Re = k.$$typeof;
        switch (Re) {
          case t:
            var N = k.type;
            switch (N) {
              case u:
              case d:
              case n:
              case i:
              case o:
              case h:
                return N;
              default:
                var ke = N && N.$$typeof;
                switch (ke) {
                  case c:
                  case p:
                  case S:
                  case C:
                  case a:
                    return ke;
                  default:
                    return Re;
                }
            }
          case r:
            return Re;
        }
      }
    }
    var b = u, A = d, I = c, Q = a, K = t, s = p, O = n, j = S, B = C, W = r, Z = i, re = o, me = h, ye = !1;
    function ue(k) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(k) || x(k) === u;
    }
    function w(k) {
      return x(k) === d;
    }
    function $(k) {
      return x(k) === c;
    }
    function F(k) {
      return x(k) === a;
    }
    function U(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function D(k) {
      return x(k) === p;
    }
    function H(k) {
      return x(k) === n;
    }
    function V(k) {
      return x(k) === S;
    }
    function L(k) {
      return x(k) === C;
    }
    function q(k) {
      return x(k) === r;
    }
    function X(k) {
      return x(k) === i;
    }
    function G(k) {
      return x(k) === o;
    }
    function xe(k) {
      return x(k) === h;
    }
    se.AsyncMode = b, se.ConcurrentMode = A, se.ContextConsumer = I, se.ContextProvider = Q, se.Element = K, se.ForwardRef = s, se.Fragment = O, se.Lazy = j, se.Memo = B, se.Portal = W, se.Profiler = Z, se.StrictMode = re, se.Suspense = me, se.isAsyncMode = ue, se.isConcurrentMode = w, se.isContextConsumer = $, se.isContextProvider = F, se.isElement = U, se.isForwardRef = D, se.isFragment = H, se.isLazy = V, se.isMemo = L, se.isPortal = q, se.isProfiler = X, se.isStrictMode = G, se.isSuspense = xe, se.isValidElementType = R, se.typeOf = x;
  }()), se;
}
var An;
function Zr() {
  return An || (An = 1, process.env.NODE_ENV === "production" ? Gt.exports = wi() : Gt.exports = Ti()), Gt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Pr, In;
function Ri() {
  if (In) return Pr;
  In = 1;
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
      var u = Object.getOwnPropertyNames(a).map(function(p) {
        return a[p];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Pr = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), d, p = 1; p < arguments.length; p++) {
      c = Object(arguments[p]);
      for (var h in c)
        t.call(c, h) && (u[h] = c[h]);
      if (e) {
        d = e(c);
        for (var y = 0; y < d.length; y++)
          r.call(c, d[y]) && (u[d[y]] = c[d[y]]);
      }
    }
    return u;
  }, Pr;
}
var Ar, Mn;
function en() {
  if (Mn) return Ar;
  Mn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ar = e, Ar;
}
var Ir, Nn;
function go() {
  return Nn || (Nn = 1, Ir = Function.call.bind(Object.prototype.hasOwnProperty)), Ir;
}
var Mr, jn;
function Oi() {
  if (jn) return Mr;
  jn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = en(), r = {}, n = go();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var h;
          try {
            if (typeof i[p] != "function") {
              var y = Error(
                (u || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = i[p](a, p, u, c, null, t);
          } catch (S) {
            h = S;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var C = d ? d() : "";
            e(
              "Failed " + c + " type: " + h.message + (C ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Mr = o, Mr;
}
var Nr, Bn;
function $i() {
  if (Bn) return Nr;
  Bn = 1;
  var e = Zr(), t = Ri(), r = en(), n = go(), o = Oi(), i = function() {
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
  return Nr = function(c, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function h(w) {
      var $ = w && (d && w[d] || w[p]);
      if (typeof $ == "function")
        return $;
    }
    var y = "<<anonymous>>", C = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: _(),
      arrayOf: R,
      element: x(),
      elementType: b(),
      instanceOf: A,
      node: s(),
      objectOf: Q,
      oneOf: I,
      oneOfType: K,
      shape: j,
      exact: B
    };
    function S(w, $) {
      return w === $ ? w !== 0 || 1 / w === 1 / $ : w !== w && $ !== $;
    }
    function g(w, $) {
      this.message = w, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(w) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, F = 0;
      function U(H, V, L, q, X, G, xe) {
        if (q = q || y, G = G || L, xe !== r) {
          if (u) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = q + ":" + L;
            !$[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[Re] = !0, F++);
          }
        }
        return V[L] == null ? H ? V[L] === null ? new g("The " + X + " `" + G + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new g("The " + X + " `" + G + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : w(V, L, q, X, G);
      }
      var D = U.bind(null, !1);
      return D.isRequired = U.bind(null, !0), D;
    }
    function E(w) {
      function $(F, U, D, H, V, L) {
        var q = F[U], X = re(q);
        if (X !== w) {
          var G = me(q);
          return new g(
            "Invalid " + H + " `" + V + "` of type " + ("`" + G + "` supplied to `" + D + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return m($);
    }
    function _() {
      return m(a);
    }
    function R(w) {
      function $(F, U, D, H, V) {
        if (typeof w != "function")
          return new g("Property `" + V + "` of component `" + D + "` has invalid PropType notation inside arrayOf.");
        var L = F[U];
        if (!Array.isArray(L)) {
          var q = re(L);
          return new g("Invalid " + H + " `" + V + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected an array."));
        }
        for (var X = 0; X < L.length; X++) {
          var G = w(L, X, D, H, V + "[" + X + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return m($);
    }
    function x() {
      function w($, F, U, D, H) {
        var V = $[F];
        if (!c(V)) {
          var L = re(V);
          return new g("Invalid " + D + " `" + H + "` of type " + ("`" + L + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(w);
    }
    function b() {
      function w($, F, U, D, H) {
        var V = $[F];
        if (!e.isValidElementType(V)) {
          var L = re(V);
          return new g("Invalid " + D + " `" + H + "` of type " + ("`" + L + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(w);
    }
    function A(w) {
      function $(F, U, D, H, V) {
        if (!(F[U] instanceof w)) {
          var L = w.name || y, q = ue(F[U]);
          return new g("Invalid " + H + " `" + V + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return m($);
    }
    function I(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(F, U, D, H, V) {
        for (var L = F[U], q = 0; q < w.length; q++)
          if (S(L, w[q]))
            return null;
        var X = JSON.stringify(w, function(xe, k) {
          var Re = me(k);
          return Re === "symbol" ? String(k) : k;
        });
        return new g("Invalid " + H + " `" + V + "` of value `" + String(L) + "` " + ("supplied to `" + D + "`, expected one of " + X + "."));
      }
      return m($);
    }
    function Q(w) {
      function $(F, U, D, H, V) {
        if (typeof w != "function")
          return new g("Property `" + V + "` of component `" + D + "` has invalid PropType notation inside objectOf.");
        var L = F[U], q = re(L);
        if (q !== "object")
          return new g("Invalid " + H + " `" + V + "` of type " + ("`" + q + "` supplied to `" + D + "`, expected an object."));
        for (var X in L)
          if (n(L, X)) {
            var G = w(L, X, D, H, V + "." + X, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return m($);
    }
    function K(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < w.length; $++) {
        var F = w[$];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ye(F) + " at index " + $ + "."
          ), a;
      }
      function U(D, H, V, L, q) {
        for (var X = [], G = 0; G < w.length; G++) {
          var xe = w[G], k = xe(D, H, V, L, q, r);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && X.push(k.data.expectedType);
        }
        var Re = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new g("Invalid " + L + " `" + q + "` supplied to " + ("`" + V + "`" + Re + "."));
      }
      return m(U);
    }
    function s() {
      function w($, F, U, D, H) {
        return W($[F]) ? null : new g("Invalid " + D + " `" + H + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return m(w);
    }
    function O(w, $, F, U, D) {
      return new g(
        (w || "React class") + ": " + $ + " type `" + F + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + D + "`."
      );
    }
    function j(w) {
      function $(F, U, D, H, V) {
        var L = F[U], q = re(L);
        if (q !== "object")
          return new g("Invalid " + H + " `" + V + "` of type `" + q + "` " + ("supplied to `" + D + "`, expected `object`."));
        for (var X in w) {
          var G = w[X];
          if (typeof G != "function")
            return O(D, H, V, X, me(G));
          var xe = G(L, X, D, H, V + "." + X, r);
          if (xe)
            return xe;
        }
        return null;
      }
      return m($);
    }
    function B(w) {
      function $(F, U, D, H, V) {
        var L = F[U], q = re(L);
        if (q !== "object")
          return new g("Invalid " + H + " `" + V + "` of type `" + q + "` " + ("supplied to `" + D + "`, expected `object`."));
        var X = t({}, F[U], w);
        for (var G in X) {
          var xe = w[G];
          if (n(w, G) && typeof xe != "function")
            return O(D, H, V, G, me(xe));
          if (!xe)
            return new g(
              "Invalid " + H + " `" + V + "` key `" + G + "` supplied to `" + D + "`.\nBad object: " + JSON.stringify(F[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var k = xe(L, G, D, H, V + "." + G, r);
          if (k)
            return k;
        }
        return null;
      }
      return m($);
    }
    function W(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(W);
          if (w === null || c(w))
            return !0;
          var $ = h(w);
          if ($) {
            var F = $.call(w), U;
            if ($ !== w.entries) {
              for (; !(U = F.next()).done; )
                if (!W(U.value))
                  return !1;
            } else
              for (; !(U = F.next()).done; ) {
                var D = U.value;
                if (D && !W(D[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Z(w, $) {
      return w === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function re(w) {
      var $ = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : Z($, w) ? "symbol" : $;
    }
    function me(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var $ = re(w);
      if ($ === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function ye(w) {
      var $ = me(w);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function ue(w) {
      return !w.constructor || !w.constructor.name ? y : w.constructor.name;
    }
    return C.checkPropTypes = o, C.resetWarningCache = o.resetWarningCache, C.PropTypes = C, C;
  }, Nr;
}
var jr, Dn;
function ki() {
  if (Dn) return jr;
  Dn = 1;
  var e = en();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, jr = function() {
    function n(a, c, u, d, p, h) {
      if (h !== e) {
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
  }, jr;
}
if (process.env.NODE_ENV !== "production") {
  var _i = Zr(), Pi = !0;
  Ur.exports = $i()(_i.isElement, Pi);
} else
  Ur.exports = ki()();
var Ai = Ur.exports;
const f = /* @__PURE__ */ Ci(Ai);
function yo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = yo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function $e() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = yo(e)) && (n && (n += " "), n += t);
  return n;
}
function or(e, t) {
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
              r[o][u] = or(i[u], a[u]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function St(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let u = 0; u < i.length; u += 1) {
      const d = i[u];
      d && (a += (c === !0 ? "" : " ") + t(d), c = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function Je(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Ii(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function tn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ii(e, t, r);
}
function Mi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Qe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Qe(Mi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Je(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Je(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ni = (e) => {
  const t = Qe(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, _t = (e, t) => {
  try {
    return Ni(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function lr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function bo(e) {
  e = Qe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, p = (d + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), lr({
    type: c,
    values: u
  });
}
function Yr(e) {
  e = Qe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Qe(bo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function zn(e, t) {
  const r = Yr(e), n = Yr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function qe(e, t) {
  return e = Qe(e), t = tn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, lr(e);
}
function Ht(e, t, r) {
  try {
    return qe(e, t);
  } catch {
    return e;
  }
}
function rn(e, t) {
  if (e = Qe(e), t = tn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return lr(e);
}
function pe(e, t, r) {
  try {
    return rn(e, t);
  } catch {
    return e;
  }
}
function nn(e, t) {
  if (e = Qe(e), t = tn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return lr(e);
}
function he(e, t, r) {
  try {
    return nn(e, t);
  } catch {
    return e;
  }
}
function ji(e, t = 0.15) {
  return Yr(e) > 0.5 ? rn(e, t) : nn(e, t);
}
function Kt(e, t, r) {
  try {
    return ji(e, t);
  } catch {
    return e;
  }
}
function Bi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ur = (e) => Bi(e) && e !== "classes";
function fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Je(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ke(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function vo(e) {
  if (!Ke(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = vo(e[r]);
  }), t;
}
function Me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ke(e) && Ke(t) && Object.keys(t).forEach((o) => {
    Ke(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ke(e[o]) ? n[o] = Me(e[o], t[o], r) : r.clone ? n[o] = Ke(t[o]) ? vo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function At(e, t) {
  return t ? Me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ze = process.env.NODE_ENV !== "production" ? f.oneOfType([f.number, f.string, f.object, f.array]) : {};
function Di(e, t) {
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
function zi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Fi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Je(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Vi(e) {
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
const fr = {
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
}, Fn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${fr[e]}px)`
}, Li = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : fr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Xe(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Fn;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Fn;
    return Object.keys(t).reduce((a, c) => {
      if (zi(i.keys, c)) {
        const u = Fi(n.containerQueries ? n : Li, c);
        u && (a[u] = r(t[c], c));
      } else if (Object.keys(i.values || fr).includes(c)) {
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
function Wi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Ui(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function dr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ir(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = dr(e, r) || n, t && (o = t(o, n, e)), o;
}
function Ce(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, d = dr(u, n) || {};
    return Xe(a, c, (h) => {
      let y = ir(d, o, h);
      return h === y && typeof h == "string" && (y = ir(d, o, `${t}${h === "default" ? "" : fe(h)}`, h)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ze
  } : {}, i.filterProps = [t], i;
}
function Yi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const qi = {
  m: "margin",
  p: "padding"
}, Gi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Vn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hi = Yi((e) => {
  if (e.length > 2)
    if (Vn[e])
      e = Vn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = qi[t], o = Gi[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), pr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], hr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ki = [...pr, ...hr];
function Ft(e, t, r, n) {
  const o = dr(e, t, !0) ?? r;
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
function on(e) {
  return Ft(e, "spacing", 8, "spacing");
}
function Vt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Xi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Vt(t, r), n), {});
}
function Ji(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Hi(r), i = Xi(o, n), a = e[r];
  return Xe(e, a, i);
}
function So(e, t) {
  const r = on(e.theme);
  return Object.keys(e).map((n) => Ji(e, t, n, r)).reduce(At, {});
}
function be(e) {
  return So(e, pr);
}
be.propTypes = process.env.NODE_ENV !== "production" ? pr.reduce((e, t) => (e[t] = Ze, e), {}) : {};
be.filterProps = pr;
function ve(e) {
  return So(e, hr);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? hr.reduce((e, t) => (e[t] = Ze, e), {}) : {};
ve.filterProps = hr;
process.env.NODE_ENV !== "production" && Ki.reduce((e, t) => (e[t] = Ze, e), {});
function mr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? At(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ze(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Fe(e, t) {
  return Ce({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Qi = Fe("border", ze), Zi = Fe("borderTop", ze), ea = Fe("borderRight", ze), ta = Fe("borderBottom", ze), ra = Fe("borderLeft", ze), na = Fe("borderColor"), oa = Fe("borderTopColor"), ia = Fe("borderRightColor"), aa = Fe("borderBottomColor"), sa = Fe("borderLeftColor"), ca = Fe("outline", ze), la = Fe("outlineColor"), gr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ft(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Vt(t, n)
    });
    return Xe(e, e.borderRadius, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ze
} : {};
gr.filterProps = ["borderRadius"];
mr(Qi, Zi, ea, ta, ra, na, oa, ia, aa, sa, gr, ca, la);
const yr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ft(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Vt(t, n)
    });
    return Xe(e, e.gap, r);
  }
  return null;
};
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ze
} : {};
yr.filterProps = ["gap"];
const br = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ft(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Vt(t, n)
    });
    return Xe(e, e.columnGap, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ze
} : {};
br.filterProps = ["columnGap"];
const vr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ft(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Vt(t, n)
    });
    return Xe(e, e.rowGap, r);
  }
  return null;
};
vr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ze
} : {};
vr.filterProps = ["rowGap"];
const ua = Ce({
  prop: "gridColumn"
}), fa = Ce({
  prop: "gridRow"
}), da = Ce({
  prop: "gridAutoFlow"
}), pa = Ce({
  prop: "gridAutoColumns"
}), ha = Ce({
  prop: "gridAutoRows"
}), ma = Ce({
  prop: "gridTemplateColumns"
}), ga = Ce({
  prop: "gridTemplateRows"
}), ya = Ce({
  prop: "gridTemplateAreas"
}), ba = Ce({
  prop: "gridArea"
});
mr(yr, br, vr, ua, fa, da, pa, ha, ma, ga, ya, ba);
function gt(e, t) {
  return t === "grey" ? t : e;
}
const va = Ce({
  prop: "color",
  themeKey: "palette",
  transform: gt
}), Sa = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: gt
}), Ca = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: gt
});
mr(va, Sa, Ca);
function Ie(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xa = Ce({
  prop: "width",
  transform: Ie
}), an = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, u;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || fr[r];
      return n ? ((u = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ie(r)
      };
    };
    return Xe(e, e.maxWidth, t);
  }
  return null;
};
an.filterProps = ["maxWidth"];
const Ea = Ce({
  prop: "minWidth",
  transform: Ie
}), wa = Ce({
  prop: "height",
  transform: Ie
}), Ta = Ce({
  prop: "maxHeight",
  transform: Ie
}), Ra = Ce({
  prop: "minHeight",
  transform: Ie
});
Ce({
  prop: "size",
  cssProperty: "width",
  transform: Ie
});
Ce({
  prop: "size",
  cssProperty: "height",
  transform: Ie
});
const Oa = Ce({
  prop: "boxSizing"
});
mr(xa, an, Ea, wa, Ta, Ra, Oa);
const Sr = {
  // borders
  border: {
    themeKey: "borders",
    transform: ze
  },
  borderTop: {
    themeKey: "borders",
    transform: ze
  },
  borderRight: {
    themeKey: "borders",
    transform: ze
  },
  borderBottom: {
    themeKey: "borders",
    transform: ze
  },
  borderLeft: {
    themeKey: "borders",
    transform: ze
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
    transform: ze
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: gr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: gt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: gt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: gt
  },
  // spacing
  p: {
    style: ve
  },
  pt: {
    style: ve
  },
  pr: {
    style: ve
  },
  pb: {
    style: ve
  },
  pl: {
    style: ve
  },
  px: {
    style: ve
  },
  py: {
    style: ve
  },
  padding: {
    style: ve
  },
  paddingTop: {
    style: ve
  },
  paddingRight: {
    style: ve
  },
  paddingBottom: {
    style: ve
  },
  paddingLeft: {
    style: ve
  },
  paddingX: {
    style: ve
  },
  paddingY: {
    style: ve
  },
  paddingInline: {
    style: ve
  },
  paddingInlineStart: {
    style: ve
  },
  paddingInlineEnd: {
    style: ve
  },
  paddingBlock: {
    style: ve
  },
  paddingBlockStart: {
    style: ve
  },
  paddingBlockEnd: {
    style: ve
  },
  m: {
    style: be
  },
  mt: {
    style: be
  },
  mr: {
    style: be
  },
  mb: {
    style: be
  },
  ml: {
    style: be
  },
  mx: {
    style: be
  },
  my: {
    style: be
  },
  margin: {
    style: be
  },
  marginTop: {
    style: be
  },
  marginRight: {
    style: be
  },
  marginBottom: {
    style: be
  },
  marginLeft: {
    style: be
  },
  marginX: {
    style: be
  },
  marginY: {
    style: be
  },
  marginInline: {
    style: be
  },
  marginInlineStart: {
    style: be
  },
  marginInlineEnd: {
    style: be
  },
  marginBlock: {
    style: be
  },
  marginBlockStart: {
    style: be
  },
  marginBlockEnd: {
    style: be
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
    style: yr
  },
  rowGap: {
    style: vr
  },
  columnGap: {
    style: br
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
    style: an
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
function $a(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function ka(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _a() {
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
      themeKey: d,
      transform: p,
      style: h
    } = c;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = dr(o, d) || {};
    return h ? h(a) : Xe(a, n, (S) => {
      let g = ir(y, p, S);
      return S === g && typeof S == "string" && (g = ir(y, p, `${r}${S === "default" ? "" : fe(S)}`, S)), u === !1 ? g : {
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
    const i = o.unstable_sxConfig ?? Sr;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(o);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Wi(o.breakpoints), p = Object.keys(d);
      let h = d;
      return Object.keys(u).forEach((y) => {
        const C = ka(u[y], o);
        if (C != null)
          if (typeof C == "object")
            if (i[y])
              h = At(h, e(y, C, o, i));
            else {
              const S = Xe({
                theme: o
              }, C, (g) => ({
                [y]: g
              }));
              $a(S, C) ? h[y] = t({
                sx: C,
                theme: o
              }) : h = At(h, S);
            }
          else
            h = At(h, e(y, C, o, i));
      }), Di(o, Ui(p, h));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const bt = _a();
bt.filterProps = ["sx"];
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ar.apply(null, arguments);
}
function Co(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Pa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Aa = /* @__PURE__ */ Co(
  function(e) {
    return Pa.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ia = !1;
function Ma(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Na(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ja = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !Ia : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Na(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ma(o);
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
}(), Oe = "-ms-", sr = "-moz-", ne = "-webkit-", xo = "comm", sn = "rule", cn = "decl", Ba = "@import", Eo = "@keyframes", Da = "@layer", za = Math.abs, Cr = String.fromCharCode, Fa = Object.assign;
function Va(e, t) {
  return Te(e, 0) ^ 45 ? (((t << 2 ^ Te(e, 0)) << 2 ^ Te(e, 1)) << 2 ^ Te(e, 2)) << 2 ^ Te(e, 3) : 0;
}
function wo(e) {
  return e.trim();
}
function La(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function oe(e, t, r) {
  return e.replace(t, r);
}
function qr(e, t) {
  return e.indexOf(t);
}
function Te(e, t) {
  return e.charCodeAt(t) | 0;
}
function It(e, t, r) {
  return e.slice(t, r);
}
function Ue(e) {
  return e.length;
}
function ln(e) {
  return e.length;
}
function Xt(e, t) {
  return t.push(e), e;
}
function Wa(e, t) {
  return e.map(t).join("");
}
var xr = 1, vt = 1, To = 0, Ae = 0, we = 0, Ct = "";
function Er(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: xr, column: vt, length: a, return: "" };
}
function $t(e, t) {
  return Fa(Er("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ua() {
  return we;
}
function Ya() {
  return we = Ae > 0 ? Te(Ct, --Ae) : 0, vt--, we === 10 && (vt = 1, xr--), we;
}
function Ne() {
  return we = Ae < To ? Te(Ct, Ae++) : 0, vt++, we === 10 && (vt = 1, xr++), we;
}
function Ge() {
  return Te(Ct, Ae);
}
function er() {
  return Ae;
}
function Lt(e, t) {
  return It(Ct, e, t);
}
function Mt(e) {
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
function Ro(e) {
  return xr = vt = 1, To = Ue(Ct = e), Ae = 0, [];
}
function Oo(e) {
  return Ct = "", e;
}
function tr(e) {
  return wo(Lt(Ae - 1, Gr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qa(e) {
  for (; (we = Ge()) && we < 33; )
    Ne();
  return Mt(e) > 2 || Mt(we) > 3 ? "" : " ";
}
function Ga(e, t) {
  for (; --t && Ne() && !(we < 48 || we > 102 || we > 57 && we < 65 || we > 70 && we < 97); )
    ;
  return Lt(e, er() + (t < 6 && Ge() == 32 && Ne() == 32));
}
function Gr(e) {
  for (; Ne(); )
    switch (we) {
      case e:
        return Ae;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Gr(we);
        break;
      case 40:
        e === 41 && Gr(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Ae;
}
function Ha(e, t) {
  for (; Ne() && e + we !== 57; )
    if (e + we === 84 && Ge() === 47)
      break;
  return "/*" + Lt(t, Ae - 1) + "*" + Cr(e === 47 ? e : Ne());
}
function Ka(e) {
  for (; !Mt(Ge()); )
    Ne();
  return Lt(e, Ae);
}
function Xa(e) {
  return Oo(rr("", null, null, null, [""], e = Ro(e), 0, [0], e));
}
function rr(e, t, r, n, o, i, a, c, u) {
  for (var d = 0, p = 0, h = a, y = 0, C = 0, S = 0, g = 1, m = 1, E = 1, _ = 0, R = "", x = o, b = i, A = n, I = R; m; )
    switch (S = _, _ = Ne()) {
      case 40:
        if (S != 108 && Te(I, h - 1) == 58) {
          qr(I += oe(tr(_), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += tr(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += qa(S);
        break;
      case 92:
        I += Ga(er() - 1, 7);
        continue;
      case 47:
        switch (Ge()) {
          case 42:
          case 47:
            Xt(Ja(Ha(Ne(), er()), t, r), u);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * g:
        c[d++] = Ue(I) * E;
      case 125 * g:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            m = 0;
          case 59 + p:
            E == -1 && (I = oe(I, /\f/g, "")), C > 0 && Ue(I) - h && Xt(C > 32 ? Wn(I + ";", n, r, h - 1) : Wn(oe(I, " ", "") + ";", n, r, h - 2), u);
            break;
          case 59:
            I += ";";
          default:
            if (Xt(A = Ln(I, t, r, d, p, o, c, R, x = [], b = [], h), i), _ === 123)
              if (p === 0)
                rr(I, t, A, A, x, i, h, c, b);
              else
                switch (y === 99 && Te(I, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rr(e, A, A, n && Xt(Ln(e, A, A, 0, 0, o, c, R, o, x = [], h), b), o, b, h, c, n ? x : b);
                    break;
                  default:
                    rr(I, A, A, A, [""], b, 0, c, b);
                }
        }
        d = p = C = 0, g = E = 1, R = I = "", h = a;
        break;
      case 58:
        h = 1 + Ue(I), C = S;
      default:
        if (g < 1) {
          if (_ == 123)
            --g;
          else if (_ == 125 && g++ == 0 && Ya() == 125)
            continue;
        }
        switch (I += Cr(_), _ * g) {
          case 38:
            E = p > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            c[d++] = (Ue(I) - 1) * E, E = 1;
            break;
          case 64:
            Ge() === 45 && (I += tr(Ne())), y = Ge(), p = h = Ue(R = I += Ka(er())), _++;
            break;
          case 45:
            S === 45 && Ue(I) == 2 && (g = 0);
        }
    }
  return i;
}
function Ln(e, t, r, n, o, i, a, c, u, d, p) {
  for (var h = o - 1, y = o === 0 ? i : [""], C = ln(y), S = 0, g = 0, m = 0; S < n; ++S)
    for (var E = 0, _ = It(e, h + 1, h = za(g = a[S])), R = e; E < C; ++E)
      (R = wo(g > 0 ? y[E] + " " + _ : oe(_, /&\f/g, y[E]))) && (u[m++] = R);
  return Er(e, t, r, o === 0 ? sn : c, u, d, p);
}
function Ja(e, t, r) {
  return Er(e, t, r, xo, Cr(Ua()), It(e, 2, -2), 0);
}
function Wn(e, t, r, n) {
  return Er(e, t, r, cn, It(e, 0, n), It(e, n + 1, -1), n);
}
function yt(e, t) {
  for (var r = "", n = ln(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Qa(e, t, r, n) {
  switch (e.type) {
    case Da:
      if (e.children.length) break;
    case Ba:
    case cn:
      return e.return = e.return || e.value;
    case xo:
      return "";
    case Eo:
      return e.return = e.value + "{" + yt(e.children, n) + "}";
    case sn:
      e.value = e.props.join(",");
  }
  return Ue(r = yt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Za(e) {
  var t = ln(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function es(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ts = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ge(), o === 38 && i === 12 && (r[n] = 1), !Mt(i); )
    Ne();
  return Lt(t, Ae);
}, rs = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Mt(o)) {
      case 0:
        o === 38 && Ge() === 12 && (r[n] = 1), t[n] += ts(Ae - 1, r, n);
        break;
      case 2:
        t[n] += tr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ge() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Cr(o);
    }
  while (o = Ne());
  return t;
}, ns = function(t, r) {
  return Oo(rs(Ro(t), r));
}, Un = /* @__PURE__ */ new WeakMap(), os = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Un.get(n)) && !o) {
      Un.set(t, !0);
      for (var i = [], a = ns(r, i), c = n.props, u = 0, d = 0; u < a.length; u++)
        for (var p = 0; p < c.length; p++, d++)
          t.props[d] = i[u] ? a[u].replace(/&\f/g, c[p]) : c[p] + " " + a[u];
    }
  }
}, is = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function $o(e, t) {
  switch (Va(e, t)) {
    case 5103:
      return ne + "print-" + e + e;
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
      return ne + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ne + e + sr + e + Oe + e + e;
    case 6828:
    case 4268:
      return ne + e + Oe + e + e;
    case 6165:
      return ne + e + Oe + "flex-" + e + e;
    case 5187:
      return ne + e + oe(e, /(\w+).+(:[^]+)/, ne + "box-$1$2" + Oe + "flex-$1$2") + e;
    case 5443:
      return ne + e + Oe + "flex-item-" + oe(e, /flex-|-self/, "") + e;
    case 4675:
      return ne + e + Oe + "flex-line-pack" + oe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ne + e + Oe + oe(e, "shrink", "negative") + e;
    case 5292:
      return ne + e + Oe + oe(e, "basis", "preferred-size") + e;
    case 6060:
      return ne + "box-" + oe(e, "-grow", "") + ne + e + Oe + oe(e, "grow", "positive") + e;
    case 4554:
      return ne + oe(e, /([^-])(transform)/g, "$1" + ne + "$2") + e;
    case 6187:
      return oe(oe(oe(e, /(zoom-|grab)/, ne + "$1"), /(image-set)/, ne + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return oe(e, /(image-set\([^]*)/, ne + "$1$`$1");
    case 4968:
      return oe(oe(e, /(.+:)(flex-)?(.*)/, ne + "box-pack:$3" + Oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ne + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return oe(e, /(.+)-inline(.+)/, ne + "$1$2") + e;
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
      if (Ue(e) - 1 - t > 6) switch (Te(e, t + 1)) {
        case 109:
          if (Te(e, t + 4) !== 45) break;
        case 102:
          return oe(e, /(.+:)(.+)-([^]+)/, "$1" + ne + "$2-$3$1" + sr + (Te(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~qr(e, "stretch") ? $o(oe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Te(e, t + 1) !== 115) break;
    case 6444:
      switch (Te(e, Ue(e) - 3 - (~qr(e, "!important") && 10))) {
        case 107:
          return oe(e, ":", ":" + ne) + e;
        case 101:
          return oe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ne + (Te(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ne + "$2$3$1" + Oe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Te(e, t + 11)) {
        case 114:
          return ne + e + Oe + oe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ne + e + Oe + oe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ne + e + Oe + oe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ne + e + Oe + e + e;
  }
  return e;
}
var as = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case cn:
      t.return = $o(t.value, t.length);
      break;
    case Eo:
      return yt([$t(t, {
        value: oe(t.value, "@", "@" + ne)
      })], o);
    case sn:
      if (t.length) return Wa(t.props, function(i) {
        switch (La(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return yt([$t(t, {
              props: [oe(i, /:(read-\w+)/, ":" + sr + "$1")]
            })], o);
          case "::placeholder":
            return yt([$t(t, {
              props: [oe(i, /:(plac\w+)/, ":" + ne + "input-$1")]
            }), $t(t, {
              props: [oe(i, /:(plac\w+)/, ":" + sr + "$1")]
            }), $t(t, {
              props: [oe(i, /:(plac\w+)/, Oe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, ss = [as], cs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(g) {
      var m = g.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(g), g.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ss, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(g) {
      for (var m = g.getAttribute("data-emotion").split(" "), E = 1; E < m.length; E++)
        i[m[E]] = !0;
      c.push(g);
    }
  );
  var u, d = [os, is];
  {
    var p, h = [Qa, es(function(g) {
      p.insert(g);
    })], y = Za(d.concat(o, h)), C = function(m) {
      return yt(Xa(m), y);
    };
    u = function(m, E, _, R) {
      p = _, C(m ? m + "{" + E.styles + "}" : E.styles), R && (S.inserted[E.name] = !0);
    };
  }
  var S = {
    key: r,
    sheet: new ja({
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
}, ko = Zr(), ls = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, us = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, _o = {};
_o[ko.ForwardRef] = ls;
_o[ko.Memo] = us;
var fs = !0;
function ds(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Po = function(t, r, n) {
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
  fs === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ps = function(t, r, n) {
  Po(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function hs(e) {
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
var ms = {
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
}, gs = !1, ys = /[A-Z]|^ms/g, bs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ao = function(t) {
  return t.charCodeAt(1) === 45;
}, Yn = function(t) {
  return t != null && typeof t != "boolean";
}, Br = /* @__PURE__ */ Co(function(e) {
  return Ao(e) ? e : e.replace(ys, "-$&").toLowerCase();
}), qn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(bs, function(n, o, i) {
          return Ye = {
            name: o,
            styles: i,
            next: Ye
          }, o;
        });
  }
  return ms[t] !== 1 && !Ao(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, vs = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Nt(e, t, r) {
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
        return Ye = {
          name: o.name,
          styles: o.styles,
          next: Ye
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ye = {
              name: a.name,
              styles: a.styles,
              next: Ye
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return Ss(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Ye, d = r(e);
        return Ye = u, Nt(e, t, d);
      }
      break;
    }
  }
  var p = r;
  if (t == null)
    return p;
  var h = t[p];
  return h !== void 0 ? h : p;
}
function Ss(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Nt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : Yn(c) && (n += Br(i) + ":" + qn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && gs)
          throw new Error(vs);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var u = 0; u < a.length; u++)
            Yn(a[u]) && (n += Br(i) + ":" + qn(i, a[u]) + ";");
        else {
          var d = Nt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Br(i) + ":" + d + ";";
              break;
            }
            default:
              n += i + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var Gn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ye;
function un(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ye = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Nt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Nt(r, t, e[c]), n) {
      var u = i;
      o += u[c];
    }
  Gn.lastIndex = 0;
  for (var d = "", p; (p = Gn.exec(o)) !== null; )
    d += "-" + p[1];
  var h = hs(o) + d;
  return {
    name: h,
    styles: o,
    next: Ye
  };
}
var Cs = function(t) {
  return t();
}, xs = M.useInsertionEffect ? M.useInsertionEffect : !1, Es = xs || Cs, Io = /* @__PURE__ */ M.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ cs({
    key: "css"
  }) : null
);
Io.Provider;
var ws = function(t) {
  return /* @__PURE__ */ bi(function(r, n) {
    var o = vi(Io);
    return t(r, o, n);
  });
}, Ts = /* @__PURE__ */ M.createContext({});
function Rs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return un(t);
}
var fn = function() {
  var t = Rs.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Os = Aa, $s = function(t) {
  return t !== "theme";
}, Hn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Os : $s;
}, Kn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, ks = !1, _s = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Po(r, n, o), Es(function() {
    return ps(r, n, o);
  }), null;
}, Ps = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Kn(t, r, n), u = c || Hn(o), d = !u("as");
  return function() {
    var p = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      h.push.apply(h, p);
    else {
      h.push(p[0][0]);
      for (var y = p.length, C = 1; C < y; C++)
        h.push(p[C], p[0][C]);
    }
    var S = ws(function(g, m, E) {
      var _ = d && g.as || o, R = "", x = [], b = g;
      if (g.theme == null) {
        b = {};
        for (var A in g)
          b[A] = g[A];
        b.theme = M.useContext(Ts);
      }
      typeof g.className == "string" ? R = ds(m.registered, x, g.className) : g.className != null && (R = g.className + " ");
      var I = un(h.concat(x), m.registered, b);
      R += m.key + "-" + I.name, a !== void 0 && (R += " " + a);
      var Q = d && c === void 0 ? Hn(_) : u, K = {};
      for (var s in g)
        d && s === "as" || Q(s) && (K[s] = g[s]);
      return K.className = R, E && (K.ref = E), /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(_s, {
        cache: m,
        serialized: I,
        isStringTag: typeof _ == "string"
      }), /* @__PURE__ */ M.createElement(_, K));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = h, S.__emotion_forwardProp = c, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && ks ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function(g, m) {
      return e(g, ar({}, r, m, {
        shouldForwardProp: Kn(S, m, !0)
      })).apply(void 0, h);
    }, S;
  };
}, As = [
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
], Hr = Ps.bind();
As.forEach(function(e) {
  Hr[e] = Hr(e);
});
/**
 * @mui/styled-engine v6.1.3
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Is(e, t) {
  const r = Hr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ms(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Xn = [];
function Jn(e) {
  return Xn[0] = e, un(Xn);
}
const Ns = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function js(e) {
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
  } = e, i = Ns(t), a = Object.keys(i);
  function c(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function u(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function d(y, C) {
    const S = a.indexOf(C);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(S !== -1 && typeof t[a[S]] == "number" ? t[a[S]] : C) - n / 100}${r})`;
  }
  function p(y) {
    return a.indexOf(y) + 1 < a.length ? d(y, a[a.indexOf(y) + 1]) : c(y);
  }
  function h(y) {
    const C = a.indexOf(y);
    return C === 0 ? c(a[1]) : C === a.length - 1 ? u(a[C]) : d(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: u,
    between: d,
    only: p,
    not: h,
    unit: r,
    ...o
  };
}
const Bs = {
  borderRadius: 4
};
function Mo(e = 8, t = on({
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
function Ds(e, t) {
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
function No(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = js(r), u = Mo(o);
  let d = Me({
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
      ...Bs,
      ...i
    }
  }, a);
  return d = Vi(d), d.applyStyles = Ds, d = t.reduce((p, h) => Me(p, h), d), d.unstable_sxConfig = {
    ...Sr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(h) {
    return bt({
      sx: h,
      theme: this
    });
  }, d;
}
const Qn = (e) => e, zs = () => {
  let e = Qn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Qn;
    }
  };
}, Fs = zs(), Vs = {
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
function et(e, t, r = "Mui") {
  const n = Vs[t];
  return n ? `${r}-${n}` : `${Fs.generate(e)}-${t}`;
}
function at(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = et(e, o, r);
  }), n;
}
var Kr = { exports: {} }, ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Ls() {
  if (Zn) return ce;
  Zn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function g(m) {
    if (typeof m == "object" && m !== null) {
      var E = m.$$typeof;
      switch (E) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case d:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case a:
                case u:
                case y:
                case h:
                case i:
                  return m;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return ce.ContextConsumer = a, ce.ContextProvider = i, ce.Element = e, ce.ForwardRef = u, ce.Fragment = r, ce.Lazy = y, ce.Memo = h, ce.Portal = t, ce.Profiler = o, ce.StrictMode = n, ce.Suspense = d, ce.SuspenseList = p, ce.isAsyncMode = function() {
    return !1;
  }, ce.isConcurrentMode = function() {
    return !1;
  }, ce.isContextConsumer = function(m) {
    return g(m) === a;
  }, ce.isContextProvider = function(m) {
    return g(m) === i;
  }, ce.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ce.isForwardRef = function(m) {
    return g(m) === u;
  }, ce.isFragment = function(m) {
    return g(m) === r;
  }, ce.isLazy = function(m) {
    return g(m) === y;
  }, ce.isMemo = function(m) {
    return g(m) === h;
  }, ce.isPortal = function(m) {
    return g(m) === t;
  }, ce.isProfiler = function(m) {
    return g(m) === o;
  }, ce.isStrictMode = function(m) {
    return g(m) === n;
  }, ce.isSuspense = function(m) {
    return g(m) === d;
  }, ce.isSuspenseList = function(m) {
    return g(m) === p;
  }, ce.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === d || m === p || m === C || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === h || m.$$typeof === i || m.$$typeof === a || m.$$typeof === u || m.$$typeof === S || m.getModuleId !== void 0);
  }, ce.typeOf = g, ce;
}
var le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function Ws() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), S = !1, g = !1, m = !1, E = !1, _ = !1, R;
    R = Symbol.for("react.module.reference");
    function x(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === o || _ || N === n || N === d || N === p || E || N === C || S || g || m || typeof N == "object" && N !== null && (N.$$typeof === y || N.$$typeof === h || N.$$typeof === i || N.$$typeof === a || N.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === R || N.getModuleId !== void 0));
    }
    function b(N) {
      if (typeof N == "object" && N !== null) {
        var ke = N.$$typeof;
        switch (ke) {
          case e:
            var je = N.type;
            switch (je) {
              case r:
              case o:
              case n:
              case d:
              case p:
                return je;
              default:
                var tt = je && je.$$typeof;
                switch (tt) {
                  case c:
                  case a:
                  case u:
                  case y:
                  case h:
                  case i:
                    return tt;
                  default:
                    return ke;
                }
            }
          case t:
            return ke;
        }
      }
    }
    var A = a, I = i, Q = e, K = u, s = r, O = y, j = h, B = t, W = o, Z = n, re = d, me = p, ye = !1, ue = !1;
    function w(N) {
      return ye || (ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function $(N) {
      return ue || (ue = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(N) {
      return b(N) === a;
    }
    function U(N) {
      return b(N) === i;
    }
    function D(N) {
      return typeof N == "object" && N !== null && N.$$typeof === e;
    }
    function H(N) {
      return b(N) === u;
    }
    function V(N) {
      return b(N) === r;
    }
    function L(N) {
      return b(N) === y;
    }
    function q(N) {
      return b(N) === h;
    }
    function X(N) {
      return b(N) === t;
    }
    function G(N) {
      return b(N) === o;
    }
    function xe(N) {
      return b(N) === n;
    }
    function k(N) {
      return b(N) === d;
    }
    function Re(N) {
      return b(N) === p;
    }
    le.ContextConsumer = A, le.ContextProvider = I, le.Element = Q, le.ForwardRef = K, le.Fragment = s, le.Lazy = O, le.Memo = j, le.Portal = B, le.Profiler = W, le.StrictMode = Z, le.Suspense = re, le.SuspenseList = me, le.isAsyncMode = w, le.isConcurrentMode = $, le.isContextConsumer = F, le.isContextProvider = U, le.isElement = D, le.isForwardRef = H, le.isFragment = V, le.isLazy = L, le.isMemo = q, le.isPortal = X, le.isProfiler = G, le.isStrictMode = xe, le.isSuspense = k, le.isSuspenseList = Re, le.isValidElementType = x, le.typeOf = b;
  }()), le;
}
process.env.NODE_ENV === "production" ? Kr.exports = Ls() : Kr.exports = Ws();
var to = Kr.exports;
function jo(e, t = "") {
  return e.displayName || e.name || t;
}
function ro(e, t, r) {
  const n = jo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Us(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return jo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case to.ForwardRef:
          return ro(e, e.render, "ForwardRef");
        case to.Memo:
          return ro(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Bo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Jn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Jn(o.style));
  }), n;
}
const Ys = No();
function Dr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function qs(e) {
  return e ? (t, r) => r[e] : null;
}
function Gs(e, t, r) {
  e.theme = Js(e.theme) ? r : e.theme[t] || e.theme;
}
function nr(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => nr(e, n));
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
    return Do(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Do(e, t, r = []) {
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
function Hs(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Ys,
    rootShouldForwardProp: n = Dr,
    slotShouldForwardProp: o = Dr
  } = e;
  function i(c) {
    Gs(c, t, r);
  }
  return (c, u = {}) => {
    Ms(c, (b) => b.filter((A) => A !== bt));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: h,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: C = qs(zo(p)),
      ...S
    } = u, g = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), m = y || !1;
    let E = Dr;
    p === "Root" || p === "root" ? E = n : p ? E = o : Qs(c) && (E = void 0);
    const _ = Is(c, {
      shouldForwardProp: E,
      label: Xs(d, p),
      ...S
    }), R = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(I) {
          return nr(I, b);
        };
      if (Ke(b)) {
        const A = Bo(b);
        return A.variants ? function(Q) {
          return nr(Q, A);
        } : A.style;
      }
      return b;
    }, x = (...b) => {
      const A = [], I = b.map(R), Q = [];
      if (A.push(i), d && C && Q.push(function(j) {
        var re, me;
        const W = (me = (re = j.theme.components) == null ? void 0 : re[d]) == null ? void 0 : me.styleOverrides;
        if (!W)
          return null;
        const Z = {};
        for (const ye in W)
          Z[ye] = nr(j, W[ye]);
        return C(j, Z);
      }), d && !g && Q.push(function(j) {
        var Z, re;
        const B = j.theme, W = (re = (Z = B == null ? void 0 : B.components) == null ? void 0 : Z[d]) == null ? void 0 : re.variants;
        return W ? Do(j, W) : null;
      }), m || Q.push(bt), Array.isArray(I[0])) {
        const O = I.shift(), j = new Array(A.length).fill(""), B = new Array(Q.length).fill("");
        let W;
        W = [...j, ...O, ...B], W.raw = [...j, ...O.raw, ...B], A.unshift(W);
      }
      const K = [...A, ...I, ...Q], s = _(...K);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = Ks(d, p, c)), s;
    };
    return _.withConfig && (x.withConfig = _.withConfig), x;
  };
}
function Ks(e, t, r) {
  return e ? `${e}${fe(t || "")}` : `Styled(${Us(r)})`;
}
function Xs(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${zo(t || "Root")}`), r;
}
function Js(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Qs(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function zo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Zs = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
function Fo(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function ec(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function tc(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !ec(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const rc = Fo(f.elementType, tc), dn = f.oneOfType([f.func, f.object]);
function nc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function oc({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = M.useRef(e !== void 0), [i, a] = M.useState(t), c = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    M.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: d
    } = M.useRef(t);
    M.useEffect(() => {
      !o && !Object.is(d, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const u = M.useCallback((d) => {
    o || a(d);
  }, []);
  return [c, u];
}
function Jt(e) {
  const t = M.useRef(e);
  return Zs(() => {
    t.current = e;
  }), M.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function no(...e) {
  return M.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      nc(r, t);
    });
  }, e);
}
const oo = {};
function Vo(e, t) {
  const r = M.useRef(oo);
  return r.current === oo && (r.current = e(t)), r;
}
const ic = [];
function ac(e) {
  M.useEffect(e, ic);
}
class pn {
  constructor() {
    Tt(this, "currentId", null);
    Tt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Tt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new pn();
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
function sc() {
  const e = Vo(pn.create).current;
  return ac(e.disposeEffect), e;
}
function io(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const cc = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (f.node, f.object);
function lc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? or(o.defaultProps, n) : !o.styleOverrides && !o.variants ? or(o, n) : n;
}
function uc({
  props: e,
  name: t
}) {
  const r = M.useContext(cc);
  return lc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const ao = {
  theme: void 0
};
function fc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (ao.theme = o.theme, i = Bo(e(ao)), t = i, r = o.theme), i;
  };
}
function dc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const so = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, pc = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!r || r && !r([...i, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, c], Array.isArray(u) ? [...a, c] : a) : t([...i, c], u, a));
    });
  }
  n(e);
}, hc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function zr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return pc(
    e,
    (c, u, d) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const p = `--${r ? `${r}-` : ""}${c.join("-")}`, h = hc(c, u);
        Object.assign(o, {
          [p]: h
        }), so(i, c, `var(${p})`, d), so(a, c, `var(${p}, ${h})`, d);
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
function mc(e, t = {}) {
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
    vars: d,
    css: p,
    varsWithDefaults: h
  } = zr(u, t);
  let y = h;
  const C = {}, {
    [c]: S,
    ...g
  } = i;
  if (Object.entries(g || {}).forEach(([R, x]) => {
    const {
      vars: b,
      css: A,
      varsWithDefaults: I
    } = zr(x, t);
    y = Me(y, I), C[R] = {
      css: A,
      vars: b
    };
  }), S) {
    const {
      css: R,
      vars: x,
      varsWithDefaults: b
    } = zr(S, t);
    y = Me(y, b), C[c] = {
      css: R,
      vars: x
    };
  }
  function m(R, x) {
    var A, I;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), R) {
      if (b === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = (A = i[R]) == null ? void 0 : A.palette) == null ? void 0 : I.mode) || R})`]: {
            ":root": x
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
        ...d
      };
      return Object.entries(C).forEach(([, {
        vars: x
      }]) => {
        R = Me(R, x);
      }), R;
    },
    generateStyleSheets: () => {
      var Q, K;
      const R = [], x = e.defaultColorScheme || "light";
      function b(s, O) {
        Object.keys(O).length && R.push(typeof s == "string" ? {
          [s]: {
            ...O
          }
        } : s);
      }
      b(r(void 0, {
        ...p
      }), p);
      const {
        [x]: A,
        ...I
      } = C;
      if (A) {
        const {
          css: s
        } = A, O = (K = (Q = i[x]) == null ? void 0 : Q.palette) == null ? void 0 : K.mode, j = !n && O ? {
          colorScheme: O,
          ...s
        } : {
          ...s
        };
        b(r(x, {
          ...j
        }), j);
      }
      return Object.entries(I).forEach(([s, {
        css: O
      }]) => {
        var W, Z;
        const j = (Z = (W = i[s]) == null ? void 0 : W.palette) == null ? void 0 : Z.mode, B = !n && j ? {
          colorScheme: j,
          ...O
        } : {
          ...O
        };
        b(r(s, {
          ...B
        }), B);
      }), R;
    }
  };
}
function gc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const jt = {
  black: "#000",
  white: "#fff"
}, yc = {
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
}, ut = {
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
}, ft = {
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
}, kt = {
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
}, dt = {
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
}, pt = {
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
}, ht = {
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
}, co = {
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
    paper: jt.white,
    default: jt.white
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
}, Fr = {
  text: {
    primary: jt.white,
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
    active: jt.white,
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
function lo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = nn(e.main, o) : t === "dark" && (e.dark = rn(e.main, i)));
}
function bc(e = "light") {
  return e === "dark" ? {
    main: dt[200],
    light: dt[50],
    dark: dt[400]
  } : {
    main: dt[700],
    light: dt[400],
    dark: dt[800]
  };
}
function vc(e = "light") {
  return e === "dark" ? {
    main: ut[200],
    light: ut[50],
    dark: ut[400]
  } : {
    main: ut[500],
    light: ut[300],
    dark: ut[700]
  };
}
function Sc(e = "light") {
  return e === "dark" ? {
    main: ft[500],
    light: ft[300],
    dark: ft[700]
  } : {
    main: ft[700],
    light: ft[400],
    dark: ft[800]
  };
}
function Cc(e = "light") {
  return e === "dark" ? {
    main: pt[400],
    light: pt[300],
    dark: pt[700]
  } : {
    main: pt[700],
    light: pt[500],
    dark: pt[900]
  };
}
function xc(e = "light") {
  return e === "dark" ? {
    main: ht[400],
    light: ht[300],
    dark: ht[700]
  } : {
    main: ht[800],
    light: ht[500],
    dark: ht[900]
  };
}
function Ec(e = "light") {
  return e === "dark" ? {
    main: kt[400],
    light: kt[300],
    dark: kt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: kt[500],
    dark: kt[900]
  };
}
function hn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || bc(t), a = e.secondary || vc(t), c = e.error || Sc(t), u = e.info || Cc(t), d = e.success || xc(t), p = e.warning || Ec(t);
  function h(g) {
    const m = zn(g, Fr.text.primary) >= r ? Fr.text.primary : co.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = zn(g, m);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const y = ({
    color: g,
    name: m,
    mainShade: E = 500,
    lightShade: _ = 300,
    darkShade: R = 700
  }) => {
    if (g = {
      ...g
    }, !g.main && g[E] && (g.main = g[E]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Je(11, m ? ` (${m})` : "", E));
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
} });` : Je(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return lo(g, "light", _, n), lo(g, "dark", R, n), g.contrastText || (g.contrastText = h(g.main)), g;
  }, C = {
    dark: Fr,
    light: co
  };
  return process.env.NODE_ENV !== "production" && (C[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Me({
    // A collection of common colors.
    common: {
      ...jt
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
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: yc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
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
function wc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Tc(e, t) {
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
function Rc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const uo = {
  textTransform: "uppercase"
}, fo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Oc(e, t) {
  const {
    fontFamily: r = fo,
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
    allVariants: d,
    pxToRem: p,
    ...h
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, C = p || ((m) => `${m / u * y}rem`), S = (m, E, _, R, x) => ({
    fontFamily: r,
    fontWeight: m,
    fontSize: C(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === fo ? {
      letterSpacing: `${Rc(R / E)}em`
    } : {},
    ...x,
    ...d
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
    button: S(a, 14, 1.75, 0.4, uo),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, uo),
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
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const $c = 0.2, kc = 0.14, _c = 0.12;
function ge(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${$c})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${kc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_c})`].join(",");
}
const Pc = ["none", ge(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ge(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ge(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ge(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ge(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ge(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ge(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ge(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ge(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ge(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ge(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ge(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ge(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ge(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ge(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ge(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ge(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ge(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ge(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ge(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ge(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ge(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ge(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ge(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ac = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ic = {
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
function po(e) {
  return `${Math.round(e)}ms`;
}
function Mc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Nc(e) {
  const t = {
    ...Ac,
    ...e.easing
  }, r = {
    ...Ic,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Mc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (y) => typeof y == "string", h = (y) => !Number.isNaN(parseFloat(y));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !p(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), p(c) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !p(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof a == "string" ? a : po(a)} ${c} ${typeof u == "string" ? u : po(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const jc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Xr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: u,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Je(20));
  const p = hn(i), h = No(e);
  let y = Me(h, {
    mixins: Tc(h.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Pc.slice(),
    typography: Oc(p, c),
    transitions: Nc(a),
    zIndex: {
      ...jc
    }
  });
  if (y = Me(y, d), y = t.reduce((C, S) => Me(C, S), y), process.env.NODE_ENV !== "production") {
    const C = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (g, m) => {
      let E;
      for (E in g) {
        const _ = g[E];
        if (C.includes(E) && Object.keys(_).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = et("", E);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(g, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: _
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          g[E] = {};
        }
      }
    };
    Object.keys(y.components).forEach((g) => {
      const m = y.components[g].styleOverrides;
      m && g.startsWith("Mui") && S(m, g);
    });
  }
  return y.unstable_sxConfig = {
    ...Sr,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, y.unstable_sx = function(S) {
    return bt({
      sx: S,
      theme: this
    });
  }, y;
}
function Bc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Dc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Bc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Lo(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Wo(e) {
  return e === "dark" ? Dc : [];
}
function zc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = hn(t);
  return {
    palette: i,
    opacity: {
      ...Lo(i.mode),
      ...r
    },
    overlays: n || Wo(i.mode),
    ...o
  };
}
function Fc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Vc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Lc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Vc(e.cssVarPrefix).forEach((c) => {
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
function Wc(e) {
  return Ke(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Uc(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Wc(c) || a.startsWith("unstable_") ? delete n[a] : Ke(c) && (n[a] = {
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
function Yc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Pt(e) {
  return !e || !e.startsWith("hsl") ? e : bo(e);
}
function He(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = _t(Pt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function qc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const We = (e) => {
  try {
    return e();
  } catch {
  }
}, Gc = (e = "mui") => dc(e);
function Vr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = zc({
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
  } = Xr({
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
      ...Lo(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Wo(o)
  }, a;
}
function Hc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Fc,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, p = Object.keys(r)[0], h = n || (r.light && p !== "light" ? "light" : p), y = Gc(i), {
    [h]: C,
    light: S,
    dark: g,
    ...m
  } = r, E = {
    ...m
  };
  let _ = C;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (_ = !0), !_)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : Je(21, h));
  const R = Vr(E, _, d, h);
  S && !E.light && Vr(E, S, void 0, "light"), g && !E.dark && Vr(E, g, void 0, "dark");
  let x = {
    defaultColorScheme: h,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: y,
    colorSchemes: E,
    font: {
      ...wc(R.typography),
      ...R.font
    },
    spacing: qc(d.spacing)
  };
  Object.keys(x.colorSchemes).forEach((K) => {
    const s = x.colorSchemes[K].palette, O = (j) => {
      const B = j.split("-"), W = B[1], Z = B[2];
      return y(j, s[W][Z]);
    };
    if (s.mode === "light" && (v(s.common, "background", "#fff"), v(s.common, "onBackground", "#000")), s.mode === "dark" && (v(s.common, "background", "#000"), v(s.common, "onBackground", "#fff")), Yc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      v(s.Alert, "errorColor", pe(s.error.light, 0.6)), v(s.Alert, "infoColor", pe(s.info.light, 0.6)), v(s.Alert, "successColor", pe(s.success.light, 0.6)), v(s.Alert, "warningColor", pe(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", O("palette-error-main")), v(s.Alert, "infoFilledBg", O("palette-info-main")), v(s.Alert, "successFilledBg", O("palette-success-main")), v(s.Alert, "warningFilledBg", O("palette-warning-main")), v(s.Alert, "errorFilledColor", We(() => s.getContrastText(s.error.main))), v(s.Alert, "infoFilledColor", We(() => s.getContrastText(s.info.main))), v(s.Alert, "successFilledColor", We(() => s.getContrastText(s.success.main))), v(s.Alert, "warningFilledColor", We(() => s.getContrastText(s.warning.main))), v(s.Alert, "errorStandardBg", he(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", he(s.info.light, 0.9)), v(s.Alert, "successStandardBg", he(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", he(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", O("palette-error-main")), v(s.Alert, "infoIconColor", O("palette-info-main")), v(s.Alert, "successIconColor", O("palette-success-main")), v(s.Alert, "warningIconColor", O("palette-warning-main")), v(s.AppBar, "defaultBg", O("palette-grey-100")), v(s.Avatar, "defaultBg", O("palette-grey-400")), v(s.Button, "inheritContainedBg", O("palette-grey-300")), v(s.Button, "inheritContainedHoverBg", O("palette-grey-A100")), v(s.Chip, "defaultBorder", O("palette-grey-400")), v(s.Chip, "defaultAvatarColor", O("palette-grey-700")), v(s.Chip, "defaultIconColor", O("palette-grey-700")), v(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(s.LinearProgress, "primaryBg", he(s.primary.main, 0.62)), v(s.LinearProgress, "secondaryBg", he(s.secondary.main, 0.62)), v(s.LinearProgress, "errorBg", he(s.error.main, 0.62)), v(s.LinearProgress, "infoBg", he(s.info.main, 0.62)), v(s.LinearProgress, "successBg", he(s.success.main, 0.62)), v(s.LinearProgress, "warningBg", he(s.warning.main, 0.62)), v(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), v(s.Slider, "primaryTrack", he(s.primary.main, 0.62)), v(s.Slider, "secondaryTrack", he(s.secondary.main, 0.62)), v(s.Slider, "errorTrack", he(s.error.main, 0.62)), v(s.Slider, "infoTrack", he(s.info.main, 0.62)), v(s.Slider, "successTrack", he(s.success.main, 0.62)), v(s.Slider, "warningTrack", he(s.warning.main, 0.62));
      const j = Kt(s.background.default, 0.8);
      v(s.SnackbarContent, "bg", j), v(s.SnackbarContent, "color", We(() => s.getContrastText(j))), v(s.SpeedDialAction, "fabHoverBg", Kt(s.background.paper, 0.15)), v(s.StepConnector, "border", O("palette-grey-400")), v(s.StepContent, "border", O("palette-grey-400")), v(s.Switch, "defaultColor", O("palette-common-white")), v(s.Switch, "defaultDisabledColor", O("palette-grey-100")), v(s.Switch, "primaryDisabledColor", he(s.primary.main, 0.62)), v(s.Switch, "secondaryDisabledColor", he(s.secondary.main, 0.62)), v(s.Switch, "errorDisabledColor", he(s.error.main, 0.62)), v(s.Switch, "infoDisabledColor", he(s.info.main, 0.62)), v(s.Switch, "successDisabledColor", he(s.success.main, 0.62)), v(s.Switch, "warningDisabledColor", he(s.warning.main, 0.62)), v(s.TableCell, "border", he(Ht(s.divider, 1), 0.88)), v(s.Tooltip, "bg", Ht(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      v(s.Alert, "errorColor", he(s.error.light, 0.6)), v(s.Alert, "infoColor", he(s.info.light, 0.6)), v(s.Alert, "successColor", he(s.success.light, 0.6)), v(s.Alert, "warningColor", he(s.warning.light, 0.6)), v(s.Alert, "errorFilledBg", O("palette-error-dark")), v(s.Alert, "infoFilledBg", O("palette-info-dark")), v(s.Alert, "successFilledBg", O("palette-success-dark")), v(s.Alert, "warningFilledBg", O("palette-warning-dark")), v(s.Alert, "errorFilledColor", We(() => s.getContrastText(s.error.dark))), v(s.Alert, "infoFilledColor", We(() => s.getContrastText(s.info.dark))), v(s.Alert, "successFilledColor", We(() => s.getContrastText(s.success.dark))), v(s.Alert, "warningFilledColor", We(() => s.getContrastText(s.warning.dark))), v(s.Alert, "errorStandardBg", pe(s.error.light, 0.9)), v(s.Alert, "infoStandardBg", pe(s.info.light, 0.9)), v(s.Alert, "successStandardBg", pe(s.success.light, 0.9)), v(s.Alert, "warningStandardBg", pe(s.warning.light, 0.9)), v(s.Alert, "errorIconColor", O("palette-error-main")), v(s.Alert, "infoIconColor", O("palette-info-main")), v(s.Alert, "successIconColor", O("palette-success-main")), v(s.Alert, "warningIconColor", O("palette-warning-main")), v(s.AppBar, "defaultBg", O("palette-grey-900")), v(s.AppBar, "darkBg", O("palette-background-paper")), v(s.AppBar, "darkColor", O("palette-text-primary")), v(s.Avatar, "defaultBg", O("palette-grey-600")), v(s.Button, "inheritContainedBg", O("palette-grey-800")), v(s.Button, "inheritContainedHoverBg", O("palette-grey-700")), v(s.Chip, "defaultBorder", O("palette-grey-700")), v(s.Chip, "defaultAvatarColor", O("palette-grey-300")), v(s.Chip, "defaultIconColor", O("palette-grey-300")), v(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(s.LinearProgress, "primaryBg", pe(s.primary.main, 0.5)), v(s.LinearProgress, "secondaryBg", pe(s.secondary.main, 0.5)), v(s.LinearProgress, "errorBg", pe(s.error.main, 0.5)), v(s.LinearProgress, "infoBg", pe(s.info.main, 0.5)), v(s.LinearProgress, "successBg", pe(s.success.main, 0.5)), v(s.LinearProgress, "warningBg", pe(s.warning.main, 0.5)), v(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), v(s.Slider, "primaryTrack", pe(s.primary.main, 0.5)), v(s.Slider, "secondaryTrack", pe(s.secondary.main, 0.5)), v(s.Slider, "errorTrack", pe(s.error.main, 0.5)), v(s.Slider, "infoTrack", pe(s.info.main, 0.5)), v(s.Slider, "successTrack", pe(s.success.main, 0.5)), v(s.Slider, "warningTrack", pe(s.warning.main, 0.5));
      const j = Kt(s.background.default, 0.98);
      v(s.SnackbarContent, "bg", j), v(s.SnackbarContent, "color", We(() => s.getContrastText(j))), v(s.SpeedDialAction, "fabHoverBg", Kt(s.background.paper, 0.15)), v(s.StepConnector, "border", O("palette-grey-600")), v(s.StepContent, "border", O("palette-grey-600")), v(s.Switch, "defaultColor", O("palette-grey-300")), v(s.Switch, "defaultDisabledColor", O("palette-grey-600")), v(s.Switch, "primaryDisabledColor", pe(s.primary.main, 0.55)), v(s.Switch, "secondaryDisabledColor", pe(s.secondary.main, 0.55)), v(s.Switch, "errorDisabledColor", pe(s.error.main, 0.55)), v(s.Switch, "infoDisabledColor", pe(s.info.main, 0.55)), v(s.Switch, "successDisabledColor", pe(s.success.main, 0.55)), v(s.Switch, "warningDisabledColor", pe(s.warning.main, 0.55)), v(s.TableCell, "border", pe(Ht(s.divider, 1), 0.68)), v(s.Tooltip, "bg", Ht(s.grey[700], 0.92));
    }
    He(s.background, "default"), He(s.background, "paper"), He(s.common, "background"), He(s.common, "onBackground"), He(s, "divider"), Object.keys(s).forEach((j) => {
      const B = s[j];
      B && typeof B == "object" && (B.main && v(s[j], "mainChannel", _t(Pt(B.main))), B.light && v(s[j], "lightChannel", _t(Pt(B.light))), B.dark && v(s[j], "darkChannel", _t(Pt(B.dark))), B.contrastText && v(s[j], "contrastTextChannel", _t(Pt(B.contrastText))), j === "text" && (He(s[j], "primary"), He(s[j], "secondary")), j === "action" && (B.active && He(s[j], "active"), B.selected && He(s[j], "selected")));
    });
  }), x = t.reduce((K, s) => Me(K, s), x);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Lc(x)
  }, {
    vars: A,
    generateThemeVars: I,
    generateStyleSheets: Q
  } = mc(x, b);
  return x.vars = A, Object.entries(x.colorSchemes[x.defaultColorScheme]).forEach(([K, s]) => {
    x[K] = s;
  }), x.generateThemeVars = I, x.generateStyleSheets = Q, x.generateSpacing = function() {
    return Mo(d.spacing, on(this));
  }, x.getColorSchemeSelector = gc(c), x.spacing = x.generateSpacing(), x.shouldSkipGeneratingVar = a, x.unstable_sxConfig = {
    ...Sr,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, x.unstable_sx = function(s) {
    return bt({
      sx: s,
      theme: this
    });
  }, x.toRuntimeSource = Uc, x;
}
function ho(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: hn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Kc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", u = o == null ? void 0 : o[c], d = {
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
      return Xr(e, ...t);
    let p = r;
    "palette" in e || d[c] && (d[c] !== !0 ? p = d[c].palette : c === "dark" && (p = {
      mode: "dark"
    }));
    const h = Xr({
      ...e,
      palette: p
    }, ...t);
    return h.defaultColorScheme = c, h.colorSchemes = d, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: h.palette
    }, ho(h, "dark", d.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: h.palette
    }, ho(h, "light", d.light)), h;
  }
  return !r && !("light" in d) && c === "light" && (d.light = !0), Hc({
    ...a,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Xc = Kc(), Jc = "$$material", Ve = Hs({
  themeId: Jc,
  defaultTheme: Xc,
  rootShouldForwardProp: ur
}), Bt = fc;
process.env.NODE_ENV !== "production" && (f.node, f.object.isRequired);
function xt(e) {
  return uc(e);
}
class cr {
  constructor() {
    Tt(this, "mountEffect", () => {
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
    return new cr();
  }
  static use() {
    const t = Vo(cr.create).current, [r, n] = M.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, M.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Zc(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Qc() {
  return cr.use();
}
function Zc() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function el(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Jr(e, t) {
  return Jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Jr(e, t);
}
function tl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Jr(e, t);
}
const mo = ot.createContext(null);
function rl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mn(e, t) {
  var r = function(i) {
    return t && Qt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Si.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function nl(e, t) {
  e = e || {}, t = t || {};
  function r(p) {
    return p in t ? t[p] : e[p];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var d = n[u][a];
        c[n[u][a]] = r(d);
      }
    c[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function it(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function ol(e, t) {
  return mn(e.children, function(r) {
    return Zt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: it(r, "appear", e),
      enter: it(r, "enter", e),
      exit: it(r, "exit", e)
    });
  });
}
function il(e, t, r) {
  var n = mn(e.children), o = nl(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Qt(a)) {
      var c = i in t, u = i in n, d = t[i], p = Qt(d) && !d.props.in;
      u && (!c || p) ? o[i] = Zt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: it(a, "exit", e),
        enter: it(a, "enter", e)
      }) : !u && c && !p ? o[i] = Zt(a, {
        in: !1
      }) : u && c && Qt(d) && (o[i] = Zt(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: it(a, "exit", e),
        enter: it(a, "enter", e)
      }));
    }
  }), o;
}
var al = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, sl = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, gn = /* @__PURE__ */ function(e) {
  tl(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(rl(i));
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
      children: u ? ol(o, c) : il(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = mn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = ar({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = el(o, ["component", "childFactory"]), u = this.state.contextValue, d = al(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ ot.createElement(mo.Provider, {
      value: u
    }, d) : /* @__PURE__ */ ot.createElement(mo.Provider, {
      value: u
    }, /* @__PURE__ */ ot.createElement(i, c, d));
  }, t;
}(ot.Component);
gn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: f.any,
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
  children: f.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: f.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: f.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: f.bool,
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
  childFactory: f.func
} : {};
gn.defaultProps = sl;
function Uo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: d
  } = e, [p, h] = M.useState(!1), y = $e(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), C = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, S = $e(r.child, p && r.childLeaving, n && r.childPulsate);
  return !c && !p && h(!0), M.useEffect(() => {
    if (!c && u != null) {
      const g = setTimeout(u, d);
      return () => {
        clearTimeout(g);
      };
    }
  }, [u, c, d]), /* @__PURE__ */ te.jsx("span", {
    className: y,
    style: C,
    children: /* @__PURE__ */ te.jsx("span", {
      className: S
    })
  });
}
process.env.NODE_ENV !== "production" && (Uo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object.isRequired,
  className: f.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: f.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: f.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: f.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: f.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: f.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: f.number,
  /**
   * exit delay
   */
  timeout: f.number.isRequired
});
const De = at("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Qr = 550, cl = 80, ll = fn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ul = fn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, fl = fn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, dl = Ve("span", {
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
}), pl = Ve(Uo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${De.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ll};
    animation-duration: ${Qr}ms;
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
    animation-name: ${ul};
    animation-duration: ${Qr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${De.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${fl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Yo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [u, d] = M.useState([]), p = M.useRef(0), h = M.useRef(null);
  M.useEffect(() => {
    h.current && (h.current(), h.current = null);
  }, [u]);
  const y = M.useRef(!1), C = sc(), S = M.useRef(null), g = M.useRef(null), m = M.useCallback((x) => {
    const {
      pulsate: b,
      rippleX: A,
      rippleY: I,
      rippleSize: Q,
      cb: K
    } = x;
    d((s) => [...s, /* @__PURE__ */ te.jsx(pl, {
      classes: {
        ripple: $e(i.ripple, De.ripple),
        rippleVisible: $e(i.rippleVisible, De.rippleVisible),
        ripplePulsate: $e(i.ripplePulsate, De.ripplePulsate),
        child: $e(i.child, De.child),
        childLeaving: $e(i.childLeaving, De.childLeaving),
        childPulsate: $e(i.childPulsate, De.childPulsate)
      },
      timeout: Qr,
      pulsate: b,
      rippleX: A,
      rippleY: I,
      rippleSize: Q
    }, p.current)]), p.current += 1, h.current = K;
  }, [i]), E = M.useCallback((x = {}, b = {}, A = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: Q = o || b.pulsate,
      fakeElement: K = !1
      // For test purposes
    } = b;
    if ((x == null ? void 0 : x.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (y.current = !0);
    const s = K ? null : g.current, O = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let j, B, W;
    if (Q || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      j = Math.round(O.width / 2), B = Math.round(O.height / 2);
    else {
      const {
        clientX: Z,
        clientY: re
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      j = Math.round(Z - O.left), B = Math.round(re - O.top);
    }
    if (Q)
      W = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const Z = Math.max(Math.abs((s ? s.clientWidth : 0) - j), j) * 2 + 2, re = Math.max(Math.abs((s ? s.clientHeight : 0) - B), B) * 2 + 2;
      W = Math.sqrt(Z ** 2 + re ** 2);
    }
    x != null && x.touches ? S.current === null && (S.current = () => {
      m({
        pulsate: I,
        rippleX: j,
        rippleY: B,
        rippleSize: W,
        cb: A
      });
    }, C.start(cl, () => {
      S.current && (S.current(), S.current = null);
    })) : m({
      pulsate: I,
      rippleX: j,
      rippleY: B,
      rippleSize: W,
      cb: A
    });
  }, [o, m, C]), _ = M.useCallback(() => {
    E({}, {
      pulsate: !0
    });
  }, [E]), R = M.useCallback((x, b) => {
    if (C.clear(), (x == null ? void 0 : x.type) === "touchend" && S.current) {
      S.current(), S.current = null, C.start(0, () => {
        R(x, b);
      });
      return;
    }
    S.current = null, d((A) => A.length > 0 ? A.slice(1) : A), h.current = b;
  }, [C]);
  return M.useImperativeHandle(r, () => ({
    pulsate: _,
    start: E,
    stop: R
  }), [_, E, R]), /* @__PURE__ */ te.jsx(dl, {
    className: $e(De.root, i.root, a),
    ref: g,
    ...c,
    children: /* @__PURE__ */ te.jsx(gn, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: f.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string
});
function hl(e) {
  return et("MuiButtonBase", e);
}
const ml = at("MuiButtonBase", ["root", "disabled", "focusVisible"]), gl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = St({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, hl, o);
  return r && n && (a.root += ` ${n}`), a;
}, yl = Ve("button", {
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
  [`&.${ml.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), wr = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: d = !1,
    disableRipple: p = !1,
    disableTouchRipple: h = !1,
    focusRipple: y = !1,
    focusVisibleClassName: C,
    LinkComponent: S = "a",
    onBlur: g,
    onClick: m,
    onContextMenu: E,
    onDragLeave: _,
    onFocus: R,
    onFocusVisible: x,
    onKeyDown: b,
    onKeyUp: A,
    onMouseDown: I,
    onMouseLeave: Q,
    onMouseUp: K,
    onTouchEnd: s,
    onTouchMove: O,
    onTouchStart: j,
    tabIndex: B = 0,
    TouchRippleProps: W,
    touchRippleRef: Z,
    type: re,
    ...me
  } = n, ye = M.useRef(null), ue = Qc(), w = no(ue.ref, Z), [$, F] = M.useState(!1);
  d && $ && F(!1), M.useImperativeHandle(o, () => ({
    focusVisible: () => {
      F(!0), ye.current.focus();
    }
  }), []);
  const U = ue.shouldMount && !p && !d;
  M.useEffect(() => {
    $ && y && !p && ue.pulsate();
  }, [p, y, $, ue]);
  function D(Y, Yt, qt = h) {
    return Jt((wt) => (Yt && Yt(wt), qt || ue[Y](wt), !0));
  }
  const H = D("start", I), V = D("stop", E), L = D("stop", _), q = D("stop", K), X = D("stop", (Y) => {
    $ && Y.preventDefault(), Q && Q(Y);
  }), G = D("start", j), xe = D("stop", s), k = D("stop", O), Re = D("stop", (Y) => {
    io(Y.target) || F(!1), g && g(Y);
  }, !1), N = Jt((Y) => {
    ye.current || (ye.current = Y.currentTarget), io(Y.target) && (F(!0), x && x(Y)), R && R(Y);
  }), ke = () => {
    const Y = ye.current;
    return u && u !== "button" && !(Y.tagName === "A" && Y.href);
  }, je = Jt((Y) => {
    y && !Y.repeat && $ && Y.key === " " && ue.stop(Y, () => {
      ue.start(Y);
    }), Y.target === Y.currentTarget && ke() && Y.key === " " && Y.preventDefault(), b && b(Y), Y.target === Y.currentTarget && ke() && Y.key === "Enter" && !d && (Y.preventDefault(), m && m(Y));
  }), tt = Jt((Y) => {
    y && Y.key === " " && $ && !Y.defaultPrevented && ue.stop(Y, () => {
      ue.pulsate(Y);
    }), A && A(Y), m && Y.target === Y.currentTarget && ke() && Y.key === " " && !Y.defaultPrevented && m(Y);
  });
  let rt = u;
  rt === "button" && (me.href || me.to) && (rt = S);
  const Le = {};
  rt === "button" ? (Le.type = re === void 0 ? "button" : re, Le.disabled = d) : (!me.href && !me.to && (Le.role = "button"), d && (Le["aria-disabled"] = d));
  const Tr = no(r, ye), Ut = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: d,
    disableRipple: p,
    disableTouchRipple: h,
    focusRipple: y,
    tabIndex: B,
    focusVisible: $
  }, Et = gl(Ut);
  return /* @__PURE__ */ te.jsxs(yl, {
    as: rt,
    className: $e(Et.root, c),
    ownerState: Ut,
    onBlur: Re,
    onClick: m,
    onContextMenu: V,
    onFocus: N,
    onKeyDown: je,
    onKeyUp: tt,
    onMouseDown: H,
    onMouseLeave: X,
    onMouseUp: q,
    onDragLeave: L,
    onTouchEnd: xe,
    onTouchMove: k,
    onTouchStart: G,
    ref: Tr,
    tabIndex: d ? -1 : B,
    type: re,
    ...Le,
    ...me,
    children: [a, U ? /* @__PURE__ */ te.jsx(Yo, {
      ref: w,
      center: i,
      ...W
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (wr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: dn,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: f.bool,
  /**
   * The content of the component.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: rc,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: f.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: f.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: f.string,
  /**
   * @ignore
   */
  href: f.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: f.elementType,
  /**
   * @ignore
   */
  onBlur: f.func,
  /**
   * @ignore
   */
  onClick: f.func,
  /**
   * @ignore
   */
  onContextMenu: f.func,
  /**
   * @ignore
   */
  onDragLeave: f.func,
  /**
   * @ignore
   */
  onFocus: f.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: f.func,
  /**
   * @ignore
   */
  onKeyDown: f.func,
  /**
   * @ignore
   */
  onKeyUp: f.func,
  /**
   * @ignore
   */
  onMouseDown: f.func,
  /**
   * @ignore
   */
  onMouseLeave: f.func,
  /**
   * @ignore
   */
  onMouseUp: f.func,
  /**
   * @ignore
   */
  onTouchEnd: f.func,
  /**
   * @ignore
   */
  onTouchMove: f.func,
  /**
   * @ignore
   */
  onTouchStart: f.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * @default 0
   */
  tabIndex: f.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: f.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: f.oneOfType([f.func, f.shape({
    current: f.shape({
      pulsate: f.func.isRequired,
      start: f.func.isRequired,
      stop: f.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: f.oneOfType([f.oneOf(["button", "reset", "submit"]), f.string])
});
function bl(e) {
  return typeof e.main == "string";
}
function vl(e, t = []) {
  if (!bl(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function Dt(e = []) {
  return ([, t]) => t && vl(t, e);
}
function Sl(e) {
  return et("MuiButton", e);
}
const mt = at("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), qo = /* @__PURE__ */ M.createContext({});
process.env.NODE_ENV !== "production" && (qo.displayName = "ButtonGroupContext");
const Go = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (Go.displayName = "ButtonGroupButtonContext");
const Cl = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${fe(t)}`, `size${fe(o)}`, `${i}Size${fe(o)}`, `color${fe(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${fe(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${fe(o)}`]
  }, u = St(c, Sl, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, Ho = [{
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
}], xl = Ve(wr, {
  shouldForwardProp: (e) => ur(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${fe(r.color)}`], t[`size${fe(r.size)}`], t[`${r.variant}Size${fe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Bt(({
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
    [`&.${mt.disabled}`]: {
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
        [`&.${mt.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${mt.disabled}`]: {
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
        [`&.${mt.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Dt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : qe(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : qe(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : qe(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : qe(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : qe(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${mt.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${mt.disabled}`]: {
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
})), El = Ve("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${fe(r.size)}`]];
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
  }, ...Ho]
}), wl = Ve("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${fe(r.size)}`]];
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
  }, ...Ho]
}), yn = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = M.useContext(qo), o = M.useContext(Go), i = or(n, t), a = xt({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: d = "button",
    className: p,
    disabled: h = !1,
    disableElevation: y = !1,
    disableFocusRipple: C = !1,
    endIcon: S,
    focusVisibleClassName: g,
    fullWidth: m = !1,
    size: E = "medium",
    startIcon: _,
    type: R,
    variant: x = "text",
    ...b
  } = a, A = {
    ...a,
    color: u,
    component: d,
    disabled: h,
    disableElevation: y,
    disableFocusRipple: C,
    fullWidth: m,
    size: E,
    type: R,
    variant: x
  }, I = Cl(A), Q = _ && /* @__PURE__ */ te.jsx(El, {
    className: I.startIcon,
    ownerState: A,
    children: _
  }), K = S && /* @__PURE__ */ te.jsx(wl, {
    className: I.endIcon,
    ownerState: A,
    children: S
  }), s = o || "";
  return /* @__PURE__ */ te.jsxs(xl, {
    ownerState: A,
    className: $e(n.className, I.root, p, s),
    component: d,
    disabled: h,
    focusRipple: !C,
    focusVisibleClassName: $e(I.focusVisible, g),
    ref: r,
    type: R,
    ...b,
    classes: I,
    children: [Q, c, K]
  });
});
process.env.NODE_ENV !== "production" && (yn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: f.oneOfType([f.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), f.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: f.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: f.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * Element placed after the children.
   */
  endIcon: f.node,
  /**
   * @ignore
   */
  focusVisibleClassName: f.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: f.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: f.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["small", "medium", "large"]), f.string]),
  /**
   * Element placed before the children.
   */
  startIcon: f.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * @ignore
   */
  type: f.oneOfType([f.oneOf(["button", "reset", "submit"]), f.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: f.oneOfType([f.oneOf(["contained", "outlined", "text"]), f.string])
});
function Xl(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ te.jsx(
      yn,
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
function Jl(e) {
  const {
    bgcolor: t,
    text: r,
    txtcolor: n,
    disabled: o,
    onClick: i,
    size: a,
    borderColor: c,
    borderWidth: u,
    hoverColor: d,
    hoverTxtColor: p
  } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ te.jsx(
      yn,
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
            backgroundColor: d,
            color: p
          }
        },
        children: r
      }
    )
  );
}
function Tl(e) {
  return et("MuiSvgIcon", e);
}
at("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Rl = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${fe(t)}`, `fontSize${fe(r)}`]
  };
  return St(o, Tl, n);
}, Ol = Ve("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${fe(r.color)}`], t[`fontSize${fe(r.fontSize)}`]];
  }
})(Bt(({
  theme: e
}) => {
  var t, r, n, o, i, a, c, u, d, p, h, y, C, S;
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
          fontSize: ((p = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : p.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, g]) => g && g.main).map(([g]) => {
        var m, E;
        return {
          props: {
            color: g
          },
          style: {
            color: (E = (m = (e.vars ?? e).palette) == null ? void 0 : m[g]) == null ? void 0 : E.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (y = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : y.active
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
})), zt = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: h,
    viewBox: y = "0 0 24 24",
    ...C
  } = n, S = /* @__PURE__ */ M.isValidElement(o) && o.type === "svg", g = {
    ...n,
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: y,
    hasSvgAsChild: S
  }, m = {};
  p || (m.viewBox = y);
  const E = Rl(g);
  return /* @__PURE__ */ te.jsxs(Ol, {
    as: c,
    className: $e(E.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: r,
    ...m,
    ...C,
    ...S && o.props,
    ownerState: g,
    children: [S ? o.props.children : o, h ? /* @__PURE__ */ te.jsx("title", {
      children: h
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (zt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: f.oneOfType([f.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), f.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: f.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: f.oneOfType([f.oneOf(["inherit", "large", "medium", "small"]), f.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: f.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: f.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: f.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: f.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: f.string
});
zt && (zt.muiName = "SvgIcon");
function Wt(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ te.jsx(zt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = zt.muiName, /* @__PURE__ */ M.memo(/* @__PURE__ */ M.forwardRef(r));
}
const $l = Wt(/* @__PURE__ */ te.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function kl(e) {
  return et("MuiIconButton", e);
}
const _l = at("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Pl = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i
  } = e, a = {
    root: ["root", r && "disabled", n !== "default" && `color${fe(n)}`, o && `edge${fe(o)}`, `size${fe(i)}`]
  };
  return St(a, kl, t);
}, Al = Ve(wr, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "default" && t[`color${fe(r.color)}`], r.edge && t[`edge${fe(r.edge)}`], t[`size${fe(r.size)}`]];
  }
})(Bt(({
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
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : qe(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), Bt(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : qe((e.vars || e).palette[t].main, e.palette.action.hoverOpacity),
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
  [`&.${_l.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  }
}))), bn = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: u = !1,
    disableFocusRipple: d = !1,
    disableRipple: p = !1,
    size: h = "medium",
    ...y
  } = n, C = {
    ...n,
    edge: o,
    color: c,
    disabled: u,
    disableFocusRipple: d,
    disableRipple: p,
    size: h
  }, S = Pl(C);
  return /* @__PURE__ */ te.jsx(Al, {
    className: $e(S.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: u,
    disableRipple: p,
    ref: r,
    ...y,
    ownerState: C,
    children: i
  });
});
process.env.NODE_ENV !== "production" && (bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Fo(f.node, (e) => M.Children.toArray(e.children).some((r) => /* @__PURE__ */ M.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: f.oneOfType([f.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), f.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: f.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["small", "medium", "large"]), f.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object])
});
function Ql(e) {
  const { favcolor: t, onClick: r, disabled: n } = e;
  return /* @__PURE__ */ te.jsx(bn, { onClick: r, disabled: n, children: /* @__PURE__ */ te.jsx($l, { color: t }) });
}
const Il = Wt(/* @__PURE__ */ te.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function Zl(e) {
  const { favcolor: t, onClick: r, disabled: n } = e;
  return /* @__PURE__ */ te.jsx(bn, { onClick: r, disabled: n, children: /* @__PURE__ */ te.jsx(Il, { color: t }) });
}
const Ko = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ko.displayName = "FormControlContext");
function Ml() {
  return M.useContext(Ko);
}
function Nl(e) {
  return et("PrivateSwitchBase", e);
}
at("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const jl = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: n,
    edge: o
  } = e, i = {
    root: ["root", r && "checked", n && "disabled", o && `edge${fe(o)}`],
    input: ["input"]
  };
  return St(i, Nl, t);
}, Bl = Ve(wr)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), Dl = Ve("input", {
  shouldForwardProp: ur
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), Xo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const {
    autoFocus: n,
    checked: o,
    checkedIcon: i,
    className: a,
    defaultChecked: c,
    disabled: u,
    disableFocusRipple: d = !1,
    edge: p = !1,
    icon: h,
    id: y,
    inputProps: C,
    inputRef: S,
    name: g,
    onBlur: m,
    onChange: E,
    onFocus: _,
    readOnly: R,
    required: x = !1,
    tabIndex: b,
    type: A,
    value: I,
    ...Q
  } = t, [K, s] = oc({
    controlled: o,
    default: !!c,
    name: "SwitchBase",
    state: "checked"
  }), O = Ml(), j = (ue) => {
    _ && _(ue), O && O.onFocus && O.onFocus(ue);
  }, B = (ue) => {
    m && m(ue), O && O.onBlur && O.onBlur(ue);
  }, W = (ue) => {
    if (ue.nativeEvent.defaultPrevented)
      return;
    const w = ue.target.checked;
    s(w), E && E(ue, w);
  };
  let Z = u;
  O && typeof Z > "u" && (Z = O.disabled);
  const re = A === "checkbox" || A === "radio", me = {
    ...t,
    checked: K,
    disabled: Z,
    disableFocusRipple: d,
    edge: p
  }, ye = jl(me);
  return /* @__PURE__ */ te.jsxs(Bl, {
    component: "span",
    className: $e(ye.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: Z,
    tabIndex: null,
    role: void 0,
    onFocus: j,
    onBlur: B,
    ownerState: me,
    ref: r,
    ...Q,
    children: [/* @__PURE__ */ te.jsx(Dl, {
      autoFocus: n,
      checked: o,
      defaultChecked: c,
      className: ye.input,
      disabled: Z,
      id: re ? y : void 0,
      name: g,
      onChange: W,
      readOnly: R,
      ref: S,
      required: x,
      ownerState: me,
      tabIndex: b,
      type: A,
      ...A === "checkbox" && I === void 0 ? {} : {
        value: I
      },
      ...C
    }), K ? i : h]
  });
});
process.env.NODE_ENV !== "production" && (Xo.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: f.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: f.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: f.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * @ignore
   */
  defaultChecked: f.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: f.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: f.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: f.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: f.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: f.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: f.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: dn,
  /*
   * @ignore
   */
  name: f.string,
  /**
   * @ignore
   */
  onBlur: f.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: f.func,
  /**
   * @ignore
   */
  onFocus: f.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: f.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: f.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.object,
  /**
   * @ignore
   */
  tabIndex: f.oneOfType([f.number, f.string]),
  /**
   * The input component prop `type`.
   */
  type: f.string.isRequired,
  /**
   * The value of the component.
   */
  value: f.any
});
const zl = Wt(/* @__PURE__ */ te.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), Fl = Wt(/* @__PURE__ */ te.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Vl = Wt(/* @__PURE__ */ te.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function Ll(e) {
  return et("MuiCheckbox", e);
}
const Lr = at("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Wl = (e) => {
  const {
    classes: t,
    indeterminate: r,
    color: n,
    size: o
  } = e, i = {
    root: ["root", r && "indeterminate", `color${fe(n)}`, `size${fe(o)}`]
  }, a = St(i, Ll, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, Ul = Ve(Xo, {
  shouldForwardProp: (e) => ur(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.indeterminate && t.indeterminate, t[`size${fe(r.size)}`], r.color !== "default" && t[`color${fe(r.color)}`]];
  }
})(Bt(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  variants: [{
    props: {
      color: "default",
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : qe(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : qe(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Lr.checked}, &.${Lr.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Lr.disabled}`]: {
        color: (e.vars || e).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
}))), Yl = /* @__PURE__ */ te.jsx(Fl, {}), ql = /* @__PURE__ */ te.jsx(zl, {}), Gl = /* @__PURE__ */ te.jsx(Vl, {}), Jo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = xt({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: o = Yl,
    color: i = "primary",
    icon: a = ql,
    indeterminate: c = !1,
    indeterminateIcon: u = Gl,
    inputProps: d,
    size: p = "medium",
    disableRipple: h = !1,
    className: y,
    ...C
  } = n, S = c ? u : a, g = c ? u : o, m = {
    ...n,
    disableRipple: h,
    color: i,
    indeterminate: c,
    size: p
  }, E = Wl(m);
  return /* @__PURE__ */ te.jsx(Ul, {
    type: "checkbox",
    inputProps: {
      "data-indeterminate": c,
      ...d
    },
    icon: /* @__PURE__ */ M.cloneElement(S, {
      fontSize: S.props.fontSize ?? p
    }),
    checkedIcon: /* @__PURE__ */ M.cloneElement(g, {
      fontSize: g.props.fontSize ?? p
    }),
    ownerState: m,
    ref: r,
    className: $e(E.root, y),
    ...C,
    classes: E
  });
});
process.env.NODE_ENV !== "production" && (Jo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: f.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: f.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: f.object,
  /**
   * @ignore
   */
  className: f.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: f.oneOfType([f.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), f.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: f.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: f.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: f.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: f.node,
  /**
   * The id of the `input` element.
   */
  id: f.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: f.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: f.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: f.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: dn,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: f.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: f.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: f.oneOfType([f.oneOf(["medium", "small"]), f.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: f.oneOfType([f.arrayOf(f.oneOfType([f.func, f.object, f.bool])), f.func, f.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: f.any
});
function eu(e) {
  const { onClick: t, disabled: r, checked: n, defaultChecked: o, size: i, color: a } = e;
  return /* @__PURE__ */ te.jsx(
    Jo,
    {
      onClick: t,
      disabled: r,
      checked: n,
      defaultChecked: o,
      color: a,
      size: i
    }
  );
}
export {
  Xl as CustomButton,
  Zl as FavouriteBorderCustom,
  Ql as FavouriteCustom,
  eu as LauraRc,
  Jl as MyButton
};
//# sourceMappingURL=index.es.js.map
