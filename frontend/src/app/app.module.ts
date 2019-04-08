import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { MatToolbarModule } from '@angular/material';

//Adding Route
import { RouterModule, Routes } from '@angular/router';

//Adding FirstService 
import { FirstService } from './first.service';

//Add http module
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
