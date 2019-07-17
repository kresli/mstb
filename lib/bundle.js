"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bundle = Bundle;

var _mobxStateTree = require("mobx-state-tree");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Bundle(Base) {
  var Store = Base.Store.named(Base.name)["volatile"](function (self) {
    return {
      $controller: new Base(self)
    };
  });

  var BundleBase =
  /*#__PURE__*/
  function (_Base) {
    _inherits(BundleBase, _Base);

    _createClass(BundleBase, null, [{
      key: "OptionalStore",
      value: function OptionalStore(snapshot) {
        return _mobxStateTree.types.optional(Store, snapshot);
      }
    }]);

    function BundleBase() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, BundleBase);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BundleBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "$model", void 0);

      _this.$model = args[0];
      return _this;
    }

    return BundleBase;
  }(Base);

  _defineProperty(BundleBase, "Props", Base.Props);

  _defineProperty(BundleBase, "Store", Store);

  return BundleBase;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idW5kbGUudHMiXSwibmFtZXMiOlsiQnVuZGxlIiwiQmFzZSIsIlN0b3JlIiwibmFtZWQiLCJuYW1lIiwic2VsZiIsIiRjb250cm9sbGVyIiwiQnVuZGxlQmFzZSIsInNuYXBzaG90IiwidHlwZXMiLCJvcHRpb25hbCIsImFyZ3MiLCIkbW9kZWwiLCJQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0EsTUFBVCxDQUEwQ0MsSUFBMUMsRUFBdUQ7QUFFNUQsTUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkYsSUFBSSxDQUFDRyxJQUF0QixjQUFxQyxVQUFBQyxJQUFJO0FBQUEsV0FBSztBQUMxREMsTUFBQUEsV0FBVyxFQUFFLElBQUlMLElBQUosQ0FBU0ksSUFBVDtBQUQ2QyxLQUFMO0FBQUEsR0FBekMsQ0FBZDs7QUFGNEQsTUFPdERFLFVBUHNEO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxvQ0FXOUJDLFFBWDhCLEVBV0Q7QUFDdkQsZUFBT0MscUJBQU1DLFFBQU4sQ0FBZVIsS0FBZixFQUFzQk0sUUFBdEIsQ0FBUDtBQUNEO0FBYnlEOztBQWdCMUQsMEJBQTRCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsd0NBQWJHLElBQWE7QUFBYkEsUUFBQUEsSUFBYTtBQUFBOztBQUMxQiwySUFBU0EsSUFBVDs7QUFEMEI7O0FBRTFCLFlBQUtDLE1BQUwsR0FBY0QsSUFBSSxDQUFDLENBQUQsQ0FBbEI7QUFGMEI7QUFHM0I7O0FBbkJ5RDtBQUFBLElBT25DVixJQVBtQzs7QUFBQSxrQkFPdERNLFVBUHNELFdBUXBDTixJQUFJLENBQUNZLEtBUitCOztBQUFBLGtCQU90RE4sVUFQc0QsV0FTcENMLEtBVG9DOztBQXFCNUQsU0FBT0ssVUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSUFueU1vZGVsVHlwZSxcbiAgSU1vZGVsVHlwZSxcbiAgSW5zdGFuY2UsXG4gIElPcHRpb25hbElUeXBlLFxuICBJU2ltcGxlVHlwZSxcbiAgTW9kZWxQcm9wZXJ0aWVzLFxuICBTbmFwc2hvdEluLFxuICB0eXBlc1xufSBmcm9tIFwibW9ieC1zdGF0ZS10cmVlXCI7XG5pbXBvcnQgeyBFeHRyYWN0UHJvcHMgfSBmcm9tIFwibW9ieC1zdGF0ZS10cmVlL2Rpc3QvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQnVuZGxlPFRCYXNlIGV4dGVuZHMgQ29udHJvbGxlcj4oQmFzZTogVEJhc2UpIHtcbiAgdHlwZSBTdG9yZSA9IFN0b3JlVHlwZTxUQmFzZT47XG4gIGNvbnN0IFN0b3JlID0gQmFzZS5TdG9yZS5uYW1lZChCYXNlLm5hbWUpLnZvbGF0aWxlKHNlbGYgPT4gKHtcbiAgICAkY29udHJvbGxlcjogbmV3IEJhc2Uoc2VsZilcbiAgfSkpIGFzIFN0b3JlO1xuXG4gIHR5cGUgUCA9IFRCYXNlW1wiUHJvcHNcIl07XG4gIGNsYXNzIEJ1bmRsZUJhc2UgZXh0ZW5kcyBCYXNlIHtcbiAgICBwdWJsaWMgc3RhdGljIFByb3BzID0gQmFzZS5Qcm9wcyBhcyBQO1xuICAgIHB1YmxpYyBzdGF0aWMgU3RvcmUgPSBTdG9yZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgT3B0aW9uYWxTdG9yZShzbmFwc2hvdDogU25hcHNob3RJbjxTdG9yZT4pIHtcbiAgICAgIHJldHVybiB0eXBlcy5vcHRpb25hbChTdG9yZSwgc25hcHNob3QpO1xuICAgIH1cbiAgICBwdWJsaWMgJG1vZGVsITogSW5zdGFuY2U8U3RvcmU+O1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgdGhpcy4kbW9kZWwgPSBhcmdzWzBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQnVuZGxlQmFzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjdWxhcjxDIGV4dGVuZHMgQ29udHJvbGxlciwgTSBleHRlbmRzIElBbnlNb2RlbFR5cGU+IHtcbiAgUHJvcHM6IENbXCJQcm9wc1wiXTtcbiAgU3RvcmU6IElNb2RlbFR5cGU8XG4gICAgRXh0cmFjdFByb3BzPE0+LFxuICAgIHtcbiAgICAgICRjb250cm9sbGVyOiBJbnN0YW5jZVR5cGU8Qz4gJiB7XG4gICAgICAgICRtb2RlbDogSW5zdGFuY2U8Q2lyY3VsYXI8QywgTT5bXCJTdG9yZVwiXT47XG4gICAgICB9O1xuICAgIH1cbiAgPjtcbiAgbmV3ICguLi5hcmdzOiBhbnlbXSk6IEluc3RhbmNlVHlwZTxDPjtcbn1cblxuZXhwb3J0IHR5cGUgU3RvcmVUeXBlPFRCYXNlIGV4dGVuZHMgQ29udHJvbGxlcj4gPSBDaXJjdWxhcjxcbiAgVEJhc2UsXG4gIElNb2RlbFR5cGU8XG4gICAgVEJhc2VbXCJQcm9wc1wiXSAmIHsgdXVpZDogSU9wdGlvbmFsSVR5cGU8SVNpbXBsZVR5cGU8c3RyaW5nPiwgW3VuZGVmaW5lZF0+IH0sXG4gICAgeyAkY29udHJvbGxlcjogSW5zdGFuY2VUeXBlPFRCYXNlPiB9XG4gID5cbj5bXCJTdG9yZVwiXTtcblxuZXhwb3J0IGludGVyZmFjZSBCdW5kbGU8XG4gIFMgZXh0ZW5kcyBJQW55TW9kZWxUeXBlID0gSUFueU1vZGVsVHlwZSxcbiAgUCBleHRlbmRzIE1vZGVsUHJvcGVydGllcyA9IE1vZGVsUHJvcGVydGllc1xuPiB7XG4gIFN0b3JlOiBTO1xuICBQcm9wczogUDtcbiAgbmV3ICguLi5hcmdzOiBhbnkpOiB7XG4gICAgJG1vZGVsOiBJbnN0YW5jZTxTPjtcbiAgfTtcbn1cbiJdfQ==