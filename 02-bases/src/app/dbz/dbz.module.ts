import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import all the components that are part of the module
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
