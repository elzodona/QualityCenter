import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { VenteComponent } from './components/vente/vente.component';
import { AnalyseComponent } from './components/analyse/analyse.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    VenteComponent,
    AnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
