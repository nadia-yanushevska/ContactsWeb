import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, registerThunk, reloadThunk } from './operations';

const initialState = {
    user: {
        name: '',
        email: '',
    },
    token: '',
    isLoggedIn: false,
    isReloading: false,
};

export const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(registerThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logoutThunk.fulfilled, () => {
                return initialState;
            })
            .addCase(reloadThunk.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.isLoggedIn = true;
                state.isReloading = false;
            })
            .addCase(reloadThunk.pending, state => {
                state.isReloading = true;
            })
            .addCase(reloadThunk.rejected, state => {
                state.isReloading = false;
            });
    },
});

export const authReducer = slice.reducer;
