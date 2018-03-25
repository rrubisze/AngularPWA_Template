import { BrowserModule } from '@angular/platform-browser';
import {APP_BASE_HREF} from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCard, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatFormFieldControl, MatSlideToggleModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModel, FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {LayoutModule} from '@angular/cdk/layout';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './guard/index';
import { TableComponent } from './pages/table/table.component';
import { TabsComponent } from './pages/tabs/tabs.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TableComponent,
    TabsComponent
  ],
  entryComponents:[TableComponent, TabsComponent, MainComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    routing,
    MatButtonModule, 
    MatCheckboxModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MatSlideToggleModule,
    HttpClientModule,
  LayoutModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule,MatInputModule,MatToolbarModule, MatSidenavModule, MatListModule, LayoutModule, MatGridListModule],
  providers: [
    AuthGuard,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
