import { A, Z, ZERO, NINE, SPACE, HOME, END, ENTER, ESCAPE, UP_ARROW, DOWN_ARROW } from '@angular/cdk/keycodes';
import * as i0 from '@angular/core';
import { Directive, InjectionToken, EventEmitter, forwardRef, ElementRef, Component, ChangeDetectionStrategy, Inject, Optional, SkipSelf, Host, Input, Output, ViewChild, ContentChild, NgModule } from '@angular/core';
import * as i4 from '@angular/forms';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import * as i12 from '@angular/material/legacy-form-field';
import { MatLegacyFormField } from '@angular/material/legacy-form-field';
import * as i11 from '@angular/material/legacy-select';
import { MatLegacySelect, MatLegacySelectModule } from '@angular/material/legacy-select';
import { BehaviorSubject, of, combineLatest, Subject } from 'rxjs';
import { switchMap, map, startWith, delay, takeUntil, take, tap, filter } from 'rxjs/operators';
import * as i1 from '@angular/material/legacy-core';
import * as i2 from '@angular/cdk/scrolling';
import * as i3 from '@angular/common';
import * as i5 from '@angular/material/legacy-button';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import * as i6 from '@angular/material/legacy-checkbox';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import * as i7 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i8 from '@angular/material/legacy-progress-spinner';
import { MatLegacyProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import * as i9 from '@angular/material/legacy-tooltip';
import { MatLegacyTooltipModule } from '@angular/material/legacy-tooltip';
import * as i10 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Directive for providing a custom clear-icon.
 * e.g.
 * <ngx-mat-select-search [formControl]="bankFilterCtrl">
 *   <mat-icon ngxMatSelectSearchClear>delete</mat-icon>
 * </ngx-mat-select-search>
 */
class MatSelectSearchClearDirective {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: MatSelectSearchClearDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.3", type: MatSelectSearchClearDirective, selector: "[ngxMatSelectSearchClear]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: MatSelectSearchClearDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxMatSelectSearchClear]'
                }]
        }] });

/** List of inputs of NgxMatSelectSearchComponent that can be configured with a global default. */
const configurableDefaultOptions = [
    'ariaLabel',
    'clearSearchInput',
    'closeIcon',
    'closeSvgIcon',
    'disableInitialFocus',
    'disableScrollToActiveOnOptionsChanged',
    'enableClearOnEscapePressed',
    'hideClearSearchButton',
    'noEntriesFoundLabel',
    'placeholderLabel',
    'preventHomeEndKeyPropagation',
    'searching',
];
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
const MAT_SELECTSEARCH_DEFAULT_OPTIONS = new InjectionToken('mat-selectsearch-default-options');

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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: MatSelectNoEntriesFoundDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.3", type: MatSelectNoEntriesFoundDirective, selector: "[ngxMatSelectNoEntriesFound]", ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: MatSelectNoEntriesFoundDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxMatSelectNoEntriesFound]'
                }]
        }] });

