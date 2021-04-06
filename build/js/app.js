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
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// begin setup\nvar speed = 30;\nvar number = 1000;\n\n// end setup\n\nvar stars = [];\n\nvar root = document.getElementById('root');\n\nvar canvas = document.createElement('canvas');\nvar ctx = canvas.getContext('2d');\n\nvar width = root.clientWidth;\nvar height = root.clientHeight;\n\ncanvas.width = root.clientWidth;\ncanvas.height = root.clientHeight;\n\nroot.appendChild(canvas);\n\nfunction map(value, start1, stop1, start2, stop2) {\n  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));\n}\n\nvar Star = function () {\n  function Star() {\n    _classCallCheck(this, Star);\n\n    this.x = Math.random() * (width + width) - width;\n    this.y = Math.random() * (height + height) - height;\n    this.z = Math.random() * width;\n    this.pz = this.z;\n  }\n\n  _createClass(Star, [{\n    key: 'update',\n    value: function update() {\n      this.z = this.z - speed;\n\n      if (this.z < speed) {\n        this.z = width;\n        this.x = Math.random() * (width + width) - width;\n        this.y = Math.random() * (height + height) - height;\n        this.pz = this.z;\n      }\n    }\n  }, {\n    key: 'show',\n    value: function show() {\n\n      var sx = map(this.x / this.z, 0, 1, 0, width);\n      var sy = map(this.y / this.z, 0, 1, 0, height);\n\n      var r = map(this.z, 0, width, 4, 0);\n\n      var px = map(this.x / this.pz, 0, 1, 0, width);\n      var py = map(this.y / this.pz, 0, 1, 0, height);\n\n      var gradient = ctx.createLinearGradient(width / 2 - px, height / 2 - py, width / 2 - sx, height / 2 - sy);\n\n      gradient.addColorStop(0, '#000');\n      gradient.addColorStop(1, '#fff');\n\n      // ctx.fillStyle = '#fff';\n      // ctx.strokeStyle = '#fff';\n      ctx.strokeStyle = gradient;\n      ctx.beginPath();\n      // ctx.arc(width/2 - sx, height/2 - sy, r, 0, 2 * Math.PI);\n      // ctx.fill();\n\n      ctx.lineWidth = r;\n      ctx.lineCap = 'round';\n      ctx.moveTo(width / 2 - px, height / 2 - py);\n      ctx.lineTo(width / 2 - sx, height / 2 - sy);\n      ctx.stroke();\n      ctx.closePath();\n    }\n  }]);\n\n  return Star;\n}();\n\nfunction begin() {\n  for (var i = 0; i < number; i++) {\n    stars.push(new Star());\n  }\n}\n\nfunction raf() {\n  ctx.clearRect(0, 0, width, height);\n\n  stars.forEach(function (star) {\n    star.show();\n    star.update();\n  });\n\n  window.requestAnimationFrame(raf);\n}\n\nbegin();\nraf();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGJlZ2luIHNldHVwXG5jb25zdCBzcGVlZCA9IDMwO1xuY29uc3QgbnVtYmVyID0gMTAwMDtcblxuLy8gZW5kIHNldHVwXG5cbmNvbnN0IHN0YXJzID0gW107XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jb25zdCB3aWR0aCA9IHJvb3QuY2xpZW50V2lkdGg7XG5jb25zdCBoZWlnaHQgPSByb290LmNsaWVudEhlaWdodDtcblxuY2FudmFzLndpZHRoID0gcm9vdC5jbGllbnRXaWR0aDtcbmNhbnZhcy5oZWlnaHQgPSByb290LmNsaWVudEhlaWdodDtcblxucm9vdC5hcHBlbmRDaGlsZChjYW52YXMpO1xuXG5mdW5jdGlvbiBtYXAodmFsdWUsIHN0YXJ0MSwgc3RvcDEsIHN0YXJ0Miwgc3RvcDIpIHtcbiAgcmV0dXJuIHN0YXJ0MiArIChzdG9wMiAtIHN0YXJ0MikgKiAoKHZhbHVlIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpO1xufVxuXG5jbGFzcyBTdGFyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqICh3aWR0aCArIHdpZHRoKSAtIHdpZHRoO1xuICAgIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiAoaGVpZ2h0ICsgaGVpZ2h0KSAtIGhlaWdodDtcbiAgICB0aGlzLnogPSBNYXRoLnJhbmRvbSgpICogd2lkdGg7XG4gICAgdGhpcy5weiA9IHRoaXMuejtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnogPSB0aGlzLnogLSBzcGVlZDtcblxuICAgIGlmICh0aGlzLnogPCBzcGVlZCkge1xuICAgICAgdGhpcy56ID0gd2lkdGg7XG4gICAgICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogKHdpZHRoICsgd2lkdGgpIC0gd2lkdGg7XG4gICAgICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogKGhlaWdodCArIGhlaWdodCkgLSBoZWlnaHQ7XG4gICAgICB0aGlzLnB6ID0gdGhpcy56O1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgXG4gICAgY29uc3Qgc3ggPSBtYXAodGhpcy54IC8gdGhpcy56LCAwLCAxLCAwLCB3aWR0aCk7XG4gICAgY29uc3Qgc3kgPSBtYXAodGhpcy55IC8gdGhpcy56LCAwLCAxLCAwLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgciA9IG1hcCh0aGlzLnosIDAsIHdpZHRoLCA0LCAwKTtcblxuICAgIGNvbnN0IHB4ID0gbWFwKHRoaXMueCAvIHRoaXMucHosIDAsIDEsIDAsIHdpZHRoKTtcbiAgICBjb25zdCBweSA9IG1hcCh0aGlzLnkgLyB0aGlzLnB6LCAwLCAxLCAwLCBoZWlnaHQpO1xuXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQod2lkdGgvMiAtIHB4LCBoZWlnaHQvMiAtIHB5LCB3aWR0aC8yIC0gc3gsIGhlaWdodC8yIC0gc3kpO1xuXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICcjMDAwJyk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICcjZmZmJyk7XG5cbiAgICAvLyBjdHguZmlsbFN0eWxlID0gJyNmZmYnO1xuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9ICcjZmZmJztcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gY3R4LmFyYyh3aWR0aC8yIC0gc3gsIGhlaWdodC8yIC0gc3ksIHIsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IHI7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGN0eC5tb3ZlVG8od2lkdGgvMiAtIHB4LCBoZWlnaHQvMiAtIHB5KTsgXG4gICAgY3R4LmxpbmVUbyh3aWR0aC8yIC0gc3gsIGhlaWdodC8yIC0gc3kpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmVnaW4oKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICBzdGFycy5wdXNoKG5ldyBTdGFyKCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJhZigpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICBzdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgIHN0YXIuc2hvdygpO1xuICAgIHN0YXIudXBkYXRlKCk7XG4gIH0pO1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKTtcblxufVxuXG5iZWdpbigpO1xucmFmKCk7XG5cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ })

/******/ });