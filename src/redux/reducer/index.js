import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';
import message from './message';
import profile from './profile';
import user from './user';
import resetPass from './resetPass';
<<<<<<< HEAD
=======
import skill from './skill';
>>>>>>> d7619cb57a2c8781de562db402aeb23bbff94e5b
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
<<<<<<< HEAD
=======
  skill,
>>>>>>> d7619cb57a2c8781de562db402aeb23bbff94e5b
  hire,
});

export default reducer;
