import React from "react";
import { BannerInterface } from "@/types";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import Slider from 'react-slick';
import { Header } from "@/components/Comman/Header";

export const Banner: React.FC<BannerInterface> = (props) => {
    const { header, title, subtitle, image, button, ourClients, awesomeNumbers } = props;

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center bg-no-repeat relative md:pb-[248px]"
    >
        <div className="md:pt-[40px]  pt-[16px] md:px-[55px] sm:px-[30px] px-[16px] w-full">
            <Header logo={header.logo} button={header.button}/>
        </div>
        <div className="flex flex-col items-center justify-center pt-[117px] pb-[71px] px-[29px]">
            <h1
                className="font-semibold text-[#FFFFFF] sm:text-[53px] text-[30px] md:leading-[53px] leading-[56px] md:tracking-[-1.55px] text-center md:pb-[11px] pb-[18px]"
            >
                {title}
            </h1>
            <p
                className="font-normal text-[#FFFFFF] sm:text-[23px] text-[16px] sm:leading-[36px] leading-[28px] tracking-[-0.68px] text-center pb-[30px] max-w-[667px]"
            >
                {subtitle}
            </p>
            <div>
                <Button
                    label={button.title}
                    type="button"
                    color="primary"
                    className="md:text-[19px] md:leading-[22.99px] tracking-[-0.25px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px]"
                />
            </div>
        </div>
        <div
            className="flex md:flex-row flex-col md:gap-[67px] gap-[56px] pb-[121px] md:max-w-[923px] max-w-[498.83px] sm:p-[0] px-[40px] mx-auto">
            <div className="flex-1 w-full md:max-w-[50%]">
                <div className="flex flex-col">
                    <h2
                        className="font-semibold text-[#FFFFFF] text-[17px] leading-[27px] tracking-[-0.24px] pb-[24px] md:text-left text-center"
                    >
                        {ourClients.title}
                    </h2>
                    <div className="flex">
                        <Slider {...settings}>
                            {
                                ourClients.data?.map((row, index) => {
                                    return <div key={index}>
                                        <Img src={row.image || ""} alt="client" className="w-auto h-[35px] pr-[20px]"/>
                                    </div>
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full md:max-w-[50%]">
                <div className="flex flex-col">
                    <h2
                        className="font-semibold text-[#FFFFFF] text-[17px] leading-[27px] tracking-[-0.24px] pb-[24px] md:text-left text-center"
                    >
                        {awesomeNumbers.title}
                    </h2>
                    <div className="flex awesome-number">
                        <Slider {...settings}>
                            {
                                awesomeNumbers.data?.map((awesomeNumber, index) => {
                                    return <div key={index}>
                                        <h3 className="font-bold sm:text-[29px] text-[24px] leading-[27px] tracking-[-0.88px] text-primaryAccent">
                                            {awesomeNumber.number}
                                        </h3>
                                        <p className="font-semibold sm:text-[16px] text-[13px] leading-[22px] tracking-[-0.32px] text-primaryAccent">
                                            {awesomeNumber.title}
                                        </p>
                                    </div>
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
}