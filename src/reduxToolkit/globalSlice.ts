import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { GITHUB_CONSTANTS, User } from "../models/Github";
import { RootState } from "./store";

interface InitialState {
	searchedUsername: string;
	selectedUser: User;
}

const initialState: InitialState = {
	searchedUsername: "",
	selectedUser: GITHUB_CONSTANTS.INITIAL_USER
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setSearchedUsername: (state, action: PayloadAction<string>) => {
			state.searchedUsername = action.payload;
		},
		setSelectedUser: (state, action: PayloadAction<User>) => {
			state.selectedUser = action.payload;
		}
	}
});

export const globalSliceReducer = globalSlice.reducer;

export const globalSliceActions = globalSlice.actions;

export const globalSliceSelectors = {
	searchedUsername: (state: RootState) => state.global.searchedUsername,
	selectedUser: (state: RootState) => state.global.selectedUser
};
