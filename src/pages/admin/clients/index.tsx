import React, { useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Button } from "@/utils/Button";
import clientData from "@/data/clients.json";
import { Input } from "@/utils/Input";
import { Img } from "@/utils/Img";
import toast from "react-hot-toast";

const ClientsPage = () => {
    const [clients, setClients] = useState<any[]>(clientData);

    const setParams = (index: number, key: string, value: string): void => {
        const updatedItems = [...clients];
        updatedItems[index] = {
            ...updatedItems[index],
            [key]: value
        };
        setClients(updatedItems);
    }

    const addClient = () => {
        const newClients = [...clients];
        newClients.push({
            image: "",
            alt: ""
        });
        setClients(newClients);
    }

    const removeClient = (index: number) => {
        const newClients = [...clients];
        newClients.splice(index, 1);
        setClients(newClients);
    }

    const handleImageUploadSuccess = (index: number, url: string): void => {
        setParams(index, 'image', url);
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: any) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        await uploadFile(file, index);
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
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'clients.json',
                updatedContent: JSON.stringify(clients)
            }),
        });

        const data = await response.json();


        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
    };

    return <PrivateLayout title="Search My Expert - Clients">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Our Clients
                </h3>
                <Button
                    label="Save"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={save}
                />
                <Button
                    label="Add New"
                    type="button"
                    className="px-[24px] py-[4px] rounded"
                    onClick={addClient}
                />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {
                    clients.map((item: any, index) => {
                        return <div key={index} className="rounded border overflow-hidden bg-white">
                            <div className={`flex items-center justify-center rounded relative bg-[#7f7f7f] p-[12px]`}>
                                <Img
                                    src={item.image}
                                    alt="Image"
                                    className="w-full object-contain h-[200px] "
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
                                    <div className="p-2">
                                        <div className="cursor-pointer" onClick={() => removeClient(index)}>
                                            <Img
                                                src="/images/remove.svg"
                                                alt="upload"
                                                className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Alt Text"
                                    placeholder="Alt Text"
                                    value={item.alt}
                                    onChange={e => setParams(index, "alt", e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </PrivateLayout>
}

export default ClientsPage;