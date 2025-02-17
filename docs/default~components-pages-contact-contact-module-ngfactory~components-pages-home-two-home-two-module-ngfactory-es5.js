(function () {
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }

  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-pages-contact-contact-module-ngfactory~components-pages-home-two-home-two-module-ngfactory"], {
    /***/
    "GcL5":
    /*!******************************************************!*\
      !*** ./src/app/components/models/contact/contact.ts ***!
      \******************************************************/

    /*! exports provided: Contact */

    /***/
    function GcL5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Contact", function () {
        return Contact;
      });

      var Contact = /*#__PURE__*/_createClass(function Contact() {
        _classCallCheck(this, Contact);
      });
      /***/

    },

    /***/
    "LohZ":
    /*!********************************************************************************!*\
      !*** ./src/app/components/shared/fab-button/fab-button.component.ngfactory.js ***!
      \********************************************************************************/

    /*! exports provided: RenderType_FabButtonComponent, View_FabButtonComponent_0, View_FabButtonComponent_Host_0, FabButtonComponentNgFactory */

    /***/
    function LohZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RenderType_FabButtonComponent", function () {
        return RenderType_FabButtonComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FabButtonComponent_0", function () {
        return View_FabButtonComponent_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "View_FabButtonComponent_Host_0", function () {
        return View_FabButtonComponent_Host_0;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabButtonComponentNgFactory", function () {
        return FabButtonComponentNgFactory;
      });
      /* harmony import */


      var _fab_button_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fab-button.component.css.shim.ngstyle */
      "wBg8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _fab_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./fab-button.component */
      "RqsJ");
      /* harmony import */


      var _helper_whatsapp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../helper/whatsapp.service */
      "iTiI");
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles_FabButtonComponent = [_fab_button_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

      var RenderType_FabButtonComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
        encapsulation: 0,
        styles: styles_FabButtonComponent,
        data: {}
      });

      function View_FabButtonComponent_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "fab-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "label", [["class", "fab-button"], ["for", "fabCheckbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["class", "fab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a", [["class", "fab-content"], ["target", "_blank"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "i", [["class", "fab fa-whatsapp icon-fab"]], null, null, null, null, null))], null, function (_ck, _v) {
          var _co = _v.component;
          var currVal_0 = _co.whatsAppUrl;

          _ck(_v, 3, 0, currVal_0);
        });
      }

      function View_FabButtonComponent_Host_0(_l) {
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-fab-button", [], null, null, null, View_FabButtonComponent_0, RenderType_FabButtonComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _fab_button_component__WEBPACK_IMPORTED_MODULE_2__["FabButtonComponent"], [_helper_whatsapp_service__WEBPACK_IMPORTED_MODULE_3__["WhatsappService"]], null, null)], function (_ck, _v) {
          _ck(_v, 1, 0);
        }, null);
      }

      var FabButtonComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-fab-button", _fab_button_component__WEBPACK_IMPORTED_MODULE_2__["FabButtonComponent"], View_FabButtonComponent_Host_0, {}, {}, []);
      /***/

    },

    /***/
    "Lyw/":
    /*!************************************************************!*\
      !*** ./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js ***!
      \************************************************************/

    /*! exports provided: RECAPTCHA_BASE_URL, RECAPTCHA_LANGUAGE, RECAPTCHA_NONCE, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY, ReCaptchaV3Service, RecaptchaComponent, RecaptchaFormsModule, RecaptchaLoaderService, RecaptchaModule, RecaptchaV3Module, RecaptchaValueAccessorDirective, ɵa */

    /***/
    function Lyw_(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_BASE_URL", function () {
        return RECAPTCHA_BASE_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_LANGUAGE", function () {
        return RECAPTCHA_LANGUAGE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_NONCE", function () {
        return RECAPTCHA_NONCE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_SETTINGS", function () {
        return RECAPTCHA_SETTINGS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RECAPTCHA_V3_SITE_KEY", function () {
        return RECAPTCHA_V3_SITE_KEY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReCaptchaV3Service", function () {
        return ReCaptchaV3Service;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaComponent", function () {
        return RecaptchaComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaFormsModule", function () {
        return RecaptchaFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaLoaderService", function () {
        return RecaptchaLoaderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaModule", function () {
        return RecaptchaModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaV3Module", function () {
        return RecaptchaV3Module;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecaptchaValueAccessorDirective", function () {
        return RecaptchaValueAccessorDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return RecaptchaCommonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      function loadScript(renderMode, onLoaded, urlParams, url, nonce) {
        window.ng2recaptchaloaded = function () {
          onLoaded(grecaptcha);
        };

        var script = document.createElement("script");
        script.innerHTML = "";
        var baseUrl = url || "https://www.google.com/recaptcha/api.js";
        script.src = "".concat(baseUrl, "?render=").concat(renderMode, "&onload=ng2recaptchaloaded").concat(urlParams);

        if (nonce) {
          script.nonce = nonce;
        }

        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      var loader = {
        loadScript: loadScript
      };
      var RECAPTCHA_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-language");
      var RECAPTCHA_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-base-url");
      var RECAPTCHA_NONCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-nonce-tag");
      var RECAPTCHA_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-settings");
      var RECAPTCHA_V3_SITE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("recaptcha-v3-site-key");

      var RecaptchaLoaderService = /*#__PURE__*/function () {
        function RecaptchaLoaderService( // eslint-disable-next-line @typescript-eslint/ban-types
        platformId, language, baseUrl, nonce, v3SiteKey) {
          _classCallCheck(this, RecaptchaLoaderService);

          this.platformId = platformId;
          this.language = language;
          this.baseUrl = baseUrl;
          this.nonce = nonce;
          this.v3SiteKey = v3SiteKey;
          this.init();
          this.ready = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /** @internal */


        return _createClass(RecaptchaLoaderService, [{
          key: "init",
          value: function init() {
            if (RecaptchaLoaderService.ready) {
              return;
            }

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
              RecaptchaLoaderService.ready = subject;
              var langParam = this.language ? "&hl=" + this.language : "";
              var renderMode = this.v3SiteKey || "explicit";
              loader.loadScript(renderMode, function (grecaptcha) {
                return subject.next(grecaptcha);
              }, langParam, this.baseUrl, this.nonce);
            }
          }
        }]);
      }();
      /**
       * @internal
       * @nocollapse
       */


      RecaptchaLoaderService.ready = null;
      RecaptchaLoaderService.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];

      RecaptchaLoaderService.ctorParameters = function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_LANGUAGE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_BASE_URL]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_NONCE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_V3_SITE_KEY]
          }]
        }];
      };

      var nextId = 0;

      var RecaptchaComponent = /*#__PURE__*/function () {
        function RecaptchaComponent(elementRef, loader, zone, settings) {
          _classCallCheck(this, RecaptchaComponent);

          this.elementRef = elementRef;
          this.loader = loader;
          this.zone = zone;
          this.id = "ngrecaptcha-".concat(nextId++);
          this.errorMode = "default";
          this.resolved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // The rename will happen a bit later
          // eslint-disable-next-line @angular-eslint/no-output-native

          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

          if (settings) {
            this.siteKey = settings.siteKey;
            this.theme = settings.theme;
            this.type = settings.type;
            this.size = settings.size;
            this.badge = settings.badge;
          }
        }

        return _createClass(RecaptchaComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.subscription = this.loader.ready.subscribe(function (grecaptcha) {
              if (grecaptcha != null && grecaptcha.render instanceof Function) {
                _this.grecaptcha = grecaptcha;

                _this.renderRecaptcha();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // reset the captcha to ensure it does not leave anything behind
            // after the component is no longer needed
            this.grecaptchaReset();

            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
          /**
           * Executes the invisible recaptcha.
           * Does nothing if component's size is not set to "invisible".
           */

        }, {
          key: "execute",
          value: function execute() {
            if (this.size !== "invisible") {
              return;
            }

            if (this.widget != null) {
              this.grecaptcha.execute(this.widget);
            } else {
              // delay execution of recaptcha until it actually renders
              this.executeRequested = true;
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            if (this.widget != null) {
              if (this.grecaptcha.getResponse(this.widget)) {
                // Only emit an event in case if something would actually change.
                // That way we do not trigger "touching" of the control if someone does a "reset"
                // on a non-resolved captcha.
                this.resolved.emit(null);
              }

              this.grecaptchaReset();
            }
          }
          /**
           * ⚠️ Warning! Use this property at your own risk!
           *
           * While this member is `public`, it is not a part of the component's public API.
           * The semantic versioning guarantees _will not be honored_! Thus, you might find that this property behavior changes in incompatible ways in minor or even patch releases.
           * You are **strongly advised** against using this property.
           * Instead, use more idiomatic ways to get reCAPTCHA value, such as `resolved` EventEmitter, or form-bound methods (ngModel, formControl, and the likes).å
           */

        }, {
          key: "__unsafe_widgetValue",
          get: function get() {
            return this.widget != null ? this.grecaptcha.getResponse(this.widget) : null;
          }
          /** @internal */

        }, {
          key: "expired",
          value: function expired() {
            this.resolved.emit(null);
          }
          /** @internal */

        }, {
          key: "errored",
          value: function errored(args) {
            this.error.emit(args);
          }
          /** @internal */

        }, {
          key: "captchaResponseCallback",
          value: function captchaResponseCallback(response) {
            this.resolved.emit(response);
          }
          /** @internal */

        }, {
          key: "grecaptchaReset",
          value: function grecaptchaReset() {
            var _this2 = this;

            if (this.widget != null) {
              this.zone.runOutsideAngular(function () {
                return _this2.grecaptcha.reset(_this2.widget);
              });
            }
          }
          /** @internal */

        }, {
          key: "renderRecaptcha",
          value: function renderRecaptcha() {
            var _this3 = this;

            // This `any` can be removed after @types/grecaptcha get updated
            var renderOptions = {
              badge: this.badge,
              callback: function callback(response) {
                _this3.zone.run(function () {
                  return _this3.captchaResponseCallback(response);
                });
              },
              "expired-callback": function expiredCallback() {
                _this3.zone.run(function () {
                  return _this3.expired();
                });
              },
              sitekey: this.siteKey,
              size: this.size,
              tabindex: this.tabIndex,
              theme: this.theme,
              type: this.type
            };

            if (this.errorMode === "handled") {
              renderOptions["error-callback"] = function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this3.zone.run(function () {
                  return _this3.errored(args);
                });
              };
            }

            this.widget = this.grecaptcha.render(this.elementRef.nativeElement, renderOptions);

            if (this.executeRequested === true) {
              this.executeRequested = false;
              this.execute();
            }
          }
        }]);
      }();

      RecaptchaComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          exportAs: "reCaptcha",
          selector: "re-captcha",
          template: ""
        }]
      }];

      RecaptchaComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: RecaptchaLoaderService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_SETTINGS]
          }]
        }];
      };

      RecaptchaComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["attr.id"]
        }],
        siteKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        badge: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        errorMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resolved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        error: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      var RecaptchaCommonModule = /*#__PURE__*/_createClass(function RecaptchaCommonModule() {
        _classCallCheck(this, RecaptchaCommonModule);
      });

      RecaptchaCommonModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [RecaptchaComponent],
          exports: [RecaptchaComponent]
        }]
      }];

      var RecaptchaModule = /*#__PURE__*/_createClass(function RecaptchaModule() {
        _classCallCheck(this, RecaptchaModule);
      });

      RecaptchaModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [RecaptchaComponent],
          imports: [RecaptchaCommonModule],
          providers: [RecaptchaLoaderService]
        }]
      }];
      /**
       * The main service for working with reCAPTCHA v3 APIs.
       *
       * Use the `execute` method for executing a single action, and
       * `onExecute` observable for listening to all actions at once.
       */

      var ReCaptchaV3Service = /*#__PURE__*/function () {
        function ReCaptchaV3Service(zone, siteKey, // eslint-disable-next-line @typescript-eslint/ban-types
        platformId, baseUrl, nonce, language) {
          var _this4 = this;

          _classCallCheck(this, ReCaptchaV3Service);

          /** @internal */
          this.onLoadComplete = function (grecaptcha) {
            _this4.grecaptcha = grecaptcha;

            if (_this4.actionBacklog && _this4.actionBacklog.length > 0) {
              _this4.actionBacklog.forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    action = _ref2[0],
                    subject = _ref2[1];

                return _this4.executeActionWithSubject(action, subject);
              });

              _this4.actionBacklog = undefined;
            }
          };

          this.zone = zone;
          this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId);
          this.siteKey = siteKey;
          this.nonce = nonce;
          this.language = language;
          this.baseUrl = baseUrl;
          this.init();
        }

        return _createClass(ReCaptchaV3Service, [{
          key: "onExecute",
          get: function get() {
            if (!this.onExecuteSubject) {
              this.onExecuteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
              this.onExecuteObservable = this.onExecuteSubject.asObservable();
            }

            return this.onExecuteObservable;
          }
        }, {
          key: "onExecuteError",
          get: function get() {
            if (!this.onExecuteErrorSubject) {
              this.onExecuteErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
              this.onExecuteErrorObservable = this.onExecuteErrorSubject.asObservable();
            }

            return this.onExecuteErrorObservable;
          }
          /**
           * Executes the provided `action` with reCAPTCHA v3 API.
           * Use the emitted token value for verification purposes on the backend.
           *
           * For more information about reCAPTCHA v3 actions and tokens refer to the official documentation at
           * https://developers.google.com/recaptcha/docs/v3.
           *
           * @param {string} action the action to execute
           * @returns {Observable<string>} an `Observable` that will emit the reCAPTCHA v3 string `token` value whenever ready.
           * The returned `Observable` completes immediately after emitting a value.
           */

        }, {
          key: "execute",
          value: function execute(action) {
            var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();

            if (this.isBrowser) {
              if (!this.grecaptcha) {
                // todo: add to array of later executions
                if (!this.actionBacklog) {
                  this.actionBacklog = [];
                }

                this.actionBacklog.push([action, subject]);
              } else {
                this.executeActionWithSubject(action, subject);
              }
            }

            return subject.asObservable();
          }
          /** @internal */

        }, {
          key: "executeActionWithSubject",
          value: function executeActionWithSubject(action, subject) {
            var _this5 = this;

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var onError = function onError(error) {
              _this5.zone.run(function () {
                subject.error(error);

                if (_this5.onExecuteErrorSubject) {
                  // We don't know any better at this point, unfortunately, so have to resort to `any`
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  _this5.onExecuteErrorSubject.next({
                    action: action,
                    error: error
                  });
                }
              });
            };

            this.zone.runOutsideAngular(function () {
              try {
                _this5.grecaptcha.execute(_this5.siteKey, {
                  action: action
                }).then(function (token) {
                  _this5.zone.run(function () {
                    subject.next(token);
                    subject.complete();

                    if (_this5.onExecuteSubject) {
                      _this5.onExecuteSubject.next({
                        action: action,
                        token: token
                      });
                    }
                  });
                }, onError);
              } catch (e) {
                onError(e);
              }
            });
          }
          /** @internal */

        }, {
          key: "init",
          value: function init() {
            if (this.isBrowser) {
              if ("grecaptcha" in window) {
                this.grecaptcha = grecaptcha;
              } else {
                var langParam = this.language ? "&hl=" + this.language : "";
                loader.loadScript(this.siteKey, this.onLoadComplete, langParam, this.baseUrl, this.nonce);
              }
            }
          }
        }]);
      }();

      ReCaptchaV3Service.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }];

      ReCaptchaV3Service.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_V3_SITE_KEY]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_BASE_URL]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_NONCE]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RECAPTCHA_LANGUAGE]
          }]
        }];
      };

      var RecaptchaV3Module = /*#__PURE__*/_createClass(function RecaptchaV3Module() {
        _classCallCheck(this, RecaptchaV3Module);
      });

      RecaptchaV3Module.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [ReCaptchaV3Service]
        }]
      }];

      var RecaptchaValueAccessorDirective = /*#__PURE__*/function () {
        function RecaptchaValueAccessorDirective(host) {
          _classCallCheck(this, RecaptchaValueAccessorDirective);

          this.host = host;
          this.requiresControllerReset = false;
        }

        return _createClass(RecaptchaValueAccessorDirective, [{
          key: "writeValue",
          value: function writeValue(value) {
            if (!value) {
              this.host.reset();
            } else {
              // In this case, it is most likely that a form controller has requested to write a specific value into the component.
              // This isn't really a supported case - reCAPTCHA values are single-use, and, in a sense, readonly.
              // What this means is that the form controller has recaptcha control state of X, while reCAPTCHA itself can't "restore"
              // to that state. In order to make form controller aware of this discrepancy, and to fix the said misalignment,
              // we'll be telling the controller to "reset" the value back to null.
              if (this.host.__unsafe_widgetValue !== value && Boolean(this.host.__unsafe_widgetValue) === false) {
                this.requiresControllerReset = true;
              }
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;

            if (this.requiresControllerReset) {
              this.requiresControllerReset = false;
              this.onChange(null);
            }
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "onResolve",
          value: function onResolve($event) {
            if (this.onChange) {
              this.onChange($event);
            }

            if (this.onTouched) {
              this.onTouched();
            }
          }
        }]);
      }();

      RecaptchaValueAccessorDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          providers: [{
            multi: true,
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return RecaptchaValueAccessorDirective;
            })
          }],
          selector: "re-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]"
        }]
      }];

      RecaptchaValueAccessorDirective.ctorParameters = function () {
        return [{
          type: RecaptchaComponent
        }];
      };

      RecaptchaValueAccessorDirective.propDecorators = {
        onResolve: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["resolved", ["$event"]]
        }]
      };

      var RecaptchaFormsModule = /*#__PURE__*/_createClass(function RecaptchaFormsModule() {
        _classCallCheck(this, RecaptchaFormsModule);
      });

      RecaptchaFormsModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [RecaptchaValueAccessorDirective],
          exports: [RecaptchaValueAccessorDirective],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], RecaptchaCommonModule]
        }]
      }];
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng-recaptcha.js.map

      /***/
    },

    /***/
    "RqsJ":
    /*!**********************************************************************!*\
      !*** ./src/app/components/shared/fab-button/fab-button.component.ts ***!
      \**********************************************************************/

    /*! exports provided: FabButtonComponent */

    /***/
    function RqsJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FabButtonComponent", function () {
        return FabButtonComponent;
      });

      var FabButtonComponent = /*#__PURE__*/function () {
        function FabButtonComponent(whatsAppService) {
          _classCallCheck(this, FabButtonComponent);

          this.whatsAppService = whatsAppService;
          this.whatsAppUrl = '';
        }

        return _createClass(FabButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.whatsAppUrl = this.whatsAppService.getWhatsAppUrl();
          }
        }]);
      }();
      /***/

    },

    /***/
    "VFiD":
    /*!*********************************************************************!*\
      !*** ./src/app/components/helper/contact/contact-helper.service.ts ***!
      \*********************************************************************/

    /*! exports provided: ContactHelperService */

    /***/
    function VFiD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactHelperService", function () {
        return ContactHelperService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ContactHelperService = /*#__PURE__*/function () {
        function ContactHelperService(http) {
          _classCallCheck(this, ContactHelperService);

          this.http = http;
          this.ServerUrl = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url, "send-email");
          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
        }

        return _createClass(ContactHelperService, [{
          key: "contactForm",
          value: function contactForm(formdata) {
            return this.http.post(this.ServerUrl, formdata, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
          }
        }, {
          key: "contactFormNew",
          value: function contactFormNew(formdata) {
            return this.http.post(this.ServerUrl, formdata, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error("An error occurred:", error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // return an observable with a user-facing error message


            this.errorData = {
              errorTitle: "Request Fallida",
              errorDesc: "Algo malo sucedió. Por favor, inténtelo de nuevo más tarde."
            };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.errorData);
          }
        }]);
      }();

      ContactHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function ContactHelperService_Factory() {
          return new ContactHelperService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
        },
        token: ContactHelperService,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "wBg8":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/shared/fab-button/fab-button.component.css.shim.ngstyle.js ***!
      \***************************************************************************************/

    /*! exports provided: styles */

    /***/
    function wBg8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styles", function () {
        return styles;
      });
      /**
       * @fileoverview This file was generated by the Angular template compiler. Do not edit.
       *
       * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
       * tslint:disable
       */


      var styles = ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n  }\n  \n  .fab-wrapper[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 3rem;\n    right: 3rem;\n    z-index: 9999999 !important;\n\n  }\n  \n  .fab-button[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    bottom: -1rem;\n    right: -1rem;\n    width: 4rem;\n    height: 4rem;\n    background: #25D366;\n    border-radius: 50%;\n    background: #25D366;\n    box-shadow: 0px 5px 20px #93e0af;\n    transition: all 0.3s ease;\n    border-bottom-right-radius: 6px;\n    border: 1px solid #25D366;\n    cursor: pointer !important;\n  }\n  \n  .fab-content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .icon-fab[_ngcontent-%COMP%]{\n    color: #FFFFFF !important;\n    font-size: 25px !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhYi1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLDJCQUEyQjs7RUFFN0I7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoiZmFiLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgLmZhYi13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAzcmVtO1xuICAgIHJpZ2h0OiAzcmVtO1xuICAgIHotaW5kZXg6IDk5OTk5OTkgIWltcG9ydGFudDtcblxuICB9XG4gIC5mYWItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTFyZW07XG4gICAgcmlnaHQ6IC0xcmVtO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjMjVEMzY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjMjVEMzY2O1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggMjBweCAjOTNlMGFmO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjVEMzY2O1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZhYi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5pY29uLWZhYntcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB9XG4iXX0= */"];
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~components-pages-contact-contact-module-ngfactory~components-pages-home-two-home-two-module-ngfactory-es5.js.map