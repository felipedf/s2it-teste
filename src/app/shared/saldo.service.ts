export class SaldoService {
  private balance = 0;

  getBalance() {
    return this.balance;
  }

  addBalance(val: number) {
    this.balance += val;
  }

  subBalance(val: number) {
    this.balance -= val;
  }
}
