'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mobx = require('mobx');
var mobxStateTree = require('mobx-state-tree');
var guid = _interopDefault(require('uuid'));

var computedAlive = mobx.computed({
  keepAlive: true
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function Controller(Props) {
  var uuid = Props.uuid ? Props.uuid : mobxStateTree.types.optional(mobxStateTree.types.identifier, guid());
  var Store = mobxStateTree.types.model().props({
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
      mobxStateTree.unprotect(mobxStateTree.getRoot(this.$model));
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
  return Bundle(ControllerClass);
}

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
        var model = mobxStateTree.resolveIdentifier(BundleType.Store, this.$model, uuid);
        return model ? model.$controller : null;
      }
    }]);

    return BundleBase;
  }(Base);

  BundleBase.Props = Base.Props;
  BundleBase.Store = Store;
  return BundleBase;
}

Object.defineProperty(exports, 'action', {
  enumerable: true,
  get: function () {
    return mobx.action;
  }
});
exports.Bundle = Bundle;
exports.Controller = Controller;
exports.computedAlive = computedAlive;
