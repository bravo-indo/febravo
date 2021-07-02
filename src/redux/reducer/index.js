import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import message from './message';
import profile from './profile';

const persistAuth = {
  storage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  message,
  profile,
});

export default reducer;
