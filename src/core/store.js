import { configureStore } from '@reduxjs/toolkit';
import totalRecordReducer from '../features/recordsCounterSlice';
import userProfileReducer from '../features/userInfoSlice';

export const store = configureStore({
  reducer: {
    totalRecord: totalRecordReducer,
    userData: userProfileReducer,
  },
})

// export const RootState = typeof store.getState;

// export const AppDispatch = typeof store.dispatch;  