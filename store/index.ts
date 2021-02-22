import Vue from 'Vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from "~/store/types";

import { category } from "~/store/category";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    category
  }
};

export default new Vuex.Store<RootState>(store);
