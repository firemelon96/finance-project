import Link from 'next/link';
import Image from 'next/image';

export const HeaderLogo = () => {
  return (
    <Link href='/'>
      <div className='hidden lg:flex items-center'>
        <Image src='/logo.svg' alt='Logo' height={40} width={40} />
        <p className='font-semibold text-white text-2xl ml-2.5'>My Wallet</p>
      </div>
    </Link>
  );
};
