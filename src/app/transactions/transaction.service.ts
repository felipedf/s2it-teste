import {Transaction} from './transaction.model';

export class TransactionService {
  private transactions: Transaction[];

  getTransactions() {
    return this.transactions.slice();
  }

  getTransaction(index: number) {
    return this.transactions[index];
  }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  deleteTransaction(index: number) {
    this.transactions.splice(index, 1);
  }
}
