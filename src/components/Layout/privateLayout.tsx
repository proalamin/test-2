import React, { useEffect, useState } from 'react';
import { SideNav } from "@/utils/Admin/SideNav";
import { AdminLinksInterface } from "@/types";
import { useRouter } from "next/router";
import Head from "next/head";

const PrivateLayout = ({ title, children }) => {
    const links: AdminLinksInterface[] = [
        {
            label: 'Dashboard',
            href: '/admin',
        },
        {
            label: 'Home Page',
            subLinks: [
                {
                    label: 'Banner',
                    href: '/admin/home/banner',
                },
                {
                    label: 'About',
                    href: '/admin/home/about',
                },
                {
                    label: 'Why Us',
                    href: '/admin/home/whyUs',
                },
                {
                    label: 'How It Works',
                    href: '/admin/home/howItWorks',
                },
                {
                    label: 'Track Your Project',
                    href: '/admin/home/trackYourProject',
                },
                {
                    label: 'Stay On Top',
                    href: '/admin/home/stayOnTop',
                },
                {
                    label: 'Testimonials',
                    href: '/admin/home/testimonial',
                },
                {
                    label: 'Contact Us',
                    href: '/admin/home/contactUs',
                }
            ]
        },
        {
            label: 'Clients',
            href: '/admin/clients',
        },
        {
            label: 'Awesome Numbers',
            href: '/admin/awesomeNumbers',
        },
        {
            label: 'Services',
            href: '/admin/services',
        },
        {
            label: 'Testimonials',
            href: '/admin/testimonials',
        },
    ];
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            setIsLoggedIn(true);
        } else {
            router.push('/login');
        }
    }, []);

    const logout = () => {
        sessionStorage.removeItem('isLoggedIn');
        router.push('/login');
    }

    const paths = links.map((p) => (
            {
                ...p,
                active: p.href === router.pathname,
                subLinks: p.subLinks?.map(s => ({ ...s, active: s.href === router.pathname })),
            }
        )
    );

    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="main bg-[#F5F9FF]">
            <div className="flex  min-h-[100vh]">
                <div className="w-[230px] bg-white border-r-2 flex flex-col">
                    <SideNav links={paths}/>
                </div>
                <div className="flex-1 flex-col">
                    <div className="bg-white flex items-center gap-[20px] p-[20px] border-b-2 h-[56px]">
                        <div className="flex-1 font-semibold tracking-[1px] text-[15px] text-[#022d72]">
                            Admin Panel
                        </div>
                        <div>
                            <a
                                onClick={logout}
                                className="text-[#FF0000] font-semibold text-[14px] cursor-pointer"
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 p-[15px] main-admin-container h-full">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PrivateLayout;