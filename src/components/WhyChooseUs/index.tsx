import React from "react";
import { WhyChooseUsInterface } from "@/types";
import { WhyChooseIcon } from "@/utils/WhyChooseIcon";

export const WhyChooseUs: React.FC<WhyChooseUsInterface> = (props) => {
    const { title, subtitle, description, items } = props;
    return <div
        className="relative bg-[#F5F9FF] why-choose-data-section-wrapper"
    >
        <div
            className="relative max-w-[2240px] mx-auto xl:px-[100px] sm:px-[50px] px-[30px] xl:pt-[139px] pt-[90px] xl:pb-[141px] pb-[90px]">
            <div className="why-choose-data-overlay">
                <svg className="svg">
                    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                        <path
                            d="M0,0 H1 C1,0,0.87,0.174,0.775,0.317 C0.684,0.455,0.585,0.675,0.5,0.76 C0.288,0.972,0,1,0,1 V0"></path>
                    </clipPath>
                </svg>
            </div>
            <div className="max-w-[1385px] mx-auto why-choose-data-section relative">
                <div className="flex md:flex-row flex-col">
                    <div className="xl:max-w-[320px] md:max-w-[290px] md:m-0 mb-[50px]">
                        <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent sm:text-left text-center">
                            {title}
                        </h6>
                        <h2 className="xxl:text-[35px] xl:text-[30px] text-[24px] sm:leading-[44px] leading-[35px] tracking-[-0.44px] font-semibold pb-[19px] text-primaryAccent sm:text-left text-center">
                            {subtitle}
                        </h2>
                        <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] tracking-[-0.26px] text-primaryAccent font-medium sm:text-left text-center">
                            {description}
                        </p>
                    </div>
                    <div className="flex-1">
                        <div
                            className="why-choose-expert-grid-1 grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-none xl:gap-[30px] md:gap-[20px] gap-[50px] max-w-[775px] xl:ml-[220px] md:ml-[125px] pb-[33px]">
                            <div className="sm:max-w-[299px] w-full flex flex-col md:items-start items-center">
                                <WhyChooseIcon icon={items[0].icon} title={items[0].title}/>
                                <div className="md:pl-[35px]">
                                    <h3 className="xxl:text-[20px] xl:text-[18px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                        {items[0].title}
                                    </h3>
                                    <p className="xxl:text-[17px] xl:text-[15px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center ">
                                        {items[0].description}
                                    </p>
                                </div>
                            </div>
                            <div className="sm:max-w-[377px] w-full flex flex-col md:items-start items-center">
                                <WhyChooseIcon icon={items[1].icon} title={items[1].title}/>
                                <div className="md:pl-[35px]">
                                    <h3 className="xxl:text-[20px] xl:text-[18px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                        {items[1].title}
                                    </h3>
                                    <p className="xxl:text-[17px] xl:text-[15px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center ">
                                        {items[1].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="why-choose-expert-grid-2 grid sm:grid-cols-3 grid-rows-3 sm:grid-rows-none xl:gap-[69px] md:gap-[30px] gap-[50px] max-w-[1091px] ml-auto">
                            <div className="sm:max-w-[303px] w-full flex flex-col md:items-start items-center">
                                <WhyChooseIcon icon={items[2].icon} title={items[2].title}/>
                                <div className="md:pl-[35px]">
                                    <h3 className="xxl:text-[20px] xl:text-[18px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                        {items[2].title}
                                    </h3>
                                    <p className="xxl:text-[17px] xl:text-[15px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center ">
                                        {items[2].description}
                                    </p>
                                </div>
                            </div>
                            <div className="sm:max-w-[354px] w-full flex flex-col md:items-start items-center">
                                <WhyChooseIcon icon={items[3].icon} title={items[3].title}/>
                                <div className="md:pl-[35px]">
                                    <h3 className="xxl:text-[20px] xl:text-[18px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                        {items[3].title}
                                    </h3>
                                    <p className="xxl:text-[17px] xl:text-[15px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center ">
                                        {items[3].description}
                                    </p>
                                </div>
                            </div>
                            <div className="sm:max-w-[299px] w-full flex flex-col md:items-start items-center">
                                <WhyChooseIcon icon={items[4].icon} title={items[4].title}/>
                                <div className="md:pl-[35px]">
                                    <h3 className="xxl:text-[20px] xl:text-[18px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                        {items[4].title}
                                    </h3>
                                    <p className="xxl:text-[17px] xl:text-[15px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center ">
                                        {items[4].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}