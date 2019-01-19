import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { BuilderComponent } from './builder.component';
import { TextComponent } from '../../components/types/text/text.component';
import { TypesModule } from '../../components/types/types.module';
import { NumberComponent } from '../../components/types/number/number.component';
import { SelectComponent } from '../../components/types/select/select.component';
import { TextareaComponent } from '../../components/types/textarea/textarea.component';
@NgModule({
  declarations: [
    BuilderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TypesModule,
    DragulaModule.forRoot()
  ],
})
export class BuilderModule { }
