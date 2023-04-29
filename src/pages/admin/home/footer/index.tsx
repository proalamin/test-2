import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import data from "@/data/homepage.json";
import pageData from "@/data/homepage.json";
import { Button } from "@/utils/Button";
import toast from "react-hot-toast";

const FooterPage = () => {
    const [params, setParams] = useState<any>({
        email: data.footerData.legal.email,
        phone: data.footerData.legal.phone,
        address: data.footerData.legal.address,
        copyRight: data.footerData.copyRight,
    });

    const setParam = (key: string, value: any) => {
        setParams({
            ...params,
            [key]: value
        });
    }

    const save = async () => {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'homepage.json',
                updatedContent: JSON.stringify({
                    ...pageData,
                    footerData: {
                        ...pageData.footerData,
                        legal: {
                            ...pageData.footerData.legal,
                            email: params.email,
                            phone: params.phone,
                            address: params.address,
                        },
                        copyRight: params.copyRight
                    }
                })
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
    };
    return <PrivateLayout title="Search My Expert - Home Page Banner Section">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Footer Section
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="rounded border bg-white p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Address"
                            placeholder="Address"
                            value={params.address}
                            onChange={e => setParam("address", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Email"
                            placeholder="Email"
                            value={params.email}
                            onChange={e => setParam("email", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Phone"
                            placeholder="Phone"
                            value={params.phone}
                            onChange={e => setParam("phone", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Copy Right"
                            placeholder="Copy Right"
                            value={params.copyRight}
                            onChange={e => setParam("copyRight", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default FooterPage