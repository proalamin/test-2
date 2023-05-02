import React, { useContext, useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Button } from "@/utils/Button";
import { Input } from "@/utils/Input";
import { LoaderContext } from "@/context/LoaderContext";
import pageData from "@/data/config.json";
import toast from "react-hot-toast";

const SocialConfig: React.FC = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [params, setParams] = useState<any>({
        facebook: pageData.socialMedia.facebook,
        twitter: pageData.socialMedia.twitter,
        instagram: pageData.socialMedia.instagram,
        linkedin: pageData.socialMedia.linkedin,
        youtube: pageData.socialMedia.youtube
    });

    const setParam = (key: string, value: any) => {
        setParams({
            ...params,
            [key]: value
        });
    }

    const save = async () => {
        setIsLoading(true);
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'config.json',
                updatedContent: JSON.stringify({
                    ...pageData,
                    socialMedia: params
                })
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
        setIsLoading(false);
    };

    return <PrivateLayout title="Config Page">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Social Media Config
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
                            label="Facebook"
                            placeholder="Facebook Url"
                            value={params.facebook}
                            onChange={e => setParam("facebook", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Twitter"
                            placeholder="Twitter Url"
                            value={params.twitter}
                            onChange={e => setParam("twitter", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Instagram"
                            placeholder="Instagram Url"
                            value={params.instagram}
                            onChange={e => setParam("instagram", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Linked In"
                            placeholder="Linked In Url"
                            value={params.linkedin}
                            onChange={e => setParam("linkedin", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                    <div className="p-[10px]">
                        <Input
                            label="Youtube"
                            placeholder="Youtube Url"
                            value={params.youtube}
                            onChange={e => setParam("youtube", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default SocialConfig;