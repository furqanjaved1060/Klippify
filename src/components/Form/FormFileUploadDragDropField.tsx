import { useState } from "react";

type FormFileUploadDragDropFieldProps = {
    name: string;
    onChange: (name:string, value:File) => void;
    error?: string;
}

const FormFileUploadDragDropField: React.FC<FormFileUploadDragDropFieldProps> = ({name, onChange, error}) => {

    const [localError, setLocalError] = useState<string>("");

    const handleManualFileChange = (e:React.ChangeEvent<HTMLInputElement>):void => {

        const file = e.target.files?.[0];
        if (!file) return;

        const fileSizeMB = file.size / (1024*1024);
        const isValidType = file.type.startsWith("image/") || file.type.startsWith("video/");

        if (!isValidType || fileSizeMB > 20) {
            setLocalError("Only image or video files under 20MB are allowed.");
            setTimeout(() => {setLocalError("")}, 5000);
            e.target.value = ""
            return;
        }

        onChange(name, file);
    }

    const handleDragFileChange = (e:React.DragEvent<HTMLDivElement>):void => {

        e.preventDefault();

        const file = e.dataTransfer.files?.[0];
        if (!file) return;

        const fileSizeMB = file.size / (1024*1024);
        const isValidType = file.type.startsWith("image/") || file.type.startsWith("video/");

        if (!isValidType || fileSizeMB > 20) {
            setLocalError("Only image or video files under 20MB are allowed.");
            setTimeout(() => {setLocalError("")}, 5000);
            return;
        }

        onChange(name, file);
    }



    return (
        <div 
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDragFileChange}
        className="relative h-25 flex items-center justify-center bg-gradient-to-r from-[#FFFFFF] to-[#F4F9FF] border-2 border-[#D9D9D9] border-dashed hover:bg-none hover:bg-[#F4F9FF] cursor-pointer transition-colors">

            <div className="flex items-center gap-4">
                <UploadIcon color={"#007EFF"} size={"28"}/>
                <div>
                    <div className="flex items-center gap-1.25 text-xxs font-medium"><p>Drag and Drop file here or</p><label htmlFor={name} className="underline cursor-pointer">Choose File</label></div>
                    <p className="text-[9px] font-normal text-[#33333380]">Maximum File Size is 20MB</p>
                </div>
            </div>

            <input 
            type="file"
            name={name}
            id={name}
            accept="image/*,video/*"
            onChange={handleManualFileChange}
            className="w-fit hidden" />

            {localError && <div className="w-fit text-[8.5px] text-red-500 absolute bottom-24.5">{localError}</div>}
            {error && <div className="w-fit text-[8.5px] text-red-500 absolute bottom-24.5">{error}</div>}

        </div>
    )
}

export default FormFileUploadDragDropField;

type UploadIconProps = {
    color: string;
    size: string;
}

const UploadIcon: React.FC<UploadIconProps> = ({color, size}) => {
    return (
        <svg width={size} height={size} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.5 26.5V34.5C38.5 35.5609 38.0786 36.5783 37.3284 37.3284C36.5783 38.0786 35.5609 38.5 34.5 38.5H6.5C5.43913 38.5 4.42172 38.0786 3.67157 37.3284C2.92143 36.5783 2.5 35.5609 2.5 34.5V26.5M30.5 12.5L20.5 2.5M20.5 2.5L10.5 12.5M20.5 2.5V26.5" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}