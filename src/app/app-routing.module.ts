import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuoteComponent } from './components/quotes/create-quote/create-quote.component';
import { ListQuotesComponent } from './components/quotes/list-quotes/list-quotes.component';
import { DeleteQuoteComponent } from './components/quotes/delete-quote/delete-quote.component';
import { EditQuoteComponent } from './components/quotes/edit-quote/edit-quote.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/quotes',
    pathMatch: 'full'
  },
  {
    path: 'quotes',
    component: ListQuotesComponent
  },
  {
    path: 'quotes/create',
    component: CreateQuoteComponent
  },
  {
    path: 'quotes/delete/:id',
    component: DeleteQuoteComponent
  },
  {
    path: 'quotes/edit/:id',
    component: EditQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
