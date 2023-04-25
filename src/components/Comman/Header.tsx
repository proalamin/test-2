import React from 'react';
import { HeaderInterface } from "@/types";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";

export const Header: React.FC<HeaderInterface> = (props) => {
    const { logo, button } = props;

    return <div className="max-w-[1377.5px] mx-auto">
        <div className="flex items-center">
            <div>
                <Img src={logo || ""} alt="Header Logo"
                     className="md:w-[323px] sm:w-[291.6px] w-[150px] md:h-[41px] sm:h-[37.67px] h-[20px]"/>
            </div>
            <div className="flex-1 md:pl-[34px] sm:pl-[17px] pl-[16px]">
                <div className="flex">
                    <a
                        href="#"
                        className="text-[#FFFFFF] md:text-[17px] sm:text-[16px] text-[14px] md:leading-[27px] sm:leading-[17px] leading-[14px] tracking-[-0.24px] d-block"
                    >
                        Explore
                    </a>
                </div>
            </div>
            <div>
                <Button
                    label={button.title}
                    type="button"
                    color="primary"
                    className="md:text-[19px] md:leading-[22.99px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] tracking-[-0.22px] w-[145px] h-[44px]"
                />
            </div>
        </div>
    </div>
}