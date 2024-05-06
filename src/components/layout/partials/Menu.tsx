import React from 'react';
import Link from 'next/link';

interface MenuProps {
  title: string;
  Icon?: any;
  url: string;
  path: string;
  color?: string;
}

const Menu = ({ title, Icon, url, path, color }: MenuProps) => {
  return (
    <Link
      href={url}
      className={` flex min-h-10  rounded-lg px-2.5 py-0.5 text-base hover:bg-[#f1f1f133] hover:text-[#f1f1f1]  ${path === url && 'bg-[#f1f1f121] text-[#f1f1f1]'} `}
    >
      <Icon className={`my-auto mr-4 h-6 w-6 text-white ${color}`} />
      <p className="my-auto text-sm capitalize text-white">{title}</p>
    </Link>
  );
};

export default Menu;
