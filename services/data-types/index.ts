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

export interface UserTypes {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  phoneNumber: string;
};

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
};

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  userAccount: string;
};

export interface TopUpHistoryTypes {
  gameName: string;
  category: string;
  coinName: string;
  coinQuantity: string;
  thumbnail: string;
};

export interface TransactionHistoryTypes {
  _id: string;
  topUpHistory: TopUpHistoryTypes;
  value: number;
  status: string;
}

export interface TopUpCategoryTypes {
  _id: string;
  value: number;
  name: string;
};
