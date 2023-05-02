import React, { useContext } from "react";
import { ContactUsInterface } from "@/types";
import { Input } from "@/utils/Input";
import PhoneInput from 'react-phone-input-2'
import { Button } from "@/utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "@/context/LoaderContext";

export const ContactUs: React.FC<ContactUsInterface> = (props) => {
    const { title, subtitle, description, form, countries } = props;
    const { setIsLoading } = useContext(LoaderContext);
    const [params, setParams] = React.useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        is_checked: false,
    });
    const [errors, setErrors] = React.useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
    });

    const setParam = (key: string, value: any) => {
        setParams((prev) => ({ ...prev, [key]: value }));
    }

    const resetParams = () => {
        setParams({
            first_name: "",
            last_name: "",
            phone: "+1",
            email: "",
            is_checked: false
        })
    }

    const checkErrors = () => {
        const errors: any = {};

        const requiredFields = ['first_name', 'last_name', 'phone', 'email'];
        for (const field of requiredFields) {
            if (!params[field]) {
                errors[field] = `Please enter your ${field.replace('_', ' ')}`;
            }
        }

        if (params.email && !/\S+@\S+\.\S+/.test(params.email)) {
            errors.email = "Please enter a valid email address";
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const send = async () => {
        if (!checkErrors()) {
            return;
        }
        setIsLoading(true);
        const response = await fetch("/api/sendMail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: params.email, body: JSON.stringify(params)
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Email Send successfully!");
            resetParams();
        }
        setIsLoading(false);
    }

    return <div
        className="md:px-[140px] sm:px-[50px] px-[20px] pt-[100px] pb-[94px]"
    >
        <div className="max-w-[1380px] mx-auto">
            <div className="max-w-[395px] mx-auto text-center mb-[52px]">
                <h6 className="text-[12px] leading-[12px] tracking-[1.66px] font-medium pb-[10px] uppercase text-primary">
                    {title}
                </h6>
                <h2 className="xxl:text-[35px] xl:text-[30px] text-[24px] sm:leading-[44px] leading-[35px] tracking-[-0.97px] font-semibold pb-[9px] text-[#101D2C]">
                    {subtitle}
                </h2>
                <p className="xxl:text-[19px] xl:text-[17px] text-[14px] leading-[30px] tracking-[-0.16px] text-[#101D2C] font-medium max-w-[395px] mx-auto">
                    {description}
                </p>
            </div>
            <div className="max-w-[569px] mx-auto">
                <div className="flex sm:flex-row flex-col gap-[10px] pb-[10px]">
                    <div className="sm:max-w-[238px]">
                        <Input
                            placeholder={form.f_name.label}
                            value={params.first_name}
                            withHeight={false}
                            onChange={e => setParam('first_name', e.target.value)}
                        />
                        {
                            errors.first_name && <p className="text-[12px] capitalize text-primary pl-[12px]">
                                {errors.first_name}
                            </p>
                        }
                    </div>
                    <div className="flex-1">
                        <Input
                            placeholder={form.l_name.label}
                            value={params.last_name}
                            withHeight={false}
                            onChange={e => setParam('last_name', e.target.value)}
                        />
                        {
                            errors.last_name && <p className="text-[12px] capitalize text-primary pl-[12px]">
                                {errors.last_name}
                            </p>
                        }
                    </div>
                </div>
                <div className="pb-[10px]">
                    <PhoneInput
                        country={'us'}
                        onlyCountries={countries}
                        value={params.phone}
                        onChange={phone => setParam('phone', phone)}
                    />
                    {
                        errors.phone && <p className="text-[12px] capitalize text-primary pl-[12px]">
                            {errors.phone}
                        </p>
                    }
                </div>
                <div className="pb-[10px]">
                    <Input
                        placeholder={form.email.label}
                        value={params.email}
                        withHeight={false}
                        onChange={e => setParam('email', e.target.value)}
                    />
                    {
                        errors.email && <p className="text-[12px] capitalize text-primary pl-[12px]">
                            {errors.email}
                        </p>
                    }
                </div>
                <div className="pl-[30px] mb-[16px]">
                    <label htmlFor="check" className="flex items-center">
                        <input
                            id="check"
                            type="checkbox"
                            defaultChecked={true}
                            value={params.is_checked}
                            onChange={e => setParam('is_checked', e.target.checked)}
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
                        onClick={send}
                        className="md:text-[16px] leading-[19.36px] tracking-[-0.21px] font-semibold w-full xxl:h-[53px] h-[50px]"
                    />
                </div>
            </div>
        </div>
    </div>
}