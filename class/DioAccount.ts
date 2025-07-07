export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  getBalance = (): number => {
    return this.balance;
  }

  protected setBalance = (value: number): void => {
    this.balance = value;
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error('Conta inválida');
  }

  deposit = (value: number): void => {
    if (this.validateStatus()){
      this.balance += value;
      console.log(`Você depositou ${value}. Novo saldo: ${this.balance}`);
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(`Você sacou ${value}. Novo saldo: ${this.balance}`);
    } else if (!this.validateStatus()) {
      throw new Error('Conta inválida para saque.');
    } else {
      throw new Error('Saldo insuficiente.');
    }
  }
}