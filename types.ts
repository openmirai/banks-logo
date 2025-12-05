export interface BankName {
  th: string;
  en: string;
}

export interface Bank {
  id: string;
  name: BankName;
  symbol: string;
  icon: string;
}

export interface BankList {
  [key: string]: Bank;
}
