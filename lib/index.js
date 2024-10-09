"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CusButton", {
  enumerable: true,
  get: function get() {
    return _CusButton.default;
  }
});
Object.defineProperty(exports, "Foo", {
  enumerable: true,
  get: function get() {
    return _Foo.default;
  }
});
exports.default = void 0;
var _Foo = _interopRequireDefault(require("./Foo"));
var _CusButton = _interopRequireDefault(require("./CusButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  Foo: _Foo.default,
  CusButton: _CusButton.default
};