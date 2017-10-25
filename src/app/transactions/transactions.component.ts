import { Component, OnInit } from '@angular/core';
import {TransactionService} from './transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers: [TransactionService]
})
export class TransactionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
