import React from "react";
import { HowItWorksInterface } from "@/types";
import { Card } from "@/components/Comman/Card";

export const HowItWorks: React.FC<HowItWorksInterface> = (props) => {
    const { image, title, subtitle, description, items } = props;
    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-[length:100%_100%] bg-center bg-no-repeat px-[140px] pt-[100px] pb-[180px]"
    >
        <div className="max-w-[1380px] mx-auto">
            <div className="max-w-[395px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                    {title}
                </h6>
                <h2 className="text-[35px] leading-[44px] underline underline-offset-[8px] tracking-[-0.44px] font-semibold pb-[9px] text-primaryAccent">
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
                            <Card icon={item.icon} position={index + 1} title={item.title}
                                  description={item.description} type="how-it-works"/>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}