import React from "react";
import { TestimonialsInterface } from "@/types";
import { Img } from "@/utils/Img";
import { TestimonialCard } from "@/components/Comman/TestimonialCard";
import Slider from 'react-slick';

export const Testimonials: React.FC<TestimonialsInterface> = (props) => {
    const { title, subtitle, description, items } = props;
    const settings = {
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: '200px',
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1120,
                settings: {
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                }
            }
        ]
    };
    const mobileSettings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        vertical: true,
        arrows: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return <div className="md:pt-[140px] pt-[100px] pb-[6px]">
        <div className="md:px-[140px] px-[50px]">
            <div className="max-w-[1380px] mx-auto">
                <div className="md:max-w-[659px] mx-auto text-center mb-[52px]">
                    <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primary">
                        {title}
                    </h6>
                    <h2 className="xxl:text-[35px] xl:text-[30px] text-[24px] sm:leading-[44px] leading-[35px] tracking-[-0.44px] font-semibold pb-[9px] text-[#101D2C]">
                        {subtitle}
                    </h2>
                    <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] tracking-[-0.26px] text-[#101D2C] font-medium">
                        {description}
                    </p>
                    <Img
                        src="/images/trustpilot-logo.svg"
                        alt={`Trust Pilot - ${title}`}
                        className="xl:w-[181px] w-[140px] xl:h-[106px] h-[80px] md:px-0 px-[24px] mx-auto"
                    />
                </div>
            </div>
        </div>
        <div className="testimonial-slider hidden md:block">
            <Slider {...settings}>
                {
                    items?.map((item, index) => {
                        return <div key={index} className="max-w-[420px]">
                            <TestimonialCard
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                rating={item.rating}
                                author={item.author}
                                date_of_experience={item.date_of_experience}
                            />
                        </div>
                    })
                }
            </Slider>
        </div>
        <div className="testimonial-slider md:hidden">
            <Slider {...mobileSettings}>
                {
                    items?.map((item, index) => {
                        return <div key={index} className="max-w-[420px] pb-[30px]">
                            <TestimonialCard
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                rating={item.rating}
                                author={item.author}
                                date_of_experience={item.date_of_experience}
                            />
                        </div>
                    })
                }
            </Slider>
        </div>
    </div>

}