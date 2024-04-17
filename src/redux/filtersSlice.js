import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: {
        name: '',
    },
};

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter(state, { payload }) {
            state.filter.name = payload;
        },
    },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const { selectNameFilter } = filtersSlice.selectors;