/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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
    matSelect;
    matOption;
    changeDetectorRef;
    _viewportRuler;
    matFormField;
    /** Label of the search placeholder */
    placeholderLabel = 'Suche';
    /** Type of the search input field */
    type = 'text';
    /** Font-based icon used for displaying Close-Icon */
    closeIcon = 'close';
    /** Svg-based icon used for displaying Close-Icon. If set, closeIcon is overridden */
    closeSvgIcon;
    /** Label to be shown when no entries are found. Set to null if no message should be shown. */
    noEntriesFoundLabel = 'Keine Optionen gefunden';
    /**
      * Whether or not the search field should be cleared after the dropdown menu is closed.
      * Useful for server-side filtering. See [#3](https://github.com/bithost-gmbh/ngx-mat-select-search/issues/3)
      */
    clearSearchInput = true;
    /** Whether to show the search-in-progress indicator */
    searching = false;
    /** Disables initial focusing of the input field */
    disableInitialFocus = false;
    /** Enable clear input on escape pressed */
    enableClearOnEscapePressed = false;
    /**
     * Prevents home / end key being propagated to mat-select,
     * allowing to move the cursor within the search input instead of navigating the options
     */
    preventHomeEndKeyPropagation = false;
    /** Disables scrolling to active options when option list changes. Useful for server-side search */
    disableScrollToActiveOnOptionsChanged = false;
    /** Adds 508 screen reader support for search box */
    ariaLabel = 'dropdown search';
    /** Whether to show Select All Checkbox (for mat-select[multi=true]) */
    showToggleAllCheckbox = false;
    /** select all checkbox checked state */
    toggleAllCheckboxChecked = false;
    /** select all checkbox indeterminate state */
    toggleAllCheckboxIndeterminate = false;
    /** Display a message in a tooltip on the toggle-all checkbox */
    toggleAllCheckboxTooltipMessage = '';
    /** Define the position of the tooltip on the toggle-all checkbox. */
    toggleAllCheckboxTooltipPosition = 'below';
    /** Show/Hide the search clear button of the search input */
    hideClearSearchButton = false;
    /**
     * Always restore selected options on selectionChange for mode multi (e.g. for lazy loading/infinity scrolling).
     * Defaults to false, so selected options are only restored while filtering is active.
     */
    alwaysRestoreSelectedOptionsMulti = false;
    /** Output emitter to send to parent component with the toggle all boolean */
    toggleAll = new EventEmitter();
    /** Reference to the search input field */
    searchSelectInput;
    /** Reference to the search input field */
    innerSelectSearch;
    /** Reference to custom search input clear icon */
    clearIcon;
    /** Reference to custom no entries found element */
    noEntriesFound;
    /** Current search value */
    get value() {
        return this._formControl.value;
    }
    _lastExternalInputValue;
    // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-empty-function
    onTouched = (_) => { };
    /** Reference to the MatLegacySelect options */
    set _options(_options) {
        this._options$.next(_options);
    }
    get _options() {
        return this._options$.getValue();
    }
    _options$ = new BehaviorSubject(null);
    optionsList$ = this._options$.pipe(switchMap(_options => _options ?
        _options.changes.pipe(map(options => options.toArray()), startWith(_options.toArray())) : of([])));
    optionsLength$ = this.optionsList$.pipe(map(options => options ? options.length : 0));
    /** Previously selected values when using <mat-select [multiple]="true">*/
    previousSelectedValues;
    _formControl = new FormControl('', { nonNullable: true });
    /** whether to show the no entries found message */
    _showNoEntriesFound$ = combineLatest([
        this._formControl.valueChanges,
        this.optionsLength$
    ]).pipe(map(([value, optionsLength]) => {
        const result = (!!this.noEntriesFoundLabel) && (!!value) && optionsLength === this.getOptionsLengthOffset();
        return result;
    }));
    /** Subject that emits when the component has been destroyed. */
    _onDestroy = new Subject();
    /** Reference to active descendant for ARIA Support. */
    activeDescendant;
    // private hostElement: Element,
    constructor(matSelect, matOption, changeDetectorRef, _viewportRuler, matFormField = null, defaultOptions) {
        this.matSelect = matSelect;
        this.matOption = matOption;
        this.changeDetectorRef = changeDetectorRef;
        this._viewportRuler = _viewportRuler;
        this.matFormField = matFormField;
        this.applyDefaultOptions(defaultOptions);
    }
    applyDefaultOptions(defaultOptions) {
        if (!defaultOptions) {
            return;
        }
        for (const key of configurableDefaultOptions) {
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
        }
        else {
            console.error('<ngx-mat-select-search> must be placed inside a <mat-option> element');
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(delay(1), takeUntil(this._onDestroy))
            .subscribe((opened) => {
            if (opened) {
                this.updateInputWidth();
                // focus the search field when opening
                if (!this.disableInitialFocus) {
                    this._focus();
                }
            }
            else {
                // clear it when closing
                if (this.clearSearchInput) {
                    this._reset();
                }
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(take(1), switchMap((_) => {
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
            return this._options.changes
                .pipe(tap(() => {
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
                        if (firstOptionIsChanged
                            || !keyManager.activeItem
                            || !options.find(option => this.matSelect.compareWith(option, keyManager.activeItem))) {
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
        }))
            .pipe(takeUntil(this._onDestroy))
            .subscribe();
        // add or remove css class depending on whether to show the no entries found message
        // note: this is hacky
        this._showNoEntriesFound$.pipe(takeUntil(this._onDestroy)).subscribe(showNoEntriesFound => {
            // set no entries found class on mat option
            if (this.matOption) {
                if (showNoEntriesFound) {
                    this.matOption._getHostElement().classList.add('mat-select-search-no-entries-found');
                }
                else {
                    this.matOption._getHostElement().classList.remove('mat-select-search-no-entries-found');
                }
            }
        });
        // resize the input width when the viewport is resized, i.e. the trigger width could potentially be resized
        this._viewportRuler.change()
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
            if (this.matSelect.panelOpen) {
                this.updateInputWidth();
            }
        });
        this.initMultipleHandling();
        this.optionsList$.pipe(takeUntil(this._onDestroy)).subscribe(() => {
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
        return (this.matSelect?.multiple) && this.showToggleAllCheckbox;
    }
    /**
     * Handles the key down event with MatLegacySelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param event
     */
    _handleKeydown(event) {
        // Prevent propagation for all alphanumeric characters in order to avoid selection issues
        if ((event.key && event.key.length === 1) ||
            (event.keyCode >= A && event.keyCode <= Z) ||
            (event.keyCode >= ZERO && event.keyCode <= NINE) ||
            (event.keyCode === SPACE)
            || (this.preventHomeEndKeyPropagation && (event.keyCode === HOME || event.keyCode === END))) {
            event.stopPropagation();
        }
        if ((this.matSelect?.multiple) && event.key && event.keyCode === ENTER) {
            // Regain focus after multiselect, so we can further type
            setTimeout(() => this._focus());
        }
        // Special case if click Escape, if input is empty, close the dropdown, if not, empty out the search field
        if (this.enableClearOnEscapePressed === true && event.keyCode === ESCAPE && this.value) {
            this._reset(true);
            event.stopPropagation();
        }
    }
    /**
     * Handles the key up event with MatLegacySelect.
     * Allows e.g. the announcing of the currently activeDescendant by screen readers.
     */
    _handleKeyup(event) {
        if (event.keyCode === UP_ARROW || event.keyCode === DOWN_ARROW) {
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
        this._formControl.valueChanges.pipe(filter(value => value !== this._lastExternalInputValue), tap(() => this._lastExternalInputValue = undefined), takeUntil(this._onDestroy)).subscribe(fn);
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
        if (valueChanges === null)
            return;
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.previousSelectedValues = this.matSelect.ngControl.value;
        valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe((values) => {
            let restoreSelectedValues = false;
            if (this.matSelect?.multiple) {
                if ((this.alwaysRestoreSelectedOptionsMulti || (this._formControl.value && this._formControl.value.length))
                    && this.previousSelectedValues && Array.isArray(this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    const optionValues = this.matSelect.options.map(option => option.value);
                    this.previousSelectedValues.forEach(previousValue => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        if (!values.some((v) => this.matSelect.compareWith(v, previousValue))
                            && !optionValues.some(v => this.matSelect.compareWith(v, previousValue))) {
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
        }
        else {
            return 0;
        }
    }
    unselectActiveDescendant() {
        this.activeDescendant?.removeAttribute('aria-selected');
        this.searchSelectInput.nativeElement.removeAttribute('aria-activedescendant');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: MatSelectSearchComponent, deps: [{ token: MatLegacySelect }, { token: i1.MatLegacyOption, host: true, optional: true, skipSelf: true }, { token: i0.ChangeDetectorRef }, { token: i2.ViewportRuler }, { token: MatLegacyFormField, optional: true }, { token: MAT_SELECTSEARCH_DEFAULT_OPTIONS, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.3", type: MatSelectSearchComponent, selector: "ngx-mat-select-search", inputs: { placeholderLabel: "placeholderLabel", type: "type", closeIcon: "closeIcon", closeSvgIcon: "closeSvgIcon", noEntriesFoundLabel: "noEntriesFoundLabel", clearSearchInput: "clearSearchInput", searching: "searching", disableInitialFocus: "disableInitialFocus", enableClearOnEscapePressed: "enableClearOnEscapePressed", preventHomeEndKeyPropagation: "preventHomeEndKeyPropagation", disableScrollToActiveOnOptionsChanged: "disableScrollToActiveOnOptionsChanged", ariaLabel: "ariaLabel", showToggleAllCheckbox: "showToggleAllCheckbox", toggleAllCheckboxChecked: "toggleAllCheckboxChecked", toggleAllCheckboxIndeterminate: "toggleAllCheckboxIndeterminate", toggleAllCheckboxTooltipMessage: "toggleAllCheckboxTooltipMessage", toggleAllCheckboxTooltipPosition: "toggleAllCheckboxTooltipPosition", hideClearSearchButton: "hideClearSearchButton", alwaysRestoreSelectedOptionsMulti: "alwaysRestoreSelectedOptionsMulti" }, outputs: { toggleAll: "toggleAll" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => MatSelectSearchComponent),
                multi: true
            }
        ], queries: [{ propertyName: "clearIcon", first: true, predicate: MatSelectSearchClearDirective, descendants: true }, { propertyName: "noEntriesFound", first: true, predicate: MatSelectNoEntriesFoundDirective, descendants: true }], viewQueries: [{ propertyName: "searchSelectInput", first: true, predicate: ["searchSelectInput"], descendants: true, read: ElementRef, static: true }, { propertyName: "innerSelectSearch", first: true, predicate: ["innerSelectSearch"], descendants: true, read: ElementRef, static: true }], ngImport: i0, template: "<!--\r\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\r\n\r\nUse of this source code is governed by an MIT-style license that can be\r\nfound in the LICENSE file at https://angular.io/license\r\n-->\r\n<!-- Placeholder to adjust vertical offset of the mat-option elements -->\r\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\r\n\r\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\r\n<div\r\n      #innerSelectSearch\r\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\r\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\r\n\r\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\r\n                [color]=\"matFormField?.color\"\r\n                class=\"mat-select-search-toggle-all-checkbox\"\r\n                [checked]=\"toggleAllCheckboxChecked\"\r\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\r\n                [matTooltip]=\"toggleAllCheckboxTooltipMessage\"\r\n                matTooltipClass=\"ngx-mat-select-search-toggle-all-tooltip\"\r\n                [matTooltipPosition]=\"toggleAllCheckboxTooltipPosition\"\r\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\r\n  ></mat-checkbox>\r\n\r\n  <input class=\"mat-select-search-input\"\r\n         autocomplete=\"off\"\r\n         [type]=\"type\"\r\n         [formControl]=\"_formControl\"\r\n         #searchSelectInput\r\n         (keydown)=\"_handleKeydown($event)\"\r\n         (keyup)=\"_handleKeyup($event)\"\r\n         (blur)=\"onBlur()\"\r\n         [placeholder]=\"placeholderLabel\"\r\n         [attr.aria-label]=\"ariaLabel\"\r\n  />\r\n  <mat-spinner *ngIf=\"searching\"\r\n          class=\"mat-select-search-spinner\"\r\n          diameter=\"16\"></mat-spinner>\r\n\r\n  <button *ngIf=\"!hideClearSearchButton && value && !searching\"\r\n          mat-icon-button\r\n          aria-label=\"Clear\"\r\n          (click)=\"_reset(true)\"\r\n          class=\"mat-select-search-clear\">\r\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\r\n    <ng-template #defaultIcon>\r\n      <mat-icon [svgIcon]=\"closeSvgIcon ?? ''\">\r\n        {{!closeSvgIcon ? closeIcon : null}}\r\n      </mat-icon>\r\n    </ng-template>\r\n  </button>\r\n\r\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\r\n\r\n  <mat-divider></mat-divider>\r\n</div>\r\n\r\n<div *ngIf=\"_showNoEntriesFound$ | async\"\r\n     class=\"mat-select-search-no-entries-found\">\r\n  <ng-content *ngIf=\"noEntriesFound; else defaultNoEntriesFound\"\r\n              select=\"[ngxMatSelectNoEntriesFound]\"></ng-content>\r\n  <ng-template #defaultNoEntriesFound>{{noEntriesFoundLabel}}</ng-template>\r\n</div>\r\n", styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;left:0;width:100%;z-index:100;font-size:inherit;box-shadow:none}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-input{box-sizing:border-box;width:100%;border:none;font-family:inherit;font-size:inherit;color:currentColor;outline:none;background:none;padding:0 44px 0 16px;height:calc(3em - 1px);line-height:calc(3em - 1px)}:host-context([dir=rtl]) .mat-select-search-input{padding-right:16px;padding-left:44px}.mat-select-search-inner-toggle-all .mat-select-search-input{padding-left:5px}.mat-select-search-no-entries-found{padding-top:8px}.mat-select-search-clear{position:absolute;right:4px;top:0}:host-context([dir=rtl]) .mat-select-search-clear{right:auto;left:4px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host-context([dir=rtl]) .mat-select-search-spinner{right:auto;left:16px}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search{position:sticky;top:-8px;z-index:1;opacity:1;margin-top:-8px;pointer-events:all}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search mat-pseudo-checkbox{display:none}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mdc-list-item__primary-text{opacity:1}.mat-select-search-toggle-all-checkbox{padding-left:5px}:host-context([dir=rtl]) .mat-select-search-toggle-all-checkbox{padding-left:0;padding-right:5px}\n"], dependencies: [{ kind: "directive", type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i5.MatLegacyButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i6.MatLegacyCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i7.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i8.MatLegacyProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }, { kind: "directive", type: i9.MatLegacyTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "component", type: i10.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: MatSelectSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-mat-select-search', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => MatSelectSearchComponent),
                            multi: true
                        }
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<!--\r\nCopyright (c) 2018 Bithost GmbH All Rights Reserved.\r\n\r\nUse of this source code is governed by an MIT-style license that can be\r\nfound in the LICENSE file at https://angular.io/license\r\n-->\r\n<!-- Placeholder to adjust vertical offset of the mat-option elements -->\r\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\r\n\r\n<!-- Note: the  mat-datepicker-content mat-tab-header are needed to inherit the material theme colors, see PR #22 -->\r\n<div\r\n      #innerSelectSearch\r\n      class=\"mat-select-search-inner mat-typography mat-datepicker-content mat-tab-header\"\r\n      [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple, 'mat-select-search-inner-toggle-all': _isToggleAllCheckboxVisible() }\">\r\n\r\n  <mat-checkbox *ngIf=\"_isToggleAllCheckboxVisible()\"\r\n                [color]=\"matFormField?.color\"\r\n                class=\"mat-select-search-toggle-all-checkbox\"\r\n                [checked]=\"toggleAllCheckboxChecked\"\r\n                [indeterminate]=\"toggleAllCheckboxIndeterminate\"\r\n                [matTooltip]=\"toggleAllCheckboxTooltipMessage\"\r\n                matTooltipClass=\"ngx-mat-select-search-toggle-all-tooltip\"\r\n                [matTooltipPosition]=\"toggleAllCheckboxTooltipPosition\"\r\n                (change)=\"_emitSelectAllBooleanToParent($event.checked)\"\r\n  ></mat-checkbox>\r\n\r\n  <input class=\"mat-select-search-input\"\r\n         autocomplete=\"off\"\r\n         [type]=\"type\"\r\n         [formControl]=\"_formControl\"\r\n         #searchSelectInput\r\n         (keydown)=\"_handleKeydown($event)\"\r\n         (keyup)=\"_handleKeyup($event)\"\r\n         (blur)=\"onBlur()\"\r\n         [placeholder]=\"placeholderLabel\"\r\n         [attr.aria-label]=\"ariaLabel\"\r\n  />\r\n  <mat-spinner *ngIf=\"searching\"\r\n          class=\"mat-select-search-spinner\"\r\n          diameter=\"16\"></mat-spinner>\r\n\r\n  <button *ngIf=\"!hideClearSearchButton && value && !searching\"\r\n          mat-icon-button\r\n          aria-label=\"Clear\"\r\n          (click)=\"_reset(true)\"\r\n          class=\"mat-select-search-clear\">\r\n    <ng-content *ngIf=\"clearIcon; else defaultIcon\" select=\"[ngxMatSelectSearchClear]\"></ng-content>\r\n    <ng-template #defaultIcon>\r\n      <mat-icon [svgIcon]=\"closeSvgIcon ?? ''\">\r\n        {{!closeSvgIcon ? closeIcon : null}}\r\n      </mat-icon>\r\n    </ng-template>\r\n  </button>\r\n\r\n  <ng-content select=\".mat-select-search-custom-header-content\"></ng-content>\r\n\r\n  <mat-divider></mat-divider>\r\n</div>\r\n\r\n<div *ngIf=\"_showNoEntriesFound$ | async\"\r\n     class=\"mat-select-search-no-entries-found\">\r\n  <ng-content *ngIf=\"noEntriesFound; else defaultNoEntriesFound\"\r\n              select=\"[ngxMatSelectNoEntriesFound]\"></ng-content>\r\n  <ng-template #defaultNoEntriesFound>{{noEntriesFoundLabel}}</ng-template>\r\n</div>\r\n", styles: [".mat-select-search-hidden{visibility:hidden}.mat-select-search-inner{position:absolute;top:0;left:0;width:100%;z-index:100;font-size:inherit;box-shadow:none}.mat-select-search-inner.mat-select-search-inner-multiple.mat-select-search-inner-toggle-all{display:flex;align-items:center}.mat-select-search-input{box-sizing:border-box;width:100%;border:none;font-family:inherit;font-size:inherit;color:currentColor;outline:none;background:none;padding:0 44px 0 16px;height:calc(3em - 1px);line-height:calc(3em - 1px)}:host-context([dir=rtl]) .mat-select-search-input{padding-right:16px;padding-left:44px}.mat-select-search-inner-toggle-all .mat-select-search-input{padding-left:5px}.mat-select-search-no-entries-found{padding-top:8px}.mat-select-search-clear{position:absolute;right:4px;top:0}:host-context([dir=rtl]) .mat-select-search-clear{right:auto;left:4px}.mat-select-search-spinner{position:absolute;right:16px;top:calc(50% - 8px)}:host-context([dir=rtl]) .mat-select-search-spinner{right:auto;left:16px}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search{position:sticky;top:-8px;z-index:1;opacity:1;margin-top:-8px;pointer-events:all}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mat-icon{margin-right:0;margin-left:0}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search mat-pseudo-checkbox{display:none}::ng-deep .mat-mdc-option[aria-disabled=true].contains-mat-select-search .mdc-list-item__primary-text{opacity:1}.mat-select-search-toggle-all-checkbox{padding-left:5px}:host-context([dir=rtl]) .mat-select-search-toggle-all-checkbox{padding-left:0;padding-right:5px}\n"] }]
        }], ctorParameters: function () { return [{ type: i11.MatLegacySelect, decorators: [{
                    type: Inject,
                    args: [MatLegacySelect]
                }] }, { type: i1.MatLegacyOption, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }, {
                    type: Host
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.ViewportRuler }, { type: i12.MatLegacyFormField, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MatLegacyFormField]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [MAT_SELECTSEARCH_DEFAULT_OPTIONS]
                }] }]; }, propDecorators: { placeholderLabel: [{
                type: Input
            }], type: [{
                type: Input
            }], closeIcon: [{
                type: Input
            }], closeSvgIcon: [{
                type: Input
            }], noEntriesFoundLabel: [{
                type: Input
            }], clearSearchInput: [{
                type: Input
            }], searching: [{
                type: Input
            }], disableInitialFocus: [{
                type: Input
            }], enableClearOnEscapePressed: [{
                type: Input
            }], preventHomeEndKeyPropagation: [{
                type: Input
            }], disableScrollToActiveOnOptionsChanged: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], showToggleAllCheckbox: [{
                type: Input
            }], toggleAllCheckboxChecked: [{
                type: Input
            }], toggleAllCheckboxIndeterminate: [{
                type: Input
            }], toggleAllCheckboxTooltipMessage: [{
                type: Input
            }], toggleAllCheckboxTooltipPosition: [{
                type: Input
            }], hideClearSearchButton: [{
                type: Input
            }], alwaysRestoreSelectedOptionsMulti: [{
                type: Input
            }], toggleAll: [{
                type: Output
            }], searchSelectInput: [{
                type: ViewChild,
                args: ['searchSelectInput', { read: ElementRef, static: true }]
            }], innerSelectSearch: [{
                type: ViewChild,
                args: ['innerSelectSearch', { read: ElementRef, static: true }]
            }], clearIcon: [{
                type: ContentChild,
                args: [MatSelectSearchClearDirective]
            }], noEntriesFound: [{
                type: ContentChild,
                args: [MatSelectNoEntriesFoundDirective]
            }] } });

/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MatSelectSearchVersion = '6.0.9';
class NgxMatSelectSearchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NgxMatSelectSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: NgxMatSelectSearchModule, declarations: [MatSelectSearchComponent,
            MatSelectSearchClearDirective,
            MatSelectNoEntriesFoundDirective], imports: [BrowserModule,
            ReactiveFormsModule,
            MatLegacyButtonModule,
            MatLegacyCheckboxModule,
            MatIconModule,
            MatLegacyProgressSpinnerModule,
            MatLegacyTooltipModule,
            MatLegacySelectModule,
            MatDividerModule], exports: [MatSelectSearchComponent,
            MatSelectSearchClearDirective,
            MatSelectNoEntriesFoundDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NgxMatSelectSearchModule, imports: [BrowserModule,
            ReactiveFormsModule,
            MatLegacyButtonModule,
            MatLegacyCheckboxModule,
            MatIconModule,
            MatLegacyProgressSpinnerModule,
            MatLegacyTooltipModule,
            MatLegacySelectModule,
            MatDividerModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NgxMatSelectSearchModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        BrowserModule,
                        ReactiveFormsModule,
                        MatLegacyButtonModule,
                        MatLegacyCheckboxModule,
                        MatIconModule,
                        MatLegacyProgressSpinnerModule,
                        MatLegacyTooltipModule,
                        MatLegacySelectModule,
                        MatDividerModule,
                    ],
                    declarations: [
                        MatSelectSearchComponent,
                        MatSelectSearchClearDirective,
                        MatSelectNoEntriesFoundDirective
                    ],
                    exports: [
                        MatSelectSearchComponent,
                        MatSelectSearchClearDirective,
                        MatSelectNoEntriesFoundDirective
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MAT_SELECTSEARCH_DEFAULT_OPTIONS, MatSelectNoEntriesFoundDirective, MatSelectSearchClearDirective, MatSelectSearchComponent, MatSelectSearchVersion, NgxMatSelectSearchModule, configurableDefaultOptions };
//# sourceMappingURL=ngx-mat-select-search.mjs.map
