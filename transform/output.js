"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = (0, _getPrototypeOf2["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2["default"])(this, result);
  };
}

var createSaga = function createSaga(method) {
  method.bindThis = true;
  return {
    bindValue: 'scope value',
    method: method
  };
};

var Base = function Base() {
  (0, _classCallCheck2["default"])(this, Base);
};

var Test =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2["default"])(Test, _Base);

  var _super = _createSuper(Test);

  function Test() {
    var _this;

    (0, _classCallCheck2["default"])(this, Test);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.bindValue = 'class value';
    _this.saga1 = createSaga(
    /*#__PURE__*/
    _regenerator["default"].mark(function getContacts(action) {
      return _regenerator["default"].wrap(function getContacts$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(action, this.bindValue);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, getContacts, this);
    }).bind(this));
    _this.saga2 = createSaga(
    /*#__PURE__*/
    _regenerator["default"].mark(function getContacts(action) {
      return _regenerator["default"].wrap(function getContacts$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(action, this.bindValue);

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, getContacts, this);
    }).bind((0, _assertThisInitialized2["default"])(_this)));
    return _this;
  }

  return Test;
}(Base);

var ins = new Test();
ins.saga1.method('action1').next();
ins.saga2.method('action2').next();
