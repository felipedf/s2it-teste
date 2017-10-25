import {Transaction} from './transaction.model';
import {Subject} from 'rxjs/Subject';

export class TransactionService {
  private transactions: Transaction[] = [];
  private balance = 0;
  transactionsChanged = new Subject<Transaction[]>();

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

  getBalance() {
    return this.balance;
  }

  addToBalance(num: number) {
    this.balance += num;
  }

  subFromBalance(num: number) {
    this.balance -= num;
  }
}
