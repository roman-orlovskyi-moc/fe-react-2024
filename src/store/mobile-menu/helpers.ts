import type { MobileMenuState } from '@/interfaces/MobileMenuState.interface.ts';

export const handleToggleIsMobileMenuOpen = (state: MobileMenuState): void => {
    state.isMobileMenuOpen = !state.isMobileMenuOpen;
};
