// src/components/LogoutButton.tsx
'use client';

import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

export default function LogoutButton() {
    return (
        <Button
            onClick={() => signOut({ callbackUrl: '/auth/login' })}
        >
            Logout
        </Button>
    );
}