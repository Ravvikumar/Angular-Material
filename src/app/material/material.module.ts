import { NgModule } from '@angular/core';
import { MatButtonModule, 
         MatButtonToggleModule, 
         MatIconModule, 
         MatProgressSpinnerModule, 
         MatToolbarModule, 
         MatSidenavModule, 
         MatMenuModule,
         MatListModule,
         MatDividerModule,
         MatGridListModule,
         MatExpansionModule,
         MatCardModule,
         MatTabsModule,
         MatStepperModule,
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatAutocompleteModule
        } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge'

const Material = [
  MatButtonModule, 
  MatButtonToggleModule, 
  MatIconModule, 
  MatBadgeModule, 
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
]
@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
