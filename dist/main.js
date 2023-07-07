"use strict";
(self["webpackChunkngx_mat_select_search"] = self["webpackChunkngx_mat_select_search"] || []).push([["main"],{

/***/ 6450:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 2137);
/* harmony import */ var _mat_select_search_ngx_mat_select_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat-select-search/ngx-mat-select-search.module */ 5050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6253);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 4031);
/* harmony import */ var _examples_01_single_selection_example_single_selection_example_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples/01-single-selection-example/single-selection-example.component */ 3533);
/* harmony import */ var _examples_02_multiple_selection_example_multiple_selection_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/02-multiple-selection-example/multiple-selection-example.component */ 3566);
/* harmony import */ var _examples_03_custom_clear_icon_example_custom_clear_icon_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/03-custom-clear-icon-example/custom-clear-icon-example.component */ 8582);
/* harmony import */ var _examples_09_custom_no_entries_found_example_custom_no_entries_found_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/09-custom-no-entries-found-example/custom-no-entries-found-example.component */ 213);
/* harmony import */ var _examples_04_option_groups_example_option_groups_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/04-option-groups-example/option-groups-example.component */ 1704);
/* harmony import */ var _examples_05_server_side_search_example_server_side_search_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/05-server-side-search-example/server-side-search-example.component */ 3712);
/* harmony import */ var _examples_06_multiple_selection_select_all_example_multiple_selection_select_all_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/06-multiple-selection-select-all-example/multiple-selection-select-all-example.component */ 5201);
/* harmony import */ var _examples_07_tooltip_select_all_example_tooltip_select_all_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/07-tooltip-select-all-example/tooltip-select-all-example.component */ 4358);














class AppComponent {
  constructor() {
    this.version = _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.VERSION;
    this.matSelectSearchVersion = _mat_select_search_ngx_mat_select_search_module__WEBPACK_IMPORTED_MODULE_0__.MatSelectSearchVersion;
    this.rightToLeft = false;
  }
  toggleRightToLeft() {
    this.rightToLeft = !this.rightToLeft;
    document.body.dir = this.rightToLeft ? 'rtl' : '';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 33,
    vars: 2,
    consts: [["color", "primary"], [1, "basic-container"], ["href", "https://material.angular.io/components/select/overview", "target", "_blank"], ["href", "https://material.angular.io"], ["href", "https://github.com/bithost-gmbh/ngx-mat-select-search", "target", "_blank"], ["ngModel", "", 3, "ngModelChange"], [1, "version-info"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Angular Material 2 App\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 1)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "ngx-mat-select-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Angular component providing an input field for searching / filtering ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "MatSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " options of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " library.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p")(14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "https://github.com/bithost-gmbh/ngx-mat-select-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "app-single-selection-example")(19, "app-multiple-selection-example")(20, "app-custom-clear-icon-example")(21, "app-custom-no-entries-found-example")(22, "app-option-groups-example")(23, "app-server-side-search-example")(24, "app-multiple-selection-select-all-example")(25, "app-tooltip-select-all-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div")(27, "mat-slide-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slide_toggle_ngModelChange_27_listener() {
          return ctx.toggleRightToLeft();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Right-to-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ngx-mat-select-search Version: ", ctx.matSelectSearchVersion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Material Version: ", ctx.version.full, " ");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__.MatSlideToggle, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _examples_01_single_selection_example_single_selection_example_component__WEBPACK_IMPORTED_MODULE_1__.SingleSelectionExampleComponent, _examples_02_multiple_selection_example_multiple_selection_example_component__WEBPACK_IMPORTED_MODULE_2__.MultipleSelectionExampleComponent, _examples_03_custom_clear_icon_example_custom_clear_icon_example_component__WEBPACK_IMPORTED_MODULE_3__.CustomClearIconExampleComponent, _examples_09_custom_no_entries_found_example_custom_no_entries_found_example_component__WEBPACK_IMPORTED_MODULE_4__.CustomNoEntriesFoundExampleComponent, _examples_04_option_groups_example_option_groups_example_component__WEBPACK_IMPORTED_MODULE_5__.OptionGroupsExampleComponent, _examples_05_server_side_search_example_server_side_search_example_component__WEBPACK_IMPORTED_MODULE_6__.ServerSideSearchExampleComponent, _examples_06_multiple_selection_select_all_example_multiple_selection_select_all_example_component__WEBPACK_IMPORTED_MODULE_7__.MultipleSelectionSelectAllExampleComponent, _examples_07_tooltip_select_all_example_tooltip_select_all_example_component__WEBPACK_IMPORTED_MODULE_8__.TooltipSelectAllExampleComponent],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjAwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 3380);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5364);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 7250);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-button */ 3921);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 4031);
/* harmony import */ var _mat_select_search_ngx_mat_select_search_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat-select-search/ngx-mat-select-search.module */ 5050);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6450);
/* harmony import */ var _examples_01_single_selection_example_single_selection_example_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples/01-single-selection-example/single-selection-example.component */ 3533);
/* harmony import */ var _examples_02_multiple_selection_example_multiple_selection_example_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples/02-multiple-selection-example/multiple-selection-example.component */ 3566);
/* harmony import */ var _examples_03_custom_clear_icon_example_custom_clear_icon_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples/03-custom-clear-icon-example/custom-clear-icon-example.component */ 8582);
/* harmony import */ var _examples_04_option_groups_example_option_groups_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/04-option-groups-example/option-groups-example.component */ 1704);
/* harmony import */ var _examples_05_server_side_search_example_server_side_search_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/05-server-side-search-example/server-side-search-example.component */ 3712);
/* harmony import */ var _examples_06_multiple_selection_select_all_example_multiple_selection_select_all_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/06-multiple-selection-select-all-example/multiple-selection-select-all-example.component */ 5201);
/* harmony import */ var _examples_07_tooltip_select_all_example_tooltip_select_all_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/07-tooltip-select-all-example/tooltip-select-all-example.component */ 4358);
/* harmony import */ var _examples_08_infinite_scroll_example_infinite_scroll_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/08-infinite-scroll-example/infinite-scroll-example.component */ 124);
/* harmony import */ var _examples_09_custom_no_entries_found_example_custom_no_entries_found_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/09-custom-no-entries-found-example/custom-no-entries-found-example.component */ 213);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6253);
/* harmony import */ var _mat_select_search_mat_select_search_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mat-select-search/mat-select-search-test.component */ 3003);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1197);























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _mat_select_search_ngx_mat_select_search_module__WEBPACK_IMPORTED_MODULE_0__.NgxMatSelectSearchModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
    // keeping it simpler with one module (MaterialModule) less,
    _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__.MatLegacySelectModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__.MatLegacySelectModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _examples_01_single_selection_example_single_selection_example_component__WEBPACK_IMPORTED_MODULE_2__.SingleSelectionExampleComponent, _examples_02_multiple_selection_example_multiple_selection_example_component__WEBPACK_IMPORTED_MODULE_3__.MultipleSelectionExampleComponent, _examples_03_custom_clear_icon_example_custom_clear_icon_example_component__WEBPACK_IMPORTED_MODULE_4__.CustomClearIconExampleComponent, _examples_09_custom_no_entries_found_example_custom_no_entries_found_example_component__WEBPACK_IMPORTED_MODULE_10__.CustomNoEntriesFoundExampleComponent, _examples_04_option_groups_example_option_groups_example_component__WEBPACK_IMPORTED_MODULE_5__.OptionGroupsExampleComponent, _examples_05_server_side_search_example_server_side_search_example_component__WEBPACK_IMPORTED_MODULE_6__.ServerSideSearchExampleComponent, _examples_06_multiple_selection_select_all_example_multiple_selection_select_all_example_component__WEBPACK_IMPORTED_MODULE_7__.MultipleSelectionSelectAllExampleComponent, _examples_07_tooltip_select_all_example_tooltip_select_all_example_component__WEBPACK_IMPORTED_MODULE_8__.TooltipSelectAllExampleComponent, _examples_08_infinite_scroll_example_infinite_scroll_example_component__WEBPACK_IMPORTED_MODULE_9__.InfiniteScrollExampleComponent, _mat_select_search_mat_select_search_test_component__WEBPACK_IMPORTED_MODULE_11__.MatSelectSearchTestComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _mat_select_search_ngx_mat_select_search_module__WEBPACK_IMPORTED_MODULE_0__.NgxMatSelectSearchModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__.MatSlideToggleModule,
    // keeping it simpler with one module (MaterialModule) less,
    _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__.MatLegacySelectModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule],
    exports: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_18__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLegacyFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__.MatLegacySelectModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule]
  });
})();

/***/ }),

/***/ 3533:
/*!********************************************************************************************!*\
  !*** ./src/app/examples/01-single-selection-example/single-selection-example.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SingleSelectionExampleComponent: () => (/* binding */ SingleSelectionExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2326);
/* harmony import */ var _demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-data */ 9841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);











const _c0 = ["singleSelect"];
function SingleSelectionExampleComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", bank_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bank_r2.name, " ");
  }
}
class SingleSelectionExampleComponent {
  constructor() {
    /** list of banks */
    this.banks = _demo_data__WEBPACK_IMPORTED_MODULE_0__.BANKS;
    /** control for the selected bank */
    this.bankCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null);
    /** control for the MatSelect filter keyword */
    this.bankFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
      nonNullable: true
    });
    /** list of banks filtered by search keyword */
    this.filteredBanks = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
    /** Subject that emits when the component has been destroyed. */
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    // set initial selection
    this.bankCtrl.setValue(this.banks[10]);
    // load the initial bank list
    this.filteredBanks.next(this.banks.slice());
    // listen for search field value changes
    this.bankFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBanks();
    });
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  setInitialValue() {
    this.filteredBanks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.singleSelect.compareWith = (a, b) => a && b && a.id === b.id;
    });
  }
  filterBanks() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1));
  }
  static #_ = this.ɵfac = function SingleSelectionExampleComponent_Factory(t) {
    return new (t || SingleSelectionExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SingleSelectionExampleComponent,
    selectors: [["app-single-selection-example"]],
    viewQuery: function SingleSelectionExampleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.singleSelect = _t.first);
      }
    },
    decls: 12,
    vars: 6,
    consts: [["placeholder", "Bank", 3, "formControl"], ["singleSelect", ""], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function SingleSelectionExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Single selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p")(3, "mat-form-field")(4, "mat-select", 0, 1)(6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ngx-mat-select-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SingleSelectionExampleComponent_mat_option_8_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankFilterCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, ctx.filteredBanks));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Selected Bank: ", ctx.bankCtrl.value == null ? null : ctx.bankCtrl.value.name, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchComponent, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_11__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3566:
/*!************************************************************************************************!*\
  !*** ./src/app/examples/02-multiple-selection-example/multiple-selection-example.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipleSelectionExampleComponent: () => (/* binding */ MultipleSelectionExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2326);
