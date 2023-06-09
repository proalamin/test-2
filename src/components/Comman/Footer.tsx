import React from "react";
import { FooterInterface } from "@/types";
import { Img } from "@/utils/Img";
import data from "@/data/config.json";

export const Footer: React.FC<FooterInterface> = (props) => {
    const { links, legal, copyRight, countries } = props;
    const socialMediaLinks = [
        {
            icon: legal.social_media[0].icon,
            href: data.socialMedia.facebook
        },
        {
            icon: legal.social_media[1].icon,
            href: data.socialMedia.instagram
        },
        {
            icon: legal.social_media[2].icon,
            href: data.socialMedia.linkedin
        },
        {
            icon: legal.social_media[3].icon,
            href: data.socialMedia.twitter
        },
        {
            icon: legal.social_media[4].icon,
            href: data.socialMedia.youtube
        },
        {
            icon: legal.social_media[5].icon,
            href: data.socialMedia.pintrest
        }
    ]
    return <div>
        <div
            className="xl:px-[140px] sm:px-[50px] px-[30px] md:pb-[132px] pb-[60px]"
            style={{
                borderBottom: "0.4px solid rgba(75, 90, 105, 0.4)"
            }}
        >
            <div className="max-w-[1263px] mx-auto">
                <div className="grid md:grid-cols-6 grid-cols-2 xxl:gap-[60px] xl:gap-[50px] md:gap-[40px]">
                    <div className="md:pb-0 pb-[30px]">
                        <h5
                            className="xxl:text-[16px] xl:text-[15px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold md:pb-[26px] pb-[23px] text-[#101D2C]"
                        >
                            {links.quick.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.quick.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block xxl:text-[17px] xl:text-[15px] text-[14px] md:leading-[36px] leading-[30px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="md:pb-0 pb-[30px]">
                        <h5
                            className="xl:text-[16px] xl:text-[15px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold md:pb-[26px] pb-[23px] text-[#101D2C]"
                        >
                            {links.products.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.products.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block xxl:text-[17px] xl:text-[15px] text-[14px] md:leading-[36px] leading-[30px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="md:pb-0 pb-[30px]">
                        <h5
                            className="xl:text-[16px] xl:text-[15px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold md:pb-[26px] pb-[23px] text-[#101D2C]"
                        >
                            {links.resources.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.resources.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block xxl:text-[17px] xl:text-[15px] text-[14px] md:leading-[36px] leading-[30px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="md:pb-0 pb-[30px]">
                        <h5
                            className="xl:text-[16px] xl:text-[15px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold md:pb-[26px] pb-[23px] text-[#101D2C]"
                        >
                            {links.services.title}
                        </h5>
                        <div className="flex flex-col">
                            {
                                links.services.links?.map((item, index) => {
                                    return <a
                                        key={index}
                                        href={item.href || "#"}
                                        className="d-block xxl:text-[17px] xl:text-[15px] text-[14px] md:leading-[36px] leading-[30px] tracking-[-0.32px] font-light text-[#101D2C]"
                                    >
                                        {item.title}
                                    </a>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col">
                        <h5
                            className="xxl:text-[16px] xl:text-[15px] text-[14px] leading-[27px] tracking-[-0.05px] font-semibold md:pb-[26px] pb-[23px] text-[#101D2C]"
                        >
                            {legal.title}
                        </h5>
                        <div className="flex">
                            <Img
                                src="/images/icons/map.svg"
                                alt="Address Icon"
                                className="w-[14px] mr-[8px]"
                            />
                            <p
                                className="xxl:text-[18px] xl:text-[15px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                            >
                                {legal.address}
                            </p>
                        </div>

                        <div className="flex">
                            <Img
                                src="/images/icons/mail.svg"
                                alt="Address Icon"
                                className="w-[14px] mr-[8px]"
                            />
                            <a
                                href={`mailto:${legal.email}`}
                                className="d-block xxl:text-[18px] xl:text-[15px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                            >
                                {legal.email}
                            </a>
                        </div>
                        <div className="flex">
                            <Img
                                src="/images/icons/phone.svg"
                                alt="Address Icon"
                                className="w-[14px] mr-[8px]"
                            />
                            <a
                                href={`tel:${legal.phone}`}
                                className="d-block xxl:text-[18px] xl:text-[15px] text-[14px] leading-[36px] tracking-[-0.32px] font-light text-[#101D2C]"
                            >
                                {legal.phone}
                            </a>
                        </div>
                        <div className="mt-[20px]">
                            <div className="flex gap-[10px] items-center">
                                {
                                    socialMediaLinks?.map((item, index) => {
                                        return <div key={index}>
                                            <Img src={item.icon} alt="Social Icon"
                                                 className="w-[23px] h-[23px]"/>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="xl:px-[140px] md:py-[34px] p-[30px]">
            <div className="max-w-[1260px] mx-auto flex md:flex-row flex-col items-center">
                <div>
                    <Img src={data.logos.dark} alt="footer-logo" className="md:w-[211px] w-[180px] h-[26px]"/>
                </div>
                <div className="flex-1 md:m-0 mt-[29px] mb-[39px]">
                    <p
                        className="xxl:text-[15px] xl:text-[13px] text-[12px] leading-[15px] tracking-[-0.2px] font-normal text-[#101D2C] text-center"
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