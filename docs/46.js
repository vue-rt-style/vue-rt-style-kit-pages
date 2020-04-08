(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
var componentsList = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AppPromoVip",
  components: componentsList,
  mounted: function mounted() {
    var points = {
      init: function init() {
        this.hasFirstDraw = false;
        this.matrix = [];
        this.pointRadius = 1;
        this.circleRadiusStartStep = 3;
        this.minPointRadius = 0.2;
        this.startOpacity = 0.5;
        this.maxPointRadius = 1;
        this.maxDelraCoord = 20;
        var delta = 1.5;
        this.matrixWidth = 45 * delta;
        this.matrixHeight = 25 * delta;
        this.circleRadiusStart = [];
        this.circleRadiusEnd = [];
        this.liveSteps = [];
        this.randomRadiusDelta = 1;
        this.liveSize = 150;
        this.radius = 1;
        this.startsPoint = [];
        this.radiusDeflection = 600;
        this.gradeStep = 2;
        this.canvas = document.querySelector('.point-space');
        this.canvas.width = 1400;
        this.canvas.height = 700;
        this.matrixStep = parseInt(Math.min(this.canvas.width / this.matrixWidth, this.canvas.height / this.matrixHeight));
        this.context = this.canvas.getContext('2d');
        this.context.scale(1, 1);
        this.mouseX = 0;
        this.mouseY = 0;
        this.redColor = 119;
        this.greenColor = 1;
        this.blueColor = 255;
        this.startRedColor = parseInt(255 * Math.random());
        this.startGreenColor = parseInt(255 * Math.random());
        this.startBlueColor = parseInt(255 * Math.random()); // this.redColor = 255;
        // this.greenColor = 255;
        // this.blueColor = 255;

        this.canvas.addEventListener('mousemove', function (event) {
          this.mouseX = event.pageX - this.canvas.offsetLeft;
          this.mouseY = event.pageY - this.canvas.offsetTop;
        }.bind(this), false);
        this.createMatrix();
        this.bind();
      },
      renderMatrix: function renderMatrix() {
        if (!this.hasFirstDraw || this.startsPoint.length > 0) {
          this.hasFirstDraw = true;
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          var ctx = this.context;
          ctx.beginPath();
          this.matrix.forEach(function (row) {
            row.forEach(function (item) {
              ctx.beginPath(); // ctx.fillStyle = 'rgba('+item.red+','+item.green+','+item.blue+',' + item.opacity + ')';

              ctx.fillStyle = 'rgba(' + item.red + ',' + item.green + ',' + item.blue + ',' + item.opacity + ')';
              ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI, false);
              ctx.fill();
            }.bind(this));
          }.bind(this));
          this.stepWave();
        }
      },
      createMatrix: function createMatrix() {
        for (var i = 0; i < this.matrixHeight; i++) {
          var row = [];

          for (var j = 0; j < this.matrixWidth; j++) {
            row.push({
              radius: this.pointRadius,
              opacity: this.startOpacity,
              x: this.matrixStep * j,
              y: this.matrixStep * i,
              beforeX: this.matrixStep * j,
              beforeY: this.matrixStep * i,
              msToGoBack: 0,
              // red: this.startRedColor,
              // green: this.startGreenColor,
              // blue: this.startBlueColor
              red: parseInt(Math.random() * 255),
              green: parseInt(Math.random() * 255),
              blue: parseInt(Math.random() * 255)
            });
          }

          this.matrix.push(row);
        }

        this.animate();
      },
      checkCircle: function checkCircle(x, y, a, b, radius) {
        this.randomRadiusDelta = Math.random() * 10 - Math.random() * 10;
        return Math.pow(x - a + this.randomRadiusDelta, 2) + Math.pow(y - b + this.randomRadiusDelta, 2) <= Math.pow(radius, 2);
      },
      animate: function animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.renderMatrix();
      },
      stepWave: function stepWave() {
        this.circleRadiusStart.forEach(function (item, index) {
          this.circleRadiusStart[index] += this.circleRadiusStartStep;
        }.bind(this));
        this.circleRadiusEnd.forEach(function (item, index) {
          this.circleRadiusEnd[index]--;
        }.bind(this));
        var indexForRemove = [];
        this.startsPoint.forEach(function (startPos, index) {
          this.liveSteps[index]--;

          if (this.liveSteps[index] > 0) {
            for (var i = startPos.y - this.circleRadiusStart[index]; i < startPos.y + this.circleRadiusStart[index]; i++) {
              for (var j = startPos.x - this.circleRadiusStart[index]; j < startPos.x + this.circleRadiusStart[index]; j++) {
                if (this.matrix[i] && this.matrix[i][j] && this.checkCircle(j + parseInt(Math.random() * 20), i + parseInt(Math.random() * 20), this.startsPoint[index].x, this.startsPoint[index].y, this.circleRadiusStart[index] + parseInt(Math.random() * 20))) {
                  if (this.matrix[i][j].msToGoBack) {
                    this.matrix[i][j].msToGoBack--;
                    this.matrix[i][j].opacity += (1 - this.matrix[i][j].opacity) / this.liveSteps[index];
                    this.matrix[i][j].radius += (this.pointRadius - this.matrix[i][j].radius) / this.pointRadius / (this.liveSteps[index] / 4);
                    this.matrix[i][j].x -= (this.matrix[i][j].x - this.matrix[i][j].beforeX) / (this.liveSteps[index] / 4);
                    this.matrix[i][j].y -= (this.matrix[i][j].y - this.matrix[i][j].beforeY) / (this.liveSteps[index] / 4);
                    this.matrix[i][j].red -= (this.matrix[i][j].red - this.redColor) / this.liveSteps[index] * 30;
                    this.matrix[i][j].green -= (this.matrix[i][j].green - this.greenColor) / this.liveSteps[index] * 30;
                    this.matrix[i][j].blue -= (this.matrix[i][j].blue - this.blueColor) / this.liveSteps[index] * 30;
                  } else {
                    if (this.liveSteps > 1) {
                      this.matrix[i][j].msToGoBack = this.liveSteps[index];
                      this.matrix[i][j].opacity = 1;
                      var delta = (this.circleRadiusStart[index] - Math.sqrt(Math.pow(i - startPos.y, 2) + Math.pow(j - startPos.x, 2))) / this.circleRadiusStart[index];
                      var deltaY = (i - startPos.y) / this.circleRadiusStart[index];
                      var deltaX = (j - startPos.x) / this.circleRadiusStart[index];
                      var newRadius = 10 * delta;

                      if (this.minPointRadius > newRadius) {
                        newRadius = this.minPointRadius;
                      } // newRadius =


                      this.matrix[i][j].radius = newRadius;

                      if (this.matrix[i][j].radius > this.maxPointRadius) {
                        this.matrix[i][j].radius = this.maxPointRadius;
                      }

                      var minRadius = 5; // if(Math.sqrt((i - startPos.y)**2 + (j-startPos.x)**2) > minRadius) {

                      this.maxDelraCoord;
                      this.matrix[i][j].red = 100;
                      this.matrix[i][j].green = 100;
                      this.matrix[i][j].blue = 100;
                      deltaX *= 100;
                      deltaY *= 100; // if(deltaX > this.maxDelraCoord){
                      //     deltaX = this.maxDelraCoord
                      // }
                      // if(deltaY > this.maxDelraCoord){
                      //     deltaY = this.maxDelraCoord
                      // }

                      this.matrix[i][j].x -= deltaX;
                      this.matrix[i][j].y -= deltaY; // }
                    }
                  }
                }
              }
            }
          } else {
            indexForRemove.push(index);
            console.info('indexForRemove', indexForRemove);
          }
        }.bind(this));

        for (var i = indexForRemove.length - 1; i >= 0; i--) {
          // console.info('!', i)
          this.liveSteps.splice(i, 1);
          console.info('this.liveSteps after', this.liveSteps);
          this.circleRadiusStart.splice(i, 1);
          this.circleRadiusEnd.splice(i, 1);
          this.startsPoint.splice(i, 1);
          this.hasFirstDraw = false;
        }
      },
      startWave: function startWave(x, y) {
        this.circleRadiusStart.push(this.radius);
        this.circleRadiusEnd.push(0);

        for (var i = 0; i < this.matrixHeight; i++) {
          for (var j = 0; j < this.matrixWidth; j++) {
            if (this.checkCircle(this.matrix[i][j].x, this.matrix[i][j].y, x, y)) {
              this.matrix[i][j].opacity = 0.3;
              this.matrix[i][j].msToGoBack = this.liveSteps[0];
            }
          }
        }
      },
      bind: function bind() {
        var node = document.querySelector('.point-space');
        node.addEventListener('mousedown', function (event) {
          this.mouseX = parseInt((event.pageX - this.canvas.offsetLeft) / this.matrixStep);
          this.mouseY = parseInt((event.pageY - this.canvas.offsetTop) / this.matrixStep);
          this.liveSteps.push(this.liveSize);
          this.startsPoint.push({
            y: 0,
            x: 0
          });
          this.startWave(this.mouseX, this.mouseY);
        }.bind(this));
      }
    };
    points.init();
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=519fa477&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=519fa477& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wc-inline rt-space-top5"},[_c('div',{staticClass:"rt-container"},[_c('canvas',{staticClass:"point-space"})])])}]



/***/ }),

/***/ "./src/example-pages/components/pages/promo/vip.vue":
/*!**********************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vip_vue_vue_type_template_id_519fa477___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vip.vue?vue&type=template&id=519fa477& */ "./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=519fa477&");
/* harmony import */ var _vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vip.vue?vue&type=script&lang=js& */ "./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vip_vue_vue_type_template_id_519fa477___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vip_vue_vue_type_template_id_519fa477___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vip.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=519fa477&":
/*!*****************************************************************************************!*\
  !*** ./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=519fa477& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_519fa477___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vip.vue?vue&type=template&id=519fa477& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/example-pages/components/pages/promo/vip.vue?vue&type=template&id=519fa477&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_519fa477___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vip_vue_vue_type_template_id_519fa477___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);