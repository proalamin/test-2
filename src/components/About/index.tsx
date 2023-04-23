import React from "react";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";

export const About: React.FC = () => {
    return <div
        className="max-w-[1440px] mx-auto md:pt-[272px] pt-[100px] md:pb-[140px] pb-[100px] md:px-[100px] sm:px-[50px] px-[16px]">
        <div className="flex md:flex-row flex-col items-center md:gap-[59.5px] md:mb-[64px] mb-[53px]">
            <div className="flex-1 max-w-[541.5px]">
                <h6 className="text-primary md:text-left text-center text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px]">
                    ABOUT US
                </h6>
                <h2 className="sm:text-[35px] text-[24px] md:text-left text-center leading-[44px] tracking-[-0.47px] font-semibold text-[#101D2C] mb-[20px]">
                    About <span className="text-primary underline underline-offset-[8px]">SearchMyExpert</span>
                </h2>
                <p className="sm:text-[19px] text-[14px] leading-[30px] pb-[8px] md:text-left text-center font-semibold text-[#111B35]">
                    Unlock Expertise at Your Fingertips!
                </p>
                <p className="sm:text-[19px] text-[13px] leading-[30px] font-light text-[#111B35] mb-[42px] md:text-left text-center">
                    Welcome to Search My Expert, the leading online marketplace for digital services in India. Our
                    mission is to connect skilled vendors and professionals with businesses and individuals who need
                    their services.
                </p>
                <div className="md:text-left text-center">
                    <Button
                        label="Contact Us"
                        type="button"
                        color="primary"
                        className="text-[14px] leading-[16.94px] tracking-[-0.09px] py-[12px] px-[20px]"
                    />
                </div>
            </div>
            <div className="flex-1">
                <Img src="/images/about-featured.png" alt="About Featured" className="w-[100%] h-auto md:flex hidden"/>
                <Img
                    src="/images/about-featured-mobile.png"
                    alt="About Featured"
                    className="w-[100%] h-auto md:hidden mt-[-155px]"
                />
            </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[62px]">
            <div className="flex-1 md:m-0 mb-[21px] md:text-left text-center">
                <p className="md:text-[19px] text-[14px] leading-[30px] font-light pb-[10px]">
                    <span className="font-semibold">Welcome to Search My Expert, the leading online marketplace for digital services in India.</span> Our
                    mission is to connect skilled vendors and professionals with businesses and individuals who need
                    their services.
                </p>
                <p className="md:text-[19px] text-[14px] leading-[30px] font-light">
                    At Search My Expert, we believe that everyone should have access to high-quality, affordable digital
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    services. That's why we've created a platform that makes it easy to find and hire the best experts
                    in a variety of fields, including web development, graphic design, app development , social media
                    marketing, and much more.
                </p>
            </div>
            <div className="flex-1 md:text-left text-center">
                <p className="md:text-[19px] text-[14px] leading-[30px] font-semibold pb-[10px]">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Our platform is user-friendly, and we're committed to providing excellent customer support every
                    step of the way.
                </p>
                <p className="md:text-[19px] text-[14px] leading-[30px] font-light pb-[10px]">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Whether you're a vendor looking for new clients or a business owner in need of digital services,
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    we're here to help you succeed.
                </p>
                <p className="md:text-[19px] text-[14px] leading-[30px] font-light">
                    Join our community today and start getting the digital services you need to take your business to
                    the next level.
                </p>
            </div>
        </div>
    </div>
}