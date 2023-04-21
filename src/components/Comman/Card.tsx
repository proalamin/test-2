import React from "react";
import { Img } from "@/utils/Img";
import { CardInterface } from "@/types";

export const Card: React.FC<CardInterface> = (props) => {
    const { icon, title, description, position, type } = props;
    return <div>
        <div className="flex flex-col items-center relative">
            <div
                className="w-[100%] min-h-[166px] rounded-[10px] flex items-center justify-center"
                style={{
                    background: type === "how-it-works" ? 'rgba(255, 255, 255, 0.021498)' : '#F0F6FF',
                    border: type === "how-it-works" ? '1px solid rgba(255, 255, 255, 0.0836975)' : 'none',
                }}
            >
                <Img src={icon} alt={title} className="w-[57px] h-[55px]"/>
            </div>
            <div
                className="mt-[-25px] flex items-center justify-center rounded-full min-w-[54px] min-h-[54px] text-[23px] leading-[27.84px] tracking-[-0.26px] text-center bg-primary text-primaryAccent font-semibold"
            >
                {position}
            </div>
        </div>
        <h6
            className={`text-[20px] text-center leading-[24px] tracking-[-0.06px] ${type === "how-it-works" ? 'text-primaryAccent' : 'text-[#101D2C]'} font-medium mt-[17px] max-w-[200px] min-h-[48px] mx-auto`}
        >
            {title}
        </h6>
        <p
            className={`text-[17px] text-center leading-[27px] tracking-[0.19px] ${type === "how-it-works" ? 'text-primaryAccent' : 'text-[#101D2C]'} font-light mt-[10px]`}
        >
            {description}
        </p>
    </div>;
}