import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Transaction} from '../transaction.model';
import {TransactionService} from '../transaction.service';
import {SaldoService} from '../../shared/saldo.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  // Uso de Reactive Forms para customizacao de validacoes
  addForm: FormGroup;
  formSubmitAttempt = false;

  private newTransaction: Transaction;
  constructor(
    private saldoService: SaldoService,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'transactionType': new FormControl(TransactionService.DEPOSITO, Validators.required),
      'amount': new FormControl(null, Validators.required)
    });
  }

  private isValid(addForm: FormGroup) {
    if (addForm) {
      if (addForm.value.transactionType === TransactionService.SAQUE) {
        if (addForm.value.amount > this.saldoService.getBalance()) {
          return false;
        }
      }
    }
    return true;
  }

  onSubmit() {
    if (!this.addForm.valid) {
      this.formSubmitAttempt = true;
    } else if (this.isValid(this.addForm)) {
        this.newTransaction = new Transaction(
          this.addForm.value.transactionType,
          this.addForm.value.amount
        );
        this.transactionService.addTransaction(this.newTransaction);
      this.reset();
    } else {
      alert('Saldo insuficiente!');
      this.reset();
    }
  }

  reset() {
    this.addForm.reset();
    this.addForm.patchValue({
      'transactionType': TransactionService.DEPOSITO
    });
    this.formSubmitAttempt = false;
  }
}
