import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.deposit(value);
      console.log(`Você pegou um empréstimo de ${value}. Novo saldo: ${this.getBalance()}`);
    } else {
      throw new Error('Conta inválida para empréstimo.');
    }
  }
}
