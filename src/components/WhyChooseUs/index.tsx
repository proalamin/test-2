import React from "react";
import { WhyChooseUsInterface } from "@/types";
import { Img } from "@/utils/Img";

export const WhyChooseUs: React.FC<WhyChooseUsInterface> = (props) => {
    const { title, subtitle, description, items } = props;
    return <div
        className="relative md:px-[100px] px-[50px] py-[100px] bg-[#F5F9FF] why-choose-data-section-wrapper"
    >
        <div className="why-choose-data-overlay">
            <svg className="svg">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                    <path
                        d="M0,0 H1 C1,0,0.87,0.174,0.775,0.317 C0.684,0.455,0.585,0.675,0.5,0.76 C0.288,0.972,0,1,0,1 V0"></path>
                </clipPath>
            </svg>
        </div>
        <div className="max-w-[1440px] mx-auto why-choose-data-section relative">
            <div className="flex md:flex-row flex-col">
                <div className="md:max-w-[320px] md:m-0 mb-[50px]">
                    <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                        {title}
                    </h6>
                    <h2 className="sm:text-[35px] text-[30px] sm:leading-[44px] leading-[35px] tracking-[-0.44px] font-semibold pb-[19px] text-primaryAccent">
                        {subtitle}
                    </h2>
                    <p className="md:text-[19px] text-[14px] leading-[30px] tracking-[-0.26px] text-primaryAccent font-medium">
                        {description}
                    </p>
                </div>
                <div className="flex-1">
                    <div
                        className="why-choose-expert-grid-1 grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-none md:gap-[30px] gap-[50px] max-w-[775px] ml-auto pb-[30px] sm:pl-[40px]">
                        {
                            items?.slice(0, 2)?.map((item, index) => {
                                return <div
                                    key={index}
                                    className="max-w-[299px] flex flex-col md:items-start items-center"
                                >
                                    <div
                                        className="md:m-0 mb-[16px] sm:py-[42px] py-[32px] sm:px-[39px] px-[29px] sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] rounded-full flex items-center justify-center"
                                        style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                                    >
                                        <Img src={item.icon} alt={item.title} className="w-auto h-auto"/>
                                    </div>
                                    <div className="md:pl-[35px]">
                                        <h3 className="sm:text-[20px] text-[16px] sm:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                            {item.title}
                                        </h3>
                                        <p className="sm:text-[17px] text-[14px] sm:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center ">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div
                        className="why-choose-expert-grid-2 grid sm:grid-cols-3 grid-rows-3 sm:grid-rows-none md:gap-[30px] gap-[50px] max-w-[1021px] ml-auto">
                        {
                            items?.slice(2, 5)?.map((item, index) => {
                                return <div key={index}
                                            className="max-w-[299px] flex flex-col md:items-start items-center">
                                    <div
                                        className="md:m-0 mb-[16px] sm:py-[42px] py-[32px] sm:px-[39px] px-[29px] sm:w-[135px] w-[100px] sm:h-[135px] h-[100px] rounded-full flex items-center justify-center"
                                        style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                                    >
                                        <Img src={item.icon} alt={item.title} className="w-auto h-auto"/>
                                    </div>
                                    <div className="md:pl-[35px]">
                                        <h3 className="sm:text-[20px] text-[16px] sm:leading-[24px] leading-[20px] tracking-[-0.06px] text-[#101D2C] md:text-left text-center font-semibold pb-[10px]">
                                            {item.title}
                                        </h3>
                                        <p className="sm:text-[17px] text-[14px] sm:leading-[27px] leading-[21px] font-light text-[#101D2C] md:text-left text-center ">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}