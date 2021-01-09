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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var API =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function API(config) {
    _classCallCheck(this, API);

    this.config = config;
    this.url = "https://inlight-english.com/" + config.url;
    this.method = config.method || "GET";
    this.data = config.data;
    this.success = config.success;
    this.err = config.err;
    this.callAjax();
  }

  _createClass(API, [{
    key: "callAjax",
    value: function callAjax() {
      var _this = this;

      $.ajax({
        url: this.url,
        method: this.method,
        data: JSON.stringify(this.data),
        headers: {
          Authorization: localStorage.getItem("rm7-token"),
          "Content-Type": "application/json"
        }
      }).done(function (res) {
        var data = res.data || {};

        if (data.token) {
          localStorage.setItem("rm7-token", data.token);
        } // Run callback


        if ($.isFunction(_this.success)) {
          _this.success(res);
        }
      }).fail(function (err, textStatus, errorThrown) {
        _this.err(err, textStatus, errorThrown);
      });
    }
  }]);

  return API;
}();

exports.default = API;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageListener = pageListener;
exports.reachSection = void 0;

// Custom Ultilities Functions
var reachSection = function reachSection() {
  var $target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if ($target.offset().top > 0) {
    if (window.pageYOffset > $target.offset().top - window.innerHeight / 1.25 && window.pageYOffset < $target.offset().top + window.innerHeight / 1.25) {
      return true;
    } else {
      return false;
    }
  }

  return false;
}; // Custom Event Listener


exports.reachSection = reachSection;

function pageListener() {
  this.events = {};
}

pageListener.prototype.on = function (eventType, listener) {
  // If the eventType Property not exist yet, create an empty aray of that property
  this.events[eventType] = this.events[eventType] || [];
  this.events[eventType].push(listener);
};

pageListener.prototype.emit = function (eventType) {
  if (this.events[eventType] && this.events[eventType].length > 0) {
    // Loop through the events[eventType] array of function and invoke each of them
    this.events[eventType].forEach(function (item) {
      item();
    });
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _home = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  if ($("#realme-7-teasing").length > 0) {
    var home = new _home.default();
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _scrollOut = _interopRequireDefault(__webpack_require__(4));

var _Common = _interopRequireDefault(__webpack_require__(5));

var _Countdown = _interopRequireDefault(__webpack_require__(6));

var _Banner = _interopRequireDefault(__webpack_require__(7));

var _TVC = _interopRequireDefault(__webpack_require__(8));

var _Milestones = _interopRequireDefault(__webpack_require__(22));

var _Ranking = _interopRequireDefault(__webpack_require__(23));

var _News = _interopRequireDefault(__webpack_require__(24));

var _Intro = _interopRequireDefault(__webpack_require__(25));

var _Minigame = _interopRequireDefault(__webpack_require__(26));

var _Minigame2 = _interopRequireDefault(__webpack_require__(28));

var _utils = __webpack_require__(1);

var _game_clock = _interopRequireDefault(__webpack_require__(29));

var _game_auth = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Home =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Home() {
    _classCallCheck(this, Home);

    // Page Listener
    window.realme7TeasingListener = new _utils.pageListener();
    window.currentGameAvailable = 1; // Ipad devices and below

    window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
    $(window).on("resize", function () {
      window.IS_MOBILE = window.innerWidth >= 768 ? false : true;
    }); // Common Behavior

    var common = new _Common.default(); // Section Scripts Init

    var banner = new _Banner.default();
    var countDown = new _Countdown.default();
    var tvc = new _TVC.default();
    var milestones = new _Milestones.default();
    var ranking = new _Ranking.default();
    var news = new _News.default();
    var intro = new _Intro.default(); // Utils

    var gameClock = new _game_clock.default();
    var gameAuth = new _game_auth.default(); // Mini game instance

    if ($("#minigame-1-section").length > 0) {
      var minigame1 = new _Minigame.default();
    }

    if ($("#minigame-2-section").length > 0) {
      var minigame2 = new _Minigame2.default();
    } // Bind Event


    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Home, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.ScrollOutSetup();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "ScrollOutSetup",
    value: function ScrollOutSetup() {
      (0, _scrollOut.default)({
        onShown: function onShown(el) {
          // use the web animation API
          console.log("in: ", $(el).attr("id"));
          var elementID = $(el).attr("id");
          realme7TeasingListener.emit("".concat(elementID, "-anim"));
        },
        threshold: 0.225
      });
    }
  }]);

  return Home;
}();

exports.default = Home;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function clamp(v, min, max) {
    return min > v ? min : max < v ? max : v;
}
function sign(x) {
    return (+(x > 0) - +(x < 0));
}
function round(n) {
    return Math.round(n * 10000) / 10000;
}

var cache = {};
function replacer(match) {
    return '-' + match[0].toLowerCase();
}
function hyphenate(value) {
    return cache[value] || (cache[value] = value.replace(/([A-Z])/g, replacer));
}

/** find elements */
function $(e, parent) {
    return !e || e.length === 0
        ? // null or empty string returns empty array
            []
        : e.nodeName
            ? // a single element is wrapped in an array
                [e]
            : // selector and NodeList are converted to Element[]
                [].slice.call(e[0].nodeName ? e : (parent || document.documentElement).querySelectorAll(e));
}
function setAttrs(el, attrs) {
    // tslint:disable-next-line:forin
    for (var key in attrs) {
        if (key.indexOf('_')) {
            el.setAttribute('data-' + hyphenate(key), attrs[key]);
        }
    }
}
function setProps(cssProps) {
    return function (el, props) {
        for (var key in props) {
            if (key.indexOf('_') && (cssProps === true || cssProps[key])) {
                el.style.setProperty('--' + hyphenate(key), round(props[key]));
            }
        }
    };
}

var clearTask;
var subscribers = [];
function loop() {
    clearTask = 0;
    subscribers.slice().forEach(function (s2) { return s2(); });
    enqueue();
}
function enqueue() {
    if (!clearTask && subscribers.length) {
        clearTask = requestAnimationFrame(loop);
    }
}
function subscribe(fn) {
    subscribers.push(fn);
    enqueue();
    return function () {
        subscribers = subscribers.filter(function (s) { return s !== fn; });
        if (!subscribers.length && clearTask) {
            cancelAnimationFrame(clearTask);
            clearTask = 0;
        }
    };
}

function unwrap(value, el, ctx, doc) {
    return typeof value === 'function' ? value(el, ctx, doc) : value;
}
function noop() { }

/**
 * Creates a new instance of ScrollOut that marks elements in the viewport with
 * an "in" class and marks elements outside of the viewport with an "out"
 */
