import React, { useState } from 'react';
import { HeaderInterface } from "@/types";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import { Input } from "@/utils/Input";
import PhoneInput from "react-phone-input-2";

export const Header: React.FC<HeaderInterface> = (props) => {
    const { logo, button } = props;

    const [open, setOpen] = useState(false);

    return <div className="max-w-[1377.5px] mx-auto">
        <div className="flex items-center">
            <div>
                <Img src={logo || ""} alt="Header Logo"
                     className="xxl:w-[323px] xl:w-[300px] sm:w-[291.6px] w-[150px] xl:h-[41px] sm:h-[37.67px] h-[20px]"/>
            </div>
            <div className="flex-1 md:pl-[34px] sm:pl-[17px] pl-[16px]">
                <div className="flex">
                    <a
                        href="#"
                        className="text-[#FFFFFF] xxl:text-[17px] sm:text-[16px] text-[14px] md:leading-[27px] sm:leading-[17px] leading-[14px] tracking-[-0.24px] d-block"
                    >
                        Explore
                    </a>
                </div>
            </div>
            <div>
                <Button
                    label={button.title}
                    type="button"
                    color="primary"
                    className="xxl:text-[19px] xxl:leading-[22.99px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] tracking-[-0.22px] md:w-[145px] w-[115px] xl:h-[44px] md:h-[38px] h-[35px]"
                    onClick={() => setOpen(true)}
                />
            </div>
        </div>
        <div
            className={`fixed flex items-center justify-center left-0 top-0 w-full h-full backdrop:bg-gray-50 z-[9999] ${!open ? 'hidden' : ''}`}
            style={{ background: "rgba(0,0,0,.32)" }}
        >
            <div className="bg-white p-[20px] md:p-[30px] md:rounded md:max-w-[600px] md:h-auto h-full w-full relative">
                <div className="absolute right-0 top-0 p-[10px] cursor-pointer" onClick={() => setOpen(false)}>
                    <Img
                        src="/images/close.svg"
                        alt="Close Icon"
                        className="w-[30px]"
                    />
                </div>
                <h2 className="xxl:text-[35px] xl:text-[30px] text-[24px] text-center leading-[44px] tracking-[-0.47px] font-semibold text-[#101D2C] mb-[20px]">
                    Get a <span className="text-primary relative">
                    FREE Quotation
                    <Img
                        src="/images/underline-dark.svg"
                        alt="underline"
                        className="absolute bottom-[0] left-0 w-full"
                    />
                </span>
                </h2>
                <p className="xl:w-[400px] m-auto xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] pb-[8px] text-center font-semibold text-[#111B35]">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Don't worry your data and business ideas are safe with us.
                </p>
                <div className="pt-[20px]">
                    <div className="flex sm:flex-row flex-col gap-[15px] pb-[15px]">
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute h-full w-[50px] flex items-center justify-center z-[9]">
                                    <Img src="/images/user.svg" alt="First Name" className="w-[22px] h-[22px]"/>
                                </div>
                                <Input
                                    placeholder="First Name"
                                    value=""
                                    onChange={e => console.log(e.target.value)}
                                    className="pl-[50px]"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute h-full w-[50px] flex items-center justify-center z-[9]">
                                    <Img src="/images/user.svg" alt="Last Name" className="w-[22px] h-[22px]"/>
                                </div>
                                <Input
                                    placeholder="Last Name"
                                    value=""
                                    onChange={e => console.log(e.target.value)}
                                    className="pl-[50px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] pb-[15px]">
                        <div className="flex-1">
                            <PhoneInput
                                country={'us'}
                                onlyCountries={['us', 'ca', 'in']}
                                value={""}
                                onChange={phone => console.log(phone)}
                            />
                        </div>
                        <div>
                            <Img
                                src="/images/whatsapp.svg"
                                alt="WhatsApp Icon"
                                className="md:w-[60px] w-[40px]"
                            />
                        </div>
                    </div>
                    <div className="">
                        <div className="relative w-full">
                            <div className="absolute h-full w-[50px] flex items-center justify-center z-[9]">
                                <Img src="/images/email.svg" alt="Email" className="w-[22px] h-[22px]"/>
                            </div>
                            <Input
                                placeholder="Email"
                                value=""
                                onChange={e => console.log(e.target.value)}
                                className="pl-[50px]"
                            />
                        </div>
                    </div>
                    <div className="py-[15px] px-[20px]">
                        <label htmlFor="check" className="flex items-center">
                            <input
                                id="check"
                                type="checkbox"
                                defaultChecked={true}
                                className="relative appearance-none p-[2px] w-[14px] h-[14px] rounded-full bg-white border border-primary checked:bg-primary"
                            />
                            <p className="ml-[7px] text-[13px] leading-[26px] text-[#101D2C] font-normal">
                                Receive Notifications on Whatsapp and Email.
                            </p>
                        </label>
                    </div>
                    <div className="text-center">
                        <Button
                            type="button"
                            color="primary"
                            label="Submit"
                            className="md:text-[16px] leading-[19.36px] tracking-[-0.21px] font-semibold xxl:h-[53px] h-[50px] w-[160px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
}