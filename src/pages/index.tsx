import React, { useState, useEffect } from 'react';
import { HomePageData } from '@/types/home.types';
import { Card, ConvertDate, NumberToText } from '@/components/element';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';

const Homepage: React.FC = () => {
  const [data, setData] = useState<HomePageData[]>([]);

  useEffect(() => {
    fetch('/api/youtube-show')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div>
      <div className=" mt-24 grid grid-cols-2 gap-x-4 gap-y-8 laptop:grid-cols-3 desktop:grid-cols-4 large:grid-cols-5">
        {data.map((i) => (
          <Card
            className="flex max-w-80 flex-col gap-y-4 rounded-md  p-1.5 focus:border focus:border-[#e9e7e7] focus:bg-[#f1f1f121]"
            key={i.id}
          >
            <Image
              src={i.thumbnailImage}
              alt={i.title}
              height={500}
              width={500}
              className="w-full rounded-xl object-cover hover:rounded-none"
            />
            <div className="flex flex-row gap-x-4">
              <div className="max-w-content">
                <Image
                  src={i.profile_image}
                  alt={i.uploader}
                  height={100}
                  width={100}
                  className="h-fit w-10 rounded-full shadow-sm"
                />
              </div>
              <div className="flex w-full flex-col  text-white">
                <p className="mb-1.5 line-clamp-2 justify-stretch  text-wrap text-[16.5px] font-medium">
                  {i.title}
                </p>
                <p className="text-sm text-[#aaa]">{i.uploader}</p>
                <p className="my-auto flex w-full flex-wrap  text-sm text-[#aaa]">
                  <NumberToText number={i.views} />x ditonton
                  <BsDot className="mt-0.5 h-4 w-4 dark:text-[#aaa]" />
                  <ConvertDate dynamicDate={i.publicationDate} />
                </p>
              </div>
            </div>
          </Card>
        ))}
        <>
          {data.map((i) => (
            <Card
              className="flex max-w-80 flex-col gap-y-4 rounded-md  p-1.5 focus:border focus:border-[#e9e7e7] focus:bg-[#f1f1f121]"
              key={i.id}
            >
              <Image
                src={i.thumbnailImage}
                alt={i.title}
                height={500}
                width={500}
                className="w-full rounded-xl object-cover hover:rounded-none"
              />
              <div className="flex flex-row gap-x-4">
                <div className="max-w-content">
                  <Image
                    src={i.profile_image}
                    alt={i.uploader}
                    height={100}
                    width={100}
                    className="h-fit w-10 rounded-full shadow-sm"
                  />
                </div>
                <div className="flex w-full flex-col  text-white">
                  <p className="mb-1.5 line-clamp-2 justify-stretch  text-wrap text-[16.5px] font-medium">
                    {i.title}
                  </p>
                  <p className="text-sm text-[#aaa]">{i.uploader}</p>
                  <p className="my-auto flex w-full flex-wrap  text-sm text-[#aaa]">
                    <NumberToText number={i.views} />x ditonton
                    <BsDot className="mt-0.5 h-4 w-4 dark:text-[#aaa]" />
                    <ConvertDate dynamicDate={i.publicationDate} />
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </>
      </div>
    </div>
  );
};

export default Homepage;
