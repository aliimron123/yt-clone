import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { TfiClose } from 'react-icons/tfi';
import { IoSearchOutline } from 'react-icons/io5';

interface ISearchProp {
  withIcon?: boolean;
  colorBorder?: string;
  IconComponent?: any;
  variant?: 'mobile' | 'desktop';
  data: any[];

  searchText: string;
  isFocused: boolean;
  searchResults: any[];
  onSearchTextChange: (value: string) => void;
  onSearchTextFocus: () => void;
  onSearchTextBlur: () => void;
}

type Ref = HTMLInputElement & HTMLTextAreaElement;

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > &
  ISearchProp;

const Search = forwardRef<Ref, InputProps>((props, ref) => {
  const {
    withIcon = false,
    IconComponent = <></>,
    colorBorder,
    variant = 'desktop',
    children,
    className,
    data,
    searchText,
    isFocused,
    searchResults,
    onSearchTextChange,
    onSearchTextFocus,
    onSearchTextBlur,
    ...rest
  } = props;

  switch (variant) {
    case 'mobile':
      return (
        <div className="absolute top-0 h-fit w-full bg-black py-2">
          <div className="relative mt-1 flex w-full gap-x-2">
            <div className="relative flex h-10 w-full   rounded-[24px]">
              {isFocused && (
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <IoSearchOutline className="h-5 w-5 text-gray-400" />
                </div>
              )}
              {searchResults.length > 0 && isFocused && (
                <div className="absolute top-full mt-2 w-full max-w-lg rounded-lg  bg-[#2b2b2b] shadow-lg">
                  <ul className="py-4">
                    {searchResults.map((result, index) => (
                      <li
                        key={index}
                        className="flex cursor-pointer gap-x-2 px-4 py-2 font-semibold text-[#f1f1f1] hover:bg-[#999999b2]  "
                      >
                        <IoSearchOutline className="my-auto mr-3 h-5 w-5 text-[#f1f1f1]" />
                        {result.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <input
                type="text"
                ref={ref}
                placeholder="Telusuri"
                value={searchText}
                onFocus={onSearchTextFocus}
                onBlur={onSearchTextBlur}
                onChange={(event) => onSearchTextChange(event.target.value)}
                className={clsx(
                  `w-full   max-w-xl rounded-l-[24px] border border-[#ffffff21] bg-[#121212] py-1 pl-12 pr-4 outline-none focus:border-[#3ea6ff] `,
                  isFocused ? ' pl-12' : 'pl-4',
                  className,
                )}
                {...rest}
              />

              {searchText.length > 0 && (
                <button
                  type="button"
                  className="absolute right-[67px] rounded-full px-2.5 py-2 hover:bg-[#ffffffc5]"
                >
                  <TfiClose className="my-0.5 h-5 w-5" />
                </button>
              )}

              <button
                type="button"
                className="w-6 rounded-r-[24px] border border-[#ffffff0a] bg-[#2b2b2bd5] px-1 py-0.5 shadow-md"
              >
                {withIcon && (
                  <IconComponent className="mx-auto h-6 w-6 text-[#ffffffc5]" />
                )}
              </button>
            </div>
          </div>
        </div>
      );
    case 'desktop':
      return (
        <div className="relative mt-1 flex w-full gap-x-2">
          <div className="relative flex h-10 w-full   rounded-[24px]">
            {isFocused && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <IoSearchOutline className="h-5 w-5 text-gray-400" />
              </div>
            )}
            {searchResults.length > 0 && isFocused && (
              <div className="absolute top-full mt-2 w-full max-w-2xl rounded-lg  bg-[#2b2b2b] shadow-lg">
                <ul className="py-4">
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      className="flex cursor-pointer gap-x-2 px-4 py-2 font-semibold text-[#f1f1f1] hover:bg-[#999999b2]  "
                    >
                      <IoSearchOutline className="my-auto mr-3 h-5 w-5 text-[#f1f1f1]" />
                      {result.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <input
              type="text"
              ref={ref}
              placeholder="Telusuri"
              value={searchText}
              onFocus={onSearchTextFocus}
              onBlur={onSearchTextBlur}
              onChange={(event) => onSearchTextChange(event.target.value)}
              className={clsx(
                `w-full   max-w-lg rounded-l-[24px] border border-[#ffffff21] bg-[#121212] py-1 pl-12 pr-4 outline-none focus:border-[#3ea6ff] `,
                isFocused ? ' pl-12' : 'pl-4',
                className,
              )}
              {...rest}
            />

            {searchText.length > 0 && (
              <button
                type="button"
                className="absolute right-[67px] rounded-full px-2.5 py-2 hover:bg-[#ffffffc5]"
              >
                <TfiClose className="my-0.5 h-5 w-5" />
              </button>
            )}

            <button
              type="button"
              className="w-20 rounded-r-[24px] border border-[#ffffff0a] bg-[#ffffff23] px-2 py-0.5 shadow-md"
            >
              {withIcon && (
                <IconComponent className="mx-auto h-6 w-6 text-[#ffffffc5]" />
              )}
            </button>
          </div>
        </div>
      );
  }
});

Search.displayName = 'Search';

export default Search;
