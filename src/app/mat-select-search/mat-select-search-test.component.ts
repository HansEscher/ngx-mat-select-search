import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatLegacySelect } from '@angular/material/legacy-select';
import { MatSelectSearchComponent } from './mat-select-search.component';
import { UntypedFormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';


export interface Bank {
    id: string;
    name: string;
  }

  @Component({
    selector: 'mat-select-search-test',
    templateUrl: './mat-select-search-test.component.html',
  })
  export class MatSelectSearchTestComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('selectSingle') matSelect!: MatLegacySelect;
    @ViewChild('selectSingleMatOption') matSelectMatOption!: MatLegacySelect;
    @ViewChild('selectMulti') matSelectMulti!: MatLegacySelect;
    @ViewChild('selectSearchSingle') matSelectSearch!: MatSelectSearchComponent;
    @ViewChild('selectSearchSingleMatOption') matSelectSearchMatOption!: MatSelectSearchComponent;
    @ViewChild('selectSearchMulti') matSelectSearchMulti!: MatSelectSearchComponent;

    // control for the selected bank
    public bankCtrl: UntypedFormControl = new UntypedFormControl();
    // control for the selected bank
    public bankCtrlMatOption: UntypedFormControl = new UntypedFormControl();
    // control for the MatLegacySelect filter keyword
    public bankFilterCtrl: UntypedFormControl = new UntypedFormControl();
    // control for the MatLegacySelect filter keyword
    public bankFilterCtrlMatOption: UntypedFormControl = new UntypedFormControl();

    /** control for the selected bank for multi-selection */
    public bankMultiCtrl: UntypedFormControl = new UntypedFormControl();

    /** control for the MatLegacySelect filter keyword multi-selection */
    public bankMultiFilterCtrl: UntypedFormControl = new UntypedFormControl();


    // list of banks
    public banks: Bank[] = [
      {name: 'Bank A', id: 'A'},
      {name: 'Bank B', id: 'B'},
      {name: 'Bank C', id: 'C'},
      {name: 'Bank DC', id: 'DC'}];

    public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
    public filteredBanksMatOption: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

    /** list of banks filtered by search keyword for multi-selection */
    public filteredBanksMulti: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);

    public initialSingleSelection: Bank | null = null;
    public initialSingleSelectionMatOption: Bank | null = null;
    public initialMultiSelection: Bank[] = [];


    // Subject that emits when the component has been destroyed.
    private _onDestroy = new Subject<void>();

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
      this.bankFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterBanks();
        });
      this.bankFilterCtrlMatOption.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterBanksMatOption();
        });
      this.bankMultiFilterCtrl.valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
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
    private setInitialValue() {
      this.filteredBanks
        .pipe(take(1), takeUntil(this._onDestroy))
        .subscribe(() => {
          // setting the compareWith property to a comparison function
          // triggers initializing the selection according to the initial value of
          // the form control (i.e. _initializeSelection())
          // this needs to be done after the filteredBanks are loaded initially
          // and after the mat-option elements are available
          this.matSelect.compareWith = (a: Bank, b: Bank) => a && b && ('id' in a) && ('id' in b) && a['id'] === b['id'];
          this.matSelectMatOption.compareWith = (a: Bank, b: Bank) => a && b && ('id' in a) && ('id' in b) && a['id'] === b['id'];
          this.matSelectMulti.compareWith = (a: Bank, b: Bank) => a && b && ('id' in a) && ('id' in b) && a['id'] === b['id'];
        });
    }

    private filterBanks() {
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
      this.filteredBanks.next(
        this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
      );
    }

    private filterBanksMatOption() {
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
      this.filteredBanksMatOption.next(
        this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
      );
    }


    private filterBanksMulti() {
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
      this.filteredBanksMulti.next(
        this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
      );
    }
  }