import React, { useState } from 'react';
import { LoginInterface } from "@/types";
import { Img } from "@/utils/Img";
import { Input } from "@/utils/Input";
import { Button } from "@/utils/Button";
import { useRouter } from "next/router";
import Head from "next/head";

const Login = () => {

    const [params, setParams] = useState<LoginInterface>({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState<Boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();


    const setParam = (key: string, value: string) => {
        setParams({
            ...params,
            [key]: value
        });
    };

    const login = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        if (response.status === 200) {
            sessionStorage.setItem('isLoggedIn', 'true');
            router.push('/admin');
        } else {
            const data = await response.json();
            setErrorMessage(data.message);
        }
    }

    return <>
        <Head>
            <title>Search My Expert - Login</title>
        </Head>
        <div className="main">
            <div className="bg-[#F5F9FF] min-h-[100vh] gap-[20px] w-full flex flex-col items-center justify-center">
                <div className="px-[20px] mb-[40px]">
                    <Img
                        src="/images/logo_dark.svg"
                        alt="Logo"
                        className="w-[300px]"
                    />
                </div>
                <div className="max-w-[350px] w-full">
                    <Input
                        placeholder="Username"
                        value={params.username}
                        onChange={e => setParam("username", e.target.value)}
                    />
                </div>
                <div className="max-w-[350px] w-full">
                    <Input
                        placeholder="Password"
                        value={params.password}
                        type={showPassword ? "text" : "password"}
                        onChange={e => setParam("password", e.target.value)}
                        prefix={
                            !showPassword ?
                                <a onClick={() => setShowPassword(true)}>
                                    <Img src="/images/eye.svg" alt="Eye" className="w-[20px] cursor-pointer"/>
                                </a> :
                                <a onClick={() => setShowPassword(false)}>
                                    <Img src="/images/eye-off.svg" alt="Eye" className="w-[20px] cursor-pointer"/>
                                </a>
                        }
                    />
                </div>
                <div>
                    {
                        errorMessage &&
                        <p className="text-[13px] font-semibold text-left w-full text-[#101D2C]">
                            {errorMessage}
                        </p>}
                </div>
                <div>
                    <Button
                        label="Login"
                        type="button"
                        color="primary"
                        className="xxl:text-[19px] xxl:leading-[22.99px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] tracking-[-0.22px] md:w-[145px] w-[115px] xl:h-[44px] md:h-[38px] h-[35px]"
                        onClick={login}
                    />
                </div>
            </div>
        </div>
    </>
}

export default Login