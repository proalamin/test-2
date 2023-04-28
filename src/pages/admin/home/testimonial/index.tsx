import React, { useState } from "react";
import { Input, TextArea } from "@/utils/Input";
import PrivateLayout from "@/components/Layout/privateLayout";
import data from "@/data/homepage.json";

const TestimonialPage = () => {
    const [params, setParams] = useState<any>({
        testimonialsData: {
            title: data.testimonialData.title,
            subtitle: data.testimonialData.subtitle,
            description: data.testimonialData.description,
        }
    });
    return <PrivateLayout title="Search My Expert - Home Page Banner Section">
        <div className="flex flex-col gap-[20px]">
            <div className="rounded border bg-white p-[10px]">
                <div className="p-[10px]">
                    <Input
                        label="Title"
                        placeholder="Title"
                        value={params.testimonialsData?.title}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <Input
                        label="Subtitle"
                        placeholder="Subtitle"
                        value={params.testimonialsData?.subtitle}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
                <div className="p-[10px]">
                    <TextArea
                        rows={3}
                        label="Description"
                        placeholder="Description"
                        value={params.testimonialsData?.description}
                        onChange={() => null}
                        className="rounded admin-input"
                    />
                </div>
            </div>
        </div>
    </PrivateLayout>
}

export default TestimonialPage