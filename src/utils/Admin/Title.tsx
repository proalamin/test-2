import React from "react";

interface TitleInterface {
    title: string;
}

export const Title: React.FC<TitleInterface> = ({ title }) => {
    return <h3 className="p-[10px] text-[15px] font-medium border-b-2 text-[#101D2C]">
        {title}
    </h3>
}