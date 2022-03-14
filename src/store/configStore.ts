import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import user from "../redux/modules/user"

export const history = createBrowserHistory();
const store = configureStore({ reducer: user });
export default store;