/* harmony import */ var _demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-data */ 9841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);











const _c0 = ["multiSelect"];
function MultipleSelectionExampleComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", bank_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bank_r3.name, " ");
  }
}
function MultipleSelectionExampleComponent_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bank_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](bank_r4.name);
  }
}
class MultipleSelectionExampleComponent {
  constructor() {
    /** list of banks */
    this.banks = _demo_data__WEBPACK_IMPORTED_MODULE_0__.BANKS;
    /** control for the selected bank for multi-selection */
    this.bankMultiCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([], {
      nonNullable: true
    });
    /** control for the MatSelect filter keyword multi-selection */
    this.bankMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
      nonNullable: true
    });
    /** list of banks filtered by search keyword */
    this.filteredBanksMulti = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
    /** Subject that emits when the component has been destroyed. */
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    // set initial selection
    this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);
    // load the initial bank list
    this.filteredBanksMulti.next(this.banks.slice());
    // listen for search field value changes
    this.bankMultiFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBanksMulti();
    });
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  setInitialValue() {
    this.filteredBanksMulti.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.multiSelect.compareWith = (a, b) => a && b && a.id === b.id;
    });
  }
  filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1));
  }
  static #_ = this.ɵfac = function MultipleSelectionExampleComponent_Factory(t) {
    return new (t || MultipleSelectionExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MultipleSelectionExampleComponent,
    selectors: [["app-multiple-selection-example"]],
    viewQuery: function MultipleSelectionExampleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.multiSelect = _t.first);
      }
    },
    decls: 13,
    vars: 7,
    consts: [["placeholder", "Banks", 3, "formControl", "multiple"], ["multiSelect", ""], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "value"]],
    template: function MultipleSelectionExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Multiple selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p")(3, "mat-form-field")(4, "mat-select", 0, 1)(6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ngx-mat-select-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MultipleSelectionExampleComponent_mat_option_8_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Selected Banks:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MultipleSelectionExampleComponent_ul_12_Template, 3, 1, "ul", 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankMultiCtrl)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankMultiFilterCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, ctx.filteredBanksMulti));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bankMultiCtrl == null ? null : ctx.bankMultiCtrl.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchComponent, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_11__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8582:
/*!**********************************************************************************************!*\
  !*** ./src/app/examples/03-custom-clear-icon-example/custom-clear-icon-example.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomClearIconExampleComponent: () => (/* binding */ CustomClearIconExampleComponent)
/* harmony export */ });
/* harmony import */ var _01_single_selection_example_single_selection_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../01-single-selection-example/single-selection-example.component */ 3533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _mat_select_search_mat_select_search_clear_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search-clear.directive */ 2657);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 7250);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);










function CustomClearIconExampleComponent_ngx_mat_select_search_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-mat-select-search", 4)(1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r1.bankFilterCtrl)("preventHomeEndKeyPropagation", true);
  }
}
function CustomClearIconExampleComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bank_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bank_r3.name, " ");
  }
}
class CustomClearIconExampleComponent extends _01_single_selection_example_single_selection_example_component__WEBPACK_IMPORTED_MODULE_0__.SingleSelectionExampleComponent {
  // reuse all code of SingleSelectionComponent
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵCustomClearIconExampleComponent_BaseFactory;
    return function CustomClearIconExampleComponent_Factory(t) {
      return (ɵCustomClearIconExampleComponent_BaseFactory || (ɵCustomClearIconExampleComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](CustomClearIconExampleComponent)))(t || CustomClearIconExampleComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CustomClearIconExampleComponent,
    selectors: [["app-custom-clear-icon-example"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
    decls: 12,
    vars: 6,
    consts: [["placeholder", "Bank", 3, "formControl"], ["singleSelect", ""], [3, "formControl", "preventHomeEndKeyPropagation", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "formControl", "preventHomeEndKeyPropagation"], ["ngxMatSelectSearchClear", ""], [3, "value"]],
    template: function CustomClearIconExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Single selection with custom clear icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p")(3, "mat-form-field")(4, "mat-select", 0, 1)(6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CustomClearIconExampleComponent_ngx_mat_select_search_7_Template, 3, 2, "ngx-mat-select-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CustomClearIconExampleComponent_mat_option_8_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.bankCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 4, ctx.filteredBanks));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Selected Bank: ", ctx.bankCtrl.value == null ? null : ctx.bankCtrl.value.name, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchComponent, _mat_select_search_mat_select_search_clear_directive__WEBPACK_IMPORTED_MODULE_2__.MatSelectSearchClearDirective, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyFormField, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_9__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1704:
/*!**************************************************************************************!*\
  !*** ./src/app/examples/04-option-groups-example/option-groups-example.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionGroupsExampleComponent: () => (/* binding */ OptionGroupsExampleComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var _demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-data */ 9841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);











function OptionGroupsExampleComponent_mat_optgroup_8_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", bank_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bank_r4.name, " ");
  }
}
function OptionGroupsExampleComponent_mat_optgroup_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-optgroup", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OptionGroupsExampleComponent_mat_optgroup_8_mat_option_1_Template, 2, 2, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("label", group_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", group_r2.banks);
  }
}
class OptionGroupsExampleComponent {
  constructor() {
    /** list of bank groups */
    this.bankGroups = _demo_data__WEBPACK_IMPORTED_MODULE_0__.BANKGROUPS;
    /** control for the selected bank for option groups */
    this.bankGroupsCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null);
    /** control for the MatSelect filter keyword for option groups */
    this.bankGroupsFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
      nonNullable: true
    });
    /** list of bank groups filtered by search keyword for option groups */
    this.filteredBankGroups = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
    /** Subject that emits when the component has been destroyed. */
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    // load the initial bank list
    this.filteredBankGroups.next(this.copyBankGroups(this.bankGroups));
    // listen for search field value changes
    this.bankGroupsFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBankGroups();
    });
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  filterBankGroups() {
    if (!this.bankGroups) {
      return;
    }
    // get the search keyword
    let search = this.bankGroupsFilterCtrl.value;
    const bankGroupsCopy = this.copyBankGroups(this.bankGroups);
    if (!search) {
      this.filteredBankGroups.next(bankGroupsCopy);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBankGroups.next(bankGroupsCopy.filter(bankGroup => {
      const showBankGroup = bankGroup.name.toLowerCase().indexOf(search) > -1;
      if (!showBankGroup) {
        bankGroup.banks = bankGroup.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1);
      }
      return bankGroup.banks.length > 0;
    }));
  }
  copyBankGroups(bankGroups) {
    const bankGroupsCopy = [];
    bankGroups.forEach(bankGroup => {
      bankGroupsCopy.push({
        name: bankGroup.name,
        banks: bankGroup.banks.slice()
      });
    });
    return bankGroupsCopy;
  }
  static #_ = this.ɵfac = function OptionGroupsExampleComponent_Factory(t) {
    return new (t || OptionGroupsExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: OptionGroupsExampleComponent,
    selectors: [["app-option-groups-example"]],
    decls: 12,
    vars: 6,
    consts: [["placeholder", "Bank", 3, "formControl"], ["singleSelect", ""], [3, "formControl"], [3, "label", 4, "ngFor", "ngForOf"], [3, "label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function OptionGroupsExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Single selection with option groups");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p")(3, "mat-form-field")(4, "mat-select", 0, 1)(6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ngx-mat-select-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, OptionGroupsExampleComponent_mat_optgroup_8_Template, 2, 2, "mat-optgroup", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankGroupsCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankGroupsFilterCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, ctx.filteredBankGroups));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Selected Bank: ", ctx.bankGroupsCtrl.value == null ? null : ctx.bankGroupsCtrl.value.name, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchComponent, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_9__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_10__.MatLegacyOption, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_10__.MatLegacyOptgroup, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3712:
/*!************************************************************************************************!*\
  !*** ./src/app/examples/05-server-side-search-example/server-side-search-example.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerSideSearchExampleComponent: () => (/* binding */ ServerSideSearchExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 750);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3323);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1532);
/* harmony import */ var _demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-data */ 9841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);











