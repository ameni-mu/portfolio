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
      frontForm: {
        companyName: "",
        clientName: "",
        mailAddress: "",
        deadDate: "",
        budget: "",
        detailtext: "",
      },
      otherForm: {
        companyName: "",
        clientName: "",
        mailAddress: "",
        message: "",
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
