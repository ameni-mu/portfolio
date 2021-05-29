import { createStore } from "vuex";

export default createStore({
  state: {
    inputData: {
      illustForm: {
        companyName: "",
        clientName: "",
        mailAddress: "",
        deadDate: "",
        media: "",
        illustUseYesNo: "",
        budget: "",
        term: "",
        message: "",
        attentionCheck: false,
      },
      frontForm: {},
      others: {},
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