function ServerSideSearchExampleComponent_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", bank_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bank_r1.name, " ");
  }
}
class ServerSideSearchExampleComponent {
  constructor() {
    /** list of banks */
    this.banks = _demo_data__WEBPACK_IMPORTED_MODULE_0__.BANKS;
    /** control for the selected bank for server side filtering */
    this.bankServerSideCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null);
    /** control for filter for server side. */
    this.bankServerSideFilteringCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
      nonNullable: true
    });
    /** indicate search operation is in progress */
    this.searching = false;
    /** list of banks filtered after simulating server side search */
    this.filteredServerSideBanks = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
    /** Subject that emits when the component has been destroyed. */
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    // listen for search field value changes
    this.bankServerSideFilteringCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(search => !!search), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.searching = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._onDestroy), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(search => {
      if (!this.banks) {
        return [];
      }
      // simulate server fetching and filtering data
      return this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.delay)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._onDestroy)).subscribe(filteredBanks => {
      this.searching = false;
      this.filteredServerSideBanks.next(filteredBanks);
    }, error => {
      // no errors in our simulated example
      this.searching = false;
      // handle error...
    });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  static #_ = this.ɵfac = function ServerSideSearchExampleComponent_Factory(t) {
    return new (t || ServerSideSearchExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ServerSideSearchExampleComponent,
    selectors: [["app-server-side-search-example"]],
    decls: 11,
    vars: 7,
    consts: [["placeholder", "Bank", 3, "formControl"], [3, "formControl", "searching"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function ServerSideSearchExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Server Side Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p")(3, "mat-form-field")(4, "mat-select", 0)(5, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngx-mat-select-search", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ServerSideSearchExampleComponent_mat_option_7_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankServerSideCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankServerSideFilteringCtrl)("searching", ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 5, ctx.filteredServerSideBanks));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Selected Bank: ", ctx.bankServerSideCtrl.value == null ? null : ctx.bankServerSideCtrl.value.name, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchComponent, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_14__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_15__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5201:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/examples/06-multiple-selection-select-all-example/multiple-selection-select-all-example.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultipleSelectionSelectAllExampleComponent: () => (/* binding */ MultipleSelectionSelectAllExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2326);
/* harmony import */ var _demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-data */ 9841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);











const _c0 = ["multiSelect"];
function MultipleSelectionSelectAllExampleComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", bank_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bank_r3.name, " ");
  }
}
function MultipleSelectionSelectAllExampleComponent_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bank_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](bank_r4.name);
  }
}
class MultipleSelectionSelectAllExampleComponent {
  constructor() {
    /** list of banks */
    this.banks = _demo_data__WEBPACK_IMPORTED_MODULE_0__.BANKS;
    /** control for the selected bank for multi-selection */
    this.bankMultiCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([], {
      nonNullable: true
    });
    /** control for the MatSelect filter keyword multi-selection */
    this.bankMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
      nonNullable: true
    });
    /** list of banks filtered by search keyword */
    this.filteredBanksMulti = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
    /** local copy of filtered banks to help set the toggle all checkbox state */
    this.filteredBanksCache = [];
    /** flags to set the toggle all checkbox state */
    this.isIndeterminate = false;
    this.isChecked = false;
    /** Subject that emits when the component has been destroyed. */
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    // set initial selection
    this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);
    // load the initial bank list
    this.filteredBanksMulti.next(this.banks.slice());
    // listen for search field value changes
    this.bankMultiFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBanksMulti();
      this.setToggleAllCheckboxState();
    });
    // listen for multi select field value changes
    this.bankMultiCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.setToggleAllCheckboxState();
    });
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  toggleSelectAll(selectAllValue) {
    this.filteredBanksMulti.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(val => {
      if (selectAllValue) {
        this.bankMultiCtrl.patchValue(val);
      } else {
        this.bankMultiCtrl.patchValue([]);
      }
    });
  }
  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  setInitialValue() {
    this.filteredBanksMulti.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.multiSelect.compareWith = (a, b) => a && b && a.id === b.id;
    });
  }
  filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksCache = this.banks.slice();
      this.filteredBanksMulti.next(this.filteredBanksCache);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksCache = this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1);
    this.filteredBanksMulti.next(this.filteredBanksCache);
  }
  setToggleAllCheckboxState() {
    let filteredLength = 0;
    if (this.bankMultiCtrl && this.bankMultiCtrl.value) {
      this.filteredBanksCache.forEach(el => {
        if (this.bankMultiCtrl.value.indexOf(el) > -1) {
          filteredLength++;
        }
      });
      this.isIndeterminate = filteredLength > 0 && filteredLength < this.filteredBanksCache.length;
      this.isChecked = filteredLength > 0 && filteredLength === this.filteredBanksCache.length;
    }
  }
  static #_ = this.ɵfac = function MultipleSelectionSelectAllExampleComponent_Factory(t) {
    return new (t || MultipleSelectionSelectAllExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MultipleSelectionSelectAllExampleComponent,
    selectors: [["app-multiple-selection-select-all-example"]],
    viewQuery: function MultipleSelectionSelectAllExampleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.multiSelect = _t.first);
      }
    },
    decls: 13,
    vars: 10,
    consts: [["color", "accent"], ["placeholder", "Banks", 3, "formControl", "multiple"], ["multiSelect", ""], [3, "showToggleAllCheckbox", "toggleAllCheckboxIndeterminate", "toggleAllCheckboxChecked", "formControl", "toggleAll"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "value"]],
    template: function MultipleSelectionSelectAllExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Multiple selection with Select All Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p")(3, "mat-form-field", 0)(4, "mat-select", 1, 2)(6, "mat-option")(7, "ngx-mat-select-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleAll", function MultipleSelectionSelectAllExampleComponent_Template_ngx_mat_select_search_toggleAll_7_listener($event) {
          return ctx.toggleSelectAll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MultipleSelectionSelectAllExampleComponent_mat_option_8_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Selected Banks:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, MultipleSelectionSelectAllExampleComponent_ul_12_Template, 3, 1, "ul", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankMultiCtrl)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showToggleAllCheckbox", true)("toggleAllCheckboxIndeterminate", ctx.isIndeterminate)("toggleAllCheckboxChecked", ctx.isChecked)("formControl", ctx.bankMultiFilterCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, ctx.filteredBanksMulti));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bankMultiCtrl == null ? null : ctx.bankMultiCtrl.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchComponent, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_11__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4358:
/*!************************************************************************************************!*\
  !*** ./src/app/examples/07-tooltip-select-all-example/tooltip-select-all-example.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TooltipSelectAllExampleComponent: () => (/* binding */ TooltipSelectAllExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2326);
/* harmony import */ var _demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-data */ 9841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);











const _c0 = ["multiSelect"];
function TooltipSelectAllExampleComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", bank_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bank_r2.name, " ");
  }
}
class TooltipSelectAllExampleComponent {
  constructor() {
    /** list of banks */
    this.banks = _demo_data__WEBPACK_IMPORTED_MODULE_0__.BANKS;
    /** control for the selected bank for multi-selection */
    this.bankMultiCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl([], {
      nonNullable: true
    });
    /** control for the MatSelect filter keyword multi-selection */
    this.bankMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', {
      nonNullable: true
    });
    /** list of banks filtered by search keyword */
    this.filteredBanksMulti = new rxjs__WEBPACK_IMPORTED_MODULE_4__.ReplaySubject(1);
    this.tooltipMessage = 'Select All / Unselect All';
    /** Subject that emits when the component has been destroyed. */
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    // set initial selection
    this.bankMultiCtrl.setValue([this.banks[10], this.banks[11], this.banks[12]]);
    // load the initial bank list
    this.filteredBanksMulti.next(this.banks.slice());
    // listen for search field value changes
    this.bankMultiFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBanksMulti();
    });
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  toggleSelectAll(selectAllValue) {
    this.filteredBanksMulti.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      if (selectAllValue) {
        this.bankMultiCtrl.patchValue([...this.banks]);
      } else {
        this.bankMultiCtrl.patchValue([]);
      }
    });
  }
  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  setInitialValue() {
    this.filteredBanksMulti.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._onDestroy)).subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.multiSelect.compareWith = (a, b) => a && b && a.id === b.id;
    });
  }
  filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1));
  }
  static #_ = this.ɵfac = function TooltipSelectAllExampleComponent_Factory(t) {
    return new (t || TooltipSelectAllExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TooltipSelectAllExampleComponent,
    selectors: [["app-tooltip-select-all-example"]],
    viewQuery: function TooltipSelectAllExampleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.multiSelect = _t.first);
      }
    },
    decls: 10,
    vars: 9,
    consts: [["color", "accent"], ["placeholder", "Banks", 3, "formControl", "multiple"], ["multiSelect", ""], [3, "showToggleAllCheckbox", "formControl", "toggleAllCheckboxTooltipMessage", "toggleAllCheckboxTooltipPosition", "toggleAll"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function TooltipSelectAllExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tooltip on the Select All Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p")(3, "mat-form-field", 0)(4, "mat-select", 1, 2)(6, "mat-option")(7, "ngx-mat-select-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toggleAll", function TooltipSelectAllExampleComponent_Template_ngx_mat_select_search_toggleAll_7_listener($event) {
          return ctx.toggleSelectAll($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TooltipSelectAllExampleComponent_mat_option_8_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.bankMultiCtrl)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showToggleAllCheckbox", true)("formControl", ctx.bankMultiFilterCtrl)("toggleAllCheckboxTooltipMessage", ctx.tooltipMessage)("toggleAllCheckboxTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 7, ctx.filteredBanksMulti));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchComponent, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_10__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_11__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: [".ngx-mat-select-search-toggle-all-tooltip {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhhbXBsZXMvMDctdG9vbHRpcC1zZWxlY3QtYWxsLWV4YW1wbGUvdG9vbHRpcC1zZWxlY3QtYWxsLWV4YW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5uZ3gtbWF0LXNlbGVjdC1zZWFyY2gtdG9nZ2xlLWFsbC10b29sdGlwIHtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 124:
/*!******************************************************************************************!*\
  !*** ./src/app/examples/08-infinite-scroll-example/infinite-scroll-example.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfiniteScrollExampleComponent: () => (/* binding */ InfiniteScrollExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8955);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1060);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3323);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7349);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3204);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);










const _c0 = ["matSelectInfiniteScroll"];
function InfiniteScrollExampleComponent_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", bank_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bank_r2.name, " ");
  }
}
/**
 * Based upon: https://stackblitz.com/edit/mat-select-search-with-infinity-scroll
 */
