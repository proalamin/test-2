import React from "react";
import { Img } from "@/utils/Img";

interface ImageOverlayInterface {
    url: string;
    update: () => any;
    remove?: () => any;
    onUploadSuccess: (url: string) => any;
}

export const ImageOverlay: React.FC<ImageOverlayInterface> = (props) => {
    const { url, update, remove, onUploadSuccess } = props;

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            onUploadSuccess(reader.result as string);
        };

        reader.readAsDataURL(file);

        // Upload the file to the server
        await uploadFile(file);
    };

    async function uploadFile (file: File) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                onUploadSuccess(data.filePath);
            } else {
                alert('Error uploading file: ' + data.message);
            }
        } catch (error) {
            alert('Error uploading file: ' + error.message);
        }
    }

    return <div className="w-[150px] flex items-center justify-center h-[150px] bg-[#7f7f7f] p-[12px] rounded relative">
        <Img
            src={url}
            alt="Image"
            className="w-full"
        />
        <div className="absolute top-0 left-0 flex justify-end w-full p-2">
            <label htmlFor="uploadImage" className="cursor-pointer">
                <Img
                    src="/images/upload.svg"
                    alt="upload"
                    className="w-[35px] h-[35px] bg-white rounded-full p-2"
                />
                <input className="hidden" type="file" id="uploadImage" onChange={handleImageUpload}/>
            </label>
        </div>
    </div>
}