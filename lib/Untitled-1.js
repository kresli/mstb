"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bundle = Bundle;
exports.Controller = Controller;

var _mobxStateTree = require("mobx-state-tree");

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function Controller(Props) {
  var uuid = Props.uuid ? Props.uuid : _mobxStateTree.types.optional(_mobxStateTree.types.identifier, (0, _uuid["default"])());

  var Store = _mobxStateTree.types.model().props({
    uuid: uuid
  }).props(Props).actions(function (self) {
    return {
      afterCreate: function afterCreate() {
        self.$controller.$modelAfterCreate();
      },
      beforeDestroy: function beforeDestroy() {
        self.$controller.$modelBeforeDestroy();
      },
      afterAttach: function afterAttach() {
        self.$controller.$modelAfterAttach();
      }
    };
  });

  var ControllerClass =
  /*#__PURE__*/
  function () {
    function ControllerClass($model) {
      _classCallCheck(this, ControllerClass);

      this.$model = $model;
      (0, _mobxStateTree.unprotect)((0, _mobxStateTree.getRoot)(this.$model));
    } // tslint:disable-next-line:no-empty


    _createClass(ControllerClass, [{
      key: "$modelBeforeDestroy",
      value: function $modelBeforeDestroy() {} // tslint:disable-next-line:no-empty

    }, {
      key: "$modelAfterAttach",
      value: function $modelAfterAttach() {} // tslint:disable-next-line:no-empty

    }, {
      key: "$modelAfterCreate",
      value: function $modelAfterCreate() {}
    }]);

    return ControllerClass;
  }();

  _defineProperty(ControllerClass, "Props", Props);

  _defineProperty(ControllerClass, "Store", Store);

  return Bundle(ControllerClass);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9VbnRpdGxlZC0xLnRzIl0sIm5hbWVzIjpbIkJ1bmRsZSIsIkJhc2UiLCJTdG9yZSIsIm5hbWVkIiwibmFtZSIsInNlbGYiLCIkY29udHJvbGxlciIsIkJ1bmRsZUJhc2UiLCJzbmFwc2hvdCIsInR5cGVzIiwib3B0aW9uYWwiLCJhcmdzIiwiJG1vZGVsIiwiUHJvcHMiLCJDb250cm9sbGVyIiwidXVpZCIsImlkZW50aWZpZXIiLCJtb2RlbCIsInByb3BzIiwiYWN0aW9ucyIsImFmdGVyQ3JlYXRlIiwiJG1vZGVsQWZ0ZXJDcmVhdGUiLCJiZWZvcmVEZXN0cm95IiwiJG1vZGVsQmVmb3JlRGVzdHJveSIsImFmdGVyQXR0YWNoIiwiJG1vZGVsQWZ0ZXJBdHRhY2giLCJDb250cm9sbGVyQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDTyxTQUFTQSxNQUFULENBQTBDQyxJQUExQyxFQUF1RDtBQUU1RCxNQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxLQUFYLENBQWlCRixJQUFJLENBQUNHLElBQXRCLGNBQXFDLFVBQUFDLElBQUk7QUFBQSxXQUFLO0FBQzFEQyxNQUFBQSxXQUFXLEVBQUUsSUFBSUwsSUFBSixDQUFTSSxJQUFUO0FBRDZDLEtBQUw7QUFBQSxHQUF6QyxDQUFkOztBQUY0RCxNQU90REUsVUFQc0Q7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG9DQVc5QkMsUUFYOEIsRUFXRDtBQUN2RCxlQUFPQyxxQkFBTUMsUUFBTixDQUFlUixLQUFmLEVBQXNCTSxRQUF0QixDQUFQO0FBQ0Q7QUFieUQ7O0FBZ0IxRCwwQkFBNEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSx3Q0FBYkcsSUFBYTtBQUFiQSxRQUFBQSxJQUFhO0FBQUE7O0FBQzFCLDJJQUFTQSxJQUFUOztBQUQwQjs7QUFFMUIsWUFBS0MsTUFBTCxHQUFjRCxJQUFJLENBQUMsQ0FBRCxDQUFsQjtBQUYwQjtBQUczQjs7QUFuQnlEO0FBQUEsSUFPbkNWLElBUG1DOztBQUFBLGtCQU90RE0sVUFQc0QsV0FRcENOLElBQUksQ0FBQ1ksS0FSK0I7O0FBQUEsa0JBT3RETixVQVBzRCxXQVNwQ0wsS0FUb0M7O0FBcUI1RCxTQUFPSyxVQUFQO0FBQ0Q7O0FBRU0sU0FBU08sVUFBVCxDQUErQ0QsS0FBL0MsRUFBd0U7QUFDN0UsTUFBTUUsSUFBSSxHQUFHRixLQUFLLENBQUNFLElBQU4sR0FDVEYsS0FBSyxDQUFDRSxJQURHLEdBRVROLHFCQUFNQyxRQUFOLENBQWVELHFCQUFNTyxVQUFyQixFQUFpQyx1QkFBakMsQ0FGSjs7QUFHQSxNQUFNZCxLQUFLLEdBQUdPLHFCQUNYUSxLQURXLEdBRVhDLEtBRlcsQ0FFTDtBQUFFSCxJQUFBQSxJQUFJLEVBQUpBO0FBQUYsR0FGSyxFQUdYRyxLQUhXLENBR0xMLEtBSEssRUFJWE0sT0FKVyxDQUlILFVBQUFkLElBQUk7QUFBQSxXQUFLO0FBQ2hCZSxNQUFBQSxXQURnQix5QkFDRjtBQUNYZixRQUFBQSxJQUFELENBQStCQyxXQUEvQixDQUEyQ2UsaUJBQTNDO0FBQ0QsT0FIZTtBQUloQkMsTUFBQUEsYUFKZ0IsMkJBSUE7QUFDYmpCLFFBQUFBLElBQUQsQ0FBK0JDLFdBQS9CLENBQTJDaUIsbUJBQTNDO0FBQ0QsT0FOZTtBQU9oQkMsTUFBQUEsV0FQZ0IseUJBT0Y7QUFDWG5CLFFBQUFBLElBQUQsQ0FBK0JDLFdBQS9CLENBQTJDbUIsaUJBQTNDO0FBQ0Q7QUFUZSxLQUFMO0FBQUEsR0FKRCxDQUFkOztBQUo2RSxNQW1CdkVDLGVBbkJ1RTtBQUFBO0FBQUE7QUFzQjNFLDZCQUFtQmQsTUFBbkIsRUFBbUQ7QUFBQTs7QUFBQTtBQUNqRCxvQ0FBVSw0QkFBUSxLQUFLQSxNQUFiLENBQVY7QUFDRCxLQXhCMEUsQ0F5QjNFOzs7QUF6QjJFO0FBQUE7QUFBQSw0Q0EwQjlDLENBQUUsQ0ExQjRDLENBMkIzRTs7QUEzQjJFO0FBQUE7QUFBQSwwQ0E0QmhELENBQUUsQ0E1QjhDLENBNkIzRTs7QUE3QjJFO0FBQUE7QUFBQSwwQ0E4QmhELENBQUU7QUE5QjhDOztBQUFBO0FBQUE7O0FBQUEsa0JBbUJ2RWMsZUFuQnVFLFdBb0JyRGIsS0FwQnFEOztBQUFBLGtCQW1CdkVhLGVBbkJ1RSxXQXFCckR4QixLQXJCcUQ7O0FBZ0M3RSxTQUFPRixNQUFNLENBQUMwQixlQUFELENBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldFJvb3QsXG4gIElBbnlNb2RlbFR5cGUsXG4gIElNb2RlbFR5cGUsXG4gIEluc3RhbmNlLFxuICBJT3B0aW9uYWxJVHlwZSxcbiAgTW9kZWxQcm9wZXJ0aWVzLFxuICBTbmFwc2hvdEluLFxuICB0eXBlcyxcbiAgdW5wcm90ZWN0XG59IGZyb20gXCJtb2J4LXN0YXRlLXRyZWVcIjtcbmltcG9ydCB7IEV4dHJhY3RQcm9wcywgSVNpbXBsZVR5cGUgfSBmcm9tIFwibW9ieC1zdGF0ZS10cmVlL2Rpc3QvaW50ZXJuYWxcIjtcbmltcG9ydCBVVUlEIGZyb20gXCJ1dWlkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udHJvbGxlcjxQIGV4dGVuZHMgTW9kZWxQcm9wZXJ0aWVzID0gTW9kZWxQcm9wZXJ0aWVzPiB7XG4gIFByb3BzOiBQO1xuICBTdG9yZTogSU1vZGVsVHlwZTxQLCB7fT47XG4gIG5ldyAoLi4uYXJnczogYW55W10pOiB7XG4gICAgJG1vZGVsOiBJbnN0YW5jZTxJTW9kZWxUeXBlPFAgJiB7IHV1aWQ6IElTaW1wbGVUeXBlPHN0cmluZz4gfSwge30+PjtcbiAgICAkbW9kZWxCZWZvcmVEZXN0cm95KCk6IHZvaWQ7XG4gICAgJG1vZGVsQWZ0ZXJBdHRhY2goKTogdm9pZDtcbiAgICAkbW9kZWxBZnRlckNyZWF0ZSgpOiB2b2lkO1xuICB9O1xufVxuZXhwb3J0IGludGVyZmFjZSBCdW5kbGU8XG4gIFMgZXh0ZW5kcyBJQW55TW9kZWxUeXBlID0gSUFueU1vZGVsVHlwZSxcbiAgUCBleHRlbmRzIE1vZGVsUHJvcGVydGllcyA9IE1vZGVsUHJvcGVydGllc1xuPiB7XG4gIFN0b3JlOiBTO1xuICBQcm9wczogUDtcbiAgbmV3ICguLi5hcmdzOiBhbnkpOiB7XG4gICAgJG1vZGVsOiBJbnN0YW5jZTxTPjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDaXJjdWxhcjxDIGV4dGVuZHMgQ29udHJvbGxlciwgTSBleHRlbmRzIElBbnlNb2RlbFR5cGU+IHtcbiAgUHJvcHM6IENbXCJQcm9wc1wiXTtcbiAgU3RvcmU6IElNb2RlbFR5cGU8XG4gICAgRXh0cmFjdFByb3BzPE0+LFxuICAgIHtcbiAgICAgICRjb250cm9sbGVyOiBJbnN0YW5jZVR5cGU8Qz4gJiB7XG4gICAgICAgICRtb2RlbDogSW5zdGFuY2U8Q2lyY3VsYXI8QywgTT5bXCJTdG9yZVwiXT47XG4gICAgICB9O1xuICAgIH1cbiAgPjtcbiAgbmV3ICguLi5hcmdzOiBhbnlbXSk6IEluc3RhbmNlVHlwZTxDPjtcbn1cblxudHlwZSBTdG9yZVR5cGU8VEJhc2UgZXh0ZW5kcyBDb250cm9sbGVyPiA9IENpcmN1bGFyPFxuICBUQmFzZSxcbiAgSU1vZGVsVHlwZTxcbiAgICBUQmFzZVtcIlByb3BzXCJdICYgeyB1dWlkOiBJT3B0aW9uYWxJVHlwZTxJU2ltcGxlVHlwZTxzdHJpbmc+LCBbdW5kZWZpbmVkXT4gfSxcbiAgICB7ICRjb250cm9sbGVyOiBJbnN0YW5jZVR5cGU8VEJhc2U+IH1cbiAgPlxuPltcIlN0b3JlXCJdO1xuZXhwb3J0IGZ1bmN0aW9uIEJ1bmRsZTxUQmFzZSBleHRlbmRzIENvbnRyb2xsZXI+KEJhc2U6IFRCYXNlKSB7XG4gIHR5cGUgU3RvcmUgPSBTdG9yZVR5cGU8VEJhc2U+O1xuICBjb25zdCBTdG9yZSA9IEJhc2UuU3RvcmUubmFtZWQoQmFzZS5uYW1lKS52b2xhdGlsZShzZWxmID0+ICh7XG4gICAgJGNvbnRyb2xsZXI6IG5ldyBCYXNlKHNlbGYpXG4gIH0pKSBhcyBTdG9yZTtcblxuICB0eXBlIFAgPSBUQmFzZVtcIlByb3BzXCJdO1xuICBjbGFzcyBCdW5kbGVCYXNlIGV4dGVuZHMgQmFzZSB7XG4gICAgcHVibGljIHN0YXRpYyBQcm9wcyA9IEJhc2UuUHJvcHMgYXMgUDtcbiAgICBwdWJsaWMgc3RhdGljIFN0b3JlID0gU3RvcmU7XG5cbiAgICBwdWJsaWMgc3RhdGljIE9wdGlvbmFsU3RvcmUoc25hcHNob3Q6IFNuYXBzaG90SW48U3RvcmU+KSB7XG4gICAgICByZXR1cm4gdHlwZXMub3B0aW9uYWwoU3RvcmUsIHNuYXBzaG90KTtcbiAgICB9XG4gICAgcHVibGljICRtb2RlbCE6IEluc3RhbmNlPFN0b3JlPjtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgIHRoaXMuJG1vZGVsID0gYXJnc1swXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEJ1bmRsZUJhc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250cm9sbGVyPFAgZXh0ZW5kcyBNb2RlbFByb3BlcnRpZXM+KFByb3BzOiBQKTogQ29udHJvbGxlcjxQPiB7XG4gIGNvbnN0IHV1aWQgPSBQcm9wcy51dWlkXG4gICAgPyBQcm9wcy51dWlkXG4gICAgOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5pZGVudGlmaWVyLCBVVUlEKCkpO1xuICBjb25zdCBTdG9yZSA9IHR5cGVzXG4gICAgLm1vZGVsKClcbiAgICAucHJvcHMoeyB1dWlkIH0pXG4gICAgLnByb3BzKFByb3BzKVxuICAgIC5hY3Rpb25zKHNlbGYgPT4gKHtcbiAgICAgIGFmdGVyQ3JlYXRlKCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQWZ0ZXJDcmVhdGUoKTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQmVmb3JlRGVzdHJveSgpO1xuICAgICAgfSxcbiAgICAgIGFmdGVyQXR0YWNoKCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQWZ0ZXJBdHRhY2goKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIGNsYXNzIENvbnRyb2xsZXJDbGFzcyB7XG4gICAgcHVibGljIHN0YXRpYyBQcm9wcyA9IFByb3BzO1xuICAgIHB1YmxpYyBzdGF0aWMgU3RvcmUgPSBTdG9yZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgJG1vZGVsOiBJbnN0YW5jZTx0eXBlb2YgU3RvcmU+KSB7XG4gICAgICB1bnByb3RlY3QoZ2V0Um9vdCh0aGlzLiRtb2RlbCkpO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbiAgICBwdWJsaWMgJG1vZGVsQmVmb3JlRGVzdHJveSgpIHt9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gICAgcHVibGljICRtb2RlbEFmdGVyQXR0YWNoKCkge31cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbiAgICBwdWJsaWMgJG1vZGVsQWZ0ZXJDcmVhdGUoKSB7fVxuICB9XG4gIHJldHVybiBCdW5kbGUoQ29udHJvbGxlckNsYXNzKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCdW5kbGVUeXBlIGV4dGVuZHMgUmV0dXJuVHlwZTx0eXBlb2YgQnVuZGxlPiB7fVxuIl19