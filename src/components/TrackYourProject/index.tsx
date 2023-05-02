import React from "react";
import { TrackYourProjectInterface } from "@/types";
import { Card } from "@/components/Comman/Card";
import { Img } from "@/utils/Img";

export const TrackYourProject: React.FC<TrackYourProjectInterface> = (props) => {
    const { title, subtitle, description, items } = props;
    return <div
        className="xl:px-[140px] md:px-[100px] sm:px-[50px] px-[20px] pt-[77px] xl:pb-[140px] pb-[100px] relative overflow-hidden">
        <div>
            <Img
                src={"/images/track-your-project-start-left.svg"}
                alt={title}
                className="absolute top-0 left-0 xxl:w-[395px] xxl:h-[710px] md:w-[260px] md:h-[460px] w-[200px]"
            />
            <Img
                src={"/images/track-your-project-start-right.svg"}
                alt={title}
                className="absolute bottom-0 right-[-16px] xxl:w-[395px] xxl:h-[710px] md:w-[260px] md:h-[460px] w-[200px]"
            />
        </div>
        <div className="max-w-[1020px] mx-auto track-your-project-bg relative ">
            <div className="max-w-[471px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primary">
                    {title}
                </h6>
                <h2 className="inline-block relative xxl:text-[35px] xl:text-[30px] text-[24px] sm:leading-[44px] leading-[35px] tracking-[-0.44px] font-semibold mb-[9px] text-primary">
                    {subtitle}
                    <Img
                        src="/images/underline-dark.svg"
                        alt="underline"
                        className="absolute bottom-[8%] left-0 w-full"
                    />
                </h2>
                <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] tracking-[-0.26px] text-[#101D2C] font-medium">
                    {description}
                </p>
            </div>
            <div
                className="grid sm:grid-cols-3 grid-rows-3 sm:grid-rows-none gap-[60px]"
            >
                {
                    items?.map((item, index) => {
                        return <div key={index} className="sm:max-w-[300px] track-project-item relative">
                            <Card
                                icon={item.icon}
                                position={item.position}
                                title={item.title}
                                description={item.description}
                                type="track-your-project"
                            />
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}