import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Transaction} from '../transaction.model';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  // Uso de Reactive Forms para customizacao de validacoes
  addForm: FormGroup;
  private newTransaction: Transaction;
  constructor() { }

  ngOnInit() {
    this.addForm = new FormGroup({
      'transactionType': new FormControl('deposito'),
      'amount': new FormControl(null)
    });
  }

  onSubmit() {
    this.newTransaction = new Transaction(
      this.addForm.value.transactionType,
      this.addForm.value.amount
    );

    console.log(this.newTransaction);
  }
  //
  // checkBalance(control: FormControl): {[n: number]: boolean} {
  // }

}
