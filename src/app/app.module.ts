import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionListComponent,
    TransactionsComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
