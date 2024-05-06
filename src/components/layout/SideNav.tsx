import React from 'react';
import { usePathname } from 'next/navigation';

// data
import {
  dataHome,
  userNavData,
  subcriptionDataNav,
  otherData,
  itemYTData,
  settingData,
} from './partials/navData';

// component with icon
import Menu from './partials/Menu';
import MenuMobile from './partials/MenuMobile';
import MenuImage from './partials/MenuImage';
import { Button } from '../element';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';

const SideNav = () => {
  const path = usePathname();
  const [showAll, setShowAll] = React.useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const hideContent = subcriptionDataNav.length - 5;

  return (
    <div className="sticky   mt-8 ">
      {/* side nav desktop */}
      <div className=" scrollbar-width-thin fixed z-30 h-screen  w-60  overflow-y-hidden bg-white  py-5 hover:overflow-y-scroll   dark:bg-[#0f0f0f]">
        <div className="flex w-full flex-col">
          <div className="my-2 border-b-[0.5px] border-[#f1f1f133] px-3.5 py-3">
            {dataHome.map((i, index) => (
              <React.Fragment key={index}>
                {i.url && (
                  <Menu path={path} Icon={i.icon} title={i.title} url={i.url} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="my-2 border-b-[0.5px] border-[#f1f1f133] px-3.5 py-3">
            {userNavData.map((i, index) => (
              <React.Fragment key={index}>
                {i.url && (
                  <Menu path={path} Icon={i.icon} title={i.title} url={i.url} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="my-2 border-b-[0.5px] border-[#f1f1f133] px-3.5 pb-3 pt-0.5">
            <p className="mb-2 text-base font-semibold capitalize text-[#f1f1f1]">
              subscription
            </p>
            <>
              {subcriptionDataNav
                ?.slice(0, 5)
                .map((i, index) => (
                  <React.Fragment key={index}>
                    {i.url && (
                      <MenuImage
                        path={path}
                        icon_image={i.image}
                        title={i.title}
                        url={i.url}
                        active={i.is_active}
                      />
                    )}
                  </React.Fragment>
                ))}
            </>
            {!showAll && subcriptionDataNav?.length > 5 && (
              <Button
                onClick={toggleShowAll}
                withIcon
                IconComponent={IoChevronDownOutline}
                className="mt-2 w-full text-sm text-white hover:bg-[#f1f1f133]"
              >
                <p className="text-sm text-white ">
                  Tampilkan {hideContent} Lagi
                </p>
              </Button>
            )}
            {showAll && (
              <>
                {subcriptionDataNav
                  ?.slice(5)
                  .map((i, index) => (
                    <React.Fragment key={index}>
                      {i.url && (
                        <MenuImage
                          path={path}
                          icon_image={i.image}
                          title={i.title}
                          url={i.url}
                          active={i.is_active}
                        />
                      )}
                    </React.Fragment>
                  ))}
                <Button
                  onClick={toggleShowAll}
                  withIcon
                  IconComponent={IoChevronUpOutline}
                  className="w-full text-sm text-white"
                >
                  <p className="text-sm text-white ">Lebih Sedikit</p>
                </Button>
              </>
            )}
          </div>
          <div className="my-2 border-b-[0.5px] border-[#f1f1f133] px-3.5 pb-3 pt-0.5">
            <p className="mb-2 text-base font-semibold capitalize text-[#f1f1f1]">
              eksplorasi
            </p>
            {otherData.map((i, index) => (
              <React.Fragment key={index}>
                {i.url && (
                  <Menu path={path} Icon={i.icon} title={i.title} url={i.url} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="my-2 border-b-[0.5px] border-[#f1f1f133] px-3.5 pb-3 pt-0.5">
            <p className="mb-2 text-base font-semibold capitalize text-[#f1f1f1]">
              lainya dari YouTube
            </p>
            {itemYTData.map((i, index) => (
              <React.Fragment key={index}>
                {i.url && (
                  <Menu
                    path={path}
                    Icon={i.icon}
                    title={i.title}
                    url={i.url}
                    color="dark:text-white"
                  />
                )}
              </React.Fragment>
            ))}
          </div>{' '}
          <div className="my-2 border-b-[0.5px] border-[#f1f1f133] px-3.5 pb-3 pt-0.5">
            {settingData.map((i, index) => (
              <React.Fragment key={index}>
                {i.url && (
                  <Menu path={path} Icon={i.icon} title={i.title} url={i.url} />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-col items-stretch gap-3 p-3 text-xs dark:text-white">
            <p>ini hanya untuk bahan belajar saja</p>
            <p>@copyright {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
      {/* side nav mobile */}
      <div className=" w-18 z-2- fixed h-screen bg-white  px-1 py-3  dark:bg-[#0f0f0f]">
        <div className="flex flex-col">
          <div className="my-2  py-3">
            {dataHome.map((i, index) => (
              <React.Fragment key={index}>
                {i.url && (
                  <MenuMobile
                    path={path}
                    Icon={i.icon}
                    title={i.title}
                    url={i.url}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
