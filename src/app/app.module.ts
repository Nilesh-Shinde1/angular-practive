import { TeachersService } from './teachers/teachers.service';
import { CoursesComponent } from './cources.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputFormatDirective } from './custom-directives/input-format.directive';
import { ContactNumberFormatDirective } from './custom-directives/contact-number-format.directive';
import { InputFormComponent } from './input-form/input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TeachersComponent,
    PipesComponent,
    FavoriteComponent,
    DirectivesComponent,
    InputFormatDirective,
    ContactNumberFormatDirective,
    InputFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TeachersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
