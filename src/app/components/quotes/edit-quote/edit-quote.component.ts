import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {

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

  updateQuote(): void {
    this.service.update(this.quote).subscribe(() => {
      this.router.navigate(['/quotes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/quotes']);
  }
}
