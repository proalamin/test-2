import React, { useContext, useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import pageData from "@/data/homepage.json";
import { Button } from "@/utils/Button";
import toast from "react-hot-toast";
import { LoaderContext } from "@/context/LoaderContext";

const SeoPage = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [params, setParams] = useState<any>({
        title: pageData.seoData?.title,
        description: pageData.seoData?.description
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
                fileUrl: 'homepage.json',
                updatedContent: JSON.stringify({
                    ...pageData,
                    seoData: params
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
    return <PrivateLayout title="Search My Expert - Home Page Banner Section">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Meta Title & Description Section
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
                        <TextArea
                            rows={3}
                            label="Description"
                            placeholder="Description"
                            value={params.description}
                            onChange={e => setParam("description", e.target.value)}
                            className="rounded admin-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default SeoPage