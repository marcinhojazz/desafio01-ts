import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(12345, 'Nathalia Pessoal', 1001);
console.log('--- Conta Pessoa Física ---');
console.log(`Nome: ${peopleAccount.getName()}, Conta: ${peopleAccount.getAccountNumber()}, ID Doc: ${peopleAccount.doc_id}`);
peopleAccount.deposit(500);
peopleAccount.withdraw(100);
try {
    peopleAccount.withdraw(600);
} catch (error: any) {
    console.error(error.message);
}
console.log(`Saldo atual: ${peopleAccount.getBalance()}`);


const companyAccount: CompanyAccount = new CompanyAccount('DIO Bank', 2002);
console.log('\n--- Conta Empresa ---');
console.log(`Nome: ${companyAccount.getName()}, Conta: ${companyAccount.getAccountNumber()}`);
companyAccount.deposit(1000);
companyAccount.getLoan(5000);
console.log(`Saldo atual: ${companyAccount.getBalance()}`);
try {
} catch (error: any) {
    console.error(error.message);
}

const specialAccount: SpecialAccount = new SpecialAccount('Nathalia Especial', 3003);
console.log('\n--- Conta Especial ---');
console.log(`Nome: ${specialAccount.getName()}, Conta: ${specialAccount.getAccountNumber()}`);
specialAccount.deposit(100);
console.log(`Saldo atual: ${specialAccount.getBalance()}`);
specialAccount.withdraw(50);
console.log(`Saldo atual: ${specialAccount.getBalance()}`);