import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemindersRoutingModule } from './reminders-routing.module';
import { RemindersComponent } from './reminders.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { FrequencyPipe } from './frequency.pipe';
import { AddComponent } from './add/add.component';
 

@NgModule({
  declarations: [
    RemindersComponent,
    ListComponent,
    FrequencyPipe,
    AddComponent
  ],
  imports: [
    CommonModule,
    RemindersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpClientModule
  ]
})
export class RemindersModule { }
