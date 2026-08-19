/** @format */

import { User } from 'lucide-react';
import Image from 'next/image';

export default function PortraitPlaceholder({ image = '', className = '' }) {
  return (
    <>
      {
        <div className='w-full h-full z-1'>
          <Image
            className={`w-full h-full object-contain -mt-16 ${className} `}
            src={image}
            width={100}
            height={100}
            unoptimized
            alt='Lawyer Image'
          />
        </div>
      }
    </>
  );
}
