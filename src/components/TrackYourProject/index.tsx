import React from "react";
import { TrackYourProjectInterface } from "@/types";
import { Card } from "@/components/Comman/Card";

export const TrackYourProject: React.FC<TrackYourProjectInterface> = (props) => {
    const { title, subtitle, description, items } = props;
    return <div
        className="min-h-[100vh] px-[140px] pt-[77px] pb-[140px]"
    >
        <div className="max-w-[1380px] mx-auto">
            <div className="max-w-[471px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primary">
                    {title}
                </h6>
                <h2 className="text-[35px] leading-[44px] tracking-[-0.44px] underline underline-offset-[8px] font-semibold pb-[9px] text-primary">
                    {subtitle}
                </h2>
                <p className="text-[19px] leading-[30px] tracking-[-0.26px] text-[#101D2C] font-medium">
                    {description}
                </p>
            </div>
            <div className="grid grid-cols-3 gap-[60px]">
                {
                    items?.map((item, index) => {
                        return <div key={index} className="max-w-[300px]">
                            <Card
                                icon={item.icon}
                                position={item.position}
                                title={item.title}
                                description={item.description}
                                type="track-your-project"
                            />
                        </div>
                    })
                }

            </div>
        </div>
    </div>
}