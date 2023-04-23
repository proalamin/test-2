import React from 'react';
import { HeaderInterface } from "@/types";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";

export const Header: React.FC<HeaderInterface> = (props) => {
    const { logo, button } = props;

    return <div className="max-w-[1377.5px] mx-auto">
        <div className="flex items-center">
            <div>
                <Img src={logo || ""} alt="Header Logo" className="w-[323px] h-[41px]"/>
            </div>
            <div className="flex-1 pl-[34px]">
                <div className="flex">
                    <a
                        href="#"
                        className="text-[#FFFFFF] text-[17px] leading-[27px] tracking-[-0.24px] d-block"
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
                    className="lg:py-[12px] lg:px-[26]"
                />
            </div>
        </div>
    </div>
}