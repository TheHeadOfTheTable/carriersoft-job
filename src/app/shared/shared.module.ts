import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessComponent } from './components/process/process.component';
import { TextFieldComponent } from './components/text-field/text-field.component';



@NgModule({
  declarations: [
    ProcessComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProcessComponent, TextFieldComponent]
})
export class SharedModule { }
