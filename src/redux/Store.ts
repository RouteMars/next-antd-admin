import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import UserReducer from '@redux/slices/UserSlice';

// import { createLogger } from 'redux-logger';
// const logger = createLogger();

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
