import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-list-quotes',
  templateUrl: './list-quotes.component.html',
  styleUrls: ['./list-quotes.component.css']
})
export class ListQuotesComponent implements OnInit {

  quotes: Quote[] = [
   
  ];

  constructor(private service: QuoteService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(quotes => this.quotes = quotes)
  }


}