// tslint:disable-next-line:no-default-export
function main (opts) {
    // Apply default options.
    opts = opts || {};
    // Debounce onChange/onHidden/onShown.
    var onChange = opts.onChange || noop;
    var onHidden = opts.onHidden || noop;
    var onShown = opts.onShown || noop;
    var onScroll = opts.onScroll || noop;
    var props = opts.cssProps ? setProps(opts.cssProps) : noop;
    var se = opts.scrollingElement;
    var container = se ? $(se)[0] : window;
    var doc = se ? $(se)[0] : document.documentElement;
    var rootChanged = false;
    var scrollingElementContext = {};
    var elementContextList = [];
    var clientOffsetX, clientOffsety;
    var sub;
    function index() {
        elementContextList = $(opts.targets || '[data-scroll]', $(opts.scope || doc)[0]).map(function (el) { return ({ element: el }); });
    }
    function update() {
        // Calculate position, direction and ratio.
        var clientWidth = doc.clientWidth;
        var clientHeight = doc.clientHeight;
        var scrollDirX = sign(-clientOffsetX + (clientOffsetX = doc.scrollLeft || window.pageXOffset));
        var scrollDirY = sign(-clientOffsety + (clientOffsety = doc.scrollTop || window.pageYOffset));
        var scrollPercentX = doc.scrollLeft / (doc.scrollWidth - clientWidth || 1);
        var scrollPercentY = doc.scrollTop / (doc.scrollHeight - clientHeight || 1);
        // Detect if the root context has changed.
        rootChanged =
            rootChanged ||
                scrollingElementContext.scrollDirX !== scrollDirX ||
                scrollingElementContext.scrollDirY !== scrollDirY ||
                scrollingElementContext.scrollPercentX !== scrollPercentX ||
                scrollingElementContext.scrollPercentY !== scrollPercentY;
        scrollingElementContext.scrollDirX = scrollDirX;
        scrollingElementContext.scrollDirY = scrollDirY;
        scrollingElementContext.scrollPercentX = scrollPercentX;
        scrollingElementContext.scrollPercentY = scrollPercentY;
        var childChanged = false;
        for (var index_1 = 0; index_1 < elementContextList.length; index_1++) {
            var ctx = elementContextList[index_1];
            var element = ctx.element;
            // find the distance from the element to the scrolling container
            var target = element;
            var offsetX = 0;
            var offsetY = 0;
            do {
                offsetX += target.offsetLeft;
                offsetY += target.offsetTop;
                target = target.offsetParent;
            } while (target && target !== container);
            // Get element dimensions.
            var elementHeight = element.clientHeight || element.offsetHeight || 0;
            var elementWidth = element.clientWidth || element.offsetWidth || 0;
            // Find visible ratios for each element.
            var visibleX = (clamp(offsetX + elementWidth, clientOffsetX, clientOffsetX + clientWidth) -
                clamp(offsetX, clientOffsetX, clientOffsetX + clientWidth)) /
                elementWidth;
            var visibleY = (clamp(offsetY + elementHeight, clientOffsety, clientOffsety + clientHeight) -
                clamp(offsetY, clientOffsety, clientOffsety + clientHeight)) /
                elementHeight;
            var intersectX = visibleX === 1 ? 0 : sign(offsetX - clientOffsetX);
            var intersectY = visibleY === 1 ? 0 : sign(offsetY - clientOffsety);
            var viewportX = clamp((clientOffsetX - (elementWidth / 2 + offsetX - clientWidth / 2)) / (clientWidth / 2), -1, 1);
            var viewportY = clamp((clientOffsety - (elementHeight / 2 + offsetY - clientHeight / 2)) / (clientHeight / 2), -1, 1);
            var visible = void 0;
            if (opts.offset) {
                visible = unwrap(opts.offset, element, ctx, doc) <= clientOffsety ? 1 : 0;
            }
            else if ((unwrap(opts.threshold, element, ctx, doc) || 0) < visibleX * visibleY) {
                visible = 1;
            }
            else {
                visible = 0;
            }
            var changedVisible = ctx.visible !== visible;
            var changed = ctx._changed ||
                changedVisible ||
                ctx.visibleX !== visibleX ||
                ctx.visibleY !== visibleY ||
                ctx.index !== index_1 ||
                ctx.elementHeight !== elementHeight ||
                ctx.elementWidth !== elementWidth ||
                ctx.offsetX !== offsetX ||
                ctx.offsetY !== offsetY ||
                ctx.intersectX !== ctx.intersectX ||
                ctx.intersectY !== ctx.intersectY ||
                ctx.viewportX !== viewportX ||
                ctx.viewportY !== viewportY;
            if (changed) {
                childChanged = true;
                ctx._changed = true;
                ctx._visibleChanged = changedVisible;
                ctx.visible = visible;
                ctx.elementHeight = elementHeight;
                ctx.elementWidth = elementWidth;
                ctx.index = index_1;
                ctx.offsetX = offsetX;
                ctx.offsetY = offsetY;
                ctx.visibleX = visibleX;
                ctx.visibleY = visibleY;
                ctx.intersectX = intersectX;
                ctx.intersectY = intersectY;
                ctx.viewportX = viewportX;
                ctx.viewportY = viewportY;
                ctx.visible = visible;
            }
        }
        if (!sub && (rootChanged || childChanged)) {
            sub = subscribe(render);
        }
    }
    function render() {
        maybeUnsubscribe();
        // Update root attributes if they have changed.
        if (rootChanged) {
            rootChanged = false;
            setAttrs(doc, {
                scrollDirX: scrollingElementContext.scrollDirX,
                scrollDirY: scrollingElementContext.scrollDirY
            });
            props(doc, scrollingElementContext);
            onScroll(doc, scrollingElementContext, elementContextList);
        }
        var len = elementContextList.length;
        for (var x = len - 1; x > -1; x--) {
            var ctx = elementContextList[x];
            var el = ctx.element;
            var visible = ctx.visible;
            var justOnce = el.hasAttribute('scrollout-once') || false; // Once
            if (ctx._changed) {
                ctx._changed = false;
                props(el, ctx);
            }
            if (ctx._visibleChanged) {
                setAttrs(el, { scroll: visible ? 'in' : 'out' });
                onChange(el, ctx, doc);
                (visible ? onShown : onHidden)(el, ctx, doc);
            }
            // if this is shown multiple times, keep it in the list
            if (visible && (opts.once || justOnce)) { // or if this element just display it once
                elementContextList.splice(x, 1);
            }
        }
    }
    function maybeUnsubscribe() {
        if (sub) {
            sub();
            sub = undefined;
        }
    }
    // Run initialize index.
    index();
    update();
    render();
    // Collapses sequential updates into a single update.
    var updateTaskId = 0;
    var onUpdate = function () {
        updateTaskId = updateTaskId || setTimeout(function () {
            updateTaskId = 0;
            update();
        }, 0);
    };
    // Hook up document listeners to automatically detect changes.
    window.addEventListener('resize', onUpdate);
    container.addEventListener('scroll', onUpdate);
    return {
        index: index,
        update: update,
        teardown: function () {
            maybeUnsubscribe();
            window.removeEventListener('resize', onUpdate);
            container.removeEventListener('scroll', onUpdate);
        }
    };
}

