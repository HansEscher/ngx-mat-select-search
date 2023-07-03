/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { MaterialModule } from '../app.module';
// import { MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
// import { MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
// import { MatLegacyOption } from '@angular/material/legacy-core';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { delay, take } from 'rxjs/operators';
import { NgxMatSelectSearchModule } from './ngx-mat-select-search.module';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DOWN_ARROW } from '@angular/cdk/keycodes';
import { MAT_SELECTSEARCH_DEFAULT_OPTIONS, MatSelectSearchOptions } from './default-options';
import { MatSelectSearchTestComponent } from './mat-select-search-test.component';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import { MatToolbarModule } from '@angular/material/toolbar';


describe('MatSelectSearchComponent', () => {
  let component: MatSelectSearchTestComponent;
  let fixture: ComponentFixture<MatSelectSearchTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatToolbarModule,
        // MaterialModule,  // <-- trying to import all needs at once
        // // MatFormFieldModule,
        // // MatSelectModule,
        NgxMatSelectSearchModule
      ],
      declarations: [MatSelectSearchTestComponent],
      providers: [{
        provide: LiveAnnouncer,
        useValue: {
          announce: jasmine.createSpy('announce')
        }
      }
      ]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectSearchTestComponent);
    component = fixture.componentInstance;
  });

  describe('without initial selection', () => {

    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should show a search field and focus it when opening the select!', (done) => {

      component.filteredBanks
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {
          // when the filtered banks are initialized
          fixture.detectChanges();

          component.matSelect.open();
          fixture.detectChanges();

          component.matSelect.openedChange
            .pipe(
              take(1),
              delay(1)
            )
            .subscribe((opened) => {
              expect(opened).toBe(true);
              const searchField = document.querySelector('.mat-select-search-inner .mat-select-search-input');
              const searchInner = document.querySelector('.mat-select-search-inner');
              expect(searchInner).toBeTruthy();
              expect(searchField).toBeTruthy();
              // check focus
              expect(searchField).toBe(document.activeElement);

              const optionElements = document.querySelectorAll('mat-option');
              expect(component.matSelect.options.length).toBe(5);  // 4->5: made parent MatOption non optional
              expect(optionElements.length).toBe(5);  // 4->5: made parent MatOption non optional

              done();
            });

        });

    });


    it('should filter the options available and hightlight the first option in the list, filter the options by input "c" and reset the list', (done) => {

      component.filteredBanks
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {
          // when the filtered banks are initialized
          fixture.detectChanges();

          component.matSelect.open();
          fixture.detectChanges();

          component.matSelect.openedChange
            .pipe(take(1))
            .subscribe((opened) => {
              expect(opened).toBe(true);
              const searchField = document.querySelector('.mat-select-search-inner .mat-select-search-input');
              expect(searchField).toBeTruthy();

              expect(component.matSelect.options.length).toBe(5);  // mat-option no longer optional

              // search for "c"
              component.matSelectSearch._formControl.setValue('c');
              fixture.detectChanges();

              expect(component.bankFilterCtrl.value).toBe('c');
              expect(component.matSelect.panelOpen).toBe(true);

              component.filteredBanks
                .pipe(take(1))
                .subscribe(() => {
                  fixture.detectChanges();

                  setTimeout(() => {
                    const selectList = component.matSelect.options.toArray();
                    expect(selectList.length).toBe(3);
                    expect(selectList[1].value['id']).toBe('C');
                    expect(selectList[1].active).toBe(true, 'first active');

                    component.matSelectSearch._reset(true);
                    fixture.detectChanges();

                    // check focus
                    expect(searchField).toBe(document.activeElement);
                    expect(component.matSelect.panelOpen).toBe(true);

                    component.filteredBanks
                      .pipe(take(1))
                      .subscribe(() => {
                        fixture.detectChanges();
                        if (component.matSelectSearch.clearSearchInput) {
                          expect(component.matSelect.options.length).toBe(5);  // surrounding mat-option no longer optional
                        } else {
                          expect(component.matSelect.options.length).toBe(2);
                        }

                        done();
                      });
                  });

                });

            });

        });

    });

    it('should not announce active option if there are no options', (done) => {
      const announcer = TestBed.get(LiveAnnouncer);
      component.filteredBanks
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {
          // when the filtered banks are initialized
          fixture.detectChanges();

          component.matSelect.open();
          fixture.detectChanges();

          component.matSelect.openedChange
            .pipe(take(1))
            .subscribe((opened) => {

              // search for "something definitely not in the list"
              component.matSelectSearch._formControl.setValue('something definitely not in the list');
              fixture.detectChanges();

              component.filteredBanks
                .pipe(take(1))
                .subscribe(() => {
                  fixture.detectChanges();

                  setTimeout(() => {
                    expect(component.matSelect.options.length).toBe(1); // mat-option no longer optional

                    component.matSelectSearch._handleKeyup(<KeyboardEvent>{keyCode: DOWN_ARROW});
                    expect(announcer.announce).not.toHaveBeenCalled();
                    done();
                  });
                });
            });
        });
    });

    describe('inside mat-option', () => {

      it('should show a search field and focus it when opening the select', (done) => {

        component.filteredBanksMatOption
          .pipe(
            take(1),
            delay(1)
          )
          .subscribe(() => {
            // when the filtered banks are initialized
            fixture.detectChanges();

            component.matSelectMatOption.open();
            fixture.detectChanges();

            component.matSelectMatOption.openedChange
              .pipe(
                take(1),
                delay(1)
              )
              .subscribe((opened) => {
                expect(opened).toBe(true);
                const searchField = document.querySelector('.mat-select-search-inner .mat-select-search-input');
                const searchInner = document.querySelector('.mat-select-search-inner');
                expect(searchInner).toBeTruthy();
                expect(searchField).toBeTruthy();
                // check focus
                expect(searchField).toBe(document.activeElement);

                const optionElements = document.querySelectorAll('mat-option');
                expect(component.matSelectMatOption.options.length).toBe(5);
                expect(optionElements.length).toBe(5);

                done();
              });

          });

      });


      it('should filter the options available and hightlight the first option in the list, filter the options by input "c" and reset the list', (done) => {

        component.filteredBanksMatOption
          .pipe(
            take(1),
            delay(1)
          )
          .subscribe(() => {
            // when the filtered banks are initialized
            fixture.detectChanges();

            component.matSelectMatOption.open();
            fixture.detectChanges();

            component.matSelectMatOption.openedChange
              .pipe(take(1))
              .subscribe((opened) => {
                expect(opened).toBe(true);
                const searchField = document.querySelector('.mat-select-search-inner .mat-select-search-input');
                expect(searchField).toBeTruthy();

                expect(component.matSelectMatOption.options.length).toBe(5);

                // search for "c"
                component.matSelectSearchMatOption._formControl.setValue('c');
                fixture.detectChanges();

                expect(component.bankFilterCtrlMatOption.value).toBe('c');
                expect(component.matSelectMatOption.panelOpen).toBe(true);

                component.filteredBanks
                  .pipe(take(1))
                  .subscribe(() => {
                    fixture.detectChanges();

                    setTimeout(() => {
                      expect(component.matSelectMatOption.options.length).toBe(3);
                      expect(component.matSelectMatOption.options.toArray()[1].value.id).toBe('C');
                      expect(component.matSelectMatOption.options.toArray()[1].active).toBe(true, 'first active');

                      component.matSelectSearchMatOption._reset(true);
                      fixture.detectChanges();

                      // check focus
                      expect(searchField).toBe(document.activeElement);
                      expect(component.matSelectMatOption.panelOpen).toBe(true);

                      component.filteredBanks
                        .pipe(take(1))
                        .subscribe(() => {
                          fixture.detectChanges();
                          expect(component.matSelectMatOption.options.length).toBe(5);

                          done();
                        });
                    });

                  });

              });

          });

      });

    })

  });

  describe('with initial selection', () => {

    it('should set the initial selection of MatSelect', waitForAsync((done: any) => {
      component.initialSingleSelection = component.banks[3];
      fixture.detectChanges();

      component.filteredBanks
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {

          // when the filtered banks are initialized
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            fixture.detectChanges();
            component.matSelect.options.changes
              .pipe(take(1))
              .subscribe(() => {

                expect(component.matSelect.value).toEqual(component.banks[3]);

                component.matSelect.open();
                fixture.detectChanges();

                component.matSelect.openedChange
                  .pipe(take(1))
                  .subscribe((opened) => {
                    expect(opened).toBe(true);
                    expect(component.matSelect.value).toEqual(component.banks[3]);
                    expect(component.bankCtrl.value).toEqual(component.banks[3]);

                    done();
                  });
              });

          });

        });

    }));

    it('set the initial selection with multi=true and filter the options available, filter the options by input "c" and select an option',
    waitForAsync((done: any) => {
      component.initialMultiSelection = [component.banks[1]];
      fixture.detectChanges();

      component.filteredBanksMulti
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {
          console.log('---and-select-an-option---');
          // when the filtered banks are initialized
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            console.log('--stable--');

            fixture.detectChanges();
            component.matSelect.options.changes
              .pipe(take(1))
              .subscribe((_) => {
                console.log('changes: ', _);

                component.matSelectMulti.open();
                fixture.detectChanges();

                component.matSelectMulti.openedChange
                  .pipe(take(1))
                  .subscribe((opened) => {
                    expect(opened).toBe(true);
                    expect(component.matSelectMulti.value).toEqual([component.banks[1]]);
                    expect(component.bankMultiCtrl.value).toEqual([component.banks[1]]);

                    const searchField = document.querySelector('.mat-select-search-inner .mat-select-search-input');
                    expect(searchField).toBeTruthy();

                    expect(component.matSelectMulti.options.length).toBe(4);

                    // search for "c"
                    component.matSelectSearchMulti._formControl.setValue('c');
                    fixture.detectChanges();

                    expect(component.bankFilterCtrl.value).toBe('c');
                    expect(component.matSelectMulti.panelOpen).toBe(true);

                    component.filteredBanks
                      .pipe(take(1))
                      .subscribe(() => {
                        fixture.detectChanges();

                        setTimeout(() => {
                          expect(component.matSelectMulti.options.length).toBe(2);
                          expect(component.matSelectMulti.options.first.value.id).toBe('C');
                          expect(component.matSelectMulti.options.first.active).toBe(true, 'first active');

                          component.matSelectMulti.options.first._selectViaInteraction();

                          fixture.detectChanges();

                          // check focus
                          expect(component.matSelectMulti.panelOpen).toBe(true);

                          setTimeout(() => {
                            fixture.detectChanges();
                            expect(component.matSelectMulti.value).toEqual([component.banks[1], component.banks[2]]);
                            expect(component.bankMultiCtrl.value).toEqual([component.banks[1], component.banks[2]]);

                            // search for "d"
                            component.matSelectSearchMulti._formControl.setValue('d');
                            fixture.detectChanges();

                            expect(component.bankFilterCtrl.value).toBe('d');
                            expect(component.matSelectMulti.panelOpen).toBe(true);

                            component.filteredBanks
                              .pipe(take(1))
                              .subscribe(() => {
                                fixture.detectChanges();

                                setTimeout(() => {
                                  expect(component.matSelectMulti.options.length).toBe(1);
                                  expect(component.matSelectMulti.options.first.value.id).toBe('DC');
                                  expect(component.matSelectMulti.options.first.active).toBe(true, 'first active');

                                  component.matSelectMulti.options.first._selectViaInteraction();

                                  fixture.detectChanges();

                                  // check focus
                                  expect(component.matSelectMulti.panelOpen).toBe(true);

                                  setTimeout(() => {
                                    fixture.detectChanges();
                                    expect(component.matSelectMulti.value).toEqual([component.banks[1], component.banks[2], component.banks[3]]);
                                    expect(component.bankMultiCtrl.value).toEqual([component.banks[1], component.banks[2], component.banks[3]]);
                                    done();

                                  });
                                });

                              });

                          });
                        });

                      });

                  });
              });
          });


        });
    }));

  });

});


