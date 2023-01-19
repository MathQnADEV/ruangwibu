/* eslint-disable jsx-a11y/anchor-is-valid */

'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        Welcome Para Wibu
      </h2>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button class="text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-150 bg-gradient-to-r from-cyan-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300 ...">
            <a href="#">
              <img
                src="/menu.svg"
                alt="menu"
                className="w-[24px] h-[24px] object-contain"
              />
            </a>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(active ? 'bg-cyan-300 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Your Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(active ? 'bg-cyan-300 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(active ? 'bg-cyan-300 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

    </div>
  </motion.nav>
);

export default Navbar;
