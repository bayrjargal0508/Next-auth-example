'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiApple } from 'react-icons/si';

import { Button } from '../ui/button';

export function Social() {
  return (
    <div className="flex items-center gap-x-2">
      <Button
        size="lg"
        className="w-28"
        variant="outline"
        onClick={() => signIn('google', { callbackUrl: '/success' })}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-28"
        variant="outline"
        onClick={() => signIn('facebook', { callbackUrl: '/success' })}
      >
        <FaFacebook className="h-5 w-5" />
      </Button>
      {/* <Button
        size="lg"
        className="w-28"
        variant="outline"
        onClick={() => signIn('apple', { callbackUrl: '/' })}
      >
        <SiApple className="h-5 w-5" />
      </Button> */}
    </div>
  );
}