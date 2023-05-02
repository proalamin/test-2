import React from 'react';
import { SideNav } from "@/utils/Admin/SideNav";
import { AdminLinksInterface } from "@/types";
import Head from "next/head";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

interface PrivateLayoutInterface {
    title: string;
    children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutInterface> = ({ title, children }) => {
    const links: AdminLinksInterface[] = [
        {
            label: 'Dashboard',
            href: '/admin',
            active: false,
            subLinks: []
        },
        {
            label: 'Home Page',
            href: "",
            active: false,
            subLinks: [
                {
                    label: 'SEO',
                    href: '/admin/home/seo',
                    active: false
                },
                {
                    label: 'Banner',
                    href: '/admin/home/banner',
                    active: false
                },
                {
                    label: 'About',
                    href: '/admin/home/about',
                    active: false
                },
                {
                    label: 'Why Us',
                    href: '/admin/home/whyUs',
                    active: false
                },
                {
                    label: 'How It Works',
                    href: '/admin/home/howItWorks',
                    active: false
                },
                {
                    label: 'Track Your Project',
                    href: '/admin/home/trackYourProject',
                    active: false
                },
                {
                    label: 'Stay On Top',
                    href: '/admin/home/stayOnTop',
                    active: false
                },
                {
                    label: 'Testimonials',
                    href: '/admin/home/testimonial',
                    active: false
                },
                {
                    label: 'Contact Us',
                    href: '/admin/home/contactUs',
                    active: false
                },
                {
                    label: 'Footer',
                    href: '/admin/home/footer',
                    active: false
                }
            ]
        },
        {
            label: 'Clients',
            href: '/admin/clients',
            active: false,
            subLinks: []
        },
        {
            label: 'Awesome Numbers',
            href: '/admin/awesomeNumbers',
            active: false,
            subLinks: []
        },
        {
            label: 'Services',
            href: '/admin/services',
            active: false,
            subLinks: []
        },
        {
            label: 'Testimonials',
            href: '/admin/testimonials',
            active: false,
            subLinks: []
        },
        {
            label: 'Config',
            href: '',
            active: false,
            subLinks: [
                // {
                //     label: 'Logos',
                //     href: '/admin/config/logos',
                //     active: false
                // },
                {
                    label: 'Email',
                    href: '/admin/config/email',
                    active: false
                },
                {
                    label: 'Social Media',
                    href: '/admin/config/social',
                    active: false
                }
            ]
        },
    ];
    const { logout } = useAuth();
    const router = useRouter();
    const paths = links.map((p) => (
            {
                ...p,
                active: p.href === router.pathname,
                subLinks: p.subLinks?.map(s => ({ ...s, active: s.href === router.pathname })),
            }
        )
    );
    const { user } = useAuth();


    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="main bg-[#F5F9FF]">
            {
                user ?
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
                    : <div/>
            }
        </div>
    </>
}

export default PrivateLayout;