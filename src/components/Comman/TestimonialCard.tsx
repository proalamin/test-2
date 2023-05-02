import React, { useEffect, useState } from "react";
import { TestimonialsItemInterface } from "@/types";
import { Img } from "@/utils/Img";

export const TestimonialCard: React.FC<TestimonialsItemInterface> = (props) => {
    const { title, description, date, rating, author_name, date_of_experience } = props;

    const [daysAgo, setDaysAgo] = useState(0);
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;

    useEffect(() => {
        const postDate = new Date(date);
        const currentDate = new Date();
        const differenceMs = currentDate.getTime() - postDate.getTime();
        const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
        setDaysAgo(differenceDays);
    }, [date]);

    return <div className="bg-[#F0F6FF] rounded-[10px] px-[25px] py-[28px]">
        <div className="flex items-center pb-[21px]">
            <div className="flex-1 flex gap-[2px]">
                {
                    filledStars > 0 && [...Array(filledStars)].map((_, index) => {
                        return <div
                            key={index}
                            className="bg-[#00B67A] rounded-[2px] w-[22px] h-[22px] flex items-center justify-center"
                        >
                            <Img
                                src="/images/star.svg"
                                alt="Filled Star"
                                className="w-[15px] h-[15px]"
                            />
                        </div>
                    })
                }
                {
                    emptyStars > 0 && [...Array(emptyStars)].map((_, index) => {
                        return <div
                            key={index}
                            className="bg-[#00B67A] rounded-[2px] w-[22px] h-[22px] flex items-center justify-center"
                        >
                            <Img
                                src="/images/star-blank.svg"
                                alt="Filled Star"
                                className="w-[15px] h-[15px]"
                            />
                        </div>
                    })
                }
            </div>
            <p className="text-[#202224] xl:text-[14px] text-[12px] leading-[16.94px] font-medium text-right">
                {daysAgo} days ago
            </p>
        </div>
        <p className="xl:text-[14px] sm:text-[12px] text-[14px] leading-[16.94px] text-[#202224] font-medium pb-[20px]">
            {author_name}
        </p>
        <p className="xxl:text-[17px] xl:text-[15.5px] sm:text-[14px] text-[15px] leading-[20.57px] text-[#202224] pb-[10px] font-medium">
            {title}
        </p>
        <p className="xxl:text-[17px] xl:text-[15.5px] sm:text-[14px] text-[15px] leading-[26px] text-[#202224] pb-[13px] font-normal min-h-[230px]">
            {description}
        </p>
        <p className="xxl:text-[14px] md:text-[13px] sm:text-[12px] text-[14px] leading-[16.94px] text-[#202224] font-medium">
            Date of experience: {date_of_experience}
        </p>
    </div>
}