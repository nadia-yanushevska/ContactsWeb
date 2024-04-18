import { createSlice } from '@reduxjs/toolkit';

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
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const { selectNameFilter } = slice.selectors;
