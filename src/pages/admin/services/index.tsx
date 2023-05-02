import React, { useContext, useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import services from "@/data/services.json";
import { Input, TextArea } from "@/utils/Input";
import { Button } from "@/utils/Button";
import { Img } from "@/utils/Img";
import toast from "react-hot-toast";
import { LoaderContext } from "@/context/LoaderContext";

const ServicesPage = () => {
    const { setIsLoading } = useContext(LoaderContext);
    const [service, setService] = useState<any[]>(services);

    const setParams = (index: number, key: string, value: string): void => {
        const updatedItems = [...service];
        updatedItems[index] = {
            ...updatedItems[index],
            [key]: value
        };
        setService(updatedItems);
    };

    const handleImageUploadSuccess = (index: number, url: string): void => {
        setParams(index, 'image', url);
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: any) => {
        if (!e.target.files || e.target.files.length === 0) return;
        setIsLoading(true);
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        await uploadFile(file, index);
        setIsLoading(false);
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
        setIsLoading(true);
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
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
        setIsLoading(false);
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
                        <div className={`flex items-center justify-center rounded relative`}>
                            <Img
                                src={item.image}
                                alt="Image"
                                className="w-full object-cover h-[200px] "
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