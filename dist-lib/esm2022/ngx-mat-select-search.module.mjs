/**
 * Copyright (c) 2018 Bithost GmbH All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectSearchClearDirective } from './mat-select-search-clear.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectNoEntriesFoundDirective } from './mat-select-no-entries-found.directive';
import { MatDividerModule } from '@angular/material/divider';
import * as i0 from "@angular/core";
export const MatSelectSearchVersion = '6.0.9';
export { MatSelectSearchClearDirective };
export { MatSelectNoEntriesFoundDirective };
export class NgxMatSelectSearchModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.3", ngImport: i0, type: NgxMatSelectSearchModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.3", ngImport: i0, type: NgxMatSelectSearchModule, declarations: [MatSelectSearchComponent,
            MatSelectSearchClearDirective,
            MatSelectNoEntriesFoundDirective], imports: [BrowserModule,
            ReactiveFormsModule,
            MatLegacyButtonModule,
            MatLegacyCheckboxModule,
            MatIconModule,
            MatProgressSpinnerModule,
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
            MatProgressSpinnerModule,
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
                        MatProgressSpinnerModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1zZWxlY3Qtc2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvbWF0LXNlbGVjdC1zZWFyY2gvbmd4LW1hdC1zZWxlY3Qtc2VhcmNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFHLE1BQU0saUNBQWlDLENBQUM7QUFDekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLDhCQUE4QixJQUFJLHdCQUF3QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDdkgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFN0QsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsT0FBTyxDQUFDO0FBQzlDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDO0FBeUI1QyxNQUFNLE9BQU8sd0JBQXdCO3VHQUF4Qix3QkFBd0I7d0dBQXhCLHdCQUF3QixpQkFWakMsd0JBQXdCO1lBQ3hCLDZCQUE2QjtZQUM3QixnQ0FBZ0MsYUFiaEMsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCLGFBQWE7WUFDYix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixnQkFBZ0IsYUFRaEIsd0JBQXdCO1lBQ3hCLDZCQUE2QjtZQUM3QixnQ0FBZ0M7d0dBR3ZCLHdCQUF3QixZQXJCakMsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixxQkFBcUI7WUFDckIsdUJBQXVCO1lBQ3ZCLGFBQWE7WUFDYix3QkFBd0I7WUFDeEIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtZQUNyQixnQkFBZ0I7OzJGQWFQLHdCQUF3QjtrQkF2QnBDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLHVCQUF1Qjt3QkFDdkIsYUFBYTt3QkFDYix3QkFBd0I7d0JBQ3hCLHNCQUFzQjt3QkFDdEIscUJBQXFCO3dCQUNyQixnQkFBZ0I7cUJBQ2pCO29CQUNELFlBQVksRUFBRTt3QkFDWix3QkFBd0I7d0JBQ3hCLDZCQUE2Qjt3QkFDN0IsZ0NBQWdDO3FCQUNqQztvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3dCQUN4Qiw2QkFBNkI7d0JBQzdCLGdDQUFnQztxQkFDakM7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29weXJpZ2h0IChjKSAyMDE4IEJpdGhvc3QgR21iSCBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0U2VsZWN0U2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9tYXQtc2VsZWN0LXNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XHJcbmltcG9ydCB7IE1hdExlZ2FjeUNoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNoZWNrYm94JztcclxuaW1wb3J0IHsgTWF0TGVnYWN5UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIGFzIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1wcm9ncmVzcy1zcGlubmVyJztcclxuaW1wb3J0IHsgTWF0TGVnYWN5VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS10b29sdGlwJztcclxuaW1wb3J0IHsgTWF0TGVnYWN5U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXNlbGVjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5cclxuaW1wb3J0IHsgTWF0U2VsZWN0U2VhcmNoQ2xlYXJEaXJlY3RpdmUgfSBmcm9tICcuL21hdC1zZWxlY3Qtc2VhcmNoLWNsZWFyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE5vRW50cmllc0ZvdW5kRGlyZWN0aXZlIH0gZnJvbSAnLi9tYXQtc2VsZWN0LW5vLWVudHJpZXMtZm91bmQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hdFNlbGVjdFNlYXJjaFZlcnNpb24gPSAnNi4wLjknO1xyXG5leHBvcnQgeyBNYXRTZWxlY3RTZWFyY2hDbGVhckRpcmVjdGl2ZSB9O1xyXG5leHBvcnQgeyBNYXRTZWxlY3ROb0VudHJpZXNGb3VuZERpcmVjdGl2ZSB9O1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgIE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSAsXHJcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBNYXRMZWdhY3lUb29sdGlwTW9kdWxlLFxyXG4gICAgTWF0TGVnYWN5U2VsZWN0TW9kdWxlLFxyXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWF0U2VsZWN0U2VhcmNoQ29tcG9uZW50LFxyXG4gICAgTWF0U2VsZWN0U2VhcmNoQ2xlYXJEaXJlY3RpdmUsXHJcbiAgICBNYXRTZWxlY3ROb0VudHJpZXNGb3VuZERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTWF0U2VsZWN0U2VhcmNoQ29tcG9uZW50LFxyXG4gICAgTWF0U2VsZWN0U2VhcmNoQ2xlYXJEaXJlY3RpdmUsXHJcbiAgICBNYXRTZWxlY3ROb0VudHJpZXNGb3VuZERpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neE1hdFNlbGVjdFNlYXJjaE1vZHVsZSB7XHJcbn1cclxuIl19