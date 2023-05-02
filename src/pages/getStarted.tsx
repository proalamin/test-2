import React, { useContext, useEffect } from "react";
import { Img } from "@/utils/Img";
import { Input } from "@/utils/Input";
import PhoneInput from "react-phone-input-2";
import { Button } from "@/utils/Button";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { LoaderContext } from "@/context/LoaderContext";
import data from "@/data/config.json";

const GetStarted: React.FC = () => {
    const router = useRouter();
    const { setIsLoading } = useContext(LoaderContext);
    const [params, setParams] = React.useState({
        f_name: "",
        l_name: "",
        phone: "",
        email: "",
        is_checked: false,
    });
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = React.useState({
        f_name: "",
        l_name: "",
        phone: "",
        email: "",
    });
    const setParam = (key: string, value: any) => {
        setParams((prev) => ({ ...prev, [key]: value }));
    }

    const checkErrors = () => {
        const errors: any = {};

        const requiredFields = ['f_name', 'l_name', 'phone', 'email'];
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

    const sendEmail = async () => {
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
        }
        setIsLoading(false);
    }

    useEffect(() => {
        history.pushState(null, '', router.asPath);
        window.addEventListener('popstate', function (event) {
            history.pushState(null, '', router.asPath);
            setOpen(true)
        });
    }, []);

    return <div className="bg-[#F5F8FD] min-h-[100vh]">
        <div className="pt-[15px] pb-[40px] md:px-[60px] sm:px-[30px] px-[16px] w-full">
            <div onClick={() => setOpen(true)}>
                <Img src={data.logos.dark} alt="Header Logo"
                     className="xxl:w-[323px] xl:w-[300px] sm:w-[291.6px] w-[200px] h-[41px] cursor-pointer"/>
            </div>
        </div>
        <div className="xl:pb-0 md:pb-[50px]">
            <div className="mx-auto bg-white get-started-form">
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
                                    withGetStarted
                                    value={params.f_name}
                                    onChange={e => setParam("f_name", e.target.value)}
                                    className="pl-[50px]"
                                />
                            </div>
                            {
                                errors.f_name && <p className="text-[12px] capitalize text-primary">
                                    {errors.f_name}
                                </p>
                            }
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute h-full w-[50px] flex items-center justify-center z-[9]">
                                    <Img src="/images/user.svg" alt="Last Name" className="w-[22px] h-[22px]"/>
                                </div>
                                <Input
                                    placeholder="Last Name"
                                    value={params.l_name}
                                    withGetStarted
                                    onChange={e => setParam("l_name", e.target.value)}
                                    className="pl-[50px]"
                                />
                            </div>
                            {
                                errors.l_name && <p className="text-[12px] capitalize text-primary">
                                    {errors.l_name}
                                </p>
                            }
                        </div>
                    </div>
                    <div className="flex items-center gap-[15px] pb-[15px]">
                        <div className="flex-1">
                            <PhoneInput
                                country={'in'}
                                onlyCountries={['us', 'ca', 'in']}
                                value={params.phone}
                                onChange={phone => setParam("phone", phone)}
                                inputClass="with-get-started"
                            />
                            {
                                errors.phone && <p className="text-[12px] capitalize text-primary">
                                    {errors.phone}
                                </p>
                            }
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
                                value={params.email}
                                withGetStarted
                                onChange={e => setParam("email", e.target.value)}
                                className="pl-[50px]"
                            />
                        </div>
                        {
                            errors.email && <p className="text-[12px] capitalize text-primary">
                                {errors.email}
                            </p>
                        }
                    </div>
                    <div className="py-[15px] pb-[30px] px-[5px]">
                        <label htmlFor="check" className="flex items-center">
                            <input
                                id="check"
                                type="checkbox"
                                defaultChecked={true}
                                value={params.is_checked}
                                onChange={e => setParam("is_checked", e.target.checked)}
                                className="relative p-[2px] w-[14px] h-[14px]"
                            />
                            <p className="ml-[7px] text-[14px] leading-[26px] text-[#101D2C] font-medium">
                                Receive Notifications on Whatsapp and Email.
                            </p>
                        </label>
                    </div>
                    <div className="text-center">
                        <Button
                            type="button"
                            color="primary"
                            label="Submit"
                            onClick={sendEmail}
                            className="md:text-[16px] leading-[19.36px] tracking-[-0.21px] font-semibold xxl:h-[53px] h-[50px] w-[160px]"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div
            className={`fixed flex justify-center left-0 top-0 w-full h-full backdrop:bg-gray-50 z-[9999] ${!open ? 'hidden' : ''}`}
            style={{ background: "rgba(0,0,0,.32)" }}
        >
            <div className="relative max-w-[500px] w-full mx-auto my-[1.75rem]">
                <div className="modal-content">
                    <h2 className="p-[1rem] xl:text-[26px] text-[24px] text-center leading-[44px] tracking-[-0.47px] font-semibold text-[#101D2C]">
                        Are you sure that you want to leave?
                    </h2>
                    <p className="px-[30px] pt-[15px] pb-[5px] mb-[1rem] text-center font-medium">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        We're asking a few questions so we can find you the right pros, and send you quotes fast and
                        free!
                    </p>
                    <div className="px-[20px] pt-[15px] pb-[28px] flex items-center">
                        <div className="flex-1">
                            <button
                                className={`text-[16px] leading-[22.99px] tracking-[-0.25px] font-medium`}
                                onClick={() => router.push("/")}
                            >
                                Quit
                            </button>
                        </div>
                        <div>
                            <Button
                                type="button"
                                label="Continue"
                                onClick={() => setOpen(false)}
                                className="md:text-[16px] leading-[19.36px] tracking-[-0.21px] font-semibold h-[40px] w-[100px] rounded"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default GetStarted;