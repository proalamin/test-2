import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";
import PrivateLayout from "@/components/Layout/privateLayout";
import data from "@/data/homepage.json";
import { Title } from "@/utils/Admin/Title";

const AboutPage = () => {
    const [params, setParams] = useState<any>({
        title: data.bannerData.title,
        subtitle: data.bannerData.subtitle,
        header: data.bannerData.header,
        image: data.bannerData.image,
        button: data.bannerData.button,
        ourClients: data.bannerData.ourClients,
        awesomeNumbers: data.bannerData.awesomeNumbers
    });

    return <PrivateLayout title="Search My Expert - About Us Section">
        <div className="flex md:flex-row flex-col gap-[20px] pb-[20px]">
            <div className="md:flex-1 rounded border bg-white overflow-hidden md:h-[350px]">
                <ImageOverlay
                    url={params.image}
                    onUploadSuccess={(url) => console.log(url)}
                    className="object-cover h-full"
                    wrapperHeightClass="h-full"
                />
            </div>

            <div className="md:flex-1 rounded border bg-white">
                <div className="p-[10px]">
                    <div className="p-[10px]">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Subtitle"
                            placeholder="Subtitle"
                            value={params.title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.subtitle}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
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
                            value={params.subtitle}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Content 1 - Normal"
                            placeholder="Normal Text"
                            value={params.subtitle}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Content 2"
                            placeholder="Content 2"
                            value={params.subtitle}
                            onChange={() => null}
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
                            value={params.subtitle}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Content 2"
                            placeholder="Normal Text"
                            value={params.subtitle}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={3}
                            label="Content 3"
                            placeholder="Normal Text"
                            value={params.subtitle}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default AboutPage