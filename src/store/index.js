import { createStore } from 'vuex'
import chargeAccount from "@/modules/chargeAccount/store/index"

const store = createStore({
  modules: {
    chargeAccount,
  },
});

export default store;
