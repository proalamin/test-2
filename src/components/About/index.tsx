import React from "react";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import { AboutUsInterface } from "@/types";

export const About: React.FC<AboutUsInterface> = (props) => {
    const { image, title, subtitle, description, featured_1, featured_2 } = props;
    return <div
        className="max-w-[1440px] mx-auto md:pt-[98px] pt-[100px] md:pb-[140px] pb-[100px] md:px-[100px] sm:px-[50px] px-[16px]">
        <div className="flex md:flex-row flex-col items-center md:gap-[59.5px] md:mb-[64px] mb-[53px]">
            <div className="flex-1 max-w-[541.5px]">
                <h6 className="text-primary md:text-left text-center text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px]">
                    {title}
                </h6>
                <h2 className="xxl:text-[35px] xl:text-[30px] text-[24px] md:text-left text-center leading-[44px] tracking-[-0.47px] font-semibold text-[#101D2C] mb-[20px]">
                    About <span className="text-primary relative">
                    SearchMyExpert
                    <Img
                        src="/images/underline-dark.svg"
                        alt="underline"
                        className="absolute bottom-[0] left-0 w-full"
                    />
                </span>
                </h2>
                <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] pb-[8px] md:text-left text-center font-semibold text-[#111B35]">
                    {subtitle}
                </p>
                <p className="xxl:text-[19px] xl:text-[17px] text-[13px] leading-[30px] font-light text-[#111B35] mb-[42px] md:text-left text-center">
                    {description}
                </p>
                <div className="md:text-left text-center">
                    <Button
                        label="Contact Us"
                        type="button"
                        color="primary"
                        className="text-[14px] leading-[16.94px] tracking-[-0.09px] w-[114px] h-[36px]"
                    />
                </div>
            </div>
            <div className="xxl:w-[839px] xl:w-[690px] md:w-[500px] sm:w-full">
                <Img src="/images/about-featured.webp" alt="About Featured" className="w-[100%] h-auto md:flex hidden"/>
                <Img
                    src="/images/about-featured-mobile.webp"
                    alt="About Featured"
                    className="w-[100%] h-auto md:hidden mt-[-155px]"
                />
            </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[62px]">
            <div className="flex-1 md:m-0 mb-[21px] md:text-left text-center">
                <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] font-light pb-[10px]">
                    <span className="font-semibold">{featured_1.content_1.bold}</span> {featured_1.content_1.normal}
                </p>
                <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] font-light">
                    {featured_1.content_2}
                </p>
            </div>
            <div className="flex-1 md:text-left text-center">
                <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] font-semibold pb-[10px]">
                    {featured_2.content_1.bold}
                </p>
                <p className="xxl:text-[19px] xl:text-[17px] leading-[30px] font-light pb-[10px]">
                    {featured_2.content_2}
                </p>
                <p className="xxl:text-[19px] xl:text-[17px] leading-[30px] font-light">
                    {featured_2.content_3}
                </p>
            </div>
        </div>
    </div>
}