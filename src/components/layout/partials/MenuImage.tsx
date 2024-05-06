import React from 'react';
import Link from 'next/link';
import { BsDot } from 'react-icons/bs';

interface MenuProps {
  title: string;
  url: string;
  active?: boolean;
  path: string;
  icon_image: string;
}

const MenuImage = ({ title, url, active, path, icon_image }: MenuProps) => {
  return (
    <Link
      href={url}
      className={`  flex min-h-10 w-full flex-row  rounded-lg px-2.5 py-0.5 text-base hover:bg-[#f1f1f133] hover:text-[#f1f1f1]  ${path === url && 'bg-[#f1f1f121] text-[#f1f1f1]'} `}
    >
      <img
        alt="image"
        src={icon_image}
        className="my-auto mr-4 h-6 w-6 rounded-full object-cover"
      />
      <p className="my-auto w-32 truncate text-sm capitalize text-white">
        {title}
      </p>
      {active ? (
        <div className="relative my-auto h-6 w-6">
          <BsDot className="absolute left-0 right-0  h-6 w-6 text-blue-500" />
        </div>
      ) : null}
    </Link>
  );
};

export default MenuImage;
