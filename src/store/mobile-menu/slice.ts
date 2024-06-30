import { createSlice } from '@reduxjs/toolkit';

import type { MobileMenuState } from '@/interfaces/MobileMenuState.interface.ts';

import { handleToggleIsMobileMenuOpen } from './helpers.ts';

const initialState: MobileMenuState = {
    isMobileMenuOpen: false,
};

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        toggleIsMobileMenuOpen: handleToggleIsMobileMenuOpen,
    },
});

export const { toggleIsMobileMenuOpen } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
