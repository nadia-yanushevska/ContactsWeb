import { createAsyncThunk } from '@reduxjs/toolkit';
import { delete_contact, get_contacts, post_contact } from '../../api/mockapi';
import { formatNumber } from '../../helpers/helpers';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, asyncAPI) => {
    try {
        const data = await get_contacts();
        return data.data;
    } catch (error) {
        return asyncAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, asyncAPI) => {
    const newContact = { ...contact, number: formatNumber(contact.number) };
    try {
        const data = await post_contact(newContact);
        return data.data;
    } catch (error) {
        return asyncAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, asyncAPI) => {
    try {
        const data = await delete_contact(id);
        return data.data;
    } catch (error) {
        return asyncAPI.rejectWithValue(error.message);
    }
});
