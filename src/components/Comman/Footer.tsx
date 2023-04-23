import React from "react";
import { FooterInterface } from "@/types";
import { Img } from "@/utils/Img";

export const Footer: React.FC<FooterInterface> = (props) => {
    const { links, legal, logo, copyRight, countries } = props;
    return <div>
        <div
            className="px-[140px] pb-[132px]"
            style={{
                borderBottom: "0.4px solid rgba(75, 90, 105, 0.4)"
            }}
        >
            <div className="max-w-[1260px] mx-auto">
                <div className="grid grid-cols-6">
                    <div>
                        <h5
                            className="text-[16px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {links.quick.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.quick.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block text-[18px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h5
                            className="text-[16px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {links.products.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.products.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block text-[18px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h5
                            className="text-[16px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {links.resources.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.resources.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block text-[18px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h5
                            className="text-[16px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {links.services.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.services.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block text-[18px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col">
                        <h5
                            className="text-[16px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {legal.title}
                        </h5>
                        <p
                            className="text-[18px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                        >
                            {legal.address}
                        </p>
                        <a
                            href={`mailto:${legal.email}`}
                            className="d-block text-[18px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                        >
                            {legal.email}
                        </a>
                        <a
                            href={`tel:${legal.phone_link}`}
                            className="d-block text-[18px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                        >
                            {legal.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-[140px] py-[34px]">
            <div className="max-w-[1260px] mx-auto flex items-center">
                <div>
                    <Img src={logo || ""} alt="footer-logo" className="w-[211px] h-[26px]"/>
                </div>
                <div className="flex-1">
                    <p
                        className="text-[15px] leading-[15px] tracking-[-0.2px] font-normal text-[#101D2C] text-center"
                    >
                        {copyRight}
                    </p>
                </div>
                <div>
                    <div className="flex gap-[5px] items-center">
                        {
                            countries?.map((item, index) => {
                                return <div key={index}>
                                    <Img src={item.icon} alt={item.name} className="w-[23px] h-[23px] rounded-full"/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}