import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../api/authApi';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
    try {
        const res = await authApi.get('/contacts');
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkApi) => {
    try {
        const res = await authApi.post('/contacts', contact);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const data = await authApi.delete(`/contacts/${id}`);
        return data.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const updateContact = createAsyncThunk('contacts/updateContact', async ({ id, contactUpdate }, thunkApi) => {
    try {
        const res = await authApi.patch(`/contacts/${id}`, contactUpdate);
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
