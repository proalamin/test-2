import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";
import PrivateLayout from "@/components/Layout/privateLayout";
import data from "@/data/homepage.json";
import pageData from "@/data/homepage.json";
import { Title } from "@/utils/Admin/Title";
import { Button } from "@/utils/Button";
import toast from "react-hot-toast";

const AboutPage = () => {
    const [params, setParams] = useState<any>({
        image: data.aboutData.image,
        mobileImage: data.aboutData.mobileImage,
        title: data.aboutData.title,
        subtitle: data.aboutData.subtitle,
        description: data.aboutData.description,
        featured_1: data.aboutData.featured_1,
        featured_2: data.aboutData.featured_2
    });


    const setParam = (key: string, value: string) => {
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
                updatedContent: JSON.stringify({ ...pageData, aboutData: params })
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
                    About Us Section
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="flex md:flex-row flex-col gap-[20px]">
                <div className="md:flex-1 rounded border bg-white overflow-hidden md:h-[350px]">
                    <Title title="Web Version"/>
                    <ImageOverlay
                        url={params.image}
                        onUploadSuccess={(url) => setParam('image', url)}
                        className="object-contain h-[300px] p-[12px]"
                    />
                </div>
                <div className="md:flex-1 rounded border bg-white overflow-hidden md:h-[350px]">
                    <Title title="Mobile Version"/>
                    <ImageOverlay
                        url={params.mobileImage}
                        onUploadSuccess={(url) => setParam('mobileImage', url)}
                        className="object-contain h-[300px] p-[12px]"
                    />
                </div>
            </div>
            <div className="rounded border bg-white">
                <div className="p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.title}
                            onChange={e => setParam('title', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Subtitle"
                            placeholder="Subtitle"
                            value={params.subtitle}
                            onChange={e => setParam('subtitle', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.description}
                            onChange={e => setParam('description', e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-[20px]">
                <div className="md:flex-1 rounded border bg-white">
                    <Title title="Featured 1 - (Left Side Content)"/>
                    <div className="px-[10px]">
                        <div className="p-[10px]">
                            <TextArea
                                rows={3}
                                label="Content 1 - Bold"
                                placeholder="Bold Text"
                                value={params.featured_1.content_1.bold}
                                onChange={e => setParam('featured_1', {
                                    ...params.featured_1,
                                    content_1: { ...params.featured_1.content_1, bold: e.target.value }
                                })}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <TextArea
                                rows={3}
                                label="Content 1 - Normal"
                                placeholder="Normal Text"
                                value={params.featured_1.content_1.normal}
                                onChange={e => setParam('featured_1', {
                                    ...params.featured_1,
                                    content_1: { ...params.featured_1.content_1, normal: e.target.value }
                                })}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <TextArea
                                rows={3}
                                label="Content 2"
                                placeholder="Content 2"
                                value={params.featured_1.content_2}
                                onChange={e => setParam('featured_1', {
                                    ...params.featured_1,
                                    content_2: e.target.value
                                })}
                                className="rounded admin-input"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 rounded border bg-white">
                    <Title title="Featured 2 - (Right Side Content)"/>
                    <div className="px-[10px]">
                        <div className="p-[10px]">
                            <TextArea
                                rows={3}
                                label="Content 1 - Bold"
                                placeholder="Bold Text"
                                value={params.featured_2.content_1.bold}
                                onChange={e => setParam('featured_2', {
                                    ...params.featured_2,
                                    content_1: { ...params.featured_2.content_1, bold: e.target.value }
                                })}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <TextArea
                                rows={3}
                                label="Content 2"
                                placeholder="Normal Text"
                                value={params.featured_2.content_2}
                                onChange={e => setParam('featured_2', {
                                    ...params.featured_2,
                                    content_2: e.target.value
                                })}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <TextArea
                                rows={3}
                                label="Content 3"
                                placeholder="Normal Text"
                                value={params.featured_2.content_3}
                                onChange={e => setParam('featured_2', {
                                    ...params.featured_2,
                                    content_3: e.target.value
                                })}
                                className="rounded admin-input"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default AboutPage