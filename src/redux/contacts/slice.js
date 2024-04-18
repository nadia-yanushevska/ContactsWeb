import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

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
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.rejected, handleRejected);
    },
});

export const contactsReducer = slice.reducer;
