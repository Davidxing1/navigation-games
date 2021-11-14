import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'
import {
    ArchiveIcon,
    BanIcon,
    BellIcon,
    FlagIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    UserCircleIcon,
    XIcon,
} from '@heroicons/react/outline'


const games=[
    {
        imageUrl:"https://awesomenear.com/img/logo/cryptoempire.jpg",
        name:"CryptoEmpire",
        introduce:"A NFT card game based on real-world crypto markets.",
        url:"https://cryptoempire.games/",
        Tactics:"Tactics",
        CardGame:"CardGame",
        tuite:"fa fa-twitter",
        tuiteurl:"#",
        chrome:"fa fa-chrome",
        chromekurl:"#",
    },
    {
        imageUrl: "https://cdn.discordapp.com/attachments/897398778166906911/899225504396218418/190612_6017.png",
        name:"Crypto Fishing ",
        introduce:"A casual game of fishingA casual game of fishing " ,
        url:"http://playerlink.org",
        Tactics:"Tactics",
        tuite:"fa fa-twitter",
        tuiteurl:"#",
        chrome:"fa fa-chrome",
        chromekurl:"#",

    },{
        imageUrl:"https://awesomenear.com/img/logo/cryptoempire.jpg",
        name:"CryptoEmpire",
        introduce:"A NFT card game based on real-world crypto markets.",
    },
    {
        imageUrl:"https://awesomenear.com/img/logo/cryptoempire.jpg",
        name:"CryptoEmpire",
        introduce:"A NFT card game based on real-world crypto markets.",
    },{
        imageUrl:"https://awesomenear.com/img/logo/cryptoempire.jpg",
        name:"CryptoEmpire",
        introduce:"A NFT card game based on real-world crypto markets.",
    },{
        imageUrl:"https://awesomenear.com/img/logo/cryptoempire.jpg",
        name:"CryptoEmpire",
        introduce:"A NFT card game based on real-world crypto markets.",
    },{
        imageUrl:"https://awesomenear.com/img/logo/cryptoempire.jpg",
        name:"CryptoEmpire",
        introduce:"A NFT card game based on real-world crypto markets.",
    },
]