class InfiniteScrollExampleComponent {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {
    /** control for the MatSelect filter keyword */
    this.searchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
      nonNullable: true
    });
    /** list with all available data, mocks some sort of backend data source */
    this.mockBankList = Array.from({
      length: 1000
    }).map((_, i) => ({
      id: String(i),
      name: `Bank ${i}`
    }));
    /** control for the selected bank id */
    this.bankCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null);
    /** control for the MatSelect filter keyword */
    this.bankFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', {
      nonNullable: true
    });
    /** list of data corresponding to the search input */
    this.filteredData$ = this.bankFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(searchKeyword => {
      if (!searchKeyword) {
        return this.mockBankList;
      }
      return this.mockBankList.filter(bank => bank.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1);
    }));
    /** number of items added per batch */
    this.batchSize = 20;
    this.incrementBatchOffset$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.resetBatchOffset$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    /** minimum offset needed for the batch to ensure the selected option is displayed */
    this.minimumBatchOffset$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.filteredData$, this.bankFilterCtrl.valueChanges]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([filteredData, searchValue]) => {
      if (!this.bankFilterCtrl.value && this.bankCtrl.value) {
        const index = filteredData.findIndex(bank => bank.id === this.bankCtrl.value);
        return index + this.batchSize;
      } else {
        return 0;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(0));
    /** length of the visible data / start of the next batch */
    this.batchOffset$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.incrementBatchOffset$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mapTo)(true)), this.resetBatchOffset$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.mapTo)(false))), this.minimumBatchOffset$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.scan)((batchOffset, [doIncrement, minimumOffset]) => {
      if (doIncrement) {
        return Math.max(batchOffset + this.batchSize, minimumOffset + this.batchSize);
      } else {
        return Math.max(minimumOffset, this.batchSize);
      }
    }, this.batchSize));
    /** list of data, filtered by the search keyword, limited to the length accumulated by infinity scrolling */
    this.filteredBatchedData$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.filteredData$, this.batchOffset$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(([filteredData, batchOffset]) => filteredData.slice(0, batchOffset)));
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.infiniteScrollSelect.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(opened => {
      // after opening, reset the batch offset
      if (opened) {
        this.resetBatchOffset$.next();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  /**
   * Load the next batch
   */
  getNextBatch() {
    this.incrementBatchOffset$.next();
  }
  static #_ = this.ɵfac = function InfiniteScrollExampleComponent_Factory(t) {
    return new (t || InfiniteScrollExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: InfiniteScrollExampleComponent,
    selectors: [["app-infinite-scroll-example"]],
    viewQuery: function InfiniteScrollExampleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infiniteScrollSelect = _t.first);
      }
    },
    decls: 14,
    vars: 7,
    consts: [["href", "https://github.com/HaidarZ/ng-mat-select-infinite-scroll", "target", "_blank"], ["msInfiniteScroll", "", "placeholder", "Select Something", 3, "formControl", "infiniteScroll"], ["matSelectInfiniteScroll", ""], ["placeholderLabel", "search", "noEntriesFoundLabel", "No entry matches", 3, "formControl", "disableScrollToActiveOnOptionsChanged"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
    template: function InfiniteScrollExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Integration with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ng-mat-select-infinite-scroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field")(7, "mat-select", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("infiniteScroll", function InfiniteScrollExampleComponent_Template_mat_select_infiniteScroll_7_listener() {
          return ctx.getNextBatch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " // disableScrollToActiveOnOptionsChanged should be set to true ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ngx-mat-select-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, InfiniteScrollExampleComponent_mat_option_12_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Selected Bank: ", ctx.bankCtrl.value, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.bankCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchCtrl)("disableScrollToActiveOnOptionsChanged", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, ctx.filteredBatchedData$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_0__.MatSelectSearchComponent, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_13__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_14__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 213:
/*!**********************************************************************************************************!*\
  !*** ./src/app/examples/09-custom-no-entries-found-example/custom-no-entries-found-example.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomNoEntriesFoundExampleComponent: () => (/* binding */ CustomNoEntriesFoundExampleComponent)
/* harmony export */ });
/* harmony import */ var _demo_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-data */ 9841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mat-select-search/mat-select-search.component */ 9538);
/* harmony import */ var _mat_select_search_mat_select_no_entries_found_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mat-select-search/mat-select-no-entries-found.directive */ 805);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-button */ 3921);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 7250);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);














const _c0 = ["singleSelect"];
function CustomNoEntriesFoundExampleComponent_ngx_mat_select_search_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngx-mat-select-search", 4)(1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No entries found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r1.bankFilterCtrl)("preventHomeEndKeyPropagation", true);
  }
}
function CustomNoEntriesFoundExampleComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bank_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bank_r3.name, " ");
  }
}
class CustomNoEntriesFoundExampleComponent {
  constructor() {
    /** list of banks */
    this.banks = _demo_data__WEBPACK_IMPORTED_MODULE_0__.BANKS;
    /** control for the selected bank */
    this.bankCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null);
    /** control for the MatSelect filter keyword */
    this.bankFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
      nonNullable: true
    });
    /** list of banks filtered by search keyword */
    this.filteredBanks = new rxjs__WEBPACK_IMPORTED_MODULE_5__.ReplaySubject(1);
    /** Subject that emits when the component has been destroyed. */
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    // set initial selection
    this.bankCtrl.setValue(this.banks[10]);
    // load the initial bank list
    this.filteredBanks.next(this.banks.slice());
    // listen for search field value changes
    this.bankFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBanks();
    });
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  setInitialValue() {
    this.filteredBanks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._onDestroy)).subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.singleSelect.compareWith = (a, b) => a && b && a.id === b.id;
    });
  }
  filterBanks() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1));
  }
  static #_ = this.ɵfac = function CustomNoEntriesFoundExampleComponent_Factory(t) {
    return new (t || CustomNoEntriesFoundExampleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CustomNoEntriesFoundExampleComponent,
    selectors: [["app-custom-no-entries-found-example"]],
    viewQuery: function CustomNoEntriesFoundExampleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.singleSelect = _t.first);
      }
    },
    decls: 12,
    vars: 6,
    consts: [["placeholder", "Bank", 3, "formControl"], ["singleSelect", ""], [3, "formControl", "preventHomeEndKeyPropagation", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "formControl", "preventHomeEndKeyPropagation"], ["ngxMatSelectNoEntriesFound", ""], ["mat-button", "", "color", "primary"], [3, "value"]],
    template: function CustomNoEntriesFoundExampleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Single selection with custom no entries found element");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p")(3, "mat-form-field")(4, "mat-select", 0, 1)(6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CustomNoEntriesFoundExampleComponent_ngx_mat_select_search_7_Template, 7, 2, "ngx-mat-select-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, CustomNoEntriesFoundExampleComponent_mat_option_8_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.bankCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 4, ctx.filteredBanks));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Selected Bank: ", ctx.bankCtrl.value == null ? null : ctx.bankCtrl.value.name, "\n");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _mat_select_search_mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchComponent, _mat_select_search_mat_select_no_entries_found_directive__WEBPACK_IMPORTED_MODULE_2__.MatSelectNoEntriesFoundDirective, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLegacyFormField, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_13__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_14__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9841:
/*!***************************************!*\
  !*** ./src/app/examples/demo-data.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BANKGROUPS: () => (/* binding */ BANKGROUPS),
/* harmony export */   BANKS: () => (/* binding */ BANKS)
/* harmony export */ });
/** list of banks */
const BANKS = [{
  name: 'Bank A (Switzerland)',
  id: 'A'
}, {
  name: 'Bank B (Switzerland)',
  id: 'B'
}, {
  name: 'Bank C (France)',
  id: 'C'
}, {
  name: 'Bank D (France)',
  id: 'D'
}, {
  name: 'Bank E (France)',
  id: 'E'
}, {
  name: 'Bank F (Italy)',
  id: 'F'
}, {
  name: 'Bank G (Italy)',
  id: 'G'
}, {
  name: 'Bank H (Italy)',
  id: 'H'
}, {
  name: 'Bank I (Italy)',
  id: 'I'
}, {
  name: 'Bank J (Italy)',
  id: 'J'
}, {
  name: 'Bank Kolombia (United States of America)',
  id: 'K'
}, {
  name: 'Bank L (Germany)',
  id: 'L'
}, {
  name: 'Bank M (Germany)',
  id: 'M'
}, {
  name: 'Bank N (Germany)',
  id: 'N'
}, {
  name: 'Bank O (Germany)',
  id: 'O'
}, {
  name: 'Bank P (Germany)',
  id: 'P'
}, {
  name: 'Bank Q (Germany)',
  id: 'Q'
}, {
  name: 'Bank R (Germany)',
  id: 'R'
}];
/** list of bank groups */
const BANKGROUPS = [{
  name: 'Switzerland',
  banks: [{
    name: 'Bank A',
    id: 'A'
  }, {
    name: 'Bank B',
    id: 'B'
  }]
}, {
  name: 'France',
  banks: [{
    name: 'Bank C',
    id: 'C'
  }, {
    name: 'Bank D',
    id: 'D'
  }, {
    name: 'Bank E',
    id: 'E'
  }]
}, {
  name: 'Italy',
  banks: [{
    name: 'Bank F',
    id: 'F'
  }, {
    name: 'Bank G',
    id: 'G'
  }, {
    name: 'Bank H',
    id: 'H'
  }, {
    name: 'Bank I',
    id: 'I'
  }, {
    name: 'Bank J',
    id: 'J'
  }]
}, {
  name: 'United States of America',
  banks: [{
    name: 'Bank Kolombia',
    id: 'K'
  }]
}, {
  name: 'Germany',
  banks: [{
    name: 'Bank L',
    id: 'L'
  }, {
    name: 'Bank M',
    id: 'M'
  }, {
    name: 'Bank N',
    id: 'N'
  }, {
    name: 'Bank O',
    id: 'O'
  }, {
    name: 'Bank P',
    id: 'P'
  }, {
    name: 'Bank Q',
    id: 'Q'
  }, {
    name: 'Bank R',
    id: 'R'
  }]
}];

/***/ }),

/***/ 8760:
/*!******************************************************!*\
  !*** ./src/app/mat-select-search/default-options.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_SELECTSEARCH_DEFAULT_OPTIONS: () => (/* binding */ MAT_SELECTSEARCH_DEFAULT_OPTIONS),
/* harmony export */   configurableDefaultOptions: () => (/* binding */ configurableDefaultOptions)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);

