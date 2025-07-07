import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value + 10);
      console.log(`Você depositou ${value} (mais 10 extra). Novo saldo: ${this.getBalance()}`);
    } else {
      throw new Error('Conta inválida para depósito especial.');
    }
  }
}