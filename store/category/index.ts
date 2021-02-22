import { Module, GetterTree, MutationTree, ActionTree } from "vuex";
import { RootState } from "~/store/types";
import { Category, CategoryState } from "~/store/category/types";

const state: CategoryState = {
  categories: []
};

const getters: GetterTree<CategoryState, RootState> = {
  parentCategories (state): Category[] {
    return state.categories.filter(v => v.ParentId === 0);
  },
  childCategories (state): Category[] {
    return state.categories.filter(v => v.ParentId);
  }
};

const mutations: MutationTree<CategoryState> = {
  SET_CATEGORIES(state: CategoryState, payload: Category[]) {
    state.categories = payload;
  }
};

const actions: ActionTree<CategoryState, RootState> = {
  async getCategories({ commit }): Promise<Category[]> {
    commit('SET_CATEGORIES', []);
    return await this.$axios.get('http://localhost:5000/api/categories/');
  }
};

export const category: Module<CategoryState, RootState> = {
  state,
  getters,
  mutations,
  actions
};
