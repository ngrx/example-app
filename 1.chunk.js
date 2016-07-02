webpackJsonp([1],{

/***/ 835:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(131);
	__webpack_require__(306);
	var core_1 = __webpack_require__(1);
	var store_1 = __webpack_require__(42);
	var reducers_1 = __webpack_require__(303);
	var actions_1 = __webpack_require__(305);
	var book_search_1 = __webpack_require__(846);
	var book_preview_list_1 = __webpack_require__(841);
	var card_1 = __webpack_require__(839);
	var BookFindPage = (function () {
	    function BookFindPage(store, bookActions) {
	        this.store = store;
	        this.bookActions = bookActions;
	        /**
	         * Selectors can be applied with the `let` operator, which passes the source
	         * observable to the provided function. This allows us an expressive,
	         * composable technique for creating view projections.
	         *
	         * More on `let`: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35#let
	         * More on selectors: https://gist.github.com/btroncone/a6e4347326749f938510#extracting-selectors-for-reuse
	         */
	        this.searchQuery$ = store.let(reducers_1.getSearchQuery()).take(1);
	        this.books$ = store.let(reducers_1.getSearchResults());
	    }
	    BookFindPage.prototype.search = function (query) {
	        /**
	         * All state updates are handled through dispatched actions in 'smart'
	         * components. This provides a clear, reproducible history of state
	         * updates and user interaction through the life of our application.
	         */
	        this.store.dispatch(this.bookActions.search(query));
	    };
	    BookFindPage = __decorate([
	        core_1.Component({
	            selector: 'book-find-page',
	            directives: [
	                book_search_1.BookSearchComponent,
	                book_preview_list_1.BookPreviewListComponent,
	                card_1.MD_CARD_DIRECTIVES
	            ],
	            template: "\n    <md-card>\n      <md-card-title>Find a Book</md-card-title>\n      <md-card-content>\n      <book-search [query]=\"searchQuery$ | async\" (search)=\"search($event)\"></book-search>\n      </md-card-content>\n    </md-card>\n    <book-preview-list [books]=\"books$ | async\"></book-preview-list>\n  ",
	            styles: ["\n    md-card-title,\n    md-card-content {\n      display: flex;\n      justify-content: center;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [store_1.Store, actions_1.BookActions])
	    ], BookFindPage);
	    return BookFindPage;
	}());
	exports.BookFindPage = BookFindPage;


/***/ },

/***/ 839:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/*

	<md-card> is a basic content container component that adds the styles of a material design card.

	While you can use this component alone,
	it also provides a number of preset styles for common card sections, including:
	 - md-card-title
	 - md-card-subtitle
	 - md-card-content
	 - md-card-actions
	 - md-card-footer

	 You can see some examples of cards here:
	 http://embed.plnkr.co/s5O4YcyvbLhIApSrIhtj/

	 TODO(kara): update link to demo site when it exists

	*/
	var MdCard = (function () {
	    function MdCard() {
	    }
	    MdCard = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-card',
	            template: "<div class=\"md-card\"> <ng-content></ng-content> </div> ",
	            styles: ["/** * A collection of mixins and CSS classes that can be used to apply elevation to a material * element. * See: https://www.google.com/design/spec/what-is-material/elevation-shadows.html * Examples: * * * .md-foo { *   @include $md-elevation(2); * *   &:active { *     @include $md-elevation(8); *   } * } * * <div id=\"external-card\" class=\"md-elevation-z2\"><p>Some content</p></div> * * For an explanation of the design behind how elevation is implemented, see the design doc at * https://goo.gl/Kq0k9Z. */ /** * The css property used for elevation. In most cases this should not be changed. It is exposed * as a variable for abstraction / easy use when needing to reference the property directly, for * example in a will-change rule. */ /** The default duration value for elevation transitions. */ /** The default easing value for elevation transitions. */ /** * Applies the correct css rules to an element to give it the elevation specified by $zValue. * The $zValue must be between 0 and 24. */ /** * Returns a string that can be used as the value for a transition property for elevation. * Calling this function directly is useful in situations where a component needs to transition * more than one property. * * .foo { *   transition: md-elevation-transition-property-value(), opacity 100ms ease; *   will-change: $md-elevation-property, opacity; * } */ /** * Applies the correct css rules needed to have an element transition between elevations. * This mixin should be applied to elements whose elevation values will change depending on their * context (e.g. when active or disabled). */ md-card { box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); -webkit-transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); will-change: box-shadow; display: block; position: relative; padding: 24px; border-radius: 2px; font-family: Roboto, \"Helvetica Neue\", sans-serif; background: white; color: black; } md-card:hover { box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); } .md-card-flat { box-shadow: none; } md-card-title, md-card-subtitle, md-card-content, md-card-actions { display: block; margin-bottom: 16px; } md-card-title { font-size: 24px; font-weight: 400; } md-card-subtitle { font-size: 14px; color: rgba(0, 0, 0, 0.54); } md-card-content { font-size: 14px; } md-card-actions { margin-left: -16px; margin-right: -16px; padding: 8px 0; } md-card-actions[align='end'] { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -ms-flex-pack: end; justify-content: flex-end; } [md-card-image] { width: calc(100% + 48px); margin: 0 -24px 16px -24px; } [md-card-xl-image] { width: 240px; height: 240px; margin: -8px; } md-card-footer { position: absolute; bottom: 0; } md-card-actions [md-button], md-card-actions [md-raised-button] { margin: 0 4px; } /* HEADER STYLES */ md-card-header { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -ms-flex-direction: row; flex-direction: row; height: 40px; margin: -8px 0 16px 0; } .md-card-header-text { height: 40px; margin: 0 8px; } [md-card-avatar] { height: 40px; width: 40px; border-radius: 50%; } md-card-header md-card-title { font-size: 14px; } /* TITLE-GROUP STYLES */ [md-card-sm-image], [md-card-md-image], [md-card-lg-image] { margin: -8px 0; } md-card-title-group { display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -ms-flex-pack: justify; justify-content: space-between; margin: 0 -8px; } [md-card-sm-image] { width: 80px; height: 80px; } [md-card-md-image] { width: 112px; height: 112px; } [md-card-lg-image] { width: 152px; height: 152px; } /* MEDIA QUERIES */ @media (max-width: 600px) { md-card { padding: 24px 16px; } [md-card-image] { width: calc(100% + 32px); margin: 16px -16px; } md-card-title-group { margin: 0; } [md-card-xl-image] { margin-left: 0; margin-right: 0; } md-card-header { margin: -8px 0 0 0; } } /* FIRST/LAST CHILD ADJUSTMENTS */ .md-card > :first-child, md-card-content > :first-child { margin-top: 0; } .md-card > :last-child, md-card-content > :last-child { margin-bottom: 0; } [md-card-image]:first-child { margin-top: -24px; } .md-card > md-card-actions:last-child { margin-bottom: -16px; padding-bottom: 0; } md-card-actions [md-button]:first-child, md-card-actions [md-raised-button]:first-child { margin-left: 0; margin-right: 0; } md-card-title:not(:first-child), md-card-subtitle:not(:first-child) { margin-top: -4px; } md-card-header md-card-subtitle:not(:first-child) { margin-top: -8px; } .md-card > [md-card-xl-image]:first-child { margin-top: -8px; } .md-card > [md-card-xl-image]:last-child { margin-bottom: -8px; } "],
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCard);
	    return MdCard;
	}());
	exports.MdCard = MdCard;
	/*  The following components don't have any behavior.
	 They simply use content projection to wrap user content
	 for flex layout purposes in <md-card> (and thus allow a cleaner, boilerplate-free API).


	<md-card-header> is a component intended to be used within the <md-card> component.
	It adds styles for a preset header section (i.e. a title, subtitle, and avatar layout).

	You can see an example of a card with a header here:
	http://embed.plnkr.co/tvJl19z3gZTQd6WmwkIa/

	TODO(kara): update link to demo site when it exists
	*/
	var MdCardHeader = (function () {
	    function MdCardHeader() {
	    }
	    MdCardHeader = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-card-header',
	            template: "<ng-content select=\"[md-card-avatar]\"></ng-content> <div class=\"md-card-header-text\"> <ng-content select=\"md-card-title, md-card-subtitle\"></ng-content> </div> <ng-content></ng-content> ",
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardHeader);
	    return MdCardHeader;
	}());
	exports.MdCardHeader = MdCardHeader;
	/*

	<md-card-title-group> is a component intended to be used within the <md-card> component.
	It adds styles for a preset layout that groups an image with a title section.

	You can see an example of a card with a title-group section here:
	http://embed.plnkr.co/EDfgCF9eKcXjini1WODm/

	TODO(kara): update link to demo site when it exists
	*/
	var MdCardTitleGroup = (function () {
	    function MdCardTitleGroup() {
	    }
	    MdCardTitleGroup = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-card-title-group',
	            template: "<div> <ng-content select=\"md-card-title, md-card-subtitle\"></ng-content> </div> <ng-content select=\"img\"></ng-content> <ng-content></ng-content> ",
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdCardTitleGroup);
	    return MdCardTitleGroup;
	}());
	exports.MdCardTitleGroup = MdCardTitleGroup;
	exports.MD_CARD_DIRECTIVES = [MdCard, MdCardHeader, MdCardTitleGroup];
	//# sourceMappingURL=card.js.map

/***/ },

