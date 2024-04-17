import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;

export const selectNameFilter = state => state.filters.filter.name;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterName) => {
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()));
});
