import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'form', component: MyFormComponent,},
  { path: 'sign-up', component: SignUpComponent,},
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
