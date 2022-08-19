import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { cardInfoApi } from './cardInfo/cardInfoSlice'; // тут будет генератор случайных ответов

import chats from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, chats);

export const store = configureStore({
  reducer: {
    // [cardInfoApi.reducerPath]: cardInfoApi.reducer, // тут будет генератор случайных ответов
    chat: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // cardInfoApi.middleware, // тут будет генератор случайных ответов
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
