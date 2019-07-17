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
      key: "$resolve",
      value: function $resolve(bundleType, preicate) {
        return [];
      }
    }]);

    return ControllerClass;
  }();

  ControllerClass.Props = Props;
  ControllerClass.Store = Store;
  return (0, _internal.Bundle)(ControllerClass);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQcm9wcyIsInV1aWQiLCJ0eXBlcyIsIm9wdGlvbmFsIiwiaWRlbnRpZmllciIsIlN0b3JlIiwibW9kZWwiLCJwcm9wcyIsImFjdGlvbnMiLCJzZWxmIiwiYWZ0ZXJDcmVhdGUiLCIkY29udHJvbGxlciIsIiRtb2RlbEFmdGVyQ3JlYXRlIiwiYmVmb3JlRGVzdHJveSIsIiRtb2RlbEJlZm9yZURlc3Ryb3kiLCJhZnRlckF0dGFjaCIsIiRtb2RlbEFmdGVyQXR0YWNoIiwiQ29udHJvbGxlckNsYXNzIiwiJG1vZGVsIiwiYnVuZGxlVHlwZSIsInByZWljYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBVUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxVQUFULENBQStDQyxLQUEvQyxFQUF3RTtBQUM3RSxNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0MsSUFBTixHQUNURCxLQUFLLENBQUNDLElBREcsR0FFVEMscUJBQU1DLFFBQU4sQ0FBZUQscUJBQU1FLFVBQXJCLEVBQWlDLHVCQUFqQyxDQUZKOztBQUdBLE1BQU1DLEtBQUssR0FBR0gscUJBQ1hJLEtBRFcsR0FFWEMsS0FGVyxDQUVMO0FBQUVOLElBQUFBLElBQUksRUFBSkE7QUFBRixHQUZLLEVBR1hNLEtBSFcsQ0FHTFAsS0FISyxFQUlYUSxPQUpXLENBSUgsVUFBQUMsSUFBSTtBQUFBLFdBQUs7QUFDaEJDLE1BQUFBLFdBRGdCLHlCQUNGO0FBQ1hELFFBQUFBLElBQUQsQ0FBK0JFLFdBQS9CLENBQTJDQyxpQkFBM0M7QUFDRCxPQUhlO0FBSWhCQyxNQUFBQSxhQUpnQiwyQkFJQTtBQUNiSixRQUFBQSxJQUFELENBQStCRSxXQUEvQixDQUEyQ0csbUJBQTNDO0FBQ0QsT0FOZTtBQU9oQkMsTUFBQUEsV0FQZ0IseUJBT0Y7QUFDWE4sUUFBQUEsSUFBRCxDQUErQkUsV0FBL0IsQ0FBMkNLLGlCQUEzQztBQUNEO0FBVGUsS0FBTDtBQUFBLEdBSkQsQ0FBZDs7QUFKNkUsTUFtQnZFQyxlQW5CdUU7QUFBQTtBQUFBO0FBc0IzRSw2QkFBbUJDLE1BQW5CLEVBQW1EO0FBQUE7O0FBQUE7QUFDakQsb0NBQVUsNEJBQVEsS0FBS0EsTUFBYixDQUFWO0FBQ0Q7O0FBeEIwRTtBQUFBO0FBQUEsNENBeUI5QyxDQUFFO0FBekI0QztBQUFBO0FBQUEsMENBMEJoRCxDQUFFO0FBMUI4QztBQUFBO0FBQUEsMENBMkJoRCxDQUFFO0FBM0I4QztBQUFBO0FBQUEsK0JBNkJ6RUMsVUE3QnlFLEVBOEJ6RUMsUUE5QnlFLEVBK0J6RTtBQUNBLGVBQU8sRUFBUDtBQUNEO0FBakMwRTs7QUFBQTtBQUFBOztBQW1CdkVILEVBQUFBLGVBbkJ1RSxDQW9CN0RqQixLQXBCNkQsR0FvQnJEQSxLQXBCcUQ7QUFtQnZFaUIsRUFBQUEsZUFuQnVFLENBcUI3RFosS0FyQjZELEdBcUJyREEsS0FyQnFEO0FBbUM3RSxTQUFPLHNCQUFPWSxlQUFQLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBuby1lbXB0eVxuaW1wb3J0IHtcbiAgZ2V0Um9vdCxcbiAgSUFueVN0YXRlVHJlZU5vZGUsXG4gIElNb2RlbFR5cGUsXG4gIEluc3RhbmNlLFxuICBJU2ltcGxlVHlwZSxcbiAgTW9kZWxQcm9wZXJ0aWVzLFxuICB1bnByb3RlY3Rcbn0gZnJvbSBcIm1vYngtc3RhdGUtdHJlZVwiO1xuaW1wb3J0IHsgdHlwZXMgfSBmcm9tIFwibW9ieC1zdGF0ZS10cmVlXCI7XG5pbXBvcnQgZ3VpZCBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgQnVuZGxlIH0gZnJvbSBcIi4vaW50ZXJuYWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbnRyb2xsZXI8UCBleHRlbmRzIE1vZGVsUHJvcGVydGllcz4oUHJvcHM6IFApOiBDb250cm9sbGVyPFA+IHtcbiAgY29uc3QgdXVpZCA9IFByb3BzLnV1aWRcbiAgICA/IFByb3BzLnV1aWRcbiAgICA6IHR5cGVzLm9wdGlvbmFsKHR5cGVzLmlkZW50aWZpZXIsIGd1aWQoKSk7XG4gIGNvbnN0IFN0b3JlID0gdHlwZXNcbiAgICAubW9kZWwoKVxuICAgIC5wcm9wcyh7IHV1aWQgfSlcbiAgICAucHJvcHMoUHJvcHMpXG4gICAgLmFjdGlvbnMoc2VsZiA9PiAoe1xuICAgICAgYWZ0ZXJDcmVhdGUoKSB7XG4gICAgICAgIChzZWxmIGFzIHsgJGNvbnRyb2xsZXI6IGFueSB9KS4kY29udHJvbGxlci4kbW9kZWxBZnRlckNyZWF0ZSgpO1xuICAgICAgfSxcbiAgICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIChzZWxmIGFzIHsgJGNvbnRyb2xsZXI6IGFueSB9KS4kY29udHJvbGxlci4kbW9kZWxCZWZvcmVEZXN0cm95KCk7XG4gICAgICB9LFxuICAgICAgYWZ0ZXJBdHRhY2goKSB7XG4gICAgICAgIChzZWxmIGFzIHsgJGNvbnRyb2xsZXI6IGFueSB9KS4kY29udHJvbGxlci4kbW9kZWxBZnRlckF0dGFjaCgpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgY2xhc3MgQ29udHJvbGxlckNsYXNzIHtcbiAgICBwdWJsaWMgc3RhdGljIFByb3BzID0gUHJvcHM7XG4gICAgcHVibGljIHN0YXRpYyBTdG9yZSA9IFN0b3JlO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyAkbW9kZWw6IEluc3RhbmNlPHR5cGVvZiBTdG9yZT4pIHtcbiAgICAgIHVucHJvdGVjdChnZXRSb290KHRoaXMuJG1vZGVsIGFzIElBbnlTdGF0ZVRyZWVOb2RlKSk7XG4gICAgfVxuICAgIHB1YmxpYyAkbW9kZWxCZWZvcmVEZXN0cm95KCkge31cbiAgICBwdWJsaWMgJG1vZGVsQWZ0ZXJBdHRhY2goKSB7fVxuICAgIHB1YmxpYyAkbW9kZWxBZnRlckNyZWF0ZSgpIHt9XG4gICAgcHVibGljICRyZXNvbHZlPFQgZXh0ZW5kcyBDb250cm9sbGVyPihcbiAgICAgIGJ1bmRsZVR5cGU6IFQsXG4gICAgICBwcmVpY2F0ZTogKGJ1bmRsZTogSW5zdGFuY2U8VD4pID0+IGJvb2xlYW5cbiAgICApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEJ1bmRsZShDb250cm9sbGVyQ2xhc3MpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyb2xsZXI8UCBleHRlbmRzIE1vZGVsUHJvcGVydGllcyA9IE1vZGVsUHJvcGVydGllcz4ge1xuICBQcm9wczogUDtcbiAgU3RvcmU6IElNb2RlbFR5cGU8UCwge30+O1xuICBuZXcgKC4uLmFyZ3M6IGFueVtdKToge1xuICAgICRtb2RlbDogSW5zdGFuY2U8SU1vZGVsVHlwZTxQICYgeyB1dWlkOiBJU2ltcGxlVHlwZTxzdHJpbmc+IH0sIHt9Pj47XG4gICAgJG1vZGVsQmVmb3JlRGVzdHJveSgpOiB2b2lkO1xuICAgICRtb2RlbEFmdGVyQXR0YWNoKCk6IHZvaWQ7XG4gICAgJG1vZGVsQWZ0ZXJDcmVhdGUoKTogdm9pZDtcbiAgICAkcmVzb2x2ZTxUIGV4dGVuZHMgQ29udHJvbGxlcj4oXG4gICAgICBidW5kbGVUeXBlOiBULFxuICAgICAgcHJlaWNhdGU6IChidW5kbGU6IEluc3RhbmNlPFQ+KSA9PiBib29sZWFuXG4gICAgKTogQXJyYXk8SW5zdGFuY2U8VD4+O1xuICB9O1xufVxuIl19