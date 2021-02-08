"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var x = function x() {
  return 10;
};

var _radius = new WeakMap();

var Circle = /*#__PURE__*/function () {
  function Circle(radius) {
    _classCallCheck(this, Circle);

    _radius.set(this, radius);
  }

  _createClass(Circle, [{
    key: "draw",
    value: function draw() {
      console.log("Circle with radius " + _radius.get(this));
    }
  }]);

  return Circle;
}();

var c = new Circle(10);
c.draw();
