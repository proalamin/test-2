import React from "react";
import { Img } from "@/utils/Img";

interface WhyChooseIconInterface {
    icon: string;
    title: string;
}

export const WhyChooseIcon: React.FC<WhyChooseIconInterface> = ({ icon, title }) => {
    return <div
        className="md:m-0 mb-[16px] md:py-[42px] py-[32px] md:px-[39px] px-[29px] xxl:w-[135px] md:w-[120px] w-[100px] xxl:h-[135px] md:h-[120px] h-[100px] rounded-full flex items-center justify-center"
        style={{ background: "linear-gradient(130.86deg, #FFFFFF 18.78%, #F5F9FF 81.48%)" }}
    >
        <Img src={icon} alt={title} className="w-auto h-auto"/>
    </div>
}