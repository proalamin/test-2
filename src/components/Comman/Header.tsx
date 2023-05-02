import React from 'react';
import { HeaderInterface } from "@/types";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import { useRouter } from "next/router";

export const Header: React.FC<HeaderInterface> = (props) => {
    const { logo, button } = props;
    const router = useRouter();

    return <div className="max-w-[1377.5px] mx-auto">
        <div className="flex items-center">
            <div>
                <Img src={logo || ""} alt="Header Logo"
                     className="xxl:w-[323px] xl:w-[300px] sm:w-[291.6px] w-[150px] xl:h-[41px] sm:h-[37.67px] h-[20px]"/>
            </div>
            <div className="flex-1 md:pl-[34px] sm:pl-[17px] pl-[16px]">
                <div className="flex">
                    <a
                        href="#"
                        className="text-[#FFFFFF] xxl:text-[17px] sm:text-[16px] text-[14px] md:leading-[27px] sm:leading-[17px] leading-[14px] tracking-[-0.24px] flex"
                    >
                        <span>Explore</span>
                        <Img src="/images/arrow-down.svg" alt="Arrow Down" className="w-[8px] ml-[7px]"/>
                    </a>
                </div>
            </div>
            <div>
                <Button
                    label={button.title}
                    type="button"
                    color="primary"
                    className="xxl:text-[19px] xxl:leading-[22.99px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] tracking-[-0.22px] md:w-[145px] w-[115px] xl:h-[44px] md:h-[38px] h-[35px]"
                    onClick={() => router.push("/getStarted")}
                />
            </div>
        </div>
    </div>
}