import React from "react";
import { WhyChooseUsInterface } from "@/types";
import { Img } from "@/utils/Img";

export const WhyChooseUs: React.FC<WhyChooseUsInterface> = (props) => {
    const { image, title, subtitle, description, items } = props;
    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-[length:100%_100%] bg-center bg-no-repeat min-h-[100vh] px-[100px] py-[100px]"
    >
        <div className="max-w-[1440px] mx-auto">
            <div className="flex">
                <div className="max-w-[320px]">
                    <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                        {title}
                    </h6>
                    <h2 className="text-[35px] leading-[44px] tracking-[-0.44px] font-semibold pb-[19px] text-primaryAccent">
                        {subtitle}
                    </h2>
                    <p className="text-[19px] leading-[30px] tracking-[-0.26px] text-primaryAccent font-medium">
                        {description}
                    </p>
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-2 gap-[30px] max-w-[775px] ml-auto pb-[30px] pl-[20px]">
                        {
                            items?.slice(0, 2)?.map((item, index) => {
                                return <div key={index} className="max-w-[299px]">
                                    <div
                                        className="py-[42px] px-[39px] w-[135px] h-[135px] rounded-full flex items-center justify-center"
                                        style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                                    >
                                        <Img src={item.icon} alt={item.title} className="w-auto h-auto"/>
                                    </div>
                                    <div className="pl-[35px]">
                                        <h3 className="text-[20px] leading-[24px] tracking-[-0.06px] text-[#101D2C] font-semibold pb-[10px]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[17px] leading-[27px] font-light text-[#101D2C]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="grid grid-cols-3 gap-[30px] max-w-[1021px] ml-auto">
                        {
                            items?.slice(2, 5)?.map((item, index) => {
                                return <div key={index} className="max-w-[299px]">
                                    <div
                                        className="py-[42px] px-[39px] w-[135px] h-[135px] rounded-full flex items-center justify-center"
                                        style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
                                    >
                                        <Img src={item.icon} alt={item.title} className="w-auto h-auto"/>
                                    </div>
                                    <div className="pl-[35px]">
                                        <h3 className="text-[20px] leading-[24px] tracking-[-0.06px] text-[#101D2C] font-semibold pb-[10px]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[17px] leading-[27px] font-light text-[#101D2C]">
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