/** List of inputs of NgxMatSelectSearchComponent that can be configured with a global default. */
const configurableDefaultOptions = ['ariaLabel', 'clearSearchInput', 'closeIcon', 'closeSvgIcon', 'disableInitialFocus', 'disableScrollToActiveOnOptionsChanged', 'enableClearOnEscapePressed', 'hideClearSearchButton', 'noEntriesFoundLabel', 'placeholderLabel', 'preventHomeEndKeyPropagation', 'searching'];
/**
 * InjectionToken that can be used to specify global options. e.g.
 *
 * ```typescript
 * providers: [
 *   {
 *     provide: MAT_SELECTSEARCH_DEFAULT_OPTIONS,
 *     useValue: <MatSelectSearchOptions>{
 *       closeIcon: 'delete',
 *       noEntriesFoundLabel: 'No options found'
 *     }
 *   }
 * ]
 * ```
 *
 * See the corresponding inputs of `MatSelectSearchComponent` for documentation.
 */
const MAT_SELECTSEARCH_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-selectsearch-default-options');

/***/ }),

/***/ 805:
/*!****************************************************************************!*\
  !*** ./src/app/mat-select-search/mat-select-no-entries-found.directive.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatSelectNoEntriesFoundDirective: () => (/* binding */ MatSelectNoEntriesFoundDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);

/**
 * Directive for providing a custom no entries found element.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <span ngxMatSelectNoEntriesFound>
 *     No entries found <button>Add</button>
 *   </span>
 * </ngx-mat-select-search>
 */
class MatSelectNoEntriesFoundDirective {
  static #_ = this.ɵfac = function MatSelectNoEntriesFoundDirective_Factory(t) {
    return new (t || MatSelectNoEntriesFoundDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatSelectNoEntriesFoundDirective,
    selectors: [["", "ngxMatSelectNoEntriesFound", ""]]
  });
}

/***/ }),

/***/ 2657:
/*!************************************************************************!*\
  !*** ./src/app/mat-select-search/mat-select-search-clear.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatSelectSearchClearDirective: () => (/* binding */ MatSelectSearchClearDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1197);

/**
 * Directive for providing a custom clear-icon.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
 * </ngx-mat-select-search>
 */
class MatSelectSearchClearDirective {
  static #_ = this.ɵfac = function MatSelectSearchClearDirective_Factory(t) {
    return new (t || MatSelectSearchClearDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatSelectSearchClearDirective,
    selectors: [["", "ngxMatSelectSearchClear", ""]]
  });
}

/***/ }),

/***/ 3003:
/*!***********************************************************************!*\
  !*** ./src/app/mat-select-search/mat-select-search-test.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatSelectSearchTestComponent: () => (/* binding */ MatSelectSearchTestComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2069);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _mat_select_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);












const _c0 = ["selectSingle"];
const _c1 = ["selectSingleMatOption"];
const _c2 = ["selectMulti"];
const _c3 = ["selectSearchSingle"];
const _c4 = ["selectSearchSingleMatOption"];
const _c5 = ["selectSearchMulti"];
function MatSelectSearchTestComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", bank_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bank_r10.name, " ");
  }
}
function MatSelectSearchTestComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", bank_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bank_r11.name, " ");
  }
}
function MatSelectSearchTestComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bank_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", bank_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", bank_r12.name, " ");
  }
}
function MatSelectSearchTestComponent_ul_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const bank_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bank_r13.name);
  }
}
class MatSelectSearchTestComponent {
  constructor() {
    // control for the selected bank
    this.bankCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl();
    // control for the selected bank
    this.bankCtrlMatOption = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl();
    // control for the MatLegacySelect filter keyword
    this.bankFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl();
    // control for the MatLegacySelect filter keyword
    this.bankFilterCtrlMatOption = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl();
    /** control for the selected bank for multi-selection */
    this.bankMultiCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl();
    /** control for the MatLegacySelect filter keyword multi-selection */
    this.bankMultiFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl();
    // list of banks
    this.banks = [{
      name: 'Bank A',
      id: 'A'
    }, {
      name: 'Bank B',
      id: 'B'
    }, {
      name: 'Bank C',
      id: 'C'
    }, {
      name: 'Bank DC',
      id: 'DC'
    }];
    this.filteredBanks = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
    this.filteredBanksMatOption = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
    /** list of banks filtered by search keyword for multi-selection */
    this.filteredBanksMulti = new rxjs__WEBPACK_IMPORTED_MODULE_3__.ReplaySubject(1);
    this.initialSingleSelection = null;
    this.initialSingleSelectionMatOption = null;
    this.initialMultiSelection = [];
    // Subject that emits when the component has been destroyed.
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    // set initial selection
    if (this.initialSingleSelection) {
      this.bankCtrl.setValue(this.initialSingleSelection);
    }
    if (this.initialSingleSelectionMatOption) {
      this.bankCtrlMatOption.setValue(this.initialSingleSelectionMatOption);
    }
    if (this.initialMultiSelection) {
      this.bankMultiCtrl.setValue(this.initialMultiSelection);
    }
    // load the initial bank list
    this.filteredBanks.next(this.banks.slice());
    this.filteredBanksMatOption.next(this.banks.slice());
    this.filteredBanksMulti.next(this.banks.slice());
    // listen for search field value changes
    this.bankFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBanks();
    });
    this.bankFilterCtrlMatOption.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBanksMatOption();
    });
    this.bankMultiFilterCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._onDestroy)).subscribe(() => {
      this.filterBanksMulti();
    });
  }
  ngAfterViewInit() {
    this.setInitialValue();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  setInitialValue() {
    this.filteredBanks.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._onDestroy)).subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.matSelect.compareWith = (a, b) => a && b && 'id' in a && 'id' in b && a['id'] === b['id'];
      this.matSelectMatOption.compareWith = (a, b) => a && b && 'id' in a && 'id' in b && a['id'] === b['id'];
      this.matSelectMulti.compareWith = (a, b) => a && b && 'id' in a && 'id' in b && a['id'] === b['id'];
    });
  }
  filterBanks() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1));
  }
  filterBanksMatOption() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrlMatOption.value;
    if (!search) {
      this.filteredBanksMatOption.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMatOption.next(this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1));
  }
  filterBanksMulti() {
    if (!this.banks) {
      return;
    }
    // get the search keyword
    let search = this.bankMultiFilterCtrl.value;
    if (!search) {
      this.filteredBanksMulti.next(this.banks.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanksMulti.next(this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1));
  }
  static #_ = this.ɵfac = function MatSelectSearchTestComponent_Factory(t) {
    return new (t || MatSelectSearchTestComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MatSelectSearchTestComponent,
    selectors: [["mat-select-search-test"]],
    viewQuery: function MatSelectSearchTestComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matSelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matSelectMatOption = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matSelectMulti = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matSelectSearch = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matSelectSearchMatOption = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.matSelectSearchMulti = _t.first);
      }
    },
    decls: 40,
    vars: 19,
    consts: [["placeholder", "Bank", 3, "formControl"], ["selectSingle", ""], [3, "formControl"], ["selectSearchSingle", ""], [3, "value", 4, "ngFor", "ngForOf"], ["selectSingleMatOption", ""], ["selectSearchSingleMatOption", ""], ["placeholder", "Banks", 3, "formControl", "multiple"], ["selectMulti", ""], ["selectSearchMulti", ""], [4, "ngFor", "ngForOf"], [3, "value"]],
    template: function MatSelectSearchTestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Single selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p")(3, "mat-form-field")(4, "mat-select", 0, 1)(6, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ngx-mat-select-search", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MatSelectSearchTestComponent_mat_option_9_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Single selection inside mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p")(16, "mat-form-field")(17, "mat-select", 0, 5)(19, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ngx-mat-select-search", 2, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MatSelectSearchTestComponent_mat_option_22_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Multiple selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p")(29, "mat-form-field")(30, "mat-select", 7, 8)(32, "mat-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "ngx-mat-select-search", 2, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, MatSelectSearchTestComponent_mat_option_35_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Selected Banks:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, MatSelectSearchTestComponent_ul_39_Template, 3, 1, "ul", 10);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.bankCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.bankFilterCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 13, ctx.filteredBanks));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Selected Bank: ", ctx.bankCtrl.value == null ? null : ctx.bankCtrl.value.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.bankCtrlMatOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.bankFilterCtrlMatOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 15, ctx.filteredBanksMatOption));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Selected Bank: ", ctx.bankCtrlMatOption.value == null ? null : ctx.bankCtrlMatOption.value.name, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.bankMultiCtrl)("multiple", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.bankMultiFilterCtrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 17, ctx.filteredBanksMulti));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.bankMultiCtrl == null ? null : ctx.bankMultiCtrl.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _mat_select_search_component__WEBPACK_IMPORTED_MODULE_0__.MatSelectSearchComponent, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLegacyFormField, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_9__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_10__.MatLegacyOption, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    encapsulation: 2
  });
}

/***/ }),

/***/ 9538:
/*!******************************************************************!*\
  !*** ./src/app/mat-select-search/mat-select-search.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatSelectSearchComponent: () => (/* binding */ MatSelectSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 7090);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1541);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 7473);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2023);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3323);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1060);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1532);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 2326);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 750);
/* harmony import */ var _mat_select_search_clear_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat-select-search-clear.directive */ 2657);
/* harmony import */ var _default_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-options */ 8760);
/* harmony import */ var _mat_select_no_entries_found_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat-select-no-entries-found.directive */ 805);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-core */ 5874);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9941);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-button */ 3921);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 9088);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 7250);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 8017);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 9383);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 3971);
/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



// import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';




















