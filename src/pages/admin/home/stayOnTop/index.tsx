import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import { homePageInterface } from "@/types";
import data from "@/data/homepage.json";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";

const StayOnTopPage = () => {
    const [params, setParams] = useState<homePageInterface>({
        stayOnTopData: {
            title: data.stayOnTopData.title,
            subtitle: data.stayOnTopData.subtitle,
            featured_1: data.stayOnTopData.featured_1,
            featured_2: data.stayOnTopData.featured_2
        }
    });
    const [featured1PreviewUrl, setFeatured1PreviewUrl] = useState<string>(params.stayOnTopData?.featured_1?.image);
    const [featured2PreviewUrl, setFeatured2PreviewUrl] = useState<string>(params.stayOnTopData?.featured_2?.image);

    return <PrivateLayout title="Search My Expert - About Us Section">
        <div className="rounded border bg-white p-[10px] mb-[20px]">
            <div className="p-[10px]">
                <Input
                    label="Title"
                    placeholder="Title"
                    value={params.stayOnTopData?.title}
                    onChange={() => null}
                    className="rounded admin-input"
                />
            </div>
            <div className="p-[10px]">
                <Input
                    label="Subtitle"
                    placeholder="Subtitle"
                    value={params.stayOnTopData?.subtitle}
                    onChange={() => null}
                    className="rounded admin-input"
                />
            </div>
        </div>
        <div className="flex md:flex-row flex-col items-start gap-[20px] pb-[20px]">
            <div className="md:flex-1 rounded border bg-white overflow-hidden md:h-[350px]">
                <ImageOverlay
                    url={featured1PreviewUrl}
                    withOverlay
                    onUploadSuccess={(url) => setFeatured1PreviewUrl(url)}
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
                            value={params.stayOnTopData?.featured_1.title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={5}
                            label="Description"
                            placeholder="Description"
                            value={params.stayOnTopData?.featured_1.description}
                            onChange={() => null}
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
                            value={params.stayOnTopData?.featured_2.title}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <TextArea
                            rows={5}
                            label="Description"
                            placeholder="Description"
                            value={params.stayOnTopData?.featured_2.description}
                            onChange={() => null}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
            <div className="md:flex-1 rounded border bg-white overflow-hidden md:h-[350px]">
                <ImageOverlay
                    url={featured2PreviewUrl}
                    withOverlay
                    onUploadSuccess={(url) => setFeatured2PreviewUrl(url)}
                    className="object-contain h-full p-[10px]"
                    wrapperHeightClass="h-full"
                />
            </div>
        </div>
    </PrivateLayout>
}

export default StayOnTopPage