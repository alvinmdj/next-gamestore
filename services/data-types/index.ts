export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
};

export interface GameItemTypes {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoryTypes;
};