/***/ 840:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var AddCommasPipe = (function () {
	    function AddCommasPipe() {
	    }
	    AddCommasPipe.prototype.transform = function (authors) {
	        if (!authors)
	            return '';
	        switch (authors.length) {
	            case 1:
	                return authors[0];
	            case 2:
	                return authors.join(' and ');
	            default:
	                var last = authors[authors.length - 1];
	                var remaining = authors.slice(0, -1);
	                return remaining.join(', ') + ", and " + last;
	        }
	    };
	    AddCommasPipe = __decorate([
	        core_1.Pipe({
	            name: 'addCommas'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AddCommasPipe);
	    return AddCommasPipe;
	}());
	exports.AddCommasPipe = AddCommasPipe;


/***/ },

/***/ 841:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var book_preview_1 = __webpack_require__(842);
	var BookPreviewListComponent = (function () {
	    function BookPreviewListComponent() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], BookPreviewListComponent.prototype, "books", void 0);
	    BookPreviewListComponent = __decorate([
	        core_1.Component({
	            selector: 'book-preview-list',
	            directives: [book_preview_1.BookPreviewComponent],
	            template: "\n    <book-preview *ngFor=\"let book of books\" [book]=\"book\"></book-preview>\n  ",
	            styles: ["\n    :host {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BookPreviewListComponent);
	    return BookPreviewListComponent;
	}());
	exports.BookPreviewListComponent = BookPreviewListComponent;


/***/ },

/***/ 842:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var add_commas_1 = __webpack_require__(840);
	var ellipsis_1 = __webpack_require__(843);
	var card_1 = __webpack_require__(839);
	var list_1 = __webpack_require__(466);
	var BookPreviewComponent = (function () {
	    function BookPreviewComponent() {
	    }
	    Object.defineProperty(BookPreviewComponent.prototype, "id", {
	        get: function () {
	            return this.book.id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookPreviewComponent.prototype, "title", {
	        get: function () {
	            return this.book.volumeInfo.title;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookPreviewComponent.prototype, "subtitle", {
	        get: function () {
	            return this.book.volumeInfo.subtitle;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookPreviewComponent.prototype, "description", {
	        get: function () {
	            return this.book.volumeInfo.description;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookPreviewComponent.prototype, "authors", {
	        get: function () {
	            return this.book.volumeInfo.authors;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BookPreviewComponent.prototype, "thumbnail", {
	        get: function () {
	            if (this.book.volumeInfo.imageLinks) {
	                return this.book.volumeInfo.imageLinks.smallThumbnail;
	            }
	            return false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], BookPreviewComponent.prototype, "book", void 0);
	    BookPreviewComponent = __decorate([
	        core_1.Component({
	            selector: 'book-preview',
	            pipes: [add_commas_1.AddCommasPipe, ellipsis_1.EllipsisPipe],
	            directives: [
	                card_1.MD_CARD_DIRECTIVES,
	                list_1.MD_LIST_DIRECTIVES
	            ],
	            template: "\n    <a [linkTo]=\" '/book/' + id\">\n      <md-card>\n        <md-card-title-group>\n          <md-card-title>{{ title }}</md-card-title>\n          <md-card-subtitle *ngIf=\"subtitle\">{{ subtitle }}</md-card-subtitle>\n          <img md-card-sm-image *ngIf=\"thumbnail\" [src]=\"thumbnail\"/>\n        </md-card-title-group>\n        <md-card-content>\n          <p *ngIf=\"description\">{{ description | ellipsis }}</p>\n        </md-card-content>\n        <md-card-footer>\n          <h5 md-subheader>Written By:</h5>\n          <span>\n            {{ authors | addCommas }}\n          </span>\n        </md-card-footer>\n      </md-card>\n    </a>\n  ",
	            styles: ["\n    md-card {\n      width: 400px;\n      height: 300px;\n      margin: 15px;\n    }\n    md-card-title {\n      margin-right: 10px;\n    }\n    a {\n      color: inherit;\n      text-decoration: none;\n    }\n    img {\n      width: 60px;\n      min-width: 60px;\n      margin-left: 5px;\n    }\n    md-card-content {\n      margin-top: 15px;\n    }\n    span {\n      display: inline-block;\n      font-size: 13px;\n    }\n    md-card-footer {\n      padding-bottom: 25px;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BookPreviewComponent);
	    return BookPreviewComponent;
	}());
	exports.BookPreviewComponent = BookPreviewComponent;


/***/ },

/***/ 843:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var EllipsisPipe = (function () {
	    function EllipsisPipe() {
	    }
	    EllipsisPipe.prototype.transform = function (str) {
	        var withoutHtml = str.replace(/(<([^>]+)>)/ig);
	        if (str.length >= 250)
	            return withoutHtml.slice(0, 250) + '...';
	        return withoutHtml;
	    };
	    EllipsisPipe = __decorate([
	        core_1.Pipe({
	            name: 'ellipsis'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EllipsisPipe);
	    return EllipsisPipe;
	}());
	exports.EllipsisPipe = EllipsisPipe;


/***/ },

/***/ 844:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var forms_1 = __webpack_require__(468);
	var common_1 = __webpack_require__(34);
	var field_value_1 = __webpack_require__(469);
	var error_1 = __webpack_require__(187);
	var Observable_1 = __webpack_require__(3);
	var noop = function () { };
	exports.MD_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(forms_1.NG_VALUE_ACCESSOR, {
	    useExisting: core_1.forwardRef(function () { return MdInput; }),
	    multi: true
	});
	// Invalid input type. Using one of these will throw an MdInputUnsupportedTypeError.
	var MD_INPUT_INVALID_INPUT_TYPE = [
	    'file',
	    'radio',
	    'checkbox',
	];
	var nextUniqueId = 0;
	var MdInputPlaceholderConflictError = (function (_super) {
	    __extends(MdInputPlaceholderConflictError, _super);
	    function MdInputPlaceholderConflictError() {
	        _super.call(this, 'Placeholder attribute and child element were both specified.');
	    }
	    return MdInputPlaceholderConflictError;
	}(error_1.MdError));
	exports.MdInputPlaceholderConflictError = MdInputPlaceholderConflictError;
	var MdInputUnsupportedTypeError = (function (_super) {
	    __extends(MdInputUnsupportedTypeError, _super);
	    function MdInputUnsupportedTypeError(type) {
	        _super.call(this, "Input type \"" + type + "\" isn't supported by md-input.");
	    }
	    return MdInputUnsupportedTypeError;
	}(error_1.MdError));
	exports.MdInputUnsupportedTypeError = MdInputUnsupportedTypeError;
	var MdInputDuplicatedHintError = (function (_super) {
	    __extends(MdInputDuplicatedHintError, _super);
	    function MdInputDuplicatedHintError(align) {
	        _super.call(this, "A hint was already declared for 'align=\"" + align + "\"'.");
	    }
	    return MdInputDuplicatedHintError;
	}(error_1.MdError));
	exports.MdInputDuplicatedHintError = MdInputDuplicatedHintError;
	/**
	 * The placeholder directive. The content can declare this to implement more
	 * complex placeholders.
	 */
	var MdPlaceholder = (function () {
	    function MdPlaceholder() {
	    }
	    MdPlaceholder = __decorate([
	        core_1.Directive({
	            selector: 'md-placeholder'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdPlaceholder);
	    return MdPlaceholder;
	}());
	exports.MdPlaceholder = MdPlaceholder;
	/** The hint directive, used to tag content as hint labels (going under the input). */
	var MdHint = (function () {
	    function MdHint() {
	        // Whether to align the hint label at the start or end of the line.
	        this.align = 'start';
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MdHint.prototype, "align", void 0);
	    MdHint = __decorate([
	        core_1.Directive({
	            selector: 'md-hint',
	            host: {
	                '[class.md-right]': 'align == "end"',
	                '[class.md-hint]': 'true'
	            }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdHint);
	    return MdHint;
	}());
	exports.MdHint = MdHint;
	/**
	 * Component that represents a text input. It encapsulates the <input> HTMLElement and
	 * improve on its behaviour, along with styling it according to the Material Design.
	 */
	var MdInput = (function () {
	    function MdInput() {
	        this._focused = false;
	        this._value = '';
	        /** Callback registered via registerOnTouched (ControlValueAccessor) */
	        this._onTouchedCallback = noop;
	        /** Callback registered via registerOnChange (ControlValueAccessor) */
	        this._onChangeCallback = noop;
	        /**
	         * Bindings.
	         */
	        this.align = 'start';
	        this.dividerColor = 'primary';
	        this.floatingPlaceholder = true;
	        this.hintLabel = '';
	        this.autoFocus = false;
	        this.disabled = false;
	        this.id = "md-input-" + nextUniqueId++;
	        this.list = null;
	        this.max = null;
	        this.maxLength = null;
	        this.min = null;
	        this.minLength = null;
	        this.placeholder = null;
	        this.readOnly = false;
	        this.required = false;
	        this.spellCheck = false;
	        this.step = null;
	        this.tabIndex = null;
	        this.type = 'text';
	        this.name = null;
	        this._blurEmitter = new core_1.EventEmitter();
	        this._focusEmitter = new core_1.EventEmitter();
	    }
	    Object.defineProperty(MdInput.prototype, "focused", {
	        /** Readonly properties. */
	        get: function () { return this._focused; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdInput.prototype, "empty", {
	        get: function () { return this._value == null || this._value === ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdInput.prototype, "characterCount", {
	        get: function () {
	            return this.empty ? 0 : ('' + this._value).length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdInput.prototype, "inputId", {
	        get: function () { return this.id + "-input"; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdInput.prototype, "onBlur", {
	        get: function () {
	            return this._blurEmitter.asObservable();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdInput.prototype, "onFocus", {
	        get: function () {
	            return this._focusEmitter.asObservable();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdInput.prototype, "value", {
	        get: function () { return this._value; },
	        set: function (v) {
	            v = this._convertValueForInputType(v);
	            if (v !== this._value) {
	                this._value = v;
	                this._onChangeCallback(v);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    Object.defineProperty(MdInput.prototype, "_align", {
	        // This is to remove the `align` property of the `md-input` itself. Otherwise HTML5
	        // might place it as RTL when we don't want to. We still want to use `align` as an
	        // Input though, so we use HostBinding.
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    /** Set focus on input */
	    MdInput.prototype.focus = function () {
	        this._inputElement.nativeElement.focus();
	    };
	    /** @internal */
	    MdInput.prototype.handleFocus = function (event) {
	        this._focused = true;
	        this._focusEmitter.emit(event);
	    };
	    /** @internal */
	    MdInput.prototype.handleBlur = function (event) {
	        this._focused = false;
	        this._onTouchedCallback();
	        this._blurEmitter.emit(event);
	    };
	    /** @internal */
	    MdInput.prototype.handleChange = function (event) {
	        this.value = event.target.value;
	        this._onTouchedCallback();
	    };
	    /** @internal */
	    MdInput.prototype.hasPlaceholder = function () {
	        return !!this.placeholder || this._placeholderChild != null;
	    };
	    /**
	     * Implemented as part of ControlValueAccessor.
	     * TODO: internal
	     */
	    MdInput.prototype.writeValue = function (value) {
	        this._value = value;
	    };
	    /**
	     * Implemented as part of ControlValueAccessor.
	     * TODO: internal
	     */
	    MdInput.prototype.registerOnChange = function (fn) {
	        this._onChangeCallback = fn;
	    };
	    /**
	     * Implemented as part of ControlValueAccessor.
	     * TODO: internal
	     */
	    MdInput.prototype.registerOnTouched = function (fn) {
	        this._onTouchedCallback = fn;
	    };
	    /** TODO: internal */
	    MdInput.prototype.ngAfterContentInit = function () {
	        var _this = this;
	        this._validateConstraints();
	        // Trigger validation when the hint children change.
	        this._hintChildren.changes.subscribe(function () {
	            _this._validateConstraints();
	        });
	    };
	    /** TODO: internal */
	    MdInput.prototype.ngOnChanges = function (changes) {
	        this._validateConstraints();
	    };
	    /**
	     * Convert the value passed in to a value that is expected from the type of the md-input.
	     * This is normally performed by the *_VALUE_ACCESSOR in forms, but since the type is bound
	     * on our internal input it won't work locally.
	     * @private
	     */
	    MdInput.prototype._convertValueForInputType = function (v) {
	        switch (this.type) {
	            case 'number': return parseFloat(v);
	            default: return v;
	        }
	    };
	    /**
	     * Ensure that all constraints defined by the API are validated, or throw errors otherwise.
	     * Constraints for now:
	     *   - placeholder attribute and <md-placeholder> are mutually exclusive.
	     *   - type attribute is not one of the forbidden types (see constant at the top).
	     *   - Maximum one of each `<md-hint>` alignment specified, with the attribute being
	     *     considered as align="start".
	     * @private
	     */
	    MdInput.prototype._validateConstraints = function () {
	        var _this = this;
	        if (this.placeholder != '' && this.placeholder != null && this._placeholderChild != null) {
	            throw new MdInputPlaceholderConflictError();
	        }
	        if (MD_INPUT_INVALID_INPUT_TYPE.indexOf(this.type) != -1) {
	            throw new MdInputUnsupportedTypeError(this.type);
	        }
	        if (this._hintChildren) {
	            // Validate the hint labels.
	            var startHint_1 = null;
	            var endHint_1 = null;
	            this._hintChildren.forEach(function (hint) {
	                if (hint.align == 'start') {
	                    if (startHint_1 || _this.hintLabel) {
	                        throw new MdInputDuplicatedHintError('start');
	                    }
	                    startHint_1 = hint;
	                }
	                else if (hint.align == 'end') {
	                    if (endHint_1) {
	                        throw new MdInputDuplicatedHintError('end');
	                    }
	                    endHint_1 = hint;
	                }
	            });
	        }
	    };
	    __decorate([
	        core_1.Input('aria-label'), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "ariaLabel", void 0);
	    __decorate([
	        core_1.Input('aria-labelledby'), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "ariaLabelledBy", void 0);
	    __decorate([
	        core_1.Input('aria-disabled'),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "ariaDisabled", void 0);
	    __decorate([
	        core_1.Input('aria-required'),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "ariaRequired", void 0);
	    __decorate([
	        core_1.Input('aria-invalid'),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "ariaInvalid", void 0);
	    __decorate([
	        core_1.ContentChild(MdPlaceholder), 
	        __metadata('design:type', MdPlaceholder)
	    ], MdInput.prototype, "_placeholderChild", void 0);
	    __decorate([
	        core_1.ContentChildren(MdHint), 
	        __metadata('design:type', core_1.QueryList)
	    ], MdInput.prototype, "_hintChildren", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MdInput.prototype, "align", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MdInput.prototype, "dividerColor", void 0);
	    __decorate([
	        core_1.Input(),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "floatingPlaceholder", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "hintLabel", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "autoComplete", void 0);
	    __decorate([
	        core_1.Input(),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "autoFocus", void 0);
	    __decorate([
	        core_1.Input(),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "id", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "list", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "max", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MdInput.prototype, "maxLength", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "min", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MdInput.prototype, "minLength", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "placeholder", void 0);
	    __decorate([
	        core_1.Input(),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "readOnly", void 0);
	    __decorate([
	        core_1.Input(),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "required", void 0);
	    __decorate([
	        core_1.Input(),
	        field_value_1.BooleanFieldValue(), 
	        __metadata('design:type', Boolean)
	    ], MdInput.prototype, "spellCheck", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MdInput.prototype, "step", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MdInput.prototype, "tabIndex", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "type", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdInput.prototype, "name", void 0);
	    __decorate([
	        core_1.Output('blur'), 
	        __metadata('design:type', Observable_1.Observable)
	    ], MdInput.prototype, "onBlur", null);
	    __decorate([
	        core_1.Output('focus'), 
	        __metadata('design:type', Observable_1.Observable)
	    ], MdInput.prototype, "onFocus", null);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MdInput.prototype, "value", null);
	    __decorate([
	        core_1.HostBinding('attr.align'), 
	        __metadata('design:type', Object)
	    ], MdInput.prototype, "_align", null);
	    __decorate([
	        core_1.ViewChild('input'), 
	        __metadata('design:type', core_1.ElementRef)
	    ], MdInput.prototype, "_inputElement", void 0);
	    MdInput = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-input',
	            template: "<div class=\"md-input-wrapper\"> <div class=\"md-input-table\"> <div class=\"md-input-prefix\"><ng-content select=\"[md-prefix]\"></ng-content></div> <div class=\"md-input-infix\"> <input #input aria-target class=\"md-input-element\" [class.md-end]=\"align == 'end'\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledBy\" [attr.aria-disabled]=\"ariaDisabled\" [attr.aria-required]=\"ariaRequired\" [attr.aria-invalid]=\"ariaInvalid\" [attr.autocomplete]=\"autoComplete\" [autofocus]=\"autoFocus\" [disabled]=\"disabled\" [id]=\"inputId\" [attr.list]=\"list\" [attr.max]=\"max\" [attr.maxlength]=\"maxLength\" [attr.min]=\"min\" [attr.minlength]=\"minLength\" [readonly]=\"readOnly\" [required]=\"required\" [spellcheck]=\"spellCheck\" [attr.step]=\"step\" [attr.tabindex]=\"tabIndex\" [type]=\"type\" [attr.name]=\"name\" (focus)=\"handleFocus($event)\" (blur)=\"handleBlur($event)\" [(ngModel)]=\"value\" (change)=\"handleChange($event)\"> <label class=\"md-input-placeholder\" [attr.for]=\"inputId\" [class.md-empty]=\"empty\" [class.md-focused]=\"focused\" [class.md-float]=\"floatingPlaceholder\" [class.md-accent]=\"dividerColor == 'accent'\" [class.md-warn]=\"dividerColor == 'warn'\" *ngIf=\"hasPlaceholder()\"> <ng-content select=\"md-placeholder\"></ng-content> {{placeholder}} <span class=\"md-placeholder-required\" *ngIf=\"required\">*</span> </label> </div> <div class=\"md-input-suffix\"><ng-content select=\"[md-suffix]\"></ng-content></div> </div> <div class=\"md-input-underline\" [class.md-disabled]=\"disabled\"> <span class=\"md-input-ripple\" [class.md-focused]=\"focused\" [class.md-accent]=\"dividerColor == 'accent'\" [class.md-warn]=\"dividerColor == 'warn'\"></span> </div> <div *ngIf=\"hintLabel != ''\" class=\"md-hint\">{{hintLabel}}</div> <ng-content select=\"md-hint\"></ng-content> </div> ",
	            styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ /** * This mixin hides an element visually. * That means it's still accessible for screen-readers but not visible in view. */ /** * Forces an element to grow to fit floated contents; used as as an alternative to * `overflow: hidden;` because it doesn't cut off contents. */ /** * A mixin, which generates temporary ink ripple on a given component. * When $bindToParent is set to true, it will check for the focused class on the same selector as you included * that mixin. * It is also possible to specify the color palette of the temporary ripple. By default it uses the * accent palette for its background. */ /** * Undo the red box-shadow glow added by Firefox on invalid inputs. * See https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-invalid */ :-moz-ui-invalid { box-shadow: none; } /** * Applies a floating placeholder above the input itself. */ :host { display: inline-block; position: relative; font-family: Roboto, \"Helvetica Neue\", sans-serif; overflow: hidden; text-align: left; } :host .md-input-wrapper { margin: 16px 0; } :host .md-input-table { display: inline-table; -ms-flex-flow: column; flex-flow: column; vertical-align: bottom; width: 100%; } :host .md-input-table > * { display: table-cell; } :host .md-input-element { font: inherit; background: transparent; border: none; outline: none; padding: 0; width: 100%; } :host .md-input-element.md-end { text-align: right; } :host .md-input-infix { position: relative; } :host .md-input-placeholder { position: absolute; left: 0; top: 0; font-size: 100%; pointer-events: none; color: rgba(0, 0, 0, 0.38); z-index: 1; width: 100%; display: none; white-space: nowrap; text-overflow: ellipsis; overflow-x: hidden; -webkit-transform: translateY(0); transform: translateY(0); -webkit-transform-origin: bottom left; transform-origin: bottom left; -webkit-transition: scale 400ms cubic-bezier(0.25, 0.8, 0.25, 1), color 400ms cubic-bezier(0.25, 0.8, 0.25, 1), width 400ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: scale 400ms cubic-bezier(0.25, 0.8, 0.25, 1), color 400ms cubic-bezier(0.25, 0.8, 0.25, 1), width 400ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1), scale 400ms cubic-bezier(0.25, 0.8, 0.25, 1), color 400ms cubic-bezier(0.25, 0.8, 0.25, 1), width 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1), scale 400ms cubic-bezier(0.25, 0.8, 0.25, 1), color 400ms cubic-bezier(0.25, 0.8, 0.25, 1), width 400ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); } :host .md-input-placeholder.md-empty { display: block; cursor: text; } :host .md-input-placeholder.md-float:not(.md-empty), :host .md-input-placeholder.md-float.md-focused { display: block; padding-bottom: 5px; -webkit-transform: translateY(-100%) scale(0.75); transform: translateY(-100%) scale(0.75); width: 133.33333%; } :host .md-input-placeholder.md-float:not(.md-empty) .md-placeholder-required, :host .md-input-placeholder.md-float.md-focused .md-placeholder-required { color: #9c27b0; } :host .md-input-placeholder.md-focused { color: #009688; } :host .md-input-placeholder.md-focused.md-accent { color: #9c27b0; } :host .md-input-placeholder.md-focused.md-warn { color: #f44336; } :host input:-webkit-autofill + .md-input-placeholder { display: block; padding-bottom: 5px; -webkit-transform: translateY(-100%) scale(0.75); transform: translateY(-100%) scale(0.75); width: 133.33333%; } :host input:-webkit-autofill + .md-input-placeholder .md-placeholder-required { color: #9c27b0; } :host .md-input-underline { position: absolute; height: 1px; width: 100%; margin-top: 4px; border-top: 1px solid rgba(0, 0, 0, 0.38); } :host .md-input-underline.md-disabled { border-top: 0; background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.26) 33%, transparent 0%); background-image: linear-gradient(to right, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.26) 33%, transparent 0%); background-position: 0; background-size: 4px 1px; background-repeat: repeat-x; } :host .md-input-underline .md-input-ripple { position: absolute; height: 2px; z-index: 1; background-color: #009688; top: -1px; width: 100%; -webkit-transform-origin: top; transform-origin: top; opacity: 0; -webkit-transform: scaleY(0); transform: scaleY(0); -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1); transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1), opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1); } :host .md-input-underline .md-input-ripple.md-accent { background-color: #9c27b0; } :host .md-input-underline .md-input-ripple.md-warn { background-color: #f44336; } :host .md-input-underline .md-input-ripple.md-focused { opacity: 1; -webkit-transform: scaleY(1); transform: scaleY(1); } :host .md-hint { position: absolute; font-size: 75%; bottom: -0.5em; } :host .md-hint.md-right { right: 0; } :host-context([dir='rtl']) { text-align: right; } :host-context([dir='rtl']) .md-input-placeholder { -webkit-transform-origin: bottom right; transform-origin: bottom right; } :host-context([dir='rtl']) .md-input-element.md-end { text-align: left; } :host-context([dir='rtl']) .md-hint { right: 0; left: auto; } :host-context([dir='rtl']) .md-hint.md-right { right: auto; left: 0; } "],
	            providers: [exports.MD_INPUT_CONTROL_VALUE_ACCESSOR],
	            directives: [common_1.NgIf, forms_1.NgModel],
	            host: { '(click)': 'focus()' }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MdInput);
	    return MdInput;
	}());
	exports.MdInput = MdInput;
	exports.MD_INPUT_DIRECTIVES = [MdPlaceholder, MdInput, MdHint];
	//# sourceMappingURL=input.js.map

/***/ },

/***/ 846:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(847);
	__webpack_require__(25);
	__webpack_require__(188);
	var core_1 = __webpack_require__(1);
	var Subject_1 = __webpack_require__(22);
	var Observable_1 = __webpack_require__(3);
	var input_1 = __webpack_require__(844);
	var BookSearchComponent = (function () {
	    function BookSearchComponent() {
	        /**
	         * Tip: Push events into a subject if you want to handle event streams using
	         * observables.
	         */
	        this.keyup$ = new Subject_1.Subject();
	        this.query = '';
	        this.search = this.keyup$
	            .debounceTime(300)
	            .map(function (event) { return event.target.value; })
	            .distinctUntilChanged();
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], BookSearchComponent.prototype, "query", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Observable_1.Observable)
	    ], BookSearchComponent.prototype, "search", void 0);
	    BookSearchComponent = __decorate([
	        core_1.Component({
	            selector: 'book-search',
	            directives: [input_1.MD_INPUT_DIRECTIVES],
	            template: "\n    <md-input placeholder=\"Search for a book\" [value]=\"query\" (keyup)=\"keyup$.next($event)\"></md-input>\n  ",
	            styles: ["\n    md-input {\n      width: 300px;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BookSearchComponent);
	    return BookSearchComponent;
	}());
	exports.BookSearchComponent = BookSearchComponent;


/***/ },

/***/ 847:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(3);
	var debounceTime_1 = __webpack_require__(848);
	Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },

/***/ 848:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(18);
	var async_1 = __webpack_require__(470);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence for the `dueTime` length, and only then
	 * emits the latest source item on the result Observable.
	 * Optionally takes a scheduler for manging timers.
	 * @param {number} dueTime the timeout value for the window of time required to not drop the item.
	 * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
	 * @return {Observable} an Observable the same as source Observable, but drops items.
	 * @method debounceTime
	 * @owner Observable
	 */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) { scheduler = async_1.async; }
	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}
	exports.debounceTime = debounceTime;
	var DebounceTimeOperator = (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
	    };
	    return DebounceTimeOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DebounceTimeSubscriber = (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _super.call(this, destination);
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	        this.hasValue = false;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	            this.hasValue = false;
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ }

});