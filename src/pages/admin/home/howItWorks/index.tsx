import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";
import PrivateLayout from "@/components/Layout/privateLayout";
import { homePageInterface } from "@/types";
import data from "@/data/homepage.json";

const HowItWorksPage = () => {
    const [params, setParams] = useState<homePageInterface>({
        howItWorksData: {
            image: data.howItWorksData.image,
            title: data.howItWorksData.title,
            subtitle: data.howItWorksData.subtitle,
            description: data.howItWorksData.description,
            items: data.howItWorksData.items
        }
    });
    return <PrivateLayout title="Search My Expert - Home Page Banner Section">
        <div className="flex flex-col gap-[20px]">
            <div className="rounded border bg-white p-[10px]">
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.howItWorksData?.title}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Subtitle"
                        placeholder="Subtitle"
                        value={params.howItWorksData?.subtitle}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <TextArea
                        rows={3}
                        label="Description"
                        placeholder="Description"
                        value={params.howItWorksData?.description}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[20px]">
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.howItWorksData?.items[0].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.howItWorksData?.items[0].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.howItWorksData?.items[0].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.howItWorksData?.items[1].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.howItWorksData?.items[1].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.howItWorksData?.items[1].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.howItWorksData?.items[2].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.howItWorksData?.items[2].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.howItWorksData?.items[2].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
                <div className="rounded border bg-white">
                    <ImageOverlay
                        withOverlay={true}
                        url={params.howItWorksData?.items[3].icon}
                        onUploadSuccess={(url) => console.log(url)}
                        className="max-h-[100px] w-full"
                    />
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.howItWorksData?.items[3].title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.howItWorksData?.items[3].description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default HowItWorksPage