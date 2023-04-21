import React from "react";
import { HowItWorksInterface } from "@/types";
import { Img } from "@/utils/Img";

export const HowItWorks: React.FC<HowItWorksInterface> = (props) => {
    const { image, title, subtitle, description, items } = props;
    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-[length:100%_100%] bg-center bg-no-repeat px-[140px] pt-[100px] pb-[200px]"
    >
        <div className="max-w-[1380px] mx-auto">
            <div className="max-w-[395px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                    {title}
                </h6>
                <h2 className="text-[35px] leading-[44px] tracking-[-0.44px] font-semibold pb-[9px] text-primaryAccent">
                    {subtitle}
                </h2>
                <p className="text-[19px] leading-[30px] tracking-[-0.26px] text-primaryAccent font-medium">
                    {description}
                </p>
            </div>
            <div className="flex gap-[60px]">
                {
                    items?.map((item, index) => {
                        return <div key={index} className="flex-1 max-w-[300px]">
                            <div className="flex flex-col items-center relative">
                                <div
                                    className="w-[100%] min-h-[166px] rounded-[10px] flex items-center justify-center"
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.021498)',
                                        border: '1px solid rgba(255, 255, 255, 0.0836975)',
                                    }}
                                >
                                    <Img src={item.icon} alt={item.title} className="w-[57px] h-[55px]"/>
                                </div>
                                <div
                                    className="mt-[-25px] flex items-center justify-center rounded-full min-w-[54px] min-h-[54px] text-[23px] leading-[27.84px] tracking-[-0.26px] text-center bg-primary text-primaryAccent font-semibold"
                                >
                                    {index + 1}
                                </div>
                            </div>
                            <h6
                                className="text-[20px] text-center leading-[24px] tracking-[-0.06px] text-primaryAccent font-medium mt-[17px] max-w-[200px] min-h-[48px] mx-auto"
                            >
                                {item.title}
                            </h6>
                            <p className="text-[17px] text-center leading-[27px] tracking-[0.19px] text-primaryAccent font-light mt-[10px]">
                                {item.description}
                            </p>
                        </div>
                    })
                }

            </div>
        </div>
    </div>
}