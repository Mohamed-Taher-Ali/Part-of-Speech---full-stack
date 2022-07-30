import React from 'react';
import { Colors } from 'src/config/enums';

export default function Button({
    disabled=false,
    style = {},
    onClick,
    text,
}: ButtonProps) {
    return (
        <>
            <button
                disabled={disabled}
                className='Button'
                style={{
                    width: '160px',
                    height: '60px',
                    fontSize: '22px',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    outline: 'transparent',
                    color: Colors.MAIN,
                    backgroundColor: Colors.FORE,
                    ...style,
                }}
                onClick={onClick}
            >{text}</button>

            <style>
                {`
                    .Button:hover {
                        background-color: ${Colors.MAIN} !important;
                        color: ${Colors.FORE} !important;
                    }
                `}
            </style>
        </>
    )
}

interface ButtonProps {
    text: string;
    disabled?: boolean;
    onClick: () => void;
    style?: React.CSSProperties;
}