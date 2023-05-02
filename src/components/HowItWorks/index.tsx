import React from "react";
import { HowItWorksInterface } from "@/types";
import { Card } from "@/components/Comman/Card";
import { Img } from "@/utils/Img";

export const HowItWorks: React.FC<HowItWorksInterface> = (props) => {
    const { image, title, subtitle, description, items } = props;
    return <div
        style={{ backgroundImage: `url(/images/howitworksbg.png)` }}
        className="md:bg-[length:100%_100%] bg-cover bg-center how-it-work-bg bg-no-repeat bg-top xl:px-[140px] sm:px-[50px] px-[30px] pt-[70px] xl:pb-[180px] pb-[100px] relative overflow-hidden"
    >
        <div className="max-w-[1380px] mx-auto relative">
            <div className="absolute top-0 left-0 w-full md:h-full h-[89%] flex items-center justify-center pt-[40px]">
                <Img
                    src={"/images/how-it-works-bg-start.svg"}
                    alt={title}
                    className="md:w-[449px] w-full h-[470px]"
                />
            </div>
            <div className="max-w-[395px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primaryAccent">
                    {title}
                </h6>
                <h2 className="inline-block relative xxl:text-[35px] xl:text-[30px] text-[24px] sm:leading-[44px] leading-[35px] tracking-[-0.44px] font-semibold mb-[9px] text-primaryAccent">
                    {subtitle}
                    <Img
                        src="/images/underline.svg"
                        alt="underline"
                        className="absolute bottom-[8%] left-0 w-full"
                    />
                </h2>
                <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] tracking-[-0.26px] text-primaryAccent font-medium">
                    {description}
                </p>
            </div>
            <div className="flex md:flex-row flex-col xxl:gap-[60px] xl:gap-[40px] md:gap-[30px] gap-[64px]">
                {
                    items?.map((item, index) => {
                        return <div key={index} className="flex-1 max-w-[300px] mx-auto">
                            <Card icon={item.icon} position={index + 1} title={item.title}
                                  description={item.description} type="how-it-works"/>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}