import React, { useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Button } from "@/utils/Button";
import testimonialsData from "@/data/testimonials.json";
import { Input, TextArea } from "@/utils/Input";
import { Img } from "@/utils/Img";
import toast from "react-hot-toast";

const TestimonialsPage = () => {
    const [testimonials, setTestimonials] = useState<any[]>(testimonialsData);

    const setParams = (index: number, key: string, value: string): void => {
        const updatedItems = [...testimonials];
        updatedItems[index] = {
            ...updatedItems[index],
            [key]: value
        };
        setTestimonials(updatedItems);
    }

    const add = () => {
        const newTestimonial = [...testimonials];
        newTestimonial.push({
            title: "",
            description: "",
            date_of_experience: "",
            date: new Date().toISOString(),
            rating: 0,
            author_name: ""
        });
        setTestimonials(newTestimonial);
    }

    const remove = (index: number) => {
        const testimonial = [...testimonials];
        testimonial.splice(index, 1);
        setTestimonials(testimonial);
    }

    const save = async () => {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileUrl: 'testimonials.json',
                updatedContent: JSON.stringify(testimonials)
            }),
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Changes saved successfully!");
        } else {
            toast.error(`Error saving changes: ${data.message}`);
        }
    };

    return <PrivateLayout title="Search My Expert - Testimonials">
        <div className="flex flex-col gap-[16px]">
            <div className="flex items-center gap-[16px]">
                <h3 className="flex-1 text-[21px] tracking-[1.2px] font-semibold text-[#101D2C]">
                    Testimonials
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
                    onClick={add}
                />
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[16px]">
                {
                    testimonials.map((item: any, index) => {
                        return <div key={index}
                                    className="rounded border overflow-hidden bg-white relative">
                            <div className="cursor-pointer absolute top-[2px] right-[2px]"
                                 onClick={() => remove(index)}>
                                <Img
                                    src="/images/remove.svg"
                                    alt="Remove"
                                    className="w-[35px] h-[35px] bg-white rounded-full p-2"
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
                            <div className="p-[10px]">
                                <TextArea
                                    rows={3}
                                    label="Description"
                                    placeholder="Description"
                                    value={item.description}
                                    onChange={e => setParams(index, 'description', e.target.value)}
                                    className="rounded admin-input"
                                />
                            </div>
                            <div className="flex p-[5px]">
                                <div className="flex-1 p-[5px]">
                                    <Input
                                        label="Author Name"
                                        placeholder="Author Name"
                                        value={item.author_name}
                                        onChange={e => setParams(index, "author_name", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                                <div className="w-[100px] p-[5px]">
                                    <Input
                                        label="Rating"
                                        placeholder="Rating"
                                        value={item.rating}
                                        onChange={e => setParams(index, "rating", e.target.value)}
                                        className="rounded admin-input"
                                    />
                                </div>
                            </div>
                            <div className="p-[10px]">
                                <Input
                                    label="Date of Experience"
                                    placeholder="Date of Experience"
                                    value={item.date_of_experience}
                                    onChange={e => setParams(index, "date_of_experience", e.target.value)}
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

export default TestimonialsPage;