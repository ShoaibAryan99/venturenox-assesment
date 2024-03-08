import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { blogsReducer } from "./reducers";

const rootReducer = combineReducers({
  blogsReducer,
});

const initialState = {};

const persistConfig = {
  key: "persist-key",
  storage,
};

const rootReducer1 = (state, action) => {
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer1);

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk)
);

let persistor = persistStore(store);

export default store;

export { persistor };
