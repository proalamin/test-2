import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import data from "@/data/homepage.json";
import pageData from "@/data/homepage.json";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";
import { Button } from "@/utils/Button";
import toast from "react-hot-toast";

const StayOnTopPage = () => {
    const [params, setParams] = useState<any>({
        image: data.stayOnTopData.image,
        title: data.stayOnTopData.title,
        subtitle: data.stayOnTopData.subtitle,
        featured_1: data.stayOnTopData.featured_1,
        featured_2: data.stayOnTopData.featured_2
    });

    const setParam = (key: string, value: any) => {
        setParams({
            ...params,
            [key]: value
        });
    }

    const setFeatured1 = (key: string, value: any) => {
        setParams({
            ...params,
            featured_1: {
                ...params.featured_1,
                [key]: value
            }
        });
    }

    const setFeatured2 = (key: string, value: any) => {
        setParams({
            ...params,
            featured_2: {
                ...params.featured_2,
                [key]: value
            }
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
                updatedContent: JSON.stringify({ ...pageData, stayOnTopData: params })
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
    };

    return <PrivateLayout title="Search My Expert - About Us Section">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Stay on Top Section
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
                            label="Title"
                            placeholder="Title"
                            value={params.title}
                            onChange={e => setParam("title", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Subtitle"
                            placeholder="Subtitle"
                            value={params.subtitle}
                            onChange={e => setParam("subtitle", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
                <div className="flex md:flex-row flex-col items-start gap-[20px]">
                    <div className="md:flex-1 rounded border bg-white overflow-hidden md:h-[350px]">
                        <ImageOverlay
                            url={params.featured_1.image}
                            withOverlay
                            onUploadSuccess={(url) => setFeatured1("image", url)}
                            className="object-contain h-full p-[10px]"
                            wrapperHeightClass="h-full"
                        />
                    </div>
                    <div className="md:flex-1 rounded border bg-white">
                        <div className="p-[10px]">
                            <div className="p-[10px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={params.featured_1.title}
                                    onChange={e => setFeatured1("title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[10px]">
                                <TextArea
                                    rows={5}
                                    label="Description"
                                    placeholder="Description"
                                    value={params.featured_1.description}
                                    onChange={e => setFeatured1("description", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col items-start gap-[20px]">
                    <div className="md:flex-1 rounded border bg-white">
                        <div className="p-[10px]">
                            <div className="p-[10px]">
                                <Input
                                    label="Title"
                                    placeholder="Title"
                                    value={params.featured_2.title}
                                    onChange={e => setFeatured2("title", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="p-[10px]">
                                <TextArea
                                    rows={5}
                                    label="Description"
                                    placeholder="Description"
                                    value={params.featured_2.description}
                                    onChange={e => setFeatured2("description", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 rounded border bg-white overflow-hidden md:h-[350px]">
                        <ImageOverlay
                            url={params.featured_2.image}
                            withOverlay
                            onUploadSuccess={(url) => setFeatured2("image", url)}
                            className="object-contain h-full p-[10px]"
                            wrapperHeightClass="h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default StayOnTopPage