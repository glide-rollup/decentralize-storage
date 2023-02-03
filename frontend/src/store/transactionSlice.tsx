import { createSlice } from "@reduxjs/toolkit";
import { TransactionType } from "../types";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    list: []
  },
  reducers: {
    addTransaction(state: {list: TransactionType[]}, action) {
      state.list.push({
        hash: action.payload.hash,
        description: action.payload.description || ""
      })
    },

    removeTransaction(state, action) {
      state.list = state.list.filter((tx: TransactionType) => tx.hash !== action.payload.hash)
    },
  }
});

export const {addTransaction, removeTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;
