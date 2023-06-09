import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateQuoteComponent } from './components/quotes/create-quote/create-quote.component';
import { FormsModule } from '@angular/forms';
import { ListQuotesComponent } from './components/quotes/list-quotes/list-quotes.component';
import { QuoteComponent } from './components/quotes/quote/quote.component';
import { HttpClientModule } from '@angular/common/http';
import { EditQuoteComponent } from './components/quotes/edit-quote/edit-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateQuoteComponent,
    ListQuotesComponent,
    QuoteComponent,
    EditQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
