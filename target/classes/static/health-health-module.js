(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["health-health-module"],{

/***/ "6IDs":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/modal/health-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: HealthModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthModalComponent", function() { return HealthModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





function HealthModalComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "health.indicator." + ctx_r0.health.key), "\n  ");
} }
function HealthModalComponent_div_13_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const healthDetail_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](healthDetail_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.readableValue(healthDetail_r3.value));
} }
function HealthModalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HealthModalComponent_div_13_tr_23_Template, 8, 2, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 1, ctx_r1.health.value.details));
} }
class HealthModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    readableValue(value) {
        var _a;
        if (((_a = this.health) === null || _a === void 0 ? void 0 : _a.key) === 'diskSpace') {
            // Should display storage space in an human readable unit
            const val = value / 1073741824;
            if (val > 1) {
                return val.toFixed(2) + ' GB';
            }
            else {
                return (value / 1048576).toFixed(2) + ' MB';
            }
        }
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        else {
            return String(value);
        }
    }
    dismiss() {
        this.activeModal.dismiss();
    }
}
HealthModalComponent.ɵfac = function HealthModalComponent_Factory(t) { return new (t || HealthModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
HealthModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthModalComponent, selectors: [["jhi-health-modal"]], decls: 22, vars: 2, consts: [[1, "modal-header"], ["class", "modal-title", "id", "showHealthLabel", 4, "ngIf"], ["aria-label", "Close", "data-dismiss", "modal", "type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "pad"], [4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-secondary", "float-left", 3, "click"], ["id", "showHealthLabel", 1, "modal-title"], ["jhiTranslate", "health.details.properties"], [1, "table-responsive"], ["aria-describedby", "showHealthLabel", 1, "table", "table-striped"], ["scope", "col", "jhiTranslate", "health.details.name", 1, "text-left"], ["scope", "col", "jhiTranslate", "health.details.value", 1, "text-left"], [4, "ngFor", "ngForOf"], [1, "text-left"]], template: function HealthModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HealthModalComponent_h4_2_Template, 3, 3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HealthModalComponent_Template_button_click_4_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HealthModalComponent_div_13_Template, 29, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HealthModalComponent_Template_button_click_18_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.health);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], encapsulation: 2 });


/***/ }),

/***/ "IId5":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.component.ts ***!
  \**************************************************************/
/*! exports provided: HealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthComponent", function() { return HealthComponent; });
/* harmony import */ var _modal_health_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/health-modal.component */ "6IDs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _health_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health.service */ "Tm1O");
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/language/translate.directive */ "YHTv");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








function HealthComponent_tbody_35_tr_2_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthComponent_tbody_35_tr_2_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const componentHealth_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.showHealth({ key: componentHealth_r2.key, value: componentHealth_r2.value }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HealthComponent_tbody_35_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HealthComponent_tbody_35_tr_2_a_14_Template, 4, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const componentHealth_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n            ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "health.indicator." + componentHealth_r2.key), "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("jhiTranslate", "health.status." + componentHealth_r2.value.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.getBadgeClass(componentHealth_r2.value.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n              ", componentHealth_r2.value.status, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", componentHealth_r2.value.details);
} }
function HealthComponent_tbody_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HealthComponent_tbody_35_tr_2_Template, 17, 7, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.health.components));
} }
class HealthComponent {
    constructor(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    ngOnInit() {
        this.refresh();
    }
    getBadgeClass(statusState) {
        if (statusState === 'UP') {
            return 'badge-success';
        }
        else {
            return 'badge-danger';
        }
    }
    refresh() {
        this.healthService.checkHealth().subscribe(health => (this.health = health), (error) => {
            if (error.status === 503) {
                this.health = error.error;
            }
        });
    }
    showHealth(health) {
        const modalRef = this.modalService.open(_modal_health_modal_component__WEBPACK_IMPORTED_MODULE_0__["HealthModalComponent"]);
        modalRef.componentInstance.health = health;
    }
}
HealthComponent.ɵfac = function HealthComponent_Factory(t) { return new (t || HealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_health_service__WEBPACK_IMPORTED_MODULE_3__["HealthService"])); };
HealthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HealthComponent, selectors: [["jhi-health"]], decls: 40, vars: 1, consts: [["id", "health-page-heading", "jhiTranslate", "health.title", "data-cy", "healthPageHeading"], [1, "btn", "btn-primary", "float-right", 3, "click"], ["icon", "sync"], ["jhiTranslate", "health.refresh.button"], [1, "table-responsive"], ["id", "healthCheck", "aria-describedby", "health-page-heading", 1, "table", "table-striped"], ["scope", "col", "jhiTranslate", "health.table.service"], ["scope", "col", "jhiTranslate", "health.table.status", 1, "text-center"], ["scope", "col", "jhiTranslate", "health.details.details", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-center"], [1, "badge", 3, "ngClass", "jhiTranslate"], ["class", "hand", 3, "click", 4, "ngIf"], [1, "hand", 3, "click"], ["icon", "eye"]], template: function HealthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Health Checks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HealthComponent_Template_button_click_7_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Service Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, HealthComponent_tbody_35_Template, 5, 3, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.health);
    } }, directives: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "RKyK":
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.module.ts ***!
  \***********************************************************/
/*! exports provided: HealthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthModule", function() { return HealthModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ "hbEq");
/* harmony import */ var _health_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health.component */ "IId5");
/* harmony import */ var _modal_health_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/health-modal.component */ "6IDs");
/* harmony import */ var _health_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health.route */ "Wq2q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class HealthModule {
}
HealthModule.ɵfac = function HealthModule_Factory(t) { return new (t || HealthModule)(); };
HealthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: HealthModule });
HealthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([_health_route__WEBPACK_IMPORTED_MODULE_4__["healthRoute"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](HealthModule, { declarations: [_health_component__WEBPACK_IMPORTED_MODULE_2__["HealthComponent"], _modal_health_modal_component__WEBPACK_IMPORTED_MODULE_3__["HealthModalComponent"]], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Tm1O":
/*!************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.service.ts ***!
  \************************************************************/
/*! exports provided: HealthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthService", function() { return HealthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ "PxL+");



class HealthService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    checkHealth() {
        return this.http.get(this.applicationConfigService.getEndpointFor('management/health'));
    }
}
HealthService.ɵfac = function HealthService_Factory(t) { return new (t || HealthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationConfigService"])); };
HealthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HealthService, factory: HealthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Wq2q":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.route.ts ***!
  \**********************************************************/
/*! exports provided: healthRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "healthRoute", function() { return healthRoute; });
/* harmony import */ var _health_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health.component */ "IId5");

const healthRoute = {
    path: '',
    component: _health_component__WEBPACK_IMPORTED_MODULE_0__["HealthComponent"],
    data: {
        pageTitle: 'health.title',
    },
};


/***/ })

}]);
//# sourceMappingURL=health-health-module.js.map