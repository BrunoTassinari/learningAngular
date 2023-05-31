import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote = {
    content: "",
    author: "",
    model: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

   quoteWidth(): string {
    if(this.quote.content.length > 256) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }

}
