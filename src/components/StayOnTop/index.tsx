import React from "react";
import { StayOnTopInterface } from "@/types";
import { Img } from "@/utils/Img";

export const StayOnTop: React.FC<StayOnTopInterface> = (props) => {
    const { image, title, subtitle, featured_1, featured_2 } = props;

    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-[length:100%_100%] bg-center bg-no-repeat px-[140px] pt-[100px] pb-[180px]"
    >
        <div className="max-w-[1380px] mx-auto">
            <div className="max-w-[395px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                    {title}
                </h6>
                <h2 className="text-[31px] leading-[44px] tracking-[-0.42px] font-semibold text-primaryAccent">
                    {subtitle}
                </h2>
            </div>
            <div className="flex items-center gap-[128px] mb-[48px]">
                <div className="flex-1">
                    <Img src={featured_1.image} alt={featured_1.title} className="w-auto h-auto"/>
                </div>
                <div className="flex-1">
                    <h3
                        className="text-[25px] leading-[35px] tracking-[-0.34px] mb-[21px] font-semibold text-primaryAccent"
                    >
                        {featured_1.title}
                    </h3>
                    <p
                        className="text-[19px] leading-[30px] font-semibold text-primaryAccent"
                    >
                        {featured_1.description}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-[128px]">
                <div className="flex-1">
                    <h3
                        className="text-[25px] leading-[35px] tracking-[-0.34px] mb-[21px] font-semibold text-primaryAccent"
                    >
                        {featured_2.title}
                    </h3>
                    <p
                        className="text-[19px] leading-[30px] font-semibold text-primaryAccent"
                    >
                        {featured_2.description}
                    </p>
                </div>
                <div className="flex-1">
                    <Img src={featured_2.image} alt={featured_2.title} className="w-auto h-auto"/>
                </div>
            </div>
        </div>
    </div>
}