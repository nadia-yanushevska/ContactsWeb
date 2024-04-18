import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';
import { deformatNumber } from '../../helpers/helpers';

export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterName) => {
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()) || deformatNumber(contact.number).includes(filterName));
});
