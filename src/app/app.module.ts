import { MatTableModule } from '@angular/material/table';
// import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [AppComponent, DataTableComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
