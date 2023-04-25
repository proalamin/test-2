import React from "react";
import { WhyChooseUsInterface } from "@/types";
import { Img } from "@/utils/Img";

export const WhyChooseUs: React.FC<WhyChooseUsInterface> = (props) => {
    const { title, subtitle, description, items } = props;
    return <div
        className="relative xl:px-[100px] px-[50px] xl:pt-[139px] md:pt-[90px] xl:pb-[141px] md:pb-[90px] bg-[#F5F9FF] why-choose-data-section-wrapper"
    >
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
                    <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                        {title}
                    </h6>
                    <h2 className="xl:text-[35px] text-[30px] sm:leading-[44px] leading-[35px] tracking-[-0.44px] font-semibold pb-[19px] text-primaryAccent">
                        {subtitle}
                    </h2>
                    <p className="xl:text-[19px] text-[14px] leading-[30px] tracking-[-0.26px] text-primaryAccent font-medium">
                        {description}
                    </p>
                </div>
                <div className="flex-1">
                    <div className="why-choose-expert-grid-1 grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-none xl:gap-[30px] md:gap-[20px] gap-[50px] max-w-[775px] xl:ml-[220px] md:ml-[125px] pb-[33px]">
                        <div className="max-w-[299px] flex flex-col md:items-start items-center">
                            <div
                                className="md:m-0 mb-[16px] sm:py-[42px] py-[32px] sm:px-[39px] px-[29px] sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] rounded-full flex items-center justify-center"
                                style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                            >
                                <Img src={items[0].icon} alt={items[0].title} className="w-auto h-auto"/>
                            </div>
                            <div className="md:pl-[35px]">
                                <h3 className="xl:text-[20px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                    {items[0].title}
                                </h3>
                                <p className="xl:text-[17px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center ">
                                    {items[0].description}
                                </p>
                            </div>
                        </div>
                        <div className="max-w-[377px] flex flex-col md:items-start items-center">
                            <div
                                className="md:m-0 mb-[16px] sm:py-[42px] py-[32px] sm:px-[39px] px-[29px] sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] rounded-full flex items-center justify-center"
                                style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                            >
                                <Img src={items[1].icon} alt={items[1].title} className="w-auto h-auto"/>
                            </div>
                            <div className="md:pl-[35px]">
                                <h3 className="xl:text-[20px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                    {items[1].title}
                                </h3>
                                <p className="xl:text-[17px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center">
                                    {items[1].description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="why-choose-expert-grid-2 grid sm:grid-cols-3 grid-rows-3 sm:grid-rows-none xl:gap-[69px] md:gap-[30px] gap-[50px] max-w-[1091px] ml-auto">
                        <div className="max-w-[303px] flex flex-col md:items-start items-center">
                            <div
                                className="md:m-0 mb-[16px] sm:py-[42px] py-[32px] sm:px-[39px] px-[29px] sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] rounded-full flex items-center justify-center"
                                style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                            >
                                <Img src={items[2].icon} alt={items[2].title} className="w-auto h-auto"/>
                            </div>
                            <div className="md:pl-[35px]">
                                <h3 className="xl:text-[20px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                    {items[2].title}
                                </h3>
                                <p className="xl:text-[17px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center">
                                    {items[2].description}
                                </p>
                            </div>
                        </div>
                        <div className="max-w-[354px] flex flex-col md:items-start items-center">
                            <div
                                className="md:m-0 mb-[16px] sm:py-[42px] py-[32px] sm:px-[39px] px-[29px] sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] rounded-full flex items-center justify-center"
                                style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                            >
                                <Img src={items[3].icon} alt={items[3].title} className="w-auto h-auto"/>
                            </div>
                            <div className="md:pl-[35px]">
                                <h3 className="xl:text-[20px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                    {items[3].title}
                                </h3>
                                <p className="xl:text-[17px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center">
                                    {items[3].description}
                                </p>
                            </div>
                        </div>
                        <div className="max-w-[299px] flex flex-col md:items-start items-center">
                            <div
                                className="md:m-0 mb-[16px] sm:py-[42px] py-[32px] sm:px-[39px] px-[29px] sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] rounded-full flex items-center justify-center"
                                style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                            >
                                <Img src={items[4].icon} alt={items[4].title} className="w-auto h-auto"/>
                            </div>
                            <div className="md:pl-[35px]">
                                <h3 className="xl:text-[20px] text-[16px] xl:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                    {items[4].title}
                                </h3>
                                <p className="xl:text-[17px] text-[14px] xl:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center">
                                    {items[4].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}