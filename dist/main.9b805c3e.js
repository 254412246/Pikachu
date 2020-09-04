// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "body{\n    background: #FFE600;\n    min-height: 50vh;\n  position: relative;\n}\n .skin{\n    position: relative;\n}\n .nose{\n    position:relative;\n    left: 50%;\n    top: 175px;\n    width: 0;\n    height: 0;\n    border-left: 18px solid transparent;\n    border-right: 18px solid transparent;\n    border-top: 20px solid black;\n    border-radius: 50%;\n    margin-left: -18px;\n}\n@keyframes wave {\n    0%{\n\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n .nose:hover{\n    transform-origin: 50% 100%;\n    animation: wave 300ms infinite linear;\n}\n.eys{\n    border: 2px solid black;\n    height: 64px;\n    width: 64px;\n    position: absolute;\n    margin-left: -32px;\n    left: 50%;\n    top: 140px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n.eys::before{\n    content: '';\n    display: block;\n    border: 2px solid #000000;\n    width: 32px;\n    height: 32px;\n    background: #FFFFFF;\n    border-radius: 50%;\n    margin-left: 8px;\n}\n.eys.left{\ntransform: translateX(-130px);\n}\n.eys.right{\n    transform: translateX(130px);\n}\n.mouth{\n    width: 220px;\n    height: 180px;\n    position: absolute;\n    left: 50%;\n    top: 220px;\n    margin-left: -110px;\n}\n.mouth .up .lip{\n    position: absolute;\n    border: 3px solid black;\n    width: 114px;\n    height: 24px;\n    background: #FFE600;\n    border-top: none;\n    z-index: 9;\n}\n.mouth .up .lip.right{\n    margin-left: -110px;\n    left: 48%;\n    border-radius: 0 0 0 50px;\n    border-right: none;\n    transform: rotate(-15deg);\n}\n.mouth .up .lip.left{\n     margin-left: 62px;\n     border-radius: 0 0 50px 0;\n     border-left: none;\n     transform: rotate(15deg);\n     left:47px;\n }\n\n.down{\n    position: absolute;\n    height: 190px;\n    width: 90%;\n    margin-left: 10px;\n    top: 8px;\n    overflow: hidden;\n}\n.down .yuan{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    height: 800px;\n    width: 180px;\n    bottom: 0;\n    margin-left: -90px;\n    background: #9B000A;\n    border-radius: 90px/350px;\n    z-index: 2;\n    overflow: hidden;\n}\n.down .yuan .yuan1 {\n    display: block;\n    position: absolute;\n    width: 200px;\n    height: 300px;\n    left: 50%;\n    bottom: -155px;\n    background: #FF485F;\n    border-radius: 50%;\n    margin-left: -100px;\n}\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    background: #FF0000;\n    border-radius: 50%;\n    margin-left: -44px;\n    width: 88px;\n    height: 88px;\n    top: 270px;\n}\n.face.left{\n    transform: translateX(200px);\n    background: #ff0000;\n  border-radius: 50%;\n}\n.face.right{\n    transform: translateX(-200px);\n    background: #ff0000;\n  border-radius: 50%;\n}\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = document.querySelector('#demo');
var style = document.querySelector('#style'); // let  btnPause=document.querySelector('#btnPause')

var n = -1;
var string2 = '';
var time = 50; //parcel src/index.html

var player = {
  init: function init() {
    html.innerHTML = string2; //打印出新字符串

    style.innerHTML = _css.default.substring(0, n); //从0到n打印出来

    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow

        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    n += 1;

    if (n + 1 > _css.default.length) {
      window.clearInterval(id);
      return;
    }

    if (_css.default[n] === "\n") {
      string2 += "<br>"; //当有回车时变成<br>加进去，一次加了4个字符就不会出现 < 这个了
    } else if (_css.default[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += _css.default[n]; //其他的直接放进去
    }

    html.innerHTML = string2; //打印出新字符串

    style.innerHTML = _css.default.substring(0, n); //从0到n打印出来

    window.scrollTo(0, 9999);
  },
  play: function play() {
    return setInterval(player.run, time);
  }
};

var fasesss = function fasesss() {
  window.clearInterval(id);
  time = 50;
  id = player.play();
};

var id = player.play();

btnPause.onclick = function () {
  window.clearInterval(id);
};

btnPlay.onclick = function () {
  window.clearInterval(id);
  id = player.play();
};

btnFast.onclick = function () {
  window.clearInterval(id);
  time = 0;
  id = player.play();
};

btnSlow.onclick = function () {
  window.clearInterval(id);
  time = 200;
  id = player.play();
};

btnNormal.onclick = fasesss;
},{"./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.9b805c3e.js.map