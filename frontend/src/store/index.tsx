import { configureStore } from "@reduxjs/toolkit";
import transactionSlice from './transactionSlice';

export default configureStore({
  reducer: {
    transactions: transactionSlice,
  }
});
