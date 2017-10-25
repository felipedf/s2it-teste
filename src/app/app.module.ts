import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddTransactionComponent } from './transactions/add-transaction/add-transaction.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SaldoComponent } from './saldo/saldo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TransactionListComponent,
    TransactionsComponent,
    AddTransactionComponent,
    SaldoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
