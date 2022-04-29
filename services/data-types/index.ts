export interface CategoryTypes {
  _id: string;
  name: string;
};

export interface GameItemTypes {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoryTypes;
};

export interface BankTypes {
  _id: string;
  name: string;
  accountNumber: string;
  bankName: string;
};

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
};

export interface NominalTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
};

export interface SignInTypes {
  email: string;
  password: string;
};
