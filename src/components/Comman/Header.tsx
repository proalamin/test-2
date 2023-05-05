import React, { useEffect, useState } from 'react';
import { HeaderInterface } from "@/types";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import { useRouter } from "next/router";
import data from "@/data/config.json";

export const Header: React.FC<HeaderInterface> = (props) => {
    const { button } = props;
    const router = useRouter();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logo = isSticky ? data.logo_dark : data.logo_light;
    const arrow = !isSticky ? '/images/arrow-down.svg' : '/images/arrow.svg';

    const handleScroll = () => {
        if (window.pageYOffset > 56) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };
    return <div
        className={`md:pt-[56px]  pt-[16px] md:px-[55px] sm:px-[30px] px-[16px] w-full fixed top-0 left-0 right-0 header ${isSticky ? 'header-sticky' : ''}`}
    >
        <div className="max-w-[1377.5px] mx-auto">
            <div className="flex items-center">
                <div>
                    <Img src={logo || ""} alt="Header Logo"
                         className="xxl:w-[323px] xl:w-[300px] sm:w-[291.6px] w-[150px] xl:h-[41px] sm:h-[37.67px] h-[20px]"/>
                </div>
                <div className="flex-1 md:pl-[34px] sm:pl-[17px] pl-[5px]">
                    <div className="flex">
                        <a
                            href="#"
                            className={`${isSticky ? 'text-[#101D2C]' : 'text-white'} xxl:text-[17px] sm:text-[16px] text-[12px] md:leading-[27px] sm:leading-[17px] leading-[14px] tracking-[-0.24px] flex`}
                        >
                            <span>Explore</span>
                            <Img src={arrow} alt="Arrow Down" className="w-[8px] sm:ml-[7px]"/>
                        </a>
                    </div>
                </div>
                <div>
                    <Button
                        label={button.title}
                        type="button"
                        color="primary"
                        className="xxl:text-[19px] xxl:leading-[22.99px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] tracking-[-0.22px] md:w-[145px] w-[110px] xl:h-[44px] md:h-[38px] h-[35px]"
                        onClick={() => router.push("/getStarted")}
                    />
                </div>
            </div>
        </div>
    </div>
}