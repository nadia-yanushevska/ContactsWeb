import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi, clearToken, setToken } from '../../api/authApi';

export const registerThunk = createAsyncThunk('auth/register', async (data, thunkApi) => {
    try {
        const res = await authApi.post('/users/signup', data);
        setToken(res.data.token);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const loginThunk = createAsyncThunk('auth/login', async (data, thunkApi) => {
    try {
        const res = await authApi.post('/users/login', data);
        setToken(res.data.token);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        const res = await authApi.post('/users/logout');
        clearToken();
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
export const reloadThunk = createAsyncThunk('auth/reload', async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
        return thunkApi.rejectWithValue('Unable to fetch user');
    }
    setToken(savedToken);
    try {
        const res = await authApi.get('users/current');
        console.log(res);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