describe('MatSelectSearchComponent with default options', () => {
  let component: MatSelectSearchTestComponent;
  let fixture: ComponentFixture<MatSelectSearchTestComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatToolbarModule,
        // MaterialModule,
        // MatFormFieldModule,
        // MatSelectModule,
        NgxMatSelectSearchModule
      ],
      declarations: [MatSelectSearchTestComponent],
      providers: [
        {
          provide: LiveAnnouncer,
          useValue: {
            announce: jasmine.createSpy('announce')
          }
        },
        {
          provide: MAT_SELECTSEARCH_DEFAULT_OPTIONS,
          useValue: <MatSelectSearchOptions>{
            placeholderLabel: 'Mega bla',
          },
        },
      ]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectSearchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should show a search field and focus it when opening the select', (done) => {

      component.filteredBanks
        .pipe(
          take(1),
          delay(1)
        )
        .subscribe(() => {
          // when the filtered banks are initialized
          fixture.detectChanges();

          component.matSelect.open();
          fixture.detectChanges();

          component.matSelect.openedChange
            .pipe(
              take(1),
              delay(1)
            )
            .subscribe((opened) => {
              const searchField = document.querySelector('.mat-select-search-inner .mat-select-search-input') as HTMLInputElement;

              expect(searchField.placeholder).toBe('Mega bla');
              done();
            });

        });

    });

});
