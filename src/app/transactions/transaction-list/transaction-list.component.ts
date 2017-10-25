import {Component, OnDestroy, OnInit} from '@angular/core';
import {Transaction} from '../transaction.model';
import {TransactionService} from '../transaction.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit, OnDestroy {
  transactions: Transaction[] = [];
  subscription: Subscription;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.subscription = this.transactionService.transactionsChanged
      .subscribe(
        (newTransactions: Transaction[]) => {
          this.transactions = newTransactions;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
