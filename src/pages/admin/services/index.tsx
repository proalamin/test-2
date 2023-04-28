import React, { useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import services from "@/data/services.json";
import { ImageOverlay } from "../../../utils/Admin/ImageOverlay";
import { Input, TextArea } from "../../../utils/Input";
import { ServiceInterface } from "../../../types";
import { Button } from "../../../utils/Button";

const ServicesPage = () => {
    const [service, setService] = useState<ServiceInterface[]>(services);

    const setParams = (index: number, key: string, value: string) => {
        const newService = [...service];
        newService[index][key] = value;
        setService(newService);
    };

    const save = async () => {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'services.json',
                updatedContent: JSON.stringify(service)
            }),
        });

        const data = await response.json();

        if (data.success) {
            alert('Changes saved successfully!');
        } else {
            alert('Error saving changes: ' + data.message);
        }
    };

    return <PrivateLayout title="Search My Expert - Services">
        <div className="flex items-center gap-[16px] p-[8px]">
            <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                Services
            </h3>
            <Button
                label="Save"
                type="button"
                className="px-[24px] py-[4px] rounded"
                onClick={save}
            />
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px] p-[8px]">
            {
                service.map((item, index) => {
                    return <div key={index} className="rounded border overflow-hidden bg-white">
                        <ImageOverlay
                            url={item.image}
                            onUploadSuccess={(url) => setParams(index, "image", url)}
                            className="w-full object-cover h-[200px]"
                        />
                        <div className="p-[10px]">
                            <Input
                                label="Title"
                                placeholder="Title"
                                value={item.title}
                                onChange={e => setParams(index, "title", e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                        <div className="p-[10px]">
                            <TextArea
                                rows={3}
                                label="Description"
                                placeholder="Description"
                                value={item.description}
                                onChange={e => setParams(index, "description", e.target.value)}
                                className="rounded admin-input"
                            />
                        </div>
                    </div>
                })
            }
        </div>
    </PrivateLayout>
}

export default ServicesPage;