module.exports = main;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Common =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Common() {
    _classCallCheck(this, Common);

    // Elements
    this.$switchForm = $(".switch-form");
    this.$LoginFormHolder = $("#login-form-holder");
    this.$SignupFormHolder = $("#signup-form-holder");
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Common, [{
    key: "bindEvents",
    value: function bindEvents() {
      // Smooth Scrolling Setup
      this.SmoothScrollSetup(); // Modals Setup

      this.ModalSetup();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SmoothScrollSetup",
    value: function SmoothScrollSetup() {
      // Select all links with hashes
      $('a[href*="#"]') // Remove links that don't actually link to anything
      .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]"); // Does a scroll target exist?

          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault(); // get height menu for scroll exactly position of div

            var getHeightMenu = 52;

            if ($(window).width() < 767) {
              getHeightMenu = 62;
            }

            $("html, body").animate({
              scrollTop: target.offset().top - getHeightMenu
            }, 1000);
          }
        }
      });
    }
    /* === MODALS SETUP === */

  }, {
    key: "ModalSetup",
    value: function ModalSetup() {
      this.PrizeModalSetup();
      this.GameRuleModalSetup();
      this.LoginModalSetup();
      this.InformationModalSetup();
    }
  }, {
    key: "GameRuleModalSetup",
    value: function GameRuleModalSetup() {
      var _this = this;

      this.$gameRuleModal = $(".modal-game-rule");
      this.$closegameRuleModal = $(".close-gamerule-modal");
      this.$opengameRuleModal = $(".open-gamerule-modal");
      this.$opengameRuleModal.on("click", function () {
        _this.$gameRuleModal.addClass("active");
      });
      this.$closegameRuleModal.on("click", function () {
        _this.$gameRuleModal.removeClass("active");
      });
    }
  }, {
    key: "PrizeModalSetup",
    value: function PrizeModalSetup() {
      var _this2 = this;

      this.$prizeListModal = $(".modal-prize-list");
      this.$closePrizeListModal = $(".close-prize-list-modal");
      this.$openPrizeListModal = $(".open-prize-list-modal");
      this.$openPrizeListModal.on("click", function () {
        _this2.$prizeListModal.addClass("active");
      });
      this.$closePrizeListModal.on("click", function () {
        _this2.$prizeListModal.removeClass("active");
      });
    }
  }, {
    key: "InformationModalSetup",
    value: function InformationModalSetup() {
      var _this3 = this;

      this.$infoModal = $(".modal-information");
      this.$infoMsg = this.$infoModal.find(".modal-information-message");
      this.$closeInfoModal = $(".close-information-modal"); // This Modal cant manually open
      // this.$openInfoModal = $(".open-information-modal");
      // this.$openInfoModal.on("click", () => {
      //   this.$InfoModal.addClass("active");
      // });

      this.$closeInfoModal.on("click", function () {
        _this3.$infoModal.removeClass("active");
      });
      realme7TeasingListener.on("signup-info-success", function () {
        _this3.$infoMsg.html("Bạn đã đăng ký nhận thông tin bộ đôi siêu phẩm realme 7 / 7 Pro thành công. realme sẽ cập nhật cho bạn những tin tức mới nhất");

        _this3.$infoModal.addClass("active");
      });
      realme7TeasingListener.on("signup-info-failed", function () {
        _this3.$infoMsg.html("Đăng ký nhận thông tin không thành công. Bạn hãy thử lại nhé");

        _this3.$infoModal.addClass("active");
      });
      realme7TeasingListener.on("submit-game-failed", function () {
        _this3.$infoMsg.html("Gửi nội dung không thành công, bạn hãy kiểm tra số mạng của mình và thử lại nhé");

        _this3.$infoModal.addClass("active");
      });
    }
  }, {
    key: "LoginModalSetup",
    value: function LoginModalSetup() {
      var _this4 = this;

      /* === SHOW / HIDE MODAL === */
      this.$loginModal = $(".modal-login");
      this.$closeLoginModal = $(".close-login-modal");
      this.$openLoginModal = $(".open-login-modal"); // Open Modal

      this.$openLoginModal.on("click", function () {
        _this4.$loginModal.addClass("active");
      }); // Close Modal

      this.$closeLoginModal.on("click", function () {
        _this4.$loginModal.removeClass("active");
      });
      realme7TeasingListener.on("close-login-modal", function () {
        _this4.$loginModal.removeClass("active");
      });
      /* === SWITCHING FORM === */

      this.currentForm = "login";
      this.$switchForm.on("click", function () {
        if (_this4.currentForm == "login") {
          _this4.ToSignupForm();
        } else {
          _this4.ToLoginForm();
        }
      });
      /* === RESET FORM === */

      this.$LoginSuccess = $(".login-success-holder");
      realme7TeasingListener.on("user-signout", function () {
        _this4.$LoginSuccess.removeClass("active");

        _this4.ToLoginForm();
      });
    }
  }, {
    key: "ToSignupForm",
    value: function ToSignupForm() {
      this.currentForm = "signup";
      this.$SignupFormHolder.addClass("active");
      this.$LoginFormHolder.removeClass("active");
    }
  }, {
    key: "ToLoginForm",
    value: function ToLoginForm() {
      this.currentForm = "login";
      this.$SignupFormHolder.removeClass("active");
      this.$LoginFormHolder.addClass("active");
    }
  }]);

  return Common;
}();

exports.default = Common;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CountDown =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function CountDown() {
    _classCallCheck(this, CountDown);

    /* === Countdown Variables === */
    // Target Date
    this.countDownDate = new Date("Sep 21, 2020 19:00:00").getTime(); // Elements

    this.$countdownSection = $("#realme-7-countdown"); // Time Slots

    this.$countdownRemainDays = this.$countdownSection.find("#days-left");
    this.$countdownRemainHours = this.$countdownSection.find("#hours-left");
    this.$countdownRemainMinutes = this.$countdownSection.find("#mins-left");
    /* === Countdown Variables - END === */

    /* === Sign Up Email Variables === */

    this.$signupInfoForm = $("#signup-info-form");
    this.$signupInfoInput = $("#signup-information-user-id");
    this.$signupInfoSubmitBtn = $("#signup-info-submit");
    /* === Sign Up Email Variables - END === */

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(CountDown, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.SignupInformationSetup();
      this.CountdownSetup();
    }
    /* ===================================
     *  METHODS
     * =================================== */
    // Count Down Clock Setup

  }, {
    key: "CountdownSetup",
    value: function CountdownSetup() {
      var now = new Date().getTime();
      var distance = this.countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      days = days > 9 ? days : "0" + days;
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      hours = hours > 9 ? hours : "0" + hours;
      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      minutes = minutes > 9 ? minutes : "0" + minutes;
      this.$countdownRemainDays.html(days);
      this.$countdownRemainHours.html(hours);
      this.$countdownRemainMinutes.html(minutes);
    } // Signup Information Setup

  }, {
    key: "SignupInformationSetup",
    value: function SignupInformationSetup() {
      var _this = this;

      this.$signupInfoForm.on("submit", function (e) {
        e.preventDefault();

        var data = _this.$signupInfoForm.serialize(); // Submit Form To Google Sheet


        $.ajax({
          type: "GET",
          url: "https://script.google.com/macros/s/AKfycbxfndfWaItqd8RxZucwoyeJLDKyB2e1VE6ooNLon8PyFLmLvMU/exec",
          dataType: "json",
          crossDomain: true,
          data: data,
          success: function success(data) {
            if (data == "false") {
              realme7TeasingListener.emit("signup-info-failed");
            } else {
              realme7TeasingListener.emit("signup-info-success");
            }
          },
          error: function error() {
            realme7TeasingListener.emit("signup-info-failed");
          }
        });
      });
    }
  }]);

  return CountDown;
}();

exports.default = CountDown;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Banner =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Banner() {
    _classCallCheck(this, Banner);

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Banner, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.BannerSliderSetup();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "BannerSliderSetup",
    value: function BannerSliderSetup() {
      this.$BannerSlider = $("#banner-main-slider");
      this.$BannerSlider.slick({
        infinite: true,
        dots: true,
        fade: true,
        nextArrow: "<span class=\"banner-slide-control slide-next\">\n      <svg width=\"6\" height=\"14\" viewBox=\"0 0 6 14\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.75 7L0.125 13.4952L0.125 0.504809L5.75 7Z\"/>\n</svg>\n</span>",
        prevArrow: "<span class=\"banner-slide-control slide-prev\">\n      <svg width=\"6\" height=\"14\" viewBox=\"0 0 6 14\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.25 7L5.875 0.504809L5.875 13.4952L0.25 7Z\"/>\n</svg></span>"
      });
    }
  }]);

  return Banner;
}();

