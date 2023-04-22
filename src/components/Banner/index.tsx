import React from "react";
import { BannerInterface } from "@/types";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import Slider from 'react-slick';
import { Header } from "@/components/Comman/Header";

export const Banner: React.FC<BannerInterface> = (props) => {
    const { header, title, subtitle, image, button, ourClients, awesomeNumbers, services } = props;

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
        className="bg-cover bg-center bg-no-repeat max-h-[150vh] relative"
    >
        <div className="pt-[40px] px-[55px] w-full">
            <Header logo={header?.logo} button={header?.button}/>
        </div>
        <div className="flex flex-col items-center justify-center pt-[117px] pb-[71px]">
            <h1
                className="font-semibold text-[#FFFFFF] text-[53px] leading-[53px] tracking-[-1.55px] text-center pb-[11px]"
            >
                {title}
            </h1>
            <p
                className="font-normal text-[#FFFFFF] text-[23px] leading-[36px] tracking-[-0.68px] text-center pb-[30px] max-w-[667px]"
            >
                {subtitle}
            </p>
            <div>
                <Button label={button.title} type="button" color="primary"/>
            </div>
        </div>
        <div className="flex gap-[67px] pb-[121px] max-w-[923px] mx-auto">
            <div className="flex-1 w-full max-w-[50%]">
                <div className="flex flex-col">
                    <h2
                        className="font-semibold text-[#FFFFFF] text-[17px] leading-[27px] tracking-[-0.24px] pb-[24px]"
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
            <div className="flex-1 w-full max-w-[50%]">
                <div className="flex flex-col">
                    <h2
                        className="font-semibold text-[#FFFFFF] text-[17px] leading-[27px] tracking-[-0.24px] pb-[24px]"
                    >
                        {awesomeNumbers.title}
                    </h2>
                    <div className="flex awesome-number">
                        <Slider {...settings}>
                            {
                                awesomeNumbers.data?.map((awesomeNumber, index) => {
                                    return <div key={index}>
                                        <h3 className="font-bold text-[29px] leading-[27px] tracking-[-0.88px] text-primaryAccent">
                                            {awesomeNumber.number}
                                        </h3>
                                        <p className="font-semibold text-[16px] leading-[22px] tracking-[-0.32px] text-primaryAccent">
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
        <div
            style={{ backgroundImage: 'url(/images/screen.svg)' }}
            className="flex max-w-[900px] mx-auto bg-[length:100%_100%] bg-top bg-no-repeat"
        >
            <div className="pt-[109px] pb-[58px] px-[55px] w-[100%]">
                <div className="grid grid-cols-3 gap-[20px]">
                    {
                        services?.map((service, index) => {
                            return <div key={index}
                                        className="service-card cursor-pointer flex flex-col items-center text-center px-34px">
                                <div
                                    className="service-card-icon ease-linear duration-300 w-[182px] h-[134px] bg-white rounded-[12px] flex items-center justify-center mb-[16px]">
                                    <Img src={service.icon || ""} alt="service"
                                         className="w-auto h-auto ease-linear duration-300"/>
                                </div>
                                <p
                                    className="service-card-text ease-linear duration-300 text-[19px] leading-[28px] tracking-[-0.18px] font-medium text-[#101D2C] max-w-[180px] mx-auto text-center"
                                >
                                    {service.title}
                                </p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}