const _c0 = ["searchSelectInput"];
const _c1 = ["innerSelectSearch"];
function MatSelectSearchComponent_mat_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MatSelectSearchComponent_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6._emitSelectAllBooleanToParent($event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r1.matFormField == null ? null : ctx_r1.matFormField.color)("checked", ctx_r1.toggleAllCheckboxChecked)("indeterminate", ctx_r1.toggleAllCheckboxIndeterminate)("matTooltip", ctx_r1.toggleAllCheckboxTooltipMessage)("matTooltipPosition", ctx_r1.toggleAllCheckboxTooltipPosition);
  }
}
function MatSelectSearchComponent_mat_spinner_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner", 10);
  }
}
function MatSelectSearchComponent_button_7_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0, 1, ["*ngIf", "clearIcon; else defaultIcon"]);
  }
}
function MatSelectSearchComponent_button_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("svgIcon", (tmp_0_0 = ctx_r10.closeSvgIcon) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", !ctx_r10.closeSvgIcon ? ctx_r10.closeIcon : null, " ");
  }
}
function MatSelectSearchComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatSelectSearchComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r11._reset(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatSelectSearchComponent_button_7_ng_content_1_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatSelectSearchComponent_button_7_ng_template_2_Template, 2, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.clearIcon)("ngIfElse", _r9);
  }
}
function MatSelectSearchComponent_div_10_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0, 2, ["*ngIf", "noEntriesFound; else defaultNoEntriesFound"]);
  }
}
function MatSelectSearchComponent_div_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.noEntriesFoundLabel);
  }
}
function MatSelectSearchComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MatSelectSearchComponent_div_10_ng_content_1_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MatSelectSearchComponent_div_10_ng_template_2_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.noEntriesFound)("ngIfElse", _r14);
  }
}
const _c2 = [[["", 8, "mat-select-search-custom-header-content"]], [["", "ngxMatSelectSearchClear", ""]], [["", "ngxMatSelectNoEntriesFound", ""]]];
const _c3 = function (a0, a1) {
  return {
    "mat-select-search-inner-multiple": a0,
    "mat-select-search-inner-toggle-all": a1
  };
};
const _c4 = [".mat-select-search-custom-header-content", "[ngxMatSelectSearchClear]", "[ngxMatSelectNoEntriesFound]"];
/* tslint:disable:member-ordering component-selector */
/**
 * Component providing an input field for searching MatLegacySelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * @Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <mat-option>
 *           <ngx-mat-select-search [formControl]="bankFilterCtrl"></ngx-mat-select-search>
 *         </mat-option>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatLegacySelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
class MatSelectSearchComponent {
  /** Current search value */
  get value() {
    return this._formControl.value;
  }
  /** Reference to the MatLegacySelect options */
  set _options(_options) {
    this._options$.next(_options);
  }
  get _options() {
    return this._options$.getValue();
  }
  // private hostElement: Element,
  constructor(matSelect, matOption, changeDetectorRef, _viewportRuler, matFormField = null, defaultOptions) {
    this.matSelect = matSelect;
    this.matOption = matOption;
    this.changeDetectorRef = changeDetectorRef;
    this._viewportRuler = _viewportRuler;
    this.matFormField = matFormField;
    /** Label of the search placeholder */
    this.placeholderLabel = 'Suche';
    /** Type of the search input field */
    this.type = 'text';
    /** Font-based icon used for displaying Close-Icon */
    this.closeIcon = 'close';
    /** Label to be shown when no entries are found. Set to null if no message should be shown. */
    this.noEntriesFoundLabel = 'Keine Optionen gefunden';
    /**
      * Whether or not the search field should be cleared after the dropdown menu is closed.
      * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
      */
    this.clearSearchInput = true;
    /** Whether to show the search-in-progress indicator */
    this.searching = false;
    /** Disables initial focusing of the input field */
    this.disableInitialFocus = false;
    /** Enable clear input on escape pressed */
    this.enableClearOnEscapePressed = false;
    /**
     * Prevents home / end key being propagated to mat-select,
     * allowing to move the cursor within the search input instead of navigating the options
     */
    this.preventHomeEndKeyPropagation = false;
    /** Disables scrolling to active options when option list changes. Useful for server-side search */
    this.disableScrollToActiveOnOptionsChanged = false;
    /** Adds 508 screen reader support for search box */
    this.ariaLabel = 'dropdown search';
    /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
    this.showToggleAllCheckbox = false;
    /** select all checkbox checked state */
    this.toggleAllCheckboxChecked = false;
    /** select all checkbox indeterminate state */
    this.toggleAllCheckboxIndeterminate = false;
    /** Display a message in a tooltip on the toggle-all checkbox */
    this.toggleAllCheckboxTooltipMessage = '';
    /** Define the position of the tooltip on the toggle-all checkbox. */
    this.toggleAllCheckboxTooltipPosition = 'below';
    /** Show/Hide the search clear button of the search input */
    this.hideClearSearchButton = false;
    /**
     * Always restore selected options on selectionChange for mode multi (e.g. for lazy loading/infinity scrolling).
     * Defaults to false, so selected options are only restored while filtering is active.
     */
    this.alwaysRestoreSelectedOptionsMulti = false;
    /** Output emitter to send to parent component with the toggle all boolean */
    this.toggleAll = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-empty-function
    this.onTouched = _ => {};
    this._options$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.optionsList$ = this._options$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(_options => _options ? _options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(options => options.toArray()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(_options.toArray())) : (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([])));
    this.optionsLength$ = this.optionsList$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(options => options ? options.length : 0));
    this._formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', {
      nonNullable: true
    });
    /** whether to show the no entries found message */
    this._showNoEntriesFound$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this._formControl.valueChanges, this.optionsLength$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([value, optionsLength]) => {
      const result = !!this.noEntriesFoundLabel && !!value && optionsLength === this.getOptionsLengthOffset();
      return result;
    }));
    /** Subject that emits when the component has been destroyed. */
    this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.applyDefaultOptions(defaultOptions);
  }
  applyDefaultOptions(defaultOptions) {
    if (!defaultOptions) {
      return;
    }
    for (const key of _default_options__WEBPACK_IMPORTED_MODULE_1__.configurableDefaultOptions) {
      // eslint-disable-next-line no-prototype-builtins
      if (defaultOptions.hasOwnProperty(key)) {
        this[key] = defaultOptions[key];
      }
    }
  }
  ngOnInit() {
    // set custom mat-option class if the component was placed inside a mat-option
    if (this.matOption) {
      this.matOption.disabled = true;
      this.matOption._getHostElement().classList.add('contains-mat-select-search');
      this.matOption._getHostElement().setAttribute('aria-hidden', 'true');
    } else {
      console.error('<ngx-mat-select-search> must be placed inside a <mat-option> element');
    }
    // when the select dropdown panel is opened or closed
    this.matSelect.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.delay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._onDestroy)).subscribe(opened => {
      if (opened) {
        this.updateInputWidth();
        // focus the search field when opening
        if (!this.disableInitialFocus) {
          this._focus();
        }
      } else {
        // clear it when closing
        if (this.clearSearchInput) {
          this._reset();
        }
      }
    });
    // set the first item active after the options changed
    this.matSelect.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(_ => {
      this._options = this.matSelect.options;
      // Closure variable for tracking the most recent first option.
      // In order to avoid avoid causing the list to
      // scroll to the top when options are added to the bottom of
      // the list (eg: infinite scroll), we compare only
      // the changes to the first options to determine if we
      // should set the first item as active.
      // This prevents unnecessary scrolling to the top of the list
      // when options are appended, but allows the first item
      // in the list to be set as active by default when there
      // is no active selection
      let previousFirstOption = this._options.toArray()[this.getOptionsLengthOffset()];
      return this._options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(() => {
        // avoid "expression has been changed" error
        setTimeout(() => {
          // Convert the QueryList to an array
          const options = this._options?.toArray() ?? [];
          // The true first item is offset by 1
          const currentFirstOption = options[this.getOptionsLengthOffset()];
          const keyManager = this.matSelect._keyManager;
          if (keyManager && this.matSelect.panelOpen) {
            // set first item active and input width
            // Check to see if the first option in these changes is different from the previous.
            const firstOptionIsChanged = !this.matSelect.compareWith(previousFirstOption, currentFirstOption);
            // CASE: The first option is different now.
            // Indiciates we should set it as active and scroll to the top.
            if (firstOptionIsChanged || !keyManager.activeItem || !options.find(option => this.matSelect.compareWith(option, keyManager.activeItem))) {
              keyManager.setFirstItemActive();
            }
            // wait for panel width changes
            setTimeout(() => {
              this.updateInputWidth();
            });
          }
          // Update our reference
          previousFirstOption = currentFirstOption;
        });
      }));
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._onDestroy)).subscribe();
    // add or remove css class depending on whether to show the no entries found message
    // note: this is hacky
    this._showNoEntriesFound$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._onDestroy)).subscribe(showNoEntriesFound => {
      // set no entries found class on mat option
      if (this.matOption) {
        if (showNoEntriesFound) {
          this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
        } else {
          this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
        }
      }
    });
    // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
    this._viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._onDestroy)).subscribe(() => {
      if (this.matSelect.panelOpen) {
        this.updateInputWidth();
      }
    });
    this.initMultipleHandling();
    this.optionsList$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._onDestroy)).subscribe(() => {
      // update view when available options change
      this.changeDetectorRef.markForCheck();
    });
  }
  _emitSelectAllBooleanToParent(state) {
    this.toggleAll.emit(state);
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  _isToggleAllCheckboxVisible() {
    return this.matSelect?.multiple && this.showToggleAllCheckbox;
  }
  /**
   * Handles the key down event with MatLegacySelect.
   * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
   * @param event
   */
  _handleKeydown(event) {
    // Prevent propagation for all alphanumeric characters in order to avoid selection issues
    if (event.key && event.key.length === 1 || event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.A && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.Z || event.keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ZERO && event.keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.NINE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE || this.preventHomeEndKeyPropagation && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.HOME || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.END)) {
      event.stopPropagation();
    }
    if (this.matSelect?.multiple && event.key && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER) {
      // Regain focus after multiselect, so we can further type
      setTimeout(() => this._focus());
    }
    // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field
    if (this.enableClearOnEscapePressed === true && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ESCAPE && this.value) {
      this._reset(true);
      event.stopPropagation();
    }
  }
  /**
   * Handles the key up event with MatLegacySelect.
   * Allows e.g. the announcing of the currently activeDescendant by screen readers.
   */
  _handleKeyup(event) {
    if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.UP_ARROW || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.DOWN_ARROW) {
      const ariaActiveDescendantId = this.matSelect._getAriaActiveDescendant();
      const optionArray = this._options?.toArray() ?? [];
      const index = optionArray.findIndex(item => item && item['id'] && item['id'] === ariaActiveDescendantId);
      if (index !== -1) {
        this.unselectActiveDescendant();
        this.activeDescendant = optionArray[index]._getHostElement();
        this.activeDescendant.setAttribute('aria-selected', 'true');
        this.searchSelectInput.nativeElement.setAttribute('aria-activedescendant', ariaActiveDescendantId);
      }
    }
  }
  writeValue(value) {
    this._lastExternalInputValue = value;
    this._formControl.setValue(value);
    this.changeDetectorRef.markForCheck();
  }
  onBlur() {
    this.unselectActiveDescendant();
    this.onTouched();
  }
  registerOnChange(fn) {
    this._formControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(value => value !== this._lastExternalInputValue), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(() => this._lastExternalInputValue = undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._onDestroy)).subscribe(fn);
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Focuses the search input field
   */
  _focus() {
    if (!this.searchSelectInput || !this.matSelect.panel) {
      return;
    }
    // save and restore scrollTop of panel, since it will be reset by focus()
    // note: this is hacky
    const panel = this.matSelect.panel.nativeElement;
    const scrollTop = panel.scrollTop;
    // focus
    this.searchSelectInput.nativeElement.focus();
    panel.scrollTop = scrollTop;
  }
  /**
   * Resets the current search value
   * @param focus whether to focus after resetting
   */
  _reset(focus) {
    this._formControl.setValue('');
    if (focus) {
      this._focus();
    }
  }
  /**
   * Initializes handling <mat-select [multiple]="true">
   * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
   */
  initMultipleHandling() {
    if (this.matSelect.ngControl === null) {
      if (this.matSelect?.multiple) {
        // note: the access to MatLegacySelect.ngControl (instead of MatLegacySelect.value / MatLegacySelect.valueChanges)
        // is necessary to properly work in multi-selection mode.
        console.error('the mat-select containing ngx-mat-select-search must have a ngModel or formControl directive when multiple=true');
      }
      return;
    }
    const valueChanges = this.matSelect.ngControl.valueChanges;
    if (valueChanges === null) return;
    // if <mat-select [multiple]="true">
    // store previously selected values and restore them when they are deselected
    // because the option is not available while we are currently filtering
    this.previousSelectedValues = this.matSelect.ngControl.value;
    valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._onDestroy)).subscribe(values => {
      let restoreSelectedValues = false;
      if (this.matSelect?.multiple) {
        if ((this.alwaysRestoreSelectedOptionsMulti || this._formControl.value && this._formControl.value.length) && this.previousSelectedValues && Array.isArray(this.previousSelectedValues)) {
          if (!values || !Array.isArray(values)) {
            values = [];
          }
          const optionValues = this.matSelect.options.map(option => option.value);
          this.previousSelectedValues.forEach(previousValue => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (!values.some(v => this.matSelect.compareWith(v, previousValue)) && !optionValues.some(v => this.matSelect.compareWith(v, previousValue))) {
              // if a value that was selected before is deselected and not found in the options, it was deselected
              // due to the filtering, so we restore it.
              values.push(previousValue);
              restoreSelectedValues = true;
            }
          });
        }
      }
      this.previousSelectedValues = values;
      if (restoreSelectedValues) {
        this.matSelect._onChange(values);
      }
    });
  }
  /**
   *  Set the width of the innerSelectSearch to fit even custom scrollbars
   *  And support all Operation Systems
   */
  updateInputWidth() {
    if (!this.innerSelectSearch || !this.innerSelectSearch.nativeElement) {
      return;
    }
    let element = this.innerSelectSearch.nativeElement;
    let panelElement;
    while ((element = element?.parentElement ?? null) !== null) {
      if (element.classList.contains('mat-select-panel')) {
        panelElement = element;
        break;
      }
    }
    if (panelElement) {
      this.innerSelectSearch.nativeElement.style.width = panelElement.clientWidth + 'px';
    }
  }
  /**
   * Determine the offset to length that can be caused by the optional MatLegacyOption used as a search input.
   */
  getOptionsLengthOffset() {
    if (this.matOption) {
      return 1;
    } else {
      return 0;
    }
  }
  unselectActiveDescendant() {
    this.activeDescendant?.removeAttribute('aria-selected');
    this.searchSelectInput.nativeElement.removeAttribute('aria-activedescendant');
  }
  static #_ = this.ɵfac = function MatSelectSearchComponent_Factory(t) {
    return new (t || MatSelectSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_18__.MatLegacySelect), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_19__.MatLegacyOption, 13), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_20__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLegacyFormField, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_default_options__WEBPACK_IMPORTED_MODULE_1__.MAT_SELECTSEARCH_DEFAULT_OPTIONS, 8));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MatSelectSearchComponent,
    selectors: [["ngx-mat-select-search"]],
    contentQueries: function MatSelectSearchComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _mat_select_search_clear_directive__WEBPACK_IMPORTED_MODULE_0__.MatSelectSearchClearDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _mat_select_no_entries_found_directive__WEBPACK_IMPORTED_MODULE_2__.MatSelectNoEntriesFoundDirective, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.clearIcon = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.noEntriesFound = _t.first);
      }
    },
    viewQuery: function MatSelectSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchSelectInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.innerSelectSearch = _t.first);
      }
    },
    inputs: {
      placeholderLabel: "placeholderLabel",
      type: "type",
      closeIcon: "closeIcon",
      closeSvgIcon: "closeSvgIcon",
      noEntriesFoundLabel: "noEntriesFoundLabel",
      clearSearchInput: "clearSearchInput",
      searching: "searching",
      disableInitialFocus: "disableInitialFocus",
      enableClearOnEscapePressed: "enableClearOnEscapePressed",
      preventHomeEndKeyPropagation: "preventHomeEndKeyPropagation",
      disableScrollToActiveOnOptionsChanged: "disableScrollToActiveOnOptionsChanged",
      ariaLabel: "ariaLabel",
      showToggleAllCheckbox: "showToggleAllCheckbox",
      toggleAllCheckboxChecked: "toggleAllCheckboxChecked",
      toggleAllCheckboxIndeterminate: "toggleAllCheckboxIndeterminate",
      toggleAllCheckboxTooltipMessage: "toggleAllCheckboxTooltipMessage",
      toggleAllCheckboxTooltipPosition: "toggleAllCheckboxTooltipPosition",
      hideClearSearchButton: "hideClearSearchButton",
      alwaysRestoreSelectedOptionsMulti: "alwaysRestoreSelectedOptionsMulti"
    },
    outputs: {
      toggleAll: "toggleAll"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => MatSelectSearchComponent),
      multi: true
    }])],
    ngContentSelectors: _c4,
    decls: 12,
    vars: 14,
    consts: [["matInput", "", 1, "mat-select-search-input", "mat-select-search-hidden"], [1, "mat-select-search-inner", "mat-typography", "mat-datepicker-content", "mat-tab-header", 3, "ngClass"], ["innerSelectSearch", ""], ["class", "mat-select-search-toggle-all-checkbox", "matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 3, "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition", "change", 4, "ngIf"], ["autocomplete", "off", 1, "mat-select-search-input", 3, "type", "formControl", "placeholder", "keydown", "keyup", "blur"], ["searchSelectInput", ""], ["class", "mat-select-search-spinner", "diameter", "16", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Clear", "class", "mat-select-search-clear", 3, "click", 4, "ngIf"], ["class", "mat-select-search-no-entries-found", 4, "ngIf"], ["matTooltipClass", "ngx-mat-select-search-toggle-all-tooltip", 1, "mat-select-search-toggle-all-checkbox", 3, "color", "checked", "indeterminate", "matTooltip", "matTooltipPosition", "change"], ["diameter", "16", 1, "mat-select-search-spinner"], ["mat-icon-button", "", "aria-label", "Clear", 1, "mat-select-search-clear", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultIcon", ""], [3, "svgIcon"], [1, "mat-select-search-no-entries-found"], ["defaultNoEntriesFound", ""]],
    template: function MatSelectSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MatSelectSearchComponent_mat_checkbox_3_Template, 1, 5, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function MatSelectSearchComponent_Template_input_keydown_4_listener($event) {
          return ctx._handleKeydown($event);
        })("keyup", function MatSelectSearchComponent_Template_input_keyup_4_listener($event) {
          return ctx._handleKeyup($event);
        })("blur", function MatSelectSearchComponent_Template_input_blur_4_listener() {
          return ctx.onBlur();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MatSelectSearchComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MatSelectSearchComponent_button_7_Template, 4, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MatSelectSearchComponent_div_10_Template, 4, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](11, _c3, ctx.matSelect.multiple, ctx._isToggleAllCheckboxVisible()));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._isToggleAllCheckboxVisible());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.type)("formControl", ctx._formControl)("placeholder", ctx.placeholderLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideClearSearchButton && ctx.value && !ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 9, ctx._showNoEntriesFound$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlDirective, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_23__.MatLegacyButton, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatLegacyCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatLegacyProgressSpinner, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_27__.MatLegacyTooltip, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
    styles: ["\n\n\n\n\n\n\n.mat-select-search-hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.mat-select-search-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 100;\n  font-size: inherit;\n  \n\n\n\n\n\n  box-shadow: none;\n}\n.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.mat-select-search-input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  border: none;\n  font-family: inherit;\n  font-size: inherit;\n  color: currentColor;\n  outline: none;\n  background: none;\n  padding: 0 44px 0 16px;\n  height: calc(3em - 1px);\n  line-height: calc(3em - 1px);\n}\n[dir=rtl][_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%] {\n  padding-right: 16px;\n  padding-left: 44px;\n}\n\n.mat-select-search-inner-toggle-all[_ngcontent-%COMP%]   .mat-select-search-input[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.mat-select-search-no-entries-found[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.mat-select-search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4px;\n  top: 0;\n}\n[dir=rtl][_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-clear[_ngcontent-%COMP%] {\n  right: auto;\n  left: 4px;\n}\n\n.mat-select-search-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  top: calc(50% - 8px);\n}\n[dir=rtl][_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-spinner[_ngcontent-%COMP%] {\n  right: auto;\n  left: 16px;\n}\n\n  .mat-mdc-option[aria-disabled=true].contains-mat-select-search {\n  \n\n  position: sticky;\n  top: -8px;\n  z-index: 1;\n  opacity: 1;\n  margin-top: -8px;\n  pointer-events: all;\n}\n  .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mat-icon {\n  margin-right: 0;\n  margin-left: 0;\n}\n  .mat-mdc-option[aria-disabled=true].contains-mat-select-search mat-pseudo-checkbox {\n  display: none;\n}\n  .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mdc-list-item__primary-text {\n  opacity: 1;\n}\n\n.mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n[dir=rtl][_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .mat-select-search-toggle-all-checkbox[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWF0LXNlbGVjdC1zZWFyY2gvbWF0LXNlbGVjdC1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0VBQUE7QUFlQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBOzs7O0dBQUE7RUFLQSxnQkFBQTtBQVJGO0FBV0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFUTjs7QUFjQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUFYRjtBQWFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWdCRTtFQUNFLGlCQUFBO0FBYko7O0FBaUJBO0VBQ0UsZ0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxrQkFBQTtFQUNBLFVBOUQwQjtFQStEMUIsTUFBQTtBQWRGO0FBZ0JFO0VBQ0UsV0FBQTtFQUNBLFNBbkV3QjtBQXFENUI7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxXQXhFNEI7RUF5RTVCLG9CQUFBO0FBZkY7QUFpQkU7RUFDRSxXQUFBO0VBQ0EsVUE3RTBCO0FBOEQ5Qjs7QUFtQkE7RUFDRSxzSEFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWhCRjtBQWtCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBaEJKO0FBa0JFO0VBQ0UsYUFBQTtBQWhCSjtBQWtCRTtFQUNFLFVBQUE7QUFoQko7O0FBb0JBO0VBQ0UsaUJBdEd3QztBQXFGMUM7QUFtQkU7RUFDRSxlQUFBO0VBQ0Esa0JBMUdzQztBQXlGMUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDE4IEJpdGhvc3QgR21iSCBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuJGNsZWFyLWJ1dHRvbi13aWR0aDogNDBweDtcclxuJG11bHRpcGxlLWNoZWNrLXdpZHRoOiAzM3B4O1xyXG4kbWF0LW9wdGlvbi1oZWlnaHQ6IDNlbTtcclxuJG1hdC1zZWxlY3Qtc2VhcmNoLWNsZWFyLXg6IDRweDtcclxuJG1hdC1zZWxlY3Qtc2VhcmNoLXNwaW5uZXIteDogMTZweDtcclxuJG1hdC1zZWxlY3Qtc2VhcmNoLXRvZ2dsZS1hbGwtY2hlY2tib3gteDogNXB4O1xyXG4kbWF0LXNlbGVjdC1wYW5lbC1wYWRkaW5nOiA4cHg7XHJcblxyXG4ubWF0LXNlbGVjdC1zZWFyY2gtaGlkZGVuIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXNlYXJjaC1pbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgLypcclxuICAgIGNvbXBlbnNhdGUgZWZmZWN0cyBvZiAubWF0LWRhdGVwaWNrZXItY29udGVudFxyXG4gICAgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9tYXRlcmlhbDIvYmxvYi9tYXN0ZXIvc3JjL2xpYi9kYXRlcGlja2VyL2RhdGVwaWNrZXItY29udGVudC5zY3NzI0wyNylcclxuICAgIFRPRE86IGltcGxlbWVudCBwcm9wZXIgdGhlbWluZyAoaHR0cHM6Ly9naXRodWIuY29tL2JpdGhvc3QtZ21iaC9uZ3gtbWF0LXNlbGVjdC1zZWFyY2gvaXNzdWVzLzM0KVxyXG4gICovXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiAgJi5tYXQtc2VsZWN0LXNlYXJjaC1pbm5lci1tdWx0aXBsZSB7XHJcbiAgICAmLm1hdC1zZWxlY3Qtc2VhcmNoLWlubmVyLXRvZ2dsZS1hbGwge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1zZWxlY3Qtc2VhcmNoLWlucHV0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogMCAkY2xlYXItYnV0dG9uLXdpZHRoICsgJG1hdC1zZWxlY3Qtc2VhcmNoLWNsZWFyLXggMCAxNnB4O1xyXG4gIGhlaWdodDogY2FsYygkbWF0LW9wdGlvbi1oZWlnaHQgLSAxcHgpO1xyXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKCRtYXQtb3B0aW9uLWhlaWdodCAtIDFweCk7XHJcblxyXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkgJiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAkY2xlYXItYnV0dG9uLXdpZHRoICsgJG1hdC1zZWxlY3Qtc2VhcmNoLWNsZWFyLXg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LXNlbGVjdC1zZWFyY2gtaW5uZXItdG9nZ2xlLWFsbCB7XHJcbiAgLm1hdC1zZWxlY3Qtc2VhcmNoLWlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1zZWxlY3Qtc2VhcmNoLW5vLWVudHJpZXMtZm91bmQge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5tYXQtc2VsZWN0LXNlYXJjaC1jbGVhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAkbWF0LXNlbGVjdC1zZWFyY2gtY2xlYXIteDtcclxuICB0b3A6IDA7XHJcblxyXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1cInJ0bFwiXSkgJiB7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGxlZnQ6ICRtYXQtc2VsZWN0LXNlYXJjaC1jbGVhci14O1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1zZWxlY3Qtc2VhcmNoLXNwaW5uZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogJG1hdC1zZWxlY3Qtc2VhcmNoLXNwaW5uZXIteDtcclxuICB0b3A6IGNhbGMoNTAlIC0gOHB4KTtcclxuXHJcbiAgOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSAmIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogJG1hdC1zZWxlY3Qtc2VhcmNoLXNwaW5uZXIteDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LW1kYy1vcHRpb25bYXJpYS1kaXNhYmxlZD10cnVlXS5jb250YWlucy1tYXQtc2VsZWN0LXNlYXJjaCB7XHJcbiAgLyogbGV0IG1vdmUgbWF0LXNlbGVjdC1zZWFyY2ggYXQgdGhlIHRvcCBvZiB0aGUgZHJvcGRvd24uIEFzIG9wdGlvbiBpcyBkaXNhYmxlZCwgdGhlcmUgd2lsbCBiZSBuby1yaXBwbGUgaGVuY2Ugc2FmZS4gKi9cclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogLSRtYXQtc2VsZWN0LXBhbmVsLXBhZGRpbmc7XHJcbiAgei1pbmRleDogMTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi10b3A6IC0kbWF0LXNlbGVjdC1wYW5lbC1wYWRkaW5nO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgbWF0LXBzZXVkby1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWRjLWxpc3QtaXRlbV9fcHJpbWFyeS10ZXh0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LXNlbGVjdC1zZWFyY2gtdG9nZ2xlLWFsbC1jaGVja2JveCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAkbWF0LXNlbGVjdC1zZWFyY2gtdG9nZ2xlLWFsbC1jaGVja2JveC14O1xyXG5cclxuICA6aG9zdC1jb250ZXh0KFtkaXI9XCJydGxcIl0pICYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogJG1hdC1zZWxlY3Qtc2VhcmNoLXRvZ2dsZS1hbGwtY2hlY2tib3gteDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 5050:
/*!*******************************************************************!*\
  !*** ./src/app/mat-select-search/ngx-mat-select-search.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatSelectNoEntriesFoundDirective: () => (/* reexport safe */ _mat_select_no_entries_found_directive__WEBPACK_IMPORTED_MODULE_2__.MatSelectNoEntriesFoundDirective),
/* harmony export */   MatSelectSearchClearDirective: () => (/* reexport safe */ _mat_select_search_clear_directive__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchClearDirective),
/* harmony export */   MatSelectSearchVersion: () => (/* binding */ MatSelectSearchVersion),
/* harmony export */   NgxMatSelectSearchModule: () => (/* binding */ NgxMatSelectSearchModule)
/* harmony export */ });
/* harmony import */ var _mat_select_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mat-select-search.component */ 9538);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 3921);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 9088);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 8017);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 9383);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-select */ 9680);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9650);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7250);
/* harmony import */ var _mat_select_search_clear_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat-select-search-clear.directive */ 2657);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 997);
/* harmony import */ var _mat_select_no_entries_found_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat-select-no-entries-found.directive */ 805);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 3971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1197);