const user = {
    name: 'HenryLiu',
    email: 'HenryLiu@playerlink.org',
    imageUrl:
      'https://avatars.githubusercontent.com/u/50917820?v=4',
}
const navigation = [
    {
        name: 'Games',
        href: '#',
        children: [
            { name: 'Technical Support', href: '#' },
            { name: 'Sales', href: '#' },
            { name: 'General', href: '#' },
        ],
    },
    { name: 'Submit Games', href: '#', children: [] },
    { name: 'Settings', href: '#', children: [] },
]
const sidebarNavigation = [
    { name: 'Home', href: 'home', icon: InboxIcon, current: true },
    { name: 'Archive', href: 'archive', icon: ArchiveIcon, current: false },
    { name: 'Customers', href: 'customers', icon: UserCircleIcon, current: false },
    { name: 'Flagged', href: 'flagged', icon: FlagIcon, current: false },
    { name: 'Spam', href: 'spam', icon: BanIcon, current: false },
    { name: 'Drafts', href: 'drafts', icon: PencilAltIcon, current: false },

]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
          {/* Top nav*/}
          <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
              {/* Logo area */}
              <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
                  <a
                    href="#"
                    className="flex items-center justify-center h-16 w-16 bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
                  >
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                        alt="Workflow"
                      />
                  </a>
              </div>

              {/* Picker area */}
              {/*<div className="mx-auto md:hidden">*/}
              {/*    <div className="relative">*/}
              {/*        <label htmlFor="inbox-select" className="sr-only">*/}
              {/*            Choose inbox*/}
              {/*        </label>*/}
              {/*        <select*/}
              {/*          id="inbox-select"*/}
              {/*          className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-indigo-600"*/}
              {/*          defaultValue={sidebarNavigation.find((item) => item.current).name}*/}
              {/*        >*/}
              {/*            {sidebarNavigation.map((item) => (*/}
              {/*              <option key={item.name}>{item.name}</option>*/}
              {/*            ))}*/}
              {/*        </select>*/}
              {/*        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">*/}
              {/*            <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}

              {/* Menu button area */}
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 md:hidden">
                  {/* Mobile menu button */}
                  <button
                    type="button"
                    className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  </button>
              </div>

              {/* Desktop nav area */}
              <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
                  <div className="min-w-0 flex-1">
                      <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
                          <label htmlFor="desktop-search" className="sr-only">
                              Search
                          </label>
                          <input
                            id="desktop-search"
                            type="search"
                            placeholder="Search"
                            className="block w-full border-transparent pl-12 placeholder-gray-500 focus:border-transparent sm:text-sm focus:ring-0"
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                              <SearchIcon className="h-5 w-5" aria-hidden="true" />
                          </div>
                      </div>
                  </div>
                  <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
                      <nav aria-label="Global" className="flex space-x-10">
                          <a href="#" className="text-sm font-medium text-gray-900">
                              Submit Game
                          </a>
                          <a href="#" className="text-sm font-medium text-gray-900">
                              Contact us
                          </a>
                          <a href="#" className="text-sm font-medium text-gray-900">
                              Settings
                          </a>
                      </nav>
                      <div className="flex items-center space-x-8">
              <span className="inline-flex">
                <a href="#" className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </span>

                          <Menu as="div" className="relative inline-block text-left">
                              <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                  <span className="sr-only">Open user menu</span>
                                  <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
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
                                  <Menu.Items className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      <div className="py-1">
                                          <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </a>
                                              )}
                                          </Menu.Item>
                                          <Menu.Item>
                                              {({ active }) => (
                                                <a
                                                  href="#"
                                                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Sign Out
                                                </a>
                                              )}
                                          </Menu.Item>
                                      </div>
                                  </Menu.Items>
                              </Transition>
                          </Menu>
                      </div>
                  </div>
              </div>

              {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
              <Transition.Root show={mobileMenuOpen} as={Fragment}>
                  <Dialog as="div" className="fixed inset-0 z-40 md:hidden" onClose={setMobileMenuOpen}>
                      <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                          <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
                      </Transition.Child>

                      <Transition.Child
                        as={Fragment}
                        enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
                        enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
                        enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
                        leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
                        leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
                        leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
                      >
                          <nav
                            className="fixed z-40 inset-0 h-full w-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
                            aria-label="Global"
                          >
                              <div className="h-16 flex items-center justify-between px-4 sm:px-6">
                                  <a href="#">
                                      <img
                                        className="block h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                                        alt="Workflow"
                                      />
                                  </a>
                                  <button
                                    type="button"
                                    className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                      <span className="sr-only">Close main menu</span>
                                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                                  </button>
                              </div>
                              <div className="mt-2 max-w-8xl mx-auto px-4 sm:px-6">
                                  <div className="relative text-gray-400 focus-within:text-gray-500">
                                      <label htmlFor="mobile-search" className="sr-only">
                                          Search all inboxes
                                      </label>
                                      <input
                                        id="mobile-search"
                                        type="search"
                                        placeholder="Search all inboxes"
                                        className="block w-full border-gray-300 rounded-md pl-10 placeholder-gray-500 focus:border-indigo-600 focus:ring-indigo-600"
                                      />
                                      <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                                          <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                      </div>
                                  </div>
                              </div>
                              <div className="max-w-8xl mx-auto py-3 px-2 sm:px-4">
                                  {navigation.map((item) => (
                                    <Fragment key={item.name}>
                                        <a
                                          href={item.href}
                                          className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </a>
                                        {item.children.map((child) => (
                                          <a
                                            key={child.name}
                                            href={child.href}
                                            className="block rounded-md py-2 pl-5 pr-3 text-base font-medium text-gray-500 hover:bg-gray-100"
                                          >
                                              {child.name}
                                          </a>
                                        ))}
                                    </Fragment>
                                  ))}
                              </div>
                              <div className="border-t border-gray-200 pt-4 pb-3">
                                  <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                                      <div className="flex-shrink-0">
                                          <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                      </div>
                                      <div className="ml-3 min-w-0 flex-1">
                                          <div className="text-base font-medium text-gray-800 truncate">{user.name}</div>
                                          <div className="text-sm font-medium text-gray-500 truncate">{user.email}</div>
                                      </div>
                                      <a href="#" className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500">
                                          <span className="sr-only">View notifications</span>
                                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                                      </a>
                                  </div>
                                  <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                                      {userNavigation.map((item) => (
                                        <a
                                          key={item.name}
                                          href={item.href}
                                          className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                      ))}
                                  </div>
                              </div>
                          </nav>
                      </Transition.Child>
                  </Dialog>
              </Transition.Root>
          </header>

          {/* Bottom section */}

          <div className="min-h-0 flex-1 flex overflow-hidden">
              {/* Narrow sidebar*/}
              <nav aria-label="Sidebar" className="hidden md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto
              ">

                  <div className="relative w-20 flex flex-col p-3 space-y-3">
                      {sidebarNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-400 hover:bg-gray-700',
                            'flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg'
                          )}
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                      ))}
                  </div>
              </nav>

              {/* Main area */}
              <main >
                  {/* Primary column */}
                  <section
                    aria-labelledby="primary-heading"
                    className="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
                  >
                      <h1 id="primary-heading" className="sr-only">
                          Home
                      </h1>
                      {/* Your content */}
                      <div className="  overflow-auto ">
                      <div className="flex" >
                      <div className=" m-5 mb-10 md:m-20 md:h-20 md:w-80   ">
                          <h1 className=" flex  text-center text-2xl md:text-3xl font-black ">
                              <div className="fa fa-hand-o-right mr-3"></div>Popular Game
                          </h1>
                      </div>
                  </div>
                      <div className="  grid-cols-2  flex-wrap flex-row	 md:grid grid-cols-3 ">
                          {games.map((game)=>(
                              <div key={game.name} className=" transform duration-700 hover:shadow-2xl hover:-translate-y-3  bg-white ml-5 mr-5 mb-5 rounded-lg md:ml-20 md:mr-20  md:mb-20  "  >
                                  <div className="p-5  relative">
                                      <div className="md:flex ">
                                          <a href={game.url} className="h-12 ">
                                              <img src={game.imageUrl} className="h-12 w-12 rounded-3xl md:mr-9"/>
                                          </a>
                                          <div className="mt-2 md:ml-2 md:mt-0">
                                              <a href={game.url}>
                                                  <h1 className="text-xl font-black">{game.name}</h1>
                                                  <h2 className="mt-3 font-normal text-sm text-gray-600">{game.introduce}</h2></a>
                                              <div className=" font-extrabold mt-3 justify-start flex  gap-x-2 text-sm " >
                                                  <span className=" rounded-md bg-gray-100 " >{game.Tactics}</span>
                                                  <span className=" rounded-md bg-gray-100 " >{game.CardGame}</span>

                                              </div>
                                              <div  className="flex mt-3 ">
                                                  <a className="mr-3"href={game.chromekurl}>
                                                      <div className={game.chrome}></div>
                                                  </a>
                                                  <a className="mr-3" href={game.tuiteurl}>
                                                      <div className={game.tuite}></div>
                                                  </a>

                                              </div>
                                          </div>
                                      </div>


                                  </div>
                              </div>

                          ))}
                      </div>
                      </div>
                  </section>

                  {/* Secondary column (hidden on smaller screens) */}
                  <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
                      <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100">
                          {/* Your content */}

                      </div>
                  </aside>
              </main>
          </div>
      </div>
    )
}
