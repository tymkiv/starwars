/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// begin setup\nvar speed = 10;\nvar number = 1000;\nvar stars = [];\n\n// const setup = {\n//   speed: 1,\n//   number: 800,\n//   stars: [],\n//   raf: () => {\n//     ctx.clearRect(0, 0, width, height);\n\n//     setup.stars.forEach(star => star.show());\n\n//     // window.requestAnimationFrame(setup.raf);\n//   }\n// }\n\n// end setup\n\n\nvar root = document.getElementById('root');\n\nvar canvas = document.createElement('canvas');\nvar ctx = canvas.getContext('2d');\n\nvar width = root.clientWidth;\nvar height = root.clientHeight;\n\ncanvas.width = root.clientWidth;\ncanvas.height = root.clientHeight;\n\nroot.appendChild(canvas);\n\nfunction map(value, start1, stop1, start2, stop2) {\n  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));\n}\n\nvar Star = function () {\n  function Star() {\n    _classCallCheck(this, Star);\n\n    this.x = Math.random() * (width + width) - width;\n    this.y = Math.random() * (height + height) - height;\n    this.z = Math.random() * width;\n    this.pz = this.z;\n  }\n\n  _createClass(Star, [{\n    key: 'update',\n    value: function update() {\n      this.z = this.z - speed;\n\n      if (this.z < 1) {\n        this.z = width;\n        this.x = Math.random() * (width + width) - width;\n        this.y = Math.random() * (height + height) - height;\n        this.pz = this.z;\n      }\n    }\n  }, {\n    key: 'show',\n    value: function show() {\n\n      var sx = map(this.x / this.z, 0, 1, 0, width);\n      var sy = map(this.y / this.z, 0, 1, 0, height);\n\n      var r = map(this.z, 0, width, 4, 0);\n\n      var px = map(this.x / this.pz, 0, 1, 0, width);\n      var py = map(this.y / this.pz, 0, 1, 0, height);\n\n      var gradient = ctx.createLinearGradient(width / 2 - px, height / 2 - py, width / 2 - sx, height / 2 - sy);\n\n      gradient.addColorStop(0, '#000');\n      // // gradient.addColorStop(.5, 'cyan');\n      gradient.addColorStop(1, '#fff');\n\n      // ctx.fillStyle = '#fff';\n      // ctx.strokeStyle = '#fff';\n      ctx.strokeStyle = gradient;\n      ctx.beginPath();\n      // ctx.arc(width/2 - sx, height/2 - sy, r, 0, 2 * Math.PI);\n      // ctx.fill();\n\n\n      ctx.lineWidth = r;\n      ctx.lineCap = 'round';\n      ctx.moveTo(width / 2 - px, height / 2 - py);\n      ctx.lineTo(width / 2 - sx, height / 2 - sy);\n      ctx.stroke();\n      ctx.closePath();\n    }\n  }]);\n\n  return Star;\n}();\n\nfunction begin() {\n  for (var i = 0; i < number; i++) {\n    stars.push(new Star());\n  }\n}\n\nfunction raf() {\n  ctx.clearRect(0, 0, width, height);\n\n  stars.forEach(function (star) {\n    star.show();\n    star.update();\n  });\n\n  window.requestAnimationFrame(raf);\n}\n\nbegin();\nraf();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGJlZ2luIHNldHVwXG5jb25zdCBzcGVlZCA9IDEwO1xuY29uc3QgbnVtYmVyID0gMTAwMDtcbmNvbnN0IHN0YXJzID0gW107XG5cbi8vIGNvbnN0IHNldHVwID0ge1xuLy8gICBzcGVlZDogMSxcbi8vICAgbnVtYmVyOiA4MDAsXG4vLyAgIHN0YXJzOiBbXSxcbi8vICAgcmFmOiAoKSA9PiB7XG4vLyAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuLy8gICAgIHNldHVwLnN0YXJzLmZvckVhY2goc3RhciA9PiBzdGFyLnNob3coKSk7XG5cbi8vICAgICAvLyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNldHVwLnJhZik7XG4vLyAgIH1cbi8vIH1cblxuLy8gZW5kIHNldHVwXG5cblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbmNvbnN0IHdpZHRoID0gcm9vdC5jbGllbnRXaWR0aDtcbmNvbnN0IGhlaWdodCA9IHJvb3QuY2xpZW50SGVpZ2h0O1xuXG5jYW52YXMud2lkdGggPSByb290LmNsaWVudFdpZHRoO1xuY2FudmFzLmhlaWdodCA9IHJvb3QuY2xpZW50SGVpZ2h0O1xuXG5yb290LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbmZ1bmN0aW9uIG1hcCh2YWx1ZSwgc3RhcnQxLCBzdG9wMSwgc3RhcnQyLCBzdG9wMikge1xuICByZXR1cm4gc3RhcnQyICsgKHN0b3AyIC0gc3RhcnQyKSAqICgodmFsdWUgLSBzdGFydDEpIC8gKHN0b3AxIC0gc3RhcnQxKSk7XG59XG5cbmNsYXNzIFN0YXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogKHdpZHRoICsgd2lkdGgpIC0gd2lkdGg7XG4gICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIChoZWlnaHQgKyBoZWlnaHQpIC0gaGVpZ2h0O1xuICAgIHRoaXMueiA9IE1hdGgucmFuZG9tKCkgKiB3aWR0aDtcbiAgICB0aGlzLnB6ID0gdGhpcy56O1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMueiA9IHRoaXMueiAtIHNwZWVkO1xuXG4gICAgaWYgKHRoaXMueiA8IDEpIHtcbiAgICAgIHRoaXMueiA9IHdpZHRoO1xuICAgICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqICh3aWR0aCArIHdpZHRoKSAtIHdpZHRoO1xuICAgICAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIChoZWlnaHQgKyBoZWlnaHQpIC0gaGVpZ2h0O1xuICAgICAgdGhpcy5weiA9IHRoaXMuejtcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIFxuICAgIGNvbnN0IHN4ID0gbWFwKHRoaXMueCAvIHRoaXMueiwgMCwgMSwgMCwgd2lkdGgpO1xuICAgIGNvbnN0IHN5ID0gbWFwKHRoaXMueSAvIHRoaXMueiwgMCwgMSwgMCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHIgPSBtYXAodGhpcy56LCAwLCB3aWR0aCwgNCwgMCk7XG5cbiAgICBjb25zdCBweCA9IG1hcCh0aGlzLnggLyB0aGlzLnB6LCAwLCAxLCAwLCB3aWR0aCk7XG4gICAgY29uc3QgcHkgPSBtYXAodGhpcy55IC8gdGhpcy5weiwgMCwgMSwgMCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHdpZHRoLzIgLSBweCwgaGVpZ2h0LzIgLSBweSwgd2lkdGgvMiAtIHN4LCBoZWlnaHQvMiAtIHN5KTtcblxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnIzAwMCcpO1xuICAgIC8vIC8vIGdyYWRpZW50LmFkZENvbG9yU3RvcCguNSwgJ2N5YW4nKTtcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyNmZmYnKTtcblxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnI2ZmZic7XG4gICAgLy8gY3R4LnN0cm9rZVN0eWxlID0gJyNmZmYnO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGdyYWRpZW50O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyBjdHguYXJjKHdpZHRoLzIgLSBzeCwgaGVpZ2h0LzIgLSBzeSwgciwgMCwgMiAqIE1hdGguUEkpO1xuICAgIC8vIGN0eC5maWxsKCk7XG4gICAgXG5cbiAgICBjdHgubGluZVdpZHRoID0gcjtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgY3R4Lm1vdmVUbyh3aWR0aC8yIC0gcHgsIGhlaWdodC8yIC0gcHkpOyBcbiAgICBjdHgubGluZVRvKHdpZHRoLzIgLSBzeCwgaGVpZ2h0LzIgLSBzeSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiZWdpbigpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgIHN0YXJzLnB1c2gobmV3IFN0YXIoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFmKCkge1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIHN0YXJzLmZvckVhY2goc3RhciA9PiB7XG4gICAgc3Rhci5zaG93KCk7XG4gICAgc3Rhci51cGRhdGUoKTtcbiAgfSk7XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpO1xuXG59XG5cbmJlZ2luKCk7XG5yYWYoKTtcblxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });