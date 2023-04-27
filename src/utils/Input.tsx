import React from 'react'

interface InputInterface {
    label?: string
    name?: string
    rows?: number
    type?: string
    value: string
    onChange: (e: any) => any
    error?: string
    placeholder?: string
    className?: string
    prefix?: unknown
}

export const Input: React.FC<InputInterface> = (
    {
        label,
        name,
        type,
        value,
        onChange,
        error,
        placeholder,
        className,
        prefix
    }
) => {
    return (
        <div className="input-container h-[100%]">
            {
                label && <label
                    htmlFor={name}
                    className="font-semibold text-[#101D2C] text-[14px] leading-[26px] mb-[5px] block"
                >
                    {label}
                </label>
            }
            <div className="relative">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`${prefix ? 'pr-[50px]' : ''} bg-[#FFFFFF] rounded-[31.5px] text-[#101D2C] text-[16px] leading-[26px] px-[30px] py-[17px] border-[0.3px] w-full placeholder:text-[16px] placeholder:text-[#101D2C] placeholder:leading-[26px] placeholder:font-normal ${className}`}
                    style={{
                        borderColor: 'rgba(75, 90, 105, .62)'
                    }}
                />
                <div className="absolute top-0 right-0 h-[100%] w-[50px] flex items-center justify-center">
                    {prefix}
                </div>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export const TextArea: React.FC<InputInterface> = (
    {
        label,
        name,
        rows,
        value,
        onChange,
        error,
        placeholder,
        className,
        prefix
    }
) => {
    return (
        <div className="input-container h-[100%]">
            {
                label && <label
                    htmlFor={name}
                    className="font-semibold text-[#101D2C] text-[14px] leading-[26px] mb-[5px] block"
                >
                    {label}
                </label>
            }
            <textarea
                name={name}
                value={value}
                rows={rows || 5}
                onChange={onChange}
                placeholder={placeholder}
                className={`${prefix ? 'pr-[50px]' : ''} bg-[#FFFFFF] rounded-[31.5px] text-[#101D2C] text-[16px] leading-[26px] px-[30px] py-[17px] border-[0.3px] w-full placeholder:text-[16px] placeholder:text-[#101D2C] placeholder:leading-[26px] placeholder:font-normal ${className}`}
                style={{
                    borderColor: 'rgba(75, 90, 105, .62)'
                }}
            />
            {error && <p className="error">{error}</p>}
        </div>
    )
}