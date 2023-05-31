import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-delete-quote',
  templateUrl: './delete-quote.component.html',
  styleUrls: ['./delete-quote.component.css']
})
export class DeleteQuoteComponent implements OnInit {

  quote: Quote = {
    content: '',
    author: '',
    model: ''
  }

  constructor(
      private readonly router: Router,
      private readonly service: QuoteService,
      private readonly route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(Number(id)).subscribe(quote => {
      this.quote = quote;
    });
  }

  deleteQuote(): void {
    this.service.delete(this.quote.id!).subscribe(() => {
      this.router.navigate(['/quotes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/quotes']);
  }

}
