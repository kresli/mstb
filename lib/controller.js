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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  _defineProperty(ControllerClass, "Props", Props);

  _defineProperty(ControllerClass, "Store", Store);

  return (0, _internal.Bundle)(ControllerClass);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQcm9wcyIsInV1aWQiLCJ0eXBlcyIsIm9wdGlvbmFsIiwiaWRlbnRpZmllciIsIlN0b3JlIiwibW9kZWwiLCJwcm9wcyIsImFjdGlvbnMiLCJzZWxmIiwiYWZ0ZXJDcmVhdGUiLCIkY29udHJvbGxlciIsIiRtb2RlbEFmdGVyQ3JlYXRlIiwiYmVmb3JlRGVzdHJveSIsIiRtb2RlbEJlZm9yZURlc3Ryb3kiLCJhZnRlckF0dGFjaCIsIiRtb2RlbEFmdGVyQXR0YWNoIiwiQ29udHJvbGxlckNsYXNzIiwiJG1vZGVsIiwiYnVuZGxlVHlwZSIsInByZWljYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBVUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLFNBQVNBLFVBQVQsQ0FBK0NDLEtBQS9DLEVBQXdFO0FBQzdFLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDQyxJQUFOLEdBQ1RELEtBQUssQ0FBQ0MsSUFERyxHQUVUQyxxQkFBTUMsUUFBTixDQUFlRCxxQkFBTUUsVUFBckIsRUFBaUMsdUJBQWpDLENBRko7O0FBR0EsTUFBTUMsS0FBSyxHQUFHSCxxQkFDWEksS0FEVyxHQUVYQyxLQUZXLENBRUw7QUFBRU4sSUFBQUEsSUFBSSxFQUFKQTtBQUFGLEdBRkssRUFHWE0sS0FIVyxDQUdMUCxLQUhLLEVBSVhRLE9BSlcsQ0FJSCxVQUFBQyxJQUFJO0FBQUEsV0FBSztBQUNoQkMsTUFBQUEsV0FEZ0IseUJBQ0Y7QUFDWEQsUUFBQUEsSUFBRCxDQUErQkUsV0FBL0IsQ0FBMkNDLGlCQUEzQztBQUNELE9BSGU7QUFJaEJDLE1BQUFBLGFBSmdCLDJCQUlBO0FBQ2JKLFFBQUFBLElBQUQsQ0FBK0JFLFdBQS9CLENBQTJDRyxtQkFBM0M7QUFDRCxPQU5lO0FBT2hCQyxNQUFBQSxXQVBnQix5QkFPRjtBQUNYTixRQUFBQSxJQUFELENBQStCRSxXQUEvQixDQUEyQ0ssaUJBQTNDO0FBQ0Q7QUFUZSxLQUFMO0FBQUEsR0FKRCxDQUFkOztBQUo2RSxNQW1CdkVDLGVBbkJ1RTtBQUFBO0FBQUE7QUFzQjNFLDZCQUFtQkMsTUFBbkIsRUFBbUQ7QUFBQTs7QUFBQTtBQUNqRCxvQ0FBVSw0QkFBUSxLQUFLQSxNQUFiLENBQVY7QUFDRDs7QUF4QjBFO0FBQUE7QUFBQSw0Q0F5QjlDLENBQUU7QUF6QjRDO0FBQUE7QUFBQSwwQ0EwQmhELENBQUU7QUExQjhDO0FBQUE7QUFBQSwwQ0EyQmhELENBQUU7QUEzQjhDO0FBQUE7QUFBQSwrQkE2QnpFQyxVQTdCeUUsRUE4QnpFQyxRQTlCeUUsRUErQnpFO0FBQ0EsZUFBTyxFQUFQO0FBQ0Q7QUFqQzBFOztBQUFBO0FBQUE7O0FBQUEsa0JBbUJ2RUgsZUFuQnVFLFdBb0JyRGpCLEtBcEJxRDs7QUFBQSxrQkFtQnZFaUIsZUFuQnVFLFdBcUJyRFosS0FyQnFEOztBQW1DN0UsU0FBTyxzQkFBT1ksZUFBUCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tZW1wdHlcbmltcG9ydCB7XG4gIGdldFJvb3QsXG4gIElBbnlTdGF0ZVRyZWVOb2RlLFxuICBJTW9kZWxUeXBlLFxuICBJbnN0YW5jZSxcbiAgSVNpbXBsZVR5cGUsXG4gIE1vZGVsUHJvcGVydGllcyxcbiAgdW5wcm90ZWN0XG59IGZyb20gXCJtb2J4LXN0YXRlLXRyZWVcIjtcbmltcG9ydCB7IHR5cGVzIH0gZnJvbSBcIm1vYngtc3RhdGUtdHJlZVwiO1xuaW1wb3J0IGd1aWQgZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IEJ1bmRsZSB9IGZyb20gXCIuL2ludGVybmFsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250cm9sbGVyPFAgZXh0ZW5kcyBNb2RlbFByb3BlcnRpZXM+KFByb3BzOiBQKTogQ29udHJvbGxlcjxQPiB7XG4gIGNvbnN0IHV1aWQgPSBQcm9wcy51dWlkXG4gICAgPyBQcm9wcy51dWlkXG4gICAgOiB0eXBlcy5vcHRpb25hbCh0eXBlcy5pZGVudGlmaWVyLCBndWlkKCkpO1xuICBjb25zdCBTdG9yZSA9IHR5cGVzXG4gICAgLm1vZGVsKClcbiAgICAucHJvcHMoeyB1dWlkIH0pXG4gICAgLnByb3BzKFByb3BzKVxuICAgIC5hY3Rpb25zKHNlbGYgPT4gKHtcbiAgICAgIGFmdGVyQ3JlYXRlKCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQWZ0ZXJDcmVhdGUoKTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQmVmb3JlRGVzdHJveSgpO1xuICAgICAgfSxcbiAgICAgIGFmdGVyQXR0YWNoKCkge1xuICAgICAgICAoc2VsZiBhcyB7ICRjb250cm9sbGVyOiBhbnkgfSkuJGNvbnRyb2xsZXIuJG1vZGVsQWZ0ZXJBdHRhY2goKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIGNsYXNzIENvbnRyb2xsZXJDbGFzcyB7XG4gICAgcHVibGljIHN0YXRpYyBQcm9wcyA9IFByb3BzO1xuICAgIHB1YmxpYyBzdGF0aWMgU3RvcmUgPSBTdG9yZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgJG1vZGVsOiBJbnN0YW5jZTx0eXBlb2YgU3RvcmU+KSB7XG4gICAgICB1bnByb3RlY3QoZ2V0Um9vdCh0aGlzLiRtb2RlbCBhcyBJQW55U3RhdGVUcmVlTm9kZSkpO1xuICAgIH1cbiAgICBwdWJsaWMgJG1vZGVsQmVmb3JlRGVzdHJveSgpIHt9XG4gICAgcHVibGljICRtb2RlbEFmdGVyQXR0YWNoKCkge31cbiAgICBwdWJsaWMgJG1vZGVsQWZ0ZXJDcmVhdGUoKSB7fVxuICAgIHB1YmxpYyAkcmVzb2x2ZTxUIGV4dGVuZHMgQ29udHJvbGxlcj4oXG4gICAgICBidW5kbGVUeXBlOiBULFxuICAgICAgcHJlaWNhdGU6IChidW5kbGU6IEluc3RhbmNlPFQ+KSA9PiBib29sZWFuXG4gICAgKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG4gIHJldHVybiBCdW5kbGUoQ29udHJvbGxlckNsYXNzKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb250cm9sbGVyPFAgZXh0ZW5kcyBNb2RlbFByb3BlcnRpZXMgPSBNb2RlbFByb3BlcnRpZXM+IHtcbiAgUHJvcHM6IFA7XG4gIFN0b3JlOiBJTW9kZWxUeXBlPFAsIHt9PjtcbiAgbmV3ICguLi5hcmdzOiBhbnlbXSk6IHtcbiAgICAkbW9kZWw6IEluc3RhbmNlPElNb2RlbFR5cGU8UCAmIHsgdXVpZDogSVNpbXBsZVR5cGU8c3RyaW5nPiB9LCB7fT4+O1xuICAgICRtb2RlbEJlZm9yZURlc3Ryb3koKTogdm9pZDtcbiAgICAkbW9kZWxBZnRlckF0dGFjaCgpOiB2b2lkO1xuICAgICRtb2RlbEFmdGVyQ3JlYXRlKCk6IHZvaWQ7XG4gICAgJHJlc29sdmU8VCBleHRlbmRzIENvbnRyb2xsZXI+KFxuICAgICAgYnVuZGxlVHlwZTogVCxcbiAgICAgIHByZWljYXRlOiAoYnVuZGxlOiBJbnN0YW5jZTxUPikgPT4gYm9vbGVhblxuICAgICk6IEFycmF5PEluc3RhbmNlPFQ+PjtcbiAgfTtcbn1cbiJdfQ==