import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/Routes.constant.ts';

export const PageNotFoundComponent: React.FC = () => (
    <>
        <h1>Page not found</h1>
        <Link to={ROUTES.ROOT}>Go back to home</Link>
    </>
);
