import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BuilderComponent } from './builder/builder.component';
import { BuilderModule } from './builder/builder.module';
import { TypesModule } from '../components/types/types.module';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    TypesModule,
    BuilderModule    
  ]
})
export class PagesModule { }
