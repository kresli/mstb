"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bundle = Bundle;

var _mobxStateTree = require("mobx-state-tree");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function Bundle(Base) {
  var Store = Base.Store.named(Base.name)["volatile"](function (self) {
    return {
      $controller: new BundleBase(self)
    };
  });

  var BundleBase =
  /*#__PURE__*/
  function (_Base) {
    _inherits(BundleBase, _Base);

    _createClass(BundleBase, null, [{
      key: "create",
      value: function create(snap) {
        // @todo this should be properly infered from Store.
        return Store.create(snap).$controller;
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
      _this.$model = void 0;
      _this.$model = args[0];
      return _this;
    }

    _createClass(BundleBase, [{
      key: "$resolveIdentifier",
      value: function $resolveIdentifier(BundleType, uuid) {
        var model = (0, _mobxStateTree.resolveIdentifier)(BundleType.Store, this.$model, uuid);
        return model ? model.$controller : null;
      }
    }]);

    return BundleBase;
  }(Base);

  BundleBase.Props = Base.Props;
  BundleBase.Store = Store;
  return BundleBase;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idW5kbGUudHMiXSwibmFtZXMiOlsiQnVuZGxlIiwiQmFzZSIsIlN0b3JlIiwibmFtZWQiLCJuYW1lIiwic2VsZiIsIiRjb250cm9sbGVyIiwiQnVuZGxlQmFzZSIsInNuYXAiLCJjcmVhdGUiLCJhcmdzIiwiJG1vZGVsIiwiQnVuZGxlVHlwZSIsInV1aWQiLCJtb2RlbCIsIlByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWU8sU0FBU0EsTUFBVCxDQUEwQ0MsSUFBMUMsRUFBdUQ7QUFFNUQsTUFBTUMsS0FBSyxHQUFHRCxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkYsSUFBSSxDQUFDRyxJQUF0QixjQUFxQyxVQUFBQyxJQUFJO0FBQUEsV0FBSztBQUMxREMsTUFBQUEsV0FBVyxFQUFFLElBQUlDLFVBQUosQ0FBZUYsSUFBZjtBQUQ2QyxLQUFMO0FBQUEsR0FBekMsQ0FBZDs7QUFGNEQsTUFPdERFLFVBUHNEO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFZeERDLElBWndELEVBYXhCO0FBQ2hDO0FBQ0EsZUFBUU4sS0FBSyxDQUFDTyxNQUFOLENBQWFELElBQWIsQ0FBRCxDQUNKRixXQURIO0FBRUQ7QUFqQnlEOztBQW9CMUQsMEJBQTRCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsd0NBQWJJLElBQWE7QUFBYkEsUUFBQUEsSUFBYTtBQUFBOztBQUMxQiwySUFBU0EsSUFBVDtBQUQwQixZQUZyQkMsTUFFcUI7QUFFMUIsWUFBS0EsTUFBTCxHQUFjRCxJQUFJLENBQUMsQ0FBRCxDQUFsQjtBQUYwQjtBQUczQjs7QUF2QnlEO0FBQUE7QUFBQSx5Q0F5QnhERSxVQXpCd0QsRUEwQnhEQyxJQTFCd0QsRUEyQnhEO0FBQ0EsWUFBTUMsS0FBSyxHQUFHLHNDQUFrQkYsVUFBVSxDQUFDVixLQUE3QixFQUFvQyxLQUFLUyxNQUF6QyxFQUFpREUsSUFBakQsQ0FBZDtBQUNBLGVBQU9DLEtBQUssR0FBR0EsS0FBSyxDQUFDUixXQUFULEdBQXVCLElBQW5DO0FBQ0Q7QUE5QnlEOztBQUFBO0FBQUEsSUFPbkNMLElBUG1DOztBQU90RE0sRUFBQUEsVUFQc0QsQ0FRNUNRLEtBUjRDLEdBUXBDZCxJQUFJLENBQUNjLEtBUitCO0FBT3REUixFQUFBQSxVQVBzRCxDQVM1Q0wsS0FUNEMsR0FTcENBLEtBVG9DO0FBZ0M1RCxTQUFPSyxVQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJQW55TW9kZWxUeXBlLFxuICBJTW9kZWxUeXBlLFxuICBJbnN0YW5jZSxcbiAgSU9wdGlvbmFsSVR5cGUsXG4gIElTaW1wbGVUeXBlLFxuICByZXNvbHZlSWRlbnRpZmllcixcbiAgU25hcHNob3RJblxufSBmcm9tIFwibW9ieC1zdGF0ZS10cmVlXCI7XG5pbXBvcnQgeyBFeHRyYWN0UHJvcHMgfSBmcm9tIFwibW9ieC1zdGF0ZS10cmVlL2Rpc3QvaW50ZXJuYWxcIjtcbmltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tIFwiLi9pbnRlcm5hbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQnVuZGxlPFRCYXNlIGV4dGVuZHMgQ29udHJvbGxlcj4oQmFzZTogVEJhc2UpIHtcbiAgdHlwZSBTdG9yZSA9IFN0b3JlVHlwZTxUQmFzZT47XG4gIGNvbnN0IFN0b3JlID0gQmFzZS5TdG9yZS5uYW1lZChCYXNlLm5hbWUpLnZvbGF0aWxlKHNlbGYgPT4gKHtcbiAgICAkY29udHJvbGxlcjogbmV3IEJ1bmRsZUJhc2Uoc2VsZilcbiAgfSkpIGFzIFN0b3JlO1xuXG4gIHR5cGUgUCA9IFRCYXNlW1wiUHJvcHNcIl07XG4gIGNsYXNzIEJ1bmRsZUJhc2UgZXh0ZW5kcyBCYXNlIHtcbiAgICBwdWJsaWMgc3RhdGljIFByb3BzID0gQmFzZS5Qcm9wcyBhcyBQO1xuICAgIHB1YmxpYyBzdGF0aWMgU3RvcmUgPSBTdG9yZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKFxuICAgICAgc25hcDogU25hcHNob3RJbjxTdG9yZT5cbiAgICApOiBJbnN0YW5jZTxTdG9yZT5bXCIkY29udHJvbGxlclwiXSB7XG4gICAgICAvLyBAdG9kbyB0aGlzIHNob3VsZCBiZSBwcm9wZXJseSBpbmZlcmVkIGZyb20gU3RvcmUuXG4gICAgICByZXR1cm4gKFN0b3JlLmNyZWF0ZShzbmFwKSBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSlcbiAgICAgICAgLiRjb250cm9sbGVyIGFzIEluc3RhbmNlPFN0b3JlPltcIiRjb250cm9sbGVyXCJdO1xuICAgIH1cbiAgICBwdWJsaWMgJG1vZGVsITogSW5zdGFuY2U8U3RvcmU+O1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgdGhpcy4kbW9kZWwgPSBhcmdzWzBdO1xuICAgIH1cbiAgICBwdWJsaWMgJHJlc29sdmVJZGVudGlmaWVyPFQgZXh0ZW5kcyBDb250cm9sbGVyPihcbiAgICAgIEJ1bmRsZVR5cGU6IFQsXG4gICAgICB1dWlkOiBzdHJpbmdcbiAgICApIHtcbiAgICAgIGNvbnN0IG1vZGVsID0gcmVzb2x2ZUlkZW50aWZpZXIoQnVuZGxlVHlwZS5TdG9yZSwgdGhpcy4kbW9kZWwsIHV1aWQpO1xuICAgICAgcmV0dXJuIG1vZGVsID8gbW9kZWwuJGNvbnRyb2xsZXIgOiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4gQnVuZGxlQmFzZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjdWxhcjxDIGV4dGVuZHMgQ29udHJvbGxlciwgTSBleHRlbmRzIElBbnlNb2RlbFR5cGU+XG4gIGV4dGVuZHMgSU1vZGVsVHlwZTxcbiAgICBFeHRyYWN0UHJvcHM8TT4sXG4gICAge1xuICAgICAgJGNvbnRyb2xsZXI6IEluc3RhbmNlVHlwZTxDPiAmIHtcbiAgICAgICAgJG1vZGVsOiBJbnN0YW5jZTxDaXJjdWxhcjxDLCBNPj47XG4gICAgICB9O1xuICAgIH1cbiAgPiB7fVxuaW50ZXJmYWNlIFN0b3JlVHlwZTxUQmFzZSBleHRlbmRzIENvbnRyb2xsZXI+XG4gIGV4dGVuZHMgQ2lyY3VsYXI8XG4gICAgVEJhc2UsXG4gICAgSU1vZGVsVHlwZTxcbiAgICAgIFRCYXNlW1wiUHJvcHNcIl0gJiB7XG4gICAgICAgIHV1aWQ6IElPcHRpb25hbElUeXBlPElTaW1wbGVUeXBlPHN0cmluZz4sIFt1bmRlZmluZWRdPjtcbiAgICAgIH0sXG4gICAgICB7ICRjb250cm9sbGVyOiBJbnN0YW5jZVR5cGU8VEJhc2U+IH1cbiAgICA+XG4gID4ge31cbiJdfQ==