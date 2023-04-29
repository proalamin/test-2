import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import data from "@/data/homepage.json";
import pageData from "@/data/homepage.json";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import toast from "react-hot-toast";

const HowItWorksPage = () => {
    const [params, setParams] = useState<any>({
        image: data.howItWorksData.image,
        title: data.howItWorksData.title,
        subtitle: data.howItWorksData.subtitle,
        description: data.howItWorksData.description,
        items: data.howItWorksData.items
    });

    const setParam = (key: string, value: any) => {
        setParams({
            ...params,
            [key]: value
        })
    }

    const setItemParam = (index: number, key: string, value: any) => {
        const items = params.items;
        items[index][key] = value;
        setParams({
            ...params,
            items: items
        })
    }

    const handleImageUploadSuccess = (index: number, url: string): void => {
        setItemParam(index, 'icon', url);
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: any) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        await uploadFile(file, index);
    };

    async function uploadFile (file: File, index: any) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            handleImageUploadSuccess(index, data.filePath);
        } else {
            alert('Error uploading file: ' + data.message);
        }
    }

    const save = async () => {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'homepage.json',
                updatedContent: JSON.stringify({ ...pageData, howItWorksData: params })
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
                    How It Works Section
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
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                    {
                        params.items.map((item: any, index: number) => {
                            return <div key={index} className="rounded border bg-white">
                                <div
                                    className={`flex items-center justify-center bg-[#7f7f7f] p-[12px] rounded relative`}>
                                    <Img
                                        src={item.icon}
                                        alt={item.title}
                                        className="w-full object-contain h-[100px] "
                                    />
                                    <div className="absolute top-0 left-0 flex justify-end w-full">
                                        <div className="p-2">
                                            <label htmlFor={`uploadImage-${index}`} className="cursor-pointer">
                                                <Img
                                                    src="/images/upload.svg"
                                                    alt="upload"
                                                    className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                                />
                                                <input className="hidden" type="file" id={`uploadImage-${index}`}
                                                       onChange={e => {
                                                           e.preventDefault();
                                                           const i = parseInt((`uploadImage-${index}`).split("-")[1]);
                                                           handleImageUpload(e, i)
                                                       }}/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-[10px]">
                                    <Input
                                        label="Title"
                                        placeholder="Title"
                                        value={item.title}
                                        onChange={e => setItemParam(index, 'title', e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="p-[10px]">
                                    <TextArea
                                        rows={3}
                                        label="Description"
                                        placeholder="Description"
                                        value={item.description}
                                        onChange={e => setItemParam(index, 'description', e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default HowItWorksPage