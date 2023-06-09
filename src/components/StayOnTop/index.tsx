import React from "react";
import { StayOnTopInterface } from "@/types";
import { Img } from "@/utils/Img";

export const StayOnTop: React.FC<StayOnTopInterface> = (props) => {
    const { image, title, subtitle, featured_1, featured_2 } = props;

    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-[length:100%_100%] bg-center bg-no-repeat xl:px-[140px] sm:px-[50px] px-[20px] pt-[100px] xl:pb-[180px] pb-[100px]"
    >
        <div className="max-w-[1380px] mx-auto">
            <div className="max-w-[395px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                    {title}
                </h6>
                <h2 className="xxl:text-[35px] xl:text-[30px] text-[24px] leading-[44px] tracking-[-0.42px] font-semibold text-primaryAccent">
                    {subtitle}
                </h2>
            </div>
            <div
                className="flex md:flex-row flex-col md:items-center md:gap-[128px] gap-[35px] md:mb-[48px] mb-[54px] md:text-left text-center">
                <div className="md:flex-1">
                    <Img src={featured_1.image} alt={featured_1.title} className="w-auto h-auto"/>
                </div>
                <div className="md:flex-1">
                    <h3
                        className="xxl:text-[25px] xl:text-[23px] text-[20px] xl:leading-[35px] leading-[27px] tracking-[-0.34px] mb-[21px] font-semibold text-primaryAccent"
                    >
                        {featured_1.title}
                    </h3>
                    <p
                        className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] font-light text-primaryAccent"
                    >
                        {featured_1.description}
                    </p>
                </div>
            </div>
            <div
                className="flex md:flex-row flex-col md:items-center md:gap-[128px] gap-[35px] md:text-left text-center">
                <div className="flex-1 md:order-0 order-1">
                    <h3
                        className="xxl:text-[25px] xl:text-[23px] text-[20px] xl:leading-[35px] leading-[27px] tracking-[-0.34px] mb-[21px] font-semibold text-primaryAccent"
                    >
                        {featured_2.title}
                    </h3>
                    <p
                        className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] font-light text-primaryAccent"
                    >
                        {featured_2.description}
                    </p>
                </div>
                <div className="flex-1 md:order-1 order-0">
                    <Img src={featured_2.image} alt={featured_2.title} className="w-auto h-auto"/>
                </div>
            </div>
        </div>
    </div>
}