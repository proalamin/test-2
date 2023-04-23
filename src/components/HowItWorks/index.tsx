import React from "react";
import { HowItWorksInterface } from "@/types";
import { Card } from "@/components/Comman/Card";

export const HowItWorks: React.FC<HowItWorksInterface> = (props) => {
    const { image, title, subtitle, description, items } = props;
    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="md:bg-[length:100%_100%] bg-cover bg-center bg-no-repeat bg-top md:px-[140px] px-[50px] pt-[100px] md:pb-[180px] pb-[100px]"
    >
        <div className="max-w-[1380px] mx-auto">
            <div className="max-w-[395px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                    {title}
                </h6>
                <h2 className="sm:text-[35px] text-[30px] sm:leading-[44px] leading-[35px] underline underline-offset-[8px] tracking-[-0.44px] font-semibold pb-[9px] text-primaryAccent">
                    {subtitle}
                </h2>
                <p className="md:text-[19px] text-[14px] leading-[30px] tracking-[-0.26px] text-primaryAccent font-medium">
                    {description}
                </p>
            </div>
            <div className="flex md:flex-row flex-col md:gap-[60px] gap-[64px]">
                {
                    items?.map((item, index) => {
                        return <div key={index} className="flex-1 md:max-w-[300px]">
                            <Card icon={item.icon} position={index + 1} title={item.title}
                                  description={item.description} type="how-it-works"/>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}