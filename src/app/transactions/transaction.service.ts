import {Transaction} from './transaction.model';
import {Subject} from 'rxjs/Subject';
import {SaldoService} from '../shared/saldo.service';
import {Injectable} from '@angular/core';

@Injectable()
export class TransactionService {
  private transactions: Transaction[] = [];
  transactionsChanged = new Subject<Transaction[]>();

  constructor(private saldoService: SaldoService) {}

  getTransactions() {
    return this.transactions.slice();
  }

  getTransaction(index: number) {
    return this.transactions[index];
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.transactionsChanged.next(this.transactions.slice());
  }

  deleteTransaction(index: number) {
    this.transactions.splice(index, 1);
    this.transactionsChanged.next(this.transactions.slice());
  }
}
