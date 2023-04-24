import React from "react";
import { ServicesInterface } from "@/types";
import { Img } from "@/utils/Img";

export const Services: React.FC<ServicesInterface> = (props) => {
    const { title, subtitle, description, data } = props;

    return <div className="bg-[#F5F9FF] pt-[98px]">
        <div className="max-w-[721px] mx-auto text-center mb-[97px]">
            <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primary">
                {title}
            </h6>
            <h2 className="sm:text-[35px] text-[30px] sm:leading-[44px] leading-[35px] tracking-[-0.44px] underline underline-offset-[8px] font-semibold pb-[18px] text-primary">
                {subtitle}
            </h2>
            <p className="md:text-[19px] text-[14px] leading-[30px] tracking-[-0.26px] text-[#101D2C] font-medium">
                {description}
            </p>
        </div>
        <div className="">
            <div className="grid sm:grid-cols-3 grid-cols-1">
                {
                    data?.map((service, index) => {
                        return <div
                            key={index}
                            className="service-card cursor-pointer flex flex-col items-center text-center p-60px relative"
                        >
                            <Img src={service.image} alt={service.title} className="w-full h-full"/>
                            <div
                                className="service-card-content absolute text-left w-full h-full p-[30px] flex flex-col top-0 left-0 text-[#FFFFFF] font-medium"
                            >
                                <div className="flex-1 w-full text-[35px] leading-[25px] tracking-[-0.84px]">
                                    0{index + 1}
                                </div>
                                <div>
                                    <div className="flex items-center">
                                        <p className="text-[22px] leading-[25px] tracking-[-0.6px]">
                                            {service.title}
                                        </p>
                                        <Img
                                            src="/images/plus.svg"
                                            alt={service.title}
                                            className="w-[28px] h-[28px] ml-[10px] plus-icon"
                                        />
                                    </div>
                                    <div className="service-card-details">
                                        <p className="mt-[20px] text-[17px] leading-[30px] tracking-[-0.46px] font-normal">
                                            {service.description}
                                        </p>
                                        <Img
                                            src="/images/circle.svg"
                                            alt={service.title}
                                            className="w-[28px] h-[28px] mt-[24px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>

}