import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material imports
import { MatButtonModule,
         MatDialogModule,
         MatFormFieldModule,
         MatGridListModule,
         MatInputModule,
         MatListModule,
         MatMenuModule,
         MatPaginatorModule,
         MatProgressSpinnerModule,
         MatSelectModule,
         MatSidenavModule,
         MatSlideToggleModule,
         MatSnackBarModule,
         MatSortModule,
         MatTableModule,
         MatTabsModule,
         MatTooltipModule } from '@angular/material';
import { RoutingModule } from './/routing.module';
import { SuccessComponent } from './components/success/success.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
