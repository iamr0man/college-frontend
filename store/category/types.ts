export interface ICategory {
  Id: number;
  Name: string;
  ParentId: number;
}

export interface ICategoryState {
  categories: ICategory[];
}

