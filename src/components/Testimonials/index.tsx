import React from "react";
import { TestimonialsInterface } from "@/types";
import { Img } from "@/utils/Img";
import { TestimonialCard } from "@/components/Comman/TestimonialCard";
import Slider from 'react-slick';

export const Testimonials: React.FC<TestimonialsInterface> = (props) => {
    const { title, subtitle, description, items } = props;
    const settings = {
        centerMode: true,
        centerPadding: '200px',
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return <div className="pt-[140px] pb-[6px]">
        <div className="px-[140px]">
            <div className="max-w-[1380px] mx-auto">
                <div className="max-w-[659px] mx-auto text-center mb-[52px]">
                    <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primary">
                        {title}
                    </h6>
                    <h2 className="text-[35px] leading-[44px] tracking-[-0.44px] font-semibold pb-[9px] text-[#101D2C]">
                        {subtitle}
                    </h2>
                    <p className="text-[19px] leading-[30px] tracking-[-0.26px] text-[#101D2C] font-medium">
                        {description}
                    </p>
                    <Img
                        src="/images/trustpilot-logo.svg"
                        alt={`Trust Pilot - ${title}`}
                        className="w-[181px] h-[106px] mx-auto"
                    />
                </div>
            </div>
        </div>
        <div className="testimonial-slider">
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
    </div>

}