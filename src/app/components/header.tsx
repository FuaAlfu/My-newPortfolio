import React from 'react';
import Link from "next/Link";
import Image from "next/image"; 

type HeaderProps = {
  name: string,
  page:{
    id: number,
    label: string,
    link: string
  }[];
}
const Header = ({name, pages}: HeaderProps) => {
  console.log(pages, "pages >>>");
  return (
    <header className='flex flex-col relative bg-linear-557AFF w-full h-48'>
        <div className='flex flex-col justify-around h-full px-6 bg-header z-10'>
              <nav className='text-right flex flex-row gap-6 self-end'>
                {pages.map(page => {
                    <Link 
                    aria-label={page.label} 
                    key={page.id}
                    herf={page.link}
                    className="px-6 py-2 min-w-100
                     hover:bg-blue-light hover:text-blue
                      uppercase tracking-wider "
                    >
                        {" "}
                        {page.label}
                        {" "}
                    </Link>;
                })}
              </nav>
              <h1 className='text-white uppercase'> {name}</h1>
        </div>
        <Image 
           priority 
           height={400} 
           width={200} 
           className='w-full b-48
            object-cover
            object-top 
            absolute
            mb-6' 
           src="/image/" 
           alt={`Image of ${ name}`}
           aria-label={`Image of ${ name}`}
        />
    </header>
  );
}

export default Header