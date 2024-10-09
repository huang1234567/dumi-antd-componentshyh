"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/button/style");
var _button = _interopRequireDefault(require("antd/es/button"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
// import { ButtonProps } from 'antd/button'; 
// import { ButtonProps } from 'antd/es/button';
//-----------------------------1.初始使用-属性传参使用有问题-------------------------------------
// const CusButton = ({ props, children}: {props:any,children:any }) => {
//   console.log('props',props,children)
//   return (
//       <Button {...props}>{children}</Button>
//   );
// };
// export default CusButton;
//-----------------------------2.修改使用属性传参-报错中-------------------------------------
// interface Props {
//   type: string;//按钮type
//   style?: object;//样式
//   children?: ReactNode;
//   // ...other
// }
// export const CusButton: FC<Props> = (props,children) => {
//   console.log('props',props,children)
//   return (
//     // <div className="demoBlock">
//     //   {props.title && <div className="title">{props.title}</div>}
//     //   <div
//     //     className="main"
//     //     style={{
//     //       padding: props.padding,
//     //     }}
//     //   >
//     //     {props.children}
//     //   </div>
//     // </div>
//     <Button>{children}</Button>
//   );
// };
var CusButton = /*#__PURE__*/function (_Component) {
  function CusButton(props) {
    _classCallCheck(this, CusButton);
    return _callSuper(this, CusButton, [props]);
  }
  _inherits(CusButton, _Component);
  return _createClass(CusButton, [{
    key: "render",
    value: function render() {
      var other = _extends({}, (_objectDestructuringEmpty(this.props), this.props));
      return /*#__PURE__*/_react.default.createElement(_button.default, _objectSpread({}, other));
    }
  }]);
}(_react.Component);
var _default = exports.default = CusButton; // interface IABSButtonProps {
//   /**设置按钮载入状态 */
//   loading?: boolean;
//   /**
//    * 设置危险按钮
//    * @default false
//    */
//   danger?: boolean;
//   className?: string;
//   /**按钮类型 */
//   type?: ButtonType;
//   style?: React.CSSProperties;
//   /**设置按钮的图标组件 */
//   icon?: React.ReactNode;
//   children?: React.ReactNode;
//   /**
//    * 按钮失效状态
//    * @default false
//    */
//   disabled?: boolean;
//   block?: boolean;
//   large?: boolean;
//   htmlType?: ButtonHTMLType;
//   /**按钮颜色 */
//   color?: 'blue' | 'red' | 'yellow' | 'green' | 'white';
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// }
// export const CusButtonForm: FC<{
//   // tr-1
//     /**
//      * @description 属性名称
//      * @default "无"
//      */
//     title?: string;
//     /**
//      * @description 属性类型
//      * @default "无"
//      */
//   }> = ({ title }) => null;
//-----------------------------3.通义灵码-也报错-------------------------------------
// interface CustomButtonProps extends Omit<ButtonProps, 'type'> {
//   type?: 'link' | 'default' | 'ghost' | 'primary' | 'dashed' | 'danger'; // 限定type的可选值
//   children: any;
// }
// const CusButton: React.FC<CustomButtonProps> = (props) => {
//   const { type, ...restProps } = props;
//   // 如果type不是预期的值，则忽略它
//   // if (!['link', 'default', 'ghost', 'primary', 'dashed', 'danger'].includes(type)) {
//   //   delete restProps.type;
//   // }
//   console.log('props',props)
//   return <Button {...restProps}>{props.children}</Button>;
// };