import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import message from './message';
import profile from './profile';
import user from './user';
import resetPass from './resetPass';
import hire from './hire';

const persistAuth = {
  storage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  message,
  profile,
  user,
  resetPass,
  hire,
});

export default reducer;
