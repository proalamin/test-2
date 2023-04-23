import React from "react";
import { FooterInterface } from "@/types";
import { Img } from "@/utils/Img";

export const Footer: React.FC<FooterInterface> = (props) => {
    const { links, legal, logo, copyRight, countries } = props;
    return <div>
        <div
            className="md:px-[140px] px-[50px] md:pb-[132px] pb-[60px]"
            style={{
                borderBottom: "0.4px solid rgba(75, 90, 105, 0.4)"
            }}
        >
            <div className="max-w-[1260px] mx-auto">
                <div className="grid md:grid-cols-6 grid-cols-2">
                    <div className="md:pb-0 pb-[50px]">
                        <h5
                            className="md:text-[16px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {links.quick.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.quick.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block md:text-[18px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="md:pb-0 pb-[50px]">
                        <h5
                            className="md:text-[16px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {links.products.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.products.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block md:text-[18px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="md:pb-0 pb-[50px]">
                        <h5
                            className="md:text-[16px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {links.resources.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.resources.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block md:text-[18px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="md:pb-0 pb-[50px]">
                        <h5
                            className="md:text-[16px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {links.services.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.services.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block md:text-[18px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col">
                        <h5
                            className="md:text-[16px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold pb-[26px] text-[#101D2C]"
                        >
                            {legal.title}
                        </h5>
                        <p
                            className="md:text-[18px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                        >
                            {legal.address}
                        </p>
                        <a
                            href={`mailto:${legal.email}`}
                            className="d-block md:text-[18px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                        >
                            {legal.email}
                        </a>
                        <a
                            href={`tel:${legal.phone_link}`}
                            className="d-block md:text-[18px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                        >
                            {legal.phone}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:px-[140px] md:py-[34px] p-[30px]">
            <div className="max-w-[1260px] mx-auto flex md:flex-row flex-col items-center">
                <div>
                    <Img src={logo || ""} alt="footer-logo" className="md:w-[211px] w-[180px] h-[26px]"/>
                </div>
                <div className="flex-1 md:m-0 mt-[29px] mb-[39px]">
                    <p
                        className="md:text-[15px] text-[12px] leading-[15px] tracking-[-0.2px] font-normal text-[#101D2C] text-center"
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