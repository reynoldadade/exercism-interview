import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DropDownWide from "../images/dropdownwide.svg";

export default function SortSelector() {
  const sortFormat = [
    { name: "Sort By Most Recent", value: "newest_first " },
    { name: "Sort By Oldest", value: "oldest_first " },
  ];
  return (
    <Menu
      as="div"
      className="relative inline-block text-left w-[348px] h-[48px] mr-[24px]"
    >
      <Menu.Button className="inline-flex justify-between w-full bg-background border rounded h-[48px] items-center py-[13px] pl-[21px] text-light-secondary">
        Sort By Most Recent
        <img src={DropDownWide} alt="dropdown" className="mr-[21.75px]" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {/*loop through sortFormat array and create a menu item for each*/}
            {sortFormat.map((sort) => (
              <Menu.Item key={sort.slug}>
                <button>{sort.name}</button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
