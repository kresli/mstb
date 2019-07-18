"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = Controller;

var _mobxStateTree = require("mobx-state-tree");

var _uuid = _interopRequireDefault(require("uuid"));

var _internal = require("./internal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    }

    _createClass(ControllerClass, [{
      key: "$modelBeforeDestroy",
      value: function $modelBeforeDestroy() {}
    }, {
      key: "$modelAfterAttach",
      value: function $modelAfterAttach() {}
    }, {
      key: "$modelAfterCreate",
      value: function $modelAfterCreate() {}
    }, {
      key: "$resolveIdentifier",
      value: function $resolveIdentifier() {
        return null;
      }
    }]);

    return ControllerClass;
  }();

  ControllerClass.Props = Props;
  ControllerClass.Store = Store;
  return (0, _internal.Bundle)(ControllerClass);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQcm9wcyIsInV1aWQiLCJ0eXBlcyIsIm9wdGlvbmFsIiwiaWRlbnRpZmllciIsIlN0b3JlIiwibW9kZWwiLCJwcm9wcyIsImFjdGlvbnMiLCJzZWxmIiwiYWZ0ZXJDcmVhdGUiLCIkY29udHJvbGxlciIsIiRtb2RlbEFmdGVyQ3JlYXRlIiwiYmVmb3JlRGVzdHJveSIsIiRtb2RlbEJlZm9yZURlc3Ryb3kiLCJhZnRlckF0dGFjaCIsIiRtb2RlbEFmdGVyQXR0YWNoIiwiQ29udHJvbGxlckNsYXNzIiwiJG1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBVUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxVQUFULENBQStDQyxLQUEvQyxFQUF3RTtBQUM3RSxNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBTixHQUNURCxLQUFLLENBQUNDLElBREcsR0FFVEMscUJBQU1DLFFBQU4sQ0FBZUQscUJBQU1FLFVBQXJCLEVBQWlDLHVCQUFqQyxDQUZKOztBQUdBLE1BQU1DLEtBQUssR0FBR0gscUJBQ1hJLEtBRFcsR0FFWEMsS0FGVyxDQUVMO0FBQUVOLElBQUFBLElBQUksRUFBSkE7QUFBRixHQUZLLEVBR1hNLEtBSFcsQ0FHTFAsS0FISyxFQUlYUSxPQUpXLENBSUgsVUFBQUMsSUFBSTtBQUFBLFdBQUs7QUFDaEJDLE1BQUFBLFdBRGdCLHlCQUNGO0FBQ1hELFFBQUFBLElBQUQsQ0FBK0JFLFdBQS9CLENBQTJDQyxpQkFBM0M7QUFDRCxPQUhlO0FBSWhCQyxNQUFBQSxhQUpnQiwyQkFJQTtBQUNiSixRQUFBQSxJQUFELENBQStCRSxXQUEvQixDQUEyQ0csbUJBQTNDO0FBQ0QsT0FOZTtBQU9oQkMsTUFBQUEsV0FQZ0IseUJBT0Y7QUFDWE4sUUFBQUEsSUFBRCxDQUErQkUsV0FBL0IsQ0FBMkNLLGlCQUEzQztBQUNEO0FBVGUsS0FBTDtBQUFBLEdBSkQsQ0FBZDs7QUFKNkUsTUFtQnZFQyxlQW5CdUU7QUFBQTtBQUFBO0FBc0IzRSw2QkFBbUJDLE1BQW5CLEVBQW1EO0FBQUE7O0FBQUE7QUFDakQsb0NBQVUsNEJBQVEsS0FBS0EsTUFBYixDQUFWO0FBQ0Q7O0FBeEIwRTtBQUFBO0FBQUEsNENBeUI5QyxDQUFFO0FBekI0QztBQUFBO0FBQUEsMENBMEJoRCxDQUFFO0FBMUI4QztBQUFBO0FBQUEsMENBMkJoRCxDQUFFO0FBM0I4QztBQUFBO0FBQUEsMkNBNEIvQztBQUMxQixlQUFPLElBQVA7QUFDRDtBQTlCMEU7O0FBQUE7QUFBQTs7QUFtQnZFRCxFQUFBQSxlQW5CdUUsQ0FvQjdEakIsS0FwQjZELEdBb0JyREEsS0FwQnFEO0FBbUJ2RWlCLEVBQUFBLGVBbkJ1RSxDQXFCN0RaLEtBckI2RCxHQXFCckRBLEtBckJxRDtBQWdDN0UsU0FBTyxzQkFBT1ksZUFBUCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tZW1wdHlcbmltcG9ydCB7XG4gIGdldFJvb3QsXG4gIElBbnlTdGF0ZVRyZWVOb2RlLFxuICBJTW9kZWxUeXBlLFxuICBJbnN0YW5jZSxcbiAgSVNpbXBsZVR5cGUsXG4gIE1vZGVsUHJvcGVydGllcyxcbiAgdW5wcm90ZWN0XG59IGZyb20gXCJtb2J4LXN0YXRlLXRyZWVcIjtcbmltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIm1vYngtc3RhdGUtdHJlZVwiO1xuaW1wb3J0IGd1aWQgZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IEJ1bmRsZSB9IGZyb20gXCIuL2ludGVybmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250cm9sbGVyPFAgZXh0ZW5kcyBNb2RlbFByb3BlcnRpZXM+KFByb3BzOiBQKTogQ29udHJvbGxlcjxQPiB7XG4gIGNvbnN0IHV1aWQgPSBQcm9wcy51dWlkXG4gICAgPyBQcm9wcy51dWlkXG4gICAgOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5pZGVudGlmaWVyLCBndWlkKCkpO1xuICBjb25zdCBTdG9yZSA9IHR5cGVzXG4gICAgLm1vZGVsKClcbiAgICAucHJvcHMoeyB1dWlkIH0pXG4gICAgLnByb3BzKFByb3BzKVxuICAgIC5hY3Rpb25zKHNlbGYgPT4gKHtcbiAgICAgIGFmdGVyQ3JlYXRlKCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQWZ0ZXJDcmVhdGUoKTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQmVmb3JlRGVzdHJveSgpO1xuICAgICAgfSxcbiAgICAgIGFmdGVyQXR0YWNoKCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQWZ0ZXJBdHRhY2goKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIGNsYXNzIENvbnRyb2xsZXJDbGFzcyB7XG4gICAgcHVibGljIHN0YXRpYyBQcm9wcyA9IFByb3BzO1xuICAgIHB1YmxpYyBzdGF0aWMgU3RvcmUgPSBTdG9yZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgJG1vZGVsOiBJbnN0YW5jZTx0eXBlb2YgU3RvcmU+KSB7XG4gICAgICB1bnByb3RlY3QoZ2V0Um9vdCh0aGlzLiRtb2RlbCBhcyBJQW55U3RhdGVUcmVlTm9kZSkpO1xuICAgIH1cbiAgICBwdWJsaWMgJG1vZGVsQmVmb3JlRGVzdHJveSgpIHt9XG4gICAgcHVibGljICRtb2RlbEFmdGVyQXR0YWNoKCkge31cbiAgICBwdWJsaWMgJG1vZGVsQWZ0ZXJDcmVhdGUoKSB7fVxuICAgIHB1YmxpYyAkcmVzb2x2ZUlkZW50aWZpZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEJ1bmRsZShDb250cm9sbGVyQ2xhc3MpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xsZXI8UCBleHRlbmRzIE1vZGVsUHJvcGVydGllcyA9IE1vZGVsUHJvcGVydGllcz4ge1xuICBQcm9wczogUDtcbiAgU3RvcmU6IElNb2RlbFR5cGU8UCwge30+O1xuICBuZXcgKC4uLmFyZ3M6IGFueVtdKToge1xuICAgICRtb2RlbDogSW5zdGFuY2U8SU1vZGVsVHlwZTxQICYgeyB1dWlkOiBJU2ltcGxlVHlwZTxzdHJpbmc+IH0sIHt9Pj47XG4gICAgJG1vZGVsQmVmb3JlRGVzdHJveSgpOiB2b2lkO1xuICAgICRtb2RlbEFmdGVyQXR0YWNoKCk6IHZvaWQ7XG4gICAgJG1vZGVsQWZ0ZXJDcmVhdGUoKTogdm9pZDtcbiAgICAkcmVzb2x2ZUlkZW50aWZpZXI8VCBleHRlbmRzIENvbnRyb2xsZXI+KFxuICAgICAgYnVuZGxlVHlwZTogVCxcbiAgICAgIGlkZW50aWZpZXI6IHN0cmluZ1xuICAgICk6IEluc3RhbmNlVHlwZTxUPiB8IG51bGw7XG4gIH07XG59XG4iXX0=