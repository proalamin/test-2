import React, { useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Button } from "@/utils/Button";
import awesomeNumberData from "@/data/awesomeNumbers.json";
import { Input } from "@/utils/Input";
import { Img } from "@/utils/Img";
import toast from "react-hot-toast";

const AwesomeNumberPage = () => {
    const [awesomeNumber, setAwesomeNumber] = useState<any[]>(awesomeNumberData);

    const setParams = (index: number, key: string, value: string): void => {
        const updatedItems = [...awesomeNumber];
        updatedItems[index] = {
            ...updatedItems[index],
            [key]: value
        };
        setAwesomeNumber(updatedItems);
    }

    const addNumber = () => {
        const newNumbers = [...awesomeNumber];
        newNumbers.push({
            number: "",
            title: ""
        });
        setAwesomeNumber(newNumbers);
    }

    const removeNumber = (index: number) => {
        const awesomeNumbers = [...awesomeNumber];
        awesomeNumbers.splice(index, 1);
        setAwesomeNumber(awesomeNumbers);
    }

    const save = async () => {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'awesomeNumbers.json',
                updatedContent: JSON.stringify(awesomeNumber)
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
                    Awesome Numbers
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
                    onClick={addNumber}
                />
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {
                    awesomeNumber.map((item: any, index) => {
                        return <div key={index}
                                    className="rounded border overflow-hidden bg-white relative">
                            <div className="cursor-pointer absolute top-0 right-0" onClick={() => removeNumber(index)}>
                                <Img
                                    src="/images/remove.svg"
                                    alt="upload"
                                    className="w-[35px] h-[35px] bg-white rounded-full p-2"
                                />
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Number"
                                    placeholder="Number"
                                    value={item.number}
                                    onChange={e => setParams(index, "number", e.target.value)}
                                    className="rounded admin-input"
                                />
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
                        </div>
                    })
                }
            </div>
        </div>
    </PrivateLayout>
}

export default AwesomeNumberPage;