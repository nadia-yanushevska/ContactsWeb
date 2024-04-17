import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contacts/selectors';
import { selectNameFilter } from './filters/selectors';

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterName) => {
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()));
});
