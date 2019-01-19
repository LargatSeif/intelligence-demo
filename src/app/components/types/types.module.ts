import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './text/text.component';
import { TextareaComponent } from './textarea/textarea.component';
import { SelectComponent } from './select/select.component';
import { NumberComponent } from './number/number.component';
@NgModule({
  declarations: [
    NumberComponent,
    SelectComponent,
    TextComponent,
    TextareaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NumberComponent,
    SelectComponent,
    TextComponent,
    TextareaComponent,
  ],
})
export class TypesModule { }
