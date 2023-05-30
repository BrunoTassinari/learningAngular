import { Component, OnInit } from '@angular/core';
 import {Router} from '@angular/router';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  quote = {
    id: '1',
    content: 'This is a quote',
    author: 'Author',
    model: ''
  }

 constructor(
     private readonly router: Router,
    ) {}

  ngOnInit(): void {
  }

  saveQuote(): void {
    alert('Quote saved');
  }

  close(): void {
    this.router.navigate(['/quotes']);
  };
}