exports.default = Banner;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _youtubePlayer = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Banner =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Banner() {
    _classCallCheck(this, Banner);

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Banner, [{
    key: "bindEvents",
    value: function bindEvents() {
      /* Video Modal Setup */
      if ($("#video-modal").length > 0) {
        this.SetupVideoPlayer();
      }
    }
    /* ===================================
     *  METHODS
     * =================================== */

    /* Modal Video Control */

  }, {
    key: "SetupVideoPlayer",
    value: function SetupVideoPlayer() {
      var _this = this;

      this.playerYT = (0, _youtubePlayer.default)("video-modal-video", {
        videoId: "8NwFFVPjTZI",
        // Default Clip
        playerVars: {
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          controls: 0,
          playlist: "8NwFFVPjTZI",
          loop: 1
        }
      });
      console.log(this.playerYT);
      $(".play-modal-video").on("click", function (e) {
        _this.videoCode = "8NwFFVPjTZI"; // Default Youtube Video ID

        if ($(e.target).parents(".play-modal-video").length > 0) {
          _this.videoCode = $(e.target).parent(".play-modal-video").data("video-id");
        } else {
          _this.videoCode = $(e.target).data("video-id");
        }

        _this.PlayModalClip(_this.videoCode);
      });
      $(".close-video-modal").on("click", function (e) {
        _this.CloseModalClip();
      });
    }
  }, {
    key: "PlayModalClip",
    value: function PlayModalClip() {
      var _this2 = this;

      var clipID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      $("body").addClass("show-modal");
      $(".video-modal").addClass("active");
      this.playerYT.cueVideoById(clipID);
      this.playerYT.unMute();
      this.playerYT.playVideo();
      this.playerYT.addEventListener("onStateChange", function (e) {
        if (e.data == 0) {
          _this2.CloseModalClip();
        }
      });
      console.log(clipID);
    }
  }, {
    key: "CloseModalClip",
    value: function CloseModalClip() {
      var _this3 = this;

      this.playerYT.mute();
      $("body").removeClass("show-modal");
      $(".video-modal").removeClass("active");
      setTimeout(function () {
        _this3.playerYT.stopVideo();
      }, 200);
    }
  }]);

  return Banner;
}();

exports.default = Banner;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _sister = __webpack_require__(10);

var _sister2 = _interopRequireDefault(_sister);

var _loadYouTubeIframeApi = __webpack_require__(11);

var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

var _YouTubePlayer = __webpack_require__(13);

var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 */
var youtubeIframeAPI = void 0;

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param maybeElementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param options See `options` (Ignored when using an existing YT.Player instance).
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 */

exports.default = function (maybeElementId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var emitter = (0, _sister2.default)();

  if (!youtubeIframeAPI) {
    youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
  }

  if (options.events) {
    throw new Error('Event handlers cannot be overwritten.');
  }

  if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
    throw new Error('Element "' + maybeElementId + '" does not exist.');
  }

  options.events = _YouTubePlayer2.default.proxyEvents(emitter);

  var playerAPIReady = new Promise(function (resolve) {
    if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
      var player = maybeElementId;

      resolve(player);
    } else {
      // asume maybeElementId can be rendered inside
      // eslint-disable-next-line promise/catch-or-return
      youtubeIframeAPI.then(function (YT) {
        // eslint-disable-line promise/prefer-await-to-then
        var player = new YT.Player(maybeElementId, options);

        emitter.on('ready', function () {
          resolve(player);
        });

        return null;
      });
    }
  });

  var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);

  playerApi.on = emitter.on;
  playerApi.off = emitter.off;

  return playerApi;
};

module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sister;

/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Sister = function () {
    var sister = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    sister.on = function (name, handler) {
        var listener = {name: name, handler: handler};
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    sister.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    sister.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return sister;
};

module.exports = Sister;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = __webpack_require__(12);

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (emitter) {
  /**
   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
   * The promise is resolved with a reference to window.YT object.
   */
  var iframeAPIReady = new Promise(function (resolve) {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      resolve(window.YT);

      return;
    } else {
      var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

      (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api', function (error) {
        if (error) {
          emitter.trigger('error', error);
        }
      });
    }

    var previous = window.onYouTubeIframeAPIReady;

    // The API will call this function when page has finished downloading
    // the JavaScript for the player API.
    window.onYouTubeIframeAPIReady = function () {
      if (previous) {
        previous();
      }

      resolve(window.YT);
    };
  });

  return iframeAPIReady;
};

module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = __webpack_require__(14);

var _debug2 = _interopRequireDefault(_debug);

var _functionNames = __webpack_require__(18);

var _functionNames2 = _interopRequireDefault(_functionNames);

var _eventNames = __webpack_require__(19);

var _eventNames2 = _interopRequireDefault(_eventNames);

var _FunctionStateMap = __webpack_require__(20);

var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable promise/prefer-await-to-then */

var debug = (0, _debug2.default)('youtube-player');

var YouTubePlayer = {};

/**
 * Construct an object that defines an event handler for all of the YouTube
 * player events. Proxy captured events through an event emitter.
 *
 * @todo Capture event parameters.
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 */
YouTubePlayer.proxyEvents = function (emitter) {
  var events = {};

  var _loop = function _loop(eventName) {
    var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);

    events[onEventName] = function (event) {
      debug('event "%s"', onEventName, event);

      emitter.trigger(eventName, event);
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return events;
};

/**
 * Delays player API method execution until player state is ready.
 *
 * @todo Proxy all of the methods using Object.keys.
 * @todo See TRICKY below.
 * @param playerAPIReady Promise that resolves when player is ready.
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions.
 * @returns {Object}
 */
YouTubePlayer.promisifyPlayer = function (playerAPIReady) {
  var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var functions = {};

  var _loop2 = function _loop2(functionName) {
    if (strictState && _FunctionStateMap2.default[functionName]) {
      functions[functionName] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return playerAPIReady.then(function (player) {
          var stateInfo = _FunctionStateMap2.default[functionName];
          var playerState = player.getPlayerState();

          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          var value = player[functionName].apply(player, args);

          // TRICKY: For functions like `seekTo`, a change in state must be
          // triggered given that the resulting state could match the initial
          // state.
          if (stateInfo.stateChangeRequired ||

          // eslint-disable-next-line no-extra-parens
          Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
            return new Promise(function (resolve) {
              var onPlayerStateChange = function onPlayerStateChange() {
                var playerStateAfterChange = player.getPlayerState();

                var timeout = void 0;

                if (typeof stateInfo.timeout === 'number') {
                  timeout = setTimeout(function () {
                    player.removeEventListener('onStateChange', onPlayerStateChange);

                    resolve();
                  }, stateInfo.timeout);
                }

                if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                  player.removeEventListener('onStateChange', onPlayerStateChange);

                  clearTimeout(timeout);

                  resolve();
                }
              };

              player.addEventListener('onStateChange', onPlayerStateChange);
            }).then(function () {
              return value;
            });
          }

          return value;
        });
      };
    } else {
      functions[functionName] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return playerAPIReady.then(function (player) {
          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          return player[functionName].apply(player, args);
        });
      };
    }
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var functionName = _step2.value;

      _loop2(functionName);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return functions;
};

exports.default = YouTubePlayer;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(16);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(17);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Functions
 */
exports.default = ['cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'];
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 * `volumeChange` is not officially supported but seems to work
 * it emits an object: `{volume: 82.6923076923077, muted: false}`
 */
exports.default = ['ready', 'stateChange', 'playbackQualityChange', 'playbackRateChange', 'error', 'apiChange', 'volumeChange'];
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerStates = __webpack_require__(21);

var _PlayerStates2 = _interopRequireDefault(_PlayerStates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pauseVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
    stateChangeRequired: false
  },
  playVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
    stateChangeRequired: false
  },
  seekTo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
    stateChangeRequired: true,

    // TRICKY: `seekTo` may not cause a state change if no buffering is
    // required.
    timeout: 3000
  }
};
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  BUFFERING: 3,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1,
  UNSTARTED: -1,
  VIDEO_CUED: 5
};
module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Milestones =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Milestones() {
    _classCallCheck(this, Milestones);

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Milestones, [{
    key: "bindEvents",
    value: function bindEvents() {}
    /* ===================================
     *  METHODS
     * =================================== */

  }]);

  return Milestones;
}();

exports.default = Milestones;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ranking =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Ranking() {
    _classCallCheck(this, Ranking);

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Ranking, [{
    key: "bindEvents",
    value: function bindEvents() {}
    /* ===================================
     *  METHODS
     * =================================== */

  }]);

  return Ranking;
}();

