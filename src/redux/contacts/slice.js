import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, updateContact } from './operations';
import { logoutThunk } from '../auth/operations';

const initialState = {
    contacts: [],
    error: '',
    loading: false,
};

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

export const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(logoutThunk.pending, state => {
                state.contacts = [];
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.contacts = payload;
                state.error = '';
                state.loading = false;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.contacts.push(payload);
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.contacts = state.contacts.filter(contact => contact.id !== payload.id);
            })
            .addCase(updateContact.fulfilled, (state, { payload }) => {
                state.contacts = state.contacts.map(contact => (contact.id === payload.id ? payload : contact));
            })
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(updateContact.pending, handlePending)
            .addCase(updateContact.rejected, handleRejected);
    },
});

export const contactsReducer = slice.reducer;
