import { Component, OnInit } from '@angular/core';
 import {Router} from '@angular/router';
import { Quote } from '../quote';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  quote: Quote = {
    content: '',
    author: '',
    model: ''
  }

 constructor(
     private readonly router: Router,
     private readonly service: QuoteService
    ) {}

  ngOnInit(): void {
  }

  saveQuote(): void {
    this.service.create(this.quote).subscribe(() => {
      this.router.navigate(['/quotes']);
    });
  }

  close(): void {
    this.router.navigate(['/quotes']);
  };
}
