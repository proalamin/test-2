import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import data from "@/data/homepage.json";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";

const WhyUsPage = () => {
    const [params, setParams] = useState<any>({
        whyChooseData: {
            title: data.whyChooseData.title,
            subtitle: data.whyChooseData.subtitle,
            description: data.whyChooseData.description,
            items: data.whyChooseData.items
        }
    });

    return <PrivateLayout title="Search My Expert - Home Page Banner Section">
        <div className="flex flex-col gap-[20px]">
            <div className="rounded border bg-white p-[10px]">
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.whyChooseData?.title}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Subtitle"
                        placeholder="Subtitle"
                        value={params.whyChooseData?.subtitle}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <TextArea
                        rows={3}
                        label="Description"
                        placeholder="Description"
                        value={params.whyChooseData?.description}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.whyChooseData?.items[0].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.whyChooseData?.items[0].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.whyChooseData?.items[0].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.whyChooseData?.items[1].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.whyChooseData?.items[1].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.whyChooseData?.items[1].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.whyChooseData?.items[2].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.whyChooseData?.items[2].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.whyChooseData?.items[2].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.whyChooseData?.items[3].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.whyChooseData?.items[3].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.whyChooseData?.items[3].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.whyChooseData?.items[4].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.whyChooseData?.items[4].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.whyChooseData?.items[4].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default WhyUsPage