exports.default = Ranking;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var News =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function News() {
    _classCallCheck(this, News);

    this.$newsSlider = $("#rm-7-news-slider");
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(News, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.SetupNewsSlide();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SetupNewsSlide",
    value: function SetupNewsSlide() {
      this.$newsSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: "<span class=\"banner-slide-control slide-next\">\n      <svg width=\"6\" height=\"14\" viewBox=\"0 0 6 14\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.75 7L0.125 13.4952L0.125 0.504809L5.75 7Z\"/>\n</svg>\n</span>",
        prevArrow: "<span class=\"banner-slide-control slide-prev\">\n      <svg width=\"6\" height=\"14\" viewBox=\"0 0 6 14\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0.25 7L5.875 0.504809L5.875 13.4952L0.25 7Z\"/>\n</svg></span>",
        responsive: [{
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            rows: 3,
            slidesToScroll: 1
          }
        }]
      });
    }
  }]);

  return News;
}();

exports.default = News;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Intro =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Intro() {
    _classCallCheck(this, Intro);

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Intro, [{
    key: "bindEvents",
    value: function bindEvents() {}
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SetupNewsSlide",
    value: function SetupNewsSlide() {}
  }]);

  return Intro;
}();

exports.default = Intro;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _game = _interopRequireDefault(__webpack_require__(27));

var _api = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Minigame1 =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function Minigame1() {
    _classCallCheck(this, Minigame1);

    window.game1Listener = new _utils.pageListener(); // ELEMENTS

    this.$Game1Playground = $("#minigame-1-playground");
    this.$questionGroupHolder = $("#question-group-holder");
    this.$nextQuestionBtn = $("#next-question-btn");
    this.$submitGameBtn = $(".submit-answer-btn");
    this.$gameNoticeBtn = $(".question-bottom .notice");
    this.$startGame1Btn = $("#start-game-1"); // this.$replayGame1Btn = $("#replay-game-1");
    // this.$endGame1Btn = $("#end-game-1");

    this.$loadingScene = this.$Game1Playground.find(".loading-scene");
    this.$game1CurrentTime = $(".game-1-current-time");
    this.$game1CurrentTimeHolder = $("#game-1-time-holder");
    this.submitTime = 0; // Bind Events

    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(Minigame1, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.SetupGame1();
    }
    /* ===================================
     *  METHODS
     * =================================== */

  }, {
    key: "SetupGame1",
    value: function SetupGame1() {
      var _this = this;

      this.ALL_QUESTION = _game.default.settings.question_list;
      this.Shuffle(this.ALL_QUESTION);
      this.GET_QUESTION = this.ALL_QUESTION.slice(0, 4); // Make HTML Layout from DATA

      this.HTML_ARRAY = this.BuildLayout(this.GET_QUESTION); // Add into Question Holder

      this.$questionGroupHolder.html(this.HTML_ARRAY);
      this.currentQuestion = 1;
      this.allowInteraction = true; // Init Action Elements

      this.$nextQuestionBtn.hide();
      this.$submitGameBtn.hide();
      this.$gameNoticeBtn.hide(); // Init First Question

      setTimeout(function () {}, 40); // Bind Events

      $("body").on("click", ".custom-btn.question-btn", function (e) {
        if (_this.allowInteraction) {
          _this.allowInteraction = false;
          var $questionBlock = $(e.target).parents(".question-block");
          var $answerBlock = $(e.target).parents(".custom-btn.question-btn");
          var $buttonSet = $questionBlock.find(".custom-btn.question-btn");

          if (!$answerBlock.hasClass("active")) {
            $buttonSet.removeClass("active");
            $answerBlock.addClass("active");
            var correctChoice = _this.GET_QUESTION[_this.currentQuestion - 1].correct_answer;
            var questionChoice = $answerBlock.data("answer");

            if (correctChoice == questionChoice) {
              _this.allowInteraction = true;
              game1Listener.emit("correct-answer");
            } else {
              $answerBlock.addClass("wrong");
              setTimeout(function () {
                $answerBlock.removeClass("wrong");
              }, 750);
              game1Listener.emit("wrong-answer");
            }
          }
        }
      });
      this.$nextQuestionBtn.on("click", function () {
        game1Listener.emit("next-question");
      });
      this.$submitGameBtn.on("click", function () {
        game1Listener.emit("submit-game-1");
      }); // Page Listener Event

      game1Listener.on("correct-answer", function () {
        if (_this.currentQuestion < _this.GET_QUESTION.length) {
          // Not the last question answer correctly
          _this.$gameNoticeBtn.hide();

          _this.$nextQuestionBtn.show();
        } else {
          // Last Question Answer correctly
          _this.$gameNoticeBtn.hide();

          _this.$submitGameBtn.show();
        }
      });
      game1Listener.on("wrong-answer", function () {
        _this.$gameNoticeBtn.hide();

        _this.$nextQuestionBtn.hide(); // 0.5s penalty for wrong answer


        setTimeout(function () {
          _this.allowInteraction = true;
        }, 750);
      });
      game1Listener.on("game-start", function () {
        game1Listener.emit("init-question");
      });
      game1Listener.on("init-question", function () {
        _this.$nextQuestionBtn.hide();

        _this.$gameNoticeBtn.show();

        $(".question-block:nth-child(".concat(_this.currentQuestion, ")")).addClass("active");
      });
      game1Listener.on("next-question", function () {
        _this.currentQuestion += 1;
        $(".question-block").removeClass("active");
        $(".question-block:nth-child(".concat(_this.currentQuestion, ")")).addClass("active");

        _this.$gameNoticeBtn.show();

        _this.$nextQuestionBtn.hide();
      });
      game1Listener.on("submit-game-1", function () {
        realme7TeasingListener.emit("clock-end"); // Hide Submit Button

        _this.$submitGameBtn.hide(); // Reset Question To None


        _this.$questionGroupHolder.html(""); // Hide Game Playground
        // this.$Game1Playground.hide();
        // Show Ranking Panel


        realme7TeasingListener.emit("update-rank-local"); // Show Loading Scene

        _this.$loadingScene.show(); // Get Clock Time From Global


        _this.submitTime = clockTime; // Submit Game Result

        if (realme7User.userData.game_1.lives > 0) {
          var data = {
            game_1: _this.submitTime
          };
          var api = new _api.default({
            url: "/game_1",
            method: "POST",
            data: data,
            success: function success(res) {
              if (res.is_success) {
                console.log(res);

                _this.$loadingScene.hide(); // Move To Finish Scene


                if (res.data.user.game_1.best_time <= realme7User.userData.game_1.best_time || realme7User.userData.game_1.best_time == null) {
                  _this.$game1CurrentTime.show();

                  realme7User.userData.game_1.best_time = res.data.user.game_1.best_time;

                  var time = _this.TimeTransform(realme7User.userData.game_1.best_time);

                  _this.$game1CurrentTimeHolder.html("".concat(time.mins, " ph\xFAt ").concat(time.secs, ".").concat(time.milisec, " gi\xE2y"));

                  realme7TeasingListener.emit("update-local-rank");
                }
              } else {
                realme7TeasingListener.emit("submit-game-failed");
              }
            },
            err: function err(res) {
              realme7TeasingListener.emit("submit-game-failed");
            }
          });
        } else {
          _this.$loadingScene.hide();
        }
      });
      this.$startGame1Btn.on("click", function () {
        realme7TeasingListener.emit("clock-start");
        game1Listener.emit("game-start");
      }); // Authentication Events Listener

      realme7TeasingListener.on("user-logged-in", function () {
        // Block 0 life user
        // Show Sharing / Playing Button
        if (realme7User.userData.game_1.lives <= 0) {
          _this.$startGame1Btn.hide();
        } // Update current time


        if (realme7User.userData.game_1.best_time !== null) {
          // Hide Playground and Main Play Button
          // this.$startGame1Btn.hide();
          // this.$Game1Playground.hide();
          // Show Replay Button
          // Show Time
          _this.$game1CurrentTime.show();

          var time = _this.TimeTransform(realme7User.userData.game_1.best_time);

          _this.$game1CurrentTimeHolder.html("".concat(time.mins, " ph\xFAt ").concat(time.secs, ".").concat(time.milisec, " gi\xE2y"));
        } else {
          _this.$game1CurrentTime.hide();
        }
      });
      realme7TeasingListener.on("user-logged-out", function () {// Reset Everything
        // Show Login Button
      });
    }
    /* === UTILS === */

  }, {
    key: "Shuffle",
    value: function Shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t

        var _ref = [array[j], array[i]];
        array[i] = _ref[0];
        array[j] = _ref[1];
      }
    }
  }, {
    key: "TimeTransform",
    value: function TimeTransform(timestamp) {
      var milisec = timestamp % 1000; // Rebuild Miniseconds

      if (milisec <= 9) {
        milisec = "00" + milisec;
      } else {
        if (milisec <= 99) {
          milisec = "00" + milisec;
        } else {
          if (milisec == 0) {
            milisec = "000";
          }
        }
      }

      var mins = Math.floor(timestamp / 60000);
      var secs = Math.floor(timestamp / 1000) - mins * 60;
      return {
        milisec: milisec,
        mins: mins <= 9 ? "0" + mins : mins,
        secs: secs <= 9 ? "0" + secs : secs
      };
    }
  }, {
    key: "BuildLayout",
    value: function BuildLayout(questionList) {
      // DATA PROCESSING & JS LAYOUT BUILD
      return questionList.map(function (item, index) {
        var answerHTML = item.answer.map(function (data, i) {
          return "<li class=\"answer-item\"><button class=\"custom-btn question-btn\" data-answer=\"".concat(i, "\">\n            <span class=\"context\">").concat(data, "</span>\n            </button></li>");
        }).join("");
        return "<div class=\"question-block\" id=\"question-".concat(index, "\">\n              <div class=\"question-context\">\n                            <div class=\"context\">\n                              ").concat(item.question, "\n                            </div>\n                          </div>\n                          <ul class=\"answer-list\">\n                          ").concat(answerHTML, "\n                          </ul>\n              </div>");
      });
    }
  }]);

  return Minigame1;
}();

