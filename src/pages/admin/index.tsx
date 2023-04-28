import React from "react";
import PrivateLayout from "@/components/Layout/privateLayout";

const Admin: React.FC = () => {
    const save = async () => {
        const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        const data = await response.json();

        if (data.success) {
            alert('Changes saved successfully!');
        } else {
            alert('Error saving changes: ' + data.message);
        }
    };

    return <PrivateLayout title="Search My Expert - Admin">
        <div className="flex items-center justify-center text-center h-full">
            <p className="font-medium tracking-[1px] text-[25px]">
                Welcome To <span className="text-primary">Search My Expert</span> Admin Panel
            </p>
        </div>
    </PrivateLayout>
}

export default Admin