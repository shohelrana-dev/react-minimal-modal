'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var framerMotion = require('framer-motion');
var reactDom = require('react-dom');

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React.createContext && React.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return React.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return React.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? React.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function RxCross2 (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 15 15","fill":"none"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","clipRule":"evenodd","d":"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z","fill":"currentColor"}}]})(props);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".style-module_modal__9cWtB{align-items:center;display:flex;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:99}.style-module_darkOverlay__CNOfy{background:rgba(0,0,0,.2);height:100%;left:0;position:absolute;top:0;width:100%}.style-module_popup__wlvCv{background:#fff;border:1px solid #ddd;border-radius:10px;max-width:530px;padding:20px;width:90%;z-index:999}.style-module_header__grUsT{align-items:center;display:flex;justify-content:space-between;padding-bottom:4px}.style-module_title__sknMX{color:#000000c9;font-size:20px;font-weight:600}.style-module_icon__vQ8ZE{border-radius:50%;color:#e91e63;cursor:pointer;display:inline-block;margin-right:.25rem;padding:6px;transition-duration:.2s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.style-module_icon__vQ8ZE:hover{background:rgba(0,121,211,.1)}";
var classes = {"modal":"style-module_modal__9cWtB","darkOverlay":"style-module_darkOverlay__CNOfy","popup":"style-module_popup__wlvCv","header":"style-module_header__grUsT","title":"style-module_title__sknMX","icon":"style-module_icon__vQ8ZE"};
styleInject(css_248z,{"insertAt":"top"});

function Modal(props) {
    var isVisible = props.isVisible, toggle = props.toggle, title = props.title, children = props.children, hideIcon = props.hideIcon, _a = props.className, className = _a === void 0 ? '' : _a;
    var headerMarkup = !hideIcon || title ? (React.createElement("header", { className: classes.header },
        React.createElement("h3", { className: classes.title }, title),
        !hideIcon ? (React.createElement("div", null,
            React.createElement("button", { onClick: toggle, className: classes.icon },
                React.createElement(RxCross2, { size: "20" })))) : null)) : null;
    var component = (React.createElement(framerMotion.AnimatePresence, null, isVisible ? (React.createElement("div", { className: classes.modal },
        React.createElement(framerMotion.motion.div, { className: classes.darkOverlay, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, onClick: toggle }),
        React.createElement(framerMotion.motion.div, { className: classes.popup + " ".concat(className), initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 10 }, transition: { duration: 0.3 } },
            headerMarkup,
            children))) : null));
    return reactDom.createPortal(component, document.body);
}

function useModal() {
    var _a = React.useState(false), isVisible = _a[0], setVisible = _a[1];
    function toggle() {
        setVisible(!isVisible);
    }
    return { toggle: toggle, isVisible: isVisible };
}

exports.Modal = Modal;
exports.default = Modal;
exports.useModal = useModal;
