import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistStore,
  persistReducer,
  //   FLUSH,
  //   REHYDRATE,
  //   PAUSE,
  //   PERSIST,
  //   PURGE,
  //   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import chats from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, chats);

export const store = configureStore({
  reducer: {
    listing: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
      //   {
      //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      //   },
    }),
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