const MatSelectSearchVersion = '6.0.8';


class NgxMatSelectSearchModule {
  static #_ = this.ɵfac = function NgxMatSelectSearchModule_Factory(t) {
    return new (t || NgxMatSelectSearchModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: NgxMatSelectSearchModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatLegacyCheckboxModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatLegacyProgressSpinnerModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatLegacyTooltipModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__.MatLegacySelectModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NgxMatSelectSearchModule, {
    declarations: [_mat_select_search_component__WEBPACK_IMPORTED_MODULE_0__.MatSelectSearchComponent, _mat_select_search_clear_directive__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchClearDirective, _mat_select_no_entries_found_directive__WEBPACK_IMPORTED_MODULE_2__.MatSelectNoEntriesFoundDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatLegacyCheckboxModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatLegacyProgressSpinnerModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatLegacyTooltipModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_11__.MatLegacySelectModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule],
    exports: [_mat_select_search_component__WEBPACK_IMPORTED_MODULE_0__.MatSelectSearchComponent, _mat_select_search_clear_directive__WEBPACK_IMPORTED_MODULE_1__.MatSelectSearchClearDirective, _mat_select_no_entries_found_directive__WEBPACK_IMPORTED_MODULE_2__.MatSelectNoEntriesFoundDirective]
  });
})();

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 3380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1197);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map