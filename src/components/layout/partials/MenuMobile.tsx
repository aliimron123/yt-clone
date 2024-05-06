import React from 'react';
import Link from 'next/link';

interface MenuMobileProps {
  title: string;
  Icon?: any;
  url: string;
  path: string;
  color?: string;
}

const MenuMobile = ({ title, Icon, url, path, color }: MenuMobileProps) => {
  return (
    <Link
      href={url}
      className={`flex h-fit w-16 flex-col items-center justify-center gap-x-2 rounded-lg px-2.5 pb-2 pt-4  text-base hover:bg-[#f1f1f133] hover:text-[#f1f1f1]   `}
    >
      <Icon className={`mx-auto  h-6 w-6 text-white ${color}`} />
      <p className="my-0.5  text-[10px] capitalize text-white">{title}</p>
    </Link>
  );
};

export default MenuMobile;
