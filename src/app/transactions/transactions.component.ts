import { Component, OnInit } from '@angular/core';
import {TransactionService} from './transaction.service';
import {SaldoService} from "../shared/saldo.service";

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers: [TransactionService]
})
export class TransactionsComponent implements OnInit {

  constructor(private saldoService: SaldoService) { }

  ngOnInit() {
  }

  printSaldo() {
    return this.saldoService.getBalance();
  }
}
