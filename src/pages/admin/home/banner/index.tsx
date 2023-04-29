import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import pageData from "@/data/homepage.json";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";
import { Button } from "@/utils/Button";
import toast from "react-hot-toast";

const BannerPage = () => {
    const [params, setParams] = useState<any>({
        title: pageData.bannerData.title,
        subtitle: pageData.bannerData.subtitle,
        header: pageData.bannerData.header,
        image: pageData.bannerData.image,
        button: pageData.bannerData.button
    });

    const setBannerParams = (key: string, value: string) => {
        const newParams = { ...params };
        newParams[key] = value;
        setParams(newParams);
    }

    const save = async () => {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'homepage.json',
                updatedContent: JSON.stringify({ ...pageData, bannerData: params })
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
                    Banner Section
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="rounded border bg-white overflow-hidden md:h-[450px]">
                    <ImageOverlay
                        url={params.image}
                        onUploadSuccess={(url) => setBannerParams('image', url)}
                        className="object-cover h-full"
                        wrapperHeightClass="h-full"
                    />
                </div>

                <div className="rounded border bg-white p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.title}
                            onChange={e => setBannerParams('title', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Sub Title"
                            placeholder="Sub Title"
                            value={params.subtitle}
                            onChange={e => setBannerParams('subtitle', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default BannerPage