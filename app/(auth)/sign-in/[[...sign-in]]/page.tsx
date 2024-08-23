import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
      <div className='lg:flex flex-col items-center justify-center h-full px-4'>
        <div className='text-center space-y-4 pt-16'>
          <h1 className='font-bold text-3xl text-slate-700'>Welcome back</h1>
          <p className='text-base text-slate-500'>
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className='flex items-center justify-center mt-8'>
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className='animate-spin text-muted-foreground' />
          </ClerkLoading>
        </div>
      </div>
      <div className='h-full hidden lg:flex bg-blue-600 items-center justify-center'>
        <Image src='/logo.svg' width={100} height={100} alt='logo' />
      </div>
    </div>
  );
}
