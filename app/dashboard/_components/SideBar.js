import React from 'react';
import Image from 'next/image';
import { Button } from '../../../components/ui/button'; 
import { LayoutIcon, Shield } from 'lucide-react';

function SideBar() {
  return (
    <div className='shadow-md h-screen p-7 bg-white'>
      <div className="mb-6">
        <Image 
          src={'/logo.svg'} 
          alt='logo' 
          width={150} // Adjusted width 
          height={100} // Adjusted height 
          priority 
          className="mx-auto w-auto h-auto" // Centered and responsive // Centered and responsive
        />
      </div>

      <div className='mt-10'>
        <Button className="w-full">+ Upload PDF</Button>

        <div className='flex gap-2 items-center p-3 mt-8 hover:bg-slate-100 rounded-lg cursor-pointer'>
          <LayoutIcon className="h-5 w-5 text-black" />
          <h2 className="text-lg font-semibold text-black">Workspace</h2>
        </div>

        <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-100 rounded-lg cursor-pointer'>
          <Shield className="h-5 w-5 text-black" />
          <h2 className="text-lg font-semibold text-black">Upgrade</h2>
        </div>
      </div>

      
    </div>
  );
}

export default SideBar;