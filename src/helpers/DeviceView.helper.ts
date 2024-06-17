const MAX_MOBILE_WIDTH: number = 768;

export const isMobileView = (): boolean => window.innerWidth <= MAX_MOBILE_WIDTH;
