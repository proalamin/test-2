import React from "react";
import { ServicesInterface } from "@/types";
import { Img } from "@/utils/Img";

export const Services: React.FC<ServicesInterface> = (props) => {
    const { image, data } = props;

    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="flex max-w-[900px] mx-auto md:bg-[length:100%_100%] bg-cover bg-top bg-no-repeat"
    >
        <div className="pt-[109px] pb-[58px] md:px-[55px] px-[18px] w-[100%]">
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-[20px]">
                {
                    data?.map((service, index) => {
                        return <div key={index}
                                    className="service-card cursor-pointer flex flex-col items-center text-center px-34px">
                            <div
                                className="service-card-icon ease-linear duration-300 md:w-[182px] sm:w-[163.8px] w-[100%] md:h-[134px] h-[120.34px] bg-white rounded-[12px] flex items-center justify-center mb-[16px]">
                                <Img src={service.icon || ""} alt="service"
                                     className="md:w-auto md:h-auto w-[60.3px] ease-linear duration-300"/>
                            </div>
                            <p
                                className="service-card-text ease-linear duration-300 md:text-[19px] sm:text-[17px] text-[14px] md:leading-[28px] leading-[25.2px] tracking-[-0.18px] font-medium text-[#101D2C] md:max-w-[180px] max-w-[120px] mx-auto text-center"
                            >
                                {service.title}
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>

}