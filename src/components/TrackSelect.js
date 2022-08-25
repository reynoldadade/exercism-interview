import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import ListBadge from "../images/list-badge.svg";
import DropDown from "../images/dropdown.svg";
const TrackSelect = ({ tracks }) => {
  //store tracks in state
  const [trackList, setTrackList] = useState([]);
  // extract name and slug from tracks
  const getSlugName = (tracks) => {
    return tracks?.tracks.map(({ title, slug, icon_url }) => {
      return {
        title,
        slug,
        icon_url,
      };
    });
  };

  useEffect(() => {
    setTrackList(getSlugName(tracks));
  }, [tracks]);

  return (
    <Menu className="relative ml-[26.18px]" as="div">
      <Menu.Button className="inline-flex justify-center items-center">
        <img src={ListBadge} alt="track selection" />
        <img src={DropDown} alt="track selection" className="ml-[14.63px]" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className="absolute left-0  flex flex-col w-[376px] h-[364px] bg-white rounded shadow overflow-y-auto p-2"
          as={"div"}
        >
          {/* loop through trackList and create menu items */}
          {trackList.map((track) => {
            return (
              <Menu.Item key={track.title}>
                {({ active }) => (
                  <div className="h-[58px] flex justify-between hover:bg-dark-default bg-white">
                    <div className="flex items-center h-full">
                      <div className="w-[21px] h-[21px] rounded-full border ml-[24px] mr-[26.19px]"></div>
                      <img
                        src={track.icon_url}
                        alt="track icon"
                        className="h-[42px] w-[37.58px]"
                      />
                      <span className="ml-[18.81px]">{track.title}</span>
                    </div>
                    <div className="h-full items-center flex">
                      <div className="w-[40px] h-[30px] rounded-[100px] border justify-center mr-[24px] flex items-center">
                        <span className="text-[14px] text-light-secondary">
                          10
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default TrackSelect;
