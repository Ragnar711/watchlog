"use client";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Movies", href: "/movies" },
    { name: "TV Shows", href: "/tv" },
    { name: "Anime", href: "/anime" },
    { name: "Stats", href: "/stats" },
];

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = () => {
        signOut();
        router.push("/");
    };

    return (
        <header className="w-full z-50 bg-gray-900 bg-opacity-40 backdrop-blur">
            <nav
                className="mx-auto sticky top-0 flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={
                                    isActive
                                        ? "px-3 py-2 rounded-md text-sm font-medium  bg-gray-700 text-white block h-full"
                                        : "px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white block h-full"
                                }
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white block h-full"
                        onClick={() => handleLogout()}
                    >
                        Log out <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-gray-900 bg-opacity-40 backdrop-blur px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navLinks.map((link) => {
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700 hover:text-white block h-full"
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="py-6">
                                <button
                                    className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700 hover:text-white block h-full"
                                    onClick={() => handleLogout()}
                                >
                                    Log out
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};
