export interface Category {
  Id: number;
  Name: string;
  ParentId: number;
}

export interface CategoryState {
  categories: Category[];
}

