import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import user from "./modules/user"

export const history = createBrowserHistory();
const store = configureStore({ reducer: user });
export default store;
