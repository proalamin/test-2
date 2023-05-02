import React from "react";
import PrivateLayout from "@/components/Layout/privateLayout";

const Admin: React.FC = () => {
    return <PrivateLayout title="Search My Expert - Admin">
        <div className="flex items-center justify-center text-center h-full">
            <p className="font-medium tracking-[1px] text-[25px]">
                Welcome To <span className="text-primary">Search My Expert</span> Admin Panel
            </p>
        </div>
    </PrivateLayout>
}

export default Admin