import { createSlice } from '@reduxjs/toolkit';
import { logoutThunk } from '../auth/operations';

const initialState = {
    filter: {
        name: '',
    },
};

export const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter(state, { payload }) {
            state.filter.name = payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(logoutThunk.pending, state => {
            state.filter.name = '';
        });
    },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const { selectNameFilter } = slice.selectors;