exports.default = Minigame1;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  is_open: false,
  settings: {
    question_list: [{
      question: "Bộ đôi realme 7, realme 7 Pro sở hữu công nghệ sạc nhanh mới của realme, tên công nghệ đó là",
      answer: ["A. VOOC", "B. SupperVOOC", "C. Flash Charge", "D. Sạc nhanh Dart và Super Dart"],
      correct_answer: 3
    }, {
      question: "Tại Việt Nam, realme 7 Series dự kiến sẽ ra mắt vào khoảng thời gian nào?",
      answer: ["A. 21/07/2020", "B. 21/08/2020", "C. 21/09/2020", "D. 21/10/2020"],
      correct_answer: 2
    }, {
      question: "Công nghệ sạc nhanh Dart trên realme 7 có công suất là bao nhiêu?",
      answer: ["A. 10W, tương ứng 5V2A", "B. 20W, tương ứng 5V4A", "C. 30W, tương ứng 5V6A", "D. 5W, tương ứng 5V1A"],
      correct_answer: 2
    }, {
      question: "Công nghệ sạc nhanh SuperDart trên realme 7 Pro có công suất là bao nhiêu?",
      answer: ["A. 30W, tương ứng 5V6A", "B. 65W, tương ứng 10V6.5A", "C. 40W, tương ứng 10V4A", "D. 125W, tương ứng 20V6.25A"],
      correct_answer: 1
    }, {
      question: "Ngoài sạc nhanh, bộ đôi realme 7 và 7 Pro còn có điểm chung là:",
      answer: ["A. Bộ 4 Camera 64MP, Sony IMX 682", "B. Vân tay trong màn hình", "C. Camera Selfie Kép", "D. Vân tay trên mặt lưng"],
      correct_answer: 0
    }, {
      question: "Camera sau trên realme 7 và 7 Pro có tính năng gì đặc biệt lần đầu xuất hiện trên điện thoại realme?",
      answer: ["A. Chế độ 64MP", "B. Chế độ ultra macro siêu cận cảnh", "C. Chế độ xoá phông", "D. Chế độ trời sao (Starry Night)"],
      correct_answer: 3
    }]
  }
};
exports.default = _default;

/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameClock =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function GameClock(gameNo) {
    _classCallCheck(this, GameClock);

    window.clockTime = 0;
    this.secs = 0;
    this.mins = 0;
    this.milisec = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.counterInterval = null;
    this.$counterHolder = $("#game-counter");
    this.$minsHolder = this.$counterHolder.find(".minues");
    this.$secsHolder = this.$counterHolder.find(".secs");
    this.$milisecsHolder = this.$counterHolder.find(".milisec");
    this.bindEvents();
  }

  _createClass(GameClock, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      realme7TeasingListener.on("clock-start", function () {
        _this.startTime = new Date().getTime();
        _this.counterInterval = setInterval(function () {
          clockTime += 100;
          _this.milisec += 10;

          _this.$milisecsHolder.html(_this.milisec);

          if (clockTime % 1000 == 0) {
            _this.milisec = 0;

            _this.$milisecsHolder.html("0" + _this.milisec);

            if (_this.secs < 59) {
              _this.secs += 1;

              _this.$secsHolder.html(_this.secs <= 9 ? "0" + _this.secs : _this.secs);
            } else {
              _this.secs = 0;
              _this.mins += 1;

              _this.$secsHolder.html("0" + _this.secs);

              _this.$minsHolder.html(_this.mins <= 9 ? "0" + _this.mins : _this.mins);
            }
          }
        }, 100);
      });
      realme7TeasingListener.on("clock-end", function () {
        clearTimeout(_this.counterInterval);
        _this.endTime = new Date().getTime();
        clockTime = _this.endTime - _this.startTime;
        _this.milisec = clockTime % 1000;
        _this.mins = Math.floor(clockTime / 60000);
        _this.secs = Math.floor(clockTime / 1000) - _this.mins * 60;

        _this.$milisecsHolder.html(_this.milisec < 9 ? "0" + _this.milisec : _this.milisec);

        _this.$secsHolder.html(_this.secs <= 9 ? "0" + _this.secs : _this.secs);

        _this.$minsHolder.html(_this.mins <= 9 ? "0" + _this.mins : _this.mins);
      });
      realme7TeasingListener.on("reset-clock", function () {
        window.clockTime = 0;
        _this.secs = 0;
        _this.mins = 0;
        _this.milisec = 0;
        _this.startTime = 0;
        _this.endTime = 0;

        _this.$milisecsHolder.html("00");

        _this.$secsHolder.html("00");

        _this.$minsHolder.html("00");
      });
    }
  }]);

  return GameClock;
}();

