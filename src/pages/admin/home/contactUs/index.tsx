import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import data from "@/data/homepage.json";

const ContactPage = () => {
    const [params, setParams] = useState<any>({
        contactUsData: {
            title: data.contactUsData.title,
            subtitle: data.contactUsData.subtitle,
            description: data.contactUsData.description,
        }
    });
    return <PrivateLayout title="Search My Expert - Home Page Banner Section">
        <div className="flex flex-col gap-[20px]">
            <div className="rounded border bg-white p-[10px]">
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.contactUsData?.title}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Subtitle"
                        placeholder="Subtitle"
                        value={params.contactUsData?.subtitle}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <TextArea
                        rows={3}
                        label="Description"
                        placeholder="Description"
                        value={params.contactUsData?.description}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default ContactPage