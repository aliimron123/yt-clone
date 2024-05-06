import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import { Search } from '../element';
import { IoSearchOutline } from 'react-icons/io5';
import { userNavData } from './partials/navData';
import TextVoice from '@/components/module/TextVoice';
import { BsBellFill } from 'react-icons/bs';
import { RiVideoAddLine } from 'react-icons/ri';

interface SearchResult {
  title: string;
}

const TopNav = () => {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (value: any) => {
    setSearchText(value);
    const filteredResults = userNavData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setSearchResults(filteredResults);
  };
  return (
    <div className=" fixed top-0 z-40 flex min-h-14 min-w-full justify-between   bg-[#0f0f0f] px-4 py-1 text-white">
      <div className="my-auto flex w-full flex-row flex-wrap ">
        <span
          className=" my-auto flex h-fit items-center justify-center rounded-full p-2  hover:bg-[#f1f1f133] focus:border-2 focus:border-white "
          onClick={() => console.log('test')}
        >
          <RxHamburgerMenu className="my-auto h-6 w-6 " />
        </span>
        <div className="p-3">
          <Image
            src={'/image/logo-yt.svg'}
            alt="logo"
            width={100}
            height={100}
            className=" h-8"
          />
        </div>
      </div>
      <div className="flex w-full gap-x-2">
        <Search
          withIcon
          IconComponent={IoSearchOutline}
          data={userNavData}
          searchText={searchText}
          isFocused={isFocused}
          searchResults={searchResults}
          onSearchTextChange={handleChange}
          onSearchTextFocus={handleFocus}
          onSearchTextBlur={handleBlur}
        />
        <TextVoice />
      </div>
      <div className="my-auto flex w-full">
        <div className="  my-auto ml-auto flex h-fit flex-row items-center justify-end gap-x-4 pr-3 ">
          <RiVideoAddLine className="my-auto h-6 w-6 p-0.5" />
          <BsBellFill className="my-auto h-6 w-6 p-0.5" />
          <img
            src="/image/windah.jpeg"
            alt="profile"
            className="my-auto h-8 w-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
