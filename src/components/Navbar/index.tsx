import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'

import { Navlink } from './Navlink'
import { Logo } from '../Logo'

import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import { FaHandshake, FaHome, FaSolarPanel } from 'react-icons/fa'
import classNames from 'classnames'
import { BsFillGearFill } from 'react-icons/bs'


const solutions = [
  {
    name: 'Home',
    href: '#',
    icon: FaHome
  },
  {
    name: 'Afiliados',
    href: '#',
    icon: FaHandshake
  },
  { name: 'Investir em solar', 
    href: '#',
    icon: FaSolarPanel
  },
  {
    name: 'Manutenção',
    href: '#',
    icon: BsFillGearFill
  },
]

export function Navbar() {
  const { asPath } = useRouter()

  return (
    <Popover className="relative">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 lg:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo />
          </div>
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-neutral-800 rounded-md p-2 inline-flex items-center justify-center text-neutral-200 hover:text-sun-500 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sun-500">
              <span className="sr-only">Open menu</span>
              <HiOutlineMenuAlt4 className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <nav className="hidden lg:flex space-x-10">

            <Navlink href="/">Home</Navlink>
            <Navlink href="/#investiment">Investir em solar</Navlink>
            <Navlink href="/#cashback">Cashback</Navlink>
            <Navlink href="/manutencao-de-energia-solar">Manutenções</Navlink>

          </nav>

          <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/calculadora-de-energia-solar">
              <a
                className={classNames('ml-8 whitespace-nowrap inline-flex items-center justify-center px-9 py-[6px] rounded-md shadow-sm text-base font-medium text-neutral-200  border border-sun-500/75 hover:bg-amber-500 hover:text-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors duration-200', {
                  'bg-sun-500' : asPath === "/calculadora-de-energia-solar",
                  'bg-neutral-900' : !(asPath === "/calculadora-de-energia-solar")
                })}
              >
                Simule seu sistema
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div className="rounded-lg shadow-lg bg-neutral-800 divide-y-2 divide-neutral-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-neutral-700 rounded-md p-2 inline-flex items-center justify-center text-neutral-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sun-500">
                    <span className="sr-only">Close menu</span>
                    <MdClose className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-10 mb-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-sun-500" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-neutral-200">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Link href="/calculadora-de-energia-solar">
                <a
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-2xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-amber-500 transition-colors"
                >
                  Simule seu sistema
                </a>
              </Link>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}