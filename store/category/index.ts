import { GetterTree, MutationTree, ActionTree } from "vuex";
import { ICategory, ICategoryState } from "~/store/category/types";

export const namespace = 'category';

export const state = (): ICategoryState => ({
  categories: []
});

export const getters: GetterTree<ICategoryState, ICategoryState> = {
  parentCategories (state): ICategory[] {
    return state.categories.filter(v => v.ParentId === 0);
  },
  childCategories (state): ICategory[] {
    return state.categories.filter(v => v.ParentId);
  }
};

export const mutations: MutationTree<ICategoryState> = {
  SET_CATEGORIES(state: ICategoryState, payload: ICategory[]) {
    state.categories = payload;
  }
};

export const actions: ActionTree<ICategoryState, ICategoryState> = {
  async getCategories(): Promise<ICategory[]> {
    // commit('SET_CATEGORIES', []);
    return await this.$axios.get('http://localhost:5000/api/categories/');
  }
};
