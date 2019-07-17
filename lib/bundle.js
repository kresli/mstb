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
      _this.$model = void 0;
      _this.$model = args[0];
      return _this;
    }

    return BundleBase;
  }(Base);

  BundleBase.Props = Base.Props;
  BundleBase.Store = Store;
  return BundleBase;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idW5kbGUudHMiXSwibmFtZXMiOlsiQnVuZGxlIiwiQmFzZSIsIlN0b3JlIiwibmFtZWQiLCJuYW1lIiwic2VsZiIsIiRjb250cm9sbGVyIiwiQnVuZGxlQmFzZSIsInNuYXBzaG90IiwidHlwZXMiLCJvcHRpb25hbCIsImFyZ3MiLCIkbW9kZWwiLCJQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNBLE1BQVQsQ0FBMENDLElBQTFDLEVBQXVEO0FBRTVELE1BQU1DLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJGLElBQUksQ0FBQ0csSUFBdEIsY0FBcUMsVUFBQUMsSUFBSTtBQUFBLFdBQUs7QUFDMURDLE1BQUFBLFdBQVcsRUFBRSxJQUFJTCxJQUFKLENBQVNJLElBQVQ7QUFENkMsS0FBTDtBQUFBLEdBQXpDLENBQWQ7O0FBRjRELE1BT3RERSxVQVBzRDtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsb0NBVzlCQyxRQVg4QixFQVdEO0FBQ3ZELGVBQU9DLHFCQUFNQyxRQUFOLENBQWVSLEtBQWYsRUFBc0JNLFFBQXRCLENBQVA7QUFDRDtBQWJ5RDs7QUFnQjFELDBCQUE0QjtBQUFBOztBQUFBOztBQUFBOztBQUFBLHdDQUFiRyxJQUFhO0FBQWJBLFFBQUFBLElBQWE7QUFBQTs7QUFDMUIsMklBQVNBLElBQVQ7QUFEMEIsWUFGckJDLE1BRXFCO0FBRTFCLFlBQUtBLE1BQUwsR0FBY0QsSUFBSSxDQUFDLENBQUQsQ0FBbEI7QUFGMEI7QUFHM0I7O0FBbkJ5RDtBQUFBLElBT25DVixJQVBtQzs7QUFPdERNLEVBQUFBLFVBUHNELENBUTVDTSxLQVI0QyxHQVFwQ1osSUFBSSxDQUFDWSxLQVIrQjtBQU90RE4sRUFBQUEsVUFQc0QsQ0FTNUNMLEtBVDRDLEdBU3BDQSxLQVRvQztBQXFCNUQsU0FBT0ssVUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSUFueU1vZGVsVHlwZSxcbiAgSU1vZGVsVHlwZSxcbiAgSW5zdGFuY2UsXG4gIElPcHRpb25hbElUeXBlLFxuICBJU2ltcGxlVHlwZSxcbiAgU25hcHNob3RJbixcbiAgdHlwZXNcbn0gZnJvbSBcIm1vYngtc3RhdGUtdHJlZVwiO1xuaW1wb3J0IHsgRXh0cmFjdFByb3BzIH0gZnJvbSBcIm1vYngtc3RhdGUtdHJlZS9kaXN0L2ludGVybmFsXCI7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4vaW50ZXJuYWxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJ1bmRsZTxUQmFzZSBleHRlbmRzIENvbnRyb2xsZXI+KEJhc2U6IFRCYXNlKSB7XG4gIHR5cGUgU3RvcmUgPSBTdG9yZVR5cGU8VEJhc2U+O1xuICBjb25zdCBTdG9yZSA9IEJhc2UuU3RvcmUubmFtZWQoQmFzZS5uYW1lKS52b2xhdGlsZShzZWxmID0+ICh7XG4gICAgJGNvbnRyb2xsZXI6IG5ldyBCYXNlKHNlbGYpXG4gIH0pKSBhcyBTdG9yZTtcblxuICB0eXBlIFAgPSBUQmFzZVtcIlByb3BzXCJdO1xuICBjbGFzcyBCdW5kbGVCYXNlIGV4dGVuZHMgQmFzZSB7XG4gICAgcHVibGljIHN0YXRpYyBQcm9wcyA9IEJhc2UuUHJvcHMgYXMgUDtcbiAgICBwdWJsaWMgc3RhdGljIFN0b3JlID0gU3RvcmU7XG5cbiAgICBwdWJsaWMgc3RhdGljIE9wdGlvbmFsU3RvcmUoc25hcHNob3Q6IFNuYXBzaG90SW48U3RvcmU+KSB7XG4gICAgICByZXR1cm4gdHlwZXMub3B0aW9uYWwoU3RvcmUsIHNuYXBzaG90KTtcbiAgICB9XG4gICAgcHVibGljICRtb2RlbCE6IEluc3RhbmNlPFN0b3JlPjtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgIHRoaXMuJG1vZGVsID0gYXJnc1swXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEJ1bmRsZUJhc2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY3VsYXI8QyBleHRlbmRzIENvbnRyb2xsZXIsIE0gZXh0ZW5kcyBJQW55TW9kZWxUeXBlPiB7XG4gIFByb3BzOiBDW1wiUHJvcHNcIl07XG4gIFN0b3JlOiBJTW9kZWxUeXBlPFxuICAgIEV4dHJhY3RQcm9wczxNPixcbiAgICB7XG4gICAgICAkY29udHJvbGxlcjogSW5zdGFuY2VUeXBlPEM+ICYge1xuICAgICAgICAkbW9kZWw6IEluc3RhbmNlPENpcmN1bGFyPEMsIE0+W1wiU3RvcmVcIl0+O1xuICAgICAgfTtcbiAgICB9XG4gID47XG4gIG5ldyAoLi4uYXJnczogYW55W10pOiBJbnN0YW5jZVR5cGU8Qz47XG59XG5cbnR5cGUgU3RvcmVUeXBlPFRCYXNlIGV4dGVuZHMgQ29udHJvbGxlcj4gPSBDaXJjdWxhcjxcbiAgVEJhc2UsXG4gIElNb2RlbFR5cGU8XG4gICAgVEJhc2VbXCJQcm9wc1wiXSAmIHsgdXVpZDogSU9wdGlvbmFsSVR5cGU8SVNpbXBsZVR5cGU8c3RyaW5nPiwgW3VuZGVmaW5lZF0+IH0sXG4gICAgeyAkY29udHJvbGxlcjogSW5zdGFuY2VUeXBlPFRCYXNlPiB9XG4gID5cbj5bXCJTdG9yZVwiXTtcbiJdfQ==