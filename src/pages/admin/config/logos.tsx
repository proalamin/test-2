import React, { useContext, useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Button } from "@/utils/Button";
import { LoaderContext } from "@/context/LoaderContext";
import pageData from "@/data/config.json";
import toast from "react-hot-toast";
import { ImageOverlay } from "@/utils/Admin/ImageOverlay";

const LogoConfig: React.FC = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [params, setParams] = useState<any>({
        light: pageData.logos.light,
        dark: pageData.logos.dark
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
                    logos: params
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
                    Logos Config
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
            </div>
            <div className="flex gap-[16px]">
                <div className="flex-1">
                    <div className="rounded border bg-white p-[10px]">
                        <ImageOverlay
                            url={params.light}
                            withOverlay
                            onUploadSuccess={(url) => setParam("light", url)}
                            className="object-contain h-full p-[10px]"
                            wrapperHeightClass="h-full"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="rounded border bg-white p-[10px]">
                        <ImageOverlay
                            url={params.dark}
                            withOverlay
                            onUploadSuccess={(url) => setParam("dark", url)}
                            className="object-contain h-full p-[10px]"
                            wrapperHeightClass="h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default LogoConfig;