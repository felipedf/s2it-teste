import { Component, OnInit } from '@angular/core';
import {Transaction} from '../transaction.model';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [
    new Transaction('deposito', 100),
    new Transaction('saque', 10)
  ];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
  }

}
