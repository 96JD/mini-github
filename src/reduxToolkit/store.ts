import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { globalSliceReducer } from "./globalSlice";

const rootReducer = combineReducers({
	global: globalSliceReducer
});

export const reduxStore = configureStore({
	reducer: rootReducer,
	middleware: (gDM) => gDM(),
	devTools: import.meta.env.DEV
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof reduxStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
