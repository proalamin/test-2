import React, { useState } from "react";
import { Img } from "@/utils/Img";
import Link from "next/link";

interface SideNavInterface {
    links: any[];
}

export const SideNav: React.FC<SideNavInterface> = (props) => {
    const { links } = props;
    const [show, setShow] = useState<Boolean>(true);

    return <>
        <div className="h-[120px] flex items-center justify-center p-[20px] border-b-2">
            <Img
                src="/images/logo_dark.svg"
                alt="Logo"
                className="w-full"
            />
        </div>
        <div className="flex-1 overflow-y-auto  p-[10px]" style={{ maxHeight: 'calc(100vh - 120px)' }}>
            {
                links.map((link, index) => {
                    return <div key={index} className="w-full">
                        {
                            link.subLinks.length !== 0 ?
                                <div>
                                    <div
                                        className="flex items-center gap-[10x] p-[12px] cursor-pointer"
                                        onClick={() => setShow(!show)}
                                    >
                                        <p className={`flex-1 font-medium text-[13px] tracking-[1px] ${link?.active ? 'text-[#101D2C]' : 'text-[#707070]'}`}>
                                            {link.label}
                                        </p>
                                        <div>
                                            <Img
                                                src="/images/arrow-down.svg"
                                                alt="Arrow"
                                                className={`w-[20px] h-[20px] transition-all ${show ? 'rotate-180' : 'rotate-0'}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`flex-col pl-[15px] ${show ? 'flex' : 'hidden'}`}>
                                        {
                                            link.subLinks.map((subLink: any, index: number) => {
                                                return <Link key={index} href={subLink.href}>
                                                    <p className={`cursor-pointer font-medium text-[13px] tracking-[1px] p-[12px] ${subLink?.active ? 'text-[#101D2C]' : 'text-[#707070]'}`}>
                                                        {subLink.label}
                                                    </p>
                                                </Link>
                                            })
                                        }
                                    </div>
                                </div> : <Link href={link.href}>
                                    <p className={`cursor-pointer font-medium text-[13px] tracking-[1px] p-[12px] ${link?.active ? 'text-[#101D2C]' : 'text-[#707070]'}`}>
                                        {link.label}
                                    </p>
                                </Link>
                        }
                    </div>
                })
            }
        </div>
    </>
}