exports.default = GameClock;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _api = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameCommon =
/*#__PURE__*/
function () {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  function GameCommon() {
    _classCallCheck(this, GameCommon);

    // Authentication Variables
    window.realme7User = {
      isUserLoggedin: false
    }; // Elements

    this.$loginBtn = $(".user-login-btn");
    this.$logoutBtn = $(".user-logout-btn");
    this.$signUpBtn = $(".user-signup-btn");
    this.$signupErrMsg = $(".signup-auth-feedback");
    this.$loginErrMsg = $(".login-auth-feedback");
    this.$loggedInElements = $(".is-user-logged-in");
    this.$loggedOutElements = $(".is-user-logged-out");
    this.$userNameHolder = $(".user-name-holder");
    this.$userRankHolder = $(".user-rank-holder"); // Game Remain Lives Holder

    this.$game1Lives = $(".lives-no-game-1");
    this.$game2Lives = $(".lives-no-game-2");
    this.$game3Lives = $(".lives-no-game-3");
    this.$game4Lives = $(".lives-no-game-4"); // Login Form Elements

    this.$loginID = $("#login-user-name-input");
    this.$loginPassword = $("#login-password-input");
    this.$signupName = $("#signup-id");
    this.$signupEmail = $("#signup-email-input");
    this.$signupPhoneNumber = $("#signup-phone-number-input"); // Facebook Share Button

    this.$fbSharingBtn = $("#sharing-on-facebook"); // Counting User Holder

    this.$countUserHolder = $("#count-user-number"); // Ranking Panel Holder

    this.$rankingPanel = $("#ranking-listing");
    this.blockIteraction = false;
    this.bindEvents();
  }
  /* ===================================
   *  EVENTS
   * =================================== */


  _createClass(GameCommon, [{
    key: "bindEvents",
    value: function bindEvents() {
      // Get Current Playing User
      this.SetupCountUser(); // Auto Login

      this.AutoLogin();
      this.AuthenticationSetup();
    }
    /* ===================================
     *  METHODS
     * =================================== */

    /* === AUTHENTICATION === */

  }, {
    key: "AuthenticationSetup",
    value: function AuthenticationSetup() {
      var _this = this;

      this.UpdatePage();
      this.LoginSetup();
      this.LogOutSetup();
      this.SignupSetup();
      realme7TeasingListener.on("user-logged-in", function () {
        // Update Name, Rank, Milestones After User Logged in
        _this.UpdatePage();
      });
      realme7TeasingListener.on("user-logged-out", function () {
        // Hide Related Authentication Info
        _this.UpdatePage();
      });
      realme7TeasingListener.on("finished-round", function () {});
      realme7TeasingListener.on("update-rank", function () {});
      realme7TeasingListener.on("logged-in-fail", function () {});
      realme7TeasingListener.on("sharing-finished", function () {});
      realme7TeasingListener.on("update-global-rank", function () {
        _this.UpdateRanking("global");
      });
      realme7TeasingListener.on("update-local-rank", function () {
        _this.UpdateRanking("local");
      }); // Auto Login Method

      realme7TeasingListener.on("auto-logged-in-failed", function () {
        console.log("auto-logged-in-failed");
      });
      realme7TeasingListener.on("not-auto-logged-in", function () {
        console.log("not-auto-logged-in");
      });
    }
  }, {
    key: "LoginSetup",
    value: function LoginSetup() {
      var _this2 = this;

      this.$loginBtn.on("click", function () {
        var loginData = {
          login: _this2.$loginID.val(),
          password: _this2.$loginPassword.val()
        };

        _this2.Login(loginData, function () {
          realme7TeasingListener.emit("close-login-modal");
        });
      });
    }
  }, {
    key: "LogOutSetup",
    value: function LogOutSetup() {
      var _this3 = this;

      this.$logoutBtn.on("click", function () {
        _this3.Logout();
      });
    }
  }, {
    key: "SignupSetup",
    value: function SignupSetup() {
      var _this4 = this;

      this.$signUpBtn.on("click", function () {
        if (_this4.$signupEmail.val() == "" || _this4.$signupPhoneNumber.val() == "" || _this4.$signupName.val() == "") {
          _this4.$signupErrMsg.html("Vui lòng nhập đầy đủ thông tin").show();
        } else {
          var signupData = {
            email: _this4.$signupEmail.val(),
            phone_number: _this4.$signupPhoneNumber.val(),
            name: _this4.$signupName.val()
          };
          console.log(signupData);

          _this4.Signup(signupData);
        } // console.log(signupData);

      });
    }
  }, {
    key: "Login",
    value: function Login(data, callback) {
      var _this5 = this;

      var api = new _api.default({
        url: "/sign_in",
        method: "POST",
        data: data,
        success: function success(res) {
          if (res.is_success) {
            // Update Global User
            _this5.$loginErrMsg.hide();

            _this5.UpdateUser(res.data.user);

            if (callback) {
              callback();
            }

            realme7TeasingListener.emit("user-logged-in");
          } else {
            _this5.$loginErrMsg.html("Email hoặc số điện thoại không chính xác,<br> vui lòng thử lại").show();
          }
        },
        err: function err(_err, textStatus, errorThrown) {
          _this5.$loginErrMsg.html("Email hoặc số điện thoại không chính xác,<br> vui lòng thử lại").show();

          _this5.UpdateUser(false);
        }
      });
    }
  }, {
    key: "Logout",
    value: function Logout() {
      this.UpdateUser(false);
      localStorage.clear();
      realme7TeasingListener.emit("user-logged-out");
    }
  }, {
    key: "Signup",
    value: function Signup(data) {
      var _this6 = this;

      var api = new _api.default({
        url: "/register",
        method: "POST",
        data: data,
        success: function success(res) {
          if (res.is_success) {
            // Update Global User
            _this6.$signupErrMsg.hide();

            _this6.UpdateUser(res.data.user);

            realme7TeasingListener.emit("close-login-modal");
            realme7TeasingListener.emit("user-logged-in");
          } else {
            console.log(res);

            _this6.$signupErrMsg.html("Email hoạc số điện thoại đã tồn tại").show();
          }
        },
        err: function err(_err2, textStatus, errorThrown) {
          // this.$authFeedback
          //   .html("Email hoặc số điện thoại không hợp lệ, vui lòng thử lại")
          //   .removeClass("success")
          //   .addClass("err");
          _this6.$signupErrMsg.html("Đăng ký không thành công, vui lòng thử lại").show();

          _this6.UpdateUser(false);
        }
      });
    }
  }, {
    key: "UpdateUser",
    value: function UpdateUser(data) {
      if (data) {
        realme7User = {
          isUserLoggedin: true,
          userData: {
            name: data.name,
            is_qualified: data.is_qualified,
            current_total_time: data.current_total_time,
            email: data.email,
            sharing_day: new Date(data.sharing_day).getDate() == new Date().getDate() ? true : false,
            game_1: data.game_1,
            game_2: data.game_2,
            game_3: data.game_3,
            game_4: data.game_4
          }
        };
      } else {
        realme7User = {
          isUserLoggedin: false
        };
      } // TODO: Remove this after finished


      console.log(realme7User);
    }
    /* === AUTHENTICATION - END === */

    /* === UTILS === */

  }, {
    key: "UpdatePage",
    value: function UpdatePage() {
      if (realme7User.isUserLoggedin) {
        // Common Elements With Class
        $(".is-user-logged-out").hide();
        $(".is-user-logged-in").show(); // Milestones Status Section

        this.UpdateMilestones(); // Update Local Rank

        realme7TeasingListener.emit("update-local-rank"); // Share Button

        if (this.$fbSharingBtn.length > 0) {
          if (!realme7User.userData.sharing_day) {
            this.$fbSharingBtn.show();
          } else {
            this.$fbSharingBtn.hide();
          }
        } // Game Lives


        this.$game1Lives.html(realme7User.userData.game_1.lives);
        this.$game2Lives.html(realme7User.userData.game_2.lives);
        this.$game3Lives.html(realme7User.userData.game_3.lives);
        this.$game4Lives.html(realme7User.userData.game_4.lives); // Specific Elements That Hold Value

        this.$userNameHolder.html(realme7User.userData.name !== null ? realme7User.userData.name : realme7User.userData.email.slice(0, realme7User.userData.email.indexOf("@")));
      } else {
        /* === USER LOGGED OUT ===*/
        // Common Elements Width Class
        $(".is-user-logged-out").show();
        $(".is-user-logged-in").hide(); // Milestones Status Section

        this.UpdateMilestones(); // Update Ranking

        realme7TeasingListener.emit("update-global-rank"); // Specific Element That Hold Value

        this.$userNameHolder.html("");
        this.$userRankHolder.html(""); // Game Lives

        this.$game1Lives.html("");
        this.$game2Lives.html("");
        this.$game3Lives.html("");
        this.$game4Lives.html("");
      }
    }
  }, {
    key: "UpdateMilestones",
    value: function UpdateMilestones() {
      // User Is Login, Check The Finish Game
      if (realme7User.isUserLoggedin) {
        for (var i = 1; i <= currentGameAvailable; i++) {
          var $milestonesElement = $("#milestone-".concat(i, "-block"));
          var $statusElement = $milestonesElement.find(".status-name");

          if (realme7User.userData["game_".concat(i)].best_time !== null) {
            $milestonesElement.removeClass("not-open open").addClass("finished");
            $statusElement.html("Đã hoàn thành");
          } else {
            $milestonesElement.removeClass("not-open finished").addClass("open");
            $statusElement.html("Đang mở");
          }
        }
      } else {
        // Common Non-login user
        for (var _i = 1; _i <= currentGameAvailable; _i++) {
          var _$milestonesElement = $("#milestone-".concat(_i, "-block"));

          var _$statusElement = _$milestonesElement.find(".status-name");

          _$milestonesElement.removeClass("not-open finished").addClass("open");

          _$statusElement.html("Đang mở");
        }
      }
    }
  }, {
    key: "AutoLogin",
    value: function AutoLogin() {
      var _this7 = this;

      if (localStorage.getItem("rm7-token")) {
        // There is data of the user
        var api = new _api.default({
          url: "/me",
          method: "GET",
          success: function success(res) {
            // console.log(res)
            _this7.UpdateUser(res.data.user);

            realme7TeasingListener.emit("user-logged-in");
          },
          err: function err(_err3, textStatus, errorThrown) {
            realme7TeasingListener.emit("auto-logged-in-failed");
          }
        });
      } else {
        setTimeout(function () {
          realme7TeasingListener.emit("not-auto-logged-in");
        }, 50);
      }
    } // PUBLIC INFORMATION - USER COUNT

  }, {
    key: "SetupCountUser",
    value: function SetupCountUser() {
      var _this8 = this;

      var totalNumber = 0;
      var api = new _api.default({
        url: "/total_users",
        method: "GET",
        success: function success(res) {
          totalNumber = res.data.total_users;

          _this8.$countUserHolder.html(totalNumber);
        },
        err: function err(_err4, textStatus, errorThrown) {}
      });
    }
  }, {
    key: "UpdateRanking",
    value: function UpdateRanking() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "global";

      if (this.$rankingPanel.length > 0) {
        switch (type) {
          case "global":
            this.GetGlobalRank();
            break;

          case "local":
            if (!realme7User.isUserLoggedin) {
              this.GetGlobalRank();
            } else {
              this.GetLocalRank();
            }

            break;

          default:
            break;
        }
      }
    }
  }, {
    key: "GetGlobalRank",
    value: function GetGlobalRank() {
      var _this9 = this;

      // Reset Ranking Elements
      this.$rankingPanel.html("");
      var api = new _api.default({
        url: "/top_gamers",
        method: "GET",
        success: function success(res) {
          if (res.is_success) {
            var top_gamers = res.data.top_gamers.slice(0, 7);
            var rankingHTML = top_gamers.map(function (item, index) {
              var time = _this9.TimeTransform(item.current_total_time);

              return "<div class=\"rank-item\">\n            <p class=\"rank-no\">".concat(index + 1 <= 9 ? "0" + (index + 1) : index + 1, "</p>\n            <p class=\"rank-time\">").concat(time.mins, ".").concat(time.secs, ".").concat(time.milisec, "</p>\n            <p class=\"rank-name\">").concat(item.name !== null ? item.name : item.email.slice(0, item.email.indexOf("@")), "</p>\n            <p class=\"rank-email\">").concat(item.email, "</p>\n          </div>");
            });
            rankingHTML = rankingHTML.join("");

            _this9.$rankingPanel.html(rankingHTML);
          } else {}
        }
      });
    }
  }, {
    key: "GetLocalRank",
    value: function GetLocalRank() {
      var _this10 = this;

      // Reset Ranking Elements
      this.$rankingPanel.html("");

      if (!realme7User.userData.is_qualified) {
        this.$userRankHolder.html("- Chưa xếp hạng");
        this.GetGlobalRank();
      } else {
        var api = new _api.default({
          url: "/current_rank",
          method: "GET",
          success: function success(res) {
            console.log(res);
            var current = res.data.current;
            var above = res.data.above.slice(0, 3);
            var below = res.data.below.slice(0, 3);

            _this10.$userRankHolder.html("- H\u1EA1ng: ".concat(res.data.current.rank));

            var aboveHTML = above.map(function (item, index) {
              var time = _this10.TimeTransform(item.total_time);

              return "<div class=\"rank-item\">\n            <p class=\"rank-no\">".concat(item.rank <= 9 ? "0" + item.rank : item.rank, "</p>\n            <p class=\"rank-time\">").concat(time.mins, ".").concat(time.secs, ".").concat(time.milisec, "</p>\n            <p class=\"rank-name\">").concat(item.name !== null ? item.name : item.email.slice(0, item.email.indexOf("@")), "</p>\n            <p class=\"rank-email\">").concat(item.email, "</p>\n          </div>");
            });
            var belowHTML = below.map(function (item, index) {
              var time = _this10.TimeTransform(item.total_time);

              return "<div class=\"rank-item\">\n            <p class=\"rank-no\">".concat(item.rank <= 9 ? "0" + item.rank : item.rank, "</p>\n            <p class=\"rank-time\">").concat(time.mins, ".").concat(time.secs, ".").concat(time.milisec, "</p>\n            <p class=\"rank-name\">").concat(item.name !== null ? item.name : item.email.slice(0, item.email.indexOf("@")), "</p>\n            <p class=\"rank-email\">").concat(item.email, "</p>\n          </div>");
            }); // Current

            var userTime = _this10.TimeTransform(current.total_time);

            var userRankHTML = "<div class=\"rank-item highlight\">\n          <p class=\"rank-no\">".concat(current.rank <= 9 ? "0" + current.rank : current.rank, "</p>\n          <p class=\"rank-time\">").concat(userTime.mins, ".").concat(userTime.secs, ".").concat(userTime.milisec, "</p>\n          <p class=\"rank-name\">").concat(current.name !== null ? current.name : current.email.slice(0, current.email.indexOf("@")), "</p>\n          <p class=\"rank-email\">").concat(current.email, "</p>\n        </div>");
            var fullHTML = aboveHTML.concat([userRankHTML], belowHTML).join("");

            _this10.$rankingPanel.html(fullHTML);

            console.log(res);
          },
          err: function err(_err5, textStatus, errorThrown) {}
        });
      }
    }
  }, {
    key: "TimeTransform",
    value: function TimeTransform(timestamp) {
      var milisec = timestamp % 1000; // Rebuild Miniseconds

      if (milisec <= 9) {
        milisec = "00" + milisec;
      } else {
        if (milisec <= 99) {
          milisec = "00" + milisec;
        } else {
          if (milisec == 0) {
            milisec = "000";
          }
        }
      }

      var mins = Math.floor(timestamp / 60000);
      var secs = Math.floor(timestamp / 1000) - mins * 60;
      return {
        milisec: milisec,
        mins: mins <= 9 ? "0" + mins : mins,
        secs: secs <= 9 ? "0" + secs : secs
      };
    }
    /* === UTILS - END === */

  }]);

  return GameCommon;
}();

exports.default = GameCommon;

/***/ })
/******/ ]);