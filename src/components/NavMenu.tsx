import { NEXT_URL } from "@/utils/all";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import axios from "axios";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Categories, SingleCategory } from "@/types/index";
import upperFirst from "@/utils/upperFirst";

const NavMenu = () => {
  const [link, setLinks] = useState<SingleCategory[]>([]);
  const fetchCatergory = async () => {
    const { data } = await axios.get<Categories>(`${NEXT_URL}/api/catergories`);
    setLinks(data.data);
  };
  useEffect(() => {
    fetchCatergory();
  }, []);
  return (
    <Menu as="div" className="relative  text-left z-50">
      <Menu.Button className="inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500">
        Category{" "}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-4 text-gray-500"
          aria-hidden="true"
        />
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-[#111827] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {link.map((link) => (
              <Menu.Item key={link.id}>
                {({ active }) => (
                  <Link
                    href={`/category/${link.attributes.title}`}
                    className={`${
                      active
                        ? "bg-[#111827] text-white "
                        : " text-gray-900 dark:text-white"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {upperFirst(link.attributes.title)}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavMenu;
