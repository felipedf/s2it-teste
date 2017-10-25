import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Transaction} from '../transaction.model';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  // Uso de Reactive Forms para customizacao de validacoes
  addForm: FormGroup;
  formSubmitAttempt: boolean = false;

  private newTransaction: Transaction;
  constructor(private transactionServicce: TransactionService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'transactionType': new FormControl('deposito', Validators.required),
      'amount': new FormControl(null, Validators.required)
    });
  }

  private isValid(addForm: FormGroup) {
    if (addForm) {
      if (addForm.value.transactionType === 'saque') {
        if (addForm.value.amount > this.transactionServicce.getBalance()) {
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
        this.transactionServicce.addTransaction(this.newTransaction);
    } else {
      alert('Saldo insuficiente!');
    }
    this.reset();
  }

  reset() {
    this.addForm.reset();
    this.addForm.patchValue({
      'transactionType': 'deposito'
    });
    this.formSubmitAttempt = false;
  }
}
