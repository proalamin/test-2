import React from "react";
import { ContactUsInterface } from "@/types";
import { Input } from "@/utils/Input";
import PhoneInput from 'react-phone-input-2'
import { Button } from "@/utils/Button";

export const ContactUs: React.FC<ContactUsInterface> = (props) => {
    const { title, subtitle, description, form, countries } = props;
    return <div
        className="px-[140px] pt-[134px] pb-[140px]"
    >
        <div className="max-w-[1380px] mx-auto">
            <div className="max-w-[395px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primary">
                    {title}
                </h6>
                <h2 className="text-[35px] leading-[44px] tracking-[-0.97px] font-semibold pb-[9px] text-[#101D2C]">
                    {subtitle}
                </h2>
                <p className="text-[19px] leading-[30px] tracking-[-0.16px] text-[#101D2C] font-medium max-w-[395px] mx-auto">
                    {description}
                </p>
            </div>
            <div className="max-w-[569px] mx-auto">
                <div className="flex gap-[10px] pb-[10px]">
                    <div className="max-w-[238px]">
                        <Input
                            placeholder={form.f_name.label}
                            value={form.f_name.value}
                            onChange={e => console.log(e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            placeholder={form.l_name.label}
                            value={form.l_name.value}
                            onChange={e => console.log(e.target.value)}
                        />
                    </div>
                </div>
                <div className="pb-[10px]">
                    <PhoneInput
                        country={'us'}
                        onlyCountries={countries}
                        value={form.mobile.value}
                        onChange={phone => console.log(phone)}
                    />
                </div>
                <div className="pb-[10px]">
                    <Input
                        placeholder={form.email.label}
                        value={form.email.value}
                        onChange={e => console.log(e.target.value)}
                    />
                </div>
                <div className="pl-[30px] mb-[16px]">
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
                <div>
                    <Button
                        type="button"
                        color="primary"
                        label="Submit Right Now"
                        className="md:text-[16px] leading-[19.36px] tracking-[-0.21px] font-semibold w-full md:py-[20px]"
                    />
                </div>
            </div>
        </div>
    </div>
}